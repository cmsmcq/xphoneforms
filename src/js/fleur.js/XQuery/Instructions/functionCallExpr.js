/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XQueryEngine[Fleur.XQueryX.functionCallExpr] = function(ctx, children, callback) {
	var fname = children[0][1][0];
	var uri = ctx.env.nsresolver.lookupNamespaceURI(" function");
	var args = children[1][1];
	if (children[0][1][1]) {
		if (children[0][1][1][0] === Fleur.XQueryX.URI) {
			uri = children[0][1][1][1][0];
		} else if (children[0][1][1][0] === Fleur.XQueryX.prefix && ctx.env.nsresolver) {
			uri = ctx.env.nsresolver.lookupNamespaceURI(children[0][1][1][1][0]);
		}
	}
	var xf = Fleur.XPathFunctions[uri][fname + "#" + args.length] || Fleur.XPathFunctions[uri][fname];
	if (!uri || !xf) {
		Fleur.callback(function() {callback(Fleur.error(ctx, "XPST0017"));});
		return;
	}
	if (xf.jsfunc || xf.xqxfunc) {
		var argscalc = function(xqxargs, effargs, f) {
			if (args.length === 0) {
				f(effargs);
			} else {
				var xqxarg = xqxargs.shift();
				Fleur.XQueryEngine[xqxarg[0]](ctx, xqxarg[1], function(n) {
					if (xf.argtypes[effargs.length].type === Fleur.Node) {
						effargs.push(n);
					} else {
						var a = Fleur.Atomize(n);
						effargs.push(a);
					}
					argscalc(xqxargs, effargs, f);
				});
			}
		};
		argscalc(args, [], function(effargs) {
			var a = new Fleur.Text();
			a.schemaTypeInfo = xf.restype.type;
			a.data = "";
			if (xf.jsfunc) {
				var jsargs = [];
				try {
					effargs.forEach(function(effarg, iarg) {
						var op;
						var carg = xf.argtypes[iarg];
						if (effarg === Fleur.EmptySequence) {
							if (!carg.occurence || (carg.occurence !== "?" && carg.occurence !== "*")) {
								a.nodeType = Fleur.Node.TEXT_NODE;
								a.schemaTypeInfo = Fleur.Type_error;
								a._setNodeNameLocalNamePrefix("http://www.w3.org/2005/xqt-errors", "err:XPTY0004");
								throw new Error("error");
							}
							jsargs.push(null);
						} else if (carg.type === Fleur.numericTypes || Fleur.numericTypes.indexOf(carg.type) !== -1) {
							op = Fleur.toJSNumber(effarg);
							if (op[0] < 0) {
								a = effarg;
								throw new Error("error");
							}
							jsargs.push(op[1]);
						} else if (carg.type === Fleur.Type_string) {
							op = Fleur.toJSString(effarg);
							if (op[0] < 0) {
								a = effarg;
								throw new Error("error");
							}
							jsargs.push(op[1]);
						} else if (carg.type === Fleur.Type_boolean) {
							op = Fleur.toJSBoolean(effarg);
							if (op[0] < 0) {
								a = effarg;
								throw new Error("error");
							}
							jsargs.push(op[1]);
						} else if (carg.type === Fleur.Type_dateTime) {
						} else {
							jsargs.push(effarg);
						}
					});
				} catch (e) {
					Fleur.callback(function() {callback(a);});
					return;
				}
				if (xf.needctx) {
					jsargs.push(ctx);
				}
				var convback = function(vret) {
					if (vret === null) {
						a = Fleur.EmptySequence;
					} else if (vret === Number.POSITIVE_INFINITY) {
						a.data = "INF";
					} else if (vret === Number.NEGATIVE_INFINITY) {
						a.data = "-INF";
					} else if (typeof vret === "number" || typeof vret === "boolean") {
						a.data = String(vret);
					} else if (typeof vret === "string") {
						a.data = vret;
					} else if (typeof vret.getMonth === "function") {
						var o = vret.getTimezoneOffset();
						a.data = ("000" + vret.getFullYear()).slice(-4) + "-" + ("0" + (vret.getMonth() + 1)).slice(-2) + "-" + ("0" + vret.getDate()).slice(-2) + "T" + ("0" + vret.getHours()).slice(-2) + ":" + ("0" + vret.getMinutes()).slice(-2) + ":" + ("0" + vret.getSeconds()).slice(-2) + "." + ("00" + vret.getMilliseconds()).slice(-3) + (o < 0 ? "+" : "-") + ("0" + Math.floor(Math.abs(o)/60)).slice(-2) + ":" + ("0" + Math.floor(Math.abs(o) % 60)).slice(-2);
					} else {
						a = vret;
					}
					Fleur.callback(function() {callback(a);});
				};
				if (xf.needcallback) {
					jsargs.push(convback);
					xf.jsfunc.apply(null, jsargs);
					return;
				}
				convback(xf.jsfunc.apply(null, jsargs));
			}
		});
	} else {
		xf(ctx, args, function(n) {
			Fleur.callback(function() {callback(n);});
		});
	}
};