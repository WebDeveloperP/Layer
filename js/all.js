! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
    "use strict";
    var i = [],
        n = Object.getPrototypeOf,
        s = i.slice,
        r = i.flat ? function(t) {
            return i.flat.call(t)
        } : function(t) {
            return i.concat.apply([], t)
        },
        o = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        h = d.toString,
        u = h.call(Object),
        p = {},
        f = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
        },
        g = function(t) {
            return null != t && t === t.window
        },
        m = t.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(t, e, i) {
        var n, s, r = (i = i || m).createElement("script");
        if (r.text = t, e)
            for (n in v)(s = e[n] || e.getAttribute && e.getAttribute(n)) && r.setAttribute(n, s);
        i.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var x = "3.7.1",
        w = /HTML$/i,
        _ = function(t, e) {
            return new _.fn.init(t, e)
        };

    function S(t) {
        var e = !!t && "length" in t && t.length,
            i = b(t);
        return !f(t) && !g(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    _.fn = _.prototype = {
        jquery: x,
        constructor: _,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = _.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return _.each(this, t)
        },
        map: function(t) {
            return this.pushStack(_.map(this, (function(e, i) {
                return t.call(e, i, e)
            })))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(_.grep(this, (function(t, e) {
                return (e + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(_.grep(this, (function(t, e) {
                return e % 2
            })))
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    }, _.extend = _.fn.extend = function() {
        var t, e, i, n, s, r, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || f(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = t[e], "__proto__" !== e && o !== n && (c && n && (_.isPlainObject(n) || (s = Array.isArray(n))) ? (i = o[e], r = s && !Array.isArray(i) ? [] : s || _.isPlainObject(i) ? i : {}, s = !1, o[e] = _.extend(c, r, n)) : void 0 !== n && (o[e] = n));
        return o
    }, _.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t) || (e = n(t)) && ("function" != typeof(i = d.call(e, "constructor") && e.constructor) || h.call(i) !== u))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t, e, i) {
            y(t, {
                nonce: e && e.nonce
            }, i)
        },
        each: function(t, e) {
            var i, n = 0;
            if (S(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        text: function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (!s)
                for (; e = t[n++];) i += _.text(e);
            return 1 === s || 11 === s ? t.textContent : 9 === s ? t.documentElement.textContent : 3 === s || 4 === s ? t.nodeValue : i
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (S(Object(t)) ? _.merge(i, "string" == typeof t ? [t] : t) : o.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : a.call(e, t, i)
        },
        isXMLDoc: function(t) {
            var e = t && t.namespaceURI,
                i = t && (t.ownerDocument || t).documentElement;
            return !w.test(e || i && i.nodeName || "HTML")
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, r = t.length, o = !i; s < r; s++) !e(t[s], s) !== o && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, o = 0,
                a = [];
            if (S(t))
                for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && a.push(s);
            else
                for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
            return r(a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = i[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    }));
    var T = i.pop,
        M = i.sort,
        k = i.splice,
        C = "[\\x20\\t\\r\\n\\f]",
        P = new RegExp("^" + C + "+|((?:^|[^\\\\])(?:\\\\.)*)" + C + "+$", "g");
    _.contains = function(t, e) {
        var i = e && e.parentNode;
        return t === i || !(!i || 1 !== i.nodeType || !(t.contains ? t.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
    };
    var D = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function L(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }
    _.escapeSelector = function(t) {
        return (t + "").replace(D, L)
    };
    var A = m,
        O = o;
    ! function() {
        var e, n, r, o, l, c, h, u, f, g, m = O,
            v = _.expando,
            y = 0,
            b = 0,
            x = tt(),
            w = tt(),
            S = tt(),
            D = tt(),
            L = function(t, e) {
                return t === e && (l = !0), 0
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "(?:\\\\[\\da-fA-F]{1,6}" + C + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R = "\\[" + C + "*(" + z + ")(?:" + C + "*([*^$|!~]?=)" + C + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + C + "*\\]",
            F = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            $ = new RegExp(C + "+", "g"),
            j = new RegExp("^" + C + "*," + C + "*"),
            N = new RegExp("^" + C + "*([>+~]|" + C + ")" + C + "*"),
            H = new RegExp(C + "|>"),
            W = new RegExp(F),
            V = new RegExp("^" + z + "$"),
            B = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + C + "*(even|odd|(([+-]|)(\\d*)n|)" + C + "*(?:([+-]|)" + C + "*(\\d+)|))" + C + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + C + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + C + "*((?:-\\d)?\\d*)" + C + "*\\)|)(?=[^-]|$)", "i")
            },
            q = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            X = /[+~]/,
            U = new RegExp("\\\\[\\da-fA-F]{1,6}" + C + "?|\\\\([^\\r\\n\\f])", "g"),
            Q = function(t, e) {
                var i = "0x" + t.slice(1) - 65536;
                return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            K = function() {
                lt()
            },
            Z = ut((function(t) {
                return !0 === t.disabled && E(t, "fieldset")
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            m.apply(i = s.call(A.childNodes), A.childNodes), i[A.childNodes.length].nodeType
        } catch (e) {
            m = {
                apply: function(t, e) {
                    O.apply(t, s.call(e))
                },
                call: function(t) {
                    O.apply(t, s.call(arguments, 1))
                }
            }
        }

        function J(t, e, i, n) {
            var s, r, o, a, l, d, h, g = e && e.ownerDocument,
                y = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== y && 9 !== y && 11 !== y) return i;
            if (!n && (lt(e), e = e || c, u)) {
                if (11 !== y && (l = G.exec(t)))
                    if (s = l[1]) {
                        if (9 === y) {
                            if (!(o = e.getElementById(s))) return i;
                            if (o.id === s) return m.call(i, o), i
                        } else if (g && (o = g.getElementById(s)) && J.contains(e, o) && o.id === s) return m.call(i, o), i
                    } else {
                        if (l[2]) return m.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = l[3]) && e.getElementsByClassName) return m.apply(i, e.getElementsByClassName(s)), i
                    }
                if (!(D[t + " "] || f && f.test(t))) {
                    if (h = t, g = e, 1 === y && (H.test(t) || N.test(t))) {
                        for ((g = X.test(t) && at(e.parentNode) || e) == e && p.scope || ((a = e.getAttribute("id")) ? a = _.escapeSelector(a) : e.setAttribute("id", a = v)), r = (d = dt(t)).length; r--;) d[r] = (a ? "#" + a : ":scope") + " " + ht(d[r]);
                        h = d.join(",")
                    }
                    try {
                        return m.apply(i, g.querySelectorAll(h)), i
                    } catch (e) {
                        D(t, !0)
                    } finally {
                        a === v && e.removeAttribute("id")
                    }
                }
            }
            return yt(t.replace(P, "$1"), e, i, n)
        }

        function tt() {
            var t = [];
            return function e(i, s) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
            }
        }

        function et(t) {
            return t[v] = !0, t
        }

        function it(t) {
            var e = c.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function nt(t) {
            return function(e) {
                return E(e, "input") && e.type === t
            }
        }

        function st(t) {
            return function(e) {
                return (E(e, "input") || E(e, "button")) && e.type === t
            }
        }

        function rt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Z(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ot(t) {
            return et((function(e) {
                return e = +e, et((function(i, n) {
                    for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                }))
            }))
        }

        function at(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        function lt(t) {
            var e, i = t ? t.ownerDocument || t : A;
            return i != c && 9 === i.nodeType && i.documentElement && (h = (c = i).documentElement, u = !_.isXMLDoc(c), g = h.matches || h.webkitMatchesSelector || h.msMatchesSelector, h.msMatchesSelector && A != c && (e = c.defaultView) && e.top !== e && e.addEventListener("unload", K), p.getById = it((function(t) {
                return h.appendChild(t).id = _.expando, !c.getElementsByName || !c.getElementsByName(_.expando).length
            })), p.disconnectedMatch = it((function(t) {
                return g.call(t, "*")
            })), p.scope = it((function() {
                return c.querySelectorAll(":scope")
            })), p.cssHas = it((function() {
                try {
                    return c.querySelector(":has(*,:jqfake)"), !1
                } catch (t) {
                    return !0
                }
            })), p.getById ? (n.filter.ID = function(t) {
                var e = t.replace(U, Q);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, n.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && u) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (n.filter.ID = function(t) {
                var e = t.replace(U, Q);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, n.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && u) {
                    var i, n, s, r = e.getElementById(t);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                        for (s = e.getElementsByName(t), n = 0; r = s[n++];)
                            if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                    }
                    return []
                }
            }), n.find.TAG = function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : e.querySelectorAll(t)
            }, n.find.CLASS = function(t, e) {
                if (void 0 !== e.getElementsByClassName && u) return e.getElementsByClassName(t)
            }, f = [], it((function(t) {
                var e;
                h.appendChild(t).innerHTML = "<a id='" + v + "' href='' disabled='disabled'></a><select id='" + v + "-\r\\' disabled='disabled'><option selected=''></option></select>", t.querySelectorAll("[selected]").length || f.push("\\[" + C + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + v + "-]").length || f.push("~="), t.querySelectorAll("a#" + v + "+*").length || f.push(".#.+[+~]"), t.querySelectorAll(":checked").length || f.push(":checked"), (e = c.createElement("input")).setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"), (e = c.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || f.push("\\[" + C + "*name" + C + "*=" + C + "*(?:''|\"\")")
            })), p.cssHas || f.push(":has"), f = f.length && new RegExp(f.join("|")), L = function(t, e) {
                if (t === e) return l = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === c || t.ownerDocument == A && J.contains(A, t) ? -1 : e === c || e.ownerDocument == A && J.contains(A, e) ? 1 : o ? a.call(o, t) - a.call(o, e) : 0 : 4 & i ? -1 : 1)
            }), c
        }
        for (e in J.matches = function(t, e) {
                return J(t, null, null, e)
            }, J.matchesSelector = function(t, e) {
                if (lt(t), u && !D[e + " "] && (!f || !f.test(e))) try {
                    var i = g.call(t, e);
                    if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                    D(e, !0)
                }
                return 0 < J(e, c, null, [t]).length
            }, J.contains = function(t, e) {
                return (t.ownerDocument || t) != c && lt(t), _.contains(t, e)
            }, J.attr = function(t, e) {
                (t.ownerDocument || t) != c && lt(t);
                var i = n.attrHandle[e.toLowerCase()],
                    s = i && d.call(n.attrHandle, e.toLowerCase()) ? i(t, e, !u) : void 0;
                return void 0 !== s ? s : t.getAttribute(e)
            }, J.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, _.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (l = !p.sortStable, o = !p.sortStable && s.call(t, 0), M.call(t, L), l) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) k.call(t, i[n], 1)
                }
                return o = null, t
            }, _.fn.uniqueSort = function() {
                return this.pushStack(_.uniqueSort(s.apply(this)))
            }, (n = _.expr = {
                cacheLength: 50,
                createPseudo: et,
                match: B,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(U, Q), t[3] = (t[3] || t[4] || t[5] || "").replace(U, Q), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || J.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && J.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return B.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && W.test(i) && (e = dt(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(U, Q).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return E(t, e)
                        }
                    },
                    CLASS: function(t) {
                        var e = x[t + " "];
                        return e || (e = new RegExp("(^|" + C + ")" + t + "(" + C + "|$)")) && x(t, (function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var s = J.attr(n, t);
                            return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && -1 < s.indexOf(i) : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? -1 < (" " + s.replace($, " ") + " ").indexOf(i) : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var r = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, d, h, u, p, f = r !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                m = a && e.nodeName.toLowerCase(),
                                b = !l && !a,
                                x = !1;
                            if (g) {
                                if (r) {
                                    for (; f;) {
                                        for (h = e; h = h[f];)
                                            if (a ? E(h, m) : 1 === h.nodeType) return !1;
                                        p = f = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? g.firstChild : g.lastChild], o && b) {
                                    for (x = (u = (c = (d = g[v] || (g[v] = {}))[t] || [])[0] === y && c[1]) && c[2], h = u && g.childNodes[u]; h = ++u && h && h[f] || (x = u = 0) || p.pop();)
                                        if (1 === h.nodeType && ++x && h === e) {
                                            d[t] = [y, u, x];
                                            break
                                        }
                                } else if (b && (x = u = (c = (d = e[v] || (e[v] = {}))[t] || [])[0] === y && c[1]), !1 === x)
                                    for (;
                                        (h = ++u && h && h[f] || (x = u = 0) || p.pop()) && (!(a ? E(h, m) : 1 === h.nodeType) || !++x || (b && ((d = h[v] || (h[v] = {}))[t] = [y, x]), h !== e)););
                                return (x -= s) === n || x % n == 0 && 0 <= x / n
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || J.error("unsupported pseudo: " + t);
                        return s[v] ? s(e) : 1 < s.length ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? et((function(t, i) {
                            for (var n, r = s(t, e), o = r.length; o--;) t[n = a.call(t, r[o])] = !(i[n] = r[o])
                        })) : function(t) {
                            return s(t, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: et((function(t) {
                        var e = [],
                            i = [],
                            n = vt(t.replace(P, "$1"));
                        return n[v] ? et((function(t, e, i, s) {
                            for (var r, o = n(t, null, s, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                        })) : function(t, s, r) {
                            return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                        }
                    })),
                    has: et((function(t) {
                        return function(e) {
                            return 0 < J(t, e).length
                        }
                    })),
                    contains: et((function(t) {
                        return t = t.replace(U, Q),
                            function(e) {
                                return -1 < (e.textContent || _.text(e)).indexOf(t)
                            }
                    })),
                    lang: et((function(t) {
                        return V.test(t || "") || J.error("unsupported lang: " + t), t = t.replace(U, Q).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = u ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    })),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === h
                    },
                    focus: function(t) {
                        return t === function() {
                            try {
                                return c.activeElement
                            } catch (t) {}
                        }() && c.hasFocus() && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: rt(!1),
                    disabled: rt(!0),
                    checked: function(t) {
                        return E(t, "input") && !!t.checked || E(t, "option") && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return q.test(t.nodeName)
                    },
                    button: function(t) {
                        return E(t, "input") && "button" === t.type || E(t, "button")
                    },
                    text: function(t) {
                        var e;
                        return E(t, "input") && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ot((function() {
                        return [0]
                    })),
                    last: ot((function(t, e) {
                        return [e - 1]
                    })),
                    eq: ot((function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    })),
                    even: ot((function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    })),
                    odd: ot((function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    })),
                    lt: ot((function(t, e, i) {
                        var n;
                        for (n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                        return t
                    })),
                    gt: ot((function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[e] = nt(e);
        for (e in {
                submit: !0,
                reset: !0
            }) n.pseudos[e] = st(e);

        function ct() {}

        function dt(t, e) {
            var i, s, r, o, a, l, c, d = w[t + " "];
            if (d) return e ? 0 : d.slice(0);
            for (a = t, l = [], c = n.preFilter; a;) {
                for (o in i && !(s = j.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(r = [])), i = !1, (s = N.exec(a)) && (i = s.shift(), r.push({
                        value: i,
                        type: s[0].replace(P, " ")
                    }), a = a.slice(i.length)), n.filter) !(s = B[o].exec(a)) || c[o] && !(s = c[o](s)) || (i = s.shift(), r.push({
                    value: i,
                    type: o,
                    matches: s
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? J.error(t) : w(t, l).slice(0)
        }

        function ht(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function ut(t, e, i) {
            var n = e.dir,
                s = e.next,
                r = s || n,
                o = i && "parentNode" === r,
                a = b++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, s);
                return !1
            } : function(e, i, l) {
                var c, d, h = [y, a];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o)
                            if (d = e[v] || (e[v] = {}), s && E(e, s)) e = e[n] || e;
                            else {
                                if ((c = d[r]) && c[0] === y && c[1] === a) return h[2] = c[2];
                                if ((d[r] = h)[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function pt(t) {
            return 1 < t.length ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function ft(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, s) || (o.push(r), c && e.push(a)));
            return o
        }

        function gt(t, e, i, n, s, r) {
            return n && !n[v] && (n = gt(n)), s && !s[v] && (s = gt(s, r)), et((function(r, o, l, c) {
                var d, h, u, p, f = [],
                    g = [],
                    v = o.length,
                    y = r || function(t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++) J(t, e[n], i);
                        return i
                    }(e || "*", l.nodeType ? [l] : l, []),
                    b = !t || !r && e ? y : ft(y, f, t, l, c);
                if (i ? i(b, p = s || (r ? t : v || n) ? [] : o, l, c) : p = b, n)
                    for (d = ft(p, g), n(d, [], l, c), h = d.length; h--;)(u = d[h]) && (p[g[h]] = !(b[g[h]] = u));
                if (r) {
                    if (s || t) {
                        if (s) {
                            for (d = [], h = p.length; h--;)(u = p[h]) && d.push(b[h] = u);
                            s(null, p = [], d, c)
                        }
                        for (h = p.length; h--;)(u = p[h]) && -1 < (d = s ? a.call(r, u) : f[h]) && (r[d] = !(o[d] = u))
                    }
                } else p = ft(p === o ? p.splice(v, p.length) : p), s ? s(null, o, p, c) : m.apply(o, p)
            }))
        }

        function mt(t) {
            for (var e, i, s, o = t.length, l = n.relative[t[0].type], c = l || n.relative[" "], d = l ? 1 : 0, h = ut((function(t) {
                    return t === e
                }), c, !0), u = ut((function(t) {
                    return -1 < a.call(e, t)
                }), c, !0), p = [function(t, i, n) {
                    var s = !l && (n || i != r) || ((e = i).nodeType ? h(t, i, n) : u(t, i, n));
                    return e = null, s
                }]; d < o; d++)
                if (i = n.relative[t[d].type]) p = [ut(pt(p), i)];
                else {
                    if ((i = n.filter[t[d].type].apply(null, t[d].matches))[v]) {
                        for (s = ++d; s < o && !n.relative[t[s].type]; s++);
                        return gt(1 < d && pt(p), 1 < d && ht(t.slice(0, d - 1).concat({
                            value: " " === t[d - 2].type ? "*" : ""
                        })).replace(P, "$1"), i, d < s && mt(t.slice(d, s)), s < o && mt(t = t.slice(s)), s < o && ht(t))
                    }
                    p.push(i)
                }
            return pt(p)
        }

        function vt(t, e) {
            var i, s, o, a, l, d, h = [],
                p = [],
                f = S[t + " "];
            if (!f) {
                for (e || (e = dt(t)), i = e.length; i--;)(f = mt(e[i]))[v] ? h.push(f) : p.push(f);
                (f = S(t, (s = p, a = 0 < (o = h).length, l = 0 < s.length, d = function(t, e, i, d, h) {
                    var p, f, g, v = 0,
                        b = "0",
                        x = t && [],
                        w = [],
                        S = r,
                        E = t || l && n.find.TAG("*", h),
                        M = y += null == S ? 1 : Math.random() || .1,
                        k = E.length;
                    for (h && (r = e == c || e || h); b !== k && null != (p = E[b]); b++) {
                        if (l && p) {
                            for (f = 0, e || p.ownerDocument == c || (lt(p), i = !u); g = s[f++];)
                                if (g(p, e || c, i)) {
                                    m.call(d, p);
                                    break
                                }
                            h && (y = M)
                        }
                        a && ((p = !g && p) && v--, t && x.push(p))
                    }
                    if (v += b, a && b !== v) {
                        for (f = 0; g = o[f++];) g(x, w, e, i);
                        if (t) {
                            if (0 < v)
                                for (; b--;) x[b] || w[b] || (w[b] = T.call(d));
                            w = ft(w)
                        }
                        m.apply(d, w), h && !t && 0 < w.length && 1 < v + o.length && _.uniqueSort(d)
                    }
                    return h && (y = M, r = S), x
                }, a ? et(d) : d))).selector = t
            }
            return f
        }

        function yt(t, e, i, s) {
            var r, o, a, l, c, d = "function" == typeof t && t,
                h = !s && dt(t = d.selector || t);
            if (i = i || [], 1 === h.length) {
                if (2 < (o = h[0] = h[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === e.nodeType && u && n.relative[o[1].type]) {
                    if (!(e = (n.find.ID(a.matches[0].replace(U, Q), e) || [])[0])) return i;
                    d && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = B.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !n.relative[l = a.type]);)
                    if ((c = n.find[l]) && (s = c(a.matches[0].replace(U, Q), X.test(o[0].type) && at(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = s.length && ht(o))) return m.apply(i, s), i;
                        break
                    }
            }
            return (d || vt(t, h))(s, e, !u, i, !e || X.test(t) && at(e.parentNode) || e), i
        }
        ct.prototype = n.filters = n.pseudos, n.setFilters = new ct, p.sortStable = v.split("").sort(L).join("") === v, lt(), p.sortDetached = it((function(t) {
            return 1 & t.compareDocumentPosition(c.createElement("fieldset"))
        })), _.find = J, _.expr[":"] = _.expr.pseudos, _.unique = _.uniqueSort, J.compile = vt, J.select = yt, J.setDocument = lt, J.tokenize = dt, J.escape = _.escapeSelector, J.getText = _.text, J.isXML = _.isXMLDoc, J.selectors = _.expr, J.support = _.support, J.uniqueSort = _.uniqueSort
    }();
    var I = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && _(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        z = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        R = _.expr.match.needsContext,
        F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function $(t, e, i) {
        return f(e) ? _.grep(t, (function(t, n) {
            return !!e.call(t, n, t) !== i
        })) : e.nodeType ? _.grep(t, (function(t) {
            return t === e !== i
        })) : "string" != typeof e ? _.grep(t, (function(t) {
            return -1 < a.call(e, t) !== i
        })) : _.filter(e, t, i)
    }
    _.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? _.find.matchesSelector(n, t) ? [n] : [] : _.find.matches(t, _.grep(e, (function(t) {
            return 1 === t.nodeType
        })))
    }, _.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(_(t).filter((function() {
                for (e = 0; e < n; e++)
                    if (_.contains(s[e], this)) return !0
            })));
            for (i = this.pushStack([]), e = 0; e < n; e++) _.find(t, s[e], i);
            return 1 < n ? _.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack($(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack($(this, t || [], !0))
        },
        is: function(t) {
            return !!$(this, "string" == typeof t && R.test(t) ? _(t) : t || [], !1).length
        }
    });
    var j, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || j, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), F.test(n[1]) && _.isPlainObject(e))
                    for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = m.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== i.ready ? i.ready(t) : t(_) : _.makeArray(t, this)
    }).prototype = _.fn, j = _(m);
    var H = /^(?:parents|prev(?:Until|All))/,
        W = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function V(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    _.fn.extend({
        has: function(t) {
            var e = _(t, this),
                i = e.length;
            return this.filter((function() {
                for (var t = 0; t < i; t++)
                    if (_.contains(this, e[t])) return !0
            }))
        },
        closest: function(t, e) {
            var i, n = 0,
                s = this.length,
                r = [],
                o = "string" != typeof t && _(t);
            if (!R.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && _.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(1 < r.length ? _.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? a.call(_(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), _.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return I(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return I(t, "parentNode", i)
        },
        next: function(t) {
            return V(t, "nextSibling")
        },
        prev: function(t) {
            return V(t, "previousSibling")
        },
        nextAll: function(t) {
            return I(t, "nextSibling")
        },
        prevAll: function(t) {
            return I(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return I(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return I(t, "previousSibling", i)
        },
        siblings: function(t) {
            return z((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return z(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (E(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
        }
    }, (function(t, e) {
        _.fn[t] = function(i, n) {
            var s = _.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = _.filter(n, s)), 1 < this.length && (W[t] || _.uniqueSort(s), H.test(t) && s.reverse()), this.pushStack(s)
        }
    }));
    var B = /[^\x20\t\r\n\f]+/g;

    function q(t) {
        return t
    }

    function Y(t) {
        throw t
    }

    function G(t, e, i, n) {
        var s;
        try {
            t && f(s = t.promise) ? s.call(t).done(e).fail(i) : t && f(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    _.Callbacks = function(t) {
        var e, i;
        t = "string" == typeof t ? (e = t, i = {}, _.each(e.match(B) || [], (function(t, e) {
            i[e] = !0
        })), i) : _.extend({}, t);
        var n, s, r, o, a = [],
            l = [],
            c = -1,
            d = function() {
                for (o = o || t.once, r = n = !0; l.length; c = -1)
                    for (s = l.shift(); ++c < a.length;) !1 === a[c].apply(s[0], s[1]) && t.stopOnFalse && (c = a.length, s = !1);
                t.memory || (s = !1), n = !1, o && (a = s ? [] : "")
            },
            h = {
                add: function() {
                    return a && (s && !n && (c = a.length - 1, l.push(s)), function e(i) {
                        _.each(i, (function(i, n) {
                            f(n) ? t.unique && h.has(n) || a.push(n) : n && n.length && "string" !== b(n) && e(n)
                        }))
                    }(arguments), s && !n && d()), this
                },
                remove: function() {
                    return _.each(arguments, (function(t, e) {
                        for (var i; - 1 < (i = _.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
                    })), this
                },
                has: function(t) {
                    return t ? -1 < _.inArray(t, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = l = [], a = s = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = l = [], s || n || (a = s = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || d()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return h
    }, _.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return s.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return _.Deferred((function(e) {
                            _.each(i, (function(i, n) {
                                var s = f(t[n[4]]) && t[n[4]];
                                r[n[1]]((function() {
                                    var t = s && s.apply(this, arguments);
                                    t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    },
                    then: function(e, n, s) {
                        var r = 0;

                        function o(e, i, n, s) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var t, c;
                                        if (!(e < r)) {
                                            if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = t && ("object" == typeof t || "function" == typeof t) && t.then, f(c) ? s ? c.call(t, o(r, i, q, s), o(r, i, Y, s)) : (r++, c.call(t, o(r, i, q, s), o(r, i, Y, s), o(r, i, q, i.notifyWith))) : (n !== q && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                        }
                                    },
                                    d = s ? c : function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, d.error), r <= e + 1 && (n !== Y && (a = void 0, l = [t]), i.rejectWith(a, l))
                                        }
                                    };
                                e ? d() : (_.Deferred.getErrorHook ? d.error = _.Deferred.getErrorHook() : _.Deferred.getStackHook && (d.error = _.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        return _.Deferred((function(t) {
                            i[0][3].add(o(0, t, f(s) ? s : q, t.notifyWith)), i[1][3].add(o(0, t, f(e) ? e : q)), i[2][3].add(o(0, t, f(n) ? n : Y))
                        })).promise()
                    },
                    promise: function(t) {
                        return null != t ? _.extend(t, s) : s
                    }
                },
                r = {};
            return _.each(i, (function(t, e) {
                var o = e[2],
                    a = e[5];
                s[e[1]] = o.add, a && o.add((function() {
                    n = a
                }), i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), o.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = o.fireWith
            })), s.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                r = s.call(arguments),
                o = _.Deferred(),
                a = function(t) {
                    return function(i) {
                        n[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : i, --e || o.resolveWith(n, r)
                    }
                };
            if (e <= 1 && (G(t, o.done(a(i)).resolve, o.reject, !e), "pending" === o.state() || f(r[i] && r[i].then))) return o.then();
            for (; i--;) G(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && X.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, _.readyException = function(e) {
        t.setTimeout((function() {
            throw e
        }))
    };
    var U = _.Deferred();

    function Q() {
        m.removeEventListener("DOMContentLoaded", Q), t.removeEventListener("load", Q), _.ready()
    }
    _.fn.ready = function(t) {
        return U.then(t).catch((function(t) {
            _.readyException(t)
        })), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0) !== t && 0 < --_.readyWait || U.resolveWith(m, [_])
        }
    }), _.ready.then = U.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(_.ready) : (m.addEventListener("DOMContentLoaded", Q), t.addEventListener("load", Q));
    var K = function(t, e, i, n, s, r, o) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === b(i))
                for (a in s = !0, i) K(t, e, a, i[a], !0, r, o);
            else if (void 0 !== n && (s = !0, f(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(_(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : r
        },
        Z = /^-ms-/,
        J = /-([a-z])/g;

    function tt(t, e) {
        return e.toUpperCase()
    }

    function et(t) {
        return t.replace(Z, "ms-").replace(J, tt)
    }
    var it = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function nt() {
        this.expando = _.expando + nt.uid++
    }
    nt.uid = 1, nt.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, it(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[et(e)] = i;
            else
                for (n in e) s[et(n)] = e[n];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][et(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(et) : (e = et(e)) in n ? [e] : e.match(B) || []).length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || _.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !_.isEmptyObject(e)
        }
    };
    var st = new nt,
        rt = new nt,
        ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        at = /[A-Z]/g;

    function lt(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(at, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : ot.test(s) ? JSON.parse(s) : s)
                } catch (t) {}
                rt.set(t, e, i)
            } else i = void 0;
        return i
    }
    _.extend({
        hasData: function(t) {
            return rt.hasData(t) || st.hasData(t)
        },
        data: function(t, e, i) {
            return rt.access(t, e, i)
        },
        removeData: function(t, e) {
            rt.remove(t, e)
        },
        _data: function(t, e, i) {
            return st.access(t, e, i)
        },
        _removeData: function(t, e) {
            st.remove(t, e)
        }
    }), _.fn.extend({
        data: function(t, e) {
            var i, n, s, r = this[0],
                o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = rt.get(r), 1 === r.nodeType && !st.get(r, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = et(n.slice(5)), lt(r, n, s[n]));
                    st.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each((function() {
                rt.set(this, t)
            })) : K(this, (function(e) {
                var i;
                if (r && void 0 === e) return void 0 !== (i = rt.get(r, t)) || void 0 !== (i = lt(r, t)) ? i : void 0;
                this.each((function() {
                    rt.set(this, t, e)
                }))
            }), null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each((function() {
                rt.remove(this, t)
            }))
        }
    }), _.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = st.get(t, e), i && (!n || Array.isArray(i) ? n = st.access(t, e, _.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = _.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = _._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, (function() {
                _.dequeue(t, e)
            }), r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return st.get(t, i) || st.access(t, i, {
                empty: _.Callbacks("once memory").add((function() {
                    st.remove(t, [e + "queue", i])
                }))
            })
        }
    }), _.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? _.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                var i = _.queue(this, t, e);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && _.dequeue(this, t)
            }))
        },
        dequeue: function(t) {
            return this.each((function() {
                _.dequeue(this, t)
            }))
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = _.Deferred(),
                r = this,
                o = this.length,
                a = function() {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = st.get(r[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        dt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
        ht = ["Top", "Right", "Bottom", "Left"],
        ut = m.documentElement,
        pt = function(t) {
            return _.contains(t.ownerDocument, t)
        },
        ft = {
            composed: !0
        };
    ut.getRootNode && (pt = function(t) {
        return _.contains(t.ownerDocument, t) || t.getRootNode(ft) === t.ownerDocument
    });
    var gt = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && pt(t) && "none" === _.css(t, "display")
    };

    function mt(t, e, i, n) {
        var s, r, o = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return _.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (_.cssNumber[e] ? "" : "px"),
            d = t.nodeType && (_.cssNumber[e] || "px" !== c && +l) && dt.exec(_.css(t, e));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; o--;) _.style(t, e, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (o = 0), d /= r;
            d *= 2, _.style(t, e, d + c), i = i || []
        }
        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s
    }
    var vt = {};

    function yt(t, e) {
        for (var i, n, s, r, o, a, l, c = [], d = 0, h = t.length; d < h; d++)(n = t[d]).style && (i = n.style.display, e ? ("none" === i && (c[d] = st.get(n, "display") || null, c[d] || (n.style.display = "")), "" === n.style.display && gt(n) && (c[d] = (l = o = r = void 0, o = (s = n).ownerDocument, a = s.nodeName, (l = vt[a]) || (r = o.body.appendChild(o.createElement(a)), l = _.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), vt[a] = l)))) : "none" !== i && (c[d] = "none", st.set(n, "display", i)));
        for (d = 0; d < h; d++) null != c[d] && (t[d].style.display = c[d]);
        return t
    }
    _.fn.extend({
        show: function() {
            return yt(this, !0)
        },
        hide: function() {
            return yt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                gt(this) ? _(this).show() : _(this).hide()
            }))
        }
    });
    var bt, xt, wt = /^(?:checkbox|radio)$/i,
        _t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        St = /^$|^module$|\/(?:java|ecma)script/i;
    bt = m.createDocumentFragment().appendChild(m.createElement("div")), (xt = m.createElement("input")).setAttribute("type", "radio"), xt.setAttribute("checked", "checked"), xt.setAttribute("name", "t"), bt.appendChild(xt), p.checkClone = bt.cloneNode(!0).cloneNode(!0).lastChild.checked, bt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!bt.cloneNode(!0).lastChild.defaultValue, bt.innerHTML = "<option></option>", p.option = !!bt.lastChild;
    var Et = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Tt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? _.merge([t], i) : i
    }

    function Mt(t, e) {
        for (var i = 0, n = t.length; i < n; i++) st.set(t[i], "globalEval", !e || st.get(e[i], "globalEval"))
    }
    Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead, Et.th = Et.td, p.option || (Et.optgroup = Et.option = [1, "<select multiple='multiple'>", "</select>"]);
    var kt = /<|&#?\w+;/;

    function Ct(t, e, i, n, s) {
        for (var r, o, a, l, c, d, h = e.createDocumentFragment(), u = [], p = 0, f = t.length; p < f; p++)
            if ((r = t[p]) || 0 === r)
                if ("object" === b(r)) _.merge(u, r.nodeType ? [r] : r);
                else if (kt.test(r)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (_t.exec(r) || ["", ""])[1].toLowerCase(), l = Et[a] || Et._default, o.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], d = l[0]; d--;) o = o.lastChild;
            _.merge(u, o.childNodes), (o = h.firstChild).textContent = ""
        } else u.push(e.createTextNode(r));
        for (h.textContent = "", p = 0; r = u[p++];)
            if (n && -1 < _.inArray(r, n)) s && s.push(r);
            else if (c = pt(r), o = Tt(h.appendChild(r), "script"), c && Mt(o), i)
            for (d = 0; r = o[d++];) St.test(r.type || "") && i.push(r);
        return h
    }
    var Pt = /^([^.]*)(?:\.(.+)|)/;

    function Dt() {
        return !0
    }

    function Lt() {
        return !1
    }

    function At(t, e, i, n, s, r) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) At(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Lt;
        else if (!s) return t;
        return 1 === r && (o = s, (s = function(t) {
            return _().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = _.guid++)), t.each((function() {
            _.event.add(this, e, s, n, i)
        }))
    }

    function Ot(t, e, i) {
        i ? (st.set(t, e, !1), _.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var i, n = st.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (n)(_.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (n = s.call(arguments), st.set(this, e, n), this[e](), i = st.get(this, e), st.set(this, e, !1), n !== i) return t.stopImmediatePropagation(), t.preventDefault(), i
                } else n && (st.set(this, e, _.event.trigger(n[0], n.slice(1), this)), t.stopPropagation(), t.isImmediatePropagationStopped = Dt)
            }
        })) : void 0 === st.get(t, e) && _.event.add(t, e, Dt)
    }
    _.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, o, a, l, c, d, h, u, p, f, g, m = st.get(t);
            if (it(t))
                for (i.handler && (i = (r = i).handler, s = r.selector), s && _.find.matchesSelector(ut, s), i.guid || (i.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function(e) {
                        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(B) || [""]).length; c--;) p = g = (a = Pt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = _.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = _.event.special[p] || {}, d = _.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && _.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (u = l[p]) || ((u = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, o) || t.addEventListener && t.addEventListener(p, o)), h.add && (h.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, d) : u.push(d), _.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var r, o, a, l, c, d, h, u, p, f, g, m = st.hasData(t) && st.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(B) || [""]).length; c--;)
                    if (p = g = (a = Pt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = _.event.special[p] || {}, u = l[p = (n ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = u.length; r--;) d = u[r], !s && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (u.splice(r, 1), d.selector && u.delegateCount--, h.remove && h.remove.call(t, d));
                        o && !u.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || _.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) _.event.remove(t, p + e[c], i, n, !0);
                _.isEmptyObject(l) && st.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, s, r, o, a = new Array(arguments.length),
                l = _.event.fix(t),
                c = (st.get(this, "events") || Object.create(null))[l.type] || [],
                d = _.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                for (o = _.event.handlers.call(this, l, c), e = 0;
                    (s = o[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((_.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, r, o, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], o = {}, i = 0; i < l; i++) void 0 === o[s = (n = e[i]).selector + " "] && (o[s] = n.needsContext ? -1 < _(s, this).index(c) : _.find(s, this, null, [c]).length), o[s] && r.push(n);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: f(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[_.expando] ? t : new _.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return wt.test(e.type) && e.click && E(e, "input") && Ot(e, "click", !0), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return wt.test(e.type) && e.click && E(e, "input") && Ot(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return wt.test(e.type) && e.click && E(e, "input") && st.get(e, "click") || E(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, _.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, _.Event = function(t, e) {
        if (!(this instanceof _.Event)) return new _.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Dt : Lt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Lt,
        isPropagationStopped: Lt,
        isImmediatePropagationStopped: Lt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Dt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Dt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Dt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        function i(t) {
            if (m.documentMode) {
                var i = st.get(this, "handle"),
                    n = _.event.fix(t);
                n.type = "focusin" === t.type ? "focus" : "blur", n.isSimulated = !0, i(t), n.target === n.currentTarget && i(n)
            } else _.event.simulate(e, t.target, _.event.fix(t))
        }
        _.event.special[t] = {
            setup: function() {
                var n;
                if (Ot(this, t, !0), !m.documentMode) return !1;
                (n = st.get(this, e)) || this.addEventListener(e, i), st.set(this, e, (n || 0) + 1)
            },
            trigger: function() {
                return Ot(this, t), !0
            },
            teardown: function() {
                var t;
                if (!m.documentMode) return !1;
                (t = st.get(this, e) - 1) ? st.set(this, e, t): (this.removeEventListener(e, i), st.remove(this, e))
            },
            _default: function(e) {
                return st.get(e.target, t)
            },
            delegateType: e
        }, _.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this,
                    s = m.documentMode ? this : n,
                    r = st.get(s, e);
                r || (m.documentMode ? this.addEventListener(e, i) : n.addEventListener(t, i, !0)), st.set(s, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this,
                    s = m.documentMode ? this : n,
                    r = st.get(s, e) - 1;
                r ? st.set(s, e, r) : (m.documentMode ? this.removeEventListener(e, i) : n.removeEventListener(t, i, !0), st.remove(s, e))
            }
        }
    })), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(t, e) {
        _.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget,
                    s = t.handleObj;
                return n && (n === this || _.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    })), _.fn.extend({
        on: function(t, e, i, n) {
            return At(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return At(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, _(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Lt), this.each((function() {
                _.event.remove(this, t, i, e)
            }))
        }
    });
    var It = /<script|<style|<link/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Ft(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
    }

    function $t(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function jt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Nt(t, e) {
        var i, n, s, r, o, a;
        if (1 === e.nodeType) {
            if (st.hasData(t) && (a = st.get(t).events))
                for (s in st.remove(e, "handle events"), a)
                    for (i = 0, n = a[s].length; i < n; i++) _.event.add(e, s, a[s][i]);
            rt.hasData(t) && (r = rt.access(t), o = _.extend({}, r), rt.set(e, o))
        }
    }

    function Ht(t, e, i, n) {
        e = r(e);
        var s, o, a, l, c, d, h = 0,
            u = t.length,
            g = u - 1,
            m = e[0],
            v = f(m);
        if (v || 1 < u && "string" == typeof m && !p.checkClone && zt.test(m)) return t.each((function(s) {
            var r = t.eq(s);
            v && (e[0] = m.call(this, s, r.html())), Ht(r, e, i, n)
        }));
        if (u && (o = (s = Ct(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
            for (l = (a = _.map(Tt(s, "script"), $t)).length; h < u; h++) c = s, h !== g && (c = _.clone(c, !0, !0), l && _.merge(a, Tt(c, "script"))), i.call(t[h], c, h);
            if (l)
                for (d = a[a.length - 1].ownerDocument, _.map(a, jt), h = 0; h < l; h++) c = a[h], St.test(c.type || "") && !st.access(c, "globalEval") && _.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, d) : y(c.textContent.replace(Rt, ""), c, d))
        }
        return t
    }

    function Wt(t, e, i) {
        for (var n, s = e ? _.filter(e, t) : t, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || _.cleanData(Tt(n)), n.parentNode && (i && pt(n) && Mt(Tt(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    _.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, i) {
            var n, s, r, o, a, l, c, d = t.cloneNode(!0),
                h = pt(t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t)))
                for (o = Tt(d), n = 0, s = (r = Tt(t)).length; n < s; n++) a = r[n], "input" === (c = (l = o[n]).nodeName.toLowerCase()) && wt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (r = r || Tt(t), o = o || Tt(d), n = 0, s = r.length; n < s; n++) Nt(r[n], o[n]);
                else Nt(t, d);
            return 0 < (o = Tt(d, "script")).length && Mt(o, !h && Tt(t, "script")), d
        },
        cleanData: function(t) {
            for (var e, i, n, s = _.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (it(i)) {
                    if (e = i[st.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? _.event.remove(i, n) : _.removeEvent(i, n, e.handle);
                        i[st.expando] = void 0
                    }
                    i[rt.expando] && (i[rt.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(t) {
            return Wt(this, t, !0)
        },
        remove: function(t) {
            return Wt(this, t)
        },
        text: function(t) {
            return K(this, (function(t) {
                return void 0 === t ? _.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        },
        append: function() {
            return Ht(this, arguments, (function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ft(this, t).appendChild(t)
            }))
        },
        prepend: function() {
            return Ht(this, arguments, (function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Ft(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        },
        before: function() {
            return Ht(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        },
        after: function() {
            return Ht(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(Tt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                return _.clone(this, t, e)
            }))
        },
        html: function(t) {
            return K(this, (function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !It.test(t) && !Et[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = _.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (_.cleanData(Tt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Ht(this, arguments, (function(e) {
                var i = this.parentNode;
                _.inArray(this, t) < 0 && (_.cleanData(Tt(this)), i && i.replaceChild(e, this))
            }), t)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(t, e) {
        _.fn[t] = function(t) {
            for (var i, n = [], s = _(t), r = s.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), _(s[a])[e](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    }));
    var Vt = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
        Bt = /^--/,
        qt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        Yt = function(t, e, i) {
            var n, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            for (s in n = i.call(t), e) t.style[s] = r[s];
            return n
        },
        Gt = new RegExp(ht.join("|"), "i");

    function Xt(t, e, i) {
        var n, s, r, o, a = Bt.test(e),
            l = t.style;
        return (i = i || qt(t)) && (o = i.getPropertyValue(e) || i[e], a && o && (o = o.replace(P, "$1") || void 0), "" !== o || pt(t) || (o = _.style(t, e)), !p.pixelBoxStyles() && Vt.test(o) && Gt.test(e) && (n = l.width, s = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = i.width, l.width = n, l.minWidth = s, l.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function Ut(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ut.appendChild(c).appendChild(d);
                var e = t.getComputedStyle(d);
                n = "1%" !== e.top, l = 12 === i(e.marginLeft), d.style.right = "60%", o = 36 === i(e.right), s = 36 === i(e.width), d.style.position = "absolute", r = 12 === i(d.offsetWidth / 3), ut.removeChild(c), d = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }
        var n, s, r, o, a, l, c = m.createElement("div"),
            d = m.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === d.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function() {
                return e(), s
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), r
            },
            reliableTrDimensions: function() {
                var e, i, n, s;
                return null == a && (e = m.createElement("table"), i = m.createElement("tr"), n = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "box-sizing:content-box;border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", ut.appendChild(e).appendChild(i).appendChild(n), s = t.getComputedStyle(i), a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === i.offsetHeight, ut.removeChild(e)), a
            }
        }))
    }();
    var Qt = ["Webkit", "Moz", "ms"],
        Kt = m.createElement("div").style,
        Zt = {};

    function Jt(t) {
        return _.cssProps[t] || Zt[t] || (t in Kt ? t : Zt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = Qt.length; i--;)
                if ((t = Qt[i] + e) in Kt) return t
        }(t) || t)
    }
    var te = /^(none|table(?!-c[ea]).+)/,
        ee = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ie = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function ne(t, e, i) {
        var n = dt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function se(t, e, i, n, s, r) {
        var o = "width" === e ? 1 : 0,
            a = 0,
            l = 0,
            c = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === i && (c += _.css(t, i + ht[o], !0, s)), n ? ("content" === i && (l -= _.css(t, "padding" + ht[o], !0, s)), "margin" !== i && (l -= _.css(t, "border" + ht[o] + "Width", !0, s))) : (l += _.css(t, "padding" + ht[o], !0, s), "padding" !== i ? l += _.css(t, "border" + ht[o] + "Width", !0, s) : a += _.css(t, "border" + ht[o] + "Width", !0, s));
        return !n && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l + c
    }

    function re(t, e, i) {
        var n = qt(t),
            s = (!p.boxSizingReliable() || i) && "border-box" === _.css(t, "boxSizing", !1, n),
            r = s,
            o = Xt(t, e, n),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Vt.test(o)) {
            if (!i) return o;
            o = "auto"
        }
        return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && E(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === _.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === _.css(t, "boxSizing", !1, n), (r = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + se(t, e, i || (s ? "border" : "content"), r, n, o) + "px"
    }

    function oe(t, e, i, n, s) {
        return new oe.prototype.init(t, e, i, n, s)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Xt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = et(e),
                    l = Bt.test(e),
                    c = t.style;
                if (l || (e = Jt(a)), o = _.cssHooks[e] || _.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : c[e];
                "string" == (r = typeof i) && (s = dt.exec(i)) && s[1] && (i = mt(t, e, s), r = "number"), null != i && i == i && ("number" !== r || l || (i += s && s[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function(t, e, i, n) {
            var s, r, o, a = et(e);
            return Bt.test(e) || (e = Jt(a)), (o = _.cssHooks[e] || _.cssHooks[a]) && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = Xt(t, e, n)), "normal" === s && e in ie && (s = ie[e]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
        }
    }), _.each(["height", "width"], (function(t, e) {
        _.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return !te.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? re(t, e, n) : Yt(t, ee, (function() {
                    return re(t, e, n)
                }))
            },
            set: function(t, i, n) {
                var s, r = qt(t),
                    o = !p.scrollboxSize() && "absolute" === r.position,
                    a = (o || n) && "border-box" === _.css(t, "boxSizing", !1, r),
                    l = n ? se(t, e, n, a, r) : 0;
                return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - se(t, e, "border", !1, r) - .5)), l && (s = dt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = _.css(t, e)), ne(0, i, l)
            }
        }
    })), _.cssHooks.marginLeft = Ut(p.reliableMarginLeft, (function(t, e) {
        if (e) return (parseFloat(Xt(t, "marginLeft")) || t.getBoundingClientRect().left - Yt(t, {
            marginLeft: 0
        }, (function() {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(t, e) {
        _.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + ht[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, "margin" !== t && (_.cssHooks[t + e].set = ne)
    })), _.fn.extend({
        css: function(t, e) {
            return K(this, (function(t, e, i) {
                var n, s, r = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (n = qt(t), s = e.length; o < s; o++) r[e[o]] = _.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? _.style(t, e, i) : _.css(t, e)
            }), t, e, 1 < arguments.length)
        }
    }), ((_.Tween = oe).prototype = {
        constructor: oe,
        init: function(t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (_.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = oe.propHooks[this.prop];
            return t && t.get ? t.get(this) : oe.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = oe.propHooks[this.prop];
            return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : oe.propHooks._default.set(this), this
        }
    }).init.prototype = oe.prototype, (oe.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !_.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = oe.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, _.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = oe.prototype.init, _.fx.step = {};
    var ae, le, ce, de, he = /^(?:toggle|show|hide)$/,
        ue = /queueHooks$/;

    function pe() {
        le && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(pe) : t.setTimeout(pe, _.fx.interval), _.fx.tick())
    }

    function fe() {
        return t.setTimeout((function() {
            ae = void 0
        })), ae = Date.now()
    }

    function ge(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = ht[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function me(t, e, i) {
        for (var n, s = (ve.tweeners[e] || []).concat(ve.tweeners["*"]), r = 0, o = s.length; r < o; r++)
            if (n = s[r].call(i, e, t)) return n
    }

    function ve(t, e, i) {
        var n, s, r = 0,
            o = ve.prefilters.length,
            a = _.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (s) return !1;
                for (var e = ae || fe(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(n);
                return a.notifyWith(t, [c, n, i]), n < 1 && o ? i : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: _.extend({}, e),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ae || fe(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = _.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            d = c.props;
        for (function(t, e) {
                var i, n, s, r, o;
                for (i in t)
                    if (s = e[n = et(i)], r = t[i], Array.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (o = _.cssHooks[n]) && "expand" in o)
                        for (i in r = o.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = s);
                    else e[n] = s
            }(d, c.opts.specialEasing); r < o; r++)
            if (n = ve.prefilters[r].call(c, t, d, c.opts)) return f(n.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return _.map(d, me, c), f(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(ve, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return mt(i.elem, t, dt.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            f(t) ? (e = t, t = ["*"]) : t = t.match(B);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], ve.tweeners[i] = ve.tweeners[i] || [], ve.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n, s, r, o, a, l, c, d, h = "width" in e || "height" in e,
                u = this,
                p = {},
                f = t.style,
                g = t.nodeType && gt(t),
                m = st.get(t, "fxshow");
            for (n in i.queue || (null == (o = _._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a()
                }), o.unqueued++, u.always((function() {
                    u.always((function() {
                        o.unqueued--, _.queue(t, "fx").length || o.empty.fire()
                    }))
                }))), e)
                if (s = e[n], he.test(s)) {
                    if (delete e[n], r = r || "toggle" === s, s === (g ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        g = !0
                    }
                    p[n] = m && m[n] || _.style(t, n)
                }
            if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(p))
                for (n in h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = st.get(t, "display")), "none" === (d = _.css(t, "display")) && (c ? d = c : (yt([t], !0), c = t.style.display || c, d = _.css(t, "display"), yt([t]))), ("inline" === d || "inline-block" === d && null != c) && "none" === _.css(t, "float") && (l || (u.done((function() {
                        f.display = c
                    })), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always((function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    }))), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = st.access(t, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && yt([t], !0), u.done((function() {
                    for (n in g || yt([t]), st.remove(t, "fxshow"), p) _.style(t, n, p[n])
                }))), l = me(g ? m[n] : 0, n, u), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? ve.prefilters.unshift(t) : ve.prefilters.push(t)
        }
    }), _.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? _.extend({}, t) : {
            complete: i || !i && e || f(t) && t,
            duration: t,
            easing: i && e || e && !f(e) && e
        };
        return _.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _.fx.speeds ? n.duration = _.fx.speeds[n.duration] : n.duration = _.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            f(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue)
        }, n
    }, _.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(gt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = _.isEmptyObject(t),
                r = _.speed(e, i, n),
                o = function() {
                    var e = ve(this, _.extend({}, t), r);
                    (s || st.get(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                var e = !0,
                    s = null != t && t + "queueHooks",
                    r = _.timers,
                    o = st.get(this);
                if (s) o[s] && o[s].stop && n(o[s]);
                else
                    for (s in o) o[s] && o[s].stop && ue.test(s) && n(o[s]);
                for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                !e && i || _.dequeue(this, t)
            }))
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each((function() {
                var e, i = st.get(this),
                    n = i[t + "queue"],
                    s = i[t + "queueHooks"],
                    r = _.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, _.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            }))
        }
    }), _.each(["toggle", "show", "hide"], (function(t, e) {
        var i = _.fn[e];
        _.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ge(e, !0), t, n, s)
        }
    })), _.each({
        slideDown: ge("show"),
        slideUp: ge("hide"),
        slideToggle: ge("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(t, e) {
        _.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    })), _.timers = [], _.fx.tick = function() {
        var t, e = 0,
            i = _.timers;
        for (ae = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || _.fx.stop(), ae = void 0
    }, _.fx.timer = function(t) {
        _.timers.push(t), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        le || (le = !0, pe())
    }, _.fx.stop = function() {
        le = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(e, i) {
        return e = _.fx && _.fx.speeds[e] || e, i = i || "fx", this.queue(i, (function(i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(s)
            }
        }))
    }, ce = m.createElement("input"), de = m.createElement("select").appendChild(m.createElement("option")), ce.type = "checkbox", p.checkOn = "" !== ce.value, p.optSelected = de.selected, (ce = m.createElement("input")).value = "t", ce.type = "radio", p.radioValue = "t" === ce.value;
    var ye, be = _.expr.attrHandle;
    _.fn.extend({
        attr: function(t, e) {
            return K(this, _.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each((function() {
                _.removeAttr(this, t)
            }))
        }
    }), _.extend({
        attr: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? _.prop(t, e, i) : (1 === r && _.isXMLDoc(t) || (s = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? ye : void 0)), void 0 !== i ? null === i ? void _.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = _.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!p.radioValue && "radio" === e && E(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0,
                s = e && e.match(B);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), ye = {
        set: function(t, e, i) {
            return !1 === e ? _.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), (function(t, e) {
        var i = be[e] || _.find.attr;
        be[e] = function(t, e, n) {
            var s, r, o = e.toLowerCase();
            return n || (r = be[o], be[o] = s, s = null != i(t, e, n) ? o : null, be[o] = r), s
        }
    }));
    var xe = /^(?:input|select|textarea|button)$/i,
        we = /^(?:a|area)$/i;

    function _e(t) {
        return (t.match(B) || []).join(" ")
    }

    function Se(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Ee(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(B) || []
    }
    _.fn.extend({
        prop: function(t, e) {
            return K(this, _.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each((function() {
                delete this[_.propFix[t] || t]
            }))
        }
    }), _.extend({
        prop: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(t) || (e = _.propFix[e] || e, s = _.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = _.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : xe.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        _.propFix[this.toLowerCase()] = this
    })), _.fn.extend({
        addClass: function(t) {
            var e, i, n, s, r, o;
            return f(t) ? this.each((function(e) {
                _(this).addClass(t.call(this, e, Se(this)))
            })) : (e = Ee(t)).length ? this.each((function() {
                if (n = Se(this), i = 1 === this.nodeType && " " + _e(n) + " ") {
                    for (r = 0; r < e.length; r++) s = e[r], i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                    o = _e(i), n !== o && this.setAttribute("class", o)
                }
            })) : this
        },
        removeClass: function(t) {
            var e, i, n, s, r, o;
            return f(t) ? this.each((function(e) {
                _(this).removeClass(t.call(this, e, Se(this)))
            })) : arguments.length ? (e = Ee(t)).length ? this.each((function() {
                if (n = Se(this), i = 1 === this.nodeType && " " + _e(n) + " ") {
                    for (r = 0; r < e.length; r++)
                        for (s = e[r]; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                    o = _e(i), n !== o && this.setAttribute("class", o)
                }
            })) : this : this.attr("class", "")
        },
        toggleClass: function(t, e) {
            var i, n, s, r, o = typeof t,
                a = "string" === o || Array.isArray(t);
            return f(t) ? this.each((function(i) {
                _(this).toggleClass(t.call(this, i, Se(this), e), e)
            })) : "boolean" == typeof e && a ? e ? this.addClass(t) : this.removeClass(t) : (i = Ee(t), this.each((function() {
                if (a)
                    for (r = _(this), s = 0; s < i.length; s++) n = i[s], r.hasClass(n) ? r.removeClass(n) : r.addClass(n);
                else void 0 !== t && "boolean" !== o || ((n = Se(this)) && st.set(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === t ? "" : st.get(this, "__className__") || ""))
            })))
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + _e(Se(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var Te = /\r/g;
    _.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = f(t), this.each((function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, _(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = _.map(s, (function(t) {
                    return null == t ? "" : t + ""
                }))), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            }))) : s ? (e = _.valHooks[s.type] || _.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(Te, "") : null == i ? "" : i : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = _.find.attr(t, "value");
                    return null != e ? e : _e(_.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options,
                        r = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? r + 1 : s.length;
                    for (n = r < 0 ? l : o ? r : 0; n < l; n++)
                        if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))) {
                            if (e = _(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, r = _.makeArray(e), o = s.length; o--;)((n = s[o]).selected = -1 < _.inArray(_.valHooks.option.get(n), r)) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), _.each(["radio", "checkbox"], (function() {
        _.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = -1 < _.inArray(_(t).val(), e)
            }
        }, p.checkOn || (_.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }));
    var Me = t.location,
        ke = {
            guid: Date.now()
        },
        Ce = /\?/;
    _.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = i && i.getElementsByTagName("parsererror")[0], i && !n || _.error("Invalid XML: " + (n ? _.map(n.childNodes, (function(t) {
            return t.textContent
        })).join("\n") : e)), i
    };
    var Pe = /^(?:focusinfocus|focusoutblur)$/,
        De = function(t) {
            t.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(e, i, n, s) {
            var r, o, a, l, c, h, u, p, v = [n || m],
                y = d.call(e, "type") ? e.type : e,
                b = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = p = a = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !Pe.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : _.makeArray(i, [e]), u = _.event.special[y] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !g(n)) {
                    for (l = u.delegateType || y, Pe.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), a = o;
                    a === (n.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0;
                    (o = v[r++]) && !e.isPropagationStopped();) p = o, e.type = 1 < r ? l : u.bindType || y, (h = (st.get(o, "events") || Object.create(null))[e.type] && st.get(o, "handle")) && h.apply(o, i), (h = c && o[c]) && h.apply && it(o) && (e.result = h.apply(o, i), !1 === e.result && e.preventDefault());
                return e.type = y, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(v.pop(), i) || !it(n) || c && f(n[y]) && !g(n) && ((a = n[c]) && (n[c] = null), _.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, De), n[y](), e.isPropagationStopped() && p.removeEventListener(y, De), _.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = _.extend(new _.Event, i, {
                type: t,
                isSimulated: !0
            });
            _.event.trigger(n, null, e)
        }
    }), _.fn.extend({
        trigger: function(t, e) {
            return this.each((function() {
                _.event.trigger(t, e, this)
            }))
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return _.event.trigger(t, e, i, !0)
        }
    });
    var Le = /\[\]$/,
        Ae = /\r?\n/g,
        Oe = /^(?:submit|button|image|reset|file)$/i,
        Ie = /^(?:input|select|textarea|keygen)/i;

    function ze(t, e, i, n) {
        var s;
        if (Array.isArray(e)) _.each(e, (function(e, s) {
            i || Le.test(t) ? n(t, s) : ze(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        }));
        else if (i || "object" !== b(e)) n(t, e);
        else
            for (s in e) ze(t + "[" + s + "]", e[s], i, n)
    }
    _.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                var i = f(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, (function() {
            s(this.name, this.value)
        }));
        else
            for (i in t) ze(i, t[i], e, s);
        return n.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var t = _.prop(this, "elements");
                return t ? _.makeArray(t) : this
            })).filter((function() {
                var t = this.type;
                return this.name && !_(this).is(":disabled") && Ie.test(this.nodeName) && !Oe.test(t) && (this.checked || !wt.test(t))
            })).map((function(t, e) {
                var i = _(this).val();
                return null == i ? null : Array.isArray(i) ? _.map(i, (function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ae, "\r\n")
                    }
                })) : {
                    name: e.name,
                    value: i.replace(Ae, "\r\n")
                }
            })).get()
        }
    });
    var Re = /%20/g,
        Fe = /#.*$/,
        $e = /([?&])_=[^&]*/,
        je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ne = /^(?:GET|HEAD)$/,
        He = /^\/\//,
        We = {},
        Ve = {},
        Be = "*/".concat("*"),
        qe = m.createElement("a");

    function Ye(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                r = e.toLowerCase().match(B) || [];
            if (f(i))
                for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Ge(t, e, i, n) {
        var s = {},
            r = t === Ve;

        function o(a) {
            var l;
            return s[a] = !0, _.each(t[a] || [], (function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            })), l
        }
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function Xe(t, e) {
        var i, n, s = _.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && _.extend(!0, t, n), t
    }
    qe.href = Me.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Xe(Xe(t, _.ajaxSettings), e) : Xe(_.ajaxSettings, t)
        },
        ajaxPrefilter: Ye(We),
        ajaxTransport: Ye(Ve),
        ajax: function(e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, s, r, o, a, l, c, d, h, u, p = _.ajaxSetup({}, i),
                f = p.context || p,
                g = p.context && (f.nodeType || f.jquery) ? _(f) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = p.statusCode || {},
                x = {},
                w = {},
                S = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!o)
                                for (o = {}; e = je.exec(r);) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = o[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) E.always(t[E.status]);
                            else
                                for (e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || S;
                        return n && n.abort(e), T(0, e), this
                    }
                };
            if (v.promise(E), p.url = ((e || p.url || Me.href) + "").replace(He, Me.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(B) || [""], null == p.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), Ge(We, p, i, E), c) return E;
            for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ne.test(p.type), s = p.url.replace(Fe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Re, "+")) : (u = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Ce.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace($e, "$1"), u = (Ce.test(s) ? "&" : "?") + "_=" + ke.guid++ + u), p.url = s + u), p.ifModified && (_.lastModified[s] && E.setRequestHeader("If-Modified-Since", _.lastModified[s]), _.etag[s] && E.setRequestHeader("If-None-Match", _.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, E, p) || c)) return E.abort();
            if (S = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), n = Ge(Ve, p, i, E)) {
                if (E.readyState = 1, d && g.trigger("ajaxSend", [E, p]), c) return E;
                p.async && 0 < p.timeout && (a = t.setTimeout((function() {
                    E.abort("timeout")
                }), p.timeout));
                try {
                    c = !1, n.send(x, T)
                } catch (e) {
                    if (c) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(e, i, o, l) {
                var h, u, m, x, w, S = i;
                c || (c = !0, a && t.clearTimeout(a), n = void 0, r = l || "", E.readyState = 0 < e ? 4 : 0, h = 200 <= e && e < 300 || 304 === e, o && (x = function(t, e, i) {
                    for (var n, s, r, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in a)
                            if (a[s] && a[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i) r = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            o || (o = s)
                        }
                        r = r || o
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(p, E, o)), !h && -1 < _.inArray("script", p.dataTypes) && _.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), x = function(t, e, i, n) {
                    var s, r, o, a, l, c = {},
                        d = t.dataTypes.slice();
                    if (d[1])
                        for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                    for (r = d.shift(); r;)
                        if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(o = c[l + " " + r] || c["* " + r]))
                            for (s in c)
                                if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, x, E, h), h ? (p.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (_.lastModified[s] = w), (w = E.getResponseHeader("etag")) && (_.etag[s] = w)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = x.state, u = x.data, h = !(m = x.error))) : (m = S, !e && S || (S = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (i || S) + "", h ? v.resolveWith(f, [u, S, E]) : v.rejectWith(f, [E, S, m]), E.statusCode(b), b = void 0, d && g.trigger(h ? "ajaxSuccess" : "ajaxError", [E, p, h ? u : m]), y.fireWith(f, [E, S]), d && (g.trigger("ajaxComplete", [E, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(t, e, i) {
            return _.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return _.get(t, void 0, e, "script")
        }
    }), _.each(["get", "post"], (function(t, e) {
        _[e] = function(t, i, n, s) {
            return f(i) && (s = s || n, n = i, i = void 0), _.ajax(_.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, _.isPlainObject(t) && t))
        }
    })), _.ajaxPrefilter((function(t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    })), _._evalUrl = function(t, e, i) {
        return _.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                _.globalEval(t, e, i)
            }
        })
    }, _.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (f(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        },
        wrapInner: function(t) {
            return f(t) ? this.each((function(e) {
                _(this).wrapInner(t.call(this, e))
            })) : this.each((function() {
                var e = _(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            }))
        },
        wrap: function(t) {
            var e = f(t);
            return this.each((function(i) {
                _(this).wrapAll(e ? t.call(this, i) : t)
            }))
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each((function() {
                _(this).replaceWith(this.childNodes)
            })), this
        }
    }), _.expr.pseudos.hidden = function(t) {
        return !_.expr.pseudos.visible(t)
    }, _.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Ue = {
            0: 200,
            1223: 204
        },
        Qe = _.ajaxSettings.xhr();
    p.cors = !!Qe && "withCredentials" in Qe, p.ajax = Qe = !!Qe, _.ajaxTransport((function(e) {
        var i, n;
        if (p.cors || Qe && !e.crossDomain) return {
            send: function(s, r) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(o, s[o]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ue[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout((function() {
                        i && n()
                    }))
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (i) throw s
                }
            },
            abort: function() {
                i && i()
            }
        }
    })), _.ajaxPrefilter((function(t) {
        t.crossDomain && (t.contents.script = !1)
    })), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return _.globalEval(t), t
            }
        }
    }), _.ajaxPrefilter("script", (function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), _.ajaxTransport("script", (function(t) {
        var e, i;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function(n, s) {
                e = _("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", i = function(t) {
                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                }), m.head.appendChild(e[0])
            },
            abort: function() {
                i && i()
            }
        }
    }));
    var Ke, Ze = [],
        Je = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ze.pop() || _.expando + "_" + ke.guid++;
            return this[t] = !0, t
        }
    }), _.ajaxPrefilter("json jsonp", (function(e, i, n) {
        var s, r, o, a = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Je, "$1" + s) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || _.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function() {
            o = arguments
        }, n.always((function() {
            void 0 === r ? _(t).removeProp(s) : t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, Ze.push(s)), o && f(r) && r(o[0]), o = r = void 0
        })), "script"
    })), p.createHTMLDocument = ((Ke = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ke.childNodes.length), _.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (p.createHTMLDocument ? ((n = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(n)) : e = m), r = !i && [], (s = F.exec(t)) ? [e.createElement(s[1])] : (s = Ct([t], e, r), r && r.length && _(r).remove(), _.merge([], s.childNodes)));
        var n, s, r
    }, _.fn.load = function(t, e, i) {
        var n, s, r, o = this,
            a = t.indexOf(" ");
        return -1 < a && (n = _e(t.slice(a)), t = t.slice(0, a)), f(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < o.length && _.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done((function(t) {
            r = arguments, o.html(n ? _("<div>").append(_.parseHTML(t)).find(n) : t)
        })).always(i && function(t, e) {
            o.each((function() {
                i.apply(this, r || [t.responseText, e, t])
            }))
        }), this
    }, _.expr.pseudos.animated = function(t) {
        return _.grep(_.timers, (function(e) {
            return t === e.elem
        })).length
    }, _.offset = {
        setOffset: function(t, e, i) {
            var n, s, r, o, a, l, c = _.css(t, "position"),
                d = _(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), r = _.css(t, "top"), l = _.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (o = (n = d.position()).top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), f(e) && (e = e.call(t, i, _.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : d.css(h)
        }
    }, _.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                _.offset.setOffset(this, t, e)
            }));
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(n, "position")) e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((s = _(t).offset()).top += _.css(t, "borderTopWidth", !0), s.left += _.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - s.top - _.css(n, "marginTop", !0),
                    left: e.left - s.left - _.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
                return t || ut
            }))
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, e) {
        var i = "pageYOffset" === e;
        _.fn[t] = function(n) {
            return K(this, (function(t, n, s) {
                var r;
                if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === s) return r ? r[e] : t[n];
                r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : t[n] = s
            }), t, n, arguments.length)
        }
    })), _.each(["top", "left"], (function(t, e) {
        _.cssHooks[e] = Ut(p.pixelPosition, (function(t, i) {
            if (i) return i = Xt(t, e), Vt.test(i) ? _(t).position()[e] + "px" : i
        }))
    })), _.each({
        Height: "height",
        Width: "width"
    }, (function(t, e) {
        _.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, (function(i, n) {
            _.fn[n] = function(s, r) {
                var o = arguments.length && (i || "boolean" != typeof s),
                    a = i || (!0 === s || !0 === r ? "margin" : "border");
                return K(this, (function(e, i, s) {
                    var r;
                    return g(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === s ? _.css(e, i, a) : _.style(e, i, s, a)
                }), e, o ? s : void 0, o)
            }
        }))
    })), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
        _.fn[e] = function(t) {
            return this.on(e, t)
        }
    })), _.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        hover: function(t, e) {
            return this.on("mouseenter", t).on("mouseleave", e || t)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
        _.fn[e] = function(t, i) {
            return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
        }
    }));
    var ti = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    _.proxy = function(t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), f(t)) return n = s.call(arguments, 2), (r = function() {
            return t.apply(e || this, n.concat(s.call(arguments)))
        }).guid = t.guid = t.guid || _.guid++, r
    }, _.holdReady = function(t) {
        t ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = f, _.isWindow = g, _.camelCase = et, _.type = b, _.now = Date.now, _.isNumeric = function(t) {
        var e = _.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, _.trim = function(t) {
        return null == t ? "" : (t + "").replace(ti, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return _
    }));
    var ei = t.jQuery,
        ii = t.$;
    return _.noConflict = function(e) {
        return t.$ === _ && (t.$ = ii), e && t.jQuery === _ && (t.jQuery = ei), _
    }, void 0 === e && (t.jQuery = t.$ = _), _
}));
var Swiper = function() {
    "use strict";

    function t(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function e(i, n) {
        void 0 === i && (i = {}), void 0 === n && (n = {}), Object.keys(n).forEach((s => {
            void 0 === i[s] ? i[s] = n[s] : t(n[s]) && t(i[s]) && Object.keys(n[s]).length > 0 && e(i[s], n[s])
        }))
    }
    const i = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function n() {
        const t = "undefined" != typeof document ? document : {};
        return e(t, i), t
    }
    const s = {
        document: i,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
            "undefined" != typeof setTimeout && clearTimeout(t)
        }
    };

    function r() {
        const t = "undefined" != typeof window ? window : {};
        return e(t, s), t
    }

    function o(t) {
        return void 0 === t && (t = ""), t.trim().split(" ").filter((t => !!t.trim()))
    }

    function a(t, e) {
        return void 0 === e && (e = 0), setTimeout(t, e)
    }

    function l() {
        return Date.now()
    }

    function c(t, e) {
        void 0 === e && (e = "x");
        const i = r();
        let n, s, o;
        const a = function(t) {
            const e = r();
            let i;
            return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
        }(t);
        return i.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((t => t.replace(",", "."))).join(", ")), o = new i.WebKitCSSMatrix("none" === s ? "" : s)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === e && (s = i.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === e && (s = i.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
    }

    function d(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }

    function h() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            e = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
            const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            if (null != s && (i = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                const i = Object.keys(Object(s)).filter((t => e.indexOf(t) < 0));
                for (let e = 0, n = i.length; e < n; e += 1) {
                    const n = i[e],
                        r = Object.getOwnPropertyDescriptor(s, n);
                    void 0 !== r && r.enumerable && (d(t[n]) && d(s[n]) ? s[n].__swiper__ ? t[n] = s[n] : h(t[n], s[n]) : !d(t[n]) && d(s[n]) ? (t[n] = {}, s[n].__swiper__ ? t[n] = s[n] : h(t[n], s[n])) : t[n] = s[n])
                }
            }
        }
        var i;
        return t
    }

    function u(t, e, i) {
        t.style.setProperty(e, i)
    }

    function p(t) {
        let {
            swiper: e,
            targetPosition: i,
            side: n
        } = t;
        const s = r(),
            o = -e.translate;
        let a, l = null;
        const c = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
        const d = i > o ? "next" : "prev",
            h = (t, e) => "next" === d && t >= e || "prev" === d && t <= e,
            u = () => {
                a = (new Date).getTime(), null === l && (l = a);
                const t = Math.max(Math.min((a - l) / c, 1), 0),
                    r = .5 - Math.cos(t * Math.PI) / 2;
                let d = o + r * (i - o);
                if (h(d, i) && (d = i), e.wrapperEl.scrollTo({
                        [n]: d
                    }), h(d, i)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [n]: d
                    })
                })), void s.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = s.requestAnimationFrame(u)
            };
        u()
    }

    function f(t) {
        return t.querySelector(".swiper-slide-transform") || t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform") || t
    }

    function g(t, e) {
        void 0 === e && (e = "");
        const i = [...t.children];
        return t instanceof HTMLSlotElement && i.push(...t.assignedElements()), e ? i.filter((t => t.matches(e))) : i
    }

    function m(t) {
        try {
            return void console.warn(t)
        } catch (t) {}
    }

    function v(t, e) {
        void 0 === e && (e = []);
        const i = document.createElement(t);
        return i.classList.add(...Array.isArray(e) ? e : o(e)), i
    }

    function y(t) {
        const e = r(),
            i = n(),
            s = t.getBoundingClientRect(),
            o = i.body,
            a = t.clientTop || o.clientTop || 0,
            l = t.clientLeft || o.clientLeft || 0,
            c = t === e ? e.scrollY : t.scrollTop,
            d = t === e ? e.scrollX : t.scrollLeft;
        return {
            top: s.top + c - a,
            left: s.left + d - l
        }
    }

    function b(t, e) {
        return r().getComputedStyle(t, null).getPropertyValue(e)
    }

    function x(t) {
        let e, i = t;
        if (i) {
            for (e = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (e += 1);
            return e
        }
    }

    function w(t, e) {
        const i = [];
        let n = t.parentElement;
        for (; n;) e ? n.matches(e) && i.push(n) : i.push(n), n = n.parentElement;
        return i
    }

    function _(t, e) {
        e && t.addEventListener("transitionend", (function i(n) {
            n.target === t && (e.call(t, n), t.removeEventListener("transitionend", i))
        }))
    }

    function S(t, e, i) {
        const n = r();
        return i ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
    }

    function E(t) {
        return (Array.isArray(t) ? t : [t]).filter((t => !!t))
    }

    function T(t) {
        return e => Math.abs(e) > 0 && t.browser && t.browser.need3dFix && Math.abs(e) % 90 == 0 ? e + .001 : e
    }
    let M, k, C;

    function P() {
        return M || (M = function() {
            const t = r(),
                e = n();
            return {
                smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
                touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
            }
        }()), M
    }

    function D(t) {
        return void 0 === t && (t = {}), k || (k = function(t) {
            let {
                userAgent: e
            } = void 0 === t ? {} : t;
            const i = P(),
                n = r(),
                s = n.navigator.platform,
                o = e || n.navigator.userAgent,
                a = {
                    ios: !1,
                    android: !1
                },
                l = n.screen.width,
                c = n.screen.height,
                d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
            let h = o.match(/(iPad).*OS\s([\d_]+)/);
            const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === s;
            let g = "MacIntel" === s;
            return !h && g && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (h = o.match(/(Version)\/([\d.]+)/), h || (h = [0, 1, "13_0_0"]), g = !1), d && !f && (a.os = "android", a.android = !0), (h || p || u) && (a.os = "ios", a.ios = !0), a
        }(t)), k
    }

    function L() {
        return C || (C = function() {
            const t = r(),
                e = D();
            let i = !1;

            function n() {
                const e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }
            if (n()) {
                const e = String(t.navigator.userAgent);
                if (e.includes("Version/")) {
                    const [t, n] = e.split("Version/")[1].split(" ")[0].split(".").map((t => Number(t)));
                    i = t < 16 || 16 === t && n < 2
                }
            }
            const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                o = n();
            return {
                isSafari: i || o,
                needPerspectiveFix: i,
                need3dFix: o || s && e.ios,
                isWebView: s
            }
        }()), C
    }
    var A = {
        on(t, e, i) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const s = i ? "unshift" : "push";
            return t.split(" ").forEach((t => {
                n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][s](e)
            })), n
        },
        once(t, e, i) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;

            function s() {
                n.off(t, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                e.apply(n, r)
            }
            return s.__emitterProxy = e, n.on(t, s, i)
        },
        onAny(t, e) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const n = e ? "unshift" : "push";
            return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i
        },
        offAny(t) {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsAnyListeners) return e;
            const i = e.eventsAnyListeners.indexOf(t);
            return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
        },
        off(t, e) {
            const i = this;
            return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (t.split(" ").forEach((t => {
                void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].forEach(((n, s) => {
                    (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[t].splice(s, 1)
                }))
            })), i) : i
        },
        emit() {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let e, i, n;
            for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
            return "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), n = t) : (e = r[0].events, i = r[0].data, n = r[0].context || t), i.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(n, [e, ...i])
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
                    t.apply(n, i)
                }))
            })), t
        }
    };
    const O = (t, e, i) => {
            e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
        },
        I = (t, e, i) => {
            e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
        },
        z = (t, e) => {
            if (!t || t.destroyed || !t.params) return;
            const i = e.closest(t.isElement ? "swiper-slide" : `.${t.params.slideClass}`);
            if (i) {
                let e = i.querySelector(`.${t.params.lazyPreloaderClass}`);
                !e && t.isElement && (i.shadowRoot ? e = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    i.shadowRoot && (e = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), e && e.remove())
                }))), e && e.remove()
            }
        },
        R = (t, e) => {
            if (!t.slides[e]) return;
            const i = t.slides[e].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        },
        F = t => {
            if (!t || t.destroyed || !t.params) return;
            let e = t.params.lazyPreloadPrevNext;
            const i = t.slides.length;
            if (!i || !e || e < 0) return;
            e = Math.min(e, i);
            const n = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
                s = t.activeIndex;
            if (t.params.grid && t.params.grid.rows > 1) {
                const i = s,
                    r = [i - e];
                return r.push(...Array.from({
                    length: e
                }).map(((t, e) => i + n + e))), void t.slides.forEach(((e, i) => {
                    r.includes(e.column) && R(t, i)
                }))
            }
            const r = s + n - 1;
            if (t.params.rewind || t.params.loop)
                for (let n = s - e; n <= r + e; n += 1) {
                    const e = (n % i + i) % i;
                    (e < s || e > r) && R(t, e)
                } else
                    for (let n = Math.max(s - e, 0); n <= Math.min(r + e, i - 1); n += 1) n !== s && (n > r || n < s) && R(t, n)
        };
    var $ = {
            updateSize: function() {
                const t = this;
                let e, i;
                const n = t.el;
                e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : n.clientWidth, i = void 0 !== t.params.height && null !== t.params.height ? t.params.height : n.clientHeight, 0 === e && t.isHorizontal() || 0 === i && t.isVertical() || (e = e - parseInt(b(n, "padding-left") || 0, 10) - parseInt(b(n, "padding-right") || 0, 10), i = i - parseInt(b(n, "padding-top") || 0, 10) - parseInt(b(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
                    width: e,
                    height: i,
                    size: t.isHorizontal() ? e : i
                }))
            },
            updateSlides: function() {
                const t = this;

                function e(e, i) {
                    return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                }
                const i = t.params,
                    {
                        wrapperEl: n,
                        slidesEl: s,
                        size: r,
                        rtlTranslate: o,
                        wrongRTL: a
                    } = t,
                    l = t.virtual && i.virtual.enabled,
                    c = l ? t.virtual.slides.length : t.slides.length,
                    d = g(s, `.${t.params.slideClass}, swiper-slide`),
                    h = l ? t.virtual.slides.length : d.length;
                let p = [];
                const f = [],
                    m = [];
                let v = i.slidesOffsetBefore;
                "function" == typeof v && (v = i.slidesOffsetBefore.call(t));
                let y = i.slidesOffsetAfter;
                "function" == typeof y && (y = i.slidesOffsetAfter.call(t));
                const x = t.snapGrid.length,
                    w = t.slidesGrid.length;
                let _ = i.spaceBetween,
                    E = -v,
                    T = 0,
                    M = 0;
                if (void 0 === r) return;
                "string" == typeof _ && _.indexOf("%") >= 0 ? _ = parseFloat(_.replace("%", "")) / 100 * r : "string" == typeof _ && (_ = parseFloat(_)), t.virtualSize = -_, d.forEach((t => {
                    o ? t.style.marginLeft = "" : t.style.marginRight = "", t.style.marginBottom = "", t.style.marginTop = ""
                })), i.centeredSlides && i.cssMode && (u(n, "--swiper-centered-offset-before", ""), u(n, "--swiper-centered-offset-after", ""));
                const k = i.grid && i.grid.rows > 1 && t.grid;
                let C;
                k ? t.grid.initSlides(d) : t.grid && t.grid.unsetSlides();
                const P = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((t => void 0 !== i.breakpoints[t].slidesPerView)).length > 0;
                for (let n = 0; n < h; n += 1) {
                    let s;
                    if (C = 0, d[n] && (s = d[n]), k && t.grid.updateSlide(n, s, d), !d[n] || "none" !== b(s, "display")) {
                        if ("auto" === i.slidesPerView) {
                            P && (d[n].style[t.getDirectionLabel("width")] = "");
                            const r = getComputedStyle(s),
                                o = s.style.transform,
                                a = s.style.webkitTransform;
                            if (o && (s.style.transform = "none"), a && (s.style.webkitTransform = "none"), i.roundLengths) C = t.isHorizontal() ? S(s, "width", !0) : S(s, "height", !0);
                            else {
                                const t = e(r, "width"),
                                    i = e(r, "padding-left"),
                                    n = e(r, "padding-right"),
                                    o = e(r, "margin-left"),
                                    a = e(r, "margin-right"),
                                    l = r.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) C = t + o + a;
                                else {
                                    const {
                                        clientWidth: e,
                                        offsetWidth: r
                                    } = s;
                                    C = t + i + n + o + a + (r - e)
                                }
                            }
                            o && (s.style.transform = o), a && (s.style.webkitTransform = a), i.roundLengths && (C = Math.floor(C))
                        } else C = (r - (i.slidesPerView - 1) * _) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), d[n] && (d[n].style[t.getDirectionLabel("width")] = `${C}px`);
                        d[n] && (d[n].swiperSlideSize = C), m.push(C), i.centeredSlides ? (E = E + C / 2 + T / 2 + _, 0 === T && 0 !== n && (E = E - r / 2 - _), 0 === n && (E = E - r / 2 - _), Math.abs(E) < .001 && (E = 0), i.roundLengths && (E = Math.floor(E)), M % i.slidesPerGroup == 0 && p.push(E), f.push(E)) : (i.roundLengths && (E = Math.floor(E)), (M - Math.min(t.params.slidesPerGroupSkip, M)) % t.params.slidesPerGroup == 0 && p.push(E), f.push(E), E = E + C + _), t.virtualSize += C + _, T = C, M += 1
                    }
                }
                if (t.virtualSize = Math.max(t.virtualSize, r) + y, o && a && ("slide" === i.effect || "coverflow" === i.effect) && (n.style.width = `${t.virtualSize+_}px`), i.setWrapperSize && (n.style[t.getDirectionLabel("width")] = `${t.virtualSize+_}px`), k && t.grid.updateWrapperSize(C, p), !i.centeredSlides) {
                    const e = [];
                    for (let n = 0; n < p.length; n += 1) {
                        let s = p[n];
                        i.roundLengths && (s = Math.floor(s)), p[n] <= t.virtualSize - r && e.push(s)
                    }
                    p = e, Math.floor(t.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - r)
                }
                if (l && i.loop) {
                    const e = m[0] + _;
                    if (i.slidesPerGroup > 1) {
                        const n = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                            s = e * i.slidesPerGroup;
                        for (let t = 0; t < n; t += 1) p.push(p[p.length - 1] + s)
                    }
                    for (let n = 0; n < t.virtual.slidesBefore + t.virtual.slidesAfter; n += 1) 1 === i.slidesPerGroup && p.push(p[p.length - 1] + e), f.push(f[f.length - 1] + e), t.virtualSize += e
                }
                if (0 === p.length && (p = [0]), 0 !== _) {
                    const e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
                    d.filter(((t, e) => !(i.cssMode && !i.loop) || e !== d.length - 1)).forEach((t => {
                        t.style[e] = `${_}px`
                    }))
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let t = 0;
                    m.forEach((e => {
                        t += e + (_ || 0)
                    })), t -= _;
                    const e = t - r;
                    p = p.map((t => t <= 0 ? -v : t > e ? e + y : t))
                }
                if (i.centerInsufficientSlides) {
                    let t = 0;
                    m.forEach((e => {
                        t += e + (_ || 0)
                    })), t -= _;
                    const e = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                    if (t + e < r) {
                        const i = (r - t - e) / 2;
                        p.forEach(((t, e) => {
                            p[e] = t - i
                        })), f.forEach(((t, e) => {
                            f[e] = t + i
                        }))
                    }
                }
                if (Object.assign(t, {
                        slides: d,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    u(n, "--swiper-centered-offset-before", -p[0] + "px"), u(n, "--swiper-centered-offset-after", t.size / 2 - m[m.length - 1] / 2 + "px");
                    const e = -t.snapGrid[0],
                        i = -t.slidesGrid[0];
                    t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + i))
                }
                if (h !== c && t.emit("slidesLengthChange"), p.length !== x && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const e = `${i.containerModifierClass}backface-hidden`,
                        n = t.el.classList.contains(e);
                    h <= i.maxBackfaceHiddenSlides ? n || t.el.classList.add(e) : n && t.el.classList.remove(e)
                }
            },
            updateAutoHeight: function(t) {
                const e = this,
                    i = [],
                    n = e.virtual && e.params.virtual.enabled;
                let s, r = 0;
                "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
                const o = t => n ? e.slides[e.getSlideIndexByData(t)] : e.slides[t];
                if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
                    if (e.params.centeredSlides)(e.visibleSlides || []).forEach((t => {
                        i.push(t)
                    }));
                    else
                        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                            const t = e.activeIndex + s;
                            if (t > e.slides.length && !n) break;
                            i.push(o(t))
                        } else i.push(o(e.activeIndex));
                for (s = 0; s < i.length; s += 1)
                    if (void 0 !== i[s]) {
                        const t = i[s].offsetHeight;
                        r = t > r ? t : r
                    }(r || 0 === r) && (e.wrapperEl.style.height = `${r}px`)
            },
            updateSlidesOffset: function() {
                const t = this,
                    e = t.slides,
                    i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
                for (let n = 0; n < e.length; n += 1) e[n].swiperSlideOffset = (t.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - i - t.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(t) {
                void 0 === t && (t = this && this.translate || 0);
                const e = this,
                    i = e.params,
                    {
                        slides: n,
                        rtlTranslate: s,
                        snapGrid: r
                    } = e;
                if (0 === n.length) return;
                void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
                let o = -t;
                s && (o = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
                let a = i.spaceBetween;
                "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : "string" == typeof a && (a = parseFloat(a));
                for (let t = 0; t < n.length; t += 1) {
                    const l = n[t];
                    let c = l.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (c -= n[0].swiperSlideOffset);
                    const d = (o + (i.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + a),
                        h = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + a),
                        u = -(o - c),
                        p = u + e.slidesSizesGrid[t],
                        f = u >= 0 && u <= e.size - e.slidesSizesGrid[t],
                        g = u >= 0 && u < e.size - 1 || p > 1 && p <= e.size || u <= 0 && p >= e.size;
                    g && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(t)), O(l, g, i.slideVisibleClass), O(l, f, i.slideFullyVisibleClass), l.progress = s ? -d : d, l.originalProgress = s ? -h : h
                }
            },
            updateProgress: function(t) {
                const e = this;
                if (void 0 === t) {
                    const i = e.rtlTranslate ? -1 : 1;
                    t = e && e.translate && e.translate * i || 0
                }
                const i = e.params,
                    n = e.maxTranslate() - e.minTranslate();
                let {
                    progress: s,
                    isBeginning: r,
                    isEnd: o,
                    progressLoop: a
                } = e;
                const l = r,
                    c = o;
                if (0 === n) s = 0, r = !0, o = !0;
                else {
                    s = (t - e.minTranslate()) / n;
                    const i = Math.abs(t - e.minTranslate()) < 1,
                        a = Math.abs(t - e.maxTranslate()) < 1;
                    r = i || s <= 0, o = a || s >= 1, i && (s = 0), a && (s = 1)
                }
                if (i.loop) {
                    const i = e.getSlideIndexByData(0),
                        n = e.getSlideIndexByData(e.slides.length - 1),
                        s = e.slidesGrid[i],
                        r = e.slidesGrid[n],
                        o = e.slidesGrid[e.slidesGrid.length - 1],
                        l = Math.abs(t);
                    a = l >= s ? (l - s) / o : (l + o - r) / o, a > 1 && (a -= 1)
                }
                Object.assign(e, {
                    progress: s,
                    progressLoop: a,
                    isBeginning: r,
                    isEnd: o
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !l && e.emit("reachBeginning toEdge"), o && !c && e.emit("reachEnd toEdge"), (l && !r || c && !o) && e.emit("fromEdge"), e.emit("progress", s)
            },
            updateSlidesClasses: function() {
                const t = this,
                    {
                        slides: e,
                        params: i,
                        slidesEl: n,
                        activeIndex: s
                    } = t,
                    r = t.virtual && i.virtual.enabled,
                    o = t.grid && i.grid && i.grid.rows > 1,
                    a = t => g(n, `.${i.slideClass}${t}, swiper-slide${t}`)[0];
                let l, c, d;
                if (r)
                    if (i.loop) {
                        let e = s - t.virtual.slidesBefore;
                        e < 0 && (e = t.virtual.slides.length + e), e >= t.virtual.slides.length && (e -= t.virtual.slides.length), l = a(`[data-swiper-slide-index="${e}"]`)
                    } else l = a(`[data-swiper-slide-index="${s}"]`);
                else o ? (l = e.filter((t => t.column === s))[0], d = e.filter((t => t.column === s + 1))[0], c = e.filter((t => t.column === s - 1))[0]) : l = e[s];
                l && (o || (d = function(t, e) {
                    const i = [];
                    for (; t.nextElementSibling;) {
                        const n = t.nextElementSibling;
                        e ? n.matches(e) && i.push(n) : i.push(n), t = n
                    }
                    return i
                }(l, `.${i.slideClass}, swiper-slide`)[0], i.loop && !d && (d = e[0]), c = function(t, e) {
                    const i = [];
                    for (; t.previousElementSibling;) {
                        const n = t.previousElementSibling;
                        e ? n.matches(e) && i.push(n) : i.push(n), t = n
                    }
                    return i
                }(l, `.${i.slideClass}, swiper-slide`)[0], i.loop && 0 === !c && (c = e[e.length - 1]))), e.forEach((t => {
                    I(t, t === l, i.slideActiveClass), I(t, t === d, i.slideNextClass), I(t, t === c, i.slidePrevClass)
                })), t.emitSlidesClasses()
            },
            updateActiveIndex: function(t) {
                const e = this,
                    i = e.rtlTranslate ? e.translate : -e.translate,
                    {
                        snapGrid: n,
                        params: s,
                        activeIndex: r,
                        realIndex: o,
                        snapIndex: a
                    } = e;
                let l, c = t;
                const d = t => {
                    let i = t - e.virtual.slidesBefore;
                    return i < 0 && (i = e.virtual.slides.length + i), i >= e.virtual.slides.length && (i -= e.virtual.slides.length), i
                };
                if (void 0 === c && (c = function(t) {
                        const {
                            slidesGrid: e,
                            params: i
                        } = t, n = t.rtlTranslate ? t.translate : -t.translate;
                        let s;
                        for (let t = 0; t < e.length; t += 1) void 0 !== e[t + 1] ? n >= e[t] && n < e[t + 1] - (e[t + 1] - e[t]) / 2 ? s = t : n >= e[t] && n < e[t + 1] && (s = t + 1) : n >= e[t] && (s = t);
                        return i.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
                    }(e)), n.indexOf(i) >= 0) l = n.indexOf(i);
                else {
                    const t = Math.min(s.slidesPerGroupSkip, c);
                    l = t + Math.floor((c - t) / s.slidesPerGroup)
                }
                if (l >= n.length && (l = n.length - 1), c === r && !e.params.loop) return void(l !== a && (e.snapIndex = l, e.emit("snapIndexChange")));
                if (c === r && e.params.loop && e.virtual && e.params.virtual.enabled) return void(e.realIndex = d(c));
                const h = e.grid && s.grid && s.grid.rows > 1;
                let u;
                if (e.virtual && s.virtual.enabled && s.loop) u = d(c);
                else if (h) {
                    const t = e.slides.filter((t => t.column === c))[0];
                    let i = parseInt(t.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(i) && (i = Math.max(e.slides.indexOf(t), 0)), u = Math.floor(i / s.grid.rows)
                } else if (e.slides[c]) {
                    const t = e.slides[c].getAttribute("data-swiper-slide-index");
                    u = t ? parseInt(t, 10) : c
                } else u = c;
                Object.assign(e, {
                    previousSnapIndex: a,
                    snapIndex: l,
                    previousRealIndex: o,
                    realIndex: u,
                    previousIndex: r,
                    activeIndex: c
                }), e.initialized && F(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== u && e.emit("realIndexChange"), e.emit("slideChange"))
            },
            updateClickedSlide: function(t, e) {
                const i = this,
                    n = i.params;
                let s = t.closest(`.${n.slideClass}, swiper-slide`);
                !s && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((t => {
                    !s && t.matches && t.matches(`.${n.slideClass}, swiper-slide`) && (s = t)
                }));
                let r, o = !1;
                if (s)
                    for (let t = 0; t < i.slides.length; t += 1)
                        if (i.slides[t] === s) {
                            o = !0, r = t;
                            break
                        }
                if (!s || !o) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
                i.clickedSlide = s, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = r, n.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
            }
        },
        j = {
            getTranslate: function(t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                const {
                    params: e,
                    rtlTranslate: i,
                    translate: n,
                    wrapperEl: s
                } = this;
                if (e.virtualTranslate) return i ? -n : n;
                if (e.cssMode) return n;
                let r = c(s, t);
                return r += this.cssOverflowAdjustment(), i && (r = -r), r || 0
            },
            setTranslate: function(t, e) {
                const i = this,
                    {
                        rtlTranslate: n,
                        params: s,
                        wrapperEl: r,
                        progress: o
                    } = i;
                let a, l = 0,
                    c = 0;
                i.isHorizontal() ? l = n ? -t : t : c = t, s.roundLengths && (l = Math.floor(l), c = Math.floor(c)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c, s.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -c : s.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : c -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                const d = i.maxTranslate() - i.minTranslate();
                a = 0 === d ? 0 : (t - i.minTranslate()) / d, a !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(t, e, i, n, s) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                const r = this,
                    {
                        params: o,
                        wrapperEl: a
                    } = r;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                const l = r.minTranslate(),
                    c = r.maxTranslate();
                let d;
                if (d = n && t > l ? l : n && t < c ? c : t, r.updateProgress(d), o.cssMode) {
                    const t = r.isHorizontal();
                    if (0 === e) a[t ? "scrollLeft" : "scrollTop"] = -d;
                    else {
                        if (!r.support.smoothScroll) return p({
                            swiper: r,
                            targetPosition: -d,
                            side: t ? "left" : "top"
                        }), !0;
                        a.scrollTo({
                            [t ? "left" : "top"]: -d,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === e ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, s), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(t) {
                    r && !r.destroyed && t.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, i && r.emit("transitionEnd"))
                }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
            }
        };

    function N(t) {
        let {
            swiper: e,
            runCallbacks: i,
            direction: n,
            step: s
        } = t;
        const {
            activeIndex: r,
            previousIndex: o
        } = e;
        let a = n;
        if (a || (a = r > o ? "next" : r < o ? "prev" : "reset"), e.emit(`transition${s}`), i && r !== o) {
            if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
            e.emit(`slideChangeTransition${s}`), "next" === a ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
        }
    }
    var H = {
            slideTo: function(t, e, i, n, s) {
                void 0 === t && (t = 0), void 0 === i && (i = !0), "string" == typeof t && (t = parseInt(t, 10));
                const r = this;
                let o = t;
                o < 0 && (o = 0);
                const {
                    params: a,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: d,
                    activeIndex: h,
                    rtlTranslate: u,
                    wrapperEl: f,
                    enabled: g
                } = r;
                if (!g && !n && !s || r.destroyed || r.animating && a.preventInteractionOnTransition) return !1;
                void 0 === e && (e = r.params.speed);
                const m = Math.min(r.params.slidesPerGroupSkip, o);
                let v = m + Math.floor((o - m) / r.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const y = -l[v];
                if (a.normalizeSlideIndex)
                    for (let t = 0; t < c.length; t += 1) {
                        const e = -Math.floor(100 * y),
                            i = Math.floor(100 * c[t]),
                            n = Math.floor(100 * c[t + 1]);
                        void 0 !== c[t + 1] ? e >= i && e < n - (n - i) / 2 ? o = t : e >= i && e < n && (o = t + 1) : e >= i && (o = t)
                    }
                if (r.initialized && o !== h) {
                    if (!r.allowSlideNext && (u ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate())) return !1;
                    if (!r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (h || 0) !== o) return !1
                }
                let b;
                if (o !== (d || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(y), b = o > h ? "next" : o < h ? "prev" : "reset", u && -y === r.translate || !u && y === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(y), "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)), !1;
                if (a.cssMode) {
                    const t = r.isHorizontal(),
                        i = u ? y : -y;
                    if (0 === e) {
                        const e = r.virtual && r.params.virtual.enabled;
                        e && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), e && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            f[t ? "scrollLeft" : "scrollTop"] = i
                        }))) : f[t ? "scrollLeft" : "scrollTop"] = i, e && requestAnimationFrame((() => {
                            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
                        }))
                    } else {
                        if (!r.support.smoothScroll) return p({
                            swiper: r,
                            targetPosition: i,
                            side: t ? "left" : "top"
                        }), !0;
                        f.scrollTo({
                            [t ? "left" : "top"]: i,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return r.setTransition(e), r.setTranslate(y), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, n), r.transitionStart(i, b), 0 === e ? r.transitionEnd(i, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(t) {
                    r && !r.destroyed && t.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, b))
                }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(t, e, i, n) {
                void 0 === t && (t = 0), void 0 === i && (i = !0), "string" == typeof t && (t = parseInt(t, 10));
                const s = this;
                if (s.destroyed) return;
                void 0 === e && (e = s.params.speed);
                const r = s.grid && s.params.grid && s.params.grid.rows > 1;
                let o = t;
                if (s.params.loop)
                    if (s.virtual && s.params.virtual.enabled) o += s.virtual.slidesBefore;
                    else {
                        let t;
                        if (r) {
                            const e = o * s.params.grid.rows;
                            t = s.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                        } else t = s.getSlideIndexByData(o);
                        const e = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length,
                            {
                                centeredSlides: i
                            } = s.params;
                        let a = s.params.slidesPerView;
                        "auto" === a ? a = s.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(s.params.slidesPerView, 10)), i && a % 2 == 0 && (a += 1));
                        let l = e - t < a;
                        if (i && (l = l || t < Math.ceil(a / 2)), n && i && "auto" !== s.params.slidesPerView && !r && (l = !1), l) {
                            const n = i ? t < s.activeIndex ? "prev" : "next" : t - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                            s.loopFix({
                                direction: n,
                                slideTo: !0,
                                activeSlideIndex: "next" === n ? t + 1 : t - e + 1,
                                slideRealIndex: "next" === n ? s.realIndex : void 0
                            })
                        }
                        if (r) {
                            const t = o * s.params.grid.rows;
                            o = s.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                        } else o = s.getSlideIndexByData(o)
                    }
                return requestAnimationFrame((() => {
                    s.slideTo(o, e, i, n)
                })), s
            },
            slideNext: function(t, e, i) {
                void 0 === e && (e = !0);
                const n = this,
                    {
                        enabled: s,
                        params: r,
                        animating: o
                    } = n;
                if (!s || n.destroyed) return n;
                void 0 === t && (t = n.params.speed);
                let a = r.slidesPerGroup;
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a,
                    c = n.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (o && !c && r.loopPreventsSliding) return !1;
                    if (n.loopFix({
                            direction: "next"
                        }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                        n.slideTo(n.activeIndex + l, t, e, i)
                    })), !0
                }
                return r.rewind && n.isEnd ? n.slideTo(0, t, e, i) : n.slideTo(n.activeIndex + l, t, e, i)
            },
            slidePrev: function(t, e, i) {
                void 0 === e && (e = !0);
                const n = this,
                    {
                        params: s,
                        snapGrid: r,
                        slidesGrid: o,
                        rtlTranslate: a,
                        enabled: l,
                        animating: c
                    } = n;
                if (!l || n.destroyed) return n;
                void 0 === t && (t = n.params.speed);
                const d = n.virtual && s.virtual.enabled;
                if (s.loop) {
                    if (c && !d && s.loopPreventsSliding) return !1;
                    n.loopFix({
                        direction: "prev"
                    }), n._clientLeft = n.wrapperEl.clientLeft
                }

                function h(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }
                const u = h(a ? n.translate : -n.translate),
                    p = r.map((t => h(t)));
                let f = r[p.indexOf(u) - 1];
                if (void 0 === f && s.cssMode) {
                    let t;
                    r.forEach(((e, i) => {
                        u >= e && (t = i)
                    })), void 0 !== t && (f = r[t > 0 ? t - 1 : t])
                }
                let g = 0;
                if (void 0 !== f && (g = o.indexOf(f), g < 0 && (g = n.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), s.rewind && n.isBeginning) {
                    const s = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                    return n.slideTo(s, t, e, i)
                }
                return s.loop && 0 === n.activeIndex && s.cssMode ? (requestAnimationFrame((() => {
                    n.slideTo(g, t, e, i)
                })), !0) : n.slideTo(g, t, e, i)
            },
            slideReset: function(t, e, i) {
                void 0 === e && (e = !0);
                const n = this;
                if (!n.destroyed) return void 0 === t && (t = n.params.speed), n.slideTo(n.activeIndex, t, e, i)
            },
            slideToClosest: function(t, e, i, n) {
                void 0 === e && (e = !0), void 0 === n && (n = .5);
                const s = this;
                if (s.destroyed) return;
                void 0 === t && (t = s.params.speed);
                let r = s.activeIndex;
                const o = Math.min(s.params.slidesPerGroupSkip, r),
                    a = o + Math.floor((r - o) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[a]) {
                    const t = s.snapGrid[a];
                    l - t > (s.snapGrid[a + 1] - t) * n && (r += s.params.slidesPerGroup)
                } else {
                    const t = s.snapGrid[a - 1];
                    l - t <= (s.snapGrid[a] - t) * n && (r -= s.params.slidesPerGroup)
                }
                return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, t, e, i)
            },
            slideToClickedSlide: function() {
                const t = this;
                if (t.destroyed) return;
                const {
                    params: e,
                    slidesEl: i
                } = t, n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
                let s, r = t.clickedIndex;
                const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
                if (e.loop) {
                    if (t.animating) return;
                    s = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < t.loopedSlides - n / 2 || r > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), r = t.getSlideIndex(g(i, `${o}[data-swiper-slide-index="${s}"]`)[0]), a((() => {
                        t.slideTo(r)
                    }))) : t.slideTo(r) : r > t.slides.length - n ? (t.loopFix(), r = t.getSlideIndex(g(i, `${o}[data-swiper-slide-index="${s}"]`)[0]), a((() => {
                        t.slideTo(r)
                    }))) : t.slideTo(r)
                } else t.slideTo(r)
            }
        },
        W = {
            loopCreate: function(t) {
                const e = this,
                    {
                        params: i,
                        slidesEl: n
                    } = e;
                if (!i.loop || e.virtual && e.params.virtual.enabled) return;
                const s = () => {
                        g(n, `.${i.slideClass}, swiper-slide`).forEach(((t, e) => {
                            t.setAttribute("data-swiper-slide-index", e)
                        }))
                    },
                    r = e.grid && i.grid && i.grid.rows > 1,
                    o = i.slidesPerGroup * (r ? i.grid.rows : 1),
                    a = e.slides.length % o != 0,
                    l = r && e.slides.length % i.grid.rows != 0,
                    c = t => {
                        for (let n = 0; n < t; n += 1) {
                            const t = e.isElement ? v("swiper-slide", [i.slideBlankClass]) : v("div", [i.slideClass, i.slideBlankClass]);
                            e.slidesEl.append(t)
                        }
                    };
                a ? (i.loopAddBlankSlides ? (c(o - e.slides.length % o), e.recalcSlides(), e.updateSlides()) : m("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : l ? (i.loopAddBlankSlides ? (c(i.grid.rows - e.slides.length % i.grid.rows), e.recalcSlides(), e.updateSlides()) : m("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : s(), e.loopFix({
                    slideRealIndex: t,
                    direction: i.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function(t) {
                let {
                    slideRealIndex: e,
                    slideTo: i = !0,
                    direction: n,
                    setTranslate: s,
                    activeSlideIndex: r,
                    byController: o,
                    byMousewheel: a
                } = void 0 === t ? {} : t;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: c,
                    allowSlidePrev: d,
                    allowSlideNext: h,
                    slidesEl: u,
                    params: p
                } = l, {
                    centeredSlides: f
                } = p;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && p.virtual.enabled) return i && (p.centeredSlides || 0 !== l.snapIndex ? p.centeredSlides && l.snapIndex < p.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = h, void l.emit("loopFix");
                let g = p.slidesPerView;
                "auto" === g ? g = l.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(p.slidesPerView, 10)), f && g % 2 == 0 && (g += 1));
                const v = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
                let y = v;
                y % v != 0 && (y += v - y % v), y += p.loopAdditionalSlides, l.loopedSlides = y;
                const b = l.grid && p.grid && p.grid.rows > 1;
                c.length < g + y ? m("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === p.grid.fill && m("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const x = [],
                    w = [];
                let _ = l.activeIndex;
                void 0 === r ? r = l.getSlideIndex(c.filter((t => t.classList.contains(p.slideActiveClass)))[0]) : _ = r;
                const S = "next" === n || !n,
                    E = "prev" === n || !n;
                let T = 0,
                    M = 0;
                const k = b ? Math.ceil(c.length / p.grid.rows) : c.length,
                    C = (b ? c[r].column : r) + (f && void 0 === s ? -g / 2 + .5 : 0);
                if (C < y) {
                    T = Math.max(y - C, v);
                    for (let t = 0; t < y - C; t += 1) {
                        const e = t - Math.floor(t / k) * k;
                        if (b) {
                            const t = k - e - 1;
                            for (let e = c.length - 1; e >= 0; e -= 1) c[e].column === t && x.push(e)
                        } else x.push(k - e - 1)
                    }
                } else if (C + g > k - y) {
                    M = Math.max(C - (k - 2 * y), v);
                    for (let t = 0; t < M; t += 1) {
                        const e = t - Math.floor(t / k) * k;
                        b ? c.forEach(((t, i) => {
                            t.column === e && w.push(i)
                        })) : w.push(e)
                    }
                }
                if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                        l.__preventObserver__ = !1
                    })), E && x.forEach((t => {
                        c[t].swiperLoopMoveDOM = !0, u.prepend(c[t]), c[t].swiperLoopMoveDOM = !1
                    })), S && w.forEach((t => {
                        c[t].swiperLoopMoveDOM = !0, u.append(c[t]), c[t].swiperLoopMoveDOM = !1
                    })), l.recalcSlides(), "auto" === p.slidesPerView ? l.updateSlides() : b && (x.length > 0 && E || w.length > 0 && S) && l.slides.forEach(((t, e) => {
                        l.grid.updateSlide(e, t, l.slides)
                    })), p.watchSlidesProgress && l.updateSlidesOffset(), i)
                    if (x.length > 0 && E) {
                        if (void 0 === e) {
                            const t = l.slidesGrid[_],
                                e = l.slidesGrid[_ + T] - t;
                            a ? l.setTranslate(l.translate - e) : (l.slideTo(_ + Math.ceil(T), 0, !1, !0), s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - e, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - e))
                        } else if (s) {
                            const t = b ? x.length / p.grid.rows : x.length;
                            l.slideTo(l.activeIndex + t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                        }
                    } else if (w.length > 0 && S)
                    if (void 0 === e) {
                        const t = l.slidesGrid[_],
                            e = l.slidesGrid[_ - M] - t;
                        a ? l.setTranslate(l.translate - e) : (l.slideTo(_ - M, 0, !1, !0), s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - e, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - e))
                    } else {
                        const t = b ? w.length / p.grid.rows : w.length;
                        l.slideTo(l.activeIndex - t, 0, !1, !0)
                    }
                if (l.allowSlidePrev = d, l.allowSlideNext = h, l.controller && l.controller.control && !o) {
                    const t = {
                        slideRealIndex: e,
                        direction: n,
                        setTranslate: s,
                        activeSlideIndex: r,
                        byController: !0
                    };
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((e => {
                        !e.destroyed && e.params.loop && e.loopFix({ ...t,
                            slideTo: e.params.slidesPerView === p.slidesPerView && i
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...t,
                        slideTo: l.controller.control.params.slidesPerView === p.slidesPerView && i
                    })
                }
                l.emit("loopFix")
            },
            loopDestroy: function() {
                const t = this,
                    {
                        params: e,
                        slidesEl: i
                    } = t;
                if (!e.loop || t.virtual && t.params.virtual.enabled) return;
                t.recalcSlides();
                const n = [];
                t.slides.forEach((t => {
                    const e = void 0 === t.swiperSlideIndex ? 1 * t.getAttribute("data-swiper-slide-index") : t.swiperSlideIndex;
                    n[e] = t
                })), t.slides.forEach((t => {
                    t.removeAttribute("data-swiper-slide-index")
                })), n.forEach((t => {
                    i.append(t)
                })), t.recalcSlides(), t.slideTo(t.realIndex, 0)
            }
        };

    function V(t, e, i) {
        const n = r(),
            {
                params: s
            } = t,
            o = s.edgeSwipeDetection,
            a = s.edgeSwipeThreshold;
        return !o || !(i <= a || i >= n.innerWidth - a) || "prevent" === o && (e.preventDefault(), !0)
    }

    function B(t) {
        const e = this,
            i = n();
        let s = t;
        s.originalEvent && (s = s.originalEvent);
        const o = e.touchEventsData;
        if ("pointerdown" === s.type) {
            if (null !== o.pointerId && o.pointerId !== s.pointerId) return;
            o.pointerId = s.pointerId
        } else "touchstart" === s.type && 1 === s.targetTouches.length && (o.touchId = s.targetTouches[0].identifier);
        if ("touchstart" === s.type) return void V(e, s, s.targetTouches[0].pageX);
        const {
            params: a,
            touches: c,
            enabled: d
        } = e;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === s.pointerType) return;
        if (e.animating && a.preventInteractionOnTransition) return;
        !e.animating && a.cssMode && a.loop && e.loopFix();
        let h = s.target;
        if ("wrapper" === a.touchEventsTarget && ! function(t, e) {
                const i = e.contains(t);
                return !i && e instanceof HTMLSlotElement ? [...e.assignedElements()].includes(t) : i
            }(h, e.wrapperEl)) return;
        if ("which" in s && 3 === s.which) return;
        if ("button" in s && s.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const u = !!a.noSwipingClass && "" !== a.noSwipingClass,
            p = s.composedPath ? s.composedPath() : s.path;
        u && s.target && s.target.shadowRoot && p && (h = p[0]);
        const f = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
            g = !(!s.target || !s.target.shadowRoot);
        if (a.noSwiping && (g ? function(t, e) {
                return void 0 === e && (e = this),
                    function e(i) {
                        if (!i || i === n() || i === r()) return null;
                        i.assignedSlot && (i = i.assignedSlot);
                        const s = i.closest(t);
                        return s || i.getRootNode ? s || e(i.getRootNode().host) : null
                    }(e)
            }(f, h) : h.closest(f))) return void(e.allowClick = !0);
        if (a.swipeHandler && !h.closest(a.swipeHandler)) return;
        c.currentX = s.pageX, c.currentY = s.pageY;
        const m = c.currentX,
            v = c.currentY;
        if (!V(e, s, m)) return;
        Object.assign(o, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), c.startX = m, c.startY = v, o.touchStartTime = l(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, a.threshold > 0 && (o.allowThresholdMove = !1);
        let y = !0;
        h.matches(o.focusableElements) && (y = !1, "SELECT" === h.nodeName && (o.isTouched = !1)), i.activeElement && i.activeElement.matches(o.focusableElements) && i.activeElement !== h && i.activeElement.blur();
        const b = y && e.allowTouchMove && a.touchStartPreventDefault;
        !a.touchStartForcePreventDefault && !b || h.isContentEditable || s.preventDefault(), a.freeMode && a.freeMode.enabled && e.freeMode && e.animating && !a.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
    }

    function q(t) {
        const e = n(),
            i = this,
            s = i.touchEventsData,
            {
                params: r,
                touches: o,
                rtlTranslate: a,
                enabled: c
            } = i;
        if (!c) return;
        if (!r.simulateTouch && "mouse" === t.pointerType) return;
        let d, h = t;
        if (h.originalEvent && (h = h.originalEvent), "pointermove" === h.type) {
            if (null !== s.touchId) return;
            if (h.pointerId !== s.pointerId) return
        }
        if ("touchmove" === h.type) {
            if (d = [...h.changedTouches].filter((t => t.identifier === s.touchId))[0], !d || d.identifier !== s.touchId) return
        } else d = h;
        if (!s.isTouched) return void(s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", h));
        const u = d.pageX,
            p = d.pageY;
        if (h.preventedByNestedSwiper) return o.startX = u, void(o.startY = p);
        if (!i.allowTouchMove) return h.target.matches(s.focusableElements) || (i.allowClick = !1), void(s.isTouched && (Object.assign(o, {
            startX: u,
            startY: p,
            currentX: u,
            currentY: p
        }), s.touchStartTime = l()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (i.isVertical()) {
                if (p < o.startY && i.translate <= i.maxTranslate() || p > o.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
            } else if (u < o.startX && i.translate <= i.maxTranslate() || u > o.startX && i.translate >= i.minTranslate()) return;
        if (e.activeElement && h.target === e.activeElement && h.target.matches(s.focusableElements)) return s.isMoved = !0, void(i.allowClick = !1);
        s.allowTouchCallbacks && i.emit("touchMove", h), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = p;
        const f = o.currentX - o.startX,
            g = o.currentY - o.startY;
        if (i.params.threshold && Math.sqrt(f ** 2 + g ** 2) < i.params.threshold) return;
        if (void 0 === s.isScrolling) {
            let t;
            i.isHorizontal() && o.currentY === o.startY || i.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : f * f + g * g >= 25 && (t = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, s.isScrolling = i.isHorizontal() ? t > r.touchAngle : 90 - t > r.touchAngle)
        }
        if (s.isScrolling && i.emit("touchMoveOpposite", h), void 0 === s.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (s.startMoving = !0)), s.isScrolling || "touchmove" === h.type && s.preventTouchMoveFromPointerMove) return void(s.isTouched = !1);
        if (!s.startMoving) return;
        i.allowClick = !1, !r.cssMode && h.cancelable && h.preventDefault(), r.touchMoveStopPropagation && !r.nested && h.stopPropagation();
        let m = i.isHorizontal() ? f : g,
            v = i.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), v = Math.abs(v) * (a ? 1 : -1)), o.diff = m, m *= r.touchRatio, a && (m = -m, v = -v);
        const y = i.touchesDirection;
        i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
        const b = i.params.loop && !r.cssMode,
            x = "next" === i.touchesDirection && i.allowSlideNext || "prev" === i.touchesDirection && i.allowSlidePrev;
        if (!s.isMoved) {
            if (b && x && i.loopFix({
                    direction: i.swipeDirection
                }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
                const t = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                i.wrapperEl.dispatchEvent(t)
            }
            s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", h)
        }
        if ((new Date).getTime(), s.isMoved && s.allowThresholdMove && y !== i.touchesDirection && b && x && Math.abs(m) >= 1) return Object.assign(o, {
            startX: u,
            startY: p,
            currentX: u,
            currentY: p,
            startTranslate: s.currentTranslate
        }), s.loopSwapReset = !0, void(s.startTranslate = s.currentTranslate);
        i.emit("sliderMove", h), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
        let w = !0,
            _ = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (_ = 0), m > 0 ? (b && x && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - ("auto" !== r.slidesPerView && i.slides.length - r.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), s.currentTranslate > i.minTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** _))) : m < 0 && (b && x && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + ("auto" !== r.slidesPerView && i.slides.length - r.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: i.slides.length - ("auto" === r.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
            }), s.currentTranslate < i.maxTranslate() && (w = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** _))), w && (h.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
            if (!(Math.abs(m) > r.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, void(o.diff = i.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
    }

    function Y(t) {
        const e = this,
            i = e.touchEventsData;
        let n, s = t;
        if (s.originalEvent && (s = s.originalEvent), "touchend" === s.type || "touchcancel" === s.type) {
            if (n = [...s.changedTouches].filter((t => t.identifier === i.touchId))[0], !n || n.identifier !== i.touchId) return
        } else {
            if (null !== i.touchId) return;
            if (s.pointerId !== i.pointerId) return;
            n = s
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && (!["pointercancel", "contextmenu"].includes(s.type) || !e.browser.isSafari && !e.browser.isWebView)) return;
        i.pointerId = null, i.touchId = null;
        const {
            params: r,
            touches: o,
            rtlTranslate: c,
            slidesGrid: d,
            enabled: h
        } = e;
        if (!h) return;
        if (!r.simulateTouch && "mouse" === s.pointerType) return;
        if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        r.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const u = l(),
            p = u - i.touchStartTime;
        if (e.allowClick) {
            const t = s.path || s.composedPath && s.composedPath();
            e.updateClickedSlide(t && t[0] || s.target, t), e.emit("tap click", s), p < 300 && u - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
        }
        if (i.lastClickTime = l(), a((() => {
                e.destroyed || (e.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === o.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        let f;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = r.followFinger ? c ? e.translate : -e.translate : -i.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void e.freeMode.onTouchEnd({
            currentPos: f
        });
        const g = f >= -e.maxTranslate() && !e.params.loop;
        let m = 0,
            v = e.slidesSizesGrid[0];
        for (let t = 0; t < d.length; t += t < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const e = t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== d[t + e] ? (g || f >= d[t] && f < d[t + e]) && (m = t, v = d[t + e] - d[t]) : (g || f >= d[t]) && (m = t, v = d[d.length - 1] - d[d.length - 2])
        }
        let y = null,
            b = null;
        r.rewind && (e.isBeginning ? b = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
        const x = (f - d[m]) / v,
            w = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (p > r.longSwipesMs) {
            if (!r.longSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && (x >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? y : m + w) : e.slideTo(m)), "prev" === e.swipeDirection && (x > 1 - r.longSwipesRatio ? e.slideTo(m + w) : null !== b && x < 0 && Math.abs(x) > r.longSwipesRatio ? e.slideTo(b) : e.slideTo(m))
        } else {
            if (!r.shortSwipes) return void e.slideTo(e.activeIndex);
            !e.navigation || s.target !== e.navigation.nextEl && s.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== y ? y : m + w), "prev" === e.swipeDirection && e.slideTo(null !== b ? b : m)) : s.target === e.navigation.nextEl ? e.slideTo(m + w) : e.slideTo(m)
        }
    }

    function G() {
        const t = this,
            {
                params: e,
                el: i
            } = t;
        if (i && 0 === i.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {
            allowSlideNext: n,
            allowSlidePrev: s,
            snapGrid: r
        } = t, o = t.virtual && t.params.virtual.enabled;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
        const a = o && e.loop;
        !("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || a ? t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout((() => {
            t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
        }), 500)), t.allowSlidePrev = s, t.allowSlideNext = n, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
    }

    function X(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
    }

    function U() {
        const t = this,
            {
                wrapperEl: e,
                rtlTranslate: i,
                enabled: n
            } = t;
        if (!n) return;
        let s;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const r = t.maxTranslate() - t.minTranslate();
        s = 0 === r ? 0 : (t.translate - t.minTranslate()) / r, s !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
    }

    function Q(t) {
        const e = this;
        z(e, t.target), e.params.cssMode || "auto" !== e.params.slidesPerView && !e.params.autoHeight || e.update()
    }

    function K() {
        const t = this;
        t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
    }
    const Z = (t, e) => {
            const i = n(),
                {
                    params: s,
                    el: r,
                    wrapperEl: o,
                    device: a
                } = t,
                l = !!s.nested,
                c = "on" === e ? "addEventListener" : "removeEventListener",
                d = e;
            r && "string" != typeof r && (i[c]("touchstart", t.onDocumentTouchStart, {
                passive: !1,
                capture: l
            }), r[c]("touchstart", t.onTouchStart, {
                passive: !1
            }), r[c]("pointerdown", t.onTouchStart, {
                passive: !1
            }), i[c]("touchmove", t.onTouchMove, {
                passive: !1,
                capture: l
            }), i[c]("pointermove", t.onTouchMove, {
                passive: !1,
                capture: l
            }), i[c]("touchend", t.onTouchEnd, {
                passive: !0
            }), i[c]("pointerup", t.onTouchEnd, {
                passive: !0
            }), i[c]("pointercancel", t.onTouchEnd, {
                passive: !0
            }), i[c]("touchcancel", t.onTouchEnd, {
                passive: !0
            }), i[c]("pointerout", t.onTouchEnd, {
                passive: !0
            }), i[c]("pointerleave", t.onTouchEnd, {
                passive: !0
            }), i[c]("contextmenu", t.onTouchEnd, {
                passive: !0
            }), (s.preventClicks || s.preventClicksPropagation) && r[c]("click", t.onClick, !0), s.cssMode && o[c]("scroll", t.onScroll), s.updateOnWindowResize ? t[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : t[d]("observerUpdate", G, !0), r[c]("load", t.onLoad, {
                capture: !0
            }))
        },
        J = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var tt = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function et(t, e) {
        return function(i) {
            void 0 === i && (i = {});
            const n = Object.keys(i)[0],
                s = i[n];
            "object" == typeof s && null !== s ? (!0 === t[n] && (t[n] = {
                enabled: !0
            }), "navigation" === n && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), n in t && "enabled" in s ? ("object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = {
                enabled: !1
            }), h(e, i)) : h(e, i)) : h(e, i)
        }
    }
    const it = {
            eventsEmitter: A,
            update: $,
            translate: j,
            transition: {
                setTransition: function(t, e) {
                    const i = this;
                    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = 0 === t ? "0ms" : ""), i.emit("setTransition", t, e)
                },
                transitionStart: function(t, e) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: n
                        } = i;
                    n.cssMode || (n.autoHeight && i.updateAutoHeight(), N({
                        swiper: i,
                        runCallbacks: t,
                        direction: e,
                        step: "Start"
                    }))
                },
                transitionEnd: function(t, e) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: n
                        } = i;
                    i.animating = !1, n.cssMode || (i.setTransition(0), N({
                        swiper: i,
                        runCallbacks: t,
                        direction: e,
                        step: "End"
                    }))
                }
            },
            slide: H,
            loop: W,
            grabCursor: {
                setGrabCursor: function(t) {
                    const e = this;
                    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
                    const i = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
                    e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    }))
                },
                unsetGrabCursor: function() {
                    const t = this;
                    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    })))
                }
            },
            events: {
                attachEvents: function() {
                    const t = this,
                        {
                            params: e
                        } = t;
                    t.onTouchStart = B.bind(t), t.onTouchMove = q.bind(t), t.onTouchEnd = Y.bind(t), t.onDocumentTouchStart = K.bind(t), e.cssMode && (t.onScroll = U.bind(t)), t.onClick = X.bind(t), t.onLoad = Q.bind(t), Z(t, "on")
                },
                detachEvents: function() {
                    Z(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const t = this,
                        {
                            realIndex: e,
                            initialized: i,
                            params: n,
                            el: s
                        } = t,
                        r = n.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
                    if (!o || t.currentBreakpoint === o) return;
                    const a = (o in r ? r[o] : void 0) || t.originalParams,
                        l = J(t, n),
                        c = J(t, a),
                        d = t.params.grabCursor,
                        u = a.grabCursor,
                        p = n.enabled;
                    l && !c ? (s.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), t.emitContainerClasses()) : !l && c && (s.classList.add(`${n.containerModifierClass}grid`), (a.grid.fill && "column" === a.grid.fill || !a.grid.fill && "column" === n.grid.fill) && s.classList.add(`${n.containerModifierClass}grid-column`), t.emitContainerClasses()), d && !u ? t.unsetGrabCursor() : !d && u && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        if (void 0 === a[e]) return;
                        const i = n[e] && n[e].enabled,
                            s = a[e] && a[e].enabled;
                        i && !s && t[e].disable(), !i && s && t[e].enable()
                    }));
                    const f = a.direction && a.direction !== n.direction,
                        g = n.loop && (a.slidesPerView !== n.slidesPerView || f),
                        m = n.loop;
                    f && i && t.changeDirection(), h(t.params, a);
                    const v = t.params.enabled,
                        y = t.params.loop;
                    Object.assign(t, {
                        allowTouchMove: t.params.allowTouchMove,
                        allowSlideNext: t.params.allowSlideNext,
                        allowSlidePrev: t.params.allowSlidePrev
                    }), p && !v ? t.disable() : !p && v && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", a), i && (g ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !m && y ? (t.loopCreate(e), t.updateSlides()) : m && !y && t.loopDestroy()), t.emit("breakpoint", a)
                },
                getBreakpoint: function(t, e, i) {
                    if (void 0 === e && (e = "window"), !t || "container" === e && !i) return;
                    let n = !1;
                    const s = r(),
                        o = "window" === e ? s.innerHeight : i.clientHeight,
                        a = Object.keys(t).map((t => {
                            if ("string" == typeof t && 0 === t.indexOf("@")) {
                                const e = parseFloat(t.substr(1));
                                return {
                                    value: o * e,
                                    point: t
                                }
                            }
                            return {
                                value: t,
                                point: t
                            }
                        }));
                    a.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
                    for (let t = 0; t < a.length; t += 1) {
                        const {
                            point: r,
                            value: o
                        } = a[t];
                        "window" === e ? s.matchMedia(`(min-width: ${o}px)`).matches && (n = r) : o <= i.clientWidth && (n = r)
                    }
                    return n || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const t = this,
                        {
                            isLocked: e,
                            params: i
                        } = t,
                        {
                            slidesOffsetBefore: n
                        } = i;
                    if (n) {
                        const e = t.slides.length - 1,
                            i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                        t.isLocked = t.size > i
                    } else t.isLocked = 1 === t.snapGrid.length;
                    !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const t = this,
                        {
                            classNames: e,
                            params: i,
                            rtl: n,
                            el: s,
                            device: r
                        } = t,
                        o = function(t, e) {
                            const i = [];
                            return t.forEach((t => {
                                "object" == typeof t ? Object.keys(t).forEach((n => {
                                    t[n] && i.push(e + n)
                                })) : "string" == typeof t && i.push(e + t)
                            })), i
                        }(["initialized", i.direction, {
                            "free-mode": t.params.freeMode && i.freeMode.enabled
                        }, {
                            autoheight: i.autoHeight
                        }, {
                            rtl: n
                        }, {
                            grid: i.grid && i.grid.rows > 1
                        }, {
                            "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": i.cssMode
                        }, {
                            centered: i.cssMode && i.centeredSlides
                        }, {
                            "watch-progress": i.watchSlidesProgress
                        }], i.containerModifierClass);
                    e.push(...o), s.classList.add(...e), t.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        el: t,
                        classNames: e
                    } = this;
                    t && "string" != typeof t && (t.classList.remove(...e), this.emitContainerClasses())
                }
            }
        },
        nt = {};
    class st {
        constructor() {
            let t, e;
            for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
            1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? e = s[0] : [t, e] = s, e || (e = {}), e = h({}, e), t && !e.el && (e.el = t);
            const o = n();
            if (e.el && "string" == typeof e.el && o.querySelectorAll(e.el).length > 1) {
                const t = [];
                return o.querySelectorAll(e.el).forEach((i => {
                    const n = h({}, e, {
                        el: i
                    });
                    t.push(new st(n))
                })), t
            }
            const a = this;
            a.__swiper__ = !0, a.support = P(), a.device = D({
                userAgent: e.userAgent
            }), a.browser = L(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], e.modules && Array.isArray(e.modules) && a.modules.push(...e.modules);
            const l = {};
            a.modules.forEach((t => {
                t({
                    params: e,
                    swiper: a,
                    extendParams: et(e, l),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }));
            const c = h({}, tt, l);
            return a.params = h({}, c, nt, e), a.originalParams = h({}, a.params), a.passedParams = h({}, e), a.params && a.params.on && Object.keys(a.params.on).forEach((t => {
                a.on(t, a.params.on[t])
            })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a.emit("_swiper"), a.params.init && a.init(), a
        }
        getDirectionLabel(t) {
            return this.isHorizontal() ? t : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[t]
        }
        getSlideIndex(t) {
            const {
                slidesEl: e,
                params: i
            } = this, n = x(g(e, `.${i.slideClass}, swiper-slide`)[0]);
            return x(t) - n
        }
        getSlideIndexByData(t) {
            return this.getSlideIndex(this.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0])
        }
        recalcSlides() {
            const {
                slidesEl: t,
                params: e
            } = this;
            this.slides = g(t, `.${e.slideClass}, swiper-slide`)
        }
        enable() {
            const t = this;
            t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }
        disable() {
            const t = this;
            t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }
        setProgress(t, e) {
            const i = this;
            t = Math.min(Math.max(t, 0), 1);
            const n = i.minTranslate(),
                s = (i.maxTranslate() - n) * t + n;
            i.translateTo(s, void 0 === e ? 0 : e), i.updateActiveIndex(), i.updateSlidesClasses()
        }
        emitContainerClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
            t.emit("_containerClasses", e.join(" "))
        }
        getSlideClasses(t) {
            const e = this;
            return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = [];
            t.slides.forEach((i => {
                const n = t.getSlideClasses(i);
                e.push({
                    slideEl: i,
                    classNames: n
                }), t.emit("_slideClass", i, n)
            })), t.emit("_slideClasses", e)
        }
        slidesPerViewDynamic(t, e) {
            void 0 === t && (t = "current"), void 0 === e && (e = !1);
            const {
                params: i,
                slides: n,
                slidesGrid: s,
                slidesSizesGrid: r,
                size: o,
                activeIndex: a
            } = this;
            let l = 1;
            if ("number" == typeof i.slidesPerView) return i.slidesPerView;
            if (i.centeredSlides) {
                let t, e = n[a] ? Math.ceil(n[a].swiperSlideSize) : 0;
                for (let i = a + 1; i < n.length; i += 1) n[i] && !t && (e += Math.ceil(n[i].swiperSlideSize), l += 1, e > o && (t = !0));
                for (let i = a - 1; i >= 0; i -= 1) n[i] && !t && (e += n[i].swiperSlideSize, l += 1, e > o && (t = !0))
            } else if ("current" === t)
                for (let t = a + 1; t < n.length; t += 1)(e ? s[t] + r[t] - s[a] < o : s[t] - s[a] < o) && (l += 1);
            else
                for (let t = a - 1; t >= 0; t -= 1) s[a] - s[t] < o && (l += 1);
            return l
        }
        update() {
            const t = this;
            if (!t || t.destroyed) return;
            const {
                snapGrid: e,
                params: i
            } = t;

            function n() {
                const e = t.rtlTranslate ? -1 * t.translate : t.translate,
                    i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
            }
            let s;
            if (i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
                    e.complete && z(t, e)
                })), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) n(), i.autoHeight && t.updateAutoHeight();
            else {
                if (("auto" === i.slidesPerView || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
                    const e = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
                    s = t.slideTo(e.length - 1, 0, !1, !0)
                } else s = t.slideTo(t.activeIndex, 0, !1, !0);
                s || n()
            }
            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }
        changeDirection(t, e) {
            void 0 === e && (e = !0);
            const i = this,
                n = i.params.direction;
            return t || (t = "horizontal" === n ? "vertical" : "horizontal"), t === n || "horizontal" !== t && "vertical" !== t || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((e => {
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            })), i.emit("changeDirection"), e && i.update()), i
        }
        changeLanguageDirection(t) {
            const e = this;
            e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
        }
        mount(t) {
            const e = this;
            if (e.mounted) return !0;
            let i = t || e.params.el;
            if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
            i.swiper = e, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === e.params.swiperElementNodeName.toUpperCase() && (e.isElement = !0);
            const n = () => `.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let s = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(n()) : g(i, n())[0];
            return !s && e.params.createElements && (s = v("div", e.params.wrapperClass), i.append(s), g(i, `.${e.params.slideClass}`).forEach((t => {
                s.append(t)
            }))), Object.assign(e, {
                el: i,
                wrapperEl: s,
                slidesEl: e.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : s,
                hostEl: e.isElement ? i.parentNode.host : i,
                mounted: !0,
                rtl: "rtl" === i.dir.toLowerCase() || "rtl" === b(i, "direction"),
                rtlTranslate: "horizontal" === e.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === b(i, "direction")),
                wrongRTL: "-webkit-box" === b(s, "display")
            }), !0
        }
        init(t) {
            const e = this;
            if (e.initialized) return e;
            if (!1 === e.mount(t)) return e;
            e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.params.loop && e.loopCreate(), e.attachEvents();
            const i = [...e.el.querySelectorAll('[loading="lazy"]')];
            return e.isElement && i.push(...e.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((t => {
                t.complete ? z(e, t) : t.addEventListener("load", (t => {
                    z(e, t.target)
                }))
            })), F(e), e.initialized = !0, F(e), e.emit("init"), e.emit("afterInit"), e
        }
        destroy(t, e) {
            void 0 === t && (t = !0), void 0 === e && (e = !0);
            const i = this,
                {
                    params: n,
                    el: s,
                    wrapperEl: r,
                    slides: o
                } = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), s && "string" != typeof s && s.removeAttribute("style"), r && r.removeAttribute("style"), o && o.length && o.forEach((t => {
                t.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), t.removeAttribute("style"), t.removeAttribute("data-swiper-slide-index")
            }))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((t => {
                i.off(t)
            })), !1 !== t && (i.el && "string" != typeof i.el && (i.el.swiper = null), function(t) {
                const e = t;
                Object.keys(e).forEach((t => {
                    try {
                        e[t] = null
                    } catch (t) {}
                    try {
                        delete e[t]
                    } catch (t) {}
                }))
            }(i)), i.destroyed = !0), null
        }
        static extendDefaults(t) {
            h(nt, t)
        }
        static get extendedDefaults() {
            return nt
        }
        static get defaults() {
            return tt
        }
        static installModule(t) {
            st.prototype.__modules__ || (st.prototype.__modules__ = []);
            const e = st.prototype.__modules__;
            "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }
        static use(t) {
            return Array.isArray(t) ? (t.forEach((t => st.installModule(t))), st) : (st.installModule(t), st)
        }
    }

    function rt(t, e, i, n) {
        return t.params.createElements && Object.keys(n).forEach((s => {
            if (!i[s] && !0 === i.auto) {
                let r = g(t.el, `.${n[s]}`)[0];
                r || (r = v("div", n[s]), r.className = n[s], t.el.append(r)), i[s] = r, e[s] = r
            }
        })), i
    }

    function ot(t) {
        return void 0 === t && (t = ""), `.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function at(t) {
        const e = this,
            {
                params: i,
                slidesEl: n
            } = e;
        i.loop && e.loopDestroy();
        const s = t => {
            if ("string" == typeof t) {
                const e = document.createElement("div");
                e.innerHTML = t, n.append(e.children[0]), e.innerHTML = ""
            } else n.append(t)
        };
        if ("object" == typeof t && "length" in t)
            for (let e = 0; e < t.length; e += 1) t[e] && s(t[e]);
        else s(t);
        e.recalcSlides(), i.loop && e.loopCreate(), i.observer && !e.isElement || e.update()
    }

    function lt(t) {
        const e = this,
            {
                params: i,
                activeIndex: n,
                slidesEl: s
            } = e;
        i.loop && e.loopDestroy();
        let r = n + 1;
        const o = t => {
            if ("string" == typeof t) {
                const e = document.createElement("div");
                e.innerHTML = t, s.prepend(e.children[0]), e.innerHTML = ""
            } else s.prepend(t)
        };
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && o(t[e]);
            r = n + t.length
        } else o(t);
        e.recalcSlides(), i.loop && e.loopCreate(), i.observer && !e.isElement || e.update(), e.slideTo(r, 0, !1)
    }

    function ct(t, e) {
        const i = this,
            {
                params: n,
                activeIndex: s,
                slidesEl: r
            } = i;
        let o = s;
        n.loop && (o -= i.loopedSlides, i.loopDestroy(), i.recalcSlides());
        const a = i.slides.length;
        if (t <= 0) return void i.prependSlide(e);
        if (t >= a) return void i.appendSlide(e);
        let l = o > t ? o + 1 : o;
        const c = [];
        for (let e = a - 1; e >= t; e -= 1) {
            const t = i.slides[e];
            t.remove(), c.unshift(t)
        }
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && r.append(e[t]);
            l = o > t ? o + e.length : o
        } else r.append(e);
        for (let t = 0; t < c.length; t += 1) r.append(c[t]);
        i.recalcSlides(), n.loop && i.loopCreate(), n.observer && !i.isElement || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
    }

    function dt(t) {
        const e = this,
            {
                params: i,
                activeIndex: n
            } = e;
        let s = n;
        i.loop && (s -= e.loopedSlides, e.loopDestroy());
        let r, o = s;
        if ("object" == typeof t && "length" in t) {
            for (let i = 0; i < t.length; i += 1) r = t[i], e.slides[r] && e.slides[r].remove(), r < o && (o -= 1);
            o = Math.max(o, 0)
        } else r = t, e.slides[r] && e.slides[r].remove(), r < o && (o -= 1), o = Math.max(o, 0);
        e.recalcSlides(), i.loop && e.loopCreate(), i.observer && !e.isElement || e.update(), i.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1)
    }

    function ht() {
        const t = this,
            e = [];
        for (let i = 0; i < t.slides.length; i += 1) e.push(i);
        t.removeSlide(e)
    }

    function ut(t) {
        const {
            effect: e,
            swiper: i,
            on: n,
            setTranslate: s,
            setTransition: r,
            overwriteParams: o,
            perspective: a,
            recreateShadows: l,
            getEffectParams: c
        } = t;
        let d;
        n("beforeInit", (() => {
            if (i.params.effect !== e) return;
            i.classNames.push(`${i.params.containerModifierClass}${e}`), a && a() && i.classNames.push(`${i.params.containerModifierClass}3d`);
            const t = o ? o() : {};
            Object.assign(i.params, t), Object.assign(i.originalParams, t)
        })), n("setTranslate", (() => {
            i.params.effect === e && s()
        })), n("setTransition", ((t, n) => {
            i.params.effect === e && r(n)
        })), n("transitionEnd", (() => {
            if (i.params.effect === e && l) {
                if (!c || !c().slideShadows) return;
                i.slides.forEach((t => {
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => t.remove()))
                })), l()
            }
        })), n("virtualUpdate", (() => {
            i.params.effect === e && (i.slides.length || (d = !0), requestAnimationFrame((() => {
                d && i.slides && i.slides.length && (s(), d = !1)
            })))
        }))
    }

    function pt(t, e) {
        const i = f(e);
        return i !== e && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i
    }

    function ft(t) {
        let {
            swiper: e,
            duration: i,
            transformElements: n,
            allSlides: s
        } = t;
        const {
            activeIndex: r
        } = e;
        if (e.params.virtualTranslate && 0 !== i) {
            let t, i = !1;
            t = s ? n : n.filter((t => {
                const i = t.classList.contains("swiper-slide-transform") ? (t => t.parentElement ? t.parentElement : e.slides.filter((e => e.shadowRoot && e.shadowRoot === t.parentNode))[0])(t) : t;
                return e.getSlideIndex(i) === r
            })), t.forEach((t => {
                _(t, (() => {
                    if (i) return;
                    if (!e || e.destroyed) return;
                    i = !0, e.animating = !1;
                    const t = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.wrapperEl.dispatchEvent(t)
                }))
            }))
        }
    }

    function gt(t, e, i) {
        const n = `swiper-slide-shadow${i?`-${i}`:""}${t?` swiper-slide-shadow-${t}`:""}`,
            s = f(e);
        let r = s.querySelector(`.${n.split(" ").join(".")}`);
        return r || (r = v("div", n.split(" ")), s.append(r)), r
    }
    Object.keys(it).forEach((t => {
        Object.keys(it[t]).forEach((e => {
            st.prototype[e] = it[t][e]
        }))
    })), st.use([function(t) {
        let {
            swiper: e,
            on: i,
            emit: n
        } = t;
        const s = r();
        let o = null,
            a = null;
        const l = () => {
                e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
            },
            c = () => {
                e && !e.destroyed && e.initialized && n("orientationchange")
            };
        i("init", (() => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver ? e && !e.destroyed && e.initialized && (o = new ResizeObserver((t => {
                a = s.requestAnimationFrame((() => {
                    const {
                        width: i,
                        height: n
                    } = e;
                    let s = i,
                        r = n;
                    t.forEach((t => {
                        let {
                            contentBoxSize: i,
                            contentRect: n,
                            target: o
                        } = t;
                        o && o !== e.el || (s = n ? n.width : (i[0] || i).inlineSize, r = n ? n.height : (i[0] || i).blockSize)
                    })), s === i && r === n || l()
                }))
            })), o.observe(e.el)) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", c))
        })), i("destroy", (() => {
            a && s.cancelAnimationFrame(a), o && o.unobserve && e.el && (o.unobserve(e.el), o = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", c)
        }))
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n,
            emit: s
        } = t;
        const o = [],
            a = r(),
            l = function(t, i) {
                void 0 === i && (i = {});
                const n = new(a.MutationObserver || a.WebkitMutationObserver)((t => {
                    if (e.__preventObserver__) return;
                    if (1 === t.length) return void s("observerUpdate", t[0]);
                    const i = function() {
                        s("observerUpdate", t[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(i) : a.setTimeout(i, 0)
                }));
                n.observe(t, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: e.isElement || (void 0 === i.childList || i).childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), o.push(n)
            };
        i({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), n("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = w(e.hostEl);
                    for (let e = 0; e < t.length; e += 1) l(t[e])
                }
                l(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), l(e.wrapperEl, {
                    attributes: !1
                })
            }
        })), n("destroy", (() => {
            o.forEach((t => {
                t.disconnect()
            })), o.splice(0, o.length)
        }))
    }]);
    const mt = [function(t) {
        let e, {
            swiper: i,
            extendParams: s,
            on: r,
            emit: o
        } = t;
        s({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const a = n();
        i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const l = a.createElement("div");

        function c(t, e) {
            const n = i.params.virtual;
            if (n.cache && i.virtual.cache[e]) return i.virtual.cache[e];
            let s;
            return n.renderSlide ? (s = n.renderSlide.call(i, t, e), "string" == typeof s && (l.innerHTML = s, s = l.children[0])) : s = i.isElement ? v("swiper-slide") : v("div", i.params.slideClass), s.setAttribute("data-swiper-slide-index", e), n.renderSlide || (s.innerHTML = t), n.cache && (i.virtual.cache[e] = s), s
        }

        function d(t, e) {
            const {
                slidesPerView: n,
                slidesPerGroup: s,
                centeredSlides: r,
                loop: a,
                initialSlide: l
            } = i.params;
            if (e && !a && l > 0) return;
            const {
                addSlidesBefore: d,
                addSlidesAfter: h
            } = i.params.virtual, {
                from: u,
                to: p,
                slides: f,
                slidesGrid: m,
                offset: v
            } = i.virtual;
            i.params.cssMode || i.updateActiveIndex();
            const y = i.activeIndex || 0;
            let b, x, w;
            b = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (x = Math.floor(n / 2) + s + h, w = Math.floor(n / 2) + s + d) : (x = n + (s - 1) + h, w = (a ? n : s) + d);
            let _ = y - w,
                S = y + x;
            a || (_ = Math.max(_, 0), S = Math.min(S, f.length - 1));
            let E = (i.slidesGrid[_] || 0) - (i.slidesGrid[0] || 0);

            function T() {
                i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), o("virtualUpdate")
            }
            if (a && y >= w ? (_ -= w, r || (E += i.slidesGrid[0])) : a && y < w && (_ = -w, r && (E += i.slidesGrid[0])), Object.assign(i.virtual, {
                    from: _,
                    to: S,
                    offset: E,
                    slidesGrid: i.slidesGrid,
                    slidesBefore: w,
                    slidesAfter: x
                }), u === _ && p === S && !t) return i.slidesGrid !== m && E !== v && i.slides.forEach((t => {
                t.style[b] = E - Math.abs(i.cssOverflowAdjustment()) + "px"
            })), i.updateProgress(), void o("virtualUpdate");
            if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                offset: E,
                from: _,
                to: S,
                slides: function() {
                    const t = [];
                    for (let e = _; e <= S; e += 1) t.push(f[e]);
                    return t
                }()
            }), void(i.params.virtual.renderExternalUpdate ? T() : o("virtualUpdate"));
            const M = [],
                k = [],
                C = t => {
                    let e = t;
                    return t < 0 ? e = f.length + t : e >= f.length && (e -= f.length), e
                };
            if (t) i.slides.filter((t => t.matches(`.${i.params.slideClass}, swiper-slide`))).forEach((t => {
                t.remove()
            }));
            else
                for (let t = u; t <= p; t += 1)
                    if (t < _ || t > S) {
                        const e = C(t);
                        i.slides.filter((t => t.matches(`.${i.params.slideClass}[data-swiper-slide-index="${e}"], swiper-slide[data-swiper-slide-index="${e}"]`))).forEach((t => {
                            t.remove()
                        }))
                    } const P = a ? -f.length : 0,
                D = a ? 2 * f.length : f.length;
            for (let e = P; e < D; e += 1)
                if (e >= _ && e <= S) {
                    const i = C(e);
                    void 0 === p || t ? k.push(i) : (e > p && k.push(i), e < u && M.push(i))
                }
            if (k.forEach((t => {
                    i.slidesEl.append(c(f[t], t))
                })), a)
                for (let t = M.length - 1; t >= 0; t -= 1) {
                    const e = M[t];
                    i.slidesEl.prepend(c(f[e], e))
                } else M.sort(((t, e) => e - t)), M.forEach((t => {
                    i.slidesEl.prepend(c(f[t], t))
                }));
            g(i.slidesEl, ".swiper-slide, swiper-slide").forEach((t => {
                t.style[b] = E - Math.abs(i.cssOverflowAdjustment()) + "px"
            })), T()
        }
        r("beforeInit", (() => {
            if (!i.params.virtual.enabled) return;
            let t;
            if (void 0 === i.passedParams.virtual.slides) {
                const e = [...i.slidesEl.children].filter((t => t.matches(`.${i.params.slideClass}, swiper-slide`)));
                e && e.length && (i.virtual.slides = [...e], t = !0, e.forEach(((t, e) => {
                    t.setAttribute("data-swiper-slide-index", e), i.virtual.cache[e] = t, t.remove()
                })))
            }
            t || (i.virtual.slides = i.params.virtual.slides), i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, d(!1, !0)
        })), r("setTranslate", (() => {
            i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(e), e = setTimeout((() => {
                d()
            }), 100)) : d())
        })), r("init update resize", (() => {
            i.params.virtual.enabled && i.params.cssMode && u(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
        })), Object.assign(i.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length" in t)
                    for (let e = 0; e < t.length; e += 1) t[e] && i.virtual.slides.push(t[e]);
                else i.virtual.slides.push(t);
                d(!0)
            },
            prependSlide: function(t) {
                const e = i.activeIndex;
                let n = e + 1,
                    s = 1;
                if (Array.isArray(t)) {
                    for (let e = 0; e < t.length; e += 1) t[e] && i.virtual.slides.unshift(t[e]);
                    n = e + t.length, s = t.length
                } else i.virtual.slides.unshift(t);
                if (i.params.virtual.cache) {
                    const t = i.virtual.cache,
                        e = {};
                    Object.keys(t).forEach((i => {
                        const n = t[i],
                            r = n.getAttribute("data-swiper-slide-index");
                        r && n.setAttribute("data-swiper-slide-index", parseInt(r, 10) + s), e[parseInt(i, 10) + s] = n
                    })), i.virtual.cache = e
                }
                d(!0), i.slideTo(n, 0)
            },
            removeSlide: function(t) {
                if (null == t) return;
                let e = i.activeIndex;
                if (Array.isArray(t))
                    for (let n = t.length - 1; n >= 0; n -= 1) i.params.virtual.cache && (delete i.virtual.cache[t[n]], Object.keys(i.virtual.cache).forEach((e => {
                        e > t && (i.virtual.cache[e - 1] = i.virtual.cache[e], i.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete i.virtual.cache[e])
                    }))), i.virtual.slides.splice(t[n], 1), t[n] < e && (e -= 1), e = Math.max(e, 0);
                else i.params.virtual.cache && (delete i.virtual.cache[t], Object.keys(i.virtual.cache).forEach((e => {
                    e > t && (i.virtual.cache[e - 1] = i.virtual.cache[e], i.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete i.virtual.cache[e])
                }))), i.virtual.slides.splice(t, 1), t < e && (e -= 1), e = Math.max(e, 0);
                d(!0), i.slideTo(e, 0)
            },
            removeAllSlides: function() {
                i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), d(!0), i.slideTo(0, 0)
            },
            update: d
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: s,
            emit: o
        } = t;
        const a = n(),
            l = r();

        function c(t) {
            if (!e.enabled) return;
            const {
                rtlTranslate: i
            } = e;
            let n = t;
            n.originalEvent && (n = n.originalEvent);
            const s = n.keyCode || n.charCode,
                r = e.params.keyboard.pageUpDown,
                c = r && 33 === s,
                d = r && 34 === s,
                h = 37 === s,
                u = 39 === s,
                p = 38 === s,
                f = 40 === s;
            if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && f || d)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && h || e.isVertical() && p || c)) return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (c || d || h || u || p || f)) {
                    let t = !1;
                    if (w(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && 0 === w(e.el, `.${e.params.slideActiveClass}`).length) return;
                    const n = e.el,
                        s = n.clientWidth,
                        r = n.clientHeight,
                        o = l.innerWidth,
                        a = l.innerHeight,
                        c = y(n);
                    i && (c.left -= n.scrollLeft);
                    const d = [
                        [c.left, c.top],
                        [c.left + s, c.top],
                        [c.left, c.top + r],
                        [c.left + s, c.top + r]
                    ];
                    for (let e = 0; e < d.length; e += 1) {
                        const i = d[e];
                        if (i[0] >= 0 && i[0] <= o && i[1] >= 0 && i[1] <= a) {
                            if (0 === i[0] && 0 === i[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((c || d || h || u) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((d || u) && !i || (c || h) && i) && e.slideNext(), ((c || h) && !i || (d || u) && i) && e.slidePrev()) : ((c || d || p || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (d || f) && e.slideNext(), (c || p) && e.slidePrev()), o("keyPress", s)
            }
        }

        function d() {
            e.keyboard.enabled || (a.addEventListener("keydown", c), e.keyboard.enabled = !0)
        }

        function h() {
            e.keyboard.enabled && (a.removeEventListener("keydown", c), e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        }, i({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), s("init", (() => {
            e.params.keyboard.enabled && d()
        })), s("destroy", (() => {
            e.keyboard.enabled && h()
        })), Object.assign(e.keyboard, {
            enable: d,
            disable: h
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n,
            emit: s
        } = t;
        const o = r();
        let c;
        i({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }), e.mousewheel = {
            enabled: !1
        };
        let d, h = l();
        const u = [];

        function p() {
            e.enabled && (e.mouseEntered = !0)
        }

        function f() {
            e.enabled && (e.mouseEntered = !1)
        }

        function g(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && l() - h < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && l() - h < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), s("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), s("scroll", t.raw)), h = (new o.Date).getTime(), 1))
        }

        function m(t) {
            let i = t,
                n = !0;
            if (!e.enabled) return;
            if (t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
            const r = e.params.mousewheel;
            e.params.cssMode && i.preventDefault();
            let o = e.el;
            "container" !== e.params.mousewheel.eventsTarget && (o = document.querySelector(e.params.mousewheel.eventsTarget));
            const h = o && o.contains(i.target);
            if (!e.mouseEntered && !h && !r.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            let p = 0;
            const f = e.rtlTranslate ? -1 : 1,
                m = function(t) {
                    let e = 0,
                        i = 0,
                        n = 0,
                        s = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = s, s = 0), (n || s) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: i,
                        pixelX: n,
                        pixelY: s
                    }
                }(i);
            if (r.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                    p = -m.pixelX * f
                } else {
                    if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                    p = -m.pixelY
                }
            else p = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * f : -m.pixelY;
            if (0 === p) return !0;
            r.invert && (p = -p);
            let v = e.getTranslate() + p * r.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), n = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), n && e.params.nested && i.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                        time: l(),
                        delta: Math.abs(p),
                        direction: Math.sign(p)
                    },
                    n = d && t.time < d.time + 500 && t.delta <= d.delta && t.direction === d.direction;
                if (!n) {
                    d = void 0;
                    let o = e.getTranslate() + p * r.sensitivity;
                    const l = e.isBeginning,
                        h = e.isEnd;
                    if (o >= e.minTranslate() && (o = e.minTranslate()), o <= e.maxTranslate() && (o = e.maxTranslate()), e.setTransition(0), e.setTranslate(o), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!l && e.isBeginning || !h && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
                            direction: t.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), e.params.freeMode.sticky) {
                        clearTimeout(c), c = void 0, u.length >= 15 && u.shift();
                        const i = u.length ? u[u.length - 1] : void 0,
                            n = u[0];
                        if (u.push(t), i && (t.delta > i.delta || t.direction !== i.direction)) u.splice(0);
                        else if (u.length >= 15 && t.time - n.time < 500 && n.delta - t.delta >= 1 && t.delta <= 6) {
                            const i = p > 0 ? .8 : .2;
                            d = t, u.splice(0), c = a((() => {
                                !e.destroyed && e.params && e.slideToClosest(e.params.speed, !0, void 0, i)
                            }), 0)
                        }
                        c || (c = a((() => {
                            !e.destroyed && e.params && (d = t, u.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5))
                        }), 500))
                    }
                    if (n || s("scroll", i), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), r.releaseOnEdges && (o === e.minTranslate() || o === e.maxTranslate())) return !0
                }
            } else {
                const i = {
                    time: l(),
                    delta: Math.abs(p),
                    direction: Math.sign(p),
                    raw: t
                };
                u.length >= 2 && u.shift();
                const n = u.length ? u[u.length - 1] : void 0;
                if (u.push(i), n ? (i.direction !== n.direction || i.delta > n.delta || i.time > n.time + 150) && g(i) : g(i), function(t) {
                        const i = e.params.mousewheel;
                        if (t.direction < 0) {
                            if (e.isEnd && !e.params.loop && i.releaseOnEdges) return !0
                        } else if (e.isBeginning && !e.params.loop && i.releaseOnEdges) return !0;
                        return !1
                    }(i)) return !0
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        }

        function v(t) {
            let i = e.el;
            "container" !== e.params.mousewheel.eventsTarget && (i = document.querySelector(e.params.mousewheel.eventsTarget)), i[t]("mouseenter", p), i[t]("mouseleave", f), i[t]("wheel", m)
        }

        function y() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", m), !0) : !e.mousewheel.enabled && (v("addEventListener"), e.mousewheel.enabled = !0, !0)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, m), !0) : !!e.mousewheel.enabled && (v("removeEventListener"), e.mousewheel.enabled = !1, !0)
        }
        n("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && y()
        })), n("destroy", (() => {
            e.params.cssMode && y(), e.mousewheel.enabled && b()
        })), Object.assign(e.mousewheel, {
            enable: y,
            disable: b
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n,
            emit: s
        } = t;

        function r(t) {
            let i;
            return t && "string" == typeof t && e.isElement && (i = e.el.querySelector(t), i) ? i : (t && ("string" == typeof t && (i = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && i && i.length > 1 && 1 === e.el.querySelectorAll(t).length ? i = e.el.querySelector(t) : i && 1 === i.length && (i = i[0])), t && !i ? t : i)
        }

        function o(t, i) {
            const n = e.params.navigation;
            (t = E(t)).forEach((t => {
                t && (t.classList[i ? "add" : "remove"](...n.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = i), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](n.lockClass))
            }))
        }

        function a() {
            const {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            if (e.params.loop) return o(i, !1), void o(t, !1);
            o(i, e.isBeginning && !e.params.rewind), o(t, e.isEnd && !e.params.rewind)
        }

        function l(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
        }

        function c(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
        }

        function d() {
            const t = e.params.navigation;
            if (e.params.navigation = rt(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            let i = r(t.nextEl),
                n = r(t.prevEl);
            Object.assign(e.navigation, {
                nextEl: i,
                prevEl: n
            }), i = E(i), n = E(n);
            const s = (i, n) => {
                i && i.addEventListener("click", "next" === n ? c : l), !e.enabled && i && i.classList.add(...t.lockClass.split(" "))
            };
            i.forEach((t => s(t, "next"))), n.forEach((t => s(t, "prev")))
        }

        function h() {
            let {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            t = E(t), i = E(i);
            const n = (t, i) => {
                t.removeEventListener("click", "next" === i ? c : l), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
            };
            t.forEach((t => n(t, "next"))), i.forEach((t => n(t, "prev")))
        }
        i({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {
            nextEl: null,
            prevEl: null
        }, n("init", (() => {
            !1 === e.params.navigation.enabled ? u() : (d(), a())
        })), n("toEdge fromEdge lock unlock", (() => {
            a()
        })), n("destroy", (() => {
            h()
        })), n("enable disable", (() => {
            let {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            t = E(t), i = E(i), e.enabled ? a() : [...t, ...i].filter((t => !!t)).forEach((t => t.classList.add(e.params.navigation.lockClass)))
        })), n("click", ((t, i) => {
            let {
                nextEl: n,
                prevEl: r
            } = e.navigation;
            n = E(n), r = E(r);
            const o = i.target;
            let a = r.includes(o) || n.includes(o);
            if (e.isElement && !a) {
                const t = i.path || i.composedPath && i.composedPath();
                t && (a = t.find((t => n.includes(t) || r.includes(t))))
            }
            if (e.params.navigation.hideOnClick && !a) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                let t;
                n.length ? t = n[0].classList.contains(e.params.navigation.hiddenClass) : r.length && (t = r[0].classList.contains(e.params.navigation.hiddenClass)), s(!0 === t ? "navigationShow" : "navigationHide"), [...n, ...r].filter((t => !!t)).forEach((t => t.classList.toggle(e.params.navigation.hiddenClass)))
            }
        }));
        const u = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), h()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), a()
            },
            disable: u,
            update: a,
            init: d,
            destroy: h
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n,
            emit: s
        } = t;
        const r = "swiper-pagination";
        let o;
        i({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: t => t,
                formatFractionTotal: t => t,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), e.pagination = {
            el: null,
            bullets: []
        };
        let a = 0;

        function l() {
            return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }

        function c(t, i) {
            const {
                bulletActiveClass: n
            } = e.params.pagination;
            t && (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${n}-${i}`), (t = t[("prev" === i ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${n}-${i}-${i}`))
        }

        function d(t) {
            const i = t.target.closest(ot(e.params.pagination.bulletClass));
            if (!i) return;
            t.preventDefault();
            const n = x(i) * e.params.slidesPerGroup;
            if (e.params.loop) {
                if (e.realIndex === n) return;
                const t = (s = e.realIndex, r = n, (r %= o = e.slides.length) == 1 + (s %= o) ? "next" : r === s - 1 ? "previous" : void 0);
                "next" === t ? e.slideNext() : "previous" === t ? e.slidePrev() : e.slideToLoop(n)
            } else e.slideTo(n);
            var s, r, o
        }

        function h() {
            const t = e.rtl,
                i = e.params.pagination;
            if (l()) return;
            let n, r, d = e.pagination.el;
            d = E(d);
            const h = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                u = e.params.loop ? Math.ceil(h / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (r = e.previousRealIndex || 0, n = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (n = e.snapIndex, r = e.previousSnapIndex) : (r = e.previousIndex || 0, n = e.activeIndex || 0), "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const s = e.pagination.bullets;
                let l, h, u;
                if (i.dynamicBullets && (o = S(s[0], e.isHorizontal() ? "width" : "height", !0), d.forEach((t => {
                        t.style[e.isHorizontal() ? "width" : "height"] = o * (i.dynamicMainBullets + 4) + "px"
                    })), i.dynamicMainBullets > 1 && void 0 !== r && (a += n - (r || 0), a > i.dynamicMainBullets - 1 ? a = i.dynamicMainBullets - 1 : a < 0 && (a = 0)), l = Math.max(n - a, 0), h = l + (Math.min(s.length, i.dynamicMainBullets) - 1), u = (h + l) / 2), s.forEach((t => {
                        const e = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t => `${i.bulletActiveClass}${t}`))].map((t => "string" == typeof t && t.includes(" ") ? t.split(" ") : t)).flat();
                        t.classList.remove(...e)
                    })), d.length > 1) s.forEach((t => {
                    const s = x(t);
                    s === n ? t.classList.add(...i.bulletActiveClass.split(" ")) : e.isElement && t.setAttribute("part", "bullet"), i.dynamicBullets && (s >= l && s <= h && t.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), s === l && c(t, "prev"), s === h && c(t, "next"))
                }));
                else {
                    const t = s[n];
                    if (t && t.classList.add(...i.bulletActiveClass.split(" ")), e.isElement && s.forEach(((t, e) => {
                            t.setAttribute("part", e === n ? "bullet-active" : "bullet")
                        })), i.dynamicBullets) {
                        const t = s[l],
                            e = s[h];
                        for (let t = l; t <= h; t += 1) s[t] && s[t].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                        c(t, "prev"), c(e, "next")
                    }
                }
                if (i.dynamicBullets) {
                    const n = Math.min(s.length, i.dynamicMainBullets + 4),
                        r = (o * n - o) / 2 - u * o,
                        a = t ? "right" : "left";
                    s.forEach((t => {
                        t.style[e.isHorizontal() ? a : "top"] = `${r}px`
                    }))
                }
            }
            d.forEach(((t, r) => {
                if ("fraction" === i.type && (t.querySelectorAll(ot(i.currentClass)).forEach((t => {
                        t.textContent = i.formatFractionCurrent(n + 1)
                    })), t.querySelectorAll(ot(i.totalClass)).forEach((t => {
                        t.textContent = i.formatFractionTotal(u)
                    }))), "progressbar" === i.type) {
                    let s;
                    s = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const r = (n + 1) / u;
                    let o = 1,
                        a = 1;
                    "horizontal" === s ? o = r : a = r, t.querySelectorAll(ot(i.progressbarFillClass)).forEach((t => {
                        t.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${a})`, t.style.transitionDuration = `${e.params.speed}ms`
                    }))
                }
                "custom" === i.type && i.renderCustom ? (t.innerHTML = i.renderCustom(e, n + 1, u), 0 === r && s("paginationRender", t)) : (0 === r && s("paginationRender", t), s("paginationUpdate", t)), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass)
            }))
        }

        function u() {
            const t = e.params.pagination;
            if (l()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
            let n = e.pagination.el;
            n = E(n);
            let r = "";
            if ("bullets" === t.type) {
                let n = e.params.loop ? Math.ceil(i / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && n > i && (n = i);
                for (let i = 0; i < n; i += 1) t.renderBullet ? r += t.renderBullet.call(e, i, t.bulletClass) : r += `<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], n.forEach((i => {
                "custom" !== t.type && (i.innerHTML = r || ""), "bullets" === t.type && e.pagination.bullets.push(...i.querySelectorAll(ot(t.bulletClass)))
            })), "custom" !== t.type && s("paginationRender", n[0])
        }

        function p() {
            e.params.pagination = rt(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let i;
            "string" == typeof t.el && e.isElement && (i = e.el.querySelector(t.el)), i || "string" != typeof t.el || (i = [...document.querySelectorAll(t.el)]), i || (i = t.el), i && 0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(i) && i.length > 1 && (i = [...e.el.querySelectorAll(t.el)], i.length > 1 && (i = i.filter((t => w(t, ".swiper")[0] === e.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(e.pagination, {
                el: i
            }), i = E(i), i.forEach((i => {
                "bullets" === t.type && t.clickable && i.classList.add(...(t.clickableClass || "").split(" ")), i.classList.add(t.modifierClass + t.type), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.classList.add(`${t.modifierClass}${t.type}-dynamic`), a = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.classList.add(t.progressbarOppositeClass), t.clickable && i.addEventListener("click", d), e.enabled || i.classList.add(t.lockClass)
            })))
        }

        function f() {
            const t = e.params.pagination;
            if (l()) return;
            let i = e.pagination.el;
            i && (i = E(i), i.forEach((i => {
                i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (i.classList.remove(...(t.clickableClass || "").split(" ")), i.removeEventListener("click", d))
            }))), e.pagination.bullets && e.pagination.bullets.forEach((e => e.classList.remove(...t.bulletActiveClass.split(" "))))
        }
        n("changeDirection", (() => {
            if (!e.pagination || !e.pagination.el) return;
            const t = e.params.pagination;
            let {
                el: i
            } = e.pagination;
            i = E(i), i.forEach((i => {
                i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
            }))
        })), n("init", (() => {
            !1 === e.params.pagination.enabled ? g() : (p(), u(), h())
        })), n("activeIndexChange", (() => {
            void 0 === e.snapIndex && h()
        })), n("snapIndexChange", (() => {
            h()
        })), n("snapGridLengthChange", (() => {
            u(), h()
        })), n("destroy", (() => {
            f()
        })), n("enable disable", (() => {
            let {
                el: t
            } = e.pagination;
            t && (t = E(t), t.forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))))
        })), n("lock unlock", (() => {
            h()
        })), n("click", ((t, i) => {
            const n = i.target,
                r = E(e.pagination.el);
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !n.classList.contains(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
                const t = r[0].classList.contains(e.params.pagination.hiddenClass);
                s(!0 === t ? "paginationShow" : "paginationHide"), r.forEach((t => t.classList.toggle(e.params.pagination.hiddenClass)))
            }
        }));
        const g = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: t
            } = e.pagination;
            t && (t = E(t), t.forEach((t => t.classList.add(e.params.pagination.paginationDisabledClass)))), f()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                let {
                    el: t
                } = e.pagination;
                t && (t = E(t), t.forEach((t => t.classList.remove(e.params.pagination.paginationDisabledClass)))), p(), u(), h()
            },
            disable: g,
            render: u,
            update: h,
            init: p,
            destroy: f
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: s,
            emit: r
        } = t;
        const l = n();
        let c, d, h, u, p = !1,
            f = null,
            g = null;

        function m() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: i
            } = e, {
                dragEl: n,
                el: s
            } = t, r = e.params.scrollbar, o = e.params.loop ? e.progressLoop : e.progress;
            let a = d,
                l = (h - d) * o;
            i ? (l = -l, l > 0 ? (a = d - l, l = 0) : -l + d > h && (a = h + l)) : l < 0 ? (a = d + l, l = 0) : l + d > h && (a = h - l), e.isHorizontal() ? (n.style.transform = `translate3d(${l}px, 0, 0)`, n.style.width = `${a}px`) : (n.style.transform = `translate3d(0px, ${l}px, 0)`, n.style.height = `${a}px`), r.hide && (clearTimeout(f), s.style.opacity = 1, f = setTimeout((() => {
                s.style.opacity = 0, s.style.transitionDuration = "400ms"
            }), 1e3))
        }

        function b() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                dragEl: i,
                el: n
            } = t;
            i.style.width = "", i.style.height = "", h = e.isHorizontal() ? n.offsetWidth : n.offsetHeight, u = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), d = "auto" === e.params.scrollbar.dragSize ? h * u : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i.style.width = `${d}px` : i.style.height = `${d}px`, n.style.display = u >= 1 ? "none" : "", e.params.scrollbar.hide && (n.style.opacity = 0), e.params.watchOverflow && e.enabled && t.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
        }

        function x(t) {
            return e.isHorizontal() ? t.clientX : t.clientY
        }

        function w(t) {
            const {
                scrollbar: i,
                rtlTranslate: n
            } = e, {
                el: s
            } = i;
            let r;
            r = (x(t) - y(s)[e.isHorizontal() ? "left" : "top"] - (null !== c ? c : d / 2)) / (h - d), r = Math.max(Math.min(r, 1), 0), n && (r = 1 - r);
            const o = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
            e.updateProgress(o), e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function _(t) {
            const i = e.params.scrollbar,
                {
                    scrollbar: n,
                    wrapperEl: s
                } = e,
                {
                    el: o,
                    dragEl: a
                } = n;
            p = !0, c = t.target === a ? x(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), s.style.transitionDuration = "100ms", a.style.transitionDuration = "100ms", w(t), clearTimeout(g), o.style.transitionDuration = "0ms", i.hide && (o.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", t)
        }

        function S(t) {
            const {
                scrollbar: i,
                wrapperEl: n
            } = e, {
                el: s,
                dragEl: o
            } = i;
            p && (t.preventDefault && t.cancelable ? t.preventDefault() : t.returnValue = !1, w(t), n.style.transitionDuration = "0ms", s.style.transitionDuration = "0ms", o.style.transitionDuration = "0ms", r("scrollbarDragMove", t))
        }

        function T(t) {
            const i = e.params.scrollbar,
                {
                    scrollbar: n,
                    wrapperEl: s
                } = e,
                {
                    el: o
                } = n;
            p && (p = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", s.style.transitionDuration = ""), i.hide && (clearTimeout(g), g = a((() => {
                o.style.opacity = 0, o.style.transitionDuration = "400ms"
            }), 1e3)), r("scrollbarDragEnd", t), i.snapOnRelease && e.slideToClosest())
        }

        function M(t) {
            const {
                scrollbar: i,
                params: n
            } = e, s = i.el;
            if (!s) return;
            const r = s,
                o = !!n.passiveListeners && {
                    passive: !1,
                    capture: !1
                },
                a = !!n.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
            if (!r) return;
            const c = "on" === t ? "addEventListener" : "removeEventListener";
            r[c]("pointerdown", _, o), l[c]("pointermove", S, o), l[c]("pointerup", T, a)
        }

        function k() {
            const {
                scrollbar: t,
                el: i
            } = e;
            e.params.scrollbar = rt(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const n = e.params.scrollbar;
            if (!n.el) return;
            let s, r;
            if ("string" == typeof n.el && e.isElement && (s = e.el.querySelector(n.el)), s || "string" != typeof n.el) s || (s = n.el);
            else if (s = l.querySelectorAll(n.el), !s.length) return;
            e.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.querySelectorAll(n.el).length && (s = i.querySelector(n.el)), s.length > 0 && (s = s[0]), s.classList.add(e.isHorizontal() ? n.horizontalClass : n.verticalClass), s && (r = s.querySelector(ot(e.params.scrollbar.dragClass)), r || (r = v("div", e.params.scrollbar.dragClass), s.append(r))), Object.assign(t, {
                el: s,
                dragEl: r
            }), n.draggable && e.params.scrollbar.el && e.scrollbar.el && M("on"), s && s.classList[e.enabled ? "remove" : "add"](...o(e.params.scrollbar.lockClass))
        }

        function C() {
            const t = e.params.scrollbar,
                i = e.scrollbar.el;
            i && i.classList.remove(...o(e.isHorizontal() ? t.horizontalClass : t.verticalClass)), e.params.scrollbar.el && e.scrollbar.el && M("off")
        }
        i({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), e.scrollbar = {
            el: null,
            dragEl: null
        }, s("changeDirection", (() => {
            if (!e.scrollbar || !e.scrollbar.el) return;
            const t = e.params.scrollbar;
            let {
                el: i
            } = e.scrollbar;
            i = E(i), i.forEach((i => {
                i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
            }))
        })), s("init", (() => {
            !1 === e.params.scrollbar.enabled ? P() : (k(), b(), m())
        })), s("update resize observerUpdate lock unlock changeDirection", (() => {
            b()
        })), s("setTranslate", (() => {
            m()
        })), s("setTransition", ((t, i) => {
            ! function(t) {
                e.params.scrollbar.el && e.scrollbar.el && (e.scrollbar.dragEl.style.transitionDuration = `${t}ms`)
            }(i)
        })), s("enable disable", (() => {
            const {
                el: t
            } = e.scrollbar;
            t && t.classList[e.enabled ? "remove" : "add"](...o(e.params.scrollbar.lockClass))
        })), s("destroy", (() => {
            C()
        }));
        const P = () => {
            e.el.classList.add(...o(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...o(e.params.scrollbar.scrollbarDisabledClass)), C()
        };
        Object.assign(e.scrollbar, {
            enable: () => {
                e.el.classList.remove(...o(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...o(e.params.scrollbar.scrollbarDisabledClass)), k(), b(), m()
            },
            disable: P,
            updateSize: b,
            setTranslate: m,
            init: k,
            destroy: C
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            parallax: {
                enabled: !1
            }
        });
        const s = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            r = (t, i) => {
                const {
                    rtl: n
                } = e, s = n ? -1 : 1, r = t.getAttribute("data-swiper-parallax") || "0";
                let o = t.getAttribute("data-swiper-parallax-x"),
                    a = t.getAttribute("data-swiper-parallax-y");
                const l = t.getAttribute("data-swiper-parallax-scale"),
                    c = t.getAttribute("data-swiper-parallax-opacity"),
                    d = t.getAttribute("data-swiper-parallax-rotate");
                if (o || a ? (o = o || "0", a = a || "0") : e.isHorizontal() ? (o = r, a = "0") : (a = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * s + "%" : o * i * s + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i + "%" : a * i + "px", null != c) {
                    const e = c - (c - 1) * (1 - Math.abs(i));
                    t.style.opacity = e
                }
                let h = `translate3d(${o}, ${a}, 0px)`;
                null != l && (h += ` scale(${l-(l-1)*(1-Math.abs(i))})`), d && null != d && (h += ` rotate(${d*i*-1}deg)`), t.style.transform = h
            },
            o = () => {
                const {
                    el: t,
                    slides: i,
                    progress: n,
                    snapGrid: o,
                    isElement: a
                } = e, l = g(t, s);
                e.isElement && l.push(...g(e.hostEl, s)), l.forEach((t => {
                    r(t, n)
                })), i.forEach(((t, i) => {
                    let a = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(i / 2) - n * (o.length - 1)), a = Math.min(Math.max(a, -1), 1), t.querySelectorAll(`${s}, [data-swiper-parallax-rotate]`).forEach((t => {
                        r(t, a)
                    }))
                }))
            };
        n("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), n("init", (() => {
            e.params.parallax.enabled && o()
        })), n("setTranslate", (() => {
            e.params.parallax.enabled && o()
        })), n("setTransition", ((t, i) => {
            e.params.parallax.enabled && function(t) {
                void 0 === t && (t = e.params.speed);
                const {
                    el: i,
                    hostEl: n
                } = e, r = [...i.querySelectorAll(s)];
                e.isElement && r.push(...n.querySelectorAll(s)), r.forEach((e => {
                    let i = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (i = 0), e.style.transitionDuration = `${i}ms`
                }))
            }(i)
        }))
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n,
            emit: s
        } = t;
        const o = r();
        i({
            zoom: {
                enabled: !1,
                limitToOriginalSize: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {
            enabled: !1
        };
        let a, l, d = 1,
            h = !1;
        const u = [],
            p = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            },
            f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            m = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v, b = 1;

        function x() {
            if (u.length < 2) return 1;
            const t = u[0].pageX,
                e = u[0].pageY,
                i = u[1].pageX,
                n = u[1].pageY;
            return Math.sqrt((i - t) ** 2 + (n - e) ** 2)
        }

        function _() {
            const t = e.params.zoom,
                i = p.imageWrapEl.getAttribute("data-swiper-zoom") || t.maxRatio;
            if (t.limitToOriginalSize && p.imageEl && p.imageEl.naturalWidth) {
                const t = p.imageEl.naturalWidth / p.imageEl.offsetWidth;
                return Math.min(t, i)
            }
            return i
        }

        function S(t) {
            const i = e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
            return !!t.target.matches(i) || e.slides.filter((e => e.contains(t.target))).length > 0
        }

        function E(t) {
            if ("mouse" === t.pointerType && u.splice(0, u.length), !S(t)) return;
            const i = e.params.zoom;
            if (a = !1, l = !1, u.push(t), !(u.length < 2)) {
                if (a = !0, p.scaleStart = x(), !p.slideEl) {
                    p.slideEl = t.target.closest(`.${e.params.slideClass}, swiper-slide`), p.slideEl || (p.slideEl = e.slides[e.activeIndex]);
                    let n = p.slideEl.querySelector(`.${i.containerClass}`);
                    if (n && (n = n.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), p.imageEl = n, p.imageWrapEl = n ? w(p.imageEl, `.${i.containerClass}`)[0] : void 0, !p.imageWrapEl) return void(p.imageEl = void 0);
                    p.maxRatio = _()
                }
                if (p.imageEl) {
                    const [t, e] = function() {
                        if (u.length < 2) return {
                            x: null,
                            y: null
                        };
                        const t = p.imageEl.getBoundingClientRect();
                        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - t.x - o.scrollX) / d, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - t.y - o.scrollY) / d]
                    }();
                    p.originX = t, p.originY = e, p.imageEl.style.transitionDuration = "0ms"
                }
                h = !0
            }
        }

        function T(t) {
            if (!S(t)) return;
            const i = e.params.zoom,
                n = e.zoom,
                s = u.findIndex((e => e.pointerId === t.pointerId));
            s >= 0 && (u[s] = t), u.length < 2 || (l = !0, p.scaleMove = x(), p.imageEl && (n.scale = p.scaleMove / p.scaleStart * d, n.scale > p.maxRatio && (n.scale = p.maxRatio - 1 + (n.scale - p.maxRatio + 1) ** .5), n.scale < i.minRatio && (n.scale = i.minRatio + 1 - (i.minRatio - n.scale + 1) ** .5), p.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`))
        }

        function M(t) {
            if (!S(t)) return;
            if ("mouse" === t.pointerType && "pointerout" === t.type) return;
            const i = e.params.zoom,
                n = e.zoom,
                s = u.findIndex((e => e.pointerId === t.pointerId));
            s >= 0 && u.splice(s, 1), a && l && (a = !1, l = !1, p.imageEl && (n.scale = Math.max(Math.min(n.scale, p.maxRatio), i.minRatio), p.imageEl.style.transitionDuration = `${e.params.speed}ms`, p.imageEl.style.transform = `translate3d(0,0,0) scale(${n.scale})`, d = n.scale, h = !1, n.scale > 1 && p.slideEl ? p.slideEl.classList.add(`${i.zoomedSlideClass}`) : n.scale <= 1 && p.slideEl && p.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === n.scale && (p.originX = 0, p.originY = 0, p.slideEl = void 0)))
        }

        function k() {
            e.touchEventsData.preventTouchMoveFromPointerMove = !1
        }

        function C(t) {
            if (!S(t) || ! function(t) {
                    const i = `.${e.params.zoom.containerClass}`;
                    return !!t.target.matches(i) || [...e.hostEl.querySelectorAll(i)].filter((e => e.contains(t.target))).length > 0
                }(t)) return;
            const i = e.zoom;
            if (!p.imageEl) return;
            if (!f.isTouched || !p.slideEl) return;
            f.isMoved || (f.width = p.imageEl.offsetWidth || p.imageEl.clientWidth, f.height = p.imageEl.offsetHeight || p.imageEl.clientHeight, f.startX = c(p.imageWrapEl, "x") || 0, f.startY = c(p.imageWrapEl, "y") || 0, p.slideWidth = p.slideEl.offsetWidth, p.slideHeight = p.slideEl.offsetHeight, p.imageWrapEl.style.transitionDuration = "0ms");
            const n = f.width * i.scale,
                s = f.height * i.scale;
            if (f.minX = Math.min(p.slideWidth / 2 - n / 2, 0), f.maxX = -f.minX, f.minY = Math.min(p.slideHeight / 2 - s / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = u.length > 0 ? u[0].pageX : t.pageX, f.touchesCurrent.y = u.length > 0 ? u[0].pageY : t.pageY, Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (e.allowClick = !1), !f.isMoved && !h) {
                if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return f.isTouched = !1, void k();
                if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return f.isTouched = !1, void k()
            }
            t.cancelable && t.preventDefault(), t.stopPropagation(), clearTimeout(v), e.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout((() => {
                k()
            })), f.isMoved = !0;
            const r = (i.scale - d) / (p.maxRatio - e.params.zoom.minRatio),
                {
                    originX: o,
                    originY: a
                } = p;
            f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + r * (f.width - 2 * o), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + r * (f.height - 2 * a), f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), m.prevPositionX || (m.prevPositionX = f.touchesCurrent.x), m.prevPositionY || (m.prevPositionY = f.touchesCurrent.y), m.prevTime || (m.prevTime = Date.now()), m.x = (f.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2, m.y = (f.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2, Math.abs(f.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0), Math.abs(f.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0), m.prevPositionX = f.touchesCurrent.x, m.prevPositionY = f.touchesCurrent.y, m.prevTime = Date.now(), p.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
        }

        function P() {
            const t = e.zoom;
            p.slideEl && e.activeIndex !== e.slides.indexOf(p.slideEl) && (p.imageEl && (p.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), p.imageWrapEl && (p.imageWrapEl.style.transform = "translate3d(0,0,0)"), p.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), t.scale = 1, d = 1, p.slideEl = void 0, p.imageEl = void 0, p.imageWrapEl = void 0, p.originX = 0, p.originY = 0)
        }

        function D(t) {
            const i = e.zoom,
                n = e.params.zoom;
            if (!p.slideEl) {
                t && t.target && (p.slideEl = t.target.closest(`.${e.params.slideClass}, swiper-slide`)), p.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.slideEl = g(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : p.slideEl = e.slides[e.activeIndex]);
                let i = p.slideEl.querySelector(`.${n.containerClass}`);
                i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), p.imageEl = i, p.imageWrapEl = i ? w(p.imageEl, `.${n.containerClass}`)[0] : void 0
            }
            if (!p.imageEl || !p.imageWrapEl) return;
            let s, r, a, l, c, h, u, m, v, b, x, S, E, T, M, k, C, P;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), p.slideEl.classList.add(`${n.zoomedSlideClass}`), void 0 === f.touchesStart.x && t ? (s = t.pageX, r = t.pageY) : (s = f.touchesStart.x, r = f.touchesStart.y);
            const D = "number" == typeof t ? t : null;
            1 === d && D && (s = void 0, r = void 0, f.touchesStart.x = void 0, f.touchesStart.y = void 0);
            const L = _();
            i.scale = D || L, d = D || L, !t || 1 === d && D ? (u = 0, m = 0) : (C = p.slideEl.offsetWidth, P = p.slideEl.offsetHeight, a = y(p.slideEl).left + o.scrollX, l = y(p.slideEl).top + o.scrollY, c = a + C / 2 - s, h = l + P / 2 - r, v = p.imageEl.offsetWidth || p.imageEl.clientWidth, b = p.imageEl.offsetHeight || p.imageEl.clientHeight, x = v * i.scale, S = b * i.scale, E = Math.min(C / 2 - x / 2, 0), T = Math.min(P / 2 - S / 2, 0), M = -E, k = -T, u = c * i.scale, m = h * i.scale, u < E && (u = E), u > M && (u = M), m < T && (m = T), m > k && (m = k)), D && 1 === i.scale && (p.originX = 0, p.originY = 0), p.imageWrapEl.style.transitionDuration = "300ms", p.imageWrapEl.style.transform = `translate3d(${u}px, ${m}px,0)`, p.imageEl.style.transitionDuration = "300ms", p.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`
        }

        function L() {
            const t = e.zoom,
                i = e.params.zoom;
            if (!p.slideEl) {
                e.params.virtual && e.params.virtual.enabled && e.virtual ? p.slideEl = g(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : p.slideEl = e.slides[e.activeIndex];
                let t = p.slideEl.querySelector(`.${i.containerClass}`);
                t && (t = t.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), p.imageEl = t, p.imageWrapEl = t ? w(p.imageEl, `.${i.containerClass}`)[0] : void 0
            }
            p.imageEl && p.imageWrapEl && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, d = 1, f.touchesStart.x = void 0, f.touchesStart.y = void 0, p.imageWrapEl.style.transitionDuration = "300ms", p.imageWrapEl.style.transform = "translate3d(0,0,0)", p.imageEl.style.transitionDuration = "300ms", p.imageEl.style.transform = "translate3d(0,0,0) scale(1)", p.slideEl.classList.remove(`${i.zoomedSlideClass}`), p.slideEl = void 0, p.originX = 0, p.originY = 0)
        }

        function A(t) {
            const i = e.zoom;
            i.scale && 1 !== i.scale ? L() : D(t)
        }

        function O() {
            return {
                passiveListener: !!e.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function I() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const {
                passiveListener: i,
                activeListenerWithCapture: n
            } = O();
            e.wrapperEl.addEventListener("pointerdown", E, i), e.wrapperEl.addEventListener("pointermove", T, n), ["pointerup", "pointercancel", "pointerout"].forEach((t => {
                e.wrapperEl.addEventListener(t, M, i)
            })), e.wrapperEl.addEventListener("pointermove", C, n)
        }

        function z() {
            const t = e.zoom;
            if (!t.enabled) return;
            t.enabled = !1;
            const {
                passiveListener: i,
                activeListenerWithCapture: n
            } = O();
            e.wrapperEl.removeEventListener("pointerdown", E, i), e.wrapperEl.removeEventListener("pointermove", T, n), ["pointerup", "pointercancel", "pointerout"].forEach((t => {
                e.wrapperEl.removeEventListener(t, M, i)
            })), e.wrapperEl.removeEventListener("pointermove", C, n)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => b,
            set(t) {
                if (b !== t) {
                    const e = p.imageEl,
                        i = p.slideEl;
                    s("zoomChange", t, e, i)
                }
                b = t
            }
        }), n("init", (() => {
            e.params.zoom.enabled && I()
        })), n("destroy", (() => {
            z()
        })), n("touchStart", ((t, i) => {
            e.zoom.enabled && function(t) {
                const i = e.device;
                if (!p.imageEl) return;
                if (f.isTouched) return;
                i.android && t.cancelable && t.preventDefault(), f.isTouched = !0;
                const n = u.length > 0 ? u[0] : t;
                f.touchesStart.x = n.pageX, f.touchesStart.y = n.pageY
            }(i)
        })), n("touchEnd", ((t, i) => {
            e.zoom.enabled && function() {
                const t = e.zoom;
                if (!p.imageEl) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void(f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let i = 300,
                    n = 300;
                const s = m.x * i,
                    r = f.currentX + s,
                    o = m.y * n,
                    a = f.currentY + o;
                0 !== m.x && (i = Math.abs((r - f.currentX) / m.x)), 0 !== m.y && (n = Math.abs((a - f.currentY) / m.y));
                const l = Math.max(i, n);
                f.currentX = r, f.currentY = a;
                const c = f.width * t.scale,
                    d = f.height * t.scale;
                f.minX = Math.min(p.slideWidth / 2 - c / 2, 0), f.maxX = -f.minX, f.minY = Math.min(p.slideHeight / 2 - d / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), p.imageWrapEl.style.transitionDuration = `${l}ms`, p.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
            }()
        })), n("doubleTap", ((t, i) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && A(i)
        })), n("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && P()
        })), n("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && P()
        })), Object.assign(e.zoom, {
            enable: I,
            disable: z,
            in: D,
            out: L,
            toggle: A
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;

        function s(t, e) {
            const i = function() {
                let t, e, i;
                return (n, s) => {
                    for (e = -1, t = n.length; t - e > 1;) i = t + e >> 1, n[i] <= s ? e = i : t = i;
                    return t
                }
            }();
            let n, s;
            return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) {
                return t ? (s = i(this.x, t), n = s - 1, (t - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0
            }, this
        }

        function r() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        i({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {
            control: void 0
        }, n("beforeInit", (() => {
            "undefined" != typeof window && ("string" == typeof e.params.controller.control || e.params.controller.control instanceof HTMLElement) ? ("string" == typeof e.params.controller.control ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach((t => {
                if (e.controller.control || (e.controller.control = []), t && t.swiper) e.controller.control.push(t.swiper);
                else if (t) {
                    const i = `${e.params.eventsPrefix}init`,
                        n = s => {
                            e.controller.control.push(s.detail[0]), e.update(), t.removeEventListener(i, n)
                        };
                    t.addEventListener(i, n)
                }
            })) : e.controller.control = e.params.controller.control
        })), n("update", (() => {
            r()
        })), n("resize", (() => {
            r()
        })), n("observerUpdate", (() => {
            r()
        })), n("setTranslate", ((t, i, n) => {
            e.controller.control && !e.controller.control.destroyed && e.controller.setTranslate(i, n)
        })), n("setTransition", ((t, i, n) => {
            e.controller.control && !e.controller.control.destroyed && e.controller.setTransition(i, n)
        })), Object.assign(e.controller, {
            setTranslate: function(t, i) {
                const n = e.controller.control;
                let r, o;
                const a = e.constructor;

                function l(t) {
                    if (t.destroyed) return;
                    const i = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (function(t) {
                        e.controller.spline = e.params.loop ? new s(e.slidesGrid, t.slidesGrid) : new s(e.snapGrid, t.snapGrid)
                    }(t), o = -e.controller.spline.interpolate(-i)), o && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), o = (i - e.minTranslate()) * r + t.minTranslate()), e.params.controller.inverse && (o = t.maxTranslate() - o), t.updateProgress(o), t.setTranslate(o, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (let t = 0; t < n.length; t += 1) n[t] !== i && n[t] instanceof a && l(n[t]);
                else n instanceof a && i !== n && l(n)
            },
            setTransition: function(t, i) {
                const n = e.constructor,
                    s = e.controller.control;
                let r;

                function o(i) {
                    i.destroyed || (i.setTransition(t, e), 0 !== t && (i.transitionStart(), i.params.autoHeight && a((() => {
                        i.updateAutoHeight()
                    })), _(i.wrapperEl, (() => {
                        s && i.transitionEnd()
                    }))))
                }
                if (Array.isArray(s))
                    for (r = 0; r < s.length; r += 1) s[r] !== i && s[r] instanceof n && o(s[r]);
                else s instanceof n && i !== s && o(s)
            }
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: s
        } = t;
        i({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
                scrollOnFocus: !0
            }
        }), e.a11y = {
            clicked: !1
        };
        let r, o, a = null,
            l = (new Date).getTime();

        function c(t) {
            const e = a;
            0 !== e.length && (e.innerHTML = "", e.innerHTML = t)
        }

        function d(t) {
            (t = E(t)).forEach((t => {
                t.setAttribute("tabIndex", "0")
            }))
        }

        function h(t) {
            (t = E(t)).forEach((t => {
                t.setAttribute("tabIndex", "-1")
            }))
        }

        function u(t, e) {
            (t = E(t)).forEach((t => {
                t.setAttribute("role", e)
            }))
        }

        function p(t, e) {
            (t = E(t)).forEach((t => {
                t.setAttribute("aria-roledescription", e)
            }))
        }

        function f(t, e) {
            (t = E(t)).forEach((t => {
                t.setAttribute("aria-label", e)
            }))
        }

        function g(t) {
            (t = E(t)).forEach((t => {
                t.setAttribute("aria-disabled", !0)
            }))
        }

        function m(t) {
            (t = E(t)).forEach((t => {
                t.setAttribute("aria-disabled", !1)
            }))
        }

        function y(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const i = e.params.a11y,
                n = t.target;
            if (!e.pagination || !e.pagination.el || n !== e.pagination.el && !e.pagination.el.contains(t.target) || t.target.matches(ot(e.params.pagination.bulletClass))) {
                if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
                    const t = E(e.navigation.prevEl);
                    E(e.navigation.nextEl).includes(n) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? c(i.lastSlideMessage) : c(i.nextSlideMessage)), t.includes(n) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? c(i.firstSlideMessage) : c(i.prevSlideMessage))
                }
                e.pagination && n.matches(ot(e.params.pagination.bulletClass)) && n.click()
            }
        }

        function b() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }

        function w() {
            return b() && e.params.pagination.clickable
        }
        const _ = (t, e, i) => {
                d(t), "BUTTON" !== t.tagName && (u(t, "button"), t.addEventListener("keydown", y)), f(t, i),
                    function(t, e) {
                        (t = E(t)).forEach((t => {
                            t.setAttribute("aria-controls", e)
                        }))
                    }(t, e)
            },
            S = t => {
                o && o !== t.target && !o.contains(t.target) && (r = !0), e.a11y.clicked = !0
            },
            T = () => {
                r = !1, requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        e.destroyed || (e.a11y.clicked = !1)
                    }))
                }))
            },
            M = t => {
                l = (new Date).getTime()
            },
            k = t => {
                if (e.a11y.clicked || !e.params.a11y.scrollOnFocus) return;
                if ((new Date).getTime() - l < 100) return;
                const i = t.target.closest(`.${e.params.slideClass}, swiper-slide`);
                if (!i || !e.slides.includes(i)) return;
                o = i;
                const n = e.slides.indexOf(i) === e.activeIndex,
                    s = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(i);
                n || s || t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame((() => {
                    r || (e.params.loop ? e.slideToLoop(parseInt(i.getAttribute("data-swiper-slide-index")), 0) : e.slideTo(e.slides.indexOf(i), 0), r = !1)
                })))
            },
            C = () => {
                const t = e.params.a11y;
                t.itemRoleDescriptionMessage && p(e.slides, t.itemRoleDescriptionMessage), t.slideRole && u(e.slides, t.slideRole);
                const i = e.slides.length;
                t.slideLabelMessage && e.slides.forEach(((n, s) => {
                    const r = e.params.loop ? parseInt(n.getAttribute("data-swiper-slide-index"), 10) : s;
                    f(n, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, i))
                }))
            };
        s("beforeInit", (() => {
            a = v("span", e.params.a11y.notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true")
        })), s("afterInit", (() => {
            e.params.a11y.enabled && (() => {
                const t = e.params.a11y;
                e.el.append(a);
                const i = e.el;
                t.containerRoleDescriptionMessage && p(i, t.containerRoleDescriptionMessage), t.containerMessage && f(i, t.containerMessage);
                const s = e.wrapperEl,
                    r = t.id || s.getAttribute("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var o;
                const l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                var c;
                c = r, E(s).forEach((t => {
                        t.setAttribute("id", c)
                    })),
                    function(t, e) {
                        (t = E(t)).forEach((t => {
                            t.setAttribute("aria-live", e)
                        }))
                    }(s, l), C();
                let {
                    nextEl: d,
                    prevEl: h
                } = e.navigation ? e.navigation : {};
                d = E(d), h = E(h), d && d.forEach((e => _(e, r, t.nextSlideMessage))), h && h.forEach((e => _(e, r, t.prevSlideMessage))), w() && E(e.pagination.el).forEach((t => {
                    t.addEventListener("keydown", y)
                })), n().addEventListener("visibilitychange", M), e.el.addEventListener("focus", k, !0), e.el.addEventListener("focus", k, !0), e.el.addEventListener("pointerdown", S, !0), e.el.addEventListener("pointerup", T, !0)
            })()
        })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            e.params.a11y.enabled && C()
        })), s("fromEdge toEdge afterInit lock unlock", (() => {
            e.params.a11y.enabled && function() {
                if (e.params.loop || e.params.rewind || !e.navigation) return;
                const {
                    nextEl: t,
                    prevEl: i
                } = e.navigation;
                i && (e.isBeginning ? (g(i), h(i)) : (m(i), d(i))), t && (e.isEnd ? (g(t), h(t)) : (m(t), d(t)))
            }()
        })), s("paginationUpdate", (() => {
            e.params.a11y.enabled && function() {
                const t = e.params.a11y;
                b() && e.pagination.bullets.forEach((i => {
                    e.params.pagination.clickable && (d(i), e.params.pagination.renderBullet || (u(i, "button"), f(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, x(i) + 1)))), i.matches(ot(e.params.pagination.bulletActiveClass)) ? i.setAttribute("aria-current", "true") : i.removeAttribute("aria-current")
                }))
            }()
        })), s("destroy", (() => {
            e.params.a11y.enabled && function() {
                a && a.remove();
                let {
                    nextEl: t,
                    prevEl: i
                } = e.navigation ? e.navigation : {};
                t = E(t), i = E(i), t && t.forEach((t => t.removeEventListener("keydown", y))), i && i.forEach((t => t.removeEventListener("keydown", y))), w() && E(e.pagination.el).forEach((t => {
                    t.removeEventListener("keydown", y)
                })), n().removeEventListener("visibilitychange", M), e.el && "string" != typeof e.el && (e.el.removeEventListener("focus", k, !0), e.el.removeEventListener("pointerdown", S, !0), e.el.removeEventListener("pointerup", T, !0))
            }()
        }))
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let s = !1,
            o = {};
        const a = t => t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = t => {
                const e = r();
                let i;
                i = t ? new URL(t) : e.location;
                const n = i.pathname.slice(1).split("/").filter((t => "" !== t)),
                    s = n.length;
                return {
                    key: n[s - 2],
                    value: n[s - 1]
                }
            },
            c = (t, i) => {
                const n = r();
                if (!s || !e.params.history.enabled) return;
                let o;
                o = e.params.url ? new URL(e.params.url) : n.location;
                const l = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${i}"]`) : e.slides[i];
                let c = a(l.getAttribute("data-history"));
                if (e.params.history.root.length > 0) {
                    let i = e.params.history.root;
                    "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), c = `${i}/${t?`${t}/`:""}${c}`
                } else o.pathname.includes(t) || (c = `${t?`${t}/`:""}${c}`);
                e.params.history.keepQuery && (c += o.search);
                const d = n.history.state;
                d && d.value === c || (e.params.history.replaceState ? n.history.replaceState({
                    value: c
                }, null, c) : n.history.pushState({
                    value: c
                }, null, c))
            },
            d = (t, i, n) => {
                if (i)
                    for (let s = 0, r = e.slides.length; s < r; s += 1) {
                        const r = e.slides[s];
                        if (a(r.getAttribute("data-history")) === i) {
                            const i = e.getSlideIndex(r);
                            e.slideTo(i, t, n)
                        }
                    } else e.slideTo(0, t, n)
            },
            h = () => {
                o = l(e.params.url), d(e.params.speed, o.value, !1)
            };
        n("init", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    s = !0, o = l(e.params.url), o.key || o.value ? (d(0, o.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", h)) : e.params.history.replaceState || t.addEventListener("popstate", h)
                }
            })()
        })), n("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                e.params.history.replaceState || t.removeEventListener("popstate", h)
            })()
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            s && c(e.params.history.key, e.activeIndex)
        })), n("slideChange", (() => {
            s && e.params.cssMode && c(e.params.history.key, e.activeIndex)
        }))
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            emit: s,
            on: o
        } = t, a = !1;
        const l = n(),
            c = r();
        i({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(t, i) {
                    if (e.virtual && e.params.virtual.enabled) {
                        const t = e.slides.filter((t => t.getAttribute("data-hash") === i))[0];
                        return t ? parseInt(t.getAttribute("data-swiper-slide-index"), 10) : 0
                    }
                    return e.getSlideIndex(g(e.slidesEl, `.${e.params.slideClass}[data-hash="${i}"], swiper-slide[data-hash="${i}"]`)[0])
                }
            }
        });
        const d = () => {
                s("hashChange");
                const t = l.location.hash.replace("#", ""),
                    i = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
                if (t !== (i ? i.getAttribute("data-hash") : "")) {
                    const i = e.params.hashNavigation.getSlideIndex(e, t);
                    if (void 0 === i || Number.isNaN(i)) return;
                    e.slideTo(i)
                }
            },
            h = () => {
                if (!a || !e.params.hashNavigation.enabled) return;
                const t = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex],
                    i = t ? t.getAttribute("data-hash") || t.getAttribute("data-history") : "";
                e.params.hashNavigation.replaceState && c.history && c.history.replaceState ? (c.history.replaceState(null, null, `#${i}` || ""), s("hashSet")) : (l.location.hash = i || "", s("hashSet"))
            };
        o("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                a = !0;
                const t = l.location.hash.replace("#", "");
                if (t) {
                    const i = 0,
                        n = e.params.hashNavigation.getSlideIndex(e, t);
                    e.slideTo(n || 0, i, e.params.runCallbacksOnInit, !0)
                }
                e.params.hashNavigation.watchState && c.addEventListener("hashchange", d)
            })()
        })), o("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && c.removeEventListener("hashchange", d)
        })), o("transitionEnd _freeModeNoMomentumRelease", (() => {
            a && h()
        })), o("slideChange", (() => {
            a && e.params.cssMode && h()
        }))
    }, function(t) {
        let e, i, {
            swiper: s,
            extendParams: r,
            on: o,
            emit: a,
            params: l
        } = t;
        s.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let c, d, h, u, p, f, g, m, v = l && l.autoplay ? l.autoplay.delay : 3e3,
            y = l && l.autoplay ? l.autoplay.delay : 3e3,
            b = (new Date).getTime();

        function x(t) {
            s && !s.destroyed && s.wrapperEl && t.target === s.wrapperEl && (s.wrapperEl.removeEventListener("transitionend", x), m || t.detail && t.detail.bySwiperTouchMove || M())
        }
        const w = () => {
                if (s.destroyed || !s.autoplay.running) return;
                s.autoplay.paused ? d = !0 : d && (y = c, d = !1);
                const t = s.autoplay.paused ? c : b + y - (new Date).getTime();
                s.autoplay.timeLeft = t, a("autoplayTimeLeft", t, t / v), i = requestAnimationFrame((() => {
                    w()
                }))
            },
            _ = t => {
                if (s.destroyed || !s.autoplay.running) return;
                cancelAnimationFrame(i), w();
                let n = void 0 === t ? s.params.autoplay.delay : t;
                v = s.params.autoplay.delay, y = s.params.autoplay.delay;
                const r = (() => {
                    let t;
                    if (t = s.virtual && s.params.virtual.enabled ? s.slides.filter((t => t.classList.contains("swiper-slide-active")))[0] : s.slides[s.activeIndex], t) return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(r) && r > 0 && void 0 === t && (n = r, v = r, y = r), c = n;
                const o = s.params.speed,
                    l = () => {
                        s && !s.destroyed && (s.params.autoplay.reverseDirection ? !s.isBeginning || s.params.loop || s.params.rewind ? (s.slidePrev(o, !0, !0), a("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(s.slides.length - 1, o, !0, !0), a("autoplay")) : !s.isEnd || s.params.loop || s.params.rewind ? (s.slideNext(o, !0, !0), a("autoplay")) : s.params.autoplay.stopOnLastSlide || (s.slideTo(0, o, !0, !0), a("autoplay")), s.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                            _()
                        }))))
                    };
                return n > 0 ? (clearTimeout(e), e = setTimeout((() => {
                    l()
                }), n)) : requestAnimationFrame((() => {
                    l()
                })), n
            },
            S = () => {
                b = (new Date).getTime(), s.autoplay.running = !0, _(), a("autoplayStart")
            },
            E = () => {
                s.autoplay.running = !1, clearTimeout(e), cancelAnimationFrame(i), a("autoplayStop")
            },
            T = (t, i) => {
                if (s.destroyed || !s.autoplay.running) return;
                clearTimeout(e), t || (g = !0);
                const n = () => {
                    a("autoplayPause"), s.params.autoplay.waitForTransition ? s.wrapperEl.addEventListener("transitionend", x) : M()
                };
                if (s.autoplay.paused = !0, i) return f && (c = s.params.autoplay.delay), f = !1, void n();
                const r = c || s.params.autoplay.delay;
                c = r - ((new Date).getTime() - b), s.isEnd && c < 0 && !s.params.loop || (c < 0 && (c = 0), n())
            },
            M = () => {
                s.isEnd && c < 0 && !s.params.loop || s.destroyed || !s.autoplay.running || (b = (new Date).getTime(), g ? (g = !1, _(c)) : _(), s.autoplay.paused = !1, a("autoplayResume"))
            },
            k = () => {
                if (s.destroyed || !s.autoplay.running) return;
                const t = n();
                "hidden" === t.visibilityState && (g = !0, T(!0)), "visible" === t.visibilityState && M()
            },
            C = t => {
                "mouse" === t.pointerType && (g = !0, m = !0, s.animating || s.autoplay.paused || T(!0))
            },
            P = t => {
                "mouse" === t.pointerType && (m = !1, s.autoplay.paused && M())
            };
        o("init", (() => {
            s.params.autoplay.enabled && (s.params.autoplay.pauseOnMouseEnter && (s.el.addEventListener("pointerenter", C), s.el.addEventListener("pointerleave", P)), n().addEventListener("visibilitychange", k), S())
        })), o("destroy", (() => {
            s.el && "string" != typeof s.el && (s.el.removeEventListener("pointerenter", C), s.el.removeEventListener("pointerleave", P)), n().removeEventListener("visibilitychange", k), s.autoplay.running && E()
        })), o("_freeModeStaticRelease", (() => {
            (u || g) && M()
        })), o("_freeModeNoMomentumRelease", (() => {
            s.params.autoplay.disableOnInteraction ? E() : T(!0, !0)
        })), o("beforeTransitionStart", ((t, e, i) => {
            !s.destroyed && s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? T(!0, !0) : E())
        })), o("sliderFirstMove", (() => {
            !s.destroyed && s.autoplay.running && (s.params.autoplay.disableOnInteraction ? E() : (h = !0, u = !1, g = !1, p = setTimeout((() => {
                g = !0, u = !0, T(!0)
            }), 200)))
        })), o("touchEnd", (() => {
            if (!s.destroyed && s.autoplay.running && h) {
                if (clearTimeout(p), clearTimeout(e), s.params.autoplay.disableOnInteraction) return u = !1, void(h = !1);
                u && s.params.cssMode && M(), u = !1, h = !1
            }
        })), o("slideChange", (() => {
            !s.destroyed && s.autoplay.running && (f = !0)
        })), Object.assign(s.autoplay, {
            start: S,
            stop: E,
            pause: T,
            resume: M
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: s
        } = t;
        i({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1,
            o = !1;

        function a() {
            const t = e.thumbs.swiper;
            if (!t || t.destroyed) return;
            const i = t.clickedIndex,
                n = t.clickedSlide;
            if (n && n.classList.contains(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let s;
            s = t.params.loop ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, e.params.loop ? e.slideToLoop(s) : e.slideTo(s)
        }

        function l() {
            const {
                thumbs: t
            } = e.params;
            if (r) return !1;
            r = !0;
            const i = e.constructor;
            if (t.swiper instanceof i) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), e.thumbs.swiper.update();
            else if (d(t.swiper)) {
                const n = Object.assign({}, t.swiper);
                Object.assign(n, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), e.thumbs.swiper = new i(n), o = !0
            }
            return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
        }

        function c(t) {
            const i = e.thumbs.swiper;
            if (!i || i.destroyed) return;
            const n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            let s = 1;
            const r = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (s = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (s = 1), s = Math.floor(s), i.slides.forEach((t => t.classList.remove(r))), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                for (let t = 0; t < s; t += 1) g(i.slidesEl, `[data-swiper-slide-index="${e.realIndex+t}"]`).forEach((t => {
                    t.classList.add(r)
                }));
            else
                for (let t = 0; t < s; t += 1) i.slides[e.realIndex + t] && i.slides[e.realIndex + t].classList.add(r);
            const o = e.params.thumbs.autoScrollOffset,
                a = o && !i.params.loop;
            if (e.realIndex !== i.realIndex || a) {
                const s = i.activeIndex;
                let r, l;
                if (i.params.loop) {
                    const t = i.slides.filter((t => t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`))[0];
                    r = i.slides.indexOf(t), l = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else r = e.realIndex, l = r > e.previousIndex ? "next" : "prev";
                a && (r += "next" === l ? o : -1 * o), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = r > s ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : r > s && i.params.slidesPerGroup, i.slideTo(r, t ? 0 : void 0))
            }
        }
        e.thumbs = {
            swiper: null
        }, s("beforeInit", (() => {
            const {
                thumbs: t
            } = e.params;
            if (t && t.swiper)
                if ("string" == typeof t.swiper || t.swiper instanceof HTMLElement) {
                    const i = n(),
                        s = () => {
                            const n = "string" == typeof t.swiper ? i.querySelector(t.swiper) : t.swiper;
                            if (n && n.swiper) t.swiper = n.swiper, l(), c(!0);
                            else if (n) {
                                const i = `${e.params.eventsPrefix}init`,
                                    s = r => {
                                        t.swiper = r.detail[0], n.removeEventListener(i, s), l(), c(!0), t.swiper.update(), e.update()
                                    };
                                n.addEventListener(i, s)
                            }
                            return n
                        },
                        r = () => {
                            e.destroyed || s() || requestAnimationFrame(r)
                        };
                    requestAnimationFrame(r)
                } else l(), c(!0)
        })), s("slideChange update resize observerUpdate", (() => {
            c()
        })), s("setTransition", ((t, i) => {
            const n = e.thumbs.swiper;
            n && !n.destroyed && n.setTransition(i)
        })), s("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && !t.destroyed && o && t.destroy()
        })), Object.assign(e.thumbs, {
            init: l,
            update: c
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            emit: n,
            once: s
        } = t;
        i({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchStart: function() {
                    if (e.params.cssMode) return;
                    const t = e.getTranslate();
                    e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                        currentPos: e.rtl ? e.translate : -e.translate
                    })
                },
                onTouchMove: function() {
                    if (e.params.cssMode) return;
                    const {
                        touchEventsData: t,
                        touches: i
                    } = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: i[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({
                        position: i[e.isHorizontal() ? "currentX" : "currentY"],
                        time: l()
                    })
                },
                onTouchEnd: function(t) {
                    let {
                        currentPos: i
                    } = t;
                    if (e.params.cssMode) return;
                    const {
                        params: r,
                        wrapperEl: o,
                        rtlTranslate: a,
                        snapGrid: c,
                        touchEventsData: d
                    } = e, h = l() - d.touchStartTime;
                    if (i < -e.minTranslate()) e.slideTo(e.activeIndex);
                    else if (i > -e.maxTranslate()) e.slides.length < c.length ? e.slideTo(c.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const t = d.velocities.pop(),
                                    i = d.velocities.pop(),
                                    n = t.position - i.position,
                                    s = t.time - i.time;
                                e.velocity = n / s, e.velocity /= 2, Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (s > 150 || l() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let t = 1e3 * r.freeMode.momentumRatio;
                            const i = e.velocity * t;
                            let h = e.translate + i;
                            a && (h = -h);
                            let u, p = !1;
                            const f = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                            let g;
                            if (h < e.maxTranslate()) r.freeMode.momentumBounce ? (h + e.maxTranslate() < -f && (h = e.maxTranslate() - f), u = e.maxTranslate(), p = !0, d.allowMomentumBounce = !0) : h = e.maxTranslate(), r.loop && r.centeredSlides && (g = !0);
                            else if (h > e.minTranslate()) r.freeMode.momentumBounce ? (h - e.minTranslate() > f && (h = e.minTranslate() + f), u = e.minTranslate(), p = !0, d.allowMomentumBounce = !0) : h = e.minTranslate(), r.loop && r.centeredSlides && (g = !0);
                            else if (r.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < c.length; e += 1)
                                    if (c[e] > -h) {
                                        t = e;
                                        break
                                    }
                                h = Math.abs(c[t] - h) < Math.abs(c[t - 1] - h) || "next" === e.swipeDirection ? c[t] : c[t - 1], h = -h
                            }
                            if (g && s("transitionEnd", (() => {
                                    e.loopFix()
                                })), 0 !== e.velocity) {
                                if (t = a ? Math.abs((-h - e.translate) / e.velocity) : Math.abs((h - e.translate) / e.velocity), r.freeMode.sticky) {
                                    const i = Math.abs((a ? -h : h) - e.translate),
                                        n = e.slidesSizesGrid[e.activeIndex];
                                    t = i < n ? r.speed : i < 2 * n ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void e.slideToClosest();
                            r.freeMode.momentumBounce && p ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(h), e.transitionStart(!0, e.swipeDirection), e.animating = !0, _(o, (() => {
                                e && !e.destroyed && d.allowMomentumBounce && (n("momentumBounce"), e.setTransition(r.speed), setTimeout((() => {
                                    e.setTranslate(u), _(o, (() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (n("_freeModeNoMomentumRelease"), e.updateProgress(h), e.setTransition(t), e.setTranslate(h), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, _(o, (() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(h), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void e.slideToClosest();
                            r.freeMode && n("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || h >= r.longSwipesMs) && (n("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(t) {
        let e, i, n, s, {
            swiper: r,
            extendParams: o,
            on: a
        } = t;
        o({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const l = () => {
            let t = r.params.spaceBetween;
            return "string" == typeof t && t.indexOf("%") >= 0 ? t = parseFloat(t.replace("%", "")) / 100 * r.size : "string" == typeof t && (t = parseFloat(t)), t
        };
        a("init", (() => {
            s = r.params.grid && r.params.grid.rows > 1
        })), a("update", (() => {
            const {
                params: t,
                el: e
            } = r, i = t.grid && t.grid.rows > 1;
            s && !i ? (e.classList.remove(`${t.containerModifierClass}grid`, `${t.containerModifierClass}grid-column`), n = 1, r.emitContainerClasses()) : !s && i && (e.classList.add(`${t.containerModifierClass}grid`), "column" === t.grid.fill && e.classList.add(`${t.containerModifierClass}grid-column`), r.emitContainerClasses()), s = i
        })), r.grid = {
            initSlides: t => {
                const {
                    slidesPerView: s
                } = r.params, {
                    rows: o,
                    fill: a
                } = r.params.grid, l = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : t.length;
                n = Math.floor(l / o), e = Math.floor(l / o) === l / o ? l : Math.ceil(l / o) * o, "auto" !== s && "row" === a && (e = Math.max(e, s * o)), i = e / o
            },
            unsetSlides: () => {
                r.slides && r.slides.forEach((t => {
                    t.swiperSlideGridSet && (t.style.height = "", t.style[r.getDirectionLabel("margin-top")] = "")
                }))
            },
            updateSlide: (t, s, o) => {
                const {
                    slidesPerGroup: a
                } = r.params, c = l(), {
                    rows: d,
                    fill: h
                } = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : o.length;
                let p, f, g;
                if ("row" === h && a > 1) {
                    const i = Math.floor(t / (a * d)),
                        n = t - d * a * i,
                        r = 0 === i ? a : Math.min(Math.ceil((u - i * d * a) / d), a);
                    g = Math.floor(n / r), f = n - g * r + i * a, p = f + g * e / d, s.style.order = p
                } else "column" === h ? (f = Math.floor(t / d), g = t - f * d, (f > n || f === n && g === d - 1) && (g += 1, g >= d && (g = 0, f += 1))) : (g = Math.floor(t / i), f = t - g * i);
                s.row = g, s.column = f, s.style.height = `calc((100% - ${(d-1)*c}px) / ${d})`, s.style[r.getDirectionLabel("margin-top")] = 0 !== g ? c && `${c}px` : "", s.swiperSlideGridSet = !0
            },
            updateWrapperSize: (t, i) => {
                const {
                    centeredSlides: n,
                    roundLengths: s
                } = r.params, o = l(), {
                    rows: a
                } = r.params.grid;
                if (r.virtualSize = (t + o) * e, r.virtualSize = Math.ceil(r.virtualSize / a) - o, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize+o}px`), n) {
                    const t = [];
                    for (let e = 0; e < i.length; e += 1) {
                        let n = i[e];
                        s && (n = Math.floor(n)), i[e] < r.virtualSize + i[0] && t.push(n)
                    }
                    i.splice(0, i.length), i.push(...t)
                }
            }
        }
    }, function(t) {
        let {
            swiper: e
        } = t;
        Object.assign(e, {
            appendSlide: at.bind(e),
            prependSlide: lt.bind(e),
            addSlide: ct.bind(e),
            removeSlide: dt.bind(e),
            removeAllSlides: ht.bind(e)
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            fadeEffect: {
                crossFade: !1
            }
        }), ut({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t
                } = e;
                e.params.fadeEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const t = e.slides[i];
                    let n = -t.swiperSlideOffset;
                    e.params.virtualTranslate || (n -= e.translate);
                    let s = 0;
                    e.isHorizontal() || (s = n, n = 0);
                    const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t.progress), 0) : 1 + Math.min(Math.max(t.progress, -1), 0),
                        o = pt(0, t);
                    o.style.opacity = r, o.style.transform = `translate3d(${n}px, ${s}px, 0px)`
                }
            },
            setTransition: t => {
                const i = e.slides.map((t => f(t)));
                i.forEach((e => {
                    e.style.transitionDuration = `${t}ms`
                })), ft({
                    swiper: e,
                    duration: t,
                    transformElements: i,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const s = (t, e, i) => {
            let n = i ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                s = i ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
            n || (n = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "left" : "top")).split(" ")), t.append(n)), s || (s = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (i ? "right" : "bottom")).split(" ")), t.append(s)), n && (n.style.opacity = Math.max(-e, 0)), s && (s.style.opacity = Math.max(e, 0))
        };
        ut({
            effect: "cube",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    el: t,
                    wrapperEl: i,
                    slides: n,
                    width: r,
                    height: o,
                    rtlTranslate: a,
                    size: l,
                    browser: c
                } = e, d = T(e), h = e.params.cubeEffect, u = e.isHorizontal(), p = e.virtual && e.params.virtual.enabled;
                let f, g = 0;
                h.shadow && (u ? (f = e.wrapperEl.querySelector(".swiper-cube-shadow"), f || (f = v("div", "swiper-cube-shadow"), e.wrapperEl.append(f)), f.style.height = `${r}px`) : (f = t.querySelector(".swiper-cube-shadow"), f || (f = v("div", "swiper-cube-shadow"), t.append(f))));
                for (let t = 0; t < n.length; t += 1) {
                    const e = n[t];
                    let i = t;
                    p && (i = parseInt(e.getAttribute("data-swiper-slide-index"), 10));
                    let r = 90 * i,
                        o = Math.floor(r / 360);
                    a && (r = -r, o = Math.floor(-r / 360));
                    const c = Math.max(Math.min(e.progress, 1), -1);
                    let f = 0,
                        m = 0,
                        v = 0;
                    i % 4 == 0 ? (f = 4 * -o * l, v = 0) : (i - 1) % 4 == 0 ? (f = 0, v = 4 * -o * l) : (i - 2) % 4 == 0 ? (f = l + 4 * o * l, v = l) : (i - 3) % 4 == 0 && (f = -l, v = 3 * l + 4 * l * o), a && (f = -f), u || (m = f, f = 0);
                    const y = `rotateX(${d(u?0:-r)}deg) rotateY(${d(u?r:0)}deg) translate3d(${f}px, ${m}px, ${v}px)`;
                    c <= 1 && c > -1 && (g = 90 * i + 90 * c, a && (g = 90 * -i - 90 * c)), e.style.transform = y, h.slideShadows && s(e, c, u)
                }
                if (i.style.transformOrigin = `50% 50% -${l/2}px`, i.style["-webkit-transform-origin"] = `50% 50% -${l/2}px`, h.shadow)
                    if (u) f.style.transform = `translate3d(0px, ${r/2+h.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${h.shadowScale})`;
                    else {
                        const t = Math.abs(g) - 90 * Math.floor(Math.abs(g) / 90),
                            e = 1.5 - (Math.sin(2 * t * Math.PI / 360) / 2 + Math.cos(2 * t * Math.PI / 360) / 2),
                            i = h.shadowScale,
                            n = h.shadowScale / e,
                            s = h.shadowOffset;
                        f.style.transform = `scale3d(${i}, 1, ${n}) translate3d(0px, ${o/2+s}px, ${-o/2/n}px) rotateX(-89.99deg)`
                    }
                const m = (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
                i.style.transform = `translate3d(0px,0,${m}px) rotateX(${d(e.isHorizontal()?0:g)}deg) rotateY(${d(e.isHorizontal()?-g:0)}deg)`, i.style.setProperty("--swiper-cube-translate-z", `${m}px`)
            },
            setTransition: t => {
                const {
                    el: i,
                    slides: n
                } = e;
                if (n.forEach((e => {
                        e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                            e.style.transitionDuration = `${t}ms`
                        }))
                    })), e.params.cubeEffect.shadow && !e.isHorizontal()) {
                    const e = i.querySelector(".swiper-cube-shadow");
                    e && (e.style.transitionDuration = `${t}ms`)
                }
            },
            recreateShadows: () => {
                const t = e.isHorizontal();
                e.slides.forEach((e => {
                    const i = Math.max(Math.min(e.progress, 1), -1);
                    s(e, i, t)
                }))
            },
            getEffectParams: () => e.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const s = (t, i) => {
            let n = e.isHorizontal() ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                s = e.isHorizontal() ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
            n || (n = gt("flip", t, e.isHorizontal() ? "left" : "top")), s || (s = gt("flip", t, e.isHorizontal() ? "right" : "bottom")), n && (n.style.opacity = Math.max(-i, 0)), s && (s.style.opacity = Math.max(i, 0))
        };
        ut({
            effect: "flip",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    rtlTranslate: i
                } = e, n = e.params.flipEffect, r = T(e);
                for (let o = 0; o < t.length; o += 1) {
                    const a = t[o];
                    let l = a.progress;
                    e.params.flipEffect.limitRotation && (l = Math.max(Math.min(a.progress, 1), -1));
                    const c = a.swiperSlideOffset;
                    let d = -180 * l,
                        h = 0,
                        u = e.params.cssMode ? -c - e.translate : -c,
                        p = 0;
                    e.isHorizontal() ? i && (d = -d) : (p = u, u = 0, h = -d, d = 0), a.style.zIndex = -Math.abs(Math.round(l)) + t.length, n.slideShadows && s(a, l);
                    const f = `translate3d(${u}px, ${p}px, 0px) rotateX(${r(h)}deg) rotateY(${r(d)}deg)`;
                    pt(0, a).style.transform = f
                }
            },
            setTransition: t => {
                const i = e.slides.map((t => f(t)));
                i.forEach((e => {
                    e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                        e.style.transitionDuration = `${t}ms`
                    }))
                })), ft({
                    swiper: e,
                    duration: t,
                    transformElements: i
                })
            },
            recreateShadows: () => {
                e.params.flipEffect, e.slides.forEach((t => {
                    let i = t.progress;
                    e.params.flipEffect.limitRotation && (i = Math.max(Math.min(t.progress, 1), -1)), s(t, i)
                }))
            },
            getEffectParams: () => e.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }), ut({
            effect: "coverflow",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    width: t,
                    height: i,
                    slides: n,
                    slidesSizesGrid: s
                } = e, r = e.params.coverflowEffect, o = e.isHorizontal(), a = e.translate, l = o ? t / 2 - a : i / 2 - a, c = o ? r.rotate : -r.rotate, d = r.depth, h = T(e);
                for (let t = 0, e = n.length; t < e; t += 1) {
                    const e = n[t],
                        i = s[t],
                        a = (l - e.swiperSlideOffset - i / 2) / i,
                        u = "function" == typeof r.modifier ? r.modifier(a) : a * r.modifier;
                    let p = o ? c * u : 0,
                        f = o ? 0 : c * u,
                        g = -d * Math.abs(u),
                        m = r.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * i);
                    let v = o ? 0 : m * u,
                        y = o ? m * u : 0,
                        b = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(y) < .001 && (y = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(p) < .001 && (p = 0), Math.abs(f) < .001 && (f = 0), Math.abs(b) < .001 && (b = 0);
                    const x = `translate3d(${y}px,${v}px,${g}px)  rotateX(${h(f)}deg) rotateY(${h(p)}deg) scale(${b})`;
                    if (pt(0, e).style.transform = x, e.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                        let t = o ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                            i = o ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                        t || (t = gt("coverflow", e, o ? "left" : "top")), i || (i = gt("coverflow", e, o ? "right" : "bottom")), t && (t.style.opacity = u > 0 ? u : 0), i && (i.style.opacity = -u > 0 ? -u : 0)
                    }
                }
            },
            setTransition: t => {
                e.slides.map((t => f(t))).forEach((e => {
                    e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                        e.style.transitionDuration = `${t}ms`
                    }))
                }))
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const s = t => "string" == typeof t ? t : `${t}px`;
        ut({
            effect: "creative",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    wrapperEl: i,
                    slidesSizesGrid: n
                } = e, r = e.params.creativeEffect, {
                    progressMultiplier: o
                } = r, a = e.params.centeredSlides, l = T(e);
                if (a) {
                    const t = n[0] / 2 - e.params.slidesOffsetBefore || 0;
                    i.style.transform = `translateX(calc(50% - ${t}px))`
                }
                for (let i = 0; i < t.length; i += 1) {
                    const n = t[i],
                        c = n.progress,
                        d = Math.min(Math.max(n.progress, -r.limitProgress), r.limitProgress);
                    let h = d;
                    a || (h = Math.min(Math.max(n.originalProgress, -r.limitProgress), r.limitProgress));
                    const u = n.swiperSlideOffset,
                        p = [e.params.cssMode ? -u - e.translate : -u, 0, 0],
                        f = [0, 0, 0];
                    let g = !1;
                    e.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let m = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (m = r.next, g = !0) : d > 0 && (m = r.prev, g = !0), p.forEach(((t, e) => {
                        p[e] = `calc(${t}px + (${s(m.translate[e])} * ${Math.abs(d*o)}))`
                    })), f.forEach(((t, e) => {
                        let i = m.rotate[e] * Math.abs(d * o);
                        f[e] = i
                    })), n.style.zIndex = -Math.abs(Math.round(c)) + t.length;
                    const v = p.join(", "),
                        y = `rotateX(${l(f[0])}deg) rotateY(${l(f[1])}deg) rotateZ(${l(f[2])}deg)`,
                        b = h < 0 ? `scale(${1+(1-m.scale)*h*o})` : `scale(${1-(1-m.scale)*h*o})`,
                        x = h < 0 ? 1 + (1 - m.opacity) * h * o : 1 - (1 - m.opacity) * h * o,
                        w = `translate3d(${v}) ${y} ${b}`;
                    if (g && m.shadow || !g) {
                        let t = n.querySelector(".swiper-slide-shadow");
                        if (!t && m.shadow && (t = gt("creative", n)), t) {
                            const e = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            t.style.opacity = Math.min(Math.max(Math.abs(e), 0), 1)
                        }
                    }
                    const _ = pt(0, n);
                    _.style.transform = w, _.style.opacity = x, m.origin && (_.style.transformOrigin = m.origin)
                }
            },
            setTransition: t => {
                const i = e.slides.map((t => f(t)));
                i.forEach((e => {
                    e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow").forEach((e => {
                        e.style.transitionDuration = `${t}ms`
                    }))
                })), ft({
                    swiper: e,
                    duration: t,
                    transformElements: i,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function(t) {
        let {
            swiper: e,
            extendParams: i,
            on: n
        } = t;
        i({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), ut({
            effect: "cards",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    activeIndex: i,
                    rtlTranslate: n
                } = e, s = e.params.cardsEffect, {
                    startTranslate: r,
                    isTouched: o
                } = e.touchEventsData, a = n ? -e.translate : e.translate;
                for (let l = 0; l < t.length; l += 1) {
                    const c = t[l],
                        d = c.progress,
                        h = Math.min(Math.max(d, -4), 4);
                    let u = c.swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                    let p = e.params.cssMode ? -u - e.translate : -u,
                        f = 0;
                    const g = -100 * Math.abs(h);
                    let m = 1,
                        v = -s.perSlideRotate * h,
                        y = s.perSlideOffset - .75 * Math.abs(h);
                    const b = e.virtual && e.params.virtual.enabled ? e.virtual.from + l : l,
                        x = (b === i || b === i - 1) && h > 0 && h < 1 && (o || e.params.cssMode) && a < r,
                        w = (b === i || b === i + 1) && h < 0 && h > -1 && (o || e.params.cssMode) && a > r;
                    if (x || w) {
                        const t = (1 - Math.abs((Math.abs(h) - .5) / .5)) ** .5;
                        v += -28 * h * t, m += -.5 * t, y += 96 * t, f = -25 * t * Math.abs(h) + "%"
                    }
                    if (p = h < 0 ? `calc(${p}px ${n?"-":"+"} (${y*Math.abs(h)}%))` : h > 0 ? `calc(${p}px ${n?"-":"+"} (-${y*Math.abs(h)}%))` : `${p}px`, !e.isHorizontal()) {
                        const t = f;
                        f = p, p = t
                    }
                    const _ = h < 0 ? "" + (1 + (1 - m) * h) : "" + (1 - (1 - m) * h),
                        S = `\n        translate3d(${p}, ${f}, ${g}px)\n        rotateZ(${s.rotate?n?-v:v:0}deg)\n        scale(${_})\n      `;
                    if (s.slideShadows) {
                        let t = c.querySelector(".swiper-slide-shadow");
                        t || (t = gt("cards", c)), t && (t.style.opacity = Math.min(Math.max((Math.abs(h) - .5) / .5, 0), 1))
                    }
                    c.style.zIndex = -Math.abs(Math.round(d)) + t.length, pt(0, c).style.transform = S
                }
            },
            setTransition: t => {
                const i = e.slides.map((t => f(t)));
                i.forEach((e => {
                    e.style.transitionDuration = `${t}ms`, e.querySelectorAll(".swiper-slide-shadow").forEach((e => {
                        e.style.transitionDuration = `${t}ms`
                    }))
                })), ft({
                    swiper: e,
                    duration: t,
                    transformElements: i
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }];
    return st.use(mt), st
}();
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e()
}(this, (function() {
    "use strict";
    var t = Object.freeze({
        __proto__: null,
        get Colors() {
            return Or
        },
        get Decimation() {
            return Rr
        },
        get Filler() {
            return Jr
        },
        get Legend() {
            return no
        },
        get SubTitle() {
            return ao
        },
        get Title() {
            return ro
        },
        get Tooltip() {
            return So
        }
    });

    function e() {}
    const i = (() => {
        let t = 0;
        return () => t++
    })();

    function n(t) {
        return null == t
    }

    function s(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
    }

    function r(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function o(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
    }

    function a(t, e) {
        return o(t) ? t : e
    }

    function l(t, e) {
        return void 0 === t ? e : t
    }
    const c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
        d = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

    function h(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e)
    }

    function u(t, e, i, n) {
        let o, a, l;
        if (s(t))
            if (a = t.length, n)
                for (o = a - 1; o >= 0; o--) e.call(i, t[o], o);
            else
                for (o = 0; o < a; o++) e.call(i, t[o], o);
        else if (r(t))
            for (l = Object.keys(t), a = l.length, o = 0; o < a; o++) e.call(i, t[l[o]], l[o])
    }

    function p(t, e) {
        let i, n, s, r;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, n = t.length; i < n; ++i)
            if (s = t[i], r = e[i], s.datasetIndex !== r.datasetIndex || s.index !== r.index) return !1;
        return !0
    }

    function f(t) {
        if (s(t)) return t.map(f);
        if (r(t)) {
            const e = Object.create(null),
                i = Object.keys(t),
                n = i.length;
            let s = 0;
            for (; s < n; ++s) e[i[s]] = f(t[i[s]]);
            return e
        }
        return t
    }

    function g(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }

    function m(t, e, i, n) {
        if (!g(t)) return;
        const s = e[t],
            o = i[t];
        r(s) && r(o) ? v(s, o, n) : e[t] = f(o)
    }

    function v(t, e, i) {
        const n = s(e) ? e : [e],
            o = n.length;
        if (!r(t)) return t;
        const a = (i = i || {}).merger || m;
        let l;
        for (let e = 0; e < o; ++e) {
            if (l = n[e], !r(l)) continue;
            const s = Object.keys(l);
            for (let e = 0, n = s.length; e < n; ++e) a(s[e], t, l, i)
        }
        return t
    }

    function y(t, e) {
        return v(t, e, {
            merger: b
        })
    }

    function b(t, e, i) {
        if (!g(t)) return;
        const n = e[t],
            s = i[t];
        r(n) && r(s) ? y(n, s) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = f(s))
    }
    const x = {
        "": t => t,
        x: t => t.x,
        y: t => t.y
    };

    function w(t) {
        const e = t.split("."),
            i = [];
        let n = "";
        for (const t of e) n += t, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (i.push(n), n = "");
        return i
    }

    function _(t, e) {
        const i = x[e] || (x[e] = function(t) {
            const e = w(t);
            return t => {
                for (const i of e) {
                    if ("" === i) break;
                    t = t && t[i]
                }
                return t
            }
        }(e));
        return i(t)
    }

    function S(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    const E = t => void 0 !== t,
        T = t => "function" == typeof t,
        M = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const i of t)
                if (!e.has(i)) return !1;
            return !0
        };

    function k(t) {
        return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
    }
    const C = Math.PI,
        P = 2 * C,
        D = P + C,
        L = Number.POSITIVE_INFINITY,
        A = C / 180,
        O = C / 2,
        I = C / 4,
        z = 2 * C / 3,
        R = Math.log10,
        F = Math.sign;

    function $(t, e, i) {
        return Math.abs(t - e) < i
    }

    function j(t) {
        const e = Math.round(t);
        t = $(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(R(t))),
            n = t / i;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i
    }

    function N(t) {
        const e = [],
            i = Math.sqrt(t);
        let n;
        for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
        return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e
    }

    function H(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function W(t, e) {
        const i = Math.round(t);
        return i - e <= t && i + e >= t
    }

    function V(t, e, i) {
        let n, s, r;
        for (n = 0, s = t.length; n < s; n++) r = t[n][i], isNaN(r) || (e.min = Math.min(e.min, r), e.max = Math.max(e.max, r))
    }

    function B(t) {
        return t * (C / 180)
    }

    function q(t) {
        return t * (180 / C)
    }

    function Y(t) {
        if (!o(t)) return;
        let e = 1,
            i = 0;
        for (; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
    }

    function G(t, e) {
        const i = e.x - t.x,
            n = e.y - t.y,
            s = Math.sqrt(i * i + n * n);
        let r = Math.atan2(n, i);
        return r < -.5 * C && (r += P), {
            angle: r,
            distance: s
        }
    }

    function X(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function U(t, e) {
        return (t - e + D) % P - C
    }

    function Q(t) {
        return (t % P + P) % P
    }

    function K(t, e, i, n) {
        const s = Q(t),
            r = Q(e),
            o = Q(i),
            a = Q(r - s),
            l = Q(o - s),
            c = Q(s - r),
            d = Q(s - o);
        return s === r || s === o || n && r === o || a > l && c < d
    }

    function Z(t, e, i) {
        return Math.max(e, Math.min(i, t))
    }

    function J(t) {
        return Z(t, -32768, 32767)
    }

    function tt(t, e, i, n = 1e-6) {
        return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n
    }

    function et(t, e, i) {
        i = i || (i => t[i] < e);
        let n, s = t.length - 1,
            r = 0;
        for (; s - r > 1;) n = r + s >> 1, i(n) ? r = n : s = n;
        return {
            lo: r,
            hi: s
        }
    }
    const it = (t, e, i, n) => et(t, i, n ? n => {
            const s = t[n][e];
            return s < i || s === i && t[n + 1][e] === i
        } : n => t[n][e] < i),
        nt = (t, e, i) => et(t, i, (n => t[n][e] >= i));

    function st(t, e, i) {
        let n = 0,
            s = t.length;
        for (; n < s && t[n] < e;) n++;
        for (; s > n && t[s - 1] > i;) s--;
        return n > 0 || s < t.length ? t.slice(n, s) : t
    }
    const rt = ["push", "pop", "shift", "splice", "unshift"];

    function ot(t, e) {
        t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [e]
            }
        }), rt.forEach((e => {
            const i = "_onData" + S(e),
                n = t[e];
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value(...e) {
                    const s = n.apply(this, e);
                    return t._chartjs.listeners.forEach((t => {
                        "function" == typeof t[i] && t[i](...e)
                    })), s
                }
            })
        })))
    }

    function at(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const n = i.listeners,
            s = n.indexOf(e); - 1 !== s && n.splice(s, 1), n.length > 0 || (rt.forEach((e => {
            delete t[e]
        })), delete t._chartjs)
    }

    function lt(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e)
    }
    const ct = "undefined" == typeof window ? function(t) {
        return t()
    } : window.requestAnimationFrame;

    function dt(t, e) {
        let i = [],
            n = !1;
        return function(...s) {
            i = s, n || (n = !0, ct.call(window, (() => {
                n = !1, t.apply(e, i)
            })))
        }
    }

    function ht(t, e) {
        let i;
        return function(...n) {
            return e ? (clearTimeout(i), i = setTimeout(t, e, n)) : t.apply(this, n), e
        }
    }
    const ut = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        pt = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
        ft = (t, e, i, n) => t === (n ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;

    function gt(t, e, i) {
        const n = e.length;
        let s = 0,
            r = n;
        if (t._sorted) {
            const {
                iScale: o,
                _parsed: a
            } = t, l = o.axis, {
                min: c,
                max: d,
                minDefined: h,
                maxDefined: u
            } = o.getUserBounds();
            h && (s = Z(Math.min(it(a, l, c).lo, i ? n : it(e, l, o.getPixelForValue(c)).lo), 0, n - 1)), r = u ? Z(Math.max(it(a, o.axis, d, !0).hi + 1, i ? 0 : it(e, l, o.getPixelForValue(d), !0).hi + 1), s, n) - s : n - s
        }
        return {
            start: s,
            count: r
        }
    }

    function mt(t) {
        const {
            xScale: e,
            yScale: i,
            _scaleRanges: n
        } = t, s = {
            xmin: e.min,
            xmax: e.max,
            ymin: i.min,
            ymax: i.max
        };
        if (!n) return t._scaleRanges = s, !0;
        const r = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== i.min || n.ymax !== i.max;
        return Object.assign(n, s), r
    }
    var vt = new class {
        constructor() {
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
        }
        _notify(t, e, i, n) {
            const s = e.listeners[n],
                r = e.duration;
            s.forEach((n => n({
                chart: t,
                initial: e.initial,
                numSteps: r,
                currentStep: Math.min(i - e.start, r)
            })))
        }
        _refresh() {
            this._request || (this._running = !0, this._request = ct.call(window, (() => {
                this._update(), this._request = null, this._running && this._refresh()
            })))
        }
        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach(((i, n) => {
                if (!i.running || !i.items.length) return;
                const s = i.items;
                let r, o = s.length - 1,
                    a = !1;
                for (; o >= 0; --o) r = s[o], r._active ? (r._total > i.duration && (i.duration = r._total), r.tick(t), a = !0) : (s[o] = s[s.length - 1], s.pop());
                a && (n.draw(), this._notify(n, i, t, "progress")), s.length || (i.running = !1, this._notify(n, i, t, "complete"), i.initial = !1), e += s.length
            })), this._lastDate = t, 0 === e && (this._running = !1)
        }
        _getAnims(t) {
            const e = this._charts;
            let i = e.get(t);
            return i || (i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e.set(t, i)), i
        }
        listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i)
        }
        add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e)
        }
        has(t) {
            return this._getAnims(t).items.length > 0
        }
        start(t) {
            const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
        }
        running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length)
        }
        stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const i = e.items;
            let n = i.length - 1;
            for (; n >= 0; --n) i[n].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete")
        }
        remove(t) {
            return this._charts.delete(t)
        }
    };

    function yt(t) {
        return t + .5 | 0
    }
    const bt = (t, e, i) => Math.max(Math.min(t, i), e);

    function xt(t) {
        return bt(yt(2.55 * t), 0, 255)
    }

    function wt(t) {
        return bt(yt(255 * t), 0, 255)
    }

    function _t(t) {
        return bt(yt(t / 2.55) / 100, 0, 1)
    }

    function St(t) {
        return bt(yt(100 * t), 0, 100)
    }
    const Et = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        },
        Tt = [..."0123456789ABCDEF"],
        Mt = t => Tt[15 & t],
        kt = t => Tt[(240 & t) >> 4] + Tt[15 & t],
        Ct = t => (240 & t) >> 4 == (15 & t);
    const Pt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function Dt(t, e, i) {
        const n = e * Math.min(i, 1 - i),
            s = (e, s = (e + t / 30) % 12) => i - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
        return [s(0), s(8), s(4)]
    }

    function Lt(t, e, i) {
        const n = (n, s = (n + t / 60) % 6) => i - i * e * Math.max(Math.min(s, 4 - s, 1), 0);
        return [n(5), n(3), n(1)]
    }

    function At(t, e, i) {
        const n = Dt(t, 1, .5);
        let s;
        for (e + i > 1 && (s = 1 / (e + i), e *= s, i *= s), s = 0; s < 3; s++) n[s] *= 1 - e - i, n[s] += e;
        return n
    }

    function Ot(t) {
        const e = t.r / 255,
            i = t.g / 255,
            n = t.b / 255,
            s = Math.max(e, i, n),
            r = Math.min(e, i, n),
            o = (s + r) / 2;
        let a, l, c;
        return s !== r && (c = s - r, l = o > .5 ? c / (2 - s - r) : c / (s + r), a = function(t, e, i, n, s) {
            return t === s ? (e - i) / n + (e < i ? 6 : 0) : e === s ? (i - t) / n + 2 : (t - e) / n + 4
        }(e, i, n, c, s), a = 60 * a + .5), [0 | a, l || 0, o]
    }

    function It(t, e, i, n) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(wt)
    }

    function zt(t, e, i) {
        return It(Dt, t, e, i)
    }

    function Rt(t) {
        return (t % 360 + 360) % 360
    }
    const Ft = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh"
        },
        $t = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32"
        };
    let jt;
    const Nt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        Ht = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
        Wt = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

    function Vt(t, e, i) {
        if (t) {
            let n = Ot(t);
            n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1)), n = zt(n), t.r = n[0], t.g = n[1], t.b = n[2]
        }
    }

    function Bt(t, e) {
        return t ? Object.assign(e || {}, t) : t
    }

    function qt(t) {
        var e = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(t) ? t.length >= 3 && (e = {
            r: t[0],
            g: t[1],
            b: t[2],
            a: 255
        }, t.length > 3 && (e.a = wt(t[3]))) : (e = Bt(t, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = wt(e.a), e
    }

    function Yt(t) {
        return "r" === t.charAt(0) ? function(t) {
            const e = Nt.exec(t);
            let i, n, s, r = 255;
            if (e) {
                if (e[7] !== i) {
                    const t = +e[7];
                    r = e[8] ? xt(t) : bt(255 * t, 0, 255)
                }
                return i = +e[1], n = +e[3], s = +e[5], i = 255 & (e[2] ? xt(i) : bt(i, 0, 255)), n = 255 & (e[4] ? xt(n) : bt(n, 0, 255)), s = 255 & (e[6] ? xt(s) : bt(s, 0, 255)), {
                    r: i,
                    g: n,
                    b: s,
                    a: r
                }
            }
        }(t) : function(t) {
            const e = Pt.exec(t);
            let i, n = 255;
            if (!e) return;
            e[5] !== i && (n = e[6] ? xt(+e[5]) : wt(+e[5]));
            const s = Rt(+e[2]),
                r = +e[3] / 100,
                o = +e[4] / 100;
            return i = "hwb" === e[1] ? function(t, e, i) {
                return It(At, t, e, i)
            }(s, r, o) : "hsv" === e[1] ? function(t, e, i) {
                return It(Lt, t, e, i)
            }(s, r, o) : zt(s, r, o), {
                r: i[0],
                g: i[1],
                b: i[2],
                a: n
            }
        }(t)
    }
    class Gt {
        constructor(t) {
            if (t instanceof Gt) return t;
            const e = typeof t;
            let i;
            var n, s, r;
            "object" === e ? i = qt(t) : "string" === e && (r = (n = t).length, "#" === n[0] && (4 === r || 5 === r ? s = {
                r: 255 & 17 * Et[n[1]],
                g: 255 & 17 * Et[n[2]],
                b: 255 & 17 * Et[n[3]],
                a: 5 === r ? 17 * Et[n[4]] : 255
            } : 7 !== r && 9 !== r || (s = {
                r: Et[n[1]] << 4 | Et[n[2]],
                g: Et[n[3]] << 4 | Et[n[4]],
                b: Et[n[5]] << 4 | Et[n[6]],
                a: 9 === r ? Et[n[7]] << 4 | Et[n[8]] : 255
            })), i = s || function(t) {
                jt || (jt = function() {
                    const t = {},
                        e = Object.keys($t),
                        i = Object.keys(Ft);
                    let n, s, r, o, a;
                    for (n = 0; n < e.length; n++) {
                        for (o = a = e[n], s = 0; s < i.length; s++) r = i[s], a = a.replace(r, Ft[r]);
                        r = parseInt($t[o], 16), t[a] = [r >> 16 & 255, r >> 8 & 255, 255 & r]
                    }
                    return t
                }(), jt.transparent = [0, 0, 0, 0]);
                const e = jt[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }(t) || Yt(t)), this._rgb = i, this._valid = !!i
        }
        get valid() {
            return this._valid
        }
        get rgb() {
            var t = Bt(this._rgb);
            return t && (t.a = _t(t.a)), t
        }
        set rgb(t) {
            this._rgb = qt(t)
        }
        rgbString() {
            return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${_t(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
            var t
        }
        hexString() {
            return this._valid ? function(t) {
                var e = (t => Ct(t.r) && Ct(t.g) && Ct(t.b) && Ct(t.a))(t) ? Mt : kt;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0
            }(this._rgb) : void 0
        }
        hslString() {
            return this._valid ? function(t) {
                if (!t) return;
                const e = Ot(t),
                    i = e[0],
                    n = St(e[1]),
                    s = St(e[2]);
                return t.a < 255 ? `hsla(${i}, ${n}%, ${s}%, ${_t(t.a)})` : `hsl(${i}, ${n}%, ${s}%)`
            }(this._rgb) : void 0
        }
        mix(t, e) {
            if (t) {
                const i = this.rgb,
                    n = t.rgb;
                let s;
                const r = e === s ? .5 : e,
                    o = 2 * r - 1,
                    a = i.a - n.a,
                    l = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2;
                s = 1 - l, i.r = 255 & l * i.r + s * n.r + .5, i.g = 255 & l * i.g + s * n.g + .5, i.b = 255 & l * i.b + s * n.b + .5, i.a = r * i.a + (1 - r) * n.a, this.rgb = i
            }
            return this
        }
        interpolate(t, e) {
            return t && (this._rgb = function(t, e, i) {
                const n = Wt(_t(t.r)),
                    s = Wt(_t(t.g)),
                    r = Wt(_t(t.b));
                return {
                    r: wt(Ht(n + i * (Wt(_t(e.r)) - n))),
                    g: wt(Ht(s + i * (Wt(_t(e.g)) - s))),
                    b: wt(Ht(r + i * (Wt(_t(e.b)) - r))),
                    a: t.a + i * (e.a - t.a)
                }
            }(this._rgb, t._rgb, e)), this
        }
        clone() {
            return new Gt(this.rgb)
        }
        alpha(t) {
            return this._rgb.a = wt(t), this
        }
        clearer(t) {
            return this._rgb.a *= 1 - t, this
        }
        greyscale() {
            const t = this._rgb,
                e = yt(.3 * t.r + .59 * t.g + .11 * t.b);
            return t.r = t.g = t.b = e, this
        }
        opaquer(t) {
            return this._rgb.a *= 1 + t, this
        }
        negate() {
            const t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
            return Vt(this._rgb, 2, t), this
        }
        darken(t) {
            return Vt(this._rgb, 2, -t), this
        }
        saturate(t) {
            return Vt(this._rgb, 1, t), this
        }
        desaturate(t) {
            return Vt(this._rgb, 1, -t), this
        }
        rotate(t) {
            return function(t, e) {
                var i = Ot(t);
                i[0] = Rt(i[0] + e), i = zt(i), t.r = i[0], t.g = i[1], t.b = i[2]
            }(this._rgb, t), this
        }
    }

    function Xt(t) {
        if (t && "object" == typeof t) {
            const e = t.toString();
            return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
        }
        return !1
    }

    function Ut(t) {
        return Xt(t) ? t : new Gt(t)
    }

    function Qt(t) {
        return Xt(t) ? t : new Gt(t).saturate(.5).darken(.1).hexString()
    }
    const Kt = ["x", "y", "borderWidth", "radius", "tension"],
        Zt = ["color", "borderColor", "backgroundColor"],
        Jt = new Map;

    function te(t, e, i) {
        return function(t, e) {
            e = e || {};
            const i = t + JSON.stringify(e);
            let n = Jt.get(i);
            return n || (n = new Intl.NumberFormat(t, e), Jt.set(i, n)), n
        }(e, i).format(t)
    }
    const ee = {
        values: t => s(t) ? t : "" + t,
        numeric(t, e, i) {
            if (0 === t) return "0";
            const n = this.chart.options.locale;
            let s, r = t;
            if (i.length > 1) {
                const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                (e < 1e-4 || e > 1e15) && (s = "scientific"), r = function(t, e) {
                    let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                    return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i
                }(t, i)
            }
            const o = R(Math.abs(r)),
                a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
                l = {
                    notation: s,
                    minimumFractionDigits: a,
                    maximumFractionDigits: a
                };
            return Object.assign(l, this.options.ticks.format), te(t, n, l)
        },
        logarithmic(t, e, i) {
            if (0 === t) return "0";
            const n = i[e].significand || t / Math.pow(10, Math.floor(R(t)));
            return [1, 2, 3, 5, 10, 15].includes(n) || e > .8 * i.length ? ee.numeric.call(this, t, e, i) : ""
        }
    };
    var ie = {
        formatters: ee
    };
    const ne = Object.create(null),
        se = Object.create(null);

    function re(t, e) {
        if (!e) return t;
        const i = e.split(".");
        for (let e = 0, n = i.length; e < n; ++e) {
            const n = i[e];
            t = t[n] || (t[n] = Object.create(null))
        }
        return t
    }

    function oe(t, e, i) {
        return "string" == typeof e ? v(re(t, e), i) : v(re(t, ""), e)
    }
    var ae = new class {
        constructor(t, e) {
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Qt(e.backgroundColor), this.hoverBorderColor = (t, e) => Qt(e.borderColor), this.hoverColor = (t, e) => Qt(e.color), this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
        }
        set(t, e) {
            return oe(this, t, e)
        }
        get(t) {
            return re(this, t)
        }
        describe(t, e) {
            return oe(se, t, e)
        }
        override(t, e) {
            return oe(ne, t, e)
        }
        route(t, e, i, n) {
            const s = re(this, t),
                o = re(this, i),
                a = "_" + e;
            Object.defineProperties(s, {
                [a]: {
                    value: s[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get() {
                        const t = this[a],
                            e = o[n];
                        return r(t) ? Object.assign({}, e, t) : l(t, e)
                    },
                    set(t) {
                        this[a] = t
                    }
                }
            })
        }
        apply(t) {
            t.forEach((t => t(this)))
        }
    }({
        _scriptable: t => !t.startsWith("on"),
        _indexable: t => "events" !== t,
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [function(t) {
        t.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0
        }), t.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), t.set("animations", {
            colors: {
                type: "color",
                properties: Zt
            },
            numbers: {
                type: "number",
                properties: Kt
            }
        }), t.describe("animations", {
            _fallback: "animation"
        }), t.set("transitions", {
            active: {
                animation: {
                    duration: 400
                }
            },
            resize: {
                animation: {
                    duration: 0
                }
            },
            show: {
                animations: {
                    colors: {
                        from: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        duration: 0
                    }
                }
            },
            hide: {
                animations: {
                    colors: {
                        to: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: t => 0 | t
                    }
                }
            }
        })
    }, function(t) {
        t.set("layout", {
            autoPadding: !0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        })
    }, function(t) {
        t.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            clip: !0,
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1
            },
            border: {
                display: !0,
                dash: [],
                dashOffset: 0,
                width: 1
            },
            title: {
                display: !1,
                text: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: ie.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2
            }
        }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
            _fallback: !1,
            _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
            _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
        }), t.describe("scales", {
            _fallback: "scale"
        }), t.describe("scale.ticks", {
            _scriptable: t => "backdropPadding" !== t && "callback" !== t,
            _indexable: t => "backdropPadding" !== t
        })
    }]);

    function le() {
        return "undefined" != typeof window && "undefined" != typeof document
    }

    function ce(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
    }

    function de(t, e, i) {
        let n;
        return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
    }
    const he = t => t.ownerDocument.defaultView.getComputedStyle(t, null);

    function ue(t, e) {
        return he(t).getPropertyValue(e)
    }
    const pe = ["top", "right", "bottom", "left"];

    function fe(t, e, i) {
        const n = {};
        i = i ? "-" + i : "";
        for (let s = 0; s < 4; s++) {
            const r = pe[s];
            n[r] = parseFloat(t[e + "-" + r + i]) || 0
        }
        return n.width = n.left + n.right, n.height = n.top + n.bottom, n
    }
    const ge = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);

    function me(t, e) {
        if ("native" in t) return t;
        const {
            canvas: i,
            currentDevicePixelRatio: n
        } = e, s = he(i), r = "border-box" === s.boxSizing, o = fe(s, "padding"), a = fe(s, "border", "width"), {
            x: l,
            y: c,
            box: d
        } = function(t, e) {
            const i = t.touches,
                n = i && i.length ? i[0] : t,
                {
                    offsetX: s,
                    offsetY: r
                } = n;
            let o, a, l = !1;
            if (ge(s, r, t.target)) o = s, a = r;
            else {
                const t = e.getBoundingClientRect();
                o = n.clientX - t.left, a = n.clientY - t.top, l = !0
            }
            return {
                x: o,
                y: a,
                box: l
            }
        }(t, i), h = o.left + (d && a.left), u = o.top + (d && a.top);
        let {
            width: p,
            height: f
        } = e;
        return r && (p -= o.width + a.width, f -= o.height + a.height), {
            x: Math.round((l - h) / p * i.width / n),
            y: Math.round((c - u) / f * i.height / n)
        }
    }
    const ve = t => Math.round(10 * t) / 10;

    function ye(t, e, i, n) {
        const s = he(t),
            r = fe(s, "margin"),
            o = de(s.maxWidth, t, "clientWidth") || L,
            a = de(s.maxHeight, t, "clientHeight") || L,
            l = function(t, e, i) {
                let n, s;
                if (void 0 === e || void 0 === i) {
                    const r = t && ce(t);
                    if (r) {
                        const t = r.getBoundingClientRect(),
                            o = he(r),
                            a = fe(o, "border", "width"),
                            l = fe(o, "padding");
                        e = t.width - l.width - a.width, i = t.height - l.height - a.height, n = de(o.maxWidth, r, "clientWidth"), s = de(o.maxHeight, r, "clientHeight")
                    } else e = t.clientWidth, i = t.clientHeight
                }
                return {
                    width: e,
                    height: i,
                    maxWidth: n || L,
                    maxHeight: s || L
                }
            }(t, e, i);
        let {
            width: c,
            height: d
        } = l;
        if ("content-box" === s.boxSizing) {
            const t = fe(s, "border", "width"),
                e = fe(s, "padding");
            c -= e.width + t.width, d -= e.height + t.height
        }
        return c = Math.max(0, c - r.width), d = Math.max(0, n ? c / n : d - r.height), c = ve(Math.min(c, o, l.maxWidth)), d = ve(Math.min(d, a, l.maxHeight)), c && !d && (d = ve(c / 2)), (void 0 !== e || void 0 !== i) && n && l.height && d > l.height && (d = l.height, c = ve(Math.floor(d * n))), {
            width: c,
            height: d
        }
    }

    function be(t, e, i) {
        const n = e || 1,
            s = Math.floor(t.height * n),
            r = Math.floor(t.width * n);
        t.height = Math.floor(t.height), t.width = Math.floor(t.width);
        const o = t.canvas;
        return o.style && (i || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== n || o.height !== s || o.width !== r) && (t.currentDevicePixelRatio = n, o.height = s, o.width = r, t.ctx.setTransform(n, 0, 0, n, 0, 0), !0)
    }
    const xe = function() {
        let t = !1;
        try {
            const e = {
                get passive() {
                    return t = !0, !1
                }
            };
            le() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
        } catch (t) {}
        return t
    }();

    function we(t, e) {
        const i = ue(t, e),
            n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? +n[1] : void 0
    }

    function _e(t) {
        return !t || n(t.size) || n(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
    }

    function Se(t, e, i, n, s) {
        let r = e[s];
        return r || (r = e[s] = t.measureText(s).width, i.push(s)), r > n && (n = r), n
    }

    function Ee(t, e, i, n) {
        let r = (n = n || {}).data = n.data || {},
            o = n.garbageCollect = n.garbageCollect || [];
        n.font !== e && (r = n.data = {}, o = n.garbageCollect = [], n.font = e), t.save(), t.font = e;
        let a = 0;
        const l = i.length;
        let c, d, h, u, p;
        for (c = 0; c < l; c++)
            if (u = i[c], null == u || s(u)) {
                if (s(u))
                    for (d = 0, h = u.length; d < h; d++) p = u[d], null == p || s(p) || (a = Se(t, r, o, a, p))
            } else a = Se(t, r, o, a, u);
        t.restore();
        const f = o.length / 2;
        if (f > i.length) {
            for (c = 0; c < f; c++) delete r[o[c]];
            o.splice(0, f)
        }
        return a
    }

    function Te(t, e, i) {
        const n = t.currentDevicePixelRatio,
            s = 0 !== i ? Math.max(i / 2, .5) : 0;
        return Math.round((e - s) * n) / n + s
    }

    function Me(t, e) {
        (e || t) && ((e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore())
    }

    function ke(t, e, i, n) {
        Ce(t, e, i, n, null)
    }

    function Ce(t, e, i, n, s) {
        let r, o, a, l, c, d, h, u;
        const p = e.pointStyle,
            f = e.rotation,
            g = e.radius;
        let m = (f || 0) * A;
        if (p && "object" == typeof p && (r = p.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return t.save(), t.translate(i, n), t.rotate(m), t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height), void t.restore();
        if (!(isNaN(g) || g <= 0)) {
            switch (t.beginPath(), p) {
                default: s ? t.ellipse(i, n, s / 2, g, 0, 0, P) : t.arc(i, n, g, 0, P),
                t.closePath();
                break;
                case "triangle":
                        d = s ? s / 2 : g,
                    t.moveTo(i + Math.sin(m) * d, n - Math.cos(m) * g),
                    m += z,
                    t.lineTo(i + Math.sin(m) * d, n - Math.cos(m) * g),
                    m += z,
                    t.lineTo(i + Math.sin(m) * d, n - Math.cos(m) * g),
                    t.closePath();
                    break;
                case "rectRounded":
                        c = .516 * g,
                    l = g - c,
                    o = Math.cos(m + I) * l,
                    h = Math.cos(m + I) * (s ? s / 2 - c : l),
                    a = Math.sin(m + I) * l,
                    u = Math.sin(m + I) * (s ? s / 2 - c : l),
                    t.arc(i - h, n - a, c, m - C, m - O),
                    t.arc(i + u, n - o, c, m - O, m),
                    t.arc(i + h, n + a, c, m, m + O),
                    t.arc(i - u, n + o, c, m + O, m + C),
                    t.closePath();
                    break;
                case "rect":
                        if (!f) {
                        l = Math.SQRT1_2 * g, d = s ? s / 2 : l, t.rect(i - d, n - l, 2 * d, 2 * l);
                        break
                    }m += I;
                case "rectRot":
                        h = Math.cos(m) * (s ? s / 2 : g),
                    o = Math.cos(m) * g,
                    a = Math.sin(m) * g,
                    u = Math.sin(m) * (s ? s / 2 : g),
                    t.moveTo(i - h, n - a),
                    t.lineTo(i + u, n - o),
                    t.lineTo(i + h, n + a),
                    t.lineTo(i - u, n + o),
                    t.closePath();
                    break;
                case "crossRot":
                        m += I;
                case "cross":
                        h = Math.cos(m) * (s ? s / 2 : g),
                    o = Math.cos(m) * g,
                    a = Math.sin(m) * g,
                    u = Math.sin(m) * (s ? s / 2 : g),
                    t.moveTo(i - h, n - a),
                    t.lineTo(i + h, n + a),
                    t.moveTo(i + u, n - o),
                    t.lineTo(i - u, n + o);
                    break;
                case "star":
                        h = Math.cos(m) * (s ? s / 2 : g),
                    o = Math.cos(m) * g,
                    a = Math.sin(m) * g,
                    u = Math.sin(m) * (s ? s / 2 : g),
                    t.moveTo(i - h, n - a),
                    t.lineTo(i + h, n + a),
                    t.moveTo(i + u, n - o),
                    t.lineTo(i - u, n + o),
                    m += I,
                    h = Math.cos(m) * (s ? s / 2 : g),
                    o = Math.cos(m) * g,
                    a = Math.sin(m) * g,
                    u = Math.sin(m) * (s ? s / 2 : g),
                    t.moveTo(i - h, n - a),
                    t.lineTo(i + h, n + a),
                    t.moveTo(i + u, n - o),
                    t.lineTo(i - u, n + o);
                    break;
                case "line":
                        o = s ? s / 2 : Math.cos(m) * g,
                    a = Math.sin(m) * g,
                    t.moveTo(i - o, n - a),
                    t.lineTo(i + o, n + a);
                    break;
                case "dash":
                        t.moveTo(i, n),
                    t.lineTo(i + Math.cos(m) * (s ? s / 2 : g), n + Math.sin(m) * g);
                    break;
                case !1:
                        t.closePath()
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
        }
    }

    function Pe(t, e, i) {
        return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
    }

    function De(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    }

    function Le(t) {
        t.restore()
    }

    function Ae(t, e, i, n, s) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === s) {
            const n = (e.x + i.x) / 2;
            t.lineTo(n, e.y), t.lineTo(n, i.y)
        } else "after" === s != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y)
    }

    function Oe(t, e, i, n) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(n ? e.cp1x : e.cp2x, n ? e.cp1y : e.cp2y, n ? i.cp2x : i.cp1x, n ? i.cp2y : i.cp1y, i.x, i.y)
    }

    function Ie(t, e, i, n, s) {
        if (s.strikethrough || s.underline) {
            const r = t.measureText(n),
                o = e - r.actualBoundingBoxLeft,
                a = e + r.actualBoundingBoxRight,
                l = i - r.actualBoundingBoxAscent,
                c = i + r.actualBoundingBoxDescent,
                d = s.strikethrough ? (l + c) / 2 : c;
            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = s.decorationWidth || 2, t.moveTo(o, d), t.lineTo(a, d), t.stroke()
        }
    }

    function ze(t, e) {
        const i = t.fillStyle;
        t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i
    }

    function Re(t, e, i, r, o, a = {}) {
        const l = s(e) ? e : [e],
            c = a.strokeWidth > 0 && "" !== a.strokeColor;
        let d, h;
        for (t.save(), t.font = o.string, function(t, e) {
                e.translation && t.translate(e.translation[0], e.translation[1]), n(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
            }(t, a), d = 0; d < l.length; ++d) h = l[d], a.backdrop && ze(t, a.backdrop), c && (a.strokeColor && (t.strokeStyle = a.strokeColor), n(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(h, i, r, a.maxWidth)), t.fillText(h, i, r, a.maxWidth), Ie(t, i, r, h, a), r += Number(o.lineHeight);
        t.restore()
    }

    function Fe(t, e) {
        const {
            x: i,
            y: n,
            w: s,
            h: r,
            radius: o
        } = e;
        t.arc(i + o.topLeft, n + o.topLeft, o.topLeft, 1.5 * C, C, !0), t.lineTo(i, n + r - o.bottomLeft), t.arc(i + o.bottomLeft, n + r - o.bottomLeft, o.bottomLeft, C, O, !0), t.lineTo(i + s - o.bottomRight, n + r), t.arc(i + s - o.bottomRight, n + r - o.bottomRight, o.bottomRight, O, 0, !0), t.lineTo(i + s, n + o.topRight), t.arc(i + s - o.topRight, n + o.topRight, o.topRight, 0, -O, !0), t.lineTo(i + o.topLeft, n)
    }

    function $e(t, e = [""], i, n, s = (() => t[0])) {
        const r = i || t;
        void 0 === n && (n = Ue("_fallback", t));
        const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t,
            _rootScopes: r,
            _fallback: n,
            _getTarget: s,
            override: i => $e([i, ...t], e, r, n)
        };
        return new Proxy(o, {
            deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
            get: (i, n) => Ve(i, n, (() => function(t, e, i, n) {
                let s;
                for (const r of e)
                    if (s = Ue(He(r, t), i), void 0 !== s) return We(t, s) ? Ge(i, n, t, s) : s
            }(n, e, t, i))),
            getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => Qe(t).includes(e),
            ownKeys: t => Qe(t),
            set(t, e, i) {
                const n = t._storage || (t._storage = s());
                return t[e] = n[e] = i, delete t._keys, !0
            }
        })
    }

    function je(t, e, i, n) {
        const o = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: i,
            _stack: new Set,
            _descriptors: Ne(t, n),
            setContext: e => je(t, e, i, n),
            override: s => je(t.override(s), e, i, n)
        };
        return new Proxy(o, {
            deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
            get: (t, e, i) => Ve(t, e, (() => function(t, e, i) {
                const {
                    _proxy: n,
                    _context: o,
                    _subProxy: a,
                    _descriptors: l
                } = t;
                let c = n[e];
                return T(c) && l.isScriptable(e) && (c = function(t, e, i, n) {
                    const {
                        _proxy: s,
                        _context: r,
                        _subProxy: o,
                        _stack: a
                    } = i;
                    if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                    a.add(t);
                    let l = e(r, o || n);
                    return a.delete(t), We(t, l) && (l = Ge(s._scopes, s, t, l)), l
                }(e, c, t, i)), s(c) && c.length && (c = function(t, e, i, n) {
                    const {
                        _proxy: s,
                        _context: o,
                        _subProxy: a,
                        _descriptors: l
                    } = i;
                    if (void 0 !== o.index && n(t)) return e[o.index % e.length];
                    if (r(e[0])) {
                        const i = e,
                            n = s._scopes.filter((t => t !== i));
                        e = [];
                        for (const r of i) {
                            const i = Ge(n, s, t, r);
                            e.push(je(i, o, a && a[t], l))
                        }
                    }
                    return e
                }(e, c, t, l.isIndexable)), We(e, c) && (c = je(c, o, a && a[e], l)), c
            }(t, e, i))),
            getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, i) => Reflect.has(t, i),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, i, n) => (t[i] = n, delete e[i], !0)
        })
    }

    function Ne(t, e = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: i = e.scriptable,
            _indexable: n = e.indexable,
            _allKeys: s = e.allKeys
        } = t;
        return {
            allKeys: s,
            scriptable: i,
            indexable: n,
            isScriptable: T(i) ? i : () => i,
            isIndexable: T(n) ? n : () => n
        }
    }
    const He = (t, e) => t ? t + S(e) : e,
        We = (t, e) => r(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

    function Ve(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) return t[e];
        const n = i();
        return t[e] = n, n
    }

    function Be(t, e, i) {
        return T(t) ? t(e, i) : t
    }
    const qe = (t, e) => !0 === t ? e : "string" == typeof t ? _(e, t) : void 0;

    function Ye(t, e, i, n, s) {
        for (const r of e) {
            const e = qe(i, r);
            if (e) {
                t.add(e);
                const r = Be(e._fallback, i, s);
                if (void 0 !== r && r !== i && r !== n) return r
            } else if (!1 === e && void 0 !== n && i !== n) return null
        }
        return !1
    }

    function Ge(t, e, i, n) {
        const o = e._rootScopes,
            a = Be(e._fallback, i, n),
            l = [...t, ...o],
            c = new Set;
        c.add(n);
        let d = Xe(c, l, i, a || i, n);
        return null !== d && (void 0 === a || a === i || (d = Xe(c, l, a, d, n), null !== d)) && $e(Array.from(c), [""], o, a, (() => function(t, e, i) {
            const n = t._getTarget();
            e in n || (n[e] = {});
            const o = n[e];
            return s(o) && r(i) ? i : o || {}
        }(e, i, n)))
    }

    function Xe(t, e, i, n, s) {
        for (; i;) i = Ye(t, e, i, n, s);
        return i
    }

    function Ue(t, e) {
        for (const i of e) {
            if (!i) continue;
            const e = i[t];
            if (void 0 !== e) return e
        }
    }

    function Qe(t) {
        let e = t._keys;
        return e || (e = t._keys = function(t) {
            const e = new Set;
            for (const i of t)
                for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
            return Array.from(e)
        }(t._scopes)), e
    }

    function Ke(t, e, i, n) {
        const {
            iScale: s
        } = t, {
            key: r = "r"
        } = this._parsing, o = new Array(n);
        let a, l, c, d;
        for (a = 0, l = n; a < l; ++a) c = a + i, d = e[c], o[a] = {
            r: s.parse(_(d, r), c)
        };
        return o
    }
    const Ze = Number.EPSILON || 1e-14,
        Je = (t, e) => e < t.length && !t[e].skip && t[e],
        ti = t => "x" === t ? "y" : "x";

    function ei(t, e, i, n) {
        const s = t.skip ? e : t,
            r = e,
            o = i.skip ? e : i,
            a = X(r, s),
            l = X(o, r);
        let c = a / (a + l),
            d = l / (a + l);
        c = isNaN(c) ? 0 : c, d = isNaN(d) ? 0 : d;
        const h = n * c,
            u = n * d;
        return {
            previous: {
                x: r.x - h * (o.x - s.x),
                y: r.y - h * (o.y - s.y)
            },
            next: {
                x: r.x + u * (o.x - s.x),
                y: r.y + u * (o.y - s.y)
            }
        }
    }

    function ii(t, e = "x") {
        const i = ti(e),
            n = t.length,
            s = Array(n).fill(0),
            r = Array(n);
        let o, a, l, c = Je(t, 0);
        for (o = 0; o < n; ++o)
            if (a = l, l = c, c = Je(t, o + 1), l) {
                if (c) {
                    const t = c[e] - l[e];
                    s[o] = 0 !== t ? (c[i] - l[i]) / t : 0
                }
                r[o] = a ? c ? F(s[o - 1]) !== F(s[o]) ? 0 : (s[o - 1] + s[o]) / 2 : s[o - 1] : s[o]
            }! function(t, e, i) {
            const n = t.length;
            let s, r, o, a, l, c = Je(t, 0);
            for (let d = 0; d < n - 1; ++d) l = c, c = Je(t, d + 1), l && c && ($(e[d], 0, Ze) ? i[d] = i[d + 1] = 0 : (s = i[d] / e[d], r = i[d + 1] / e[d], a = Math.pow(s, 2) + Math.pow(r, 2), a <= 9 || (o = 3 / Math.sqrt(a), i[d] = s * o * e[d], i[d + 1] = r * o * e[d])))
        }(t, s, r),
        function(t, e, i = "x") {
            const n = ti(i),
                s = t.length;
            let r, o, a, l = Je(t, 0);
            for (let c = 0; c < s; ++c) {
                if (o = a, a = l, l = Je(t, c + 1), !a) continue;
                const s = a[i],
                    d = a[n];
                o && (r = (s - o[i]) / 3, a[`cp1${i}`] = s - r, a[`cp1${n}`] = d - r * e[c]), l && (r = (l[i] - s) / 3, a[`cp2${i}`] = s + r, a[`cp2${n}`] = d + r * e[c])
            }
        }(t, r, e)
    }

    function ni(t, e, i) {
        return Math.max(Math.min(t, i), e)
    }

    function si(t, e, i, n, s) {
        let r, o, a, l;
        if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ii(t, s);
        else {
            let i = n ? t[t.length - 1] : t[0];
            for (r = 0, o = t.length; r < o; ++r) a = t[r], l = ei(i, a, t[Math.min(r + 1, o - (n ? 0 : 1)) % o], e.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, i = a
        }
        e.capBezierPoints && function(t, e) {
            let i, n, s, r, o, a = Pe(t[0], e);
            for (i = 0, n = t.length; i < n; ++i) o = r, r = a, a = i < n - 1 && Pe(t[i + 1], e), r && (s = t[i], o && (s.cp1x = ni(s.cp1x, e.left, e.right), s.cp1y = ni(s.cp1y, e.top, e.bottom)), a && (s.cp2x = ni(s.cp2x, e.left, e.right), s.cp2y = ni(s.cp2y, e.top, e.bottom)))
        }(t, i)
    }
    const ri = t => 0 === t || 1 === t,
        oi = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * P / i),
        ai = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * P / i) + 1,
        li = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => 1 - Math.cos(t * O),
            easeOutSine: t => Math.sin(t * O),
            easeInOutSine: t => -.5 * (Math.cos(C * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => ri(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => ri(t) ? t : oi(t, .075, .3),
            easeOutElastic: t => ri(t) ? t : ai(t, .075, .3),
            easeInOutElastic(t) {
                const e = .1125;
                return ri(t) ? t : t < .5 ? .5 * oi(2 * t, e, .45) : .5 + .5 * ai(2 * t - 1, e, .45)
            },
            easeInBack(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
                let e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: t => 1 - li.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const e = 7.5625,
                    i = 2.75;
                return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
            },
            easeInOutBounce: t => t < .5 ? .5 * li.easeInBounce(2 * t) : .5 * li.easeOutBounce(2 * t - 1) + .5
        };

    function ci(t, e, i, n) {
        return {
            x: t.x + i * (e.x - t.x),
            y: t.y + i * (e.y - t.y)
        }
    }

    function di(t, e, i, n) {
        return {
            x: t.x + i * (e.x - t.x),
            y: "middle" === n ? i < .5 ? t.y : e.y : "after" === n ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
        }
    }

    function hi(t, e, i, n) {
        const s = {
                x: t.cp2x,
                y: t.cp2y
            },
            r = {
                x: e.cp1x,
                y: e.cp1y
            },
            o = ci(t, s, i),
            a = ci(s, r, i),
            l = ci(r, e, i),
            c = ci(o, a, i),
            d = ci(a, l, i);
        return ci(c, d, i)
    }
    const ui = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        pi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function fi(t, e) {
        const i = ("" + t).match(ui);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (t = +i[2], i[3]) {
            case "px":
                return t;
            case "%":
                t /= 100
        }
        return e * t
    }
    const gi = t => +t || 0;

    function mi(t, e) {
        const i = {},
            n = r(e),
            s = n ? Object.keys(e) : e,
            o = r(t) ? n ? i => l(t[i], t[e[i]]) : e => t[e] : () => t;
        for (const t of s) i[t] = gi(o(t));
        return i
    }

    function vi(t) {
        return mi(t, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        })
    }

    function yi(t) {
        return mi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function bi(t) {
        const e = vi(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
    }

    function xi(t, e) {
        t = t || {}, e = e || ae.font;
        let i = l(t.size, e.size);
        "string" == typeof i && (i = parseInt(i, 10));
        let n = l(t.style, e.style);
        n && !("" + n).match(pi) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
        const s = {
            family: l(t.family, e.family),
            lineHeight: fi(l(t.lineHeight, e.lineHeight), i),
            size: i,
            style: n,
            weight: l(t.weight, e.weight),
            string: ""
        };
        return s.string = _e(s), s
    }

    function wi(t, e, i, n) {
        let r, o, a, l = !0;
        for (r = 0, o = t.length; r < o; ++r)
            if (a = t[r], void 0 !== a && (void 0 !== e && "function" == typeof a && (a = a(e), l = !1), void 0 !== i && s(a) && (a = a[i % a.length], l = !1), void 0 !== a)) return n && !l && (n.cacheable = !1), a
    }

    function _i(t, e, i) {
        const {
            min: n,
            max: s
        } = t, r = d(e, (s - n) / 2), o = (t, e) => i && 0 === t ? 0 : t + e;
        return {
            min: o(n, -Math.abs(r)),
            max: o(s, r)
        }
    }

    function Si(t, e) {
        return Object.assign(Object.create(t), e)
    }

    function Ei(t, e, i) {
        return t ? function(t, e) {
            return {
                x: i => t + t + e - i,
                setWidth(t) {
                    e = t
                },
                textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e
            }
        }(e, i) : {
            x: t => t,
            setWidth(t) {},
            textAlign: t => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t
        }
    }

    function Ti(t, e) {
        let i, n;
        "ltr" !== e && "rtl" !== e || (i = t.canvas.style, n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
    }

    function Mi(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
    }

    function ki(t) {
        return "angle" === t ? {
            between: K,
            compare: U,
            normalize: Q
        } : {
            between: tt,
            compare: (t, e) => t - e,
            normalize: t => t
        }
    }

    function Ci({
        start: t,
        end: e,
        count: i,
        loop: n,
        style: s
    }) {
        return {
            start: t % i,
            end: e % i,
            loop: n && (e - t + 1) % i == 0,
            style: s
        }
    }

    function Pi(t, e, i) {
        if (!i) return [t];
        const {
            property: n,
            start: s,
            end: r
        } = i, o = e.length, {
            compare: a,
            between: l,
            normalize: c
        } = ki(n), {
            start: d,
            end: h,
            loop: u,
            style: p
        } = function(t, e, i) {
            const {
                property: n,
                start: s,
                end: r
            } = i, {
                between: o,
                normalize: a
            } = ki(n), l = e.length;
            let c, d, {
                start: h,
                end: u,
                loop: p
            } = t;
            if (p) {
                for (h += l, u += l, c = 0, d = l; c < d && o(a(e[h % l][n]), s, r); ++c) h--, u--;
                h %= l, u %= l
            }
            return u < h && (u += l), {
                start: h,
                end: u,
                loop: p,
                style: t.style
            }
        }(t, e, i), f = [];
        let g, m, v, y = !1,
            b = null;
        for (let t = d, i = d; t <= h; ++t) m = e[t % o], m.skip || (g = c(m[n]), g !== v && (y = l(g, s, r), null === b && (y || l(s, v, g) && 0 !== a(s, v)) && (b = 0 === a(g, s) ? t : i), null !== b && (!y || 0 === a(r, g) || l(r, v, g)) && (f.push(Ci({
            start: b,
            end: t,
            loop: u,
            count: o,
            style: p
        })), b = null), i = t, v = g));
        return null !== b && f.push(Ci({
            start: b,
            end: h,
            loop: u,
            count: o,
            style: p
        })), f
    }

    function Di(t, e) {
        const i = [],
            n = t.segments;
        for (let s = 0; s < n.length; s++) {
            const r = Pi(n[s], t.points, e);
            r.length && i.push(...r)
        }
        return i
    }

    function Li(t, e) {
        const i = t.points,
            n = t.options.spanGaps,
            s = i.length;
        if (!s) return [];
        const r = !!t._loop,
            {
                start: o,
                end: a
            } = function(t, e, i, n) {
                let s = 0,
                    r = e - 1;
                if (i && !n)
                    for (; s < e && !t[s].skip;) s++;
                for (; s < e && t[s].skip;) s++;
                for (s %= e, i && (r += s); r > s && t[r % e].skip;) r--;
                return r %= e, {
                    start: s,
                    end: r
                }
            }(i, s, r, n);
        return Ai(t, !0 === n ? [{
            start: o,
            end: a,
            loop: r
        }] : function(t, e, i, n) {
            const s = t.length,
                r = [];
            let o, a = e,
                l = t[e];
            for (o = e + 1; o <= i; ++o) {
                const i = t[o % s];
                i.skip || i.stop ? l.skip || (n = !1, r.push({
                    start: e % s,
                    end: (o - 1) % s,
                    loop: n
                }), e = a = i.stop ? o : null) : (a = o, l.skip && (e = o)), l = i
            }
            return null !== a && r.push({
                start: e % s,
                end: a % s,
                loop: n
            }), r
        }(i, o, a < o ? a + s : a, !!t._fullLoop && 0 === o && a === s - 1), i, e)
    }

    function Ai(t, e, i, n) {
        return n && n.setContext && i ? function(t, e, i, n) {
            const s = t._chart.getContext(),
                r = Oi(t.options),
                {
                    _datasetIndex: o,
                    options: {
                        spanGaps: a
                    }
                } = t,
                l = i.length,
                c = [];
            let d = r,
                h = e[0].start,
                u = h;

            function p(t, e, n, s) {
                const r = a ? -1 : 1;
                if (t !== e) {
                    for (t += l; i[t % l].skip;) t -= r;
                    for (; i[e % l].skip;) e += r;
                    t % l != e % l && (c.push({
                        start: t % l,
                        end: e % l,
                        loop: n,
                        style: s
                    }), d = s, h = e % l)
                }
            }
            for (const t of e) {
                h = a ? h : t.start;
                let e, r = i[h % l];
                for (u = h + 1; u <= t.end; u++) {
                    const a = i[u % l];
                    e = Oi(n.setContext(Si(s, {
                        type: "segment",
                        p0: r,
                        p1: a,
                        p0DataIndex: (u - 1) % l,
                        p1DataIndex: u % l,
                        datasetIndex: o
                    }))), Ii(e, d) && p(h, u - 1, t.loop, d), r = a, d = e
                }
                h < u - 1 && p(h, u - 1, t.loop, d)
            }
            return c
        }(t, e, i, n) : e
    }

    function Oi(t) {
        return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor
        }
    }

    function Ii(t, e) {
        if (!e) return !1;
        const i = [],
            n = function(t, e) {
                return Xt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e
            };
        return JSON.stringify(t, n) !== JSON.stringify(e, n)
    }
    var zi = Object.freeze({
        __proto__: null,
        HALF_PI: O,
        INFINITY: L,
        PI: C,
        PITAU: D,
        QUARTER_PI: I,
        RAD_PER_DEG: A,
        TAU: P,
        TWO_THIRDS_PI: z,
        _addGrace: _i,
        _alignPixel: Te,
        _alignStartEnd: pt,
        _angleBetween: K,
        _angleDiff: U,
        _arrayUnique: lt,
        _attachContext: je,
        _bezierCurveTo: Oe,
        _bezierInterpolation: hi,
        _boundSegment: Pi,
        _boundSegments: Di,
        _capitalize: S,
        _computeSegments: Li,
        _createResolver: $e,
        _decimalPlaces: Y,
        _deprecated: function(t, e, i, n) {
            void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + n + '" instead')
        },
        _descriptors: Ne,
        _elementsEqual: p,
        _factorize: N,
        _filterBetween: st,
        _getParentNode: ce,
        _getStartAndCountOfVisiblePoints: gt,
        _int16Range: J,
        _isBetween: tt,
        _isClickEvent: k,
        _isDomSupported: le,
        _isPointInArea: Pe,
        _limitValue: Z,
        _longestText: Ee,
        _lookup: et,
        _lookupByKey: it,
        _measureText: Se,
        _merger: m,
        _mergerIf: b,
        _normalizeAngle: Q,
        _parseObjectDataRadialScale: Ke,
        _pointInLine: ci,
        _readValueToProps: mi,
        _rlookupByKey: nt,
        _scaleRangesChanged: mt,
        _setMinAndMaxByKey: V,
        _splitKey: w,
        _steppedInterpolation: di,
        _steppedLineTo: Ae,
        _textX: ft,
        _toLeftRightCenter: ut,
        _updateBezierControlPoints: si,
        addRoundedRectPath: Fe,
        almostEquals: $,
        almostWhole: W,
        callback: h,
        clearCanvas: Me,
        clipArea: De,
        clone: f,
        color: Ut,
        createContext: Si,
        debounce: ht,
        defined: E,
        distanceBetweenPoints: X,
        drawPoint: ke,
        drawPointLegend: Ce,
        each: u,
        easingEffects: li,
        finiteOrDefault: a,
        fontString: function(t, e, i) {
            return e + " " + t + "px " + i
        },
        formatNumber: te,
        getAngleFromPoint: G,
        getHoverColor: Qt,
        getMaximumSize: ye,
        getRelativePosition: me,
        getRtlAdapter: Ei,
        getStyle: ue,
        isArray: s,
        isFinite: o,
        isFunction: T,
        isNullOrUndef: n,
        isNumber: H,
        isObject: r,
        isPatternOrGradient: Xt,
        listenArrayEvents: ot,
        log10: R,
        merge: v,
        mergeIf: y,
        niceNum: j,
        noop: e,
        overrideTextDirection: Ti,
        readUsedSize: we,
        renderText: Re,
        requestAnimFrame: ct,
        resolve: wi,
        resolveObjectKey: _,
        restoreTextDirection: Mi,
        retinaScale: be,
        setsEqual: M,
        sign: F,
        splineCurve: ei,
        splineCurveMonotone: ii,
        supportsEventListenerOptions: xe,
        throttled: dt,
        toDegrees: q,
        toDimension: d,
        toFont: xi,
        toFontString: _e,
        toLineHeight: fi,
        toPadding: bi,
        toPercentage: c,
        toRadians: B,
        toTRBL: vi,
        toTRBLCorners: yi,
        uid: i,
        unclipArea: Le,
        unlistenArrayEvents: at,
        valueOrDefault: l
    });

    function Ri(t, e, i, n) {
        const {
            controller: s,
            data: r,
            _sorted: o
        } = t, a = s._cachedMeta.iScale;
        if (a && e === a.axis && "r" !== e && o && r.length) {
            const t = a._reversePixels ? nt : it;
            if (!n) return t(r, e, i);
            if (s._sharedOptions) {
                const n = r[0],
                    s = "function" == typeof n.getRange && n.getRange(e);
                if (s) {
                    const n = t(r, e, i - s),
                        o = t(r, e, i + s);
                    return {
                        lo: n.lo,
                        hi: o.hi
                    }
                }
            }
        }
        return {
            lo: 0,
            hi: r.length - 1
        }
    }

    function Fi(t, e, i, n, s) {
        const r = t.getSortedVisibleDatasetMetas(),
            o = i[e];
        for (let t = 0, i = r.length; t < i; ++t) {
            const {
                index: i,
                data: a
            } = r[t], {
                lo: l,
                hi: c
            } = Ri(r[t], e, o, s);
            for (let t = l; t <= c; ++t) {
                const e = a[t];
                e.skip || n(e, i, t)
            }
        }
    }

    function $i(t, e, i, n, s) {
        const r = [];
        return s || t.isPointInArea(e) ? (Fi(t, i, e, (function(i, o, a) {
            (s || Pe(i, t.chartArea, 0)) && i.inRange(e.x, e.y, n) && r.push({
                element: i,
                datasetIndex: o,
                index: a
            })
        }), !0), r) : r
    }

    function ji(t, e, i, n, s, r) {
        return r || t.isPointInArea(e) ? "r" !== i || n ? function(t, e, i, n, s, r) {
            let o = [];
            const a = function(t) {
                const e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y");
                return function(t, n) {
                    const s = e ? Math.abs(t.x - n.x) : 0,
                        r = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(s, 2) + Math.pow(r, 2))
                }
            }(i);
            let l = Number.POSITIVE_INFINITY;
            return Fi(t, i, e, (function(i, c, d) {
                const h = i.inRange(e.x, e.y, s);
                if (n && !h) return;
                const u = i.getCenterPoint(s);
                if (!r && !t.isPointInArea(u) && !h) return;
                const p = a(e, u);
                p < l ? (o = [{
                    element: i,
                    datasetIndex: c,
                    index: d
                }], l = p) : p === l && o.push({
                    element: i,
                    datasetIndex: c,
                    index: d
                })
            })), o
        }(t, e, i, n, s, r) : function(t, e, i, n) {
            let s = [];
            return Fi(t, i, e, (function(t, i, r) {
                const {
                    startAngle: o,
                    endAngle: a
                } = t.getProps(["startAngle", "endAngle"], n), {
                    angle: l
                } = G(t, {
                    x: e.x,
                    y: e.y
                });
                K(l, o, a) && s.push({
                    element: t,
                    datasetIndex: i,
                    index: r
                })
            })), s
        }(t, e, i, s) : []
    }

    function Ni(t, e, i, n, s) {
        const r = [],
            o = "x" === i ? "inXRange" : "inYRange";
        let a = !1;
        return Fi(t, i, e, ((t, n, l) => {
            t[o] && t[o](e[i], s) && (r.push({
                element: t,
                datasetIndex: n,
                index: l
            }), a = a || t.inRange(e.x, e.y, s))
        })), n && !a ? [] : r
    }
    var Hi = {
        evaluateInteractionItems: Fi,
        modes: {
            index(t, e, i, n) {
                const s = me(e, t),
                    r = i.axis || "x",
                    o = i.includeInvisible || !1,
                    a = i.intersect ? $i(t, s, r, n, o) : ji(t, s, r, !1, n, o),
                    l = [];
                return a.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                    const e = a[0].index,
                        i = t.data[e];
                    i && !i.skip && l.push({
                        element: i,
                        datasetIndex: t.index,
                        index: e
                    })
                })), l) : []
            },
            dataset(t, e, i, n) {
                const s = me(e, t),
                    r = i.axis || "xy",
                    o = i.includeInvisible || !1;
                let a = i.intersect ? $i(t, s, r, n, o) : ji(t, s, r, !1, n, o);
                if (a.length > 0) {
                    const e = a[0].datasetIndex,
                        i = t.getDatasetMeta(e).data;
                    a = [];
                    for (let t = 0; t < i.length; ++t) a.push({
                        element: i[t],
                        datasetIndex: e,
                        index: t
                    })
                }
                return a
            },
            point: (t, e, i, n) => $i(t, me(e, t), i.axis || "xy", n, i.includeInvisible || !1),
            nearest(t, e, i, n) {
                const s = me(e, t),
                    r = i.axis || "xy",
                    o = i.includeInvisible || !1;
                return ji(t, s, r, i.intersect, n, o)
            },
            x: (t, e, i, n) => Ni(t, me(e, t), "x", i.intersect, n),
            y: (t, e, i, n) => Ni(t, me(e, t), "y", i.intersect, n)
        }
    };
    const Wi = ["left", "top", "right", "bottom"];

    function Vi(t, e) {
        return t.filter((t => t.pos === e))
    }

    function Bi(t, e) {
        return t.filter((t => -1 === Wi.indexOf(t.pos) && t.box.axis === e))
    }

    function qi(t, e) {
        return t.sort(((t, i) => {
            const n = e ? i : t,
                s = e ? t : i;
            return n.weight === s.weight ? n.index - s.index : n.weight - s.weight
        }))
    }

    function Yi(t, e, i, n) {
        return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
    }

    function Gi(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
    }

    function Xi(t, e, i, n) {
        const {
            pos: s,
            box: o
        } = i, a = t.maxPadding;
        if (!r(s)) {
            i.size && (t[s] -= i.size);
            const e = n[i.stack] || {
                size: 0,
                count: 1
            };
            e.size = Math.max(e.size, i.horizontal ? o.height : o.width), i.size = e.size / e.count, t[s] += i.size
        }
        o.getPadding && Gi(a, o.getPadding());
        const l = Math.max(0, e.outerWidth - Yi(a, t, "left", "right")),
            c = Math.max(0, e.outerHeight - Yi(a, t, "top", "bottom")),
            d = l !== t.w,
            h = c !== t.h;
        return t.w = l, t.h = c, i.horizontal ? {
            same: d,
            other: h
        } : {
            same: h,
            other: d
        }
    }

    function Ui(t, e) {
        const i = e.maxPadding;
        return function(t) {
            const n = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t.forEach((t => {
                n[t] = Math.max(e[t], i[t])
            })), n
        }(t ? ["left", "right"] : ["top", "bottom"])
    }

    function Qi(t, e, i, n) {
        const s = [];
        let r, o, a, l, c, d;
        for (r = 0, o = t.length, c = 0; r < o; ++r) {
            a = t[r], l = a.box, l.update(a.width || e.w, a.height || e.h, Ui(a.horizontal, e));
            const {
                same: o,
                other: h
            } = Xi(e, i, a, n);
            c |= o && s.length, d = d || h, l.fullSize || s.push(a)
        }
        return c && Qi(s, e, i, n) || d
    }

    function Ki(t, e, i, n, s) {
        t.top = i, t.left = e, t.right = e + n, t.bottom = i + s, t.width = n, t.height = s
    }

    function Zi(t, e, i, n) {
        const s = i.padding;
        let {
            x: r,
            y: o
        } = e;
        for (const a of t) {
            const t = a.box,
                l = n[a.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                c = a.stackWeight / l.weight || 1;
            if (a.horizontal) {
                const n = e.w * c,
                    r = l.size || t.height;
                E(l.start) && (o = l.start), t.fullSize ? Ki(t, s.left, o, i.outerWidth - s.right - s.left, r) : Ki(t, e.left + l.placed, o, n, r), l.start = o, l.placed += n, o = t.bottom
            } else {
                const n = e.h * c,
                    o = l.size || t.width;
                E(l.start) && (r = l.start), t.fullSize ? Ki(t, r, s.top, o, i.outerHeight - s.bottom - s.top) : Ki(t, r, e.top + l.placed, o, n), l.start = r, l.placed += n, r = t.right
            }
        }
        e.x = r, e.y = o
    }
    var Ji = {
        addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                return [{
                    z: 0,
                    draw(t) {
                        e.draw(t)
                    }
                }]
            }, t.boxes.push(e)
        },
        removeBox(t, e) {
            const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
        },
        configure(t, e, i) {
            e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
        },
        update(t, e, i, n) {
            if (!t) return;
            const s = bi(t.options.layout.padding),
                r = Math.max(e - s.width, 0),
                o = Math.max(i - s.height, 0),
                a = function(t) {
                    const e = function(t) {
                            const e = [];
                            let i, n, s, r, o, a;
                            for (i = 0, n = (t || []).length; i < n; ++i) s = t[i], ({
                                position: r,
                                options: {
                                    stack: o,
                                    stackWeight: a = 1
                                }
                            } = s), e.push({
                                index: i,
                                box: s,
                                pos: r,
                                horizontal: s.isHorizontal(),
                                weight: s.weight,
                                stack: o && r + o,
                                stackWeight: a
                            });
                            return e
                        }(t),
                        i = qi(e.filter((t => t.box.fullSize)), !0),
                        n = qi(Vi(e, "left"), !0),
                        s = qi(Vi(e, "right")),
                        r = qi(Vi(e, "top"), !0),
                        o = qi(Vi(e, "bottom")),
                        a = Bi(e, "x"),
                        l = Bi(e, "y");
                    return {
                        fullSize: i,
                        leftAndTop: n.concat(r),
                        rightAndBottom: s.concat(l).concat(o).concat(a),
                        chartArea: Vi(e, "chartArea"),
                        vertical: n.concat(s).concat(l),
                        horizontal: r.concat(o).concat(a)
                    }
                }(t.boxes),
                l = a.vertical,
                c = a.horizontal;
            u(t.boxes, (t => {
                "function" == typeof t.beforeLayout && t.beforeLayout()
            }));
            const d = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                h = Object.freeze({
                    outerWidth: e,
                    outerHeight: i,
                    padding: s,
                    availableWidth: r,
                    availableHeight: o,
                    vBoxMaxWidth: r / 2 / d,
                    hBoxMaxHeight: o / 2
                }),
                p = Object.assign({}, s);
            Gi(p, bi(n));
            const f = Object.assign({
                    maxPadding: p,
                    w: r,
                    h: o,
                    x: s.left,
                    y: s.top
                }, s),
                g = function(t, e) {
                    const i = function(t) {
                            const e = {};
                            for (const i of t) {
                                const {
                                    stack: t,
                                    pos: n,
                                    stackWeight: s
                                } = i;
                                if (!t || !Wi.includes(n)) continue;
                                const r = e[t] || (e[t] = {
                                    count: 0,
                                    placed: 0,
                                    weight: 0,
                                    size: 0
                                });
                                r.count++, r.weight += s
                            }
                            return e
                        }(t),
                        {
                            vBoxMaxWidth: n,
                            hBoxMaxHeight: s
                        } = e;
                    let r, o, a;
                    for (r = 0, o = t.length; r < o; ++r) {
                        a = t[r];
                        const {
                            fullSize: o
                        } = a.box, l = i[a.stack], c = l && a.stackWeight / l.weight;
                        a.horizontal ? (a.width = c ? c * n : o && e.availableWidth, a.height = s) : (a.width = n, a.height = c ? c * s : o && e.availableHeight)
                    }
                    return i
                }(l.concat(c), h);
            Qi(a.fullSize, f, h, g), Qi(l, f, h, g), Qi(c, f, h, g) && Qi(l, f, h, g),
                function(t) {
                    const e = t.maxPadding;

                    function i(i) {
                        const n = Math.max(e[i] - t[i], 0);
                        return t[i] += n, n
                    }
                    t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                }(f), Zi(a.leftAndTop, f, h, g), f.x += f.w, f.y += f.h, Zi(a.rightAndBottom, f, h, g), t.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                    height: f.h,
                    width: f.w
                }, u(a.chartArea, (e => {
                    const i = e.box;
                    Object.assign(i, t.chartArea), i.update(f.w, f.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    })
                }))
        }
    };
    class tn {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
            return 1
        }
        getMaximumSize(t, e, i, n) {
            return e = Math.max(0, e || t.width), i = i || t.height, {
                width: e,
                height: Math.max(0, n ? Math.floor(e / n) : i)
            }
        }
        isAttached(t) {
            return !0
        }
        updateConfig(t) {}
    }
    class en extends tn {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null
        }
        updateConfig(t) {
            t.options.animation = !1
        }
    }
    const nn = "$chartjs",
        sn = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        },
        rn = t => null === t || "" === t,
        on = !!xe && {
            passive: !0
        };

    function an(t, e, i) {
        t && t.canvas && t.canvas.removeEventListener(e, i, on)
    }

    function ln(t, e) {
        for (const i of t)
            if (i === e || i.contains(e)) return !0
    }

    function cn(t, e, i) {
        const n = t.canvas,
            s = new MutationObserver((t => {
                let e = !1;
                for (const i of t) e = e || ln(i.addedNodes, n), e = e && !ln(i.removedNodes, n);
                e && i()
            }));
        return s.observe(document, {
            childList: !0,
            subtree: !0
        }), s
    }

    function dn(t, e, i) {
        const n = t.canvas,
            s = new MutationObserver((t => {
                let e = !1;
                for (const i of t) e = e || ln(i.removedNodes, n), e = e && !ln(i.addedNodes, n);
                e && i()
            }));
        return s.observe(document, {
            childList: !0,
            subtree: !0
        }), s
    }
    const hn = new Map;
    let un = 0;

    function pn() {
        const t = window.devicePixelRatio;
        t !== un && (un = t, hn.forEach(((e, i) => {
            i.currentDevicePixelRatio !== t && e()
        })))
    }

    function fn(t, e, i) {
        const n = t.canvas,
            s = n && ce(n);
        if (!s) return;
        const r = dt(((t, e) => {
                const n = s.clientWidth;
                i(t, e), n < s.clientWidth && i()
            }), window),
            o = new ResizeObserver((t => {
                const e = t[0],
                    i = e.contentRect.width,
                    n = e.contentRect.height;
                0 === i && 0 === n || r(i, n)
            }));
        return o.observe(s),
            function(t, e) {
                hn.size || window.addEventListener("resize", pn), hn.set(t, e)
            }(t, r), o
    }

    function gn(t, e, i) {
        i && i.disconnect(), "resize" === e && function(t) {
            hn.delete(t), hn.size || window.removeEventListener("resize", pn)
        }(t)
    }

    function mn(t, e, i) {
        const n = t.canvas,
            s = dt((e => {
                null !== t.ctx && i(function(t, e) {
                    const i = sn[t.type] || t.type,
                        {
                            x: n,
                            y: s
                        } = me(t, e);
                    return {
                        type: i,
                        chart: e,
                        native: t,
                        x: void 0 !== n ? n : null,
                        y: void 0 !== s ? s : null
                    }
                }(e, t))
            }), t);
        return function(t, e, i) {
            t && t.addEventListener(e, i, on)
        }(n, e, s), s
    }
    class vn extends tn {
        acquireContext(t, e) {
            const i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t ? (function(t, e) {
                const i = t.style,
                    n = t.getAttribute("height"),
                    s = t.getAttribute("width");
                if (t[nn] = {
                        initial: {
                            height: n,
                            width: s,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", rn(s)) {
                    const e = we(t, "width");
                    void 0 !== e && (t.width = e)
                }
                if (rn(n))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else {
                        const e = we(t, "height");
                        void 0 !== e && (t.height = e)
                    }
            }(t, e), i) : null
        }
        releaseContext(t) {
            const e = t.canvas;
            if (!e[nn]) return !1;
            const i = e[nn].initial;
            ["height", "width"].forEach((t => {
                const s = i[t];
                n(s) ? e.removeAttribute(t) : e.setAttribute(t, s)
            }));
            const s = i.style || {};
            return Object.keys(s).forEach((t => {
                e.style[t] = s[t]
            })), e.width = e.width, delete e[nn], !0
        }
        addEventListener(t, e, i) {
            this.removeEventListener(t, e);
            const n = t.$proxies || (t.$proxies = {}),
                s = {
                    attach: cn,
                    detach: dn,
                    resize: fn
                }[e] || mn;
            n[e] = s(t, e, i)
        }
        removeEventListener(t, e) {
            const i = t.$proxies || (t.$proxies = {}),
                n = i[e];
            n && (({
                attach: gn,
                detach: gn,
                resize: gn
            }[e] || an)(t, e, n), i[e] = void 0)
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio
        }
        getMaximumSize(t, e, i, n) {
            return ye(t, e, i, n)
        }
        isAttached(t) {
            const e = t && ce(t);
            return !(!e || !e.isConnected)
        }
    }

    function yn(t) {
        return !le() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? en : vn
    }
    var bn = Object.freeze({
        __proto__: null,
        BasePlatform: tn,
        BasicPlatform: en,
        DomPlatform: vn,
        _detectPlatform: yn
    });
    const xn = "transparent",
        wn = {
            boolean: (t, e, i) => i > .5 ? e : t,
            color(t, e, i) {
                const n = Ut(t || xn),
                    s = n.valid && Ut(e || xn);
                return s && s.valid ? s.mix(n, i).hexString() : e
            },
            number: (t, e, i) => t + (e - t) * i
        };
    class _n {
        constructor(t, e, i, n) {
            const s = e[i];
            n = wi([t.to, n, s, t.from]);
            const r = wi([t.from, s, n]);
            this._active = !0, this._fn = t.fn || wn[t.type || typeof r], this._easing = li[t.easing] || li.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = n, this._promises = void 0
        }
        active() {
            return this._active
        }
        update(t, e, i) {
            if (this._active) {
                this._notify(!1);
                const n = this._target[this._prop],
                    s = i - this._start,
                    r = this._duration - s;
                this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += s, this._loop = !!t.loop, this._to = wi([t.to, e, n, t.from]), this._from = wi([t.from, n, e])
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
        }
        tick(t) {
            const e = t - this._start,
                i = this._duration,
                n = this._prop,
                s = this._from,
                r = this._loop,
                o = this._to;
            let a;
            if (this._active = s !== o && (r || e < i), !this._active) return this._target[n] = o, void this._notify(!0);
            e < 0 ? this._target[n] = s : (a = e / i % 2, a = r && a > 1 ? 2 - a : a, a = this._easing(Math.min(1, Math.max(0, a))), this._target[n] = this._fn(s, o, a))
        }
        wait() {
            const t = this._promises || (this._promises = []);
            return new Promise(((e, i) => {
                t.push({
                    res: e,
                    rej: i
                })
            }))
        }
        _notify(t) {
            const e = t ? "res" : "rej",
                i = this._promises || [];
            for (let t = 0; t < i.length; t++) i[t][e]()
        }
    }
    class Sn {
        constructor(t, e) {
            this._chart = t, this._properties = new Map, this.configure(e)
        }
        configure(t) {
            if (!r(t)) return;
            const e = Object.keys(ae.animation),
                i = this._properties;
            Object.getOwnPropertyNames(t).forEach((n => {
                const o = t[n];
                if (!r(o)) return;
                const a = {};
                for (const t of e) a[t] = o[t];
                (s(o.properties) && o.properties || [n]).forEach((t => {
                    t !== n && i.has(t) || i.set(t, a)
                }))
            }))
        }
        _animateOptions(t, e) {
            const i = e.options,
                n = function(t, e) {
                    if (!e) return;
                    let i = t.options;
                    if (i) return i.$shared && (t.options = i = Object.assign({}, i, {
                        $shared: !1,
                        $animations: {}
                    })), i;
                    t.options = e
                }(t, i);
            if (!n) return [];
            const s = this._createAnimations(n, i);
            return i.$shared && function(t, e) {
                const i = [],
                    n = Object.keys(e);
                for (let e = 0; e < n.length; e++) {
                    const s = t[n[e]];
                    s && s.active() && i.push(s.wait())
                }
                return Promise.all(i)
            }(t.options.$animations, i).then((() => {
                t.options = i
            }), (() => {})), s
        }
        _createAnimations(t, e) {
            const i = this._properties,
                n = [],
                s = t.$animations || (t.$animations = {}),
                r = Object.keys(e),
                o = Date.now();
            let a;
            for (a = r.length - 1; a >= 0; --a) {
                const l = r[a];
                if ("$" === l.charAt(0)) continue;
                if ("options" === l) {
                    n.push(...this._animateOptions(t, e));
                    continue
                }
                const c = e[l];
                let d = s[l];
                const h = i.get(l);
                if (d) {
                    if (h && d.active()) {
                        d.update(h, c, o);
                        continue
                    }
                    d.cancel()
                }
                h && h.duration ? (s[l] = d = new _n(h, t, l, c), n.push(d)) : t[l] = c
            }
            return n
        }
        update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const i = this._createAnimations(t, e);
            return i.length ? (vt.add(this._chart, i), !0) : void 0
        }
    }

    function En(t, e) {
        const i = t && t.options || {},
            n = i.reverse,
            s = void 0 === i.min ? e : 0,
            r = void 0 === i.max ? e : 0;
        return {
            start: n ? r : s,
            end: n ? s : r
        }
    }

    function Tn(t, e) {
        const i = [],
            n = t._getSortedDatasetMetas(e);
        let s, r;
        for (s = 0, r = n.length; s < r; ++s) i.push(n[s].index);
        return i
    }

    function Mn(t, e, i, n = {}) {
        const s = t.keys,
            r = "single" === n.mode;
        let a, l, c, d;
        if (null !== e) {
            for (a = 0, l = s.length; a < l; ++a) {
                if (c = +s[a], c === i) {
                    if (n.all) continue;
                    break
                }
                d = t.values[c], o(d) && (r || 0 === e || F(e) === F(d)) && (e += d)
            }
            return e
        }
    }

    function kn(t, e) {
        const i = t && t.options.stacked;
        return i || void 0 === i && void 0 !== e.stack
    }

    function Cn(t, e, i) {
        const n = t[e] || (t[e] = {});
        return n[i] || (n[i] = {})
    }

    function Pn(t, e, i, n) {
        for (const s of e.getMatchingVisibleMetas(n).reverse()) {
            const e = t[s.index];
            if (i && e > 0 || !i && e < 0) return s.index
        }
        return null
    }

    function Dn(t, e) {
        const {
            chart: i,
            _cachedMeta: n
        } = t, s = i._stacks || (i._stacks = {}), {
            iScale: r,
            vScale: o,
            index: a
        } = n, l = r.axis, c = o.axis, d = function(t, e, i) {
            return `${t.id}.${e.id}.${i.stack||i.type}`
        }(r, o, n), h = e.length;
        let u;
        for (let t = 0; t < h; ++t) {
            const i = e[t],
                {
                    [l]: r,
                    [c]: h
                } = i;
            u = (i._stacks || (i._stacks = {}))[c] = Cn(s, d, r), u[a] = h, u._top = Pn(u, o, !0, n.type), u._bottom = Pn(u, o, !1, n.type), (u._visualValues || (u._visualValues = {}))[a] = h
        }
    }

    function Ln(t, e) {
        const i = t.scales;
        return Object.keys(i).filter((t => i[t].axis === e)).shift()
    }

    function An(t, e) {
        const i = t.controller.index,
            n = t.vScale && t.vScale.axis;
        if (n) {
            e = e || t._parsed;
            for (const t of e) {
                const e = t._stacks;
                if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
                delete e[n][i], void 0 !== e[n]._visualValues && void 0 !== e[n]._visualValues[i] && delete e[n]._visualValues[i]
            }
        }
    }
    const On = t => "reset" === t || "none" === t,
        In = (t, e) => e ? t : Object.assign({}, t);
    class zn {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) {
            this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
        }
        initialize() {
            const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = kn(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }
        updateIndex(t) {
            this.index !== t && An(this._cachedMeta), this.index = t
        }
        linkScales() {
            const t = this.chart,
                e = this._cachedMeta,
                i = this.getDataset(),
                n = (t, e, i, n) => "x" === t ? e : "r" === t ? n : i,
                s = e.xAxisID = l(i.xAxisID, Ln(t, "x")),
                r = e.yAxisID = l(i.yAxisID, Ln(t, "y")),
                o = e.rAxisID = l(i.rAxisID, Ln(t, "r")),
                a = e.indexAxis,
                c = e.iAxisID = n(a, s, r, o),
                d = e.vAxisID = n(a, r, s, o);
            e.xScale = this.getScaleForId(s), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(d)
        }
        getDataset() {
            return this.chart.data.datasets[this.index]
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
            return this.chart.scales[t]
        }
        _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
            this._update("reset")
        }
        _destroy() {
            const t = this._cachedMeta;
            this._data && at(this._data, this), t._stacked && An(t)
        }
        _dataCheck() {
            const t = this.getDataset(),
                e = t.data || (t.data = []),
                i = this._data;
            if (r(e)) {
                const t = this._cachedMeta;
                this._data = function(t, e) {
                    const {
                        iScale: i,
                        vScale: n
                    } = e, s = "x" === i.axis ? "x" : "y", r = "x" === n.axis ? "x" : "y", o = Object.keys(t), a = new Array(o.length);
                    let l, c, d;
                    for (l = 0, c = o.length; l < c; ++l) d = o[l], a[l] = {
                        [s]: d,
                        [r]: t[d]
                    };
                    return a
                }(e, t)
            } else if (i !== e) {
                if (i) {
                    at(i, this);
                    const t = this._cachedMeta;
                    An(t), t._parsed = []
                }
                e && Object.isExtensible(e) && ot(e, this), this._syncList = [], this._data = e
            }
        }
        addElements() {
            const t = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
        }
        buildOrUpdateElements(t) {
            const e = this._cachedMeta,
                i = this.getDataset();
            let n = !1;
            this._dataCheck();
            const s = e._stacked;
            e._stacked = kn(e.vScale, e), e.stack !== i.stack && (n = !0, An(e), e.stack = i.stack), this._resyncElements(t), (n || s !== e._stacked) && Dn(this, e._parsed)
        }
        configure() {
            const t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                i = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
        }
        parse(t, e) {
            const {
                _cachedMeta: i,
                _data: n
            } = this, {
                iScale: o,
                _stacked: a
            } = i, l = o.axis;
            let c, d, h, u = 0 === t && e === n.length || i._sorted,
                p = t > 0 && i._parsed[t - 1];
            if (!1 === this._parsing) i._parsed = n, i._sorted = !0, h = n;
            else {
                h = s(n[t]) ? this.parseArrayData(i, n, t, e) : r(n[t]) ? this.parseObjectData(i, n, t, e) : this.parsePrimitiveData(i, n, t, e);
                const o = () => null === d[l] || p && d[l] < p[l];
                for (c = 0; c < e; ++c) i._parsed[c + t] = d = h[c], u && (o() && (u = !1), p = d);
                i._sorted = u
            }
            a && Dn(this, h)
        }
        parsePrimitiveData(t, e, i, n) {
            const {
                iScale: s,
                vScale: r
            } = t, o = s.axis, a = r.axis, l = s.getLabels(), c = s === r, d = new Array(n);
            let h, u, p;
            for (h = 0, u = n; h < u; ++h) p = h + i, d[h] = {
                [o]: c || s.parse(l[p], p),
                [a]: r.parse(e[p], p)
            };
            return d
        }
        parseArrayData(t, e, i, n) {
            const {
                xScale: s,
                yScale: r
            } = t, o = new Array(n);
            let a, l, c, d;
            for (a = 0, l = n; a < l; ++a) c = a + i, d = e[c], o[a] = {
                x: s.parse(d[0], c),
                y: r.parse(d[1], c)
            };
            return o
        }
        parseObjectData(t, e, i, n) {
            const {
                xScale: s,
                yScale: r
            } = t, {
                xAxisKey: o = "x",
                yAxisKey: a = "y"
            } = this._parsing, l = new Array(n);
            let c, d, h, u;
            for (c = 0, d = n; c < d; ++c) h = c + i, u = e[h], l[c] = {
                x: s.parse(_(u, o), h),
                y: r.parse(_(u, a), h)
            };
            return l
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t]
        }
        getDataElement(t) {
            return this._cachedMeta.data[t]
        }
        applyStack(t, e, i) {
            const n = this.chart,
                s = this._cachedMeta,
                r = e[t.axis];
            return Mn({
                keys: Tn(n, !0),
                values: e._stacks[t.axis]._visualValues
            }, r, s.index, {
                mode: i
            })
        }
        updateRangeFromParsed(t, e, i, n) {
            const s = i[e.axis];
            let r = null === s ? NaN : s;
            const o = n && i._stacks[e.axis];
            n && o && (n.values = o, r = Mn(n, s, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r)
        }
        getMinMax(t, e) {
            const i = this._cachedMeta,
                n = i._parsed,
                s = i._sorted && t === i.iScale,
                r = n.length,
                a = this._getOtherScale(t),
                l = ((t, e, i) => t && !e.hidden && e._stacked && {
                    keys: Tn(i, !0),
                    values: null
                })(e, i, this.chart),
                c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: d,
                    max: h
                } = function(t) {
                    const {
                        min: e,
                        max: i,
                        minDefined: n,
                        maxDefined: s
                    } = t.getUserBounds();
                    return {
                        min: n ? e : Number.NEGATIVE_INFINITY,
                        max: s ? i : Number.POSITIVE_INFINITY
                    }
                }(a);
            let u, p;

            function f() {
                p = n[u];
                const e = p[a.axis];
                return !o(p[t.axis]) || d > e || h < e
            }
            for (u = 0; u < r && (f() || (this.updateRangeFromParsed(c, t, p, l), !s)); ++u);
            if (s)
                for (u = r - 1; u >= 0; --u)
                    if (!f()) {
                        this.updateRangeFromParsed(c, t, p, l);
                        break
                    }
            return c
        }
        getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
                i = [];
            let n, s, r;
            for (n = 0, s = e.length; n < s; ++n) r = e[n][t.axis], o(r) && i.push(r);
            return i
        }
        getMaxOverflow() {
            return !1
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = e.iScale,
                n = e.vScale,
                s = this.getParsed(t);
            return {
                label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
                value: n ? "" + n.getLabelForValue(s[n.axis]) : ""
            }
        }
        _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"), e._clip = function(t) {
                let e, i, n, s;
                return r(t) ? (e = t.top, i = t.right, n = t.bottom, s = t.left) : e = i = n = s = t, {
                    top: e,
                    right: i,
                    bottom: n,
                    left: s,
                    disabled: !1 === t
                }
            }(l(this.options.clip, function(t, e, i) {
                if (!1 === i) return !1;
                const n = En(t, i),
                    s = En(e, i);
                return {
                    top: s.end,
                    right: n.end,
                    bottom: s.start,
                    left: n.start
                }
            }(e.xScale, e.yScale, this.getMaxOverflow())))
        }
        update(t) {}
        draw() {
            const t = this._ctx,
                e = this.chart,
                i = this._cachedMeta,
                n = i.data || [],
                s = e.chartArea,
                r = [],
                o = this._drawStart || 0,
                a = this._drawCount || n.length - o,
                l = this.options.drawActiveElementsOnTop;
            let c;
            for (i.dataset && i.dataset.draw(t, s, o, a), c = o; c < o + a; ++c) {
                const e = n[c];
                e.hidden || (e.active && l ? r.push(e) : e.draw(t, s))
            }
            for (c = 0; c < r.length; ++c) r[c].draw(t, s)
        }
        getStyle(t, e) {
            const i = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
        }
        getContext(t, e, i) {
            const n = this.getDataset();
            let s;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                const e = this._cachedMeta.data[t];
                s = e.$context || (e.$context = function(t, e, i) {
                    return Si(t, {
                        active: !1,
                        dataIndex: e,
                        parsed: void 0,
                        raw: void 0,
                        element: i,
                        index: e,
                        mode: "default",
                        type: "data"
                    })
                }(this.getContext(), t, e)), s.parsed = this.getParsed(t), s.raw = n.data[t], s.index = s.dataIndex = t
            } else s = this.$context || (this.$context = function(t, e) {
                return Si(t, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset"
                })
            }(this.chart.getContext(), this.index)), s.dataset = n, s.index = s.datasetIndex = this.index;
            return s.active = !!e, s.mode = i, s
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t, e = "default", i) {
            const n = "active" === e,
                s = this._cachedDataOpts,
                r = t + "-" + e,
                o = s[r],
                a = this.enableOptionSharing && E(i);
            if (o) return In(o, a);
            const l = this.chart.config,
                c = l.datasetElementScopeKeys(this._type, t),
                d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                h = l.getOptionScopes(this.getDataset(), c),
                u = Object.keys(ae.elements[t]),
                p = l.resolveNamedOptions(h, u, (() => this.getContext(i, n, e)), d);
            return p.$shared && (p.$shared = a, s[r] = Object.freeze(In(p, a))), p
        }
        _resolveAnimations(t, e, i) {
            const n = this.chart,
                s = this._cachedDataOpts,
                r = `animation-${e}`,
                o = s[r];
            if (o) return o;
            let a;
            if (!1 !== n.options.animation) {
                const n = this.chart.config,
                    s = n.datasetAnimationScopeKeys(this._type, e),
                    r = n.getOptionScopes(this.getDataset(), s);
                a = n.createResolver(r, this.getContext(t, i, e))
            }
            const l = new Sn(n, a && a.animations);
            return a && a._cacheable && (s[r] = Object.freeze(l)), l
        }
        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }
        includeOptions(t, e) {
            return !e || On(t) || this.chart._animationsDisabled
        }
        _getSharedOptions(t, e) {
            const i = this.resolveDataElementOptions(t, e),
                n = this._sharedOptions,
                s = this.getSharedOptions(i),
                r = this.includeOptions(e, s) || s !== n;
            return this.updateSharedOptions(s, e, i), {
                sharedOptions: s,
                includeOptions: r
            }
        }
        updateElement(t, e, i, n) {
            On(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
        }
        updateSharedOptions(t, e, i) {
            t && !On(e) && this._resolveAnimations(void 0, e).update(t, i)
        }
        _setStyle(t, e, i, n) {
            t.active = n;
            const s = this.getStyle(e, n);
            this._resolveAnimations(e, i, n).update(t, {
                options: !n && this.getSharedOptions(s) || s
            })
        }
        removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1)
        }
        setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0)
        }
        _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1)
        }
        _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0)
        }
        _resyncElements(t) {
            const e = this._data,
                i = this._cachedMeta.data;
            for (const [t, e, i] of this._syncList) this[t](e, i);
            this._syncList = [];
            const n = i.length,
                s = e.length,
                r = Math.min(s, n);
            r && this.parse(0, r), s > n ? this._insertElements(n, s - n, t) : s < n && this._removeElements(s, n - s)
        }
        _insertElements(t, e, i = !0) {
            const n = this._cachedMeta,
                s = n.data,
                r = t + e;
            let o;
            const a = t => {
                for (t.length += e, o = t.length - 1; o >= r; o--) t[o] = t[o - e]
            };
            for (a(s), o = t; o < r; ++o) s[o] = new this.dataElementType;
            this._parsing && a(n._parsed), this.parse(t, e), i && this.updateElements(s, t, e, "reset")
        }
        updateElements(t, e, i, n) {}
        _removeElements(t, e) {
            const i = this._cachedMeta;
            if (this._parsing) {
                const n = i._parsed.splice(t, e);
                i._stacked && An(i, n)
            }
            i.data.splice(t, e)
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
                const [e, i, n] = t;
                this[e](i, n)
            }
            this.chart._dataChanges.push([this.index, ...t])
        }
        _onDataPush() {
            const t = arguments.length;
            this._sync(["_insertElements", this.getDataset().data.length - t, t])
        }
        _onDataPop() {
            this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
        }
        _onDataShift() {
            this._sync(["_removeElements", 0, 1])
        }
        _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            const i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i])
        }
        _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length])
        }
    }
    class Rn {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) {
            const {
                x: e,
                y: i
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: i
            }
        }
        hasValue() {
            return H(this.x) && H(this.y)
        }
        getProps(t, e) {
            const i = this.$animations;
            if (!e || !i) return this;
            const n = {};
            return t.forEach((t => {
                n[t] = i[t] && i[t].active() ? i[t]._to : this[t]
            })), n
        }
    }

    function Fn(t, e) {
        const i = t.options.ticks,
            s = function(t) {
                const e = t.options.offset,
                    i = t._tickSize(),
                    n = t._length / i + (e ? 0 : 1),
                    s = t._maxLength / i;
                return Math.floor(Math.min(n, s))
            }(t),
            r = Math.min(i.maxTicksLimit || s, s),
            o = i.major.enabled ? function(t) {
                const e = [];
                let i, n;
                for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
                return e
            }(e) : [],
            a = o.length,
            l = o[0],
            c = o[a - 1],
            d = [];
        if (a > r) return function(t, e, i, n) {
            let s, r = 0,
                o = i[0];
            for (n = Math.ceil(n), s = 0; s < t.length; s++) s === o && (e.push(t[s]), r++, o = i[r * n])
        }(e, d, o, a / r), d;
        const h = function(t, e, i) {
            const n = function(t) {
                    const e = t.length;
                    let i, n;
                    if (e < 2) return !1;
                    for (n = t[0], i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== n) return !1;
                    return n
                }(t),
                s = e.length / i;
            if (!n) return Math.max(s, 1);
            const r = N(n);
            for (let t = 0, e = r.length - 1; t < e; t++) {
                const e = r[t];
                if (e > s) return e
            }
            return Math.max(s, 1)
        }(o, e, r);
        if (a > 0) {
            let t, i;
            const s = a > 1 ? Math.round((c - l) / (a - 1)) : null;
            for ($n(e, d, h, n(s) ? 0 : l - s, l), t = 0, i = a - 1; t < i; t++) $n(e, d, h, o[t], o[t + 1]);
            return $n(e, d, h, c, n(s) ? e.length : c + s), d
        }
        return $n(e, d, h), d
    }

    function $n(t, e, i, n, s) {
        const r = l(n, 0),
            o = Math.min(l(s, t.length), t.length);
        let a, c, d, h = 0;
        for (i = Math.ceil(i), s && (a = s - n, i = a / Math.floor(a / i)), d = r; d < 0;) h++, d = Math.round(r + h * i);
        for (c = Math.max(r, 0); c < o; c++) c === d && (e.push(t[c]), h++, d = Math.round(r + h * i))
    }
    const jn = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i,
        Nn = (t, e) => Math.min(e || t, t);

    function Hn(t, e) {
        const i = [],
            n = t.length / e,
            s = t.length;
        let r = 0;
        for (; r < s; r += n) i.push(t[Math.floor(r)]);
        return i
    }

    function Wn(t, e, i) {
        const n = t.ticks.length,
            s = Math.min(e, n - 1),
            r = t._startPixel,
            o = t._endPixel,
            a = 1e-6;
        let l, c = t.getPixelForTick(s);
        if (!(i && (l = 1 === n ? Math.max(c - r, o - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(s - 1)) / 2, c += s < e ? l : -l, c < r - a || c > o + a))) return c
    }

    function Vn(t) {
        return t.drawTicks ? t.tickLength : 0
    }

    function Bn(t, e) {
        if (!t.display) return 0;
        const i = xi(t.font, e),
            n = bi(t.padding);
        return (s(t.text) ? t.text.length : 1) * i.lineHeight + n.height
    }

    function qn(t, e, i) {
        let n = ut(t);
        return (i && "right" !== e || !i && "right" === e) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)), n
    }
    class Yn extends Rn {
        constructor(t) {
            super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
        }
        init(t) {
            this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
        }
        parse(t, e) {
            return t
        }
        getUserBounds() {
            let {
                _userMin: t,
                _userMax: e,
                _suggestedMin: i,
                _suggestedMax: n
            } = this;
            return t = a(t, Number.POSITIVE_INFINITY), e = a(e, Number.NEGATIVE_INFINITY), i = a(i, Number.POSITIVE_INFINITY), n = a(n, Number.NEGATIVE_INFINITY), {
                min: a(t, i),
                max: a(e, n),
                minDefined: o(t),
                maxDefined: o(e)
            }
        }
        getMinMax(t) {
            let e, {
                min: i,
                max: n,
                minDefined: s,
                maxDefined: r
            } = this.getUserBounds();
            if (s && r) return {
                min: i,
                max: n
            };
            const o = this.getMatchingVisibleMetas();
            for (let a = 0, l = o.length; a < l; ++a) e = o[a].controller.getMinMax(this, t), s || (i = Math.min(i, e.min)), r || (n = Math.max(n, e.max));
            return i = r && i > n ? n : i, n = s && i > n ? i : n, {
                min: a(i, a(n, i)),
                max: a(n, a(i, n))
            }
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        }
        getTicks() {
            return this.ticks
        }
        getLabels() {
            const t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }
        getLabelItems(t = this.chart.chartArea) {
            return this._labelItems || (this._labelItems = this._computeLabelItems(t))
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1
        }
        beforeUpdate() {
            h(this.options.beforeUpdate, [this])
        }
        update(t, e, i) {
            const {
                beginAtZero: n,
                grace: s,
                ticks: r
            } = this.options, o = r.sampleSize;
            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = _i(this, s, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const a = o < this.ticks.length;
            this._convertTicksToLabels(a ? Hn(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || "auto" === r.source) && (this.ticks = Fn(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
        }
        configure() {
            let t, e, i = this.options.reverse;
            this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
        }
        afterUpdate() {
            h(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
            h(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
        }
        afterSetDimensions() {
            h(this.options.afterSetDimensions, [this])
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), h(this.options[t], [this])
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks("afterDataLimits")
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks")
        }
        buildTicks() {
            return []
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks")
        }
        beforeTickToLabelConversion() {
            h(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
            const e = this.options.ticks;
            let i, n, s;
            for (i = 0, n = t.length; i < n; i++) s = t[i], s.label = h(e.callback, [s.value, i, t], this)
        }
        afterTickToLabelConversion() {
            h(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
            h(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
            const t = this.options,
                e = t.ticks,
                i = Nn(this.ticks.length, t.ticks.maxTicksLimit),
                n = e.minRotation || 0,
                s = e.maxRotation;
            let r, o, a, l = n;
            if (!this._isVisible() || !e.display || n >= s || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = n);
            const c = this._getLabelSizes(),
                d = c.widest.width,
                h = c.highest.height,
                u = Z(this.chart.width - d, 0, this.maxWidth);
            r = t.offset ? this.maxWidth / i : u / (i - 1), d + 6 > r && (r = u / (i - (t.offset ? .5 : 1)), o = this.maxHeight - Vn(t.grid) - e.padding - Bn(t.title, this.chart.options.font), a = Math.sqrt(d * d + h * h), l = q(Math.min(Math.asin(Z((c.highest.height + 6) / r, -1, 1)), Math.asin(Z(o / a, -1, 1)) - Math.asin(Z(h / a, -1, 1)))), l = Math.max(n, Math.min(s, l))), this.labelRotation = l
        }
        afterCalculateLabelRotation() {
            h(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit() {
            h(this.options.beforeFit, [this])
        }
        fit() {
            const t = {
                    width: 0,
                    height: 0
                },
                {
                    chart: e,
                    options: {
                        ticks: i,
                        title: n,
                        grid: s
                    }
                } = this,
                r = this._isVisible(),
                o = this.isHorizontal();
            if (r) {
                const r = Bn(n, e.options.font);
                if (o ? (t.width = this.maxWidth, t.height = Vn(s) + r) : (t.height = this.maxHeight, t.width = Vn(s) + r), i.display && this.ticks.length) {
                    const {
                        first: e,
                        last: n,
                        widest: s,
                        highest: r
                    } = this._getLabelSizes(), a = 2 * i.padding, l = B(this.labelRotation), c = Math.cos(l), d = Math.sin(l);
                    if (o) {
                        const e = i.mirror ? 0 : d * s.width + c * r.height;
                        t.height = Math.min(this.maxHeight, t.height + e + a)
                    } else {
                        const e = i.mirror ? 0 : c * s.width + d * r.height;
                        t.width = Math.min(this.maxWidth, t.width + e + a)
                    }
                    this._calculatePadding(e, n, d, c)
                }
            }
            this._handleMargins(), o ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
        }
        _calculatePadding(t, e, i, n) {
            const {
                ticks: {
                    align: s,
                    padding: r
                },
                position: o
            } = this.options, a = 0 !== this.labelRotation, l = "top" !== o && "x" === this.axis;
            if (this.isHorizontal()) {
                const o = this.getPixelForTick(0) - this.left,
                    c = this.right - this.getPixelForTick(this.ticks.length - 1);
                let d = 0,
                    h = 0;
                a ? l ? (d = n * t.width, h = i * e.height) : (d = i * t.height, h = n * e.width) : "start" === s ? h = e.width : "end" === s ? d = t.width : "inner" !== s && (d = t.width / 2, h = e.width / 2), this.paddingLeft = Math.max((d - o + r) * this.width / (this.width - o), 0), this.paddingRight = Math.max((h - c + r) * this.width / (this.width - c), 0)
            } else {
                let i = e.height / 2,
                    n = t.height / 2;
                "start" === s ? (i = 0, n = t.height) : "end" === s && (i = e.height, n = 0), this.paddingTop = i + r, this.paddingBottom = n + r
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
        }
        afterFit() {
            h(this.options.afterFit, [this])
        }
        isHorizontal() {
            const {
                axis: t,
                position: e
            } = this.options;
            return "top" === e || "bottom" === e || "x" === t
        }
        isFullSize() {
            return this.options.fullSize
        }
        _convertTicksToLabels(t) {
            let e, i;
            for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) n(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion()
        }
        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                const e = this.options.ticks.sampleSize;
                let i = this.ticks;
                e < i.length && (i = Hn(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)
            }
            return t
        }
        _computeLabelSizes(t, e, i) {
            const {
                ctx: r,
                _longestTextCache: o
            } = this, a = [], l = [], c = Math.floor(e / Nn(e, i));
            let d, h, p, f, g, m, v, y, b, x, w, _ = 0,
                S = 0;
            for (d = 0; d < e; d += c) {
                if (f = t[d].label, g = this._resolveTickFontOptions(d), r.font = m = g.string, v = o[m] = o[m] || {
                        data: {},
                        gc: []
                    }, y = g.lineHeight, b = x = 0, n(f) || s(f)) {
                    if (s(f))
                        for (h = 0, p = f.length; h < p; ++h) w = f[h], n(w) || s(w) || (b = Se(r, v.data, v.gc, b, w), x += y)
                } else b = Se(r, v.data, v.gc, b, f), x = y;
                a.push(b), l.push(x), _ = Math.max(b, _), S = Math.max(x, S)
            }! function(t, e) {
                u(t, (t => {
                    const i = t.gc,
                        n = i.length / 2;
                    let s;
                    if (n > e) {
                        for (s = 0; s < n; ++s) delete t.data[i[s]];
                        i.splice(0, n)
                    }
                }))
            }(o, e);
            const E = a.indexOf(_),
                T = l.indexOf(S),
                M = t => ({
                    width: a[t] || 0,
                    height: l[t] || 0
                });
            return {
                first: M(0),
                last: M(e - 1),
                widest: M(E),
                highest: M(T),
                widths: a,
                heights: l
            }
        }
        getLabelForValue(t) {
            return t
        }
        getPixelForValue(t, e) {
            return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return J(this._alignToPixels ? Te(this.chart, e, 0) : e)
        }
        getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
            const {
                min: t,
                max: e
            } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                const i = e[t];
                return i.$context || (i.$context = function(t, e, i) {
                    return Si(t, {
                        tick: i,
                        index: e,
                        type: "tick"
                    })
                }(this.getContext(), t, i))
            }
            return this.$context || (this.$context = Si(this.chart.getContext(), {
                scale: this,
                type: "scale"
            }))
        }
        _tickSize() {
            const t = this.options.ticks,
                e = B(this.labelRotation),
                i = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)),
                s = this._getLabelSizes(),
                r = t.autoSkipPadding || 0,
                o = s ? s.widest.width + r : 0,
                a = s ? s.highest.height + r : 0;
            return this.isHorizontal() ? a * i > o * n ? o / i : a / n : a * n < o * i ? a / i : o / n
        }
        _isVisible() {
            const t = this.options.display;
            return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t) {
            const e = this.axis,
                i = this.chart,
                n = this.options,
                {
                    grid: s,
                    position: o,
                    border: a
                } = n,
                c = s.offset,
                d = this.isHorizontal(),
                h = this.ticks.length + (c ? 1 : 0),
                u = Vn(s),
                p = [],
                f = a.setContext(this.getContext()),
                g = f.display ? f.width : 0,
                m = g / 2,
                v = function(t) {
                    return Te(i, t, g)
                };
            let y, b, x, w, _, S, E, T, M, k, C, P;
            if ("top" === o) y = v(this.bottom), S = this.bottom - u, T = y - m, k = v(t.top) + m, P = t.bottom;
            else if ("bottom" === o) y = v(this.top), k = t.top, P = v(t.bottom) - m, S = y + m, T = this.top + u;
            else if ("left" === o) y = v(this.right), _ = this.right - u, E = y - m, M = v(t.left) + m, C = t.right;
            else if ("right" === o) y = v(this.left), M = t.left, C = v(t.right) - m, _ = y + m, E = this.left + u;
            else if ("x" === e) {
                if ("center" === o) y = v((t.top + t.bottom) / 2 + .5);
                else if (r(o)) {
                    const t = Object.keys(o)[0],
                        e = o[t];
                    y = v(this.chart.scales[t].getPixelForValue(e))
                }
                k = t.top, P = t.bottom, S = y + m, T = S + u
            } else if ("y" === e) {
                if ("center" === o) y = v((t.left + t.right) / 2);
                else if (r(o)) {
                    const t = Object.keys(o)[0],
                        e = o[t];
                    y = v(this.chart.scales[t].getPixelForValue(e))
                }
                _ = y - m, E = _ - u, M = t.left, C = t.right
            }
            const D = l(n.ticks.maxTicksLimit, h),
                L = Math.max(1, Math.ceil(h / D));
            for (b = 0; b < h; b += L) {
                const t = this.getContext(b),
                    e = s.setContext(t),
                    n = a.setContext(t),
                    r = e.lineWidth,
                    o = e.color,
                    l = n.dash || [],
                    h = n.dashOffset,
                    u = e.tickWidth,
                    f = e.tickColor,
                    g = e.tickBorderDash || [],
                    m = e.tickBorderDashOffset;
                x = Wn(this, b, c), void 0 !== x && (w = Te(i, x, r), d ? _ = E = M = C = w : S = T = k = P = w, p.push({
                    tx1: _,
                    ty1: S,
                    tx2: E,
                    ty2: T,
                    x1: M,
                    y1: k,
                    x2: C,
                    y2: P,
                    width: r,
                    color: o,
                    borderDash: l,
                    borderDashOffset: h,
                    tickWidth: u,
                    tickColor: f,
                    tickBorderDash: g,
                    tickBorderDashOffset: m
                }))
            }
            return this._ticksLength = h, this._borderValue = y, p
        }
        _computeLabelItems(t) {
            const e = this.axis,
                i = this.options,
                {
                    position: n,
                    ticks: o
                } = i,
                a = this.isHorizontal(),
                l = this.ticks,
                {
                    align: c,
                    crossAlign: d,
                    padding: h,
                    mirror: u
                } = o,
                p = Vn(i.grid),
                f = p + h,
                g = u ? -h : f,
                m = -B(this.labelRotation),
                v = [];
            let y, b, x, w, _, S, E, T, M, k, C, P, D = "middle";
            if ("top" === n) S = this.bottom - g, E = this._getXAxisLabelAlignment();
            else if ("bottom" === n) S = this.top + g, E = this._getXAxisLabelAlignment();
            else if ("left" === n) {
                const t = this._getYAxisLabelAlignment(p);
                E = t.textAlign, _ = t.x
            } else if ("right" === n) {
                const t = this._getYAxisLabelAlignment(p);
                E = t.textAlign, _ = t.x
            } else if ("x" === e) {
                if ("center" === n) S = (t.top + t.bottom) / 2 + f;
                else if (r(n)) {
                    const t = Object.keys(n)[0],
                        e = n[t];
                    S = this.chart.scales[t].getPixelForValue(e) + f
                }
                E = this._getXAxisLabelAlignment()
            } else if ("y" === e) {
                if ("center" === n) _ = (t.left + t.right) / 2 - f;
                else if (r(n)) {
                    const t = Object.keys(n)[0],
                        e = n[t];
                    _ = this.chart.scales[t].getPixelForValue(e)
                }
                E = this._getYAxisLabelAlignment(p).textAlign
            }
            "y" === e && ("start" === c ? D = "top" : "end" === c && (D = "bottom"));
            const L = this._getLabelSizes();
            for (y = 0, b = l.length; y < b; ++y) {
                x = l[y], w = x.label;
                const t = o.setContext(this.getContext(y));
                T = this.getPixelForTick(y) + o.labelOffset, M = this._resolveTickFontOptions(y), k = M.lineHeight, C = s(w) ? w.length : 1;
                const e = C / 2,
                    i = t.color,
                    r = t.textStrokeColor,
                    c = t.textStrokeWidth;
                let h, p = E;
                if (a ? (_ = T, "inner" === E && (p = y === b - 1 ? this.options.reverse ? "left" : "right" : 0 === y ? this.options.reverse ? "right" : "left" : "center"), P = "top" === n ? "near" === d || 0 !== m ? -C * k + k / 2 : "center" === d ? -L.highest.height / 2 - e * k + k : -L.highest.height + k / 2 : "near" === d || 0 !== m ? k / 2 : "center" === d ? L.highest.height / 2 - e * k : L.highest.height - C * k, u && (P *= -1), 0 === m || t.showLabelBackdrop || (_ += k / 2 * Math.sin(m))) : (S = T, P = (1 - C) * k / 2), t.showLabelBackdrop) {
                    const e = bi(t.backdropPadding),
                        i = L.heights[y],
                        n = L.widths[y];
                    let s = P - e.top,
                        r = 0 - e.left;
                    switch (D) {
                        case "middle":
                            s -= i / 2;
                            break;
                        case "bottom":
                            s -= i
                    }
                    switch (E) {
                        case "center":
                            r -= n / 2;
                            break;
                        case "right":
                            r -= n;
                            break;
                        case "inner":
                            y === b - 1 ? r -= n : y > 0 && (r -= n / 2)
                    }
                    h = {
                        left: r,
                        top: s,
                        width: n + e.width,
                        height: i + e.height,
                        color: t.backdropColor
                    }
                }
                v.push({
                    label: w,
                    font: M,
                    textOffset: P,
                    options: {
                        rotation: m,
                        color: i,
                        strokeColor: r,
                        strokeWidth: c,
                        textAlign: p,
                        textBaseline: D,
                        translation: [_, S],
                        backdrop: h
                    }
                })
            }
            return v
        }
        _getXAxisLabelAlignment() {
            const {
                position: t,
                ticks: e
            } = this.options;
            if (-B(this.labelRotation)) return "top" === t ? "left" : "right";
            let i = "center";
            return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i
        }
        _getYAxisLabelAlignment(t) {
            const {
                position: e,
                ticks: {
                    crossAlign: i,
                    mirror: n,
                    padding: s
                }
            } = this.options, r = t + s, o = this._getLabelSizes().widest.width;
            let a, l;
            return "left" === e ? n ? (l = this.right + s, "near" === i ? a = "left" : "center" === i ? (a = "center", l += o / 2) : (a = "right", l += o)) : (l = this.right - r, "near" === i ? a = "right" : "center" === i ? (a = "center", l -= o / 2) : (a = "left", l = this.left)) : "right" === e ? n ? (l = this.left + s, "near" === i ? a = "right" : "center" === i ? (a = "center", l -= o / 2) : (a = "left", l -= o)) : (l = this.left + r, "near" === i ? a = "left" : "center" === i ? (a = "center", l += o / 2) : (a = "right", l = this.right)) : a = "right", {
                textAlign: a,
                x: l
            }
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart,
                e = this.options.position;
            return "left" === e || "right" === e ? {
                top: 0,
                left: this.left,
                bottom: t.height,
                right: this.right
            } : "top" === e || "bottom" === e ? {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: t.width
            } : void 0
        }
        drawBackground() {
            const {
                ctx: t,
                options: {
                    backgroundColor: e
                },
                left: i,
                top: n,
                width: s,
                height: r
            } = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(i, n, s, r), t.restore())
        }
        getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const i = this.ticks.findIndex((e => e.value === t));
            return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0
        }
        drawGrid(t) {
            const e = this.options.grid,
                i = this.ctx,
                n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
            let s, r;
            const o = (t, e, n) => {
                n.width && n.color && (i.save(), i.lineWidth = n.width, i.strokeStyle = n.color, i.setLineDash(n.borderDash || []), i.lineDashOffset = n.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
            };
            if (e.display)
                for (s = 0, r = n.length; s < r; ++s) {
                    const t = n[s];
                    e.drawOnChartArea && o({
                        x: t.x1,
                        y: t.y1
                    }, {
                        x: t.x2,
                        y: t.y2
                    }, t), e.drawTicks && o({
                        x: t.tx1,
                        y: t.ty1
                    }, {
                        x: t.tx2,
                        y: t.ty2
                    }, {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset
                    })
                }
        }
        drawBorder() {
            const {
                chart: t,
                ctx: e,
                options: {
                    border: i,
                    grid: n
                }
            } = this, s = i.setContext(this.getContext()), r = i.display ? s.width : 0;
            if (!r) return;
            const o = n.setContext(this.getContext(0)).lineWidth,
                a = this._borderValue;
            let l, c, d, h;
            this.isHorizontal() ? (l = Te(t, this.left, r) - r / 2, c = Te(t, this.right, o) + o / 2, d = h = a) : (d = Te(t, this.top, r) - r / 2, h = Te(t, this.bottom, o) + o / 2, l = c = a), e.save(), e.lineWidth = s.width, e.strokeStyle = s.color, e.beginPath(), e.moveTo(l, d), e.lineTo(c, h), e.stroke(), e.restore()
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return;
            const e = this.ctx,
                i = this._computeLabelArea();
            i && De(e, i);
            const n = this.getLabelItems(t);
            for (const t of n) {
                const i = t.options,
                    n = t.font;
                Re(e, t.label, 0, t.textOffset, n, i)
            }
            i && Le(e)
        }
        drawTitle() {
            const {
                ctx: t,
                options: {
                    position: e,
                    title: i,
                    reverse: n
                }
            } = this;
            if (!i.display) return;
            const o = xi(i.font),
                a = bi(i.padding),
                l = i.align;
            let c = o.lineHeight / 2;
            "bottom" === e || "center" === e || r(e) ? (c += a.bottom, s(i.text) && (c += o.lineHeight * (i.text.length - 1))) : c += a.top;
            const {
                titleX: d,
                titleY: h,
                maxWidth: u,
                rotation: p
            } = function(t, e, i, n) {
                const {
                    top: s,
                    left: o,
                    bottom: a,
                    right: l,
                    chart: c
                } = t, {
                    chartArea: d,
                    scales: h
                } = c;
                let u, p, f, g = 0;
                const m = a - s,
                    v = l - o;
                if (t.isHorizontal()) {
                    if (p = pt(n, o, l), r(i)) {
                        const t = Object.keys(i)[0],
                            n = i[t];
                        f = h[t].getPixelForValue(n) + m - e
                    } else f = "center" === i ? (d.bottom + d.top) / 2 + m - e : jn(t, i, e);
                    u = l - o
                } else {
                    if (r(i)) {
                        const t = Object.keys(i)[0],
                            n = i[t];
                        p = h[t].getPixelForValue(n) - v + e
                    } else p = "center" === i ? (d.left + d.right) / 2 - v + e : jn(t, i, e);
                    f = pt(n, a, s), g = "left" === i ? -O : O
                }
                return {
                    titleX: p,
                    titleY: f,
                    maxWidth: u,
                    rotation: g
                }
            }(this, c, e, l);
            Re(t, i.text, 0, 0, o, {
                color: i.color,
                maxWidth: u,
                rotation: p,
                textAlign: qn(l, e, n),
                textBaseline: "middle",
                translation: [d, h]
            })
        }
        draw(t) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }
        _layers() {
            const t = this.options,
                e = t.ticks && t.ticks.z || 0,
                i = l(t.grid && t.grid.z, -1),
                n = l(t.border && t.border.z, 0);
            return this._isVisible() && this.draw === Yn.prototype.draw ? [{
                z: i,
                draw: t => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle()
                }
            }, {
                z: n,
                draw: () => {
                    this.drawBorder()
                }
            }, {
                z: e,
                draw: t => {
                    this.drawLabels(t)
                }
            }] : [{
                z: e,
                draw: t => {
                    this.draw(t)
                }
            }]
        }
        getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(),
                i = this.axis + "AxisID",
                n = [];
            let s, r;
            for (s = 0, r = e.length; s < r; ++s) {
                const r = e[s];
                r[i] !== this.id || t && r.type !== t || n.push(r)
            }
            return n
        }
        _resolveTickFontOptions(t) {
            return xi(this.options.ticks.setContext(this.getContext(t)).font)
        }
        _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t
        }
    }
    class Gn {
        constructor(t, e, i) {
            this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
            const e = Object.getPrototypeOf(t);
            let i;
            (function(t) {
                return "id" in t && "defaults" in t
            })(e) && (i = this.register(e));
            const n = this.items,
                s = t.id,
                r = this.scope + "." + s;
            if (!s) throw new Error("class does not have id: " + t);
            return s in n || (n[s] = t, function(t, e, i) {
                const n = v(Object.create(null), [i ? ae.get(i) : {}, ae.get(e), t.defaults]);
                ae.set(e, n), t.defaultRoutes && function(t, e) {
                    Object.keys(e).forEach((i => {
                        const n = i.split("."),
                            s = n.pop(),
                            r = [t].concat(n).join("."),
                            o = e[i].split("."),
                            a = o.pop(),
                            l = o.join(".");
                        ae.route(r, s, l, a)
                    }))
                }(e, t.defaultRoutes), t.descriptors && ae.describe(e, t.descriptors)
            }(t, r, i), this.override && ae.override(t.id, t.overrides)), r
        }
        get(t) {
            return this.items[t]
        }
        unregister(t) {
            const e = this.items,
                i = t.id,
                n = this.scope;
            i in e && delete e[i], n && i in ae[n] && (delete ae[n][i], this.override && delete ne[i])
        }
    }
    var Xn = new class {
        constructor() {
            this.controllers = new Gn(zn, "datasets", !0), this.elements = new Gn(Rn, "elements"), this.plugins = new Gn(Object, "plugins"), this.scales = new Gn(Yn, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
        }
        add(...t) {
            this._each("register", t)
        }
        remove(...t) {
            this._each("unregister", t)
        }
        addControllers(...t) {
            this._each("register", t, this.controllers)
        }
        addElements(...t) {
            this._each("register", t, this.elements)
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins)
        }
        addScales(...t) {
            this._each("register", t, this.scales)
        }
        getController(t) {
            return this._get(t, this.controllers, "controller")
        }
        getElement(t) {
            return this._get(t, this.elements, "element")
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin")
        }
        getScale(t) {
            return this._get(t, this.scales, "scale")
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers)
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements)
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins)
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales)
        }
        _each(t, e, i) {
            [...e].forEach((e => {
                const n = i || this._getRegistryForType(e);
                i || n.isForType(e) || n === this.plugins && e.id ? this._exec(t, n, e) : u(e, (e => {
                    const n = i || this._getRegistryForType(e);
                    this._exec(t, n, e)
                }))
            }))
        }
        _exec(t, e, i) {
            const n = S(t);
            h(i["before" + n], [], i), e[t](i), h(i["after" + n], [], i)
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                const i = this._typedRegistries[e];
                if (i.isForType(t)) return i
            }
            return this.plugins
        }
        _get(t, e, i) {
            const n = e.get(t);
            if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + ".");
            return n
        }
    };
    class Un {
        constructor() {
            this._init = []
        }
        notify(t, e, i, n) {
            "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
            const s = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                r = this._notify(s, t, e, i);
            return "afterDestroy" === e && (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")), r
        }
        _notify(t, e, i, n) {
            n = n || {};
            for (const s of t) {
                const t = s.plugin;
                if (!1 === h(t[i], [e, n, s.options], t) && n.cancelable) return !1
            }
            return !0
        }
        invalidate() {
            n(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
        }
        _descriptors(t) {
            if (this._cache) return this._cache;
            const e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e
        }
        _createDescriptors(t, e) {
            const i = t && t.config,
                n = l(i.options && i.options.plugins, {}),
                s = function(t) {
                    const e = {},
                        i = [],
                        n = Object.keys(Xn.plugins.items);
                    for (let t = 0; t < n.length; t++) i.push(Xn.getPlugin(n[t]));
                    const s = t.plugins || [];
                    for (let t = 0; t < s.length; t++) {
                        const n = s[t]; - 1 === i.indexOf(n) && (i.push(n), e[n.id] = !0)
                    }
                    return {
                        plugins: i,
                        localIds: e
                    }
                }(i);
            return !1 !== n || e ? function(t, {
                plugins: e,
                localIds: i
            }, n, s) {
                const r = [],
                    o = t.getContext();
                for (const a of e) {
                    const e = a.id,
                        l = Qn(n[e], s);
                    null !== l && r.push({
                        plugin: a,
                        options: Kn(t.config, {
                            plugin: a,
                            local: i[e]
                        }, l, o)
                    })
                }
                return r
            }(t, s, n, e) : []
        }
        _notifyStateChanges(t) {
            const e = this._oldCache || [],
                i = this._cache,
                n = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
            this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start")
        }
    }

    function Qn(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
    }

    function Kn(t, {
        plugin: e,
        local: i
    }, n, s) {
        const r = t.pluginScopeKeys(e),
            o = t.getOptionScopes(n, r);
        return i && e.defaults && o.push(e.defaults), t.createResolver(o, s, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        })
    }

    function Zn(t, e) {
        const i = ae.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
    }

    function Jn(t) {
        if ("x" === t || "y" === t || "r" === t) return t
    }

    function ts(t, ...e) {
        if (Jn(t)) return t;
        for (const n of e) {
            const e = n.axis || ("top" === (i = n.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && Jn(t[0].toLowerCase());
            if (e) return e
        }
        var i;
        throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
    }

    function es(t, e, i) {
        if (i[e + "AxisID"] === t) return {
            axis: e
        }
    }

    function is(t) {
        const e = t.options || (t.options = {});
        e.plugins = l(e.plugins, {}), e.scales = function(t, e) {
            const i = ne[t.type] || {
                    scales: {}
                },
                n = e.scales || {},
                s = Zn(t.type, e),
                o = Object.create(null);
            return Object.keys(n).forEach((e => {
                const a = n[e];
                if (!r(a)) return console.error(`Invalid scale configuration for scale: ${e}`);
                if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
                const l = ts(e, a, function(t, e) {
                        if (e.data && e.data.datasets) {
                            const i = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t));
                            if (i.length) return es(t, "x", i[0]) || es(t, "y", i[0])
                        }
                        return {}
                    }(e, t), ae.scales[a.type]),
                    c = function(t, e) {
                        return t === e ? "_index_" : "_value_"
                    }(l, s),
                    d = i.scales || {};
                o[e] = y(Object.create(null), [{
                    axis: l
                }, a, d[l], d[c]])
            })), t.data.datasets.forEach((i => {
                const s = i.type || t.type,
                    r = i.indexAxis || Zn(s, e),
                    a = (ne[s] || {}).scales || {};
                Object.keys(a).forEach((t => {
                    const e = function(t, e) {
                            let i = t;
                            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                        }(t, r),
                        s = i[e + "AxisID"] || e;
                    o[s] = o[s] || Object.create(null), y(o[s], [{
                        axis: e
                    }, n[s], a[t]])
                }))
            })), Object.keys(o).forEach((t => {
                const e = o[t];
                y(e, [ae.scales[e.type], ae.scale])
            })), o
        }(t, e)
    }

    function ns(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
    }
    const ss = new Map,
        rs = new Set;

    function os(t, e) {
        let i = ss.get(t);
        return i || (i = e(), ss.set(t, i), rs.add(i)), i
    }
    const as = (t, e, i) => {
        const n = _(e, i);
        void 0 !== n && t.add(n)
    };
    class ls {
        constructor(t) {
            this._config = function(t) {
                return (t = t || {}).data = ns(t.data), is(t), t
            }(t), this._scopeCache = new Map, this._resolverCache = new Map
        }
        get platform() {
            return this._config.platform
        }
        get type() {
            return this._config.type
        }
        set type(t) {
            this._config.type = t
        }
        get data() {
            return this._config.data
        }
        set data(t) {
            this._config.data = ns(t)
        }
        get options() {
            return this._config.options
        }
        set options(t) {
            this._config.options = t
        }
        get plugins() {
            return this._config.plugins
        }
        update() {
            const t = this._config;
            this.clearCache(), is(t)
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
        }
        datasetScopeKeys(t) {
            return os(t, (() => [
                [`datasets.${t}`, ""]
            ]))
        }
        datasetAnimationScopeKeys(t, e) {
            return os(`${t}.transition.${e}`, (() => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ""]
            ]))
        }
        datasetElementScopeKeys(t, e) {
            return os(`${t}-${e}`, (() => [
                [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
            ]))
        }
        pluginScopeKeys(t) {
            const e = t.id;
            return os(`${this.type}-plugin-${e}`, (() => [
                [`plugins.${e}`, ...t.additionalOptionScopes || []]
            ]))
        }
        _cachedScopes(t, e) {
            const i = this._scopeCache;
            let n = i.get(t);
            return n && !e || (n = new Map, i.set(t, n)), n
        }
        getOptionScopes(t, e, i) {
            const {
                options: n,
                type: s
            } = this, r = this._cachedScopes(t, i), o = r.get(e);
            if (o) return o;
            const a = new Set;
            e.forEach((e => {
                t && (a.add(t), e.forEach((e => as(a, t, e)))), e.forEach((t => as(a, n, t))), e.forEach((t => as(a, ne[s] || {}, t))), e.forEach((t => as(a, ae, t))), e.forEach((t => as(a, se, t)))
            }));
            const l = Array.from(a);
            return 0 === l.length && l.push(Object.create(null)), rs.has(e) && r.set(e, l), l
        }
        chartOptionScopes() {
            const {
                options: t,
                type: e
            } = this;
            return [t, ne[e] || {}, ae.datasets[e] || {}, {
                type: e
            }, ae, se]
        }
        resolveNamedOptions(t, e, i, n = [""]) {
            const r = {
                    $shared: !0
                },
                {
                    resolver: o,
                    subPrefixes: a
                } = cs(this._resolverCache, t, n);
            let l = o;
            (function(t, e) {
                const {
                    isScriptable: i,
                    isIndexable: n
                } = Ne(t);
                for (const r of e) {
                    const e = i(r),
                        o = n(r),
                        a = (o || e) && t[r];
                    if (e && (T(a) || ds(a)) || o && s(a)) return !0
                }
                return !1
            })(o, e) && (r.$shared = !1, l = je(o, i = T(i) ? i() : i, this.createResolver(t, i, a)));
            for (const t of e) r[t] = l[t];
            return r
        }
        createResolver(t, e, i = [""], n) {
            const {
                resolver: s
            } = cs(this._resolverCache, t, i);
            return r(e) ? je(s, e, void 0, n) : s
        }
    }

    function cs(t, e, i) {
        let n = t.get(e);
        n || (n = new Map, t.set(e, n));
        const s = i.join();
        let r = n.get(s);
        return r || (r = {
            resolver: $e(e, i),
            subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
        }, n.set(s, r)), r
    }
    const ds = t => r(t) && Object.getOwnPropertyNames(t).some((e => T(t[e]))),
        hs = ["top", "bottom", "left", "right", "chartArea"];

    function us(t, e) {
        return "top" === t || "bottom" === t || -1 === hs.indexOf(t) && "x" === e
    }

    function ps(t, e) {
        return function(i, n) {
            return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
        }
    }

    function fs(t) {
        const e = t.chart,
            i = e.options.animation;
        e.notifyPlugins("afterRender"), h(i && i.onComplete, [t], e)
    }

    function gs(t) {
        const e = t.chart,
            i = e.options.animation;
        h(i && i.onProgress, [t], e)
    }

    function ms(t) {
        return le() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
    }
    const vs = {},
        ys = t => {
            const e = ms(t);
            return Object.values(vs).filter((t => t.canvas === e)).pop()
        };

    function bs(t, e, i) {
        const n = Object.keys(t);
        for (const s of n) {
            const n = +s;
            if (n >= e) {
                const r = t[s];
                delete t[s], (i > 0 || n > e) && (t[n + i] = r)
            }
        }
    }

    function xs(t, e, i) {
        return t.options.clip ? t[i] : e[i]
    }
    class ws {
        static defaults = ae;
        static instances = vs;
        static overrides = ne;
        static registry = Xn;
        static version = "4.4.4";
        static getChart = ys;
        static register(...t) {
            Xn.add(...t), _s()
        }
        static unregister(...t) {
            Xn.remove(...t), _s()
        }
        constructor(t, e) {
            const n = this.config = new ls(e),
                s = ms(t),
                r = ys(s);
            if (r) throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
            const o = n.createResolver(n.chartOptionScopes(), this.getContext());
            this.platform = new(n.platform || yn(s)), this.platform.updateConfig(n);
            const a = this.platform.acquireContext(s, o.aspectRatio),
                l = a && a.canvas,
                c = l && l.height,
                d = l && l.width;
            this.id = i(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Un, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ht((t => this.update(t)), o.resizeDelay || 0), this._dataChanges = [], vs[this.id] = this, a && l ? (vt.listen(this, "complete", fs), vt.listen(this, "progress", gs), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: t,
                    maintainAspectRatio: e
                },
                width: i,
                height: s,
                _aspectRatio: r
            } = this;
            return n(t) ? e && r ? r : s ? i / s : null : t
        }
        get data() {
            return this.config.data
        }
        set data(t) {
            this.config.data = t
        }
        get options() {
            return this._options
        }
        set options(t) {
            this.config.options = t
        }
        get registry() {
            return Xn
        }
        _initialize() {
            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : be(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }
        clear() {
            return Me(this.canvas, this.ctx), this
        }
        stop() {
            return vt.stop(this), this
        }
        resize(t, e) {
            vt.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e)
        }
        _resize(t, e) {
            const i = this.options,
                n = this.canvas,
                s = i.maintainAspectRatio && this.aspectRatio,
                r = this.platform.getMaximumSize(n, t, e, s),
                o = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                a = this.width ? "resize" : "attach";
            this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, be(this, o, !0) && (this.notifyPlugins("resize", {
                size: r
            }), h(i.onResize, [this, r], this), this.attached && this._doResize(a) && this.render())
        }
        ensureScalesHaveIDs() {
            u(this.options.scales || {}, ((t, e) => {
                t.id = e
            }))
        }
        buildOrUpdateScales() {
            const t = this.options,
                e = t.scales,
                i = this.scales,
                n = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {});
            let s = [];
            e && (s = s.concat(Object.keys(e).map((t => {
                const i = e[t],
                    n = ts(t, i),
                    s = "r" === n,
                    r = "x" === n;
                return {
                    options: i,
                    dposition: s ? "chartArea" : r ? "bottom" : "left",
                    dtype: s ? "radialLinear" : r ? "category" : "linear"
                }
            })))), u(s, (e => {
                const s = e.options,
                    r = s.id,
                    o = ts(r, s),
                    a = l(s.type, e.dtype);
                void 0 !== s.position && us(s.position, o) === us(e.dposition) || (s.position = e.dposition), n[r] = !0;
                let c = null;
                r in i && i[r].type === a ? c = i[r] : (c = new(Xn.getScale(a))({
                    id: r,
                    type: a,
                    ctx: this.ctx,
                    chart: this
                }), i[c.id] = c), c.init(s, t)
            })), u(n, ((t, e) => {
                t || delete i[e]
            })), u(i, (t => {
                Ji.configure(this, t, t.options), Ji.addBox(this, t)
            }))
        }
        _updateMetasets() {
            const t = this._metasets,
                e = this.data.datasets.length,
                i = t.length;
            if (t.sort(((t, e) => t.index - e.index)), i > e) {
                for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                t.splice(e, i - e)
            }
            this._sortedMetasets = t.slice(0).sort(ps("order", "index"))
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: t,
                data: {
                    datasets: e
                }
            } = this;
            t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
            }))
        }
        buildOrUpdateControllers() {
            const t = [],
                e = this.data.datasets;
            let i, n;
            for (this._removeUnreferencedMetasets(), i = 0, n = e.length; i < n; i++) {
                const n = e[i];
                let s = this.getDatasetMeta(i);
                const r = n.type || this.config.type;
                if (s.type && s.type !== r && (this._destroyDatasetMeta(i), s = this.getDatasetMeta(i)), s.type = r, s.indexAxis = n.indexAxis || Zn(r, this.options), s.order = n.order || 0, s.index = i, s.label = "" + n.label, s.visible = this.isDatasetVisible(i), s.controller) s.controller.updateIndex(i), s.controller.linkScales();
                else {
                    const e = Xn.getController(r),
                        {
                            datasetElementType: n,
                            dataElementType: o
                        } = ae.datasets[r];
                    Object.assign(e, {
                        dataElementType: Xn.getElement(o),
                        datasetElementType: n && Xn.getElement(n)
                    }), s.controller = new e(this, i), t.push(s.controller)
                }
            }
            return this._updateMetasets(), t
        }
        _resetElements() {
            u(this.data.datasets, ((t, e) => {
                this.getDatasetMeta(e).controller.reset()
            }), this)
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset")
        }
        update(t) {
            const e = this.config;
            e.update();
            const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                n = this._animationsDisabled = !i.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                })) return;
            const s = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let r = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                const {
                    controller: e
                } = this.getDatasetMeta(t), i = !n && -1 === s.indexOf(e);
                e.buildOrUpdateElements(i), r = Math.max(+e.getMaxOverflow(), r)
            }
            r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), n || u(s, (t => {
                t.reset()
            })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                mode: t
            }), this._layers.sort(ps("z", "_idx"));
            const {
                _active: o,
                _lastEvent: a
            } = this;
            a ? this._eventHandler(a, !0) : o.length && this._updateHoverStyles(o, o, !0), this.render()
        }
        _updateScales() {
            u(this.scales, (t => {
                Ji.removeBox(this, t)
            })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }
        _checkEventBindings() {
            const t = this.options,
                e = new Set(Object.keys(this._listeners)),
                i = new Set(t.events);
            M(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
        }
        _updateHiddenIndices() {
            const {
                _hiddenIndices: t
            } = this, e = this._getUniformDataChanges() || [];
            for (const {
                    method: i,
                    start: n,
                    count: s
                } of e) bs(t, n, "_removeElements" === i ? -s : s)
        }
        _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
                i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                n = i(0);
            for (let t = 1; t < e; t++)
                if (!M(n, i(t))) return;
            return Array.from(n).map((t => t.split(","))).map((t => ({
                method: t[1],
                start: +t[2],
                count: +t[3]
            })))
        }
        _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", {
                    cancelable: !0
                })) return;
            Ji.update(this, this.width, this.height, t);
            const e = this.chartArea,
                i = e.width <= 0 || e.height <= 0;
            this._layers = [], u(this.boxes, (t => {
                i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
            }), this), this._layers.forEach(((t, e) => {
                t._idx = e
            })), this.notifyPlugins("afterLayout")
        }
        _updateDatasets(t) {
            if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0
                })) {
                for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, T(t) ? t({
                    datasetIndex: e
                }) : t);
                this.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                })
            }
        }
        _updateDataset(t, e) {
            const i = this.getDatasetMeta(t),
                n = {
                    meta: i,
                    index: t,
                    mode: e,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", n) && (i.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
        }
        render() {
            !1 !== this.notifyPlugins("beforeRender", {
                cancelable: !0
            }) && (vt.has(this) ? this.attached && !vt.running(this) && vt.start(this) : (this.draw(), fs({
                chart: this
            })))
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                const {
                    width: t,
                    height: e
                } = this._resizeBeforeDraw;
                this._resizeBeforeDraw = null, this._resize(t, e)
            }
            if (this.clear(), this.width <= 0 || this.height <= 0) return;
            if (!1 === this.notifyPlugins("beforeDraw", {
                    cancelable: !0
                })) return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw")
        }
        _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
                i = [];
            let n, s;
            for (n = 0, s = e.length; n < s; ++n) {
                const s = e[n];
                t && !s.visible || i.push(s)
            }
            return i
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
            if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: !0
                })) return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw")
        }
        _drawDataset(t) {
            const e = this.ctx,
                i = t._clip,
                n = !i.disabled,
                s = function(t, e) {
                    const {
                        xScale: i,
                        yScale: n
                    } = t;
                    return i && n ? {
                        left: xs(i, e, "left"),
                        right: xs(i, e, "right"),
                        top: xs(n, e, "top"),
                        bottom: xs(n, e, "bottom")
                    } : e
                }(t, this.chartArea),
                r = {
                    meta: t,
                    index: t.index,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins("beforeDatasetDraw", r) && (n && De(e, {
                left: !1 === i.left ? 0 : s.left - i.left,
                right: !1 === i.right ? this.width : s.right + i.right,
                top: !1 === i.top ? 0 : s.top - i.top,
                bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom
            }), t.controller.draw(), n && Le(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r))
        }
        isPointInArea(t) {
            return Pe(t, this.chartArea, this._minPadding)
        }
        getElementsAtEventForMode(t, e, i, n) {
            const s = Hi.modes[e];
            return "function" == typeof s ? s(this, t, i, n) : []
        }
        getDatasetMeta(t) {
            const e = this.data.datasets[t],
                i = this._metasets;
            let n = i.filter((t => t && t._dataset === e)).pop();
            return n || (n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }, i.push(n)), n
        }
        getContext() {
            return this.$context || (this.$context = Si(null, {
                chart: this,
                type: "chart"
            }))
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const i = this.getDatasetMeta(t);
            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }
        _updateVisibility(t, e, i) {
            const n = i ? "show" : "hide",
                s = this.getDatasetMeta(t),
                r = s.controller._resolveAnimations(void 0, n);
            E(e) ? (s.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(s, {
                visible: i
            }), this.update((e => e.datasetIndex === t ? n : void 0)))
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1)
        }
        show(t, e) {
            this._updateVisibility(t, e, !0)
        }
        _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t]
        }
        _stop() {
            let t, e;
            for (this.stop(), vt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            const {
                canvas: t,
                ctx: e
            } = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Me(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete vs[this.id], this.notifyPlugins("afterDestroy")
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }
        bindUserEvents() {
            const t = this._listeners,
                e = this.platform,
                i = (i, n) => {
                    e.addEventListener(this, i, n), t[i] = n
                },
                n = (t, e, i) => {
                    t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                };
            u(this.options.events, (t => i(t, n)))
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners,
                e = this.platform,
                i = (i, n) => {
                    e.addEventListener(this, i, n), t[i] = n
                },
                n = (i, n) => {
                    t[i] && (e.removeEventListener(this, i, n), delete t[i])
                },
                s = (t, e) => {
                    this.canvas && this.resize(t, e)
                };
            let r;
            const o = () => {
                n("attach", o), this.attached = !0, this.resize(), i("resize", s), i("detach", r)
            };
            r = () => {
                this.attached = !1, n("resize", s), this._stop(), this._resize(0, 0), i("attach", o)
            }, e.isAttached(this.canvas) ? o() : r()
        }
        unbindEvents() {
            u(this._listeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._listeners = {}, u(this._responsiveListeners, ((t, e) => {
                this.platform.removeEventListener(this, e, t)
            })), this._responsiveListeners = void 0
        }
        updateHoverStyle(t, e, i) {
            const n = i ? "set" : "remove";
            let s, r, o, a;
            for ("dataset" === e && (s = this.getDatasetMeta(t[0].datasetIndex), s.controller["_" + n + "DatasetHoverStyle"]()), o = 0, a = t.length; o < a; ++o) {
                r = t[o];
                const e = r && this.getDatasetMeta(r.datasetIndex).controller;
                e && e[n + "HoverStyle"](r.element, r.datasetIndex, r.index)
            }
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t) {
            const e = this._active || [],
                i = t.map((({
                    datasetIndex: t,
                    index: e
                }) => {
                    const i = this.getDatasetMeta(t);
                    if (!i) throw new Error("No dataset found at index " + t);
                    return {
                        datasetIndex: t,
                        element: i.data[e],
                        index: e
                    }
                }));
            !p(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
        }
        notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i)
        }
        isPluginEnabled(t) {
            return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length
        }
        _updateHoverStyles(t, e, i) {
            const n = this.options.hover,
                s = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                r = s(e, t),
                o = i ? t : s(t, e);
            r.length && this.updateHoverStyle(r, n.mode, !1), o.length && n.mode && this.updateHoverStyle(o, n.mode, !0)
        }
        _eventHandler(t, e) {
            const i = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t)
                },
                n = e => (e.options.events || this.options.events).includes(t.native.type);
            if (!1 === this.notifyPlugins("beforeEvent", i, n)) return;
            const s = this._handleEvent(t, e, i.inChartArea);
            return i.cancelable = !1, this.notifyPlugins("afterEvent", i, n), (s || i.changed) && this.render(), this
        }
        _handleEvent(t, e, i) {
            const {
                _active: n = [],
                options: s
            } = this, r = e, o = this._getActiveElements(t, n, i, r), a = k(t), l = function(t, e, i, n) {
                return i && "mouseout" !== t.type ? n ? e : t : null
            }(t, this._lastEvent, i, a);
            i && (this._lastEvent = null, h(s.onHover, [t, o, this], this), a && h(s.onClick, [t, o, this], this));
            const c = !p(o, n);
            return (c || e) && (this._active = o, this._updateHoverStyles(o, n, e)), this._lastEvent = l, c
        }
        _getActiveElements(t, e, i, n) {
            if ("mouseout" === t.type) return [];
            if (!i) return e;
            const s = this.options.hover;
            return this.getElementsAtEventForMode(t, s.mode, s, n)
        }
    }

    function _s() {
        return u(ws.instances, (t => t._plugins.invalidate()))
    }

    function Ss() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
    }
    class Es {
        static override(t) {
            Object.assign(Es.prototype, t)
        }
        options;
        constructor(t) {
            this.options = t || {}
        }
        init() {}
        formats() {
            return Ss()
        }
        parse() {
            return Ss()
        }
        format() {
            return Ss()
        }
        add() {
            return Ss()
        }
        diff() {
            return Ss()
        }
        startOf() {
            return Ss()
        }
        endOf() {
            return Ss()
        }
    }
    var Ts = {
        _date: Es
    };

    function Ms(t) {
        const e = t.iScale,
            i = function(t, e) {
                if (!t._cache.$bar) {
                    const i = t.getMatchingVisibleMetas(e);
                    let n = [];
                    for (let e = 0, s = i.length; e < s; e++) n = n.concat(i[e].controller.getAllParsedValues(t));
                    t._cache.$bar = lt(n.sort(((t, e) => t - e)))
                }
                return t._cache.$bar
            }(e, t.type);
        let n, s, r, o, a = e._length;
        const l = () => {
            32767 !== r && -32768 !== r && (E(o) && (a = Math.min(a, Math.abs(r - o) || a)), o = r)
        };
        for (n = 0, s = i.length; n < s; ++n) r = e.getPixelForValue(i[n]), l();
        for (o = void 0, n = 0, s = e.ticks.length; n < s; ++n) r = e.getPixelForTick(n), l();
        return a
    }

    function ks(t, e, i, n) {
        return s(t) ? function(t, e, i, n) {
            const s = i.parse(t[0], n),
                r = i.parse(t[1], n),
                o = Math.min(s, r),
                a = Math.max(s, r);
            let l = o,
                c = a;
            Math.abs(o) > Math.abs(a) && (l = a, c = o), e[i.axis] = c, e._custom = {
                barStart: l,
                barEnd: c,
                start: s,
                end: r,
                min: o,
                max: a
            }
        }(t, e, i, n) : e[i.axis] = i.parse(t, n), e
    }

    function Cs(t, e, i, n) {
        const s = t.iScale,
            r = t.vScale,
            o = s.getLabels(),
            a = s === r,
            l = [];
        let c, d, h, u;
        for (c = i, d = i + n; c < d; ++c) u = e[c], h = {}, h[s.axis] = a || s.parse(o[c], c), l.push(ks(u, h, r, c));
        return l
    }

    function Ps(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
    }

    function Ds(t, e, i, n) {
        let s = e.borderSkipped;
        const r = {};
        if (!s) return void(t.borderSkipped = r);
        if (!0 === s) return void(t.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0
        });
        const {
            start: o,
            end: a,
            reverse: l,
            top: c,
            bottom: d
        } = function(t) {
            let e, i, n, s, r;
            return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (s = "end", r = "start") : (s = "start", r = "end"), {
                start: i,
                end: n,
                reverse: e,
                top: s,
                bottom: r
            }
        }(t);
        "middle" === s && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? s = c : (i._bottom || 0) === n ? s = d : (r[Ls(d, o, a, l)] = !0, s = c)), r[Ls(s, o, a, l)] = !0, t.borderSkipped = r
    }

    function Ls(t, e, i, n) {
        var s, r, o;
        return n ? (o = i, t = As(t = (s = t) === (r = e) ? o : s === o ? r : s, i, e)) : t = As(t, e, i), t
    }

    function As(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t
    }

    function Os(t, {
        inflateAmount: e
    }, i) {
        t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
    }
    class Is extends zn {
        static id = "doughnut";
        static defaults = {
            datasetElementType: !1,
            dataElementType: "arc",
            animation: {
                animateRotate: !0,
                animateScale: !1
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                }
            },
            cutout: "50%",
            rotation: 0,
            circumference: 360,
            radius: "100%",
            spacing: 0,
            indexAxis: "r"
        };
        static descriptors = {
            _scriptable: t => "spacing" !== t,
            _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
        };
        static overrides = {
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {
                                    labels: {
                                        pointStyle: i,
                                        color: n
                                    }
                                } = t.legend.options;
                                return e.labels.map(((e, s) => {
                                    const r = t.getDatasetMeta(0).controller.getStyle(s);
                                    return {
                                        text: e,
                                        fillStyle: r.backgroundColor,
                                        strokeStyle: r.borderColor,
                                        fontColor: n,
                                        lineWidth: r.borderWidth,
                                        pointStyle: i,
                                        hidden: !t.getDataVisibility(s),
                                        index: s
                                    }
                                }))
                            }
                            return []
                        }
                    },
                    onClick(t, e, i) {
                        i.chart.toggleDataVisibility(e.index), i.chart.update()
                    }
                }
            }
        };
        constructor(t, e) {
            super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }
        linkScales() {}
        parse(t, e) {
            const i = this.getDataset().data,
                n = this._cachedMeta;
            if (!1 === this._parsing) n._parsed = i;
            else {
                let s, o, a = t => +i[t];
                if (r(i[t])) {
                    const {
                        key: t = "value"
                    } = this._parsing;
                    a = e => +_(i[e], t)
                }
                for (s = t, o = t + e; s < o; ++s) n._parsed[s] = a(s)
            }
        }
        _getRotation() {
            return B(this.options.rotation - 90)
        }
        _getCircumference() {
            return B(this.options.circumference)
        }
        _getRotationExtents() {
            let t = P,
                e = -P;
            for (let i = 0; i < this.chart.data.datasets.length; ++i)
                if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                    const n = this.chart.getDatasetMeta(i).controller,
                        s = n._getRotation(),
                        r = n._getCircumference();
                    t = Math.min(t, s), e = Math.max(e, s + r)
                }
            return {
                rotation: t,
                circumference: e - t
            }
        }
        update(t) {
            const e = this.chart,
                {
                    chartArea: i
                } = e,
                n = this._cachedMeta,
                s = n.data,
                r = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
                o = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
                a = Math.min(c(this.options.cutout, o), 1),
                l = this._getRingWeight(this.index),
                {
                    circumference: h,
                    rotation: u
                } = this._getRotationExtents(),
                {
                    ratioX: p,
                    ratioY: f,
                    offsetX: g,
                    offsetY: m
                } = function(t, e, i) {
                    let n = 1,
                        s = 1,
                        r = 0,
                        o = 0;
                    if (e < P) {
                        const a = t,
                            l = a + e,
                            c = Math.cos(a),
                            d = Math.sin(a),
                            h = Math.cos(l),
                            u = Math.sin(l),
                            p = (t, e, n) => K(t, a, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
                            f = (t, e, n) => K(t, a, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
                            g = p(0, c, h),
                            m = p(O, d, u),
                            v = f(C, c, h),
                            y = f(C + O, d, u);
                        n = (g - v) / 2, s = (m - y) / 2, r = -(g + v) / 2, o = -(m + y) / 2
                    }
                    return {
                        ratioX: n,
                        ratioY: s,
                        offsetX: r,
                        offsetY: o
                    }
                }(u, h, a),
                v = (i.width - r) / p,
                y = (i.height - r) / f,
                b = Math.max(Math.min(v, y) / 2, 0),
                x = d(this.options.radius, b),
                w = (x - Math.max(x * a, 0)) / this._getVisibleDatasetWeightTotal();
            this.offsetX = g * x, this.offsetY = m * x, n.total = this.calculateTotal(), this.outerRadius = x - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * l, 0), this.updateElements(s, 0, s.length, t)
        }
        _circumference(t, e) {
            const i = this.options,
                n = this._cachedMeta,
                s = this._getCircumference();
            return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n._parsed[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * s / P)
        }
        updateElements(t, e, i, n) {
            const s = "reset" === n,
                r = this.chart,
                o = r.chartArea,
                a = r.options.animation,
                l = (o.left + o.right) / 2,
                c = (o.top + o.bottom) / 2,
                d = s && a.animateScale,
                h = d ? 0 : this.innerRadius,
                u = d ? 0 : this.outerRadius,
                {
                    sharedOptions: p,
                    includeOptions: f
                } = this._getSharedOptions(e, n);
            let g, m = this._getRotation();
            for (g = 0; g < e; ++g) m += this._circumference(g, s);
            for (g = e; g < e + i; ++g) {
                const e = this._circumference(g, s),
                    i = t[g],
                    r = {
                        x: l + this.offsetX,
                        y: c + this.offsetY,
                        startAngle: m,
                        endAngle: m + e,
                        circumference: e,
                        outerRadius: u,
                        innerRadius: h
                    };
                f && (r.options = p || this.resolveDataElementOptions(g, i.active ? "active" : n)), m += e, this.updateElement(i, g, r, n)
            }
        }
        calculateTotal() {
            const t = this._cachedMeta,
                e = t.data;
            let i, n = 0;
            for (i = 0; i < e.length; i++) {
                const s = t._parsed[i];
                null === s || isNaN(s) || !this.chart.getDataVisibility(i) || e[i].hidden || (n += Math.abs(s))
            }
            return n
        }
        calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? P * (Math.abs(t) / e) : 0
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart,
                n = i.data.labels || [],
                s = te(e._parsed[t], i.options.locale);
            return {
                label: n[t] || "",
                value: s
            }
        }
        getMaxBorderWidth(t) {
            let e = 0;
            const i = this.chart;
            let n, s, r, o, a;
            if (!t)
                for (n = 0, s = i.data.datasets.length; n < s; ++n)
                    if (i.isDatasetVisible(n)) {
                        r = i.getDatasetMeta(n), t = r.data, o = r.controller;
                        break
                    }
            if (!t) return 0;
            for (n = 0, s = t.length; n < s; ++n) a = o.resolveDataElementOptions(n), "inner" !== a.borderAlign && (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
            return e
        }
        getMaxOffset(t) {
            let e = 0;
            for (let i = 0, n = t.length; i < n; ++i) {
                const t = this.resolveDataElementOptions(i);
                e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
            }
            return e
        }
        _getRingWeightOffset(t) {
            let e = 0;
            for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        }
        _getRingWeight(t) {
            return Math.max(l(this.chart.data.datasets[t].weight, 1), 0)
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
        }
    }
    class zs extends zn {
        static id = "polarArea";
        static defaults = {
            dataElementType: "arc",
            animation: {
                animateRotate: !0,
                animateScale: !0
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                }
            },
            indexAxis: "r",
            startAngle: 0
        };
        static overrides = {
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {
                                    labels: {
                                        pointStyle: i,
                                        color: n
                                    }
                                } = t.legend.options;
                                return e.labels.map(((e, s) => {
                                    const r = t.getDatasetMeta(0).controller.getStyle(s);
                                    return {
                                        text: e,
                                        fillStyle: r.backgroundColor,
                                        strokeStyle: r.borderColor,
                                        fontColor: n,
                                        lineWidth: r.borderWidth,
                                        pointStyle: i,
                                        hidden: !t.getDataVisibility(s),
                                        index: s
                                    }
                                }))
                            }
                            return []
                        }
                    },
                    onClick(t, e, i) {
                        i.chart.toggleDataVisibility(e.index), i.chart.update()
                    }
                }
            },
            scales: {
                r: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    beginAtZero: !0,
                    grid: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    startAngle: 0
                }
            }
        };
        constructor(t, e) {
            super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                i = this.chart,
                n = i.data.labels || [],
                s = te(e._parsed[t].r, i.options.locale);
            return {
                label: n[t] || "",
                value: s
            }
        }
        parseObjectData(t, e, i, n) {
            return Ke.bind(this)(t, e, i, n)
        }
        update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t)
        }
        getMinMax() {
            const t = this._cachedMeta,
                e = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
            return t.data.forEach(((t, i) => {
                const n = this.getParsed(i).r;
                !isNaN(n) && this.chart.getDataVisibility(i) && (n < e.min && (e.min = n), n > e.max && (e.max = n))
            })), e
        }
        _updateRadius() {
            const t = this.chart,
                e = t.chartArea,
                i = t.options,
                n = Math.min(e.right - e.left, e.bottom - e.top),
                s = Math.max(n / 2, 0),
                r = (s - Math.max(i.cutoutPercentage ? s / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
            this.outerRadius = s - r * this.index, this.innerRadius = this.outerRadius - r
        }
        updateElements(t, e, i, n) {
            const s = "reset" === n,
                r = this.chart,
                o = r.options.animation,
                a = this._cachedMeta.rScale,
                l = a.xCenter,
                c = a.yCenter,
                d = a.getIndexAngle(0) - .5 * C;
            let h, u = d;
            const p = 360 / this.countVisibleElements();
            for (h = 0; h < e; ++h) u += this._computeAngle(h, n, p);
            for (h = e; h < e + i; h++) {
                const e = t[h];
                let i = u,
                    f = u + this._computeAngle(h, n, p),
                    g = r.getDataVisibility(h) ? a.getDistanceFromCenterForValue(this.getParsed(h).r) : 0;
                u = f, s && (o.animateScale && (g = 0), o.animateRotate && (i = f = d));
                const m = {
                    x: l,
                    y: c,
                    innerRadius: 0,
                    outerRadius: g,
                    startAngle: i,
                    endAngle: f,
                    options: this.resolveDataElementOptions(h, e.active ? "active" : n)
                };
                this.updateElement(e, h, m, n)
            }
        }
        countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return t.data.forEach(((t, i) => {
                !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
            })), e
        }
        _computeAngle(t, e, i) {
            return this.chart.getDataVisibility(t) ? B(this.resolveDataElementOptions(t, e).angle || i) : 0
        }
    }
    var Rs = Object.freeze({
        __proto__: null,
        BarController: class extends zn {
            static id = "bar";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            parsePrimitiveData(t, e, i, n) {
                return Cs(t, e, i, n)
            }
            parseArrayData(t, e, i, n) {
                return Cs(t, e, i, n)
            }
            parseObjectData(t, e, i, n) {
                const {
                    iScale: s,
                    vScale: r
                } = t, {
                    xAxisKey: o = "x",
                    yAxisKey: a = "y"
                } = this._parsing, l = "x" === s.axis ? o : a, c = "x" === r.axis ? o : a, d = [];
                let h, u, p, f;
                for (h = i, u = i + n; h < u; ++h) f = e[h], p = {}, p[s.axis] = s.parse(_(f, l), h), d.push(ks(_(f, c), p, r, h));
                return d
            }
            updateRangeFromParsed(t, e, i, n) {
                super.updateRangeFromParsed(t, e, i, n);
                const s = i._custom;
                s && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, s.min), t.max = Math.max(t.max, s.max))
            }
            getMaxOverflow() {
                return 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    {
                        iScale: i,
                        vScale: n
                    } = e,
                    s = this.getParsed(t),
                    r = s._custom,
                    o = Ps(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(s[n.axis]);
                return {
                    label: "" + i.getLabelForValue(s[i.axis]),
                    value: o
                }
            }
            initialize() {
                this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
            }
            update(t) {
                const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }
            updateElements(t, e, i, s) {
                const r = "reset" === s,
                    {
                        index: o,
                        _cachedMeta: {
                            vScale: a
                        }
                    } = this,
                    l = a.getBasePixel(),
                    c = a.isHorizontal(),
                    d = this._getRuler(),
                    {
                        sharedOptions: h,
                        includeOptions: u
                    } = this._getSharedOptions(e, s);
                for (let p = e; p < e + i; p++) {
                    const e = this.getParsed(p),
                        i = r || n(e[a.axis]) ? {
                            base: l,
                            head: l
                        } : this._calculateBarValuePixels(p),
                        f = this._calculateBarIndexPixels(p, d),
                        g = (e._stacks || {})[a.axis],
                        m = {
                            horizontal: c,
                            base: i.base,
                            enableBorderRadius: !g || Ps(e._custom) || o === g._top || o === g._bottom,
                            x: c ? i.head : f.center,
                            y: c ? f.center : i.head,
                            height: c ? f.size : Math.abs(i.size),
                            width: c ? Math.abs(i.size) : f.size
                        };
                    u && (m.options = h || this.resolveDataElementOptions(p, t[p].active ? "active" : s));
                    const v = m.options || t[p].options;
                    Ds(m, v, g, o), Os(m, v, d.ratio), this.updateElement(t[p], p, m, s)
                }
            }
            _getStacks(t, e) {
                const {
                    iScale: i
                } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), r = i.options.stacked, o = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[i.axis], c = t => {
                    const e = t._parsed.find((t => t[i.axis] === l)),
                        s = e && e[t.vScale.axis];
                    if (n(s) || isNaN(s)) return !0
                };
                for (const i of s)
                    if ((void 0 === e || !c(i)) && ((!1 === r || -1 === o.indexOf(i.stack) || void 0 === r && void 0 === i.stack) && o.push(i.stack), i.index === t)) break;
                return o.length || o.push(void 0), o
            }
            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }
            _getStackIndex(t, e, i) {
                const n = this._getStacks(t, i),
                    s = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === s ? n.length - 1 : s
            }
            _getRuler() {
                const t = this.options,
                    e = this._cachedMeta,
                    i = e.iScale,
                    n = [];
                let s, r;
                for (s = 0, r = e.data.length; s < r; ++s) n.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
                const o = t.barThickness;
                return {
                    min: o || Ms(e),
                    pixels: n,
                    start: i._startPixel,
                    end: i._endPixel,
                    stackCount: this._getStackCount(),
                    scale: i,
                    grouped: t.grouped,
                    ratio: o ? 1 : t.categoryPercentage * t.barPercentage
                }
            }
            _calculateBarValuePixels(t) {
                const {
                    _cachedMeta: {
                        vScale: e,
                        _stacked: i,
                        index: s
                    },
                    options: {
                        base: r,
                        minBarLength: o
                    }
                } = this, a = r || 0, l = this.getParsed(t), c = l._custom, d = Ps(c);
                let h, u, p = l[e.axis],
                    f = 0,
                    g = i ? this.applyStack(e, l, i) : p;
                g !== p && (f = g - p, g = p), d && (p = c.barStart, g = c.barEnd - c.barStart, 0 !== p && F(p) !== F(c.barEnd) && (f = 0), f += p);
                const m = n(r) || d ? f : r;
                let v = e.getPixelForValue(m);
                if (h = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + g) : v, u = h - v, Math.abs(u) < o) {
                    u = function(t, e, i) {
                        return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                    }(u, e, a) * o, p === a && (v -= u / 2);
                    const t = e.getPixelForDecimal(0),
                        n = e.getPixelForDecimal(1),
                        r = Math.min(t, n),
                        c = Math.max(t, n);
                    v = Math.max(Math.min(v, c), r), h = v + u, i && !d && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(h) - e.getValueForPixel(v))
                }
                if (v === e.getPixelForValue(a)) {
                    const t = F(u) * e.getLineWidthForValue(a) / 2;
                    v += t, u -= t
                }
                return {
                    size: u,
                    base: v,
                    head: h,
                    center: h + u / 2
                }
            }
            _calculateBarIndexPixels(t, e) {
                const i = e.scale,
                    s = this.options,
                    r = s.skipNull,
                    o = l(s.maxBarThickness, 1 / 0);
                let a, c;
                if (e.grouped) {
                    const i = r ? this._getStackCount(t) : e.stackCount,
                        l = "flex" === s.barThickness ? function(t, e, i, n) {
                            const s = e.pixels,
                                r = s[t];
                            let o = t > 0 ? s[t - 1] : null,
                                a = t < s.length - 1 ? s[t + 1] : null;
                            const l = i.categoryPercentage;
                            null === o && (o = r - (null === a ? e.end - e.start : a - r)), null === a && (a = r + r - o);
                            const c = r - (r - Math.min(o, a)) / 2 * l;
                            return {
                                chunk: Math.abs(a - o) / 2 * l / n,
                                ratio: i.barPercentage,
                                start: c
                            }
                        }(t, e, s, i) : function(t, e, i, s) {
                            const r = i.barThickness;
                            let o, a;
                            return n(r) ? (o = e.min * i.categoryPercentage, a = i.barPercentage) : (o = r * s, a = 1), {
                                chunk: o / s,
                                ratio: a,
                                start: e.pixels[t] - o / 2
                            }
                        }(t, e, s, i),
                        d = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0);
                    a = l.start + l.chunk * d + l.chunk / 2, c = Math.min(o, l.chunk * l.ratio)
                } else a = i.getPixelForValue(this.getParsed(t)[i.axis], t), c = Math.min(o, e.min * e.ratio);
                return {
                    base: a - c / 2,
                    head: a + c / 2,
                    center: a,
                    size: c
                }
            }
            draw() {
                const t = this._cachedMeta,
                    e = t.vScale,
                    i = t.data,
                    n = i.length;
                let s = 0;
                for (; s < n; ++s) null === this.getParsed(s)[e.axis] || i[s].hidden || i[s].draw(this._ctx)
            }
        },
        BubbleController: class extends zn {
            static id = "bubble";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            };
            static overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0, super.initialize()
            }
            parsePrimitiveData(t, e, i, n) {
                const s = super.parsePrimitiveData(t, e, i, n);
                for (let t = 0; t < s.length; t++) s[t]._custom = this.resolveDataElementOptions(t + i).radius;
                return s
            }
            parseArrayData(t, e, i, n) {
                const s = super.parseArrayData(t, e, i, n);
                for (let t = 0; t < s.length; t++) {
                    const n = e[i + t];
                    s[t]._custom = l(n[2], this.resolveDataElementOptions(t + i).radius)
                }
                return s
            }
            parseObjectData(t, e, i, n) {
                const s = super.parseObjectData(t, e, i, n);
                for (let t = 0; t < s.length; t++) {
                    const n = e[i + t];
                    s[t]._custom = l(n && n.r && +n.r, this.resolveDataElementOptions(t + i).radius)
                }
                return s
            }
            getMaxOverflow() {
                const t = this._cachedMeta.data;
                let e = 0;
                for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                return e > 0 && e
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = this.chart.data.labels || [],
                    {
                        xScale: n,
                        yScale: s
                    } = e,
                    r = this.getParsed(t),
                    o = n.getLabelForValue(r.x),
                    a = s.getLabelForValue(r.y),
                    l = r._custom;
                return {
                    label: i[t] || "",
                    value: "(" + o + ", " + a + (l ? ", " + l : "") + ")"
                }
            }
            update(t) {
                const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }
            updateElements(t, e, i, n) {
                const s = "reset" === n,
                    {
                        iScale: r,
                        vScale: o
                    } = this._cachedMeta,
                    {
                        sharedOptions: a,
                        includeOptions: l
                    } = this._getSharedOptions(e, n),
                    c = r.axis,
                    d = o.axis;
                for (let h = e; h < e + i; h++) {
                    const e = t[h],
                        i = !s && this.getParsed(h),
                        u = {},
                        p = u[c] = s ? r.getPixelForDecimal(.5) : r.getPixelForValue(i[c]),
                        f = u[d] = s ? o.getBasePixel() : o.getPixelForValue(i[d]);
                    u.skip = isNaN(p) || isNaN(f), l && (u.options = a || this.resolveDataElementOptions(h, e.active ? "active" : n), s && (u.options.radius = 0)), this.updateElement(e, h, u, n)
                }
            }
            resolveDataElementOptions(t, e) {
                const i = this.getParsed(t);
                let n = super.resolveDataElementOptions(t, e);
                n.$shared && (n = Object.assign({}, n, {
                    $shared: !1
                }));
                const s = n.radius;
                return "active" !== e && (n.radius = 0), n.radius += l(i && i._custom, s), n
            }
        },
        DoughnutController: Is,
        LineController: class extends zn {
            static id = "line";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
            }
            update(t) {
                const e = this._cachedMeta,
                    {
                        dataset: i,
                        data: n = [],
                        _dataset: s
                    } = e,
                    r = this.chart._animationsDisabled;
                let {
                    start: o,
                    count: a
                } = gt(e, n, r);
                this._drawStart = o, this._drawCount = a, mt(e) && (o = 0, a = n.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!s._decimated, i.points = n;
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
                    animated: !r,
                    options: l
                }, t), this.updateElements(n, o, a, t)
            }
            updateElements(t, e, i, s) {
                const r = "reset" === s,
                    {
                        iScale: o,
                        vScale: a,
                        _stacked: l,
                        _dataset: c
                    } = this._cachedMeta,
                    {
                        sharedOptions: d,
                        includeOptions: h
                    } = this._getSharedOptions(e, s),
                    u = o.axis,
                    p = a.axis,
                    {
                        spanGaps: f,
                        segment: g
                    } = this.options,
                    m = H(f) ? f : Number.POSITIVE_INFINITY,
                    v = this.chart._animationsDisabled || r || "none" === s,
                    y = e + i,
                    b = t.length;
                let x = e > 0 && this.getParsed(e - 1);
                for (let i = 0; i < b; ++i) {
                    const f = t[i],
                        b = v ? f : {};
                    if (i < e || i >= y) {
                        b.skip = !0;
                        continue
                    }
                    const w = this.getParsed(i),
                        _ = n(w[p]),
                        S = b[u] = o.getPixelForValue(w[u], i),
                        E = b[p] = r || _ ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[p], i);
                    b.skip = isNaN(S) || isNaN(E) || _, b.stop = i > 0 && Math.abs(w[u] - x[u]) > m, g && (b.parsed = w, b.raw = c.data[i]), h && (b.options = d || this.resolveDataElementOptions(i, f.active ? "active" : s)), v || this.updateElement(f, i, b, s), x = w
                }
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.dataset,
                    i = e.options && e.options.borderWidth || 0,
                    n = t.data || [];
                if (!n.length) return i;
                const s = n[0].size(this.resolveDataElementOptions(0)),
                    r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
                return Math.max(i, s, r) / 2
            }
            draw() {
                const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
            }
        },
        PieController: class extends Is {
            static id = "pie";
            static defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            }
        },
        PolarAreaController: zs,
        RadarController: class extends zn {
            static id = "radar";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            };
            static overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            getLabelAndValue(t) {
                const e = this._cachedMeta.vScale,
                    i = this.getParsed(t);
                return {
                    label: e.getLabels()[t],
                    value: "" + e.getLabelForValue(i[e.axis])
                }
            }
            parseObjectData(t, e, i, n) {
                return Ke.bind(this)(t, e, i, n)
            }
            update(t) {
                const e = this._cachedMeta,
                    i = e.dataset,
                    n = e.data || [],
                    s = e.iScale.getLabels();
                if (i.points = n, "resize" !== t) {
                    const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0);
                    const r = {
                        _loop: !0,
                        _fullLoop: s.length === n.length,
                        options: e
                    };
                    this.updateElement(i, void 0, r, t)
                }
                this.updateElements(n, 0, n.length, t)
            }
            updateElements(t, e, i, n) {
                const s = this._cachedMeta.rScale,
                    r = "reset" === n;
                for (let o = e; o < e + i; o++) {
                    const e = t[o],
                        i = this.resolveDataElementOptions(o, e.active ? "active" : n),
                        a = s.getPointPositionForValue(o, this.getParsed(o).r),
                        l = r ? s.xCenter : a.x,
                        c = r ? s.yCenter : a.y,
                        d = {
                            x: l,
                            y: c,
                            angle: a.angle,
                            skip: isNaN(l) || isNaN(c),
                            options: i
                        };
                    this.updateElement(e, o, d, n)
                }
            }
        },
        ScatterController: class extends zn {
            static id = "scatter";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                showLine: !1,
                fill: !1
            };
            static overrides = {
                interaction: {
                    mode: "point"
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = this.chart.data.labels || [],
                    {
                        xScale: n,
                        yScale: s
                    } = e,
                    r = this.getParsed(t),
                    o = n.getLabelForValue(r.x),
                    a = s.getLabelForValue(r.y);
                return {
                    label: i[t] || "",
                    value: "(" + o + ", " + a + ")"
                }
            }
            update(t) {
                const e = this._cachedMeta,
                    {
                        data: i = []
                    } = e,
                    n = this.chart._animationsDisabled;
                let {
                    start: s,
                    count: r
                } = gt(e, i, n);
                if (this._drawStart = s, this._drawCount = r, mt(e) && (s = 0, r = i.length), this.options.showLine) {
                    this.datasetElementType || this.addElements();
                    const {
                        dataset: s,
                        _dataset: r
                    } = e;
                    s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!r._decimated, s.points = i;
                    const o = this.resolveDatasetElementOptions(t);
                    o.segment = this.options.segment, this.updateElement(s, void 0, {
                        animated: !n,
                        options: o
                    }, t)
                } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
                this.updateElements(i, s, r, t)
            }
            addElements() {
                const {
                    showLine: t
                } = this.options;
                !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
            }
            updateElements(t, e, i, s) {
                const r = "reset" === s,
                    {
                        iScale: o,
                        vScale: a,
                        _stacked: l,
                        _dataset: c
                    } = this._cachedMeta,
                    d = this.resolveDataElementOptions(e, s),
                    h = this.getSharedOptions(d),
                    u = this.includeOptions(s, h),
                    p = o.axis,
                    f = a.axis,
                    {
                        spanGaps: g,
                        segment: m
                    } = this.options,
                    v = H(g) ? g : Number.POSITIVE_INFINITY,
                    y = this.chart._animationsDisabled || r || "none" === s;
                let b = e > 0 && this.getParsed(e - 1);
                for (let d = e; d < e + i; ++d) {
                    const e = t[d],
                        i = this.getParsed(d),
                        g = y ? e : {},
                        x = n(i[f]),
                        w = g[p] = o.getPixelForValue(i[p], d),
                        _ = g[f] = r || x ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, i, l) : i[f], d);
                    g.skip = isNaN(w) || isNaN(_) || x, g.stop = d > 0 && Math.abs(i[p] - b[p]) > v, m && (g.parsed = i, g.raw = c.data[d]), u && (g.options = h || this.resolveDataElementOptions(d, e.active ? "active" : s)), y || this.updateElement(e, d, g, s), b = i
                }
                this.updateSharedOptions(h, s, d)
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.data || [];
                if (!this.options.showLine) {
                    let t = 0;
                    for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
                    return t > 0 && t
                }
                const i = t.dataset,
                    n = i.options && i.options.borderWidth || 0;
                if (!e.length) return n;
                const s = e[0].size(this.resolveDataElementOptions(0)),
                    r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(n, s, r) / 2
            }
        }
    });

    function Fs(t, e, i, n) {
        return {
            x: i + t * Math.cos(e),
            y: n + t * Math.sin(e)
        }
    }

    function $s(t, e, i, n, s, r) {
        const {
            x: o,
            y: a,
            startAngle: l,
            pixelMargin: c,
            innerRadius: d
        } = e, h = Math.max(e.outerRadius + n + i - c, 0), u = d > 0 ? d + n + i + c : 0;
        let p = 0;
        const f = s - l;
        if (n) {
            const t = ((d > 0 ? d - n : 0) + (h > 0 ? h - n : 0)) / 2;
            p = (f - (0 !== t ? f * t / (t + n) : f)) / 2
        }
        const g = (f - Math.max(.001, f * h - i / C) / h) / 2,
            m = l + g + p,
            v = s - g - p,
            {
                outerStart: y,
                outerEnd: b,
                innerStart: x,
                innerEnd: w
            } = function(t, e, i, n) {
                const s = mi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]),
                    r = (i - e) / 2,
                    o = Math.min(r, n * e / 2),
                    a = t => {
                        const e = (i - Math.min(r, t)) * n / 2;
                        return Z(t, 0, Math.min(r, e))
                    };
                return {
                    outerStart: a(s.outerStart),
                    outerEnd: a(s.outerEnd),
                    innerStart: Z(s.innerStart, 0, o),
                    innerEnd: Z(s.innerEnd, 0, o)
                }
            }(e, u, h, v - m),
            _ = h - y,
            S = h - b,
            E = m + y / _,
            T = v - b / S,
            M = u + x,
            k = u + w,
            P = m + x / M,
            D = v - w / k;
        if (t.beginPath(), r) {
            const e = (E + T) / 2;
            if (t.arc(o, a, h, E, e), t.arc(o, a, h, e, T), b > 0) {
                const e = Fs(S, T, o, a);
                t.arc(e.x, e.y, b, T, v + O)
            }
            const i = Fs(k, v, o, a);
            if (t.lineTo(i.x, i.y), w > 0) {
                const e = Fs(k, D, o, a);
                t.arc(e.x, e.y, w, v + O, D + Math.PI)
            }
            const n = (v - w / u + (m + x / u)) / 2;
            if (t.arc(o, a, u, v - w / u, n, !0), t.arc(o, a, u, n, m + x / u, !0), x > 0) {
                const e = Fs(M, P, o, a);
                t.arc(e.x, e.y, x, P + Math.PI, m - O)
            }
            const s = Fs(_, m, o, a);
            if (t.lineTo(s.x, s.y), y > 0) {
                const e = Fs(_, E, o, a);
                t.arc(e.x, e.y, y, m - O, E)
            }
        } else {
            t.moveTo(o, a);
            const e = Math.cos(E) * h + o,
                i = Math.sin(E) * h + a;
            t.lineTo(e, i);
            const n = Math.cos(T) * h + o,
                s = Math.sin(T) * h + a;
            t.lineTo(n, s)
        }
        t.closePath()
    }

    function js(t, e, i = e) {
        t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor)
    }

    function Ns(t, e, i) {
        t.lineTo(i.x, i.y)
    }

    function Hs(t, e, i = {}) {
        const n = t.length,
            {
                start: s = 0,
                end: r = n - 1
            } = i,
            {
                start: o,
                end: a
            } = e,
            l = Math.max(s, o),
            c = Math.min(r, a),
            d = s < o && r < o || s > a && r > a;
        return {
            count: n,
            start: l,
            loop: e.loop,
            ilen: c < l && !d ? n + c - l : c - l
        }
    }

    function Ws(t, e, i, n) {
        const {
            points: s,
            options: r
        } = e, {
            count: o,
            start: a,
            loop: l,
            ilen: c
        } = Hs(s, i, n), d = function(t) {
            return t.stepped ? Ae : t.tension || "monotone" === t.cubicInterpolationMode ? Oe : Ns
        }(r);
        let h, u, p, {
            move: f = !0,
            reverse: g
        } = n || {};
        for (h = 0; h <= c; ++h) u = s[(a + (g ? c - h : h)) % o], u.skip || (f ? (t.moveTo(u.x, u.y), f = !1) : d(t, p, u, g, r.stepped), p = u);
        return l && (u = s[(a + (g ? c : 0)) % o], d(t, p, u, g, r.stepped)), !!l
    }

    function Vs(t, e, i, n) {
        const s = e.points,
            {
                count: r,
                start: o,
                ilen: a
            } = Hs(s, i, n),
            {
                move: l = !0,
                reverse: c
            } = n || {};
        let d, h, u, p, f, g, m = 0,
            v = 0;
        const y = t => (o + (c ? a - t : t)) % r,
            b = () => {
                p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g))
            };
        for (l && (h = s[y(0)], t.moveTo(h.x, h.y)), d = 0; d <= a; ++d) {
            if (h = s[y(d)], h.skip) continue;
            const e = h.x,
                i = h.y,
                n = 0 | e;
            n === u ? (i < p ? p = i : i > f && (f = i), m = (v * m + e) / ++v) : (b(), t.lineTo(e, i), u = n, v = 0, p = f = i), g = i
        }
        b()
    }

    function Bs(t) {
        const e = t.options,
            i = e.borderDash && e.borderDash.length;
        return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? Ws : Vs
    }
    const qs = "function" == typeof Path2D;
    class Ys extends Rn {
        static id = "line";
        static defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0
        };
        static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        };
        static descriptors = {
            _scriptable: !0,
            _indexable: t => "borderDash" !== t && "fill" !== t
        };
        constructor(t) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
        }
        updateControlPoints(t, e) {
            const i = this.options;
            if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                const n = i.spanGaps ? this._loop : this._fullLoop;
                si(this._points, i, t, n, e), this._pointsUpdated = !0
            }
        }
        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
        }
        get points() {
            return this._points
        }
        get segments() {
            return this._segments || (this._segments = Li(this, this.options.segment))
        }
        first() {
            const t = this.segments,
                e = this.points;
            return t.length && e[t[0].start]
        }
        last() {
            const t = this.segments,
                e = this.points,
                i = t.length;
            return i && e[t[i - 1].end]
        }
        interpolate(t, e) {
            const i = this.options,
                n = t[e],
                s = this.points,
                r = Di(this, {
                    property: e,
                    start: n,
                    end: n
                });
            if (!r.length) return;
            const o = [],
                a = function(t) {
                    return t.stepped ? di : t.tension || "monotone" === t.cubicInterpolationMode ? hi : ci
                }(i);
            let l, c;
            for (l = 0, c = r.length; l < c; ++l) {
                const {
                    start: c,
                    end: d
                } = r[l], h = s[c], u = s[d];
                if (h === u) {
                    o.push(h);
                    continue
                }
                const p = a(h, u, Math.abs((n - h[e]) / (u[e] - h[e])), i.stepped);
                p[e] = t[e], o.push(p)
            }
            return 1 === o.length ? o[0] : o
        }
        pathSegment(t, e, i) {
            return Bs(this)(t, this, e, i)
        }
        path(t, e, i) {
            const n = this.segments,
                s = Bs(this);
            let r = this._loop;
            e = e || 0, i = i || this.points.length - e;
            for (const o of n) r &= s(t, this, o, {
                start: e,
                end: e + i - 1
            });
            return !!r
        }
        draw(t, e, i, n) {
            const s = this.options || {};
            (this.points || []).length && s.borderWidth && (t.save(), function(t, e, i, n) {
                qs && !e.options.segment ? function(t, e, i, n) {
                    let s = e._path;
                    s || (s = e._path = new Path2D, e.path(s, i, n) && s.closePath()), js(t, e.options), t.stroke(s)
                }(t, e, i, n) : function(t, e, i, n) {
                    const {
                        segments: s,
                        options: r
                    } = e, o = Bs(e);
                    for (const a of s) js(t, r, a.style), t.beginPath(), o(t, e, a, {
                        start: i,
                        end: i + n - 1
                    }) && t.closePath(), t.stroke()
                }(t, e, i, n)
            }(t, this, i, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
        }
    }

    function Gs(t, e, i, n) {
        const s = t.options,
            {
                [i]: r
            } = t.getProps([i], n);
        return Math.abs(e - r) < s.radius + s.hitRadius
    }

    function Xs(t, e) {
        const {
            x: i,
            y: n,
            base: s,
            width: r,
            height: o
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let a, l, c, d, h;
        return t.horizontal ? (h = o / 2, a = Math.min(i, s), l = Math.max(i, s), c = n - h, d = n + h) : (h = r / 2, a = i - h, l = i + h, c = Math.min(n, s), d = Math.max(n, s)), {
            left: a,
            top: c,
            right: l,
            bottom: d
        }
    }

    function Us(t, e, i, n) {
        return t ? 0 : Z(e, i, n)
    }

    function Qs(t) {
        const e = Xs(t),
            i = e.right - e.left,
            n = e.bottom - e.top,
            s = function(t, e, i) {
                const n = t.options.borderWidth,
                    s = t.borderSkipped,
                    r = vi(n);
                return {
                    t: Us(s.top, r.top, 0, i),
                    r: Us(s.right, r.right, 0, e),
                    b: Us(s.bottom, r.bottom, 0, i),
                    l: Us(s.left, r.left, 0, e)
                }
            }(t, i / 2, n / 2),
            o = function(t, e, i) {
                const {
                    enableBorderRadius: n
                } = t.getProps(["enableBorderRadius"]), s = t.options.borderRadius, o = yi(s), a = Math.min(e, i), l = t.borderSkipped, c = n || r(s);
                return {
                    topLeft: Us(!c || l.top || l.left, o.topLeft, 0, a),
                    topRight: Us(!c || l.top || l.right, o.topRight, 0, a),
                    bottomLeft: Us(!c || l.bottom || l.left, o.bottomLeft, 0, a),
                    bottomRight: Us(!c || l.bottom || l.right, o.bottomRight, 0, a)
                }
            }(t, i / 2, n / 2);
        return {
            outer: {
                x: e.left,
                y: e.top,
                w: i,
                h: n,
                radius: o
            },
            inner: {
                x: e.left + s.l,
                y: e.top + s.t,
                w: i - s.l - s.r,
                h: n - s.t - s.b,
                radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
                    topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
                    bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
                }
            }
        }
    }

    function Ks(t, e, i, n) {
        const s = null === e,
            r = null === i,
            o = t && !(s && r) && Xs(t, n);
        return o && (s || tt(e, o.left, o.right)) && (r || tt(i, o.top, o.bottom))
    }

    function Zs(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
    }

    function Js(t, e, i = {}) {
        const n = t.x !== i.x ? -e : 0,
            s = t.y !== i.y ? -e : 0,
            r = (t.x + t.w !== i.x + i.w ? e : 0) - n,
            o = (t.y + t.h !== i.y + i.h ? e : 0) - s;
        return {
            x: t.x + n,
            y: t.y + s,
            w: t.w + r,
            h: t.h + o,
            radius: t.radius
        }
    }
    var tr = Object.freeze({
        __proto__: null,
        ArcElement: class extends Rn {
            static id = "arc";
            static defaults = {
                borderAlign: "center",
                borderColor: "#fff",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: void 0,
                borderRadius: 0,
                borderWidth: 2,
                offset: 0,
                spacing: 0,
                angle: void 0,
                circular: !0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor"
            };
            static descriptors = {
                _scriptable: !0,
                _indexable: t => "borderDash" !== t
            };
            circumference;
            endAngle;
            fullCircles;
            innerRadius;
            outerRadius;
            pixelMargin;
            startAngle;
            constructor(t) {
                super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const n = this.getProps(["x", "y"], i),
                    {
                        angle: s,
                        distance: r
                    } = G(n, {
                        x: t,
                        y: e
                    }),
                    {
                        startAngle: o,
                        endAngle: a,
                        innerRadius: c,
                        outerRadius: d,
                        circumference: h
                    } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                    u = (this.options.spacing + this.options.borderWidth) / 2,
                    p = l(h, a - o),
                    f = K(s, o, a) && o !== a,
                    g = p >= P || f,
                    m = tt(r, c + u, d + u);
                return g && m
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i,
                    startAngle: n,
                    endAngle: s,
                    innerRadius: r,
                    outerRadius: o
                } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
                    offset: a,
                    spacing: l
                } = this.options, c = (n + s) / 2, d = (r + o + l + a) / 2;
                return {
                    x: e + Math.cos(c) * d,
                    y: i + Math.sin(c) * d
                }
            }
            tooltipPosition(t) {
                return this.getCenterPoint(t)
            }
            draw(t) {
                const {
                    options: e,
                    circumference: i
                } = this, n = (e.offset || 0) / 4, s = (e.spacing || 0) / 2, r = e.circular;
                if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > P ? Math.floor(i / P) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                t.save();
                const o = (this.startAngle + this.endAngle) / 2;
                t.translate(Math.cos(o) * n, Math.sin(o) * n);
                const a = n * (1 - Math.sin(Math.min(C, i || 0)));
                t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor,
                    function(t, e, i, n, s) {
                        const {
                            fullCircles: r,
                            startAngle: o,
                            circumference: a
                        } = e;
                        let l = e.endAngle;
                        if (r) {
                            $s(t, e, i, n, l, s);
                            for (let e = 0; e < r; ++e) t.fill();
                            isNaN(a) || (l = o + (a % P || P))
                        }
                        $s(t, e, i, n, l, s), t.fill()
                    }(t, this, a, s, r),
                    function(t, e, i, n, s) {
                        const {
                            fullCircles: r,
                            startAngle: o,
                            circumference: a,
                            options: l
                        } = e, {
                            borderWidth: c,
                            borderJoinStyle: d,
                            borderDash: h,
                            borderDashOffset: u
                        } = l, p = "inner" === l.borderAlign;
                        if (!c) return;
                        t.setLineDash(h || []), t.lineDashOffset = u, p ? (t.lineWidth = 2 * c, t.lineJoin = d || "round") : (t.lineWidth = c, t.lineJoin = d || "bevel");
                        let f = e.endAngle;
                        if (r) {
                            $s(t, e, i, n, f, s);
                            for (let e = 0; e < r; ++e) t.stroke();
                            isNaN(a) || (f = o + (a % P || P))
                        }
                        p && function(t, e, i) {
                            const {
                                startAngle: n,
                                pixelMargin: s,
                                x: r,
                                y: o,
                                outerRadius: a,
                                innerRadius: l
                            } = e;
                            let c = s / a;
                            t.beginPath(), t.arc(r, o, a, n - c, i + c), l > s ? (c = s / l, t.arc(r, o, l, i + c, n - c, !0)) : t.arc(r, o, s, i + O, n - O), t.closePath(), t.clip()
                        }(t, e, f), r || ($s(t, e, i, n, f, s), t.stroke())
                    }(t, this, a, s, r), t.restore()
            }
        },
        BarElement: class extends Rn {
            static id = "bar";
            static defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(t) {
                super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
            }
            draw(t) {
                const {
                    inflateAmount: e,
                    options: {
                        borderColor: i,
                        backgroundColor: n
                    }
                } = this, {
                    inner: s,
                    outer: r
                } = Qs(this), o = (a = r.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? Fe : Zs;
                var a;
                t.save(), r.w === s.w && r.h === s.h || (t.beginPath(), o(t, Js(r, e, s)), t.clip(), o(t, Js(s, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), o(t, Js(s, e)), t.fillStyle = n, t.fill(), t.restore()
            }
            inRange(t, e, i) {
                return Ks(this, t, e, i)
            }
            inXRange(t, e) {
                return Ks(this, t, null, e)
            }
            inYRange(t, e) {
                return Ks(this, null, t, e)
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i,
                    base: n,
                    horizontal: s
                } = this.getProps(["x", "y", "base", "horizontal"], t);
                return {
                    x: s ? (e + n) / 2 : e,
                    y: s ? i : (i + n) / 2
                }
            }
            getRange(t) {
                return "x" === t ? this.width / 2 : this.height / 2
            }
        },
        LineElement: Ys,
        PointElement: class extends Rn {
            static id = "point";
            parsed;
            skip;
            stop;
            static defaults = {
                borderWidth: 1,
                hitRadius: 1,
                hoverBorderWidth: 1,
                hoverRadius: 4,
                pointStyle: "circle",
                radius: 3,
                rotation: 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(t) {
                super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const n = this.options,
                    {
                        x: s,
                        y: r
                    } = this.getProps(["x", "y"], i);
                return Math.pow(t - s, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2)
            }
            inXRange(t, e) {
                return Gs(this, t, "x", e)
            }
            inYRange(t, e) {
                return Gs(this, t, "y", e)
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i
                } = this.getProps(["x", "y"], t);
                return {
                    x: e,
                    y: i
                }
            }
            size(t) {
                let e = (t = t || this.options || {}).radius || 0;
                return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0))
            }
            draw(t, e) {
                const i = this.options;
                this.skip || i.radius < .1 || !Pe(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, ke(t, i, this.x, this.y))
            }
            getRange() {
                const t = this.options || {};
                return t.radius + t.hitRadius
            }
        }
    });

    function er(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t
    }

    function ir(t, e, {
        horizontal: i,
        minRotation: n
    }) {
        const s = B(n),
            r = (i ? Math.sin(s) : Math.cos(s)) || .001,
            o = .75 * e * ("" + t).length;
        return Math.min(e / r, o)
    }
    class nr extends Yn {
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            return n(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions() {
            const {
                beginAtZero: t
            } = this.options, {
                minDefined: e,
                maxDefined: i
            } = this.getUserBounds();
            let {
                min: n,
                max: s
            } = this;
            const r = t => n = e ? n : t,
                o = t => s = i ? s : t;
            if (t) {
                const t = F(n),
                    e = F(s);
                t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && r(0)
            }
            if (n === s) {
                let e = 0 === s ? 1 : Math.abs(.05 * s);
                o(s + e), t || r(n - e)
            }
            this.min = n, this.max = s
        }
        getTickLimit() {
            const t = this.options.ticks;
            let e, {
                maxTicksLimit: i,
                stepSize: n
            } = t;
            return n ? (e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY
        }
        buildTicks() {
            const t = this.options,
                e = t.ticks;
            let i = this.getTickLimit();
            i = Math.max(2, i);
            const s = function(t, e) {
                const i = [],
                    {
                        bounds: s,
                        step: r,
                        min: o,
                        max: a,
                        precision: l,
                        count: c,
                        maxTicks: d,
                        maxDigits: h,
                        includeBounds: u
                    } = t,
                    p = r || 1,
                    f = d - 1,
                    {
                        min: g,
                        max: m
                    } = e,
                    v = !n(o),
                    y = !n(a),
                    b = !n(c),
                    x = (m - g) / (h + 1);
                let w, _, S, E, T = j((m - g) / f / p) * p;
                if (T < 1e-14 && !v && !y) return [{
                    value: g
                }, {
                    value: m
                }];
                E = Math.ceil(m / T) - Math.floor(g / T), E > f && (T = j(E * T / f / p) * p), n(l) || (w = Math.pow(10, l), T = Math.ceil(T * w) / w), "ticks" === s ? (_ = Math.floor(g / T) * T, S = Math.ceil(m / T) * T) : (_ = g, S = m), v && y && r && W((a - o) / r, T / 1e3) ? (E = Math.round(Math.min((a - o) / T, d)), T = (a - o) / E, _ = o, S = a) : b ? (_ = v ? o : _, S = y ? a : S, E = c - 1, T = (S - _) / E) : (E = (S - _) / T, E = $(E, Math.round(E), T / 1e3) ? Math.round(E) : Math.ceil(E));
                const M = Math.max(Y(T), Y(_));
                w = Math.pow(10, n(l) ? M : l), _ = Math.round(_ * w) / w, S = Math.round(S * w) / w;
                let k = 0;
                for (v && (u && _ !== o ? (i.push({
                        value: o
                    }), _ < o && k++, $(Math.round((_ + k * T) * w) / w, o, ir(o, x, t)) && k++) : _ < o && k++); k < E; ++k) {
                    const t = Math.round((_ + k * T) * w) / w;
                    if (y && t > a) break;
                    i.push({
                        value: t
                    })
                }
                return y && u && S !== a ? i.length && $(i[i.length - 1].value, a, ir(a, x, t)) ? i[i.length - 1].value = a : i.push({
                    value: a
                }) : y && S !== a || i.push({
                    value: S
                }), i
            }({
                maxTicks: i,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: !1 !== e.includeBounds
            }, this._range || this);
            return "ticks" === t.bounds && V(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
        }
        configure() {
            const t = this.ticks;
            let e = this.min,
                i = this.max;
            if (super.configure(), this.options.offset && t.length) {
                const n = (i - e) / Math.max(t.length - 1, 1) / 2;
                e -= n, i += n
            }
            this._startValue = e, this._endValue = i, this._valueRange = i - e
        }
        getLabelForValue(t) {
            return te(t, this.chart.options.locale, this.options.ticks.format)
        }
    }
    class sr extends nr {
        static id = "linear";
        static defaults = {
            ticks: {
                callback: ie.formatters.numeric
            }
        };
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = o(t) ? t : 0, this.max = o(e) ? e : 1, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            const t = this.isHorizontal(),
                e = t ? this.width : this.height,
                i = B(this.options.ticks.minRotation),
                n = (t ? Math.sin(i) : Math.cos(i)) || .001,
                s = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, s.lineHeight / n))
        }
        getPixelForValue(t) {
            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
    }
    const rr = t => Math.floor(R(t)),
        or = (t, e) => Math.pow(10, rr(t) + e);

    function ar(t) {
        return 1 == t / Math.pow(10, rr(t))
    }

    function lr(t, e, i) {
        const n = Math.pow(10, i),
            s = Math.floor(t / n);
        return Math.ceil(e / n) - s
    }
    class cr extends Yn {
        static id = "logarithmic";
        static defaults = {
            ticks: {
                callback: ie.formatters.logarithmic,
                major: {
                    enabled: !0
                }
            }
        };
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            const i = nr.prototype.parse.apply(this, [t, e]);
            if (0 !== i) return o(i) && i > 0 ? i : null;
            this._zero = !0
        }
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = o(t) ? Math.max(0, t) : null, this.max = o(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !o(this._userMin) && (this.min = t === or(this.min, 0) ? or(this.min, -1) : or(this.min, 0)), this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
            const {
                minDefined: t,
                maxDefined: e
            } = this.getUserBounds();
            let i = this.min,
                n = this.max;
            const s = e => i = t ? i : e,
                r = t => n = e ? n : t;
            i === n && (i <= 0 ? (s(1), r(10)) : (s(or(i, -1)), r(or(n, 1)))), i <= 0 && s(or(n, -1)), n <= 0 && r(or(i, 1)), this.min = i, this.max = n
        }
        buildTicks() {
            const t = this.options,
                e = function(t, {
                    min: e,
                    max: i
                }) {
                    e = a(t.min, e);
                    const n = [],
                        s = rr(e);
                    let r = function(t, e) {
                            let i = rr(e - t);
                            for (; lr(t, e, i) > 10;) i++;
                            for (; lr(t, e, i) < 10;) i--;
                            return Math.min(i, rr(t))
                        }(e, i),
                        o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
                    const l = Math.pow(10, r),
                        c = s > r ? Math.pow(10, s) : 0,
                        d = Math.round((e - c) * o) / o,
                        h = Math.floor((e - c) / l / 10) * l * 10;
                    let u = Math.floor((d - h) / Math.pow(10, r)),
                        p = a(t.min, Math.round((c + h + u * Math.pow(10, r)) * o) / o);
                    for (; p < i;) n.push({
                        value: p,
                        major: ar(p),
                        significand: u
                    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (r++, u = 2, o = r >= 0 ? 1 : o), p = Math.round((c + h + u * Math.pow(10, r)) * o) / o;
                    const f = a(t.max, p);
                    return n.push({
                        value: f,
                        major: ar(f),
                        significand: u
                    }), n
                }({
                    min: this._userMin,
                    max: this._userMax
                }, this);
            return "ticks" === t.bounds && V(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
        }
        getLabelForValue(t) {
            return void 0 === t ? "0" : te(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
            const t = this.min;
            super.configure(), this._startValue = R(t), this._valueRange = R(this.max) - R(t)
        }
        getPixelForValue(t) {
            return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (R(t) - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange)
        }
    }

    function dr(t) {
        const e = t.ticks;
        if (e.display && t.display) {
            const t = bi(e.backdropPadding);
            return l(e.font && e.font.size, ae.font.size) + t.height
        }
        return 0
    }

    function hr(t, e, i, n, s) {
        return t === n || t === s ? {
            start: e - i / 2,
            end: e + i / 2
        } : t < n || t > s ? {
            start: e - i,
            end: e
        } : {
            start: e,
            end: e + i
        }
    }

    function ur(t, e, i, n, s) {
        const r = Math.abs(Math.sin(i)),
            o = Math.abs(Math.cos(i));
        let a = 0,
            l = 0;
        n.start < e.l ? (a = (e.l - n.start) / r, t.l = Math.min(t.l, e.l - a)) : n.end > e.r && (a = (n.end - e.r) / r, t.r = Math.max(t.r, e.r + a)), s.start < e.t ? (l = (e.t - s.start) / o, t.t = Math.min(t.t, e.t - l)) : s.end > e.b && (l = (s.end - e.b) / o, t.b = Math.max(t.b, e.b + l))
    }

    function pr(t, e, i) {
        const n = t.drawingArea,
            {
                extra: s,
                additionalAngle: r,
                padding: o,
                size: a
            } = i,
            l = t.getPointPosition(e, n + s + o, r),
            c = Math.round(q(Q(l.angle + O))),
            d = function(t, e, i) {
                return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
            }(l.y, a.h, c),
            h = function(t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
            }(c),
            u = function(t, e, i) {
                return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
            }(l.x, a.w, h);
        return {
            visible: !0,
            x: l.x,
            y: d,
            textAlign: h,
            left: u,
            top: d,
            right: u + a.w,
            bottom: d + a.h
        }
    }

    function fr(t, e) {
        if (!e) return !0;
        const {
            left: i,
            top: n,
            right: s,
            bottom: r
        } = t;
        return !(Pe({
            x: i,
            y: n
        }, e) || Pe({
            x: i,
            y: r
        }, e) || Pe({
            x: s,
            y: n
        }, e) || Pe({
            x: s,
            y: r
        }, e))
    }

    function gr(t, e, i) {
        const {
            left: s,
            top: r,
            right: o,
            bottom: a
        } = i, {
            backdropColor: l
        } = e;
        if (!n(l)) {
            const i = yi(e.borderRadius),
                n = bi(e.backdropPadding);
            t.fillStyle = l;
            const c = s - n.left,
                d = r - n.top,
                h = o - s + n.width,
                u = a - r + n.height;
            Object.values(i).some((t => 0 !== t)) ? (t.beginPath(), Fe(t, {
                x: c,
                y: d,
                w: h,
                h: u,
                radius: i
            }), t.fill()) : t.fillRect(c, d, h, u)
        }
    }

    function mr(t, e, i, n) {
        const {
            ctx: s
        } = t;
        if (i) s.arc(t.xCenter, t.yCenter, e, 0, P);
        else {
            let i = t.getPointPosition(0, e);
            s.moveTo(i.x, i.y);
            for (let r = 1; r < n; r++) i = t.getPointPosition(r, e), s.lineTo(i.x, i.y)
        }
    }
    class vr extends nr {
        static id = "radialLinear";
        static defaults = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            grid: {
                circular: !1
            },
            startAngle: 0,
            ticks: {
                showLabelBackdrop: !0,
                callback: ie.formatters.numeric
            },
            pointLabels: {
                backdropColor: void 0,
                backdropPadding: 2,
                display: !0,
                font: {
                    size: 10
                },
                callback: t => t,
                padding: 5,
                centerPointLabels: !1
            }
        };
        static defaultRoutes = {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color"
        };
        static descriptors = {
            angleLines: {
                _fallback: "grid"
            }
        };
        constructor(t) {
            super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
        }
        setDimensions() {
            const t = this._padding = bi(dr(this.options) / 2),
                e = this.width = this.maxWidth - t.width,
                i = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
        }
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!1);
            this.min = o(t) && !isNaN(t) ? t : 0, this.max = o(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / dr(this.options))
        }
        generateTickLabels(t) {
            nr.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                const i = h(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : ""
            })).filter(((t, e) => this.chart.getDataVisibility(e)))
        }
        fit() {
            const t = this.options;
            t.display && t.pointLabels.display ? function(t) {
                const e = {
                        l: t.left + t._padding.left,
                        r: t.right - t._padding.right,
                        t: t.top + t._padding.top,
                        b: t.bottom - t._padding.bottom
                    },
                    i = Object.assign({}, e),
                    n = [],
                    r = [],
                    o = t._pointLabels.length,
                    a = t.options.pointLabels,
                    l = a.centerPointLabels ? C / o : 0;
                for (let u = 0; u < o; u++) {
                    const o = a.setContext(t.getPointLabelContext(u));
                    r[u] = o.padding;
                    const p = t.getPointPosition(u, t.drawingArea + r[u], l),
                        f = xi(o.font),
                        g = (c = t.ctx, d = f, h = s(h = t._pointLabels[u]) ? h : [h], {
                            w: Ee(c, d.string, h),
                            h: h.length * d.lineHeight
                        });
                    n[u] = g;
                    const m = Q(t.getIndexAngle(u) + l),
                        v = Math.round(q(m));
                    ur(i, e, m, hr(v, p.x, g.w, 0, 180), hr(v, p.y, g.h, 90, 270))
                }
                var c, d, h;
                t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function(t, e, i) {
                    const n = [],
                        s = t._pointLabels.length,
                        r = t.options,
                        {
                            centerPointLabels: o,
                            display: a
                        } = r.pointLabels,
                        l = {
                            extra: dr(r) / 2,
                            additionalAngle: o ? C / s : 0
                        };
                    let c;
                    for (let r = 0; r < s; r++) {
                        l.padding = i[r], l.size = e[r];
                        const s = pr(t, r, l);
                        n.push(s), "auto" === a && (s.visible = fr(s, c), s.visible && (c = s))
                    }
                    return n
                }(t, n, r)
            }(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, e, i, n) {
            this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, n))
        }
        getIndexAngle(t) {
            return Q(t * (P / (this._pointLabels.length || 1)) + B(this.options.startAngle || 0))
        }
        getDistanceFromCenterForValue(t) {
            if (n(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }
        getValueForDistanceFromCenter(t) {
            if (n(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e
        }
        getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
                const i = e[t];
                return function(t, e, i) {
                    return Si(t, {
                        label: i,
                        index: e,
                        type: "pointLabel"
                    })
                }(this.getContext(), t, i)
            }
        }
        getPointPosition(t, e, i = 0) {
            const n = this.getIndexAngle(t) - O + i;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
                angle: n
            }
        }
        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
            const {
                left: e,
                top: i,
                right: n,
                bottom: s
            } = this._pointLabelItems[t];
            return {
                left: e,
                top: i,
                right: n,
                bottom: s
            }
        }
        drawBackground() {
            const {
                backgroundColor: t,
                grid: {
                    circular: e
                }
            } = this.options;
            if (t) {
                const i = this.ctx;
                i.save(), i.beginPath(), mr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
            }
        }
        drawGrid() {
            const t = this.ctx,
                e = this.options,
                {
                    angleLines: i,
                    grid: n,
                    border: s
                } = e,
                r = this._pointLabels.length;
            let o, a, l;
            if (e.pointLabels.display && function(t, e) {
                    const {
                        ctx: i,
                        options: {
                            pointLabels: n
                        }
                    } = t;
                    for (let s = e - 1; s >= 0; s--) {
                        const e = t._pointLabelItems[s];
                        if (!e.visible) continue;
                        const r = n.setContext(t.getPointLabelContext(s));
                        gr(i, r, e);
                        const o = xi(r.font),
                            {
                                x: a,
                                y: l,
                                textAlign: c
                            } = e;
                        Re(i, t._pointLabels[s], a, l + o.lineHeight / 2, o, {
                            color: r.color,
                            textAlign: c,
                            textBaseline: "middle"
                        })
                    }
                }(this, r), n.display && this.ticks.forEach(((t, e) => {
                    if (0 !== e || 0 === e && this.min < 0) {
                        a = this.getDistanceFromCenterForValue(t.value);
                        const i = this.getContext(e),
                            o = n.setContext(i),
                            l = s.setContext(i);
                        ! function(t, e, i, n, s) {
                            const r = t.ctx,
                                o = e.circular,
                                {
                                    color: a,
                                    lineWidth: l
                                } = e;
                            !o && !n || !a || !l || i < 0 || (r.save(), r.strokeStyle = a, r.lineWidth = l, r.setLineDash(s.dash), r.lineDashOffset = s.dashOffset, r.beginPath(), mr(t, i, o, n), r.closePath(), r.stroke(), r.restore())
                        }(this, o, a, r, l)
                    }
                })), i.display) {
                for (t.save(), o = r - 1; o >= 0; o--) {
                    const n = i.setContext(this.getPointLabelContext(o)),
                        {
                            color: s,
                            lineWidth: r
                        } = n;
                    r && s && (t.lineWidth = r, t.strokeStyle = s, t.setLineDash(n.borderDash), t.lineDashOffset = n.borderDashOffset, a = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), l = this.getPointPosition(o, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke())
                }
                t.restore()
            }
        }
        drawBorder() {}
        drawLabels() {
            const t = this.ctx,
                e = this.options,
                i = e.ticks;
            if (!i.display) return;
            const n = this.getIndexAngle(0);
            let s, r;
            t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((n, o) => {
                if (0 === o && this.min >= 0 && !e.reverse) return;
                const a = i.setContext(this.getContext(o)),
                    l = xi(a.font);
                if (s = this.getDistanceFromCenterForValue(this.ticks[o].value), a.showLabelBackdrop) {
                    t.font = l.string, r = t.measureText(n.label).width, t.fillStyle = a.backdropColor;
                    const e = bi(a.backdropPadding);
                    t.fillRect(-r / 2 - e.left, -s - l.size / 2 - e.top, r + e.width, l.size + e.height)
                }
                Re(t, n.label, 0, -s, l, {
                    color: a.color,
                    strokeColor: a.textStrokeColor,
                    strokeWidth: a.textStrokeWidth
                })
            })), t.restore()
        }
        drawTitle() {}
    }
    const yr = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        br = Object.keys(yr);

    function xr(t, e) {
        return t - e
    }

    function wr(t, e) {
        if (n(e)) return null;
        const i = t._adapter,
            {
                parser: s,
                round: r,
                isoWeekday: a
            } = t._parseOpts;
        let l = e;
        return "function" == typeof s && (l = s(l)), o(l) || (l = "string" == typeof s ? i.parse(l, s) : i.parse(l)), null === l ? null : (r && (l = "week" !== r || !H(a) && !0 !== a ? i.startOf(l, r) : i.startOf(l, "isoWeek", a)), +l)
    }

    function _r(t, e, i, n) {
        const s = br.length;
        for (let r = br.indexOf(t); r < s - 1; ++r) {
            const t = yr[br[r]],
                s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((i - e) / (s * t.size)) <= n) return br[r]
        }
        return br[s - 1]
    }

    function Sr(t, e, i) {
        if (i) {
            if (i.length) {
                const {
                    lo: n,
                    hi: s
                } = et(i, e);
                t[i[n] >= e ? i[n] : i[s]] = !0
            }
        } else t[e] = !0
    }

    function Er(t, e, i) {
        const n = [],
            s = {},
            r = e.length;
        let o, a;
        for (o = 0; o < r; ++o) a = e[o], s[a] = o, n.push({
            value: a,
            major: !1
        });
        return 0 !== r && i ? function(t, e, i, n) {
            const s = t._adapter,
                r = +s.startOf(e[0].value, n),
                o = e[e.length - 1].value;
            let a, l;
            for (a = r; a <= o; a = +s.add(a, 1, n)) l = i[a], l >= 0 && (e[l].major = !0);
            return e
        }(t, n, s, i) : n
    }
    class Tr extends Yn {
        static id = "time";
        static defaults = {
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                source: "auto",
                callback: !1,
                major: {
                    enabled: !1
                }
            }
        };
        constructor(t) {
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
        }
        init(t, e = {}) {
            const i = t.time || (t.time = {}),
                n = this._adapter = new Ts._date(t.adapters.date);
            n.init(e), y(i.displayFormats, n.formats()), this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday
            }, super.init(t), this._normalized = e.normalized
        }
        parse(t, e) {
            return void 0 === t ? null : wr(this, t)
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            }
        }
        determineDataLimits() {
            const t = this.options,
                e = this._adapter,
                i = t.time.unit || "day";
            let {
                min: n,
                max: s,
                minDefined: r,
                maxDefined: a
            } = this.getUserBounds();

            function l(t) {
                r || isNaN(t.min) || (n = Math.min(n, t.min)), a || isNaN(t.max) || (s = Math.max(s, t.max))
            }
            r && a || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), n = o(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i), s = o(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1, this.min = Math.min(n, s - 1), this.max = Math.max(n + 1, s)
        }
        _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], i = t[t.length - 1]), {
                min: e,
                max: i
            }
        }
        buildTicks() {
            const t = this.options,
                e = t.time,
                i = t.ticks,
                n = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
            "ticks" === t.bounds && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
            const s = this.min,
                r = st(n, s, this.max);
            return this._unit = e.unit || (i.autoSkip ? _r(e.minUnit, this.min, this.max, this._getLabelCapacity(s)) : function(t, e, i, n, s) {
                for (let r = br.length - 1; r >= br.indexOf(i); r--) {
                    const i = br[r];
                    if (yr[i].common && t._adapter.diff(s, n, i) >= e - 1) return i
                }
                return br[i ? br.indexOf(i) : 0]
            }(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function(t) {
                for (let e = br.indexOf(t) + 1, i = br.length; e < i; ++e)
                    if (yr[br[e]].common) return br[e]
            }(this._unit) : void 0, this.initOffsets(n), t.reverse && r.reverse(), Er(this, r, this._majorUnit)
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
        }
        initOffsets(t = []) {
            let e, i, n = 0,
                s = 0;
            this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), n = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), s = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
            const r = t.length < 3 ? .5 : .25;
            n = Z(n, 0, r), s = Z(s, 0, r), this._offsets = {
                start: n,
                end: s,
                factor: 1 / (n + 1 + s)
            }
        }
        _generate() {
            const t = this._adapter,
                e = this.min,
                i = this.max,
                n = this.options,
                s = n.time,
                r = s.unit || _r(s.minUnit, e, i, this._getLabelCapacity(e)),
                o = l(n.ticks.stepSize, 1),
                a = "week" === r && s.isoWeekday,
                c = H(a) || !0 === a,
                d = {};
            let h, u, p = e;
            if (c && (p = +t.startOf(p, "isoWeek", a)), p = +t.startOf(p, c ? "day" : r), t.diff(i, e, r) > 1e5 * o) throw new Error(e + " and " + i + " are too far apart with stepSize of " + o + " " + r);
            const f = "data" === n.ticks.source && this.getDataTimestamps();
            for (h = p, u = 0; h < i; h = +t.add(h, o, r), u++) Sr(d, h, f);
            return h !== i && "ticks" !== n.bounds && 1 !== u || Sr(d, h, f), Object.keys(d).sort(xr).map((t => +t))
        }
        getLabelForValue(t) {
            const e = this._adapter,
                i = this.options.time;
            return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
        }
        format(t, e) {
            const i = this.options.time.displayFormats,
                n = this._unit,
                s = e || i[n];
            return this._adapter.format(t, s)
        }
        _tickFormatFunction(t, e, i, n) {
            const s = this.options,
                r = s.ticks.callback;
            if (r) return h(r, [t, e, i], this);
            const o = s.time.displayFormats,
                a = this._unit,
                l = this._majorUnit,
                c = a && o[a],
                d = l && o[l],
                u = i[e],
                p = l && d && u && u.major;
            return this._adapter.format(t, n || (p ? d : c))
        }
        generateTickLabels(t) {
            let e, i, n;
            for (e = 0, i = t.length; e < i; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
        }
        getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
            const e = this._offsets,
                i = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + i) * e.factor)
        }
        getValueForPixel(t) {
            const e = this._offsets,
                i = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + i * (this.max - this.min)
        }
        _getLabelSize(t) {
            const e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = B(this.isHorizontal() ? e.maxRotation : e.minRotation),
                s = Math.cos(n),
                r = Math.sin(n),
                o = this._resolveTickFontOptions(0).size;
            return {
                w: i * s + o * r,
                h: i * r + o * s
            }
        }
        _getLabelCapacity(t) {
            const e = this.options.time,
                i = e.displayFormats,
                n = i[e.unit] || i.millisecond,
                s = this._tickFormatFunction(t, 0, Er(this, [t], this._majorUnit), n),
                r = this._getLabelSize(s),
                o = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
            return o > 0 ? o : 1
        }
        getDataTimestamps() {
            let t, e, i = this._cache.data || [];
            if (i.length) return i;
            const n = this.getMatchingVisibleMetas();
            if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
            for (t = 0, e = n.length; t < e; ++t) i = i.concat(n[t].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(i)
        }
        getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, i;
            if (t.length) return t;
            const n = this.getLabels();
            for (e = 0, i = n.length; e < i; ++e) t.push(wr(this, n[e]));
            return this._cache.labels = this._normalized ? t : this.normalize(t)
        }
        normalize(t) {
            return lt(t.sort(xr))
        }
    }

    function Mr(t, e, i) {
        let n, s, r, o, a = 0,
            l = t.length - 1;
        i ? (e >= t[a].pos && e <= t[l].pos && ({
            lo: a,
            hi: l
        } = it(t, "pos", e)), ({
            pos: n,
            time: r
        } = t[a]), ({
            pos: s,
            time: o
        } = t[l])) : (e >= t[a].time && e <= t[l].time && ({
            lo: a,
            hi: l
        } = it(t, "time", e)), ({
            time: n,
            pos: r
        } = t[a]), ({
            time: s,
            pos: o
        } = t[l]));
        const c = s - n;
        return c ? r + (o - r) * (e - n) / c : r
    }
    var kr = Object.freeze({
        __proto__: null,
        CategoryScale: class extends Yn {
            static id = "category";
            static defaults = {
                ticks: {
                    callback: er
                }
            };
            constructor(t) {
                super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
            }
            init(t) {
                const e = this._addedLabels;
                if (e.length) {
                    const t = this.getLabels();
                    for (const {
                            index: i,
                            label: n
                        } of e) t[i] === n && t.splice(i, 1);
                    this._addedLabels = []
                }
                super.init(t)
            }
            parse(t, e) {
                if (n(t)) return null;
                const i = this.getLabels();
                return ((t, e) => null === t ? null : Z(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : function(t, e, i, n) {
                    const s = t.indexOf(e);
                    return -1 === s ? ((t, e, i, n) => ("string" == typeof e ? (i = t.push(e) - 1, n.unshift({
                        index: i,
                        label: e
                    })) : isNaN(e) && (i = null), i))(t, e, i, n) : s !== t.lastIndexOf(e) ? i : s
                }(i, t, l(e, t), this._addedLabels), i.length - 1)
            }
            determineDataLimits() {
                const {
                    minDefined: t,
                    maxDefined: e
                } = this.getUserBounds();
                let {
                    min: i,
                    max: n
                } = this.getMinMax(!0);
                "ticks" === this.options.bounds && (t || (i = 0), e || (n = this.getLabels().length - 1)), this.min = i, this.max = n
            }
            buildTicks() {
                const t = this.min,
                    e = this.max,
                    i = this.options.offset,
                    n = [];
                let s = this.getLabels();
                s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1), this._valueRange = Math.max(s.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                for (let i = t; i <= e; i++) n.push({
                    value: i
                });
                return n
            }
            getLabelForValue(t) {
                return er.call(this, t)
            }
            configure() {
                super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }
            getPixelForValue(t) {
                return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }
            getBasePixel() {
                return this.bottom
            }
        },
        LinearScale: sr,
        LogarithmicScale: cr,
        RadialLinearScale: vr,
        TimeScale: Tr,
        TimeSeriesScale: class extends Tr {
            static id = "timeseries";
            static defaults = Tr.defaults;
            constructor(t) {
                super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
            }
            initOffsets() {
                const t = this._getTimestampsForTable(),
                    e = this._table = this.buildLookupTable(t);
                this._minPos = Mr(e, this.min), this._tableRange = Mr(e, this.max) - this._minPos, super.initOffsets(t)
            }
            buildLookupTable(t) {
                const {
                    min: e,
                    max: i
                } = this, n = [], s = [];
                let r, o, a, l, c;
                for (r = 0, o = t.length; r < o; ++r) l = t[r], l >= e && l <= i && n.push(l);
                if (n.length < 2) return [{
                    time: e,
                    pos: 0
                }, {
                    time: i,
                    pos: 1
                }];
                for (r = 0, o = n.length; r < o; ++r) c = n[r + 1], a = n[r - 1], l = n[r], Math.round((c + a) / 2) !== l && s.push({
                    time: l,
                    pos: r / (o - 1)
                });
                return s
            }
            _generate() {
                const t = this.min,
                    e = this.max;
                let i = super.getDataTimestamps();
                return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort(((t, e) => t - e))
            }
            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length) return t;
                const e = this.getDataTimestamps(),
                    i = this.getLabelTimestamps();
                return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t
            }
            getDecimalForValue(t) {
                return (Mr(this._table, t) - this._minPos) / this._tableRange
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    i = this.getDecimalForPixel(t) / e.factor - e.end;
                return Mr(this._table, i * this._tableRange + this._minPos, !0)
            }
        }
    });
    const Cr = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        Pr = Cr.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)")));

    function Dr(t) {
        return Cr[t % Cr.length]
    }

    function Lr(t) {
        return Pr[t % Pr.length]
    }

    function Ar(t) {
        let e;
        for (e in t)
            if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1
    }
    var Or = {
        id: "colors",
        defaults: {
            enabled: !0,
            forceOverride: !1
        },
        beforeLayout(t, e, i) {
            if (!i.enabled) return;
            const {
                data: {
                    datasets: n
                },
                options: s
            } = t.config, {
                elements: r
            } = s;
            if (!i.forceOverride && (Ar(n) || (o = s) && (o.borderColor || o.backgroundColor) || r && Ar(r))) return;
            var o;
            const a = function(t) {
                let e = 0;
                return (i, n) => {
                    const s = t.getDatasetMeta(n).controller;
                    s instanceof Is ? e = function(t, e) {
                        return t.backgroundColor = t.data.map((() => Dr(e++))), e
                    }(i, e) : s instanceof zs ? e = function(t, e) {
                        return t.backgroundColor = t.data.map((() => Lr(e++))), e
                    }(i, e) : s && (e = function(t, e) {
                        return t.borderColor = Dr(e), t.backgroundColor = Lr(e), ++e
                    }(i, e))
                }
            }(t);
            n.forEach(a)
        }
    };

    function Ir(t) {
        if (t._decimated) {
            const e = t._data;
            delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: e
            })
        }
    }

    function zr(t) {
        t.data.datasets.forEach((t => {
            Ir(t)
        }))
    }
    var Rr = {
        id: "decimation",
        defaults: {
            algorithm: "min-max",
            enabled: !1
        },
        beforeElementsUpdate: (t, e, i) => {
            if (!i.enabled) return void zr(t);
            const s = t.width;
            t.data.datasets.forEach(((e, r) => {
                const {
                    _data: o,
                    indexAxis: a
                } = e, l = t.getDatasetMeta(r), c = o || e.data;
                if ("y" === wi([a, t.options.indexAxis])) return;
                if (!l.controller.supportsDecimation) return;
                const d = t.scales[l.xAxisID];
                if ("linear" !== d.type && "time" !== d.type) return;
                if (t.options.parsing) return;
                let h, {
                    start: u,
                    count: p
                } = function(t, e) {
                    const i = e.length;
                    let n, s = 0;
                    const {
                        iScale: r
                    } = t, {
                        min: o,
                        max: a,
                        minDefined: l,
                        maxDefined: c
                    } = r.getUserBounds();
                    return l && (s = Z(it(e, r.axis, o).lo, 0, i - 1)), n = c ? Z(it(e, r.axis, a).hi + 1, s, i) - s : i - s, {
                        start: s,
                        count: n
                    }
                }(l, c);
                if (p <= (i.threshold || 4 * s)) Ir(e);
                else {
                    switch (n(o) && (e._data = c, delete e.data, Object.defineProperty(e, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return this._decimated
                        },
                        set: function(t) {
                            this._data = t
                        }
                    })), i.algorithm) {
                        case "lttb":
                            h = function(t, e, i, n, s) {
                                const r = s.samples || n;
                                if (r >= i) return t.slice(e, e + i);
                                const o = [],
                                    a = (i - 2) / (r - 2);
                                let l = 0;
                                const c = e + i - 1;
                                let d, h, u, p, f, g = e;
                                for (o[l++] = t[g], d = 0; d < r - 2; d++) {
                                    let n, s = 0,
                                        r = 0;
                                    const c = Math.floor((d + 1) * a) + 1 + e,
                                        m = Math.min(Math.floor((d + 2) * a) + 1, i) + e,
                                        v = m - c;
                                    for (n = c; n < m; n++) s += t[n].x, r += t[n].y;
                                    s /= v, r /= v;
                                    const y = Math.floor(d * a) + 1 + e,
                                        b = Math.min(Math.floor((d + 1) * a) + 1, i) + e,
                                        {
                                            x: x,
                                            y: w
                                        } = t[g];
                                    for (u = p = -1, n = y; n < b; n++) p = .5 * Math.abs((x - s) * (t[n].y - w) - (x - t[n].x) * (r - w)), p > u && (u = p, h = t[n], f = n);
                                    o[l++] = h, g = f
                                }
                                return o[l++] = t[c], o
                            }(c, u, p, s, i);
                            break;
                        case "min-max":
                            h = function(t, e, i, s) {
                                let r, o, a, l, c, d, h, u, p, f, g = 0,
                                    m = 0;
                                const v = [],
                                    y = e + i - 1,
                                    b = t[e].x,
                                    x = t[y].x - b;
                                for (r = e; r < e + i; ++r) {
                                    o = t[r], a = (o.x - b) / x * s, l = o.y;
                                    const e = 0 | a;
                                    if (e === c) l < p ? (p = l, d = r) : l > f && (f = l, h = r), g = (m * g + o.x) / ++m;
                                    else {
                                        const i = r - 1;
                                        if (!n(d) && !n(h)) {
                                            const e = Math.min(d, h),
                                                n = Math.max(d, h);
                                            e !== u && e !== i && v.push({ ...t[e],
                                                x: g
                                            }), n !== u && n !== i && v.push({ ...t[n],
                                                x: g
                                            })
                                        }
                                        r > 0 && i !== u && v.push(t[i]), v.push(o), c = e, m = 0, p = f = l, d = h = u = r
                                    }
                                }
                                return v
                            }(c, u, p, s);
                            break;
                        default:
                            throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
                    }
                    e._decimated = h
                }
            }))
        },
        destroy(t) {
            zr(t)
        }
    };

    function Fr(t, e, i, n) {
        if (n) return;
        let s = e[t],
            r = i[t];
        return "angle" === t && (s = Q(s), r = Q(r)), {
            property: t,
            start: s,
            end: r
        }
    }

    function $r(t, e, i) {
        for (; e > t; e--) {
            const t = i[e];
            if (!isNaN(t.x) && !isNaN(t.y)) break
        }
        return e
    }

    function jr(t, e, i, n) {
        return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
    }

    function Nr(t, e) {
        let i = [],
            n = !1;
        return s(t) ? (n = !0, i = t) : i = function(t, e) {
            const {
                x: i = null,
                y: n = null
            } = t || {}, s = e.points, r = [];
            return e.segments.forEach((({
                start: t,
                end: e
            }) => {
                e = $r(t, e, s);
                const o = s[t],
                    a = s[e];
                null !== n ? (r.push({
                    x: o.x,
                    y: n
                }), r.push({
                    x: a.x,
                    y: n
                })) : null !== i && (r.push({
                    x: i,
                    y: o.y
                }), r.push({
                    x: i,
                    y: a.y
                }))
            })), r
        }(t, e), i.length ? new Ys({
            points: i,
            options: {
                tension: 0
            },
            _loop: n,
            _fullLoop: n
        }) : null
    }

    function Hr(t) {
        return t && !1 !== t.fill
    }

    function Wr(t, e, i) {
        let n = t[e].fill;
        const s = [e];
        let r;
        if (!i) return n;
        for (; !1 !== n && -1 === s.indexOf(n);) {
            if (!o(n)) return n;
            if (r = t[n], !r) return !1;
            if (r.visible) return n;
            s.push(n), n = r.fill
        }
        return !1
    }

    function Vr(t, e, i) {
        const n = function(t) {
            const e = t.options,
                i = e.fill;
            let n = l(i && i.target, i);
            return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n)
        }(t);
        if (r(n)) return !isNaN(n.value) && n;
        let s = parseFloat(n);
        return o(s) && Math.floor(s) === s ? function(t, e, i, n) {
            return "-" !== t && "+" !== t || (i = e + i), !(i === e || i < 0 || i >= n) && i
        }(n[0], e, s, i) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
    }

    function Br(t, e, i) {
        const n = [];
        for (let s = 0; s < i.length; s++) {
            const r = i[s],
                {
                    first: o,
                    last: a,
                    point: l
                } = qr(r, e, "x");
            if (!(!l || o && a))
                if (o) n.unshift(l);
                else if (t.push(l), !a) break
        }
        t.push(...n)
    }

    function qr(t, e, i) {
        const n = t.interpolate(e, i);
        if (!n) return {};
        const s = n[i],
            r = t.segments,
            o = t.points;
        let a = !1,
            l = !1;
        for (let t = 0; t < r.length; t++) {
            const e = r[t],
                n = o[e.start][i],
                c = o[e.end][i];
            if (tt(s, n, c)) {
                a = s === n, l = s === c;
                break
            }
        }
        return {
            first: a,
            last: l,
            point: n
        }
    }
    class Yr {
        constructor(t) {
            this.x = t.x, this.y = t.y, this.radius = t.radius
        }
        pathSegment(t, e, i) {
            const {
                x: n,
                y: s,
                radius: r
            } = this;
            return e = e || {
                start: 0,
                end: P
            }, t.arc(n, s, r, e.end, e.start, !0), !i.bounds
        }
        interpolate(t) {
            const {
                x: e,
                y: i,
                radius: n
            } = this, s = t.angle;
            return {
                x: e + Math.cos(s) * n,
                y: i + Math.sin(s) * n,
                angle: s
            }
        }
    }

    function Gr(t) {
        const {
            chart: e,
            fill: i,
            line: n
        } = t;
        if (o(i)) return function(t, e) {
            const i = t.getDatasetMeta(e);
            return i && t.isDatasetVisible(e) ? i.dataset : null
        }(e, i);
        if ("stack" === i) return function(t) {
            const {
                scale: e,
                index: i,
                line: n
            } = t, s = [], r = n.segments, o = n.points, a = function(t, e) {
                const i = [],
                    n = t.getMatchingVisibleMetas("line");
                for (let t = 0; t < n.length; t++) {
                    const s = n[t];
                    if (s.index === e) break;
                    s.hidden || i.unshift(s.dataset)
                }
                return i
            }(e, i);
            a.push(Nr({
                x: null,
                y: e.bottom
            }, n));
            for (let t = 0; t < r.length; t++) {
                const e = r[t];
                for (let t = e.start; t <= e.end; t++) Br(s, o[t], a)
            }
            return new Ys({
                points: s,
                options: {}
            })
        }(t);
        if ("shape" === i) return !0;
        const s = function(t) {
            return (t.scale || {}).getPointPositionForValue ? function(t) {
                const {
                    scale: e,
                    fill: i
                } = t, n = e.options, s = e.getLabels().length, o = n.reverse ? e.max : e.min, a = function(t, e, i) {
                    let n;
                    return n = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : r(t) ? t.value : e.getBaseValue(), n
                }(i, e, o), l = [];
                if (n.grid.circular) {
                    const t = e.getPointPositionForValue(0, o);
                    return new Yr({
                        x: t.x,
                        y: t.y,
                        radius: e.getDistanceFromCenterForValue(a)
                    })
                }
                for (let t = 0; t < s; ++t) l.push(e.getPointPositionForValue(t, a));
                return l
            }(t) : function(t) {
                const {
                    scale: e = {},
                    fill: i
                } = t, n = function(t, e) {
                    let i = null;
                    return "start" === t ? i = e.bottom : "end" === t ? i = e.top : r(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i
                }(i, e);
                if (o(n)) {
                    const t = e.isHorizontal();
                    return {
                        x: t ? n : null,
                        y: t ? null : n
                    }
                }
                return null
            }(t)
        }(t);
        return s instanceof Yr ? s : Nr(s, n)
    }

    function Xr(t, e, i) {
        const n = Gr(e),
            {
                line: s,
                scale: r,
                axis: o
            } = e,
            a = s.options,
            l = a.fill,
            c = a.backgroundColor,
            {
                above: d = c,
                below: h = c
            } = l || {};
        n && s.points.length && (De(t, i), function(t, e) {
            const {
                line: i,
                target: n,
                above: s,
                below: r,
                area: o,
                scale: a
            } = e, l = i._loop ? "angle" : e.axis;
            t.save(), "x" === l && r !== s && (Ur(t, n, o.top), Qr(t, {
                line: i,
                target: n,
                color: s,
                scale: a,
                property: l
            }), t.restore(), t.save(), Ur(t, n, o.bottom)), Qr(t, {
                line: i,
                target: n,
                color: r,
                scale: a,
                property: l
            }), t.restore()
        }(t, {
            line: s,
            target: n,
            above: d,
            below: h,
            area: i,
            scale: r,
            axis: o
        }), Le(t))
    }

    function Ur(t, e, i) {
        const {
            segments: n,
            points: s
        } = e;
        let r = !0,
            o = !1;
        t.beginPath();
        for (const a of n) {
            const {
                start: n,
                end: l
            } = a, c = s[n], d = s[$r(n, l, s)];
            r ? (t.moveTo(c.x, c.y), r = !1) : (t.lineTo(c.x, i), t.lineTo(c.x, c.y)), o = !!e.pathSegment(t, a, {
                move: o
            }), o ? t.closePath() : t.lineTo(d.x, i)
        }
        t.lineTo(e.first().x, i), t.closePath(), t.clip()
    }

    function Qr(t, e) {
        const {
            line: i,
            target: n,
            property: s,
            color: r,
            scale: o
        } = e, a = function(t, e, i) {
            const n = t.segments,
                s = t.points,
                r = e.points,
                o = [];
            for (const t of n) {
                let {
                    start: n,
                    end: a
                } = t;
                a = $r(n, a, s);
                const l = Fr(i, s[n], s[a], t.loop);
                if (!e.segments) {
                    o.push({
                        source: t,
                        target: l,
                        start: s[n],
                        end: s[a]
                    });
                    continue
                }
                const c = Di(e, l);
                for (const e of c) {
                    const n = Fr(i, r[e.start], r[e.end], e.loop),
                        a = Pi(t, s, n);
                    for (const t of a) o.push({
                        source: t,
                        target: e,
                        start: {
                            [i]: jr(l, n, "start", Math.max)
                        },
                        end: {
                            [i]: jr(l, n, "end", Math.min)
                        }
                    })
                }
            }
            return o
        }(i, n, s);
        for (const {
                source: e,
                target: l,
                start: c,
                end: d
            } of a) {
            const {
                style: {
                    backgroundColor: a = r
                } = {}
            } = e, h = !0 !== n;
            t.save(), t.fillStyle = a, Kr(t, o, h && Fr(s, c, d)), t.beginPath();
            const u = !!i.pathSegment(t, e);
            let p;
            if (h) {
                u ? t.closePath() : Zr(t, n, d, s);
                const e = !!n.pathSegment(t, l, {
                    move: u,
                    reverse: !0
                });
                p = u && e, p || Zr(t, n, c, s)
            }
            t.closePath(), t.fill(p ? "evenodd" : "nonzero"), t.restore()
        }
    }

    function Kr(t, e, i) {
        const {
            top: n,
            bottom: s
        } = e.chart.chartArea, {
            property: r,
            start: o,
            end: a
        } = i || {};
        "x" === r && (t.beginPath(), t.rect(o, n, a - o, s - n), t.clip())
    }

    function Zr(t, e, i, n) {
        const s = e.interpolate(i, n);
        s && t.lineTo(s.x, s.y)
    }
    var Jr = {
        id: "filler",
        afterDatasetsUpdate(t, e, i) {
            const n = (t.data.datasets || []).length,
                s = [];
            let r, o, a, l;
            for (o = 0; o < n; ++o) r = t.getDatasetMeta(o), a = r.dataset, l = null, a && a.options && a instanceof Ys && (l = {
                visible: t.isDatasetVisible(o),
                index: o,
                fill: Vr(a, o, n),
                chart: t,
                axis: r.controller.options.indexAxis,
                scale: r.vScale,
                line: a
            }), r.$filler = l, s.push(l);
            for (o = 0; o < n; ++o) l = s[o], l && !1 !== l.fill && (l.fill = Wr(s, o, i.propagate))
        },
        beforeDraw(t, e, i) {
            const n = "beforeDraw" === i.drawTime,
                s = t.getSortedVisibleDatasetMetas(),
                r = t.chartArea;
            for (let e = s.length - 1; e >= 0; --e) {
                const i = s[e].$filler;
                i && (i.line.updateControlPoints(r, i.axis), n && i.fill && Xr(t.ctx, i, r))
            }
        },
        beforeDatasetsDraw(t, e, i) {
            if ("beforeDatasetsDraw" !== i.drawTime) return;
            const n = t.getSortedVisibleDatasetMetas();
            for (let e = n.length - 1; e >= 0; --e) {
                const i = n[e].$filler;
                Hr(i) && Xr(t.ctx, i, t.chartArea)
            }
        },
        beforeDatasetDraw(t, e, i) {
            const n = e.meta.$filler;
            Hr(n) && "beforeDatasetDraw" === i.drawTime && Xr(t.ctx, n, t.chartArea)
        },
        defaults: {
            propagate: !0,
            drawTime: "beforeDatasetDraw"
        }
    };
    const to = (t, e) => {
        let {
            boxHeight: i = e,
            boxWidth: n = e
        } = t;
        return t.usePointStyle && (i = Math.min(i, e), n = t.pointStyleWidth || Math.min(n, e)), {
            boxWidth: n,
            boxHeight: i,
            itemHeight: Math.max(e, i)
        }
    };
    class eo extends Rn {
        constructor(t) {
            super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e, i) {
            this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit()
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
        }
        buildLabels() {
            const t = this.options.labels || {};
            let e = h(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e
        }
        fit() {
            const {
                options: t,
                ctx: e
            } = this;
            if (!t.display) return void(this.width = this.height = 0);
            const i = t.labels,
                n = xi(i.font),
                s = n.size,
                r = this._computeTitleHeight(),
                {
                    boxWidth: o,
                    itemHeight: a
                } = to(i, s);
            let l, c;
            e.font = n.string, this.isHorizontal() ? (l = this.maxWidth, c = this._fitRows(r, s, o, a) + 10) : (c = this.maxHeight, l = this._fitCols(r, n, o, a) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(c, t.maxHeight || this.maxHeight)
        }
        _fitRows(t, e, i, n) {
            const {
                ctx: s,
                maxWidth: r,
                options: {
                    labels: {
                        padding: o
                    }
                }
            } = this, a = this.legendHitBoxes = [], l = this.lineWidths = [0], c = n + o;
            let d = t;
            s.textAlign = "left", s.textBaseline = "middle";
            let h = -1,
                u = -c;
            return this.legendItems.forEach(((t, p) => {
                const f = i + e / 2 + s.measureText(t.text).width;
                (0 === p || l[l.length - 1] + f + 2 * o > r) && (d += c, l[l.length - (p > 0 ? 0 : 1)] = 0, u += c, h++), a[p] = {
                    left: 0,
                    top: u,
                    row: h,
                    width: f,
                    height: n
                }, l[l.length - 1] += f + o
            })), d
        }
        _fitCols(t, e, i, n) {
            const {
                ctx: s,
                maxHeight: r,
                options: {
                    labels: {
                        padding: o
                    }
                }
            } = this, a = this.legendHitBoxes = [], l = this.columnSizes = [], c = r - t;
            let d = o,
                h = 0,
                u = 0,
                p = 0,
                f = 0;
            return this.legendItems.forEach(((t, r) => {
                const {
                    itemWidth: g,
                    itemHeight: m
                } = function(t, e, i, n, s) {
                    const r = function(t, e, i, n) {
                            let s = t.text;
                            return s && "string" != typeof s && (s = s.reduce(((t, e) => t.length > e.length ? t : e))), e + i.size / 2 + n.measureText(s).width
                        }(n, t, e, i),
                        o = function(t, e, i) {
                            let n = t;
                            return "string" != typeof e.text && (n = io(e, i)), n
                        }(s, n, e.lineHeight);
                    return {
                        itemWidth: r,
                        itemHeight: o
                    }
                }(i, e, s, t, n);
                r > 0 && u + m + 2 * o > c && (d += h + o, l.push({
                    width: h,
                    height: u
                }), p += h + o, f++, h = u = 0), a[r] = {
                    left: p,
                    top: u,
                    col: f,
                    width: g,
                    height: m
                }, h = Math.max(h, g), u += m + o
            })), d += h, l.push({
                width: h,
                height: u
            }), d
        }
        adjustHitBoxes() {
            if (!this.options.display) return;
            const t = this._computeTitleHeight(),
                {
                    legendHitBoxes: e,
                    options: {
                        align: i,
                        labels: {
                            padding: n
                        },
                        rtl: s
                    }
                } = this,
                r = Ei(s, this.left, this.width);
            if (this.isHorizontal()) {
                let s = 0,
                    o = pt(i, this.left + n, this.right - this.lineWidths[s]);
                for (const a of e) s !== a.row && (s = a.row, o = pt(i, this.left + n, this.right - this.lineWidths[s])), a.top += this.top + t + n, a.left = r.leftForLtr(r.x(o), a.width), o += a.width + n
            } else {
                let s = 0,
                    o = pt(i, this.top + t + n, this.bottom - this.columnSizes[s].height);
                for (const a of e) a.col !== s && (s = a.col, o = pt(i, this.top + t + n, this.bottom - this.columnSizes[s].height)), a.top = o, a.left += this.left + n, a.left = r.leftForLtr(r.x(a.left), a.width), o += a.height + n
            }
        }
        isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position
        }
        draw() {
            if (this.options.display) {
                const t = this.ctx;
                De(t, this), this._draw(), Le(t)
            }
        }
        _draw() {
            const {
                options: t,
                columnSizes: e,
                lineWidths: i,
                ctx: n
            } = this, {
                align: s,
                labels: r
            } = t, o = ae.color, a = Ei(t.rtl, this.left, this.width), c = xi(r.font), {
                padding: d
            } = r, h = c.size, u = h / 2;
            let p;
            this.drawTitle(), n.textAlign = a.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
            const {
                boxWidth: f,
                boxHeight: g,
                itemHeight: m
            } = to(r, h), v = this.isHorizontal(), y = this._computeTitleHeight();
            p = v ? {
                x: pt(s, this.left + d, this.right - i[0]),
                y: this.top + d + y,
                line: 0
            } : {
                x: this.left + d,
                y: pt(s, this.top + y + d, this.bottom - e[0].height),
                line: 0
            }, Ti(this.ctx, t.textDirection);
            const b = m + d;
            this.legendItems.forEach(((x, w) => {
                n.strokeStyle = x.fontColor, n.fillStyle = x.fontColor;
                const _ = n.measureText(x.text).width,
                    S = a.textAlign(x.textAlign || (x.textAlign = r.textAlign)),
                    E = f + u + _;
                let T = p.x,
                    M = p.y;
                if (a.setWidth(this.width), v ? w > 0 && T + E + d > this.right && (M = p.y += b, p.line++, T = p.x = pt(s, this.left + d, this.right - i[p.line])) : w > 0 && M + b > this.bottom && (T = p.x = T + e[p.line].width + d, p.line++, M = p.y = pt(s, this.top + y + d, this.bottom - e[p.line].height)), function(t, e, i) {
                        if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
                        n.save();
                        const s = l(i.lineWidth, 1);
                        if (n.fillStyle = l(i.fillStyle, o), n.lineCap = l(i.lineCap, "butt"), n.lineDashOffset = l(i.lineDashOffset, 0), n.lineJoin = l(i.lineJoin, "miter"), n.lineWidth = s, n.strokeStyle = l(i.strokeStyle, o), n.setLineDash(l(i.lineDash, [])), r.usePointStyle) {
                            const o = {
                                    radius: g * Math.SQRT2 / 2,
                                    pointStyle: i.pointStyle,
                                    rotation: i.rotation,
                                    borderWidth: s
                                },
                                l = a.xPlus(t, f / 2);
                            Ce(n, o, l, e + u, r.pointStyleWidth && f)
                        } else {
                            const r = e + Math.max((h - g) / 2, 0),
                                o = a.leftForLtr(t, f),
                                l = yi(i.borderRadius);
                            n.beginPath(), Object.values(l).some((t => 0 !== t)) ? Fe(n, {
                                x: o,
                                y: r,
                                w: f,
                                h: g,
                                radius: l
                            }) : n.rect(o, r, f, g), n.fill(), 0 !== s && n.stroke()
                        }
                        n.restore()
                    }(a.x(T), M, x), T = ft(S, T + f + u, v ? T + E : this.right, t.rtl), function(t, e, i) {
                        Re(n, i.text, t, e + m / 2, c, {
                            strikethrough: i.hidden,
                            textAlign: a.textAlign(i.textAlign)
                        })
                    }(a.x(T), M, x), v) p.x += E + d;
                else if ("string" != typeof x.text) {
                    const t = c.lineHeight;
                    p.y += io(x, t) + d
                } else p.y += b
            })), Mi(this.ctx, t.textDirection)
        }
        drawTitle() {
            const t = this.options,
                e = t.title,
                i = xi(e.font),
                n = bi(e.padding);
            if (!e.display) return;
            const s = Ei(t.rtl, this.left, this.width),
                r = this.ctx,
                o = e.position,
                a = i.size / 2,
                l = n.top + a;
            let c, d = this.left,
                h = this.width;
            if (this.isHorizontal()) h = Math.max(...this.lineWidths), c = this.top + l, d = pt(t.align, d, this.right - h);
            else {
                const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                c = l + pt(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
            }
            const u = pt(o, d, d + h);
            r.textAlign = s.textAlign(ut(o)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, Re(r, e.text, u, c, i)
        }
        _computeTitleHeight() {
            const t = this.options.title,
                e = xi(t.font),
                i = bi(t.padding);
            return t.display ? e.lineHeight + i.height : 0
        }
        _getLegendItemAt(t, e) {
            let i, n, s;
            if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom))
                for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
                    if (n = s[i], tt(t, n.left, n.left + n.width) && tt(e, n.top, n.top + n.height)) return this.legendItems[i];
            return null
        }
        handleEvent(t) {
            const e = this.options;
            if (! function(t, e) {
                    return !("mousemove" !== t && "mouseout" !== t || !e.onHover && !e.onLeave) || !(!e.onClick || "click" !== t && "mouseup" !== t)
                }(t.type, e)) return;
            const i = this._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type || "mouseout" === t.type) {
                const r = this._hoveredItem,
                    o = (s = i, null !== (n = r) && null !== s && n.datasetIndex === s.datasetIndex && n.index === s.index);
                r && !o && h(e.onLeave, [t, r, this], this), this._hoveredItem = i, i && !o && h(e.onHover, [t, i, this], this)
            } else i && h(e.onClick, [t, i, this], this);
            var n, s
        }
    }

    function io(t, e) {
        return e * (t.text ? t.text.length : 0)
    }
    var no = {
        id: "legend",
        _element: eo,
        start(t, e, i) {
            const n = t.legend = new eo({
                ctx: t.ctx,
                options: i,
                chart: t
            });
            Ji.configure(t, n, i), Ji.addBox(t, n)
        },
        stop(t) {
            Ji.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, e, i) {
            const n = t.legend;
            Ji.configure(t, n, i), n.options = i
        },
        afterUpdate(t) {
            const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes()
        },
        afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event)
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, i) {
                const n = e.datasetIndex,
                    s = i.chart;
                s.isDatasetVisible(n) ? (s.hide(n), e.hidden = !0) : (s.show(n), e.hidden = !1)
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: t => t.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(t) {
                    const e = t.data.datasets,
                        {
                            labels: {
                                usePointStyle: i,
                                pointStyle: n,
                                textAlign: s,
                                color: r,
                                useBorderRadius: o,
                                borderRadius: a
                            }
                        } = t.legend.options;
                    return t._getSortedDatasetMetas().map((t => {
                        const l = t.controller.getStyle(i ? 0 : void 0),
                            c = bi(l.borderWidth);
                        return {
                            text: e[t.index].label,
                            fillStyle: l.backgroundColor,
                            fontColor: r,
                            hidden: !t.visible,
                            lineCap: l.borderCapStyle,
                            lineDash: l.borderDash,
                            lineDashOffset: l.borderDashOffset,
                            lineJoin: l.borderJoinStyle,
                            lineWidth: (c.width + c.height) / 4,
                            strokeStyle: l.borderColor,
                            pointStyle: n || l.pointStyle,
                            rotation: l.rotation,
                            textAlign: s || l.textAlign,
                            borderRadius: o && (a || l.borderRadius),
                            datasetIndex: t.index
                        }
                    }), this)
                }
            },
            title: {
                color: t => t.chart.options.color,
                display: !1,
                position: "center",
                text: ""
            }
        },
        descriptors: {
            _scriptable: t => !t.startsWith("on"),
            labels: {
                _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
            }
        }
    };
    class so extends Rn {
        constructor(t) {
            super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e) {
            const i = this.options;
            if (this.left = 0, this.top = 0, !i.display) return void(this.width = this.height = this.right = this.bottom = 0);
            this.width = this.right = t, this.height = this.bottom = e;
            const n = s(i.text) ? i.text.length : 1;
            this._padding = bi(i.padding);
            const r = n * xi(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? this.height = r : this.width = r
        }
        isHorizontal() {
            const t = this.options.position;
            return "top" === t || "bottom" === t
        }
        _drawArgs(t) {
            const {
                top: e,
                left: i,
                bottom: n,
                right: s,
                options: r
            } = this, o = r.align;
            let a, l, c, d = 0;
            return this.isHorizontal() ? (l = pt(o, i, s), c = e + t, a = s - i) : ("left" === r.position ? (l = i + t, c = pt(o, n, e), d = -.5 * C) : (l = s - t, c = pt(o, e, n), d = .5 * C), a = n - e), {
                titleX: l,
                titleY: c,
                maxWidth: a,
                rotation: d
            }
        }
        draw() {
            const t = this.ctx,
                e = this.options;
            if (!e.display) return;
            const i = xi(e.font),
                n = i.lineHeight / 2 + this._padding.top,
                {
                    titleX: s,
                    titleY: r,
                    maxWidth: o,
                    rotation: a
                } = this._drawArgs(n);
            Re(t, e.text, 0, 0, i, {
                color: e.color,
                maxWidth: o,
                rotation: a,
                textAlign: ut(e.align),
                textBaseline: "middle",
                translation: [s, r]
            })
        }
    }
    var ro = {
        id: "title",
        _element: so,
        start(t, e, i) {
            ! function(t, e) {
                const i = new so({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                Ji.configure(t, i, e), Ji.addBox(t, i), t.titleBlock = i
            }(t, i)
        },
        stop(t) {
            const e = t.titleBlock;
            Ji.removeBox(t, e), delete t.titleBlock
        },
        beforeUpdate(t, e, i) {
            const n = t.titleBlock;
            Ji.configure(t, n, i), n.options = i
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                weight: "bold"
            },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const oo = new WeakMap;
    var ao = {
        id: "subtitle",
        start(t, e, i) {
            const n = new so({
                ctx: t.ctx,
                options: i,
                chart: t
            });
            Ji.configure(t, n, i), Ji.addBox(t, n), oo.set(t, n)
        },
        stop(t) {
            Ji.removeBox(t, oo.get(t)), oo.delete(t)
        },
        beforeUpdate(t, e, i) {
            const n = oo.get(t);
            Ji.configure(t, n, i), n.options = i
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                weight: "normal"
            },
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const lo = {
        average(t) {
            if (!t.length) return !1;
            let e, i, n = new Set,
                s = 0,
                r = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                const i = t[e].element;
                if (i && i.hasValue()) {
                    const t = i.tooltipPosition();
                    n.add(t.x), s += t.y, ++r
                }
            }
            return 0 !== r && 0 !== n.size && {
                x: [...n].reduce(((t, e) => t + e)) / n.size,
                y: s / r
            }
        },
        nearest(t, e) {
            if (!t.length) return !1;
            let i, n, s, r = e.x,
                o = e.y,
                a = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
                const n = t[i].element;
                if (n && n.hasValue()) {
                    const t = X(e, n.getCenterPoint());
                    t < a && (a = t, s = n)
                }
            }
            if (s) {
                const t = s.tooltipPosition();
                r = t.x, o = t.y
            }
            return {
                x: r,
                y: o
            }
        }
    };

    function co(t, e) {
        return e && (s(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function ho(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function uo(t, e) {
        const {
            element: i,
            datasetIndex: n,
            index: s
        } = e, r = t.getDatasetMeta(n).controller, {
            label: o,
            value: a
        } = r.getLabelAndValue(s);
        return {
            chart: t,
            label: o,
            parsed: r.getParsed(s),
            raw: t.data.datasets[n].data[s],
            formattedValue: a,
            dataset: r.getDataset(),
            dataIndex: s,
            datasetIndex: n,
            element: i
        }
    }

    function po(t, e) {
        const i = t.chart.ctx,
            {
                body: n,
                footer: s,
                title: r
            } = t,
            {
                boxWidth: o,
                boxHeight: a
            } = e,
            l = xi(e.bodyFont),
            c = xi(e.titleFont),
            d = xi(e.footerFont),
            h = r.length,
            p = s.length,
            f = n.length,
            g = bi(e.padding);
        let m = g.height,
            v = 0,
            y = n.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
        y += t.beforeBody.length + t.afterBody.length, h && (m += h * c.lineHeight + (h - 1) * e.titleSpacing + e.titleMarginBottom), y && (m += f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) + (y - f) * l.lineHeight + (y - 1) * e.bodySpacing), p && (m += e.footerMarginTop + p * d.lineHeight + (p - 1) * e.footerSpacing);
        let b = 0;
        const x = function(t) {
            v = Math.max(v, i.measureText(t).width + b)
        };
        return i.save(), i.font = c.string, u(t.title, x), i.font = l.string, u(t.beforeBody.concat(t.afterBody), x), b = e.displayColors ? o + 2 + e.boxPadding : 0, u(n, (t => {
            u(t.before, x), u(t.lines, x), u(t.after, x)
        })), b = 0, i.font = d.string, u(t.footer, x), i.restore(), v += g.width, {
            width: v,
            height: m
        }
    }

    function fo(t, e, i, n) {
        const {
            x: s,
            width: r
        } = i, {
            width: o,
            chartArea: {
                left: a,
                right: l
            }
        } = t;
        let c = "center";
        return "center" === n ? c = s <= (a + l) / 2 ? "left" : "right" : s <= r / 2 ? c = "left" : s >= o - r / 2 && (c = "right"),
            function(t, e, i, n) {
                const {
                    x: s,
                    width: r
                } = n, o = i.caretSize + i.caretPadding;
                return "left" === t && s + r + o > e.width || "right" === t && s - r - o < 0 || void 0
            }(c, t, e, i) && (c = "center"), c
    }

    function go(t, e, i) {
        const n = i.yAlign || e.yAlign || function(t, e) {
            const {
                y: i,
                height: n
            } = e;
            return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center"
        }(t, i);
        return {
            xAlign: i.xAlign || e.xAlign || fo(t, e, i, n),
            yAlign: n
        }
    }

    function mo(t, e, i, n) {
        const {
            caretSize: s,
            caretPadding: r,
            cornerRadius: o
        } = t, {
            xAlign: a,
            yAlign: l
        } = i, c = s + r, {
            topLeft: d,
            topRight: h,
            bottomLeft: u,
            bottomRight: p
        } = yi(o);
        let f = function(t, e) {
            let {
                x: i,
                width: n
            } = t;
            return "right" === e ? i -= n : "center" === e && (i -= n / 2), i
        }(e, a);
        const g = function(t, e, i) {
            let {
                y: n,
                height: s
            } = t;
            return "top" === e ? n += i : n -= "bottom" === e ? s + i : s / 2, n
        }(e, l, c);
        return "center" === l ? "left" === a ? f += c : "right" === a && (f -= c) : "left" === a ? f -= Math.max(d, u) + s : "right" === a && (f += Math.max(h, p) + s), {
            x: Z(f, 0, n.width - e.width),
            y: Z(g, 0, n.height - e.height)
        }
    }

    function vo(t, e, i) {
        const n = bi(i.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left
    }

    function yo(t) {
        return co([], ho(t))
    }

    function bo(t, e) {
        const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t
    }
    const xo = {
        beforeTitle: e,
        title(t) {
            if (t.length > 0) {
                const e = t[0],
                    i = e.chart.data.labels,
                    n = i ? i.length : 0;
                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                if (e.label) return e.label;
                if (n > 0 && e.dataIndex < n) return i[e.dataIndex]
            }
            return ""
        },
        afterTitle: e,
        beforeBody: e,
        beforeLabel: e,
        label(t) {
            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || "";
            e && (e += ": ");
            const i = t.formattedValue;
            return n(i) || (e += i), e
        },
        labelColor(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0
            }
        },
        labelTextColor() {
            return this.options.bodyColor
        },
        labelPointStyle(t) {
            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
            return {
                pointStyle: e.pointStyle,
                rotation: e.rotation
            }
        },
        afterLabel: e,
        afterBody: e,
        beforeFooter: e,
        footer: e,
        afterFooter: e
    };

    function wo(t, e, i, n) {
        const s = t[e].call(i, n);
        return void 0 === s ? xo[e].call(i, n) : s
    }
    class _o extends Rn {
        static positioners = lo;
        constructor(t) {
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }
        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0
        }
        _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart,
                i = this.options.setContext(this.getContext()),
                n = i.enabled && e.options.animation && i.animations,
                s = new Sn(this.chart, n);
            return n._cacheable && (this._cachedAnimations = Object.freeze(s)), s
        }
        getContext() {
            return this.$context || (this.$context = (this, Si(this.chart.getContext(), {
                tooltip: this,
                tooltipItems: this._tooltipItems,
                type: "tooltip"
            })))
        }
        getTitle(t, e) {
            const {
                callbacks: i
            } = e, n = wo(i, "beforeTitle", this, t), s = wo(i, "title", this, t), r = wo(i, "afterTitle", this, t);
            let o = [];
            return o = co(o, ho(n)), o = co(o, ho(s)), o = co(o, ho(r)), o
        }
        getBeforeBody(t, e) {
            return yo(wo(e.callbacks, "beforeBody", this, t))
        }
        getBody(t, e) {
            const {
                callbacks: i
            } = e, n = [];
            return u(t, (t => {
                const e = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    s = bo(i, t);
                co(e.before, ho(wo(s, "beforeLabel", this, t))), co(e.lines, wo(s, "label", this, t)), co(e.after, ho(wo(s, "afterLabel", this, t))), n.push(e)
            })), n
        }
        getAfterBody(t, e) {
            return yo(wo(e.callbacks, "afterBody", this, t))
        }
        getFooter(t, e) {
            const {
                callbacks: i
            } = e, n = wo(i, "beforeFooter", this, t), s = wo(i, "footer", this, t), r = wo(i, "afterFooter", this, t);
            let o = [];
            return o = co(o, ho(n)), o = co(o, ho(s)), o = co(o, ho(r)), o
        }
        _createItems(t) {
            const e = this._active,
                i = this.chart.data,
                n = [],
                s = [],
                r = [];
            let o, a, l = [];
            for (o = 0, a = e.length; o < a; ++o) l.push(uo(this.chart, e[o]));
            return t.filter && (l = l.filter(((e, n, s) => t.filter(e, n, s, i)))), t.itemSort && (l = l.sort(((e, n) => t.itemSort(e, n, i)))), u(l, (e => {
                const i = bo(t.callbacks, e);
                n.push(wo(i, "labelColor", this, e)), s.push(wo(i, "labelPointStyle", this, e)), r.push(wo(i, "labelTextColor", this, e))
            })), this.labelColors = n, this.labelPointStyles = s, this.labelTextColors = r, this.dataPoints = l, l
        }
        update(t, e) {
            const i = this.options.setContext(this.getContext()),
                n = this._active;
            let s, r = [];
            if (n.length) {
                const t = lo[i.position].call(this, n, this._eventPosition);
                r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
                const e = this._size = po(this, i),
                    o = Object.assign({}, t, e),
                    a = go(this.chart, i, o),
                    l = mo(i, o, a, this.chart);
                this.xAlign = a.xAlign, this.yAlign = a.yAlign, s = {
                    opacity: 1,
                    x: l.x,
                    y: l.y,
                    width: e.width,
                    height: e.height,
                    caretX: t.x,
                    caretY: t.y
                }
            } else 0 !== this.opacity && (s = {
                opacity: 0
            });
            this._tooltipItems = r, this.$context = void 0, s && this._resolveAnimations().update(this, s), t && i.external && i.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e
            })
        }
        drawCaret(t, e, i, n) {
            const s = this.getCaretPosition(t, i, n);
            e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3)
        }
        getCaretPosition(t, e, i) {
            const {
                xAlign: n,
                yAlign: s
            } = this, {
                caretSize: r,
                cornerRadius: o
            } = i, {
                topLeft: a,
                topRight: l,
                bottomLeft: c,
                bottomRight: d
            } = yi(o), {
                x: h,
                y: u
            } = t, {
                width: p,
                height: f
            } = e;
            let g, m, v, y, b, x;
            return "center" === s ? (b = u + f / 2, "left" === n ? (g = h, m = g - r, y = b + r, x = b - r) : (g = h + p, m = g + r, y = b - r, x = b + r), v = g) : (m = "left" === n ? h + Math.max(a, c) + r : "right" === n ? h + p - Math.max(l, d) - r : this.caretX, "top" === s ? (y = u, b = y - r, g = m - r, v = m + r) : (y = u + f, b = y + r, g = m + r, v = m - r), x = y), {
                x1: g,
                x2: m,
                x3: v,
                y1: y,
                y2: b,
                y3: x
            }
        }
        drawTitle(t, e, i) {
            const n = this.title,
                s = n.length;
            let r, o, a;
            if (s) {
                const l = Ei(i.rtl, this.x, this.width);
                for (t.x = vo(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", r = xi(i.titleFont), o = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, a = 0; a < s; ++a) e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + o, a + 1 === s && (t.y += i.titleMarginBottom - o)
            }
        }
        _drawColorBox(t, e, i, n, s) {
            const o = this.labelColors[i],
                a = this.labelPointStyles[i],
                {
                    boxHeight: l,
                    boxWidth: c
                } = s,
                d = xi(s.bodyFont),
                h = vo(this, "left", s),
                u = n.x(h),
                p = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
                f = e.y + p;
            if (s.usePointStyle) {
                const e = {
                        radius: Math.min(c, l) / 2,
                        pointStyle: a.pointStyle,
                        rotation: a.rotation,
                        borderWidth: 1
                    },
                    i = n.leftForLtr(u, c) + c / 2,
                    r = f + l / 2;
                t.strokeStyle = s.multiKeyBackground, t.fillStyle = s.multiKeyBackground, ke(t, e, i, r), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ke(t, e, i, r)
            } else {
                t.lineWidth = r(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
                const e = n.leftForLtr(u, c),
                    i = n.leftForLtr(n.xPlus(u, 1), c - 2),
                    a = yi(o.borderRadius);
                Object.values(a).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = s.multiKeyBackground, Fe(t, {
                    x: e,
                    y: f,
                    w: c,
                    h: l,
                    radius: a
                }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Fe(t, {
                    x: i,
                    y: f + 1,
                    w: c - 2,
                    h: l - 2,
                    radius: a
                }), t.fill()) : (t.fillStyle = s.multiKeyBackground, t.fillRect(e, f, c, l), t.strokeRect(e, f, c, l), t.fillStyle = o.backgroundColor, t.fillRect(i, f + 1, c - 2, l - 2))
            }
            t.fillStyle = this.labelTextColors[i]
        }
        drawBody(t, e, i) {
            const {
                body: n
            } = this, {
                bodySpacing: s,
                bodyAlign: r,
                displayColors: o,
                boxHeight: a,
                boxWidth: l,
                boxPadding: c
            } = i, d = xi(i.bodyFont);
            let h = d.lineHeight,
                p = 0;
            const f = Ei(i.rtl, this.x, this.width),
                g = function(i) {
                    e.fillText(i, f.x(t.x + p), t.y + h / 2), t.y += h + s
                },
                m = f.textAlign(r);
            let v, y, b, x, w, _, S;
            for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = vo(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, g), p = o && "right" !== m ? "center" === r ? l / 2 + c : l + 2 + c : 0, x = 0, _ = n.length; x < _; ++x) {
                for (v = n[x], y = this.labelTextColors[x], e.fillStyle = y, u(v.before, g), b = v.lines, o && b.length && (this._drawColorBox(e, t, x, f, i), h = Math.max(d.lineHeight, a)), w = 0, S = b.length; w < S; ++w) g(b[w]), h = d.lineHeight;
                u(v.after, g)
            }
            p = 0, h = d.lineHeight, u(this.afterBody, g), t.y -= s
        }
        drawFooter(t, e, i) {
            const n = this.footer,
                s = n.length;
            let r, o;
            if (s) {
                const a = Ei(i.rtl, this.x, this.width);
                for (t.x = vo(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", r = xi(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, o = 0; o < s; ++o) e.fillText(n[o], a.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing
            }
        }
        drawBackground(t, e, i, n) {
            const {
                xAlign: s,
                yAlign: r
            } = this, {
                x: o,
                y: a
            } = t, {
                width: l,
                height: c
            } = i, {
                topLeft: d,
                topRight: h,
                bottomLeft: u,
                bottomRight: p
            } = yi(n.cornerRadius);
            e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(o + d, a), "top" === r && this.drawCaret(t, e, i, n), e.lineTo(o + l - h, a), e.quadraticCurveTo(o + l, a, o + l, a + h), "center" === r && "right" === s && this.drawCaret(t, e, i, n), e.lineTo(o + l, a + c - p), e.quadraticCurveTo(o + l, a + c, o + l - p, a + c), "bottom" === r && this.drawCaret(t, e, i, n), e.lineTo(o + u, a + c), e.quadraticCurveTo(o, a + c, o, a + c - u), "center" === r && "left" === s && this.drawCaret(t, e, i, n), e.lineTo(o, a + d), e.quadraticCurveTo(o, a, o + d, a), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
        }
        _updateAnimationTarget(t) {
            const e = this.chart,
                i = this.$animations,
                n = i && i.x,
                s = i && i.y;
            if (n || s) {
                const i = lo[t.position].call(this, this._active, this._eventPosition);
                if (!i) return;
                const r = this._size = po(this, t),
                    o = Object.assign({}, i, this._size),
                    a = go(e, t, o),
                    l = mo(t, o, a, e);
                n._to === l.x && s._to === l.y || (this.xAlign = a.xAlign, this.yAlign = a.yAlign, this.width = r.width, this.height = r.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l))
            }
        }
        _willRender() {
            return !!this.opacity
        }
        draw(t) {
            const e = this.options.setContext(this.getContext());
            let i = this.opacity;
            if (!i) return;
            this._updateAnimationTarget(e);
            const n = {
                    width: this.width,
                    height: this.height
                },
                s = {
                    x: this.x,
                    y: this.y
                };
            i = Math.abs(i) < .001 ? 0 : i;
            const r = bi(e.padding),
                o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && o && (t.save(), t.globalAlpha = i, this.drawBackground(s, t, n, e), Ti(t, e.textDirection), s.y += r.top, this.drawTitle(s, t, e), this.drawBody(s, t, e), this.drawFooter(s, t, e), Mi(t, e.textDirection), t.restore())
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t, e) {
            const i = this._active,
                n = t.map((({
                    datasetIndex: t,
                    index: e
                }) => {
                    const i = this.chart.getDatasetMeta(t);
                    if (!i) throw new Error("Cannot find a dataset at index " + t);
                    return {
                        datasetIndex: t,
                        element: i.data[e],
                        index: e
                    }
                })),
                s = !p(i, n),
                r = this._positionChanged(n, e);
            (s || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
        }
        handleEvent(t, e, i = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const n = this.options,
                s = this._active || [],
                r = this._getActiveElements(t, s, e, i),
                o = this._positionChanged(r, t),
                a = e || !p(r, s) || o;
            return a && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
                x: t.x,
                y: t.y
            }, this.update(!0, e))), a
        }
        _getActiveElements(t, e, i, n) {
            const s = this.options;
            if ("mouseout" === t.type) return [];
            if (!n) return e.filter((t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));
            const r = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
            return s.reverse && r.reverse(), r
        }
        _positionChanged(t, e) {
            const {
                caretX: i,
                caretY: n,
                options: s
            } = this, r = lo[s.position].call(this, t, e);
            return !1 !== r && (i !== r.x || n !== r.y)
        }
    }
    var So = {
        id: "tooltip",
        _element: _o,
        positioners: lo,
        afterInit(t, e, i) {
            i && (t.tooltip = new _o({
                chart: t,
                options: i
            }))
        },
        beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
        },
        reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i)
        },
        afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
                const i = {
                    tooltip: e
                };
                if (!1 === t.notifyPlugins("beforeTooltipDraw", { ...i,
                        cancelable: !0
                    })) return;
                e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i)
            }
        },
        afterEvent(t, e) {
            if (t.tooltip) {
                const i = e.replay;
                t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {
                weight: "bold"
            },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {
                weight: "bold"
            },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {
                duration: 400,
                easing: "easeOutQuart"
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "width", "height", "caretX", "caretY"]
                },
                opacity: {
                    easing: "linear",
                    duration: 200
                }
            },
            callbacks: xo
        },
        defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
        },
        descriptors: {
            _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
            _indexable: !1,
            callbacks: {
                _scriptable: !1,
                _indexable: !1
            },
            animation: {
                _fallback: !1
            },
            animations: {
                _fallback: "animation"
            }
        },
        additionalOptionScopes: ["interaction"]
    };
    return ws.register(Rs, kr, tr, t), ws.helpers = { ...zi
    }, ws._adapters = Ts, ws.Animation = _n, ws.Animations = Sn, ws.animator = vt, ws.controllers = Xn.controllers.items, ws.DatasetController = zn, ws.Element = Rn, ws.elements = tr, ws.Interaction = Hi, ws.layouts = Ji, ws.platforms = bn, ws.Scale = Yn, ws.Ticks = ie, Object.assign(ws, Rs, kr, tr, t, bn), ws.Chart = ws, "undefined" != typeof window && (window.Chart = ws), ws
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
        return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function(t, e) {
    "use strict";

    function i(i, r, a) {
        (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            return "string" == typeof t ? function(t, e, n) {
                var s, r = "$()." + i + '("' + e + '")';
                return t.each((function(t, l) {
                    var c = a.data(l, i);
                    if (c) {
                        var d = c[e];
                        if (d && "_" != e.charAt(0)) {
                            var h = d.apply(c, n);
                            s = void 0 === s ? h : s
                        } else o(r + " is not a valid method")
                    } else o(i + " not initialized. Cannot call methods, i.e. " + r)
                })), void 0 !== s ? s : t
            }(this, t, s.call(arguments, 1)) : (function(t, e) {
                t.each((function(t, n) {
                    var s = a.data(n, i);
                    s ? (s.option(e), s._init()) : (s = new r(n, e), a.data(n, i, s))
                }))
            }(this, t), this)
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice,
        r = t.console,
        o = void 0 === r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var r = i[s];
                n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function e(t) {
        var e = getComputedStyle(t);
        return e || r("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
            var r = document.body || document.documentElement;
            r.appendChild(i);
            var o = e(i);
            s = 200 == Math.round(t(o.width)), n.isBoxSizeOuter = s, r.removeChild(i)
        }
    }

    function n(n) {
        if (i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
            var r = e(n);
            if ("none" == r.display) return function() {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < a; e++) t[o[e]] = 0;
                return t
            }();
            var l = {};
            l.width = n.offsetWidth, l.height = n.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == r.boxSizing, d = 0; d < a; d++) {
                var h = o[d],
                    u = r[h],
                    p = parseFloat(u);
                l[h] = isNaN(p) ? 0 : p
            }
            var f = l.paddingLeft + l.paddingRight,
                g = l.paddingTop + l.paddingBottom,
                m = l.marginLeft + l.marginRight,
                v = l.marginTop + l.marginBottom,
                y = l.borderLeftWidth + l.borderRightWidth,
                b = l.borderTopWidth + l.borderBottomWidth,
                x = c && s,
                w = t(r.width);
            !1 !== w && (l.width = w + (x ? 0 : f + y));
            var _ = t(r.height);
            return !1 !== _ && (l.height = _ + (x ? 0 : g + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (g + b), l.outerWidth = l.width + m, l.outerHeight = l.height + v, l
        }
    }
    var s, r = "undefined" == typeof console ? function() {} : function(t) {
            console.error(t)
        },
        o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = o.length,
        l = !1;
    return n
})),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
        return e(t, i)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function(t, e) {
    var i = {
            extend: function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function(t, e) {
                return (t % e + e) % e
            }
        },
        n = Array.prototype.slice;
    i.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach((function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) s.push(i[r])
            }
        })), s
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[s] = setTimeout((function() {
                n.apply(r, e), delete r[s]
            }), i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
            return e + "-" + i
        })).toLowerCase()
    };
    var s = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady((function() {
            var r = i.toDashed(n),
                o = "data-" + r,
                a = document.querySelectorAll("[" + o + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = i.makeArray(a).concat(i.makeArray(l)),
                d = o + "-options",
                h = t.jQuery;
            c.forEach((function(t) {
                var i, r = t.getAttribute(o) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void(s && s.error("Error parsing " + o + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                h && h.data(t, n, a)
            }))
        }))
    }, i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, (function(t, e) {
    "use strict";

    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var n = document.documentElement.style,
        s = "string" == typeof n.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
        o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        a = {
            transform: r,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        l = i.prototype = Object.create(t.prototype);
    l.constructor = i, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.getSize = function() {
        this.size = e(this.element)
    }, l.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    }, l.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            s = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            o = parseFloat(s),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != s.indexOf("%") && (o = o / 100 * a.height), r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o, r -= e ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
    }, l.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            s = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            o = i ? "right" : "left",
            a = this.position.x + t[s];
        e[r] = this.getXValue(a), e[o] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            c = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            h = this.position.y + t[l];
        e[c] = this.getYValue(h), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, l.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, l.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, l._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            s = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !s || this.isTransitioning) {
            var r = t - i,
                o = e - n,
                a = {};
            a.transform = this.getTranslate(r, o), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, l.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, l._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, l.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var c = "opacity," + function(t) {
        return t.replace(/([A-Z])/g, (function(t) {
            return "-" + t.toLowerCase()
        }))
    }(r);
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(o, this, !1)
        }
    }, l.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, l.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function(t) {
                    for (var e in t) return !1;
                    return !0
                }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(h)
    }, l.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
})),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, n, s, r) {
        return e(t, i, n, s, r)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function(t, e, i, n, s) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var s = ++d;
            this.element.outlayerGUID = s, h[s] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function o(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }
    var a = t.console,
        l = t.jQuery,
        c = function() {},
        d = 0,
        h = {};
    r.namespace = "outlayer", r.Item = s, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = r.prototype;
    n.extend(u, e.prototype), u.option = function(t) {
        n.extend(this.options, t)
    }, u._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var r = new i(e[s], this);
            n.push(r)
        }
        return n
    }, u._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, u.getItemElements = function() {
        return this.items.map((function(t) {
            return t.element
        }))
    }, u.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function() {
        this.getSize()
    }, u.getSize = function() {
        this.size = i(this.element)
    }, u._getMeasurement = function(t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
    }, u.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, u._getItemsForLayout = function(t) {
        return t.filter((function(t) {
            return !t.isIgnored
        }))
    }, u._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach((function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }), this), this._processLayoutQueue(i)
        }
    }, u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, u._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach((function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }), this)
    }, u.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
        }(t), this.stagger)
    }, u._positionItem = function(t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
    }, u._postLayout = function() {
        this.resizeContainer()
    }, u.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, u._getContainerSize = c, u._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, u._emitCompleteOnItems = function(t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++o == r && i()
        }
        var s = this,
            r = e.length;
        if (e && r) {
            var o = 0;
            e.forEach((function(e) {
                e.once(t, n)
            }))
        } else i()
    }, u.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l)
            if (this.$element = this.$element || l(this.element), e) {
                var s = l.Event(e);
                s.type = t, this.$element.trigger(s, i)
            } else this.$element.trigger(t, i)
    }, u.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, u.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, u.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, u.unstamp = function(t) {
        (t = this._find(t)) && t.forEach((function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }), this)
    }, u._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), n.makeArray(t)
    }, u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, u._manageStamp = c, u._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            s = i(t);
        return {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        }
    }, u.handleEvent = n.handleEvent, u.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, u.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, u.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, u.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, u.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e), t.reveal()
            }))
        }
    }, u.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e), t.hide()
            }))
        }
    }, u.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, u.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, u.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, u.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach((function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }), this), e
    }, u.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }), this)
    }, u.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
            t.destroy()
        })), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && h[e]
    }, r.create = function(t, e) {
        var i = o(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = o(s), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return r.Item = s, r
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, (function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var s = i.destroy;
    return i.destroy = function() {
        s.apply(this, arguments), this.css({
            display: ""
        })
    }, e
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, (function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    })), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function s() {
            i.apply(this, arguments)
        }
        return s.prototype = Object.create(n), s.prototype.constructor = s, e && (s.options = e), s.prototype.namespace = t, i.modes[t] = s, s
    }, i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, (function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            s = this.containerWidth + this.gutter,
            r = s / n,
            o = n - s % n;
        r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), s = {
                x: this.columnWidth * n.col,
                y: n.y
            }, r = n.y + t.size.outerHeight, o = i + n.col, a = n.col; a < o; a++) this.colYs[a] = r;
        return s
    }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, n._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            s = this._getOption("originLeft") ? n.left : n.right,
            r = s + i.outerWidth,
            o = Math.floor(s / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = o; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, (function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        s = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in e.prototype) s[r] || (n[r] = e.prototype[r]);
    var o = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, o.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
})),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(i, n, s, r, o, a) {
        return e(t, i, n, s, r, o, a)
    })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, (function(t, e, i, n, s, r, o) {
    var a = t.jQuery,
        l = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        c = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    c.Item = r, c.LayoutMode = o;
    var d = c.prototype;
    d._create = function() {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(t)
    }, d.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, d._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            t[i].id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, d._initLayoutMode = function(t) {
        var e = o.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, d.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, d.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, d._init = d.arrange, d._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, d._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, d._bindArrangeComplete = function() {
        function t() {
            e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }
        var e, i, n, s = this;
        this.once("layoutComplete", (function() {
            e = !0, t()
        })), this.once("hideComplete", (function() {
            i = !0, t()
        })), this.once("revealComplete", (function() {
            n = !0, t()
        }))
    }, d._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], s = [], r = this._getFilterTest(e), o = 0; o < t.length; o++) {
            var a = t[o];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: s
        }
    }, d._getFilterTest = function(t) {
        return a && this.options.isJQueryFiltering ? function(e) {
            return a(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, d.updateSortData = function(t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, d._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = h(i)
        }
    }, d._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var h = function(t) {
        if ("string" != typeof t) return t;
        var e = l(t).split(" "),
            i = e[0],
            n = i.match(/^\[(.+)\]$/),
            s = function(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }(n && n[1], i),
            r = c.sortDataParsers[e[1]];
        return r ? function(t) {
            return t && r(s(t))
        } : function(t) {
            return t && s(t)
        }
    };
    c.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, d._sort = function() {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = function(t, e) {
                return function(i, n) {
                    for (var s = 0; s < t.length; s++) {
                        var r = t[s],
                            o = i.sortData[r],
                            a = n.sortData[r];
                        if (o > a || o < a) return (o > a ? 1 : -1) * ((void 0 !== e[r] ? e[r] : e) ? 1 : -1)
                    }
                    return 0
                }
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, d._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, d._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, d._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, d._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, d._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, d.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, d._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, d.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, s = e.length;
            for (i = 0; i < s; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < s; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var u = d.remove;
    return d.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var r = e[n];
            s.removeFrom(this.filteredItems, r)
        }
    }, d.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, d.getFilteredItemElements = function() {
        return this.filteredItems.map((function(t) {
            return t.element
        }))
    }, c
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
}(window, (function() {
    function t(e) {
        for (var i in t.defaults) this[i] = t.defaults[i];
        for (i in e) this[i] = e[i]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0,
            i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
    }, e.overlaps = function(t) {
        var e = this.x + this.width,
            i = this.y + this.height,
            n = t.x + t.width,
            s = t.y + t.height;
        return this.x < n && e > t.x && this.y < s && i > t.y
    }, e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e)) return !1;
        var i, n = [],
            s = this.x + this.width,
            r = this.y + this.height,
            o = e.x + e.width,
            a = e.y + e.height;
        return this.y < e.y && (i = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }), n.push(i)), s > o && (i = new t({
            x: o,
            y: this.y,
            width: s - o,
            height: this.height
        }), n.push(i)), r > a && (i = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: r - a
        }), n.push(i)), this.x < e.x && (i = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }), n.push(i)), n
    }, e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }, t
})),
function(t, e) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
    else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
    else {
        var i = t.Packery = t.Packery || {};
        i.Packer = e(i.Rect)
    }
}(window, (function(t) {
    function e(t, e, i) {
        this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
    }
    var i = e.prototype;
    i.reset = function() {
        this.spaces = [];
        var e = new t({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(e), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
    }, i.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.canFit(t)) {
                this.placeInSpace(t, i);
                break
            }
        }
    }, i.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
                t.y = i.y, this.placed(t);
                break
            }
        }
    }, i.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
                t.x = i.x, this.placed(t);
                break
            }
        }
    }, i.placeInSpace = function(t, e) {
        t.x = e.x, t.y = e.y, this.placed(t)
    }, i.placed = function(t) {
        for (var e = [], i = 0; i < this.spaces.length; i++) {
            var n = this.spaces[i],
                s = n.getMaximalFreeRects(t);
            s ? e.push.apply(e, s) : e.push(n)
        }
        this.spaces = e, this.mergeSortSpaces()
    }, i.mergeSortSpaces = function() {
        e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
    }, i.addSpace = function(t) {
        this.spaces.push(t), this.mergeSortSpaces()
    }, e.mergeRects = function(t) {
        var e = 0,
            i = t[e];
        t: for (; i;) {
            for (var n = 0, s = t[e + n]; s;) {
                if (s == i) n++;
                else {
                    if (s.contains(i)) {
                        t.splice(e, 1), i = t[e];
                        continue t
                    }
                    i.contains(s) ? t.splice(e + n, 1) : n++
                }
                s = t[e + n]
            }
            i = t[++e]
        }
        return t
    };
    var n = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}(window, (function(t, e) {
    var i = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform",
        n = function() {
            t.Item.apply(this, arguments)
        },
        s = n.prototype = Object.create(t.Item.prototype),
        r = s._create;
    s._create = function() {
        r.call(this), this.rect = new e
    };
    var o = s.moveTo;
    return s.moveTo = function(t, e) {
        var i = Math.abs(this.position.x - t),
            n = Math.abs(this.position.y - e);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n ? void this.goTo(t, e) : void o.apply(this, arguments)
    }, s.enablePlacing = function() {
        this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
    }, s.disablePlacing = function() {
        this.isPlacing = !1
    }, s.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
    }, s.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
    }, s.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[i] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }, s.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }, n
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, (function(t, e, i, n, s) {
    function r(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }

    function o(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    i.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    };
    var a = e.create("packery");
    a.Item = s;
    var l = a.prototype;
    l._create = function() {
        e.prototype._create.call(this), this.packer = new n, this.shiftPacker = new n, this.isEnabled = !0, this.dragItemCount = 0;
        var t = this;
        this.handleDraggabilly = {
            dragStart: function() {
                t.itemDragStart(this.element)
            },
            dragMove: function() {
                t.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                t.itemDragEnd(this.element)
            }
        }, this.handleUIDraggable = {
            start: function(e, i) {
                i && t.itemDragStart(e.currentTarget)
            },
            drag: function(e, i) {
                i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
            },
            stop: function(e, i) {
                i && t.itemDragEnd(e.currentTarget)
            }
        }
    }, l._resetLayout = function() {
        var t, e, i;
        this.getSize(), this._getMeasurements(), this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, i = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = i, this.packer.reset(), this.maxY = 0, this.maxX = 0
    }, l._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
    }, l._getItemLayoutPosition = function(t) {
        if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
            var e = this._getPackMethod();
            this.packer[e](t.rect)
        } else this.packer.pack(t.rect);
        return this._setMaxXY(t.rect), t.rect
    }, l.shiftLayout = function() {
        this.isShifting = !0, this.layout(), delete this.isShifting
    }, l._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }, l._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
    }, l._setRectSize = function(e, i) {
        var n = t(e),
            s = n.outerWidth,
            r = n.outerHeight;
        (s || r) && (s = this._applyGridGutter(s, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(s, this.packer.width), i.height = Math.min(r, this.packer.height)
    }, l._applyGridGutter = function(t, e) {
        if (!e) return t + this.gutter;
        var i = t % (e += this.gutter);
        return Math[i && 1 > i ? "round" : "ceil"](t / e) * e
    }, l._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }, l._manageStamp = function(t) {
        var e, n = this.getItem(t);
        if (n && n.isPlacing) e = n.rect;
        else {
            var s = this._getElementOffset(t);
            e = new i({
                x: this._getOption("originLeft") ? s.left : s.right,
                y: this._getOption("originTop") ? s.top : s.bottom
            })
        }
        this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
    }, l.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? o : r;
        this.items.sort(t)
    }, l.fit = function(t, e, i) {
        var n = this.getItem(t);
        n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, this.shift(n, e, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
    }, l._bindFitEvents = function(t) {
        function e() {
            2 == ++n && i.dispatchEvent("fitComplete", null, [t])
        }
        var i = this,
            n = 0;
        t.once("layout", e), this.once("layoutComplete", e)
    }, l.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }, l.needsResizeLayout = function() {
        var e = t(this.element),
            i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return e[i] != this.size[i]
    }, l.resizeShiftPercentLayout = function() {
        var e = this._getItemsForLayout(this.items),
            i = this._getOption("horizontal"),
            n = i ? "y" : "x",
            s = i ? "height" : "width",
            r = i ? "rowHeight" : "columnWidth",
            o = i ? "innerHeight" : "innerWidth",
            a = this[r];
        if (a = a && a + this.gutter) {
            this._getMeasurements();
            var l = this[r] + this.gutter;
            e.forEach((function(t) {
                var e = Math.round(t.rect[n] / a);
                t.rect[n] = e * l
            }))
        } else {
            var c = t(this.element)[o] + this.gutter,
                d = this.packer[s];
            e.forEach((function(t) {
                t.rect[n] = t.rect[n] / d * c
            }))
        }
        this.shiftLayout()
    }, l.itemDragStart = function(t) {
        if (this.isEnabled) {
            this.stamp(t);
            var e = this.getItem(t);
            e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
        }
    }, l.updateShiftTargets = function(t) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var e = this._getOption("originLeft"),
            n = this._getOption("originTop");
        this.stamps.forEach((function(t) {
            var s = this.getItem(t);
            if (!s || !s.isPlacing) {
                var r = this._getElementOffset(t),
                    o = new i({
                        x: e ? r.left : r.right,
                        y: n ? r.top : r.bottom
                    });
                this._setRectSize(t, o), this.shiftPacker.placed(o)
            }
        }), this);
        var s = this._getOption("horizontal"),
            r = s ? "rowHeight" : "columnWidth",
            o = s ? "height" : "width";
        this.shiftTargetKeys = [], this.shiftTargets = [];
        var a, l = this[r];
        if (l = l && l + this.gutter) {
            var c = Math.ceil(t.rect[o] / l),
                d = Math.floor((this.shiftPacker[o] + this.gutter) / l);
            a = (d - c) * l;
            for (var h = 0; d > h; h++) this._addShiftTarget(h * l, 0, a)
        } else a = this.shiftPacker[o] + this.gutter - t.rect[o], this._addShiftTarget(0, 0, a);
        var u = this._getItemsForLayout(this.items),
            p = this._getPackMethod();
        u.forEach((function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e), this.shiftPacker[p](e), this._addShiftTarget(e.x, e.y, a);
            var i = s ? e.x + e.width : e.x,
                n = s ? e.y : e.y + e.height;
            if (this._addShiftTarget(i, n, a), l)
                for (var r = Math.round(e[o] / l), c = 1; r > c; c++) {
                    var d = s ? i : e.x + l * c,
                        h = s ? e.y + l * c : n;
                    this._addShiftTarget(d, h, a)
                }
        }), this)
    }, l._addShiftTarget = function(t, e, i) {
        var n = this._getOption("horizontal") ? e : t;
        if (!(0 !== n && n > i)) {
            var s = t + "," + e; - 1 != this.shiftTargetKeys.indexOf(s) || (this.shiftTargetKeys.push(s), this.shiftTargets.push({
                x: t,
                y: e
            }))
        }
    }, l.shift = function(t, e, i) {
        var n, s = 1 / 0,
            r = {
                x: e,
                y: i
            };
        this.shiftTargets.forEach((function(t) {
            var e = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return Math.sqrt(i * i + n * n)
            }(t, r);
            s > e && (n = t, s = e)
        })), t.rect.x = n.x, t.rect.y = n.y
    };
    l.itemDragMove = function(t, e, i) {
        function n() {
            r.shift(s, e, i), s.positionDropPlaceholder(), r.layout()
        }
        var s = this.isEnabled && this.getItem(t);
        if (s) {
            e -= this.size.paddingLeft, i -= this.size.paddingTop;
            var r = this,
                o = new Date;
            this._itemDragTime && o - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, 120)) : (n(), this._itemDragTime = o)
        }
    }, l.itemDragEnd = function(t) {
        function e() {
            2 == ++n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), s.dispatchEvent("dragItemPositioned", null, [i]))
        }
        var i = this.isEnabled && this.getItem(t);
        if (i) {
            clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
            var n = 0,
                s = this;
            i.once("layout", e), this.once("layoutComplete", e), i.moveTo(i.rect.x, i.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), i.disablePlacing(), this.unstamp(i.element)
        }
    }, l.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    }, l.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    }, l._bindDraggabillyEvents = function(t, e) {
        var i = this.handleDraggabilly;
        t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd)
    }, l.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    }, l.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    }, l._bindUIDraggableEvents = function(t, e) {
        var i = this.handleUIDraggable;
        t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
    };
    var c = l.destroy;
    return l.destroy = function() {
        c.apply(this, arguments), this.isEnabled = !1
    }, a.Rect = i, a.Packer = n, a
})),
function(t, e) {
    "function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("isotope-layout/js/layout-mode"), require("packery")) : e(t.Isotope.LayoutMode, t.Packery)
}(window, (function(t, e) {
    var i = t.create("packery"),
        n = i.prototype,
        s = {
            _getElementOffset: !0,
            _getMeasurement: !0
        };
    for (var r in e.prototype) s[r] || (n[r] = e.prototype[r]);
    var o = n._resetLayout;
    n._resetLayout = function() {
        this.packer = this.packer || new e.Packer, this.shiftPacker = this.shiftPacker || new e.Packer, o.apply(this, arguments)
    };
    var a = n._getItemLayoutPosition;
    n._getItemLayoutPosition = function(t) {
        return t.rect = t.rect || new e.Rect, a.call(this, t)
    };
    var l = n.needsResizeLayout;
    n.needsResizeLayout = function() {
        return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : l.call(this)
    };
    var c = n._getOption;
    return n._getOption = function(t) {
        return "horizontal" == t ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : c.apply(this.isotope, arguments)
    }, i
})),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : t.jQuery)
}(this, (function(t) {
    "use strict";

    function e(t) {
        var e, i, n, s, r, o, a, l = {};
        for (a = 0, o = (r = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; a < o && (-1 === (i = r[a]).search(/^(http|https|ftp):\/\//) && -1 !== i.search(":")); a++) e = i.indexOf(":"), n = i.substring(0, e), (s = i.substring(e + 1)) || (s = void 0), "string" == typeof s && (s = "true" === s || "false" !== s && s), "string" == typeof s && (s = isNaN(s) ? s : +s), l[n] = s;
        return null == n && null == s ? t : l
    }

    function i(i, n, o) {
        if (this.$element = t(i), "string" == typeof n && (n = e(n)), o ? "string" == typeof o && (o = e(o)) : o = {}, "string" == typeof n) n = n.replace(/\.\w*$/, "");
        else if ("object" == typeof n)
            for (var a in n) n.hasOwnProperty(a) && (n[a] = n[a].replace(/\.\w*$/, ""));
        this.settings = t.extend({}, s, o), this.path = n;
        try {
            this.init()
        } catch (t) {
            if (t.message !== r) throw t
        }
    }
    var n = "vide",
        s = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0,
            bgColor: "transparent",
            className: ""
        },
        r = "Not implemented";
    i.prototype.init = function() {
        var e, i, n = this,
            s = n.path,
            o = s,
            a = "",
            l = n.$element,
            c = n.settings,
            d = function(t) {
                var e, i, n, s = (t = "" + t).split(/\s+/),
                    r = "50%",
                    o = "50%";
                for (n = 0, e = s.length; n < e; n++) "left" === (i = s[n]) ? r = "0%" : "right" === i ? r = "100%" : "top" === i ? o = "0%" : "bottom" === i ? o = "100%" : "center" === i ? 0 === n ? r = "50%" : o = "50%" : 0 === n ? r = i : o = i;
                return {
                    x: r,
                    y: o
                }
            }(c.position),
            h = c.posterType;
        i = n.$wrapper = t("<div>").addClass(c.className).css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-color": c.bgColor,
            "background-repeat": "no-repeat",
            "background-position": d.x + " " + d.y
        }), "object" == typeof s && (s.poster ? o = s.poster : s.mp4 ? o = s.mp4 : s.webm ? o = s.webm : s.ogv && (o = s.ogv)), "detect" === h ? function(e, i) {
            var n = function() {
                i(this.src)
            };
            t('<img src="' + e + '.gif">').on("load", n), t('<img src="' + e + '.jpg">').on("load", n), t('<img src="' + e + '.jpeg">').on("load", n), t('<img src="' + e + '.png">').on("load", n)
        }(o, (function(t) {
            i.css("background-image", "url(" + t + ")")
        })) : "none" !== h && i.css("background-image", "url(" + o + "." + h + ")"), "static" === l.css("position") && l.css("position", "relative"), l.prepend(i), "object" == typeof s ? (s.mp4 && (a += '<source src="' + s.mp4 + '.mp4" type="video/mp4">'), s.webm && (a += '<source src="' + s.webm + '.webm" type="video/webm">'), s.ogv && (a += '<source src="' + s.ogv + '.ogv" type="video/ogg">'), e = n.$video = t("<video>" + a + "</video>")) : e = n.$video = t('<video><source src="' + s + '.mp4" type="video/mp4"><source src="' + s + '.webm" type="video/webm"><source src="' + s + '.ogv" type="video/ogg"></video>');
        try {
            e.prop({
                autoplay: c.autoplay,
                loop: c.loop,
                volume: c.volume,
                muted: c.muted,
                defaultMuted: c.muted,
                playbackRate: c.playbackRate,
                defaultPlaybackRate: c.playbackRate
            })
        } catch (t) {
            throw new Error(r)
        }
        e.css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: d.y,
            left: d.x,
            "-webkit-transform": "translate(-" + d.x + ", -" + d.y + ")",
            "-ms-transform": "translate(-" + d.x + ", -" + d.y + ")",
            "-moz-transform": "translate(-" + d.x + ", -" + d.y + ")",
            transform: "translate(-" + d.x + ", -" + d.y + ")",
            visibility: "hidden",
            opacity: 0
        }).one("canplaythrough.vide", (function() {
            n.resize()
        })).one("playing.vide", (function() {
            e.css({
                visibility: "visible",
                opacity: 1
            }), i.css("background-image", "none")
        })), l.on("resize.vide", (function() {
            c.resizing && n.resize()
        })), i.append(e)
    }, i.prototype.getVideoObject = function() {
        return this.$video[0]
    }, i.prototype.resize = function() {
        if (this.$video) {
            var t = this.$wrapper,
                e = this.$video,
                i = e[0],
                n = i.videoHeight,
                s = i.videoWidth,
                r = t.height(),
                o = t.width();
            o / s > r / n ? e.css({
                width: o + 2,
                height: "auto"
            }) : e.css({
                width: "auto",
                height: r + 2
            })
        }
    }, i.prototype.destroy = function() {
        delete t[n].lookup[this.index], this.$video && this.$video.off(n), this.$element.off(n).removeData(n), this.$wrapper.remove()
    }, t[n] = {
        lookup: []
    }, t.fn[n] = function(e, s) {
        var r;
        return this.each((function() {
            (r = t.data(this, n)) && r.destroy(), (r = new i(this, e, s)).index = t[n].lookup.push(r) - 1, t.data(this, n, r)
        })), this
    }, t(document).ready((function() {
        var e = t(window);
        e.on("resize.vide", (function() {
            for (var e, i = t[n].lookup.length, s = 0; s < i; s++)(e = t[n].lookup[s]) && e.settings.resizing && e.resize()
        })), e.on("unload.vide", (function() {
            return !1
        })), t(document).find("[data-vide-bg]").each((function(e, i) {
            var s = t(i),
                r = s.data("vide-options"),
                o = s.data("vide-bg");
            s[n](o, r)
        }))
    }))
}));
var __assign = this && this.__assign || function() {
        return __assign = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t
        }, __assign.apply(this, arguments)
    },
    CountUp = function() {
        function t(t, e, i) {
            var n = this;
            this.target = t, this.endVal = e, this.options = i, this.version = "2.0.7", this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function(t) {
                n.startTime || (n.startTime = t);
                var e = t - n.startTime;
                n.remaining = n.duration - e, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(e, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(e, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (e / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (e / n.duration), n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), e < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.callback && n.callback()
            }, this.formatNumber = function(t) {
                var e, i, s, r, o, a = t < 0 ? "-" : "";
                if (e = Math.abs(t).toFixed(n.options.decimalPlaces), s = (i = (e += "").split("."))[0], r = i.length > 1 ? n.options.decimal + i[1] : "", n.options.useGrouping) {
                    o = "";
                    for (var l = 0, c = s.length; l < c; ++l) 0 !== l && l % 3 == 0 && (o = n.options.separator + o), o = s[c - l - 1] + o;
                    s = o
                }
                return n.options.numerals && n.options.numerals.length && (s = s.replace(/[0-9]/g, (function(t) {
                    return n.options.numerals[+t]
                })), r = r.replace(/[0-9]/g, (function(t) {
                    return n.options.numerals[+t]
                }))), a + n.options.prefix + s + r + n.options.suffix
            }, this.easeOutExpo = function(t, e, i, n) {
                return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
            }, this.options = __assign(__assign({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
        }
        return t.prototype.determineDirectionAndSmartEasing = function() {
            var t = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > t;
            var e = t - this.startVal;
            if (Math.abs(e) > this.options.smartEasingThreshold) {
                this.finalEndVal = t;
                var i = this.countDown ? 1 : -1;
                this.endVal = t + i * this.options.smartEasingAmount, this.duration = this.duration / 2
            } else this.endVal = t, this.finalEndVal = null;
            this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
        }, t.prototype.start = function(t) {
            this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
        }, t.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
        }, t.prototype.reset = function() {
            cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
        }, t.prototype.update = function(t) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
        }, t.prototype.printValue = function(t) {
            var e = this.formattingFn(t);
            "INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e
        }, t.prototype.ensureNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        }, t.prototype.validateValue = function(t) {
            var e = Number(t);
            return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: " + t, null)
        }, t.prototype.resetDuration = function() {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
        }, t
    }();

function initVideoPoster() {
    $(".hero-tile .bg-stretch video").on("ended", (function() {
        $(".hero-tile .bg-stretch").addClass("show")
    }))
}

function initHeroGallery() {
    var t = new Swiper(".thumbs-slider", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: !0,
        direction: "vertical",
        watchSlidesProgress: !0
    });
    new Swiper(".main-slider", {
        spaceBetween: 10,
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: t
        }
    })
}

function initHeroSlider() {
    $(".hero-slider").each((function() {
        new Swiper(this, {
            slidesPerView: "auto",
            spaceBetween: 30,
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            autoplay: {
                delay: 5e3
            },
            pagination: {
                el: $(this).closest(".hero-slider").find(".swiper-pagination").get(0),
                clickable: !0
            }
        })
    }))
}

function initIsotope() {
    var t = $(".isotope-grid");
    t.isotope({
        itemSelector: ".isotope-grid__item",
        masonry: {
            columnWidth: ".grid-sizer",
            layoutMode: "fitRows"
        }
    });
    var e = {
        ium: function() {
            return $(this).find(".name").text().match(/ium$/)
        }
    };
    $(".filter-group").on("click", "button", (function() {
        var i = $(this).attr("data-filter");
        i = e[i] || i, t.isotope({
            filter: i
        })
    })), $(".filter-group").each((function(t, e) {
        var i = $(e);
        i.on("click", "button", (function() {
            i.find(".is-checked").removeClass("is-checked"), $(this).addClass("is-checked")
        }))
    }))
}

function initImageSlider() {
    $(".image-slider").each((function() {
        new Swiper(this, {
            slidesPerView: "auto",
            spaceBetween: 40,
            pagination: {
                el: $(this).closest(".image-slider").find(".swiper-pagination").get(0),
                clickable: !0
            }
        })
    }))
}

function initCountAnimation() {
    $(".highlight-item").each((function() {
        const t = $(this);
        new Waypoint({
            element: this,
            handler: function() {
                ! function(t) {
                    const e = $(t).find(".highlight-item__num");
                    console.log(t), options = {
                        useEasing: !0,
                        useGrouping: !0,
                        separator: ",",
                        decimal: ".",
                        formattingFn: function(t) {
                            return t >= 1e3 ? Math.floor(t / 1e3) + "k+" : Math.floor(t) + "+"
                        }
                    }, e.each((function() {
                        const t = this.dataset.value;
                        new CountUp(this, t, options).start()
                    }))
                }(t), this.destroy()
            },
            offset: "90%"
        })
    }))
}

function initProgressBar() {
    function t() {
        $(".progress-bar__line:not(.animated)").each((function() {
            var t = $(this);
            if (t.offset().top < $(window).scrollTop() + $(window).height()) {
                var e = t.data("width");
                t.css("width", e).addClass("animated")
            }
        }))
    }
    t(), $(window).on("scroll", (function() {
        t()
    }))
}

function initChart() {
    $("#myDoughnutChart").each((function() {
        new Chart(this, {
            type: "doughnut",
            data: {
                labels: ["Income", "Expense"],
                datasets: [{
                    data: [30, 70],
                    backgroundColor: ["#0d408d", "#45d4d8"],
                    borderWidth: 0
                }]
            },
            options: {
                aspectRatio: 1.3,
                responsive: !0,
                plugins: {
                    legend: {
                        position: "right",
                        align: "start",
                        labels: {
                            boxWidth: 20,
                            padding: 12,
                            usePointStyle: !0
                        }
                    },
                    title: {
                        display: !0
                    }
                },
                cutout: "60%"
            }
        })
    }))
}

function headerScrollUp() {
    var t = jQuery(window).scrollTop();
    jQuery(window).on("scroll", (function(e) {
        var i = jQuery(window).scrollTop();
        i > t && i > jQuery(".header").innerHeight() ? jQuery(".header").addClass("header--hidden") : jQuery(".header").removeClass("header--hidden"), t = i, i > 0 ? jQuery(".header").addClass("header--fixed") : jQuery(".header").removeClass("header--fixed")
    }))
}

function initPostSlider() {
    $(".post-slider").each((function() {
        new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: !0,
            navigation: {
                nextEl: $(this).closest(".post-slider").find(".slider-btn__next").get(0),
                prevEl: $(this).closest(".post-slider").find(".slider-btn__prev").get(0)
            }
        })
    }))
}

function initServiceSlider() {
    $(".service-slider").each((function() {
        new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: !0,
            autoplay: {
                delay: 5e3
            },
            navigation: {
                nextEl: $(this).closest(".service-slider").find(".slider-btn__next").get(0),
                prevEl: $(this).closest(".service-slider").find(".slider-btn__prev").get(0)
            }
        })
    }))
}

function initStoriesSlider() {
    $(".stories-slider").each((function() {
        new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: !0,
            autoplay: {
                delay: 5e3
            },
            navigation: {
                nextEl: $(this).closest(".slider").find(".slider-btn__next").get(0),
                prevEl: $(this).closest(".slider").find(".slider-btn__prev").get(0)
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                }
            }
        })
    }))
}

function initTestimonialSlider() {
    $(".testimonial-slider").each((function() {
        new Swiper(this, {
            slidesPerView: "auto",
            spaceBetween: 40,
            pagination: {
                el: $(this).closest(".testimonial-slider").find(".swiper-pagination").get(0),
                clickable: !0
            },
            breakpoints: {
                1024: {
                    spaceBetween: 32
                }
            }
        })
    }))
}

function initMenu() {
    $(".menu__item").each((function() {
        $(this).find(".sub-menu").length && $(this).addClass("has-submenu")
    })), $(".sub-arrow").on("click", (function(t) {
        var e = $(this).closest(".menu__item");
        e.find(".sub-menu").length && (t.preventDefault(), e.toggleClass("submenu-open"), e.siblings(".submenu-open").removeClass("submenu-open"))
    })), $(".nav-opener").on("click", (function(t) {
        t.preventDefault(), $("body").toggleClass("nav-active")
    })), $(".menu-overlay").on("click", (function() {
        $("body").removeClass("nav-active")
    }))
}

function initAccordion() {
    $(".accordion__item:not(.open) .accordion__expanded").hide(), $(".accordion__item .accordion__title").on("click", (function() {
        var t = $(this).closest(".accordion__item")[0];
        $(this).closest(".accordion__item").toggleClass("open"), $(this).closest(".accordion__item").hasClass("open") ? ($(this).closest(".accordion__item").find(".accordion__expanded").stop().slideDown(), $(this).closest(".accordion__item").closest(".accordion").find(".accordion__item").each((function() {
            this != t && $(this).removeClass("open").find(".accordion__expanded").stop().slideUp()
        }))) : $(this).closest(".accordion__item").find(".accordion__expanded").stop().slideUp()
    }))
}! function() {
    "use strict";

    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var s = 0, r = e.length; r > s; s++) e[s][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = s.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        n = {},
        s = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", (function() {
            e.didResize || (e.didResize = !0, s.requestAnimationFrame(t))
        }))
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", (function() {
            (!e.didScroll || s.isTouch) && (e.didScroll = !0, s.requestAnimationFrame(t))
        }))
    }, e.prototype.handleResize = function() {
        s.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var n = e[i],
                s = n.newScroll > n.oldScroll ? n.forward : n.backward;
            for (var r in this.waypoints[i]) {
                var o = this.waypoints[i][r],
                    a = n.oldScroll < o.triggerPoint,
                    l = n.newScroll >= o.triggerPoint;
                (a && l || !a && !l) && (o.queueTrigger(s), t[o.group.id] = o.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, s = t.length; s > n; n++) t[n].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var r in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var o = t[r];
            for (var a in this.waypoints[r]) {
                var l, c, d, h, u = this.waypoints[r][a],
                    p = u.options.offset,
                    f = u.triggerPoint,
                    g = 0,
                    m = null == f;
                u.element !== u.element.window && (g = u.adapter.offset()[o.offsetProp]), "function" == typeof p ? p = p.apply(u) : "string" == typeof p && (p = parseFloat(p), u.options.offset.indexOf("%") > -1 && (p = Math.ceil(o.contextDimension * p / 100))), l = o.contextScroll - o.contextOffset, u.triggerPoint = g + l - p, c = f < o.oldScroll, d = u.triggerPoint >= o.oldScroll, h = !c && !d, !m && (c && d) ? (u.queueTrigger(o.backward), n[u.group.id] = u.group) : (!m && h || m && o.oldScroll >= u.triggerPoint) && (u.queueTrigger(o.forward), n[u.group.id] = u.group)
            }
        }
        return s.requestAnimationFrame((function() {
            for (var t in n) n[t].flushTriggers()
        })), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, s.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, s.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
            vertical: {},
            horizontal: {}
        },
        s = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i],
                s = "up" === i || "left" === i;
            n.sort(s ? e : t);
            for (var r = 0, o = n.length; o > r; r += 1) {
                var a = n[r];
                (a.options.continuous || r === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }, s.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        return t === t.window
    }

    function e(e) {
        return t(e) ? e : e.defaultView
    }

    function i(t) {
        this.element = t, this.handlers = {}
    }
    var n = window.Waypoint;
    i.prototype.innerHeight = function() {
        return t(this.element) ? this.element.innerHeight : this.element.clientHeight
    }, i.prototype.innerWidth = function() {
        return t(this.element) ? this.element.innerWidth : this.element.clientWidth
    }, i.prototype.off = function(t, e) {
        function i(t, e, i) {
            for (var n = 0, s = e.length - 1; s > n; n++) {
                var r = e[n];
                i && i !== r || t.removeEventListener(r)
            }
        }
        var n = t.split("."),
            s = n[0],
            r = n[1],
            o = this.element;
        if (r && this.handlers[r] && s) i(o, this.handlers[r][s], e), this.handlers[r][s] = [];
        else if (s)
            for (var a in this.handlers) i(o, this.handlers[a][s] || [], e), this.handlers[a][s] = [];
        else if (r && this.handlers[r]) {
            for (var l in this.handlers[r]) i(o, this.handlers[r][l], e);
            this.handlers[r] = {}
        }
    }, i.prototype.offset = function() {
        if (!this.element.ownerDocument) return null;
        var t = this.element.ownerDocument.documentElement,
            i = e(this.element.ownerDocument),
            n = {
                top: 0,
                left: 0
            };
        return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
            top: n.top + i.pageYOffset - t.clientTop,
            left: n.left + i.pageXOffset - t.clientLeft
        }
    }, i.prototype.on = function(t, e) {
        var i = t.split("."),
            n = i[0],
            s = i[1] || "__default",
            r = this.handlers[s] = this.handlers[s] || {};
        (r[n] = r[n] || []).push(e), this.element.addEventListener(n, e)
    }, i.prototype.outerHeight = function(e) {
        var i, n = this.innerHeight();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n
    }, i.prototype.outerWidth = function(e) {
        var i, n = this.innerWidth();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n
    }, i.prototype.scrollLeft = function() {
        var t = e(this.element);
        return t ? t.pageXOffset : this.element.scrollLeft
    }, i.prototype.scrollTop = function() {
        var t = e(this.element);
        return t ? t.pageYOffset : this.element.scrollTop
    }, i.extend = function() {
        function t(t, e) {
            if ("object" == typeof t && "object" == typeof e)
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
        for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++) t(e[0], e[i]);
        return e[0]
    }, i.inArray = function(t, e, i) {
        return null == e ? -1 : e.indexOf(t, i)
    }, i.isEmptyObject = function(t) {
        for (var e in t) return !1;
        return !0
    }, n.adapters.push({
        name: "noframework",
        Adapter: i
    }), n.Adapter = i
}(), $(document).ready((function() {
    initMenu(), initAccordion(), headerScrollUp(), initChart(), initProgressBar(), initPostSlider(), initCountAnimation(), initIsotope(), initImageSlider(), initServiceSlider(), initHeroSlider(), initTestimonialSlider(), initStoriesSlider(), initVideoPoster(), initHeroGallery()
}));