(window.webpackJsonp = window.webpackJsonp || []).push([
    [59, 8, 9, 12, 13, 15, 19, 38], {
        495: function(t, e, r) {
            t.exports = r.p + "img/chatered-stamp.39a91bb.png"
        },
        506: function(t, e, r) {
            "use strict";
            var n = 0;

            function o(t) {
                if (!n) {
                    var s = document.createElement("script");
                    s.setAttribute("src", t), document.body.appendChild(s), n = new Promise((function(t) {
                        s.onload = function() {
                            t(window.twttr)
                        }
                    }))
                }
                return n
            }
            var d = {
                id: {
                    type: String,
                    required: !0
                },
                sourceType: {
                    type: String
                },
                slug: {
                    type: String
                },
                options: Object
            };
            t.exports = {
                addPlatformScript: o,
                twitterEmbedComponent: function(t) {
                    return {
                        data: function() {
                            return {
                                isLoaded: !1,
                                isAvailable: !1
                            }
                        },
                        props: Object.assign({}, d, t.props),
                        mounted: function() {
                            var e, r = this;
                            e = "profile" === this.sourceType ? {
                                sourceType: this.sourceType,
                                screenName: this.id
                            } : "list" === this.sourceType ? {
                                sourceType: this.sourceType,
                                ownerScreenName: this.id,
                                slug: this.slug
                            } : this.id, Promise.resolve(window.twttr ? window.twttr : o("//platform.twitter.com/widgets.js")).then((function(n) {
                                return t.embedComponent(n, e, r.$el, r.options)
                            })).then((function(data) {
                                r.isAvailable = void 0 !== data, r.isLoaded = !0
                            }))
                        },
                        render: function(t) {
                            if (this.isLoaded && this.isAvailable) return t("div", {
                                class: this.$props.widgetClass
                            });
                            if (this.isLoaded && !this.isAvailable && this.$props.errorMessage) {
                                var e = t("div", {
                                    class: this.$props.errorMessageClass,
                                    domProps: {
                                        innerHTML: this.$props.errorMessage
                                    }
                                });
                                return t("div", [e])
                            }
                            return t("div", {
                                class: this.$props.widgetClass
                            }, this.$slots.default)
                        }
                    }
                }
            }
        },
        533: function(t, e, r) {
            var content = r(583);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("6bfec8c7", content, !1, {
                sourceMap: !1
            })
        },
        534: function(t, e, r) {
            var content = r(585);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("34cd474e", content, !1, {
                sourceMap: !1
            })
        },
        535: function(t, e, r) {
            var content = r(587);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("0b8e03dd", content, !1, {
                sourceMap: !1
            })
        },
        536: function(t, e, r) {
            var content = r(589);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("a46fba4a", content, !1, {
                sourceMap: !1
            })
        },
        537: function(t, e, r) {
            var content = r(595);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("14ab65e1", content, !1, {
                sourceMap: !1
            })
        },
        538: function(t, e, r) {
            var content = r(597);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("e893cb52", content, !1, {
                sourceMap: !1
            })
        },
        539: function(t, e, r) {
            "use strict";
            var n = r(2),
                o = r(540);
            n({
                target: "String",
                proto: !0,
                forced: r(541)("link")
            }, {
                link: function(t) {
                    return o(this, "a", "href", t)
                }
            })
        },
        540: function(t, e, r) {
            var n = r(4),
                o = r(27),
                d = r(13),
                l = /"/g,
                c = n("".replace);
            t.exports = function(t, e, r, n) {
                var v = d(o(t)),
                    m = "<" + e;
                return "" !== r && (m += " " + r + '="' + c(d(n), l, "&quot;") + '"'), m + ">" + v + "</" + e + ">"
            }
        },
        541: function(t, e, r) {
            var n = r(3);
            t.exports = function(t) {
                return n((function() {
                    var e = "" [t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3
                }))
            }
        },
        542: function(t, e, r) {
            var content = r(599);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("aa06dbe0", content, !1, {
                sourceMap: !1
            })
        },
        551: function(t, e, r) {
            "use strict";
            r.r(e);
            r(286);
            var n = {
                    props: {
                        currentSlideIndex: {
                            type: Number,
                            required: !0
                        },
                        index: {
                            type: Number,
                            required: !0
                        }
                    }
                },
                o = r(21),
                component = Object(o.a)(n, (function() {
                    var t = this;
                    return (0, t._self._c)("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.currentSlideIndex === t.index,
                            expression: "currentSlideIndex === index"
                        }],
                        staticClass: "mobile-carousel-item"
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        582: function(t, e, r) {
            "use strict";
            r(533)
        },
        583: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, "*[data-v-0d653fde]{box-sizing:border-box;color:#fff;margin:0;padding:0}p[data-v-0d653fde]{font-size:17px}.banner-img[data-v-0d653fde]{background-position:50%;background-repeat:no-repeat;background-size:cover}.banner-ad[data-v-0d653fde]{background-color:var(--primary-color);padding:64px 54px;text-align:left}.learn-more-btn[data-v-0d653fde]{align-items:center;background-color:#2576c7;display:flex;justify-content:center;padding:0!important;-webkit-text-decoration:none;text-decoration:none;width:114px}@media (max-width:767px){.description[data-v-0d653fde]{font-size:.8em}.title[data-v-0d653fde]{font-size:1em}}.search-section[data-v-0d653fde]{background-color:#002968;background:url(/navbar-background.svg) 50% no-repeat;background-size:cover;border-bottom:3px solid #002d74;padding:52px 175px 30px}.search-section input[data-v-0d653fde]{height:54px}.search-btn[data-v-0d653fde]{background-color:#1aaae2;height:40px;margin-left:1.5rem;width:40px}@media (min-width:1101px) and (max-width:1300px){.banner-img[data-v-0d653fde]{height:auto}}@media (min-width:768px){.banner[data-v-0d653fde]{min-height:65vh}}@media (min-width:768px) and (max-width:1100px){.banner-img[data-v-0d653fde]{height:auto}.banner-ad[data-v-0d653fde]{padding:20px 40px}}@media (min-width:120px) and (max-width:767px){.banner-img[data-v-0d653fde]{height:32vh}.banner-ad[data-v-0d653fde]{padding:17px}.btn[data-v-0d653fde]{height:30px}.search-section[data-v-0d653fde]{padding:20px}}@media (min-width:120px) and (max-width:489px){.banner-img[data-v-0d653fde]{height:22vh}}@media (min-width:120px) and (max-width:200px){.banner-img[data-v-0d653fde]{height:12vh}}", ""]), n.locals = {}, t.exports = n
        },
        584: function(t, e, r) {
            "use strict";
            r(534)
        },
        585: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".mobile-carousel[data-v-0776933a]{background-color:var(--primary-color);color:#fff;display:none;position:relative;width:100%}.mobile-carousel-control[data-v-0776933a]{background-color:rgba(0,0,0,.167);border:none;border-radius:50%;color:hsla(0,0%,100%,.612);cursor:pointer;font-size:24px;height:40px;outline:none;position:absolute;top:50%;width:40px}.prev[data-v-0776933a]{left:10px}.next[data-v-0776933a]{right:10px}.banner-ad[data-v-0776933a]{background-color:var(--primary-color);padding:17px;text-align:left}.title[data-v-0776933a]{font-size:1.3em}.description[data-v-0776933a]{font-size:.9em}.learn-more-btn[data-v-0776933a]{align-items:center;background-color:#2576c7;display:flex;justify-content:center;padding:0!important;-webkit-text-decoration:none;text-decoration:none;width:114px}@media screen and (max-width:769px){.mobile-carousel[data-v-0776933a]{display:block}}", ""]), n.locals = {}, t.exports = n
        },
        586: function(t, e, r) {
            "use strict";
            r(535)
        },
        587: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, '.shimmer{background-color:#ebeef4;overflow:hidden;padding:0;position:relative}.shimmer:before{animation:shimmerAnimation 1s infinite;background:linear-gradient(90deg,transparent 0,#f8f8f8 50%,transparent);content:"";height:100%;left:-100%;position:absolute;top:0;width:200%}@keyframes shimmerAnimation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}', ""]), n.locals = {}, t.exports = n
        },
        588: function(t, e, r) {
            "use strict";
            r(536)
        },
        589: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, "*[data-v-525663ee]{box-sizing:border-box;margin:0;padding:0}.charted-img[data-v-525663ee]{bottom:0;left:0;opacity:1;position:absolute;width:100px;z-index:10}.img-placeholder[data-v-525663ee]{background-color:#ebeef4;height:30vw;padding:0 auto}.select-path[data-v-525663ee]{margin-bottom:20px;margin-top:90px}.circle[data-v-525663ee]{border:1.5rem solid #0077b5;border-radius:50%;height:10rem;width:10rem}.path-card[data-v-525663ee]{border:5px solid #fff;border-radius:5px;cursor:pointer;height:100%!important;padding:none;position:relative}.path-card[data-v-525663ee]:hover{padding:none;transition:all ease;transition-duration:.3s}.dot-container[data-v-525663ee]{position:absolute;top:-22px;width:100%;z-index:1}.dot[data-v-525663ee],.dot-container[data-v-525663ee]{align-items:center;display:flex;justify-content:center}.dot[data-v-525663ee]{border:1px solid #fff;height:3.4rem;width:3.4rem}.dot[data-v-525663ee],.inner-dot[data-v-525663ee]{border-radius:50%}.inner-dot[data-v-525663ee]{height:2rem;width:2rem}.blue[data-v-525663ee]{background-color:#0077b5}.brown[data-v-525663ee]{background-color:#9b6a6a}.orange[data-v-525663ee]{background-color:#e6a329}.purple[data-v-525663ee]{background-color:#b951ce}.red[data-v-525663ee]{background-color:#f12020}.path1-card[data-v-525663ee]:hover{border:5px solid #0077b5}.path2-card[data-v-525663ee]:hover{border:5px solid #9b6a6a}.path3-card[data-v-525663ee]:hover{border:5px solid #e6a329}.path4-card[data-v-525663ee]:hover{border:5px solid #b951ce}.path5-card[data-v-525663ee]:hover{border:5px solid #f12020}.choose-category-section a[data-v-525663ee]{color:#000!important;font-weight:600;-webkit-text-decoration:none;text-decoration:none}@media screen and (min-width:600px){.choose-category-section[data-v-525663ee]{width:78%}}.select-path[data-v-525663ee]{margin-bottom:1rem;margin-top:2rem}", ""]), n.locals = {}, t.exports = n
        },
        590: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Tweet", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(e, "Moment", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(e, "Timeline", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            });
            var n = l(r(591)),
                o = l(r(592)),
                d = l(r(593));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
        },
        591: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = (0, r(506).twitterEmbedComponent)({
                    embedComponent: function(t) {
                        for (var e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return (e = t.widgets).createTweetEmbed.apply(e, n)
                    },
                    props: {
                        errorMessage: {
                            type: String,
                            default: "Whoops! We couldn't access this Tweet."
                        },
                        errorMessageClass: {
                            type: String,
                            required: !1
                        },
                        widgetClass: {
                            type: String,
                            required: !1
                        }
                    }
                }),
                o = n;
            e.default = o
        },
        592: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = (0, r(506).twitterEmbedComponent)({
                    embedComponent: function(t) {
                        for (var e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return (e = t.widgets).createMoment.apply(e, n)
                    },
                    props: {
                        errorMessage: {
                            type: String,
                            default: "Whoops! We couldn't access this Moment."
                        },
                        errorMessageClass: {
                            type: String,
                            required: !1
                        },
                        widgetClass: {
                            type: String,
                            required: !1
                        }
                    }
                }),
                o = n;
            e.default = o
        },
        593: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = (0, r(506).twitterEmbedComponent)({
                    embedComponent: function(t) {
                        for (var e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        return (e = t.widgets).createTimeline.apply(e, n)
                    },
                    props: {
                        errorMessage: {
                            type: String,
                            default: "Whoops! We couldn't access this Timeline."
                        },
                        errorMessageClass: {
                            type: String,
                            required: !1
                        },
                        widgetClass: {
                            type: String,
                            required: !1
                        }
                    }
                }),
                o = n;
            e.default = o
        },
        594: function(t, e, r) {
            "use strict";
            r(537)
        },
        595: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".tweet-placeholder[data-v-27e39baf]{background-color:#ebeef4;height:400px;padding:0 auto}.tweet[data-v-27e39baf]{width:340px}", ""]), n.locals = {}, t.exports = n
        },
        596: function(t, e, r) {
            "use strict";
            r(538)
        },
        597: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".twitter-feed-component .owl-prev{border-radius:100%!important;font-size:1.5em;left:-21px;position:absolute;top:34%}.twitter-feed-component .owl-next{border-radius:100%!important;position:absolute;right:-21px;top:34%}.bxs-chevron-left,.bxs-chevron-right{font-size:1.5em}", ""]), n.locals = {}, t.exports = n
        },
        598: function(t, e, r) {
            "use strict";
            r(542)
        },
        599: function(t, e, r) {
            var n = r(25)((function(i) {
                return i[1]
            }));
            n.push([t.i, "*[data-v-5d699216]{box-sizing:border-box;margin:0;padding:0}p[data-v-5d699216]{font-size:15px}.news-name[data-v-5d699216]{-webkit-text-decoration:none;text-decoration:none}.news-name[data-v-5d699216]:hover{color:#1aaae2;-webkit-text-decoration:underline;text-decoration:underline}.hr[data-v-5d699216]{background-color:#ff671f;height:3px;width:25px}.news-date[data-v-5d699216]{color:#4f5a6b}.padding-left[data-v-5d699216]{padding-left:75px}.padding-right[data-v-5d699216]{padding-right:75px}.img-placeholder[data-v-5d699216]{background-color:#ebeef4}@media screen and (max-width:767px){.margin-left[data-v-5d699216]{margin-left:40px}.padding-left[data-v-5d699216]{padding-left:40px!important}.padding-right[data-v-5d699216]{padding-right:40px!important}}@media screen and (max-width:500px){.margin-left[data-v-5d699216]{margin-left:30px!important}.padding-left[data-v-5d699216]{padding-left:30px!important}.padding-right[data-v-5d699216]{padding-right:30px!important}}@media screen and (max-width:350px){.margin-left[data-v-5d699216]{margin-left:20px!important}.padding-left[data-v-5d699216]{padding-left:20px!important}.padding-right[data-v-5d699216]{padding-right:20px!important}}", ""]), n.locals = {}, t.exports = n
        },
        652: function(t, e, r) {
            var content = r(800);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(26).default)("58805fe5", content, !1, {
                sourceMap: !1
            })
        },
        667: function(t, e, r) {
            "use strict";
            r.r(e);
            r(37), r(50);
            var n = {
                    props: {
                        bannerData: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            search: ""
                        }
                    }
                },
                o = (r(582), r(21)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.bannerData ? e("div", {
                        staticClass: "container-fluid"
                    }, [e("div", {
                        staticClass: "row w-100 mx-0 px-0 banner"
                    }, [e("div", {
                        staticClass: "col-lg-8 banner-img",
                        style: {
                            backgroundImage: "url(".concat(t.bannerData.image_path_url, ")")
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "col-lg-4 banner-ad"
                    }, [e("h3", {
                        staticClass: "mb-3 title"
                    }, [t._v("\n        " + t._s(t.bannerData.title) + "\n      ")]), t._v(" "), e("p", {
                        staticClass: "d-block mb-3 text-start animate__animated animate__fadeInUp description",
                        staticStyle: {
                            "font-weight": "300"
                        }
                    }, [t._v("\n        " + t._s(t.bannerData.description) + "\n      ")]), t._v(" "), e("a", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !!t.bannerData.on_click_url,
                            expression: "!!bannerData.on_click_url"
                        }],
                        staticClass: "btn learn-more-btn pt-3",
                        attrs: {
                            href: t.bannerData.on_click_url
                        }
                    }, [t._v("Learn More")])])])]) : t._e()
                }), [], !1, null, "0d653fde", null);
            e.default = component.exports
        },
        668: function(t, e, r) {
            "use strict";
            r.r(e);
            r(37), r(50), r(82);
            var n = {
                    props: {
                        introBanners: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            currentSlideIndex: 0,
                            interval: null
                        }
                    },
                    mounted: function() {
                        window.innerWidth < 768 && this.startInterval()
                    },
                    destroyed: function() {
                        clearInterval(this.interval)
                    },
                    methods: {
                        nextSlide: function() {
                            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.introBanners.length, this.startInterval()
                        },
                        prevSlide: function() {
                            this.currentSlideIndex = (this.currentSlideIndex - 1 + this.introBanners.length) % this.introBanners.length, this.startInterval()
                        },
                        startInterval: function() {
                            var t = this;
                            clearInterval(this.interval), this.interval = setInterval((function() {
                                t.nextSlide()
                            }), 2e4)
                        }
                    }
                },
                o = (r(584), r(21)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "mobile-carousel"
                    }, [t._l(t.introBanners, (function(r, n) {
                        return e("CarouselItem", {
                            key: n,
                            attrs: {
                                index: n,
                                "current-slide-index": t.currentSlideIndex
                            }
                        }, [e("div", {
                            staticClass: "row w-100 mx-0 px-0"
                        }, [e("div", {
                            staticClass: "col-12 h-auto px-0"
                        }, [e("el-image", {
                            staticClass: "w-100 p-0 h-auto",
                            attrs: {
                                fit: "cover",
                                src: r.image_path_url
                            }
                        }, [e("div", {
                            staticClass: "image-slot",
                            attrs: {
                                slot: "placeholder"
                            },
                            slot: "placeholder"
                        }, [e("div", {
                            staticClass: "w-100 img-placeholder"
                        })]), t._v(" "), e("div", {
                            staticClass: "image-slot",
                            attrs: {
                                slot: "error"
                            },
                            slot: "error"
                        }, [e("div", {
                            staticClass: "w-100 img-placeholder"
                        })])])], 1), t._v(" "), e("div", {
                            staticClass: "col-12 banner-ad"
                        }, [e("h3", {
                            staticClass: "mb-3 title"
                        }, [t._v("\n          " + t._s(r.title) + "\n        ")]), t._v(" "), e("p", {
                            staticClass: "d-block mb-3 text-start animate__animated animate__fadeInUp description",
                            staticStyle: {
                                "font-weight": "300"
                            }
                        }, [t._v("\n          " + t._s(r.description) + "\n        ")]), t._v(" "), e("a", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: r.on_click_url,
                                expression: "item.on_click_url"
                            }],
                            staticClass: "btn learn-more-btn pt-3",
                            attrs: {
                                href: r.on_click_url
                            }
                        }, [t._v("Learn More")])])])])
                    })), t._v(" "), e("button", {
                        staticClass: "mobile-carousel-control prev",
                        on: {
                            click: t.prevSlide
                        }
                    }, [t._v("<")]), t._v(" "), e("button", {
                        staticClass: "mobile-carousel-control next",
                        on: {
                            click: t.nextSlide
                        }
                    }, [t._v(">")])], 2)
                }), [], !1, null, "0776933a", null);
            e.default = component.exports;
            installComponents(component, {
                CarouselItem: r(551).default
            })
        },
        669: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    props: {
                        width: {
                            type: String,
                            required: !0
                        },
                        height: {
                            type: String,
                            required: !0
                        }
                    }
                },
                o = (r(586), r(21)),
                component = Object(o.a)(n, (function() {
                    var t = this;
                    return (0, t._self._c)("div", {
                        staticClass: "shimmer",
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        670: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(32), r(33);
            var n = {
                    components: {
                        Tweet: r(590).Tweet,
                        carousel: function() {
                            return r.e(87).then(r.t.bind(null, 822, 7))
                        }
                    },
                    props: {
                        twitterPosts: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            tweetOptions: {
                                hide_thread: "true",
                                "data-conversation": "none"
                            },
                            carouselKey: 1
                        }
                    }
                },
                o = (r(594), r(596), r(21)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container mx-auto twitter-feed-component",
                        staticStyle: {
                            "margin-bottom": "50px"
                        }
                    }, [e("div", {
                        staticClass: "row w-100"
                    }, [t._m(0), t._v(" "), e("carousel", {
                        key: t.carouselKey,
                        ref: "cardCarouselRef",
                        staticClass: "tweets",
                        attrs: {
                            "auto-width": !0,
                            dots: !1,
                            navText: ["<i class='bx bxs-chevron-left' ></i>", "<i class='bx bxs-chevron-right'></i>"]
                        }
                    }, t._l(t.twitterPosts, (function(r) {
                        return e("div", {
                            key: r,
                            staticClass: "px-2 tweet"
                        }, [e("Tweet", {
                            attrs: {
                                id: r,
                                options: t.tweetOptions
                            }
                        }, [e("div", {
                            staticClass: "tweet-placeholder"
                        })])], 1)
                    })), 0)], 1)])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "col-12",
                        staticStyle: {
                            "margin-bottom": "50px",
                            "margin-top": "50px"
                        }
                    }, [e("h3", {
                        staticClass: "vu-heading"
                    }, [t._v("Latest News")]), t._v(" "), e("i", {
                        staticStyle: {
                            color: "rgba(0, 0, 0, 0.5)",
                            "font-size": "0.85em",
                            "font-weight": "400"
                        }
                    }, [t._v("Catch up with out Latest Tweets")])])
                }], !1, null, "27e39baf", null);
            e.default = component.exports
        },
        671: function(t, e, r) {
            "use strict";
            r.r(e);
            r(539), r(31);
            var n = {
                    data: function() {
                        return {
                            newsUpdates: [{
                                imgURL: "https://victoria-university-elearning.s3.amazonaws.com/general_resources/pdf-2.png",
                                name: "New Education ministry Appointments",
                                link: "/news/new-education-ministry-appointments",
                                date: ""
                            }]
                        }
                    },
                    methods: {}
                },
                o = (r(598), r(21)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {}, [e("section", {
                        staticClass: "pt-5 pb-5 mb-5 padding-left padding-right text-start"
                    }, [e("h2", {
                        staticClass: "mb-2",
                        staticStyle: {
                            color: "rgba(0, 0, 0, 0.6)",
                            "font-weight": "600",
                            "font-size": "1.5em"
                        }
                    }, [t._v("News & Updates")]), t._v(" "), e("div", {
                        staticClass: "row w-100"
                    }, t._l(t.newsUpdates, (function(r, n) {
                        return e("div", {
                            key: n,
                            staticClass: "col-md-3",
                            class: {
                                "ps-0 pe-3": 0 === n, "px-3": 0 !== n
                            }
                        }, [e("div", {
                            staticClass: "news w-100 mt-3 pb-5"
                        }, [e("nuxt-link", {
                            staticClass: "text-decoration-none",
                            attrs: {
                                to: r.link
                            }
                        }, [e("el-image", {
                            staticClass: "w-100 p-0 h-100",
                            attrs: {
                                fit: "cover",
                                src: r.imgURL
                            }
                        }, [e("div", {
                            staticClass: "image-slot h-100",
                            attrs: {
                                slot: "placeholder"
                            },
                            slot: "placeholder"
                        }, [e("div", {
                            staticClass: "w-100 h-100 img-placeholder"
                        })]), t._v(" "), e("div", {
                            staticClass: "image-slot h-100",
                            attrs: {
                                slot: "error"
                            },
                            slot: "error"
                        }, [e("div", {
                            staticClass: "w-100 h-100 img-placeholder"
                        })])]), t._v(" "), e("p", {
                            staticClass: "news-name"
                        }, [t._v(t._s(r.name))])], 1), t._v(" "), e("div", {
                            staticClass: "hr mt-1 mb-1"
                        }), t._v(" "), e("p", {
                            staticClass: "news-date"
                        }, [t._v(t._s(r.date))])], 1)])
                    })), 0)])])
                }), [], !1, null, "5d699216", null);
            e.default = component.exports
        },
        675: function(t, e, r) {
            "use strict";
            r.r(e);
            r(588);
            var n = r(21),
                component = Object(n.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "pe-2 ps-2 mx-0 mt-5"
                    }, [e("div", {
                        staticClass: "col-12 select-path"
                    }, [e("h3", {
                        staticClass: "vu-heading",
                        staticStyle: {
                            "font-size": "2em"
                        }
                    }, [t._v("The Future is Here. "), e("nuxt-link", {
                        staticStyle: {
                            color: "var(--primary-color)",
                            "text-decoration": "none"
                        },
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [t._v("Apply Now")])], 1), t._v(" "), e("p", {
                        staticClass: "mt-4 mb-0 mx-md-auto choose-category-section"
                    }, [t._v("\n      Experience a world-class transformative university education you deserve. Why settle for less, when you can have it all and more? We've got you covered, everything from globally relevant and competitive, right from \n      "), e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [t._v(" undergraduate")]), t._v(", \n      "), e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [t._v(" postgraduate")]), t._v(",\n      "), e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [t._v(" continuing education")]), t._v(" to  \n      "), e("nuxt-link", {
                        staticClass: "footer-nav-item",
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [t._v(" academic upgrading ")]), t._v(" \n      programmes. Applications are now open.\n    ")], 1)]), t._v(" "), e("div", {
                        staticClass: "path-card-container row w-100 px-0 mx-0"
                    }, [e("div", {
                        staticClass: "col-md-3 col-sm-6 col-12 p-3"
                    }, [e("div", {
                        staticClass: "path-card mt-5 path2-card"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/programmes/under-graduate"
                        }
                    }, [e("img", {
                        staticClass: "charted-img",
                        attrs: {
                            src: r(495),
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "dot-container"
                    }, [e("div", {
                        staticClass: "dot"
                    }, [e("div", {
                        staticClass: "inner-dot brown"
                    })])]), t._v(" "), e("el-image", {
                        staticClass: "w-100 p-0 h-100",
                        attrs: {
                            fit: "cover",
                            src: "https://victoria-university-elearning.s3.amazonaws.com/website/images/program-paths/undergrad.png"
                        }
                    }, [e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "placeholder"
                        },
                        slot: "placeholder"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })]), t._v(" "), e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "error"
                        },
                        slot: "error"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })])])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col-md-3 col-sm-6 col-12 p-3"
                    }, [e("div", {
                        staticClass: "path-card mt-5 path1-card"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/programmes/post-graduate"
                        }
                    }, [e("img", {
                        staticClass: "charted-img",
                        attrs: {
                            src: r(495),
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "dot-container"
                    }, [e("div", {
                        staticClass: "dot"
                    }, [e("div", {
                        staticClass: "inner-dot blue"
                    })])]), t._v(" "), e("el-image", {
                        staticClass: "w-100 p-0 h-100",
                        attrs: {
                            fit: "cover",
                            src: "https://victoria-university-elearning.s3.amazonaws.com/website/images/program-paths/post.png"
                        }
                    }, [e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "placeholder"
                        },
                        slot: "placeholder"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })]), t._v(" "), e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "error"
                        },
                        slot: "error"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })])])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col-md-3 col-sm-6 col-12 p-3"
                    }, [e("div", {
                        staticClass: "path-card mt-5 path3-card"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [e("img", {
                        staticClass: "charted-img",
                        attrs: {
                            src: r(495),
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "dot-container"
                    }, [e("div", {
                        staticClass: "dot"
                    }, [e("div", {
                        staticClass: "inner-dot orange"
                    })])]), t._v(" "), e("el-image", {
                        staticClass: "w-100 p-0 h-100",
                        attrs: {
                            fit: "cover",
                            src: "https://victoria-university-elearning.s3.amazonaws.com/website/images/program-paths/academic-upgrade.png"
                        }
                    }, [e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "placeholder"
                        },
                        slot: "placeholder"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })]), t._v(" "), e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "error"
                        },
                        slot: "error"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })])])], 1)], 1)]), t._v(" "), e("div", {
                        staticClass: "col-md-3 col-sm-6 col-12 p-3"
                    }, [e("div", {
                        staticClass: "path-card mt-5 path4-card"
                    }, [e("nuxt-link", {
                        attrs: {
                            to: "/programmes/academic-upgrading"
                        }
                    }, [e("img", {
                        staticClass: "charted-img",
                        attrs: {
                            src: r(495),
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "dot-container"
                    }, [e("div", {
                        staticClass: "dot"
                    }, [e("div", {
                        staticClass: "inner-dot purple"
                    })])]), t._v(" "), e("el-image", {
                        staticClass: "w-100 p-0 h-100",
                        attrs: {
                            fit: "cover",
                            src: "https://victoria-university-elearning.s3.amazonaws.com/website/images/program-paths/continue-educ.png"
                        }
                    }, [e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "placeholder"
                        },
                        slot: "placeholder"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })]), t._v(" "), e("div", {
                        staticClass: "image-slot",
                        attrs: {
                            slot: "error"
                        },
                        slot: "error"
                    }, [e("div", {
                        staticClass: "w-100 img-placeholder"
                    })])])], 1)], 1)])])])
                }), [], !1, null, "525663ee", null);
            e.default = component.exports
        },
        797: function(t, e, r) {
            t.exports = r.p + "img/discover.a55aa26.png"
        },
        798: function(t, e, r) {
            t.exports = r.p + "img/discover_your_future.14be19b.png"
        },
        799: function(t, e, r) {
            "use strict";
            r(652)
        },
        800: function(t, e, r) {
            var n = r(25),
                o = r(189),
                d = r(801),
                l = r(802),
                c = n((function(i) {
                    return i[1]
                })),
                v = o(d),
                m = o(l);
            c.push([t.i, ".online-quiz-btn[data-v-171ba852]{background-color:var(--vu-red);border-radius:10px;color:#fff;cursor:pointer;height:50px;width:180px}.what-makes-vu-special[data-v-171ba852]{padding:90px 60px}.pattern-1[data-v-171ba852]{background:url(" + v + ");background-color:rgba(0,0,0,.7)}.parallax[data-v-171ba852],.pattern-1[data-v-171ba852]{background-attachment:fixed}.parallax[data-v-171ba852]{background-image:url(" + m + ");background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:500px}*[data-v-171ba852]{box-sizing:border-box;margin:0;padding:0}.sub-text[data-v-171ba852]{color:hsla(0,0%,100%,.9);font-size:1em;padding-bottom:5px}.heading-text[data-v-171ba852]{color:#fff;font-size:1.4em;font-weight:600;padding-bottom:10px;padding-top:15px}.stats[data-v-171ba852]{width:75%!important}.experience[data-v-171ba852]{background-color:#f5f5f5}.experience-heading[data-v-171ba852]{color:#ff671f;font-weight:600}.experience-stats[data-v-171ba852]{color:#1b365d;font-size:63px}.vu-heading[data-v-171ba852]{color:rgba(0,0,0,.6);font-size:1.5em;font-weight:600}.special-vu[data-v-171ba852]{margin-top:100px}@media screen and (max-width:769px){.desktop-carousel[data-v-171ba852]{display:none}}@media screen and (max-width:600px){.sub-text[data-v-171ba852]{color:hsla(0,0%,100%,.9);font-size:.9em;padding-bottom:5px}.heading-text[data-v-171ba852]{color:#fff;font-size:1.1em;font-weight:600;padding-bottom:10px;padding-top:15px}.what-makes-vu-special[data-v-171ba852]{padding:70px 20px}.experience-stats[data-v-171ba852]{color:#1b365d;font-size:43px}.stats[data-v-171ba852]{width:95%!important}.special-vu[data-v-171ba852]{margin-top:3.5rem}.vu-heading[data-v-171ba852]{font-size:1.2em!important}}@media screen and (max-width:400px){.stats[data-v-171ba852]{width:100%!important}}", ""]), c.locals = {}, t.exports = c
        },
        801: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg=="
        },
        802: function(t, e, r) {
            t.exports = r.p + "img/what-makes-us-special-img.2cf5009.jpg"
        },
        863: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "experience px-0 pt-0 mx-0 mt-0"
                    }, [e("div", {
                        staticClass: "d-flex justify-content-center px-0 w-100"
                    }, [e("div", {
                        staticClass: "row stats px-0 mx-0 text-center"
                    }, [e("h3", {
                        staticClass: "mt-5 vu-heading"
                    }, [t._v("VICTORIA UNIVERSITY")]), t._v(" "), e("div", {
                        staticClass: "p-3 p-md-5 col-4 d-none d-sm-block"
                    }, [e("span", {
                        staticClass: "experience-heading"
                    }, [t._v("More than")]), t._v(" "), e("h1", {
                        staticClass: "fw-bolder experience-stats"
                    }, [t._v("97%")]), t._v(" "), e("p", [t._v("\n            Employers are impressed with the innovativeness, preparedness and unique value our grads bring to the workplace\n          ")])]), t._v(" "), e("div", {
                        staticClass: "p-3 p-md-5 col-4 d-none d-sm-block"
                    }, [e("span", {
                        staticClass: "experience-heading"
                    }, [t._v("More than")]), t._v(" "), e("h1", {
                        staticClass: "fw-bolder experience-stats"
                    }, [t._v("97%")]), t._v(" "), e("p", [t._v("\n            Student and grad entrepreneurial projects have been launched; thanks to innovative programmes and state-of-the-art facilities VU holds.  \n          ")])]), t._v(" "), e("div", {
                        staticClass: "p-3 p-md-5 col-4 d-none d-sm-block"
                    }, [e("span", {
                        staticClass: "experience-heading"
                    }, [t._v("More than")]), t._v(" "), e("h1", {
                        staticClass: "fw-bolder experience-stats"
                    }, [t._v("96%")]), t._v(" "), e("p", [t._v("With a high retention rate by employers, thanks to strategic national and international partnerships, our students and grads can work overseas.")])])])]), t._v(" "), e("div", {
                        staticClass: "w-100 px-0 mx-0"
                    }, [e("img", {
                        staticClass: "img-fluid w-100",
                        attrs: {
                            src: r(797),
                            alt: ""
                        }
                    })])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container mx-auto mt-0"
                    }, [e("div", {
                        staticClass: "row w-100 px-3 d-flex justify-content-center special-vu"
                    }, [e("div", {
                        staticClass: "col-12",
                        staticStyle: {
                            "margin-bottom": "50px"
                        }
                    }, [e("h3", {
                        staticClass: "vu-heading"
                    }, [t._v("What Makes VU Special")]), t._v(" "), e("i", {
                        staticStyle: {
                            color: "rgba(0, 0, 0, 0.5)",
                            "font-size": "0.85em",
                            "font-weight": "400"
                        }
                    }, [t._v("\n          We're the University of YOU")])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "parallax w-100"
                    }, [e("div", {
                        staticClass: "pattern-1",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }, [e("div", {
                        staticClass: "row w-100"
                    }, [e("div", {
                        staticClass: "col-md-12 text-start mt-md-0 mt-3 what-makes-vu-special"
                    }, [e("div", {
                        staticClass: "row w-100 mx-0"
                    }, [e("div", {
                        staticClass: "col-md-6 pe-md-2"
                    }, [e("div", {
                        staticClass: "mt-4 row w-100"
                    }, [e("div", {
                        staticClass: "col-12 heading-text"
                    }, [t._v("\n                  1. Affordable Education for All\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" World-Class Courses at Minimal Cost\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Making Authentic Education Accessible to Everyone\n                ")])]), t._v(" "), e("div", {
                        staticClass: "mt-4 row w-100"
                    }, [e("div", {
                        staticClass: "col-12 heading-text"
                    }, [t._v("\n                  2. Work Placements and Industry Partnerships\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Gain Invaluable Work Experience through Local and\n                  International Partnerships\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Unlock Endless Career Possibilities\n                ")])]), t._v(" "), e("div", {
                        staticClass: "mt-4 row w-100"
                    }, [e("div", {
                        staticClass: "col-12 heading-text"
                    }, [t._v("\n                  3. Trimester System for Focused Learning and Better Results\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Smaller Class Sizes for Personalized Attention\n\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Maximizing Learning Outcomes\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Pursue one module per month, instead of six modules at a go,\n                  in one semester.\n                ")])])]), t._v(" "), e("div", {
                        staticClass: "col md-6 ps-md-2"
                    }, [e("div", {
                        staticClass: "mt-4 row w-100"
                    }, [e("div", {
                        staticClass: "col-12 heading-text"
                    }, [t._v("\n                  4. Career Readiness and Employability Training\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Unlock Your Full Potential and Stand Out in the Competitive\n                  World of Work\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Building Skills and Preparing for Future Opportunities\n                ")])]), t._v(" "), e("div", {
                        staticClass: "mt-4 row w-100"
                    }, [e("div", {
                        staticClass: "col-12 heading-text"
                    }, [t._v("\n                  5. Flexible Course Delivery for Uninterrupted Learning\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Safe, In-Person Learning\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Online Classes and Activities for Distance Learning\n                ")]), t._v(" "), e("div", {
                        staticClass: "col-12 sub-text"
                    }, [e("i", {
                        staticClass: "bx bx-check-circle pe-1"
                    }), t._v(" Never Compromise on Your Education\n                ")])])])])])])])])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "container mx-auto"
                    }, [e("div", {
                        staticClass: "row w-100 px-3 d-flex justify-content-center",
                        staticStyle: {
                            "margin-top": "100px",
                            "margin-bottom": "40px"
                        }
                    }, [e("div", {
                        staticClass: "col-12",
                        staticStyle: {
                            "margin-bottom": "50px"
                        }
                    }, [e("h3", {
                        staticClass: "vu-heading"
                    }, [t._v("Self-Discover: Peek Into the Future Quiz")]), t._v(" "), e("i", {
                        staticStyle: {
                            color: "rgba(0, 0, 0, 0.5)",
                            "font-size": "0.85em",
                            "font-weight": "400"
                        }
                    }, [t._v("We're the University of YOU")])]), t._v(" "), e("div", {
                        staticClass: "col-md-4"
                    }, [e("img", {
                        staticClass: "img-fluid",
                        staticStyle: {
                            "border-radius": "10px",
                            "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
                        },
                        attrs: {
                            src: r(798),
                            alt: ""
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "col-md-7 text-start ps-md-5 ps-md-5 mt-md-0 mt-3"
                    }, [t._v("\n        Hello Victorian! \n        At VU we are #changemakers, #trailblazers,  and #unstoppable #bigpicturethinkers\n        seeing endless possibilities everywhere and in everyone. For a few minutes,\n        explore how your career goals and education choices are aligned with our fun quiz. \n\n        "), e("p", {
                        staticClass: "mt-4"
                    }, [t._v("\n          Answer a few questions in this fun quiz to get a sense of what\n          programs might be a good fit for you.\n        ")]), t._v(" "), e("div", {
                        staticClass: "d-flex justify-content-center align-items-center mt-4 online-quiz-btn"
                    }, [t._v("\n          Coming Soon\n        ")])])])])
                }],
                o = r(9),
                d = (r(43), {
                    name: "Home",
                    asyncData: function(t) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var r, n, o, d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.$axios, e.prev = 1, e.next = 4, r.$get("website/public/home");
                                    case 4:
                                        if (!(n = e.sent).success || "WEBSITE HOME DATA FETCHED SUCCESSFULLY" !== n.message) {
                                            e.next = 11;
                                            break
                                        }
                                        return o = n.intro_banners, d = n.twitter_posts, e.abrupt("return", {
                                            introBanners: o,
                                            twitterPosts: d
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
                            tweetId: ""
                        }
                    }
                }),
                l = (r(799), r(21)),
                component = Object(l.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("client-only", [e("el-carousel", {
                        staticClass: "desktop-carousel",
                        attrs: {
                            height: "65vh",
                            interval: 2e4
                        }
                    }, t._l(t.introBanners, (function(t, i) {
                        return e("el-carousel-item", {
                            key: i
                        }, [e("HomePageBannerComponent", {
                            attrs: {
                                "banner-data": t
                            }
                        })], 1)
                    })), 1), t._v(" "), e("MobileCarouselComponent", {
                        attrs: {
                            "intro-banners": t.introBanners
                        }
                    }), t._v(" "), e("template", {
                        slot: "placeholder"
                    }, [e("ClientOnlyLoadingIndicator", {
                        attrs: {
                            height: "65vh",
                            width: "100%"
                        }
                    })], 1)], 2), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), e("HomeSelectPathComponent"), t._v(" "), t._m(3), t._v(" "), e("client-only", [e("TwitterFeed", {
                        attrs: {
                            "twitter-posts": t.twitterPosts
                        }
                    })], 1), t._v(" "), e("NewsUpdateComponent")], 1)
                }), n, !1, null, "171ba852", null);
            e.default = component.exports;
            installComponents(component, {
                HomePageBannerComponent: r(667).default,
                MobileCarouselComponent: r(668).default,
                ClientOnlyLoadingIndicator: r(669).default,
                HomeSelectPathComponent: r(675).default,
                TwitterFeed: r(670).default,
                NewsUpdateComponent: r(671).default
            })
        }
    }
]);