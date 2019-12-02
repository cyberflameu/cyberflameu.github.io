/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+antlr4+apacheconf+apl+applescript+aql+c+arff+asciidoc+asm6502+csharp+autohotkey+autoit+bash+basic+batch+bbcode+bison+bnf+brainfuck+brightscript+bro+cpp+aspnet+arduino+cil+coffeescript+cmake+clojure+ruby+csp+css-extras+d+dart+diff+markup-templating+dns-zone-file+docker+ebnf+eiffel+ejs+elixir+elm+lua+erb+erlang+fsharp+firestore-security-rules+flow+fortran+ftl+gcode+gdscript+gedcom+gherkin+git+glsl+gml+go+graphql+groovy+less+handlebars+haskell+haxe+hcl+http+hpkp+hsts+ichigojam+icon+inform7+ini+io+j+java+scala+php+javastacktrace+jolie+jq+javadoclike+n4js+markdown+json+jsonp+json5+julia+keyman+kotlin+latex+crystal+scheme+liquid+lisp+lolcode+etlua+makefile+js-templates+django+matlab+mel+mizar+monkey+moonscript+n1ql+typescript+nand2tetris-hdl+nasm+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+pascaligo+pcaxis+perl+jsdoc+phpdoc+php-extras+sql+powershell+processing+prolog+properties+protobuf+scss+puppet+pure+python+q+qore+r+js-extras+jsx+renpy+reason+vala+rest+rip+roboconf+robotframework+textile+rust+plsql+sass+stylus+javadoc+lilypond+shell-session+smalltalk+smarty+solidity+soy+turtle+splunk-spl+sqf+sas+twig+swift+yaml+tcl+haml+toml+tt2+sparql+pug+tsx+t4-templating+visual-basic+t4-cs+regex+vbnet+velocity+verilog+vhdl+vim+t4-vb+wasm+wiki+xeora+xojo+xquery+tap+zig&plugins=line-highlight+line-numbers+file-highlight+toolbar+highlight-keywords+inline-color+show-language+copy-to-clipboard+download-button+match-braces+diff-highlight */
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

pre[data-line] {
	position: relative;
	padding: 1em 0 1em 3em;
}

.line-highlight {
	position: absolute;
	left: 0;
	right: 0;
	padding: inherit 0;
	margin-top: 1em; /* Same as .prism’s padding-top */

	background: hsla(24, 20%, 50%,.08);
	background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));

	pointer-events: none;

	line-height: inherit;
	white-space: pre;
}

	.line-highlight:before,
	.line-highlight[data-end]:after {
		content: attr(data-start);
		position: absolute;
		top: .4em;
		left: .6em;
		min-width: 1em;
		padding: 0 .5em;
		background-color: hsla(24, 20%, 50%,.4);
		color: hsl(24, 20%, 95%);
		font: bold 65%/1.5 sans-serif;
		text-align: center;
		vertical-align: .3em;
		border-radius: 999px;
		text-shadow: none;
		box-shadow: 0 1px white;
	}

	.line-highlight[data-end]:after {
		content: attr(data-end);
		top: auto;
		bottom: .4em;
	}

.line-numbers .line-highlight:before,
.line-numbers .line-highlight:after {
	content: none;
}

pre[class*="language-"].line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
	position: relative;
	white-space: inherit;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 1px solid #999;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

}

	.line-numbers-rows > span {
		pointer-events: none;
		display: block;
		counter-increment: linenumber;
	}

		.line-numbers-rows > span:before {
			content: counter(linenumber);
			color: #999;
			display: block;
			padding-right: 0.8em;
			text-align: right;
		}

div.code-toolbar {
	position: relative;
}

div.code-toolbar > .toolbar {
	position: absolute;
	top: .3em;
	right: .2em;
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
}

div.code-toolbar:hover > .toolbar {
	opacity: 1;
}

/* Separate line b/c rules are thrown out if selector is invalid.
   IE11 and old Edge versions don't support :focus-within. */
div.code-toolbar:focus-within > .toolbar {
	opacity: 1;
}

div.code-toolbar > .toolbar .toolbar-item {
	display: inline-block;
}

div.code-toolbar > .toolbar a {
	cursor: pointer;
}

div.code-toolbar > .toolbar button {
	background: none;
	border: 0;
	color: inherit;
	font: inherit;
	line-height: normal;
	overflow: visible;
	padding: 0;
	-webkit-user-select: none; /* for button */
	-moz-user-select: none;
	-ms-user-select: none;
}

div.code-toolbar > .toolbar a,
div.code-toolbar > .toolbar button,
div.code-toolbar > .toolbar span {
	color: #bbb;
	font-size: .8em;
	padding: 0 .5em;
	background: #f5f2f0;
	background: rgba(224, 224, 224, 0.2);
	box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);
	border-radius: .5em;
}

div.code-toolbar > .toolbar a:hover,
div.code-toolbar > .toolbar a:focus,
div.code-toolbar > .toolbar button:hover,
div.code-toolbar > .toolbar button:focus,
div.code-toolbar > .toolbar span:hover,
div.code-toolbar > .toolbar span:focus {
	color: inherit;
	text-decoration: none;
}

span.inline-color {
	display: inline-block;
	height: 1.333ch;
	width: 1.333ch;
	margin: 0 .333ch;
	box-sizing: border-box;
	border: 1px solid white;
	outline: 1px solid black;
}

.token.punctuation.brace-hover,
.token.punctuation.brace-selected {
	outline: solid 1px;
}

.rainbow-braces .token.punctuation.brace-level-1,
.rainbow-braces .token.punctuation.brace-level-5,
.rainbow-braces .token.punctuation.brace-level-9 {
	color: #E50;
	opacity: 1;
}
.rainbow-braces .token.punctuation.brace-level-2,
.rainbow-braces .token.punctuation.brace-level-6,
.rainbow-braces .token.punctuation.brace-level-10 {
	color: #0B3;
	opacity: 1;
}
.rainbow-braces .token.punctuation.brace-level-3,
.rainbow-braces .token.punctuation.brace-level-7,
.rainbow-braces .token.punctuation.brace-level-11 {
	color: #26F;
	opacity: 1;
}
.rainbow-braces .token.punctuation.brace-level-4,
.rainbow-braces .token.punctuation.brace-level-8,
.rainbow-braces .token.punctuation.brace-level-12 {
	color: #E0E;
	opacity: 1;
}

pre.diff-highlight > code .token.deleted:not(.prefix),
pre > code.diff-highlight .token.deleted:not(.prefix) {
	background-color: rgba(255, 0, 0, .1);
	color: inherit;
	display: block;
}

pre.diff-highlight > code .token.inserted:not(.prefix),
pre > code.diff-highlight .token.inserted:not(.prefix) {
	background-color: rgba(0, 255, 128, .1);
	color: inherit;
	display: block;
}

