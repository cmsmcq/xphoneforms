/*eslint-env browser*/
/*globals XsltForms_idManager */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module VarRef
 * @description  === XsltForms_varRef Class ===
 * XPath Expression Class for variables get
 * * constructor function
 */
		
function XsltForms_varRef(vname) {
	this.name = vname;
}


		
/**
 * * '''evaluate''' method : gets the variable value
 */

XsltForms_varRef.prototype.evaluate = function(ctx) {
		if (!ctx.varresolver || !ctx.varresolver[this.name]) {
			return "";
		}
		if (typeof ctx.varresolver[this.name] === "string") {
			var varxf = XsltForms_idManager.find(ctx.varresolver[this.name]).xfElement;
			for (var i = 0, l = varxf.depsNodesRefresh.length; i < l ; i++) {
				ctx.addDepNode(varxf.depsNodesRefresh[i]);
			}
			return varxf.boundnodes;
		}
		return ctx.varresolver[this.name][0];
};