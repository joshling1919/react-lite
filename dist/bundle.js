!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 0));
})([
  function (e, t, n) {
    const r = n(1),
      o = r.createElement(
        "div",
        { id: "foo" },
        r.createElement("a", null, "bar"),
        r.createElement("b", null)
      ),
      c = document.getElementById("root");
    r.render(o, c);
  },
  function (e, t, n) {
    (function (e) {
      const t = {
        createElement: function (e, t, ...n) {
          return {
            type: e,
            props: {
              ...t,
              children: n.map((e) =>
                "object" == typeof e
                  ? e
                  : {
                      type: "TEXT_ELEMENT",
                      props: { nodeValue: e, children: [] },
                    }
              ),
            },
          };
        },
        render: function e(t, n) {
          const r =
            "TEXT_ELEMENT" === t.type
              ? document.createTextNode("")
              : document.createElement(t.type);
          Object.keys(t.props)
            .filter((e) => "children" !== e)
            .forEach((e) => {
              r[e] = t.props[e];
            }),
            t.props.children.forEach((t) => e(t, r)),
            n.appendChild(r);
        },
      };
      e.export = t;
    }.call(this, n(2)(e)));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
]);
