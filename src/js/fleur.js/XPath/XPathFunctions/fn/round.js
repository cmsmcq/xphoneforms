/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XPathFunctions_fn["round"] = function(ctx, children, callback) {
	if (children.length === 2) {
		Fleur.XQueryEngine[children[1][0]](ctx, children[1][1], function(n) {
			var a2 = Fleur.Atomize(n);
			var op2 = Fleur.toJSNumber(a2);
			if (op2[0] < 0) {
				Fleur.callback(function() {callback(a2);});
				return;
			}
			var precision = op2[1];
			Fleur.XPathNumberFunction(ctx, children.slice(0, 1), function(v) {
				return Math.round(v * Math.pow(10, precision)) / Math.pow(10, precision);
			}, function(a) {
				return a.schemaTypeInfo;
			}, callback);
		});
		return;
	}
	Fleur.XPathNumberFunction(ctx, children, Math.round, function(a) {
		return a.schemaTypeInfo;
	}, callback);
};