(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [6], { 1082: function(e, t, n) {! function(e) { "use strict";
                e.defineMode("markdown", (function(t, n) { var i = e.getMode(t, "text/html"),
                        r = "null" == i.name;

                    function o(n) { if (e.findModeByName) { var i = e.findModeByName(n);
                            i && (n = i.mime || i.mimes[0]) } var r = e.getMode(t, n); return "null" == r.name ? null : r }
                    void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.emoji && (n.emoji = !1), void 0 === n.fencedCodeBlockHighlighting && (n.fencedCodeBlockHighlighting = !0), void 0 === n.fencedCodeBlockDefaultMode && (n.fencedCodeBlockDefaultMode = "text/plain"), void 0 === n.xml && (n.xml = !0), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {}); var a = { header: "header", code: "comment", quote: "quote", list1: "variable-2", list2: "variable-3", list3: "keyword", hr: "hr", image: "image", imageAltText: "image-alt-text", imageMarker: "image-marker", formatting: "formatting", linkInline: "link", linkEmail: "link", linkText: "link", linkHref: "string", em: "em", strong: "strong", strikethrough: "strikethrough", emoji: "builtin" }; for (var l in a) a.hasOwnProperty(l) && n.tokenTypeOverrides[l] && (a[l] = n.tokenTypeOverrides[l]); var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
                        u = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                        c = /^\[(x| )\](?=\s)/i,
                        d = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                        h = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                        f = /^[^#!\[\]*_\\<>` "'(~:]+/,
                        p = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                        m = /^\s*\[[^\]]+?\]:.*$/,
                        g = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                        v = "    ";

                    function x(e, t, n) { return t.f = t.inline = n, n(e, t) }

                    function y(e, t, n) { return t.f = t.block = n, n(e, t) }

                    function b(e) { return !e || !/\S/.test(e.string) }

                    function D(t) { if (t.linkTitle = !1, t.linkHref = !1, t.linkText = !1, t.em = !1, t.strong = !1, t.strikethrough = !1, t.quote = 0, t.indentedCode = !1, t.f == w) { var n = r; if (!n) { var o = e.innerMode(i, t.htmlState);
                                n = "xml" == o.mode.name && null === o.state.tagStart && !o.state.context && o.state.tokenize.isInText }
                            n && (t.f = A, t.block = C, t.htmlState = null) } return t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.prevLine = t.thisLine, t.thisLine = { stream: null }, null }

                    function C(t, i) { var r = t.column() === i.indentation,
                            l = b(i.prevLine.stream),
                            f = i.indentedCode,
                            g = i.prevLine.hr,
                            v = !1 !== i.list,
                            y = (i.listStack[i.listStack.length - 1] || 0) + 3;
                        i.indentedCode = !1; var D = i.indentation; if (null === i.indentationDiff && (i.indentationDiff = i.indentation, v)) { for (i.list = null; D < i.listStack[i.listStack.length - 1];) i.listStack.pop(), i.listStack.length ? i.indentation = i.listStack[i.listStack.length - 1] : i.list = !1;!1 !== i.list && (i.indentationDiff = D - i.listStack[i.listStack.length - 1]) } var C = !l && !g && !i.prevLine.header && (!v || !f) && !i.prevLine.fencedCodeEnd,
                            w = (!1 === i.list || g || l) && i.indentation <= y && t.match(s),
                            F = null; if (i.indentationDiff >= 4 && (f || i.prevLine.fencedCodeEnd || i.prevLine.header || l)) return t.skipToEnd(), i.indentedCode = !0, a.code; if (t.eatSpace()) return null; if (r && i.indentation <= y && (F = t.match(d)) && F[1].length <= 6) return i.quote = 0, i.header = F[1].length, i.thisLine.header = !0, n.highlightFormatting && (i.formatting = "header"), i.f = i.inline, S(i); if (i.indentation <= y && t.eat(">")) return i.quote = r ? 1 : i.quote + 1, n.highlightFormatting && (i.formatting = "quote"), t.eatSpace(), S(i); if (!w && !i.setext && r && i.indentation <= y && (F = t.match(u))) { var A = F[1] ? "ol" : "ul"; return i.indentation = D + t.current().length, i.list = !0, i.quote = 0, i.listStack.push(i.indentation), i.em = !1, i.strong = !1, i.code = !1, i.strikethrough = !1, n.taskLists && t.match(c, !1) && (i.taskList = !0), i.f = i.inline, n.highlightFormatting && (i.formatting = ["list", "list-" + A]), S(i) } return r && i.indentation <= y && (F = t.match(p, !0)) ? (i.quote = 0, i.fencedEndRE = new RegExp(F[1] + "+ *$"), i.localMode = n.fencedCodeBlockHighlighting && o(F[2] || n.fencedCodeBlockDefaultMode), i.localMode && (i.localState = e.startState(i.localMode)), i.f = i.block = k, n.highlightFormatting && (i.formatting = "code-block"), i.code = -1, S(i)) : i.setext || !(C && v || i.quote || !1 !== i.list || i.code || w || m.test(t.string)) && (F = t.lookAhead(1)) && (F = F.match(h)) ? (i.setext ? (i.header = i.setext, i.setext = 0, t.skipToEnd(), n.highlightFormatting && (i.formatting = "header")) : (i.header = "=" == F[0].charAt(0) ? 1 : 2, i.setext = i.header), i.thisLine.header = !0, i.f = i.inline, S(i)) : w ? (t.skipToEnd(), i.hr = !0, i.thisLine.hr = !0, a.hr) : "[" === t.peek() ? x(t, i, B) : x(t, i, i.inline) }

                    function w(t, n) { var o = i.token(t, n.htmlState); if (!r) { var a = e.innerMode(i, n.htmlState);
                            ("xml" == a.mode.name && null === a.state.tagStart && !a.state.context && a.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = A, n.block = C, n.htmlState = null) } return o }

                    function k(e, t) { var i, r = t.listStack[t.listStack.length - 1] || 0,
                            o = t.indentation < r,
                            l = r + 3; return t.fencedEndRE && t.indentation <= l && (o || e.match(t.fencedEndRE)) ? (n.highlightFormatting && (t.formatting = "code-block"), o || (i = S(t)), t.localMode = t.localState = null, t.block = C, t.f = A, t.fencedEndRE = null, t.code = 0, t.thisLine.fencedCodeEnd = !0, o ? y(e, t, t.block) : i) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), a.code) }

                    function S(e) { var t = []; if (e.formatting) { t.push(a.formatting), "string" === typeof e.formatting && (e.formatting = [e.formatting]); for (var i = 0; i < e.formatting.length; i++) t.push(a.formatting + "-" + e.formatting[i]), "header" === e.formatting[i] && t.push(a.formatting + "-" + e.formatting[i] + "-" + e.header), "quote" === e.formatting[i] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(a.formatting + "-" + e.formatting[i] + "-" + e.quote) : t.push("error")) } if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null; if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null; if (e.linkHref ? t.push(a.linkHref, "url") : (e.strong && t.push(a.strong), e.em && t.push(a.em), e.strikethrough && t.push(a.strikethrough), e.emoji && t.push(a.emoji), e.linkText && t.push(a.linkText), e.code && t.push(a.code), e.image && t.push(a.image), e.imageAltText && t.push(a.imageAltText, "link"), e.imageMarker && t.push(a.imageMarker)), e.header && t.push(a.header, a.header + "-" + e.header), e.quote && (t.push(a.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(a.quote + "-" + e.quote) : t.push(a.quote + "-" + n.maxBlockquoteDepth)), !1 !== e.list) { var r = (e.listStack.length - 1) % 3;
                            r ? 1 === r ? t.push(a.list2) : t.push(a.list3) : t.push(a.list1) } return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null }

                    function F(e, t) { if (e.match(f, !0)) return S(t) }

                    function A(t, r) { var o = r.text(t, r); if ("undefined" !== typeof o) return o; if (r.list) return r.list = null, S(r); if (r.taskList) return " " === t.match(c, !0)[1] ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, S(r); if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), S(r); var l = t.next(); if (r.linkTitle) { r.linkTitle = !1; var s = l; "(" === l && (s = ")"); var u = "^\\s*(?:[^" + (s = (s + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) + "\\\\]+|\\\\\\\\|\\\\.)" + s; if (t.match(new RegExp(u), !0)) return a.linkHref } if ("`" === l) { var d = r.formatting;
                            n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`"); var h = t.current().length; if (0 != r.code || r.quote && 1 != h) { if (h == r.code) { var f = S(r); return r.code = 0, f } return r.formatting = d, S(r) } return r.code = h, S(r) } if (r.code) return S(r); if ("\\" === l && (t.next(), n.highlightFormatting)) { var p = S(r),
                                m = a.formatting + "-escape"; return p ? p + " " + m : m } if ("!" === l && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return r.imageMarker = !0, r.image = !0, n.highlightFormatting && (r.formatting = "image"), S(r); if ("[" === l && r.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return r.imageMarker = !1, r.imageAltText = !0, n.highlightFormatting && (r.formatting = "image"), S(r); if ("]" === l && r.imageAltText) { n.highlightFormatting && (r.formatting = "image"); var p = S(r); return r.imageAltText = !1, r.image = !1, r.inline = r.f = T, p } if ("[" === l && !r.image) return r.linkText && t.match(/^.*?\]/) || (r.linkText = !0, n.highlightFormatting && (r.formatting = "link")), S(r); if ("]" === l && r.linkText) { n.highlightFormatting && (r.formatting = "link"); var p = S(r); return r.linkText = !1, r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? T : A, p } if ("<" === l && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = E, n.highlightFormatting && (r.formatting = "link"), (p = S(r)) ? p += " " : p = "", p + a.linkInline; if ("<" === l && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = E, n.highlightFormatting && (r.formatting = "link"), (p = S(r)) ? p += " " : p = "", p + a.linkEmail; if (n.xml && "<" === l && t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, !1)) { var v = t.string.indexOf(">", t.pos); if (-1 != v) { var x = t.string.substring(t.start, v); /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) && (r.md_inside = !0) } return t.backUp(1), r.htmlState = e.startState(i), y(t, r, w) } if (n.xml && "<" === l && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag"; if ("*" === l || "_" === l) { for (var b = 1, D = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); b < 3 && t.eat(l);) b++; var C = t.peek() || " ",
                                k = !/\s/.test(C) && (!g.test(C) || /\s/.test(D) || g.test(D)),
                                F = !/\s/.test(D) && (!g.test(D) || /\s/.test(C) || g.test(C)),
                                L = null,
                                M = null; if (b % 2 && (r.em || !k || "*" !== l && F && !g.test(D) ? r.em != l || !F || "*" !== l && k && !g.test(C) || (L = !1) : L = !0), b > 1 && (r.strong || !k || "*" !== l && F && !g.test(D) ? r.strong != l || !F || "*" !== l && k && !g.test(C) || (M = !1) : M = !0), null != M || null != L) return n.highlightFormatting && (r.formatting = null == L ? "strong" : null == M ? "em" : "strong em"), !0 === L && (r.em = l), !0 === M && (r.strong = l), f = S(r), !1 === L && (r.em = !1), !1 === M && (r.strong = !1), f } else if (" " === l && (t.eat("*") || t.eat("_"))) { if (" " === t.peek()) return S(r);
                            t.backUp(1) } if (n.strikethrough)
                            if ("~" === l && t.eatWhile(l)) { if (r.strikethrough) return n.highlightFormatting && (r.formatting = "strikethrough"), f = S(r), r.strikethrough = !1, f; if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), S(r) } else if (" " === l && t.match("~~", !0)) { if (" " === t.peek()) return S(r);
                            t.backUp(2) } if (n.emoji && ":" === l && t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) { r.emoji = !0, n.highlightFormatting && (r.formatting = "emoji"); var B = S(r); return r.emoji = !1, B } return " " === l && (t.match(/^ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), S(r) }

                    function E(e, t) { if (">" === e.next()) { t.f = t.inline = A, n.highlightFormatting && (t.formatting = "link"); var i = S(t); return i ? i += " " : i = "", i + a.linkInline } return e.match(/^[^>]+/, !0), a.linkInline }

                    function T(e, t) { if (e.eatSpace()) return null; var i = e.next(); return "(" === i || "[" === i ? (t.f = t.inline = M("(" === i ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, S(t)) : "error" } var L = { ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/, "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/ };

                    function M(e) { return function(t, i) { if (t.next() === e) { i.f = i.inline = A, n.highlightFormatting && (i.formatting = "link-string"); var r = S(i); return i.linkHref = !1, r } return t.match(L[e]), i.linkHref = !0, S(i) } }

                    function B(e, t) { return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = N, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, S(t)) : x(e, t, A) }

                    function N(e, t) { if (e.match("]:", !0)) { t.f = t.inline = O, n.highlightFormatting && (t.formatting = "link"); var i = S(t); return t.linkText = !1, i } return e.match(/^([^\]\\]|\\.)+/, !0), a.linkText }

                    function O(e, t) { return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/, !0), t.f = t.inline = A, a.linkHref + " url") } var I = { startState: function() { return { f: C, prevLine: { stream: null }, thisLine: { stream: null }, block: C, htmlState: null, indentation: 0, inline: A, text: F, formatting: !1, linkText: !1, linkHref: !1, linkTitle: !1, code: 0, em: !1, strong: !1, header: 0, setext: 0, hr: !1, taskList: !1, list: !1, listStack: [], quote: 0, trailingSpace: 0, trailingSpaceNewLine: !1, strikethrough: !1, emoji: !1, fencedEndRE: null } }, copyState: function(t) { return { f: t.f, prevLine: t.prevLine, thisLine: t.thisLine, block: t.block, htmlState: t.htmlState && e.copyState(i, t.htmlState), indentation: t.indentation, localMode: t.localMode, localState: t.localMode ? e.copyState(t.localMode, t.localState) : null, inline: t.inline, text: t.text, formatting: !1, linkText: t.linkText, linkTitle: t.linkTitle, linkHref: t.linkHref, code: t.code, em: t.em, strong: t.strong, strikethrough: t.strikethrough, emoji: t.emoji, header: t.header, setext: t.setext, hr: t.hr, taskList: t.taskList, list: t.list, listStack: t.listStack.slice(0), quote: t.quote, indentedCode: t.indentedCode, trailingSpace: t.trailingSpace, trailingSpaceNewLine: t.trailingSpaceNewLine, md_inside: t.md_inside, fencedEndRE: t.fencedEndRE } }, token: function(e, t) { if (t.formatting = !1, e != t.thisLine.stream) { if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0)) return D(t), null; if (t.prevLine = t.thisLine, t.thisLine = { stream: e }, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, !t.localState && (t.f = t.block, t.f != w)) { var n = e.match(/^\s*/, !0)[0].replace(/\t/g, v).length; if (t.indentation = n, t.indentationDiff = null, n > 0) return null } } return t.f(e, t) }, innerMode: function(e) { return e.block == w ? { state: e.htmlState, mode: i } : e.localState ? { state: e.localState, mode: e.localMode } : { state: e, mode: I } }, indent: function(t, n, r) { return t.block == w && i.indent ? i.indent(t.htmlState, n, r) : t.localState && t.localMode.indent ? t.localMode.indent(t.localState, n, r) : e.Pass }, blankLine: D, getType: S, blockCommentStart: "\x3c!--", blockCommentEnd: "--\x3e", closeBrackets: "()[]{}''\"\"``", fold: "markdown" }; return I }), "xml"), e.defineMIME("text/markdown", "markdown"), e.defineMIME("text/x-markdown", "markdown") }(n(800), n(1083), n(1473)) }, 1083: function(e, t, n) {! function(e) { "use strict"; var t = { autoSelfClosers: { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0, menuitem: !0 }, implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 }, contextGrabbers: { dd: { dd: !0, dt: !0 }, dt: { dd: !0, dt: !0 }, li: { li: !0 }, option: { option: !0, optgroup: !0 }, optgroup: { optgroup: !0 }, p: { address: !0, article: !0, aside: !0, blockquote: !0, dir: !0, div: !0, dl: !0, fieldset: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, menu: !0, nav: !0, ol: !0, p: !0, pre: !0, section: !0, table: !0, ul: !0 }, rp: { rp: !0, rt: !0 }, rt: { rp: !0, rt: !0 }, tbody: { tbody: !0, tfoot: !0 }, td: { td: !0, th: !0 }, tfoot: { tbody: !0 }, th: { td: !0, th: !0 }, thead: { tbody: !0, tfoot: !0 }, tr: { tr: !0 } }, doNotIndent: { pre: !0 }, allowUnquoted: !0, allowMissing: !0, caseFold: !0 },
                    n = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, allowMissingTagName: !1, caseFold: !1 };
                e.defineMode("xml", (function(i, r) { var o, a, l = i.indentUnit,
                        s = {},
                        u = r.htmlMode ? t : n; for (var c in u) s[c] = u[c]; for (var c in r) s[c] = r[c];

                    function d(e, t) {
                        function n(n) { return t.tokenize = n, n(e, t) } var i = e.next(); return "<" == i ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(p("atom", "]]>")) : null : e.match("--") ? n(p("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(m(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = p("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = h, "tag bracket") : "&" == i ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null) }

                    function h(e, t) { var n = e.next(); if (">" == n || "/" == n && e.eat(">")) return t.tokenize = d, o = ">" == n ? "endTag" : "selfcloseTag", "tag bracket"; if ("=" == n) return o = "equals", null; if ("<" == n) { t.tokenize = d, t.state = y, t.tagName = t.tagStart = null; var i = t.tokenize(e, t); return i ? i + " tag error" : "tag error" } return /[\'\"]/.test(n) ? (t.tokenize = f(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word") }

                    function f(e) { var t = function(t, n) { for (; !t.eol();)
                                if (t.next() == e) { n.tokenize = h; break }
                            return "string" }; return t.isInAttribute = !0, t }

                    function p(e, t) { return function(n, i) { for (; !n.eol();) { if (n.match(t)) { i.tokenize = d; break }
                                n.next() } return e } }

                    function m(e) { return function(t, n) { for (var i; null != (i = t.next());) { if ("<" == i) return n.tokenize = m(e + 1), n.tokenize(t, n); if (">" == i) { if (1 == e) { n.tokenize = d; break } return n.tokenize = m(e - 1), n.tokenize(t, n) } } return "meta" } }

                    function g(e, t, n) { this.prev = e.context, this.tagName = t || "", this.indent = e.indented, this.startOfLine = n, (s.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0) }

                    function v(e) { e.context && (e.context = e.context.prev) }

                    function x(e, t) { for (var n;;) { if (!e.context) return; if (n = e.context.tagName, !s.contextGrabbers.hasOwnProperty(n) || !s.contextGrabbers[n].hasOwnProperty(t)) return;
                            v(e) } }

                    function y(e, t, n) { return "openTag" == e ? (n.tagStart = t.column(), b) : "closeTag" == e ? D : y }

                    function b(e, t, n) { return "word" == e ? (n.tagName = t.current(), a = "tag", k) : s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", k(e, t, n)) : (a = "error", b) }

                    function D(e, t, n) { if ("word" == e) { var i = t.current(); return n.context && n.context.tagName != i && s.implicitlyClosed.hasOwnProperty(n.context.tagName) && v(n), n.context && n.context.tagName == i || !1 === s.matchClosing ? (a = "tag", C) : (a = "tag error", w) } return s.allowMissingTagName && "endTag" == e ? (a = "tag bracket", C(e, t, n)) : (a = "error", w) }

                    function C(e, t, n) { return "endTag" != e ? (a = "error", C) : (v(n), y) }

                    function w(e, t, n) { return a = "error", C(e, t, n) }

                    function k(e, t, n) { if ("word" == e) return a = "attribute", S; if ("endTag" == e || "selfcloseTag" == e) { var i = n.tagName,
                                r = n.tagStart; return n.tagName = n.tagStart = null, "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(i) ? x(n, i) : (x(n, i), n.context = new g(n, i, r == n.indented)), y } return a = "error", k }

                    function S(e, t, n) { return "equals" == e ? F : (s.allowMissing || (a = "error"), k(e, t, n)) }

                    function F(e, t, n) { return "string" == e ? A : "word" == e && s.allowUnquoted ? (a = "string", k) : (a = "error", k(e, t, n)) }

                    function A(e, t, n) { return "string" == e ? A : k(e, t, n) } return d.isInText = !0, { startState: function(e) { var t = { tokenize: d, state: y, indented: e || 0, tagName: null, tagStart: null, context: null }; return null != e && (t.baseIndent = e), t }, token: function(e, t) { if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                            o = null; var n = t.tokenize(e, t); return (n || o) && "comment" != n && (a = null, t.state = t.state(o || n, e, t), a && (n = "error" == a ? n + " error" : a)), n }, indent: function(t, n, i) { var r = t.context; if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + l; if (r && r.noIndent) return e.Pass; if (t.tokenize != h && t.tokenize != d) return i ? i.match(/^(\s*)/)[0].length : 0; if (t.tagName) return !1 !== s.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + l * (s.multilineTagIndentFactor || 1); if (s.alignCDATA && /<!\[CDATA\[/.test(n)) return 0; var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n); if (o && o[1])
                                for (; r;) { if (r.tagName == o[2]) { r = r.prev; break } if (!s.implicitlyClosed.hasOwnProperty(r.tagName)) break;
                                    r = r.prev } else if (o)
                                    for (; r;) { var a = s.contextGrabbers[r.tagName]; if (!a || !a.hasOwnProperty(o[2])) break;
                                        r = r.prev }
                                for (; r && r.prev && !r.startOfLine;) r = r.prev;
                            return r ? r.indent + l : t.baseIndent || 0 }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "\x3c!--", blockCommentEnd: "--\x3e", configuration: s.htmlMode ? "html" : "xml", helperType: s.htmlMode ? "html" : "xml", skipAttribute: function(e) { e.state == F && (e.state = k) }, xmlCurrentTag: function(e) { return e.tagName ? { name: e.tagName, close: "closeTag" == e.type } : null }, xmlCurrentContext: function(e) { for (var t = [], n = e.context; n; n = n.prev) t.push(n.tagName); return t.reverse() } } })), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 }) }(n(800)) }, 1084: function(e, t, n) {! function(e) { "use strict";
                e.overlayMode = function(t, n, i) { return { startState: function() { return { base: e.startState(t), overlay: e.startState(n), basePos: 0, baseCur: null, overlayPos: 0, overlayCur: null, streamSeen: null } }, copyState: function(i) { return { base: e.copyState(t, i.base), overlay: e.copyState(n, i.overlay), basePos: i.basePos, baseCur: null, overlayPos: i.overlayPos, overlayCur: null } }, token: function(e, r) { return (e != r.streamSeen || Math.min(r.basePos, r.overlayPos) < e.start) && (r.streamSeen = e, r.basePos = r.overlayPos = e.start), e.start == r.basePos && (r.baseCur = t.token(e, r.base), r.basePos = e.pos), e.start == r.overlayPos && (e.pos = e.start, r.overlayCur = n.token(e, r.overlay), r.overlayPos = e.pos), e.pos = Math.min(r.basePos, r.overlayPos), null == r.overlayCur ? r.baseCur : null != r.baseCur && r.overlay.combineTokens || i && null == r.overlay.combineTokens ? r.baseCur + " " + r.overlayCur : r.overlayCur }, indent: t.indent && function(e, n, i) { return t.indent(e.base, n, i) }, electricChars: t.electricChars, innerMode: function(e) { return { state: e.base, mode: t } }, blankLine: function(e) { var r, o; return t.blankLine && (r = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? r : i && null != r ? r + " " + o : o } } } }(n(800)) }, 1469: function(e, t, n) { "use strict"; var i = n(800);
            n(1470), n(1471), n(1472), n(1082), n(1084), n(1474), n(1475), n(1476), n(1477), n(1478), n(1083); var r = n(1479),
                o = n(1482),
                a = /Mac/.test(navigator.platform),
                l = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),
                s = { toggleBold: C, toggleItalic: w, drawLink: I, toggleHeadingSmaller: A, toggleHeadingBigger: E, drawImage: z, toggleBlockquote: F, toggleOrderedList: N, toggleUnorderedList: B, toggleCodeBlock: S, togglePreview: U, toggleStrikethrough: k, toggleHeading1: T, toggleHeading2: L, toggleHeading3: M, cleanBlock: O, drawTable: P, drawHorizontalRule: _, undo: W, redo: j, toggleSideBySide: q, toggleFullScreen: D },
                u = { toggleBold: "Cmd-B", toggleItalic: "Cmd-I", drawLink: "Cmd-K", toggleHeadingSmaller: "Cmd-H", toggleHeadingBigger: "Shift-Cmd-H", cleanBlock: "Cmd-E", drawImage: "Cmd-Alt-I", toggleBlockquote: "Cmd-'", toggleOrderedList: "Cmd-Alt-L", toggleUnorderedList: "Cmd-L", toggleCodeBlock: "Cmd-Alt-C", togglePreview: "Cmd-P", toggleSideBySide: "F9", toggleFullScreen: "F11" },
                c = function() { var e, t = !1; return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0, 4))) && (t = !0), t };

            function d(e) { return e = a ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl") } var h = {};

            function f(e) { return h[e] || (h[e] = new RegExp("\\s*" + e + "(\\s*)", "g")) }

            function p(e, t) { if (e && t) { var n = f(t);
                    e.className.match(n) || (e.className += " " + t) } }

            function m(e, t) { if (e && t) { var n = f(t);
                    e.className.match(n) && (e.className = e.className.replace(n, "$1")) } }

            function g(e, t, n, i) { var r = v(e, !1, t, n, "button", i);
                r.className += " easymde-dropdown"; var o = document.createElement("div");
                o.className = "easymde-dropdown-content"; for (var a = 0; a < e.children.length; a++) { var l, s = e.children[a];
                    l = v("string" === typeof s && s in Q ? Q[s] : s, !0, t, n, "button", i), o.appendChild(l) } return r.appendChild(o), r }

            function v(e, t, n, i, r, o) { e = e || {}; var l = document.createElement(r);
                l.className = e.name, l.setAttribute("type", r), n = void 0 == n || n, e.name && e.name in i && (s[e.name] = e.action), e.title && n && (l.title = function(e, t, n) { var i, r = e;
                    t && n[i = function(e) { for (var t in s)
                            if (s[t] === e) return t;
                        return null }(t)] && (r += " (" + d(n[i]) + ")"); return r }(e.title, e.action, i), a && (l.title = l.title.replace("Ctrl", "\u2318"), l.title = l.title.replace("Alt", "\u2325"))), e.noDisable && l.classList.add("no-disable"), e.noMobile && l.classList.add("no-mobile"); var u = []; "undefined" !== typeof e.className && (u = e.className.split(" ")); for (var c = [], h = 0; h < u.length; h++) { var f = u[h];
                    f.match(/^fa([srlb]|(-[\w-]*)|$)/) ? c.push(f) : l.classList.add(f) }
                l.tabIndex = -1; for (var p = document.createElement("i"), m = 0; m < c.length; m++) { var g = c[m];
                    p.classList.add(g) } return l.appendChild(p), "undefined" !== typeof e.icon && (l.innerHTML = e.icon), e.action && t && ("function" === typeof e.action ? l.onclick = function(t) { t.preventDefault(), e.action(o) } : "string" === typeof e.action && (l.onclick = function(t) { t.preventDefault(), window.open(e.action, "_blank") })), l }

            function x() { var e = document.createElement("i"); return e.className = "separator", e.innerHTML = "|", e }

            function y(e, t) { t = t || e.getCursor("start"); var n = e.getTokenAt(t); if (!n.type) return {}; for (var i, r, o = n.type.split(" "), a = {}, l = 0; l < o.length; l++) "strong" === (i = o[l]) ? a.bold = !0 : "variable-2" === i ? (r = e.getLine(t.line), /^\s*\d+\.\s/.test(r) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === i ? a.quote = !0 : "em" === i ? a.italic = !0 : "quote" === i ? a.quote = !0 : "strikethrough" === i ? a.strikethrough = !0 : "comment" === i ? a.code = !0 : "link" === i ? a.link = !0 : "tag" === i ? a.image = !0 : i.match(/^header(-[1-6])?$/) && (a[i.replace("header", "heading")] = !0); return a } var b = "";

            function D(e) { var t = e.codemirror;
                t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (b = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = b; var n = t.getWrapperElement(),
                    i = n.nextSibling; if (/editor-preview-active-side/.test(i.className))
                    if (!1 === e.options.sideBySideFullscreen) { var r = n.parentNode;
                        t.getOption("fullScreen") ? m(r, "sided--no-fullscreen") : p(r, "sided--no-fullscreen") } else q(e);
                if (e.options.onToggleFullScreen && e.options.onToggleFullScreen(t.getOption("fullScreen") || !1), "undefined" !== typeof e.options.maxHeight && (t.getOption("fullScreen") ? (t.getScrollerElement().style.removeProperty("height"), i.style.removeProperty("height")) : (t.getScrollerElement().style.height = e.options.maxHeight, e.setPreviewMaxHeight())), /fullscreen/.test(e.toolbar_div.className) ? e.toolbar_div.className = e.toolbar_div.className.replace(/\s*fullscreen\b/, "") : e.toolbar_div.className += " fullscreen", e.toolbarElements && e.toolbarElements.fullscreen) { var o = e.toolbarElements.fullscreen; /active/.test(o.className) ? o.className = o.className.replace(/\s*active\s*/g, "") : o.className += " active" } }

            function C(e) { K(e, "bold", e.options.blockStyles.bold) }

            function w(e) { K(e, "italic", e.options.blockStyles.italic) }

            function k(e) { K(e, "strikethrough", "~~") }

            function S(e) { var t = e.options.blockStyles.code;

                function n(e) { if ("object" !== typeof e) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof e + ": " + e; return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf("formatting-code-block") }

                function i(e) { return e.state.base.base || e.state.base }

                function r(e, t, r, o, a) { r = r || e.getLineHandle(t), o = o || e.getTokenAt({ line: t, ch: 1 }), a = a || !!r.text && e.getTokenAt({ line: t, ch: r.text.length - 1 }); var l = o.type ? o.type.split(" ") : []; return a && i(a).indentedCode ? "indented" : -1 !== l.indexOf("comment") && (i(o).fencedChars || i(a).fencedChars || n(r) ? "fenced" : "single") } var o, a, l, s = e.codemirror,
                    u = s.getCursor("start"),
                    c = s.getCursor("end"),
                    d = s.getTokenAt({ line: u.line, ch: u.ch || 1 }),
                    h = s.getLineHandle(u.line),
                    f = r(s, u.line, h, d); if ("single" === f) { var p = h.text.slice(0, u.ch).replace("`", ""),
                        m = h.text.slice(u.ch).replace("`", "");
                    s.replaceRange(p + m, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), u.ch--, u !== c && c.ch--, s.setSelection(u, c), s.focus() } else if ("fenced" === f)
                    if (u.line !== c.line || u.ch !== c.ch) { for (o = u.line; o >= 0 && !n(h = s.getLineHandle(o)); o--); var g, v, x, y, b = i(s.getTokenAt({ line: o, ch: 1 })).fencedChars;
                        n(s.getLineHandle(u.line)) ? (g = "", v = u.line) : n(s.getLineHandle(u.line - 1)) ? (g = "", v = u.line - 1) : (g = b + "\n", v = u.line), n(s.getLineHandle(c.line)) ? (x = "", y = c.line, 0 === c.ch && (y += 1)) : 0 !== c.ch && n(s.getLineHandle(c.line + 1)) ? (x = "", y = c.line + 1) : (x = b + "\n", y = c.line + 1), 0 === c.ch && (y -= 1), s.operation((function() { s.replaceRange(x, { line: y, ch: 0 }, { line: y + (x ? 0 : 1), ch: 0 }), s.replaceRange(g, { line: v, ch: 0 }, { line: v + (g ? 0 : 1), ch: 0 }) })), s.setSelection({ line: v + (g ? 1 : 0), ch: 0 }, { line: y + (g ? 1 : -1), ch: 0 }), s.focus() } else { var D = u.line; if (n(s.getLineHandle(u.line)) && ("fenced" === r(s, u.line + 1) ? (o = u.line, D = u.line + 1) : (a = u.line, D = u.line - 1)), void 0 === o)
                            for (o = D; o >= 0 && !n(h = s.getLineHandle(o)); o--); if (void 0 === a)
                            for (l = s.lineCount(), a = D; a < l && !n(h = s.getLineHandle(a)); a++);
                        s.operation((function() { s.replaceRange("", { line: o, ch: 0 }, { line: o + 1, ch: 0 }), s.replaceRange("", { line: a - 1, ch: 0 }, { line: a, ch: 0 }) })), s.focus() }
                else if ("indented" === f) { if (u.line !== c.line || u.ch !== c.ch) o = u.line, a = c.line, 0 === c.ch && a--;
                    else { for (o = u.line; o >= 0; o--)
                            if (!(h = s.getLineHandle(o)).text.match(/^\s*$/) && "indented" !== r(s, o, h)) { o += 1; break }
                        for (l = s.lineCount(), a = u.line; a < l; a++)
                            if (!(h = s.getLineHandle(a)).text.match(/^\s*$/) && "indented" !== r(s, a, h)) { a -= 1; break } } var C = s.getLineHandle(a + 1),
                        w = C && s.getTokenAt({ line: a + 1, ch: C.text.length - 1 });
                    w && i(w).indentedCode && s.replaceRange("\n", { line: a + 1, ch: 0 }); for (var k = o; k <= a; k++) s.indentLine(k, "subtract");
                    s.focus() } else { var S = u.line === c.line && u.ch === c.ch && 0 === u.ch,
                        F = u.line !== c.line;
                    S || F ? function(e, t, n, i) { var r = t.line + 1,
                            o = n.line + 1,
                            a = t.line !== n.line,
                            l = i + "\n",
                            s = "\n" + i;
                        a && o++, a && 0 === n.ch && (s = i + "\n", o--), $(e, !1, [l, s]), e.setSelection({ line: r, ch: 0 }, { line: o, ch: 0 }) }(s, u, c, t) : $(s, !1, ["`", "`"]) } }

            function F(e) { V(e.codemirror, "quote") }

            function A(e) { G(e.codemirror, "smaller") }

            function E(e) { G(e.codemirror, "bigger") }

            function T(e) { G(e.codemirror, void 0, 1) }

            function L(e) { G(e.codemirror, void 0, 2) }

            function M(e) { G(e.codemirror, void 0, 3) }

            function B(e) { V(e.codemirror, "unordered-list") }

            function N(e) { V(e.codemirror, "ordered-list") }

            function O(e) {! function(e) { if (/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) return; for (var t, n = e.getCursor("start"), i = e.getCursor("end"), r = n.line; r <= i.line; r++) t = (t = e.getLine(r)).replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, { line: r, ch: 0 }, { line: r, ch: 99999999999999 }) }(e.codemirror) }

            function I(e) { var t = e.codemirror,
                    n = y(t),
                    i = e.options,
                    r = "https://"; if (i.promptURLs && !(r = prompt(i.promptTexts.link, "https://"))) return !1;
                $(t, n.link, i.insertTexts.link, r) }

            function z(e) { var t = e.codemirror,
                    n = y(t),
                    i = e.options,
                    r = "https://"; if (i.promptURLs && !(r = prompt(i.promptTexts.image, "https://"))) return !1;
                $(t, n.image, i.insertTexts.image, r) }

            function H(e) { e.openBrowseFileWindow() }

            function R(e, t) { var n = e.codemirror,
                    i = y(n),
                    r = e.options,
                    o = t.substr(t.lastIndexOf("/") + 1),
                    a = o.substring(o.lastIndexOf(".") + 1).replace(/\?.*$/, ""); if (["png", "jpg", "jpeg", "gif", "svg"].includes(a)) $(n, i.image, r.insertTexts.uploadedImage, t);
                else { var l = r.insertTexts.link;
                    l[0] = "[" + o, $(n, i.link, l, t) }
                e.updateStatusBar("upload-image", e.options.imageTexts.sbOnUploaded.replace("#image_name#", o)), setTimeout((function() { e.updateStatusBar("upload-image", e.options.imageTexts.sbInit) }), 1e3) }

            function P(e) { var t = e.codemirror,
                    n = y(t),
                    i = e.options;
                $(t, n.table, i.insertTexts.table) }

            function _(e) { var t = e.codemirror,
                    n = y(t),
                    i = e.options;
                $(t, n.image, i.insertTexts.horizontalRule) }

            function W(e) { var t = e.codemirror;
                t.undo(), t.focus() }

            function j(e) { var t = e.codemirror;
                t.redo(), t.focus() }

            function q(e) { var t = e.codemirror,
                    n = t.getWrapperElement(),
                    i = n.nextSibling,
                    r = e.toolbarElements && e.toolbarElements["side-by-side"],
                    o = !1,
                    a = n.parentNode; /editor-preview-active-side/.test(i.className) ? (!1 === e.options.sideBySideFullscreen && m(a, "sided--no-fullscreen"), i.className = i.className.replace(/\s*editor-preview-active-side\s*/g, ""), r && (r.className = r.className.replace(/\s*active\s*/g, "")), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout((function() { t.getOption("fullScreen") || (!1 === e.options.sideBySideFullscreen ? p(a, "sided--no-fullscreen") : D(e)), i.className += " editor-preview-active-side" }), 1), r && (r.className += " active"), n.className += " CodeMirror-sided", o = !0); var l = n.lastChild; if (/editor-preview-active/.test(l.className)) { l.className = l.className.replace(/\s*editor-preview-active\s*/g, ""); var s = e.toolbarElements.preview,
                        u = e.toolbar_div;
                    s.className = s.className.replace(/\s*active\s*/g, ""), u.className = u.className.replace(/\s*disabled-for-preview*/g, "") } if (t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = function() { var t = e.options.previewRender(e.value(), i);
                        null != t && (i.innerHTML = t) }), o) { var c = e.options.previewRender(e.value(), i);
                    null != c && (i.innerHTML = c), t.on("update", t.sideBySideRenderingFunction) } else t.off("update", t.sideBySideRenderingFunction);
                t.refresh() }

            function U(e) { var t = e.codemirror,
                    n = t.getWrapperElement(),
                    i = e.toolbar_div,
                    r = !!e.options.toolbar && e.toolbarElements.preview,
                    o = n.lastChild,
                    a = t.getWrapperElement().nextSibling; if (/editor-preview-active-side/.test(a.className) && q(e), !o || !/editor-preview-full/.test(o.className)) { if ((o = document.createElement("div")).className = "editor-preview-full", e.options.previewClass)
                        if (Array.isArray(e.options.previewClass))
                            for (var l = 0; l < e.options.previewClass.length; l++) o.className += " " + e.options.previewClass[l];
                        else "string" === typeof e.options.previewClass && (o.className += " " + e.options.previewClass);
                    n.appendChild(o) } /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), r && (r.className = r.className.replace(/\s*active\s*/g, ""), i.className = i.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout((function() { o.className += " editor-preview-active" }), 1), r && (r.className += " active", i.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o) }

            function $(e, t, n, i) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { var r, o = n[0],
                        a = n[1],
                        l = {},
                        s = {};
                    Object.assign(l, e.getCursor("start")), Object.assign(s, e.getCursor("end")), i && (o = o.replace("#url#", i), a = a.replace("#url#", i)), t ? (o = (r = e.getLine(l.line)).slice(0, l.ch), a = r.slice(l.ch), e.replaceRange(o + a, { line: l.line, ch: 0 })) : (r = e.getSelection(), e.replaceSelection(o + r + a), l.ch += o.length, l !== s && (s.ch += o.length)), e.setSelection(l, s), e.focus() } }

            function G(e, t, n) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { for (var i = e.getCursor("start"), r = e.getCursor("end"), o = i.line; o <= r.line; o++) ! function(i) { var r = e.getLine(i),
                            o = r.search(/[^#]/);
                        r = void 0 !== t ? o <= 0 ? "bigger" == t ? "###### " + r : "# " + r : 6 == o && "smaller" == t ? r.substr(7) : 1 == o && "bigger" == t ? r.substr(2) : "bigger" == t ? r.substr(1) : "#" + r : 1 == n ? o <= 0 ? "# " + r : o == n ? r.substr(o + 1) : "# " + r.substr(o + 1) : 2 == n ? o <= 0 ? "## " + r : o == n ? r.substr(o + 1) : "## " + r.substr(o + 1) : o <= 0 ? "### " + r : o == n ? r.substr(o + 1) : "### " + r.substr(o + 1), e.replaceRange(r, { line: i, ch: 0 }, { line: i, ch: 99999999999999 }) }(o);
                    e.focus() } }

            function V(e, t) { if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) { for (var n = /^(\s*)(\*|-|\+|\d*\.)(\s+)/, i = /^\s*/, r = y(e), o = e.getCursor("start"), a = e.getCursor("end"), l = { quote: /^(\s*)>\s+/, "unordered-list": n, "ordered-list": n }, s = function(e, t, r) { var o = n.exec(t),
                                a = function(e, t) { return { quote: ">", "unordered-list": "*", "ordered-list": "%%i." }[e].replace("%%i", t) }(e, u); return null !== o ? (function(e, t) { var n = new RegExp({ quote: ">", "unordered-list": "*", "ordered-list": "\\d+." }[e]); return t && n.test(t) }(e, o[2]) && (a = ""), t = o[1] + a + o[3] + t.replace(i, "").replace(l[e], "$1")) : 0 == r && (t = a + " " + t), t }, u = 1, c = o.line; c <= a.line; c++) ! function(n) { var i = e.getLine(n);
                        r[t] ? i = i.replace(l[t], "$1") : ("unordered-list" == t && (i = s("ordered-list", i, !0)), i = s(t, i, !1), u += 1), e.replaceRange(i, { line: n, ch: 0 }, { line: n, ch: 99999999999999 }) }(c);
                    e.focus() } }

            function K(e, t, n, i) { if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) { i = "undefined" === typeof i ? n : i; var r, o = e.codemirror,
                        a = y(o),
                        l = n,
                        s = i,
                        u = o.getCursor("start"),
                        c = o.getCursor("end");
                    a[t] ? (l = (r = o.getLine(u.line)).slice(0, u.ch), s = r.slice(u.ch), "bold" == t ? (l = l.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), s = s.replace(/(\*\*|__)/, "")) : "italic" == t ? (l = l.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), s = s.replace(/(\*|_)/, "")) : "strikethrough" == t && (l = l.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), s = s.replace(/(\*\*|~~)/, "")), o.replaceRange(l + s, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== c && (c.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== c && (c.ch -= 1))) : (r = o.getSelection(), "bold" == t ? r = (r = r.split("**").join("")).split("__").join("") : "italic" == t ? r = (r = r.split("*").join("")).split("_").join("") : "strikethrough" == t && (r = r.split("~~").join("")), o.replaceSelection(l + r + s), u.ch += n.length, c.ch = u.ch + r.length), o.setSelection(u, c), o.focus() } }

            function X(e, t) { if (Math.abs(e) < 1024) return "" + e + t[0]; var n = 0;
                do { e /= 1024, ++n } while (Math.abs(e) >= 1024 && n < t.length); return "" + e.toFixed(1) + t[n] }

            function Z(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" === typeof t[n] && t[n].constructor === Object ? e[n] = Z(e[n] || {}, t[n]) : e[n] = t[n]); return e }

            function Y(e) { for (var t = 1; t < arguments.length; t++) e = Z(e, arguments[t]); return e }

            function J(e) { var t = e.match(/[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),
                    n = 0; if (null === t) return n; for (var i = 0; i < t.length; i++) t[i].charCodeAt(0) >= 19968 ? n += t[i].length : n += 1; return n } var Q = { bold: { name: "bold", action: C, className: "fa fa-bold", title: "Bold", default: !0 }, italic: { name: "italic", action: w, className: "fa fa-italic", title: "Italic", default: !0 }, strikethrough: { name: "strikethrough", action: k, className: "fa fa-strikethrough", title: "Strikethrough" }, heading: { name: "heading", action: A, className: "fa fa-header fa-heading", title: "Heading", default: !0 }, "heading-smaller": { name: "heading-smaller", action: A, className: "fa fa-header fa-heading header-smaller", title: "Smaller Heading" }, "heading-bigger": { name: "heading-bigger", action: E, className: "fa fa-header fa-heading header-bigger", title: "Bigger Heading" }, "heading-1": { name: "heading-1", action: T, className: "fa fa-header fa-heading header-1", title: "Big Heading" }, "heading-2": { name: "heading-2", action: L, className: "fa fa-header fa-heading header-2", title: "Medium Heading" }, "heading-3": { name: "heading-3", action: M, className: "fa fa-header fa-heading header-3", title: "Small Heading" }, "separator-1": { name: "separator-1" }, code: { name: "code", action: S, className: "fa fa-code", title: "Code" }, quote: { name: "quote", action: F, className: "fa fa-quote-left", title: "Quote", default: !0 }, "unordered-list": { name: "unordered-list", action: B, className: "fa fa-list-ul", title: "Generic List", default: !0 }, "ordered-list": { name: "ordered-list", action: N, className: "fa fa-list-ol", title: "Numbered List", default: !0 }, "clean-block": { name: "clean-block", action: O, className: "fa fa-eraser", title: "Clean block" }, "separator-2": { name: "separator-2" }, link: { name: "link", action: I, className: "fa fa-link", title: "Create Link", default: !0 }, image: { name: "image", action: z, className: "fa fa-image", title: "Insert Image", default: !0 }, "upload-image": { name: "upload-image", action: H, className: "fa fa-image", title: "Import an image" }, table: { name: "table", action: P, className: "fa fa-table", title: "Insert Table" }, "horizontal-rule": { name: "horizontal-rule", action: _, className: "fa fa-minus", title: "Insert Horizontal Line" }, "separator-3": { name: "separator-3" }, preview: { name: "preview", action: U, className: "fa fa-eye", noDisable: !0, title: "Toggle Preview", default: !0 }, "side-by-side": { name: "side-by-side", action: q, className: "fa fa-columns", noDisable: !0, noMobile: !0, title: "Toggle Side by Side", default: !0 }, fullscreen: { name: "fullscreen", action: D, className: "fa fa-arrows-alt", noDisable: !0, noMobile: !0, title: "Toggle Fullscreen", default: !0 }, "separator-4": { name: "separator-4" }, guide: { name: "guide", action: "https://www.markdownguide.org/basic-syntax/", className: "fa fa-question-circle", noDisable: !0, title: "Markdown Guide", default: !0 }, "separator-5": { name: "separator-5" }, undo: { name: "undo", action: W, className: "fa fa-undo", noDisable: !0, title: "Undo" }, redo: { name: "redo", action: j, className: "fa fa-repeat fa-redo", noDisable: !0, title: "Redo" } },
                ee = { link: ["[", "](#url#)"], image: ["![](", "#url#)"], uploadedImage: ["![](#url#)", ""], table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"], horizontalRule: ["", "\n\n-----\n\n"] },
                te = { link: "URL for the link:", image: "URL of the image:" },
                ne = { locale: "en-US", format: { hour: "2-digit", minute: "2-digit" } },
                ie = { bold: "**", code: "```", italic: "*" },
                re = { sbInit: "Attach files by drag and dropping or pasting from clipboard.", sbOnDragEnter: "Drop image to upload it.", sbOnDrop: "Uploading image #images_names#...", sbProgress: "Uploading #file_name#: #progress#%", sbOnUploaded: "Uploaded #image_name#", sizeUnits: " B, KB, MB" },
                oe = { noFileGiven: "You must select a file.", typeNotAllowed: "This image type is not allowed.", fileTooLarge: "Image #image_name# is too big (#image_size#).\nMaximum file size is #image_max_size#.", importError: "Something went wrong when uploading the image #image_name#." };

            function ae(e) {
                (e = e || {}).parent = this; var t = !0; if (!1 === e.autoDownloadFontAwesome && (t = !1), !0 !== e.autoDownloadFontAwesome)
                    for (var n = document.styleSheets, i = 0; i < n.length; i++) n[i].href && n[i].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1); if (t) { var r = document.createElement("link");
                    r.rel = "stylesheet", r.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(r) } if (e.element) this.element = e.element;
                else if (null === e.element) return void console.log("EasyMDE: Error. No element was found."); if (void 0 === e.toolbar)
                    for (var o in e.toolbar = [], Q) Object.prototype.hasOwnProperty.call(Q, o) && (-1 != o.indexOf("separator-") && e.toolbar.push("|"), (!0 === Q[o].default || e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o)) && e.toolbar.push(o)); if (Object.prototype.hasOwnProperty.call(e, "previewClass") || (e.previewClass = "editor-preview"), Object.prototype.hasOwnProperty.call(e, "status") || (e.status = ["autosave", "lines", "words", "cursor"], e.uploadImage && e.status.unshift("upload-image")), e.previewRender || (e.previewRender = function(e) { return this.parent.markdown(e) }), e.parsingConfig = Y({ highlightFormatting: !0 }, e.parsingConfig || {}), e.insertTexts = Y({}, ee, e.insertTexts || {}), e.promptTexts = Y({}, te, e.promptTexts || {}), e.blockStyles = Y({}, ie, e.blockStyles || {}), void 0 != e.autosave && (e.autosave.timeFormat = Y({}, ne, e.autosave.timeFormat || {})), e.shortcuts = Y({}, u, e.shortcuts || {}), e.maxHeight = e.maxHeight || void 0, "undefined" !== typeof e.maxHeight ? e.minHeight = e.maxHeight : e.minHeight = e.minHeight || "300px", e.errorCallback = e.errorCallback || function(e) { alert(e) }, e.uploadImage = e.uploadImage || !1, e.imageMaxSize = e.imageMaxSize || 2097152, e.imageAccept = e.imageAccept || "image/png, image/jpeg", e.imageTexts = Y({}, re, e.imageTexts || {}), e.errorMessages = Y({}, oe, e.errorMessages || {}), void 0 != e.autosave && void 0 != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), e.overlayMode && void 0 === e.overlayMode.combine && (e.overlayMode.combine = !0), this.options = e, this.render(), !e.initialValue || this.options.autosave && !0 === this.options.autosave.foundSavedValue || this.value(e.initialValue), e.uploadImage) { var a = this;
                    this.codemirror.on("dragenter", (function(e, t) { a.updateStatusBar("upload-image", a.options.imageTexts.sbOnDragEnter), t.stopPropagation(), t.preventDefault() })), this.codemirror.on("dragend", (function(e, t) { a.updateStatusBar("upload-image", a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault() })), this.codemirror.on("dragleave", (function(e, t) { a.updateStatusBar("upload-image", a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault() })), this.codemirror.on("dragover", (function(e, t) { a.updateStatusBar("upload-image", a.options.imageTexts.sbOnDragEnter), t.stopPropagation(), t.preventDefault() })), this.codemirror.on("drop", (function(t, n) { n.stopPropagation(), n.preventDefault(), e.imageUploadFunction ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.dataTransfer.files) : a.uploadImages(n.dataTransfer.files) })), this.codemirror.on("paste", (function(t, n) { e.imageUploadFunction ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.clipboardData.files) : a.uploadImages(n.clipboardData.files) })) } }

            function le() { if ("object" !== typeof localStorage) return !1; try { localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage") } catch (e) { return !1 } return !0 }
            ae.prototype.uploadImages = function(e, t, n) { if (0 !== e.length) { for (var i = [], r = 0; r < e.length; r++) i.push(e[r].name), this.uploadImage(e[r], t, n);
                    this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", i.join(", "))) } }, ae.prototype.uploadImagesUsingCustomFunction = function(e, t) { if (0 !== t.length) { for (var n = [], i = 0; i < t.length; i++) n.push(t[i].name), this.uploadImageUsingCustomFunction(e, t[i]);
                    this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", n.join(", "))) } }, ae.prototype.updateStatusBar = function(e, t) { if (this.gui.statusbar) { var n = this.gui.statusbar.getElementsByClassName(e);
                    1 === n.length ? this.gui.statusbar.getElementsByClassName(e)[0].textContent = t : 0 === n.length ? console.log("EasyMDE: status bar item " + e + " was not found.") : console.log("EasyMDE: Several status bar items named " + e + " was found.") } }, ae.prototype.markdown = function(e) { if (o) { var t; if (t = this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions ? this.options.renderingConfig.markedOptions : {}, this.options && this.options.renderingConfig && !1 === this.options.renderingConfig.singleLineBreaks ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && !0 === this.options.renderingConfig.codeSyntaxHighlighting) { var n = this.options.renderingConfig.hljs || window.hljs;
                        n && (t.highlight = function(e, t) { return t && n.getLanguage(t) ? n.highlight(t, e).value : n.highlightAuto(e).value }) }
                    o.setOptions(t); var i = o(e); return this.options.renderingConfig && "function" === typeof this.options.renderingConfig.sanitizerFunction && (i = this.options.renderingConfig.sanitizerFunction.call(this, i)), i = function(e) { for (var t = (new DOMParser).parseFromString(e, "text/html"), n = t.getElementsByTagName("li"), i = 0; i < n.length; i++)
                            for (var r = n[i], o = 0; o < r.children.length; o++) { var a = r.children[o];
                                a instanceof HTMLInputElement && "checkbox" === a.type && (r.style.marginLeft = "-1.5em", r.style.listStyleType = "none") }
                        return t.documentElement.innerHTML }(i = function(e) { for (var t; null !== (t = l.exec(e));) { var n = t[0]; if (-1 === n.indexOf("target=")) { var i = n.replace(/>$/, ' target="_blank">');
                                e = e.replace(n, i) } } return e }(i)) } }, ae.prototype.render = function(e) { if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) { this.element = e; var t, n, o = this.options,
                        a = this,
                        l = {}; for (var u in o.shortcuts) null !== o.shortcuts[u] && null !== s[u] && function(e) { l[d(o.shortcuts[e])] = function() { var t = s[e]; "function" === typeof t ? t(a) : "string" === typeof t && window.open(t, "_blank") } }(u); if (l.Enter = "newlineAndIndentContinueMarkdownList", l.Tab = "tabAndIndentMarkdownList", l["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", l.Esc = function(e) { e.getOption("fullScreen") && D(a) }, this.documentOnKeyDown = function(e) { 27 == (e = e || window.event).keyCode && a.codemirror.getOption("fullScreen") && D(a) }, document.addEventListener("keydown", this.documentOnKeyDown, !1), o.overlayMode ? (i.defineMode("overlay-mode", (function(e) { return i.overlayMode(i.getMode(e, !1 !== o.spellChecker ? "spell-checker" : "gfm"), o.overlayMode.mode, o.overlayMode.combine) })), t = "overlay-mode", (n = o.parsingConfig).gitHubSpice = !1) : ((t = o.parsingConfig).name = "gfm", t.gitHubSpice = !1), !1 !== o.spellChecker && (t = "spell-checker", (n = o.parsingConfig).name = "gfm", n.gitHubSpice = !1, r({ codeMirrorInstance: i })), this.codemirror = i.fromTextArea(e, { mode: t, backdrop: n, theme: void 0 != o.theme ? o.theme : "easymde", tabSize: void 0 != o.tabSize ? o.tabSize : 2, indentUnit: void 0 != o.tabSize ? o.tabSize : 2, indentWithTabs: !1 !== o.indentWithTabs, lineNumbers: !0 === o.lineNumbers, autofocus: !0 === o.autofocus, extraKeys: l, lineWrapping: !1 !== o.lineWrapping, allowDropFileTypes: ["text/plain"], placeholder: o.placeholder || e.getAttribute("placeholder") || "", styleSelectedText: void 0 != o.styleSelectedText ? o.styleSelectedText : !c(), scrollbarStyle: void 0 != o.scrollbarStyle ? o.scrollbarStyle : "native", configureMouse: function(e, t, n) { return { addNew: !1 } }, inputStyle: void 0 != o.inputStyle ? o.inputStyle : c() ? "contenteditable" : "textarea", spellcheck: void 0 == o.nativeSpellcheck || o.nativeSpellcheck, autoRefresh: void 0 != o.autoRefresh && o.autoRefresh }), this.codemirror.getScrollerElement().style.minHeight = o.minHeight, "undefined" !== typeof o.maxHeight && (this.codemirror.getScrollerElement().style.height = o.maxHeight), !0 === o.forceSync) { var h = this.codemirror;
                        h.on("change", (function() { h.save() })) }
                    this.gui = {}; var f = document.createElement("div");
                    f.classList.add("EasyMDEContainer"); var p = this.codemirror.getWrapperElement();
                    p.parentNode.insertBefore(f, p), f.appendChild(p), !1 !== o.toolbar && (this.gui.toolbar = this.createToolbar()), !1 !== o.status && (this.gui.statusbar = this.createStatusbar()), void 0 != o.autosave && !0 === o.autosave.enabled && (this.autosave(), this.codemirror.on("change", (function() { clearTimeout(a._autosave_timeout), a._autosave_timeout = setTimeout((function() { a.autosave() }), a.options.autosave.submit_delay || a.options.autosave.delay || 1e3) }))); var m = this;
                    this.codemirror.on("update", (function() { o.previewImagesInEditor && f.querySelectorAll(".cm-image-marker").forEach((function(e) { var t = e.parentElement; if (t.innerText.match(/^!\[.*?\]\(.*\)/g) && !t.hasAttribute("data-img-src")) { var n = t.innerText.match("\\((.*)\\)"); if (window.EMDEimagesCache || (window.EMDEimagesCache = {}), n && n.length >= 2) { var i = n[1]; if (window.EMDEimagesCache[i]) v(t, window.EMDEimagesCache[i]);
                                    else { var r = document.createElement("img");
                                        r.onload = function() { window.EMDEimagesCache[i] = { naturalWidth: r.naturalWidth, naturalHeight: r.naturalHeight, url: i }, v(t, window.EMDEimagesCache[i]) }, r.src = i } } } })) })), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element; var g = this.codemirror;
                    setTimeout(function() { g.refresh() }.bind(g), 0) }

                function v(e, t) { var n, i;
                    e.setAttribute("data-img-src", t.url), e.setAttribute("style", "--bg-image:url(" + t.url + ");--width:" + t.naturalWidth + "px;--height:" + (n = t.naturalWidth, i = t.naturalHeight, n < window.getComputedStyle(document.querySelector(".CodeMirror-sizer")).width.replace("px", "") ? i + "px" : i / n * 100 + "%")), m.codemirror.setSize() } }, ae.prototype.cleanup = function() { document.removeEventListener("keydown", this.documentOnKeyDown) }, ae.prototype.autosave = function() { if (le()) { var e = this; if (void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("EasyMDE: You must set a uniqueId to use the autosave feature");!0 !== this.options.autosave.binded && (null != e.element.form && void 0 != e.element.form && e.element.form.addEventListener("submit", (function() { clearTimeout(e.autosaveTimeoutId), e.autosaveTimeoutId = void 0, localStorage.removeItem("smde_" + e.options.autosave.uniqueId) })), this.options.autosave.binded = !0), !0 !== this.options.autosave.loaded && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0); var t = e.value(); "" !== t ? localStorage.setItem("smde_" + this.options.autosave.uniqueId, t) : localStorage.removeItem("smde_" + this.options.autosave.uniqueId); var n = document.getElementById("autosaved"); if (null != n && void 0 != n && "" != n) { var i = new Date,
                            r = new Intl.DateTimeFormat([this.options.autosave.timeFormat.locale, "en-US"], this.options.autosave.timeFormat.format).format(i),
                            o = void 0 == this.options.autosave.text ? "Autosaved: " : this.options.autosave.text;
                        n.innerHTML = o + r } } else console.log("EasyMDE: localStorage not available, cannot autosave") }, ae.prototype.clearAutosavedValue = function() { if (le()) { if (void 0 == this.options.autosave || void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("EasyMDE: You must set a uniqueId to clear the autosave value");
                    localStorage.removeItem("smde_" + this.options.autosave.uniqueId) } else console.log("EasyMDE: localStorage not available, cannot autosave") }, ae.prototype.openBrowseFileWindow = function(e, t) { var n = this,
                    i = this.gui.toolbar.getElementsByClassName("imageInput")[0];
                i.click(), i.addEventListener("change", (function r(o) { n.options.imageUploadFunction ? n.uploadImagesUsingCustomFunction(n.options.imageUploadFunction, o.target.files) : n.uploadImages(o.target.files, e, t), i.removeEventListener("change", r) })) }, ae.prototype.uploadImage = function(e, t, n) { var i = this;

                function r(e) { i.updateStatusBar("upload-image", e), setTimeout((function() { i.updateStatusBar("upload-image", i.options.imageTexts.sbInit) }), 1e4), n && "function" === typeof n && n(e), i.options.errorCallback(e) }

                function o(t) { var n = i.options.imageTexts.sizeUnits.split(","); return t.replace("#image_name#", e.name).replace("#image_size#", X(e.size, n)).replace("#image_max_size#", X(i.options.imageMaxSize, n)) } if (t = t || function(e) { R(i, e) }, e.size > this.options.imageMaxSize) r(o(this.options.errorMessages.fileTooLarge));
                else { var a = new FormData;
                    a.append("image", e), i.options.imageCSRFToken && a.append("csrfmiddlewaretoken", i.options.imageCSRFToken); var l = new XMLHttpRequest;
                    l.upload.onprogress = function(t) { if (t.lengthComputable) { var n = "" + Math.round(100 * t.loaded / t.total);
                            i.updateStatusBar("upload-image", i.options.imageTexts.sbProgress.replace("#file_name#", e.name).replace("#progress#", n)) } }, l.open("POST", this.options.imageUploadEndpoint), l.onload = function() { try { var e = JSON.parse(this.responseText) } catch (n) { return console.error("EasyMDE: The server did not return a valid json."), void r(o(i.options.errorMessages.importError)) }
                        200 === this.status && e && !e.error && e.data && e.data.filePath ? t((i.options.imagePathAbsolute ? "" : window.location.origin + "/") + e.data.filePath) : e.error && e.error in i.options.errorMessages ? r(o(i.options.errorMessages[e.error])) : e.error ? r(o(e.error)) : (console.error("EasyMDE: Received an unexpected response after uploading the image." + this.status + " (" + this.statusText + ")"), r(o(i.options.errorMessages.importError))) }, l.onerror = function(e) { console.error("EasyMDE: An unexpected error occurred when trying to upload the image." + e.target.status + " (" + e.target.statusText + ")"), r(i.options.errorMessages.importError) }, l.send(a) } }, ae.prototype.uploadImageUsingCustomFunction = function(e, t) { var n = this;
                e.apply(this, [t, function(e) { R(n, e) }, function(e) { var i = function(e) { var i = n.options.imageTexts.sizeUnits.split(","); return e.replace("#image_name#", t.name).replace("#image_size#", X(t.size, i)).replace("#image_max_size#", X(n.options.imageMaxSize, i)) }(e);
                    n.updateStatusBar("upload-image", i), setTimeout((function() { n.updateStatusBar("upload-image", n.options.imageTexts.sbInit) }), 1e4), n.options.errorCallback(i) }]) }, ae.prototype.setPreviewMaxHeight = function() { var e = this.codemirror.getWrapperElement(),
                    t = e.nextSibling,
                    n = parseInt(window.getComputedStyle(e).paddingTop),
                    i = parseInt(window.getComputedStyle(e).borderTopWidth),
                    r = (parseInt(this.options.maxHeight) + 2 * n + 2 * i).toString() + "px";
                t.style.height = r }, ae.prototype.createSideBySide = function() { var e = this.codemirror,
                    t = e.getWrapperElement(),
                    n = t.nextSibling; if (!n || !/editor-preview-side/.test(n.className)) { if ((n = document.createElement("div")).className = "editor-preview-side", this.options.previewClass)
                        if (Array.isArray(this.options.previewClass))
                            for (var i = 0; i < this.options.previewClass.length; i++) n.className += " " + this.options.previewClass[i];
                        else "string" === typeof this.options.previewClass && (n.className += " " + this.options.previewClass);
                    t.parentNode.insertBefore(n, t.nextSibling) } if ("undefined" !== typeof this.options.maxHeight && this.setPreviewMaxHeight(), !1 === this.options.syncSideBySidePreviewScroll) return n; var r = !1,
                    o = !1; return e.on("scroll", (function(e) { if (r) r = !1;
                    else { o = !0; var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
                            i = parseFloat(e.getScrollInfo().top) / t,
                            a = (n.scrollHeight - n.clientHeight) * i;
                        n.scrollTop = a } })), n.onscroll = function() { if (o) o = !1;
                    else { r = !0; var t = n.scrollHeight - n.clientHeight,
                            i = parseFloat(n.scrollTop) / t,
                            a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * i;
                        e.scrollTo(0, a) } }, n }, ae.prototype.createToolbar = function(e) { if ((e = e || this.options.toolbar) && 0 !== e.length) { var t; for (t = 0; t < e.length; t++) void 0 != Q[e[t]] && (e[t] = Q[e[t]]); var n = document.createElement("div");
                    n.className = "editor-toolbar"; var i = this,
                        r = {}; for (i.toolbar = e, t = 0; t < e.length; t++)
                        if (("guide" != e[t].name || !1 !== i.options.toolbarGuideIcon) && (!i.options.hideIcons || -1 == i.options.hideIcons.indexOf(e[t].name)) && ("fullscreen" != e[t].name && "side-by-side" != e[t].name || !c())) { if ("|" === e[t]) { for (var o = !1, a = t + 1; a < e.length; a++) "|" === e[a] || i.options.hideIcons && -1 != i.options.hideIcons.indexOf(e[a].name) || (o = !0); if (!o) continue }! function(e) { var t; if (t = "|" === e ? x() : e.children ? g(e, i.options.toolbarTips, i.options.shortcuts, i) : v(e, !0, i.options.toolbarTips, i.options.shortcuts, "button", i), r[e.name || e] = t, n.appendChild(t), "upload-image" === e.name) { var o = document.createElement("input");
                                    o.className = "imageInput", o.type = "file", o.multiple = !0, o.name = "image", o.accept = i.options.imageAccept, o.style.display = "none", o.style.opacity = 0, n.appendChild(o) } }(e[t]) }
                    i.toolbar_div = n, i.toolbarElements = r; var l = this.codemirror;
                    l.on("cursorActivity", (function() { var e = y(l); for (var t in r) ! function(t) { var n = r[t];
                            e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, "")) }(t) })); var s = l.getWrapperElement(); return s.parentNode.insertBefore(n, s), n } }, ae.prototype.createStatusbar = function(e) { e = e || this.options.status; var t = this.options,
                    n = this.codemirror; if (e && 0 !== e.length) { var i, r, o, a, l = []; for (i = 0; i < e.length; i++)
                        if (r = void 0, o = void 0, a = void 0, "object" === typeof e[i]) l.push({ className: e[i].className, defaultValue: e[i].defaultValue, onUpdate: e[i].onUpdate, onActivity: e[i].onActivity });
                        else { var s = e[i]; "words" === s ? (a = function(e) { e.innerHTML = J(n.getValue()) }, r = function(e) { e.innerHTML = J(n.getValue()) }) : "lines" === s ? (a = function(e) { e.innerHTML = n.lineCount() }, r = function(e) { e.innerHTML = n.lineCount() }) : "cursor" === s ? (a = function(e) { e.innerHTML = "0:0" }, o = function(e) { var t = n.getCursor();
                                e.innerHTML = t.line + ":" + t.ch }) : "autosave" === s ? a = function(e) { void 0 != t.autosave && !0 === t.autosave.enabled && e.setAttribute("id", "autosaved") } : "upload-image" === s && (a = function(e) { e.innerHTML = t.imageTexts.sbInit }), l.push({ className: s, defaultValue: a, onUpdate: r, onActivity: o }) }
                    var u = document.createElement("div"); for (u.className = "editor-statusbar", i = 0; i < l.length; i++) { var c = l[i],
                            d = document.createElement("span");
                        d.className = c.className, "function" === typeof c.defaultValue && c.defaultValue(d), "function" === typeof c.onUpdate && this.codemirror.on("update", function(e, t) { return function() { t.onUpdate(e) } }(d, c)), "function" === typeof c.onActivity && this.codemirror.on("cursorActivity", function(e, t) { return function() { t.onActivity(e) } }(d, c)), u.appendChild(d) } var h = this.codemirror.getWrapperElement(); return h.parentNode.insertBefore(u, h.nextSibling), u } }, ae.prototype.value = function(e) { var t = this.codemirror; if (void 0 === e) return t.getValue(); if (t.getDoc().setValue(e), this.isPreviewActive()) { var n = t.getWrapperElement().lastChild;
                    n.innerHTML = this.options.previewRender(e, n) } return this }, ae.toggleBold = C, ae.toggleItalic = w, ae.toggleStrikethrough = k, ae.toggleBlockquote = F, ae.toggleHeadingSmaller = A, ae.toggleHeadingBigger = E, ae.toggleHeading1 = T, ae.toggleHeading2 = L, ae.toggleHeading3 = M, ae.toggleCodeBlock = S, ae.toggleUnorderedList = B, ae.toggleOrderedList = N, ae.cleanBlock = O, ae.drawLink = I, ae.drawImage = z, ae.drawUploadedImage = H, ae.drawTable = P, ae.drawHorizontalRule = _, ae.undo = W, ae.redo = j, ae.togglePreview = U, ae.toggleSideBySide = q, ae.toggleFullScreen = D, ae.prototype.toggleBold = function() { C(this) }, ae.prototype.toggleItalic = function() { w(this) }, ae.prototype.toggleStrikethrough = function() { k(this) }, ae.prototype.toggleBlockquote = function() { F(this) }, ae.prototype.toggleHeadingSmaller = function() { A(this) }, ae.prototype.toggleHeadingBigger = function() { E(this) }, ae.prototype.toggleHeading1 = function() { T(this) }, ae.prototype.toggleHeading2 = function() { L(this) }, ae.prototype.toggleHeading3 = function() { M(this) }, ae.prototype.toggleCodeBlock = function() { S(this) }, ae.prototype.toggleUnorderedList = function() { B(this) }, ae.prototype.toggleOrderedList = function() { N(this) }, ae.prototype.cleanBlock = function() { O(this) }, ae.prototype.drawLink = function() { I(this) }, ae.prototype.drawImage = function() { z(this) }, ae.prototype.drawUploadedImage = function() { H(this) }, ae.prototype.drawTable = function() { P(this) }, ae.prototype.drawHorizontalRule = function() { _(this) }, ae.prototype.undo = function() { W(this) }, ae.prototype.redo = function() { j(this) }, ae.prototype.togglePreview = function() { U(this) }, ae.prototype.toggleSideBySide = function() { q(this) }, ae.prototype.toggleFullScreen = function() { D(this) }, ae.prototype.isPreviewActive = function() { var e = this.codemirror.getWrapperElement().lastChild; return /editor-preview-active/.test(e.className) }, ae.prototype.isSideBySideActive = function() { var e = this.codemirror.getWrapperElement().nextSibling; return /editor-preview-active-side/.test(e.className) }, ae.prototype.isFullscreenActive = function() { return this.codemirror.getOption("fullScreen") }, ae.prototype.getState = function() { return y(this.codemirror) }, ae.prototype.toTextArea = function() { var e = this.codemirror,
                    t = e.getWrapperElement(),
                    n = t.parentNode;
                n && (this.gui.toolbar && n.removeChild(this.gui.toolbar), this.gui.statusbar && n.removeChild(this.gui.statusbar), this.gui.sideBySide && n.removeChild(this.gui.sideBySide)), n.parentNode.insertBefore(t, n), n.remove(), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue()) }, e.exports = ae }, 1470: function(e, t, n) {! function(e) { "use strict"; var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
                    n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
                    i = /[*+-]\s/;

                function r(e, n) { var i = n.line,
                        r = 0,
                        o = 0,
                        a = t.exec(e.getLine(i)),
                        l = a[1];
                    do { var s = i + (r += 1),
                            u = e.getLine(s),
                            c = t.exec(u); if (c) { var d = c[1],
                                h = parseInt(a[3], 10) + r - o,
                                f = parseInt(c[3], 10),
                                p = f; if (l !== d || isNaN(f)) { if (l.length > d.length) return; if (l.length < d.length && 1 === r) return;
                                o += 1 } else h === f && (p = f + 1), h > f && (p = h + 1), e.replaceRange(u.replace(t, d + p + c[4] + c[5]), { line: s, ch: 0 }, { line: s, ch: u.length }) } } while (c) }
                e.commands.newlineAndIndentContinueMarkdownList = function(o) { if (o.getOption("disableInput")) return e.Pass; for (var a = o.listSelections(), l = [], s = 0; s < a.length; s++) { var u = a[s].head,
                            c = o.getStateAfter(u.line),
                            d = e.innerMode(o.getMode(), c); if ("markdown" !== d.mode.name) return void o.execCommand("newlineAndIndent"); var h = !1 !== (c = d.state).list,
                            f = 0 !== c.quote,
                            p = o.getLine(u.line),
                            m = t.exec(p),
                            g = /^\s*$/.test(p.slice(0, u.ch)); if (!a[s].empty() || !h && !f || !m || g) return void o.execCommand("newlineAndIndent"); if (n.test(p)) { var v = f && />\s*$/.test(p),
                                x = !/>\s*$/.test(p);
                            (v || x) && o.replaceRange("", { line: u.line, ch: 0 }, { line: u.line, ch: u.ch + 1 }), l[s] = "\n" } else { var y = m[1],
                                b = m[5],
                                D = !(i.test(m[2]) || m[2].indexOf(">") >= 0),
                                C = D ? parseInt(m[3], 10) + 1 + m[4] : m[2].replace("x", " ");
                            l[s] = "\n" + y + C + b, D && r(o, u) } }
                    o.replaceSelections(l) } }(n(800)) }, 1471: function(e, t, n) { var i = n(800);
            i.commands.tabAndIndentMarkdownList = function(e) { var t = e.listSelections()[0].head; if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");
                else if (e.options.indentWithTabs) e.execCommand("insertTab");
                else { var n = Array(e.options.tabSize + 1).join(" ");
                    e.replaceSelection(n) } }, i.commands.shiftTabAndUnindentMarkdownList = function(e) { var t = e.listSelections()[0].head; if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");
                else if (e.options.indentWithTabs) e.execCommand("insertTab");
                else { var n = Array(e.options.tabSize + 1).join(" ");
                    e.replaceSelection(n) } } }, 1472: function(e, t, n) {! function(e) { "use strict";

                function t(e) { var t = e.getWrapperElement();
                    e.state.fullScreenRestore = { scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: t.style.width, height: t.style.height }, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh() }

                function n(e) { var t = e.getWrapperElement();
                    t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = ""; var n = e.state.fullScreenRestore;
                    t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh() }
                e.defineOption("fullScreen", !1, (function(i, r, o) { o == e.Init && (o = !1), !o != !r && (r ? t(i) : n(i)) })) }(n(800)) }, 1473: function(e, t, n) {! function(e) { "use strict";
                e.modeInfo = [{ name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] }, { name: "PGP", mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["asc", "pgp", "sig"] }, { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] }, { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i }, { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] }, { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"] }, { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] }, { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"] }, { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp", "cs"] }, { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] }, { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] }, { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] }, { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists\.txt$/ }, { name: "CoffeeScript", mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"], mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] }, { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] }, { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] }, { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] }, { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] }, { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] }, { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] }, { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] }, { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] }, { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] }, { name: "Django", mime: "text/x-django", mode: "django" }, { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ }, { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] }, { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] }, { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" }, { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] }, { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] }, { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] }, { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] }, { name: "Embedded JavaScript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] }, { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] }, { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] }, { name: "Esper", mime: "text/x-esper", mode: "sql" }, { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] }, { name: "FCL", mime: "text/x-fcl", mode: "fcl" }, { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] }, { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90", "f95"] }, { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] }, { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] }, { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] }, { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history)\.md$/i }, { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] }, { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ }, { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] }, { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] }, { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] }, { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] }, { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] }, { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] }, { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"] }, { name: "HTTP", mime: "message/http", mode: "http" }, { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] }, { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] }, { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] }, { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] }, { name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"], mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"] }, { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] }, { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] }, { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] }, { name: "Jinja2", mime: "text/jinja2", mode: "jinja2", ext: ["j2", "jinja", "jinja2"] }, { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"], alias: ["jl"] }, { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] }, { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] }, { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] }, { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] }, { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] }, { name: "mIRC", mime: "text/mirc", mode: "mirc" }, { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" }, { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb", "wl", "wls"] }, { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] }, { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] }, { name: "MS SQL", mime: "text/x-mssql", mode: "sql" }, { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] }, { name: "MySQL", mime: "text/x-mysql", mode: "sql" }, { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i }, { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] }, { name: "NTriples", mimes: ["application/n-triples", "application/n-quads", "text/n-triples"], mode: "ntriples", ext: ["nt", "nq"] }, { name: "Objective-C", mime: "text/x-objectivec", mode: "clike", ext: ["m"], alias: ["objective-c", "objc"] }, { name: "Objective-C++", mime: "text/x-objectivec++", mode: "clike", ext: ["mm"], alias: ["objective-c++", "objc++"] }, { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] }, { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] }, { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] }, { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] }, { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] }, { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] }, { name: "PHP", mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"], mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"] }, { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] }, { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] }, { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] }, { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" }, { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] }, { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] }, { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] }, { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ }, { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] }, { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] }, { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] }, { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] }, { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" }, { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] }, { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] }, { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] }, { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] }, { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] }, { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] }, { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] }, { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] }, { name: "Shell", mimes: ["text/x-sh", "application/x-sh"], mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ }, { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] }, { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] }, { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] }, { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] }, { name: "Solr", mime: "text/x-solr", mode: "solr" }, { name: "SML", mime: "text/x-sml", mode: "mllike", ext: ["sml", "sig", "fun", "smackspec"] }, { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] }, { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] }, { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] }, { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] }, { name: "SQLite", mime: "text/x-sqlite", mode: "sql" }, { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] }, { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] }, { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] }, { name: "sTeX", mime: "text/x-stex", mode: "stex" }, { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx", "tex"], alias: ["tex"] }, { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v", "sv", "svh"] }, { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] }, { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] }, { name: "TiddlyWiki", mime: "text/x-tiddlywiki", mode: "tiddlywiki" }, { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" }, { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] }, { name: "Tornado", mime: "text/x-tornado", mode: "tornado" }, { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }, { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] }, { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] }, { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] }, { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] }, { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] }, { name: "Twig", mime: "text/x-twig", mode: "twig" }, { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] }, { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] }, { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] }, { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] }, { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] }, { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] }, { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] }, { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] }, { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] }, { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] }, { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] }, { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] }, { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] }, { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] }, { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] }, { name: "WebAssembly", mime: "text/webassembly", mode: "wast", ext: ["wat", "wast"] }]; for (var t = 0; t < e.modeInfo.length; t++) { var n = e.modeInfo[t];
                    n.mimes && (n.mime = n.mimes[0]) }
                e.findModeByMIME = function(t) { t = t.toLowerCase(); for (var n = 0; n < e.modeInfo.length; n++) { var i = e.modeInfo[n]; if (i.mime == t) return i; if (i.mimes)
                            for (var r = 0; r < i.mimes.length; r++)
                                if (i.mimes[r] == t) return i } return /\+xml$/.test(t) ? e.findModeByMIME("application/xml") : /\+json$/.test(t) ? e.findModeByMIME("application/json") : void 0 }, e.findModeByExtension = function(t) { t = t.toLowerCase(); for (var n = 0; n < e.modeInfo.length; n++) { var i = e.modeInfo[n]; if (i.ext)
                            for (var r = 0; r < i.ext.length; r++)
                                if (i.ext[r] == t) return i } }, e.findModeByFileName = function(t) { for (var n = 0; n < e.modeInfo.length; n++) { var i = e.modeInfo[n]; if (i.file && i.file.test(t)) return i } var r = t.lastIndexOf("."),
                        o = r > -1 && t.substring(r + 1, t.length); if (o) return e.findModeByExtension(o) }, e.findModeByName = function(t) { t = t.toLowerCase(); for (var n = 0; n < e.modeInfo.length; n++) { var i = e.modeInfo[n]; if (i.name.toLowerCase() == t) return i; if (i.alias)
                            for (var r = 0; r < i.alias.length; r++)
                                if (i.alias[r].toLowerCase() == t) return i } } }(n(800)) }, 1474: function(e, t, n) {! function(e) {
                function t(e) { e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null) }

                function n(e) { t(e); var n = e.state.placeholder = document.createElement("pre");
                    n.style.cssText = "height: 0; overflow: visible", n.style.direction = e.getOption("direction"), n.className = "CodeMirror-placeholder CodeMirror-line-like"; var i = e.getOption("placeholder"); "string" == typeof i && (i = document.createTextNode(i)), n.appendChild(i), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild) }

                function i(e) { setTimeout((function() { var i = !1; if (1 == e.lineCount()) { var r = e.getInputField();
                            i = "TEXTAREA" == r.nodeName ? !e.getLine(0).length : !/[^\u200b]/.test(r.querySelector(".CodeMirror-line").textContent) }
                        i ? n(e) : t(e) }), 20) }

                function r(e) { a(e) && n(e) }

                function o(e) { var i = e.getWrapperElement(),
                        r = a(e);
                    i.className = i.className.replace(" CodeMirror-empty", "") + (r ? " CodeMirror-empty" : ""), r ? n(e) : t(e) }

                function a(e) { return 1 === e.lineCount() && "" === e.getLine(0) }
                e.defineOption("placeholder", "", (function(n, a, l) { var s = l && l != e.Init; if (a && !s) n.on("blur", r), n.on("change", o), n.on("swapDoc", o), e.on(n.getInputField(), "compositionupdate", n.state.placeholderCompose = function() { i(n) }), o(n);
                    else if (!a && s) { n.off("blur", r), n.off("change", o), n.off("swapDoc", o), e.off(n.getInputField(), "compositionupdate", n.state.placeholderCompose), t(n); var u = n.getWrapperElement();
                        u.className = u.className.replace(" CodeMirror-empty", "") }
                    a && !n.hasFocus() && r(n) })) }(n(800)) }, 1475: function(e, t, n) {! function(e) { "use strict";

                function t(t, i) {
                    function r() { t.display.wrapper.offsetHeight ? (n(t, i), t.display.lastWrapHeight != t.display.wrapper.clientHeight && t.refresh()) : i.timeout = setTimeout(r, i.delay) }
                    i.timeout = setTimeout(r, i.delay), i.hurry = function() { clearTimeout(i.timeout), i.timeout = setTimeout(r, 50) }, e.on(window, "mouseup", i.hurry), e.on(window, "keyup", i.hurry) }

                function n(t, n) { clearTimeout(n.timeout), e.off(window, "mouseup", n.hurry), e.off(window, "keyup", n.hurry) }
                e.defineOption("autoRefresh", !1, (function(e, i) { e.state.autoRefresh && (n(e, e.state.autoRefresh), e.state.autoRefresh = null), i && 0 == e.display.wrapper.offsetHeight && t(e, e.state.autoRefresh = { delay: i.delay || 250 }) })) }(n(800)) }, 1476: function(e, t, n) {! function(e) { "use strict";

                function t(e) { e.state.markedSelection && e.operation((function() { u(e) })) }

                function n(e) { e.state.markedSelection && e.state.markedSelection.length && e.operation((function() { l(e) })) }
                e.defineOption("styleSelectedText", !1, (function(i, r, o) { var a = o && o != e.Init;
                    r && !a ? (i.state.markedSelection = [], i.state.markedSelectionStyle = "string" == typeof r ? r : "CodeMirror-selectedtext", s(i), i.on("cursorActivity", t), i.on("change", n)) : !r && a && (i.off("cursorActivity", t), i.off("change", n), l(i), i.state.markedSelection = i.state.markedSelectionStyle = null) })); var i = 8,
                    r = e.Pos,
                    o = e.cmpPos;

                function a(e, t, n, a) { if (0 != o(t, n))
                        for (var l = e.state.markedSelection, s = e.state.markedSelectionStyle, u = t.line;;) { var c = u == t.line ? t : r(u, 0),
                                d = u + i,
                                h = d >= n.line,
                                f = h ? n : r(d, 0),
                                p = e.markText(c, f, { className: s }); if (null == a ? l.push(p) : l.splice(a++, 0, p), h) break;
                            u = d } }

                function l(e) { for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
                    t.length = 0 }

                function s(e) { l(e); for (var t = e.listSelections(), n = 0; n < t.length; n++) a(e, t[n].from(), t[n].to()) }

                function u(e) { if (!e.somethingSelected()) return l(e); if (e.listSelections().length > 1) return s(e); var t = e.getCursor("start"),
                        n = e.getCursor("end"),
                        r = e.state.markedSelection; if (!r.length) return a(e, t, n); var u = r[0].find(),
                        c = r[r.length - 1].find(); if (!u || !c || n.line - t.line <= i || o(t, c.to) >= 0 || o(n, u.from) <= 0) return s(e); for (; o(t, u.from) > 0;) r.shift().clear(), u = r[0].find(); for (o(t, u.from) < 0 && (u.to.line - t.line < i ? (r.shift().clear(), a(e, t, u.to, 0)) : a(e, t, u.from, 0)); o(n, c.to) < 0;) r.pop().clear(), c = r[r.length - 1].find();
                    o(n, c.to) > 0 && (n.line - c.from.line < i ? (r.pop().clear(), a(e, c.from, n)) : a(e, c.to, n)) } }(n(800)) }, 1477: function(e, t, n) {! function(e) { "use strict"; var t, n, i = e.Pos;

                function r(e) { var t = e.flags; return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "") }

                function o(e, t) { for (var n = r(e), i = n, o = 0; o < t.length; o++) - 1 == i.indexOf(t.charAt(o)) && (i += t.charAt(o)); return n == i ? e : new RegExp(e.source, i) }

                function a(e) { return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source) }

                function l(e, t, n) { t = o(t, "g"); for (var r = n.line, a = n.ch, l = e.lastLine(); r <= l; r++, a = 0) { t.lastIndex = a; var s = e.getLine(r),
                            u = t.exec(s); if (u) return { from: i(r, u.index), to: i(r, u.index + u[0].length), match: u } } }

                function s(e, t, n) { if (!a(t)) return l(e, t, n);
                    t = o(t, "gm"); for (var r, s = 1, u = n.line, c = e.lastLine(); u <= c;) { for (var d = 0; d < s && !(u > c); d++) { var h = e.getLine(u++);
                            r = null == r ? h : r + "\n" + h }
                        s *= 2, t.lastIndex = n.ch; var f = t.exec(r); if (f) { var p = r.slice(0, f.index).split("\n"),
                                m = f[0].split("\n"),
                                g = n.line + p.length - 1,
                                v = p[p.length - 1].length; return { from: i(g, v), to: i(g + m.length - 1, 1 == m.length ? v + m[0].length : m[m.length - 1].length), match: f } } } }

                function u(e, t, n) { for (var i, r = 0; r <= e.length;) { t.lastIndex = r; var o = t.exec(e); if (!o) break; var a = o.index + o[0].length; if (a > e.length - n) break;
                        (!i || a > i.index + i[0].length) && (i = o), r = o.index + 1 } return i }

                function c(e, t, n) { t = o(t, "g"); for (var r = n.line, a = n.ch, l = e.firstLine(); r >= l; r--, a = -1) { var s = e.getLine(r),
                            c = u(s, t, a < 0 ? 0 : s.length - a); if (c) return { from: i(r, c.index), to: i(r, c.index + c[0].length), match: c } } }

                function d(e, t, n) { if (!a(t)) return c(e, t, n);
                    t = o(t, "gm"); for (var r, l = 1, s = e.getLine(n.line).length - n.ch, d = n.line, h = e.firstLine(); d >= h;) { for (var f = 0; f < l && d >= h; f++) { var p = e.getLine(d--);
                            r = null == r ? p : p + "\n" + r }
                        l *= 2; var m = u(r, t, s); if (m) { var g = r.slice(0, m.index).split("\n"),
                                v = m[0].split("\n"),
                                x = d + g.length,
                                y = g[g.length - 1].length; return { from: i(x, y), to: i(x + v.length - 1, 1 == v.length ? y + v[0].length : v[v.length - 1].length), match: m } } } }

                function h(e, t, n, i) { if (e.length == t.length) return n; for (var r = 0, o = n + Math.max(0, e.length - t.length);;) { if (r == o) return r; var a = r + o >> 1,
                            l = i(e.slice(0, a)).length; if (l == n) return a;
                        l > n ? o = a : r = a + 1 } }

                function f(e, r, o, a) { if (!r.length) return null; var l = a ? t : n,
                        s = l(r).split(/\r|\n\r?/);
                    e: for (var u = o.line, c = o.ch, d = e.lastLine() + 1 - s.length; u <= d; u++, c = 0) { var f = e.getLine(u).slice(c),
                            p = l(f); if (1 == s.length) { var m = p.indexOf(s[0]); if (-1 == m) continue e; return o = h(f, p, m, l) + c, { from: i(u, h(f, p, m, l) + c), to: i(u, h(f, p, m + s[0].length, l) + c) } } var g = p.length - s[0].length; if (p.slice(g) == s[0]) { for (var v = 1; v < s.length - 1; v++)
                                if (l(e.getLine(u + v)) != s[v]) continue e;
                            var x = e.getLine(u + s.length - 1),
                                y = l(x),
                                b = s[s.length - 1]; if (y.slice(0, b.length) == b) return { from: i(u, h(f, p, g, l) + c), to: i(u + s.length - 1, h(x, y, b.length, l)) } } } }

                function p(e, r, o, a) { if (!r.length) return null; var l = a ? t : n,
                        s = l(r).split(/\r|\n\r?/);
                    e: for (var u = o.line, c = o.ch, d = e.firstLine() - 1 + s.length; u >= d; u--, c = -1) { var f = e.getLine(u);
                        c > -1 && (f = f.slice(0, c)); var p = l(f); if (1 == s.length) { var m = p.lastIndexOf(s[0]); if (-1 == m) continue e; return { from: i(u, h(f, p, m, l)), to: i(u, h(f, p, m + s[0].length, l)) } } var g = s[s.length - 1]; if (p.slice(0, g.length) == g) { var v = 1; for (o = u - s.length + 1; v < s.length - 1; v++)
                                if (l(e.getLine(o + v)) != s[v]) continue e;
                            var x = e.getLine(u + 1 - s.length),
                                y = l(x); if (y.slice(y.length - s[0].length) == s[0]) return { from: i(u + 1 - s.length, h(x, y, x.length - s[0].length, l)), to: i(u, h(f, p, g.length, l)) } } } }

                function m(e, t, n, r) { var a;
                    this.atOccurrence = !1, this.doc = e, n = n ? e.clipPos(n) : i(0, 0), this.pos = { from: n, to: n }, "object" == typeof r ? a = r.caseFold : (a = r, r = null), "string" == typeof t ? (null == a && (a = !1), this.matches = function(n, i) { return (n ? p : f)(e, t, i, a) }) : (t = o(t, "gm"), r && !1 === r.multiline ? this.matches = function(n, i) { return (n ? c : l)(e, t, i) } : this.matches = function(n, i) { return (n ? d : s)(e, t, i) }) }
                String.prototype.normalize ? (t = function(e) { return e.normalize("NFD").toLowerCase() }, n = function(e) { return e.normalize("NFD") }) : (t = function(e) { return e.toLowerCase() }, n = function(e) { return e }), m.prototype = { findNext: function() { return this.find(!1) }, findPrevious: function() { return this.find(!0) }, find: function(t) { for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to);) t ? n.from.ch ? n.from = i(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(i(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = i(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(t, i(n.to.line + 1, 0)); if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0; var r = i(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0); return this.pos = { from: r, to: r }, this.atOccurrence = !1 }, from: function() { if (this.atOccurrence) return this.pos.from }, to: function() { if (this.atOccurrence) return this.pos.to }, replace: function(t, n) { if (this.atOccurrence) { var r = e.splitLines(t);
                            this.doc.replaceRange(r, this.pos.from, this.pos.to, n), this.pos.to = i(this.pos.from.line + r.length - 1, r[r.length - 1].length + (1 == r.length ? this.pos.from.ch : 0)) } } }, e.defineExtension("getSearchCursor", (function(e, t, n) { return new m(this.doc, e, t, n) })), e.defineDocExtension("getSearchCursor", (function(e, t, n) { return new m(this, e, t, n) })), e.defineExtension("selectMatches", (function(t, n) { for (var i = [], r = this.getSearchCursor(t, this.getCursor("from"), n); r.findNext() && !(e.cmpPos(r.to(), this.getCursor("to")) > 0);) i.push({ anchor: r.from(), head: r.to() });
                    i.length && this.setSelections(i, 0) })) }(n(800)) }, 1478: function(e, t, n) {! function(e) { "use strict"; var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/i;
                e.defineMode("gfm", (function(n, i) { var r = 0;

                    function o(e) { return e.code = !1, null } var a = { startState: function() { return { code: !1, codeBlock: !1, ateSpace: !1 } }, copyState: function(e) { return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace } }, token: function(e, n) { if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null); if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null; if ("`" === e.peek()) { e.next(); var o = e.pos;
                                    e.eatWhile("`"); var a = 1 + e.pos - o; return n.code ? a === r && (n.code = !1) : (r = a, n.code = !0), null } if (n.code) return e.next(), null; if (e.eatSpace()) return n.ateSpace = !0, null; if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, !1 !== i.gitHubSpice)) { if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link"; if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link" } return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null) }, blankLine: o },
                        l = { taskLists: !0, strikethrough: !0, emoji: !0 }; for (var s in i) l[s] = i[s]; return l.name = "markdown", e.overlayMode(e.getMode(n, l), a) }), "markdown"), e.defineMIME("text/x-gfm", "gfm") }(n(800), n(1082), n(1084)) }, 1479: function(e, t, n) { "use strict"; var i = n(1480);

            function r(e) { "function" === typeof(e = e || {}).codeMirrorInstance && "function" === typeof e.codeMirrorInstance.defineMode ? (String.prototype.includes || (String.prototype.includes = function() { return -1 !== String.prototype.indexOf.apply(this, arguments) }), e.codeMirrorInstance.defineMode("spell-checker", (function(t) { if (!r.aff_loading) { r.aff_loading = !0; var n = new XMLHttpRequest;
                        n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function() { 4 === n.readyState && 200 === n.status && (r.aff_data = n.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" }))) }, n.send(null) } if (!r.dic_loading) { r.dic_loading = !0; var o = new XMLHttpRequest;
                        o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function() { 4 === o.readyState && 200 === o.status && (r.dic_data = o.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" }))) }, o.send(null) } var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
                        l = { token: function(e) { var t = e.peek(),
                                    n = ""; if (a.includes(t)) return e.next(), null; for (; null != (t = e.peek()) && !a.includes(t);) n += t, e.next(); return r.typo && !r.typo.check(n) ? "spell-error" : null } },
                        s = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain"); return e.codeMirrorInstance.overlayMode(s, l, !0) }))) : console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`") }
            r.num_loaded = 0, r.aff_loading = !1, r.dic_loading = !1, r.aff_data = "", r.dic_data = "", r.typo, e.exports = r }, 1480: function(e, t, n) {
            (function(t) { var i;! function() { "use strict";
                    (i = function(e, n, i, r) { r = r || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = r.flags || {}, this.memoized = {}, this.loaded = !1; var o, a, l, s, u, c = this;

                        function d(e, t) { var n = c._readFile(e, null, r.asyncLoad);
                            r.asyncLoad ? n.then((function(e) { t(e) })) : t(n) }

                        function h(e) { n = e, i && p() }

                        function f(e) { i = e, n && p() }

                        function p() { for (c.rules = c._parseAFF(n), c.compoundRuleCodes = {}, a = 0, s = c.compoundRules.length; a < s; a++) { var e = c.compoundRules[a]; for (l = 0, u = e.length; l < u; l++) c.compoundRuleCodes[e[l]] = [] } for (a in "ONLYINCOMPOUND" in c.flags && (c.compoundRuleCodes[c.flags.ONLYINCOMPOUND] = []), c.dictionaryTable = c._parseDIC(i), c.compoundRuleCodes) 0 === c.compoundRuleCodes[a].length && delete c.compoundRuleCodes[a]; for (a = 0, s = c.compoundRules.length; a < s; a++) { var t = c.compoundRules[a],
                                    o = ""; for (l = 0, u = t.length; l < u; l++) { var d = t[l];
                                    d in c.compoundRuleCodes ? o += "(" + c.compoundRuleCodes[d].join("|") + ")" : o += d }
                                c.compoundRules[a] = new RegExp(o, "i") }
                            c.loaded = !0, r.asyncLoad && r.loadedCallback && r.loadedCallback(c) } return e && (c.dictionary = e, n && i ? p() : "undefined" !== typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension ? (o = r.dictionaryPath ? r.dictionaryPath : "typo/dictionaries", n || d(chrome.extension.getURL(o + "/" + e + "/" + e + ".aff"), h), i || d(chrome.extension.getURL(o + "/" + e + "/" + e + ".dic"), f)) : (o = r.dictionaryPath ? r.dictionaryPath : t + "/dictionaries", n || d(o + "/" + e + "/" + e + ".aff", h), i || d(o + "/" + e + "/" + e + ".dic", f))), this }).prototype = { load: function(e) { for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]); return this }, _readFile: function(e, t, i) { if (t = t || "utf8", "undefined" !== typeof XMLHttpRequest) { var r, o = new XMLHttpRequest; return o.open("GET", e, i), i && (r = new Promise((function(e, t) { o.onload = function() { 200 === o.status ? e(o.responseText) : t(o.statusText) }, o.onerror = function() { t(o.statusText) } }))), o.overrideMimeType && o.overrideMimeType("text/plain; charset=" + t), o.send(null), i ? r : o.responseText } var a = n(1481); try { if (a.existsSync(e)) return a.readFileSync(e, t);
                                console.log("Path " + e + " does not exist.") } catch (l) { return console.log(l), "" } }, _parseAFF: function(e) { var t, n, i, r, o, a, l, s = {},
                                u = (e = this._removeAffixComments(e)).split(/\r?\n/); for (r = 0, a = u.length; r < a; r++) { var c = (t = u[r]).split(/\s+/),
                                    d = c[0]; if ("PFX" == d || "SFX" == d) { var h = c[1],
                                        f = c[2],
                                        p = []; for (o = r + 1, l = r + 1 + (n = parseInt(c[3], 10)); o < l; o++) { var m = (i = u[o].split(/\s+/))[2],
                                            g = i[3].split("/"),
                                            v = g[0]; "0" === v && (v = ""); var x = this.parseRuleCodes(g[1]),
                                            y = i[4],
                                            b = {};
                                        b.add = v, x.length > 0 && (b.continuationClasses = x), "." !== y && (b.match = "SFX" === d ? new RegExp(y + "$") : new RegExp("^" + y)), "0" != m && (b.remove = "SFX" === d ? new RegExp(m + "$") : m), p.push(b) }
                                    s[h] = { type: d, combineable: "Y" == f, entries: p }, r += n } else if ("COMPOUNDRULE" === d) { for (o = r + 1, l = r + 1 + (n = parseInt(c[1], 10)); o < l; o++) i = (t = u[o]).split(/\s+/), this.compoundRules.push(i[1]);
                                    r += n } else "REP" === d ? 3 === (i = t.split(/\s+/)).length && this.replacementTable.push([i[1], i[2]]) : this.flags[d] = c[1] } return s }, _removeAffixComments: function(e) { return e = (e = (e = (e = e.replace(/^\s*#.*$/gm, "")).replace(/^\s\s*/m, "").replace(/\s\s*$/m, "")).replace(/\n{2,}/g, "\n")).replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, _parseDIC: function(e) { var t = (e = this._removeDicComments(e)).split(/\r?\n/),
                                n = {};

                            function i(e, t) { n.hasOwnProperty(e) || (n[e] = null), t.length > 0 && (null === n[e] && (n[e] = []), n[e].push(t)) } for (var r = 1, o = t.length; r < o; r++) { var a = t[r]; if (a) { var l = a.split("/", 2),
                                        s = l[0]; if (l.length > 1) { var u = this.parseRuleCodes(l[1]); "NEEDAFFIX" in this.flags && -1 != u.indexOf(this.flags.NEEDAFFIX) || i(s, u); for (var c = 0, d = u.length; c < d; c++) { var h = u[c],
                                                f = this.rules[h]; if (f)
                                                for (var p = this._applyRule(s, f), m = 0, g = p.length; m < g; m++) { var v = p[m]; if (i(v, []), f.combineable)
                                                        for (var x = c + 1; x < d; x++) { var y = u[x],
                                                                b = this.rules[y]; if (b && b.combineable && f.type != b.type)
                                                                for (var D = this._applyRule(v, b), C = 0, w = D.length; C < w; C++) { i(D[C], []) } } }
                                            h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(s) } } else i(s.trim(), []) } } return n }, _removeDicComments: function(e) { return e = e.replace(/^\t.*$/gm, "") }, parseRuleCodes: function(e) { if (!e) return []; if (!("FLAG" in this.flags)) return e.split(""); if ("long" === this.flags.FLAG) { for (var t = [], n = 0, i = e.length; n < i; n += 2) t.push(e.substr(n, 2)); return t } return "num" === this.flags.FLAG ? e.split(",") : void 0 }, _applyRule: function(e, t) { for (var n = t.entries, i = [], r = 0, o = n.length; r < o; r++) { var a = n[r]; if (!a.match || e.match(a.match)) { var l = e; if (a.remove && (l = l.replace(a.remove, "")), "SFX" === t.type ? l += a.add : l = a.add + l, i.push(l), "continuationClasses" in a)
                                        for (var s = 0, u = a.continuationClasses.length; s < u; s++) { var c = this.rules[a.continuationClasses[s]];
                                            c && (i = i.concat(this._applyRule(l, c))) } } } return i }, check: function(e) { if (!this.loaded) throw "Dictionary not loaded."; var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""); if (this.checkExact(t)) return !0; if (t.toUpperCase() === t) { var n = t[0] + t.substring(1).toLowerCase(); if (this.hasFlag(n, "KEEPCASE")) return !1; if (this.checkExact(n)) return !0; if (this.checkExact(t.toLowerCase())) return !0 } var i = t[0].toLowerCase() + t.substring(1); if (i !== t) { if (this.hasFlag(i, "KEEPCASE")) return !1; if (this.checkExact(i)) return !0 } return !1 }, checkExact: function(e) { if (!this.loaded) throw "Dictionary not loaded."; var t, n, i = this.dictionaryTable[e]; if ("undefined" === typeof i) { if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN)
                                    for (t = 0, n = this.compoundRules.length; t < n; t++)
                                        if (e.match(this.compoundRules[t])) return !0 } else { if (null === i) return !0; if ("object" === typeof i)
                                    for (t = 0, n = i.length; t < n; t++)
                                        if (!this.hasFlag(e, "ONLYINCOMPOUND", i[t])) return !0 } return !1 }, hasFlag: function(e, t, n) { if (!this.loaded) throw "Dictionary not loaded."; return !(!(t in this.flags) || ("undefined" === typeof n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])), !n || -1 === n.indexOf(this.flags[t]))) }, alphabet: "", suggest: function(e, t) { if (!this.loaded) throw "Dictionary not loaded."; if (t = t || 5, this.memoized.hasOwnProperty(e)) { var n = this.memoized[e].limit; if (t <= n || this.memoized[e].suggestions.length < n) return this.memoized[e].suggestions.slice(0, t) } if (this.check(e)) return []; for (var i = 0, r = this.replacementTable.length; i < r; i++) { var o = this.replacementTable[i]; if (-1 !== e.indexOf(o[0])) { var a = e.replace(o[0], o[1]); if (this.check(a)) return [a] } } var l = this;

                            function s(e, t) { var n, i, r, o, a = {},
                                    s = l.alphabet.length; if ("string" == typeof e) { var u = e;
                                    (e = {})[u] = !0 } for (var u in e)
                                    for (n = 0, r = u.length + 1; n < r; n++) { var c = [u.substring(0, n), u.substring(n)]; if (c[1] && (o = c[0] + c[1].substring(1), t && !l.check(o) || (o in a ? a[o] += 1 : a[o] = 1)), c[1].length > 1 && c[1][1] !== c[1][0] && (o = c[0] + c[1][1] + c[1][0] + c[1].substring(2), t && !l.check(o) || (o in a ? a[o] += 1 : a[o] = 1)), c[1]) { var d = c[1].substring(0, 1).toUpperCase() === c[1].substring(0, 1) ? "uppercase" : "lowercase"; for (i = 0; i < s; i++) { var h = l.alphabet[i]; "uppercase" === d && (h = h.toUpperCase()), h != c[1].substring(0, 1) && (o = c[0] + h + c[1].substring(1), t && !l.check(o) || (o in a ? a[o] += 1 : a[o] = 1)) } } if (c[1])
                                            for (i = 0; i < s; i++) { d = c[0].substring(-1).toUpperCase() === c[0].substring(-1) && c[1].substring(0, 1).toUpperCase() === c[1].substring(0, 1) ? "uppercase" : "lowercase", h = l.alphabet[i]; "uppercase" === d && (h = h.toUpperCase()), o = c[0] + h + c[1], t && !l.check(o) || (o in a ? a[o] += 1 : a[o] = 1) } }
                                return a } return l.alphabet = "abcdefghijklmnopqrstuvwxyz", this.memoized[e] = { suggestions: function(e) { var n, i = s(e),
                                        r = s(i, !0); for (var o in i) l.check(o) && (o in r ? r[o] += i[o] : r[o] = i[o]); var a = []; for (n in r) r.hasOwnProperty(n) && a.push([n, r[n]]);
                                    a.sort((function(e, t) { var n = e[1],
                                            i = t[1]; return n < i ? -1 : n > i ? 1 : t[0].localeCompare(e[0]) })).reverse(); var u = [],
                                        c = "lowercase";
                                    e.toUpperCase() === e ? c = "uppercase" : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (c = "capitalized"); var d = t; for (n = 0; n < Math.min(d, a.length); n++) "uppercase" === c ? a[n][0] = a[n][0].toUpperCase() : "capitalized" === c && (a[n][0] = a[n][0].substr(0, 1).toUpperCase() + a[n][0].substr(1)), l.hasFlag(a[n][0], "NOSUGGEST") || -1 != u.indexOf(a[n][0]) ? d++ : u.push(a[n][0]); return u }(e), limit: t }, this.memoized[e].suggestions } } }(), e.exports = i }).call(this, "/") }, 1482: function(e, t, n) { e.exports = function() { "use strict";

                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                function t(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }

                function n(e, t) { if (e) { if ("string" === typeof e) return i(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0 } }

                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length); for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]; return i }

                function r(e, t) { var i = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (i) return (i = i.call(e)).next.bind(i); if (Array.isArray(e) || (i = n(e)) || t && e && "number" === typeof e.length) { i && (e = i); var r = 0; return function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o = { exports: {} };

                function a() { return { baseUrl: null, breaks: !1, extensions: null, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, walkTokens: null, xhtml: !1 } }

                function l(e) { o.exports.defaults = e }
                o.exports = { defaults: a(), getDefaults: a, changeDefaults: l }; var s = /[&<>"']/,
                    u = /[&<>"']/g,
                    c = /[<>"']|&(?!#?\w+;)/,
                    d = /[<>"']|&(?!#?\w+;)/g,
                    h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
                    f = function(e) { return h[e] };

                function p(e, t) { if (t) { if (s.test(e)) return e.replace(u, f) } else if (c.test(e)) return e.replace(d, f); return e } var m = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

                function g(e) { return e.replace(m, (function(e, t) { return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "" })) } var v = /(^|[^\[])\^/g;

                function x(e, t) { e = e.source || e, t = t || ""; var n = { replace: function(t, i) { return i = (i = i.source || i).replace(v, "$1"), e = e.replace(t, i), n }, getRegex: function() { return new RegExp(e, t) } }; return n } var y = /[^\w:]/g,
                    b = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

                function D(e, t, n) { if (e) { var i; try { i = decodeURIComponent(g(n)).replace(y, "").toLowerCase() } catch (r) { return null } if (0 === i.indexOf("javascript:") || 0 === i.indexOf("vbscript:") || 0 === i.indexOf("data:")) return null }
                    t && !b.test(n) && (n = F(t, n)); try { n = encodeURI(n).replace(/%25/g, "%") } catch (r) { return null } return n } var C = {},
                    w = /^[^:]+:\/*[^/]*$/,
                    k = /^([^:]+:)[\s\S]*$/,
                    S = /^([^:]+:\/*[^/]*)[\s\S]*$/;

                function F(e, t) { C[" " + e] || (w.test(e) ? C[" " + e] = e + "/" : C[" " + e] = T(e, "/", !0)); var n = -1 === (e = C[" " + e]).indexOf(":"); return "//" === t.substring(0, 2) ? n ? t : e.replace(k, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(S, "$1") + t : e + t }

                function A(e) { for (var t, n, i = 1; i < arguments.length; i++)
                        for (n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }

                function E(e, t) { var n = e.replace(/\|/g, (function(e, t, n) { for (var i = !1, r = t; --r >= 0 && "\\" === n[r];) i = !i; return i ? "|" : " |" })).split(/ \|/),
                        i = 0; if (n.length > t) n.splice(t);
                    else
                        for (; n.length < t;) n.push(""); for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, "|"); return n }

                function T(e, t, n) { var i = e.length; if (0 === i) return ""; for (var r = 0; r < i;) { var o = e.charAt(i - r - 1); if (o !== t || n) { if (o === t || !n) break;
                            r++ } else r++ } return e.substr(0, i - r) }

                function L(e, t) { if (-1 === e.indexOf(t[1])) return -1; for (var n = e.length, i = 0, r = 0; r < n; r++)
                        if ("\\" === e[r]) r++;
                        else if (e[r] === t[0]) i++;
                    else if (e[r] === t[1] && --i < 0) return r; return -1 }

                function M(e) { e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options") }

                function B(e, t) { if (t < 1) return ""; for (var n = ""; t > 1;) 1 & t && (n += e), t >>= 1, e += e; return n + e } var N = { escape: p, unescape: g, edit: x, cleanUrl: D, resolveUrl: F, noopTest: { exec: function() {} }, merge: A, splitCells: E, rtrim: T, findClosingBracket: L, checkSanitizeDeprecation: M, repeatString: B },
                    O = o.exports.defaults,
                    I = N.rtrim,
                    z = N.splitCells,
                    H = N.escape,
                    R = N.findClosingBracket;

                function P(e, t, n) { var i = t.href,
                        r = t.title ? H(t.title) : null,
                        o = e[1].replace(/\\([\[\]])/g, "$1"); return "!" !== e[0].charAt(0) ? { type: "link", raw: n, href: i, title: r, text: o } : { type: "image", raw: n, href: i, title: r, text: H(o) } }

                function _(e, t) { var n = e.match(/^(\s+)(?:```)/); if (null === n) return t; var i = n[1]; return t.split("\n").map((function(e) { var t = e.match(/^\s+/); return null === t ? e : t[0].length >= i.length ? e.slice(i.length) : e })).join("\n") } var W = function() {
                        function e(e) { this.options = e || O } var t = e.prototype; return t.space = function(e) { var t = this.rules.block.newline.exec(e); if (t) return t[0].length > 1 ? { type: "space", raw: t[0] } : { raw: "\n" } }, t.code = function(e) { var t = this.rules.block.code.exec(e); if (t) { var n = t[0].replace(/^ {1,4}/gm, ""); return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : I(n, "\n") } } }, t.fences = function(e) { var t = this.rules.block.fences.exec(e); if (t) { var n = t[0],
                                    i = _(n, t[3] || ""); return { type: "code", raw: n, lang: t[2] ? t[2].trim() : t[2], text: i } } }, t.heading = function(e) { var t = this.rules.block.heading.exec(e); if (t) { var n = t[2].trim(); if (/#$/.test(n)) { var i = I(n, "#");
                                    this.options.pedantic ? n = i.trim() : i && !/ $/.test(i) || (n = i.trim()) } return { type: "heading", raw: t[0], depth: t[1].length, text: n } } }, t.nptable = function(e) { var t = this.rules.block.nptable.exec(e); if (t) { var n = { type: "table", header: z(t[1].replace(/^ *| *\| *$/g, "")), align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [], raw: t[0] }; if (n.header.length === n.align.length) { var i, r = n.align.length; for (i = 0; i < r; i++) /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null; for (r = n.cells.length, i = 0; i < r; i++) n.cells[i] = z(n.cells[i], n.header.length); return n } } }, t.hr = function(e) { var t = this.rules.block.hr.exec(e); if (t) return { type: "hr", raw: t[0] } }, t.blockquote = function(e) { var t = this.rules.block.blockquote.exec(e); if (t) { var n = t[0].replace(/^ *> ?/gm, ""); return { type: "blockquote", raw: t[0], text: n } } }, t.list = function(e) { var t = this.rules.block.list.exec(e); if (t) { var n, i, r, o, a, l, s, u, c, d = t[0],
                                    h = t[2],
                                    f = h.length > 1,
                                    p = { type: "list", raw: d, ordered: f, start: f ? +h.slice(0, -1) : "", loose: !1, items: [] },
                                    m = t[0].match(this.rules.block.item),
                                    g = !1,
                                    v = m.length;
                                r = this.rules.block.listItemStart.exec(m[0]); for (var x = 0; x < v; x++) { if (d = n = m[x], this.options.pedantic || (c = n.match(new RegExp("\\n\\s*\\n {0," + (r[0].length - 1) + "}\\S"))) && (a = n.length - c.index + m.slice(x + 1).join("\n").length, p.raw = p.raw.substring(0, p.raw.length - a), d = n = n.substring(0, c.index), v = x + 1), x !== v - 1) { if (o = this.rules.block.listItemStart.exec(m[x + 1]), this.options.pedantic ? o[1].length > r[1].length : o[1].length >= r[0].length || o[1].length > 3) { m.splice(x, 2, m[x] + (!this.options.pedantic && o[1].length < r[0].length && !m[x].match(/\n$/) ? "" : "\n") + m[x + 1]), x--, v--; continue }(!this.options.pedantic || this.options.smartLists ? o[2][o[2].length - 1] !== h[h.length - 1] : f === (1 === o[2].length)) && (a = m.slice(x + 1).join("\n").length, p.raw = p.raw.substring(0, p.raw.length - a), x = v - 1), r = o }
                                    i = n.length, ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (i -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + i + "}", "gm"), "")), n = I(n, "\n"), x !== v - 1 && (d += "\n"), l = g || /\n\n(?!\s*$)/.test(d), x !== v - 1 && (g = "\n\n" === d.slice(-2), l || (l = g)), l && (p.loose = !0), this.options.gfm && (u = void 0, (s = /^\[[ xX]\] /.test(n)) && (u = " " !== n[1], n = n.replace(/^\[[ xX]\] +/, ""))), p.items.push({ type: "list_item", raw: d, task: s, checked: u, loose: l, text: n }) } return p } }, t.html = function(e) { var t = this.rules.block.html.exec(e); if (t) return { type: this.options.sanitize ? "paragraph" : "html", raw: t[0], pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]), text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : H(t[0]) : t[0] } }, t.def = function(e) { var t = this.rules.block.def.exec(e); if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), { type: "def", tag: t[1].toLowerCase().replace(/\s+/g, " "), raw: t[0], href: t[2], title: t[3] } }, t.table = function(e) { var t = this.rules.block.table.exec(e); if (t) { var n = { type: "table", header: z(t[1].replace(/^ *| *\| *$/g, "")), align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [] }; if (n.header.length === n.align.length) { n.raw = t[0]; var i, r = n.align.length; for (i = 0; i < r; i++) /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null; for (r = n.cells.length, i = 0; i < r; i++) n.cells[i] = z(n.cells[i].replace(/^ *\| *| *\| *$/g, ""), n.header.length); return n } } }, t.lheading = function(e) { var t = this.rules.block.lheading.exec(e); if (t) return { type: "heading", raw: t[0], depth: "=" === t[2].charAt(0) ? 1 : 2, text: t[1] } }, t.paragraph = function(e) { var t = this.rules.block.paragraph.exec(e); if (t) return { type: "paragraph", raw: t[0], text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1] } }, t.text = function(e) { var t = this.rules.block.text.exec(e); if (t) return { type: "text", raw: t[0], text: t[0] } }, t.escape = function(e) { var t = this.rules.inline.escape.exec(e); if (t) return { type: "escape", raw: t[0], text: H(t[1]) } }, t.tag = function(e, t, n) { var i = this.rules.inline.tag.exec(e); if (i) return !t && /^<a /i.test(i[0]) ? t = !0 : t && /^<\/a>/i.test(i[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) && (n = !1), { type: this.options.sanitize ? "text" : "html", raw: i[0], inLink: t, inRawBlock: n, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : H(i[0]) : i[0] } }, t.link = function(e) { var t = this.rules.inline.link.exec(e); if (t) { var n = t[2].trim(); if (!this.options.pedantic && /^</.test(n)) { if (!/>$/.test(n)) return; var i = I(n.slice(0, -1), "\\"); if ((n.length - i.length) % 2 === 0) return } else { var r = R(t[2], "()"); if (r > -1) { var o = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r;
                                        t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, o).trim(), t[3] = "" } } var a = t[2],
                                    l = ""; if (this.options.pedantic) { var s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
                                    s && (a = s[1], l = s[3]) } else l = t[3] ? t[3].slice(1, -1) : ""; return a = a.trim(), /^</.test(a) && (a = this.options.pedantic && !/>$/.test(n) ? a.slice(1) : a.slice(1, -1)), P(t, { href: a ? a.replace(this.rules.inline._escapes, "$1") : a, title: l ? l.replace(this.rules.inline._escapes, "$1") : l }, t[0]) } }, t.reflink = function(e, t) { var n; if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) { var i = (n[2] || n[1]).replace(/\s+/g, " "); if (!(i = t[i.toLowerCase()]) || !i.href) { var r = n[0].charAt(0); return { type: "text", raw: r, text: r } } return P(n, i, n[0]) } }, t.emStrong = function(e, t, n) { void 0 === n && (n = ""); var i = this.rules.inline.emStrong.lDelim.exec(e); if (i && (!i[3] || !n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) { var r = i[1] || i[2] || ""; if (!r || r && ("" === n || this.rules.inline.punctuation.exec(n))) { var o, a, l = i[0].length - 1,
                                        s = l,
                                        u = 0,
                                        c = "*" === i[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd; for (c.lastIndex = 0, t = t.slice(-1 * e.length + l); null != (i = c.exec(t));)
                                        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6])
                                            if (a = o.length, i[3] || i[4]) s += a;
                                            else if (!((i[5] || i[6]) && l % 3) || (l + a) % 3) { if (!((s -= a) > 0)) return a = Math.min(a, a + s + u), Math.min(l, a) % 2 ? { type: "em", raw: e.slice(0, l + i.index + a + 1), text: e.slice(1, l + i.index + a) } : { type: "strong", raw: e.slice(0, l + i.index + a + 1), text: e.slice(2, l + i.index + a - 1) } } else u += a } } }, t.codespan = function(e) { var t = this.rules.inline.code.exec(e); if (t) { var n = t[2].replace(/\n/g, " "),
                                    i = /[^ ]/.test(n),
                                    r = /^ /.test(n) && / $/.test(n); return i && r && (n = n.substring(1, n.length - 1)), n = H(n, !0), { type: "codespan", raw: t[0], text: n } } }, t.br = function(e) { var t = this.rules.inline.br.exec(e); if (t) return { type: "br", raw: t[0] } }, t.del = function(e) { var t = this.rules.inline.del.exec(e); if (t) return { type: "del", raw: t[0], text: t[2] } }, t.autolink = function(e, t) { var n, i, r = this.rules.inline.autolink.exec(e); if (r) return i = "@" === r[2] ? "mailto:" + (n = H(this.options.mangle ? t(r[1]) : r[1])) : n = H(r[1]), { type: "link", raw: r[0], text: n, href: i, tokens: [{ type: "text", raw: n, text: n }] } }, t.url = function(e, t) { var n; if (n = this.rules.inline.url.exec(e)) { var i, r; if ("@" === n[2]) r = "mailto:" + (i = H(this.options.mangle ? t(n[0]) : n[0]));
                                else { var o;
                                    do { o = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0] } while (o !== n[0]);
                                    i = H(n[0]), r = "www." === n[1] ? "http://" + i : i } return { type: "link", raw: n[0], text: i, href: r, tokens: [{ type: "text", raw: i, text: i }] } } }, t.inlineText = function(e, t, n) { var i, r = this.rules.inline.text.exec(e); if (r) return i = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : H(r[0]) : r[0] : H(this.options.smartypants ? n(r[0]) : r[0]), { type: "text", raw: r[0], text: i } }, e }(),
                    j = N.noopTest,
                    q = N.edit,
                    U = N.merge,
                    $ = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, nptable: j, table: j, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
                $.def = q($.def).replace("label", $._label).replace("title", $._title).getRegex(), $.bullet = /(?:[*+-]|\d{1,9}[.)])/, $.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, $.item = q($.item, "gm").replace(/bull/g, $.bullet).getRegex(), $.listItemStart = q(/^( *)(bull) */).replace("bull", $.bullet).getRegex(), $.list = q($.list).replace(/bull/g, $.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + $.def.source + ")").getRegex(), $._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", $._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, $.html = q($.html, "i").replace("comment", $._comment).replace("tag", $._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), $.paragraph = q($._paragraph).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.blockquote = q($.blockquote).replace("paragraph", $.paragraph).getRegex(), $.normal = U({}, $), $.gfm = U({}, $.normal, { nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)", table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), $.gfm.nptable = q($.gfm.nptable).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.gfm.table = q($.gfm.table).replace("hr", $.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", $._tag).getRegex(), $.pedantic = U({}, $.normal, { html: q("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", $._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: j, paragraph: q($.normal._paragraph).replace("hr", $.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", $.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() }); var G = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: j, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: j, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/, _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~" };
                G.punctuation = q(G.punctuation).replace(/punctuation/g, G._punctuation).getRegex(), G.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, G.escapedEmSt = /\\\*|\\_/g, G._comment = q($._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), G.emStrong.lDelim = q(G.emStrong.lDelim).replace(/punct/g, G._punctuation).getRegex(), G.emStrong.rDelimAst = q(G.emStrong.rDelimAst, "g").replace(/punct/g, G._punctuation).getRegex(), G.emStrong.rDelimUnd = q(G.emStrong.rDelimUnd, "g").replace(/punct/g, G._punctuation).getRegex(), G._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, G._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, G._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, G.autolink = q(G.autolink).replace("scheme", G._scheme).replace("email", G._email).getRegex(), G._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, G.tag = q(G.tag).replace("comment", G._comment).replace("attribute", G._attribute).getRegex(), G._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, G._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, G._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, G.link = q(G.link).replace("label", G._label).replace("href", G._href).replace("title", G._title).getRegex(), G.reflink = q(G.reflink).replace("label", G._label).getRegex(), G.reflinkSearch = q(G.reflinkSearch, "g").replace("reflink", G.reflink).replace("nolink", G.nolink).getRegex(), G.normal = U({}, G), G.pedantic = U({}, G.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: q(/^!?\[(label)\]\((.*?)\)/).replace("label", G._label).getRegex(), reflink: q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G._label).getRegex() }), G.gfm = U({}, G.normal, { escape: q(G.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), G.gfm.url = q(G.gfm.url, "i").replace("email", G.gfm._extended_email).getRegex(), G.breaks = U({}, G.gfm, { br: q(G.br).replace("{2,}", "*").getRegex(), text: q(G.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }); var V = { block: $, inline: G },
                    K = W,
                    X = o.exports.defaults,
                    Z = V.block,
                    Y = V.inline,
                    J = N.repeatString;

                function Q(e) { return e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") }

                function ee(e) { var t, n, i = "",
                        r = e.length; for (t = 0; t < r; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), i += "&#" + n + ";"; return i } var te = function() {
                        function e(e) { this.tokens = [], this.tokens.links = Object.create(null), this.options = e || X, this.options.tokenizer = this.options.tokenizer || new K, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options; var t = { block: Z.normal, inline: Y.normal };
                            this.options.pedantic ? (t.block = Z.pedantic, t.inline = Y.pedantic) : this.options.gfm && (t.block = Z.gfm, this.options.breaks ? t.inline = Y.breaks : t.inline = Y.gfm), this.tokenizer.rules = t }
                        e.lex = function(t, n) { return new e(n).lex(t) }, e.lexInline = function(t, n) { return new e(n).inlineTokens(t) }; var n = e.prototype; return n.lex = function(e) { return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens }, n.blockTokens = function(e, t, n) { var i, r, o, a, l, s, u = this; for (void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
                                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((function(n) { return !!(i = n.call(u, e, t)) && (e = e.substring(i.raw.length), t.push(i), !0) }))))
                                    if (i = this.tokenizer.space(e)) e = e.substring(i.raw.length), i.type && t.push(i);
                                    else if (i = this.tokenizer.code(e)) e = e.substring(i.raw.length), (a = t[t.length - 1]) && "paragraph" === a.type ? (a.raw += "\n" + i.raw, a.text += "\n" + i.text) : t.push(i);
                            else if (i = this.tokenizer.fences(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (i = this.tokenizer.heading(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (i = this.tokenizer.nptable(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (i = this.tokenizer.hr(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (i = this.tokenizer.blockquote(e)) e = e.substring(i.raw.length), i.tokens = this.blockTokens(i.text, [], n), t.push(i);
                            else if (i = this.tokenizer.list(e)) { for (e = e.substring(i.raw.length), o = i.items.length, r = 0; r < o; r++) i.items[r].tokens = this.blockTokens(i.items[r].text, [], !1);
                                t.push(i) } else if (i = this.tokenizer.html(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (n && (i = this.tokenizer.def(e))) e = e.substring(i.raw.length), this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title });
                            else if (i = this.tokenizer.table(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (i = this.tokenizer.lheading(e)) e = e.substring(i.raw.length), t.push(i);
                            else if (l = e, this.options.extensions && this.options.extensions.startBlock && function() { var t = 1 / 0,
                                        n = e.slice(1),
                                        i = void 0;
                                    u.options.extensions.startBlock.forEach((function(e) { "number" === typeof(i = e.call(this, n)) && i >= 0 && (t = Math.min(t, i)) })), t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1)) }(), n && (i = this.tokenizer.paragraph(l))) a = t[t.length - 1], s && "paragraph" === a.type ? (a.raw += "\n" + i.raw, a.text += "\n" + i.text) : t.push(i), s = l.length !== e.length, e = e.substring(i.raw.length);
                            else if (i = this.tokenizer.text(e)) e = e.substring(i.raw.length), (a = t[t.length - 1]) && "text" === a.type ? (a.raw += "\n" + i.raw, a.text += "\n" + i.text) : t.push(i);
                            else if (e) { var c = "Infinite loop on byte: " + e.charCodeAt(0); if (this.options.silent) { console.error(c); break } throw new Error(c) } return t }, n.inline = function(e) { var t, n, i, r, o, a, l = e.length; for (t = 0; t < l; t++) switch ((a = e[t]).type) {
                                case "paragraph":
                                case "text":
                                case "heading":
                                    a.tokens = [], this.inlineTokens(a.text, a.tokens); break;
                                case "table":
                                    for (a.tokens = { header: [], cells: [] }, r = a.header.length, n = 0; n < r; n++) a.tokens.header[n] = [], this.inlineTokens(a.header[n], a.tokens.header[n]); for (r = a.cells.length, n = 0; n < r; n++)
                                        for (o = a.cells[n], a.tokens.cells[n] = [], i = 0; i < o.length; i++) a.tokens.cells[n][i] = [], this.inlineTokens(o[i], a.tokens.cells[n][i]); break;
                                case "blockquote":
                                    this.inline(a.tokens); break;
                                case "list":
                                    for (r = a.items.length, n = 0; n < r; n++) this.inline(a.items[n].tokens) }
                            return e }, n.inlineTokens = function(e, t, n, i) { var r, o, a, l = this;
                            void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === i && (i = !1); var s, u, c, d = e; if (this.tokens.links) { var h = Object.keys(this.tokens.links); if (h.length > 0)
                                    for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(d));) h.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (d = d.slice(0, s.index) + "[" + J("a", s[0].length - 2) + "]" + d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)) } for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(d));) d = d.slice(0, s.index) + "[" + J("a", s[0].length - 2) + "]" + d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex); for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(d));) d = d.slice(0, s.index) + "++" + d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex); for (; e;)
                                if (u || (c = ""), u = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((function(n) { return !!(r = n.call(l, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0) }))))
                                    if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.tag(e, n, i)) e = e.substring(r.raw.length), n = r.inLink, i = r.inRawBlock, (o = t[t.length - 1]) && "text" === r.type && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : t.push(r);
                            else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), "link" === r.type && (r.tokens = this.inlineTokens(r.text, [], !0, i)), t.push(r);
                            else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), o = t[t.length - 1], "link" === r.type ? (r.tokens = this.inlineTokens(r.text, [], !0, i), t.push(r)) : o && "text" === r.type && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : t.push(r);
                            else if (r = this.tokenizer.emStrong(e, d, c)) e = e.substring(r.raw.length), r.tokens = this.inlineTokens(r.text, [], n, i), t.push(r);
                            else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
                            else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
                            else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), r.tokens = this.inlineTokens(r.text, [], n, i), t.push(r);
                            else if (r = this.tokenizer.autolink(e, ee)) e = e.substring(r.raw.length), t.push(r);
                            else if (n || !(r = this.tokenizer.url(e, ee))) { if (a = e, this.options.extensions && this.options.extensions.startInline && function() { var t = 1 / 0,
                                            n = e.slice(1),
                                            i = void 0;
                                        l.options.extensions.startInline.forEach((function(e) { "number" === typeof(i = e.call(this, n)) && i >= 0 && (t = Math.min(t, i)) })), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1)) }(), r = this.tokenizer.inlineText(a, i, Q)) e = e.substring(r.raw.length), "_" !== r.raw.slice(-1) && (c = r.raw.slice(-1)), u = !0, (o = t[t.length - 1]) && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : t.push(r);
                                else if (e) { var f = "Infinite loop on byte: " + e.charCodeAt(0); if (this.options.silent) { console.error(f); break } throw new Error(f) } } else e = e.substring(r.raw.length), t.push(r); return t }, t(e, null, [{ key: "rules", get: function() { return { block: Z, inline: Y } } }]), e }(),
                    ne = o.exports.defaults,
                    ie = N.cleanUrl,
                    re = N.escape,
                    oe = function() {
                        function e(e) { this.options = e || ne } var t = e.prototype; return t.code = function(e, t, n) { var i = (t || "").match(/\S*/)[0]; if (this.options.highlight) { var r = this.options.highlight(e, i);
                                null != r && r !== e && (n = !0, e = r) } return e = e.replace(/\n$/, "") + "\n", i ? '<pre><code class="' + this.options.langPrefix + re(i, !0) + '">' + (n ? e : re(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : re(e, !0)) + "</code></pre>\n" }, t.blockquote = function(e) { return "<blockquote>\n" + e + "</blockquote>\n" }, t.html = function(e) { return e }, t.heading = function(e, t, n, i) { return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + i.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n" }, t.hr = function() { return this.options.xhtml ? "<hr/>\n" : "<hr>\n" }, t.list = function(e, t, n) { var i = t ? "ol" : "ul"; return "<" + i + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + i + ">\n" }, t.listitem = function(e) { return "<li>" + e + "</li>\n" }, t.checkbox = function(e) { return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> " }, t.paragraph = function(e) { return "<p>" + e + "</p>\n" }, t.table = function(e, t) { return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n" }, t.tablerow = function(e) { return "<tr>\n" + e + "</tr>\n" }, t.tablecell = function(e, t) { var n = t.header ? "th" : "td"; return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n" }, t.strong = function(e) { return "<strong>" + e + "</strong>" }, t.em = function(e) { return "<em>" + e + "</em>" }, t.codespan = function(e) { return "<code>" + e + "</code>" }, t.br = function() { return this.options.xhtml ? "<br/>" : "<br>" }, t.del = function(e) { return "<del>" + e + "</del>" }, t.link = function(e, t, n) { if (null === (e = ie(this.options.sanitize, this.options.baseUrl, e))) return n; var i = '<a href="' + re(e) + '"'; return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>" }, t.image = function(e, t, n) { if (null === (e = ie(this.options.sanitize, this.options.baseUrl, e))) return n; var i = '<img src="' + e + '" alt="' + n + '"'; return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">" }, t.text = function(e) { return e }, e }(),
                    ae = function() {
                        function e() {} var t = e.prototype; return t.strong = function(e) { return e }, t.em = function(e) { return e }, t.codespan = function(e) { return e }, t.del = function(e) { return e }, t.html = function(e) { return e }, t.text = function(e) { return e }, t.link = function(e, t, n) { return "" + n }, t.image = function(e, t, n) { return "" + n }, t.br = function() { return "" }, e }(),
                    le = function() {
                        function e() { this.seen = {} } var t = e.prototype; return t.serialize = function(e) { return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-") }, t.getNextSafeSlug = function(e, t) { var n = e,
                                i = 0; if (this.seen.hasOwnProperty(n)) { i = this.seen[e];
                                do { n = e + "-" + ++i } while (this.seen.hasOwnProperty(n)) } return t || (this.seen[e] = i, this.seen[n] = 0), n }, t.slug = function(e, t) { void 0 === t && (t = {}); var n = this.serialize(e); return this.getNextSafeSlug(n, t.dryrun) }, e }(),
                    se = oe,
                    ue = ae,
                    ce = le,
                    de = o.exports.defaults,
                    he = N.unescape,
                    fe = te,
                    pe = function() {
                        function e(e) { this.options = e || de, this.options.renderer = this.options.renderer || new se, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ue, this.slugger = new ce }
                        e.parse = function(t, n) { return new e(n).parse(t) }, e.parseInline = function(t, n) { return new e(n).parseInline(t) }; var t = e.prototype; return t.parse = function(e, t) { void 0 === t && (t = !0); var n, i, r, o, a, l, s, u, c, d, h, f, p, m, g, v, x, y, b, D = "",
                                C = e.length; for (n = 0; n < C; n++)
                                if (d = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d.type]) || !1 === (b = this.options.extensions.renderers[d.type].call(this, d)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d.type)) switch (d.type) {
                                    case "space":
                                        continue;
                                    case "hr":
                                        D += this.renderer.hr(); continue;
                                    case "heading":
                                        D += this.renderer.heading(this.parseInline(d.tokens), d.depth, he(this.parseInline(d.tokens, this.textRenderer)), this.slugger); continue;
                                    case "code":
                                        D += this.renderer.code(d.text, d.lang, d.escaped); continue;
                                    case "table":
                                        for (u = "", s = "", o = d.header.length, i = 0; i < o; i++) s += this.renderer.tablecell(this.parseInline(d.tokens.header[i]), { header: !0, align: d.align[i] }); for (u += this.renderer.tablerow(s), c = "", o = d.cells.length, i = 0; i < o; i++) { for (s = "", a = (l = d.tokens.cells[i]).length, r = 0; r < a; r++) s += this.renderer.tablecell(this.parseInline(l[r]), { header: !1, align: d.align[r] });
                                            c += this.renderer.tablerow(s) }
                                        D += this.renderer.table(u, c); continue;
                                    case "blockquote":
                                        c = this.parse(d.tokens), D += this.renderer.blockquote(c); continue;
                                    case "list":
                                        for (h = d.ordered, f = d.start, p = d.loose, o = d.items.length, c = "", i = 0; i < o; i++) v = (g = d.items[i]).checked, x = g.task, m = "", g.task && (y = this.renderer.checkbox(v), p ? g.tokens.length > 0 && "text" === g.tokens[0].type ? (g.tokens[0].text = y + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = y + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({ type: "text", text: y }) : m += y), m += this.parse(g.tokens, p), c += this.renderer.listitem(m, x, v);
                                        D += this.renderer.list(c, h, f); continue;
                                    case "html":
                                        D += this.renderer.html(d.text); continue;
                                    case "paragraph":
                                        D += this.renderer.paragraph(this.parseInline(d.tokens)); continue;
                                    case "text":
                                        for (c = d.tokens ? this.parseInline(d.tokens) : d.text; n + 1 < C && "text" === e[n + 1].type;) c += "\n" + ((d = e[++n]).tokens ? this.parseInline(d.tokens) : d.text);
                                        D += t ? this.renderer.paragraph(c) : c; continue;
                                    default:
                                        var w = 'Token with "' + d.type + '" type was not found.'; if (this.options.silent) return void console.error(w); throw new Error(w) } else D += b || "";
                            return D }, t.parseInline = function(e, t) { t = t || this.renderer; var n, i, r, o = "",
                                a = e.length; for (n = 0; n < a; n++)
                                if (i = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) || !1 === (r = this.options.extensions.renderers[i.type].call(this, i)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) switch (i.type) {
                                    case "escape":
                                        o += t.text(i.text); break;
                                    case "html":
                                        o += t.html(i.text); break;
                                    case "link":
                                        o += t.link(i.href, i.title, this.parseInline(i.tokens, t)); break;
                                    case "image":
                                        o += t.image(i.href, i.title, i.text); break;
                                    case "strong":
                                        o += t.strong(this.parseInline(i.tokens, t)); break;
                                    case "em":
                                        o += t.em(this.parseInline(i.tokens, t)); break;
                                    case "codespan":
                                        o += t.codespan(i.text); break;
                                    case "br":
                                        o += t.br(); break;
                                    case "del":
                                        o += t.del(this.parseInline(i.tokens, t)); break;
                                    case "text":
                                        o += t.text(i.text); break;
                                    default:
                                        var l = 'Token with "' + i.type + '" type was not found.'; if (this.options.silent) return void console.error(l); throw new Error(l) } else o += r || "";
                            return o }, e }(),
                    me = W,
                    ge = oe,
                    ve = ae,
                    xe = le,
                    ye = N.merge,
                    be = N.checkSanitizeDeprecation,
                    De = N.escape,
                    Ce = o.exports.getDefaults,
                    we = o.exports.changeDefaults,
                    ke = o.exports.defaults;

                function Se(e, t, n) { if ("undefined" === typeof e || null === e) throw new Error("marked(): input parameter is undefined or null"); if ("string" !== typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"); if ("function" === typeof t && (n = t, t = null), t = ye({}, Se.defaults, t || {}), be(t), n) { var i, r = t.highlight; try { i = fe.lex(e, t) } catch (s) { return n(s) } var o = function(e) { var o; if (!e) try { t.walkTokens && Se.walkTokens(i, t.walkTokens), o = pe.parse(i, t) } catch (s) { e = s }
                            return t.highlight = r, e ? n(e) : n(null, o) }; if (!r || r.length < 3) return o(); if (delete t.highlight, !i.length) return o(); var a = 0; return Se.walkTokens(i, (function(e) { "code" === e.type && (a++, setTimeout((function() { r(e.text, e.lang, (function(t, n) { if (t) return o(t);
                                    null != n && n !== e.text && (e.text = n, e.escaped = !0), 0 === --a && o() })) }), 0)) })), void(0 === a && o()) } try { var l = fe.lex(e, t); return t.walkTokens && Se.walkTokens(l, t.walkTokens), pe.parse(l, t) } catch (s) { if (s.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + De(s.message + "", !0) + "</pre>"; throw s } } return Se.options = Se.setOptions = function(e) { return ye(Se.defaults, e), we(Se.defaults), Se }, Se.getDefaults = Ce, Se.defaults = ke, Se.use = function() { for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]; var r, o = ye.apply(void 0, [{}].concat(n)),
                        a = Se.defaults.extensions || { renderers: {}, childTokens: {} };
                    n.forEach((function(t) { if (t.extensions && (r = !0, t.extensions.forEach((function(e) { if (!e.name) throw new Error("extension name required"); if (e.renderer) { var t = a.renderers ? a.renderers[e.name] : null;
                                    a.renderers[e.name] = t ? function() { for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]; var o = e.renderer.apply(this, i); return !1 === o && (o = t.apply(this, i)), o } : e.renderer } if (e.tokenizer) { if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                                    a[e.level] ? a[e.level].unshift(e.tokenizer) : a[e.level] = [e.tokenizer], e.start && ("block" === e.level ? a.startBlock ? a.startBlock.push(e.start) : a.startBlock = [e.start] : "inline" === e.level && (a.startInline ? a.startInline.push(e.start) : a.startInline = [e.start])) }
                                e.childTokens && (a.childTokens[e.name] = e.childTokens) }))), t.renderer && function() { var e = Se.defaults.renderer || new ge,
                                    n = function(n) { var i = e[n];
                                        e[n] = function() { for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]; var l = t.renderer[n].apply(e, o); return !1 === l && (l = i.apply(e, o)), l } }; for (var i in t.renderer) n(i);
                                o.renderer = e }(), t.tokenizer && function() { var e = Se.defaults.tokenizer || new me,
                                    n = function(n) { var i = e[n];
                                        e[n] = function() { for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]; var l = t.tokenizer[n].apply(e, o); return !1 === l && (l = i.apply(e, o)), l } }; for (var i in t.tokenizer) n(i);
                                o.tokenizer = e }(), t.walkTokens) { var n = Se.defaults.walkTokens;
                            o.walkTokens = function(i) { t.walkTokens.call(e, i), n && n(i) } }
                        r && (o.extensions = a), Se.setOptions(o) })) }, Se.walkTokens = function(e, t) { for (var n, i = function() { var e = n.value; switch (t(e), e.type) {
                                case "table":
                                    for (var i, o = r(e.tokens.header); !(i = o()).done;) { var a = i.value;
                                        Se.walkTokens(a, t) } for (var l, s = r(e.tokens.cells); !(l = s()).done;)
                                        for (var u, c = r(l.value); !(u = c()).done;) { var d = u.value;
                                            Se.walkTokens(d, t) }
                                    break;
                                case "list":
                                    Se.walkTokens(e.items, t); break;
                                default:
                                    Se.defaults.extensions && Se.defaults.extensions.childTokens && Se.defaults.extensions.childTokens[e.type] ? Se.defaults.extensions.childTokens[e.type].forEach((function(n) { Se.walkTokens(e[n], t) })) : e.tokens && Se.walkTokens(e.tokens, t) } }, o = r(e); !(n = o()).done;) i() }, Se.parseInline = function(e, t) { if ("undefined" === typeof e || null === e) throw new Error("marked.parseInline(): input parameter is undefined or null"); if ("string" !== typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    t = ye({}, Se.defaults, t || {}), be(t); try { var n = fe.lexInline(e, t); return t.walkTokens && Se.walkTokens(n, t.walkTokens), pe.parseInline(n, t) } catch (i) { if (i.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + De(i.message + "", !0) + "</pre>"; throw i } }, Se.Parser = pe, Se.parser = pe.parse, Se.Renderer = ge, Se.TextRenderer = ve, Se.Lexer = fe, Se.lexer = fe.lex, Se.Tokenizer = me, Se.Slugger = xe, Se.parse = Se, Se }() }, 1483: function(e, t, n) {}, 800: function(e, t, n) { e.exports = function() { "use strict"; var e = navigator.userAgent,
                    t = navigator.platform,
                    n = /gecko\/\d/i.test(e),
                    i = /MSIE \d/.test(e),
                    r = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    a = i || r || o,
                    l = a && (i ? document.documentMode || 6 : +(o || r)[1]),
                    s = !o && /WebKit\//.test(e),
                    u = s && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\//.test(e),
                    d = /Opera\//.test(e),
                    h = /Apple Computer/.test(navigator.vendor),
                    f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    p = /PhantomJS/.test(e),
                    m = h && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
                    g = /Android/.test(e),
                    v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    x = m || /Mac/.test(t),
                    y = /\bCrOS\b/.test(e),
                    b = /win/i.test(t),
                    D = d && e.match(/Version\/(\d*\.\d*)/);
                D && (D = Number(D[1])), D && D >= 15 && (d = !1, s = !0); var C = x && (u || d && (null == D || D < 12.11)),
                    w = n || a && l >= 9;

                function k(e) { return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*") } var S, F = function(e, t) { var n = e.className,
                        i = k(t).exec(n); if (i) { var r = n.slice(i.index + i[0].length);
                        e.className = n.slice(0, i.index) + (r ? i[1] + r : "") } };

                function A(e) { for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild); return e }

                function E(e, t) { return A(e).appendChild(t) }

                function T(e, t, n, i) { var r = document.createElement(e); if (n && (r.className = n), i && (r.style.cssText = i), "string" == typeof t) r.appendChild(document.createTextNode(t));
                    else if (t)
                        for (var o = 0; o < t.length; ++o) r.appendChild(t[o]); return r }

                function L(e, t, n, i) { var r = T(e, t, n, i); return r.setAttribute("role", "presentation"), r }

                function M(e, t) { if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                    do { if (11 == t.nodeType && (t = t.host), t == e) return !0 } while (t = t.parentNode) }

                function B() { var e; try { e = document.activeElement } catch (t) { e = document.body || null } for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement; return e }

                function N(e, t) { var n = e.className;
                    k(t).test(n) || (e.className += (n ? " " : "") + t) }

                function O(e, t) { for (var n = e.split(" "), i = 0; i < n.length; i++) n[i] && !k(n[i]).test(t) && (t += " " + n[i]); return t }
                S = document.createRange ? function(e, t, n, i) { var r = document.createRange(); return r.setEnd(i || e, n), r.setStart(e, t), r } : function(e, t, n) { var i = document.body.createTextRange(); try { i.moveToElementText(e.parentNode) } catch (r) { return i } return i.collapse(!0), i.moveEnd("character", n), i.moveStart("character", t), i }; var I = function(e) { e.select() };

                function z(e) { var t = Array.prototype.slice.call(arguments, 1); return function() { return e.apply(null, t) } }

                function H(e, t, n) { for (var i in t || (t = {}), e) !e.hasOwnProperty(i) || !1 === n && t.hasOwnProperty(i) || (t[i] = e[i]); return t }

                function R(e, t, n, i, r) { null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length); for (var o = i || 0, a = r || 0;;) { var l = e.indexOf("\t", o); if (l < 0 || l >= t) return a + (t - o);
                        a += l - o, a += n - a % n, o = l + 1 } }
                m ? I = function(e) { e.selectionStart = 0, e.selectionEnd = e.value.length } : a && (I = function(e) { try { e.select() } catch (t) {} }); var P = function() { this.id = null, this.f = null, this.time = 0, this.handler = z(this.onTimeout, this) };

                function _(e, t) { for (var n = 0; n < e.length; ++n)
                        if (e[n] == t) return n;
                    return -1 }
                P.prototype.onTimeout = function(e) { e.id = 0, e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date) }, P.prototype.set = function(e, t) { this.f = t; var n = +new Date + e;
                    (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n) }; var W = 50,
                    j = { toString: function() { return "CodeMirror.Pass" } },
                    q = { scroll: !1 },
                    U = { origin: "*mouse" },
                    $ = { origin: "+move" };

                function G(e, t, n) { for (var i = 0, r = 0;;) { var o = e.indexOf("\t", i); - 1 == o && (o = e.length); var a = o - i; if (o == e.length || r + a >= t) return i + Math.min(a, t - r); if (r += o - i, i = o + 1, (r += n - r % n) >= t) return i } } var V = [""];

                function K(e) { for (; V.length <= e;) V.push(X(V) + " "); return V[e] }

                function X(e) { return e[e.length - 1] }

                function Z(e, t) { for (var n = [], i = 0; i < e.length; i++) n[i] = t(e[i], i); return n }

                function Y(e, t, n) { for (var i = 0, r = n(t); i < e.length && n(e[i]) <= r;) i++;
                    e.splice(i, 0, t) }

                function J() {}

                function Q(e, t) { var n; return Object.create ? n = Object.create(e) : (J.prototype = e, n = new J), t && H(t, n), n } var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

                function te(e) { return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || ee.test(e)) }

                function ne(e, t) { return t ? !!(t.source.indexOf("\\w") > -1 && te(e)) || t.test(e) : te(e) }

                function ie(e) { for (var t in e)
                        if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0 } var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

                function oe(e) { return e.charCodeAt(0) >= 768 && re.test(e) }

                function ae(e, t, n) { for (;
                        (n < 0 ? t > 0 : t < e.length) && oe(e.charAt(t));) t += n; return t }

                function le(e, t, n) { for (var i = t > n ? -1 : 1;;) { if (t == n) return t; var r = (t + n) / 2,
                            o = i < 0 ? Math.ceil(r) : Math.floor(r); if (o == t) return e(o) ? t : n;
                        e(o) ? n = o : t = o + i } }

                function se(e, t, n, i) { if (!e) return i(t, n, "ltr", 0); for (var r = !1, o = 0; o < e.length; ++o) { var a = e[o];
                        (a.from < n && a.to > t || t == n && a.to == t) && (i(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), r = !0) }
                    r || i(t, n, "ltr") } var ue = null;

                function ce(e, t, n) { var i;
                    ue = null; for (var r = 0; r < e.length; ++r) { var o = e[r]; if (o.from < t && o.to > t) return r;
                        o.to == t && (o.from != o.to && "before" == n ? i = r : ue = r), o.from == t && (o.from != o.to && "before" != n ? i = r : ue = r) } return null != i ? i : ue } var de = function() { var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

                    function n(n) { return n <= 247 ? e.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? t.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L" } var i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        r = /[stwN]/,
                        o = /[LRr]/,
                        a = /[Lb1n]/,
                        l = /[1n]/;

                    function s(e, t, n) { this.level = e, this.from = t, this.to = n } return function(e, t) { var u = "ltr" == t ? "L" : "R"; if (0 == e.length || "ltr" == t && !i.test(e)) return !1; for (var c = e.length, d = [], h = 0; h < c; ++h) d.push(n(e.charCodeAt(h))); for (var f = 0, p = u; f < c; ++f) { var m = d[f]; "m" == m ? d[f] = p : p = m } for (var g = 0, v = u; g < c; ++g) { var x = d[g]; "1" == x && "r" == v ? d[g] = "n" : o.test(x) && (v = x, "r" == x && (d[g] = "R")) } for (var y = 1, b = d[0]; y < c - 1; ++y) { var D = d[y]; "+" == D && "1" == b && "1" == d[y + 1] ? d[y] = "1" : "," != D || b != d[y + 1] || "1" != b && "n" != b || (d[y] = b), b = D } for (var C = 0; C < c; ++C) { var w = d[C]; if ("," == w) d[C] = "N";
                            else if ("%" == w) { var k = void 0; for (k = C + 1; k < c && "%" == d[k]; ++k); for (var S = C && "!" == d[C - 1] || k < c && "1" == d[k] ? "1" : "N", F = C; F < k; ++F) d[F] = S;
                                C = k - 1 } } for (var A = 0, E = u; A < c; ++A) { var T = d[A]; "L" == E && "1" == T ? d[A] = "L" : o.test(T) && (E = T) } for (var L = 0; L < c; ++L)
                            if (r.test(d[L])) { var M = void 0; for (M = L + 1; M < c && r.test(d[M]); ++M); for (var B = "L" == (L ? d[L - 1] : u), N = B == ("L" == (M < c ? d[M] : u)) ? B ? "L" : "R" : u, O = L; O < M; ++O) d[O] = N;
                                L = M - 1 }
                        for (var I, z = [], H = 0; H < c;)
                            if (a.test(d[H])) { var R = H; for (++H; H < c && a.test(d[H]); ++H);
                                z.push(new s(0, R, H)) } else { var P = H,
                                    _ = z.length,
                                    W = "rtl" == t ? 1 : 0; for (++H; H < c && "L" != d[H]; ++H); for (var j = P; j < H;)
                                    if (l.test(d[j])) { P < j && (z.splice(_, 0, new s(1, P, j)), _ += W); var q = j; for (++j; j < H && l.test(d[j]); ++j);
                                        z.splice(_, 0, new s(2, q, j)), _ += W, P = j } else ++j;
                                P < H && z.splice(_, 0, new s(1, P, H)) }
                        return "ltr" == t && (1 == z[0].level && (I = e.match(/^\s+/)) && (z[0].from = I[0].length, z.unshift(new s(0, 0, I[0].length))), 1 == X(z).level && (I = e.match(/\s+$/)) && (X(z).to -= I[0].length, z.push(new s(0, c - I[0].length, c)))), "rtl" == t ? z.reverse() : z } }();

                function he(e, t) { var n = e.order; return null == n && (n = e.order = de(e.text, t)), n } var fe = [],
                    pe = function(e, t, n) { if (e.addEventListener) e.addEventListener(t, n, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, n);
                        else { var i = e._handlers || (e._handlers = {});
                            i[t] = (i[t] || fe).concat(n) } };

                function me(e, t) { return e._handlers && e._handlers[t] || fe }

                function ge(e, t, n) { if (e.removeEventListener) e.removeEventListener(t, n, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, n);
                    else { var i = e._handlers,
                            r = i && i[t]; if (r) { var o = _(r, n);
                            o > -1 && (i[t] = r.slice(0, o).concat(r.slice(o + 1))) } } }

                function ve(e, t) { var n = me(e, t); if (n.length)
                        for (var i = Array.prototype.slice.call(arguments, 2), r = 0; r < n.length; ++r) n[r].apply(null, i) }

                function xe(e, t, n) { return "string" == typeof t && (t = { type: t, preventDefault: function() { this.defaultPrevented = !0 } }), ve(e, n || t.type, e, t), ke(t) || t.codemirrorIgnore }

                function ye(e) { var t = e._handlers && e._handlers.cursorActivity; if (t)
                        for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), i = 0; i < t.length; ++i) - 1 == _(n, t[i]) && n.push(t[i]) }

                function be(e, t) { return me(e, t).length > 0 }

                function De(e) { e.prototype.on = function(e, t) { pe(this, e, t) }, e.prototype.off = function(e, t) { ge(this, e, t) } }

                function Ce(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

                function we(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }

                function ke(e) { return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue }

                function Se(e) { Ce(e), we(e) }

                function Fe(e) { return e.target || e.srcElement }

                function Ae(e) { var t = e.which; return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), x && e.ctrlKey && 1 == t && (t = 3), t } var Ee, Te, Le = function() { if (a && l < 9) return !1; var e = T("div"); return "draggable" in e || "dragDrop" in e }();

                function Me(e) { if (null == Ee) { var t = T("span", "\u200b");
                        E(e, T("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Ee = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8)) } var n = Ee ? T("span", "\u200b") : T("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px"); return n.setAttribute("cm-text", ""), n }

                function Be(e) { if (null != Te) return Te; var t = E(e, document.createTextNode("A\u062eA")),
                        n = S(t, 0, 1).getBoundingClientRect(),
                        i = S(t, 1, 2).getBoundingClientRect(); return A(e), !(!n || n.left == n.right) && (Te = i.right - n.right < 3) } var Ne = 3 != "\n\nb".split(/\n/).length ? function(e) { for (var t = 0, n = [], i = e.length; t <= i;) { var r = e.indexOf("\n", t); - 1 == r && (r = e.length); var o = e.slice(t, "\r" == e.charAt(r - 1) ? r - 1 : r),
                                a = o.indexOf("\r"); - 1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = r + 1) } return n } : function(e) { return e.split(/\r\n?|\n/) },
                    Oe = window.getSelection ? function(e) { try { return e.selectionStart != e.selectionEnd } catch (t) { return !1 } } : function(e) { var t; try { t = e.ownerDocument.selection.createRange() } catch (n) {} return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t) },
                    Ie = function() { var e = T("div"); return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy) }(),
                    ze = null;

                function He(e) { if (null != ze) return ze; var t = E(e, T("span", "x")),
                        n = t.getBoundingClientRect(),
                        i = S(t, 0, 1).getBoundingClientRect(); return ze = Math.abs(n.left - i.left) > 1 } var Re = {},
                    Pe = {};

                function _e(e, t) { arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Re[e] = t }

                function We(e, t) { Pe[e] = t }

                function je(e) { if ("string" == typeof e && Pe.hasOwnProperty(e)) e = Pe[e];
                    else if (e && "string" == typeof e.name && Pe.hasOwnProperty(e.name)) { var t = Pe[e.name]; "string" == typeof t && (t = { name: t }), (e = Q(t, e)).name = t.name } else { if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return je("application/xml"); if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return je("application/json") } return "string" == typeof e ? { name: e } : e || { name: "null" } }

                function qe(e, t) { t = je(t); var n = Re[t.name]; if (!n) return qe(e, "text/plain"); var i = n(e, t); if (Ue.hasOwnProperty(t.name)) { var r = Ue[t.name]; for (var o in r) r.hasOwnProperty(o) && (i.hasOwnProperty(o) && (i["_" + o] = i[o]), i[o] = r[o]) } if (i.name = t.name, t.helperType && (i.helperType = t.helperType), t.modeProps)
                        for (var a in t.modeProps) i[a] = t.modeProps[a]; return i } var Ue = {};

                function $e(e, t) { H(t, Ue.hasOwnProperty(e) ? Ue[e] : Ue[e] = {}) }

                function Ge(e, t) { if (!0 === t) return t; if (e.copyState) return e.copyState(t); var n = {}; for (var i in t) { var r = t[i];
                        r instanceof Array && (r = r.concat([])), n[i] = r } return n }

                function Ve(e, t) { for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode; return n || { mode: e, state: t } }

                function Ke(e, t, n) { return !e.startState || e.startState(t, n) } var Xe = function(e, t, n) { this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n };

                function Ze(e, t) { if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document."); for (var n = e; !n.lines;)
                        for (var i = 0;; ++i) { var r = n.children[i],
                                o = r.chunkSize(); if (t < o) { n = r; break }
                            t -= o }
                    return n.lines[t] }

                function Ye(e, t, n) { var i = [],
                        r = t.line; return e.iter(t.line, n.line + 1, (function(e) { var o = e.text;
                        r == n.line && (o = o.slice(0, n.ch)), r == t.line && (o = o.slice(t.ch)), i.push(o), ++r })), i }

                function Je(e, t, n) { var i = []; return e.iter(t, n, (function(e) { i.push(e.text) })), i }

                function Qe(e, t) { var n = t - e.height; if (n)
                        for (var i = e; i; i = i.parent) i.height += n }

                function et(e) { if (null == e.parent) return null; for (var t = e.parent, n = _(t.lines, e), i = t.parent; i; t = i, i = i.parent)
                        for (var r = 0; i.children[r] != t; ++r) n += i.children[r].chunkSize(); return n + t.first }

                function tt(e, t) { var n = e.first;
                    e: do { for (var i = 0; i < e.children.length; ++i) { var r = e.children[i],
                                o = r.height; if (t < o) { e = r; continue e }
                            t -= o, n += r.chunkSize() } return n } while (!e.lines); for (var a = 0; a < e.lines.length; ++a) { var l = e.lines[a].height; if (t < l) break;
                        t -= l } return n + a }

                function nt(e, t) { return t >= e.first && t < e.first + e.size }

                function it(e, t) { return String(e.lineNumberFormatter(t + e.firstLineNumber)) }

                function rt(e, t, n) { if (void 0 === n && (n = null), !(this instanceof rt)) return new rt(e, t, n);
                    this.line = e, this.ch = t, this.sticky = n }

                function ot(e, t) { return e.line - t.line || e.ch - t.ch }

                function at(e, t) { return e.sticky == t.sticky && 0 == ot(e, t) }

                function lt(e) { return rt(e.line, e.ch) }

                function st(e, t) { return ot(e, t) < 0 ? t : e }

                function ut(e, t) { return ot(e, t) < 0 ? e : t }

                function ct(e, t) { return Math.max(e.first, Math.min(t, e.first + e.size - 1)) }

                function dt(e, t) { if (t.line < e.first) return rt(e.first, 0); var n = e.first + e.size - 1; return t.line > n ? rt(n, Ze(e, n).text.length) : ht(t, Ze(e, t.line).text.length) }

                function ht(e, t) { var n = e.ch; return null == n || n > t ? rt(e.line, t) : n < 0 ? rt(e.line, 0) : e }

                function ft(e, t) { for (var n = [], i = 0; i < t.length; i++) n[i] = dt(e, t[i]); return n }
                Xe.prototype.eol = function() { return this.pos >= this.string.length }, Xe.prototype.sol = function() { return this.pos == this.lineStart }, Xe.prototype.peek = function() { return this.string.charAt(this.pos) || void 0 }, Xe.prototype.next = function() { if (this.pos < this.string.length) return this.string.charAt(this.pos++) }, Xe.prototype.eat = function(e) { var t = this.string.charAt(this.pos); if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t }, Xe.prototype.eatWhile = function(e) { for (var t = this.pos; this.eat(e);); return this.pos > t }, Xe.prototype.eatSpace = function() { for (var e = this.pos;
                        /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos; return this.pos > e }, Xe.prototype.skipToEnd = function() { this.pos = this.string.length }, Xe.prototype.skipTo = function(e) { var t = this.string.indexOf(e, this.pos); if (t > -1) return this.pos = t, !0 }, Xe.prototype.backUp = function(e) { this.pos -= e }, Xe.prototype.column = function() { return this.lastColumnPos < this.start && (this.lastColumnValue = R(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0) }, Xe.prototype.indentation = function() { return R(this.string, null, this.tabSize) - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0) }, Xe.prototype.match = function(e, t, n) { if ("string" != typeof e) { var i = this.string.slice(this.pos).match(e); return i && i.index > 0 ? null : (i && !1 !== t && (this.pos += i[0].length), i) } var r = function(e) { return n ? e.toLowerCase() : e }; if (r(this.string.substr(this.pos, e.length)) == r(e)) return !1 !== t && (this.pos += e.length), !0 }, Xe.prototype.current = function() { return this.string.slice(this.start, this.pos) }, Xe.prototype.hideFirstChars = function(e, t) { this.lineStart += e; try { return t() } finally { this.lineStart -= e } }, Xe.prototype.lookAhead = function(e) { var t = this.lineOracle; return t && t.lookAhead(e) }, Xe.prototype.baseToken = function() { var e = this.lineOracle; return e && e.baseToken(this.pos) }; var pt = function(e, t) { this.state = e, this.lookAhead = t },
                    mt = function(e, t, n, i) { this.state = t, this.doc = e, this.line = n, this.maxLookAhead = i || 0, this.baseTokens = null, this.baseTokenPos = 1 };

                function gt(e, t, n, i) { var r = [e.state.modeGen],
                        o = {};
                    St(e, t.text, e.doc.mode, n, (function(e, t) { return r.push(e, t) }), o, i); for (var a = n.state, l = function(i) { n.baseTokens = r; var l = e.state.overlays[i],
                                s = 1,
                                u = 0;
                            n.state = !0, St(e, t.text, l.mode, n, (function(e, t) { for (var n = s; u < e;) { var i = r[s];
                                    i > e && r.splice(s, 1, e, r[s + 1], i), s += 2, u = Math.min(e, i) } if (t)
                                    if (l.opaque) r.splice(n, s - n, e, "overlay " + t), s = n + 2;
                                    else
                                        for (; n < s; n += 2) { var o = r[n + 1];
                                            r[n + 1] = (o ? o + " " : "") + "overlay " + t } }), o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1 }, s = 0; s < e.state.overlays.length; ++s) l(s); return { styles: r, classes: o.bgClass || o.textClass ? o : null } }

                function vt(e, t, n) { if (!t.styles || t.styles[0] != e.state.modeGen) { var i = xt(e, et(t)),
                            r = t.text.length > e.options.maxHighlightLength && Ge(e.doc.mode, i.state),
                            o = gt(e, t, i);
                        r && (i.state = r), t.stateAfter = i.save(!r), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier)) } return t.styles }

                function xt(e, t, n) { var i = e.doc,
                        r = e.display; if (!i.mode.startState) return new mt(i, !0, t); var o = Ft(e, t, n),
                        a = o > i.first && Ze(i, o - 1).stateAfter,
                        l = a ? mt.fromSaved(i, a, o) : new mt(i, Ke(i.mode), o); return i.iter(o, t, (function(n) { yt(e, n.text, l); var i = l.line;
                        n.stateAfter = i == t - 1 || i % 5 == 0 || i >= r.viewFrom && i < r.viewTo ? l.save() : null, l.nextLine() })), n && (i.modeFrontier = l.line), l }

                function yt(e, t, n, i) { var r = e.doc.mode,
                        o = new Xe(t, e.options.tabSize, n); for (o.start = o.pos = i || 0, "" == t && bt(r, n.state); !o.eol();) Dt(r, o, n.state), o.start = o.pos }

                function bt(e, t) { if (e.blankLine) return e.blankLine(t); if (e.innerMode) { var n = Ve(e, t); return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0 } }

                function Dt(e, t, n, i) { for (var r = 0; r < 10; r++) { i && (i[0] = Ve(e, n).mode); var o = e.token(t, n); if (t.pos > t.start) return o } throw new Error("Mode " + e.name + " failed to advance stream.") }
                mt.prototype.lookAhead = function(e) { var t = this.doc.getLine(this.line + e); return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t }, mt.prototype.baseToken = function(e) { if (!this.baseTokens) return null; for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2; var t = this.baseTokens[this.baseTokenPos + 1]; return { type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e } }, mt.prototype.nextLine = function() { this.line++, this.maxLookAhead > 0 && this.maxLookAhead-- }, mt.fromSaved = function(e, t, n) { return t instanceof pt ? new mt(e, Ge(e.mode, t.state), n, t.lookAhead) : new mt(e, Ge(e.mode, t), n) }, mt.prototype.save = function(e) { var t = !1 !== e ? Ge(this.doc.mode, this.state) : this.state; return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t }; var Ct = function(e, t, n) { this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n };

                function wt(e, t, n, i) { var r, o, a = e.doc,
                        l = a.mode,
                        s = Ze(a, (t = dt(a, t)).line),
                        u = xt(e, t.line, n),
                        c = new Xe(s.text, e.options.tabSize, u); for (i && (o = []);
                        (i || c.pos < t.ch) && !c.eol();) c.start = c.pos, r = Dt(l, c, u.state), i && o.push(new Ct(c, r, Ge(a.mode, u.state))); return i ? o : new Ct(c, r, u.state) }

                function kt(e, t) { if (e)
                        for (;;) { var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/); if (!n) break;
                            e = e.slice(0, n.index) + e.slice(n.index + n[0].length); var i = n[1] ? "bgClass" : "textClass";
                            null == t[i] ? t[i] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[i]) || (t[i] += " " + n[2]) }
                    return e }

                function St(e, t, n, i, r, o, a) { var l = n.flattenSpans;
                    null == l && (l = e.options.flattenSpans); var s, u = 0,
                        c = null,
                        d = new Xe(t, e.options.tabSize, i),
                        h = e.options.addModeClass && [null]; for ("" == t && kt(bt(n, i.state), o); !d.eol();) { if (d.pos > e.options.maxHighlightLength ? (l = !1, a && yt(e, t, i, d.pos), d.pos = t.length, s = null) : s = kt(Dt(n, d, i.state, h), o), h) { var f = h[0].name;
                            f && (s = "m-" + (s ? f + " " + s : f)) } if (!l || c != s) { for (; u < d.start;) r(u = Math.min(d.start, u + 5e3), c);
                            c = s }
                        d.start = d.pos } for (; u < d.pos;) { var p = Math.min(d.pos, u + 5e3);
                        r(p, c), u = p } }

                function Ft(e, t, n) { for (var i, r, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) { if (l <= o.first) return o.first; var s = Ze(o, l - 1),
                            u = s.stateAfter; if (u && (!n || l + (u instanceof pt ? u.lookAhead : 0) <= o.modeFrontier)) return l; var c = R(s.text, null, e.options.tabSize);
                        (null == r || i > c) && (r = l - 1, i = c) } return r }

                function At(e, t) { if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) { for (var n = e.first, i = t - 1; i > n; i--) { var r = Ze(e, i).stateAfter; if (r && (!(r instanceof pt) || i + r.lookAhead < t)) { n = i + 1; break } }
                        e.highlightFrontier = Math.min(e.highlightFrontier, n) } } var Et = !1,
                    Tt = !1;

                function Lt() { Et = !0 }

                function Mt() { Tt = !0 }

                function Bt(e, t, n) { this.marker = e, this.from = t, this.to = n }

                function Nt(e, t) { if (e)
                        for (var n = 0; n < e.length; ++n) { var i = e[n]; if (i.marker == t) return i } }

                function Ot(e, t) { for (var n, i = 0; i < e.length; ++i) e[i] != t && (n || (n = [])).push(e[i]); return n }

                function It(e, t, n) { var i = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet));
                    i && i.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], i && i.add(e.markedSpans)), t.marker.attachLine(e) }

                function zt(e, t, n) { var i; if (e)
                        for (var r = 0; r < e.length; ++r) { var o = e[r],
                                a = o.marker; if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) { var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                                (i || (i = [])).push(new Bt(a, o.from, l ? null : o.to)) } }
                    return i }

                function Ht(e, t, n) { var i; if (e)
                        for (var r = 0; r < e.length; ++r) { var o = e[r],
                                a = o.marker; if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) { var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                                (i || (i = [])).push(new Bt(a, l ? null : o.from - t, null == o.to ? null : o.to - t)) } }
                    return i }

                function Rt(e, t) { if (t.full) return null; var n = nt(e, t.from.line) && Ze(e, t.from.line).markedSpans,
                        i = nt(e, t.to.line) && Ze(e, t.to.line).markedSpans; if (!n && !i) return null; var r = t.from.ch,
                        o = t.to.ch,
                        a = 0 == ot(t.from, t.to),
                        l = zt(n, r, a),
                        s = Ht(i, o, a),
                        u = 1 == t.text.length,
                        c = X(t.text).length + (u ? r : 0); if (l)
                        for (var d = 0; d < l.length; ++d) { var h = l[d]; if (null == h.to) { var f = Nt(s, h.marker);
                                f ? u && (h.to = null == f.to ? null : f.to + c) : h.to = r } }
                    if (s)
                        for (var p = 0; p < s.length; ++p) { var m = s[p];
                            null != m.to && (m.to += c), null == m.from ? Nt(l, m.marker) || (m.from = c, u && (l || (l = [])).push(m)) : (m.from += c, u && (l || (l = [])).push(m)) }
                    l && (l = Pt(l)), s && s != l && (s = Pt(s)); var g = [l]; if (!u) { var v, x = t.text.length - 2; if (x > 0 && l)
                            for (var y = 0; y < l.length; ++y) null == l[y].to && (v || (v = [])).push(new Bt(l[y].marker, null, null)); for (var b = 0; b < x; ++b) g.push(v);
                        g.push(s) } return g }

                function Pt(e) { for (var t = 0; t < e.length; ++t) { var n = e[t];
                        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1) } return e.length ? e : null }

                function _t(e, t, n) { var i = null; if (e.iter(t.line, n.line + 1, (function(e) { if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) { var n = e.markedSpans[t].marker;!n.readOnly || i && -1 != _(i, n) || (i || (i = [])).push(n) } })), !i) return null; for (var r = [{ from: t, to: n }], o = 0; o < i.length; ++o)
                        for (var a = i[o], l = a.find(0), s = 0; s < r.length; ++s) { var u = r[s]; if (!(ot(u.to, l.from) < 0 || ot(u.from, l.to) > 0)) { var c = [s, 1],
                                    d = ot(u.from, l.from),
                                    h = ot(u.to, l.to);
                                (d < 0 || !a.inclusiveLeft && !d) && c.push({ from: u.from, to: l.from }), (h > 0 || !a.inclusiveRight && !h) && c.push({ from: l.to, to: u.to }), r.splice.apply(r, c), s += c.length - 3 } }
                    return r }

                function Wt(e) { var t = e.markedSpans; if (t) { for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                        e.markedSpans = null } }

                function jt(e, t) { if (t) { for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                        e.markedSpans = t } }

                function qt(e) { return e.inclusiveLeft ? -1 : 0 }

                function Ut(e) { return e.inclusiveRight ? 1 : 0 }

                function $t(e, t) { var n = e.lines.length - t.lines.length; if (0 != n) return n; var i = e.find(),
                        r = t.find(),
                        o = ot(i.from, r.from) || qt(e) - qt(t); if (o) return -o; var a = ot(i.to, r.to) || Ut(e) - Ut(t); return a || t.id - e.id }

                function Gt(e, t) { var n, i = Tt && e.markedSpans; if (i)
                        for (var r = void 0, o = 0; o < i.length; ++o)(r = i[o]).marker.collapsed && null == (t ? r.from : r.to) && (!n || $t(n, r.marker) < 0) && (n = r.marker); return n }

                function Vt(e) { return Gt(e, !0) }

                function Kt(e) { return Gt(e, !1) }

                function Xt(e, t) { var n, i = Tt && e.markedSpans; if (i)
                        for (var r = 0; r < i.length; ++r) { var o = i[r];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || $t(n, o.marker) < 0) && (n = o.marker) }
                    return n }

                function Zt(e, t, n, i, r) { var o = Ze(e, t),
                        a = Tt && o.markedSpans; if (a)
                        for (var l = 0; l < a.length; ++l) { var s = a[l]; if (s.marker.collapsed) { var u = s.marker.find(0),
                                    c = ot(u.from, n) || qt(s.marker) - qt(r),
                                    d = ot(u.to, i) || Ut(s.marker) - Ut(r); if (!(c >= 0 && d <= 0 || c <= 0 && d >= 0) && (c <= 0 && (s.marker.inclusiveRight && r.inclusiveLeft ? ot(u.to, n) >= 0 : ot(u.to, n) > 0) || c >= 0 && (s.marker.inclusiveRight && r.inclusiveLeft ? ot(u.from, i) <= 0 : ot(u.from, i) < 0))) return !0 } } }

                function Yt(e) { for (var t; t = Vt(e);) e = t.find(-1, !0).line; return e }

                function Jt(e) { for (var t; t = Kt(e);) e = t.find(1, !0).line; return e }

                function Qt(e) { for (var t, n; t = Kt(e);) e = t.find(1, !0).line, (n || (n = [])).push(e); return n }

                function en(e, t) { var n = Ze(e, t),
                        i = Yt(n); return n == i ? t : et(i) }

                function tn(e, t) { if (t > e.lastLine()) return t; var n, i = Ze(e, t); if (!nn(e, i)) return t; for (; n = Kt(i);) i = n.find(1, !0).line; return et(i) + 1 }

                function nn(e, t) { var n = Tt && t.markedSpans; if (n)
                        for (var i = void 0, r = 0; r < n.length; ++r)
                            if ((i = n[r]).marker.collapsed) { if (null == i.from) return !0; if (!i.marker.widgetNode && 0 == i.from && i.marker.inclusiveLeft && rn(e, t, i)) return !0 } }

                function rn(e, t, n) { if (null == n.to) { var i = n.marker.find(1, !0); return rn(e, i.line, Nt(i.line.markedSpans, n.marker)) } if (n.marker.inclusiveRight && n.to == t.text.length) return !0; for (var r = void 0, o = 0; o < t.markedSpans.length; ++o)
                        if ((r = t.markedSpans[o]).marker.collapsed && !r.marker.widgetNode && r.from == n.to && (null == r.to || r.to != n.from) && (r.marker.inclusiveLeft || n.marker.inclusiveRight) && rn(e, t, r)) return !0 }

                function on(e) { for (var t = 0, n = (e = Yt(e)).parent, i = 0; i < n.lines.length; ++i) { var r = n.lines[i]; if (r == e) break;
                        t += r.height } for (var o = n.parent; o; o = (n = o).parent)
                        for (var a = 0; a < o.children.length; ++a) { var l = o.children[a]; if (l == n) break;
                            t += l.height }
                    return t }

                function an(e) { if (0 == e.height) return 0; for (var t, n = e.text.length, i = e; t = Vt(i);) { var r = t.find(0, !0);
                        i = r.from.line, n += r.from.ch - r.to.ch } for (i = e; t = Kt(i);) { var o = t.find(0, !0);
                        n -= i.text.length - o.from.ch, n += (i = o.to.line).text.length - o.to.ch } return n }

                function ln(e) { var t = e.display,
                        n = e.doc;
                    t.maxLine = Ze(n, n.first), t.maxLineLength = an(t.maxLine), t.maxLineChanged = !0, n.iter((function(e) { var n = an(e);
                        n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e) })) } var sn = function(e, t, n) { this.text = e, jt(this, t), this.height = n ? n(this) : 1 };

                function un(e, t, n, i) { e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Wt(e), jt(e, n); var r = i ? i(e) : 1;
                    r != e.height && Qe(e, r) }

                function cn(e) { e.parent = null, Wt(e) }
                sn.prototype.lineNo = function() { return et(this) }, De(sn); var dn = {},
                    hn = {};

                function fn(e, t) { if (!e || /^\s*$/.test(e)) return null; var n = t.addModeClass ? hn : dn; return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&")) }

                function pn(e, t) { var n = L("span", null, null, s ? "padding-right: .1px" : null),
                        i = { pre: L("pre", [n], "CodeMirror-line"), content: n, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: e.getOption("lineWrapping") };
                    t.measure = {}; for (var r = 0; r <= (t.rest ? t.rest.length : 0); r++) { var o = r ? t.rest[r - 1] : t.line,
                            a = void 0;
                        i.pos = 0, i.addToken = gn, Be(e.display.measure) && (a = he(o, e.doc.direction)) && (i.addToken = xn(i.addToken, a)), i.map = [], bn(o, i, vt(e, o, t != e.display.externalMeasured && et(o))), o.styleClasses && (o.styleClasses.bgClass && (i.bgClass = O(o.styleClasses.bgClass, i.bgClass || "")), o.styleClasses.textClass && (i.textClass = O(o.styleClasses.textClass, i.textClass || ""))), 0 == i.map.length && i.map.push(0, 0, i.content.appendChild(Me(e.display.measure))), 0 == r ? (t.measure.map = i.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(i.map), (t.measure.caches || (t.measure.caches = [])).push({})) } if (s) { var l = i.content.lastChild;
                        (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (i.content.className = "cm-tab-wrap-hack") } return ve(e, "renderLine", e, t.line, i.pre), i.pre.className && (i.textClass = O(i.pre.className, i.textClass || "")), i }

                function mn(e) { var t = T("span", "\u2022", "cm-invalidchar"); return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t }

                function gn(e, t, n, i, r, o, s) { if (t) { var u, c = e.splitSpaces ? vn(t, e.trailingSpace) : t,
                            d = e.cm.state.specialChars,
                            h = !1; if (d.test(t)) { u = document.createDocumentFragment(); for (var f = 0;;) { d.lastIndex = f; var p = d.exec(t),
                                    m = p ? p.index - f : t.length - f; if (m) { var g = document.createTextNode(c.slice(f, f + m));
                                    a && l < 9 ? u.appendChild(T("span", [g])) : u.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m } if (!p) break;
                                f += m + 1; var v = void 0; if ("\t" == p[0]) { var x = e.cm.options.tabSize,
                                        y = x - e.col % x;
                                    (v = u.appendChild(T("span", K(y), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += y } else "\r" == p[0] || "\n" == p[0] ? ((v = u.appendChild(T("span", "\r" == p[0] ? "\u240d" : "\u2424", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && l < 9 ? u.appendChild(T("span", [v])) : u.appendChild(v), e.col += 1);
                                e.map.push(e.pos, e.pos + 1, v), e.pos++ } } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), a && l < 9 && (h = !0), e.pos += t.length; if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || i || r || h || o || s) { var b = n || "";
                            i && (b += i), r && (b += r); var D = T("span", [u], b, o); if (s)
                                for (var C in s) s.hasOwnProperty(C) && "style" != C && "class" != C && D.setAttribute(C, s[C]); return e.content.appendChild(D) }
                        e.content.appendChild(u) } }

                function vn(e, t) { if (e.length > 1 && !/  /.test(e)) return e; for (var n = t, i = "", r = 0; r < e.length; r++) { var o = e.charAt(r); " " != o || !n || r != e.length - 1 && 32 != e.charCodeAt(r + 1) || (o = "\xa0"), i += o, n = " " == o } return i }

                function xn(e, t) { return function(n, i, r, o, a, l, s) { r = r ? r + " cm-force-border" : "cm-force-border"; for (var u = n.pos, c = u + i.length;;) { for (var d = void 0, h = 0; h < t.length && !((d = t[h]).to > u && d.from <= u); h++); if (d.to >= c) return e(n, i, r, o, a, l, s);
                            e(n, i.slice(0, d.to - u), r, o, null, l, s), o = null, i = i.slice(d.to - u), u = d.to } } }

                function yn(e, t, n, i) { var r = !i && n.widgetNode;
                    r && e.map.push(e.pos, e.pos + t, r), !i && e.cm.display.input.needsContentAttribute && (r || (r = e.content.appendChild(document.createElement("span"))), r.setAttribute("cm-marker", n.id)), r && (e.cm.display.input.setUneditable(r), e.content.appendChild(r)), e.pos += t, e.trailingSpace = !1 }

                function bn(e, t, n) { var i = e.markedSpans,
                        r = e.text,
                        o = 0; if (i)
                        for (var a, l, s, u, c, d, h, f = r.length, p = 0, m = 1, g = "", v = 0;;) { if (v == p) { s = u = c = l = "", h = null, d = null, v = 1 / 0; for (var x = [], y = void 0, b = 0; b < i.length; ++b) { var D = i[b],
                                        C = D.marker; if ("bookmark" == C.type && D.from == p && C.widgetNode) x.push(C);
                                    else if (D.from <= p && (null == D.to || D.to > p || C.collapsed && D.to == p && D.from == p)) { if (null != D.to && D.to != p && v > D.to && (v = D.to, u = ""), C.className && (s += " " + C.className), C.css && (l = (l ? l + ";" : "") + C.css), C.startStyle && D.from == p && (c += " " + C.startStyle), C.endStyle && D.to == v && (y || (y = [])).push(C.endStyle, D.to), C.title && ((h || (h = {})).title = C.title), C.attributes)
                                            for (var w in C.attributes)(h || (h = {}))[w] = C.attributes[w];
                                        C.collapsed && (!d || $t(d.marker, C) < 0) && (d = D) } else D.from > p && v > D.from && (v = D.from) } if (y)
                                    for (var k = 0; k < y.length; k += 2) y[k + 1] == v && (u += " " + y[k]); if (!d || d.from == p)
                                    for (var S = 0; S < x.length; ++S) yn(t, 0, x[S]); if (d && (d.from || 0) == p) { if (yn(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                                    d.to == p && (d = !1) } } if (p >= f) break; for (var F = Math.min(f, v);;) { if (g) { var A = p + g.length; if (!d) { var E = A > F ? g.slice(0, F - p) : g;
                                        t.addToken(t, E, a ? a + s : s, c, p + E.length == v ? u : "", l, h) } if (A >= F) { g = g.slice(F - p), p = F; break }
                                    p = A, c = "" }
                                g = r.slice(o, o = n[m++]), a = fn(n[m++], t.cm.options) } } else
                            for (var T = 1; T < n.length; T += 2) t.addToken(t, r.slice(o, o = n[T]), fn(n[T + 1], t.cm.options)) }

                function Dn(e, t, n) { this.line = t, this.rest = Qt(t), this.size = this.rest ? et(X(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = nn(e, t) }

                function Cn(e, t, n) { for (var i, r = [], o = t; o < n; o = i) { var a = new Dn(e.doc, Ze(e.doc, o), o);
                        i = o + a.size, r.push(a) } return r } var wn = null;

                function kn(e) { wn ? wn.ops.push(e) : e.ownsGroup = wn = { ops: [e], delayedCallbacks: [] } }

                function Sn(e) { var t = e.delayedCallbacks,
                        n = 0;
                    do { for (; n < t.length; n++) t[n].call(null); for (var i = 0; i < e.ops.length; i++) { var r = e.ops[i]; if (r.cursorActivityHandlers)
                                for (; r.cursorActivityCalled < r.cursorActivityHandlers.length;) r.cursorActivityHandlers[r.cursorActivityCalled++].call(null, r.cm) } } while (n < t.length) }

                function Fn(e, t) { var n = e.ownsGroup; if (n) try { Sn(n) } finally { wn = null, t(n) } } var An = null;

                function En(e, t) { var n = me(e, t); if (n.length) { var i, r = Array.prototype.slice.call(arguments, 2);
                        wn ? i = wn.delayedCallbacks : An ? i = An : (i = An = [], setTimeout(Tn, 0)); for (var o = function(e) { i.push((function() { return n[e].apply(null, r) })) }, a = 0; a < n.length; ++a) o(a) } }

                function Tn() { var e = An;
                    An = null; for (var t = 0; t < e.length; ++t) e[t]() }

                function Ln(e, t, n, i) { for (var r = 0; r < t.changes.length; r++) { var o = t.changes[r]; "text" == o ? On(e, t) : "gutter" == o ? zn(e, t, n, i) : "class" == o ? In(e, t) : "widget" == o && Hn(e, t, i) }
                    t.changes = null }

                function Mn(e) { return e.node == e.text && (e.node = T("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && l < 8 && (e.node.style.zIndex = 2)), e.node }

                function Bn(e, t) { var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass; if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
                    else if (n) { var i = Mn(t);
                        t.background = i.insertBefore(T("div", null, n), i.firstChild), e.display.input.setUneditable(t.background) } }

                function Nn(e, t) { var n = e.display.externalMeasured; return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : pn(e, t) }

                function On(e, t) { var n = t.text.className,
                        i = Nn(e, t);
                    t.text == t.node && (t.node = i.pre), t.text.parentNode.replaceChild(i.pre, t.text), t.text = i.pre, i.bgClass != t.bgClass || i.textClass != t.textClass ? (t.bgClass = i.bgClass, t.textClass = i.textClass, In(e, t)) : n && (t.text.className = n) }

                function In(e, t) { Bn(e, t), t.line.wrapClass ? Mn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = ""); var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                    t.text.className = n || "" }

                function zn(e, t, n, i) { if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) { var r = Mn(t);
                        t.gutterBackground = T("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), r.insertBefore(t.gutterBackground, t.text) } var o = t.line.gutterMarkers; if (e.options.lineNumbers || o) { var a = Mn(t),
                            l = t.gutter = T("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px"); if (l.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(l), a.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(T("div", it(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
                            for (var s = 0; s < e.display.gutterSpecs.length; ++s) { var u = e.display.gutterSpecs[s].className,
                                    c = o.hasOwnProperty(u) && o[u];
                                c && l.appendChild(T("div", [c], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[u] + "px; width: " + i.gutterWidth[u] + "px")) } } }

                function Hn(e, t, n) { t.alignable && (t.alignable = null); for (var i = k("CodeMirror-linewidget"), r = t.node.firstChild, o = void 0; r; r = o) o = r.nextSibling, i.test(r.className) && t.node.removeChild(r);
                    Pn(e, t, n) }

                function Rn(e, t, n, i) { var r = Nn(e, t); return t.text = t.node = r.pre, r.bgClass && (t.bgClass = r.bgClass), r.textClass && (t.textClass = r.textClass), In(e, t), zn(e, t, n, i), Pn(e, t, i), t.node }

                function Pn(e, t, n) { if (_n(e, t.line, t, n, !0), t.rest)
                        for (var i = 0; i < t.rest.length; i++) _n(e, t.rest[i], t, n, !1) }

                function _n(e, t, n, i, r) { if (t.widgets)
                        for (var o = Mn(n), a = 0, l = t.widgets; a < l.length; ++a) { var s = l[a],
                                u = T("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
                            s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Wn(s, u, n, i), e.display.input.setUneditable(u), r && s.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), En(s, "redraw") } }

                function Wn(e, t, n, i) { if (e.noHScroll) {
                        (n.alignable || (n.alignable = [])).push(t); var r = i.wrapperWidth;
                        t.style.left = i.fixedPos + "px", e.coverGutter || (r -= i.gutterTotalWidth, t.style.paddingLeft = i.gutterTotalWidth + "px"), t.style.width = r + "px" }
                    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -i.gutterTotalWidth + "px")) }

                function jn(e) { if (null != e.height) return e.height; var t = e.doc.cm; if (!t) return 0; if (!M(document.body, e.node)) { var n = "position: relative;";
                        e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), E(t.display.measure, T("div", [e.node], null, n)) } return e.height = e.node.parentNode.offsetHeight }

                function qn(e, t) { for (var n = Fe(t); n != e.wrapper; n = n.parentNode)
                        if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0 }

                function Un(e) { return e.lineSpace.offsetTop }

                function $n(e) { return e.mover.offsetHeight - e.lineSpace.offsetHeight }

                function Gn(e) { if (e.cachedPaddingH) return e.cachedPaddingH; var t = E(e.measure, T("pre", "x", "CodeMirror-line-like")),
                        n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        i = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) }; return isNaN(i.left) || isNaN(i.right) || (e.cachedPaddingH = i), i }

                function Vn(e) { return W - e.display.nativeBarWidth }

                function Kn(e) { return e.display.scroller.clientWidth - Vn(e) - e.display.barWidth }

                function Xn(e) { return e.display.scroller.clientHeight - Vn(e) - e.display.barHeight }

                function Zn(e, t, n) { var i = e.options.lineWrapping,
                        r = i && Kn(e); if (!t.measure.heights || i && t.measure.width != r) { var o = t.measure.heights = []; if (i) { t.measure.width = r; for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) { var s = a[l],
                                    u = a[l + 1];
                                Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top) } }
                        o.push(n.bottom - n.top) } }

                function Yn(e, t, n) { if (e.line == t) return { map: e.measure.map, cache: e.measure.cache }; for (var i = 0; i < e.rest.length; i++)
                        if (e.rest[i] == t) return { map: e.measure.maps[i], cache: e.measure.caches[i] };
                    for (var r = 0; r < e.rest.length; r++)
                        if (et(e.rest[r]) > n) return { map: e.measure.maps[r], cache: e.measure.caches[r], before: !0 } }

                function Jn(e, t) { var n = et(t = Yt(t)),
                        i = e.display.externalMeasured = new Dn(e.doc, t, n);
                    i.lineN = n; var r = i.built = pn(e, i); return i.text = r.pre, E(e.display.lineMeasure, r.pre), i }

                function Qn(e, t, n, i) { return ni(e, ti(e, t), n, i) }

                function ei(e, t) { if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Ii(e, t)]; var n = e.display.externalMeasured; return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0 }

                function ti(e, t) { var n = et(t),
                        i = ei(e, n);
                    i && !i.text ? i = null : i && i.changes && (Ln(e, i, n, Li(e)), e.curOp.forceUpdate = !0), i || (i = Jn(e, t)); var r = Yn(i, t, n); return { line: t, view: i, rect: null, map: r.map, cache: r.cache, before: r.before, hasHeights: !1 } }

                function ni(e, t, n, i, r) { t.before && (n = -1); var o, a = n + (i || ""); return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Zn(e, t.view, t.rect), t.hasHeights = !0), (o = li(e, t, n, i)).bogus || (t.cache[a] = o)), { left: o.left, right: o.right, top: r ? o.rtop : o.top, bottom: r ? o.rbottom : o.bottom } } var ii, ri = { left: 0, right: 0, top: 0, bottom: 0 };

                function oi(e, t, n) { for (var i, r, o, a, l, s, u = 0; u < e.length; u += 3)
                        if (l = e[u], s = e[u + 1], t < l ? (r = 0, o = 1, a = "left") : t < s ? o = 1 + (r = t - l) : (u == e.length - 3 || t == s && e[u + 3] > t) && (r = (o = s - l) - 1, t >= s && (a = "right")), null != r) { if (i = e[u + 2], l == s && n == (i.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == r)
                                for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) i = e[2 + (u -= 3)], a = "left"; if ("right" == n && r == s - l)
                                for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) i = e[(u += 3) + 2], a = "right"; break }
                    return { node: i, start: r, end: o, collapse: a, coverStart: l, coverEnd: s } }

                function ai(e, t) { var n = ri; if ("left" == t)
                        for (var i = 0; i < e.length && (n = e[i]).left == n.right; i++);
                    else
                        for (var r = e.length - 1; r >= 0 && (n = e[r]).left == n.right; r--); return n }

                function li(e, t, n, i) { var r, o = oi(t.map, n, i),
                        s = o.node,
                        u = o.start,
                        c = o.end,
                        d = o.collapse; if (3 == s.nodeType) { for (var h = 0; h < 4; h++) { for (; u && oe(t.line.text.charAt(o.coverStart + u));) --u; for (; o.coverStart + c < o.coverEnd && oe(t.line.text.charAt(o.coverStart + c));) ++c; if ((r = a && l < 9 && 0 == u && c == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : ai(S(s, u, c).getClientRects(), i)).left || r.right || 0 == u) break;
                            c = u, u -= 1, d = "right" }
                        a && l < 11 && (r = si(e.display.measure, r)) } else { var f;
                        u > 0 && (d = i = "right"), r = e.options.lineWrapping && (f = s.getClientRects()).length > 1 ? f["right" == i ? f.length - 1 : 0] : s.getBoundingClientRect() } if (a && l < 9 && !u && (!r || !r.left && !r.right)) { var p = s.parentNode.getClientRects()[0];
                        r = p ? { left: p.left, right: p.left + Ti(e.display), top: p.top, bottom: p.bottom } : ri } for (var m = r.top - t.rect.top, g = r.bottom - t.rect.top, v = (m + g) / 2, x = t.view.measure.heights, y = 0; y < x.length - 1 && !(v < x[y]); y++); var b = y ? x[y - 1] : 0,
                        D = x[y],
                        C = { left: ("right" == d ? r.right : r.left) - t.rect.left, right: ("left" == d ? r.left : r.right) - t.rect.left, top: b, bottom: D }; return r.left || r.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = m, C.rbottom = g), C }

                function si(e, t) { if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !He(e)) return t; var n = screen.logicalXDPI / screen.deviceXDPI,
                        i = screen.logicalYDPI / screen.deviceYDPI; return { left: t.left * n, right: t.right * n, top: t.top * i, bottom: t.bottom * i } }

                function ui(e) { if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {} }

                function ci(e) { e.display.externalMeasure = null, A(e.display.lineMeasure); for (var t = 0; t < e.display.view.length; t++) ui(e.display.view[t]) }

                function di(e) { ci(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null }

                function hi() { return c && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft }

                function fi() { return c && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop }

                function pi(e) { var t = 0; if (e.widgets)
                        for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += jn(e.widgets[n])); return t }

                function mi(e, t, n, i, r) { if (!r) { var o = pi(t);
                        n.top += o, n.bottom += o } if ("line" == i) return n;
                    i || (i = "local"); var a = on(t); if ("local" == i ? a += Un(e.display) : a -= e.display.viewOffset, "page" == i || "window" == i) { var l = e.display.lineSpace.getBoundingClientRect();
                        a += l.top + ("window" == i ? 0 : fi()); var s = l.left + ("window" == i ? 0 : hi());
                        n.left += s, n.right += s } return n.top += a, n.bottom += a, n }

                function gi(e, t, n) { if ("div" == n) return t; var i = t.left,
                        r = t.top; if ("page" == n) i -= hi(), r -= fi();
                    else if ("local" == n || !n) { var o = e.display.sizer.getBoundingClientRect();
                        i += o.left, r += o.top } var a = e.display.lineSpace.getBoundingClientRect(); return { left: i - a.left, top: r - a.top } }

                function vi(e, t, n, i, r) { return i || (i = Ze(e.doc, t.line)), mi(e, i, Qn(e, i, t.ch, r), n) }

                function xi(e, t, n, i, r, o) {
                    function a(t, a) { var l = ni(e, r, t, a ? "right" : "left", o); return a ? l.left = l.right : l.right = l.left, mi(e, i, l, n) }
                    i = i || Ze(e.doc, t.line), r || (r = ti(e, i)); var l = he(i, e.doc.direction),
                        s = t.ch,
                        u = t.sticky; if (s >= i.text.length ? (s = i.text.length, u = "before") : s <= 0 && (s = 0, u = "after"), !l) return a("before" == u ? s - 1 : s, "before" == u);

                    function c(e, t, n) { return a(n ? e - 1 : e, 1 == l[t].level != n) } var d = ce(l, s, u),
                        h = ue,
                        f = c(s, d, "before" == u); return null != h && (f.other = c(s, h, "before" != u)), f }

                function yi(e, t) { var n = 0;
                    t = dt(e.doc, t), e.options.lineWrapping || (n = Ti(e.display) * t.ch); var i = Ze(e.doc, t.line),
                        r = on(i) + Un(e.display); return { left: n, right: n, top: r, bottom: r + i.height } }

                function bi(e, t, n, i, r) { var o = rt(e, t, n); return o.xRel = r, i && (o.outside = i), o }

                function Di(e, t, n) { var i = e.doc; if ((n += e.display.viewOffset) < 0) return bi(i.first, 0, null, -1, -1); var r = tt(i, n),
                        o = i.first + i.size - 1; if (r > o) return bi(i.first + i.size - 1, Ze(i, o).text.length, null, 1, 1);
                    t < 0 && (t = 0); for (var a = Ze(i, r);;) { var l = Si(e, a, r, t, n),
                            s = Xt(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0)); if (!s) return l; var u = s.find(1); if (u.line == r) return u;
                        a = Ze(i, r = u.line) } }

                function Ci(e, t, n, i) { i -= pi(t); var r = t.text.length,
                        o = le((function(t) { return ni(e, n, t - 1).bottom <= i }), r, 0); return { begin: o, end: r = le((function(t) { return ni(e, n, t).top > i }), o, r) } }

                function wi(e, t, n, i) { return n || (n = ti(e, t)), Ci(e, t, n, mi(e, t, ni(e, n, i), "line").top) }

                function ki(e, t, n, i) { return !(e.bottom <= n) && (e.top > n || (i ? e.left : e.right) > t) }

                function Si(e, t, n, i, r) { r -= on(t); var o = ti(e, t),
                        a = pi(t),
                        l = 0,
                        s = t.text.length,
                        u = !0,
                        c = he(t, e.doc.direction); if (c) { var d = (e.options.lineWrapping ? Ai : Fi)(e, t, n, o, c, i, r);
                        l = (u = 1 != d.level) ? d.from : d.to - 1, s = u ? d.to : d.from - 1 } var h, f, p = null,
                        m = null,
                        g = le((function(t) { var n = ni(e, o, t); return n.top += a, n.bottom += a, !!ki(n, i, r, !1) && (n.top <= r && n.left <= i && (p = t, m = n), !0) }), l, s),
                        v = !1; if (m) { var x = i - m.left < m.right - i,
                            y = x == u;
                        g = p + (y ? 0 : 1), f = y ? "after" : "before", h = x ? m.left : m.right } else { u || g != s && g != l || g++, f = 0 == g ? "after" : g == t.text.length ? "before" : ni(e, o, g - (u ? 1 : 0)).bottom + a <= r == u ? "after" : "before"; var b = xi(e, rt(n, g, f), "line", t, o);
                        h = b.left, v = r < b.top ? -1 : r >= b.bottom ? 1 : 0 } return bi(n, g = ae(t.text, g, 1), f, v, i - h) }

                function Fi(e, t, n, i, r, o, a) { var l = le((function(l) { var s = r[l],
                                u = 1 != s.level; return ki(xi(e, rt(n, u ? s.to : s.from, u ? "before" : "after"), "line", t, i), o, a, !0) }), 0, r.length - 1),
                        s = r[l]; if (l > 0) { var u = 1 != s.level,
                            c = xi(e, rt(n, u ? s.from : s.to, u ? "after" : "before"), "line", t, i);
                        ki(c, o, a, !0) && c.top > a && (s = r[l - 1]) } return s }

                function Ai(e, t, n, i, r, o, a) { var l = Ci(e, t, i, a),
                        s = l.begin,
                        u = l.end; /\s/.test(t.text.charAt(u - 1)) && u--; for (var c = null, d = null, h = 0; h < r.length; h++) { var f = r[h]; if (!(f.from >= u || f.to <= s)) { var p = ni(e, i, 1 != f.level ? Math.min(u, f.to) - 1 : Math.max(s, f.from)).right,
                                m = p < o ? o - p + 1e9 : p - o;
                            (!c || d > m) && (c = f, d = m) } } return c || (c = r[r.length - 1]), c.from < s && (c = { from: s, to: c.to, level: c.level }), c.to > u && (c = { from: c.from, to: u, level: c.level }), c }

                function Ei(e) { if (null != e.cachedTextHeight) return e.cachedTextHeight; if (null == ii) { ii = T("pre", null, "CodeMirror-line-like"); for (var t = 0; t < 49; ++t) ii.appendChild(document.createTextNode("x")), ii.appendChild(T("br"));
                        ii.appendChild(document.createTextNode("x")) }
                    E(e.measure, ii); var n = ii.offsetHeight / 50; return n > 3 && (e.cachedTextHeight = n), A(e.measure), n || 1 }

                function Ti(e) { if (null != e.cachedCharWidth) return e.cachedCharWidth; var t = T("span", "xxxxxxxxxx"),
                        n = T("pre", [t], "CodeMirror-line-like");
                    E(e.measure, n); var i = t.getBoundingClientRect(),
                        r = (i.right - i.left) / 10; return r > 2 && (e.cachedCharWidth = r), r || 10 }

                function Li(e) { for (var t = e.display, n = {}, i = {}, r = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) { var l = e.display.gutterSpecs[a].className;
                        n[l] = o.offsetLeft + o.clientLeft + r, i[l] = o.clientWidth } return { fixedPos: Mi(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: n, gutterWidth: i, wrapperWidth: t.wrapper.clientWidth } }

                function Mi(e) { return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left }

                function Bi(e) { var t = Ei(e.display),
                        n = e.options.lineWrapping,
                        i = n && Math.max(5, e.display.scroller.clientWidth / Ti(e.display) - 3); return function(r) { if (nn(e.doc, r)) return 0; var o = 0; if (r.widgets)
                            for (var a = 0; a < r.widgets.length; a++) r.widgets[a].height && (o += r.widgets[a].height); return n ? o + (Math.ceil(r.text.length / i) || 1) * t : o + t } }

                function Ni(e) { var t = e.doc,
                        n = Bi(e);
                    t.iter((function(e) { var t = n(e);
                        t != e.height && Qe(e, t) })) }

                function Oi(e, t, n, i) { var r = e.display; if (!n && "true" == Fe(t).getAttribute("cm-not-content")) return null; var o, a, l = r.lineSpace.getBoundingClientRect(); try { o = t.clientX - l.left, a = t.clientY - l.top } catch (d) { return null } var s, u = Di(e, o, a); if (i && u.xRel > 0 && (s = Ze(e.doc, u.line).text).length == u.ch) { var c = R(s, s.length, e.options.tabSize) - s.length;
                        u = rt(u.line, Math.max(0, Math.round((o - Gn(e.display).left) / Ti(e.display)) - c)) } return u }

                function Ii(e, t) { if (t >= e.display.viewTo) return null; if ((t -= e.display.viewFrom) < 0) return null; for (var n = e.display.view, i = 0; i < n.length; i++)
                        if ((t -= n[i].size) < 0) return i }

                function zi(e, t, n, i) { null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), i || (i = 0); var r = e.display; if (i && n < r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers > t) && (r.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= r.viewTo) Tt && en(e.doc, t) < r.viewTo && Ri(e);
                    else if (n <= r.viewFrom) Tt && tn(e.doc, n + i) > r.viewFrom ? Ri(e) : (r.viewFrom += i, r.viewTo += i);
                    else if (t <= r.viewFrom && n >= r.viewTo) Ri(e);
                    else if (t <= r.viewFrom) { var o = Pi(e, n, n + i, 1);
                        o ? (r.view = r.view.slice(o.index), r.viewFrom = o.lineN, r.viewTo += i) : Ri(e) } else if (n >= r.viewTo) { var a = Pi(e, t, t, -1);
                        a ? (r.view = r.view.slice(0, a.index), r.viewTo = a.lineN) : Ri(e) } else { var l = Pi(e, t, t, -1),
                            s = Pi(e, n, n + i, 1);
                        l && s ? (r.view = r.view.slice(0, l.index).concat(Cn(e, l.lineN, s.lineN)).concat(r.view.slice(s.index)), r.viewTo += i) : Ri(e) } var u = r.externalMeasured;
                    u && (n < u.lineN ? u.lineN += i : t < u.lineN + u.size && (r.externalMeasured = null)) }

                function Hi(e, t, n) { e.curOp.viewChanged = !0; var i = e.display,
                        r = e.display.externalMeasured; if (r && t >= r.lineN && t < r.lineN + r.size && (i.externalMeasured = null), !(t < i.viewFrom || t >= i.viewTo)) { var o = i.view[Ii(e, t)]; if (null != o.node) { var a = o.changes || (o.changes = []); - 1 == _(a, n) && a.push(n) } } }

                function Ri(e) { e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0 }

                function Pi(e, t, n, i) { var r, o = Ii(e, t),
                        a = e.display.view; if (!Tt || n == e.doc.first + e.doc.size) return { index: o, lineN: n }; for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size; if (l != t) { if (i > 0) { if (o == a.length - 1) return null;
                            r = l + a[o].size - t, o++ } else r = l - t;
                        t += r, n += r } for (; en(e.doc, n) != n;) { if (o == (i < 0 ? 0 : a.length - 1)) return null;
                        n += i * a[o - (i < 0 ? 1 : 0)].size, o += i } return { index: o, lineN: n } }

                function _i(e, t, n) { var i = e.display;
                    0 == i.view.length || t >= i.viewTo || n <= i.viewFrom ? (i.view = Cn(e, t, n), i.viewFrom = t) : (i.viewFrom > t ? i.view = Cn(e, t, i.viewFrom).concat(i.view) : i.viewFrom < t && (i.view = i.view.slice(Ii(e, t))), i.viewFrom = t, i.viewTo < n ? i.view = i.view.concat(Cn(e, i.viewTo, n)) : i.viewTo > n && (i.view = i.view.slice(0, Ii(e, n)))), i.viewTo = n }

                function Wi(e) { for (var t = e.display.view, n = 0, i = 0; i < t.length; i++) { var r = t[i];
                        r.hidden || r.node && !r.changes || ++n } return n }

                function ji(e) { e.display.input.showSelection(e.display.input.prepareSelection()) }

                function qi(e, t) { void 0 === t && (t = !0); for (var n = e.doc, i = {}, r = i.cursors = document.createDocumentFragment(), o = i.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                        if (t || a != n.sel.primIndex) { var l = n.sel.ranges[a]; if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) { var s = l.empty();
                                (s || e.options.showCursorWhenSelecting) && Ui(e, l.head, r), s || Gi(e, l, o) } }
                    return i }

                function Ui(e, t, n) { var i = xi(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        r = n.appendChild(T("div", "\xa0", "CodeMirror-cursor")); if (r.style.left = i.left + "px", r.style.top = i.top + "px", r.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) { var o = n.appendChild(T("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        o.style.display = "", o.style.left = i.other.left + "px", o.style.top = i.other.top + "px", o.style.height = .85 * (i.other.bottom - i.other.top) + "px" } }

                function $i(e, t) { return e.top - t.top || e.left - t.left }

                function Gi(e, t, n) { var i = e.display,
                        r = e.doc,
                        o = document.createDocumentFragment(),
                        a = Gn(e.display),
                        l = a.left,
                        s = Math.max(i.sizerWidth, Kn(e) - i.sizer.offsetLeft) - a.right,
                        u = "ltr" == r.direction;

                    function c(e, t, n, i) { t < 0 && (t = 0), t = Math.round(t), i = Math.round(i), o.appendChild(T("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? s - e : n) + "px;\n                             height: " + (i - t) + "px")) }

                    function d(t, n, i) { var o, a, d = Ze(r, t),
                            h = d.text.length;

                        function f(n, i) { return vi(e, rt(t, n), "div", d, i) }

                        function p(t, n, i) { var r = wi(e, d, null, t),
                                o = "ltr" == n == ("after" == i) ? "left" : "right"; return f("after" == i ? r.begin : r.end - (/\s/.test(d.text.charAt(r.end - 1)) ? 2 : 1), o)[o] } var m = he(d, r.direction); return se(m, n || 0, null == i ? h : i, (function(e, t, r, d) { var g = "ltr" == r,
                                v = f(e, g ? "left" : "right"),
                                x = f(t - 1, g ? "right" : "left"),
                                y = null == n && 0 == e,
                                b = null == i && t == h,
                                D = 0 == d,
                                C = !m || d == m.length - 1; if (x.top - v.top <= 3) { var w = (u ? b : y) && C,
                                    k = (u ? y : b) && D ? l : (g ? v : x).left,
                                    S = w ? s : (g ? x : v).right;
                                c(k, v.top, S - k, v.bottom) } else { var F, A, E, T;
                                g ? (F = u && y && D ? l : v.left, A = u ? s : p(e, r, "before"), E = u ? l : p(t, r, "after"), T = u && b && C ? s : x.right) : (F = u ? p(e, r, "before") : l, A = !u && y && D ? s : v.right, E = !u && b && C ? l : x.left, T = u ? p(t, r, "after") : s), c(F, v.top, A - F, v.bottom), v.bottom < x.top && c(l, v.bottom, null, x.top), c(E, x.top, T - E, x.bottom) }(!o || $i(v, o) < 0) && (o = v), $i(x, o) < 0 && (o = x), (!a || $i(v, a) < 0) && (a = v), $i(x, a) < 0 && (a = x) })), { start: o, end: a } } var h = t.from(),
                        f = t.to(); if (h.line == f.line) d(h.line, h.ch, f.ch);
                    else { var p = Ze(r, h.line),
                            m = Ze(r, f.line),
                            g = Yt(p) == Yt(m),
                            v = d(h.line, h.ch, g ? p.text.length + 1 : null).end,
                            x = d(f.line, g ? 0 : null, f.ch).start;
                        g && (v.top < x.top - 2 ? (c(v.right, v.top, null, v.bottom), c(l, x.top, x.left, x.bottom)) : c(v.right, v.top, x.left - v.right, v.bottom)), v.bottom < x.top && c(l, v.bottom, null, x.top) }
                    n.appendChild(o) }

                function Vi(e) { if (e.state.focused) { var t = e.display;
                        clearInterval(t.blinker); var n = !0;
                        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval((function() { e.hasFocus() || Yi(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden" }), e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden") } }

                function Ki(e) { e.hasFocus() || (e.display.input.focus(), e.state.focused || Zi(e)) }

                function Xi(e) { e.state.delayingBlurEvent = !0, setTimeout((function() { e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Yi(e)) }), 100) }

                function Zi(e, t) { e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (ve(e, "focus", e, t), e.state.focused = !0, N(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout((function() { return e.display.input.reset(!0) }), 20)), e.display.input.receivedFocus()), Vi(e)) }

                function Yi(e, t) { e.state.delayingBlurEvent || (e.state.focused && (ve(e, "blur", e, t), e.state.focused = !1, F(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout((function() { e.state.focused || (e.display.shift = !1) }), 150)) }

                function Ji(e) { for (var t = e.display, n = t.lineDiv.offsetTop, i = 0; i < t.view.length; i++) { var r = t.view[i],
                            o = e.options.lineWrapping,
                            s = void 0,
                            u = 0; if (!r.hidden) { if (a && l < 8) { var c = r.node.offsetTop + r.node.offsetHeight;
                                s = c - n, n = c } else { var d = r.node.getBoundingClientRect();
                                s = d.bottom - d.top, !o && r.text.firstChild && (u = r.text.firstChild.getBoundingClientRect().right - d.left - 1) } var h = r.line.height - s; if ((h > .005 || h < -.005) && (Qe(r.line, s), Qi(r.line), r.rest))
                                for (var f = 0; f < r.rest.length; f++) Qi(r.rest[f]); if (u > e.display.sizerWidth) { var p = Math.ceil(u / Ti(e.display));
                                p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = r.line, e.display.maxLineChanged = !0) } } } }

                function Qi(e) { if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) { var n = e.widgets[t],
                                i = n.node.parentNode;
                            i && (n.height = i.offsetHeight) } }

                function er(e, t, n) { var i = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                    i = Math.floor(i - Un(e)); var r = n && null != n.bottom ? n.bottom : i + e.wrapper.clientHeight,
                        o = tt(t, i),
                        a = tt(t, r); if (n && n.ensure) { var l = n.ensure.from.line,
                            s = n.ensure.to.line;
                        l < o ? (o = l, a = tt(t, on(Ze(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = tt(t, on(Ze(t, s)) - e.wrapper.clientHeight), a = s) } return { from: o, to: Math.max(a, o + 1) } }

                function tr(e, t) { if (!xe(e, "scrollCursorIntoView")) { var n = e.display,
                            i = n.sizer.getBoundingClientRect(),
                            r = null; if (t.top + i.top < 0 ? r = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (r = !1), null != r && !p) { var o = T("div", "\u200b", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Un(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Vn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(r), e.display.lineSpace.removeChild(o) } } }

                function nr(e, t, n, i) { var r;
                    null == i && (i = 0), e.options.lineWrapping || t != n || (n = "before" == t.sticky ? rt(t.line, t.ch + 1, "before") : t, t = t.ch ? rt(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t); for (var o = 0; o < 5; o++) { var a = !1,
                            l = xi(e, t),
                            s = n && n != t ? xi(e, n) : l,
                            u = rr(e, r = { left: Math.min(l.left, s.left), top: Math.min(l.top, s.top) - i, right: Math.max(l.left, s.left), bottom: Math.max(l.bottom, s.bottom) + i }),
                            c = e.doc.scrollTop,
                            d = e.doc.scrollLeft; if (null != u.scrollTop && (dr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (fr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break } return r }

                function ir(e, t) { var n = rr(e, t);
                    null != n.scrollTop && dr(e, n.scrollTop), null != n.scrollLeft && fr(e, n.scrollLeft) }

                function rr(e, t) { var n = e.display,
                        i = Ei(e.display);
                    t.top < 0 && (t.top = 0); var r = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                        o = Xn(e),
                        a = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o); var l = e.doc.height + $n(n),
                        s = t.top < i,
                        u = t.bottom > l - i; if (t.top < r) a.scrollTop = s ? 0 : t.top;
                    else if (t.bottom > r + o) { var c = Math.min(t.top, (u ? l : t.bottom) - o);
                        c != r && (a.scrollTop = c) } var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
                        h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - d,
                        f = Kn(e) - n.gutters.offsetWidth,
                        p = t.right - t.left > f; return p && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)) : t.right > f + h - 3 && (a.scrollLeft = t.right + (p ? 0 : 10) - f), a }

                function or(e, t) { null != t && (ur(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t) }

                function ar(e) { ur(e); var t = e.getCursor();
                    e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin } }

                function lr(e, t, n) { null == t && null == n || ur(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n) }

                function sr(e, t) { ur(e), e.curOp.scrollToPos = t }

                function ur(e) { var t = e.curOp.scrollToPos;
                    t && (e.curOp.scrollToPos = null, cr(e, yi(e, t.from), yi(e, t.to), t.margin)) }

                function cr(e, t, n, i) { var r = rr(e, { left: Math.min(t.left, n.left), top: Math.min(t.top, n.top) - i, right: Math.max(t.right, n.right), bottom: Math.max(t.bottom, n.bottom) + i });
                    lr(e, r.scrollLeft, r.scrollTop) }

                function dr(e, t) { Math.abs(e.doc.scrollTop - t) < 2 || (n || jr(e, { top: t }), hr(e, t, !0), n && jr(e), Or(e, 100)) }

                function hr(e, t, n) { t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t)) }

                function fr(e, t, n, i) { t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !i || (e.doc.scrollLeft = t, Gr(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t)) }

                function pr(e) { var t = e.display,
                        n = t.gutters.offsetWidth,
                        i = Math.round(e.doc.height + $n(e.display)); return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? n : 0, docHeight: i, scrollHeight: i + Vn(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: n } } var mr = function(e, t, n) { this.cm = n; var i = this.vert = T("div", [T("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        r = this.horiz = T("div", [T("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    i.tabIndex = r.tabIndex = -1, e(i), e(r), pe(i, "scroll", (function() { i.clientHeight && t(i.scrollTop, "vertical") })), pe(r, "scroll", (function() { r.clientWidth && t(r.scrollLeft, "horizontal") })), this.checkedZeroWidth = !1, a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px") };
                mr.prototype.update = function(e) { var t = e.scrollWidth > e.clientWidth + 1,
                        n = e.scrollHeight > e.clientHeight + 1,
                        i = e.nativeBarWidth; if (n) { this.vert.style.display = "block", this.vert.style.bottom = t ? i + "px" : "0"; var r = e.viewHeight - (t ? i : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + r) + "px" } else this.vert.style.display = "", this.vert.firstChild.style.height = "0"; if (t) { this.horiz.style.display = "block", this.horiz.style.right = n ? i + "px" : "0", this.horiz.style.left = e.barLeft + "px"; var o = e.viewWidth - e.barLeft - (n ? i : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px" } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0"; return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == i && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? i : 0, bottom: t ? i : 0 } }, mr.prototype.setScrollLeft = function(e) { this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz") }, mr.prototype.setScrollTop = function(e) { this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert") }, mr.prototype.zeroWidthHack = function() { var e = x && !f ? "12px" : "18px";
                    this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new P, this.disableVert = new P }, mr.prototype.enableZeroWidthBar = function(e, t, n) {
                    function i() { var r = e.getBoundingClientRect();
                        ("vert" == n ? document.elementFromPoint(r.right - 1, (r.top + r.bottom) / 2) : document.elementFromPoint((r.right + r.left) / 2, r.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, i) }
                    e.style.pointerEvents = "auto", t.set(1e3, i) }, mr.prototype.clear = function() { var e = this.horiz.parentNode;
                    e.removeChild(this.horiz), e.removeChild(this.vert) }; var gr = function() {};

                function vr(e, t) { t || (t = pr(e)); var n = e.display.barWidth,
                        i = e.display.barHeight;
                    xr(e, t); for (var r = 0; r < 4 && n != e.display.barWidth || i != e.display.barHeight; r++) n != e.display.barWidth && e.options.lineWrapping && Ji(e), xr(e, pr(e)), n = e.display.barWidth, i = e.display.barHeight }

                function xr(e, t) { var n = e.display,
                        i = n.scrollbars.update(t);
                    n.sizer.style.paddingRight = (n.barWidth = i.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = i.bottom) + "px", n.heightForcer.style.borderBottom = i.bottom + "px solid transparent", i.right && i.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = i.bottom + "px", n.scrollbarFiller.style.width = i.right + "px") : n.scrollbarFiller.style.display = "", i.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = i.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "" }
                gr.prototype.update = function() { return { bottom: 0, right: 0 } }, gr.prototype.setScrollLeft = function() {}, gr.prototype.setScrollTop = function() {}, gr.prototype.clear = function() {}; var yr = { native: mr, null: gr };

                function br(e) { e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && F(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new yr[e.options.scrollbarStyle]((function(t) { e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), pe(t, "mousedown", (function() { e.state.focused && setTimeout((function() { return e.display.input.focus() }), 0) })), t.setAttribute("cm-not-content", "true") }), (function(t, n) { "horizontal" == n ? fr(e, t) : dr(e, t) }), e), e.display.scrollbars.addClass && N(e.display.wrapper, e.display.scrollbars.addClass) } var Dr = 0;

                function Cr(e) { e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: 0, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++Dr, markArrays: null }, kn(e.curOp) }

                function wr(e) { var t = e.curOp;
                    t && Fn(t, (function(e) { for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                        kr(e) })) }

                function kr(e) { for (var t = e.ops, n = 0; n < t.length; n++) Sr(t[n]); for (var i = 0; i < t.length; i++) Fr(t[i]); for (var r = 0; r < t.length; r++) Ar(t[r]); for (var o = 0; o < t.length; o++) Er(t[o]); for (var a = 0; a < t.length; a++) Tr(t[a]) }

                function Sr(e) { var t = e.cm,
                        n = t.display;
                    Hr(t), e.updateMaxLine && ln(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new zr(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate) }

                function Fr(e) { e.updatedDisplay = e.mustUpdate && _r(e.cm, e.update) }

                function Ar(e) { var t = e.cm,
                        n = t.display;
                    e.updatedDisplay && Ji(t), e.barMeasure = pr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Qn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Vn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Kn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection()) }

                function Er(e) { var t = e.cm;
                    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && fr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1); var n = e.focus && e.focus == B();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && vr(t, e.barMeasure), e.updatedDisplay && $r(t, e.barMeasure), e.selectionChanged && Vi(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Ki(e.cm) }

                function Tr(e) { var t = e.cm,
                        n = t.display,
                        i = t.doc;
                    e.updatedDisplay && Wr(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && hr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && fr(t, e.scrollLeft, !0, !0), e.scrollToPos && tr(t, nr(t, dt(i, e.scrollToPos.from), dt(i, e.scrollToPos.to), e.scrollToPos.margin)); var r = e.maybeHiddenMarkers,
                        o = e.maybeUnhiddenMarkers; if (r)
                        for (var a = 0; a < r.length; ++a) r[a].lines.length || ve(r[a], "hide"); if (o)
                        for (var l = 0; l < o.length; ++l) o[l].lines.length && ve(o[l], "unhide");
                    n.wrapper.offsetHeight && (i.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ve(t, "changes", t, e.changeObjs), e.update && e.update.finish() }

                function Lr(e, t) { if (e.curOp) return t();
                    Cr(e); try { return t() } finally { wr(e) } }

                function Mr(e, t) { return function() { if (e.curOp) return t.apply(e, arguments);
                        Cr(e); try { return t.apply(e, arguments) } finally { wr(e) } } }

                function Br(e) { return function() { if (this.curOp) return e.apply(this, arguments);
                        Cr(this); try { return e.apply(this, arguments) } finally { wr(this) } } }

                function Nr(e) { return function() { var t = this.cm; if (!t || t.curOp) return e.apply(this, arguments);
                        Cr(t); try { return e.apply(this, arguments) } finally { wr(t) } } }

                function Or(e, t) { e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, z(Ir, e)) }

                function Ir(e) { var t = e.doc; if (!(t.highlightFrontier >= e.display.viewTo)) { var n = +new Date + e.options.workTime,
                            i = xt(e, t.highlightFrontier),
                            r = [];
                        t.iter(i.line, Math.min(t.first + t.size, e.display.viewTo + 500), (function(o) { if (i.line >= e.display.viewFrom) { var a = o.styles,
                                    l = o.text.length > e.options.maxHighlightLength ? Ge(t.mode, i.state) : null,
                                    s = gt(e, o, i, !0);
                                l && (i.state = l), o.styles = s.styles; var u = o.styleClasses,
                                    c = s.classes;
                                c ? o.styleClasses = c : u && (o.styleClasses = null); for (var d = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), h = 0; !d && h < a.length; ++h) d = a[h] != o.styles[h];
                                d && r.push(i.line), o.stateAfter = i.save(), i.nextLine() } else o.text.length <= e.options.maxHighlightLength && yt(e, o.text, i), o.stateAfter = i.line % 5 == 0 ? i.save() : null, i.nextLine(); if (+new Date > n) return Or(e, e.options.workDelay), !0 })), t.highlightFrontier = i.line, t.modeFrontier = Math.max(t.modeFrontier, i.line), r.length && Lr(e, (function() { for (var t = 0; t < r.length; t++) Hi(e, r[t], "text") })) } } var zr = function(e, t, n) { var i = e.display;
                    this.viewport = t, this.visible = er(i, e.doc, t), this.editorIsHidden = !i.wrapper.offsetWidth, this.wrapperHeight = i.wrapper.clientHeight, this.wrapperWidth = i.wrapper.clientWidth, this.oldDisplayWidth = Kn(e), this.force = n, this.dims = Li(e), this.events = [] };

                function Hr(e) { var t = e.display;!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Vn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Vn(e) + "px", t.scrollbarsClipped = !0) }

                function Rr(e) { if (e.hasFocus()) return null; var t = B(); if (!t || !M(e.display.lineDiv, t)) return null; var n = { activeElt: t }; if (window.getSelection) { var i = window.getSelection();
                        i.anchorNode && i.extend && M(e.display.lineDiv, i.anchorNode) && (n.anchorNode = i.anchorNode, n.anchorOffset = i.anchorOffset, n.focusNode = i.focusNode, n.focusOffset = i.focusOffset) } return n }

                function Pr(e) { if (e && e.activeElt && e.activeElt != B() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && M(document.body, e.anchorNode) && M(document.body, e.focusNode))) { var t = window.getSelection(),
                            n = document.createRange();
                        n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset) } }

                function _r(e, t) { var n = e.display,
                        i = e.doc; if (t.editorIsHidden) return Ri(e), !1; if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == Wi(e)) return !1;
                    Vr(e) && (Ri(e), t.dims = Li(e)); var r = i.first + i.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, i.first),
                        a = Math.min(r, t.visible.to + e.options.viewportMargin);
                    n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(i.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(r, n.viewTo)), Tt && (o = en(e.doc, o), a = tn(e.doc, a)); var l = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
                    _i(e, o, a), n.viewOffset = on(Ze(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px"; var s = Wi(e); if (!l && 0 == s && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1; var u = Rr(e); return s > 4 && (n.lineDiv.style.display = "none"), qr(e, n.updateLineNumbers, t.dims), s > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, Pr(u), A(n.cursorDiv), A(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, l && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, Or(e, 400)), n.updateLineNumbers = null, !0 }

                function Wr(e, t) { for (var n = t.viewport, i = !0;; i = !1) { if (i && e.options.lineWrapping && t.oldDisplayWidth != Kn(e)) i && (t.visible = er(e.display, e.doc, n));
                        else if (n && null != n.top && (n = { top: Math.min(e.doc.height + $n(e.display) - Xn(e), n.top) }), t.visible = er(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break; if (!_r(e, t)) break;
                        Ji(e); var r = pr(e);
                        ji(e), vr(e, r), $r(e, r), t.force = !1 }
                    t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo) }

                function jr(e, t) { var n = new zr(e, t); if (_r(e, n)) { Ji(e), Wr(e, n); var i = pr(e);
                        ji(e), vr(e, i), $r(e, i), n.finish() } }

                function qr(e, t, n) { var i = e.display,
                        r = e.options.lineNumbers,
                        o = i.lineDiv,
                        a = o.firstChild;

                    function l(t) { var n = t.nextSibling; return s && x && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n } for (var u = i.view, c = i.viewFrom, d = 0; d < u.length; d++) { var h = u[d]; if (h.hidden);
                        else if (h.node && h.node.parentNode == o) { for (; a != h.node;) a = l(a); var f = r && null != t && t <= c && h.lineNumber;
                            h.changes && (_(h.changes, "gutter") > -1 && (f = !1), Ln(e, h, c, n)), f && (A(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(it(e.options, c)))), a = h.node.nextSibling } else { var p = Rn(e, h, c, n);
                            o.insertBefore(p, a) }
                        c += h.size } for (; a;) a = l(a) }

                function Ur(e) { var t = e.gutters.offsetWidth;
                    e.sizer.style.marginLeft = t + "px", En(e, "gutterChanged", e) }

                function $r(e, t) { e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Vn(e) + "px" }

                function Gr(e) { var t = e.display,
                        n = t.view; if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) { for (var i = Mi(t) - t.scroller.scrollLeft + e.doc.scrollLeft, r = t.gutters.offsetWidth, o = i + "px", a = 0; a < n.length; a++)
                            if (!n[a].hidden) { e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o)); var l = n[a].alignable; if (l)
                                    for (var s = 0; s < l.length; s++) l[s].style.left = o }
                        e.options.fixedGutter && (t.gutters.style.left = i + r + "px") } }

                function Vr(e) { if (!e.options.lineNumbers) return !1; var t = e.doc,
                        n = it(e.options, t.first + t.size - 1),
                        i = e.display; if (n.length != i.lineNumChars) { var r = i.measure.appendChild(T("div", [T("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            o = r.firstChild.offsetWidth,
                            a = r.offsetWidth - o; return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(o, i.lineGutter.offsetWidth - a) + 1, i.lineNumWidth = i.lineNumInnerWidth + a, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", Ur(e.display), !0 } return !1 }

                function Kr(e, t) { for (var n = [], i = !1, r = 0; r < e.length; r++) { var o = e[r],
                            a = null; if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) { if (!t) continue;
                            i = !0 }
                        n.push({ className: o, style: a }) } return t && !i && n.push({ className: "CodeMirror-linenumbers", style: null }), n }

                function Xr(e) { var t = e.gutters,
                        n = e.gutterSpecs;
                    A(t), e.lineGutter = null; for (var i = 0; i < n.length; ++i) { var r = n[i],
                            o = r.className,
                            a = r.style,
                            l = t.appendChild(T("div", null, "CodeMirror-gutter " + o));
                        a && (l.style.cssText = a), "CodeMirror-linenumbers" == o && (e.lineGutter = l, l.style.width = (e.lineNumWidth || 1) + "px") }
                    t.style.display = n.length ? "" : "none", Ur(e) }

                function Zr(e) { Xr(e.display), zi(e), Gr(e) }

                function Yr(e, t, i, r) { var o = this;
                    this.input = i, o.scrollbarFiller = T("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = T("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = L("div", null, "CodeMirror-code"), o.selectionDiv = T("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = T("div", null, "CodeMirror-cursors"), o.measure = T("div", null, "CodeMirror-measure"), o.lineMeasure = T("div", null, "CodeMirror-measure"), o.lineSpace = L("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none"); var u = L("div", [o.lineSpace], "CodeMirror-lines");
                    o.mover = T("div", [u], null, "position: relative"), o.sizer = T("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = T("div", null, null, "position: absolute; height: " + W + "px; width: 1px;"), o.gutters = T("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = T("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = T("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), a && l < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), s || n && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = Kr(r.gutters, r.lineNumbers), Xr(o), i.init(o) }
                zr.prototype.signal = function(e, t) { be(e, t) && this.events.push(arguments) }, zr.prototype.finish = function() { for (var e = 0; e < this.events.length; e++) ve.apply(null, this.events[e]) }; var Jr = 0,
                    Qr = null;

                function eo(e) { var t = e.wheelDeltaX,
                        n = e.wheelDeltaY; return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), { x: t, y: n } }

                function to(e) { var t = eo(e); return t.x *= Qr, t.y *= Qr, t }

                function no(e, t) { var i = eo(t),
                        r = i.x,
                        o = i.y,
                        a = e.display,
                        l = a.scroller,
                        u = l.scrollWidth > l.clientWidth,
                        c = l.scrollHeight > l.clientHeight; if (r && u || o && c) { if (o && x && s) e: for (var h = t.target, f = a.view; h != l; h = h.parentNode)
                            for (var p = 0; p < f.length; p++)
                                if (f[p].node == h) { e.display.currentWheelTarget = h; break e }
                        if (r && !n && !d && null != Qr) return o && c && dr(e, Math.max(0, l.scrollTop + o * Qr)), fr(e, Math.max(0, l.scrollLeft + r * Qr)), (!o || o && c) && Ce(t), void(a.wheelStartX = null); if (o && null != Qr) { var m = o * Qr,
                                g = e.doc.scrollTop,
                                v = g + a.wrapper.clientHeight;
                            m < 0 ? g = Math.max(0, g + m - 50) : v = Math.min(e.doc.height, v + m + 50), jr(e, { top: g, bottom: v }) }
                        Jr < 20 && (null == a.wheelStartX ? (a.wheelStartX = l.scrollLeft, a.wheelStartY = l.scrollTop, a.wheelDX = r, a.wheelDY = o, setTimeout((function() { if (null != a.wheelStartX) { var e = l.scrollLeft - a.wheelStartX,
                                    t = l.scrollTop - a.wheelStartY,
                                    n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                                a.wheelStartX = a.wheelStartY = null, n && (Qr = (Qr * Jr + n) / (Jr + 1), ++Jr) } }), 200)) : (a.wheelDX += r, a.wheelDY += o)) } }
                a ? Qr = -.53 : n ? Qr = 15 : c ? Qr = -.7 : h && (Qr = -1 / 3); var io = function(e, t) { this.ranges = e, this.primIndex = t };
                io.prototype.primary = function() { return this.ranges[this.primIndex] }, io.prototype.equals = function(e) { if (e == this) return !0; if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1; for (var t = 0; t < this.ranges.length; t++) { var n = this.ranges[t],
                            i = e.ranges[t]; if (!at(n.anchor, i.anchor) || !at(n.head, i.head)) return !1 } return !0 }, io.prototype.deepCopy = function() { for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ro(lt(this.ranges[t].anchor), lt(this.ranges[t].head)); return new io(e, this.primIndex) }, io.prototype.somethingSelected = function() { for (var e = 0; e < this.ranges.length; e++)
                        if (!this.ranges[e].empty()) return !0;
                    return !1 }, io.prototype.contains = function(e, t) { t || (t = e); for (var n = 0; n < this.ranges.length; n++) { var i = this.ranges[n]; if (ot(t, i.from()) >= 0 && ot(e, i.to()) <= 0) return n } return -1 }; var ro = function(e, t) { this.anchor = e, this.head = t };

                function oo(e, t, n) { var i = e && e.options.selectionsMayTouch,
                        r = t[n];
                    t.sort((function(e, t) { return ot(e.from(), t.from()) })), n = _(t, r); for (var o = 1; o < t.length; o++) { var a = t[o],
                            l = t[o - 1],
                            s = ot(l.to(), a.from()); if (i && !a.empty() ? s > 0 : s >= 0) { var u = ut(l.from(), a.from()),
                                c = st(l.to(), a.to()),
                                d = l.empty() ? a.from() == a.head : l.from() == l.head;
                            o <= n && --n, t.splice(--o, 2, new ro(d ? c : u, d ? u : c)) } } return new io(t, n) }

                function ao(e, t) { return new io([new ro(e, t || e)], 0) }

                function lo(e) { return e.text ? rt(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to }

                function so(e, t) { if (ot(e, t.from) < 0) return e; if (ot(e, t.to) <= 0) return lo(t); var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        i = e.ch; return e.line == t.to.line && (i += lo(t).ch - t.to.ch), rt(n, i) }

                function uo(e, t) { for (var n = [], i = 0; i < e.sel.ranges.length; i++) { var r = e.sel.ranges[i];
                        n.push(new ro(so(r.anchor, t), so(r.head, t))) } return oo(e.cm, n, e.sel.primIndex) }

                function co(e, t, n) { return e.line == t.line ? rt(n.line, e.ch - t.ch + n.ch) : rt(n.line + (e.line - t.line), e.ch) }

                function ho(e, t, n) { for (var i = [], r = rt(e.first, 0), o = r, a = 0; a < t.length; a++) { var l = t[a],
                            s = co(l.from, r, o),
                            u = co(lo(l), r, o); if (r = l.to, o = u, "around" == n) { var c = e.sel.ranges[a],
                                d = ot(c.head, c.anchor) < 0;
                            i[a] = new ro(d ? u : s, d ? s : u) } else i[a] = new ro(s, s) } return new io(i, e.sel.primIndex) }

                function fo(e) { e.doc.mode = qe(e.options, e.doc.modeOption), po(e) }

                function po(e) { e.doc.iter((function(e) { e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null) })), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Or(e, 100), e.state.modeGen++, e.curOp && zi(e) }

                function mo(e, t) { return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore) }

                function go(e, t, n, i) {
                    function r(e) { return n ? n[e] : null }

                    function o(e, n, r) { un(e, n, r, i), En(e, "change", e, t) }

                    function a(e, t) { for (var n = [], o = e; o < t; ++o) n.push(new sn(u[o], r(o), i)); return n } var l = t.from,
                        s = t.to,
                        u = t.text,
                        c = Ze(e, l.line),
                        d = Ze(e, s.line),
                        h = X(u),
                        f = r(u.length - 1),
                        p = s.line - l.line; if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
                    else if (mo(e, t)) { var m = a(0, u.length - 1);
                        o(d, d.text, f), p && e.remove(l.line, p), m.length && e.insert(l.line, m) } else if (c == d)
                        if (1 == u.length) o(c, c.text.slice(0, l.ch) + h + c.text.slice(s.ch), f);
                        else { var g = a(1, u.length - 1);
                            g.push(new sn(h + c.text.slice(s.ch), f, i)), o(c, c.text.slice(0, l.ch) + u[0], r(0)), e.insert(l.line + 1, g) }
                    else if (1 == u.length) o(c, c.text.slice(0, l.ch) + u[0] + d.text.slice(s.ch), r(0)), e.remove(l.line + 1, p);
                    else { o(c, c.text.slice(0, l.ch) + u[0], r(0)), o(d, h + d.text.slice(s.ch), f); var v = a(1, u.length - 1);
                        p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v) }
                    En(e, "change", e, t) }

                function vo(e, t, n) {
                    function i(e, r, o) { if (e.linked)
                            for (var a = 0; a < e.linked.length; ++a) { var l = e.linked[a]; if (l.doc != r) { var s = o && l.sharedHist;
                                    n && !s || (t(l.doc, s), i(l.doc, e, s)) } } }
                    i(e, null, !0) }

                function xo(e, t) { if (t.cm) throw new Error("This document is already in use.");
                    e.doc = t, t.cm = e, Ni(e), fo(e), yo(e), e.options.direction = t.direction, e.options.lineWrapping || ln(e), e.options.mode = t.modeOption, zi(e) }

                function yo(e) {
                    ("rtl" == e.doc.direction ? N : F)(e.display.lineDiv, "CodeMirror-rtl") }

                function bo(e) { Lr(e, (function() { yo(e), zi(e) })) }

                function Do(e) { this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1 }

                function Co(e, t) { var n = { from: lt(t.from), to: lo(t), text: Ye(e, t.from, t.to) }; return To(e, n, t.from.line, t.to.line + 1), vo(e, (function(e) { return To(e, n, t.from.line, t.to.line + 1) }), !0), n }

                function wo(e) { for (; e.length && X(e).ranges;) e.pop() }

                function ko(e, t) { return t ? (wo(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0 }

                function So(e, t, n, i) { var r = e.history;
                    r.undone.length = 0; var o, a, l = +new Date; if ((r.lastOp == i || r.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && r.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = ko(r, r.lastOp == i))) a = X(o.changes), 0 == ot(t.from, t.to) && 0 == ot(t.from, a.to) ? a.to = lo(t) : o.changes.push(Co(e, t));
                    else { var s = X(r.done); for (s && s.ranges || Eo(e.sel, r.done), o = { changes: [Co(e, t)], generation: r.generation }, r.done.push(o); r.done.length > r.undoDepth;) r.done.shift(), r.done[0].ranges || r.done.shift() }
                    r.done.push(n), r.generation = ++r.maxGeneration, r.lastModTime = r.lastSelTime = l, r.lastOp = r.lastSelOp = i, r.lastOrigin = r.lastSelOrigin = t.origin, a || ve(e, "historyAdded") }

                function Fo(e, t, n, i) { var r = t.charAt(0); return "*" == r || "+" == r && n.ranges.length == i.ranges.length && n.somethingSelected() == i.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500) }

                function Ao(e, t, n, i) { var r = e.history,
                        o = i && i.origin;
                    n == r.lastSelOp || o && r.lastSelOrigin == o && (r.lastModTime == r.lastSelTime && r.lastOrigin == o || Fo(e, o, X(r.done), t)) ? r.done[r.done.length - 1] = t : Eo(t, r.done), r.lastSelTime = +new Date, r.lastSelOrigin = o, r.lastSelOp = n, i && !1 !== i.clearRedo && wo(r.undone) }

                function Eo(e, t) { var n = X(t);
                    n && n.ranges && n.equals(e) || t.push(e) }

                function To(e, t, n, i) { var r = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, n), Math.min(e.first + e.size, i), (function(n) { n.markedSpans && ((r || (r = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o })) }

                function Lo(e) { if (!e) return null; for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]); return t ? t.length ? t : null : e }

                function Mo(e, t) { var n = t["spans_" + e.id]; if (!n) return null; for (var i = [], r = 0; r < t.text.length; ++r) i.push(Lo(n[r])); return i }

                function Bo(e, t) { var n = Mo(e, t),
                        i = Rt(e, t); if (!n) return i; if (!i) return n; for (var r = 0; r < n.length; ++r) { var o = n[r],
                            a = i[r]; if (o && a) e: for (var l = 0; l < a.length; ++l) { for (var s = a[l], u = 0; u < o.length; ++u)
                                if (o[u].marker == s.marker) continue e;
                            o.push(s) } else a && (n[r] = a) } return n }

                function No(e, t, n) { for (var i = [], r = 0; r < e.length; ++r) { var o = e[r]; if (o.ranges) i.push(n ? io.prototype.deepCopy.call(o) : o);
                        else { var a = o.changes,
                                l = [];
                            i.push({ changes: l }); for (var s = 0; s < a.length; ++s) { var u = a[s],
                                    c = void 0; if (l.push({ from: u.from, to: u.to, text: u.text }), t)
                                    for (var d in u)(c = d.match(/^spans_(\d+)$/)) && _(t, Number(c[1])) > -1 && (X(l)[d] = u[d], delete u[d]) } } } return i }

                function Oo(e, t, n, i) { if (i) { var r = e.anchor; if (n) { var o = ot(t, r) < 0;
                            o != ot(n, r) < 0 ? (r = t, t = n) : o != ot(t, n) < 0 && (t = n) } return new ro(r, t) } return new ro(n || t, t) }

                function Io(e, t, n, i, r) { null == r && (r = e.cm && (e.cm.display.shift || e.extend)), Wo(e, new io([Oo(e.sel.primary(), t, n, r)], 0), i) }

                function zo(e, t, n) { for (var i = [], r = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) i[o] = Oo(e.sel.ranges[o], t[o], null, r);
                    Wo(e, oo(e.cm, i, e.sel.primIndex), n) }

                function Ho(e, t, n, i) { var r = e.sel.ranges.slice(0);
                    r[t] = n, Wo(e, oo(e.cm, r, e.sel.primIndex), i) }

                function Ro(e, t, n, i) { Wo(e, ao(t, n), i) }

                function Po(e, t, n) { var i = { ranges: t.ranges, update: function(t) { this.ranges = []; for (var n = 0; n < t.length; n++) this.ranges[n] = new ro(dt(e, t[n].anchor), dt(e, t[n].head)) }, origin: n && n.origin }; return ve(e, "beforeSelectionChange", e, i), e.cm && ve(e.cm, "beforeSelectionChange", e.cm, i), i.ranges != t.ranges ? oo(e.cm, i.ranges, i.ranges.length - 1) : t }

                function _o(e, t, n) { var i = e.history.done,
                        r = X(i);
                    r && r.ranges ? (i[i.length - 1] = t, jo(e, t, n)) : Wo(e, t, n) }

                function Wo(e, t, n) { jo(e, t, n), Ao(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n) }

                function jo(e, t, n) {
                    (be(e, "beforeSelectionChange") || e.cm && be(e.cm, "beforeSelectionChange")) && (t = Po(e, t, n)); var i = n && n.bias || (ot(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    qo(e, $o(e, t, i, !0)), n && !1 === n.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || ar(e.cm) }

                function qo(e, t) { t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ye(e.cm)), En(e, "cursorActivity", e)) }

                function Uo(e) { qo(e, $o(e, e.sel, null, !1)) }

                function $o(e, t, n, i) { for (var r, o = 0; o < t.ranges.length; o++) { var a = t.ranges[o],
                            l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            s = Vo(e, a.anchor, l && l.anchor, n, i),
                            u = Vo(e, a.head, l && l.head, n, i);
                        (r || s != a.anchor || u != a.head) && (r || (r = t.ranges.slice(0, o)), r[o] = new ro(s, u)) } return r ? oo(e.cm, r, t.primIndex) : t }

                function Go(e, t, n, i, r) { var o = Ze(e, t.line); if (o.markedSpans)
                        for (var a = 0; a < o.markedSpans.length; ++a) { var l = o.markedSpans[a],
                                s = l.marker,
                                u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                                c = "selectRight" in s ? !s.selectRight : s.inclusiveRight; if ((null == l.from || (u ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (c ? l.to >= t.ch : l.to > t.ch))) { if (r && (ve(s, "beforeCursorEnter"), s.explicitlyCleared)) { if (o.markedSpans) {--a; continue } break } if (!s.atomic) continue; if (n) { var d = s.find(i < 0 ? 1 : -1),
                                        h = void 0; if ((i < 0 ? c : u) && (d = Ko(e, d, -i, d && d.line == t.line ? o : null)), d && d.line == t.line && (h = ot(d, n)) && (i < 0 ? h < 0 : h > 0)) return Go(e, d, t, i, r) } var f = s.find(i < 0 ? -1 : 1); return (i < 0 ? u : c) && (f = Ko(e, f, i, f.line == t.line ? o : null)), f ? Go(e, f, t, i, r) : null } }
                    return t }

                function Vo(e, t, n, i, r) { var o = i || 1,
                        a = Go(e, t, n, o, r) || !r && Go(e, t, n, o, !0) || Go(e, t, n, -o, r) || !r && Go(e, t, n, -o, !0); return a || (e.cantEdit = !0, rt(e.first, 0)) }

                function Ko(e, t, n, i) { return n < 0 && 0 == t.ch ? t.line > e.first ? dt(e, rt(t.line - 1)) : null : n > 0 && t.ch == (i || Ze(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? rt(t.line + 1, 0) : null : new rt(t.line, t.ch + n) }

                function Xo(e) { e.setSelection(rt(e.firstLine(), 0), rt(e.lastLine()), q) }

                function Zo(e, t, n) { var i = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function() { return i.canceled = !0 } }; return n && (i.update = function(t, n, r, o) { t && (i.from = dt(e, t)), n && (i.to = dt(e, n)), r && (i.text = r), void 0 !== o && (i.origin = o) }), ve(e, "beforeChange", e, i), e.cm && ve(e.cm, "beforeChange", e.cm, i), i.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: i.from, to: i.to, text: i.text, origin: i.origin } }

                function Yo(e, t, n) { if (e.cm) { if (!e.cm.curOp) return Mr(e.cm, Yo)(e, t, n); if (e.cm.state.suppressEdits) return } if (!(be(e, "beforeChange") || e.cm && be(e.cm, "beforeChange")) || (t = Zo(e, t, !0))) { var i = Et && !n && _t(e, t.from, t.to); if (i)
                            for (var r = i.length - 1; r >= 0; --r) Jo(e, { from: i[r].from, to: i[r].to, text: r ? [""] : t.text, origin: t.origin });
                        else Jo(e, t) } }

                function Jo(e, t) { if (1 != t.text.length || "" != t.text[0] || 0 != ot(t.from, t.to)) { var n = uo(e, t);
                        So(e, t, n, e.cm ? e.cm.curOp.id : NaN), ta(e, t, n, Rt(e, t)); var i = [];
                        vo(e, (function(e, n) { n || -1 != _(i, e.history) || (aa(e.history, t), i.push(e.history)), ta(e, t, null, Rt(e, t)) })) } }

                function Qo(e, t, n) { var i = e.cm && e.cm.state.suppressEdits; if (!i || n) { for (var r, o = e.history, a = e.sel, l = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, u = 0; u < l.length && (r = l[u], n ? !r.ranges || r.equals(e.sel) : r.ranges); u++); if (u != l.length) { for (o.lastOrigin = o.lastSelOrigin = null;;) { if (!(r = l.pop()).ranges) { if (i) return void l.push(r); break } if (Eo(r, s), n && !r.equals(e.sel)) return void Wo(e, r, { clearRedo: !1 });
                                a = r } var c = [];
                            Eo(a, s), s.push({ changes: c, generation: o.generation }), o.generation = r.generation || ++o.maxGeneration; for (var d = be(e, "beforeChange") || e.cm && be(e.cm, "beforeChange"), h = function(n) { var i = r.changes[n]; if (i.origin = t, d && !Zo(e, i, !1)) return l.length = 0, {};
                                    c.push(Co(e, i)); var o = n ? uo(e, i) : X(l);
                                    ta(e, i, o, Bo(e, i)), !n && e.cm && e.cm.scrollIntoView({ from: i.from, to: lo(i) }); var a = [];
                                    vo(e, (function(e, t) { t || -1 != _(a, e.history) || (aa(e.history, i), a.push(e.history)), ta(e, i, null, Bo(e, i)) })) }, f = r.changes.length - 1; f >= 0; --f) { var p = h(f); if (p) return p.v } } } }

                function ea(e, t) { if (0 != t && (e.first += t, e.sel = new io(Z(e.sel.ranges, (function(e) { return new ro(rt(e.anchor.line + t, e.anchor.ch), rt(e.head.line + t, e.head.ch)) })), e.sel.primIndex), e.cm)) { zi(e.cm, e.first, e.first - t, t); for (var n = e.cm.display, i = n.viewFrom; i < n.viewTo; i++) Hi(e.cm, i, "gutter") } }

                function ta(e, t, n, i) { if (e.cm && !e.cm.curOp) return Mr(e.cm, ta)(e, t, n, i); if (t.to.line < e.first) ea(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) { if (t.from.line < e.first) { var r = t.text.length - 1 - (e.first - t.from.line);
                            ea(e, r), t = { from: rt(e.first, 0), to: rt(t.to.line + r, t.to.ch), text: [X(t.text)], origin: t.origin } } var o = e.lastLine();
                        t.to.line > o && (t = { from: t.from, to: rt(o, Ze(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = Ye(e, t.from, t.to), n || (n = uo(e, t)), e.cm ? na(e.cm, t, i) : go(e, t, i), jo(e, n, q), e.cantEdit && Vo(e, rt(e.firstLine(), 0)) && (e.cantEdit = !1) } }

                function na(e, t, n) { var i = e.doc,
                        r = e.display,
                        o = t.from,
                        a = t.to,
                        l = !1,
                        s = o.line;
                    e.options.lineWrapping || (s = et(Yt(Ze(i, o.line))), i.iter(s, a.line + 1, (function(e) { if (e == r.maxLine) return l = !0, !0 }))), i.sel.contains(t.from, t.to) > -1 && ye(e), go(i, t, n, Bi(e)), e.options.lineWrapping || (i.iter(s, o.line + t.text.length, (function(e) { var t = an(e);
                        t > r.maxLineLength && (r.maxLine = e, r.maxLineLength = t, r.maxLineChanged = !0, l = !1) })), l && (e.curOp.updateMaxLine = !0)), At(i, o.line), Or(e, 400); var u = t.text.length - (a.line - o.line) - 1;
                    t.full ? zi(e) : o.line != a.line || 1 != t.text.length || mo(e.doc, t) ? zi(e, o.line, a.line + 1, u) : Hi(e, o.line, "text"); var c = be(e, "changes"),
                        d = be(e, "change"); if (d || c) { var h = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
                        d && En(e, "change", e, h), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h) }
                    e.display.selForContextMenu = null }

                function ia(e, t, n, i, r) { var o;
                    i || (i = n), ot(i, n) < 0 && (n = (o = [i, n])[0], i = o[1]), "string" == typeof t && (t = e.splitLines(t)), Yo(e, { from: n, to: i, text: t, origin: r }) }

                function ra(e, t, n, i) { n < e.line ? e.line += i : t < e.line && (e.line = t, e.ch = 0) }

                function oa(e, t, n, i) { for (var r = 0; r < e.length; ++r) { var o = e[r],
                            a = !0; if (o.ranges) { o.copied || ((o = e[r] = o.deepCopy()).copied = !0); for (var l = 0; l < o.ranges.length; l++) ra(o.ranges[l].anchor, t, n, i), ra(o.ranges[l].head, t, n, i) } else { for (var s = 0; s < o.changes.length; ++s) { var u = o.changes[s]; if (n < u.from.line) u.from = rt(u.from.line + i, u.from.ch), u.to = rt(u.to.line + i, u.to.ch);
                                else if (t <= u.to.line) { a = !1; break } }
                            a || (e.splice(0, r + 1), r = 0) } } }

                function aa(e, t) { var n = t.from.line,
                        i = t.to.line,
                        r = t.text.length - (i - n) - 1;
                    oa(e.done, n, i, r), oa(e.undone, n, i, r) }

                function la(e, t, n, i) { var r = t,
                        o = t; return "number" == typeof t ? o = Ze(e, ct(e, t)) : r = et(t), null == r ? null : (i(o, r) && e.cm && Hi(e.cm, r, n), o) }

                function sa(e) { this.lines = e, this.parent = null; for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
                    this.height = t }

                function ua(e) { this.children = e; for (var t = 0, n = 0, i = 0; i < e.length; ++i) { var r = e[i];
                        t += r.chunkSize(), n += r.height, r.parent = this }
                    this.size = t, this.height = n, this.parent = null }
                ro.prototype.from = function() { return ut(this.anchor, this.head) }, ro.prototype.to = function() { return st(this.anchor, this.head) }, ro.prototype.empty = function() { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch }, sa.prototype = { chunkSize: function() { return this.lines.length }, removeInner: function(e, t) { for (var n = e, i = e + t; n < i; ++n) { var r = this.lines[n];
                            this.height -= r.height, cn(r), En(r, "delete") }
                        this.lines.splice(e, t) }, collapse: function(e) { e.push.apply(e, this.lines) }, insertInner: function(e, t, n) { this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)); for (var i = 0; i < t.length; ++i) t[i].parent = this }, iterN: function(e, t, n) { for (var i = e + t; e < i; ++e)
                            if (n(this.lines[e])) return !0 } }, ua.prototype = { chunkSize: function() { return this.size }, removeInner: function(e, t) { this.size -= t; for (var n = 0; n < this.children.length; ++n) { var i = this.children[n],
                                r = i.chunkSize(); if (e < r) { var o = Math.min(t, r - e),
                                    a = i.height; if (i.removeInner(e, o), this.height -= a - i.height, r == o && (this.children.splice(n--, 1), i.parent = null), 0 == (t -= o)) break;
                                e = 0 } else e -= r } if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof sa))) { var l = [];
                            this.collapse(l), this.children = [new sa(l)], this.children[0].parent = this } }, collapse: function(e) { for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e) }, insertInner: function(e, t, n) { this.size += t.length, this.height += n; for (var i = 0; i < this.children.length; ++i) { var r = this.children[i],
                                o = r.chunkSize(); if (e <= o) { if (r.insertInner(e, t, n), r.lines && r.lines.length > 50) { for (var a = r.lines.length % 25 + 25, l = a; l < r.lines.length;) { var s = new sa(r.lines.slice(l, l += 25));
                                        r.height -= s.height, this.children.splice(++i, 0, s), s.parent = this }
                                    r.lines = r.lines.slice(0, a), this.maybeSpill() } break }
                            e -= o } }, maybeSpill: function() { if (!(this.children.length <= 10)) { var e = this;
                            do { var t = new ua(e.children.splice(e.children.length - 5, 5)); if (e.parent) { e.size -= t.size, e.height -= t.height; var n = _(e.parent.children, e);
                                    e.parent.children.splice(n + 1, 0, t) } else { var i = new ua(e.children);
                                    i.parent = e, e.children = [i, t], e = i }
                                t.parent = e.parent } while (e.children.length > 10);
                            e.parent.maybeSpill() } }, iterN: function(e, t, n) { for (var i = 0; i < this.children.length; ++i) { var r = this.children[i],
                                o = r.chunkSize(); if (e < o) { var a = Math.min(t, o - e); if (r.iterN(e, a, n)) return !0; if (0 == (t -= a)) break;
                                e = 0 } else e -= o } } }; var ca = function(e, t, n) { if (n)
                        for (var i in n) n.hasOwnProperty(i) && (this[i] = n[i]);
                    this.doc = e, this.node = t };

                function da(e, t, n) { on(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && or(e, n) }

                function ha(e, t, n, i) { var r = new ca(e, n, i),
                        o = e.cm; return o && r.noHScroll && (o.display.alignWidgets = !0), la(e, t, "widget", (function(t) { var n = t.widgets || (t.widgets = []); if (null == r.insertAt ? n.push(r) : n.splice(Math.min(n.length, Math.max(0, r.insertAt)), 0, r), r.line = t, o && !nn(e, t)) { var i = on(t) < e.scrollTop;
                            Qe(t, t.height + jn(r)), i && or(o, r.height), o.curOp.forceUpdate = !0 } return !0 })), o && En(o, "lineWidgetAdded", o, r, "number" == typeof t ? t : et(t)), r }
                ca.prototype.clear = function() { var e = this.doc.cm,
                        t = this.line.widgets,
                        n = this.line,
                        i = et(n); if (null != i && t) { for (var r = 0; r < t.length; ++r) t[r] == this && t.splice(r--, 1);
                        t.length || (n.widgets = null); var o = jn(this);
                        Qe(n, Math.max(0, n.height - o)), e && (Lr(e, (function() { da(e, n, -o), Hi(e, i, "widget") })), En(e, "lineWidgetCleared", e, this, i)) } }, ca.prototype.changed = function() { var e = this,
                        t = this.height,
                        n = this.doc.cm,
                        i = this.line;
                    this.height = null; var r = jn(this) - t;
                    r && (nn(this.doc, i) || Qe(i, i.height + r), n && Lr(n, (function() { n.curOp.forceUpdate = !0, da(n, i, r), En(n, "lineWidgetChanged", n, e, et(i)) }))) }, De(ca); var fa = 0,
                    pa = function(e, t) { this.lines = [], this.type = t, this.doc = e, this.id = ++fa };

                function ma(e, t, n, i, r) { if (i && i.shared) return va(e, t, n, i, r); if (e.cm && !e.cm.curOp) return Mr(e.cm, ma)(e, t, n, i, r); var o = new pa(e, r),
                        a = ot(t, n); if (i && H(i, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o; if (o.replacedWith && (o.collapsed = !0, o.widgetNode = L("span", [o.replacedWith], "CodeMirror-widget"), i.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), i.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) { if (Zt(e, t.line, t, n, o) || t.line != n.line && Zt(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        Mt() }
                    o.addToHistory && So(e, { from: t, to: n, origin: "markText" }, e.sel, NaN); var l, s = t.line,
                        u = e.cm; if (e.iter(s, n.line + 1, (function(i) { u && o.collapsed && !u.options.lineWrapping && Yt(i) == u.display.maxLine && (l = !0), o.collapsed && s != t.line && Qe(i, 0), It(i, new Bt(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null), e.cm && e.cm.curOp), ++s })), o.collapsed && e.iter(t.line, n.line + 1, (function(t) { nn(e, t) && Qe(t, 0) })), o.clearOnEnter && pe(o, "beforeCursorEnter", (function() { return o.clear() })), o.readOnly && (Lt(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++fa, o.atomic = !0), u) { if (l && (u.curOp.updateMaxLine = !0), o.collapsed) zi(u, t.line, n.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                            for (var c = t.line; c <= n.line; c++) Hi(u, c, "text");
                        o.atomic && Uo(u.doc), En(u, "markerAdded", u, o) } return o }
                pa.prototype.clear = function() { if (!this.explicitlyCleared) { var e = this.doc.cm,
                            t = e && !e.curOp; if (t && Cr(e), be(this, "clear")) { var n = this.find();
                            n && En(this, "clear", n.from, n.to) } for (var i = null, r = null, o = 0; o < this.lines.length; ++o) { var a = this.lines[o],
                                l = Nt(a.markedSpans, this);
                            e && !this.collapsed ? Hi(e, et(a), "text") : e && (null != l.to && (r = et(a)), null != l.from && (i = et(a))), a.markedSpans = Ot(a.markedSpans, l), null == l.from && this.collapsed && !nn(this.doc, a) && e && Qe(a, Ei(e.display)) } if (e && this.collapsed && !e.options.lineWrapping)
                            for (var s = 0; s < this.lines.length; ++s) { var u = Yt(this.lines[s]),
                                    c = an(u);
                                c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0) }
                        null != i && e && this.collapsed && zi(e, i, r + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Uo(e.doc)), e && En(e, "markerCleared", e, this, i, r), t && wr(e), this.parent && this.parent.clear() } }, pa.prototype.find = function(e, t) { var n, i;
                    null == e && "bookmark" == this.type && (e = 1); for (var r = 0; r < this.lines.length; ++r) { var o = this.lines[r],
                            a = Nt(o.markedSpans, this); if (null != a.from && (n = rt(t ? o : et(o), a.from), -1 == e)) return n; if (null != a.to && (i = rt(t ? o : et(o), a.to), 1 == e)) return i } return n && { from: n, to: i } }, pa.prototype.changed = function() { var e = this,
                        t = this.find(-1, !0),
                        n = this,
                        i = this.doc.cm;
                    t && i && Lr(i, (function() { var r = t.line,
                            o = et(t.line),
                            a = ei(i, o); if (a && (ui(a), i.curOp.selectionChanged = i.curOp.forceUpdate = !0), i.curOp.updateMaxLine = !0, !nn(n.doc, r) && null != n.height) { var l = n.height;
                            n.height = null; var s = jn(n) - l;
                            s && Qe(r, r.height + s) }
                        En(i, "markerChanged", i, e) })) }, pa.prototype.attachLine = function(e) { if (!this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                        t.maybeHiddenMarkers && -1 != _(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this) }
                    this.lines.push(e) }, pa.prototype.detachLine = function(e) { if (this.lines.splice(_(this.lines, e), 1), !this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this) } }, De(pa); var ga = function(e, t) { this.markers = e, this.primary = t; for (var n = 0; n < e.length; ++n) e[n].parent = this };

                function va(e, t, n, i, r) {
                    (i = H(i)).shared = !1; var o = [ma(e, t, n, i, r)],
                        a = o[0],
                        l = i.widgetNode; return vo(e, (function(e) { l && (i.widgetNode = l.cloneNode(!0)), o.push(ma(e, dt(e, t), dt(e, n), i, r)); for (var s = 0; s < e.linked.length; ++s)
                            if (e.linked[s].isParent) return;
                        a = X(o) })), new ga(o, a) }

                function xa(e) { return e.findMarks(rt(e.first, 0), e.clipPos(rt(e.lastLine())), (function(e) { return e.parent })) }

                function ya(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n],
                            r = i.find(),
                            o = e.clipPos(r.from),
                            a = e.clipPos(r.to); if (ot(o, a)) { var l = ma(e, o, a, i.primary, i.primary.type);
                            i.markers.push(l), l.parent = i } } }

                function ba(e) { for (var t = function(t) { var n = e[t],
                                i = [n.primary.doc];
                            vo(n.primary.doc, (function(e) { return i.push(e) })); for (var r = 0; r < n.markers.length; r++) { var o = n.markers[r]; - 1 == _(i, o.doc) && (o.parent = null, n.markers.splice(r--, 1)) } }, n = 0; n < e.length; n++) t(n) }
                ga.prototype.clear = function() { if (!this.explicitlyCleared) { this.explicitlyCleared = !0; for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        En(this, "clear") } }, ga.prototype.find = function(e, t) { return this.primary.find(e, t) }, De(ga); var Da = 0,
                    Ca = function e(t, n, i, r, o) { if (!(this instanceof e)) return new e(t, n, i, r, o);
                        null == i && (i = 0), ua.call(this, [new sa([new sn("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i; var a = rt(i, 0);
                        this.sel = ao(a), this.history = new Do(null), this.id = ++Da, this.modeOption = n, this.lineSep = r, this.direction = "rtl" == o ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(t)), go(this, { from: a, to: a, text: t }), Wo(this, ao(a), q) };
                Ca.prototype = Q(ua.prototype, { constructor: Ca, iter: function(e, t, n) { n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e) }, insert: function(e, t) { for (var n = 0, i = 0; i < t.length; ++i) n += t[i].height;
                        this.insertInner(e - this.first, t, n) }, remove: function(e, t) { this.removeInner(e - this.first, t) }, getValue: function(e) { var t = Je(this, this.first, this.first + this.size); return !1 === e ? t : t.join(e || this.lineSeparator()) }, setValue: Nr((function(e) { var t = rt(this.first, 0),
                            n = this.first + this.size - 1;
                        Yo(this, { from: t, to: rt(n, Ze(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && lr(this.cm, 0, 0), Wo(this, ao(t), q) })), replaceRange: function(e, t, n, i) { ia(this, e, t = dt(this, t), n = n ? dt(this, n) : t, i) }, getRange: function(e, t, n) { var i = Ye(this, dt(this, e), dt(this, t)); return !1 === n ? i : "" === n ? i.join("") : i.join(n || this.lineSeparator()) }, getLine: function(e) { var t = this.getLineHandle(e); return t && t.text }, getLineHandle: function(e) { if (nt(this, e)) return Ze(this, e) }, getLineNumber: function(e) { return et(e) }, getLineHandleVisualStart: function(e) { return "number" == typeof e && (e = Ze(this, e)), Yt(e) }, lineCount: function() { return this.size }, firstLine: function() { return this.first }, lastLine: function() { return this.first + this.size - 1 }, clipPos: function(e) { return dt(this, e) }, getCursor: function(e) { var t = this.sel.primary(); return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from() }, listSelections: function() { return this.sel.ranges }, somethingSelected: function() { return this.sel.somethingSelected() }, setCursor: Nr((function(e, t, n) { Ro(this, dt(this, "number" == typeof e ? rt(e, t || 0) : e), null, n) })), setSelection: Nr((function(e, t, n) { Ro(this, dt(this, e), dt(this, t || e), n) })), extendSelection: Nr((function(e, t, n) { Io(this, dt(this, e), t && dt(this, t), n) })), extendSelections: Nr((function(e, t) { zo(this, ft(this, e), t) })), extendSelectionsBy: Nr((function(e, t) { zo(this, ft(this, Z(this.sel.ranges, e)), t) })), setSelections: Nr((function(e, t, n) { if (e.length) { for (var i = [], r = 0; r < e.length; r++) i[r] = new ro(dt(this, e[r].anchor), dt(this, e[r].head || e[r].anchor));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Wo(this, oo(this.cm, i, t), n) } })), addSelection: Nr((function(e, t, n) { var i = this.sel.ranges.slice(0);
                        i.push(new ro(dt(this, e), dt(this, t || e))), Wo(this, oo(this.cm, i, i.length - 1), n) })), getSelection: function(e) { for (var t, n = this.sel.ranges, i = 0; i < n.length; i++) { var r = Ye(this, n[i].from(), n[i].to());
                            t = t ? t.concat(r) : r } return !1 === e ? t : t.join(e || this.lineSeparator()) }, getSelections: function(e) { for (var t = [], n = this.sel.ranges, i = 0; i < n.length; i++) { var r = Ye(this, n[i].from(), n[i].to());!1 !== e && (r = r.join(e || this.lineSeparator())), t[i] = r } return t }, replaceSelection: function(e, t, n) { for (var i = [], r = 0; r < this.sel.ranges.length; r++) i[r] = e;
                        this.replaceSelections(i, t, n || "+input") }, replaceSelections: Nr((function(e, t, n) { for (var i = [], r = this.sel, o = 0; o < r.ranges.length; o++) { var a = r.ranges[o];
                            i[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n } } for (var l = t && "end" != t && ho(this, i, t), s = i.length - 1; s >= 0; s--) Yo(this, i[s]);
                        l ? _o(this, l) : this.cm && ar(this.cm) })), undo: Nr((function() { Qo(this, "undo") })), redo: Nr((function() { Qo(this, "redo") })), undoSelection: Nr((function() { Qo(this, "undo", !0) })), redoSelection: Nr((function() { Qo(this, "redo", !0) })), setExtending: function(e) { this.extend = e }, getExtending: function() { return this.extend }, historySize: function() { for (var e = this.history, t = 0, n = 0, i = 0; i < e.done.length; i++) e.done[i].ranges || ++t; for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++n; return { undo: t, redo: n } }, clearHistory: function() { var e = this;
                        this.history = new Do(this.history), vo(this, (function(t) { return t.history = e.history }), !0) }, markClean: function() { this.cleanGeneration = this.changeGeneration(!0) }, changeGeneration: function(e) { return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation }, isClean: function(e) { return this.history.generation == (e || this.cleanGeneration) }, getHistory: function() { return { done: No(this.history.done), undone: No(this.history.undone) } }, setHistory: function(e) { var t = this.history = new Do(this.history);
                        t.done = No(e.done.slice(0), null, !0), t.undone = No(e.undone.slice(0), null, !0) }, setGutterMarker: Nr((function(e, t, n) { return la(this, e, "gutter", (function(e) { var i = e.gutterMarkers || (e.gutterMarkers = {}); return i[t] = n, !n && ie(i) && (e.gutterMarkers = null), !0 })) })), clearGutter: Nr((function(e) { var t = this;
                        this.iter((function(n) { n.gutterMarkers && n.gutterMarkers[e] && la(t, n, "gutter", (function() { return n.gutterMarkers[e] = null, ie(n.gutterMarkers) && (n.gutterMarkers = null), !0 })) })) })), lineInfo: function(e) { var t; if ("number" == typeof e) { if (!nt(this, e)) return null; if (t = e, !(e = Ze(this, e))) return null } else if (null == (t = et(e))) return null; return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets } }, addLineClass: Nr((function(e, t, n) { return la(this, e, "gutter" == t ? "gutter" : "class", (function(e) { var i = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass"; if (e[i]) { if (k(n).test(e[i])) return !1;
                                e[i] += " " + n } else e[i] = n; return !0 })) })), removeLineClass: Nr((function(e, t, n) { return la(this, e, "gutter" == t ? "gutter" : "class", (function(e) { var i = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                                r = e[i]; if (!r) return !1; if (null == n) e[i] = null;
                            else { var o = r.match(k(n)); if (!o) return !1; var a = o.index + o[0].length;
                                e[i] = r.slice(0, o.index) + (o.index && a != r.length ? " " : "") + r.slice(a) || null } return !0 })) })), addLineWidget: Nr((function(e, t, n) { return ha(this, e, t, n) })), removeLineWidget: function(e) { e.clear() }, markText: function(e, t, n) { return ma(this, dt(this, e), dt(this, t), n, n && n.type || "range") }, setBookmark: function(e, t) { var n = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents }; return ma(this, e = dt(this, e), e, n, "bookmark") }, findMarksAt: function(e) { var t = [],
                            n = Ze(this, (e = dt(this, e)).line).markedSpans; if (n)
                            for (var i = 0; i < n.length; ++i) { var r = n[i];
                                (null == r.from || r.from <= e.ch) && (null == r.to || r.to >= e.ch) && t.push(r.marker.parent || r.marker) }
                        return t }, findMarks: function(e, t, n) { e = dt(this, e), t = dt(this, t); var i = [],
                            r = e.line; return this.iter(e.line, t.line + 1, (function(o) { var a = o.markedSpans; if (a)
                                for (var l = 0; l < a.length; l++) { var s = a[l];
                                    null != s.to && r == e.line && e.ch >= s.to || null == s.from && r != e.line || null != s.from && r == t.line && s.from >= t.ch || n && !n(s.marker) || i.push(s.marker.parent || s.marker) }++r })), i }, getAllMarks: function() { var e = []; return this.iter((function(t) { var n = t.markedSpans; if (n)
                                for (var i = 0; i < n.length; ++i) null != n[i].from && e.push(n[i].marker) })), e }, posFromIndex: function(e) { var t, n = this.first,
                            i = this.lineSeparator().length; return this.iter((function(r) { var o = r.text.length + i; if (o > e) return t = e, !0;
                            e -= o, ++n })), dt(this, rt(n, t)) }, indexFromPos: function(e) { var t = (e = dt(this, e)).ch; if (e.line < this.first || e.ch < 0) return 0; var n = this.lineSeparator().length; return this.iter(this.first, e.line, (function(e) { t += e.text.length + n })), t }, copy: function(e) { var t = new Ca(Je(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction); return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t }, linkedDoc: function(e) { e || (e = {}); var t = this.first,
                            n = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to); var i = new Ca(Je(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction); return e.sharedHist && (i.history = this.history), (this.linked || (this.linked = [])).push({ doc: i, sharedHist: e.sharedHist }), i.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], ya(i, xa(this)), i }, unlinkDoc: function(e) { if (e instanceof zl && (e = e.doc), this.linked)
                            for (var t = 0; t < this.linked.length; ++t)
                                if (this.linked[t].doc == e) { this.linked.splice(t, 1), e.unlinkDoc(this), ba(xa(this)); break }
                        if (e.history == this.history) { var n = [e.id];
                            vo(e, (function(e) { return n.push(e.id) }), !0), e.history = new Do(null), e.history.done = No(this.history.done, n), e.history.undone = No(this.history.undone, n) } }, iterLinkedDocs: function(e) { vo(this, e) }, getMode: function() { return this.mode }, getEditor: function() { return this.cm }, splitLines: function(e) { return this.lineSep ? e.split(this.lineSep) : Ne(e) }, lineSeparator: function() { return this.lineSep || "\n" }, setDirection: Nr((function(e) { "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter((function(e) { return e.order = null })), this.cm && bo(this.cm)) })) }), Ca.prototype.eachLine = Ca.prototype.iter; var wa = 0;

                function ka(e) { var t = this; if (Aa(t), !xe(t, e) && !qn(t.display, e)) { Ce(e), a && (wa = +new Date); var n = Oi(t, e, !0),
                            i = e.dataTransfer.files; if (n && !t.isReadOnly())
                            if (i && i.length && window.FileReader && window.File)
                                for (var r = i.length, o = Array(r), l = 0, s = function() {++l == r && Mr(t, (function() { var e = { from: n = dt(t.doc, n), to: n, text: t.doc.splitLines(o.filter((function(e) { return null != e })).join(t.doc.lineSeparator())), origin: "paste" };
                                            Yo(t.doc, e), _o(t.doc, ao(dt(t.doc, n), dt(t.doc, lo(e)))) }))() }, u = function(e, n) { if (t.options.allowDropFileTypes && -1 == _(t.options.allowDropFileTypes, e.type)) s();
                                        else { var i = new FileReader;
                                            i.onerror = function() { return s() }, i.onload = function() { var e = i.result; /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), s() }, i.readAsText(e) } }, c = 0; c < i.length; c++) u(i[c], c);
                            else { if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout((function() { return t.display.input.focus() }), 20); try { var d = e.dataTransfer.getData("Text"); if (d) { var h; if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), jo(t.doc, ao(n, n)), h)
                                            for (var f = 0; f < h.length; ++f) ia(t.doc, "", h[f].anchor, h[f].head, "drag");
                                        t.replaceSelection(d, "around", "paste"), t.display.input.focus() } } catch (p) {} } } }

                function Sa(e, t) { if (a && (!e.state.draggingText || +new Date - wa < 100)) Se(t);
                    else if (!xe(e, t) && !qn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !h)) { var n = T("img", null, null, "position: fixed; left: 0; top: 0;");
                        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), d && n.parentNode.removeChild(n) } }

                function Fa(e, t) { var n = Oi(e, t); if (n) { var i = document.createDocumentFragment();
                        Ui(e, n, i), e.display.dragCursor || (e.display.dragCursor = T("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), E(e.display.dragCursor, i) } }

                function Aa(e) { e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null) }

                function Ea(e) { if (document.getElementsByClassName) { for (var t = document.getElementsByClassName("CodeMirror"), n = [], i = 0; i < t.length; i++) { var r = t[i].CodeMirror;
                            r && n.push(r) }
                        n.length && n[0].operation((function() { for (var t = 0; t < n.length; t++) e(n[t]) })) } } var Ta = !1;

                function La() { Ta || (Ma(), Ta = !0) }

                function Ma() { var e;
                    pe(window, "resize", (function() { null == e && (e = setTimeout((function() { e = null, Ea(Ba) }), 100)) })), pe(window, "blur", (function() { return Ea(Yi) })) }

                function Ba(e) { var t = e.display;
                    t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize() } for (var Na = { 3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, Oa = 0; Oa < 10; Oa++) Na[Oa + 48] = Na[Oa + 96] = String(Oa); for (var Ia = 65; Ia <= 90; Ia++) Na[Ia] = String.fromCharCode(Ia); for (var za = 1; za <= 12; za++) Na[za + 111] = Na[za + 63235] = "F" + za; var Ha = {};

                function Ra(e) { var t, n, i, r, o = e.split(/-(?!$)/);
                    e = o[o.length - 1]; for (var a = 0; a < o.length - 1; a++) { var l = o[a]; if (/^(cmd|meta|m)$/i.test(l)) r = !0;
                        else if (/^a(lt)?$/i.test(l)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
                        else { if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
                            i = !0 } } return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), r && (e = "Cmd-" + e), i && (e = "Shift-" + e), e }

                function Pa(e) { var t = {}; for (var n in e)
                        if (e.hasOwnProperty(n)) { var i = e[n]; if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue; if ("..." == i) { delete e[n]; continue } for (var r = Z(n.split(" "), Ra), o = 0; o < r.length; o++) { var a = void 0,
                                    l = void 0;
                                o == r.length - 1 ? (l = r.join(" "), a = i) : (l = r.slice(0, o + 1).join(" "), a = "..."); var s = t[l]; if (s) { if (s != a) throw new Error("Inconsistent bindings for " + l) } else t[l] = a }
                            delete e[n] }
                    for (var u in t) e[u] = t[u]; return e }

                function _a(e, t, n, i) { var r = (t = Ua(t)).call ? t.call(e, i) : t[e]; if (!1 === r) return "nothing"; if ("..." === r) return "multi"; if (null != r && n(r)) return "handled"; if (t.fallthrough) { if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return _a(e, t.fallthrough, n, i); for (var o = 0; o < t.fallthrough.length; o++) { var a = _a(e, t.fallthrough[o], n, i); if (a) return a } } }

                function Wa(e) { var t = "string" == typeof e ? e : Na[e.keyCode]; return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t }

                function ja(e, t, n) { var i = e; return t.altKey && "Alt" != i && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != i && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Mod" != i && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != i && (e = "Shift-" + e), e }

                function qa(e, t) { if (d && 34 == e.keyCode && e.char) return !1; var n = Na[e.keyCode]; return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), ja(n, e, t)) }

                function Ua(e) { return "string" == typeof e ? Ha[e] : e }

                function $a(e, t) { for (var n = e.doc.sel.ranges, i = [], r = 0; r < n.length; r++) { for (var o = t(n[r]); i.length && ot(o.from, X(i).to) <= 0;) { var a = i.pop(); if (ot(a.from, o.from) < 0) { o.from = a.from; break } }
                        i.push(o) }
                    Lr(e, (function() { for (var t = i.length - 1; t >= 0; t--) ia(e.doc, "", i[t].from, i[t].to, "+delete");
                        ar(e) })) }

                function Ga(e, t, n) { var i = ae(e.text, t + n, n); return i < 0 || i > e.text.length ? null : i }

                function Va(e, t, n) { var i = Ga(e, t.ch, n); return null == i ? null : new rt(t.line, i, n < 0 ? "after" : "before") }

                function Ka(e, t, n, i, r) { if (e) { "rtl" == t.doc.direction && (r = -r); var o = he(n, t.doc.direction); if (o) { var a, l = r < 0 ? X(o) : o[0],
                                s = r < 0 == (1 == l.level) ? "after" : "before"; if (l.level > 0 || "rtl" == t.doc.direction) { var u = ti(t, n);
                                a = r < 0 ? n.text.length - 1 : 0; var c = ni(t, u, a).top;
                                a = le((function(e) { return ni(t, u, e).top == c }), r < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == s && (a = Ga(n, a, 1)) } else a = r < 0 ? l.to : l.from; return new rt(i, a, s) } } return new rt(i, r < 0 ? n.text.length : 0, r < 0 ? "before" : "after") }

                function Xa(e, t, n, i) { var r = he(t, e.doc.direction); if (!r) return Va(t, n, i);
                    n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after"); var o = ce(r, n.ch, n.sticky),
                        a = r[o]; if ("ltr" == e.doc.direction && a.level % 2 == 0 && (i > 0 ? a.to > n.ch : a.from < n.ch)) return Va(t, n, i); var l, s = function(e, n) { return Ga(t, e instanceof rt ? e.ch : e, n) },
                        u = function(n) { return e.options.lineWrapping ? (l = l || ti(e, t), wi(e, t, l, n)) : { begin: 0, end: t.text.length } },
                        c = u("before" == n.sticky ? s(n, -1) : n.ch); if ("rtl" == e.doc.direction || 1 == a.level) { var d = 1 == a.level == i < 0,
                            h = s(n, d ? 1 : -1); if (null != h && (d ? h <= a.to && h <= c.end : h >= a.from && h >= c.begin)) { var f = d ? "before" : "after"; return new rt(n.line, h, f) } } var p = function(e, t, i) { for (var o = function(e, t) { return t ? new rt(n.line, s(e, 1), "before") : new rt(n.line, e, "after") }; e >= 0 && e < r.length; e += t) { var a = r[e],
                                    l = t > 0 == (1 != a.level),
                                    u = l ? i.begin : s(i.end, -1); if (a.from <= u && u < a.to) return o(u, l); if (u = l ? a.from : s(a.to, -1), i.begin <= u && u < i.end) return o(u, l) } },
                        m = p(o + i, i, c); if (m) return m; var g = i > 0 ? c.end : s(c.begin, -1); return null == g || i > 0 && g == t.text.length || !(m = p(i > 0 ? 0 : r.length - 1, i, u(g))) ? null : m }
                Ha.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Ha.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Ha.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Ha.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Ha.default = x ? Ha.macDefault : Ha.pcDefault; var Za = { selectAll: Xo, singleSelection: function(e) { return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), q) }, killLine: function(e) { return $a(e, (function(t) { if (t.empty()) { var n = Ze(e.doc, t.head.line).text.length; return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: rt(t.head.line + 1, 0) } : { from: t.head, to: rt(t.head.line, n) } } return { from: t.from(), to: t.to() } })) }, deleteLine: function(e) { return $a(e, (function(t) { return { from: rt(t.from().line, 0), to: dt(e.doc, rt(t.to().line + 1, 0)) } })) }, delLineLeft: function(e) { return $a(e, (function(e) { return { from: rt(e.from().line, 0), to: e.from() } })) }, delWrappedLineLeft: function(e) { return $a(e, (function(t) { var n = e.charCoords(t.head, "div").top + 5; return { from: e.coordsChar({ left: 0, top: n }, "div"), to: t.from() } })) }, delWrappedLineRight: function(e) { return $a(e, (function(t) { var n = e.charCoords(t.head, "div").top + 5,
                                i = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div"); return { from: t.from(), to: i } })) }, undo: function(e) { return e.undo() }, redo: function(e) { return e.redo() }, undoSelection: function(e) { return e.undoSelection() }, redoSelection: function(e) { return e.redoSelection() }, goDocStart: function(e) { return e.extendSelection(rt(e.firstLine(), 0)) }, goDocEnd: function(e) { return e.extendSelection(rt(e.lastLine())) }, goLineStart: function(e) { return e.extendSelectionsBy((function(t) { return Ya(e, t.head.line) }), { origin: "+move", bias: 1 }) }, goLineStartSmart: function(e) { return e.extendSelectionsBy((function(t) { return Qa(e, t.head) }), { origin: "+move", bias: 1 }) }, goLineEnd: function(e) { return e.extendSelectionsBy((function(t) { return Ja(e, t.head.line) }), { origin: "+move", bias: -1 }) }, goLineRight: function(e) { return e.extendSelectionsBy((function(t) { var n = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div") }), $) }, goLineLeft: function(e) { return e.extendSelectionsBy((function(t) { var n = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: 0, top: n }, "div") }), $) }, goLineLeftSmart: function(e) { return e.extendSelectionsBy((function(t) { var n = e.cursorCoords(t.head, "div").top + 5,
                                i = e.coordsChar({ left: 0, top: n }, "div"); return i.ch < e.getLine(i.line).search(/\S/) ? Qa(e, t.head) : i }), $) }, goLineUp: function(e) { return e.moveV(-1, "line") }, goLineDown: function(e) { return e.moveV(1, "line") }, goPageUp: function(e) { return e.moveV(-1, "page") }, goPageDown: function(e) { return e.moveV(1, "page") }, goCharLeft: function(e) { return e.moveH(-1, "char") }, goCharRight: function(e) { return e.moveH(1, "char") }, goColumnLeft: function(e) { return e.moveH(-1, "column") }, goColumnRight: function(e) { return e.moveH(1, "column") }, goWordLeft: function(e) { return e.moveH(-1, "word") }, goGroupRight: function(e) { return e.moveH(1, "group") }, goGroupLeft: function(e) { return e.moveH(-1, "group") }, goWordRight: function(e) { return e.moveH(1, "word") }, delCharBefore: function(e) { return e.deleteH(-1, "codepoint") }, delCharAfter: function(e) { return e.deleteH(1, "char") }, delWordBefore: function(e) { return e.deleteH(-1, "word") }, delWordAfter: function(e) { return e.deleteH(1, "word") }, delGroupBefore: function(e) { return e.deleteH(-1, "group") }, delGroupAfter: function(e) { return e.deleteH(1, "group") }, indentAuto: function(e) { return e.indentSelection("smart") }, indentMore: function(e) { return e.indentSelection("add") }, indentLess: function(e) { return e.indentSelection("subtract") }, insertTab: function(e) { return e.replaceSelection("\t") }, insertSoftTab: function(e) { for (var t = [], n = e.listSelections(), i = e.options.tabSize, r = 0; r < n.length; r++) { var o = n[r].from(),
                                a = R(e.getLine(o.line), o.ch, i);
                            t.push(K(i - a % i)) }
                        e.replaceSelections(t) }, defaultTab: function(e) { e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab") }, transposeChars: function(e) { return Lr(e, (function() { for (var t = e.listSelections(), n = [], i = 0; i < t.length; i++)
                                if (t[i].empty()) { var r = t[i].head,
                                        o = Ze(e.doc, r.line).text; if (o)
                                        if (r.ch == o.length && (r = new rt(r.line, r.ch - 1)), r.ch > 0) r = new rt(r.line, r.ch + 1), e.replaceRange(o.charAt(r.ch - 1) + o.charAt(r.ch - 2), rt(r.line, r.ch - 2), r, "+transpose");
                                        else if (r.line > e.doc.first) { var a = Ze(e.doc, r.line - 1).text;
                                        a && (r = new rt(r.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), rt(r.line - 1, a.length - 1), r, "+transpose")) }
                                    n.push(new ro(r, r)) }
                            e.setSelections(n) })) }, newlineAndIndent: function(e) { return Lr(e, (function() { for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                            t = e.listSelections(); for (var i = 0; i < t.length; i++) e.indentLine(t[i].from().line, null, !0);
                            ar(e) })) }, openLine: function(e) { return e.replaceSelection("\n", "start") }, toggleOverwrite: function(e) { return e.toggleOverwrite() } };

                function Ya(e, t) { var n = Ze(e.doc, t),
                        i = Yt(n); return i != n && (t = et(i)), Ka(!0, e, i, t, 1) }

                function Ja(e, t) { var n = Ze(e.doc, t),
                        i = Jt(n); return i != n && (t = et(i)), Ka(!0, e, n, t, -1) }

                function Qa(e, t) { var n = Ya(e, t.line),
                        i = Ze(e.doc, n.line),
                        r = he(i, e.doc.direction); if (!r || 0 == r[0].level) { var o = Math.max(n.ch, i.text.search(/\S/)),
                            a = t.line == n.line && t.ch <= o && t.ch; return rt(n.line, a ? 0 : o, n.sticky) } return n }

                function el(e, t, n) { if ("string" == typeof t && !(t = Za[t])) return !1;
                    e.display.input.ensurePolled(); var i = e.display.shift,
                        r = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), r = t(e) != j } finally { e.display.shift = i, e.state.suppressEdits = !1 } return r }

                function tl(e, t, n) { for (var i = 0; i < e.state.keyMaps.length; i++) { var r = _a(t, e.state.keyMaps[i], n, e); if (r) return r } return e.options.extraKeys && _a(t, e.options.extraKeys, n, e) || _a(t, e.options.keyMap, n, e) } var nl = new P;

                function il(e, t, n, i) { var r = e.state.keySeq; if (r) { if (Wa(t)) return "handled"; if (/\'$/.test(t) ? e.state.keySeq = null : nl.set(50, (function() { e.state.keySeq == r && (e.state.keySeq = null, e.display.input.reset()) })), rl(e, r + " " + t, n, i)) return !0 } return rl(e, t, n, i) }

                function rl(e, t, n, i) { var r = tl(e, t, i); return "multi" == r && (e.state.keySeq = t), "handled" == r && En(e, "keyHandled", e, t, n), "handled" != r && "multi" != r || (Ce(n), Vi(e)), !!r }

                function ol(e, t) { var n = qa(t, !0); return !!n && (t.shiftKey && !e.state.keySeq ? il(e, "Shift-" + n, t, (function(t) { return el(e, t, !0) })) || il(e, n, t, (function(t) { if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return el(e, t) })) : il(e, n, t, (function(t) { return el(e, t) }))) }

                function al(e, t, n) { return il(e, "'" + n + "'", t, (function(t) { return el(e, t, !0) })) } var ll = null;

                function sl(e) { var t = this; if ((!e.target || e.target == t.display.input.getField()) && (t.curOp.focus = B(), !xe(t, e))) { a && l < 11 && 27 == e.keyCode && (e.returnValue = !1); var i = e.keyCode;
                        t.display.shift = 16 == i || e.shiftKey; var r = ol(t, e);
                        d && (ll = r ? i : null, r || 88 != i || Ie || !(x ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), n && !x && !r && 46 == i && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != i || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || ul(t) } }

                function ul(e) { var t = e.display.lineDiv;

                    function n(e) { 18 != e.keyCode && e.altKey || (F(t, "CodeMirror-crosshair"), ge(document, "keyup", n), ge(document, "mouseover", n)) }
                    N(t, "CodeMirror-crosshair"), pe(document, "keyup", n), pe(document, "mouseover", n) }

                function cl(e) { 16 == e.keyCode && (this.doc.sel.shift = !1), xe(this, e) }

                function dl(e) { var t = this; if ((!e.target || e.target == t.display.input.getField()) && !(qn(t.display, e) || xe(t, e) || e.ctrlKey && !e.altKey || x && e.metaKey)) { var n = e.keyCode,
                            i = e.charCode; if (d && n == ll) return ll = null, void Ce(e); if (!d || e.which && !(e.which < 10) || !ol(t, e)) { var r = String.fromCharCode(null == i ? n : i); "\b" != r && (al(t, e, r) || t.display.input.onKeyPress(e)) } } } var hl, fl, pl = 400,
                    ml = function(e, t, n) { this.time = e, this.pos = t, this.button = n };

                function gl(e, t) { var n = +new Date; return fl && fl.compare(n, e, t) ? (hl = fl = null, "triple") : hl && hl.compare(n, e, t) ? (fl = new ml(n, e, t), hl = null, "double") : (hl = new ml(n, e, t), fl = null, "single") }

                function vl(e) { var t = this,
                        n = t.display; if (!(xe(t, e) || n.activeTouch && n.input.supportsTouch()))
                        if (n.input.ensurePolled(), n.shift = e.shiftKey, qn(n, e)) s || (n.scroller.draggable = !1, setTimeout((function() { return n.scroller.draggable = !0 }), 100));
                        else if (!Fl(t, e)) { var i = Oi(t, e),
                            r = Ae(e),
                            o = i ? gl(i, r) : "single";
                        window.focus(), 1 == r && t.state.selectingText && t.state.selectingText(e), i && xl(t, r, i, o, e) || (1 == r ? i ? bl(t, i, o, e) : Fe(e) == n.scroller && Ce(e) : 2 == r ? (i && Io(t.doc, i), setTimeout((function() { return n.input.focus() }), 20)) : 3 == r && (w ? t.display.input.onContextMenu(e) : Xi(t))) } }

                function xl(e, t, n, i, r) { var o = "Click"; return "double" == i ? o = "Double" + o : "triple" == i && (o = "Triple" + o), il(e, ja(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, r), r, (function(t) { if ("string" == typeof t && (t = Za[t]), !t) return !1; var i = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), i = t(e, n) != j } finally { e.state.suppressEdits = !1 } return i })) }

                function yl(e, t, n) { var i = e.getOption("configureMouse"),
                        r = i ? i(e, t, n) : {}; if (null == r.unit) { var o = y ? n.shiftKey && n.metaKey : n.altKey;
                        r.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line" } return (null == r.extend || e.doc.extend) && (r.extend = e.doc.extend || n.shiftKey), null == r.addNew && (r.addNew = x ? n.metaKey : n.ctrlKey), null == r.moveOnDrag && (r.moveOnDrag = !(x ? n.altKey : n.ctrlKey)), r }

                function bl(e, t, n, i) { a ? setTimeout(z(Ki, e), 0) : e.curOp.focus = B(); var r, o = yl(e, n, i),
                        l = e.doc.sel;
                    e.options.dragDrop && Le && !e.isReadOnly() && "single" == n && (r = l.contains(t)) > -1 && (ot((r = l.ranges[r]).from(), t) < 0 || t.xRel > 0) && (ot(r.to(), t) > 0 || t.xRel < 0) ? Dl(e, i, t, o) : wl(e, i, t, o) }

                function Dl(e, t, n, i) { var r = e.display,
                        o = !1,
                        u = Mr(e, (function(t) { s && (r.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Xi(e)), ge(r.wrapper.ownerDocument, "mouseup", u), ge(r.wrapper.ownerDocument, "mousemove", c), ge(r.scroller, "dragstart", d), ge(r.scroller, "drop", u), o || (Ce(t), i.addNew || Io(e.doc, n, null, null, i.extend), s && !h || a && 9 == l ? setTimeout((function() { r.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), r.input.focus() }), 20) : r.input.focus()) })),
                        c = function(e) { o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10 },
                        d = function() { return o = !0 };
                    s && (r.scroller.draggable = !0), e.state.draggingText = u, u.copy = !i.moveOnDrag, pe(r.wrapper.ownerDocument, "mouseup", u), pe(r.wrapper.ownerDocument, "mousemove", c), pe(r.scroller, "dragstart", d), pe(r.scroller, "drop", u), e.state.delayingBlurEvent = !0, setTimeout((function() { return r.input.focus() }), 20), r.scroller.dragDrop && r.scroller.dragDrop() }

                function Cl(e, t, n) { if ("char" == n) return new ro(t, t); if ("word" == n) return e.findWordAt(t); if ("line" == n) return new ro(rt(t.line, 0), dt(e.doc, rt(t.line + 1, 0))); var i = n(e, t); return new ro(i.from, i.to) }

                function wl(e, t, n, i) { a && Xi(e); var r = e.display,
                        o = e.doc;
                    Ce(t); var l, s, u = o.sel,
                        c = u.ranges; if (i.addNew && !i.extend ? (s = o.sel.contains(n), l = s > -1 ? c[s] : new ro(n, n)) : (l = o.sel.primary(), s = o.sel.primIndex), "rectangle" == i.unit) i.addNew || (l = new ro(n, n)), n = Oi(e, t, !0, !0), s = -1;
                    else { var d = Cl(e, n, i.unit);
                        l = i.extend ? Oo(l, d.anchor, d.head, i.extend) : d }
                    i.addNew ? -1 == s ? (s = c.length, Wo(o, oo(e, c.concat([l]), s), { scroll: !1, origin: "*mouse" })) : c.length > 1 && c[s].empty() && "char" == i.unit && !i.extend ? (Wo(o, oo(e, c.slice(0, s).concat(c.slice(s + 1)), 0), { scroll: !1, origin: "*mouse" }), u = o.sel) : Ho(o, s, l, U) : (s = 0, Wo(o, new io([l], 0), U), u = o.sel); var h = n;

                    function f(t) { if (0 != ot(h, t))
                            if (h = t, "rectangle" == i.unit) { for (var r = [], a = e.options.tabSize, c = R(Ze(o, n.line).text, n.ch, a), d = R(Ze(o, t.line).text, t.ch, a), f = Math.min(c, d), p = Math.max(c, d), m = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= g; m++) { var v = Ze(o, m).text,
                                        x = G(v, f, a);
                                    f == p ? r.push(new ro(rt(m, x), rt(m, x))) : v.length > x && r.push(new ro(rt(m, x), rt(m, G(v, p, a)))) }
                                r.length || r.push(new ro(n, n)), Wo(o, oo(e, u.ranges.slice(0, s).concat(r), s), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t) } else { var y, b = l,
                                    D = Cl(e, t, i.unit),
                                    C = b.anchor;
                                ot(D.anchor, C) > 0 ? (y = D.head, C = ut(b.from(), D.anchor)) : (y = D.anchor, C = st(b.to(), D.head)); var w = u.ranges.slice(0);
                                w[s] = kl(e, new ro(dt(o, C), y)), Wo(o, oo(e, w, s), U) } } var p = r.wrapper.getBoundingClientRect(),
                        m = 0;

                    function g(t) { var n = ++m,
                            a = Oi(e, t, !0, "rectangle" == i.unit); if (a)
                            if (0 != ot(a, h)) { e.curOp.focus = B(), f(a); var l = er(r, o);
                                (a.line >= l.to || a.line < l.from) && setTimeout(Mr(e, (function() { m == n && g(t) })), 150) } else { var s = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                                s && setTimeout(Mr(e, (function() { m == n && (r.scroller.scrollTop += s, g(t)) })), 50) } }

                    function v(t) { e.state.selectingText = !1, m = 1 / 0, t && (Ce(t), r.input.focus()), ge(r.wrapper.ownerDocument, "mousemove", x), ge(r.wrapper.ownerDocument, "mouseup", y), o.history.lastSelOrigin = null } var x = Mr(e, (function(e) { 0 !== e.buttons && Ae(e) ? g(e) : v(e) })),
                        y = Mr(e, v);
                    e.state.selectingText = y, pe(r.wrapper.ownerDocument, "mousemove", x), pe(r.wrapper.ownerDocument, "mouseup", y) }

                function kl(e, t) { var n = t.anchor,
                        i = t.head,
                        r = Ze(e.doc, n.line); if (0 == ot(n, i) && n.sticky == i.sticky) return t; var o = he(r); if (!o) return t; var a = ce(o, n.ch, n.sticky),
                        l = o[a]; if (l.from != n.ch && l.to != n.ch) return t; var s, u = a + (l.from == n.ch == (1 != l.level) ? 0 : 1); if (0 == u || u == o.length) return t; if (i.line != n.line) s = (i.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                    else { var c = ce(o, i.ch, i.sticky),
                            d = c - a || (i.ch - n.ch) * (1 == l.level ? -1 : 1);
                        s = c == u - 1 || c == u ? d < 0 : d > 0 } var h = o[u + (s ? -1 : 0)],
                        f = s == (1 == h.level),
                        p = f ? h.from : h.to,
                        m = f ? "after" : "before"; return n.ch == p && n.sticky == m ? t : new ro(new rt(n.line, p, m), i) }

                function Sl(e, t, n, i) { var r, o; if (t.touches) r = t.touches[0].clientX, o = t.touches[0].clientY;
                    else try { r = t.clientX, o = t.clientY } catch (c) { return !1 }
                    if (r >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    i && Ce(t); var a = e.display,
                        l = a.lineDiv.getBoundingClientRect(); if (o > l.bottom || !be(e, n)) return ke(t);
                    o -= l.top - a.viewOffset; for (var s = 0; s < e.display.gutterSpecs.length; ++s) { var u = a.gutters.childNodes[s]; if (u && u.getBoundingClientRect().right >= r) return ve(e, n, e, tt(e.doc, o), e.display.gutterSpecs[s].className, t), ke(t) } }

                function Fl(e, t) { return Sl(e, t, "gutterClick", !0) }

                function Al(e, t) { qn(e.display, t) || El(e, t) || xe(e, t, "contextmenu") || w || e.display.input.onContextMenu(t) }

                function El(e, t) { return !!be(e, "gutterContextMenu") && Sl(e, t, "gutterContextMenu", !1) }

                function Tl(e) { e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), di(e) }
                ml.prototype.compare = function(e, t, n) { return this.time + pl > e && 0 == ot(t, this.pos) && n == this.button }; var Ll = { toString: function() { return "CodeMirror.Init" } },
                    Ml = {},
                    Bl = {};

                function Nl(e) { var t = e.optionHandlers;

                    function n(n, i, r, o) { e.defaults[n] = i, r && (t[n] = o ? function(e, t, n) { n != Ll && r(e, t, n) } : r) }
                    e.defineOption = n, e.Init = Ll, n("value", "", (function(e, t) { return e.setValue(t) }), !0), n("mode", null, (function(e, t) { e.doc.modeOption = t, fo(e) }), !0), n("indentUnit", 2, fo, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, (function(e) { po(e), di(e), zi(e) }), !0), n("lineSeparator", null, (function(e, t) { if (e.doc.lineSep = t, t) { var n = [],
                                i = e.doc.first;
                            e.doc.iter((function(e) { for (var r = 0;;) { var o = e.text.indexOf(t, r); if (-1 == o) break;
                                    r = o + t.length, n.push(rt(i, o)) }
                                i++ })); for (var r = n.length - 1; r >= 0; r--) ia(e.doc, t, n[r], rt(n[r].line, n[r].ch + t.length)) } })), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (function(e, t, n) { e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Ll && e.refresh() })), n("specialCharPlaceholder", mn, (function(e) { return e.refresh() }), !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", (function() { throw new Error("inputStyle can not (yet) be changed in a running editor") }), !0), n("spellcheck", !1, (function(e, t) { return e.getInputField().spellcheck = t }), !0), n("autocorrect", !1, (function(e, t) { return e.getInputField().autocorrect = t }), !0), n("autocapitalize", !1, (function(e, t) { return e.getInputField().autocapitalize = t }), !0), n("rtlMoveVisually", !b), n("wholeLineUpdateBefore", !0), n("theme", "default", (function(e) { Tl(e), Zr(e) }), !0), n("keyMap", "default", (function(e, t, n) { var i = Ua(t),
                            r = n != Ll && Ua(n);
                        r && r.detach && r.detach(e, i), i.attach && i.attach(e, r || null) })), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Il, !0), n("gutters", [], (function(e, t) { e.display.gutterSpecs = Kr(t, e.options.lineNumbers), Zr(e) }), !0), n("fixedGutter", !0, (function(e, t) { e.display.gutters.style.left = t ? Mi(e.display) + "px" : "0", e.refresh() }), !0), n("coverGutterNextToScrollbar", !1, (function(e) { return vr(e) }), !0), n("scrollbarStyle", "native", (function(e) { br(e), vr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft) }), !0), n("lineNumbers", !1, (function(e, t) { e.display.gutterSpecs = Kr(e.options.gutters, t), Zr(e) }), !0), n("firstLineNumber", 1, Zr, !0), n("lineNumberFormatter", (function(e) { return e }), Zr, !0), n("showCursorWhenSelecting", !1, ji, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, (function(e, t) { "nocursor" == t && (Yi(e), e.display.input.blur()), e.display.input.readOnlyChanged(t) })), n("screenReaderLabel", null, (function(e, t) { t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t) })), n("disableInput", !1, (function(e, t) { t || e.display.input.reset() }), !0), n("dragDrop", !0, Ol), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, ji, !0), n("singleCursorHeightPerLine", !0, ji, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, po, !0), n("addModeClass", !1, po, !0), n("pollInterval", 100), n("undoDepth", 200, (function(e, t) { return e.doc.history.undoDepth = t })), n("historyEventDelay", 1250), n("viewportMargin", 10, (function(e) { return e.refresh() }), !0), n("maxHighlightLength", 1e4, po, !0), n("moveInputWithCursor", !0, (function(e, t) { t || e.display.input.resetPosition() })), n("tabindex", null, (function(e, t) { return e.display.input.getField().tabIndex = t || "" })), n("autofocus", null), n("direction", "ltr", (function(e, t) { return e.doc.setDirection(t) }), !0), n("phrases", null) }

                function Ol(e, t, n) { if (!t != !(n && n != Ll)) { var i = e.display.dragFunctions,
                            r = t ? pe : ge;
                        r(e.display.scroller, "dragstart", i.start), r(e.display.scroller, "dragenter", i.enter), r(e.display.scroller, "dragover", i.over), r(e.display.scroller, "dragleave", i.leave), r(e.display.scroller, "drop", i.drop) } }

                function Il(e) { e.options.lineWrapping ? (N(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (F(e.display.wrapper, "CodeMirror-wrap"), ln(e)), Ni(e), zi(e), di(e), setTimeout((function() { return vr(e) }), 100) }

                function zl(e, t) { var n = this; if (!(this instanceof zl)) return new zl(e, t);
                    this.options = t = t ? H(t) : {}, H(Ml, t, !1); var i = t.value; "string" == typeof i ? i = new Ca(i, t.mode, null, t.lineSeparator, t.direction) : t.mode && (i.modeOption = t.mode), this.doc = i; var r = new zl.inputStyles[t.inputStyle](this),
                        o = this.display = new Yr(e, i, r, t); for (var u in o.wrapper.CodeMirror = this, Tl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), br(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: -1, cutIncoming: -1, selectingText: !1, draggingText: !1, highlight: new P, keySeq: null, specialChars: null }, t.autofocus && !v && o.input.focus(), a && l < 11 && setTimeout((function() { return n.display.input.reset(!0) }), 20), Hl(this), La(), Cr(this), this.curOp.forceUpdate = !0, xo(this, i), t.autofocus && !v || this.hasFocus() ? setTimeout((function() { n.hasFocus() && !n.state.focused && Zi(n) }), 20) : Yi(this), Bl) Bl.hasOwnProperty(u) && Bl[u](this, t[u], Ll);
                    Vr(this), t.finishInit && t.finishInit(this); for (var c = 0; c < Rl.length; ++c) Rl[c](this);
                    wr(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto") }

                function Hl(e) { var t = e.display;
                    pe(t.scroller, "mousedown", Mr(e, vl)), pe(t.scroller, "dblclick", a && l < 11 ? Mr(e, (function(t) { if (!xe(e, t)) { var n = Oi(e, t); if (n && !Fl(e, t) && !qn(e.display, t)) { Ce(t); var i = e.findWordAt(n);
                                Io(e.doc, i.anchor, i.head) } } })) : function(t) { return xe(e, t) || Ce(t) }), pe(t.scroller, "contextmenu", (function(t) { return Al(e, t) })), pe(t.input.getField(), "contextmenu", (function(n) { t.scroller.contains(n.target) || Al(e, n) })); var n, i = { end: 0 };

                    function r() { t.activeTouch && (n = setTimeout((function() { return t.activeTouch = null }), 1e3), (i = t.activeTouch).end = +new Date) }

                    function o(e) { if (1 != e.touches.length) return !1; var t = e.touches[0]; return t.radiusX <= 1 && t.radiusY <= 1 }

                    function s(e, t) { if (null == t.left) return !0; var n = t.left - e.left,
                            i = t.top - e.top; return n * n + i * i > 400 }
                    pe(t.scroller, "touchstart", (function(r) { if (!xe(e, r) && !o(r) && !Fl(e, r)) { t.input.ensurePolled(), clearTimeout(n); var a = +new Date;
                            t.activeTouch = { start: a, moved: !1, prev: a - i.end <= 300 ? i : null }, 1 == r.touches.length && (t.activeTouch.left = r.touches[0].pageX, t.activeTouch.top = r.touches[0].pageY) } })), pe(t.scroller, "touchmove", (function() { t.activeTouch && (t.activeTouch.moved = !0) })), pe(t.scroller, "touchend", (function(n) { var i = t.activeTouch; if (i && !qn(t, n) && null != i.left && !i.moved && new Date - i.start < 300) { var o, a = e.coordsChar(t.activeTouch, "page");
                            o = !i.prev || s(i, i.prev) ? new ro(a, a) : !i.prev.prev || s(i, i.prev.prev) ? e.findWordAt(a) : new ro(rt(a.line, 0), dt(e.doc, rt(a.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), Ce(n) }
                        r() })), pe(t.scroller, "touchcancel", r), pe(t.scroller, "scroll", (function() { t.scroller.clientHeight && (dr(e, t.scroller.scrollTop), fr(e, t.scroller.scrollLeft, !0), ve(e, "scroll", e)) })), pe(t.scroller, "mousewheel", (function(t) { return no(e, t) })), pe(t.scroller, "DOMMouseScroll", (function(t) { return no(e, t) })), pe(t.wrapper, "scroll", (function() { return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0 })), t.dragFunctions = { enter: function(t) { xe(e, t) || Se(t) }, over: function(t) { xe(e, t) || (Fa(e, t), Se(t)) }, start: function(t) { return Sa(e, t) }, drop: Mr(e, ka), leave: function(t) { xe(e, t) || Aa(e) } }; var u = t.input.getField();
                    pe(u, "keyup", (function(t) { return cl.call(e, t) })), pe(u, "keydown", Mr(e, sl)), pe(u, "keypress", Mr(e, dl)), pe(u, "focus", (function(t) { return Zi(e, t) })), pe(u, "blur", (function(t) { return Yi(e, t) })) }
                zl.defaults = Ml, zl.optionHandlers = Bl; var Rl = [];

                function Pl(e, t, n, i) { var r, o = e.doc;
                    null == n && (n = "add"), "smart" == n && (o.mode.indent ? r = xt(e, t).state : n = "prev"); var a = e.options.tabSize,
                        l = Ze(o, t),
                        s = R(l.text, null, a);
                    l.stateAfter && (l.stateAfter = null); var u, c = l.text.match(/^\s*/)[0]; if (i || /\S/.test(l.text)) { if ("smart" == n && ((u = o.mode.indent(r, l.text.slice(c.length), l.text)) == j || u > 150)) { if (!i) return;
                            n = "prev" } } else u = 0, n = "not"; "prev" == n ? u = t > o.first ? R(Ze(o, t - 1).text, null, a) : 0 : "add" == n ? u = s + e.options.indentUnit : "subtract" == n ? u = s - e.options.indentUnit : "number" == typeof n && (u = s + n), u = Math.max(0, u); var d = "",
                        h = 0; if (e.options.indentWithTabs)
                        for (var f = Math.floor(u / a); f; --f) h += a, d += "\t"; if (h < u && (d += K(u - h)), d != c) return ia(o, d, rt(t, 0), rt(t, c.length), "+input"), l.stateAfter = null, !0; for (var p = 0; p < o.sel.ranges.length; p++) { var m = o.sel.ranges[p]; if (m.head.line == t && m.head.ch < c.length) { var g = rt(t, c.length);
                            Ho(o, p, new ro(g, g)); break } } }
                zl.defineInitHook = function(e) { return Rl.push(e) }; var _l = null;

                function Wl(e) { _l = e }

                function jl(e, t, n, i, r) { var o = e.doc;
                    e.display.shift = !1, i || (i = o.sel); var a = +new Date - 200,
                        l = "paste" == r || e.state.pasteIncoming > a,
                        s = Ne(t),
                        u = null; if (l && i.ranges.length > 1)
                        if (_l && _l.text.join("\n") == t) { if (i.ranges.length % _l.text.length == 0) { u = []; for (var c = 0; c < _l.text.length; c++) u.push(o.splitLines(_l.text[c])) } } else s.length == i.ranges.length && e.options.pasteLinesPerSelection && (u = Z(s, (function(e) { return [e] })));
                    for (var d = e.curOp.updateInput, h = i.ranges.length - 1; h >= 0; h--) { var f = i.ranges[h],
                            p = f.from(),
                            m = f.to();
                        f.empty() && (n && n > 0 ? p = rt(p.line, p.ch - n) : e.state.overwrite && !l ? m = rt(m.line, Math.min(Ze(o, m.line).text.length, m.ch + X(s).length)) : l && _l && _l.lineWise && _l.text.join("\n") == s.join("\n") && (p = m = rt(p.line, 0))); var g = { from: p, to: m, text: u ? u[h % u.length] : s, origin: r || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input") };
                        Yo(e.doc, g), En(e, "inputRead", e, g) }
                    t && !l && Ul(e, t), ar(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1 }

                function ql(e, t) { var n = e.clipboardData && e.clipboardData.getData("Text"); if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Lr(t, (function() { return jl(t, n, 0, null, "paste") })), !0 }

                function Ul(e, t) { if (e.options.electricChars && e.options.smartIndent)
                        for (var n = e.doc.sel, i = n.ranges.length - 1; i >= 0; i--) { var r = n.ranges[i]; if (!(r.head.ch > 100 || i && n.ranges[i - 1].head.line == r.head.line)) { var o = e.getModeAt(r.head),
                                    a = !1; if (o.electricChars) { for (var l = 0; l < o.electricChars.length; l++)
                                        if (t.indexOf(o.electricChars.charAt(l)) > -1) { a = Pl(e, r.head.line, "smart"); break } } else o.electricInput && o.electricInput.test(Ze(e.doc, r.head.line).text.slice(0, r.head.ch)) && (a = Pl(e, r.head.line, "smart"));
                                a && En(e, "electricInput", e, r.head.line) } } }

                function $l(e) { for (var t = [], n = [], i = 0; i < e.doc.sel.ranges.length; i++) { var r = e.doc.sel.ranges[i].head.line,
                            o = { anchor: rt(r, 0), head: rt(r + 1, 0) };
                        n.push(o), t.push(e.getRange(o.anchor, o.head)) } return { text: t, ranges: n } }

                function Gl(e, t, n, i) { e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", i ? "" : "off"), e.setAttribute("spellcheck", !!t) }

                function Vl() { var e = T("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = T("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"); return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Gl(e), t }

                function Kl(e) { var t = e.optionHandlers,
                        n = e.helpers = {};
                    e.prototype = { constructor: e, focus: function() { window.focus(), this.display.input.focus() }, setOption: function(e, n) { var i = this.options,
                                r = i[e];
                            i[e] == n && "mode" != e || (i[e] = n, t.hasOwnProperty(e) && Mr(this, t[e])(this, n, r), ve(this, "optionChange", this, e)) }, getOption: function(e) { return this.options[e] }, getDoc: function() { return this.doc }, addKeyMap: function(e, t) { this.state.keyMaps[t ? "push" : "unshift"](Ua(e)) }, removeKeyMap: function(e) { for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0 }, addOverlay: Br((function(t, n) { var i = t.token ? t : e.getMode(this.options, t); if (i.startState) throw new Error("Overlays may not be stateful.");
                            Y(this.state.overlays, { mode: i, modeSpec: t, opaque: n && n.opaque, priority: n && n.priority || 0 }, (function(e) { return e.priority })), this.state.modeGen++, zi(this) })), removeOverlay: Br((function(e) { for (var t = this.state.overlays, n = 0; n < t.length; ++n) { var i = t[n].modeSpec; if (i == e || "string" == typeof e && i.name == e) return t.splice(n, 1), this.state.modeGen++, void zi(this) } })), indentLine: Br((function(e, t, n) { "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), nt(this.doc, e) && Pl(this, e, t, n) })), indentSelection: Br((function(e) { for (var t = this.doc.sel.ranges, n = -1, i = 0; i < t.length; i++) { var r = t[i]; if (r.empty()) r.head.line > n && (Pl(this, r.head.line, e, !0), n = r.head.line, i == this.doc.sel.primIndex && ar(this));
                                else { var o = r.from(),
                                        a = r.to(),
                                        l = Math.max(n, o.line);
                                    n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1; for (var s = l; s < n; ++s) Pl(this, s, e); var u = this.doc.sel.ranges;
                                    0 == o.ch && t.length == u.length && u[i].from().ch > 0 && Ho(this.doc, i, new ro(o, u[i].to()), q) } } })), getTokenAt: function(e, t) { return wt(this, e, t) }, getLineTokens: function(e, t) { return wt(this, rt(e), t, !0) }, getTokenTypeAt: function(e) { e = dt(this.doc, e); var t, n = vt(this, Ze(this.doc, e.line)),
                                i = 0,
                                r = (n.length - 1) / 2,
                                o = e.ch; if (0 == o) t = n[2];
                            else
                                for (;;) { var a = i + r >> 1; if ((a ? n[2 * a - 1] : 0) >= o) r = a;
                                    else { if (!(n[2 * a + 1] < o)) { t = n[2 * a + 2]; break }
                                        i = a + 1 } }
                            var l = t ? t.indexOf("overlay ") : -1; return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1) }, getModeAt: function(t) { var n = this.doc.mode; return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n }, getHelper: function(e, t) { return this.getHelpers(e, t)[0] }, getHelpers: function(e, t) { var i = []; if (!n.hasOwnProperty(t)) return i; var r = n[t],
                                o = this.getModeAt(e); if ("string" == typeof o[t]) r[o[t]] && i.push(r[o[t]]);
                            else if (o[t])
                                for (var a = 0; a < o[t].length; a++) { var l = r[o[t][a]];
                                    l && i.push(l) } else o.helperType && r[o.helperType] ? i.push(r[o.helperType]) : r[o.name] && i.push(r[o.name]); for (var s = 0; s < r._global.length; s++) { var u = r._global[s];
                                u.pred(o, this) && -1 == _(i, u.val) && i.push(u.val) } return i }, getStateAfter: function(e, t) { var n = this.doc; return xt(this, (e = ct(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state }, cursorCoords: function(e, t) { var n = this.doc.sel.primary(); return xi(this, null == e ? n.head : "object" == typeof e ? dt(this.doc, e) : e ? n.from() : n.to(), t || "page") }, charCoords: function(e, t) { return vi(this, dt(this.doc, e), t || "page") }, coordsChar: function(e, t) { return Di(this, (e = gi(this, e, t || "page")).left, e.top) }, lineAtHeight: function(e, t) { return e = gi(this, { top: e, left: 0 }, t || "page").top, tt(this.doc, e + this.display.viewOffset) }, heightAtLine: function(e, t, n) { var i, r = !1; if ("number" == typeof e) { var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, r = !0), i = Ze(this.doc, e) } else i = e; return mi(this, i, { top: 0, left: 0 }, t || "page", n || r).top + (r ? this.doc.height - on(i) : 0) }, defaultTextHeight: function() { return Ei(this.display) }, defaultCharWidth: function() { return Ti(this.display) }, getViewport: function() { return { from: this.display.viewFrom, to: this.display.viewTo } }, addWidget: function(e, t, n, i, r) { var o = this.display,
                                a = (e = xi(this, dt(this.doc, e))).bottom,
                                l = e.left; if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == i) a = e.top;
                            else if ("above" == i || "near" == i) { var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                ("above" == i || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom), l + t.offsetWidth > u && (l = u - t.offsetWidth) }
                            t.style.top = a + "px", t.style.left = t.style.right = "", "right" == r ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == r ? l = 0 : "middle" == r && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"), n && ir(this, { left: l, top: a, right: l + t.offsetWidth, bottom: a + t.offsetHeight }) }, triggerOnKeyDown: Br(sl), triggerOnKeyPress: Br(dl), triggerOnKeyUp: cl, triggerOnMouseDown: Br(vl), execCommand: function(e) { if (Za.hasOwnProperty(e)) return Za[e].call(null, this) }, triggerElectric: Br((function(e) { Ul(this, e) })), findPosH: function(e, t, n, i) { var r = 1;
                            t < 0 && (r = -1, t = -t); for (var o = dt(this.doc, e), a = 0; a < t && !(o = Xl(this.doc, o, r, n, i)).hitSide; ++a); return o }, moveH: Br((function(e, t) { var n = this;
                            this.extendSelectionsBy((function(i) { return n.display.shift || n.doc.extend || i.empty() ? Xl(n.doc, i.head, e, t, n.options.rtlMoveVisually) : e < 0 ? i.from() : i.to() }), $) })), deleteH: Br((function(e, t) { var n = this.doc.sel,
                                i = this.doc;
                            n.somethingSelected() ? i.replaceSelection("", null, "+delete") : $a(this, (function(n) { var r = Xl(i, n.head, e, t, !1); return e < 0 ? { from: r, to: n.head } : { from: n.head, to: r } })) })), findPosV: function(e, t, n, i) { var r = 1,
                                o = i;
                            t < 0 && (r = -1, t = -t); for (var a = dt(this.doc, e), l = 0; l < t; ++l) { var s = xi(this, a, "div"); if (null == o ? o = s.left : s.left = o, (a = Zl(this, s, r, n)).hitSide) break } return a }, moveV: Br((function(e, t) { var n = this,
                                i = this.doc,
                                r = [],
                                o = !this.display.shift && !i.extend && i.sel.somethingSelected(); if (i.extendSelectionsBy((function(a) { if (o) return e < 0 ? a.from() : a.to(); var l = xi(n, a.head, "div");
                                    null != a.goalColumn && (l.left = a.goalColumn), r.push(l.left); var s = Zl(n, l, e, t); return "page" == t && a == i.sel.primary() && or(n, vi(n, s, "div").top - l.top), s }), $), r.length)
                                for (var a = 0; a < i.sel.ranges.length; a++) i.sel.ranges[a].goalColumn = r[a] })), findWordAt: function(e) { var t = Ze(this.doc, e.line).text,
                                n = e.ch,
                                i = e.ch; if (t) { var r = this.getHelper(e, "wordChars"); "before" != e.sticky && i != t.length || !n ? ++i : --n; for (var o = t.charAt(n), a = ne(o, r) ? function(e) { return ne(e, r) } : /\s/.test(o) ? function(e) { return /\s/.test(e) } : function(e) { return !/\s/.test(e) && !ne(e) }; n > 0 && a(t.charAt(n - 1));) --n; for (; i < t.length && a(t.charAt(i));) ++i } return new ro(rt(e.line, n), rt(e.line, i)) }, toggleOverwrite: function(e) { null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? N(this.display.cursorDiv, "CodeMirror-overwrite") : F(this.display.cursorDiv, "CodeMirror-overwrite"), ve(this, "overwriteToggle", this, this.state.overwrite)) }, hasFocus: function() { return this.display.input.getField() == B() }, isReadOnly: function() { return !(!this.options.readOnly && !this.doc.cantEdit) }, scrollTo: Br((function(e, t) { lr(this, e, t) })), getScrollInfo: function() { var e = this.display.scroller; return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - Vn(this) - this.display.barHeight, width: e.scrollWidth - Vn(this) - this.display.barWidth, clientHeight: Xn(this), clientWidth: Kn(this) } }, scrollIntoView: Br((function(e, t) { null == e ? (e = { from: this.doc.sel.primary().head, to: null }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = { from: rt(e, 0), to: null } : null == e.from && (e = { from: e, to: null }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? sr(this, e) : cr(this, e.from, e.to, e.margin) })), setSize: Br((function(e, t) { var n = this,
                                i = function(e) { return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e };
                            null != e && (this.display.wrapper.style.width = i(e)), null != t && (this.display.wrapper.style.height = i(t)), this.options.lineWrapping && ci(this); var r = this.display.viewFrom;
                            this.doc.iter(r, this.display.viewTo, (function(e) { if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) { Hi(n, r, "widget"); break }++r })), this.curOp.forceUpdate = !0, ve(this, "refresh", this) })), operation: function(e) { return Lr(this, e) }, startOperation: function() { return Cr(this) }, endOperation: function() { return wr(this) }, refresh: Br((function() { var e = this.display.cachedTextHeight;
                            zi(this), this.curOp.forceUpdate = !0, di(this), lr(this, this.doc.scrollLeft, this.doc.scrollTop), Ur(this.display), (null == e || Math.abs(e - Ei(this.display)) > .5 || this.options.lineWrapping) && Ni(this), ve(this, "refresh", this) })), swapDoc: Br((function(e) { var t = this.doc; return t.cm = null, this.state.selectingText && this.state.selectingText(), xo(this, e), di(this), this.display.input.reset(), lr(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, En(this, "swapDoc", this, t), t })), phrase: function(e) { var t = this.options.phrases; return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e }, getInputField: function() { return this.display.input.getField() }, getWrapperElement: function() { return this.display.wrapper }, getScrollerElement: function() { return this.display.scroller }, getGutterElement: function() { return this.display.gutters } }, De(e), e.registerHelper = function(t, i, r) { n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), n[t][i] = r }, e.registerGlobalHelper = function(t, i, r, o) { e.registerHelper(t, i, o), n[t]._global.push({ pred: r, val: o }) } }

                function Xl(e, t, n, i, r) { var o = t,
                        a = n,
                        l = Ze(e, t.line),
                        s = r && "rtl" == e.direction ? -n : n;

                    function u() { var n = t.line + s; return !(n < e.first || n >= e.first + e.size) && (t = new rt(n, t.ch, t.sticky), l = Ze(e, n)) }

                    function c(o) { var a; if ("codepoint" == i) { var c = l.text.charCodeAt(t.ch + (n > 0 ? 0 : -1)); if (isNaN(c)) a = null;
                            else { var d = n > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
                                a = new rt(t.line, Math.max(0, Math.min(l.text.length, t.ch + n * (d ? 2 : 1))), -n) } } else a = r ? Xa(e.cm, l, t, n) : Va(l, t, n); if (null == a) { if (o || !u()) return !1;
                            t = Ka(r, e.cm, l, t.line, s) } else t = a; return !0 } if ("char" == i || "codepoint" == i) c();
                    else if ("column" == i) c(!0);
                    else if ("word" == i || "group" == i)
                        for (var d = null, h = "group" == i, f = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(n < 0) || c(!p); p = !1) { var m = l.text.charAt(t.ch) || "\n",
                                g = ne(m, f) ? "w" : h && "\n" == m ? "n" : !h || /\s/.test(m) ? null : "p"; if (!h || p || g || (g = "s"), d && d != g) { n < 0 && (n = 1, c(), t.sticky = "after"); break } if (g && (d = g), n > 0 && !c(!p)) break }
                    var v = Vo(e, t, o, a, !0); return at(o, v) && (v.hitSide = !0), v }

                function Zl(e, t, n, i) { var r, o, a = e.doc,
                        l = t.left; if ("page" == i) { var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            u = Math.max(s - .5 * Ei(e.display), 3);
                        r = (n > 0 ? t.bottom : t.top) + n * u } else "line" == i && (r = n > 0 ? t.bottom + 3 : t.top - 3); for (;
                        (o = Di(e, l, r)).outside;) { if (n < 0 ? r <= 0 : r >= a.height) { o.hitSide = !0; break }
                        r += 5 * n } return o } var Yl = function(e) { this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new P, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null };

                function Jl(e, t) { var n = ei(e, t.line); if (!n || n.hidden) return null; var i = Ze(e.doc, t.line),
                        r = Yn(n, i, t.line),
                        o = he(i, e.doc.direction),
                        a = "left";
                    o && (a = ce(o, t.ch) % 2 ? "right" : "left"); var l = oi(r.map, t.ch, a); return l.offset = "right" == l.collapse ? l.end : l.start, l }

                function Ql(e) { for (var t = e; t; t = t.parentNode)
                        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1 }

                function es(e, t) { return t && (e.bad = !0), e }

                function ts(e, t, n, i, r) { var o = "",
                        a = !1,
                        l = e.doc.lineSeparator(),
                        s = !1;

                    function u(e) { return function(t) { return t.id == e } }

                    function c() { a && (o += l, s && (o += l), a = s = !1) }

                    function d(e) { e && (c(), o += e) }

                    function h(t) { if (1 == t.nodeType) { var n = t.getAttribute("cm-text"); if (n) return void d(n); var o, f = t.getAttribute("cm-marker"); if (f) { var p = e.findMarks(rt(i, 0), rt(r + 1, 0), u(+f)); return void(p.length && (o = p[0].find(0)) && d(Ye(e.doc, o.from, o.to).join(l))) } if ("false" == t.getAttribute("contenteditable")) return; var m = /^(pre|div|p|li|table|br)$/i.test(t.nodeName); if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            m && c(); for (var g = 0; g < t.childNodes.length; g++) h(t.childNodes[g]); /^(pre|p)$/i.test(t.nodeName) && (s = !0), m && (a = !0) } else 3 == t.nodeType && d(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " ")) } for (; h(t), t != n;) t = t.nextSibling, s = !1; return o }

                function ns(e, t, n) { var i; if (t == e.display.lineDiv) { if (!(i = e.display.lineDiv.childNodes[n])) return es(e.clipPos(rt(e.display.viewTo - 1)), !0);
                        t = null, n = 0 } else
                        for (i = t;; i = i.parentNode) { if (!i || i == e.display.lineDiv) return null; if (i.parentNode && i.parentNode == e.display.lineDiv) break }
                    for (var r = 0; r < e.display.view.length; r++) { var o = e.display.view[r]; if (o.node == i) return is(o, t, n) } }

                function is(e, t, n) { var i = e.text.firstChild,
                        r = !1; if (!t || !M(i, t)) return es(rt(et(e.line), 0), !0); if (t == i && (r = !0, t = i.childNodes[n], n = 0, !t)) { var o = e.rest ? X(e.rest) : e.line; return es(rt(et(o), o.text.length), r) } var a = 3 == t.nodeType ? t : null,
                        l = t; for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); l.parentNode != i;) l = l.parentNode; var s = e.measure,
                        u = s.maps;

                    function c(t, n, i) { for (var r = -1; r < (u ? u.length : 0); r++)
                            for (var o = r < 0 ? s.map : u[r], a = 0; a < o.length; a += 3) { var l = o[a + 2]; if (l == t || l == n) { var c = et(r < 0 ? e.line : e.rest[r]),
                                        d = o[a] + i; return (i < 0 || l != t) && (d = o[a + (i ? 1 : 0)]), rt(c, d) } } } var d = c(a, l, n); if (d) return es(d, r); for (var h = l.nextSibling, f = a ? a.nodeValue.length - n : 0; h; h = h.nextSibling) { if (d = c(h, h.firstChild, 0)) return es(rt(d.line, d.ch - f), r);
                        f += h.textContent.length } for (var p = l.previousSibling, m = n; p; p = p.previousSibling) { if (d = c(p, p.firstChild, -1)) return es(rt(d.line, d.ch + m), r);
                        m += p.textContent.length } }
                Yl.prototype.init = function(e) { var t = this,
                        n = this,
                        i = n.cm,
                        r = n.div = e.lineDiv;

                    function o(e) { for (var t = e.target; t; t = t.parentNode) { if (t == r) return !0; if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break } return !1 }

                    function a(e) { if (o(e) && !xe(i, e)) { if (i.somethingSelected()) Wl({ lineWise: !1, text: i.getSelections() }), "cut" == e.type && i.replaceSelection("", null, "cut");
                            else { if (!i.options.lineWiseCopyCut) return; var t = $l(i);
                                Wl({ lineWise: !0, text: t.text }), "cut" == e.type && i.operation((function() { i.setSelections(t.ranges, 0, q), i.replaceSelection("", null, "cut") })) } if (e.clipboardData) { e.clipboardData.clearData(); var a = _l.text.join("\n"); if (e.clipboardData.setData("Text", a), e.clipboardData.getData("Text") == a) return void e.preventDefault() } var l = Vl(),
                                s = l.firstChild;
                            i.display.lineSpace.insertBefore(l, i.display.lineSpace.firstChild), s.value = _l.text.join("\n"); var u = B();
                            I(s), setTimeout((function() { i.display.lineSpace.removeChild(l), u.focus(), u == r && n.showPrimarySelection() }), 50) } }
                    r.contentEditable = !0, Gl(r, i.options.spellcheck, i.options.autocorrect, i.options.autocapitalize), pe(r, "paste", (function(e) {!o(e) || xe(i, e) || ql(e, i) || l <= 11 && setTimeout(Mr(i, (function() { return t.updateFromDOM() })), 20) })), pe(r, "compositionstart", (function(e) { t.composing = { data: e.data, done: !1 } })), pe(r, "compositionupdate", (function(e) { t.composing || (t.composing = { data: e.data, done: !1 }) })), pe(r, "compositionend", (function(e) { t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0) })), pe(r, "touchstart", (function() { return n.forceCompositionEnd() })), pe(r, "input", (function() { t.composing || t.readFromDOMSoon() })), pe(r, "copy", a), pe(r, "cut", a) }, Yl.prototype.screenReaderLabelChanged = function(e) { e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label") }, Yl.prototype.prepareSelection = function() { var e = qi(this.cm, !1); return e.focus = B() == this.div, e }, Yl.prototype.showSelection = function(e, t) { e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e)) }, Yl.prototype.getSelection = function() { return this.cm.display.wrapper.ownerDocument.getSelection() }, Yl.prototype.showPrimarySelection = function() { var e = this.getSelection(),
                        t = this.cm,
                        i = t.doc.sel.primary(),
                        r = i.from(),
                        o = i.to(); if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
                    else { var a = ns(t, e.anchorNode, e.anchorOffset),
                            l = ns(t, e.focusNode, e.focusOffset); if (!a || a.bad || !l || l.bad || 0 != ot(ut(a, l), r) || 0 != ot(st(a, l), o)) { var s = t.display.view,
                                u = r.line >= t.display.viewFrom && Jl(t, r) || { node: s[0].measure.map[2], offset: 0 },
                                c = o.line < t.display.viewTo && Jl(t, o); if (!c) { var d = s[s.length - 1].measure,
                                    h = d.maps ? d.maps[d.maps.length - 1] : d.map;
                                c = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] } } if (u && c) { var f, p = e.rangeCount && e.getRangeAt(0); try { f = S(u.node, u.offset, c.offset, c.node) } catch (m) {}
                                f && (!n && t.state.focused ? (e.collapse(u.node, u.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection() } else e.removeAllRanges() } } }, Yl.prototype.startGracePeriod = function() { var e = this;
                    clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout((function() { e.gracePeriod = !1, e.selectionChanged() && e.cm.operation((function() { return e.cm.curOp.selectionChanged = !0 })) }), 20) }, Yl.prototype.showMultipleSelections = function(e) { E(this.cm.display.cursorDiv, e.cursors), E(this.cm.display.selectionDiv, e.selection) }, Yl.prototype.rememberSelection = function() { var e = this.getSelection();
                    this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset }, Yl.prototype.selectionInEditor = function() { var e = this.getSelection(); if (!e.rangeCount) return !1; var t = e.getRangeAt(0).commonAncestorContainer; return M(this.div, t) }, Yl.prototype.focus = function() { "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && B() == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus()) }, Yl.prototype.blur = function() { this.div.blur() }, Yl.prototype.getField = function() { return this.div }, Yl.prototype.supportsTouch = function() { return !0 }, Yl.prototype.receivedFocus = function() { var e = this;

                    function t() { e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t)) }
                    this.selectionInEditor() ? this.pollSelection() : Lr(this.cm, (function() { return e.cm.curOp.selectionChanged = !0 })), this.polling.set(this.cm.options.pollInterval, t) }, Yl.prototype.selectionChanged = function() { var e = this.getSelection(); return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset }, Yl.prototype.pollSelection = function() { if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) { var e = this.getSelection(),
                            t = this.cm; if (g && c && this.cm.display.gutterSpecs.length && Ql(e.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus(); if (!this.composing) { this.rememberSelection(); var n = ns(t, e.anchorNode, e.anchorOffset),
                                i = ns(t, e.focusNode, e.focusOffset);
                            n && i && Lr(t, (function() { Wo(t.doc, ao(n, i), q), (n.bad || i.bad) && (t.curOp.selectionChanged = !0) })) } } }, Yl.prototype.pollContent = function() { null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null); var e, t, n, i = this.cm,
                        r = i.display,
                        o = i.doc.sel.primary(),
                        a = o.from(),
                        l = o.to(); if (0 == a.ch && a.line > i.firstLine() && (a = rt(a.line - 1, Ze(i.doc, a.line - 1).length)), l.ch == Ze(i.doc, l.line).text.length && l.line < i.lastLine() && (l = rt(l.line + 1, 0)), a.line < r.viewFrom || l.line > r.viewTo - 1) return !1;
                    a.line == r.viewFrom || 0 == (e = Ii(i, a.line)) ? (t = et(r.view[0].line), n = r.view[0].node) : (t = et(r.view[e].line), n = r.view[e - 1].node.nextSibling); var s, u, c = Ii(i, l.line); if (c == r.view.length - 1 ? (s = r.viewTo - 1, u = r.lineDiv.lastChild) : (s = et(r.view[c + 1].line) - 1, u = r.view[c + 1].node.previousSibling), !n) return !1; for (var d = i.doc.splitLines(ts(i, n, u, t, s)), h = Ye(i.doc, rt(t, 0), rt(s, Ze(i.doc, s).text.length)); d.length > 1 && h.length > 1;)
                        if (X(d) == X(h)) d.pop(), h.pop(), s--;
                        else { if (d[0] != h[0]) break;
                            d.shift(), h.shift(), t++ }
                    for (var f = 0, p = 0, m = d[0], g = h[0], v = Math.min(m.length, g.length); f < v && m.charCodeAt(f) == g.charCodeAt(f);) ++f; for (var x = X(d), y = X(h), b = Math.min(x.length - (1 == d.length ? f : 0), y.length - (1 == h.length ? f : 0)); p < b && x.charCodeAt(x.length - p - 1) == y.charCodeAt(y.length - p - 1);) ++p; if (1 == d.length && 1 == h.length && t == a.line)
                        for (; f && f > a.ch && x.charCodeAt(x.length - p - 1) == y.charCodeAt(y.length - p - 1);) f--, p++;
                    d[d.length - 1] = x.slice(0, x.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(f).replace(/\u200b+$/, ""); var D = rt(t, f),
                        C = rt(s, h.length ? X(h).length - p : 0); return d.length > 1 || d[0] || ot(D, C) ? (ia(i.doc, d, D, C, "+input"), !0) : void 0 }, Yl.prototype.ensurePolled = function() { this.forceCompositionEnd() }, Yl.prototype.reset = function() { this.forceCompositionEnd() }, Yl.prototype.forceCompositionEnd = function() { this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus()) }, Yl.prototype.readFromDOMSoon = function() { var e = this;
                    null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() { if (e.readDOMTimeout = null, e.composing) { if (!e.composing.done) return;
                            e.composing = null }
                        e.updateFromDOM() }), 80)) }, Yl.prototype.updateFromDOM = function() { var e = this;!this.cm.isReadOnly() && this.pollContent() || Lr(this.cm, (function() { return zi(e.cm) })) }, Yl.prototype.setUneditable = function(e) { e.contentEditable = "false" }, Yl.prototype.onKeyPress = function(e) { 0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Mr(this.cm, jl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)) }, Yl.prototype.readOnlyChanged = function(e) { this.div.contentEditable = String("nocursor" != e) }, Yl.prototype.onContextMenu = function() {}, Yl.prototype.resetPosition = function() {}, Yl.prototype.needsContentAttribute = !0; var rs = function(e) { this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new P, this.hasSelection = !1, this.composing = null };

                function os(e, t) { if ((t = t ? H(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) { var n = B();
                        t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body }

                    function i() { e.value = l.getValue() } var r; if (e.form && (pe(e.form, "submit", i), !t.leaveSubmitMethodAlone)) { var o = e.form;
                        r = o.submit; try { var a = o.submit = function() { i(), o.submit = r, o.submit(), o.submit = a } } catch (s) {} }
                    t.finishInit = function(n) { n.save = i, n.getTextArea = function() { return e }, n.toTextArea = function() { n.toTextArea = isNaN, i(), e.parentNode.removeChild(n.getWrapperElement()), e.style.display = "", e.form && (ge(e.form, "submit", i), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = r)) } }, e.style.display = "none"; var l = zl((function(t) { return e.parentNode.insertBefore(t, e.nextSibling) }), t); return l }

                function as(e) { e.off = ge, e.on = pe, e.wheelEventPixels = to, e.Doc = Ca, e.splitLines = Ne, e.countColumn = R, e.findColumn = G, e.isWordChar = te, e.Pass = j, e.signal = ve, e.Line = sn, e.changeEnd = lo, e.scrollbarModel = yr, e.Pos = rt, e.cmpPos = ot, e.modes = Re, e.mimeModes = Pe, e.resolveMode = je, e.getMode = qe, e.modeExtensions = Ue, e.extendMode = $e, e.copyState = Ge, e.startState = Ke, e.innerMode = Ve, e.commands = Za, e.keyMap = Ha, e.keyName = qa, e.isModifierKey = Wa, e.lookupKey = _a, e.normalizeKeyMap = Pa, e.StringStream = Xe, e.SharedTextMarker = ga, e.TextMarker = pa, e.LineWidget = ca, e.e_preventDefault = Ce, e.e_stopPropagation = we, e.e_stop = Se, e.addClass = N, e.contains = M, e.rmClass = F, e.keyNames = Na }
                rs.prototype.init = function(e) { var t = this,
                        n = this,
                        i = this.cm;
                    this.createField(e); var r = this.textarea;

                    function o(e) { if (!xe(i, e)) { if (i.somethingSelected()) Wl({ lineWise: !1, text: i.getSelections() });
                            else { if (!i.options.lineWiseCopyCut) return; var t = $l(i);
                                Wl({ lineWise: !0, text: t.text }), "cut" == e.type ? i.setSelections(t.ranges, null, q) : (n.prevInput = "", r.value = t.text.join("\n"), I(r)) } "cut" == e.type && (i.state.cutIncoming = +new Date) } }
                    e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (r.style.width = "0px"), pe(r, "input", (function() { a && l >= 9 && t.hasSelection && (t.hasSelection = null), n.poll() })), pe(r, "paste", (function(e) { xe(i, e) || ql(e, i) || (i.state.pasteIncoming = +new Date, n.fastPoll()) })), pe(r, "cut", o), pe(r, "copy", o), pe(e.scroller, "paste", (function(t) { if (!qn(e, t) && !xe(i, t)) { if (!r.dispatchEvent) return i.state.pasteIncoming = +new Date, void n.focus(); var o = new Event("paste");
                            o.clipboardData = t.clipboardData, r.dispatchEvent(o) } })), pe(e.lineSpace, "selectstart", (function(t) { qn(e, t) || Ce(t) })), pe(r, "compositionstart", (function() { var e = i.getCursor("from");
                        n.composing && n.composing.range.clear(), n.composing = { start: e, range: i.markText(e, i.getCursor("to"), { className: "CodeMirror-composing" }) } })), pe(r, "compositionend", (function() { n.composing && (n.poll(), n.composing.range.clear(), n.composing = null) })) }, rs.prototype.createField = function(e) { this.wrapper = Vl(), this.textarea = this.wrapper.firstChild }, rs.prototype.screenReaderLabelChanged = function(e) { e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label") }, rs.prototype.prepareSelection = function() { var e = this.cm,
                        t = e.display,
                        n = e.doc,
                        i = qi(e); if (e.options.moveInputWithCursor) { var r = xi(e, n.sel.primary().head, "div"),
                            o = t.wrapper.getBoundingClientRect(),
                            a = t.lineDiv.getBoundingClientRect();
                        i.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, r.top + a.top - o.top)), i.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, r.left + a.left - o.left)) } return i }, rs.prototype.showSelection = function(e) { var t = this.cm.display;
                    E(t.cursorDiv, e.cursors), E(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px") }, rs.prototype.reset = function(e) { if (!this.contextMenuPending && !this.composing) { var t = this.cm; if (t.somethingSelected()) { this.prevInput = ""; var n = t.getSelection();
                            this.textarea.value = n, t.state.focused && I(this.textarea), a && l >= 9 && (this.hasSelection = n) } else e || (this.prevInput = this.textarea.value = "", a && l >= 9 && (this.hasSelection = null)) } }, rs.prototype.getField = function() { return this.textarea }, rs.prototype.supportsTouch = function() { return !1 }, rs.prototype.focus = function() { if ("nocursor" != this.cm.options.readOnly && (!v || B() != this.textarea)) try { this.textarea.focus() } catch (e) {} }, rs.prototype.blur = function() { this.textarea.blur() }, rs.prototype.resetPosition = function() { this.wrapper.style.top = this.wrapper.style.left = 0 }, rs.prototype.receivedFocus = function() { this.slowPoll() }, rs.prototype.slowPoll = function() { var e = this;
                    this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() { e.poll(), e.cm.state.focused && e.slowPoll() })) }, rs.prototype.fastPoll = function() { var e = !1,
                        t = this;

                    function n() { t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n)) }
                    t.pollingFast = !0, t.polling.set(20, n) }, rs.prototype.poll = function() { var e = this,
                        t = this.cm,
                        n = this.textarea,
                        i = this.prevInput; if (this.contextMenuPending || !t.state.focused || Oe(n) && !i && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1; var r = n.value; if (r == i && !t.somethingSelected()) return !1; if (a && l >= 9 && this.hasSelection === r || x && /[\uf700-\uf7ff]/.test(r)) return t.display.input.reset(), !1; if (t.doc.sel == t.display.selForContextMenu) { var o = r.charCodeAt(0); if (8203 != o || i || (i = "\u200b"), 8666 == o) return this.reset(), this.cm.execCommand("undo") } for (var s = 0, u = Math.min(i.length, r.length); s < u && i.charCodeAt(s) == r.charCodeAt(s);) ++s; return Lr(t, (function() { jl(t, r.slice(s), i.length - s, null, e.composing ? "*compose" : null), r.length > 1e3 || r.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = r, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })) })), !0 }, rs.prototype.ensurePolled = function() { this.pollingFast && this.poll() && (this.pollingFast = !1) }, rs.prototype.onKeyPress = function() { a && l >= 9 && (this.hasSelection = null), this.fastPoll() }, rs.prototype.onContextMenu = function(e) { var t = this,
                        n = t.cm,
                        i = n.display,
                        r = t.textarea;
                    t.contextMenuPending && t.contextMenuPending(); var o = Oi(n, e),
                        u = i.scroller.scrollTop; if (o && !d) { n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && Mr(n, Wo)(n.doc, ao(o), q); var c, h = r.style.cssText,
                            f = t.wrapper.style.cssText,
                            p = t.wrapper.offsetParent.getBoundingClientRect();
                        t.wrapper.style.cssText = "position: static", r.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (c = window.scrollY), i.input.focus(), s && window.scrollTo(null, c), i.input.reset(), n.somethingSelected() || (r.value = t.prevInput = " "), t.contextMenuPending = g, i.selForContextMenu = n.doc.sel, clearTimeout(i.detectingSelectAll), a && l >= 9 && m(), w ? (Se(e), pe(window, "mouseup", (function e() { ge(window, "mouseup", e), setTimeout(g, 20) }))) : setTimeout(g, 50) }

                    function m() { if (null != r.selectionStart) { var e = n.somethingSelected(),
                                o = "\u200b" + (e ? r.value : "");
                            r.value = "\u21da", r.value = o, t.prevInput = e ? "" : "\u200b", r.selectionStart = 1, r.selectionEnd = o.length, i.selForContextMenu = n.doc.sel } }

                    function g() { if (t.contextMenuPending == g && (t.contextMenuPending = !1, t.wrapper.style.cssText = f, r.style.cssText = h, a && l < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = u), null != r.selectionStart)) {
                            (!a || a && l < 9) && m(); var e = 0,
                                o = function o() { i.selForContextMenu == n.doc.sel && 0 == r.selectionStart && r.selectionEnd > 0 && "\u200b" == t.prevInput ? Mr(n, Xo)(n) : e++ < 10 ? i.detectingSelectAll = setTimeout(o, 500) : (i.selForContextMenu = null, i.input.reset()) };
                            i.detectingSelectAll = setTimeout(o, 200) } } }, rs.prototype.readOnlyChanged = function(e) { e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e }, rs.prototype.setUneditable = function() {}, rs.prototype.needsContentAttribute = !1, Nl(zl), Kl(zl); var ls = "iter insert remove copy getEditor constructor".split(" "); for (var ss in Ca.prototype) Ca.prototype.hasOwnProperty(ss) && _(ls, ss) < 0 && (zl.prototype[ss] = function(e) { return function() { return e.apply(this.doc, arguments) } }(Ca.prototype[ss])); return De(Ca), zl.inputStyles = { textarea: rs, contenteditable: Yl }, zl.defineMode = function(e) { zl.defaults.mode || "null" == e || (zl.defaults.mode = e), _e.apply(this, arguments) }, zl.defineMIME = We, zl.defineMode("null", (function() { return { token: function(e) { return e.skipToEnd() } } })), zl.defineMIME("text/plain", "null"), zl.defineExtension = function(e, t) { zl.prototype[e] = t }, zl.defineDocExtension = function(e, t) { Ca.prototype[e] = t }, zl.fromTextArea = os, as(zl), zl.version = "5.62.0", zl }() } }
]);
//# sourceMappingURL=6.08e1c139.chunk.js.map