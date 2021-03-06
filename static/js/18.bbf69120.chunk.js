(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [18], {
        1521: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i, c, a, o, l = n(6),
                s = n(8),
                d = n(1),
                u = n(5),
                b = n(830),
                j = n(43),
                x = n(93),
                p = n(248),
                h = n(189),
                O = n(2),
                f = n(14),
                m = n(108),
                g = n(0),
                v = function() {
                    var e = Object(f.b)().t,
                        t = Object(j.c)().account;
                    return Object(g.jsx)(g.Fragment, { children: Object(g.jsx)(O.X, { position: "relative", flexDirection: ["column-reverse", null, null, "row"], alignItems: ["flex-end", null, null, "center"], justifyContent: "center", id: "homepage-hero", children: Object(g.jsxs)(O.X, { flex: "1", flexDirection: "column", children: [Object(g.jsx)(O.Z, { scale: "xxl", color: "#7327E3", mb: "24px", children: e("BriseSwap") }), Object(g.jsx)(O.Z, { scale: "md", mb: "24px", children: e("Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.") }), Object(g.jsxs)(O.X, { children: [!t && Object(g.jsx)(m.a, { mr: "8px" }), Object(g.jsx)(O.ib, { mr: "16px", href: "https://discord.com/", children: Object(g.jsx)(O.r, { variant: t ? "primary" : "secondary", children: e(" Join Discord ") }) })] })] }) }) })
                },
                y = { headingText: "Trade anything. No registration, no hassle.", bodyText: "Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.", reverse: !1, primaryButton: { to: "/swap", text: "Buy on PancakeSwap", external: !1 }, secondaryButton: { to: "https://brisepad.com", text: "Visit Brisepad", external: !0 }, images: { path: "/images/nfts", attributes: [{ src: "/churro-md", alt: " " }] } },
                L = { headingText: "Earn passive income with crypto.", bodyText: "BriseSwap makes it easy to make your crypto work for you.", reverse: !0, primaryButton: { to: "/farms", text: "Explore", external: !1 }, secondaryButton: { to: "https://bswap.com/", text: "Visit Us", external: !0 }, images: { path: "/images/nfts", attributes: [{ src: "/drizzle-md", alt: " " }] } },
                w = { headingText: "BSwap makes our world go round.", bodyText: "BSwap token is at the heart of the BriseSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!", reverse: !1, primaryButton: { to: "/swap?outputCurrency=0xEEa9Fe24FFBc4F338d90695Be5bf9c0964b93e7E", text: "Buy BSwap", external: !1 }, secondaryButton: { to: "https://briseswap.com/", text: "  ", external: !1 }, images: { path: "/images/nfts/", attributes: [{ src: "baller-md", alt: " " }] } },
                C = n(9),
                k = n(3),
                F = n.n(k),
                S = n(13),
                B = n(31),
                D = function() {
                    var e = Object(f.b)().t,
                        t = function() {
                            var e = Object(d.useState)(null),
                                t = Object(C.a)(e, 2),
                                n = t[0],
                                r = t[1];
                            return Object(d.useEffect)((function() {
                                ! function() {
                                    var e = Object(S.a)(F.a.mark((function e() {
                                        var t, n;
                                        return F.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, fetch("/protocol.json");
                                                case 3:
                                                    return t = e.sent, e.next = 6, t.json();
                                                case 6:
                                                    n = e.sent, r(n), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() { return e.apply(this, arguments) }
                                }()()
                            }), [r]), n
                        }(),
                        n = (Object(x.a)().theme, t ? Object(B.d)(t.tvl) : "-"),
                        r = (Object(B.d)(30841921), Object(B.d)(2751624), e("And those users are now entrusting the platform with over $%tvl% in funds.", { tvl: n }).split(n)),
                        i = Object(C.a)(r, 2),
                        c = i[0],
                        a = i[1];
                    O.O, O.fc, O.C;
                    return Object(g.jsxs)(O.X, { justifyContent: "center", alignItems: "center", flexDirection: "column", children: [Object(g.jsx)(O.Z, { textAlign: "center", scale: "xl", children: e("Used by millions.") }), Object(g.jsx)(O.Z, { textAlign: "center", scale: "xl", mb: "32px", children: e("Trusted with billions.") }), Object(g.jsx)(O.nc, { textAlign: "center", color: "textSubtle", children: e("BriseSwap has the most users of any decentralized platform, ever.") }), Object(g.jsx)(O.X, { flexWrap: "wrap", children: Object(g.jsxs)(O.nc, { display: "inline", textAlign: "center", color: "textSubtle", mb: "20px", children: [c, Object(g.jsx)(g.Fragment, { children: t ? Object(g.jsx)(g.Fragment, { children: n }) : Object(g.jsx)(O.Ub, { display: "inline-block", height: 16, width: 70, mt: "2px" }) }), a] }) }), Object(g.jsx)(O.nc, { textAlign: "center", color: "textSubtle", bold: !0, mb: "32px", children: e("Will you join them?") })] })
                },
                E = function(e, t) { return Object(u.f)(r || (r = Object(s.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(", ", ", ");\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])), e, t) },
                T = Object(u.e)(O.n)(i || (i = Object(s.a)(["\n  position: relative;\n  max-height: ", ";\n\n  & :nth-child(2) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n\n  & :nth-child(5) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0s;\n  }\n"])), (function(e) { return e.maxHeight }), E("3px", "15px"), E("5px", "10px"), E("6px", "5px"), E("4px", "12px")),
                P = u.e.img(c || (c = Object(s.a)(["\n  max-height: ", ";\n  visibility: hidden;\n"])), (function(e) { return e.maxHeight })),
                X = Object(u.e)(O.n)(a || (a = Object(s.a)(["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    max-height: 100%;\n    width: auto;\n  }\n"])));
            ! function(e) { e.MD = "1.5x", e.LG = "2x" }(o || (o = {}));
            var A, I, U, H, N, Q = function(e, t, n) { return "".concat(e).concat(t).concat(n ? "@".concat(n, ".png") : ".png") },
                z = function(e, t) { return "".concat(Q(e, t), " 512w, \n  ").concat(Q(e, t, o.MD), " 768w, \n  ").concat(Q(e, t, o.LG), " 1024w,") },
                M = function(e) {
                    var t = e.path,
                        n = e.attributes,
                        r = e.maxHeight,
                        i = void 0 === r ? "512px" : r;
                    return Object(g.jsxs)(T, { maxHeight: i, children: [Object(g.jsx)(P, { src: Q(t, n[0].src), maxHeight: i, srcSet: z(t, n[0].src) }), n.map((function(e) { return Object(g.jsx)(X, { children: Object(g.jsx)("img", { src: Q(t, e.src), srcSet: z(t, e.src), alt: e.alt }) }, e.src) }))] })
                },
                Z = n(53),
                R = ["text"],
                _ = function(e) {
                    var t = e.text,
                        n = Object(Z.a)(e, R),
                        r = Object(x.a)().theme,
                        i = t.split(" "),
                        c = i[0],
                        a = i.slice(1).join(" ");
                    return Object(g.jsxs)(O.Z, Object(l.a)(Object(l.a)({ scale: "xl", mb: "24px" }, n), {}, { children: [Object(g.jsxs)("span", { style: { color: r.colors.secondary }, children: [c, " "] }), a] }))
                },
                G = function(e) {
                    var t = Object(f.b)().t,
                        n = e.headingText,
                        r = e.bodyText,
                        i = e.reverse,
                        c = e.primaryButton,
                        a = e.secondaryButton,
                        o = e.images,
                        s = t(n),
                        d = t(r);
                    return Object(g.jsx)(O.X, { flexDirection: "column", children: Object(g.jsxs)(O.X, { flexDirection: ["column-reverse", null, null, i ? "row-reverse" : "row"], alignItems: ["flex-end", null, null, "center"], justifyContent: "center", children: [Object(g.jsxs)(O.X, { flexDirection: "column", flex: "1", ml: [null, null, null, i && "64px"], mr: [null, null, null, !i && "64px"], alignSelf: ["flex-start", null, null, "center"], children: [Object(g.jsx)(_, { text: s }), Object(g.jsx)(O.nc, { color: "textSubtle", mb: "24px", children: d }), Object(g.jsxs)(O.X, { children: [Object(g.jsx)(O.ib, { mr: "16px", external: c.external, href: c.to, children: Object(g.jsx)(O.r, { children: Object(g.jsx)(O.nc, { color: "card", bold: !0, fontSize: "16px", children: t(c.text) }) }) }), Object(g.jsx)(O.ib, { external: a.external, href: a.to, children: t(a.text) })] })] }), Object(g.jsx)(O.X, { height: ["1px", null, null, "100%"], width: ["1", null, null, "100%"], flex: [null, null, null, "1"], mb: ["24px", null, null, "0"], children: Object(g.jsx)(M, Object(l.a)({}, o)) })] }) })
                },
                V = (u.e.div(A || (A = Object(s.a)(["\n  background: ", ";\n  padding: 1px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  backdrop-filter: blur(12px);\n  border-radius: 7px;\n\n  ", " {\n    padding: 40px;\n  }\n"])), (function(e) { return e.theme.isDark ? "rgba(8, 6, 11, 0.6)" : " rgba(255, 255, 255, 0.6)" }), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.mediaQueries.md })), u.e.div(I || (I = Object(s.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n"])))),
                W = Object(u.e)(O.X)(U || (U = Object(s.a)(["\n  position: absolute;\n  left: 0;\n  bottom: -64px;\n  max-width: 2px;\n\n  ", " {\n    max-width: 100%;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                q = Object(u.e)(O.X)(H || (H = Object(s.a)(["\n  position: absolute;\n  right: 0;\n  top: -64px;\n\n  max-width: 2px;\n\n  ", " {\n    max-width: 100%;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                $ = (O.qc, { path: "/images/nfts", attributes: [{ src: "/dollop-md", alt: " " }] }),
                J = { path: "/images/nfts", attributes: [{ src: "/claire-md", alt: " " }] },
                Y = function() { Object(x.a)().theme; return Object(g.jsx)(g.Fragment, { children: Object(g.jsxs)(V, { children: [Object(g.jsx)(W, { children: Object(g.jsx)(M, Object(l.a)({}, $)) }), Object(g.jsx)(q, { children: Object(g.jsx)(M, Object(l.a)({}, J)) })] }) }) },
                K = n(396),
                ee = n(4),
                te = n(98),
                ne = n(62),
                re = n(125),
                ie = n(388),
                ce = n(123);
            ! function(e) { e.NOT_FETCHED = "not-fetched", e.FETCHING = "fetching", e.SUCCESS = "success", e.FAILED = "failed" }(N || (N = {}));
            var ae, oe = function(e) {
                    var t = Object(ne.b)(),
                        n = Object(te.b)().data,
                        r = Object(d.useState)(N.NOT_FETCHED),
                        i = Object(C.a)(r, 2),
                        c = i[0],
                        a = i[1],
                        o = Object(d.useState)([null, null, null, null, null]),
                        s = Object(C.a)(o, 2),
                        u = s[0],
                        b = s[1],
                        j = Object(te.g)();
                    return Object(d.useEffect)((function() {
                        var n = function() {
                            var e = Object(S.a)(F.a.mark((function e() {
                                var n;
                                return F.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a(N.FETCHING), n = re.d.filter((function(e) { return 0 !== e.pid && "0X" !== e.multiplier })), e.prev = 2, e.next = 5, t(Object(re.c)(n.map((function(e) { return e.pid }))));
                                        case 5:
                                            a(N.SUCCESS), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), console.error(e.t0), a(N.FAILED);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        e && c === N.NOT_FETCHED && n()
                    }), [t, a, c, u, e]), Object(d.useEffect)((function() {
                        c !== N.SUCCESS || u[0] || function(e) {
                            var t = e.filter((function(e) { return e.lpTotalInQuoteToken && e.quoteTokenPriceBusd })).map((function(e) {
                                    var t = e.lpTotalInQuoteToken.times(e.quoteTokenPriceBusd),
                                        n = Object(ie.a)(e.poolWeight, j, t, e.lpAddresses[ee.a.MAINNET]),
                                        r = n.cakeRewardsApr,
                                        i = n.lpRewardsApr;
                                    return Object(l.a)(Object(l.a)({}, e), {}, { apr: r, lpRewardsApr: i })
                                })),
                                n = Object(ce.orderBy)(t, (function(e) { return e.apr + e.lpRewardsApr }), "desc");
                            b(n.slice(0, 5))
                        }(n)
                    }), [b, n, c, j, u]), { topFarms: u }
                },
                le = n(32),
                se = n(80),
                de = n(97),
                ue = n(57),
                be = n(63);
            ! function(e) { e.NOT_FETCHED = "not-fetched", e.FETCHING = "fetching", e.SUCCESS = "success", e.FAILED = "failed" }(ae || (ae = {}));
            var je, xe, pe, he, Oe, fe, me, ge, ve, ye, Le, we, Ce, ke, Fe, Se, Be, De, Ee, Te = function(e) {
                    var t = Object(ne.b)(),
                        n = Object(ue.e)().pools,
                        r = Object(ue.a)().fees.performanceFee,
                        i = r && r / 100,
                        c = Object(d.useState)(ae.NOT_FETCHED),
                        a = Object(C.a)(c, 2),
                        o = a[0],
                        s = a[1],
                        u = Object(d.useState)([null, null, null, null, null]),
                        b = Object(C.a)(u, 2),
                        j = b[0],
                        x = b[1],
                        p = Object(d.useMemo)((function() {
                            var e = n.filter((function(e) { return !e.isFinished })).find((function(e) { return 0 === e.sousId })),
                                t = Object(l.a)(Object(l.a)({}, e), {}, { isAutoVault: !0 });
                            return [Object(l.a)(Object(l.a)({}, t), {}, { apr: Object(be.c)(t, i).apr })].concat(Object(le.a)(n))
                        }), [n, i]),
                        h = Object(te.g)();
                    return Object(d.useEffect)((function() {
                        var n = function() {
                            var e = Object(S.a)(F.a.mark((function e() {
                                var n;
                                return F.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s(ae.FETCHING), e.next = 3, de.a.getBlockNumber();
                                        case 3:
                                            return n = e.sent, e.prev = 4, e.next = 7, t(Object(se.b)());
                                        case 7:
                                            return e.next = 9, t(Object(se.e)(n));
                                        case 9:
                                            s(ae.SUCCESS), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(4), console.error(e.t0), s(ae.FAILED);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 12]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        e && o === ae.NOT_FETCHED && n()
                    }), [t, s, o, j, e]), Object(d.useEffect)((function() {
                        o !== ae.SUCCESS || j[0] || function(e) {
                            var t = Object(ce.orderBy)(e, (function(e) { return e.apr || 0 }), "desc");
                            x(t.slice(0, 5))
                        }(p)
                    }), [x, p, o, h, j, i]), { topPools: j }
                },
                Pe = n(44),
                Xe = Object(u.e)(O.X)(je || (je = Object(s.a)(["\n  position: relative;\n"]))),
                Ae = Object(u.e)(O.X)(xe || (xe = Object(s.a)(["\n  position: absolute;\n  top: ", ";\n  opacity: ", ";\n  margin-top: ", ";\n  transition: opacity, margin-top, 0.4s ease-out;\n  flex-direction: column;\n\n  ", "\n"])), (function(e) { return e.topOffset }), (function(e) { return e.visible ? 1 : 0 }), (function(e) { return e.visible ? 0 : "50%" }), (function(e) {
                    var t = e.index,
                        n = e.theme;
                    return t > 0 ? "\n         ".concat(n.mediaQueries.sm, " {\n           height: 80px;\n           top: 0;\n           padding-left: 16px;\n           border-left: 1px ").concat(n.colors.inputSecondary, " solid;\n         }\n       ") : "padding-right: 16px;"
                })),
                Ie = function(e) {
                    var t = e.title,
                        n = e.percentage,
                        r = e.index,
                        i = e.visible,
                        c = Object(f.b)().t;
                    return Object(g.jsx)(Xe, { index: r, children: Object(g.jsxs)(Ae, { index: r, visible: i, topOffset: r >= 0 && r < 2 ? "0px" : r >= 2 && r < 3 ? "80px" : "160px", children: [t ? Object(g.jsx)(O.nc, { bold: !0, mb: "8px", fontSize: "12px", color: "secondary", children: t }) : Object(g.jsx)(O.Ub, { width: 80, height: 12, mb: "8px" }), n ? Object(g.jsx)(Pe.a, { lineHeight: "1.1", fontSize: "16px", bold: !0, unit: "%", value: n }) : Object(g.jsx)(O.Ub, { width: 60, height: 16 }), n ? Object(g.jsx)(O.nc, { fontSize: "16px", color: "textSubtle", children: c("APR") }) : Object(g.jsx)(O.Ub, { width: 30, height: 16, mt: "4px" })] }) })
                },
                Ue = ["text"],
                He = function(e) {
                    var t = e.text,
                        n = Object(Z.a)(e, Ue),
                        r = Object(x.a)().theme,
                        i = t.split(" "),
                        c = i[0],
                        a = i.slice(1).join(" ");
                    return Object(g.jsxs)(O.Z, Object(l.a)(Object(l.a)({}, n), {}, { children: [c, Object(g.jsxs)("span", { style: { color: r.colors.secondary }, children: [" ", a] })] }))
                },
                Ne = u.e.div(pe || (pe = Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n\n  ", " {\n    grid-gap: 16px;\n    grid-template-columns: repeat(5, auto);\n  }\n\n  ", " {\n    grid-gap: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                Qe = function() {
                    var e = Object(d.useState)(!1),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(f.b)().t,
                        c = Object(K.a)(),
                        a = c.observerRef,
                        o = c.isIntersecting,
                        l = oe(o).topFarms,
                        s = Te(o).topPools,
                        u = Object(d.useRef)(null),
                        b = l[0] && s[0],
                        j = Object(d.useCallback)((function() { u.current = setInterval((function() { r((function(e) { return !e })) }), 6e3) }), [u]);
                    Object(d.useEffect)((function() {
                        return b && j(),
                            function() { clearInterval(u.current) }
                    }), [u, b, j]);
                    return Object(g.jsx)("div", { ref: a, children: Object(g.jsxs)(O.X, { flexDirection: "column", mt: "24px", children: [Object(g.jsxs)(O.X, { mb: "24px", children: [Object(g.jsx)(He, { text: i(n ? "Top Farms" : " ") }), Object(g.jsx)(O.cb, { variant: "text", height: "100%", width: "auto", onClick: function() { r((function(e) { return !e })), clearInterval(u.current), j() }, children: Object(g.jsx)(O.gc, { height: "24px", width: "24px", color: "textSubtle" }) })] }), Object(g.jsxs)(O.n, { height: ["240px", null, "80px"], children: [Object(g.jsx)(Ne, { children: l.map((function(e, t) { return Object(g.jsx)(Ie, { title: null === e || void 0 === e ? void 0 : e.lpSymbol, percentage: (null === e || void 0 === e ? void 0 : e.apr) + (null === e || void 0 === e ? void 0 : e.lpRewardsApr), index: t, visible: n }, t) })) }), Object(g.jsx)(Ne, { children: s.map((function(e, t) { return Object(g.jsx)(Ie, { title: e && (r = e, r.isAutoVault ? i("Auto BSwap") : 0 === r.sousId ? i("Manual BSwap") : i("Stake %stakingSymbol% - Earn %earningSymbol%", { earningSymbol: r.earningToken.symbol, stakingSymbol: r.stakingToken.symbol })), percentage: null === e || void 0 === e ? void 0 : e.apr, index: t, visible: !n }, t); var r })) })] })] }) })
                },
                ze = function(e) { return Object(g.jsxs)(O.ec, Object(l.a)(Object(l.a)({ viewBox: "0 0 1956 1956" }, e), {}, { children: [Object(g.jsx)("g", { filter: "url(#filter0_f)", children: Object(g.jsx)("path", { d: "M978 20L987.526 796.229L1078.14 25.248L1006.47 798.221L1177.18 40.9346L1025.11 802.182L1274.04 66.8879L1043.23 808.07L1367.65 102.823L1060.64 815.819L1457 148.348L1077.14 825.345L1541.1 202.962L1092.55 836.544L1619.03 266.067L1106.71 849.292L1689.93 336.973L1119.46 863.451L1753.04 414.902L1130.65 878.865L1807.65 499L1140.18 895.365L1853.18 588.346L1147.93 912.77L1889.11 681.962L1153.82 930.89L1915.07 778.821L1157.78 949.526L1930.75 877.862L1159.77 968.474L1936 978L1159.77 987.526L1930.75 1078.14L1157.78 1006.47L1915.07 1177.18L1153.82 1025.11L1889.11 1274.04L1147.93 1043.23L1853.18 1367.65L1140.18 1060.64L1807.65 1457L1130.65 1077.14L1753.04 1541.1L1119.46 1092.55L1689.93 1619.03L1106.71 1106.71L1619.03 1689.93L1092.55 1119.46L1541.1 1753.04L1077.14 1130.65L1457 1807.65L1060.64 1140.18L1367.65 1853.18L1043.23 1147.93L1274.04 1889.11L1025.11 1153.82L1177.18 1915.07L1006.47 1157.78L1078.14 1930.75L987.526 1159.77L978 1936L968.474 1159.77L877.862 1930.75L949.526 1157.78L778.821 1915.07L930.89 1153.82L681.962 1889.11L912.77 1147.93L588.346 1853.18L895.365 1140.18L499 1807.65L878.865 1130.65L414.902 1753.04L863.451 1119.46L336.973 1689.93L849.292 1106.71L266.067 1619.03L836.544 1092.55L202.962 1541.1L825.345 1077.14L148.348 1457L815.819 1060.64L102.823 1367.65L808.07 1043.23L66.8879 1274.04L802.182 1025.11L40.9346 1177.18L798.221 1006.47L25.248 1078.14L796.229 987.526L20 978L796.229 968.474L25.248 877.862L798.221 949.526L40.9346 778.821L802.182 930.89L66.8879 681.962L808.07 912.77L102.823 588.346L815.819 895.365L148.348 499L825.345 878.865L202.962 414.902L836.544 863.451L266.067 336.973L849.292 849.292L336.973 266.067L863.451 836.544L414.902 202.962L878.865 825.345L499 148.348L895.365 815.819L588.346 102.823L912.77 808.07L681.962 66.8879L930.89 802.182L778.821 40.9346L949.526 798.221L877.862 25.248L968.474 796.229L978 20Z", fill: "url(#paint0_radial)", fillOpacity: "0.1" }) }), Object(g.jsxs)("defs", { children: [Object(g.jsxs)("filter", { id: "filter0_f", x: "0", y: "0", width: "1956", height: "1956", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [Object(g.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), Object(g.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), Object(g.jsx)("feGaussianBlur", { stdDeviation: "10", result: "effect1_foregroundBlur" })] }), Object(g.jsxs)("radialGradient", { id: "paint0_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(978 978) rotate(90) scale(958)", children: [Object(g.jsx)("stop", { offset: "0.114547", stopColor: "white", stopOpacity: "0" }), Object(g.jsx)("stop", { offset: "0.374975", stopColor: "white" }), Object(g.jsx)("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })] })] })] })) },
                Me = u.e.div(he || (he = Object(s.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n"]))),
                Ze = Object(u.e)(ze)(Oe || (Oe = Object(s.a)(["\n  height: 350%;\n  width: 350%;\n\n  ", " {\n    height: 400%;\n    width: 400%;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Re = Object(u.e)(O.X)(fe || (fe = Object(s.a)(["\n  z-index: 1;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]))),
                _e = (Object(u.e)(p.a)(me || (me = Object(s.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  visibility: hidden;\n\n  ", " {\n    visibility: visible;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })), function() { Object(f.b)().t; var e = Object(j.c)().account; return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsx)(Me, { children: Object(g.jsx)(O.X, { alignItems: "center", justifyContent: "center", width: "100%", height: "100%", children: Object(g.jsx)(Ze, {}) }) }), Object(g.jsx)(Re, { children: !e && Object(g.jsx)(m.a, { mt: "24px" }) })] }) }),
                Ge = n(132),
                Ve = n(33),
                We = Object(u.e)(O.X)(ge || (ge = Object(s.a)(["\n  flex-direction: column;\n  ", "\n"])), (function(e) {
                    var t = e.noMobileBorder,
                        n = e.theme;
                    return t ? "".concat(n.mediaQueries.md, " {\n           padding: 0 16px;\n           border-left: 1px ").concat(n.colors.inputSecondary, " solid;\n         }\n       ") : "border-left: 1px ".concat(n.colors.inputSecondary, " solid;\n         padding: 0 8px;\n         ").concat(n.mediaQueries.sm, " {\n           padding: 0 16px;\n         }\n       ")
                })),
                qe = u.e.div(ve || (ve = Object(s.a)(["\n  display: grid;\n  grid-gap: 16px 8px;\n  margin-top: 24px;\n  grid-template-columns: repeat(2, auto);\n\n  ", " {\n    grid-gap: 16px;\n  }\n\n  ", " {\n    grid-gap: 32px;\n    grid-template-columns: repeat(4, auto);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                $e = function() {
                    var e = Object(f.b)().t,
                        t = Object(Ge.f)(),
                        n = Object(B.g)(Object(Ge.c)(Ve.a.cake.address)),
                        r = t ? Object(B.g)(t) - n : 0,
                        i = Object(te.g)().times(r),
                        c = Object(B.d)(i.toNumber());
                    return Object(g.jsxs)(qe, { children: [Object(g.jsxs)(O.X, { flexDirection: "column", children: [Object(g.jsx)(O.nc, { color: "textSubtle", children: e("Total supply") }), r ? Object(g.jsx)(Pe.a, { decimals: 0, lineHeight: "1.1", fontSize: "24px", bold: !0, value: r }) : Object(g.jsx)(O.Ub, { height: 24, width: 126, my: "4px" })] }), Object(g.jsxs)(We, { children: [Object(g.jsx)(O.nc, { color: "textSubtle", children: e("Burned to date") }), n ? Object(g.jsx)(Pe.a, { decimals: 0, lineHeight: "1.1", fontSize: "24px", bold: !0, value: n }) : Object(g.jsx)(O.Ub, { height: 24, width: 126, my: "4px" })] }), Object(g.jsxs)(We, { noMobileBorder: !0, children: [Object(g.jsx)(O.nc, { color: "textSubtle", children: e("Market cap") }), (null === i || void 0 === i ? void 0 : i.gt(0)) && c ? Object(g.jsx)(O.Z, { scale: "lg", children: e("$%marketCap%", { marketCap: c }) }) : Object(g.jsx)(O.Ub, { height: 24, width: 126, my: "4px" })] }), Object(g.jsxs)(We, { children: [Object(g.jsx)(O.nc, { color: "textSubtle", children: e("Current emissions") }), Object(g.jsx)(O.Z, { scale: "lg", children: e("%cakeEmissions%/block", { cakeEmissions: 15 }) })] })] })
                },
                Je = u.e.div(ye || (ye = Object(s.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n"]))),
                Ye = u.e.div(Le || (Le = Object(s.a)(["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  ", ";\n\n  svg {\n    fill: ", ";\n    width: ", ";\n    height: 100%;\n    max-height: 48px;\n  }\n"])), (function(e) { return e.top ? "top: 0px" : "bottom: 0px" }), (function(e) { return e.fill }), (function(e) { return e.width || "100%" })),
                Ke = function(e) { return Object(g.jsx)(O.ec, Object(l.a)(Object(l.a)({ viewBox: "0 0 1660 48" }, e), {}, { preserveAspectRatio: "none", children: Object(g.jsx)("path", { d: "M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z" }) })) },
                et = function(e) { return Object(g.jsx)(O.ec, Object(l.a)(Object(l.a)({ viewBox: "0 0 1660 48" }, e), {}, { preserveAspectRatio: "none", children: Object(g.jsx)("path", { d: "M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z" }) })) },
                tt = n(803),
                nt = n(15),
                rt = n.n(nt),
                it = n(95),
                ct = n(45),
                at = n(191),
                ot = n(54),
                lt = n(36),
                st = n(180),
                dt = n(39),
                ut = n(111),
                bt = n(50),
                jt = function() {
                    var e = Object(d.useState)([]),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(d.useState)(null),
                        c = Object(C.a)(i, 2),
                        a = c[0],
                        o = c[1],
                        s = Object(j.c)().account,
                        u = Object(ut.a)().fastRefresh;
                    return Object(d.useEffect)((function() {
                        s && function() {
                            var e = Object(S.a)(F.a.mark((function e() {
                                var t, n, i, c, a;
                                return F.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = dt.w.map((function(e) { return { address: Object(lt.m)(), name: "pendingBSwap", params: [e.pid, s] } })), e.next = 3, Object(ot.a)(st, t);
                                        case 3:
                                            n = e.sent, i = dt.w.map((function(e, t) { return Object(l.a)(Object(l.a)({}, e), {}, { balance: new rt.a(n[t]) }) })), c = i.filter((function(e) { return e.balance.gt(0) })), a = c.reduce((function(e, t) { var n = new rt.a(t.balance); return n.eq(0) ? e : e + n.div(bt.k).toNumber() }), 0), r(c), o(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [s, u]), { farmsWithStakedBalance: n, earningsSum: a }
                },
                xt = Object(u.e)(O.v)(we || (we = Object(s.a)(["\n  width: 100%;\n  height: fit-content;\n"]))),
                pt = function() {
                    var e = Object(d.useState)(!1),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(f.b)().t,
                        c = Object(it.a)(),
                        a = c.toastSuccess,
                        o = c.toastError,
                        l = jt(),
                        s = l.farmsWithStakedBalance,
                        u = l.earningsSum,
                        b = Object(ct.n)(),
                        j = Object(te.g)(),
                        x = new rt.a(u).multipliedBy(j),
                        p = s.length,
                        h = s.filter((function(e) { return 0 !== e.pid })).length,
                        m = function(e, t, n, r) {
                            var i = { earningsBusd: n.toString(), count: e },
                                c = r("%earningsBusd% to collect", i);
                            return e > 0 && t ? c = r(e > 1 ? "%earningsBusd% to collect from %count% farms and BSwap pool" : "%earningsBusd% to collect from %count% farm and BSwap pool", i) : e > 0 ? c = r(e > 1 ? "%earningsBusd% to collect from %count% farms" : "%earningsBusd% to collect from %count% farm", i) : t && (c = r("%earningsBusd% to collect from BSwap pool", i)), c
                        }(h, p - h > 0, x, i).split(x.toString()),
                        v = Object(C.a)(m, 2),
                        y = v[0],
                        L = v[1],
                        w = Object(d.useCallback)(Object(S.a)(F.a.mark((function e() {
                            var t, n, c;
                            return F.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r(!0), t = Object(tt.a)(s), e.prev = 2, t.s();
                                    case 4:
                                        if ((n = t.n()).done) { e.next = 17; break }
                                        return c = n.value, e.prev = 6, e.next = 9, Object(at.c)(b, c.pid);
                                    case 9:
                                        a("".concat(i("Harvested"), "!"), i("Your %symbol% earnings have been sent to your wallet!", { symbol: "BSwap" })), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(6), o(i("Error"), i("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                        e.next = 4;
                                        break;
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t1 = e.catch(2), t.e(e.t1);
                                    case 22:
                                        return e.prev = 22, t.f(), e.finish(22);
                                    case 25:
                                        r(!1);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 19, 22, 25],
                                [6, 12]
                            ])
                        }))), [s, b, a, o, i]);
                    return Object(g.jsx)(xt, { children: Object(g.jsx)(O.w, { children: Object(g.jsxs)(O.X, { flexDirection: ["column", null, null, "row"], justifyContent: "space-between", alignItems: "center", children: [Object(g.jsxs)(O.X, { flexDirection: "column", alignItems: ["center", null, null, "flex-start"], children: [y && Object(g.jsx)(O.nc, { mb: "4px", color: "textSubtle", children: y }), x.isNaN() ? Object(g.jsx)(O.Ub, { width: 96, height: 24, my: "2px" }) : Object(g.jsx)(Pe.a, { decimals: x.gt(0) ? 2 : 0, fontSize: "24px", bold: !0, prefix: x.gt(0) ? "~$" : "$", lineHeight: "1.1", value: x.toNumber() }), Object(g.jsx)(O.nc, { mb: ["16px", null, null, "0"], color: "textSubtle", children: L })] }), p <= 0 ? Object(g.jsx)(O.ib, { href: "farms", children: Object(g.jsxs)(O.r, { width: ["100%", null, null, "auto"], variant: "secondary", children: [Object(g.jsx)(O.nc, { color: "primary", bold: !0, children: i("Start earning") }), Object(g.jsx)(O.f, { ml: "4px", color: "primary" })] }) }) : Object(g.jsx)(O.r, { width: ["100%", null, null, "auto"], id: "harvest-all", isLoading: n, endIcon: n ? Object(g.jsx)(O.i, { spin: !0, color: "currentColor" }) : null, disabled: n, onClick: w, children: Object(g.jsx)(O.nc, { color: "invertedContrast", bold: !0, children: i(n ? "Harvesting" : "Harvest all") }) })] }) }) })
                },
                ht = n(188),
                Ot = n(818),
                ft = n(157),
                mt = Object(u.e)(O.X)(Ce || (Ce = Object(s.a)(["\n  align-items: center;\n  display: none;\n  ", " {\n    display: flex;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                gt = Object(u.e)(O.X)(ke || (ke = Object(s.a)(["\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                vt = Object(u.e)(O.X)(Fe || (Fe = Object(s.a)(["\n  height: 92px;\n  width: 92px;\n  background-color: ", ";\n  border: 3px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.radii.circle }), (function(e) { return e.theme.card.boxShadow })),
                yt = Object(u.e)(O.Eb)(Se || (Se = Object(s.a)(["\n  height: 100%;\n  width: 100%;\n"]))),
                Lt = function() {
                    var e = Object(ht.c)(),
                        t = e.profile,
                        n = e.isLoading,
                        r = Object(f.b)().t,
                        i = Object(j.c)().account,
                        c = Object(ft.a)(i);
                    return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsxs)(mt, { children: [Object(g.jsx)(O.n, { mr: "24px", children: Object(g.jsx)(vt, { children: t ? Object(g.jsx)(Ot.a, { profile: t }) : Object(g.jsx)(yt, {}) }) }), Object(g.jsxs)(O.X, { flexDirection: "column", children: [t ? Object(g.jsx)(O.Z, { scale: "xl", children: r("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(g.jsx)(O.Ub, { width: 200, height: 40, my: "4px" }) : Object(g.jsx)(g.Fragment, {}), n || !i ? Object(g.jsx)(O.Ub, { width: 160, height: 16, my: "4px" }) : Object(g.jsxs)(O.nc, { fontSize: "16px", children: [" ", r("Connected with %address%", { address: c })] })] })] }), Object(g.jsx)(gt, { children: t ? Object(g.jsx)(O.Z, { mb: "18px", textAlign: "center", children: r("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(g.jsx)(O.Ub, { width: 120, height: 20, mt: "2px", mb: "18px" }) : Object(g.jsx)(g.Fragment, {}) })] })
                },
                wt = Object(u.e)(O.n)(Be || (Be = Object(s.a)(["\n  border-bottom: 1px ", " solid;\n  border-left: 1px ", " solid;\n  border-right: 1px ", " solid;\n  border-radius: ", ";\n  background: ", ";\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { var t = e.theme; return "0 0 ".concat(t.radii.card, " ").concat(t.radii.card) }), (function(e) { return e.theme.isDark ? "linear-gradient(360deg, rgba(49, 61, 92, 0.9) 0%, rgba(61, 42, 84, 0.9) 100%)" : "linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)" })),
                Ct = function() { return Object(g.jsx)(wt, { p: ["16px", null, null, "24px"], children: Object(g.jsxs)(O.X, { alignItems: "center", justifyContent: "center", flexDirection: ["column", null, null, "row"], children: [Object(g.jsx)(O.X, { flex: "1", mr: [null, null, null, "32px"], children: Object(g.jsx)(Lt, {}) }), Object(g.jsx)(O.X, { flex: "1", width: ["100%", null, "auto"], children: Object(g.jsx)(pt, {}) })] }) }) },
                kt = Object(u.e)(b.a)(De || (De = Object(s.a)(["\n  padding-top: 16px;\n\n  ", " {\n    padding-top: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ft = Object(u.e)(p.a)(Ee || (Ee = Object(s.a)(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }));
            t.default = function() {
                var e = Object(x.a)().theme,
                    t = Object(j.c)().account,
                    n = { margin: "0", width: "100%", maxWidth: "968px" };
                return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsx)(h.a, {}), Object(g.jsxs)(kt, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)" : "linear-gradient(139.73deg, #22BEC0B3 0%, #F3EFFF 100%)", index: 2, hasCurvedDivider: !1, children: [t && Object(g.jsx)(Ft, { children: Object(g.jsx)(Ct, {}) }), Object(g.jsx)(v, {})] }), Object(g.jsx)(b.a, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "linear-gradient(180deg, #09070C 22%, #201335 100%)" : "linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)", index: 2, hasCurvedDivider: !1, children: Object(g.jsx)(D, {}) }), Object(g.jsxs)(b.a, { innerProps: { style: n }, background: e.colors.background, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(Je, { children: Object(g.jsx)(Ye, { top: !0, fill: e.isDark ? "#201335" : "#D8CBED", children: Object(g.jsx)(Ke, {}) }) }), Object(g.jsx)(G, Object(l.a)({}, y))] }), Object(g.jsxs)(b.a, { innerProps: { style: n }, background: e.colors.gradients.cardHeader, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(Je, { children: Object(g.jsx)(Ye, { width: "150%", top: !0, fill: e.colors.background, children: Object(g.jsx)(et, {}) }) }), Object(g.jsx)(G, Object(l.a)({}, L)), Object(g.jsx)(Qe, {})] }), Object(g.jsx)(b.a, { innerProps: { style: n }, background: e.isDark ? "linear-gradient(180deg, #0B4576 0%, #091115 100%)" : "linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)", index: 2, hasCurvedDivider: !1, children: Object(g.jsx)(Y, {}) }), Object(g.jsxs)(b.a, { innerProps: { style: n }, background: e.colors.background, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(G, Object(l.a)({}, w)), Object(g.jsx)($e, {})] }), Object(g.jsx)(b.a, { innerProps: { style: n }, background: "linear-gradient(180deg, #7645D9 0%, #5121B1 100%)", index: 2, hasCurvedDivider: !1, children: Object(g.jsx)(_e, {}) })] })
            }
        },
        803: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n(252);

            function i(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = Object(r.a)(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            c = function() {};
                        return { s: c, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: c }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    l = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return o = e.done, e }, e: function(e) { l = !0, a = e }, f: function() { try { o || null == n.return || n.return() } finally { if (l) throw a } } }
            }
        },
        818: function(e, t, n) {
            "use strict";
            var r, i, c, a = n(8),
                o = (n(1), n(2)),
                l = n(5),
                s = n(0),
                d = l.e.img(r || (r = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                u = l.e.div(i || (i = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                b = Object(l.e)(o.Eb)(c || (c = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, r = e.profile; return Object(s.jsxs)(u, { bg: "/images/nfts/".concat(null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!r.isActive && Object(s.jsx)(b, {}), Object(s.jsx)(d, { src: "/images/teams/".concat(r.team.images.alt), alt: r.team.name })] }) }
        },
        830: function(e, t, n) {
            "use strict";
            var r, i, c, a, o, l, s, d = n(6),
                u = n(53),
                b = n(8),
                j = (n(1), n(5)),
                x = n(2),
                p = n(248),
                h = n(0),
                O = function(e, t, n) { return Object(j.d)(r || (r = Object(b.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), t, (function() { return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || e.colors.background : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background })) },
                f = Object(j.e)(x.n)(i || (i = Object(b.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        r = e.clipFill;
                    return O(t, n, r)
                }), (function(e) { return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)" })),
                m = Object(j.e)(x.n)(c || (c = Object(b.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        r = e.clipFill;
                    return O(t, n, r)
                }), (function(e) { return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)" })),
                g = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#topConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }) }) }) }) },
                v = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#bottomConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                y = function(e) { var t = e.clipFill; return Object(h.jsx)(f, { clipFill: t, clipPath: "#topConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                L = function(e) { var t = e.clipFill; return Object(h.jsx)(f, { clipFill: t, clipPath: "#bottomConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }) }) }) }) },
                w = j.e.div(a || (a = Object(b.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.dividerFill;
                    return t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
                }), (function(e) { return e.index })),
                C = j.e.div(o || (o = Object(b.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), (function(e) { return e.index + 1 })),
                k = function(e) {
                    var t = e.index,
                        n = e.dividerPosition,
                        r = e.dividerComponent,
                        i = e.concave,
                        c = e.clipFill,
                        a = e.dividerFill,
                        o = "top" === n && !i,
                        l = "bottom" === n && !i,
                        s = "top" === n && i,
                        d = "bottom" === n && i;
                    return Object(h.jsxs)(w, { index: t, dividerFill: a, children: [r && Object(h.jsx)(C, { index: t, children: r }), Object(h.jsxs)(h.Fragment, { children: [s && Object(h.jsx)(y, { clipFill: c }), d && Object(h.jsx)(L, { clipFill: c })] }), Object(h.jsxs)(h.Fragment, { children: [o && Object(h.jsx)(g, { clipFill: c }), l && Object(h.jsx)(v, { clipFill: c })] })] })
                },
                F = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                S = Object(j.e)(x.X)(l || (l = Object(b.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])), (function(e) { return e.index - 1 }), (function(e) {
                    var t = e.background,
                        n = e.theme;
                    return t || n.colors.background
                }), (function(e) { return (0, e.getPadding)() })),
                B = Object(j.e)(p.a)(s || (s = Object(b.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ", " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = function(e) {
                var t = e.children,
                    n = e.background,
                    r = e.svgFill,
                    i = e.index,
                    c = void 0 === i ? 1 : i,
                    a = e.dividerComponent,
                    o = e.dividerPosition,
                    l = void 0 === o ? "bottom" : o,
                    s = e.hasCurvedDivider,
                    b = void 0 === s || s,
                    j = e.concaveDivider,
                    p = void 0 !== j && j,
                    O = e.clipFill,
                    f = e.dividerFill,
                    m = e.containerProps,
                    g = e.innerProps,
                    v = Object(u.a)(e, F);
                return Object(h.jsxs)(x.n, Object(d.a)(Object(d.a)({}, m), {}, { children: [b && "top" === l && Object(h.jsx)(k, { svgFill: r, index: c, concave: p, dividerPosition: l, dividerComponent: a, clipFill: O, dividerFill: f }), Object(h.jsx)(S, Object(d.a)(Object(d.a)({ background: n, index: c, getPadding: function() { return b ? "bottom" === l ? "48px 0 14px" : "top" === l ? "14px 0 48px" : "48px 0" : "48px 0" } }, v), {}, { children: Object(h.jsx)(B, Object(d.a)(Object(d.a)({}, g), {}, { children: t })) })), b && "bottom" === l && Object(h.jsx)(k, { svgFill: r, index: c, concave: p, dividerPosition: l, dividerComponent: a, clipFill: O, dividerFill: f })] }))
            }
        }
    }
]);
//# sourceMappingURL=18.bbf69120.chunk.js.map