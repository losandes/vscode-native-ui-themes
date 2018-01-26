module.exports = function Theme (Ui) {
                                        // #011228
                                        // #b267e6
                                        // #ff86ff
                                        // #28dcfd
                                        // #19e6ce
                                        // #13b3a0
                                        // #4bf797
                                        // #fde827
                                        // #fd8727
                                        // #fc094a
                                        // #ca0b5e

    const colors = {
        background: "#011228",          // dark background
        foreground:  "#bbbbbb",         // text
        text: "#abb2bf",
        comments: "#5c6370",            // comments and punctuation
        params: "#a6b2c0",              // function params / commas
        strings: "#28dcfd",
        markupDiff: "#cdbb20",
        diff: "#569cd6",
        numbers: "#fde827",             // JS numbers, md bold, java imports, etc.
        constants: "#fd8727",           // JS constants, HTML attributes, etc.
        functions: "#31b7e8",           // JS functions/operators
        functionCall: "#cc6bcc",        // function execution
        variables: "#ff86ff",           // JS variables, HTML Tags
        bitwiseOperators: "#19e6ce",    // globals, bitwise operators, regex (i.e. the forward slashes in regex)
        keywords: "#4bf797",            // reserved keywords (const, return, public, private, etc.)
        embedded: "#d74c88",            // ?
        info: "#6796e6",
        warning: "#ca8d0b",
        error: "#fc094a",
        debug: "#b267e6",
        broken_background: "#ca0b5e",
        broken_foreground: "#fff",
        deprecated_background: "#d74c88",
        deprecated_foreground: "#fff",
        notImplemented_background: "#747369",
        notImplemented_foreground: "#fff"
    }

    const ui = new Ui({
        topBarBackground: "#eeeeee",
        bottomBarBackground: "#071e3c",
        nativeBackground: "#02234b",
        nativeHover: "#033373",
        nativeBorder: "#040232",
        editorBackground: colors.background,
        editorText: "#b2b9c8",
        editorWidgetBackground: "#21252b",
        editorSelectionBackground: "#033373",
        editorHighlightBackground: "#033373",
        editorInsertedBackground: "#00809b",
        editorLineHighlight: "#02285a",
        editorCursor: "#f8f8f0",
        editorWhitespaceForeground: "#3b4048",
        editorBorder: "#040232",
        editorRuler: "#02285a",
        tabActiveBackground: "#033373",
        tabInactiveBackground: "#071e3c",
        tabBorder: "#040232",
        text: "#b2b9c8",
        highlightedText: "#2387DC",
        gitNew: "#4bf797",
        gitModified: "#fde827",
        gitRemoved: "#b267e6",
        gitIgnored: "#445672",
        gitConflict: "#fc094a"
    }).colors;

    return {
        "name": "Native UI - Decks (Dark)",
        "type": "dark",
        "colors": ui,
        "tokenColors": [
            {
                "settings": {
                    "foreground": colors.foreground,
                    "background": colors.background
                }
            },
            {
                "name": "punctuation.definition",
                "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
                "settings": {
                    "foreground": colors.strings
                }
            },
            {
                "name": "Text",
                "scope": "variable.parameter.function",
                "settings": {
                    "foreground": colors.params
                }
            },
            {
                "name": "Comments",
                "scope": "comment, punctuation.definition.comment",
                "settings": {
                    "foreground": colors.comments,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "Comment",
                "scope": "comment",
                "settings": {
                    "foreground": colors.comments,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "Comment Markup Link",
                "scope": "comment markup.link",
                "settings": {
                    "foreground": colors.comments
                }
            },
            {
                "name": "markup diff",
                "scope": "markup.changed.diff",
                "settings": {
                    "foreground": colors.markupDiff
                }
            },
            {
                "name": "diff",
                "scope": "meta.diff.header.from-file,punctuation.definition.from-file.diff",
                "settings": {
                    "foreground": colors.diff
                }
            },
            {
                "name": "inserted.diff",
                "scope": "markup.inserted.diff",
                "settings": {
                    "foreground": colors.strings
                }
            },
            {
                "name": "deleted.diff",
                "scope": "markup.deleted.diff",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "c++ function",
                "scope": "meta.function.c",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "c++ control",
                "scope": "keyword.control.cpp",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "c++ block",
                "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "js/ts punctuation separator key-value",
                "scope": "punctuation.separator.key-value",
                "settings": {
                    "foreground": colors.foreground
                }
            },
            {
                "name": "js/ts italic",
                "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "js/ts import keyword",
                "scope": "keyword.operator.expression.import",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "math js/ts",
                "scope": "support.constant.math",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "math property js/ts",
                "scope": "support.constant.property.math",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "js/ts variable.other.constant",
                "scope": "variable.other.constant",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "java type",
                "scope": "storage.type.annotation.java",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "java source",
                "scope": "source.java",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "java modifier.import",
                "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,storage.type.generic.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,meta.method.body.java",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "java modifier.import",
                "scope": "meta.method.java",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "java modifier.import",
                "scope": "storage.modifier.import.java,storage.type.java",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "java variable.name",
                "scope": "meta.definition.variable.name.java",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "operator logical",
                "scope": "keyword.operator.logical.js",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "operator bitwise",
                "scope": "keyword.operator.bitwise",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "support.constant.property-value.scss",
                "scope": "support.constant.property-value.scss,support.constant.property-value.css",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "css color standard name",
                "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "css comma",
                "scope": "punctuation.separator.list.comma.css",
                "settings": {
                    "foreground": colors.params // was "#b9c0ca"
                }
            },
            {
                "name": "css attribute-name.id",
                "scope": "support.constant.color.w3c-standard-color-name.css",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "css property-name",
                "scope": "support.type.vendored.property-name.css",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "js/ts template-expression",
                "scope": "punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "js/ts module",
                "scope": "support.module.node,support.type.object.module,support.module.node",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "js variable readwrite",
                "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "comment",
                "scope": "comment.line.double-slash,comment.block.documentation",
                "settings": {
                    "fontStyle": "normal"
                }
            },
            {
                "name": "js/ts json",
                "scope": "support.constant.json",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "js/ts Keyword",
                "scope": "keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.ternary",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "js/ts console",
                "scope": "support.type.object.console",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "js/ts support.variable.property.process",
                "scope": "support.variable.property.process",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "js console function",
                "scope": "entity.name.function,support.function.console",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "js operator",
                "scope": "keyword.operator",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "js dom",
                "scope": "support.type.object.dom",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "js dom variable",
                "scope": "support.variable.dom,support.variable.property.dom",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "keyword.operator",
                "scope": "keyword.operator.arithmetic,keyword.operator.comparison",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "C operator assignment",
                "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "C punctuation",
                "scope": "punctuation.separator.delimiter.c",
                "settings": {
                    "foreground": colors.foreground
                }
            },
            {
                "name": "C type posix-reserved",
                "scope": "support.type.posix-reserved.c",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "keyword.operator.sizeof.c",
                "scope": "keyword.operator.sizeof.c",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "python parameter",
                "scope": "variable.parameter.function.language.python",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "python type",
                "scope": "support.type.python",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "python logical",
                "scope": "keyword.operator.logical.python",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "meta.function-call.arguments.python",
                "scope": "meta.function-call.arguments.python",
                "settings": {
                    "foreground": colors.functionCall
                }
            },
            {
                "name": "meta.function-call.python",
                "scope": "meta.function-call.python",
                "settings": {
                    "foreground": colors.functionCall
                }
            },
            {
                "name": "pyCs",
                "scope": "variable.parameter.function.python",
                "settings": {
                    "foreground": colors.constants // was "#D18C4E"
                }
            },
            {
                "name": "python block",
                "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,meta.function-call.arguments.python",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "python function-call.generic",
                "scope": "meta.function-call.generic.python",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "Punctuation Definition Comment",
                "scope": "punctuation.definition.comment",
                "settings": {
                    "foreground": colors.comments
                }
            },
            {
                "name": "Delimiters",
                "scope": "none",
                "settings": {
                    "foreground": colors.params
                }
            },
            {
                "name": "Operators",
                "scope": "keyword.operator",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Keywords",
                "scope": "keyword",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Variables",
                "scope": "variable",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "Java Variables",
                "scope": "token.variable.parameter.java",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Java Imports",
                "scope": "import.storage.java",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Packages",
                "scope": "token.package.keyword",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Packages",
                "scope": "token.package",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Functions",
                "scope": "entity.name.function, meta.require, support.function.any-method",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "Classes",
                "scope": "entity.name.type.namespace",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Classes",
                "scope": "support.class, entity.name.type.class",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Class name",
                "scope": "entity.name.class.identifier.namespace.type",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Class name",
                "scope": "entity.name.class",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "Type Name",
                "scope": "entity.name.type",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Keyword Control",
                "scope": "keyword.control",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Control Elements",
                "scope": "control.elements, keyword.operator.less",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Methods",
                "scope": "keyword.other.special-method",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "Storage",
                "scope": "storage",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Storage JS TS",
                "scope": "token.storage",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
                "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Java Storage",
                "scope": "token.storage.type.java",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Support",
                "scope": "support.function",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "Support type",
                "scope": "support.type.property-name",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Support type",
                "scope": "support.constant.property-value",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Support type",
                "scope": "support.constant.font-name",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Meta tag",
                "scope": "meta.tag",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "Strings, Inherited Class",
                "scope": "string, entity.other.inherited-class",
                "settings": {
                    "foreground": colors.strings
                }
            },
            {
                "name": "Constant other symbol",
                "scope": "constant.other.symbol",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "Integers",
                "scope": "constant.numeric",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Floats",
                "scope": "none",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Boolean",
                "scope": "none",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Constants",
                "scope": "constant",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Constants",
                "scope": "punctuation.definition.constant",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Tags",
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "Attributes",
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Attribute IDs",
                "scope": "entity.other.attribute-name.id",
                "settings": {
                    "foreground": colors.functions,
                    "fontStyle": "normal"
                }
            },
            {
                "name": "Attribute class",
                "scope": "entity.other.attribute-name.class.css",
                "settings": {
                    "foreground": colors.constants,
                    "fontStyle": "normal"
                }
            },
            {
                "name": "Selector",
                "scope": "meta.selector",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Values",
                "scope": "none",
                "settings": {
                    "foreground": colors.constants // was "#D2945D"
                }
            },
            {
                "name": "Headings",
                "scope": "markup.heading",
                "settings": {
                    "fontStyle": "bold",
                    "foreground": colors.variables
                }
            },
            {
                "name": "Headings",
                "scope": "markup.heading punctuation.definition.heading, entity.name.section",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "Units",
                "scope": "keyword.other.unit",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "Bold",
                "scope": "markup.bold,todo.bold",
                "settings": {
                    "fontStyle": "bold",
                    "foreground": colors.constants
                }
            },
            {
                "name": "Bold",
                "scope": "punctuation.definition.bold",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "Italic",
                "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "Italic",
                "scope": "emphasis md",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown headings",
                "scope": "entity.name.section.markdown",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
                "scope": "punctuation.definition.heading.markdown",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown heading setext",
                "scope": "markup.heading.setext",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
                "scope": "punctuation.definition.bold.markdown",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
                "scope": "markup.inline.raw.markdown",
                "settings": {
                    "foreground": colors.strings
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
                "scope": "beginning.punctuation.definition.list.markdown",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Quote",
                "scope": "markup.quote.markdown",
                "settings": {
                    "foreground": colors.comments,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
                "scope": "punctuation.definition.string.begin.markdown,punctuation.definition.string.end.markdown,punctuation.definition.metadata.markdown",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
                "scope": "punctuation.definition.metadata.markdown",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
                "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
                "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "markup.italic.markdown",
                "scope": "markup.italic.markdown",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "markup.bold.markdown",
                "scope": "markup.bold.markdown",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "name": "Regular Expressions",
                "scope": "string.regexp",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "Escape Characters",
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "Embedded",
                "scope": "punctuation.section.embedded, variable.interpolation",
                "settings": {
                    "foreground": colors.embedded
                }
            },
            {
                "name": "Illegal",
                "scope": "invalid.illegal",
                "settings": {
                    "background": colors.broken_background,
                    "foreground": colors.broken_foreground
                }
            },
            {
                "name": "Broken",
                "scope": "invalid.broken",
                "settings": {
                    "background": colors.broken_background,
                    "foreground": colors.broken_foreground
                }
            },
            {
                "name": "Deprecated",
                "scope": "invalid.deprecated",
                "settings": {
                    "background": colors.deprecated_background,
                    "foreground": colors.deprecated_foreground
                }
            },
            {
                "name": "Unimplemented",
                "scope": "invalid.unimplemented",
                "settings": {
                    "background": colors.notImplemented_background,
                    "foreground": colors.notImplemented_foreground
                }
            },
            {
                "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
                "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
                "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
                "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
                "settings": {
                    "foreground": colors.strings
                }
            },
            {
                "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
                "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "[VSCODE-CUSTOM] JSON Property Name",
                "scope": "support.type.property-name.json",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
                "scope": "support.type.property-name.json punctuation",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "laravel blade tag",
                "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "laravel blade @",
                "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "use statement for other classes",
                "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "error suppression",
                "scope": "keyword.operator.error-control.php",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "php instanceof",
                "scope": "keyword.operator.type.php",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "style double quoted array index normal begin",
                "scope": "punctuation.section.array.begin.php",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "style double quoted array index normal end",
                "scope": "punctuation.section.array.end.php",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "php illegal.non-null-typehinted",
                "scope": "invalid.illegal.non-null-typehinted.php",
                "settings": {
                    "foreground": colors.error
                }
            },
            {
                "name": "php types",
                "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "php call-function",
                "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "php function-resets",
                "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php",
                "settings": {
                    "foreground": colors.foreground
                }
            },
            {
                "name": "support php constants",
                "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "php goto",
                "scope": "entity.name.goto-label.php,support.other.php",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "php logical/bitwise operator",
                "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "php regexp operator",
                "scope": "keyword.operator.regexp.php",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "php comparison",
                "scope": "keyword.operator.comparison.php",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "php dollar sign",
                "scope": "punctuation.definition.variable.php",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "php heredoc/nowdoc",
                "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
                "settings": {
                    "foreground": colors.keywords
                }
            },
            {
                "name": "python function decorator @",
                "scope": "meta.function.decorator.python",
                "settings": {
                    "foreground": colors.functions
                }
            },
            {
                "name": "python function support",
                "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "parameter function",
                "scope": "function.parameter",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "parameter function js/ts",
                "scope": "function.parameter",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "brace function",
                "scope": "function.brace",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "parameter function ruby cs",
                "scope": "function.parameter.ruby, function.parameter.cs",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "rgb-value",
                "scope": "rgb-value",
                "settings": {
                    "foreground": colors.bitwiseOperators
                }
            },
            {
                "name": "rgb value #",
                "scope": "inline-color-decoration rgb-value",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "rgb value less",
                "scope": "less rgb-value",
                "settings": {
                    "foreground": colors.constants
                }
            },
            {
                "name": "sass selector",
                "scope": "selector.sass",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "name": "js ts this",
                "scope": "var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx",
                "settings": {
                    "foreground": colors.numbers,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "ts primitive/builtin types",
                "scope": "support.type.primitive.ts,support.type.builtin.ts",
                "settings": {
                    "foreground": colors.numbers
                }
            },
            {
                "name": "block scope",
                "scope": "block.scope.end,block.scope.begin",
                "settings": {
                    "foreground": colors.text
                }
            },
            {
                "name": "cs local variable",
                "scope": "entity.name.variable.local.cs",
                "settings": {
                    "foreground": colors.variables
                }
            },
            {
                "scope": "token.info-token",
                "settings": {
                    "foreground": colors.info
                }
            },
            {
                "scope": "token.warn-token",
                "settings": {
                    "foreground": colors.warning
                }
            },
            {
                "scope": "token.error-token",
                "settings": {
                    "foreground": colors.error
                }
            },
            {
                "scope": "token.debug-token",
                "settings": {
                    "foreground": colors.debug
                }
            }
        ]
    }
}