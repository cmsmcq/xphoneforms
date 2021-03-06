/*eslint-env node*/
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module manager
 * @description  === Manager HTTP Server ===
 * Manager HTTP Server for building apps dynamically
 */
		
global.fs = require('fs');
global.http = require('http');
global.path = require('path');
global.url = require('url');
global.os = require('os');
//var child_process = require('child_process');

const port = 81;
const contentTypesByExtension = {
	'.css':  'text/css',
	'.csv':  'text/csv',
	'.gif':  'image/gif',
	'.htm':  'text/html',
	'.html': 'text/html',
	'.ico':  'image/vnd.microsoft.icon',
	'.jpeg': 'image/jpeg',
	'.jpg':  'image/jpeg',
	'.js':   'application/javascript',
	'.json': 'application/json',
	'.png':  'image/png',
	'.svg':  'image/svg+xml',
	'.txt':  'text/plain',
	'.xml':  'application/xml; charset=utf-8',
	'.xsl':  'text/xsl'
};

global.http.createServer(function(request, response) {
	var body, uri, method, context, newcontext, newuri, headers, filename, newfilename, isnewfile, putname, filestats, contentType, ifmodifiedsince, lastmodified, composed;
	var versionInfo, commentStart, commentEnd, upper;
	body = "";
	var sendfile = function(err, file) {
		if (err) {        
			response.writeHead(err.errno === 34 ? 404 : 500, {'Content-Type': 'text/plain'});
			response.end(err.errno === 34 ? '404 Not Found' : '500 Internal server error - ' + err);
			return;
		}
		headers = {};
		contentType = contentTypesByExtension[global.path.extname(filename)];
		if (contentType) {
			headers['Content-Type'] = contentType;
		}
		if (lastmodified) {
			headers['Last-Modified'] = lastmodified;
		}
		response.writeHead(200, headers);
		response.end(file, 'binary');
		if (newfilename) {
	        global.fs.writeFile(newfilename, file, err => { if (err) console.log(err);});
		}
	};
	var execfile = function(err, file) {
		if (err) {        
			response.writeHead(err.errno === 34 ? 404 : 500, {'Content-Type': 'text/plain'});
			response.end(err.errno === 34 ? '404 Not Found' : '500 Internal server error - ' + err);
			return;
		}
		var moduri = uri.split('/');
		moduri.pop();
		moduri = moduri.join('/') + '/js/fleur.js';
		headers = {};
		lastmodified = (new Date()).toUTCString();
		headers['Last-Modified'] = lastmodified;
		global.http.get({
			host: 'localhost',
			port: port,
			path: moduri
		}, function(modresp) {
	        var modbody = '';
	        modresp.on('data', function(d) {
	            modbody += d;
	        });
	        modresp.on('end', function() {
	        	var fleursrc = './tmp/fleur.js';
	        	global.fs.writeFile(fleursrc, modbody, err => {
	        		if (err) {
	        			console.log(err);
	        		} else {
	        			global.fleurmtime = global.fs.statSync(fleursrc).mtime.toISOString();
	        			var Fleur = require(fleursrc);
	        			var doc = new Fleur.Document();
						//var res = doc.evaluate(file, doc, new Fleur.XPathNSResolver(), Fleur.XPathResult.ANY_TYPE, null).toXQuery();
						doc.evaluate(file).then(
							function(res) {
								headers['Content-Type'] = res.mediatype;
								response.writeHead(200, headers);
								response.end(res.serialize(), 'binary');
								delete require.cache[require.resolve(fleursrc)];
							},
							function(err) {
								contentType = contentTypesByExtension['.txt'];
								if (contentType) {
									headers['Content-Type'] = contentType;
								}
								response.writeHead(200, headers);
								response.end(err.toXQuery(), 'binary');
								delete require.cache[require.resolve(fleursrc)];
							}
						);
	        		}
	        	});
	        });
		});
	};
	var composeResponse = function(components) {
		var fname, descriptor, newcomponents;
		if (components.length === 0) {
			composed = commentStart + '\n' + versionInfo.Licence + '\n' + commentEnd + '\n\n' + composed;
			Object.keys(versionInfo).map(info => {if (info.startsWith("Version")) composed = composed.replace(new RegExp('\\$\\$\\$' + info + '\\$\\$\\$', 'mg'), versionInfo[info]);});
			sendfile(false, composed);
			return;
		}
		fname = components.shift();
		if (fname instanceof Array) {
			composed += fname[0];
			composeResponse(components);
			return;
		}
		global.fs.readFile(fname, 'binary', function(err, file) {
			if (err) {
				sendfile(err, composed);
				return;
			}
			if (fname.endsWith(global.path.sep + 'project.json')) {
				descriptor = JSON.parse(file);
				if (!versionInfo) {
					versionInfo = descriptor;
				}
				if (descriptor.Header) {
					composed += descriptor.Header;
				}
				newcomponents = descriptor.Components.map(comp => (typeof comp === 'string') ? global.path.join(global.path.dirname(fname), comp) : comp).concat(components);
				if (descriptor.Footer) {
					newcomponents.push([descriptor.Footer]);
				}
				composeResponse(newcomponents);
				return;
			}
			if (fname.endsWith('.js') || fname.endsWith('.css')) {
				file = file.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/mg,'').replace('"use strict";','').replace(/(\r|\n)+(\s|\r|\n)*(\r|\n)+/mg, '\n');
			} else if (fname.endsWith('.xml')) {
				file = file.replace(/(?:\<\!--(?:[\s\S]*?)--\>)/mg,'').replace(/(\r|\n)+(\s|\r|\n)*(\r|\n)+/mg, '\n');
			}
			composed += file.replace(/^\n/gm,'').replace(/\n$/gm,'') + '\n';
			composeResponse(components);
		});
	};
	request.on('data', function (chunk) {
		body += chunk;
	});
	request.on('end', function () {
		uri = global.url.parse(request.url).pathname;
		method = request.method;
		filename = global.path.join(process.cwd(), uri);
		newfilename = null;
		lastmodified = null;
		if (uri === '/favicon.ico') {
			global.fs.readFile(filename, 'binary', sendfile);
			return;
		}
		if (uri === '/echo.htm') {
			global.fs.readFile(filename, 'binary', (err, file) => {
				if (err) {
					sendfile(err, file);
				} else {
					file = file.replace('$$$body$$$', body.replace(/</gm, '&lt;').replace(/>/gm, '&gt;'));
					file = file.replace('$$$request$$$', JSON.stringify({
						'httpVersion': request.httpVersion,
						'method': request.method,
						'url': request.url,
						'headers': request.headers,
						'trailers': request.trailers
					}, null, ' '));
					sendfile(err, file);
				}
			});
			return;
		}
		while (uri.endsWith('/')) {
			uri = uri.substr(0, uri.length - 1);
		}
		if (uri === '') {
			if (method === 'GET') {
				response.writeHead(301, {'Location': '/stable/manager/index.xml'});
				response.end();
			} else {
				response.writeHead(403, {'Content-Type': 'text/plain'});
				response.end('403 Forbidden');
			}
			return;
		}
		filename = global.path.join(process.cwd(), uri);
		newcontext = null;
		context = uri.split('/')[1];
		if (context.indexOf('2') !== -1) {
			if (method !== 'GET') {
				response.writeHead(403, {'Content-Type': 'text/plain'});
				response.end('403 Forbidden');
				return;
			}
			context = context.split('2');
			newcontext = context[1];
			context = context[0];
			filename = filename.split(global.path.sep);
			filename.splice(filename.length - 3, 1, context);
			filename = filename.join(global.path.sep);
			newfilename = filename.split(global.path.sep);
			newfilename.splice(newfilename.length - 3, 1, newcontext);
			newfilename = newfilename.join(global.path.sep);
		}
		if (!global.fs.existsSync(filename)) {
			newuri = uri.split('/');
			newuri.splice(0, 2);
			newuri = newuri.join('/');
			upper = !global.fs.existsSync(global.path.join(process.cwd(), 'www', newuri.split('/')[0]));
			if (!upper) {
				filename = global.path.join(process.cwd(), 'www', newuri);
			} else {
				filename = global.path.join(process.cwd(), '..', newuri);
			}
			if (method === 'PUT') {
				filename = filename.split(global.path.sep);
				putname = filename.pop();
				filename = filename.join(global.path.sep);
			}
			if (global.fs.existsSync(filename)) {
				filestats = global.fs.statSync(filename);
				if (filestats.isDirectory()) {
					if (method === 'GET') {
						response.writeHead(301, {'Location': uri + '/index.' + (global.fs.existsSync(filename + global.path.sep + 'index.html') ? 'html' : global.fs.existsSync(filename + global.path.sep + '/index.htm') ? 'htm' : global.fs.existsSync(filename + global.path.sep + '/index.xqy') ? 'xqy' : 'xml')});
						response.end();
					} else if (method === 'PUT') {
						filename = global.path.join(filename, putname);
						isnewfile = !global.fs.existsSync(filename);
						global.fs.writeFile(filename, body, err => {
							if (err) {
							} else if (isnewfile) {
								response.writeHead(201, {'Content-Type': 'text/plain'});
								response.end('201 Created');
							} else {
								response.writeHead(204, {'Content-Type': 'text/plain'});
								response.end('204 No Content');
							}
						});
					} else {
						response.writeHead(403, {'Content-Type': 'text/plain'});
						response.end('403 Forbidden' + ' method:' + method);
					}
					return;
				}
			}
			newfilename = null;
			if (!global.fs.existsSync(filename)) {
				if (method !== 'GET') {
					response.writeHead(403, {'Content-Type': 'text/plain'});
					response.end('403 Forbidden' + ' - filename:' + filename);
					return;
				}
				filename = filename.split(global.path.sep);
				if (!upper) {
					filename.splice(filename.length - 4, 2, context);
					filename = filename.join(global.path.sep);
				} else {
					filename = global.path.join(process.cwd(), context, filename[filename.length - 2], filename[filename.length - 1]);
				}
			}
			if (!global.fs.existsSync(filename)) {
				response.writeHead(404, {'Content-Type': 'text/plain'});
				response.end('404 Not Found');
				return;
			}
		}
		filestats = global.fs.statSync(filename);
		if (filestats.isDirectory()) {
			if (!global.fs.existsSync(filename + global.path.sep + 'project.json')) {
				response.writeHead(301, {'Location': uri + '/index.' + (global.fs.existsSync(filename + global.path.sep + 'index.html') ? 'html' : global.fs.existsSync(filename + global.path.sep + 'index.htm') ? 'htm' : 'xml')});
				response.end();
				return;
			}
			lastmodified = (new Date()).toUTCString();
			composed = "";
			versionInfo = null;
			if (filename.endsWith('.js') || filename.endsWith('.css')) {
				commentStart = '/*';
				commentEnd = '*/';
			} else if (filename.endsWith('.xsl')) {
				commentStart = '<!--';
				commentEnd = '-->';
			}
			composeResponse([filename + global.path.sep + 'project.json']);
			return;
		}
		switch(method) {
			case 'GET':
				if (filename.endsWith('.xqy')) {
					global.fs.readFile(filename, 'binary', execfile);
				} else {
					ifmodifiedsince = request.headers['if-modified-since'];
					if (ifmodifiedsince && (new Date(ifmodifiedsince)).getTime() >= filestats.mtime.getTime()) {
						response.writeHead(304, {'Content-Type': 'text/plain'});
						response.end('304 Not Modified');
						return;
					}
					lastmodified = filestats.mtime.toUTCString();
					global.fs.readFile(filename, 'binary', sendfile);
				}
				break;
			default:
				response.writeHead(405, {'Content-Type': 'text/plain'});
				response.end('405 Method Not Allowed');
		}
	});
}).listen(port);
