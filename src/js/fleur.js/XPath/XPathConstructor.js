/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XPathConstructor = function(ctx, children, schemaType, stringreg, others, formatvalue, callback) {
	if (children.length !== 1) {
		Fleur.error(ctx, "XPST0017");
		return;
	}
	Fleur.XQueryEngine[children[0][0]](ctx, children[0][1], function(n) {
		var a = Fleur.Atomize(n);
		if (a.schemaTypeInfo === Fleur.Type_error || a.schemaTypeInfo === schemaType) {
			callback(a);
			return;
		}
		if (a.schemaTypeInfo === Fleur.Type_string || a.schemaTypeInfo === Fleur.Type_untypedAtomic) {
			if (!a.data || (stringreg && !(stringreg.test(a.data)))) {
				callback(Fleur.error(ctx, "FORG0001"));
				return;
			}
		} else {
			others(a);
			if (a.schemaTypeInfo === Fleur.Type_error) {
				callback(a);
				return;
			}
		}
		a.schemaTypeInfo = schemaType;
		if (formatvalue(a)) {
			callback(Fleur.error(ctx, "FORG0001"));
			return;
		}
		callback(a);
	});
};

Fleur.XPathStringFunction = function(ctx, children, f, schemaTypeInfo, callback) {
	if (children.length > 1) {
		callback(Fleur.error(ctx, "XPST0017"));
		return;
	}
	var cb = function(n, forceString) {
		var a = Fleur.Atomize(n);
		if (a.schemaTypeInfo === Fleur.Type_error) {
			callback(a);
			return;
		}
		if (a === Fleur.EmptySequence) {
			a = new Fleur.Text();
			a.schemaTypeInfo = Fleur.Type_string;
			a.data = "";
		}
		if (forceString === "force") {
			a.schemaTypeInfo = Fleur.Type_string;
		}
		if (a.schemaTypeInfo === Fleur.Type_string || a.schemaTypeInfo === Fleur.Type_untypedAtomic) {
			a.data = "" + f(a.data);
			if (schemaTypeInfo) {
				a.schemaTypeInfo = schemaTypeInfo;
			}
			callback(a);
		} else {
			callback(Fleur.error(ctx, "XPST0017"));
		}
	};
	if (children.length === 0) {
		cb(ctx._curr, "force");
	} else {
		Fleur.XQueryEngine[children[0][0]](ctx, children[0][1], cb);
	}
};

Fleur.XPathStringContentFunction = function(ctx, children, f, schemaTypeInfo, callback) {
	var arg1, arg2;
	if (children.length === 3) {
		callback(Fleur.error(ctx, "FOCH0002"));
		return;
	}
	if (children.length !== 2) {
		callback(Fleur.error(ctx, "XPST0017"));
		return;
	}
	Fleur.XQueryEngine[children[0][0]](ctx, children[0][1], function(n) {
		var a = Fleur.Atomize(n);
		if (a.schemaTypeInfo === Fleur.Type_error) {
			callback(a);
			return;
		}
		if (a === Fleur.EmptySequence) {
			arg1 = "";
		} else {
			if (a.schemaTypeInfo !== Fleur.Type_string && a.schemaTypeInfo !== Fleur.Type_untypedAtomic) {
				callback(Fleur.error(ctx, "XPST0017"));
				return;
			}
			arg1 = a.data;
		}
		Fleur.XQueryEngine[children[1][0]](ctx, children[1][1], function(n) {
			a = Fleur.Atomize(n);
			if (a.schemaTypeInfo === Fleur.Type_error) {
				callback(a);
				return;
			}
			if (a === Fleur.EmptySequence) {
				a = new Fleur.Text();
				arg2 = "";
			} else {
				if (a.schemaTypeInfo !== Fleur.Type_string && a.schemaTypeInfo !== Fleur.Type_untypedAtomic) {
					callback(Fleur.error(ctx, "XPST0017"));
					return;
				}
				arg2 = a.data;
			}
			a.data = "" + f(arg1, arg2);
			a.schemaTypeInfo = schemaTypeInfo;
			callback(a);
		});
	});
};

Fleur.XPathNumberFunction = function(ctx, children, f, schemaTypeInfo, callback) {
	if (children.length !== 1) {
		callback(Fleur.error(ctx, "XPST0017"));
		return;
	}
	Fleur.XQueryEngine[children[0][0]](ctx, children[0][1], function(n) {
		var value;
		var a = Fleur.Atomize(n);
		if (a === Fleur.EmptySequence || a.schemaTypeInfo === Fleur.Type_error) {
			callback(a);
			return;
		}
		if (a.schemaTypeInfo === Fleur.Type_integer) {
			value = f(parseInt(a.data, 10));
			if (schemaTypeInfo !== Fleur.Type_double && isNaN(value)) {
				callback(Fleur.error(ctx, "FORG0001"));
				return;
			} else {
				a.data = value === Number.POSITIVE_INFINITY ? "INF" : value === Number.NEGATIVE_INFINITY ? "-INF" : isNaN(value) ? "NaN" : ("" + value).replace("e+", "e");
			}
		} else if (a.schemaTypeInfo === Fleur.Type_decimal || a.schemaTypeInfo === Fleur.Type_float || a.schemaTypeInfo === Fleur.Type_double) {
			value = f(a.data === "INF" ? Number.POSITIVE_INFINITY : a.data === "-INF" ? Number.NEGATIVE_INFINITY : a.data === "NaN" ? Number.NaN : parseFloat(a.data));
			a.data = value === Number.POSITIVE_INFINITY ? "INF" : value === Number.NEGATIVE_INFINITY ? "-INF" : isNaN(value) ? "NaN" : ("" + value).replace("e+", "e");
		} else if (a.schemaTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema", "integer", Fleur.TypeInfo.DERIVATION_RESTRICTION)) {
			value = f(parseInt(a.data, 10));
			if (schemaTypeInfo !== Fleur.Type_double && isNaN(value)) {
				callback(Fleur.error(ctx, "FORG0001"));
				return;
			} else {
				a.data = value === Number.POSITIVE_INFINITY ? "INF" : value === Number.NEGATIVE_INFINITY ? "-INF" : isNaN(value) ? "NaN" : ("" + value).replace("e+", "e");
			}
		} else if (a.schemaTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema", "decimal", Fleur.TypeInfo.DERIVATION_RESTRICTION) || a.schemaTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema", "float", Fleur.TypeInfo.DERIVATION_RESTRICTION) || a.schemaTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema", "double", Fleur.TypeInfo.DERIVATION_RESTRICTION)) {
			value = f(parseFloat(a.data));
			if (schemaTypeInfo !== Fleur.Type_double && isNaN(value)) {
				callback(Fleur.error(ctx, "FORG0001"));
				return;
			} else {
				a.data = value === Number.POSITIVE_INFINITY ? "INF" : value === Number.NEGATIVE_INFINITY ? "-INF" : isNaN(value) ? "NaN" : ("" + value).replace("e+", "e");
			}
		} else {
			callback(Fleur.error(ctx, "XPTY0004"));
			return;
		}
		if (schemaTypeInfo) {
			if (typeof schemaTypeInfo === "function") {
				a.schemaTypeInfo = schemaTypeInfo(a);
			} else {
				a.schemaTypeInfo = schemaTypeInfo;
			}
		}
		callback(a);
	});
};

Fleur.XPathTestOpFunction = function(ctx, children, f, callback) {
	Fleur.XQueryEngine[children[0][1][0][0]](ctx, children[0][1][0][1], function(n) {
		var a1 = Fleur.Atomize(n);
		if (a1 === Fleur.EmptySequence || a1.schemaTypeInfo === Fleur.Type_error) {
			callback(a1);
			return;
		}
		if (a1.nodeType === Fleur.Node.SEQUENCE_NODE) {
			callback(Fleur.EmptySequence);
			return;
		}
		if (Fleur.numericTypes.indexOf(a1.schemaTypeInfo) !== -1) {
			a1.schemaTypeInfo = Fleur.Type_double;
		} else if (a1.schemaTypeInfo === Fleur.Type_untypedAtomic) {
			a1.schemaTypeInfo = Fleur.Type_string;
		}
		Fleur.XQueryEngine[children[1][1][0][0]](ctx, children[1][1][0][1], function(n) {
			var a2 = Fleur.Atomize(n);
			if (a2 === Fleur.EmptySequence || a2.schemaTypeInfo === Fleur.Type_error) {
				callback(a2);
				return;
			}
			if (a2.nodeType === Fleur.Node.SEQUENCE_NODE) {
				callback(Fleur.EmptySequence);
				return;
			}
			if (Fleur.numericTypes.indexOf(a2.schemaTypeInfo) !== -1) {
				a2.schemaTypeInfo = Fleur.Type_double;
			} else if (a2.schemaTypeInfo === Fleur.Type_untypedAtomic) {
				a2.schemaTypeInfo = Fleur.Type_string;
			}
			if (a1.schemaTypeInfo !== a2.schemaTypeInfo) {
				callback(Fleur.error(ctx, "FORG0006"));
				return;
			}
			a1.data = "" + f(a1, a2);
			a1.schemaTypeInfo = Fleur.Type_boolean;
			callback(a1);
		});
	});
};

Fleur.XPathGenTestOpFunction = function(ctx, children, f, callback) {
	Fleur.XQueryEngine[children[0][1][0][0]](ctx, children[0][1][0][1], function(n) {
		var a1 = Fleur.Atomize(n);
		if (a1 === Fleur.EmptySequence || a1.schemaTypeInfo === Fleur.Type_error) {
			callback(a1);
			return;
		}
		if (a1.nodeType === Fleur.Node.SEQUENCE_NODE) {
			a1.childNodes.forEach(function(a) {
				if (Fleur.numericTypes.indexOf(a.schemaTypeInfo) !== -1) {
					a.schemaTypeInfo = Fleur.Type_double;
				} else if (a.schemaTypeInfo === Fleur.Type_untypedAtomic) {
					a.schemaTypeInfo = Fleur.Type_string;
				}
			});
		} else {
			if (Fleur.numericTypes.indexOf(a1.schemaTypeInfo) !== -1) {
				a1.schemaTypeInfo = Fleur.Type_double;
			} else if (a1.schemaTypeInfo === Fleur.Type_untypedAtomic) {
				a1.schemaTypeInfo = Fleur.Type_string;
			}
		}
		Fleur.XQueryEngine[children[1][1][0][0]](ctx, children[1][1][0][1], function(n) {
			var a2 = Fleur.Atomize(n);
			var i1, res = false, b, l;
			if (a2 === Fleur.EmptySequence || a2.schemaTypeInfo === Fleur.Type_error) {
				callback(a2);
				return;
			}
			if (a2.nodeType === Fleur.Node.SEQUENCE_NODE) {
				a2.childNodes.forEach(function(a) {
					if (Fleur.numericTypes.indexOf(a.schemaTypeInfo) !== -1) {
						a.schemaTypeInfo = Fleur.Type_double;
					} else if (a.schemaTypeInfo === Fleur.Type_untypedAtomic) {
						a.schemaTypeInfo = Fleur.Type_string;
					}
				});
			} else {
				if (Fleur.numericTypes.indexOf(a2.schemaTypeInfo) !== -1) {
					a2.schemaTypeInfo = Fleur.Type_double;
				} else if (a2.schemaTypeInfo === Fleur.Type_untypedAtomic) {
					a2.schemaTypeInfo = Fleur.Type_string;
				}
			}
			do {
				if (a1.nodeType === Fleur.Node.SEQUENCE_NODE) {
					i1 = a1.childNodes.shift();
					if (a1.childNodes.length === 1) {
						a1 = a1.childNodes[0];
					}
				} else {
					i1 = a1;
					a1 = Fleur.EmptySequence;
				}
				if (a2.nodeType === Fleur.Node.SEQUENCE_NODE) {
					for (b = 0, l = a2.childNodes.length; b < l && !res; b++) {
						res = f(i1, a2.childNodes[b]);
					}
				} else {
					res = f(i1, a2);
				}
				if (res) {
					break;
				}
			} while(a1 !== Fleur.EmptySequence)
			a1 = new Fleur.Text();
			a1.data = "" + res;
			a1.schemaTypeInfo = Fleur.Type_boolean;
			callback(a1);
		});
	});
};