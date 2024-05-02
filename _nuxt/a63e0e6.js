(window.webpackJsonp = window.webpackJsonp || []).push([
    [78, 7, 16, 18, 30, 31, 35], {
        463: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(464),
                o = n.n(r);
            for (var l in r)["default"].indexOf(l) < 0 && function(t) {
                n.d(e, t, (function() {
                    return r[t]
                }))
            }(l);
            e.default = o.a
        },
        464: function(t, e) {},
        465: function(t, e, n) {
            var content = n(473);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("4ae772d0", content, !1, {
                sourceMap: !1
            })
        },
        466: function(t, e, n) {
            var content = n(475);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("0f9f2f94", content, !1, {
                sourceMap: !1
            })
        },
        467: function(t, e, n) {
            var content = n(478);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("fcba8c50", content, !1, {
                sourceMap: !1
            })
        },
        468: function(t, e, n) {
            var content = n(482);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("49e43379", content, !1, {
                sourceMap: !1
            })
        },
        470: function(t, e, n) {
            "use strict";
            n.r(e);
            n(31);
            var r = {
                    name: "CustomBreadCrumb",
                    props: {
                        routes: {
                            type: Array,
                            default: function() {
                                return []
                            },
                            required: !0
                        }
                    }
                },
                o = (n(472), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "bread-crumb"
                    }, t._l(t.routes, (function(n, i) {
                        return e("NuxtLink", {
                            key: n.url,
                            staticClass: "item",
                            attrs: {
                                to: "".concat(n.url)
                            }
                        }, [t._v(t._s(n.name) + " "), i !== t.routes.length - 1 ? e("span", [t._v(" >> ")]) : t._e()])
                    })), 1)
                }), [], !1, null, "c8c49e20", null);
            e.default = component.exports
        },
        471: function(t, e, n) {
            "use strict";
            n.r(e);
            n(31);
            var r = {
                    data: function() {
                        return {
                            isOpen: !1,
                            currentRoute: this.$nuxt.$route.name
                        }
                    },
                    computed: {
                        baseRoute: function() {
                            return this.currentRoute.split("-")[0]
                        }
                    },
                    methods: {
                        toggleAccordion: function() {
                            this.isOpen = !this.isOpen
                        }
                    }
                },
                o = (n(474), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "mobile-app-sidenav"
                    }, ["admissions" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("Academics")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "d-md-none d-lg-none d-xl-none"
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/academics/vclass"
                        }
                    }, [t._v("\n              VClass\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start disabled",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("\n              Academic Facilities & Centers\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start disabled",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("\n              Admission Requirements\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start disabled",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("\n              International Students Guidlines\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/academics/exemption-and-credit-transfer"
                        }
                    }, [t._v("\n              Exemption and transfer credit\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start disabled",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("\n              Tuition and Fees\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start disabled",
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("\n              How to Apply and Register\n            ")])], 1)])])])]) : "about" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("About VU")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "d-md-none d-lg-none d-xl-none"
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [t._v("\n              About VU\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu/our-teams"
                        }
                    }, [t._v("\n              Our Teams\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/about-vu/governance"
                        }
                    }, [t._v("\n              Governance\n            ")])], 1)])])])]) : "library" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("Library")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "d-md-none d-lg-none d-xl-none"
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library"
                        }
                    }, [t._v("\n              Library\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/lending-services"
                        }
                    }, [t._v("\n              Lending services\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/secretarial-services"
                        }
                    }, [t._v("\n              Secretarial services\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/call-number-guides"
                        }
                    }, [t._v("\n              Call Number Guides\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/library-catalogue"
                        }
                    }, [t._v("\n              Library Catalogue\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/questions_and_answers"
                        }
                    }, [t._v("\n              FAQs\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/opening-hours"
                        }
                    }, [t._v("\n              Opening Hours\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/library/off-campus-resources"
                        }
                    }, [t._v("\n              Off Campus Resources\n            ")])], 1)])])])]) : "get" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("Get to Work")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }]
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work"
                        }
                    }, [t._v("\n              Get to Work\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/about-wil"
                        }
                    }, [t._v("\n              About WIL\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/how-wil-works"
                        }
                    }, [t._v("\n              How WIL works\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/key-steps"
                        }
                    }, [t._v("\n              Key Steps\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/organisation-partner-employer-benefits"
                        }
                    }, [t._v("\n              Organisation / Partner / Employer Benefits\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/your-call"
                        }
                    }, [t._v("\n              Your Call\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/get-to-work/frequently-asked-questions"
                        }
                    }, [t._v("\n              FAQz\n            ")])], 1)])])])]) : "students" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("Students")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }]
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students"
                        }
                    }, [t._v("\n              Students\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students/students-charter"
                        }
                    }, [t._v("\n              Students' Charter\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/students/life-at-vu"
                        }
                    }, [t._v("\n              Life at VU\n            ")])], 1)])])])]) : "programmes" == t.baseRoute || "programme" === t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("div", {
                        staticClass: "d-block d-md-none d-lg-none d-xl-none pt-4 pe-4 pb-4 d-flex justify-content-between header-title"
                    }, [e("nuxt-link", {
                        staticClass: "text-dark text-decoration-none w-auto margin-left",
                        attrs: {
                            to: "#"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "border-bottom": "1px dotted #000"
                        }
                    }, [t._v("Programmes")])]), t._v(" "), e("span", {
                        on: {
                            click: function(e) {
                                return t.toggleAccordion()
                            }
                        }
                    }, [e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isOpen,
                            expression: "!isOpen"
                        }],
                        staticClass: "bx bxs-down-arrow fs-6 rounded-circle p-2"
                    }), t._v(" "), e("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bx bxs-up-arrow fs-6 rounded-circle p-2"
                    })])], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }]
                    }, [e("div", {
                        staticClass: "margin-left w-auto header-dropdown"
                    }, [e("ul", {
                        staticClass: "list-unstyled"
                    }, [e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [t._v("\n              Undergraduate\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [t._v("\n              Postgraduate\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [t._v("\n            Academic Upgrading\n            ")])], 1), t._v(" "), e("li", {
                        staticClass: "list-group-item-action"
                    }, [e("nuxt-link", {
                        staticClass: "header-dropdown-link p-2 px-3 text-start",
                        attrs: {
                            to: "/how-you-will-learn"
                        }
                    }, [t._v("\n            How You Will Learn\n            ")])], 1)])])])]) : t._e()])
                }), [], !1, null, "e00e52ba", null);
            e.default = component.exports
        },
        472: function(t, e, n) {
            "use strict";
            n(465)
        },
        473: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".bread-crumb a[data-v-c8c49e20]{color:rgba(94,100,110,.75);display:inline-block;font-size:1em;font-style:italic;font-weight:400;margin-right:6px;padding-bottom:3px;-webkit-text-decoration:none;text-decoration:none}", ""]), r.locals = {}, t.exports = r
        },
        474: function(t, e, n) {
            "use strict";
            n(466)
        },
        475: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-e00e52ba]{box-sizing:border-box;margin:0;padding:0}nuxt-link[data-v-e00e52ba]{-webkit-text-decoration:none;text-decoration:none}a.nuxt-link-active[data-v-e00e52ba],a.nuxt-link-exact-active[data-v-e00e52ba]{color:#1aaae2}.header-dropdown[data-v-e00e52ba],.header-title[data-v-e00e52ba]{background-color:#f5f7fa}.header .bxs-down-arrow[data-v-e00e52ba]{background-color:#ebeef4;cursor:pointer}.header .bxs-up-arrow[data-v-e00e52ba]{background-color:#002d74;color:#fff;cursor:pointer}.header .bxs-down-arrow[data-v-e00e52ba]:hover{background-color:#00a0df;color:#fff}.header-dropdown-link[data-v-e00e52ba]{background:#f5f7fa;border:1px solid #ebeef4;color:#000;display:block;-webkit-text-decoration:none;text-decoration:none}.header-dropdown-link[data-v-e00e52ba]:hover{color:#1aaae2}.disabled[data-v-e00e52ba]{background-color:#ebeef4;color:#000!important}.disabled[data-v-e00e52ba]:hover{cursor:not-allowed}@media screen and (max-width:415px){.mobile-app-sidenav[data-v-e00e52ba]{margin-top:1rem}}", ""]), r.locals = {}, t.exports = r
        },
        476: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(479),
                o = n(463);
            for (var l in o)["default"].indexOf(l) < 0 && function(t) {
                n.d(e, t, (function() {
                    return o[t]
                }))
            }(l);
            n(477);
            var d = n(21),
                component = Object(d.a)(o.default, r.a, r.b, !1, null, "5c25e444", null);
            e.default = component.exports
        },
        477: function(t, e, n) {
            "use strict";
            n(467)
        },
        478: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-5c25e444]{box-sizing:border-box;margin:0;padding:0}p[data-v-5c25e444]{font-size:16px}.margin-left[data-v-5c25e444]{margin-left:75px}.padding-left[data-v-5c25e444]{padding-left:75px}.padding-right[data-v-5c25e444]{padding-right:75px}.need-info[data-v-5c25e444]{background-color:#f5f7fa;padding-bottom:4rem;padding-top:4rem}.view-btn[data-v-5c25e444]{background-color:#91c432;border:2px solid #83b02d!important;color:#000!important;font-size:18px;height:auto!important;width:80%!important}.bx-chevron-right[data-v-5c25e444],.view-btn[data-v-5c25e444]:hover{background-color:#83b02d}@media screen and (max-width:767px){.margin-left[data-v-5c25e444]{margin-left:40px}.padding-left[data-v-5c25e444]{padding-left:40px!important}.padding-right[data-v-5c25e444]{padding-right:40px!important}}@media screen and (max-width:500px){.margin-left[data-v-5c25e444]{margin-left:30px!important}.padding-left[data-v-5c25e444]{padding-left:30px!important}.padding-right[data-v-5c25e444]{padding-right:30px!important}}@media screen and (max-width:350px){.margin-left[data-v-5c25e444]{margin-left:20px!important}.padding-left[data-v-5c25e444]{padding-left:20px!important}.padding-right[data-v-5c25e444]{padding-right:20px!important}}", ""]), r.locals = {}, t.exports = r
        },
        479: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return o
            }));
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {}, [e("section", {
                        staticClass: "need-info padding-left padding-right text-center border-top border-bottom"
                    }, [e("div", {
                        staticClass: "row px-0 mx-0"
                    }, [e("div", {
                        staticClass: "col-12"
                    }, [e("h1", {
                        staticClass: "mb-3"
                    }, [t._v(" Contact Us")]), t._v(" "), e("p", {
                        staticClass: "mb-3"
                    }, [t._v("\n          Need any Help? Contact us now and we shall be glad to get back to you\n        ")]), t._v(" "), e("nuxt-link", {
                        staticClass: "btn view-btn pt-3 pb-3",
                        attrs: {
                            to: "/contact-us"
                        }
                    }, [t._v("\n        Send Us a Message\n          "), e("i", {
                        staticClass: "bx bx-chevron-right rounded-circle p-1 ms-3"
                    })])], 1)])])])
                },
                o = []
        },
        480: function(t, e, n) {
            "use strict";
            n.r(e);
            n(31);
            var r = {
                    data: function() {
                        return {
                            currentRoute: this.$nuxt.$route.name
                        }
                    },
                    computed: {
                        baseRoute: function() {
                            return this.currentRoute.split("-")[0]
                        }
                    }
                },
                o = (n(481), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container"
                    }, ["academics" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/academics/vclass"
                        }
                    }, [e("li", {}, [t._v("VClass")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/academics/exemption-and-credit-transfer"
                        }
                    }, [e("li", {}, [t._v("Exemption and Transfer Credit")])])], 1)]) : "about" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/about-vu"
                        }
                    }, [e("li", {}, [t._v("About VU")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/about-vu/our-teams"
                        }
                    }, [e("li", {}, [t._v("Our Teams")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/about-vu/governance"
                        }
                    }, [e("li", {}, [t._v("Governance")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/about-vu/collaboration-and-partnerships"
                        }
                    }, [e("li", {}, [t._v("Collaboration & Partnerships")])])], 1)]) : "students" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/students"
                        }
                    }, [e("li", {}, [t._v("Students")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/students/students-charter"
                        }
                    }, [e("li", {}, [t._v("Students' Charter")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/students/life-at-vu"
                        }
                    }, [e("li", {}, [t._v("Life at VU")])])], 1)]) : "get" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work"
                        }
                    }, [e("li", {}, [t._v("Get to Work")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/about-wil"
                        }
                    }, [e("li", {}, [t._v("About WIL")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/how-wil-works"
                        }
                    }, [e("li", {}, [t._v("How WIL works")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/key-steps"
                        }
                    }, [e("li", {}, [t._v("Key Steps")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/organisation-partner-employer-benefits"
                        }
                    }, [e("li", {}, [t._v("Organisation / Partner / Employer Benefits")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/your-call"
                        }
                    }, [e("li", {}, [t._v("Your Call")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/get-to-work/frequently-asked-questions"
                        }
                    }, [e("li", {}, [t._v("FAQz")])])], 1)]) : "library" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library"
                        }
                    }, [e("li", {}, [t._v("Library")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/lending-services"
                        }
                    }, [e("li", {}, [t._v("Lending services")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/secretarial-services"
                        }
                    }, [e("li", {}, [t._v("Secretarial services")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/call-number-guides"
                        }
                    }, [e("li", {}, [t._v("Call Number Guides")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/library-catalogue"
                        }
                    }, [e("li", {}, [t._v("Library Catalogue")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/questions_and_answers"
                        }
                    }, [e("li", {}, [t._v("FAQs")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/opening-hours"
                        }
                    }, [e("li", {}, [t._v("Opening Hours")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/library/off-campus-resources"
                        }
                    }, [e("li", {}, [t._v("Off Campus Resources")])])], 1)]) : "programmes" == t.baseRoute ? e("div", {
                        staticClass: "w-100"
                    }, [e("ul", {}, [e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [e("li", {}, [t._v("Undergraduate")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [e("li", {}, [t._v("Postgraduate")])]), t._v(" "), e("nuxt-link", {
                        staticClass: "side-bar-link",
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [e("li", {}, [t._v("Academic Upgrading")])])], 1)]) : t._e()])
                }), [], !1, null, "6d3fc005", null);
            e.default = component.exports
        },
        481: function(t, e, n) {
            "use strict";
            n(468)
        },
        482: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-6d3fc005]{box-sizing:border-box;margin:0;padding:0}ul[data-v-6d3fc005]{list-style:none}li[data-v-6d3fc005]{border:.01px solid hsla(0,0%,63%,.5);border-bottom:none;border-right:none;padding:.7rem}.side-bar-link[data-v-6d3fc005]{color:rgba(0,0,0,.55);font-size:15px;font-weight:500;-webkit-text-decoration:none;text-decoration:none}.side-bar-link[data-v-6d3fc005]:hover{color:#1aaae2;cursor:pointer}a.nuxt-link-exact-active[data-v-6d3fc005]{color:#1aaae2}.disabled[data-v-6d3fc005]{color:rgba(0,0,0,.55)!important}.disabled[data-v-6d3fc005]:hover{cursor:not-allowed!important}", ""]), r.locals = {}, t.exports = r
        },
        483: function(t, e, n) {
            t.exports = n.p + "img/admissions-hero.1a74b99.png"
        },
        484: function(t, e, n) {
            var content = n(488);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("6b71db27", content, !1, {
                sourceMap: !1
            })
        },
        485: function(t, e, n) {
            var content = n(491);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("56f53333", content, !1, {
                sourceMap: !1
            })
        },
        487: function(t, e, n) {
            "use strict";
            n(484)
        },
        488: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".single-card[data-v-0ce67811]{color:#000;overflow:hidden}.single-programme[data-v-0ce67811]{color:rgba(0,0,0,.65);cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.programme-image[data-v-0ce67811]{height:20rem}.hover-border[data-v-0ce67811]{height:30rem}.hover-border[data-v-0ce67811]:hover{border:1px solid rgba(0,0,0,.3)!important}.img-placeholder[data-v-0ce67811]{background-color:#ebeef4;height:20rem;padding:0 auto}.programme-name[data-v-0ce67811]{font-size:16px}", ""]), r.locals = {}, t.exports = r
        },
        489: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: {
                        courseCode: {
                            type: String,
                            required: !0
                        },
                        programmeName: {
                            type: String,
                            required: !0
                        },
                        faculty: {
                            type: String,
                            required: !0
                        },
                        image: {
                            type: String,
                            required: !0
                        },
                        slug: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        goToProgrammeDetails: function() {
                            var t = this.courseCode.toLowerCase();
                            this.$router.push("/programme/".concat(this.slug + "-" + t))
                        }
                    }
                },
                o = (n(487), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "single-card text-start h-100 px-3 mb-4"
                    }, [e("div", {
                        staticClass: "single-programme",
                        on: {
                            click: t.goToProgrammeDetails
                        }
                    }, [e("div", {
                        staticClass: "border hover-border",
                        staticStyle: {
                            background: "#fdfdfd"
                        }
                    }, [e("el-image", {
                        staticClass: "w-100 p-0 programme-image",
                        attrs: {
                            fit: "cover",
                            src: t.image
                        }
                    }, [e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "placeholder"
                        },
                        slot: "placeholder"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder d-flex justify-content-center align-items-center"
                    }, ["" == t.image ? e("i", {
                        staticClass: "bx bx-error"
                    }) : t._e()])]), t._v(" "), e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "error"
                        },
                        slot: "error"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder d-flex justify-content-center align-items-center"
                    }, ["" == t.image ? e("i", {
                        staticClass: "bx bx-error"
                    }) : t._e()])])]), t._v(" "), e("div", {
                        staticClass: "p-4 overflow-hidden"
                    }, [e("h5", {
                        staticClass: "fw-bold programme-name"
                    }, [t._v("\n          " + t._s(t.programmeName) + "\n        ")]), t._v(" "), e("div", {
                        staticClass: "mt-2 lh-1"
                    }, [e("p", {
                        staticStyle: {
                            "font-size": "0.8em"
                        }
                    }, [t._v(t._s(t.faculty))])])])], 1)])])
                }), [], !1, null, "0ce67811", null);
            e.default = component.exports
        },
        490: function(t, e, n) {
            "use strict";
            n(485)
        },
        491: function(t, e, n) {
            var r = n(25)((function(i) {
                return i[1]
            }));
            r.push([t.i, "*[data-v-97b2bf12]{box-sizing:border-box;margin:0;padding:0}body[data-v-97b2bf12]{background:#fff}body[data-v-97b2bf12],p[data-v-97b2bf12]{font-size:16px}.tag[data-v-97b2bf12]{border:1px solid #918d8d;border-radius:12px;color:#918d8d;cursor:pointer;display:inline-block;font-size:15px;font-weight:600;font-weight:400;margin:.25em .1em;padding:.2em .5em .3em;transition:color .5s ease-in-out}.tag-count[data-v-97b2bf12]{background-color:var(--primary-color);border-radius:100%;color:#fff;font-size:12px;margin-left:10px;padding:3px 7px}.tag-selected .tag-count[data-v-97b2bf12]{background-color:#fff;color:var(--primary-color)}.tag-selected[data-v-97b2bf12]{background:#1aaae2;border:1px solid #fff;color:#fff;transition:color .5s ease-in-out}@media screen and (max-width:768px){.tag[data-v-97b2bf12]{font-size:12px;padding:.4em .8em!important}}", ""]), r.locals = {}, t.exports = r
        },
        492: function(t, e, n) {
            "use strict";
            n.r(e);
            n(51), n(15), n(285), n(44);
            var r = {
                    props: {
                        faculties: {
                            type: Array,
                            required: !1,
                            default: null
                        },
                        courses: {
                            type: Array,
                            required: !1,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            is_selected: !0
                        }
                    },
                    computed: {
                        totalTagCount: function() {
                            var t = this;
                            return function(e) {
                                return t.courses.filter((function(t) {
                                    return t.department.faculty.title === e
                                })).length
                            }
                        },
                        filteredCourses: function() {
                            var t, e = null === (t = this.faculties) || void 0 === t ? void 0 : t.find((function(t) {
                                return t.is_selected
                            }));
                            return e ? this.courses.filter((function(t) {
                                return t.department.faculty.title === e.faculty_title
                            })) : this.courses
                        }
                    },
                    methods: {
                        toggleTag: function(t) {
                            this.faculties.forEach((function(t) {
                                t.is_selected = !1
                            })), t.is_selected = !t.is_selected, this.is_selected = !1
                        },
                        clearFilters: function() {
                            this.faculties.forEach((function(t) {
                                t.is_selected = !1
                            })), this.is_selected = !0
                        }
                    }
                },
                o = (n(490), n(21)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {}, [e("div", {
                        staticClass: "w-100"
                    }, [e("span", {
                        staticClass: "mt-3 me-1",
                        on: {
                            click: t.clearFilters
                        }
                    }, [e("p", {
                        staticClass: "tag p-1 px-4",
                        class: {
                            "tag-selected": t.is_selected
                        }
                    }, [t._v("\n        Show All\n      ")])]), t._v(" "), t._l(t.faculties, (function(n, i) {
                        return e("span", {
                            key: i,
                            staticClass: "mt-2 me-1",
                            on: {
                                click: function(e) {
                                    return t.toggleTag(n)
                                }
                            }
                        }, [e("p", {
                            staticClass: "tag p-1 px-4",
                            class: {
                                "tag-selected": n.is_selected
                            }
                        }, [e("span", [t._v(t._s(n.faculty_title) + "\n\n          "), e("span", {
                            staticClass: "tag-count"
                        }, [t._v("\n            " + t._s(t.totalTagCount(n.faculty_title)) + "\n          ")])])])])
                    }))], 2), t._v(" "), e("div", {
                        staticClass: "row mb-5",
                        staticStyle: {
                            "margin-top": "3rem"
                        }
                    }, t._l(t.filteredCourses, (function(t, n) {
                        return e("ProgrammeCardComponent", {
                            key: n,
                            staticClass: "col-md-4 col-sm-6",
                            attrs: {
                                image: null == t.website_program_details ? "" : t.website_program_details.image_path_url,
                                "programme-name": t.title,
                                "course-code": t.course_code,
                                faculty: t.department.faculty.title,
                                slug: t.slug
                            }
                        })
                    })), 1)])
                }), [], !1, null, "97b2bf12", null);
            e.default = component.exports;
            installComponents(component, {
                ProgrammeCardComponent: n(489).default
            })
        },
        640: function(t, e, n) {
            var content = n(758);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(26).default)("117a75be", content, !1, {
                sourceMap: !1
            })
        },
        757: function(t, e, n) {
            "use strict";
            n(640)
        },
        758: function(t, e, n) {
            var r = n(25),
                o = n(189),
                l = n(483),
                d = r((function(i) {
                    return i[1]
                })),
                c = o(l);
            d.push([t.i, "*[data-v-08b004b4]{box-sizing:border-box;margin:0;padding:0}body[data-v-08b004b4]{background:#fff;font-size:16px}nuxt-link[data-v-08b004b4]{-webkit-text-decoration:none;text-decoration:none}p[data-v-08b004b4]{font-size:16px}ul[data-v-08b004b4]{list-style:none}li[data-v-08b004b4]{border:.01px solid hsla(0,0%,63%,.5);border-bottom:none;border-right:none;padding:.7rem}li[data-v-08b004b4]:hover{color:#1aaae2;cursor:pointer}.side-bar-link[data-v-08b004b4]{color:rgba(0,0,0,.55);font-size:.95em;font-weight:500}.header-dropdown-link[data-v-08b004b4],.side-bar-link[data-v-08b004b4]{-webkit-text-decoration:none;text-decoration:none}.header-dropdown-link[data-v-08b004b4]{background:#f5f7fa;border:1px solid #ebeef4;color:#000;display:block}.header-dropdown-link[data-v-08b004b4]:hover{color:#1aaae2}.secodary-bg[data-v-08b004b4]{background-color:#00a0df}.hero[data-v-08b004b4]{background-image:url(" + c + ");background-position:50%;background-repeat:no-repeat;background-size:cover;height:477px;width:100vw}.hero-overlay[data-v-08b004b4]{background-color:rgba(0,0,0,.6)}.margin-left[data-v-08b004b4]{margin-left:75px}.padding-left[data-v-08b004b4]{padding-left:75px}.padding-right[data-v-08b004b4]{padding-right:75px}.caption[data-v-08b004b4]{bottom:5rem;width:50vw}.caption p[data-v-08b004b4]{font-size:20px}.caption .btn[data-v-08b004b4]{background-color:#00a0df;font-size:18px;padding:0 .6rem}.main-content[data-v-08b004b4]{font-size:14px;padding-right:75px}.side-nav[data-v-08b004b4]{height:20rem;padding-right:4rem;position:sticky;top:1.2rem}.council[data-v-08b004b4],.management[data-v-08b004b4],.senate[data-v-08b004b4]{font-size:14px;padding-bottom:15px;padding-top:30px}@media screen and (max-width:900px){.side-nav[data-v-08b004b4]{padding-right:2rem}.view-btn[data-v-08b004b4]{width:100%!important}}@media screen and (max-width:767px){.margin-left[data-v-08b004b4]{margin-left:40px}.padding-left[data-v-08b004b4]{padding-left:40px!important}.padding-right[data-v-08b004b4]{padding-right:40px!important}.header[data-v-08b004b4]{background-color:#e3e4eb}.header-dropdown[data-v-08b004b4],.header-title[data-v-08b004b4]{background-color:#f5f7fa}.header .bxs-down-arrow[data-v-08b004b4]{background-color:#ebeef4;cursor:pointer}.header .bxs-up-arrow[data-v-08b004b4]{background-color:#002d74;color:#fff;cursor:pointer}.header .bxs-down-arrow[data-v-08b004b4]:hover{background-color:#00a0df;color:#fff}.hero[data-v-08b004b4]{height:50vh}.caption[data-v-08b004b4]{bottom:4rem;width:auto}}@media screen and (max-width:500px){.margin-left[data-v-08b004b4]{margin-left:30px!important}.padding-left[data-v-08b004b4]{padding-left:30px!important}.padding-right[data-v-08b004b4]{padding-right:30px!important}.hero[data-v-08b004b4]{height:40vh}.caption[data-v-08b004b4]{bottom:3rem}}@media screen and (max-width:350px){.margin-left[data-v-08b004b4]{margin-left:20px!important}.padding-left[data-v-08b004b4]{padding-left:20px!important}.padding-right[data-v-08b004b4]{padding-right:20px!important}.hero[data-v-08b004b4]{height:30vh}}", ""]), d.locals = {}, t.exports = d
        },
        855: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(9),
                o = (n(43), n(62), {
                    asyncData: function(t) {
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.$axios, e.prev = 1, e.next = 4, n.$get("website/public/courses/by-category?categoryName=POST_GRADUATE");
                                    case 4:
                                        if (!(r = e.sent).success || "COURSES FETCHED SUCCESSFULLY" !== r.message) {
                                            e.next = 11;
                                            break
                                        }
                                        return o = r.courses, l = r.faculties.map((function(t) {
                                            return {
                                                faculty_title: t,
                                                is_selected: !1
                                            }
                                        })), e.abrupt("return", {
                                            courses: o,
                                            faculties: l
                                        });
                                    case 11:
                                        e.next = 15;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 13]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            isOpen: !1,
                            crumbs: [{
                                name: "Home",
                                url: "/"
                            }, {
                                name: "Postgraduate",
                                url: "/programmes/post-graduate"
                            }]
                        }
                    },
                    methods: {}
                }),
                l = (n(757), n(21)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container-fluid px-0 mx-0"
                    }, [e("div", {
                        staticClass: "row w-100 px-0 mx-0"
                    }, [e("section", [e("div", {
                        staticClass: "text-start p-0 w-100 header mb-4"
                    }, [e("BreadCrumbComponent", {
                        staticClass: "mb-4 mt-4 d-none d-md-block margin-left",
                        attrs: {
                            routes: t.crumbs
                        }
                    }), t._v(" "), e("MobileSideBarComponent")], 1)]), t._v(" "), t._m(0), t._v(" "), e("section", {
                        staticClass: "main-content padding-left padding-right mt-5 mb-5 mx-0 text-start"
                    }, [e("div", {
                        staticClass: "row px-0 mx-0"
                    }, [e("div", {
                        staticClass: "col-md-3 d-none d-md-block side-nav"
                    }, [e("h4", {
                        staticClass: "pb-2"
                    }, [t._v("Our Programmes")]), t._v(" "), e("SideBarComponent")], 1), t._v(" "), e("div", {
                        staticClass: "col-md-9"
                    }, [e("h2", {
                        staticClass: "mb-3",
                        staticStyle: {
                            "font-size": "24px"
                        }
                    }, [t._v("Postgraduate")]), t._v(" "), e("ProgrammesComponent", {
                        attrs: {
                            courses: t.courses,
                            faculties: t.faculties
                        }
                    })], 1)])]), t._v(" "), e("NeedInformationComponent")], 1)])
                }), [function() {
                    var t = this._self._c;
                    return t("section", {
                        staticClass: "hero position-relative text-start text-light"
                    }, [t("div", {
                        staticClass: "w-100 h-100 hero-overlay"
                    }, [t("div", {
                        staticClass: "caption position-absolute margin-left"
                    }, [t("h1", {
                        staticClass: "font-weight-bold mb-4"
                    }, [this._v("Postgraduate")])])])])
                }], !1, null, "08b004b4", null);
            e.default = component.exports;
            installComponents(component, {
                BreadCrumbComponent: n(470).default,
                MobileSideBarComponent: n(471).default,
                SideBarComponent: n(480).default,
                ProgrammesComponent: n(492).default,
                NeedInformationComponent: n(476).default
            })
        }
    }
]);