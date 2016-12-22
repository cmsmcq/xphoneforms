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
	if (children[0][1][1]) {
		if (children[0][1][1][0] === Fleur.XQueryX.URI) {
			uri = children[0][1][1][1][0];
		} else if (children[0][1][1][0] === Fleur.XQueryX.prefix && ctx.env.nsresolver) {
			uri = ctx.env.nsresolver.lookupNamespaceURI(children[0][1][1][1][0]);
		}
	}
	if (!uri || !Fleur.XPathFunctions[uri][fname]) {
		Fleur.callback(function() {callback(Fleur.error(ctx, "XPST0017"));});
		return;
	}
	Fleur.XPathFunctions[uri][fname](ctx, children[1][1], function(n) {
		Fleur.callback(function() {callback(n);});
	});
};