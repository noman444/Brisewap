(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [20], {
        1530: function(e, n, t) {
            "use strict";
            t.r(n);
            t(1);
            var c, i, r, s, a, l, o, d, j = t(2),
                b = t(270),
                x = t.n(b),
                u = t(843),
                O = t(189),
                m = t(14),
                p = t(8),
                f = t(5),
                h = t(86),
                g = t(0),
                v = f.e.div(c || (c = Object(p.a)(["\n  align-self: stretch;\n  background: ", ";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #22BEC0B3 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                y = f.e.div(i || (i = Object(p.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                w = f.e.div(r || (r = Object(p.a)(["\n  flex: 1;\n"]))),
                S = f.e.img(s || (s = Object(p.a)(["\n  border-radius: 50%;\n"]))),
                F = Object(f.e)(j.Z).attrs({ as: "h3" })(a || (a = Object(p.a)(["\n  font-size: 24px;\n\n  ", " {\n    font-size: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                k = f.e.div(l || (l = Object(p.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n\n  ", " {\n    display: none;\n  }\n"])), S, (function(e) { return e.theme.mediaQueries.md })),
                z = f.e.div(o || (o = Object(p.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n    margin-left: 24px;\n\n    ", " {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), S),
                X = Object(f.e)(j.v)(d || (d = Object(p.a)(["\n  margin-bottom: 16px;\n"]))),
                I = function(e) {
                    var n = e.rank,
                        t = e.team,
                        c = Object(m.b)().t,
                        i = Object(g.jsx)(S, { src: "/images/teams/".concat(t.images.md), alt: "team avatar" });
                    return Object(g.jsx)(X, { id: "team-".concat(t.id), children: Object(g.jsxs)(j.X, { children: [Object(g.jsx)(v, { children: Object(g.jsx)(j.nc, { bold: !0, fontSize: "24px", children: n }) }), Object(g.jsxs)(y, { children: [Object(g.jsxs)(w, { children: [Object(g.jsxs)(j.X, { alignItems: "center", mb: "16px", children: [Object(g.jsx)(k, { children: i }), Object(g.jsx)(F, { children: t.name })] }), Object(g.jsx)(j.nc, { as: "p", color: "textSubtle", pr: "24px", mb: "16px", children: c(t.description) }), Object(g.jsxs)(j.X, { children: [Object(g.jsxs)(j.X, { children: [Object(g.jsx)(j.Nb, { width: "24px", mr: "8px", style: { alignSelf: "center" } }), Object(g.jsx)(j.nc, { fontSize: "24px", bold: !0, children: t.points.toLocaleString() })] }), Object(g.jsxs)(j.X, { ml: "24px", children: [Object(g.jsx)(j.O, { width: "24px", mr: "8px", style: { alignSelf: "center" } }), Object(g.jsx)(j.nc, { fontSize: "24px", bold: !0, children: t.users.toLocaleString() })] })] })] }), Object(g.jsx)(j.r, { as: h.a, to: "/teams/".concat(null === t || void 0 === t ? void 0 : t.id), variant: "secondary", scale: "sm", children: c("See More") }), Object(g.jsx)(z, { children: i })] })] }) })
                },
                E = t(948);
            n.default = function() {
                var e = Object(m.b)().t,
                    n = Object(u.b)(),
                    t = n.teams,
                    c = n.isLoading,
                    s
                i = Object.values(t),
                    r = x()(i, ["points", "id", "name"], ["desc", "asc", "asc"]);
                return Object(g.jsxs)(O.b, { children: [Object(g.jsx)(E.a, {}), Object(g.jsxs)(j.X, { alignItems: "center", justifyContent: "space-between", mb: "32px", children: [Object(g.jsx)(j.Z, { scale: "xl", children: e("Teams") }), c && Object(g.jsx)(j.i, { spin: !0 })] }), r.map((function(e, n) { return Object(g.jsx)(I, { rank: n + 1, team: e }, e.id) }))] })
            }
        },
        843: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() { return a })), t.d(n, "b", (function() { return l }));
            var c = t(1),
                i = t(23),
                r = t(62),
                s = t(175),
                a = function(e) {
                    var n = Object(i.c)((function(n) { return n.teams.data[e] })),
                        t = Object(r.b)();
                    return Object(c.useEffect)((function() { t(Object(s.b)(e)) }), [e, t]), n
                },
                l = function() {
                    var e = Object(i.c)((function(e) { return e.teams })),
                        n = e.isInitialized,
                        t = e.isLoading,
                        a = e.data,
                        l = Object(r.b)();
                    return Object(c.useEffect)((function() { l(Object(s.c)()) }), [l]), { teams: a, isInitialized: n, isLoading: t }
                }
        },
        844: function(e, n, t) {
            "use strict";
            var c, i = t(8),
                r = t(5).e.div(c || (c = Object(i.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle }));
            n.a = r
        },
        948: function(e, n, t) {
            "use strict";
            t(1);
            var c = t(2),
                i = t(188),
                r = t(14),
                s = t(844),
                a = t(86),
                l = t(0),
                o = function() { var e = Object(r.b)().t; return Object(l.jsx)(c.v, { mb: "32px", isActive: !0, children: Object(l.jsx)(c.w, { children: Object(l.jsxs)(c.X, { alignItems: ["start", null, "center"], justifyContent: ["start", null, "space-between"], flexDirection: ["column", null, "row"], children: [Object(l.jsxs)("div", { children: [Object(l.jsx)(c.Z, { scale: "lg", mb: "8px", children: e("You haven\u2019t set up your profile yet!") }), Object(l.jsx)(c.nc, { children: e("You can do this at any time by clicking on your profile picture in the menu") })] }), Object(l.jsx)(c.r, { as: a.a, to: "/profile", id: "teamsPageSetUpProfile", mt: ["16px", null, 0], children: e("Set up now") })] }) }) }) };
            n.a = function() {
                var e = Object(r.b)().t,
                    n = Object(i.c)(),
                    t = n.isInitialized,
                    a = n.profile,
                    d = t && !a;
                return Object(l.jsxs)(l.Fragment, { children: [d && Object(l.jsx)(o, {}), Object(l.jsxs)(s.a, { children: [Object(l.jsx)(c.Z, { as: "h1", scale: "xxl", color: "secondary", children: e("Teams & Profiles") }), Object(l.jsx)(c.nc, { bold: !0, children: e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!") })] })] })
            }
        }
    }
]);
//# sourceMappingURL=20.30404727.chunk.js.map