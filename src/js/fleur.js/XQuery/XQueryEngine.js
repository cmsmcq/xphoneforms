/*eslint-env browser, node*/
/*globals Fleur */
"use strict";
/**
 * @author Alain Couthures <alain.couthures@agencexml.com>
 * @licence LGPL - See file 'LICENSE.md' in this project.
 * @module 
 * @description 
 */
Fleur.XQueryEngine = [];
Fleur.XQueryEngine[Fleur.XQueryX.NCName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.QName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.URIExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.allowingEmpty] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.annotation] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.annotationName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.anyElementTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.anyFunctionTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.anyItemType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.anyKindTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.argExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.argumentPlaceholder] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.arguments] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.arithmeticOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.atomicType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.attributeConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.attributeList] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.attributeName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.attributeValue] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.attributeValueExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.baseUriDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.bindingSequence] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.boundarySpaceDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.castExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.castableExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.catchClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.catchErrorList] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.catchExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.collation] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.comparisonOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedAttributeConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedCommentConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedDocumentConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedElementConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedNamespaceConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedPIConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.computedTextConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.constantExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.constructionDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.constructorFunctionExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.contentExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.contextItemDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.contextItemExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.copyNamespacesDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.countClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.currentItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.decimalFormatDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.decimalFormatName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.decimalFormatParam] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.decimalFormatParamName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.decimalFormatParamValue] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.defaultCollationDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.defaultElementNamespace] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.defaultNamespaceCategory] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.defaultNamespaceDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.dynamicFunctionInvocationExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.elementConstructor] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.elementContent] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.elementName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.elseClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.emptyOrderingDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.emptyOrderingMode] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.encoding] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.endExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.eqOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.equalOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.exceptOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.expr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.extensionExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.external] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.externalDefinition] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.filterExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.firstOperand] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.flworExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.forClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.forClauseItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.forExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.forLetClauseItemExtensions] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.functionBody] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.functionDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.functionItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.functionName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.geOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.generalComparisonOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.greaterThanOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.greaterThanOrEqualOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.groupByClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.groupVarInitialize] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.groupingSpec] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.gtOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.ifClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.ifThenElseExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.inheritMode] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.inlineFunctionExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.instanceOfExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.intersectOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.isOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.itemType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.kindTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.leOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.lessThanOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.lessThanOrEqualOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.letClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.letClauseItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.letExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.libraryModule] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.logicalOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.ltOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.mainModule] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.module] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.moduleDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.moduleImport] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.name] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.namedFunctionRef] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.namespaceDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.namespaceDeclaration] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.namespacePrefix] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.namespaceTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.neOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nextItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nillable] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nodeAfterOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nodeBeforeOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nodeComparisonOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.notEqualOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.occurrenceIndicator] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.operand] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.operatorExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.optionContents] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.optionDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.optionName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.optional] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderByClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderByExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderBySpec] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderComparisonOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderModifier] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderedExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderingKind] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.orderingModeDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.param] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.paramList] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.paramTypeList] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.parenthesizedItemType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.piTarget] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.piTargetExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.piValueExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.positionalVariableBinding] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.pragma] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.pragmaContents] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.pragmaName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.predicateExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.predicates] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prefix] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prefixExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.preserveMode] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.previousItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prolog] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prologPartOneItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prologPartTwoItem] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.quantifiedExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.quantifiedExprInClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.quantifier] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.queryBody] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.rangeSequenceExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.resultExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.returnClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.schemaAttributeTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.schemaElementTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.schemaImport] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.secondOperand] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.sequenceType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.sequenceTypeUnion] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.setOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.simpleMapExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.singleType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.slidingWindowClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.sourceExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.stable] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.star] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.startExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.stringConcatenateOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.stringOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.switchCaseExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.switchExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.switchExprCaseClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.switchExprDefaultClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.tagName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.tagNameExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.targetLocation] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.targetNamespace] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.thenClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.treatExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.tryCatchExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.tryClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.tumblingWindowClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typeDeclaration] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typeName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typedFunctionTest] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typedVariableBinding] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typeswitchExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typeswitchExprCaseClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.typeswitchExprDefaultClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.unaryMinusOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.unaryPlusOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.unionOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.unorderedExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.uri] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.validateExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.validationMode] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.value] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.valueComparisonOp] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.valueExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.varDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.varName] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.varRef] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.varValue] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.variableBinding] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.version] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.versionDecl] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.voidSequenceType] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.whereClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.winEndExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.winStartExpr] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.windowClause] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.windowEndCondition] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.windowStartCondition] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.windowVars] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.URI] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX["default"]] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.nondeterministic] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.onlyEnd] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.prefix] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX["private"]] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.xqx] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.xsi] = function(ctx, children) {};
Fleur.XQueryEngine[Fleur.XQueryX.schemaLocation] = function(ctx, children) {};