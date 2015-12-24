/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
/**
 * @callback
 */
Fleur.XQueryEngine[Fleur.XQueryX.elementTest] = function(ctx, children) {
	if (ctx._stepctx.curr.nodeType !== Fleur.Node.ELEMENT_NODE) {
		ctx._stepctx.ignore = true;
	}
};