/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XPathFunctions_math["exp10#1"] = new Fleur.Function("http://www.w3.org/2005/xpath-functions/math", "exp10",
	function(arg) {
		if (arg === null) {
			return null;
		}
		return Math.pow(10, arg);},
	null, [{type: Fleur.numericTypes, occurence: "?"}], false, false, {type: Fleur.Type_double, occurence: "?"});