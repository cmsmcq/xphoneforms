/*eslint-env browser*/
/*globals xsltforms_d0 XsltForms_browser XsltForms_globals xsltforms_initImpl*/
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module in_script
 * @description /**'''XSLTForms Javascript for insertion in script elements'''
 */

if (typeof xsltforms_d0 === "undefined") {
	(function () {
		var initelts = document.getElementsByTagName("script");
		var elts = [];
		var i, l;
		for (i = 0, l = initelts.length; i < l; i++) {
			elts[i] = initelts[i];
		}
		initelts = null;
		var root;
		for (i = 0, l = elts.length; i < l; i++) {
			if (elts[i].src.indexOf("xsltforms.js") !== -1) {
				root = elts[i].src.replace("xsltforms.js", "");
			}
		}
		var newelt;
		newelt = document.createElement("link");
		newelt.setAttribute("rel", "stylesheet");
		newelt.setAttribute("type", "text/css");
		newelt.setAttribute("href", root + "xsltforms.css");
		document.getElementsByTagName("head")[0].appendChild(newelt);
		var addLoadListener = function(func) {
			if (window.addEventListener) {
				window.addEventListener("load", func, false);
			} else if (document.addEventListener) {
				document.addEventListener("load", func, false);
			} else if (window.attachEvent) {
				window.attachEvent("onload", func);
			} else if (typeof window.onload !== "function") {
				window.onload = func;
			} else {
				var oldonload = window.onload;
				window.onload = function() {
					oldonload();
					func();
				};
			}
		};
		var xftrans = function () {
			var conselt = document.createElement("div");
			conselt.setAttribute("id", "xsltforms_console");
			document.getElementsByTagName("body")[0].appendChild(conselt);
			conselt = document.createElement("div");
			conselt.setAttribute("id", "statusPanel");
			conselt.setAttribute("style", "display: none; z-index: 99; top: 294.5px; left: 490px;");
			conselt.innerHTML = "... Loading ...";
			document.getElementsByTagName("body")[0].appendChild(conselt);
			XsltForms_browser.dialog.show('statusPanel');
			if (!(document.documentElement.childNodes[0].nodeType === 8 || (XsltForms_browser.isIE && document.documentElement.childNodes[0].childNodes[1] && document.documentElement.childNodes[0].childNodes[1].nodeType === 8))) {
				var comment = document.createComment("HTML elements and Javascript instructions generated by XSLTForms $$$VersionName$$$ ($$$VersionNumber$$$) - Copyright (C) $$$VersionYear$$$ <agenceXML> - Alain COUTHURES - http://www.agencexml.com");
				document.documentElement.insertBefore(comment, document.documentElement.firstChild);
			}
			var initelts2 = document.getElementsByTagName("script");
			var elts2 = [];
			var i2, l2;
			for (i2 = 0, l2 = initelts2.length; i2 < l2; i2++) {
				elts2[i2] = initelts2[i2];
			}
			initelts2 = null;
			var res;
			for (i2 = 0, l2 = elts2.length; i2 < l2; i2++) {
				if (elts2[i].type === "text/xforms") {
					var dbefore = new Date();
					res = XsltForms_browser.transformText('<html xmlns="http://www.w3.org/1999/xhtml"><body>' + elts2[i2].text + '</body></html>', root + "xsltforms.xsl", false);
					var dafter = new Date();
					XsltForms_globals.transformtime = dafter - dbefore;
					var sp = XsltForms_globals.stringSplit(res, "XsltForms_MagicSeparator");
					var mainjs = "xsltforms_d0 = new Date(); /* xsltforms-mainform " + sp[1] + sp[2] + " xsltforms-mainform */ }";
					newelt = document.createElement("script");
					newelt.setAttribute("id", "xsltforms-generated-script");
					newelt.setAttribute("type", "text/javascript");
					if (XsltForms_browser.isIE) {
						newelt.text = mainjs;
					} else {
						var scripttxt = document.createTextNode(mainjs);
						newelt.appendChild(scripttxt);
					}
					//var panel = document.getElementById("statusPanel");
					//panel.parentNode.removeChild(panel);
					document.getElementsByTagName("body")[0].appendChild(newelt);
					var subbody = "<!-- xsltforms-mainform " + sp[4] + " xsltforms-mainform -->";
					elts2[i2].outerHTML = subbody;
				}
			}
		};
		var xsltforms_init = function () {
			try {
				xftrans();
				xsltforms_initImpl();
			} catch(e) {
				alert("XSLTForms Exception\n--------------------------\n\nIncorrect Javascript code generation:\n\n"+(typeof(e.stack)==="undefined"?"":e.stack)+"\n\n"+(e.name?e.name+(e.message?"\n\n"+e.message:""):e));
			}
		};
		if (document.readyState === "complete") {
			xsltforms_init();
		} else {
			addLoadListener(xsltforms_init);
		}
	})();
}