var Markdown;Markdown=typeof exports==="object"&&typeof require==="function"?exports:{};
(function(){function t(h){return h}function x(){return!1}function A(){}function m(){}A.prototype={chain:function(h,m){var u=this[h];if(!u)throw Error("unknown hook "+h);this[h]=u===t?m:function(h){return m(u(h))}},set:function(h,m){if(!this[h])throw Error("unknown hook "+h);this[h]=m},addNoop:function(h){this[h]=t},addFalse:function(h){this[h]=x}};Markdown.HookCollection=A;m.prototype={set:function(h,m){this["s_"+h]=m},get:function(h){return this["s_"+h]}};Markdown.Converter=function(){function h(a){return a=
a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,l,c,b,e,j){l=l.toLowerCase();y.set(l,d(c));if(e)return b;else j&&E.set(l,j.replace(/"/g,"&quot;"));return""})}function t(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,u);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,
u);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,u);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,u);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,u)}function u(a,c){var b;b=c.replace(/^\n+/,"");b=b.replace(/\n+$/g,"");return b="\n\n~K"+(H.push(b)-1)+"K\n\n"}function x(l,b){l=n(l);l=l.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n");l=l.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,"<hr />\n");l=
l.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n");l=s(l);l=p(l);l=a(l);l=t(l);return l=c(l,b)}function z(a){a=K(a);a=C(a);a=a.replace(/\\(\\)/g,j);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,j);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,k);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,k);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,D);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
D);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,D);a=b(a);a=a.replace(/~P/g,"://");a=d(a);a=a.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4");a=a.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4");return a=a.replace(/  +\n/g," <br>\n")}function C(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(a){var l=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return l=o(l,a.charAt(1)==
"!"?"\\`*_/":"\\`*_")})}function D(a,b,c,d,e,j,g,q){q==void 0&&(q="");a=c.replace(/:\/\//g,"~P");d=d.toLowerCase();if(e=="")if(d==""&&(d=a.toLowerCase().replace(/ ?\n/g," ")),y.get(d)!=void 0)e=y.get(d),E.get(d)!=void 0&&(q=E.get(d));else if(b.search(/\(\s*\)$/m)>-1)e="";else return b;e=v(e);e=o(e,"*_");b='<a href="'+e+'"';q!=""&&(q=q.replace(/"/g,"&quot;"),q=o(q,"*_"),b+=' title="'+q+'"');b+=">"+a+"</a>";return b}function k(a,b,c,d,e,j,g,q){a=c;d=d.toLowerCase();q||(q="");if(e=="")if(d==""&&(d=a.toLowerCase().replace(/ ?\n/g,
" ")),y.get(d)!=void 0)e=y.get(d),E.get(d)!=void 0&&(q=E.get(d));else return b;a=a.replace(/"/g,"&quot;");e=o(e,"*_");b='<img src="'+e+'" alt="'+a+'"';q=q.replace(/"/g,"&quot;");q=o(q,"*_");b+=' title="'+q+'"';b+=" />";return b}function n(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+z(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+z(b)+"</h2>\n\n"});return a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,c){a=b.length;return"<h"+
a+">"+z(c)+"</h"+a+">\n\n"})}function s(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;I?a=a.replace(b,function(a,b,c){a=c.search(/[*+-]/g)>-1?"ul":"ol";b=f(b,a);b=b.replace(/\s+$/,"");return"<"+a+">"+b+"</"+a+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){a=d.search(/[*+-]/g)>-1?"ul":"ol";c=f(c,a);return b+"<"+a+">\n"+c+"</"+a+">\n"}));
return a=a.replace(/~0/,"")}function f(a,b){I++;a=a.replace(/\n{2,}$/,"\n");a+="~0";var c=L[b],d=!1,a=a.replace(RegExp("(^[ \\t]*)("+c+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+c+")[ \\t]+))","gm"),function(a,b,c,l){a=l;(b=/\n\n$/.test(a))||a.search(/\n{2,}/)>-1||d?a=x(g(a),!0):(a=s(g(a)),a=a.replace(/\n$/,""),a=z(a));d=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");I--;return a}function p(a){a+="~0";a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){a=
i(g(b));a=w(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+a+"\n</code></pre>")+"\n\n"+c});return a=a.replace(/~0/,"")}function F(a){a=a.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(H.push(a)-1)+"K\n\n"}function K(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){a=d.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=i(a);return b+"<code>"+a+"</code>"})}function i(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");
return a=o(a,"*_{}[]\\",!1)}function a(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c;c=b.replace(/^[ \t]*>[ \t]?/gm,"~0");c=c.replace(/~0/g,"");c=c.replace(/^[ \t]+$/gm,"");c=x(c);c=c.replace(/(^|\n)/g,"$1  ");c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c;c=b.replace(/^  /mg,"~0");return c=c.replace(/~0/g,"")});return F("<blockquote>\n"+c+"\n</blockquote>")})}function c(a,b){for(var a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c=a.split(/\n{2,}/g),
d=[],e=/~K(\d+)K/g,j=c.length,g=0;g<j;g++){var q=c[g];e.test(q)?d.push(q):/\S/.test(q)&&(q=z(q),q=q.replace(/^([ \t]*)/g,"<p>"),q+="</p>",d.push(q))}if(!b){j=d.length;for(g=0;g<j;g++)for(var o=!0;o;)o=!1,d[g]=d[g].replace(e,function(a,b){o=!0;return H[b]})}return d.join("\n\n")}function d(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function b(a){a=a.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,
"$1<$2$3>$4");return a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,function(a,b){return'<a href="'+b+'">'+r.plainLinkText(b)+"</a>"})}function e(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})}function g(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a=a.replace(/~0/g,"")}function w(a){if(!/\t/.test(a))return a;var b=["    ","   ","  "," "],c=0,d;return a.replace(/[\n\t]/g,function(a,e){if(a==="\n")return c=e+1,a;d=(e-c)%4;c=e+1;return b[d]})}function v(a){if(!a)return"";
var b=a.length;return a.replace(M,function(c,d){return c=="~D"?"%24":c==":"&&(d==b-1||/[0-9\/]/.test(a.charAt(d+1)))?":":"%"+c.charCodeAt(0).toString(16)})}function o(a,b,c){b="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(b="\\\\"+b);return a=a.replace(RegExp(b,"g"),j)}function j(a,b){return"~E"+b.charCodeAt(0)+"E"}var r=this.hooks=new A;r.addNoop("plainLinkText");r.addNoop("preConversion");r.addNoop("postConversion");var y,E,H,I;this.makeHtml=function(a){if(y)throw Error("Recursive call to converter.makeHtml");
y=new m;E=new m;H=[];I=0;a=r.preConversion(a);a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=w("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=t(a);a=h(a);a=x(a);a=e(a);a=a.replace(/~D/g,"$$");a=a.replace(/~T/g,"~");a=r.postConversion(a);H=E=y=null;return a};var L={ol:"\\d+[.]",ul:"[*+-]"},M=/(?:["'*()[\]:]|~D)/g}})();(function(){var t,x,A;function m(){}function h(a){this.buttonBar=f.getElementById("wmd-button-bar"+a);this.preview=f.getElementById("wmd-preview"+a);this.input=f.getElementById("wmd-input"+a)}function G(a,c){var d=this,b=[],e=0,g="none",f,v,o,j=function(a,b){g!=a&&(g=a,b||y());!t||g!="moving"?v=setTimeout(r,1):o=null},r=function(a){o=new u(c,a);v=void 0};this.setCommandMode=function(){g="command";y();v=setTimeout(r,0)};this.canUndo=function(){return e>1};this.canRedo=function(){return b[e+1]?!0:!1};
this.undo=function(){d.canUndo()&&(f?(f.restore(),f=null):(b[e]=new u(c),b[--e].restore(),a&&a()));g="none";c.input.focus();r()};this.redo=function(){d.canRedo()&&(b[++e].restore(),a&&a());g="none";c.input.focus();r()};var y=function(){var d=o||new u(c);if(!d)return!1;g=="moving"?f||(f=d):(f&&(b[e-1].text!=f.text&&(b[e++]=f),f=null),b[e++]=d,b[e+1]=null,a&&a())},i=function(a){var b=!1;if(a.ctrlKey||a.metaKey)switch(String.fromCharCode(a.charCode||a.keyCode)){case "y":d.redo();b=!0;break;case "z":a.shiftKey?
d.redo():d.undo(),b=!0}if(b&&(a.preventDefault&&a.preventDefault(),window.event))window.event.returnValue=!1},h=function(a){if(!a.ctrlKey&&!a.metaKey)a=a.keyCode,a>=33&&a<=40||a>=63232&&a<=63235?j("moving"):a==8||a==46||a==127?j("deleting"):a==13?j("newlines"):a==27?j("escape"):(a<16||a>20)&&a!=91&&j("typing")};(function(){k.addEvent(c.input,"keypress",function(a){(a.ctrlKey||a.metaKey)&&(a.keyCode==89||a.keyCode==90)&&a.preventDefault()});var a=function(){if((t||o&&o.text!=c.input.value)&&v==void 0)g=
"paste",y(),r()};k.addEvent(c.input,"keydown",i);k.addEvent(c.input,"keydown",h);k.addEvent(c.input,"mousedown",function(){j("moving")});c.input.onpaste=a;c.input.ondrop=a})();r(!0);y()}function u(a,c){var d=this,b=a.input;this.init=function(){if(k.isVisible(b)&&(c||!(f.activeElement&&f.activeElement!==b)))if(this.setInputAreaSelectionStartEnd(),this.scrollTop=b.scrollTop,!this.text&&b.selectionStart||b.selectionStart===0)this.text=b.value};this.setInputAreaSelection=function(){if(k.isVisible(b))if(b.selectionStart!==
void 0&&!x)b.focus(),b.selectionStart=d.start,b.selectionEnd=d.end,b.scrollTop=d.scrollTop;else if(f.selection&&!(f.activeElement&&f.activeElement!==b)){b.focus();var a=b.createTextRange();a.moveStart("character",-b.value.length);a.moveEnd("character",-b.value.length);a.moveEnd("character",d.end);a.moveStart("character",d.start);a.select()}};this.setInputAreaSelectionStartEnd=function(){if(!a.ieCachedRange&&(b.selectionStart||b.selectionStart===0))d.start=b.selectionStart,d.end=b.selectionEnd;else if(f.selection){d.text=
k.fixEolChars(b.value);var c=a.ieCachedRange||f.selection.createRange(),g=k.fixEolChars(c.text),w="\u0007"+g+"\u0007";c.text=w;var v=k.fixEolChars(b.value);c.moveStart("character",-w.length);c.text=g;d.start=v.indexOf("\u0007");d.end=v.lastIndexOf("\u0007")-1;if(w=d.text.length-k.fixEolChars(b.value).length){for(c.moveStart("character",-g.length);w--;)g+="\n",d.end+=1;c.text=g}if(a.ieCachedRange)d.scrollTop=a.ieCachedScrollTop;a.ieCachedRange=null;this.setInputAreaSelection()}};this.restore=function(){if(d.text!=
void 0&&d.text!=b.value)b.value=d.text;this.setInputAreaSelection();b.scrollTop=d.scrollTop};this.getChunks=function(){var a=new m;a.before=k.fixEolChars(d.text.substring(0,d.start));a.startTag="";a.selection=k.fixEolChars(d.text.substring(d.start,d.end));a.endTag="";a.after=k.fixEolChars(d.text.substring(d.end));a.scrollTop=d.scrollTop;return a};this.setChunks=function(a){a.before+=a.startTag;a.after=a.endTag+a.after;this.start=a.before.length;this.end=a.before.length+a.selection.length;this.text=
a.before+a.selection+a.after;this.scrollTop=a.scrollTop};this.init()}function J(a,c,d){var b,e,g,w=function(){var a=0;if(window.innerHeight)a=window.pageYOffset;else if(f.documentElement&&f.documentElement.scrollTop)a=f.documentElement.scrollTop;else if(f.body)a=f.body.scrollTop;return a},v=function(){if(c.preview){var b=c.input.value;if(!(b&&b==g)){g=b;var d=(new Date).getTime(),b=a.makeHtml(b);e=(new Date).getTime()-d;p(b)}}},o=function(){b&&(clearTimeout(b),b=void 0);var a=0,a=e;a>3E3&&(a=3E3);
b=setTimeout(v,a)};this.refresh=function(a){a?(g="",v()):o()};this.processingTime=function(){return e};var j=!0,r=function(a){var b=c.preview,d=b.parentNode,e=b.nextSibling;d.removeChild(b);b.innerHTML=a;e?d.insertBefore(b,e):d.appendChild(b)},i=function(a){c.preview.innerHTML=a},h,z=function(a){if(h)return h(a);try{i(a),h=i}catch(b){h=r,h(a)}},p=function(a){var b=n.getTop(c.input)-w();c.preview&&(z(a),d());if(c.preview)c.preview.scrollTop=(c.preview.scrollHeight-c.preview.clientHeight)*(c.preview.scrollHeight<=
c.preview.clientHeight?1:c.preview.scrollTop/(c.preview.scrollHeight-c.preview.clientHeight));if(j)j=!1;else{var e=n.getTop(c.input)-w();t?setTimeout(function(){window.scrollBy(0,e-b)},0):window.scrollBy(0,e-b)}};(function(a,b){k.addEvent(a,"input",b);a.onpaste=b;a.ondrop=b;k.addEvent(a,"keypress",b);k.addEvent(a,"keydown",b)})(c.input,o);v();if(c.preview)c.preview.scrollTop=0}function z(a,c,d,b,e,g){var w,v,o,j,r,h,i,z,p,m,s,l;function n(a){C.focus();if(a.textOp){d&&d.setCommandMode();var e=new u(c);
if(!e)return;var j=e.getChunks(),g=function(){C.focus();j&&e.setChunks(j);e.restore();b.refresh()};a.textOp(j,g)||g()}a.execute&&a.execute(d)}function D(a,b){var d=a.getElementsByTagName("span")[0];if(b){d.style.backgroundPosition=a.XShift+" 0px";a.onmouseover=function(){d.style.backgroundPosition=this.XShift+" -40px"};a.onmouseout=function(){d.style.backgroundPosition=this.XShift+" 0px"};if(t)a.onmousedown=function(){if(!(f.activeElement&&f.activeElement!==c.input))c.ieCachedRange=document.selection.createRange(),
c.ieCachedScrollTop=c.input.scrollTop};if(!a.isHelp)a.onclick=function(){if(this.onmouseout)this.onmouseout();n(this);return!1}}else d.style.backgroundPosition=a.XShift+" -20px",a.onmouseover=a.onmouseout=a.onclick=function(){}}function B(a){typeof a==="string"&&(a=e[a]);return function(){a.apply(e,arguments)}}function A(){d&&(D(s,d.canUndo()),D(l,d.canRedo()))}var C=c.input;w=void 0;v=void 0;o=void 0;j=void 0;r=void 0;h=void 0;i=void 0;z=void 0;p=void 0;m=void 0;s=void 0;l=void 0;(function(){var b=
c.buttonBar,d=document.createElement("ul");d.id="wmd-button-row"+a;d.className="wmd-button-row";var d=b.appendChild(d),e=0,b=function(b,c,j,f){var g=document.createElement("li");g.className="wmd-button";g.style.left=e+"px";e+=25;var o=document.createElement("span");g.id=b+a;g.appendChild(o);g.title=c;g.XShift=j;if(f)g.textOp=f;D(g,!0);d.appendChild(g);return g},f=function(b){var c=document.createElement("li");c.className="wmd-spacer wmd-spacer"+b;c.id="wmd-spacer"+b+a;d.appendChild(c);e+=25};w=b("wmd-bold-button",
"Strong <strong> Ctrl+B","0px",B("doBold"));v=b("wmd-italic-button","Emphasis <em> Ctrl+I","-20px",B("doItalic"));f(1);o=b("wmd-link-button","Hyperlink <a> Ctrl+L","-40px",B(function(a,b){return this.doLinkOrImage(a,b,!1)}));j=b("wmd-quote-button","Blockquote <blockquote> Ctrl+Q","-60px",B("doBlockquote"));r=b("wmd-code-button","Code Sample <pre><code> Ctrl+K","-80px",B("doCode"));h=b("wmd-image-button","Image <img> Ctrl+G","-100px",B(function(a,b){return this.doLinkOrImage(a,b,!0)}));f(2);i=b("wmd-olist-button",
"Numbered List <ol> Ctrl+O","-120px",B(function(a,b){this.doList(a,b,!0)}));z=b("wmd-ulist-button","Bulleted List <ul> Ctrl+U","-140px",B(function(a,b){this.doList(a,b,!1)}));p=b("wmd-heading-button","Heading <h1>/<h2> Ctrl+H","-160px",B("doHeading"));m=b("wmd-hr-button","Horizontal Rule <hr> Ctrl+R","-180px",B("doHorizontalRule"));f(3);s=b("wmd-undo-button","Undo - Ctrl+Z","-200px",null);s.execute=function(a){a&&a.undo()};f=/win/.test(F.platform.toLowerCase())?"Redo - Ctrl+Y":"Redo - Ctrl+Shift+Z";
l=b("wmd-redo-button",f,"-220px",null);l.execute=function(a){a&&a.redo()};if(g)b=document.createElement("li"),f=document.createElement("span"),b.appendChild(f),b.className="wmd-button wmd-help-button",b.id="wmd-help-button"+a,b.XShift="-240px",b.isHelp=!0,b.style.right="0px",b.title=g.title||K,b.onclick=g.handler,D(b,!0),d.appendChild(b);A()})();var G="keydown";x&&(G="keypress");k.addEvent(C,G,function(a){if((a.ctrlKey||a.metaKey)&&!a.altKey){switch(String.fromCharCode(a.charCode||a.keyCode).toLowerCase()){case "b":n(w);
break;case "i":n(v);break;case "l":n(o);break;case "q":n(j);break;case "k":n(r);break;case "g":n(h);break;case "o":n(i);break;case "u":n(z);break;case "h":n(p);break;case "r":n(m);break;case "y":n(l);break;case "z":a.shiftKey?n(l):n(s);break;default:return}a.preventDefault&&a.preventDefault();if(window.event)window.event.returnValue=!1}});k.addEvent(C,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey&&(a.charCode||a.keyCode)===13)fakeButton={},fakeButton.textOp=B("doAutoindent"),n(fakeButton)});
t&&k.addEvent(C,"keydown",function(a){if(a.keyCode===27)return!1});this.setUndoRedoButtonStates=A}function C(a){this.hooks=a}function D(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,d,b){d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")});d=decodeURIComponent(d);d=encodeURI(d).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29");d=d.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")});b&&(b=b.trim?b.trim():b.replace(/^\s*/,"").replace(/\s*$/,""),b=$.trim(b).replace(/"/g,
"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;"));return b?d+' "'+b+'"':d})}var k={},n={},s={},f=window.document,p=window.RegExp,F=window.navigator;t=/msie/.test(F.userAgent.toLowerCase());A=/msie 6/.test(F.userAgent.toLowerCase())||/msie 5/.test(F.userAgent.toLowerCase());x=/opera/.test(F.userAgent.toLowerCase());var K="Markdown Editing Help";Markdown.Editor=function(a,c,d){var c=c||"",b=this.hooks=new Markdown.HookCollection;b.addNoop("onPreviewRefresh");
b.addNoop("postBlockquoteCreation");b.addFalse("insertImageDialog");this.getConverter=function(){return a};var e=this,g;this.run=function(){if(!g){g=new h(c);var w=new C(b),i=new J(a,g,function(){b.onPreviewRefresh()}),o,j;/\?noundo/.test(f.location.href)||(o=new G(function(){i.refresh();j&&j.setUndoRedoButtonStates()},g));j=new z(c,g,o,i,w,d);j.setUndoRedoButtonStates();(e.refreshPreview=function(){i.refresh(!0)})()}}};m.prototype.findTags=function(a,c){var d=this,b;if(a)b=k.extendRegExp(a,"","$"),
this.before=this.before.replace(b,function(a){d.startTag+=a;return""}),b=k.extendRegExp(a,"^",""),this.selection=this.selection.replace(b,function(a){d.startTag+=a;return""});if(c)b=k.extendRegExp(c,"","$"),this.selection=this.selection.replace(b,function(a){d.endTag=a+d.endTag;return""}),b=k.extendRegExp(c,"^",""),this.after=this.after.replace(b,function(a){d.endTag=a+d.endTag;return""})};m.prototype.trimWhitespace=function(a){var c,d=this;a?a=c="":(a=function(a){d.before+=a;return""},c=function(a){d.after=
a+d.after;return""});this.selection=this.selection.replace(/^(\s*)/,a).replace(/(\s*)$/,c)};m.prototype.skipLines=function(a,c,d){a===void 0&&(a=1);c===void 0&&(c=1);a++;c++;var b,e;navigator.userAgent.match(/Chrome/)&&"X".match(/()./);this.selection=this.selection.replace(/(^\n*)/,"");this.startTag+=p.$1;this.selection=this.selection.replace(/(\n*$)/,"");this.endTag+=p.$1;this.startTag=this.startTag.replace(/(^\n*)/,"");this.before+=p.$1;this.endTag=this.endTag.replace(/(\n*$)/,"");this.after+=p.$1;
if(this.before){for(b=e="";a--;)b+="\\n?",e+="\n";d&&(b="\\n*");this.before=this.before.replace(new p(b+"$",""),e)}if(this.after){for(b=e="";c--;)b+="\\n?",e+="\n";d&&(b="\\n*");this.after=this.after.replace(new p(b,""),e)}};k.isVisible=function(a){if(window.getComputedStyle)return window.getComputedStyle(a,null).getPropertyValue("display")!=="none";else if(a.currentStyle)return a.currentStyle.display!=="none"};k.addEvent=function(a,c,d){a.attachEvent?a.attachEvent("on"+c,d):a.addEventListener(c,
d,!1)};k.removeEvent=function(a,c,d){a.detachEvent?a.detachEvent("on"+c,d):a.removeEventListener(c,d,!1)};k.fixEolChars=function(a){a=a.replace(/\r\n/g,"\n");return a=a.replace(/\r/g,"\n")};k.extendRegExp=function(a,c,d){if(c===null||c===void 0)c="";if(d===null||d===void 0)d="";var a=a.toString(),b,a=a.replace(/\/([gim]*)$/,"");b=p.$1;a=a.replace(/(^\/|\/$)/g,"");return new p(c+a+d,b)};n.getTop=function(a,c){var d=a.offsetTop;if(!c)for(;a=a.offsetParent;)d+=a.offsetTop;return d};n.getHeight=function(a){return a.offsetHeight||
a.scrollHeight};n.getWidth=function(a){return a.offsetWidth||a.scrollWidth};n.getPageSize=function(){var a,c,d,b;self.innerHeight&&self.scrollMaxY?(a=f.body.scrollWidth,c=self.innerHeight+self.scrollMaxY):f.body.scrollHeight>f.body.offsetHeight?(a=f.body.scrollWidth,c=f.body.scrollHeight):(a=f.body.offsetWidth,c=f.body.offsetHeight);if(self.innerHeight)d=self.innerWidth,b=self.innerHeight;else if(f.documentElement&&f.documentElement.clientHeight)d=f.documentElement.clientWidth,b=f.documentElement.clientHeight;
else if(f.body)d=f.body.clientWidth,b=f.body.clientHeight;a=Math.max(a,d);c=Math.max(c,b);return[a,c,d,b]};s.createBackground=function(){var a=f.createElement("div");a.className="wmd-prompt-background";style=a.style;style.position="absolute";style.top="0";style.zIndex="1000";t?style.filter="alpha(opacity=50)":style.opacity="0.5";var c=n.getPageSize();style.height=c[1]+"px";t?(style.left=f.documentElement.scrollLeft,style.width=f.documentElement.clientWidth):(style.left="0",style.width="100%");f.body.appendChild(a);
return a};s.prompt=function(a,c,d){var b,e;c===void 0&&(c="");var g=function(a){(a.charCode||a.keyCode)===27&&i(!0)},i=function(a){k.removeEvent(f.body,"keydown",g);var c=e.value;a?c=null:(c=c.replace("http://http://","http://"),c=c.replace("http://https://","https://"),c=c.replace("http://ftp://","ftp://"),c.indexOf("http://")===-1&&c.indexOf("ftp://")===-1&&c.indexOf("https://")===-1&&(c="http://"+c));b.parentNode.removeChild(b);d(c);return!1},h=function(){b=f.createElement("div");b.className="wmd-prompt-dialog";
b.style.padding="10px;";b.style.position="fixed";b.style.width="400px";b.style.zIndex="1001";var d=f.createElement("div");d.innerHTML=a;d.style.padding="5px";b.appendChild(d);d=f.createElement("form");d.onsubmit=function(){return i(!1)};style=d.style;style.padding="0";style.margin="0";style.cssFloat="left";style.width="100%";style.textAlign="center";style.position="relative";b.appendChild(d);e=f.createElement("input");e.type="text";e.value=c;style=e.style;style.display="block";style.width="80%";style.marginLeft=
style.marginRight="auto";d.appendChild(e);var j=f.createElement("input");j.type="button";j.onclick=function(){return i(!1)};j.value="OK";style=j.style;style.margin="10px";style.display="inline";style.width="7em";var r=f.createElement("input");r.type="button";r.onclick=function(){return i(!0)};r.value="Cancel";style=r.style;style.margin="10px";style.display="inline";style.width="7em";d.appendChild(j);d.appendChild(r);k.addEvent(f.body,"keydown",g);b.style.top="50%";b.style.left="50%";b.style.display=
"block";if(A)b.style.position="absolute",b.style.top=f.documentElement.scrollTop+200+"px",b.style.left="50%";f.body.appendChild(b);b.style.marginTop=-(n.getHeight(b)/2)+"px";b.style.marginLeft=-(n.getWidth(b)/2)+"px"};setTimeout(function(){h();var a=c.length;if(e.selectionStart!==void 0)e.selectionStart=0,e.selectionEnd=a;else if(e.createTextRange){var b=e.createTextRange();b.collapse(!1);b.moveStart("character",-a);b.moveEnd("character",a);b.select()}e.focus()},0)};var i=C.prototype;i.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)";
i.unwrap=function(a){var c=new p("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(c,"$1 $2")};i.wrap=function(a,c){this.unwrap(a);var d=new p("(.{1,"+c+"})( +|$\\n?)","gm");a.selection=a.selection.replace(d,function(a,c){return(new p("^"+this.prefixes,"")).test(a)?a:c+"\n"});a.selection=a.selection.replace(/\s+$/,"")};i.doBold=function(a,c){return this.doBorI(a,c,2,"strong text")};i.doItalic=function(a,c){return this.doBorI(a,c,1,"emphasized text")};i.doBorI=function(a,
c,d,b){a.trimWhitespace();a.selection=a.selection.replace(/\n{2,}/g,"\n");var e=/(\**$)/.exec(a.before)[0],c=/(^\**)/.exec(a.after)[0],e=Math.min(e.length,c.length);if(e>=d&&(e!=2||d!=1))a.before=a.before.replace(p("[*]{"+d+"}$",""),""),a.after=a.after.replace(p("^[*]{"+d+"}",""),"");else if(!a.selection&&c)a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,""),a.before=a.before+c+p.$1;else{if(!a.selection&&!c)a.selection=b;d=d<=1?"*":"**";a.before+=d;a.after=d+a.after}};i.stripLinkDefs=
function(a,c){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(a,b,e,g,f){c[b]=a.replace(/\s*$/,"");return g?(c[b]=a.replace(/["(](.+?)[")]$/,""),g+f):""})};i.addLinkDef=function(a,c){var d=0,b={};a.before=this.stripLinkDefs(a.before,b);a.selection=this.stripLinkDefs(a.selection,b);a.after=this.stripLinkDefs(a.after,b);var e="",g=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,f=function(a){d++;a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,
"  ["+d+"]:");e+="\n"+a},i=function(a,c,e,h,o,k){e=e.replace(g,i);return b[o]?(f(b[o]),c+e+h+d+k):a};a.before=a.before.replace(g,i);c?f(c):a.selection=a.selection.replace(g,i);var h=d;a.after=a.after.replace(g,i);if(a.after)a.after=a.after.replace(/\n*$/,"");if(!a.after)a.selection=a.selection.replace(/\n*$/,"");a.after+="\n\n"+e;return h};i.doLinkOrImage=function(a,c,d){a.trimWhitespace();a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var b;if(a.endTag.length>1)a.startTag=a.startTag.replace(/!?\[/,
""),a.endTag="",this.addLinkDef(a,null);else if(/\n\n/.test(a.selection))this.addLinkDef(a,null);else{var e=this,g=function(g){b.parentNode.removeChild(b);if(g!==null&&(a.startTag=a.endTag="",g=" [999]: "+D(g),g=e.addLinkDef(a,g),a.startTag=d?"![":"[",a.endTag="]["+g+"]",!a.selection))a.selection=d?"enter image description here":"enter link description here";c()};b=s.createBackground();d?this.hooks.insertImageDialog(g)||s.prompt("<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",
"http://",g):s.prompt('<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',"http://",g);return!0}};i.doAutoindent=function(a){a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n");/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&this.doList&&this.doList(a);/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&this.doBlockquote&&this.doBlockquote(a);
/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&this.doCode&&this.doCode(a)};i.doBlockquote=function(a){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){a.before+=c;a.after=e+a.after;return d});a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){a.selection=c+a.selection;return""});a.selection=a.selection.replace(/^(\s|>)+$/,"");a.selection=a.selection||"Blockquote";var c="",d="",b;if(a.before){for(var e=a.before.replace(/\n$/,"").split("\n"),g=!1,f=0;f<e.length;f++){var i=!1;
b=e[f];g=g&&b.length>0;/^>/.test(b)?(i=!0,!g&&b.length>1&&(g=!0)):i=/^[ \t]*$/.test(b)?!0:g;i?c+=b+"\n":(d+=c+b,c="\n")}/(^|\n)>/.test(c)||(d+=c,c="")}a.startTag=c;a.before=d;if(a.after)a.after=a.after.replace(/^\n?/,"\n");a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){a.endTag=b;return""});c=function(b){var c=b?"> ":"";if(a.startTag)a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"});if(a.endTag)a.endTag=
a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"})};if(/^(?![ ]{0,3}>)/m.test(a.selection))this.wrap(a,70),a.selection=a.selection.replace(/^/gm,"> "),c(!0),a.skipLines();else{a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,"");this.unwrap(a);c(!1);if(!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag)a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n");if(!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag)a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n")}a.selection=
this.hooks.postBlockquoteCreation(a.selection);if(!/\n/.test(a.selection))a.selection=a.selection.replace(/^(> *)/,function(b,c){a.startTag+=c;return""})};i.doCode=function(a){var c=/\S[ ]*$/.test(a.before);if(!/^[ ]*\S/.test(a.after)&&!c||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){a.selection=b+a.selection;return""});var d=c=1;/\n(\t|[ ]{4,}).*\n$/.test(a.before)&&(c=0);/^\n(\t|[ ]{4,})/.test(a.after)&&(d=0);a.skipLines(c,d);a.selection?a.selection=/^[ ]{0,3}\S/m.test(a.selection)?
a.selection.replace(/^/gm,"    "):a.selection.replace(/^[ ]{4}/gm,""):(a.startTag="    ",a.selection="enter code here")}else if(a.trimWhitespace(),a.findTags(/`/,/`/),!a.startTag&&!a.endTag){if(a.startTag=a.endTag="`",!a.selection)a.selection="enter code here"}else a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag=""};i.doList=function(a,c,d){var c=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,b="-",e=1,g=function(){var a;
d?(a=" "+e+". ",e++):a=" "+b+" ";return a},f=function(a){d===void 0&&(d=/^\s*\d/.test(a));return a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(){return g()})};a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null);if(a.before&&!/\n$/.test(a.before)&&!/^\n/.test(a.startTag))a.before+=a.startTag,a.startTag="";if(a.startTag){var i=/\d+[.]/.test(a.startTag);a.startTag="";a.selection=a.selection.replace(/\n[ ]{4}/g,"\n");this.unwrap(a);a.skipLines();if(i)a.after=a.after.replace(c,f);if(d==i)return}var h=
1;a.before=a.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,function(a){if(/^\s*([*+-])/.test(a))b=p.$1;h=/[^\n]\n\n[^\n]/.test(a)?1:0;return f(a)});if(!a.selection)a.selection="List item";var i=g(),j=1;a.after=a.after.replace(c,function(a){j=/[^\n]\n\n[^\n]/.test(a)?1:0;return f(a)});a.trimWhitespace(!0);a.skipLines(h,j,!0);a.startTag=i;c=i.replace(/./g," ");this.wrap(a,72-c.length);a.selection=a.selection.replace(/\n/g,"\n"+c)};
i.doHeading=function(a){a.selection=a.selection.replace(/\s+/g," ");a.selection=a.selection.replace(/(^\s+|\s+$)/g,"");if(a.selection){var c=0;a.findTags(/#+[ ]*/,/[ ]*#+/);if(/#+/.test(a.startTag))c=p.lastMatch.length;a.startTag=a.endTag="";a.findTags(null,/\s?(-+|=+)/);/=+/.test(a.endTag)&&(c=1);/-+/.test(a.endTag)&&(c=2);a.startTag=a.endTag="";a.skipLines(1,1);c=c==0?2:c-1;if(c>0){var c=c>=2?"-":"=",d=a.selection.length;d>72&&(d=72);for(a.endTag="\n";d--;)a.endTag+=c}}else a.startTag="## ",a.selection=
"Heading",a.endTag=" ##"};i.doHorizontalRule=function(a){a.startTag="----------\n";a.selection="";a.skipLines(2,1,!0)}})();(function(){function t(h){return h.replace(/<[^>]*>?/gi,x)}function x(h){return h.match(G)||h.match(u)||h.match(J)?h:""}function A(h){if(h=="")return"";var m=/<\/?\w+[^>]*(\s|$|>)/g,t=h.toLowerCase().match(m),k=(t||[]).length;if(k==0)return h;for(var n,s,f,p=[],u=[],x=!1,i=0;i<k;i++)if(n=t[i].replace(/<\/?(\w+).*/,"$1"),!(p[i]||"<p><img><br><li><hr>".search("<"+n+">")>-1)){s=t[i];f=-1;if(!/^<\//.test(s))for(s=i+1;s<k;s++)if(!p[s]&&t[s]=="</"+n+">"){f=s;break}f==-1?x=u[i]=!0:p[f]=!0}if(!x)return h;
i=0;return h=h.replace(m,function(a){a=u[i]?"":a;i++;return a})}var m,h;typeof exports==="object"&&typeof require==="function"?(m=exports,h=require("./Markdown.Converter").Converter):(m=window.Markdown,h=m.Converter);m.getSanitizingConverter=function(){var m=new h;m.hooks.chain("postConversion",t);m.hooks.chain("postConversion",A);return m};var G=/^(<\/?(table|tr|th|td|b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,u=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
J=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i})();
