/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XPathFunctions_math["pow#2"] = new Fleur.Function("http://www.w3.org/2005/xpath-functions/math", "pow",
	function(x, y) {
		if (x === null) {
			return null;
		}
		return Math.pow(x, y);},
	null, [{type: Fleur.numericTypes, occurence: "?"}, {type: Fleur.numericTypes}], false, false, {type: Fleur.Type_double, occurence: "?"});