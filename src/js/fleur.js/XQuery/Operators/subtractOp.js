/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XQueryEngine[Fleur.XQueryX.subtractOp] = function(ctx, children, callback) {
	Fleur.XQueryEngine[children[0][1][0][0]](ctx, children[0][1][0][1], function(n) {
		var op1;
		var a1 = Fleur.Atomize(n);
		op1 = Fleur.toJSNumber(a1);
		if (op1[0] < 0) {
			Fleur.callback(function() {callback(a1);});
			return;
		}
		Fleur.XQueryEngine[children[1][1][0][0]](ctx, children[1][1][0][1], function(n) {
			var op2;
			var a2 = Fleur.Atomize(n);
			op2 = Fleur.toJSNumber(a2);
			if (op1[0] < 0) {
				Fleur.callback(function() {callback(a2);});
				return;
			}
			a1.data = "" + (op1[1] - op2[1]);
			a1.schemaTypeInfo = Fleur.numericTypes[Math.max(op1[0], op2[0])];
			Fleur.callback(function() {callback(a1);});
		});
	});
};