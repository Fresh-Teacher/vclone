(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        0: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return y
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "e", (function() {
                return k
            })), n.d(e, "b", (function() {
                return C
            })), n.d(e, "s", (function() {
                return O
            })), n.d(e, "g", (function() {
                return j
            })), n.d(e, "h", (function() {
                return $
            })), n.d(e, "d", (function() {
                return S
            })), n.d(e, "r", (function() {
                return P
            })), n.d(e, "j", (function() {
                return A
            })), n.d(e, "t", (function() {
                return R
            })), n.d(e, "o", (function() {
                return D
            })), n.d(e, "q", (function() {
                return L
            })), n.d(e, "f", (function() {
                return N
            })), n.d(e, "c", (function() {
                return U
            })), n.d(e, "i", (function() {
                return B
            })), n.d(e, "p", (function() {
                return M
            })), n.d(e, "a", (function() {
                return G
            })), n.d(e, "v", (function() {
                return K
            })), n.d(e, "n", (function() {
                return Q
            })), n.d(e, "u", (function() {
                return Y
            }));
            n(56), n(37), n(50), n(57), n(80), n(44), n(81);
            var r = n(14),
                o = n(9),
                c = n(36),
                l = n(23),
                d = (n(43), n(15), n(51), n(289), n(31), n(79), n(62), n(52), n(32), n(33), n(53), n(28), n(97), n(158), n(237), n(337), n(123), n(240), n(339), n(104), n(122), n(1)),
                f = n(41);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return x(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function y(t) {
                d.default.config.errorHandler && d.default.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function _(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function k(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = v(t.$children || []);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = e.value;
                        o.$fetch && n.push(o), o.$children && k(o, n)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }

            function C(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function O(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = d.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function j(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function $(t) {
                return j(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
            }

            function S(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function P(t, e) {
                return Promise.all(S(t, function() {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        var l, d;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, n();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), t.t0;
                                case 11:
                                    return o.components[c] = n = O(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function A(t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, P(e);
                            case 4:
                                return t.abrupt("return", m(m({}, e), {}, {
                                    meta: j(e).map((function(t, n) {
                                        return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function R(t, e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var o, c, d, h;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    payload: n.payload,
                                    error: n.error,
                                    base: e.router.options.base,
                                    env: {
                                        VUE_APP_API_LOCAL_URL: "https://api.vclass.ac/api/v1.1/"
                                    }
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(f.d)(path, n), window.location.assign(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([A(n.route), A(n.from)]);
                            case 3:
                                o = t.sent, c = Object(l.a)(o, 2), d = c[0], h = c[1], n.route && (e.context.route = d), n.from && (e.context.from = h), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function D(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : L(t[0], e).then((function() {
                    return D(t.slice(1), e)
                }))
            }

            function L(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function N(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(f.c)(e)
            }

            function U(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var d = data[l.name || "pathMatch"],
                                    f = void 0;
                                if (null == d) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(d)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                    if (0 === d.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var h = 0; h < d.length; h++) {
                                        if (f = o(d[h]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                        path += (0 === h ? l.prefix : l.delimiter) + f
                                    }
                                } else {
                                    if (f = l.asterisk ? F(d) : o(d), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                    path += l.prefix + f
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = I.exec(t));) {
                        var d = n[0],
                            f = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c = h + d.length, f) path += f[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                x = n[3],
                                y = n[4],
                                w = n[5],
                                _ = n[6],
                                k = n[7];
                            path && (r.push(path), path = "");
                            var C = null != v && null != m && m !== v,
                                O = "+" === _ || "*" === _,
                                j = "?" === _ || "*" === _,
                                $ = n[2] || l,
                                pattern = y || w;
                            r.push({
                                name: x || o++,
                                prefix: v || "",
                                delimiter: $,
                                optional: j,
                                repeat: O,
                                partial: C,
                                asterisk: Boolean(k),
                                pattern: pattern ? W(pattern) : k ? ".*" : "[^" + V($) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function B(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function M(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return m(m({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var I = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function z(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return z(t, !0)
            }

            function V(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function W(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function H(t) {
                return t && t.sensitive ? "" : "i"
            }

            function G(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
            var K = f.b,
                Q = (f.e, f.a);

            function Y(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        138: function(t, e, n) {
            "use strict";
            n(82), n(15), n(44), n(104), n(122), n(62), n(51), n(53), n(31), n(56), n(32), n(28), n(37), n(50), n(57), n(33);
            var r = n(1);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    d = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        d = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (d) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                d = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                f = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    d(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            f.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        159: function(t, e, n) {
            t.exports = n.p + "img/vu-logo-with-words.ac2cb23.png"
        },
        185: function(t, e, n) {
            "use strict";
            e.a = {}
        },
        188: function(t, e, n) {
            var r = n(377);

            function o() {
                return (o = r(regeneratorRuntime.mark((function t() {
                    var e, r, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(!1 in navigator)) {
                                    t.next = 2;
                                    break
                                }
                                throw new Error("serviceWorker is not supported in current browser!");
                            case 2:
                                return t.next = 4, n.e(88).then(n.bind(null, 462));
                            case 4:
                                return e = t.sent, r = e.Workbox, o = new r("/sw.js", {
                                    scope: "/"
                                }), t.next = 9, o.register();
                            case 9:
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            n(43), n(15), n(32), n(33), window.$workbox = function() {
                return o.apply(this, arguments)
            }().catch((function(t) {}))
        },
        241: function(t, e, n) {
            var content = n(352);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("15139a3c", content, !1, {
                sourceMap: !1
            })
        },
        242: function(t, e, n) {
            var content = n(354);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("c8b7fa80", content, !1, {
                sourceMap: !1
            })
        },
        243: function(t, e, n) {
            var content = n(367);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("352c896b", content, !1, {
                sourceMap: !1
            })
        },
        244: function(t, e, n) {
            var content = n(370);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("734e8839", content, !1, {
                sourceMap: !1
            })
        },
        245: function(t, e, n) {
            var content = n(372);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("3c1c5baf", content, !1, {
                sourceMap: !1
            })
        },
        246: function(t, e, n) {
            var content = n(374);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("2468bee4", content, !1, {
                sourceMap: !1
            })
        },
        247: function(t, e, n) {
            var content = n(376);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("327bfb22", content, !1, {
                sourceMap: !1
            })
        },
        279: function(t) {
            t.exports = JSON.parse('{"title":"Fresh App","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Fresh App"},{"hid":"description","name":"description","content":"We are the University of YOU"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Fresh App"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Fresh App"},{"hid":"og:description","name":"og:description","property":"og:description","content":"We are the University of YOU"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.3ed7d6.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.3ed7d6.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.793ac54f.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}')
        },
        284: function(t, e, n) {
            "use strict";
            var r = n(9),
                o = (n(43), n(15), n(82), n(1)),
                c = n(0),
                l = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function f() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function h() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = h.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", d))
                }
            }
        },
        295: function(t, e, n) {
            n(296), t.exports = n(297)
        },
        297: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(53), n(56), n(37), n(50), n(57);
                    var e = n(14),
                        r = n(9),
                        o = (n(150), n(314), n(327), n(328), n(43), n(31), n(15), n(44), n(51), n(52), n(104), n(122), n(79), n(62), n(28), n(32), n(33), n(82), n(1)),
                        c = n(276),
                        l = n(185),
                        d = n(0),
                        f = n(42),
                        h = n(284),
                        m = n(138);

                    function v(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return x(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                l = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                        }
                    }

                    function x(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var y, w, _ = [],
                        k = window.__NUXT__ || {},
                        C = k.config || {};
                    C._app && (n.p = Object(d.v)(C._app.cdnURL, C._app.assetsPath)), Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var O = o.default.config.errorHandler || console.error;

                    function j(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(d.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function() {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) f();
                        return l
                    }

                    function $(t, e, n) {
                        return S.apply(this, arguments)
                    }

                    function S() {
                        return (S = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, f, h = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(y.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(d.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return h._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: f
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function P(t, e) {
                        return k.serverRendered && e && Object(d.b)(t, e), t._Ctor = t, t
                    }

                    function A(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(d.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(d.o)(o, e)
                    }

                    function E(t, e, n) {
                        return R.apply(this, arguments)
                    }

                    function R() {
                        return R = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, l, h, m, x, w, k, C, O, $, S, P, E, R, T, D = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (_ = [], !0) : (c = [], _ = Object(d.g)(n, c).map((function(t, i) {
                                            return Object(d.c)(n.matched[c[i]].path)(n.params)
                                        }))), l = !1, h = function(path) {
                                            n.path === path.path && D.$loading.finish && D.$loading.finish(), n.path !== path.path && D.$loading.pause && D.$loading.pause(), l || (l = !0, o(path))
                                        }, t.next = 8, Object(d.t)(y, {
                                            route: e,
                                            from: n,
                                            next: h.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = y.nuxt.dateErr, this._hadError = Boolean(y.nuxt.err), m = [], (x = Object(d.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, A.call(this, x, y.context);
                                    case 15:
                                        if (!l) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return w = (f.a.options || f.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(f.a, y.context) : w);
                                    case 20:
                                        return k = t.sent, t.next = 23, A.call(this, x, y.context, k);
                                    case 23:
                                        if (!l) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return y.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return x.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(j(x, e, n)), t.prev = 29, t.next = 32, A.call(this, x, y.context);
                                    case 32:
                                        if (!l) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!y.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(C = x[0].options.layout) && (C = C(y.context)), t.next = 40, this.loadLayout(C);
                                    case 40:
                                        return C = t.sent, t.next = 43, A.call(this, x, y.context, C);
                                    case 43:
                                        if (!l) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!y.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        O = !0, t.prev = 48, $ = v(x), t.prev = 50, $.s();
                                    case 52:
                                        if ((S = $.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(P = S.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, P.options.validate(y.context);
                                    case 58:
                                        if (O = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), $.e(t.t0);
                                    case 68:
                                        return t.prev = 68, $.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if (O) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(x.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, l, f, h, v, x, w, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(d.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== _[i], D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                    return D._diffQuery[t]
                                                                })) : "function" == typeof l && (E || (E = Object(d.h)(e)), r._dataRefresh = l.apply(E[i], [e.query, n.query]))), D._hadError || !D._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return f = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, x = h && v ? 30 : 45, h && ((w = Object(d.q)(r.options.asyncData, y.context)).then((function(t) {
                                                                Object(d.b)(r, t), D.$loading.increase && D.$loading.increase(x)
                                                            })), f.push(w)), D.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                D.$loading.increase && D.$loading.increase(x)
                                                            })), f.push(p)), t.abrupt("return", Promise.all(f));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (R = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, R));
                                    case 90:
                                        return _ = [], Object(d.k)(R), "function" == typeof(T = (f.a.options || f.a).layout) && (T = T(y.context)), t.next = 96, this.loadLayout(T);
                                    case 96:
                                        this.error(R), this.$nuxt.$emit("routeChanged", e, n, R), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), R.apply(this, arguments)
                    }

                    function T(t, n) {
                        Object(d.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function D(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(y.context)), this.setLayout(n)
                    }

                    function L(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function N(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(d.h)(t),
                                c = Object(d.g)(t),
                                l = !1;
                            o.default.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        l = !0
                                    }
                                })), l && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), L(n)
                            }))
                        }
                    }

                    function U(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                            o.default.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function B() {
                        return B = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, c, l, f, h;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return y = e.app, w = e.router, n = new o.default(y), c = k.layout || "default", t.next = 6, n.loadLayout(c);
                                    case 6:
                                        return n.setLayout(c), l = function() {
                                            n.$mount("#__nuxt"), w.afterEach(T), w.afterEach(D.bind(n)), w.afterEach(N.bind(n)), o.default.nextTick((function() {
                                                U(n)
                                            }))
                                        }, t.next = 10, Promise.all((m = y.context.route, Object(d.d)(m, function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                                var l;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if ("function" != typeof e || e.options) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            return t.next = 3, e();
                                                        case 3:
                                                            e = t.sent;
                                                        case 4:
                                                            return l = P(Object(d.s)(e), k.data ? k.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                                        case 7:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n, r, o, c) {
                                                return t.apply(this, arguments)
                                            }
                                        }())));
                                    case 10:
                                        if (f = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), f.length && (n.setTransitions(j(f, w.currentRoute)), _ = w.currentRoute.matched.map((function(t) {
                                                return Object(d.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, k.error && n.error(k.error), w.beforeEach($.bind(n)), w.beforeEach(E.bind(n)), !k.serverRendered || !Object(d.n)(k.routePath, n.context.route.path)) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.abrupt("return", l());
                                    case 19:
                                        return h = function() {
                                            T(w.currentRoute, w.currentRoute), D.call(n, w.currentRoute), L(n), l()
                                        }, t.next = 22, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 22:
                                        E.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                            if (path) {
                                                var t = w.afterEach((function(e, n) {
                                                    t(), h()
                                                }));
                                                w.push(path, void 0, (function(t) {
                                                    t && O(t)
                                                }))
                                            } else h()
                                        }));
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                                var m
                            }), t)
                        }))), B.apply(this, arguments)
                    }
                    Object(f.b)(null, k.config).then((function(t) {
                        return B.apply(this, arguments)
                    })).catch(O)
                }.call(this, n(34))
        },
        351: function(t, e, n) {
            "use strict";
            n(241)
        },
        352: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]), r.locals = {}, t.exports = r
        },
        353: function(t, e, n) {
            "use strict";
            n(242)
        },
        354: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".nuxt-progress{background-color:#1aaae2;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), r.locals = {}, t.exports = r
        },
        355: function(t, e, n) {
            var content = n(356);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("17bc9ac2", content, !1, {
                sourceMap: !1
            })
        },
        356: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, 'body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:"Euclid Circular B";text-align:center}:root{--primary-color:#2d70b3;--secondary-color:#0053a7;--vu-red:#de282b;--color-success:#00c851}.btn{border:none!important;border-radius:3px;box-shadow:none!important;color:#fff!important;font-size:.9em;height:38px;transition:.3s;width:100%}.img-placeholder{background-color:#ebeef4;height:10rem;padding:0 auto}.primary-btn{background-color:#2d70b3;background-color:var(--primary-color)}.secondary-btn{background-color:#0053a7;background-color:var(--secondary-color)}.el-notification__content,.el-notification__title{text-align:left!important}.el-select-dropdown__item{align-items:center;border:none!important;display:flex;padding-left:1.5rem!important;text-align:left}.margin-left{margin-left:75px}.padding-left{padding-left:75px}.padding-right{padding-right:75px}@media screen and (max-width:767px){.margin-left{margin-left:40px}.padding-left{padding-left:40px!important}.padding-right{padding-right:40px!important}}@media screen and (max-width:500px){.margin-left{margin-left:30px!important}.padding-left{padding-left:30px!important}.padding-right{padding-right:30px!important}}@media screen and (max-width:350px){.margin-left{margin-left:20px!important}.padding-left{padding-left:20px!important}.padding-right{padding-right:20px!important}}', ""]), r.locals = {}, t.exports = r
        },
        361: function(t, e, n) {
            var content = n(362);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("21f2344c", content, !1, {
                sourceMap: !1
            })
        },
        362: function(t, e, n) {
            var r = n(25),
                o = n(189),
                c = n(363),
                l = n(364),
                d = n(365),
                f = r((function(i) {
                    return i[1]
                })),
                h = o(c),
                m = o(l),
                v = o(d);
            f.push([t.i, '@font-face{font-family:"Euclid Circular B";font-style:normal;font-weight:500;src:local("Euclid Circular B Medium"),local("EuclidCircularB-Medium"),url(' + h + ') format("truetype")}@font-face{font-family:"Euclid Circular B";font-style:normal;font-weight:600;src:local("Euclid Circular B SemiBold"),local("EuclidCircularB-SemiBold"),url(' + m + ') format("truetype")}@font-face{font-family:"Euclid Circular B";font-style:normal;font-weight:400;src:local("Euclid Circular B Regular"),local("EuclidCircularB-Regular"),url(' + v + ') format("truetype")}', ""]), f.locals = {}, t.exports = f
        },
        363: function(t, e, n) {
            t.exports = n.p + "fonts/EuclidCircularB-Medium.e5a8e44.ttf"
        },
        364: function(t, e, n) {
            t.exports = n.p + "fonts/EuclidCircularB-SemiBold.ba85f91.ttf"
        },
        365: function(t, e, n) {
            t.exports = n.p + "fonts/EuclidCircularB-Regular.f29cfc3.ttf"
        },
        366: function(t, e, n) {
            "use strict";
            n(243)
        },
        367: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, '.floating-apply-btn[data-v-b6d51862]{background:var(--vu-red);border:1px transparent!important;border-radius:40px;bottom:1.3rem;color:#fff;font-size:18px;height:auto!important;left:2rem;overflow:hidden;padding:.6rem;position:fixed;transition:all .5s ease-in-out;width:auto;z-index:999}.floating-apply-btn[data-v-b6d51862]:after,.floating-apply-btn[data-v-b6d51862]:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.345),transparent);content:"";filter:blur(5px);height:calc(100% + 4px);left:-2px;position:absolute;top:-2px;width:calc(100% + 4px);z-index:-1}.floating-apply-btn[data-v-b6d51862]:after{filter:blur(20px)}.floating-apply-btn[data-v-b6d51862]:after,.floating-apply-btn[data-v-b6d51862]:before{animation:shimmer-b6d51862 2s infinite}@keyframes shimmer-b6d51862{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.hide[data-v-b6d51862]{opacity:0;visibility:hidden}@media screen and (max-width:500px){.floating-apply-btn[data-v-b6d51862]{font-size:14px}}@media screen and (max-width:350px){.floating-apply-btn[data-v-b6d51862]{font-size:12px;left:1rem}}', ""]), r.locals = {}, t.exports = r
        },
        368: function(t, e, n) {
            t.exports = n.p + "img/FAVICON_64X64.84a7016.png"
        },
        369: function(t, e, n) {
            "use strict";
            n(244)
        },
        370: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-1470f4c2]{box-sizing:border-box;font-size:14px;margin:0;padding:0}.disabled[data-v-1470f4c2]{background:#f5f7fa!important}.navbar[data-v-1470f4c2]{background-size:cover;display:block;height:40px}.school-icon-section[data-v-1470f4c2]{margin-left:75px;width:auto}.school-icon[data-v-1470f4c2]{display:none}.login-section[data-v-1470f4c2]{width:auto}.login-btn[data-v-1470f4c2]{background:var(--vu-red)}.covid-btn[data-v-1470f4c2],.login-btn[data-v-1470f4c2]{border-radius:5px;height:35px;padding:.5rem 1rem;width:auto}.covid-btn[data-v-1470f4c2]{background-color:#d8212f;margin-left:2rem}.search[data-v-1470f4c2]{background:#1aaae2;border-radius:50%;height:34px;margin-left:1.5rem;margin-right:75px;padding:.4rem;width:34px}.bx-search-alt-2[data-v-1470f4c2]{font-size:24px;font-weight:700}.menu-btn[data-v-1470f4c2]{background:#1aaae2;border-radius:5px;display:none;height:35px;margin-right:1rem;padding-left:.5rem;padding-right:.5rem;width:auto}.global-nav[data-v-1470f4c2]{background-color:#f5f7fa;position:sticky;top:0;z-index:999}.navbar-items .navbar-list[data-v-1470f4c2]{margin-left:75px;text-align:left;width:auto}.navbar-items .navbar-item[data-v-1470f4c2]{display:inline-block;list-style:none;padding:1rem 0}.global-link[data-v-1470f4c2],.mobile-link[data-v-1470f4c2]{color:#002968;font-weight:300;height:48px;-webkit-text-decoration:none;text-decoration:none}.navbar-item[data-v-1470f4c2]{border-left:1px solid #d7d7d7;height:48px;margin-right:-4px;text-align:center}.global-link[data-v-1470f4c2]:hover,.navbar-item[data-v-1470f4c2]:hover{color:#1aaae2}.global-nav-dropdown[data-v-1470f4c2],.navbar-item[data-v-1470f4c2]:hover{background:#fff;box-shadow:0 4px 5px rgba(0,0,0,.3)}.global-nav-dropdown[data-v-1470f4c2]{border-bottom:3px solid #00a0df;box-sizing:border-box;display:none;height:auto;max-width:100%;top:48px;transition:opacity .3s;transition:height .3s;width:auto;z-index:300}.global-dropdown-link[data-v-1470f4c2]{color:rgba(0,0,0,.647)}.global-dropdown-link[data-v-1470f4c2]:hover{color:#00a0df}.navbar-item:hover>.global-nav-dropdown[data-v-1470f4c2]{display:block}.mobile-search[data-v-1470f4c2]{background-color:#1aaae2;padding:1rem}.mobile-nav ul[data-v-1470f4c2]{margin-left:0;text-align:left}.mobile-nav ul li[data-v-1470f4c2]{border-top:1px solid #d7d7d7;display:block;height:47px;padding-left:1.5rem;padding-top:.8rem}.mobile-link[data-v-1470f4c2]:hover{color:#1aaae2}.disabled-mobile-link[data-v-1470f4c2]{background:#d8212f;color:#000!important}.disabled-mobile-link[data-v-1470f4c2]:hover{color:#000;cursor:not-allowed}@media (min-width:768px) and (max-width:1100px){.search[data-v-1470f4c2]{margin-right:2rem}.school-icon-section[data-v-1470f4c2]{margin-left:50px}.global-nav[data-v-1470f4c2]{display:none}.navbar-items .navbar-list[data-v-1470f4c2]{margin-left:50px}}@media (min-width:481px) and (max-width:767px){.school-icon-section[data-v-1470f4c2]{margin-left:50px}.school-icon[data-v-1470f4c2]{height:50px}}@media screen and (max-width:415px){.navbar[data-v-1470f4c2]{background-color:#fff;height:3.6rem;position:fixed!important;top:0;width:100%;z-index:20}.bx-menu[data-v-1470f4c2]{font-size:2rem!important}}@media (min-width:120px) and (max-width:382px){.login-btn[data-v-1470f4c2]{display:none}.school-icon-section[data-v-1470f4c2]{margin-left:30px}}@media (min-width:300px) and (max-width:768px){.search[data-v-1470f4c2]{margin-left:1rem;margin-right:1rem}.school-icon[data-v-1470f4c2]{height:50px}}@media (min-width:120px) and (max-width:480px){.school-icon-section[data-v-1470f4c2]{margin-left:30px}.search[data-v-1470f4c2]{margin-right:1rem}.covid-btn[data-v-1470f4c2],.search[data-v-1470f4c2]{margin-left:1rem}.school-icon[data-v-1470f4c2]{height:35px}}", ""]), r.locals = {}, t.exports = r
        },
        371: function(t, e, n) {
            "use strict";
            n(245)
        },
        372: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "", ""]), r.locals = {}, t.exports = r
        },
        373: function(t, e, n) {
            "use strict";
            n(246)
        },
        374: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-168f39c8]{box-sizing:border-box;font-size:14px;margin:0;padding:0}.disabled[data-v-168f39c8]{background:#f5f7fa!important}.global-nav[data-v-168f39c8]{background-color:#f5f7fa;position:sticky;top:0;z-index:999}.navbar-items .navbar-list[data-v-168f39c8]{margin-left:75px;text-align:left;width:auto}.navbar-items .navbar-item[data-v-168f39c8]{display:inline-block;list-style:none;padding:1rem 0}.global-link[data-v-168f39c8]{color:rgba(0,42,104,.816);font-weight:500;height:48px;-webkit-text-decoration:none;text-decoration:none}.navbar-item[data-v-168f39c8]{border-left:1px solid #d7d7d7;height:48px;margin-right:-4px;text-align:center}.global-link[data-v-168f39c8]:hover,.navbar-item[data-v-168f39c8]:hover{color:#1aaae2}.global-nav-dropdown[data-v-168f39c8],.navbar-item[data-v-168f39c8]:hover{background:#fff;box-shadow:0 4px 5px rgba(0,0,0,.3)}.global-nav-dropdown[data-v-168f39c8]{border-bottom:3px solid #00a0df;box-sizing:border-box;display:none;height:auto;max-width:100%;top:48px;transition:opacity .3s;transition:height .3s;width:auto;z-index:300}.global-dropdown-link[data-v-168f39c8]{color:rgba(0,0,0,.647)}.global-dropdown-link[data-v-168f39c8]:hover{color:#00a0df}.navbar-item:hover>.global-nav-dropdown[data-v-168f39c8]{display:block}@media (min-width:768px) and (max-width:1100px){.global-nav[data-v-168f39c8]{display:none}.navbar-items .navbar-list[data-v-168f39c8]{margin-left:50px}}", ""]), r.locals = {}, t.exports = r
        },
        375: function(t, e, n) {
            "use strict";
            n(247)
        },
        376: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, '[data-v-de311642]:root{--footer-link-color:#00a0df}*[data-v-de311642]{box-sizing:border-box;font-size:14px;margin:0;padding:0}button[data-v-de311642]{background-color:#1aaae2;height:36px;margin-bottom:16px;margin-top:16px;padding-left:.6rem;padding-right:.6rem;width:auto}hr[data-v-de311642]{size:2px;color:var(--primary-color)}h4[data-v-de311642]{font-size:17px;margin-bottom:1rem}.footer[data-v-de311642]{background-color:#002968;margin:0}.footer[data-v-de311642],.footer-nav[data-v-de311642]{height:auto;width:100%}.footer-nav[data-v-de311642]{background-color:#002d74;color:#fff;min-height:70px;padding-top:25px}.nav-items[data-v-de311642]{margin-left:75px;text-align:left}.nav-items div[data-v-de311642]{display:inline;margin-right:40px}.footer-nav-item[data-v-de311642]{color:hsla(0,0%,100%,.73);-webkit-text-decoration:none;text-decoration:none}.footer-nav-item[data-v-de311642]:hover{color:#1aaae2}nuxt-link[data-v-de311642]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.footer-body[data-v-de311642]{color:hsla(0,0%,100%,.87);margin-left:75px;margin-top:3rem;text-align:left;width:90%}.footer-link-color[data-v-de311642]{color:#00a0df}.location[data-v-de311642]{margin-bottom:4rem;padding-right:33px}.contact-us[data-v-de311642]{margin-bottom:4rem;padding-left:15px}.social[data-v-de311642]{display:flex;flex-direction:column;margin-bottom:4rem}.social-apps-list[data-v-de311642]{list-style:none}.social-app i[data-v-de311642]{color:#fff;font-size:30px;height:48px;margin-left:20px}.social-app i[data-v-de311642]:hover{color:#00a0df}.social button[data-v-de311642],.social img[data-v-de311642],.social-apps-list[data-v-de311642]{float:right}.social button[data-v-de311642],.social img[data-v-de311642]{margin-right:4px}.social button[data-v-de311642]{margin-top:50px}.footer-utility[data-v-de311642]{height:auto;min-height:60px;padding-top:1rem;width:100%}.footer-utility .footer-nav-item[data-v-de311642]{color:#b2b5be;font-size:13px}.footer-utility .footer-nav-item[data-v-de311642]:hover{color:#fff}@media (min-width:768px) and (max-width:1100px){.nav-items[data-v-de311642]{margin-left:50px}.footer-body[data-v-de311642]{margin-left:70px}.faqs-btn[data-v-de311642]{height:auto;min-height:36px;text-align:left}.location[data-v-de311642]{padding-right:20px}.social-app i[data-v-de311642]{font-size:24px;padding-left:0}}@media (min-width:768px) and (max-width:951px){.nav-items[data-v-de311642]{display:grid;grid-template-areas:"row1-left-col row1-center-col row1-right-col" "row2-left-col row2-center-col row2-right-col";grid-template-columns:1f 1f 1f;grid-template-rows:2rem 4rem}}@media (min-width:481px) and (max-width:767px){.nav-items[data-v-de311642]{display:grid;grid-template-areas:"row1-left-col row1-center-col " "row2-left-col row2-center-col " "row3-left-col row3-center-col ";grid-template-columns:1f 1f;grid-template-rows:2rem 2rem 4rem}.footer-body[data-v-de311642],.nav-items[data-v-de311642]{margin-left:50px}.contact-us[data-v-de311642]{padding-left:0!important}.faqs-btn[data-v-de311642]{height:auto;text-align:left;width:auto}.social-app i[data-v-de311642]{margin-left:0;margin-right:20px}.social button[data-v-de311642],.social img[data-v-de311642],.social-apps-list[data-v-de311642]{float:left}}@media (min-width:120px) and (max-width:480px){.nav-items[data-v-de311642]{display:grid;grid-template-areas:"row1-left-col row1-right-col " "row2-left-col row2-right-col " "row3-left-col row3-right-col ";grid-template-columns:1f 1f;grid-template-rows:2rem 2rem 6rem;margin-left:30px}.row2-left-col[data-v-de311642]{grid-area:row2-left-col;margin-top:2rem}.row2-right-col[data-v-de311642]{grid-area:row2-right-col;margin-top:2rem}.row3-left-col[data-v-de311642]{grid-area:row3-left-col;margin-top:2rem}.row3-right-col[data-v-de311642]{grid-area:row3-right-col;margin-top:2rem}.nav-item[data-v-de311642]{margin-bottom:5rem}.footer-body[data-v-de311642]{margin-left:30px}.contact-us[data-v-de311642],.location[data-v-de311642]{padding-right:1rem}.faqs-btn[data-v-de311642]{height:auto;text-align:left}.social-app i[data-v-de311642]{margin-left:0;margin-right:10px}.social button[data-v-de311642],.social img[data-v-de311642],.social-apps-list[data-v-de311642]{float:left}.contact-us[data-v-de311642]{padding-left:0}}@media (min-width:120px) and (max-width:200px){.footer-body[data-v-de311642],.nav-items[data-v-de311642]{margin-left:10px}.social-apps-list[data-v-de311642]{display:flex;flex-wrap:wrap}.social img[data-v-de311642]{width:80%}}', ""]), r.locals = {}, t.exports = r
        },
        42: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return pe
            })), n.d(e, "a", (function() {
                return R
            }));
            var r = {};
            n.r(r), n.d(r, "AccordionComponent", (function() {
                return H
            })), n.d(r, "ApplyToVU", (function() {
                return G
            })), n.d(r, "BreadCrumbComponent", (function() {
                return K
            })), n.d(r, "ClientOnlyLoadingIndicator", (function() {
                return Q
            })), n.d(r, "FooterComponent", (function() {
                return Y
            })), n.d(r, "GalleryCategoryCardComponent", (function() {
                return J
            })), n.d(r, "GalleryImageComponent", (function() {
                return X
            })), n.d(r, "GlobalNavbarComponent", (function() {
                return Z
            })), n.d(r, "HomePageBannerComponent", (function() {
                return tt
            })), n.d(r, "HomeSelectPathComponent", (function() {
                return et
            })), n.d(r, "LoadingSpinner", (function() {
                return nt
            })), n.d(r, "MobileSideBarComponent", (function() {
                return at
            })), n.d(r, "MoreAboutStaffDialog", (function() {
                return ot
            })), n.d(r, "NavBarComponent", (function() {
                return it
            })), n.d(r, "NeedInformationComponent", (function() {
                return st
            })), n.d(r, "NewsUpdateComponent", (function() {
                return ct
            })), n.d(r, "ProgramAdmissionRequirementsComponent", (function() {
                return lt
            })), n.d(r, "ProgramCareerOpportunitiesComponent", (function() {
                return ut
            })), n.d(r, "ProgramCoursesAndAdvancedCreditComponent", (function() {
                return pt
            })), n.d(r, "ProgramOverViewComponent", (function() {
                return ft
            })), n.d(r, "ProgramPathWaysComponent", (function() {
                return ht
            })), n.d(r, "ProgramScholarshipsAndAwardsComponent", (function() {
                return mt
            })), n.d(r, "ProgramSideBarComponent", (function() {
                return vt
            })), n.d(r, "ProgramTuitionAndFeesComponent", (function() {
                return gt
            })), n.d(r, "ProgramWhatYouWillLearnComponent", (function() {
                return bt
            })), n.d(r, "ProgrammeCardComponent", (function() {
                return xt
            })), n.d(r, "ProgrammesComponent", (function() {
                return yt
            })), n.d(r, "ProgrammesSidebarTagsComponent", (function() {
                return wt
            })), n.d(r, "ProgramsSideBarComponent", (function() {
                return _t
            })), n.d(r, "RelatedProgramsComponent", (function() {
                return kt
            })), n.d(r, "SideBarComponent", (function() {
                return Ct
            })), n.d(r, "SideBarLinksComponent", (function() {
                return Ot
            })), n.d(r, "TeamCardComponent", (function() {
                return jt
            })), n.d(r, "TwitterFeed", (function() {
                return $t
            })), n.d(r, "UploadStudentPhotoDialogComponent", (function() {
                return St
            })), n.d(r, "CarouselItem", (function() {
                return Pt
            })), n.d(r, "MobileCarouselComponent", (function() {
                return At
            })), n.d(r, "OnlineApplicationsUploadDocumentDialog", (function() {
                return Et
            }));
            n(52), n(37), n(51), n(80), n(44), n(81);
            var o = n(9),
                c = n(36),
                l = (n(43), n(31), n(62), n(15), n(28), n(97), n(1)),
                d = n(277),
                f = n(186),
                h = n.n(f),
                m = n(78),
                v = n.n(m),
                x = (n(32), n(33), n(187)),
                y = n(41),
                w = n(0);
            n(286);
            "scrollRestoration" in window.history && (Object(w.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(w.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(w.u)("manual")
            })));

            function _(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function k(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var C = function() {};
            l.default.use(x.a);
            var O = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n ? r = n : o && function(t) {
                        var e = Object(w.g)(t);
                        if (1 === e.length) {
                            var n = e[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    var o = document.querySelector(n);
                                    if (o) {
                                        var c;
                                        r = {
                                            selector: n
                                        };
                                        var l = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                        l && (r.offset = {
                                            y: l
                                        })
                                    }
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/about-vu",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(1), n.e(42)]).then(n.bind(null, 823)))
                    },
                    name: "about-vu"
                }, {
                    path: "/academics",
                    component: function() {
                        return Object(w.m)(n.e(45).then(n.bind(null, 824)))
                    },
                    name: "academics"
                }, {
                    path: "/contact-us",
                    component: function() {
                        return Object(w.m)(n.e(48).then(n.bind(null, 825)))
                    },
                    name: "contact-us"
                }, {
                    path: "/gallery",
                    component: function() {
                        return Object(w.m)(n.e(50).then(n.bind(null, 826)))
                    },
                    name: "gallery"
                }, {
                    path: "/get-to-work",
                    component: function() {
                        return Object(w.m)(n.e(54).then(n.bind(null, 827)))
                    },
                    name: "get-to-work"
                }, {
                    path: "/how-you-will-learn",
                    component: function() {
                        return Object(w.m)(n.e(58).then(n.bind(null, 820)))
                    },
                    name: "how-you-will-learn"
                }, {
                    path: "/know-your-future",
                    component: function() {
                        return Object(w.m)(n.e(60).then(n.bind(null, 828)))
                    },
                    name: "know-your-future"
                }, {
                    path: "/library",
                    component: function() {
                        return Object(w.m)(n.e(63).then(n.bind(null, 829)))
                    },
                    name: "library"
                }, {
                    path: "/students",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(0), n.e(80)]).then(n.bind(null, 830)))
                    },
                    name: "students"
                }, {
                    path: "/vu-radio",
                    component: function() {
                        return Object(w.m)(n.e(83).then(n.bind(null, 831)))
                    },
                    name: "vu-radio"
                }, {
                    path: "/about-vu/collaboration-and-partnerships",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(0), n.e(40)]).then(n.bind(null, 832)))
                    },
                    name: "about-vu-collaboration-and-partnerships"
                }, {
                    path: "/about-vu/governance",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(1), n.e(41)]).then(n.bind(null, 833)))
                    },
                    name: "about-vu-governance"
                }, {
                    path: "/about-vu/our-teams",
                    component: function() {
                        return Object(w.m)(n.e(43).then(n.bind(null, 834)))
                    },
                    name: "about-vu-our-teams"
                }, {
                    path: "/academics/exemption-and-credit-transfer",
                    component: function() {
                        return Object(w.m)(n.e(44).then(n.bind(null, 835)))
                    },
                    name: "academics-exemption-and-credit-transfer"
                }, {
                    path: "/academics/vclass",
                    component: function() {
                        return Object(w.m)(n.e(46).then(n.bind(null, 836)))
                    },
                    name: "academics-vclass"
                }, {
                    path: "/get-to-work/about-wil",
                    component: function() {
                        return Object(w.m)(n.e(51).then(n.bind(null, 837)))
                    },
                    name: "get-to-work-about-wil"
                }, {
                    path: "/get-to-work/frequently-asked-questions",
                    component: function() {
                        return Object(w.m)(n.e(52).then(n.bind(null, 838)))
                    },
                    name: "get-to-work-frequently-asked-questions"
                }, {
                    path: "/get-to-work/how-wil-works",
                    component: function() {
                        return Object(w.m)(n.e(53).then(n.bind(null, 839)))
                    },
                    name: "get-to-work-how-wil-works"
                }, {
                    path: "/get-to-work/key-steps",
                    component: function() {
                        return Object(w.m)(n.e(55).then(n.bind(null, 840)))
                    },
                    name: "get-to-work-key-steps"
                }, {
                    path: "/get-to-work/organisation-partner-employer-benefits",
                    component: function() {
                        return Object(w.m)(n.e(56).then(n.bind(null, 841)))
                    },
                    name: "get-to-work-organisation-partner-employer-benefits"
                }, {
                    path: "/get-to-work/your-call",
                    component: function() {
                        return Object(w.m)(n.e(57).then(n.bind(null, 842)))
                    },
                    name: "get-to-work-your-call"
                }, {
                    path: "/library/call-number-guides",
                    component: function() {
                        return Object(w.m)(n.e(61).then(n.bind(null, 843)))
                    },
                    name: "library-call-number-guides"
                }, {
                    path: "/library/electronic-services",
                    component: function() {
                        return Object(w.m)(n.e(62).then(n.bind(null, 844)))
                    },
                    name: "library-electronic-services"
                }, {
                    path: "/library/lending-services",
                    component: function() {
                        return Object(w.m)(n.e(64).then(n.bind(null, 845)))
                    },
                    name: "library-lending-services"
                }, {
                    path: "/library/library-catalogue",
                    component: function() {
                        return Object(w.m)(n.e(65).then(n.bind(null, 846)))
                    },
                    name: "library-library-catalogue"
                }, {
                    path: "/library/off-campus-resources",
                    component: function() {
                        return Object(w.m)(n.e(66).then(n.bind(null, 847)))
                    },
                    name: "library-off-campus-resources"
                }, {
                    path: "/library/opening-hours",
                    component: function() {
                        return Object(w.m)(n.e(67).then(n.bind(null, 848)))
                    },
                    name: "library-opening-hours"
                }, {
                    path: "/library/questions_and_answers",
                    component: function() {
                        return Object(w.m)(n.e(68).then(n.bind(null, 849)))
                    },
                    name: "library-questions_and_answers"
                }, {
                    path: "/library/secretarial-services",
                    component: function() {
                        return Object(w.m)(n.e(69).then(n.bind(null, 850)))
                    },
                    name: "library-secretarial-services"
                }, {
                    path: "/library/vu-lib-help-desk",
                    component: function() {
                        return Object(w.m)(n.e(70).then(n.bind(null, 851)))
                    },
                    name: "library-vu-lib-help-desk"
                }, {
                    path: "/news/new-education-ministry-appointments",
                    component: function() {
                        return Object(w.m)(n.e(71).then(n.bind(null, 821)))
                    },
                    name: "news-new-education-ministry-appointments"
                }, {
                    path: "/programmes/academic-upgrading",
                    component: function() {
                        return Object(w.m)(n.e(75).then(n.bind(null, 852)))
                    },
                    name: "programmes-academic-upgrading"
                }, {
                    path: "/programmes/diploma",
                    component: function() {
                        return Object(w.m)(n.e(76).then(n.bind(null, 853)))
                    },
                    name: "programmes-diploma"
                }, {
                    path: "/programmes/higher-education-certificate",
                    component: function() {
                        return Object(w.m)(n.e(77).then(n.bind(null, 854)))
                    },
                    name: "programmes-higher-education-certificate"
                }, {
                    path: "/programmes/post-graduate",
                    component: function() {
                        return Object(w.m)(n.e(78).then(n.bind(null, 855)))
                    },
                    name: "programmes-post-graduate"
                }, {
                    path: "/programmes/under-graduate",
                    component: function() {
                        return Object(w.m)(n.e(79).then(n.bind(null, 856)))
                    },
                    name: "programmes-under-graduate"
                }, {
                    path: "/students/life-at-vu",
                    component: function() {
                        return Object(w.m)(n.e(81).then(n.bind(null, 857)))
                    },
                    name: "students-life-at-vu"
                }, {
                    path: "/students/students-charter",
                    component: function() {
                        return Object(w.m)(n.e(82).then(n.bind(null, 858)))
                    },
                    name: "students-students-charter"
                }, {
                    path: "/gallery/category/:slug?",
                    component: function() {
                        return Object(w.m)(Promise.all([n.e(86), n.e(49)]).then(n.bind(null, 859)))
                    },
                    name: "gallery-category-slug"
                }, {
                    path: "/application-successful/:online_application_id?",
                    component: function() {
                        return Object(w.m)(n.e(47).then(n.bind(null, 860)))
                    },
                    name: "application-successful-online_application_id"
                }, {
                    path: "/online-application/:slug?",
                    component: function() {
                        return Object(w.m)(n.e(72).then(n.bind(null, 868)))
                    },
                    name: "online-application-slug"
                }, {
                    path: "/online-payments/:online_application_id?",
                    component: function() {
                        return Object(w.m)(n.e(73).then(n.bind(null, 861)))
                    },
                    name: "online-payments-online_application_id"
                }, {
                    path: "/programme/:slug?",
                    component: function() {
                        return Object(w.m)(n.e(74).then(n.bind(null, 862)))
                    },
                    name: "programme-slug"
                }, {
                    path: "/",
                    component: function() {
                        return Object(w.m)(n.e(59).then(n.bind(null, 863)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function j(t, e) {
                var base = e._app && e._app.basePath || O.base,
                    n = new x.a(k(k({}, O), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(t, e, n) {
                    return "string" == typeof t && (t = Object(y.c)(t)), o(t, e, n)
                }, n
            }
            var $ = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                        data.nuxtChildDepth = f;
                        var h = l[f] || d,
                            m = {};
                        S.forEach((function(t) {
                            void 0 !== h[t] && (m[t] = h[t])
                        }));
                        var v = {};
                        P.forEach((function(t) {
                            "function" == typeof h[t] && (v[t] = h[t].bind(c))
                        }));
                        var x = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), x) return x.call(c, t)
                            }, !1 === h.css) {
                            var y = v.leave;
                            (!y || y.length < 2) && (v.leave = function(t, e) {
                                y && y.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: v
                        }, [w])
                    }
                },
                S = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                P = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                A = {
                    props: ["error"],
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                E = (n(351), n(21)),
                R = Object(E.a)(A, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "__nuxt-error-page"
                    }, [e("div", {
                        staticClass: "error"
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? e("p", {
                        staticClass: "description"
                    }, [void 0 === t.$route ? e("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }, [t._v("Back to Home")]) : e("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to Home")])], 1) : t._e()])])
                }), [], !1, null, null, null).exports,
                T = n(23),
                D = (n(123), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: $,
                        NuxtError: R
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(T.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(R, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                L = (n(53), n(56), n(50), n(57), n(82), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !0
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), clearTimeout(this._hide), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), this._hide = setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                N = (n(353), Object(E.a)(L, undefined, undefined, !1, null, null, null).exports),
                U = (n(355), n(357), n(361), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "col-12"
                    }, [t("img", {
                        staticClass: "school-icon-with-words d-lg-block d-none",
                        staticStyle: {
                            "margin-left": "75px"
                        },
                        attrs: {
                            src: n(159),
                            alt: "",
                            width: "150"
                        }
                    })])
                }]),
                B = (n(158), n(79), {
                    data: function() {
                        return {
                            showFloatingButton: !0,
                            isFloatingActionButtonRequired: !1
                        }
                    },
                    watch: {
                        $route: {
                            immediate: !0,
                            handler: function(t, e) {
                                this.$route.path.startsWith("/online-application/") || this.$route.path.startsWith("/online-payments/") || this.$route.path.startsWith("/application-successful/") || "vu-radio" === this.$route.name ? this.isFloatingActionButtonRequired = !1 : this.isFloatingActionButtonRequired = !0
                            }
                        }
                    },
                    mounted: function() {
                        this.recordWebsiteVisit(), window.addEventListener("scroll", this.handleScroll)
                    },
                    methods: {
                        recordWebsiteVisit: function() {
                            this.$axios.post("website/public/record-website-visit")
                        },
                        handleScroll: function() {
                            var t = this;
                            this.showFloatingButton = !1, clearTimeout(this.isScrolling), this.isScrolling = setTimeout((function() {
                                t.showFloatingButton = !0
                            }), 500)
                        },
                        onApplyNowIntent: function() {
                            if (this.$route.path.startsWith("/programme/")) {
                                var t = this.$route.params.slug,
                                    e = document.getElementById("program_title").innerText,
                                    n = document.getElementById("programme_category_route").innerText;
                                this.$router.push("/online-application/".concat(t, "?programme=").concat(e, "&programmeRoute=").concat(n))
                            } else this.$router.push("/programmes/post-graduate")
                        }
                    }
                }),
                M = (n(366), Object(E.a)(B, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("NavBarComponent"), t._v(" "), e("GlobalNavbarComponent"), t._v(" "), "vu-radio" != t.$route.name ? e("div", {
                        staticClass: "row w-100 my-4"
                    }, [t._m(0)]) : t._e(), t._v(" "), e("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isFloatingActionButtonRequired,
                            expression: "isFloatingActionButtonRequired"
                        }],
                        staticClass: "floating-apply-btn pe-3 ps-3",
                        class: {
                            hide: !t.showFloatingButton
                        },
                        on: {
                            click: t.onApplyNowIntent
                        }
                    }, [t._v("\n    Apply Now "), e("i", {
                        staticClass: "bx bx-link-external ms-2"
                    })]), t._v(" "), e("Nuxt", {
                        staticClass: "min-vh-100"
                    }), t._v(" "), e("FooterComponent")], 1)
                }), U, !1, null, "b6d51862", null)),
                I = M.exports;

            function z(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return F(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function F(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            installComponents(M, {
                NavBarComponent: n(459).default,
                GlobalNavbarComponent: n(461).default,
                FooterComponent: n(460).default
            });
            var V = {
                    _default: Object(w.s)(I)
                },
                W = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(w.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map(function() {
                                                var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                                    var p, r, o, component;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return p = [], n.$options.fetch && n.$options.fetch.length && p.push(Object(w.q)(n.$options.fetch, t.context)), n.$options.asyncData && p.push(Object(w.q)(n.$options.asyncData, t.context).then((function(t) {
                                                                    for (var e in t) l.default.set(n.$data, e, t[e])
                                                                }))), e.next = 5, Promise.all(p);
                                                            case 5:
                                                                p = [], n.$fetch && p.push(n.$fetch()), r = z(Object(w.e)(n.$vnode.componentInstance));
                                                                try {
                                                                    for (r.s(); !(o = r.n()).done;) component = o.value, p.push(component.$fetch())
                                                                } catch (t) {
                                                                    r.e(t)
                                                                } finally {
                                                                    r.f()
                                                                }
                                                                return e.abrupt("return", Promise.all(p));
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(w.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (R.options || R).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && V["_" + t] || (t = "default"), this.layoutName = t, this.layout = V["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && V["_" + t] || (t = "default"), Promise.resolve(V["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: N
                    }
                },
                H = (n(104), n(122), function() {
                    return n.e(5).then(n.bind(null, 496)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                }),
                G = function() {
                    return n.e(6).then(n.bind(null, 665)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                K = function() {
                    return n.e(7).then(n.bind(null, 470)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Q = function() {
                    return n.e(9).then(n.bind(null, 669)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Y = function() {
                    return Promise.resolve().then(n.bind(null, 460)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                J = function() {
                    return n.e(10).then(n.bind(null, 659)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                X = function() {
                    return n.e(11).then(n.bind(null, 661)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Z = function() {
                    return Promise.resolve().then(n.bind(null, 461)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                tt = function() {
                    return n.e(12).then(n.bind(null, 667)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                et = function() {
                    return n.e(13).then(n.bind(null, 675)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                nt = function() {
                    return n.e(14).then(n.bind(null, 674)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                at = function() {
                    return n.e(16).then(n.bind(null, 471)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                ot = function() {
                    return n.e(17).then(n.bind(null, 545)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                it = function() {
                    return Promise.resolve().then(n.bind(null, 459)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                st = function() {
                    return n.e(18).then(n.bind(null, 476)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                ct = function() {
                    return n.e(19).then(n.bind(null, 671)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                lt = function() {
                    return n.e(21).then(n.bind(null, 663)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                ut = function() {
                    return n.e(22).then(n.bind(null, 548)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                pt = function() {
                    return n.e(23).then(n.bind(null, 549)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                ft = function() {
                    return n.e(24).then(n.bind(null, 546)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                ht = function() {
                    return n.e(25).then(n.bind(null, 672)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                mt = function() {
                    return n.e(26).then(n.bind(null, 673)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                vt = function() {
                    return n.e(27).then(n.bind(null, 664)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                gt = function() {
                    return n.e(28).then(n.bind(null, 550)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                bt = function() {
                    return n.e(29).then(n.bind(null, 547)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                xt = function() {
                    return n.e(30).then(n.bind(null, 489)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                yt = function() {
                    return n.e(31).then(n.bind(null, 492)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                wt = function() {
                    return n.e(32).then(n.bind(null, 864)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                _t = function() {
                    return n.e(33).then(n.bind(null, 865)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                kt = function() {
                    return n.e(34).then(n.bind(null, 666)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Ct = function() {
                    return n.e(35).then(n.bind(null, 480)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Ot = function() {
                    return n.e(36).then(n.bind(null, 866)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                jt = function() {
                    return n.e(37).then(n.bind(null, 660)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                $t = function() {
                    return n.e(38).then(n.bind(null, 670)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                St = function() {
                    return Promise.all([n.e(4), n.e(39)]).then(n.bind(null, 867)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Pt = function() {
                    return n.e(8).then(n.bind(null, 551)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                At = function() {
                    return n.e(15).then(n.bind(null, 668)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                },
                Et = function() {
                    return n.e(20).then(n.bind(null, 662)).then((function(t) {
                        return Rt(t.default || t)
                    }))
                };

            function Rt(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                        return n(t, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            for (var Tt in r) l.default.component(Tt, r[Tt]), l.default.component("Lazy" + Tt, r[Tt]);
            var Dt = n(188),
                Lt = n.n(Dt),
                Nt = n(14);
            n(285);

            function Ut(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Bt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function Bt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function Mt(t, e, n) {
                return t.find((function(t) {
                    return n ? t[e] === n : t[e]
                }))
            }
            var meta = n(279),
                qt = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof t)
                            for (var n in e) {
                                var r = e[n];
                                if (Array.isArray(r)) {
                                    t[n] = t[n] || [];
                                    var o, c = Ut(r);
                                    try {
                                        for (c.s(); !(o = c.n()).done;) {
                                            var l = o.value;
                                            l.hid && Mt(t[n], "hid", l.hid) || l.name && Mt(t[n], "name", l.name) || t[n].push(l)
                                        }
                                    } catch (t) {
                                        c.e(t)
                                    } finally {
                                        c.f()
                                    }
                                } else if ("object" === Object(Nt.a)(r))
                                    for (var d in t[n] = t[n] || {}, r) t[n][d] = r[d];
                                else void 0 === t[n] && (t[n] = r)
                            } else console.warn("Cannot merge meta. Avoid using head as a function!")
                    }(t.app.head, meta)
                },
                It = function(t, e) {
                    return zt.apply(this, arguments)
                };

            function zt() {
                return (zt = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var r;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                r = {
                                    "64x64": "/_nuxt/icons/icon_64x64.3ed7d6.png",
                                    "120x120": "/_nuxt/icons/icon_120x120.3ed7d6.png",
                                    "144x144": "/_nuxt/icons/icon_144x144.3ed7d6.png",
                                    "152x152": "/_nuxt/icons/icon_152x152.3ed7d6.png",
                                    "192x192": "/_nuxt/icons/icon_192x192.3ed7d6.png",
                                    "384x384": "/_nuxt/icons/icon_384x384.3ed7d6.png",
                                    "512x512": "/_nuxt/icons/icon_512x512.3ed7d6.png",
                                    ipad_1536x2048: "/_nuxt/icons/splash_ipad_1536x2048.3ed7d6.png",
                                    ipadpro9_1536x2048: "/_nuxt/icons/splash_ipadpro9_1536x2048.3ed7d6.png",
                                    ipadpro10_1668x2224: "/_nuxt/icons/splash_ipadpro10_1668x2224.3ed7d6.png",
                                    ipadpro12_2048x2732: "/_nuxt/icons/splash_ipadpro12_2048x2732.3ed7d6.png",
                                    iphonese_640x1136: "/_nuxt/icons/splash_iphonese_640x1136.3ed7d6.png",
                                    iphone6_50x1334: "/_nuxt/icons/splash_iphone6_50x1334.3ed7d6.png",
                                    iphoneplus_1080x1920: "/_nuxt/icons/splash_iphoneplus_1080x1920.3ed7d6.png",
                                    iphonex_1125x2436: "/_nuxt/icons/splash_iphonex_1125x2436.3ed7d6.png",
                                    iphonexr_828x1792: "/_nuxt/icons/splash_iphonexr_828x1792.3ed7d6.png",
                                    iphonexsmax_1242x2688: "/_nuxt/icons/splash_iphonexsmax_1242x2688.3ed7d6.png"
                                }, n("icon", (function(t) {
                                    return r[t + "x" + t] || ""
                                }));
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var Ft = n(102),
                Vt = n.n(Ft),
                Wt = n(280);

            function Ht(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Gt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ht(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ht(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function Kt(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Qt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function Qt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var Yt = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = Kt(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return te(Object(Wt.a)(t, this.defaults))
                    }
                }, Jt = function() {
                    var t = Zt[Xt];
                    Yt["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, Xt = 0, Zt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Xt < Zt.length; Xt++) Jt();
            var te = function(t) {
                    var e = Vt.a.create(t);
                    return e.CancelToken = Vt.a.CancelToken, e.isCancel = Vt.a.isCancel,
                        function(t) {
                            for (var e in Yt) t[e] = Yt[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = Gt(Gt({}, e.defaults.headers.common), t.headers)
                        })), ee(e), e
                },
                ee = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, Vt.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                ne = function(t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "https://api.vclass.ac/api/v1.1/";
                    var o = te({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                },
                re = n(281),
                ae = n.n(re),
                oe = n(282),
                ie = n.n(oe);
            l.default.use(ae.a, {
                locale: ie.a
            });
            var se = n(283),
                ce = n.n(se);
            n(456);

            function le(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function ue(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? le(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : le(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            l.default.use(ce.a, {
                plyr: {}
            }), l.default.__my_mixin__ || (l.default.__my_mixin__ = !0, l.default.mixin({
                methods: {
                    showFailedMessage: function(title, t) {
                        var e = this.$createElement;
                        this.$notify({
                            title: title,
                            message: e("span", {
                                style: "color: black; text-align:left"
                            }, t),
                            type: "error"
                        })
                    },
                    showSuccessMessage: function(title, t) {
                        var e = this.$createElement;
                        this.$notify({
                            title: title,
                            message: e("span", {
                                style: "color: black;"
                            }, t),
                            type: "success"
                        })
                    },
                    showWarningMessage: function(title, t) {
                        var e = this.$createElement;
                        this.$notify({
                            title: title,
                            message: e("span", {
                                style: "color: black;"
                            }, t),
                            type: "warning"
                        })
                    }
                }
            })), l.default.mixin({
                methods: {
                    makeHttpRequest: function(t) {
                        var e = this;
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var r, o, body, c, l, d, f, h, m, v, x, y, data, w, _;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.url, o = t.method, body = t.body, c = t.loadingPropertyName, l = t.errorLoadingPropertyName, d = t.showFullScreenLoader, f = t.fullScreenLoaderMessage, h = t.isSilent, m = t.showSuccessMessage, v = t.persistSuccessNotification, n.prev = 1, n.next = 4, e.$nextTick();
                                    case 4:
                                        return c && (e[c] = !0), l && (e[l] = !1), d && (x = e.$loading({
                                            lock: !0,
                                            text: f || "Please wait...",
                                            background: "rgba(0, 0, 0, 0.7)"
                                        })), n.next = 9, e.$axios(r, {
                                            method: o,
                                            data: body
                                        });
                                    case 9:
                                        if (y = n.sent, data = y.data, !h) {
                                            n.next = 13;
                                            break
                                        }
                                        return n.abrupt("return", data);
                                    case 13:
                                        return data.success && m ? e.showSuccessMessage("Success", data.message, v) : data.success || e.showWarningMessage("Not Allowed", data.message), n.abrupt("return", data);
                                    case 17:
                                        if (n.prev = 17, n.t0 = n.catch(1), console.error(n.t0), l && (e[l] = !0), "Network Error" !== (w = n.t0).message) {
                                            n.next = 25;
                                            break
                                        }
                                        return e.showWarningMessage("Connection failed", "A network error occurred, please try again."), n.abrupt("return");
                                    case 25:
                                        if (!w.response) {
                                            n.next = 29;
                                            break
                                        }
                                        if (!(w.response.status >= 400 && w.response.status < 500)) {
                                            n.next = 29;
                                            break
                                        }
                                        return e.showWarningMessage("Not Allowed", w.response.data.message), n.abrupt("return", w.response.data);
                                    case 29:
                                        return e.showFailedMessage("Error", "An unexpected error occurred."), n.abrupt("return", w.response.data);
                                    case 31:
                                        return n.prev = 31, c && (e[c] = !1), null === (_ = x) || void 0 === _ || _.close(), n.finish(31);
                                    case 35:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 17, 31, 35]
                            ])
                        })))()
                    }
                }
            }), l.default.component(h.a.name, h.a), l.default.component(v.a.name, ue(ue({}, v.a), {}, {
                render: function(t, e) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
                }
            })), l.default.component($.name, $), l.default.component("NChild", $), l.default.component(D.name, D), Object.defineProperty(l.default.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root ? this.$root.$options.$nuxt : null;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), l.default.use(d.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var de = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function pe(t) {
                return fe.apply(this, arguments)
            }

            function fe() {
                return fe = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, c, d, f, path, h, m = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return h = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    c[t = "$" + t] = e, c.context[t] || (c.context[t] = e);
                                    var n = "__nuxt_" + t + "_installed__";
                                    l.default[n] || (l.default[n] = !0, l.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(l.default.prototype, t) || Object.defineProperty(l.default.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, null, t.next = 5, j(0, n);
                            case 5:
                                return r = t.sent, c = ue({
                                    head: {
                                        title: "Fresh App | Academic Excellence",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: ""
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.png"
                                        }, {
                                            rel: "stylesheet",
                                            type: "text/css",
                                            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                                            integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                                            crossorigin: "anonymous"
                                        }, {
                                            rel: "stylesheet",
                                            type: "text/css",
                                            href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
                                        }, {
                                            rel: "stylesheet",
                                            type: "text/css",
                                            href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                                        }],
                                        script: [{
                                            src: "/set-neexa-key.js",
                                            async: !0,
                                            defer: !0
                                        }, {
                                            src: "https://chat-widget.neexa.ai/main.js?nonce=1712575567734.4565",
                                            async: !0,
                                            defer: !0
                                        }],
                                        style: []
                                    },
                                    router: r,
                                    nuxt: {
                                        defaultTransition: de,
                                        transitions: [de],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, de, {
                                                    name: t
                                                }) : Object.assign({}, de, t) : de
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, c.context._errored = Boolean(t), t = t ? Object(w.p)(t) : null;
                                            var n = c.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, W), d = e ? e.next : function(t) {
                                    return c.router.push(t)
                                }, e ? f = r.resolve(e.url).route : (path = Object(w.f)(r.options.base, r.options.mode), f = r.resolve(path).route), t.next = 11, Object(w.t)(c, {
                                    route: f,
                                    next: d,
                                    error: c.nuxt.error.bind(c),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                    ssrContext: e
                                });
                            case 11:
                                h("config", n), t.next = 16;
                                break;
                            case 16:
                                if ("function" != typeof Lt.a) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, Lt()(c.context, h);
                            case 19:
                                if ("function" != typeof qt) {
                                    t.next = 22;
                                    break
                                }
                                return t.next = 22, qt(c.context, h);
                            case 22:
                                if ("function" != typeof It) {
                                    t.next = 25;
                                    break
                                }
                                return t.next = 25, It(c.context, h);
                            case 25:
                                if ("function" != typeof ne) {
                                    t.next = 28;
                                    break
                                }
                                return t.next = 28, ne(c.context, h);
                            case 28:
                                t.next = 31;
                                break;
                            case 31:
                                t.next = 34;
                                break;
                            case 34:
                                t.next = 37;
                                break;
                            case 37:
                                t.next = 40;
                                break;
                            case 40:
                                return t.next = 43, new Promise((function(t, e) {
                                    if (!r.resolve(c.context.route.fullPath).route.matched.length) return t();
                                    r.replace(c.context.route.fullPath, t, (function(n) {
                                        if (!n._isRouter) return e(n);
                                        if (2 !== n.type) return t();
                                        var l = r.afterEach(function() {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(w.j)(n);
                                                        case 3:
                                                            c.context.route = e.sent, c.context.params = n.params || {}, c.context.query = n.query || {}, l(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 43:
                                return t.abrupt("return", {
                                    app: c,
                                    router: r
                                });
                            case 44:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), fe.apply(this, arguments)
            }
        },
        459: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: function() {
                        return {
                            drawer: !1,
                            search: ""
                        }
                    },
                    methods: {
                        handleBeforeClose: function(t) {
                            this.drawer && (this.drawer = !1), t()
                        },
                        closeDrawer: function() {
                            this.drawer = !1
                        }
                    }
                },
                o = (n(369), n(371), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container-fluid d-lg-none d-md-block"
                    }, [e("div", {
                        staticClass: "navbar d-flex justify-content-between mobile-app-nav mb-2"
                    }, [e("div", {
                        staticClass: "school-icon-section"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [e("img", {
                        staticClass: "school-icon-with-words d-md-block d-none",
                        attrs: {
                            src: n(159),
                            alt: "",
                            width: "150"
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "school-icon d-md-none d-sm-block d-block",
                        attrs: {
                            src: n(368),
                            alt: ""
                        }
                    })])], 1), t._v(" "), e("i", {
                        staticClass: "bx bx-menu",
                        staticStyle: {
                            color: "#00000095",
                            "font-size": "2.8em",
                            "padding-right": "25px"
                        },
                        on: {
                            click: function(e) {
                                t.drawer = !0
                            }
                        }
                    })]), t._v(" "), e("el-drawer", {
                        attrs: {
                            title: "",
                            visible: t.drawer,
                            "with-header": !1,
                            size: "60%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.drawer = e
                            },
                            "before-close": t.handleBeforeClose
                        }
                    }, [e("div", {
                        staticClass: "mobile-nav w-100"
                    }, [e("ul", [e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Home")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("About VU")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Programmes")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/how-you-will-learn"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("How You Will Learn")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/academics"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Academics")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/students"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Students")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/get-to-work"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Get to work")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/gallery"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Gallery")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/library"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("Library")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "mobile-link",
                        attrs: {
                            to: "/vu-radio"
                        }
                    }, [e("li", {
                        on: {
                            click: t.closeDrawer
                        }
                    }, [t._v("VU Radio")])])], 1)])])], 1)
                }), [], !1, null, "1470f4c2", null);
            e.default = component.exports
        },
        460: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "col-sm-12 col-md-4 location"
                    }, [e("h4", {
                        staticClass: "font-weight-bold"
                    }, [t._v("Fresh App")]), t._v(" "), e("p", [t._v("\n          Our Address: "), e("br"), t._v("\n          Victoria Towers "), e("br"), t._v(" 1-13 Jinja Road, Kampala\n        ")]), t._v(" "), e("br"), t._v(" "), e("p", [t._v("\n          Fresh App, the home to limitless opportunities. Leave behind what’s familiar and step into a world of endless possibilities that define: Who you are, your aspirations, how you impact your community, the country and the rest of the world.\n        ")]), t._v(" "), e("p", {
                        staticClass: "font-italic mt-4"
                    }, [t._v('"We\'re the University of YOU"')])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("p", [t._v("\n          Send us an email at "), e("a", {
                        staticClass: "footer-link-color fw-bold text-decoration-none",
                        attrs: {
                            href: "mailto:info@vu.ac.ug"
                        }
                    }, [t._v("info@vu.ac.ug")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("p", {
                        staticClass: "pt-3"
                    }, [t._v("\n          General Enquiries "), e("br"), t._v(" "), e("a", {
                        staticClass: "footer-link-color fw-bold text-decoration-none",
                        attrs: {
                            href: "tel:+256 782 397 699"
                        }
                    }, [t._v("Tel +256 782 397 699")]), t._v(" or "), e("a", {
                        staticClass: "footer-link-color fw-bold text-decoration-none",
                        attrs: {
                            href: "mailto:head-marketing@vu.ac.ug"
                        }
                    }, [t._v("head-marketing@vu.ac.ug")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("p", {
                        staticClass: "pt-3"
                    }, [t._v(" \n          International & Online Students Support Office "), e("br"), t._v(" "), e("a", {
                        staticClass: "footer-link-color fw-bold text-decoration-none",
                        attrs: {
                            href: "tel:+256 782 397 699"
                        }
                    }, [t._v("Tel +256 707 780 155")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("p", {
                        staticClass: "pt-3"
                    }, [t._v(" \n          Admissions & Registry "), e("br"), t._v(" "), e("a", {
                        staticClass: "footer-link-color fw-bold text-decoration-none",
                        attrs: {
                            href: "mailto:admissions@vu.ac.ug"
                        }
                    }, [t._v("admissions@vu.ac.ug")])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "col-sm-12 col-md-4 social"
                    }, [e("div", [e("ul", {
                        staticClass: "social-apps-list d-flex"
                    }, [e("li", [e("a", {
                        staticClass: "social-app",
                        attrs: {
                            target: "_blank",
                            href: "https://www.facebook.com/VUKampala"
                        }
                    }, [e("i", {
                        staticClass: "bx bxl-facebook-square"
                    })])]), t._v(" "), e("li", [e("a", {
                        staticClass: "social-app",
                        attrs: {
                            target: "_blank",
                            href: "https://twitter.com/VUKampala"
                        }
                    }, [e("i", {
                        staticClass: "bx bxl-twitter"
                    })])]), t._v(" "), e("li", [e("a", {
                        staticClass: "social-app",
                        attrs: {
                            target: "_blank",
                            href: "https://www.instagram.com/victoriauniversity_kampala/"
                        }
                    }, [e("i", {
                        staticClass: "bx bxl-instagram"
                    })])]), t._v(" "), e("li", [e("a", {
                        staticClass: "social-app",
                        attrs: {
                            target: "_blank",
                            href: "https://youtube.com/@VuAcUg"
                        }
                    }, [e("i", {
                        staticClass: "bx bxl-youtube"
                    })])]), t._v(" "), e("li", [e("a", {
                        staticClass: "social-app",
                        attrs: {
                            target: "_blank",
                            href: "https://www.linkedin.com/in/victoria-university-465891152/"
                        }
                    }, [e("i", {
                        staticClass: "bx bxl-linkedin-square"
                    })])])])]), t._v(" "), e("div", {
                        staticClass: "mt-5"
                    }, [e("img", {
                        attrs: {
                            src: n(159),
                            alt: "",
                            width: "180"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "text-end mt-4"
                    }, [t._v('\n          "We\'re the University of YOU"\n        ')])])
                }],
                o = {
                    data: function() {
                        return {}
                    },
                    methods: {}
                },
                c = (n(375), n(21)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container-fluid footer"
                    }, [e("div", {
                        staticClass: "footer-nav"
                    }, [e("div", {
                        staticClass: "nav-items"
                    }, [e("div", {
                        staticClass: "nav-item"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [t._v(" About VU")])], 1), t._v(" "), e("div", {
                        staticClass: "nav-item"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [t._v(" Admissions")])], 1), t._v(" "), e("div", {
                        staticClass: "nav-item row3-left-col"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/academics"
                        }
                    }, [t._v("\n          Academics")])], 1), t._v(" "), e("div", {
                        staticClass: "nav-item"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/students"
                        }
                    }, [t._v(" Students")])], 1), t._v(" "), e("div", {
                        staticClass: "nav-item"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/gallery"
                        }
                    }, [t._v("\n          Gallery")])], 1), t._v(" "), e("div", {
                        staticClass: "nav-item row3-right-col"
                    }, [e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/library"
                        }
                    }, [t._v("\n          Library")])], 1)])]), t._v(" "), e("div", {
                        staticClass: "footer-body"
                    }, [e("div", {
                        staticClass: "row w-100"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "col-sm-12 col-md-4 ml-4 contact-us"
                    }, [e("h4", {
                        staticClass: "font-weight-bold"
                    }, [t._v("Contact Us")]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), e("div", {}, [e("nuxt-link", {
                        attrs: {
                            to: "/contact-us"
                        }
                    }, [e("button", {
                        staticClass: "btn primary-btn mt-5"
                    }, [t._v("Send Us a message")])])], 1)]), t._v(" "), t._m(5)])]), t._v(" "), e("hr")])
                }), r, !1, null, "de311642", null);
            e.default = component.exports
        },
        461: function(t, e, n) {
            "use strict";
            n.r(e);
            n(373);
            var r = n(21),
                component = Object(r.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "global-nav w-100 d-none d-lg-block d-xl-block"
                    }, [e("div", {
                        staticClass: "navbar-items position-relative"
                    }, [e("ul", {
                        staticClass: "navbar-list"
                    }, [e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("\n          Home")])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [t._v("\n          About VU\n        ")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [t._v("\n                About VU\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu/our-teams"
                        }
                    }, [t._v("\n                Our Teams\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu/governance"
                        }
                    }, [t._v("\n                Governance\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu/collaboration-and-partnerships"
                        }
                    }, [t._v("\n                Collaboration & Partnerships\n              ")])], 1)])])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [t._v("\n          Admissions")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [t._v("\n                Undergraduate\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [t._v("\n                Postgraduate\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [t._v("\n              Academic Upgrading\n              ")])], 1)])])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/how-you-will-learn"
                        }
                    }, [t._v("\n        How You Will Learn")])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/academics"
                        }
                    }, [t._v("\n          Academics")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/academics/exemption-and-credit-transfer"
                        }
                    }, [t._v("\n                Exemption and Credit Transfer\n              ")])], 1)])])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/students"
                        }
                    }, [t._v("\n          Students")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students"
                        }
                    }, [t._v("\n                Students\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students/students-charter"
                        }
                    }, [t._v("\n                Students' Charter\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students/life-at-vu"
                        }
                    }, [t._v("\n                Life at VU\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/academics/vclass"
                        }
                    }, [t._v("\n                VClass\n              ")])], 1)])])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/get-to-work"
                        }
                    }, [t._v("\n          Get To Work")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work"
                        }
                    }, [t._v("\n                Get to Work\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/about-wil"
                        }
                    }, [t._v("\n                About WIL\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/how-wil-works"
                        }
                    }, [t._v("\n                How WIL works\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/key-steps"
                        }
                    }, [t._v("\n                Key Steps\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/organisation-partner-employer-benefits"
                        }
                    }, [t._v("\n                Organisation / Partner / Employer Benefits\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/your-call"
                        }
                    }, [t._v("\n                Your Call\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/frequently-asked-questions"
                        }
                    }, [t._v("\n                FAQz\n              ")])], 1)])])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/gallery"
                        }
                    }, [t._v("\n          Gallery")])], 1), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/library"
                        }
                    }, [t._v("\n          Library")]), t._v(" "), e("div", {
                        staticClass: "global-nav-dropdown position-absolute"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/lending-services"
                        }
                    }, [t._v("\n                Lending services\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/secretarial-services"
                        }
                    }, [t._v("\n                Secretarial services\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/electronic-services"
                        }
                    }, [t._v("\n                Electronic Services\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/call-number-guides"
                        }
                    }, [t._v("\n                Call Number Guides\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/library-catalogue"
                        }
                    }, [t._v("\n                Library Catalogue\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/vu-lib-help-desk"
                        }
                    }, [t._v("\n                VULIB Helpdesk\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/questions_and_answers"
                        }
                    }, [t._v("\n                FAQs\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/opening-hours"
                        }
                    }, [t._v("\n                Opening Hours\n              ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "nav-link global-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/off-campus-resources"
                        }
                    }, [t._v("\n                Off Campus Resources\n              ")])], 1)])])], 1), t._v(" "), t._m(0), t._v(" "), e("li", {
                        staticClass: "navbar-item"
                    }, [e("nuxt-link", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            to: "/vu-radio"
                        }
                    }, [t._v("\n        VU Radio")])], 1)])])])
                }), [function() {
                    var t = this._self._c;
                    return t("li", {
                        staticClass: "navbar-item"
                    }, [t("a", {
                        staticClass: "global-link h-100 w-100 p-4",
                        attrs: {
                            href: "https://vclass.ac/",
                            target: "_blank",
                            to: "/gallery"
                        }
                    }, [this._v("\n          My VU Log in")])])
                }], !1, null, "168f39c8", null);
            e.default = component.exports
        }
    },
    [
        [295, 84, 3, 85]
    ]
]);