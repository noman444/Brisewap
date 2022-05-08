(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [17], {
        1522: function(t, e, n) {
            "use strict";
            n.r(e);
            var c = n(1),
                r = n(43),
                i = n(62),
                o = n(786),
                s = n(51),
                l = n(370),
                u = n(375),
                j = n(189),
                b = n(2),
                a = n(14),
                d = n(384),
                O = n(86),
                x = n(0),
                f = function() { var t = Object(a.b)().t; return Object(x.jsx)(b.n, { mb: "24px", children: Object(x.jsxs)(b.o, { children: [Object(x.jsx)(O.a, { to: "/", children: t("Home") }), Object(x.jsx)(O.a, { to: "/prediction", children: t("Prediction") }), Object(x.jsx)(b.nc, { children: t("Leaderboard") })] }) }) },
                h = function() { var t = Object(a.b)().t; return Object(x.jsxs)(d.a, { children: [Object(x.jsx)(f, {}), Object(x.jsx)(b.Z, { as: "h1", scale: "xxl", color: "secondary", children: t("Leaderboard") })] }) },
                p = n(402),
                m = n(414),
                g = n(252),
                v = n(403);
            var B, w, S, y, N, W, k, D, L, C, F, A = n(67),
                R = n(248),
                T = n(6),
                I = n(53),
                z = n(9),
                U = n(8),
                P = n(5),
                M = n(38),
                V = n(188),
                X = n(157),
                H = n(93),
                _ = n(379),
                E = n(88),
                q = ["children"],
                Q = ["amount", "textPrefix", "textColor"],
                Y = function(t) {
                    var e = t.children,
                        n = Object(I.a)(t, q);
                    return Object(x.jsx)(b.X, Object(T.a)(Object(T.a)({ alignItems: "center", justifyContent: "space-between" }, n), {}, { children: e }))
                },
                G = function(t) {
                    var e = t.amount,
                        n = t.textPrefix,
                        c = void 0 === n ? "" : n,
                        r = t.textColor,
                        i = void 0 === r ? "text" : r,
                        o = Object(I.a)(t, Q),
                        s = Object(_.a)(),
                        l = Object(E.d)(s, Math.abs(e));
                    return e ? Object(x.jsxs)(b.X, Object(T.a)(Object(T.a)({ flexDirection: "column", alignItems: "flex-end" }, o), {}, { children: [Object(x.jsx)(b.nc, { fontWeight: "bold", color: i, children: "".concat(c).concat(e.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 6 })) }), Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", lineHeight: 1, children: "~$".concat(l.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })) })] })) : null
                },
                Z = function(t) {
                    var e = t.amount,
                        n = Object(a.b)().t;
                    return Object(x.jsxs)(Y, { mb: "4px", children: [Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", children: n("Net Winnings (BNB)") }), Object(x.jsx)(G, { amount: e, textPrefix: e > 0 ? "+" : "", textColor: e > 0 ? "success" : "failure" })] })
                },
                J = n(3),
                K = n.n(J),
                $ = n(13),
                tt = n(819),
                et = n.n(tt),
                nt = n(270),
                ct = n.n(nt),
                rt = P.e.div(B || (B = Object(U.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])), (function(t) {
                    var e = t.theme,
                        n = t.bgColor;
                    return e.colors[n]
                })),
                it = P.e.div(w || (w = Object(U.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  ", " {\n    display: block;\n    margin-left: 4px;\n  }\n"])), (function(t) { return t.theme.mediaQueries.lg })),
                ot = function(t) {
                    var e = t.position,
                        n = Object(a.b)().t,
                        c = e === s.a.BULL,
                        r = c ? "success" : "failure",
                        i = c ? Object(x.jsx)(b.h, { width: "24px", color: "white" }) : Object(x.jsx)(b.d, { width: "24px", color: "white" });
                    return Object(x.jsxs)(rt, { bgColor: r, children: [i, Object(x.jsx)(it, { children: n(c ? "Up" : "Down") })] })
                },
                st = function(t) {
                    var e = t.numberOfBets,
                        n = void 0 === e ? 5 : e,
                        r = t.account,
                        i = Object(c.useState)(!1),
                        o = Object(z.a)(i, 2),
                        s = o[0],
                        l = o[1],
                        u = Object(c.useState)([]),
                        j = Object(z.a)(u, 2),
                        d = j[0],
                        O = j[1],
                        f = Object(a.b)().t,
                        h = ct()(d, ["round.epoch"], ["desc"]);
                    return Object(c.useEffect)((function() {
                        (function() {
                            var t = Object($.a)(K.a.mark((function t() {
                                var e;
                                return K.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return l(!0), t.prev = 1, t.next = 4, Object(A.e)({ user: r.toLowerCase() }, n);
                                        case 4:
                                            e = t.sent, O(e.map(A.s));
                                        case 6:
                                            return t.prev = 6, l(!1), t.finish(6);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, , 6, 9]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        })()()
                    }), [r, n, l, O]), Object(x.jsxs)(b.jc, { children: [Object(x.jsx)("thead", { children: Object(x.jsxs)("tr", { children: [Object(x.jsx)(b.oc, { children: f("Round") }), Object(x.jsx)(b.oc, { children: f("Direction") }), Object(x.jsx)(b.oc, { textAlign: "right", children: f("Winnings (BNB)") })] }) }), Object(x.jsx)("tbody", { children: s ? et()(n).map((function(t) { return Object(x.jsxs)("tr", { children: [Object(x.jsx)(b.lc, { children: Object(x.jsx)(b.Ub, { width: "80px" }) }), Object(x.jsx)(b.lc, { children: Object(x.jsx)(b.Ub, { width: "60px", height: "32px" }) }), Object(x.jsx)(b.lc, { children: Object(x.jsx)(b.Ub, { width: "80px" }) })] }, t) })) : h.map((function(t) { var e = t.position === t.round.position; return Object(x.jsxs)("tr", { children: [Object(x.jsx)(b.lc, { textAlign: "center", fontWeight: "bold", children: t.round.epoch.toLocaleString() }), Object(x.jsx)(b.lc, { textAlign: "center", children: Object(x.jsx)(ot, { position: t.position }) }), Object(x.jsx)(b.lc, { textAlign: "right", children: Object(x.jsx)(G, { amount: e ? t.claimedNetBNB : t.amount, textPrefix: e ? "+" : "-", textColor: e ? "success" : "failure" }) })] }, t.id) })) })] })
                },
                lt = function(t) {
                    var e = t.account,
                        n = Object(a.b)().t,
                        r = Object(c.useState)(!1),
                        i = Object(z.a)(r, 2),
                        o = i[0],
                        s = i[1];
                    return Object(x.jsxs)(x.Fragment, { children: [Object(x.jsxs)(b.X, { alignItems: "center", justifyContent: "space-between", px: "24px", py: "32px", borderBottom: "1px solid", borderColor: "cardBorder", style: { cursor: "pointer" }, onClick: function() { return s(!o) }, children: [Object(x.jsx)(b.nc, { as: "h5", color: "secondary", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", children: n("Last %num% Bets", { num: 5 }) }), o ? Object(x.jsx)(b.H, {}) : Object(x.jsx)(b.K, {})] }), o && Object(x.jsx)(st, { account: e })] })
                },
                ut = function(t) {
                    var e = t.account,
                        n = Object(a.b)().t;
                    return Object(x.jsxs)(b.n, { p: "24px", children: [Object(x.jsx)(b.nc, { as: "h5", color: "secondary", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", mb: "16px", children: n("Last %num% Bets", { num: 5 }) }), Object(x.jsx)(b.v, { children: Object(x.jsx)(st, { account: e }) })] })
                },
                jt = Object(P.e)(b.jb)(S || (S = Object(U.a)(["\n  color: ", ";\n\n  svg {\n    fill: ", ";\n  }\n"])), (function(t) { return t.theme.colors.text }), (function(t) { return t.theme.colors.text })),
                bt = function(t) {
                    var e, n, c, r, i, l = t.account,
                        u = t.onDismiss,
                        j = t.onBeforeDismiss,
                        d = Object(a.b)().t,
                        O = Object(H.a)().theme,
                        f = Object(o.u)(l),
                        h = Object(V.b)(l),
                        p = Object(o.q)() === s.c.LOADING,
                        m = Object(b.Lc)().isDesktop;
                    return Object(x.jsxs)(b.Ab, { minWidth: "320px", children: [Object(x.jsxs)(b.Bb, { background: O.colors.gradients.bubblegum, children: [Object(x.jsxs)(b.X, { alignItems: "center", style: { flex: 1 }, children: [Object(x.jsx)(b.n, { width: ["64px", null, null, null, null, null, "96px"], mr: "16px", children: Object(x.jsx)(b.Ob, { src: "/images/nfts/".concat(null === (e = h.nft) || void 0 === e || null === (n = e.images) || void 0 === n ? void 0 : n.md), height: 96, width: 96 }) }), Object(x.jsxs)(b.n, { children: [h.username && Object(x.jsx)(b.Z, { scale: "lg", mb: "8px", children: h.username }), Object(x.jsx)(jt, { href: Object(M.e)(l, "address"), children: Object(X.a)(l) })] })] }), Object(x.jsx)(b.cb, { variant: "text", onClick: function() { j && j(), u() }, "aria-label": "Close the dialog", children: Object(x.jsx)(b.M, { color: "text", width: "24px" }) })] }), null === f ? Object(x.jsx)(b.nc, { p: "32px", textAlign: "center", fontWeight: "bold", children: d("No results found.") }) : Object(x.jsxs)(b.n, { maxHeight: ["500px", null, null, null, null, null, "none"], overflowY: "auto", children: [Object(x.jsxs)(b.Y, { gridTemplateColumns: ["1fr", null, null, null, null, null, "repeat(4, 1fr)"], gridGap: "16px", p: "24px", borderBottom: "1px solid", borderColor: "cardBorder", children: [Object(x.jsxs)(b.n, { children: [Object(x.jsx)(b.nc, { as: "h6", fontSize: "12px", textTransform: "uppercase", color: "textSubtle", fontWeight: "bold", mb: "8px", children: d("Net Winnings") }), p ? Object(x.jsx)(b.Ub, {}) : Object(x.jsx)(G, { amount: null === f || void 0 === f ? void 0 : f.netBNB, textPrefix: (null === f || void 0 === f ? void 0 : f.netBNB) > 0 ? "+" : "", textColor: (null === f || void 0 === f ? void 0 : f.netBNB) > 0 ? "success" : "failure", alignItems: "flex-end" })] }), Object(x.jsxs)(b.n, { children: [Object(x.jsx)(b.nc, { as: "h6", fontSize: "12px", textTransform: "uppercase", color: "textSubtle", fontWeight: "bold", mb: "8px", children: d("Win Rate") }), p ? Object(x.jsx)(b.Ub, {}) : Object(x.jsx)(b.nc, { fontWeight: "bold", children: "".concat(null === f || void 0 === f || null === (c = f.winRate) || void 0 === c ? void 0 : c.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 2 }), "%") })] }), Object(x.jsxs)(b.n, { children: [Object(x.jsx)(b.nc, { as: "h6", fontSize: "12px", textTransform: "uppercase", color: "textSubtle", fontWeight: "bold", mb: "8px", children: d("Rounds Won") }), p ? Object(x.jsx)(b.Ub, {}) : Object(x.jsx)(b.nc, { fontWeight: "bold", children: null === f || void 0 === f || null === (r = f.totalBetsClaimed) || void 0 === r ? void 0 : r.toLocaleString() })] }), Object(x.jsxs)(b.n, { children: [Object(x.jsx)(b.nc, { as: "h6", fontSize: "12px", textTransform: "uppercase", color: "textSubtle", fontWeight: "bold", mb: "8px", children: d("Rounds Played") }), p ? Object(x.jsx)(b.Ub, {}) : Object(x.jsx)(b.nc, { fontWeight: "bold", children: null === f || void 0 === f || null === (i = f.totalBets) || void 0 === i ? void 0 : i.toLocaleString() })] })] }), m ? Object(x.jsx)(ut, { account: l }) : Object(x.jsx)(lt, { account: l })] })] })
                },
                at = ["user"],
                dt = Object(P.e)(b.n)(y || (y = Object(U.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  ", " {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])), (function(t) { return t.theme.mediaQueries.lg })),
                Ot = Object(P.e)(b.n)(N || (N = Object(U.a)(["\n  order: 1;\n\n  ", " {\n    order: 2;\n  }\n"])), (function(t) { return t.theme.mediaQueries.lg })),
                xt = function(t) {
                    var e, n, c = t.user,
                        r = Object(I.a)(t, at),
                        i = Object(a.b)().t,
                        o = Object(V.b)(c.id),
                        s = Object(b.Mc)(Object(x.jsx)(bt, { account: c.id })),
                        l = Object(z.a)(s, 1)[0];
                    return Object(x.jsxs)(b.cc, { component: Object(x.jsxs)(b.X, Object(T.a)(Object(T.a)({ alignItems: "center" }, r), {}, { children: [Object(x.jsxs)(Ot, { children: [Object(x.jsx)(b.nc, { color: "primary", fontWeight: "bold", children: o.username || Object(X.a)(c.id) }), " "] }), Object(x.jsx)(dt, { width: ["32px", null, null, null, null, "40px"], height: ["32px", null, null, null, null, "40px"], children: Object(x.jsx)(b.Ob, { src: "/images/nfts/".concat(null === (e = o.nft) || void 0 === e || null === (n = e.images) || void 0 === n ? void 0 : n.md), height: 40, width: 40 }) })] })), options: { placement: "bottom-start" }, children: [Object(x.jsx)(b.dc, { onClick: l, children: i("View Stats") }), Object(x.jsx)(b.dc, { as: b.ib, href: Object(M.e)(c.id, "address"), bold: !1, color: "text", external: !0, children: i("View on Bitgert") })] })
                },
                ft = ["rank", "user"],
                ht = function(t) {
                    var e = t.rank,
                        n = t.user,
                        c = Object(I.a)(t, ft);
                    return Object(x.jsxs)("tr", Object(T.a)(Object(T.a)({}, c), {}, { children: [e ? Object(x.jsx)(b.lc, { children: Object(x.jsx)(b.nc, { textAlign: "center", fontWeight: "bold", color: "secondary", children: "#".concat(e) }) }) : Object(x.jsx)(b.lc, {}), Object(x.jsx)(b.lc, { children: Object(x.jsx)(xt, { user: n }) }), Object(x.jsx)(b.lc, { children: Object(x.jsx)(G, { amount: n.netBNB, textPrefix: n.netBNB > 0 ? "+" : "", textColor: n.netBNB > 0 ? "success" : "failure" }) }), Object(x.jsx)(b.lc, { textAlign: "center", children: "".concat(n.winRate.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 2 }), "%") }), Object(x.jsx)(b.lc, { textAlign: "center", children: Object(x.jsx)("strong", { children: n.totalBetsClaimed.toLocaleString() }) }), Object(x.jsx)(b.lc, { textAlign: "center", children: n.totalBets.toLocaleString() })] }))
                },
                pt = function(t) {
                    var e = t.results,
                        n = Object(a.b)().t;
                    return Object(x.jsx)(R.a, { mb: "24px", children: Object(x.jsx)(b.v, { children: Object(x.jsxs)(b.jc, { children: [Object(x.jsx)("thead", { children: Object(x.jsxs)("tr", { children: [Object(x.jsx)(b.oc, { width: "60px", children: "\xa0" }), Object(x.jsx)(b.oc, { textAlign: "left", children: n("User") }), Object(x.jsx)(b.oc, { textAlign: "right", children: n("Net Winnings (BNB)") }), Object(x.jsx)(b.oc, { children: n("Win Rate") }), Object(x.jsx)(b.oc, { children: n("Rounds Won") }), Object(x.jsx)(b.oc, { children: n("Rounds Played") })] }) }), Object(x.jsx)("tbody", { children: e.map((function(t, e) { return Object(x.jsx)(ht, { rank: e + 4, user: t }, t.id) })) })] }) }) })
                },
                mt = Object(P.e)(b.n)(W || (W = Object(U.a)(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n\n  &:first-child {\n    border-top: 1px solid ", ";\n  }\n"])), (function(t) { return t.theme.card.background }), (function(t) { return t.theme.colors.cardBorder }), (function(t) { return t.theme.colors.cardBorder })),
                gt = function(t) {
                    var e = t.rank,
                        n = t.user,
                        c = Object(a.b)().t;
                    return Object(x.jsxs)(mt, { p: "16px", children: [Object(x.jsxs)(Y, { mb: "16px", children: [e ? Object(x.jsx)(b.nc, { fontWeight: "bold", color: "secondary", children: "#".concat(e) }) : Object(x.jsx)("div", {}), Object(x.jsx)(xt, { user: n })] }), Object(x.jsxs)(Y, { mb: "4px", children: [Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", children: c("Win Rate") }), Object(x.jsx)(b.nc, { fontWeight: "bold", children: "".concat(n.winRate.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 2 }), "%") })] }), Object(x.jsx)(Z, { amount: n.netBNB }), Object(x.jsxs)(Y, { children: [Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", children: c("Rounds Won") }), Object(x.jsx)(b.nc, { fontWeight: "bold", children: "".concat(n.totalBetsClaimed.toLocaleString(), "/").concat(n.totalBets.toLocaleString()) })] })] })
                },
                vt = function(t) { var e = t.results; return Object(x.jsx)(b.n, { mb: "24px", children: e.map((function(t, e) { return Object(x.jsx)(gt, { rank: e + 4, user: t }, t.id) })) }) },
                Bt = Object(P.e)(b.gb)(k || (k = Object(U.a)(["\n  transform: rotate(30deg);\n"]))),
                wt = Object(P.e)(b.hb)(D || (D = Object(U.a)(["\n  transform: rotate(-30deg);\n"]))),
                St = function(t) {
                    var e, n, c = t.rank,
                        r = t.user,
                        i = Object(a.b)().t,
                        o = function(t) { return 3 === t ? "bronze" : 2 === t ? "silver" : "gold" }(c),
                        s = Object(V.b)(r.id),
                        l = Object(b.Mc)(Object(x.jsx)(bt, { account: r.id })),
                        u = Object(z.a)(l, 1)[0];
                    return Object(x.jsx)(b.v, { ribbon: Object(x.jsx)(b.z, { variantColor: o, text: "#".concat(c), ribbonPosition: "left" }), children: Object(x.jsxs)(b.w, { p: "24px", children: [Object(x.jsx)(b.X, { alignItems: "center", justifyContent: "center", flexDirection: "column", mb: "24px", children: Object(x.jsxs)(b.cc, { component: Object(x.jsxs)(x.Fragment, { children: [Object(x.jsxs)(b.X, { mb: "4px", children: [Object(x.jsx)(Bt, { color: o, width: "32px" }), Object(x.jsx)(b.n, { width: ["40px", null, null, "64px"], height: ["40px", null, null, "64px"], children: Object(x.jsx)(b.Ob, { src: "/images/nfts/".concat(null === (e = s.nft) || void 0 === e || null === (n = e.images) || void 0 === n ? void 0 : n.md), height: 64, width: 64 }) }), Object(x.jsx)(wt, { color: o, width: "32px" })] }), Object(x.jsx)(b.nc, { color: "primary", fontWeight: "bold", textAlign: "center", children: s.username || Object(X.a)(r.id) })] }), options: { placement: "bottom" }, children: [Object(x.jsx)(b.dc, { onClick: u, children: i("View Stats") }), Object(x.jsx)(b.dc, { as: b.ib, href: Object(M.e)(r.id, "address"), bold: !1, color: "text", external: !0, children: i("View on Bitgert") })] }) }), Object(x.jsxs)(Y, { mb: "4px", children: [Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", children: i("Win Rate") }), Object(x.jsx)(b.nc, { fontWeight: "bold", children: "".concat(r.winRate.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 2 }), "%") })] }), Object(x.jsx)(Z, { amount: r.netBNB }), Object(x.jsxs)(Y, { children: [Object(x.jsx)(b.nc, { fontSize: "12px", color: "textSubtle", children: i("Rounds Won") }), Object(x.jsx)(b.nc, { fontWeight: "bold", children: "".concat(r.totalBetsClaimed.toLocaleString(), "/").concat(r.totalBets.toLocaleString()) })] })] }) })
                },
                yt = function() {
                    var t, e = Object(b.Lc)().isDesktop,
                        n = Object(a.b)().t,
                        c = Object(o.r)(),
                        r = (t = c, Object(p.a)(t) || Object(m.a)(t) || Object(g.a)(t) || Object(v.a)()),
                        u = r[0],
                        j = r[1],
                        d = r[2],
                        O = r.slice(3),
                        f = Object(o.q)() === s.c.LOADING,
                        h = Object(o.s)(),
                        B = Object(o.p)(),
                        w = Object(i.b)();
                    return Object(x.jsxs)(b.n, { children: [Object(x.jsx)(R.a, { mb: "16px", children: Object(x.jsxs)(b.Y, { gridGap: ["16px", null, null, null, null, "24px"], gridTemplateColumns: ["1fr", null, null, null, null, "repeat(3, 1fr)"], children: [Object(x.jsx)(St, { rank: 1, user: u }), Object(x.jsx)(St, { rank: 2, user: j }), Object(x.jsx)(St, { rank: 3, user: d })] }) }), e ? Object(x.jsx)(pt, { results: O }) : Object(x.jsx)(vt, { results: O }), Object(x.jsx)(b.X, { mb: "40px", justifyContent: "center", children: B && Object(x.jsx)(b.r, { variant: "secondary", isLoading: f, endIcon: f ? Object(x.jsx)(b.i, { spin: !0, color: "currentColor" }) : void 0, onClick: function() { w(Object(l.i)(h + A.a)) }, children: n(f ? "Loading..." : "View More") }) })] })
                },
                Nt = n(124),
                Wt = function() {
                    var t = Object(r.c)().account,
                        e = Object(a.b)().t,
                        n = Object(i.b)(),
                        s = Object(o.u)(t),
                        u = Object(b.Lc)().isDesktop;
                    return Object(c.useEffect)((function() { t && (n(Object(Nt.d)(t)), n(Object(l.b)(t))) }), [t, n]), t && s ? Object(x.jsxs)(R.a, { mb: "48px", children: [Object(x.jsx)(b.Z, { as: "h2", scale: "md", color: "secondary", mb: "16px", children: e("My Rankings") }), u ? Object(x.jsx)(b.v, { isActive: !0, children: Object(x.jsxs)(b.jc, { children: [Object(x.jsx)("thead", { children: Object(x.jsxs)("tr", { children: [Object(x.jsx)(b.oc, { width: "60px", children: "\xa0" }), Object(x.jsx)(b.oc, { textAlign: "left", children: "\xa0" }), Object(x.jsx)(b.oc, { textAlign: "right", children: e("Net Winnings (BNB)") }), Object(x.jsx)(b.oc, { textAlign: "center", children: e("Win Rate") }), Object(x.jsx)(b.oc, { children: e("Rounds Won") }), Object(x.jsx)(b.oc, { children: e("Rounds Played") })] }) }), Object(x.jsx)("tbody", { children: Object(x.jsx)(ht, { user: s }) })] }) }) : Object(x.jsx)(b.v, { isActive: !0, children: Object(x.jsx)(gt, { user: s }) })] }) : null
                },
                kt = n(397),
                Dt = n(202);
            ! function(t) { t[t.NOT_VALID = 0] = "NOT_VALID", t[t.FOUND = 1] = "FOUND", t[t.NOT_FOUND = 2] = "NOT_FOUND" }(F || (F = {}));
            var Lt, Ct, Ft = P.e.div(L || (L = Object(U.a)(["\n  align-items: center;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 0 0 ", " ", ";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ", "\n"])), (function(t) { return t.theme.colors.input }), (function(t) { return t.theme.colors.inputSecondary }), (function(t) { return t.theme.radii.default }), (function(t) { return t.theme.radii.default }), (function(t) { return t.isOpen && "\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  " })),
                At = Object(P.e)(b.nc)(C || (C = Object(U.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),
                Rt = { isFetching: !1, resultFound: F.NOT_VALID, value: "" },
                Tt = function() {
                    var t = Object(c.useState)(Rt),
                        e = Object(z.a)(t, 2),
                        n = e[0],
                        r = e[1],
                        s = Object(o.a)(n.value),
                        u = Object(a.b)().t,
                        j = Object(i.b)(),
                        d = n.isFetching,
                        O = n.resultFound,
                        f = n.value,
                        h = Object(b.Mc)(Object(x.jsx)(bt, { account: n.value, onBeforeDismiss: function() { return r(Rt) } })),
                        p = Object(z.a)(h, 1)[0];
                    return Object(c.useEffect)((function() {
                        !1 !== Object(M.h)(f) ? function() {
                            var t = Object($.a)(K.a.mark((function t() {
                                return K.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, r((function(t) { return Object(T.a)(Object(T.a)({}, t), {}, { isFetching: !0 }) })), t.next = 4, j(Object(l.b)(f));
                                        case 4:
                                            return t.prev = 4, r((function(t) { return Object(T.a)(Object(T.a)({}, t), {}, { isFetching: !1 }) })), t.finish(4);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, , 4, 7]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }()() : r((function(t) { return Object(T.a)(Object(T.a)({}, t), {}, { resultFound: F.NOT_VALID }) }))
                    }), [f, j, r]), Object(c.useEffect)((function() { void 0 !== s && r((function(t) { return Object(T.a)(Object(T.a)({}, t), {}, { resultFound: null === s ? F.NOT_FOUND : F.FOUND }) })) }), [s, r]), Object(x.jsxs)(b.n, {
                        position: "relative",
                        children: [Object(x.jsx)(b.fb, {
                            placeholder: u("Search %subject%", { subject: u("Address").toLowerCase() }),
                            value: n.value,
                            onChange: function(t) {
                                var e = t.target.value;
                                r((function(t) { return Object(T.a)(Object(T.a)({}, t), {}, { value: e }) }))
                            },
                            style: { position: "relative", zIndex: 16, paddingRight: "40px" }
                        }), d && Object(x.jsx)(b.n, { position: "absolute", top: "12px", right: "16px", style: { zIndex: 17 }, children: Object(x.jsx)(Dt.a, {}) }), Object(x.jsx)(Ft, { isOpen: O !== F.NOT_VALID, children: O === F.FOUND ? Object(x.jsx)(At, { onClick: function() { r(Rt), p() }, children: n.value }) : Object(x.jsx)(b.nc, { px: "16px", fontWeight: "bold", children: u("No results found.") }) })]
                    })
                },
                It = Object(P.e)(b.n)(Lt || (Lt = Object(U.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  ", " {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])), (function(t) { return t.theme.mediaQueries.lg })),
                zt = Object(P.e)(b.n)(Ct || (Ct = Object(U.a)(["\n  order: 2;\n  width: 100%;\n\n  ", " {\n    order: 1;\n    width: auto;\n  }\n"])), (function(t) { return t.theme.mediaQueries.lg })),
                Ut = function() {
                    var t = Object(a.b)().t,
                        e = Object(i.b)(),
                        n = [{ label: t("Net Winnings"), value: "netBNB" }, { label: t("Total BNB"), value: "totalBNB" }, { label: t("Rounds Played"), value: "totalBets" }, { label: t("Win Rate"), value: "winRate" }];
                    return Object(x.jsxs)(R.a, { py: "32px", children: [Object(x.jsx)(b.nc, { textTransform: "uppercase", fontSize: "12px", color: "textSubtle", fontWeight: "bold", mb: "4px", children: t("Rank By") }), Object(x.jsxs)(b.X, { flexDirection: ["column", null, null, null, null, "row"], alignItems: ["start", null, null, null, null, "center"], justifyContent: ["start", null, null, null, null, "space-between"], children: [Object(x.jsx)(zt, { children: Object(x.jsx)(kt.a, { options: n, onOptionChange: function(t) { e(Object(l.p)({ orderBy: t.value })) } }) }), Object(x.jsx)(It, { children: Object(x.jsx)(Tt, {}) })] })] })
                };
            e.default = function() {
                var t = Object(o.q)(),
                    e = Object(o.o)(),
                    n = Object(r.c)().account,
                    b = Object(i.b)();
                return Object(c.useEffect)((function() { b(Object(l.h)({ filters: e })) }), [n, e, b]), t === s.c.INITIAL ? Object(x.jsx)(u.a, {}) : Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(j.a, {}), Object(x.jsx)(h, {}), Object(x.jsx)(Ut, {}), Object(x.jsx)(Wt, {}), Object(x.jsx)(yt, {})] })
            }
        },
        786: function(t, e, n) {
            "use strict";
            n.d(e, "w", (function() { return O })), n.d(e, "b", (function() { return x })), n.d(e, "l", (function() { return f })), n.d(e, "g", (function() { return h })), n.d(e, "y", (function() { return p })), n.d(e, "x", (function() { return m })), n.d(e, "d", (function() { return g })), n.d(e, "k", (function() { return v })), n.d(e, "v", (function() { return B })), n.d(e, "j", (function() { return w })), n.d(e, "h", (function() { return S })), n.d(e, "e", (function() { return y })), n.d(e, "t", (function() { return N })), n.d(e, "c", (function() { return W })), n.d(e, "m", (function() { return k })), n.d(e, "i", (function() { return D })), n.d(e, "n", (function() { return L })), n.d(e, "f", (function() { return C })), n.d(e, "q", (function() { return F })), n.d(e, "r", (function() { return A })), n.d(e, "o", (function() { return R })), n.d(e, "s", (function() { return T })), n.d(e, "p", (function() { return I })), n.d(e, "a", (function() { return z })), n.d(e, "u", (function() { return U }));
            var c = n(19),
                r = n(6),
                i = n(1),
                o = n(23),
                s = n(56),
                l = n(123),
                u = n(38),
                j = n(62),
                b = n(67),
                a = n(370),
                d = function() { var t = Object(o.c)((function(t) { return t.predictions.rounds })); return Object.keys(t).reduce((function(e, n) { return Object(r.a)(Object(r.a)({}, e), {}, Object(c.a)({}, n, Object(b.q)(t[n]))) }), {}) },
                O = function() { var t = d(); return Object(l.orderBy)(Object.values(t), ["epoch"], ["asc"]) },
                x = function(t, e) { var n = Object(o.c)((function(t) { return t.predictions.ledgers })); return n[t] && n[t][e] ? Object(b.q)(n[t][e]) : null },
                f = function(t) { return Object(o.c)((function(t) { return t.predictions.claimableStatuses }))[t] || !1 },
                h = function() { return Object(o.c)((function(t) { var e = Object(l.minBy)(Object.values(t.predictions.rounds), "epoch"); return null === e || void 0 === e ? void 0 : e.epoch })) },
                p = function() { return Object(o.c)((function(t) { return t.predictions.isHistoryPaneOpen })) },
                m = function() { return Object(o.c)((function(t) { return t.predictions.isChartPaneOpen })) },
                g = function() { return Object(o.c)((function(t) { return t.predictions.currentEpoch })) },
                v = function() { return Object(o.c)((function(t) { return t.predictions.intervalSeconds })) },
                B = function() { return Object(o.c)((function(t) { return t.predictions.status })) },
                w = function() { return Object(o.c)((function(t) { return t.predictions.historyFilter })) },
                S = function() { return Object(o.c)((function(t) { return t.predictions.hasHistoryLoaded })) },
                y = function() { return Object(o.c)((function(t) { return t.predictions.currentHistoryPage })) },
                N = function() { var t = Object(o.c)((function(t) { return t.predictions.minBetAmount })); return Object(i.useMemo)((function() { return s.a.BigNumber.from(t) }), [t]) },
                W = function() { return Object(o.c)((function(t) { return t.predictions.bufferSeconds })) },
                k = function() { return Object(o.c)((function(t) { return t.predictions.isFetchingHistory })) },
                D = function() { return Object(o.c)((function(t) { return t.predictions.history })) },
                L = function() { var t = Object(o.c)((function(t) { return t.predictions.lastOraclePrice })); return Object(i.useMemo)((function() { return s.a.BigNumber.from(t) }), [t]) },
                C = function() {
                    var t = function() { var t = g(); return d()[t] }(),
                        e = v();
                    return t.lockTimestamp ? t.lockTimestamp : t.startTimestamp + e
                },
                F = function() { return Object(o.c)((function(t) { return t.predictions.leaderboard.loadingState })) },
                A = function() { return Object(o.c)((function(t) { return t.predictions.leaderboard.results })) },
                R = function() { return Object(o.c)((function(t) { return t.predictions.leaderboard.filters })) },
                T = function() { return Object(o.c)((function(t) { return t.predictions.leaderboard.skip })) },
                I = function() { return Object(o.c)((function(t) { return t.predictions.leaderboard.hasMoreResults })) },
                z = function(t) { return Object(o.c)((function(e) { return e.predictions.leaderboard.addressResults[t] })) },
                U = function(t) {
                    var e = z(t),
                        n = Object(j.b)();
                    return Object(i.useEffect)((function() { var c = Object(u.h)(t);!e && null !== e && c && n(Object(a.b)(t)) }), [n, t, e]), e
                }
        },
        819: function(t, e, n) {
            var c = n(494),
                r = n(845),
                i = n(820),
                o = 4294967295,
                s = Math.min;
            t.exports = function(t, e) {
                if ((t = i(t)) < 1 || t > 9007199254740991) return [];
                var n = o,
                    l = s(t, o);
                e = r(e), t -= o;
                for (var u = c(l, e); ++n < t;) e(n);
                return u
            }
        },
        820: function(t, e, n) {
            var c = n(493);
            t.exports = function(t) {
                var e = c(t),
                    n = e % 1;
                return e === e ? n ? e - n : e : 0
            }
        },
        845: function(t, e, n) {
            var c = n(251);
            t.exports = function(t) { return "function" == typeof t ? t : c }
        }
    }
]);
//# sourceMappingURL=17.a32294a4.chunk.js.map