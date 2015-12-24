/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XQueryEngine[Fleur.XQueryX.idivOp] = function(ctx, children) {
	var op1, op2, divres;
	Fleur.XQueryEngine[children[0][1][0][0]](ctx, children[0][1][0][1]);
	op1 = Fleur.toJSNumber(ctx._result);
	Fleur.XQueryEngine[children[1][1][0][0]](ctx, children[1][1][0][1]);
	op2 = Fleur.toJSNumber(ctx._result);
	divres = op1[1] / op2[1];
	ctx._result.data = "" + (Math.floor(divres) + (divres >= 0 ? 0 : 1));
	ctx._result.schemaTypeInfo = Fleur.Type_integer;
};