/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var m_ = Object.create;
  var fn = Object.defineProperty;
  var y_ = Object.getOwnPropertyDescriptor;
  var E_ = Object.getOwnPropertyNames;
  var b_ = Object.getPrototypeOf,
    __ = Object.prototype.hasOwnProperty;
  var I_ = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var ve = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ge = (e, t) => {
      for (var r in t) fn(e, r, { get: t[r], enumerable: !0 });
    },
    Xs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of E_(t))
          !__.call(e, i) &&
            i !== r &&
            fn(e, i, {
              get: () => t[i],
              enumerable: !(n = y_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? m_(b_(e)) : {}),
      Xs(
        t || !e || !e.__esModule
          ? fn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => Xs(fn({}, "__esModule", { value: !0 }), e);
  var Gi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, E) {
        var x = new m.Bare();
        return x.init(f, E);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (E) {
          return "-" + E.toLowerCase();
        });
      }
      function n(f) {
        var E = parseInt(f.slice(1), 16),
          x = (E >> 16) & 255,
          S = (E >> 8) & 255,
          w = 255 & E;
        return [x, S, w];
      }
      function i(f, E, x) {
        return (
          "#" + ((1 << 24) | (f << 16) | (E << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, E) {
        l("Type warning: Expected: [" + f + "] Got: [" + typeof E + "] " + E);
      }
      function s(f, E, x) {
        l("Units do not match [" + f + "]: " + E + ", " + x);
      }
      function u(f, E, x) {
        if ((E !== void 0 && (x = E), f === void 0)) return x;
        var S = x;
        return (
          Xe.test(f) || !Fe.test(f)
            ? (S = parseInt(f, 10))
            : Fe.test(f) && (S = 1e3 * parseFloat(f)),
          0 > S && (S = 0),
          S === S ? S : x
        );
      }
      function l(f) {
        se.debug && window && window.console.warn(f);
      }
      function v(f) {
        for (var E = -1, x = f ? f.length : 0, S = []; ++E < x; ) {
          var w = f[E];
          w && S.push(w);
        }
        return S;
      }
      var d = (function (f, E, x) {
          function S(oe) {
            return typeof oe == "object";
          }
          function w(oe) {
            return typeof oe == "function";
          }
          function C() {}
          function $(oe, ge) {
            function k() {
              var Le = new ae();
              return w(Le.init) && Le.init.apply(Le, arguments), Le;
            }
            function ae() {}
            ge === x && ((ge = oe), (oe = Object)), (k.Bare = ae);
            var ue,
              _e = (C[f] = oe[f]),
              rt = (ae[f] = k[f] = new C());
            return (
              (rt.constructor = k),
              (k.mixin = function (Le) {
                return (ae[f] = k[f] = $(k, Le)[f]), k;
              }),
              (k.open = function (Le) {
                if (
                  ((ue = {}),
                  w(Le) ? (ue = Le.call(k, rt, _e, k, oe)) : S(Le) && (ue = Le),
                  S(ue))
                )
                  for (var yr in ue) E.call(ue, yr) && (rt[yr] = ue[yr]);
                return w(rt.init) || (rt.init = oe), k;
              }),
              k.open(ge)
            );
          }
          return $;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (f, E, x, S) {
              var w = (f /= S) * f,
                C = w * f;
              return (
                E +
                x * (-2.75 * C * w + 11 * w * w + -15.5 * C + 8 * w + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, E, x, S) {
              var w = (f /= S) * f,
                C = w * f;
              return E + x * (-1 * C * w + 3 * w * w + -3 * C + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, E, x, S) {
              var w = (f /= S) * f,
                C = w * f;
              return (
                E +
                x * (0.3 * C * w + -1.6 * w * w + 2.2 * C + -1.8 * w + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, E, x, S) {
              var w = (f /= S) * f,
                C = w * f;
              return E + x * (2 * C * w + -5 * w * w + 2 * C + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (f, E, x, S) {
              return (x * f) / S + E;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, E, x, S) {
              return x * (f /= S) * f + E;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, E, x, S) {
              return -x * (f /= S) * (f - 2) + E;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, E, x, S) {
              return (f /= S / 2) < 1
                ? (x / 2) * f * f + E
                : (-x / 2) * (--f * (f - 2) - 1) + E;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, E, x, S) {
              return x * (f /= S) * f * f + E;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, E, x, S) {
              return x * ((f = f / S - 1) * f * f + 1) + E;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, E, x, S) {
              return (f /= S / 2) < 1
                ? (x / 2) * f * f * f + E
                : (x / 2) * ((f -= 2) * f * f + 2) + E;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, E, x, S) {
              return x * (f /= S) * f * f * f + E;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, E, x, S) {
              return -x * ((f = f / S - 1) * f * f * f - 1) + E;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, E, x, S) {
              return (f /= S / 2) < 1
                ? (x / 2) * f * f * f * f + E
                : (-x / 2) * ((f -= 2) * f * f * f - 2) + E;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, E, x, S) {
              return x * (f /= S) * f * f * f * f + E;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, E, x, S) {
              return x * ((f = f / S - 1) * f * f * f * f + 1) + E;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, E, x, S) {
              return (f /= S / 2) < 1
                ? (x / 2) * f * f * f * f * f + E
                : (x / 2) * ((f -= 2) * f * f * f * f + 2) + E;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, E, x, S) {
              return -x * Math.cos((f / S) * (Math.PI / 2)) + x + E;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, E, x, S) {
              return x * Math.sin((f / S) * (Math.PI / 2)) + E;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, E, x, S) {
              return (-x / 2) * (Math.cos((Math.PI * f) / S) - 1) + E;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, E, x, S) {
              return f === 0 ? E : x * Math.pow(2, 10 * (f / S - 1)) + E;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, E, x, S) {
              return f === S
                ? E + x
                : x * (-Math.pow(2, (-10 * f) / S) + 1) + E;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, E, x, S) {
              return f === 0
                ? E
                : f === S
                ? E + x
                : (f /= S / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (f - 1)) + E
                : (x / 2) * (-Math.pow(2, -10 * --f) + 2) + E;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, E, x, S) {
              return -x * (Math.sqrt(1 - (f /= S) * f) - 1) + E;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, E, x, S) {
              return x * Math.sqrt(1 - (f = f / S - 1) * f) + E;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, E, x, S) {
              return (f /= S / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - f * f) - 1) + E
                : (x / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + E;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, E, x, S, w) {
              return (
                w === void 0 && (w = 1.70158),
                x * (f /= S) * f * ((w + 1) * f - w) + E
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, E, x, S, w) {
              return (
                w === void 0 && (w = 1.70158),
                x * ((f = f / S - 1) * f * ((w + 1) * f + w) + 1) + E
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, E, x, S, w) {
              return (
                w === void 0 && (w = 1.70158),
                (f /= S / 2) < 1
                  ? (x / 2) * f * f * (((w *= 1.525) + 1) * f - w) + E
                  : (x / 2) *
                      ((f -= 2) * f * (((w *= 1.525) + 1) * f + w) + 2) +
                    E
              );
            },
          ],
        },
        p = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        h = document,
        b = window,
        T = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        R = /[A-Z]/,
        A = "number",
        N = /^(rgb|#)/,
        P = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        X = "unitless",
        j = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        ie = " ",
        F = h.createElement("a"),
        O = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        B = function (f) {
          if (f in F.style) return { dom: f, css: f };
          var E,
            x,
            S = "",
            w = f.split("-");
          for (E = 0; E < w.length; E++)
            S += w[E].charAt(0).toUpperCase() + w[E].slice(1);
          for (E = 0; E < O.length; E++)
            if (((x = O[E] + S), x in F.style))
              return { dom: x, css: q[E] + f };
        },
        D = (t.support = {
          bind: Function.prototype.bind,
          transform: B("transform"),
          transition: B("transition"),
          backface: B("backface-visibility"),
          timing: B("transition-timing-function"),
        });
      if (D.transition) {
        var Z = D.timing.dom;
        if (((F.style[Z] = g["ease-in-back"][0]), !F.style[Z]))
          for (var re in p) g[re][0] = p[re];
      }
      var M = (t.frame = (function () {
          var f =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return f && D.bind
            ? f.bind(b)
            : function (E) {
                b.setTimeout(E, 16);
              };
        })()),
        G = (t.now = (function () {
          var f = b.performance,
            E = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return E && D.bind
            ? E.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        K = d(function (f) {
          function E(te, ce) {
            var ye = v(("" + te).split(ie)),
              de = ye[0];
            ce = ce || {};
            var Ne = H[de];
            if (!Ne) return l("Unsupported property: " + de);
            if (!ce.weak || !this.props[de]) {
              var ze = Ne[0],
                De = this.props[de];
              return (
                De || (De = this.props[de] = new ze.Bare()),
                De.init(this.$el, ye, Ne, ce),
                De
              );
            }
          }
          function x(te, ce, ye) {
            if (te) {
              var de = typeof te;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ce)
              )
                return (
                  (this.timer = new J({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ce) {
                switch (te) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    $.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    E.call(this, te, ye && ye[1]);
                }
                return C.call(this);
              }
              if (de == "function") return void te.call(this, this);
              if (de == "object") {
                var Ne = 0;
                rt.call(
                  this,
                  te,
                  function (Ie, v_) {
                    Ie.span > Ne && (Ne = Ie.span), Ie.stop(), Ie.animate(v_);
                  },
                  function (Ie) {
                    "wait" in Ie && (Ne = u(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Ne > 0 &&
                    ((this.timer = new J({ duration: Ne, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = C));
                var ze = this,
                  De = !1,
                  ln = {};
                M(function () {
                  rt.call(ze, te, function (Ie) {
                    Ie.active && ((De = !0), (ln[Ie.name] = Ie.nextStyle));
                  }),
                    De && ze.$el.css(ln);
                });
              }
            }
          }
          function S(te) {
            (te = u(te, 0)),
              this.active
                ? this.queue.push({ options: te })
                : ((this.timer = new J({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function w(te) {
            return this.active
              ? (this.queue.push({ options: te, args: arguments }),
                void (this.timer.complete = C))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var te = this.queue.shift();
              x.call(this, te.options, !0, te.args);
            }
          }
          function $(te) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof te == "string"
              ? ((ce = {}), (ce[te] = 1))
              : (ce = typeof te == "object" && te != null ? te : this.props),
              rt.call(this, ce, Le),
              _e.call(this);
          }
          function oe(te) {
            $.call(this, te), rt.call(this, te, yr, g_);
          }
          function ge(te) {
            typeof te != "string" && (te = "block"),
              (this.el.style.display = te);
          }
          function k() {
            $.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function ue() {
            $.call(this), e.removeData(this.el, T), (this.$el = this.el = null);
          }
          function _e() {
            var te,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (te in this.props)
              (ce = this.props[te]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[D.transition.dom] = ye));
          }
          function rt(te, ce, ye) {
            var de,
              Ne,
              ze,
              De,
              ln = ce !== Le,
              Ie = {};
            for (de in te)
              (ze = te[de]),
                de in fe
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[de] = ze))
                  : (R.test(de) && (de = r(de)),
                    de in H ? (Ie[de] = ze) : (De || (De = {}), (De[de] = ze)));
            for (de in Ie) {
              if (((ze = Ie[de]), (Ne = this.props[de]), !Ne)) {
                if (!ln) continue;
                Ne = E.call(this, de);
              }
              ce.call(this, Ne, ze);
            }
            ye && De && ye.call(this, De);
          }
          function Le(te) {
            te.stop();
          }
          function yr(te, ce) {
            te.set(ce);
          }
          function g_(te) {
            this.$el.css(te);
          }
          function je(te, ce) {
            f[te] = function () {
              return this.children
                ? h_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function h_(te, ce) {
            var ye,
              de = this.children.length;
            for (ye = 0; de > ye; ye++) te.apply(this.children[ye], ce);
            return this;
          }
          (f.init = function (te) {
            if (
              ((this.$el = e(te)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              se.keepInherited && !se.fallback)
            ) {
              var ce = V(this.el, "transition");
              ce && !j.test(ce) && (this.upstream = ce);
            }
            D.backface &&
              se.hideBackface &&
              y(this.el, D.backface.css, "hidden");
          }),
            je("add", E),
            je("start", x),
            je("wait", S),
            je("then", w),
            je("next", C),
            je("stop", $),
            je("set", oe),
            je("show", ge),
            je("hide", k),
            je("redraw", ae),
            je("destroy", ue);
        }),
        m = d(K, function (f) {
          function E(x, S) {
            var w = e.data(x, T) || e.data(x, T, new K.Bare());
            return w.el || w.init(x), S ? w.start(S) : w;
          }
          f.init = function (x, S) {
            var w = e(x);
            if (!w.length) return this;
            if (w.length === 1) return E(w[0], S);
            var C = [];
            return (
              w.each(function ($, oe) {
                C.push(E(oe, S));
              }),
              (this.children = C),
              this
            );
          };
        }),
        I = d(function (f) {
          function E() {
            var C = this.get();
            this.update("auto");
            var $ = this.get();
            return this.update(C), $;
          }
          function x(C, $, oe) {
            return $ !== void 0 && (oe = $), C in g ? C : oe;
          }
          function S(C) {
            var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return ($ ? i($[1], $[2], $[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (C, $, oe, ge) {
            (this.$el = C), (this.el = C[0]);
            var k = $[0];
            oe[2] && (k = oe[2]),
              z[k] && (k = z[k]),
              (this.name = k),
              (this.type = oe[1]),
              (this.duration = u($[1], this.duration, w.duration)),
              (this.ease = x($[2], this.ease, w.ease)),
              (this.delay = u($[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = ge.unit || this.unit || se.defaultUnit),
              (this.angle = ge.angle || this.angle || se.defaultAngle),
              se.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ie +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ie + g[this.ease][0] : "") +
                    (this.delay ? ie + this.delay + "ms" : "")));
          }),
            (f.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (f.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = E.call(this))),
                (this.nextStyle = C);
            }),
            (f.fallback = function (C) {
              var $ =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  ($ == "auto" && ($ = this.convert(this.get(), this.type)),
                  C == "auto" && (C = E.call(this))),
                (this.tween = new Y({
                  from: $,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return V(this.el, this.name);
            }),
            (f.update = function (C) {
              y(this.el, this.name, C);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                y(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (f.convert = function (C, $) {
              if (C == "auto" && this.auto) return C;
              var oe,
                ge = typeof C == "number",
                k = typeof C == "string";
              switch ($) {
                case A:
                  if (ge) return C;
                  if (k && C.replace(_, "") === "") return +C;
                  oe = "number(unitless)";
                  break;
                case N:
                  if (k) {
                    if (C === "" && this.original) return this.original;
                    if ($.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : S(C);
                  }
                  oe = "hex or rgb string";
                  break;
                case P:
                  if (ge) return C + this.unit;
                  if (k && $.test(C)) return C;
                  oe = "number(px) or string(unit)";
                  break;
                case L:
                  if (ge) return C + this.unit;
                  if (k && $.test(C)) return C;
                  oe = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (ge) return C + this.angle;
                  if (k && $.test(C)) return C;
                  oe = "number(deg) or string(angle)";
                  break;
                case X:
                  if (ge || (k && L.test(C))) return C;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, C), C;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        U = d(I, function (f, E) {
          f.init = function () {
            E.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        ee = d(I, function (f, E) {
          (f.init = function () {
            E.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        ne = d(I, function (f, E) {
          function x(S, w) {
            var C, $, oe, ge, k;
            for (C in S)
              (ge = fe[C]),
                (oe = ge[0]),
                ($ = ge[1] || C),
                (k = this.convert(S[C], oe)),
                w.call(this, $, k, oe);
          }
          (f.init = function () {
            E.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  se.perspective &&
                  ((this.current.perspective = se.perspective),
                  y(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (S) {
              x.call(this, S, function (w, C) {
                this.current[w] = C;
              }),
                y(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (S) {
              var w = this.values(S);
              this.tween = new be({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                $ = {};
              for (C in this.current) $[C] = C in w ? w[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style($));
            }),
            (f.fallback = function (S) {
              var w = this.values(S);
              this.tween = new be({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              y(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (S) {
              var w,
                C = "";
              for (w in S) C += w + "(" + S[w] + ") ";
              return C;
            }),
            (f.values = function (S) {
              var w,
                C = {};
              return (
                x.call(this, S, function ($, oe, ge) {
                  (C[$] = oe),
                    this.current[$] === void 0 &&
                      ((w = 0),
                      ~$.indexOf("scale") && (w = 1),
                      (this.current[$] = this.convert(w, ge)));
                }),
                C
              );
            });
        }),
        Y = d(function (f) {
          function E(k) {
            oe.push(k) === 1 && M(x);
          }
          function x() {
            var k,
              ae,
              ue,
              _e = oe.length;
            if (_e)
              for (M(x), ae = G(), k = _e; k--; )
                (ue = oe[k]), ue && ue.render(ae);
          }
          function S(k) {
            var ae,
              ue = e.inArray(k, oe);
            ue >= 0 &&
              ((ae = oe.slice(ue + 1)),
              (oe.length = ue),
              ae.length && (oe = oe.concat(ae)));
          }
          function w(k) {
            return Math.round(k * ge) / ge;
          }
          function C(k, ae, ue) {
            return i(
              k[0] + ue * (ae[0] - k[0]),
              k[1] + ue * (ae[1] - k[1]),
              k[2] + ue * (ae[2] - k[2])
            );
          }
          var $ = { ease: g.ease[1], from: 0, to: 1 };
          (f.init = function (k) {
            (this.duration = k.duration || 0), (this.delay = k.delay || 0);
            var ae = k.ease || $.ease;
            g[ae] && (ae = g[ae][1]),
              typeof ae != "function" && (ae = $.ease),
              (this.ease = ae),
              (this.update = k.update || o),
              (this.complete = k.complete || o),
              (this.context = k.context || this),
              (this.name = k.name);
            var ue = k.from,
              _e = k.to;
            ue === void 0 && (ue = $.from),
              _e === void 0 && (_e = $.to),
              (this.unit = k.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = G()),
              k.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = G()), (this.active = !0), E(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (f.render = function (k) {
              var ae,
                ue = k - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? C(this.startRGB, this.endRGB, _e)
                    : w(this.begin + _e * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (k, ae) {
              if (((ae += ""), (k += ""), k.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(k)),
                  (this.endHex = k),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = ae.replace(_, ""),
                  _e = k.replace(_, "");
                ue !== _e && s("tween", ae, k), (this.unit = ue);
              }
              (ae = parseFloat(ae)),
                (k = parseFloat(k)),
                (this.begin = this.value = ae),
                (this.change = k - ae);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var oe = [],
            ge = 1e3;
        }),
        J = d(Y, function (f) {
          (f.init = function (E) {
            (this.duration = E.duration || 0),
              (this.complete = E.complete || o),
              (this.context = E.context),
              this.play();
          }),
            (f.render = function (E) {
              var x = E - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        be = d(Y, function (f, E) {
          (f.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var S, w;
            for (S in x.values)
              (w = x.values[S]),
                this.current[S] !== w &&
                  this.tweens.push(
                    new Y({
                      name: S,
                      from: this.current[S],
                      to: w,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (x) {
              var S,
                w,
                C = this.tweens.length,
                $ = !1;
              for (S = C; S--; )
                (w = this.tweens[S]),
                  w.context &&
                    (w.render(x), (this.current[w.name] = w.value), ($ = !0));
              return $
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((E.destroy.call(this), this.tweens)) {
                var x,
                  S = this.tweens.length;
                for (x = S; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        se = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !D.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!D.transition) return (se.fallback = !0);
        se.agentTests.push("(" + f + ")");
        var E = new RegExp(se.agentTests.join("|"), "i");
        se.fallback = E.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new Y(f);
        }),
        (t.delay = function (f, E, x) {
          return new J({ complete: E, duration: f, context: x });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var y = e.style,
        V = e.css,
        z = { transform: D.transform && D.transform.css },
        H = {
          color: [U, N],
          background: [U, N, "background-color"],
          "outline-color": [U, N],
          "border-color": [U, N],
          "border-top-color": [U, N],
          "border-right-color": [U, N],
          "border-bottom-color": [U, N],
          "border-left-color": [U, N],
          "border-width": [I, P],
          "border-top-width": [I, P],
          "border-right-width": [I, P],
          "border-bottom-width": [I, P],
          "border-left-width": [I, P],
          "border-spacing": [I, P],
          "letter-spacing": [I, P],
          margin: [I, P],
          "margin-top": [I, P],
          "margin-right": [I, P],
          "margin-bottom": [I, P],
          "margin-left": [I, P],
          padding: [I, P],
          "padding-top": [I, P],
          "padding-right": [I, P],
          "padding-bottom": [I, P],
          "padding-left": [I, P],
          "outline-width": [I, P],
          opacity: [I, A],
          top: [I, L],
          right: [I, L],
          bottom: [I, L],
          left: [I, L],
          "font-size": [I, L],
          "text-indent": [I, L],
          "word-spacing": [I, L],
          width: [I, L],
          "min-width": [I, L],
          "max-width": [I, L],
          height: [I, L],
          "min-height": [I, L],
          "max-height": [I, L],
          "line-height": [I, X],
          "scroll-top": [ee, A, "scrollTop"],
          "scroll-left": [ee, A, "scrollLeft"],
        },
        fe = {};
      D.transform &&
        ((H.transform = [ne]),
        (fe = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [A],
          scaleX: [A],
          scaleY: [A],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        D.transform &&
          D.backface &&
          ((fe.z = [L, "translateZ"]),
          (fe.rotateZ = [W]),
          (fe.scaleZ = [A]),
          (fe.perspective = [P]));
      var Xe = /ms/,
        Fe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var zs = c((OB, js) => {
    "use strict";
    var T_ = window.$,
      w_ = Gi() && T_.tram;
    js.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        l = n.hasOwnProperty,
        v = r.forEach,
        d = r.map,
        g = r.reduce,
        p = r.reduceRight,
        h = r.filter,
        b = r.every,
        T = r.some,
        _ = r.indexOf,
        R = r.lastIndexOf,
        A = Array.isArray,
        N = Object.keys,
        P = i.bind,
        L =
          (e.each =
          e.forEach =
            function (O, q, B) {
              if (O == null) return O;
              if (v && O.forEach === v) O.forEach(q, B);
              else if (O.length === +O.length) {
                for (var D = 0, Z = O.length; D < Z; D++)
                  if (q.call(B, O[D], D, O) === t) return;
              } else
                for (var re = e.keys(O), D = 0, Z = re.length; D < Z; D++)
                  if (q.call(B, O[re[D]], re[D], O) === t) return;
              return O;
            });
      (e.map = e.collect =
        function (O, q, B) {
          var D = [];
          return O == null
            ? D
            : d && O.map === d
            ? O.map(q, B)
            : (L(O, function (Z, re, M) {
                D.push(q.call(B, Z, re, M));
              }),
              D);
        }),
        (e.find = e.detect =
          function (O, q, B) {
            var D;
            return (
              W(O, function (Z, re, M) {
                if (q.call(B, Z, re, M)) return (D = Z), !0;
              }),
              D
            );
          }),
        (e.filter = e.select =
          function (O, q, B) {
            var D = [];
            return O == null
              ? D
              : h && O.filter === h
              ? O.filter(q, B)
              : (L(O, function (Z, re, M) {
                  q.call(B, Z, re, M) && D.push(Z);
                }),
                D);
          });
      var W =
        (e.some =
        e.any =
          function (O, q, B) {
            q || (q = e.identity);
            var D = !1;
            return O == null
              ? D
              : T && O.some === T
              ? O.some(q, B)
              : (L(O, function (Z, re, M) {
                  if (D || (D = q.call(B, Z, re, M))) return t;
                }),
                !!D);
          });
      (e.contains = e.include =
        function (O, q) {
          return O == null
            ? !1
            : _ && O.indexOf === _
            ? O.indexOf(q) != -1
            : W(O, function (B) {
                return B === q;
              });
        }),
        (e.delay = function (O, q) {
          var B = a.call(arguments, 2);
          return setTimeout(function () {
            return O.apply(null, B);
          }, q);
        }),
        (e.defer = function (O) {
          return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (O) {
          var q, B, D;
          return function () {
            q ||
              ((q = !0),
              (B = arguments),
              (D = this),
              w_.frame(function () {
                (q = !1), O.apply(D, B);
              }));
          };
        }),
        (e.debounce = function (O, q, B) {
          var D,
            Z,
            re,
            M,
            G,
            K = function () {
              var m = e.now() - M;
              m < q
                ? (D = setTimeout(K, q - m))
                : ((D = null), B || ((G = O.apply(re, Z)), (re = Z = null)));
            };
          return function () {
            (re = this), (Z = arguments), (M = e.now());
            var m = B && !D;
            return (
              D || (D = setTimeout(K, q)),
              m && ((G = O.apply(re, Z)), (re = Z = null)),
              G
            );
          };
        }),
        (e.defaults = function (O) {
          if (!e.isObject(O)) return O;
          for (var q = 1, B = arguments.length; q < B; q++) {
            var D = arguments[q];
            for (var Z in D) O[Z] === void 0 && (O[Z] = D[Z]);
          }
          return O;
        }),
        (e.keys = function (O) {
          if (!e.isObject(O)) return [];
          if (N) return N(O);
          var q = [];
          for (var B in O) e.has(O, B) && q.push(B);
          return q;
        }),
        (e.has = function (O, q) {
          return l.call(O, q);
        }),
        (e.isObject = function (O) {
          return O === Object(O);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        j = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        ie = function (O) {
          return "\\" + j[O];
        },
        F = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (O, q, B) {
          !q && B && (q = B), (q = e.defaults({}, q, e.templateSettings));
          var D = RegExp(
              [
                (q.escape || X).source,
                (q.interpolate || X).source,
                (q.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            Z = 0,
            re = "__p+='";
          O.replace(D, function (m, I, U, ee, ne) {
            return (
              (re += O.slice(Z, ne).replace(Q, ie)),
              (Z = ne + m.length),
              I
                ? (re +=
                    `'+
    ((__t=(` +
                    I +
                    `))==null?'':_.escape(__t))+
    '`)
                : U
                ? (re +=
                    `'+
    ((__t=(` +
                    U +
                    `))==null?'':__t)+
    '`)
                : ee &&
                  (re +=
                    `';
    ` +
                    ee +
                    `
    __p+='`),
              m
            );
          }),
            (re += `';
    `);
          var M = q.variable;
          if (M) {
            if (!F.test(M))
              throw new Error("variable is not a bare identifier: " + M);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (M = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var G;
          try {
            G = new Function(q.variable || "obj", "_", re);
          } catch (m) {
            throw ((m.source = re), m);
          }
          var K = function (m) {
            return G.call(this, m, e);
          };
          return (
            (K.source =
              "function(" +
              M +
              `){
    ` +
              re +
              "}"),
            K
          );
        }),
        e
      );
    })();
  });
  var Ve = c((AB, tu) => {
    "use strict";
    var pe = {},
      Ut = {},
      kt = [],
      Ui = window.Webflow || [],
      Et = window.jQuery,
      Ye = Et(window),
      x_ = Et(document),
      it = Et.isFunction,
      Ke = (pe._ = zs()),
      Ys = (pe.tram = Gi() && Et.tram),
      pn = !1,
      ki = !1;
    Ys.config.hideBackface = !1;
    Ys.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Ut[e] && Qs(Ut[e]);
      var n = (Ut[e] = t(Et, Ke, r) || {});
      return $s(n), n;
    };
    pe.require = function (e) {
      return Ut[e];
    };
    function $s(e) {
      pe.env() &&
        (it(e.design) && Ye.on("__wf_design", e.design),
        it(e.preview) && Ye.on("__wf_preview", e.preview)),
        it(e.destroy) && Ye.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && O_(e);
    }
    function O_(e) {
      if (pn) {
        e.ready();
        return;
      }
      Ke.contains(kt, e.ready) || kt.push(e.ready);
    }
    function Qs(e) {
      it(e.design) && Ye.off("__wf_design", e.design),
        it(e.preview) && Ye.off("__wf_preview", e.preview),
        it(e.destroy) && Ye.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && A_(e);
    }
    function A_(e) {
      kt = Ke.filter(kt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (pn) {
        it(e) && e();
        return;
      }
      Ui.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var dn = navigator.userAgent.toLowerCase(),
      Zs = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      S_ = (pe.env.chrome =
        /chrome/.test(dn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(dn.match(/chrome\/(\d+)\./)[1], 10)),
      C_ = (pe.env.ios = /(ipod|iphone|ipad)/.test(dn));
    pe.env.safari = /safari/.test(dn) && !S_ && !C_;
    var Vi;
    Zs &&
      x_.on("touchstart mousedown", function (e) {
        Vi = e.target;
      });
    pe.validClick = Zs
      ? function (e) {
          return e === Vi || Et.contains(e, Vi);
        }
      : function () {
          return !0;
        };
    var Js = "resize.webflow orientationchange.webflow load.webflow",
      R_ = "scroll.webflow " + Js;
    pe.resize = Bi(Ye, Js);
    pe.scroll = Bi(Ye, R_);
    pe.redraw = Bi();
    function Bi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ke.throttle(function (i) {
          Ke.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ke.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ke.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (pn = !0), ki ? L_() : Ke.each(kt, Ks), Ke.each(Ui, Ks), pe.resize.up();
    };
    function Ks(e) {
      it(e) && e();
    }
    function L_() {
      (ki = !1), Ke.each(Ut, $s);
    }
    var St;
    pe.load = function (e) {
      St.then(e);
    };
    function eu() {
      St && (St.reject(), Ye.off("load", St.resolve)),
        (St = new Et.Deferred()),
        Ye.on("load", St.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (ki = !0),
        Ye.triggerHandler("__wf_destroy"),
        e.domready != null && (pn = e.domready),
        Ke.each(Ut, Qs),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (kt = []),
        (Ui = []),
        St.state() === "pending" && eu();
    };
    Et(pe.ready);
    eu();
    tu.exports = window.Webflow = pe;
  });
  var Hi = c((SB, Er) => {
    function N_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Er.exports = N_),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var gn = c((CB, dt) => {
    function Wi(e) {
      return (
        (dt.exports = Wi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Wi(e)
      );
    }
    (dt.exports = Wi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var nu = c((RB, br) => {
    var ru = gn().default;
    function P_(e, t) {
      if (ru(e) != "object" || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ru(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    (br.exports = P_),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var iu = c((LB, _r) => {
    var q_ = gn().default,
      M_ = nu();
    function F_(e) {
      var t = M_(e, "string");
      return q_(t) == "symbol" ? t : t + "";
    }
    (_r.exports = F_),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var ou = c((NB, Ir) => {
    var D_ = iu();
    function G_(e, t, r) {
      return (
        (t = D_(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    (Ir.exports = G_),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var fu = c((we) => {
    "use strict";
    var V_ = Hi().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.setLoadHandler =
      we.ready =
      we.init =
      we.getInstance =
      we.destroyInstance =
      we.destroy =
      we.createInstance =
        void 0;
    var au = V_(ou()),
      Xi;
    async function U_() {
      let { Application: e } = await import(
        "https://unpkg.com/@splinetool/runtime/build/runtime.js"
      );
      Xi = e;
    }
    var wr = new Map(),
      Tr = new Map(),
      k_ = new Event("w-spline-load"),
      ji = class {
        constructor() {
          (0, au.default)(this, "spline", void 0),
            (0, au.default)(this, "container", void 0);
        }
        destroy() {
          var t, r;
          this.container &&
            (wr.delete(this.container), Tr.delete(this.container)),
            (t = this.spline) === null ||
              t === void 0 ||
              (r = t.dispose) === null ||
              r === void 0 ||
              r.call(t);
        }
        async load(t, r) {
          Xi || (await U_());
          let n = t.querySelector("canvas"),
            i = new Xi(n);
          await i.load(r),
            wr.set(t, this),
            (this.container = t),
            (this.spline = i),
            t.dispatchEvent(k_),
            Tr.has(t) && (Tr.get(t)(i), Tr.delete(t));
        }
      },
      su = () =>
        Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
      uu = async (e, t) => {
        let r = wr.get(e);
        return r == null && (r = new ji()), await r.load(e, t), r;
      };
    we.createInstance = uu;
    var cu = (e) => {
      let t = wr.get(e);
      t?.destroy();
    };
    we.destroyInstance = cu;
    var B_ = (e) => wr.get(e);
    we.getInstance = B_;
    var H_ = (e, t) => {
      Tr.set(e, t);
    };
    we.setLoadHandler = H_;
    var lu = () => {
      su().forEach((e) => {
        let t = e.getAttribute("data-spline-url");
        t && uu(e, t);
      });
    };
    we.init = lu;
    var W_ = () => {
      su().forEach(cu);
    };
    we.destroy = W_;
    var PB = (we.ready = lu);
  });
  var pu = c((MB, du) => {
    "use strict";
    var X_ = Ve(),
      Ct = fu();
    X_.define(
      "spline",
      (du.exports = function () {
        return {
          createInstance: Ct.createInstance,
          destroyInstance: Ct.destroyInstance,
          getInstance: Ct.getInstance,
          setLoadHandler: Ct.setLoadHandler,
          init: Ct.init,
          destroy: Ct.destroy,
          ready: Ct.ready,
        };
      })
    );
  });
  var vu = c((FB, hu) => {
    "use strict";
    var gu = Ve();
    gu.define(
      "brand",
      (hu.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var p = n.attr("data-wf-status"),
            h = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(h) && a.hostname !== h && (p = !0),
            p &&
              !s &&
              ((l = l || d()),
              g(),
              setTimeout(g, 500),
              e(r).off(u, v).on(u, v));
        };
        function v() {
          var p =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", p ? "display: none !important;" : "");
        }
        function d() {
          var p = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            h = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return p.append(h, b), p[0];
        }
        function g() {
          var p = i.children(o),
            h = p.length && p.get(0) === l,
            b = gu.env("editor");
          if (h) {
            b && p.remove();
            return;
          }
          p.length && p.remove(), b || i.append(l);
        }
        return t;
      })
    );
  });
  var yu = c((DB, mu) => {
    "use strict";
    var zi = Ve();
    zi.define(
      "edit",
      (mu.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (zi.env("test") || zi.env("frame")) && !r.fixture && !j_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          l = r.load || g,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(s, d).triggerHandler(s);
        function d() {
          u || (/\?edit/.test(a.hash) && l());
        }
        function g() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            R(function (N) {
              e.ajax({
                url: _("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: p(N),
              });
            });
        }
        function p(N) {
          return function (P) {
            if (!P) {
              console.error("Could not load editor data");
              return;
            }
            (P.thirdPartyCookiesSupported = N),
              h(T(P.scriptPath), function () {
                window.WebflowEditor(P);
              });
          };
        }
        function h(N, P) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            P,
            b
          );
        }
        function b(N, P, L) {
          throw (console.error("Could not load editor script: " + P), L);
        }
        function T(N) {
          return N.indexOf("//") >= 0
            ? N
            : _("https://editor-api.webflow.com" + N);
        }
        function _(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function R(N) {
          var P = window.document.createElement("iframe");
          (P.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (P.style.display = "none"),
            (P.sandbox = "allow-scripts allow-same-origin");
          var L = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (A(P, L), N(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (A(P, L), N(!0));
          };
          (P.onerror = function () {
            A(P, L), N(!1);
          }),
            window.addEventListener("message", L, !1),
            window.document.body.appendChild(P);
        }
        function A(N, P) {
          window.removeEventListener("message", P, !1), N.remove();
        }
        return n;
      })
    );
    function j_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var bu = c((GB, Eu) => {
    "use strict";
    var z_ = Ve();
    z_.define(
      "focus-visible",
      (Eu.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var N = A.type,
              P = A.tagName;
            return !!(
              (P === "INPUT" && a[N] && !A.readOnly) ||
              (P === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function l(A) {
            A.getAttribute("data-wf-focus-visible") ||
              A.setAttribute("data-wf-focus-visible", "true");
          }
          function v(A) {
            A.getAttribute("data-wf-focus-visible") &&
              A.removeAttribute("data-wf-focus-visible");
          }
          function d(A) {
            A.metaKey ||
              A.altKey ||
              A.ctrlKey ||
              (s(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function p(A) {
            s(A.target) && (n || u(A.target)) && l(A.target);
          }
          function h(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              v(A.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (n = !0), T());
          }
          function T() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function _() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), _());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", b, !0),
            T(),
            r.addEventListener("focus", p, !0),
            r.addEventListener("blur", h, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Tu = c((VB, Iu) => {
    "use strict";
    var _u = Ve();
    _u.define(
      "focus",
      (Iu.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            _u.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ou = c((UB, xu) => {
    "use strict";
    var Ki = window.jQuery,
      ot = {},
      hn = [],
      wu = ".w-ix",
      vn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ki(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ki(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + wu, OUTRO: "w-ix-outro" + wu };
    ot.init = function () {
      for (var e = hn.length, t = 0; t < e; t++) {
        var r = hn[t];
        r[0](0, r[1]);
      }
      (hn = []), Ki.extend(ot.triggers, vn);
    };
    ot.async = function () {
      for (var e in vn) {
        var t = vn[e];
        vn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            hn.push([t, n]);
          });
      }
    };
    ot.async();
    xu.exports = ot;
  });
  var $i = c((kB, Cu) => {
    "use strict";
    var Yi = Ou();
    function Au(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var K_ = window.jQuery,
      mn = {},
      Su = ".w-ix",
      Y_ = {
        reset: function (e, t) {
          Yi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Yi.triggers.intro(e, t), Au(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Yi.triggers.outro(e, t), Au(t, "COMPONENT_INACTIVE");
        },
      };
    mn.triggers = {};
    mn.types = { INTRO: "w-ix-intro" + Su, OUTRO: "w-ix-outro" + Su };
    K_.extend(mn.triggers, Y_);
    Cu.exports = mn;
  });
  var yn = c((BB, xr) => {
    var $_ = gn().default;
    function Ru(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ru = function (i) {
        return i ? r : t;
      })(e);
    }
    function Q_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || ($_(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = Ru(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (xr.exports = Q_),
      (xr.exports.__esModule = !0),
      (xr.exports.default = xr.exports);
  });
  var me = c((HB, Lu) => {
    var En = function (e) {
      return e && e.Math == Math && e;
    };
    Lu.exports =
      En(typeof globalThis == "object" && globalThis) ||
      En(typeof window == "object" && window) ||
      En(typeof self == "object" && self) ||
      En(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Bt = c((WB, Nu) => {
    Nu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = c((XB, Pu) => {
    var Z_ = Bt();
    Pu.exports = !Z_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var bn = c((jB, qu) => {
    var Or = Function.prototype.call;
    qu.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var Gu = c((Du) => {
    "use strict";
    var Mu = {}.propertyIsEnumerable,
      Fu = Object.getOwnPropertyDescriptor,
      J_ = Fu && !Mu.call({ 1: 2 }, 1);
    Du.f = J_
      ? function (t) {
          var r = Fu(this, t);
          return !!r && r.enumerable;
        }
      : Mu;
  });
  var Qi = c((KB, Vu) => {
    Vu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var $e = c((YB, ku) => {
    var Uu = Function.prototype,
      Zi = Uu.bind,
      Ji = Uu.call,
      eI = Zi && Zi.bind(Ji);
    ku.exports = Zi
      ? function (e) {
          return e && eI(Ji, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Ji.apply(e, arguments);
            }
          );
        };
  });
  var Wu = c(($B, Hu) => {
    var Bu = $e(),
      tI = Bu({}.toString),
      rI = Bu("".slice);
    Hu.exports = function (e) {
      return rI(tI(e), 8, -1);
    };
  });
  var ju = c((QB, Xu) => {
    var nI = me(),
      iI = $e(),
      oI = Bt(),
      aI = Wu(),
      eo = nI.Object,
      sI = iI("".split);
    Xu.exports = oI(function () {
      return !eo("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return aI(e) == "String" ? sI(e, "") : eo(e);
        }
      : eo;
  });
  var to = c((ZB, zu) => {
    var uI = me(),
      cI = uI.TypeError;
    zu.exports = function (e) {
      if (e == null) throw cI("Can't call method on " + e);
      return e;
    };
  });
  var Ar = c((JB, Ku) => {
    var lI = ju(),
      fI = to();
    Ku.exports = function (e) {
      return lI(fI(e));
    };
  });
  var at = c((eH, Yu) => {
    Yu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ht = c((tH, $u) => {
    var dI = at();
    $u.exports = function (e) {
      return typeof e == "object" ? e !== null : dI(e);
    };
  });
  var Sr = c((rH, Qu) => {
    var ro = me(),
      pI = at(),
      gI = function (e) {
        return pI(e) ? e : void 0;
      };
    Qu.exports = function (e, t) {
      return arguments.length < 2 ? gI(ro[e]) : ro[e] && ro[e][t];
    };
  });
  var Ju = c((nH, Zu) => {
    var hI = $e();
    Zu.exports = hI({}.isPrototypeOf);
  });
  var tc = c((iH, ec) => {
    var vI = Sr();
    ec.exports = vI("navigator", "userAgent") || "";
  });
  var uc = c((oH, sc) => {
    var ac = me(),
      no = tc(),
      rc = ac.process,
      nc = ac.Deno,
      ic = (rc && rc.versions) || (nc && nc.version),
      oc = ic && ic.v8,
      Qe,
      _n;
    oc &&
      ((Qe = oc.split(".")),
      (_n = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1])));
    !_n &&
      no &&
      ((Qe = no.match(/Edge\/(\d+)/)),
      (!Qe || Qe[1] >= 74) &&
        ((Qe = no.match(/Chrome\/(\d+)/)), Qe && (_n = +Qe[1])));
    sc.exports = _n;
  });
  var io = c((aH, lc) => {
    var cc = uc(),
      mI = Bt();
    lc.exports =
      !!Object.getOwnPropertySymbols &&
      !mI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && cc && cc < 41)
        );
      });
  });
  var oo = c((sH, fc) => {
    var yI = io();
    fc.exports = yI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ao = c((uH, dc) => {
    var EI = me(),
      bI = Sr(),
      _I = at(),
      II = Ju(),
      TI = oo(),
      wI = EI.Object;
    dc.exports = TI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = bI("Symbol");
          return _I(t) && II(t.prototype, wI(e));
        };
  });
  var gc = c((cH, pc) => {
    var xI = me(),
      OI = xI.String;
    pc.exports = function (e) {
      try {
        return OI(e);
      } catch {
        return "Object";
      }
    };
  });
  var vc = c((lH, hc) => {
    var AI = me(),
      SI = at(),
      CI = gc(),
      RI = AI.TypeError;
    hc.exports = function (e) {
      if (SI(e)) return e;
      throw RI(CI(e) + " is not a function");
    };
  });
  var yc = c((fH, mc) => {
    var LI = vc();
    mc.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : LI(r);
    };
  });
  var bc = c((dH, Ec) => {
    var NI = me(),
      so = bn(),
      uo = at(),
      co = Ht(),
      PI = NI.TypeError;
    Ec.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && uo((r = e.toString)) && !co((n = so(r, e)))) ||
        (uo((r = e.valueOf)) && !co((n = so(r, e)))) ||
        (t !== "string" && uo((r = e.toString)) && !co((n = so(r, e))))
      )
        return n;
      throw PI("Can't convert object to primitive value");
    };
  });
  var Ic = c((pH, _c) => {
    _c.exports = !1;
  });
  var In = c((gH, wc) => {
    var Tc = me(),
      qI = Object.defineProperty;
    wc.exports = function (e, t) {
      try {
        qI(Tc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Tc[e] = t;
      }
      return t;
    };
  });
  var Tn = c((hH, Oc) => {
    var MI = me(),
      FI = In(),
      xc = "__core-js_shared__",
      DI = MI[xc] || FI(xc, {});
    Oc.exports = DI;
  });
  var lo = c((vH, Sc) => {
    var GI = Ic(),
      Ac = Tn();
    (Sc.exports = function (e, t) {
      return Ac[e] || (Ac[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: GI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Rc = c((mH, Cc) => {
    var VI = me(),
      UI = to(),
      kI = VI.Object;
    Cc.exports = function (e) {
      return kI(UI(e));
    };
  });
  var bt = c((yH, Lc) => {
    var BI = $e(),
      HI = Rc(),
      WI = BI({}.hasOwnProperty);
    Lc.exports =
      Object.hasOwn ||
      function (t, r) {
        return WI(HI(t), r);
      };
  });
  var fo = c((EH, Nc) => {
    var XI = $e(),
      jI = 0,
      zI = Math.random(),
      KI = XI((1).toString);
    Nc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + KI(++jI + zI, 36);
    };
  });
  var po = c((bH, Dc) => {
    var YI = me(),
      $I = lo(),
      Pc = bt(),
      QI = fo(),
      qc = io(),
      Fc = oo(),
      Wt = $I("wks"),
      Lt = YI.Symbol,
      Mc = Lt && Lt.for,
      ZI = Fc ? Lt : (Lt && Lt.withoutSetter) || QI;
    Dc.exports = function (e) {
      if (!Pc(Wt, e) || !(qc || typeof Wt[e] == "string")) {
        var t = "Symbol." + e;
        qc && Pc(Lt, e)
          ? (Wt[e] = Lt[e])
          : Fc && Mc
          ? (Wt[e] = Mc(t))
          : (Wt[e] = ZI(t));
      }
      return Wt[e];
    };
  });
  var kc = c((_H, Uc) => {
    var JI = me(),
      eT = bn(),
      Gc = Ht(),
      Vc = ao(),
      tT = yc(),
      rT = bc(),
      nT = po(),
      iT = JI.TypeError,
      oT = nT("toPrimitive");
    Uc.exports = function (e, t) {
      if (!Gc(e) || Vc(e)) return e;
      var r = tT(e, oT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = eT(r, e, t)), !Gc(n) || Vc(n))
        )
          return n;
        throw iT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), rT(e, t);
    };
  });
  var go = c((IH, Bc) => {
    var aT = kc(),
      sT = ao();
    Bc.exports = function (e) {
      var t = aT(e, "string");
      return sT(t) ? t : t + "";
    };
  });
  var vo = c((TH, Wc) => {
    var uT = me(),
      Hc = Ht(),
      ho = uT.document,
      cT = Hc(ho) && Hc(ho.createElement);
    Wc.exports = function (e) {
      return cT ? ho.createElement(e) : {};
    };
  });
  var mo = c((wH, Xc) => {
    var lT = Rt(),
      fT = Bt(),
      dT = vo();
    Xc.exports =
      !lT &&
      !fT(function () {
        return (
          Object.defineProperty(dT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var yo = c((zc) => {
    var pT = Rt(),
      gT = bn(),
      hT = Gu(),
      vT = Qi(),
      mT = Ar(),
      yT = go(),
      ET = bt(),
      bT = mo(),
      jc = Object.getOwnPropertyDescriptor;
    zc.f = pT
      ? jc
      : function (t, r) {
          if (((t = mT(t)), (r = yT(r)), bT))
            try {
              return jc(t, r);
            } catch {}
          if (ET(t, r)) return vT(!gT(hT.f, t, r), t[r]);
        };
  });
  var Cr = c((OH, Yc) => {
    var Kc = me(),
      _T = Ht(),
      IT = Kc.String,
      TT = Kc.TypeError;
    Yc.exports = function (e) {
      if (_T(e)) return e;
      throw TT(IT(e) + " is not an object");
    };
  });
  var Rr = c((Zc) => {
    var wT = me(),
      xT = Rt(),
      OT = mo(),
      $c = Cr(),
      AT = go(),
      ST = wT.TypeError,
      Qc = Object.defineProperty;
    Zc.f = xT
      ? Qc
      : function (t, r, n) {
          if (($c(t), (r = AT(r)), $c(n), OT))
            try {
              return Qc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw ST("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var wn = c((SH, Jc) => {
    var CT = Rt(),
      RT = Rr(),
      LT = Qi();
    Jc.exports = CT
      ? function (e, t, r) {
          return RT.f(e, t, LT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var bo = c((CH, el) => {
    var NT = $e(),
      PT = at(),
      Eo = Tn(),
      qT = NT(Function.toString);
    PT(Eo.inspectSource) ||
      (Eo.inspectSource = function (e) {
        return qT(e);
      });
    el.exports = Eo.inspectSource;
  });
  var nl = c((RH, rl) => {
    var MT = me(),
      FT = at(),
      DT = bo(),
      tl = MT.WeakMap;
    rl.exports = FT(tl) && /native code/.test(DT(tl));
  });
  var _o = c((LH, ol) => {
    var GT = lo(),
      VT = fo(),
      il = GT("keys");
    ol.exports = function (e) {
      return il[e] || (il[e] = VT(e));
    };
  });
  var xn = c((NH, al) => {
    al.exports = {};
  });
  var dl = c((PH, fl) => {
    var UT = nl(),
      ll = me(),
      Io = $e(),
      kT = Ht(),
      BT = wn(),
      To = bt(),
      wo = Tn(),
      HT = _o(),
      WT = xn(),
      sl = "Object already initialized",
      Oo = ll.TypeError,
      XT = ll.WeakMap,
      On,
      Lr,
      An,
      jT = function (e) {
        return An(e) ? Lr(e) : On(e, {});
      },
      zT = function (e) {
        return function (t) {
          var r;
          if (!kT(t) || (r = Lr(t)).type !== e)
            throw Oo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    UT || wo.state
      ? ((_t = wo.state || (wo.state = new XT())),
        (ul = Io(_t.get)),
        (xo = Io(_t.has)),
        (cl = Io(_t.set)),
        (On = function (e, t) {
          if (xo(_t, e)) throw new Oo(sl);
          return (t.facade = e), cl(_t, e, t), t;
        }),
        (Lr = function (e) {
          return ul(_t, e) || {};
        }),
        (An = function (e) {
          return xo(_t, e);
        }))
      : ((Nt = HT("state")),
        (WT[Nt] = !0),
        (On = function (e, t) {
          if (To(e, Nt)) throw new Oo(sl);
          return (t.facade = e), BT(e, Nt, t), t;
        }),
        (Lr = function (e) {
          return To(e, Nt) ? e[Nt] : {};
        }),
        (An = function (e) {
          return To(e, Nt);
        }));
    var _t, ul, xo, cl, Nt;
    fl.exports = { set: On, get: Lr, has: An, enforce: jT, getterFor: zT };
  });
  var hl = c((qH, gl) => {
    var Ao = Rt(),
      KT = bt(),
      pl = Function.prototype,
      YT = Ao && Object.getOwnPropertyDescriptor,
      So = KT(pl, "name"),
      $T = So && function () {}.name === "something",
      QT = So && (!Ao || (Ao && YT(pl, "name").configurable));
    gl.exports = { EXISTS: So, PROPER: $T, CONFIGURABLE: QT };
  });
  var bl = c((MH, El) => {
    var ZT = me(),
      vl = at(),
      JT = bt(),
      ml = wn(),
      ew = In(),
      tw = bo(),
      yl = dl(),
      rw = hl().CONFIGURABLE,
      nw = yl.get,
      iw = yl.enforce,
      ow = String(String).split("String");
    (El.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (vl(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!JT(r, "name") || (rw && r.name !== s)) && ml(r, "name", s),
          (u = iw(r)),
          u.source || (u.source = ow.join(typeof s == "string" ? s : ""))),
        e === ZT)
      ) {
        o ? (e[t] = r) : ew(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : ml(e, t, r);
    })(Function.prototype, "toString", function () {
      return (vl(this) && nw(this).source) || tw(this);
    });
  });
  var Co = c((FH, _l) => {
    var aw = Math.ceil,
      sw = Math.floor;
    _l.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? sw : aw)(t);
    };
  });
  var Tl = c((DH, Il) => {
    var uw = Co(),
      cw = Math.max,
      lw = Math.min;
    Il.exports = function (e, t) {
      var r = uw(e);
      return r < 0 ? cw(r + t, 0) : lw(r, t);
    };
  });
  var xl = c((GH, wl) => {
    var fw = Co(),
      dw = Math.min;
    wl.exports = function (e) {
      return e > 0 ? dw(fw(e), 9007199254740991) : 0;
    };
  });
  var Al = c((VH, Ol) => {
    var pw = xl();
    Ol.exports = function (e) {
      return pw(e.length);
    };
  });
  var Ro = c((UH, Cl) => {
    var gw = Ar(),
      hw = Tl(),
      vw = Al(),
      Sl = function (e) {
        return function (t, r, n) {
          var i = gw(t),
            o = vw(i),
            a = hw(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Cl.exports = { includes: Sl(!0), indexOf: Sl(!1) };
  });
  var No = c((kH, Ll) => {
    var mw = $e(),
      Lo = bt(),
      yw = Ar(),
      Ew = Ro().indexOf,
      bw = xn(),
      Rl = mw([].push);
    Ll.exports = function (e, t) {
      var r = yw(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Lo(bw, o) && Lo(r, o) && Rl(i, o);
      for (; t.length > n; ) Lo(r, (o = t[n++])) && (~Ew(i, o) || Rl(i, o));
      return i;
    };
  });
  var Sn = c((BH, Nl) => {
    Nl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ql = c((Pl) => {
    var _w = No(),
      Iw = Sn(),
      Tw = Iw.concat("length", "prototype");
    Pl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return _w(t, Tw);
      };
  });
  var Fl = c((Ml) => {
    Ml.f = Object.getOwnPropertySymbols;
  });
  var Gl = c((XH, Dl) => {
    var ww = Sr(),
      xw = $e(),
      Ow = ql(),
      Aw = Fl(),
      Sw = Cr(),
      Cw = xw([].concat);
    Dl.exports =
      ww("Reflect", "ownKeys") ||
      function (t) {
        var r = Ow.f(Sw(t)),
          n = Aw.f;
        return n ? Cw(r, n(t)) : r;
      };
  });
  var Ul = c((jH, Vl) => {
    var Rw = bt(),
      Lw = Gl(),
      Nw = yo(),
      Pw = Rr();
    Vl.exports = function (e, t) {
      for (var r = Lw(t), n = Pw.f, i = Nw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        Rw(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var Bl = c((zH, kl) => {
    var qw = Bt(),
      Mw = at(),
      Fw = /#|\.prototype\./,
      Nr = function (e, t) {
        var r = Gw[Dw(e)];
        return r == Uw ? !0 : r == Vw ? !1 : Mw(t) ? qw(t) : !!t;
      },
      Dw = (Nr.normalize = function (e) {
        return String(e).replace(Fw, ".").toLowerCase();
      }),
      Gw = (Nr.data = {}),
      Vw = (Nr.NATIVE = "N"),
      Uw = (Nr.POLYFILL = "P");
    kl.exports = Nr;
  });
  var Wl = c((KH, Hl) => {
    var Po = me(),
      kw = yo().f,
      Bw = wn(),
      Hw = bl(),
      Ww = In(),
      Xw = Ul(),
      jw = Bl();
    Hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        l,
        v;
      if (
        (n
          ? (a = Po)
          : i
          ? (a = Po[r] || Ww(r, {}))
          : (a = (Po[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((l = t[s]),
            e.noTargetGet ? ((v = kw(a, s)), (u = v && v.value)) : (u = a[s]),
            (o = jw(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof l == typeof u) continue;
            Xw(l, u);
          }
          (e.sham || (u && u.sham)) && Bw(l, "sham", !0), Hw(a, s, l, e);
        }
    };
  });
  var jl = c((YH, Xl) => {
    var zw = No(),
      Kw = Sn();
    Xl.exports =
      Object.keys ||
      function (t) {
        return zw(t, Kw);
      };
  });
  var Kl = c(($H, zl) => {
    var Yw = Rt(),
      $w = Rr(),
      Qw = Cr(),
      Zw = Ar(),
      Jw = jl();
    zl.exports = Yw
      ? Object.defineProperties
      : function (t, r) {
          Qw(t);
          for (var n = Zw(r), i = Jw(r), o = i.length, a = 0, s; o > a; )
            $w.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var $l = c((QH, Yl) => {
    var e0 = Sr();
    Yl.exports = e0("document", "documentElement");
  });
  var of = c((ZH, nf) => {
    var t0 = Cr(),
      r0 = Kl(),
      Ql = Sn(),
      n0 = xn(),
      i0 = $l(),
      o0 = vo(),
      a0 = _o(),
      Zl = ">",
      Jl = "<",
      Mo = "prototype",
      Fo = "script",
      tf = a0("IE_PROTO"),
      qo = function () {},
      rf = function (e) {
        return Jl + Fo + Zl + e + Jl + "/" + Fo + Zl;
      },
      ef = function (e) {
        e.write(rf("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      s0 = function () {
        var e = o0("iframe"),
          t = "java" + Fo + ":",
          r;
        return (
          (e.style.display = "none"),
          i0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(rf("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Cn,
      Rn = function () {
        try {
          Cn = new ActiveXObject("htmlfile");
        } catch {}
        Rn =
          typeof document < "u"
            ? document.domain && Cn
              ? ef(Cn)
              : s0()
            : ef(Cn);
        for (var e = Ql.length; e--; ) delete Rn[Mo][Ql[e]];
        return Rn();
      };
    n0[tf] = !0;
    nf.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((qo[Mo] = t0(t)), (n = new qo()), (qo[Mo] = null), (n[tf] = t))
            : (n = Rn()),
          r === void 0 ? n : r0(n, r)
        );
      };
  });
  var sf = c((JH, af) => {
    var u0 = po(),
      c0 = of(),
      l0 = Rr(),
      Do = u0("unscopables"),
      Go = Array.prototype;
    Go[Do] == null && l0.f(Go, Do, { configurable: !0, value: c0(null) });
    af.exports = function (e) {
      Go[Do][e] = !0;
    };
  });
  var uf = c(() => {
    "use strict";
    var f0 = Wl(),
      d0 = Ro().includes,
      p0 = sf();
    f0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return d0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    p0("includes");
  });
  var lf = c((r5, cf) => {
    var g0 = me(),
      h0 = $e();
    cf.exports = function (e, t) {
      return h0(g0[e].prototype[t]);
    };
  });
  var df = c((n5, ff) => {
    uf();
    var v0 = lf();
    ff.exports = v0("Array", "includes");
  });
  var gf = c((i5, pf) => {
    var m0 = df();
    pf.exports = m0;
  });
  var vf = c((o5, hf) => {
    var y0 = gf();
    hf.exports = y0;
  });
  var Vo = c((a5, mf) => {
    var E0 =
      typeof global == "object" && global && global.Object === Object && global;
    mf.exports = E0;
  });
  var Ze = c((s5, yf) => {
    var b0 = Vo(),
      _0 = typeof self == "object" && self && self.Object === Object && self,
      I0 = b0 || _0 || Function("return this")();
    yf.exports = I0;
  });
  var Xt = c((u5, Ef) => {
    var T0 = Ze(),
      w0 = T0.Symbol;
    Ef.exports = w0;
  });
  var Tf = c((c5, If) => {
    var bf = Xt(),
      _f = Object.prototype,
      x0 = _f.hasOwnProperty,
      O0 = _f.toString,
      Pr = bf ? bf.toStringTag : void 0;
    function A0(e) {
      var t = x0.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch {}
      var i = O0.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    If.exports = A0;
  });
  var xf = c((l5, wf) => {
    var S0 = Object.prototype,
      C0 = S0.toString;
    function R0(e) {
      return C0.call(e);
    }
    wf.exports = R0;
  });
  var It = c((f5, Sf) => {
    var Of = Xt(),
      L0 = Tf(),
      N0 = xf(),
      P0 = "[object Null]",
      q0 = "[object Undefined]",
      Af = Of ? Of.toStringTag : void 0;
    function M0(e) {
      return e == null
        ? e === void 0
          ? q0
          : P0
        : Af && Af in Object(e)
        ? L0(e)
        : N0(e);
    }
    Sf.exports = M0;
  });
  var Uo = c((d5, Cf) => {
    function F0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Cf.exports = F0;
  });
  var ko = c((p5, Rf) => {
    var D0 = Uo(),
      G0 = D0(Object.getPrototypeOf, Object);
    Rf.exports = G0;
  });
  var pt = c((g5, Lf) => {
    function V0(e) {
      return e != null && typeof e == "object";
    }
    Lf.exports = V0;
  });
  var Bo = c((h5, Pf) => {
    var U0 = It(),
      k0 = ko(),
      B0 = pt(),
      H0 = "[object Object]",
      W0 = Function.prototype,
      X0 = Object.prototype,
      Nf = W0.toString,
      j0 = X0.hasOwnProperty,
      z0 = Nf.call(Object);
    function K0(e) {
      if (!B0(e) || U0(e) != H0) return !1;
      var t = k0(e);
      if (t === null) return !0;
      var r = j0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Nf.call(r) == z0;
    }
    Pf.exports = K0;
  });
  var qf = c((Ho) => {
    "use strict";
    Object.defineProperty(Ho, "__esModule", { value: !0 });
    Ho.default = Y0;
    function Y0(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Mf = c((Xo, Wo) => {
    "use strict";
    Object.defineProperty(Xo, "__esModule", { value: !0 });
    var $0 = qf(),
      Q0 = Z0($0);
    function Z0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jt;
    typeof self < "u"
      ? (jt = self)
      : typeof window < "u"
      ? (jt = window)
      : typeof global < "u"
      ? (jt = global)
      : typeof Wo < "u"
      ? (jt = Wo)
      : (jt = Function("return this")());
    var J0 = (0, Q0.default)(jt);
    Xo.default = J0;
  });
  var jo = c((qr) => {
    "use strict";
    qr.__esModule = !0;
    qr.ActionTypes = void 0;
    qr.default = Vf;
    var ex = Bo(),
      tx = Gf(ex),
      rx = Mf(),
      Ff = Gf(rx);
    function Gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Df = (qr.ActionTypes = { INIT: "@@redux/INIT" });
    function Vf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Vf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function v() {
        return o;
      }
      function d(b) {
        if (typeof b != "function")
          throw new Error("Expected listener to be a function.");
        var T = !0;
        return (
          l(),
          s.push(b),
          function () {
            if (T) {
              (T = !1), l();
              var R = s.indexOf(b);
              s.splice(R, 1);
            }
          }
        );
      }
      function g(b) {
        if (!(0, tx.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, b));
        } finally {
          u = !1;
        }
        for (var T = (a = s), _ = 0; _ < T.length; _++) T[_]();
        return b;
      }
      function p(b) {
        if (typeof b != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = b), g({ type: Df.INIT });
      }
      function h() {
        var b,
          T = d;
        return (
          (b = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function A() {
                R.next && R.next(v());
              }
              A();
              var N = T(A);
              return { unsubscribe: N };
            },
          }),
          (b[Ff.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        g({ type: Df.INIT }),
        (n = { dispatch: g, subscribe: d, getState: v, replaceReducer: p }),
        (n[Ff.default] = h),
        n
      );
    }
  });
  var Ko = c((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = nx;
    function nx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Bf = c((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = ux;
    var Uf = jo(),
      ix = Bo(),
      E5 = kf(ix),
      ox = Ko(),
      b5 = kf(ox);
    function kf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ax(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function sx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Uf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Uf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function ux(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        sx(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var g = !1, p = {}, h = 0; h < o.length; h++) {
          var b = o[h],
            T = r[b],
            _ = l[b],
            R = T(_, v);
          if (typeof R > "u") {
            var A = ax(b, v);
            throw new Error(A);
          }
          (p[b] = R), (g = g || R !== _);
        }
        return g ? p : l;
      };
    }
  });
  var Wf = c(($o) => {
    "use strict";
    $o.__esModule = !0;
    $o.default = cx;
    function Hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function cx(e, t) {
      if (typeof e == "function") return Hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Hf(a, t));
      }
      return n;
    }
  });
  var Zo = c((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    Qo.default = lx;
    function lx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Xf = c((Jo) => {
    "use strict";
    Jo.__esModule = !0;
    var fx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Jo.default = hx;
    var dx = Zo(),
      px = gx(dx);
    function gx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function hx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            l = [],
            v = {
              getState: s.getState,
              dispatch: function (g) {
                return u(g);
              },
            };
          return (
            (l = t.map(function (d) {
              return d(v);
            })),
            (u = px.default.apply(void 0, l)(s.dispatch)),
            fx({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var ea = c((We) => {
    "use strict";
    We.__esModule = !0;
    We.compose =
      We.applyMiddleware =
      We.bindActionCreators =
      We.combineReducers =
      We.createStore =
        void 0;
    var vx = jo(),
      mx = zt(vx),
      yx = Bf(),
      Ex = zt(yx),
      bx = Wf(),
      _x = zt(bx),
      Ix = Xf(),
      Tx = zt(Ix),
      wx = Zo(),
      xx = zt(wx),
      Ox = Ko(),
      x5 = zt(Ox);
    function zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    We.createStore = mx.default;
    We.combineReducers = Ex.default;
    We.bindActionCreators = _x.default;
    We.applyMiddleware = Tx.default;
    We.compose = xx.default;
  });
  var Je,
    ta,
    st,
    Ax,
    Sx,
    Ln,
    Cx,
    ra = ve(() => {
      "use strict";
      (Je = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (ta = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Ax = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Sx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Ln = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Cx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ue,
    Rx,
    Nn = ve(() => {
      "use strict";
      (Ue = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Rx = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Lx,
    jf = ve(() => {
      "use strict";
      Lx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Nx,
    Px,
    qx,
    Mx,
    Fx,
    Dx,
    Gx,
    na,
    zf = ve(() => {
      "use strict";
      Nn();
      ({
        TRANSFORM_MOVE: Nx,
        TRANSFORM_SCALE: Px,
        TRANSFORM_ROTATE: qx,
        TRANSFORM_SKEW: Mx,
        STYLE_SIZE: Fx,
        STYLE_FILTER: Dx,
        STYLE_FONT_VARIATION: Gx,
      } = Ue),
        (na = {
          [Nx]: !0,
          [Px]: !0,
          [qx]: !0,
          [Mx]: !0,
          [Fx]: !0,
          [Dx]: !0,
          [Gx]: !0,
        });
    });
  var Te = {};
  Ge(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => tO,
    IX2_ANIMATION_FRAME_CHANGED: () => Yx,
    IX2_CLEAR_REQUESTED: () => jx,
    IX2_ELEMENT_STATE_CHANGED: () => eO,
    IX2_EVENT_LISTENER_ADDED: () => zx,
    IX2_EVENT_STATE_CHANGED: () => Kx,
    IX2_INSTANCE_ADDED: () => Qx,
    IX2_INSTANCE_REMOVED: () => Jx,
    IX2_INSTANCE_STARTED: () => Zx,
    IX2_MEDIA_QUERIES_DEFINED: () => nO,
    IX2_PARAMETER_CHANGED: () => $x,
    IX2_PLAYBACK_REQUESTED: () => Wx,
    IX2_PREVIEW_REQUESTED: () => Hx,
    IX2_RAW_DATA_IMPORTED: () => Vx,
    IX2_SESSION_INITIALIZED: () => Ux,
    IX2_SESSION_STARTED: () => kx,
    IX2_SESSION_STOPPED: () => Bx,
    IX2_STOP_REQUESTED: () => Xx,
    IX2_TEST_FRAME_RENDERED: () => iO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => rO,
  });
  var Vx,
    Ux,
    kx,
    Bx,
    Hx,
    Wx,
    Xx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eO,
    tO,
    rO,
    nO,
    iO,
    Kf = ve(() => {
      "use strict";
      (Vx = "IX2_RAW_DATA_IMPORTED"),
        (Ux = "IX2_SESSION_INITIALIZED"),
        (kx = "IX2_SESSION_STARTED"),
        (Bx = "IX2_SESSION_STOPPED"),
        (Hx = "IX2_PREVIEW_REQUESTED"),
        (Wx = "IX2_PLAYBACK_REQUESTED"),
        (Xx = "IX2_STOP_REQUESTED"),
        (jx = "IX2_CLEAR_REQUESTED"),
        (zx = "IX2_EVENT_LISTENER_ADDED"),
        (Kx = "IX2_EVENT_STATE_CHANGED"),
        (Yx = "IX2_ANIMATION_FRAME_CHANGED"),
        ($x = "IX2_PARAMETER_CHANGED"),
        (Qx = "IX2_INSTANCE_ADDED"),
        (Zx = "IX2_INSTANCE_STARTED"),
        (Jx = "IX2_INSTANCE_REMOVED"),
        (eO = "IX2_ELEMENT_STATE_CHANGED"),
        (tO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (rO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (nO = "IX2_MEDIA_QUERIES_DEFINED"),
        (iO = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  Ge(Re, {
    ABSTRACT_NODE: () => rA,
    AUTO: () => XO,
    BACKGROUND: () => VO,
    BACKGROUND_COLOR: () => GO,
    BAR_DELIMITER: () => KO,
    BORDER_COLOR: () => UO,
    BOUNDARY_SELECTOR: () => cO,
    CHILDREN: () => YO,
    COLON_DELIMITER: () => zO,
    COLOR: () => kO,
    COMMA_DELIMITER: () => jO,
    CONFIG_UNIT: () => mO,
    CONFIG_VALUE: () => pO,
    CONFIG_X_UNIT: () => gO,
    CONFIG_X_VALUE: () => lO,
    CONFIG_Y_UNIT: () => hO,
    CONFIG_Y_VALUE: () => fO,
    CONFIG_Z_UNIT: () => vO,
    CONFIG_Z_VALUE: () => dO,
    DISPLAY: () => BO,
    FILTER: () => qO,
    FLEX: () => HO,
    FONT_VARIATION_SETTINGS: () => MO,
    HEIGHT: () => DO,
    HTML_ELEMENT: () => eA,
    IMMEDIATE_CHILDREN: () => $O,
    IX2_ID_DELIMITER: () => oO,
    OPACITY: () => PO,
    PARENT: () => ZO,
    PLAIN_OBJECT: () => tA,
    PRESERVE_3D: () => JO,
    RENDER_GENERAL: () => iA,
    RENDER_PLUGIN: () => aA,
    RENDER_STYLE: () => oA,
    RENDER_TRANSFORM: () => nA,
    ROTATE_X: () => AO,
    ROTATE_Y: () => SO,
    ROTATE_Z: () => CO,
    SCALE_3D: () => OO,
    SCALE_X: () => TO,
    SCALE_Y: () => wO,
    SCALE_Z: () => xO,
    SIBLINGS: () => QO,
    SKEW: () => RO,
    SKEW_X: () => LO,
    SKEW_Y: () => NO,
    TRANSFORM: () => yO,
    TRANSLATE_3D: () => IO,
    TRANSLATE_X: () => EO,
    TRANSLATE_Y: () => bO,
    TRANSLATE_Z: () => _O,
    WF_PAGE: () => aO,
    WIDTH: () => FO,
    WILL_CHANGE: () => WO,
    W_MOD_IX: () => uO,
    W_MOD_JS: () => sO,
  });
  var oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    gO,
    hO,
    vO,
    mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    TO,
    wO,
    xO,
    OO,
    AO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    GO,
    VO,
    UO,
    kO,
    BO,
    HO,
    WO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    Yf = ve(() => {
      "use strict";
      (oO = "|"),
        (aO = "data-wf-page"),
        (sO = "w-mod-js"),
        (uO = "w-mod-ix"),
        (cO = ".w-dyn-item"),
        (lO = "xValue"),
        (fO = "yValue"),
        (dO = "zValue"),
        (pO = "value"),
        (gO = "xUnit"),
        (hO = "yUnit"),
        (vO = "zUnit"),
        (mO = "unit"),
        (yO = "transform"),
        (EO = "translateX"),
        (bO = "translateY"),
        (_O = "translateZ"),
        (IO = "translate3d"),
        (TO = "scaleX"),
        (wO = "scaleY"),
        (xO = "scaleZ"),
        (OO = "scale3d"),
        (AO = "rotateX"),
        (SO = "rotateY"),
        (CO = "rotateZ"),
        (RO = "skew"),
        (LO = "skewX"),
        (NO = "skewY"),
        (PO = "opacity"),
        (qO = "filter"),
        (MO = "font-variation-settings"),
        (FO = "width"),
        (DO = "height"),
        (GO = "backgroundColor"),
        (VO = "background"),
        (UO = "borderColor"),
        (kO = "color"),
        (BO = "display"),
        (HO = "flex"),
        (WO = "willChange"),
        (XO = "AUTO"),
        (jO = ","),
        (zO = ":"),
        (KO = "|"),
        (YO = "CHILDREN"),
        ($O = "IMMEDIATE_CHILDREN"),
        (QO = "SIBLINGS"),
        (ZO = "PARENT"),
        (JO = "preserve-3d"),
        (eA = "HTML_ELEMENT"),
        (tA = "PLAIN_OBJECT"),
        (rA = "ABSTRACT_NODE"),
        (nA = "RENDER_TRANSFORM"),
        (iA = "RENDER_GENERAL"),
        (oA = "RENDER_STYLE"),
        (aA = "RENDER_PLUGIN");
    });
  var $f = {};
  Ge($f, {
    ActionAppliesTo: () => Rx,
    ActionTypeConsts: () => Ue,
    EventAppliesTo: () => ta,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Ax,
    EventLimitAffectedElements: () => Sx,
    EventTypeConsts: () => Je,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => Lx,
    QuickEffectDirectionConsts: () => Cx,
    QuickEffectIds: () => Ln,
    ReducedMotionTypes: () => na,
  });
  var ke = ve(() => {
    "use strict";
    ra();
    Nn();
    jf();
    zf();
    Kf();
    Yf();
    Nn();
    ra();
  });
  var sA,
    Qf,
    Zf = ve(() => {
      "use strict";
      ke();
      ({ IX2_RAW_DATA_IMPORTED: sA } = Te),
        (Qf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case sA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Kt = c((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    var uA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Ee.clone = qn;
    Ee.addLast = td;
    Ee.addFirst = rd;
    Ee.removeLast = nd;
    Ee.removeFirst = id;
    Ee.insert = od;
    Ee.removeAt = ad;
    Ee.replaceAt = sd;
    Ee.getIn = Mn;
    Ee.set = Fn;
    Ee.setIn = Dn;
    Ee.update = cd;
    Ee.updateIn = ld;
    Ee.merge = fd;
    Ee.mergeDeep = dd;
    Ee.mergeIn = pd;
    Ee.omit = gd;
    Ee.addDefaults = hd;
    var Jf = "INVALID_ARGS";
    function ed(e) {
      throw new Error(e);
    }
    function ia(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var cA = {}.hasOwnProperty;
    function qn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ia(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Be(e, t, r) {
      var n = r;
      n == null && ed(Jf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var v = ia(l);
          if (v.length)
            for (var d = 0; d <= v.length; d++) {
              var g = v[d];
              if (!(e && n[g] !== void 0)) {
                var p = l[g];
                t && Pn(n[g]) && Pn(p) && (p = Be(e, t, n[g], p)),
                  !(p === void 0 || p === n[g]) &&
                    (i || ((i = !0), (n = qn(n))), (n[g] = p));
              }
            }
        }
      }
      return n;
    }
    function Pn(e) {
      var t = typeof e > "u" ? "undefined" : uA(e);
      return e != null && (t === "object" || t === "function");
    }
    function td(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function rd(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function nd(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function id(e) {
      return e.length ? e.slice(1) : e;
    }
    function od(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function ad(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function sd(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Mn(e, t) {
      if ((!Array.isArray(t) && ed(Jf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Fn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = qn(i);
      return (o[t] = r), o;
    }
    function ud(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Pn(e) && Pn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = ud(a, t, r, n + 1);
      }
      return Fn(e, o, i);
    }
    function Dn(e, t, r) {
      return t.length ? ud(e, t, r, 0) : r;
    }
    function cd(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Fn(e, t, i);
    }
    function ld(e, t, r) {
      var n = Mn(e, t),
        i = r(n);
      return Dn(e, t, i);
    }
    function fd(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Be(!1, !1, e, t, r, n, i, o);
    }
    function dd(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Be(!1, !0, e, t, r, n, i, o);
    }
    function pd(e, t, r, n, i, o, a) {
      var s = Mn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          v = Array(l > 7 ? l - 7 : 0),
          d = 7;
        d < l;
        d++
      )
        v[d - 7] = arguments[d];
      return (
        v.length
          ? (u = Be.call.apply(Be, [null, !1, !1, s, r, n, i, o, a].concat(v)))
          : (u = Be(!1, !1, s, r, n, i, o, a)),
        Dn(e, t, u)
      );
    }
    function gd(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (cA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = ia(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function hd(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Be(!0, !1, e, t, r, n, i, o);
    }
    var lA = {
      clone: qn,
      addLast: td,
      addFirst: rd,
      removeLast: nd,
      removeFirst: id,
      insert: od,
      removeAt: ad,
      replaceAt: sd,
      getIn: Mn,
      set: Fn,
      setIn: Dn,
      update: cd,
      updateIn: ld,
      merge: fd,
      mergeDeep: dd,
      mergeIn: pd,
      omit: gd,
      addDefaults: hd,
    };
    Ee.default = lA;
  });
  var md,
    fA,
    dA,
    pA,
    gA,
    hA,
    vd,
    yd,
    Ed = ve(() => {
      "use strict";
      ke();
      (md = le(Kt())),
        ({
          IX2_PREVIEW_REQUESTED: fA,
          IX2_PLAYBACK_REQUESTED: dA,
          IX2_STOP_REQUESTED: pA,
          IX2_CLEAR_REQUESTED: gA,
        } = Te),
        (hA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (vd = Object.create(null, {
          [fA]: { value: "preview" },
          [dA]: { value: "playback" },
          [pA]: { value: "stop" },
          [gA]: { value: "clear" },
        })),
        (yd = (e = hA, t) => {
          if (t.type in vd) {
            let r = [vd[t.type]];
            return (0, md.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    vA,
    mA,
    yA,
    EA,
    bA,
    _A,
    IA,
    TA,
    wA,
    xA,
    bd,
    OA,
    _d,
    Id = ve(() => {
      "use strict";
      ke();
      (Pe = le(Kt())),
        ({
          IX2_SESSION_INITIALIZED: vA,
          IX2_SESSION_STARTED: mA,
          IX2_TEST_FRAME_RENDERED: yA,
          IX2_SESSION_STOPPED: EA,
          IX2_EVENT_LISTENER_ADDED: bA,
          IX2_EVENT_STATE_CHANGED: _A,
          IX2_ANIMATION_FRAME_CHANGED: IA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: TA,
          IX2_VIEWPORT_WIDTH_CHANGED: wA,
          IX2_MEDIA_QUERIES_DEFINED: xA,
        } = Te),
        (bd = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (OA = 20),
        (_d = (e = bd, t) => {
          switch (t.type) {
            case vA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case mA:
              return (0, Pe.set)(e, "active", !0);
            case yA: {
              let {
                payload: { step: r = OA },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case EA:
              return bd;
            case IA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case bA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case _A: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case TA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case wA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = n[a];
                if (r >= u && r <= l) {
                  o = s;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case xA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var wd = c((X5, Td) => {
    function AA() {
      (this.__data__ = []), (this.size = 0);
    }
    Td.exports = AA;
  });
  var Gn = c((j5, xd) => {
    function SA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    xd.exports = SA;
  });
  var Mr = c((z5, Od) => {
    var CA = Gn();
    function RA(e, t) {
      for (var r = e.length; r--; ) if (CA(e[r][0], t)) return r;
      return -1;
    }
    Od.exports = RA;
  });
  var Sd = c((K5, Ad) => {
    var LA = Mr(),
      NA = Array.prototype,
      PA = NA.splice;
    function qA(e) {
      var t = this.__data__,
        r = LA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : PA.call(t, r, 1), --this.size, !0;
    }
    Ad.exports = qA;
  });
  var Rd = c((Y5, Cd) => {
    var MA = Mr();
    function FA(e) {
      var t = this.__data__,
        r = MA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Cd.exports = FA;
  });
  var Nd = c(($5, Ld) => {
    var DA = Mr();
    function GA(e) {
      return DA(this.__data__, e) > -1;
    }
    Ld.exports = GA;
  });
  var qd = c((Q5, Pd) => {
    var VA = Mr();
    function UA(e, t) {
      var r = this.__data__,
        n = VA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Pd.exports = UA;
  });
  var Fr = c((Z5, Md) => {
    var kA = wd(),
      BA = Sd(),
      HA = Rd(),
      WA = Nd(),
      XA = qd();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = kA;
    Yt.prototype.delete = BA;
    Yt.prototype.get = HA;
    Yt.prototype.has = WA;
    Yt.prototype.set = XA;
    Md.exports = Yt;
  });
  var Dd = c((J5, Fd) => {
    var jA = Fr();
    function zA() {
      (this.__data__ = new jA()), (this.size = 0);
    }
    Fd.exports = zA;
  });
  var Vd = c((eW, Gd) => {
    function KA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Gd.exports = KA;
  });
  var kd = c((tW, Ud) => {
    function YA(e) {
      return this.__data__.get(e);
    }
    Ud.exports = YA;
  });
  var Hd = c((rW, Bd) => {
    function $A(e) {
      return this.__data__.has(e);
    }
    Bd.exports = $A;
  });
  var ut = c((nW, Wd) => {
    function QA(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Wd.exports = QA;
  });
  var oa = c((iW, Xd) => {
    var ZA = It(),
      JA = ut(),
      eS = "[object AsyncFunction]",
      tS = "[object Function]",
      rS = "[object GeneratorFunction]",
      nS = "[object Proxy]";
    function iS(e) {
      if (!JA(e)) return !1;
      var t = ZA(e);
      return t == tS || t == rS || t == eS || t == nS;
    }
    Xd.exports = iS;
  });
  var zd = c((oW, jd) => {
    var oS = Ze(),
      aS = oS["__core-js_shared__"];
    jd.exports = aS;
  });
  var $d = c((aW, Yd) => {
    var aa = zd(),
      Kd = (function () {
        var e = /[^.]+$/.exec((aa && aa.keys && aa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function sS(e) {
      return !!Kd && Kd in e;
    }
    Yd.exports = sS;
  });
  var sa = c((sW, Qd) => {
    var uS = Function.prototype,
      cS = uS.toString;
    function lS(e) {
      if (e != null) {
        try {
          return cS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Qd.exports = lS;
  });
  var Jd = c((uW, Zd) => {
    var fS = oa(),
      dS = $d(),
      pS = ut(),
      gS = sa(),
      hS = /[\\^$.*+?()[\]{}|]/g,
      vS = /^\[object .+?Constructor\]$/,
      mS = Function.prototype,
      yS = Object.prototype,
      ES = mS.toString,
      bS = yS.hasOwnProperty,
      _S = RegExp(
        "^" +
          ES.call(bS)
            .replace(hS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function IS(e) {
      if (!pS(e) || dS(e)) return !1;
      var t = fS(e) ? _S : vS;
      return t.test(gS(e));
    }
    Zd.exports = IS;
  });
  var tp = c((cW, ep) => {
    function TS(e, t) {
      return e?.[t];
    }
    ep.exports = TS;
  });
  var Tt = c((lW, rp) => {
    var wS = Jd(),
      xS = tp();
    function OS(e, t) {
      var r = xS(e, t);
      return wS(r) ? r : void 0;
    }
    rp.exports = OS;
  });
  var Vn = c((fW, np) => {
    var AS = Tt(),
      SS = Ze(),
      CS = AS(SS, "Map");
    np.exports = CS;
  });
  var Dr = c((dW, ip) => {
    var RS = Tt(),
      LS = RS(Object, "create");
    ip.exports = LS;
  });
  var sp = c((pW, ap) => {
    var op = Dr();
    function NS() {
      (this.__data__ = op ? op(null) : {}), (this.size = 0);
    }
    ap.exports = NS;
  });
  var cp = c((gW, up) => {
    function PS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    up.exports = PS;
  });
  var fp = c((hW, lp) => {
    var qS = Dr(),
      MS = "__lodash_hash_undefined__",
      FS = Object.prototype,
      DS = FS.hasOwnProperty;
    function GS(e) {
      var t = this.__data__;
      if (qS) {
        var r = t[e];
        return r === MS ? void 0 : r;
      }
      return DS.call(t, e) ? t[e] : void 0;
    }
    lp.exports = GS;
  });
  var pp = c((vW, dp) => {
    var VS = Dr(),
      US = Object.prototype,
      kS = US.hasOwnProperty;
    function BS(e) {
      var t = this.__data__;
      return VS ? t[e] !== void 0 : kS.call(t, e);
    }
    dp.exports = BS;
  });
  var hp = c((mW, gp) => {
    var HS = Dr(),
      WS = "__lodash_hash_undefined__";
    function XS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = HS && t === void 0 ? WS : t),
        this
      );
    }
    gp.exports = XS;
  });
  var mp = c((yW, vp) => {
    var jS = sp(),
      zS = cp(),
      KS = fp(),
      YS = pp(),
      $S = hp();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = jS;
    $t.prototype.delete = zS;
    $t.prototype.get = KS;
    $t.prototype.has = YS;
    $t.prototype.set = $S;
    vp.exports = $t;
  });
  var bp = c((EW, Ep) => {
    var yp = mp(),
      QS = Fr(),
      ZS = Vn();
    function JS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new yp(),
          map: new (ZS || QS)(),
          string: new yp(),
        });
    }
    Ep.exports = JS;
  });
  var Ip = c((bW, _p) => {
    function eC(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    _p.exports = eC;
  });
  var Gr = c((_W, Tp) => {
    var tC = Ip();
    function rC(e, t) {
      var r = e.__data__;
      return tC(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Tp.exports = rC;
  });
  var xp = c((IW, wp) => {
    var nC = Gr();
    function iC(e) {
      var t = nC(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    wp.exports = iC;
  });
  var Ap = c((TW, Op) => {
    var oC = Gr();
    function aC(e) {
      return oC(this, e).get(e);
    }
    Op.exports = aC;
  });
  var Cp = c((wW, Sp) => {
    var sC = Gr();
    function uC(e) {
      return sC(this, e).has(e);
    }
    Sp.exports = uC;
  });
  var Lp = c((xW, Rp) => {
    var cC = Gr();
    function lC(e, t) {
      var r = cC(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Rp.exports = lC;
  });
  var Un = c((OW, Np) => {
    var fC = bp(),
      dC = xp(),
      pC = Ap(),
      gC = Cp(),
      hC = Lp();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = fC;
    Qt.prototype.delete = dC;
    Qt.prototype.get = pC;
    Qt.prototype.has = gC;
    Qt.prototype.set = hC;
    Np.exports = Qt;
  });
  var qp = c((AW, Pp) => {
    var vC = Fr(),
      mC = Vn(),
      yC = Un(),
      EC = 200;
    function bC(e, t) {
      var r = this.__data__;
      if (r instanceof vC) {
        var n = r.__data__;
        if (!mC || n.length < EC - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new yC(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Pp.exports = bC;
  });
  var ua = c((SW, Mp) => {
    var _C = Fr(),
      IC = Dd(),
      TC = Vd(),
      wC = kd(),
      xC = Hd(),
      OC = qp();
    function Zt(e) {
      var t = (this.__data__ = new _C(e));
      this.size = t.size;
    }
    Zt.prototype.clear = IC;
    Zt.prototype.delete = TC;
    Zt.prototype.get = wC;
    Zt.prototype.has = xC;
    Zt.prototype.set = OC;
    Mp.exports = Zt;
  });
  var Dp = c((CW, Fp) => {
    var AC = "__lodash_hash_undefined__";
    function SC(e) {
      return this.__data__.set(e, AC), this;
    }
    Fp.exports = SC;
  });
  var Vp = c((RW, Gp) => {
    function CC(e) {
      return this.__data__.has(e);
    }
    Gp.exports = CC;
  });
  var kp = c((LW, Up) => {
    var RC = Un(),
      LC = Dp(),
      NC = Vp();
    function kn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new RC(); ++t < r; ) this.add(e[t]);
    }
    kn.prototype.add = kn.prototype.push = LC;
    kn.prototype.has = NC;
    Up.exports = kn;
  });
  var Hp = c((NW, Bp) => {
    function PC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Bp.exports = PC;
  });
  var Xp = c((PW, Wp) => {
    function qC(e, t) {
      return e.has(t);
    }
    Wp.exports = qC;
  });
  var ca = c((qW, jp) => {
    var MC = kp(),
      FC = Hp(),
      DC = Xp(),
      GC = 1,
      VC = 2;
    function UC(e, t, r, n, i, o) {
      var a = r & GC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        v = o.get(t);
      if (l && v) return l == t && v == e;
      var d = -1,
        g = !0,
        p = r & VC ? new MC() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var h = e[d],
          b = t[d];
        if (n) var T = a ? n(b, h, d, t, e, o) : n(h, b, d, e, t, o);
        if (T !== void 0) {
          if (T) continue;
          g = !1;
          break;
        }
        if (p) {
          if (
            !FC(t, function (_, R) {
              if (!DC(p, R) && (h === _ || i(h, _, r, n, o))) return p.push(R);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(h === b || i(h, b, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    jp.exports = UC;
  });
  var Kp = c((MW, zp) => {
    var kC = Ze(),
      BC = kC.Uint8Array;
    zp.exports = BC;
  });
  var $p = c((FW, Yp) => {
    function HC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Yp.exports = HC;
  });
  var Zp = c((DW, Qp) => {
    function WC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Qp.exports = WC;
  });
  var ng = c((GW, rg) => {
    var Jp = Xt(),
      eg = Kp(),
      XC = Gn(),
      jC = ca(),
      zC = $p(),
      KC = Zp(),
      YC = 1,
      $C = 2,
      QC = "[object Boolean]",
      ZC = "[object Date]",
      JC = "[object Error]",
      eR = "[object Map]",
      tR = "[object Number]",
      rR = "[object RegExp]",
      nR = "[object Set]",
      iR = "[object String]",
      oR = "[object Symbol]",
      aR = "[object ArrayBuffer]",
      sR = "[object DataView]",
      tg = Jp ? Jp.prototype : void 0,
      la = tg ? tg.valueOf : void 0;
    function uR(e, t, r, n, i, o, a) {
      switch (r) {
        case sR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case aR:
          return !(e.byteLength != t.byteLength || !o(new eg(e), new eg(t)));
        case QC:
        case ZC:
        case tR:
          return XC(+e, +t);
        case JC:
          return e.name == t.name && e.message == t.message;
        case rR:
        case iR:
          return e == t + "";
        case eR:
          var s = zC;
        case nR:
          var u = n & YC;
          if ((s || (s = KC), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= $C), a.set(e, t);
          var v = jC(s(e), s(t), n, i, o, a);
          return a.delete(e), v;
        case oR:
          if (la) return la.call(e) == la.call(t);
      }
      return !1;
    }
    rg.exports = uR;
  });
  var Bn = c((VW, ig) => {
    function cR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    ig.exports = cR;
  });
  var xe = c((UW, og) => {
    var lR = Array.isArray;
    og.exports = lR;
  });
  var fa = c((kW, ag) => {
    var fR = Bn(),
      dR = xe();
    function pR(e, t, r) {
      var n = t(e);
      return dR(e) ? n : fR(n, r(e));
    }
    ag.exports = pR;
  });
  var ug = c((BW, sg) => {
    function gR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    sg.exports = gR;
  });
  var da = c((HW, cg) => {
    function hR() {
      return [];
    }
    cg.exports = hR;
  });
  var pa = c((WW, fg) => {
    var vR = ug(),
      mR = da(),
      yR = Object.prototype,
      ER = yR.propertyIsEnumerable,
      lg = Object.getOwnPropertySymbols,
      bR = lg
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                vR(lg(e), function (t) {
                  return ER.call(e, t);
                }));
          }
        : mR;
    fg.exports = bR;
  });
  var pg = c((XW, dg) => {
    function _R(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    dg.exports = _R;
  });
  var hg = c((jW, gg) => {
    var IR = It(),
      TR = pt(),
      wR = "[object Arguments]";
    function xR(e) {
      return TR(e) && IR(e) == wR;
    }
    gg.exports = xR;
  });
  var Vr = c((zW, yg) => {
    var vg = hg(),
      OR = pt(),
      mg = Object.prototype,
      AR = mg.hasOwnProperty,
      SR = mg.propertyIsEnumerable,
      CR = vg(
        (function () {
          return arguments;
        })()
      )
        ? vg
        : function (e) {
            return OR(e) && AR.call(e, "callee") && !SR.call(e, "callee");
          };
    yg.exports = CR;
  });
  var bg = c((KW, Eg) => {
    function RR() {
      return !1;
    }
    Eg.exports = RR;
  });
  var Hn = c((Ur, Jt) => {
    var LR = Ze(),
      NR = bg(),
      Tg = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      _g = Tg && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      PR = _g && _g.exports === Tg,
      Ig = PR ? LR.Buffer : void 0,
      qR = Ig ? Ig.isBuffer : void 0,
      MR = qR || NR;
    Jt.exports = MR;
  });
  var Wn = c((YW, wg) => {
    var FR = 9007199254740991,
      DR = /^(?:0|[1-9]\d*)$/;
    function GR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? FR),
        !!t &&
          (r == "number" || (r != "symbol" && DR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    wg.exports = GR;
  });
  var Xn = c(($W, xg) => {
    var VR = 9007199254740991;
    function UR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VR;
    }
    xg.exports = UR;
  });
  var Ag = c((QW, Og) => {
    var kR = It(),
      BR = Xn(),
      HR = pt(),
      WR = "[object Arguments]",
      XR = "[object Array]",
      jR = "[object Boolean]",
      zR = "[object Date]",
      KR = "[object Error]",
      YR = "[object Function]",
      $R = "[object Map]",
      QR = "[object Number]",
      ZR = "[object Object]",
      JR = "[object RegExp]",
      eL = "[object Set]",
      tL = "[object String]",
      rL = "[object WeakMap]",
      nL = "[object ArrayBuffer]",
      iL = "[object DataView]",
      oL = "[object Float32Array]",
      aL = "[object Float64Array]",
      sL = "[object Int8Array]",
      uL = "[object Int16Array]",
      cL = "[object Int32Array]",
      lL = "[object Uint8Array]",
      fL = "[object Uint8ClampedArray]",
      dL = "[object Uint16Array]",
      pL = "[object Uint32Array]",
      he = {};
    he[oL] =
      he[aL] =
      he[sL] =
      he[uL] =
      he[cL] =
      he[lL] =
      he[fL] =
      he[dL] =
      he[pL] =
        !0;
    he[WR] =
      he[XR] =
      he[nL] =
      he[jR] =
      he[iL] =
      he[zR] =
      he[KR] =
      he[YR] =
      he[$R] =
      he[QR] =
      he[ZR] =
      he[JR] =
      he[eL] =
      he[tL] =
      he[rL] =
        !1;
    function gL(e) {
      return HR(e) && BR(e.length) && !!he[kR(e)];
    }
    Og.exports = gL;
  });
  var Cg = c((ZW, Sg) => {
    function hL(e) {
      return function (t) {
        return e(t);
      };
    }
    Sg.exports = hL;
  });
  var Lg = c((kr, er) => {
    var vL = Vo(),
      Rg = typeof kr == "object" && kr && !kr.nodeType && kr,
      Br = Rg && typeof er == "object" && er && !er.nodeType && er,
      mL = Br && Br.exports === Rg,
      ga = mL && vL.process,
      yL = (function () {
        try {
          var e = Br && Br.require && Br.require("util").types;
          return e || (ga && ga.binding && ga.binding("util"));
        } catch {}
      })();
    er.exports = yL;
  });
  var jn = c((JW, qg) => {
    var EL = Ag(),
      bL = Cg(),
      Ng = Lg(),
      Pg = Ng && Ng.isTypedArray,
      _L = Pg ? bL(Pg) : EL;
    qg.exports = _L;
  });
  var ha = c((eX, Mg) => {
    var IL = pg(),
      TL = Vr(),
      wL = xe(),
      xL = Hn(),
      OL = Wn(),
      AL = jn(),
      SL = Object.prototype,
      CL = SL.hasOwnProperty;
    function RL(e, t) {
      var r = wL(e),
        n = !r && TL(e),
        i = !r && !n && xL(e),
        o = !r && !n && !i && AL(e),
        a = r || n || i || o,
        s = a ? IL(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || CL.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              OL(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Mg.exports = RL;
  });
  var zn = c((tX, Fg) => {
    var LL = Object.prototype;
    function NL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || LL;
      return e === r;
    }
    Fg.exports = NL;
  });
  var Gg = c((rX, Dg) => {
    var PL = Uo(),
      qL = PL(Object.keys, Object);
    Dg.exports = qL;
  });
  var Kn = c((nX, Vg) => {
    var ML = zn(),
      FL = Gg(),
      DL = Object.prototype,
      GL = DL.hasOwnProperty;
    function VL(e) {
      if (!ML(e)) return FL(e);
      var t = [];
      for (var r in Object(e)) GL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Vg.exports = VL;
  });
  var Pt = c((iX, Ug) => {
    var UL = oa(),
      kL = Xn();
    function BL(e) {
      return e != null && kL(e.length) && !UL(e);
    }
    Ug.exports = BL;
  });
  var Hr = c((oX, kg) => {
    var HL = ha(),
      WL = Kn(),
      XL = Pt();
    function jL(e) {
      return XL(e) ? HL(e) : WL(e);
    }
    kg.exports = jL;
  });
  var Hg = c((aX, Bg) => {
    var zL = fa(),
      KL = pa(),
      YL = Hr();
    function $L(e) {
      return zL(e, YL, KL);
    }
    Bg.exports = $L;
  });
  var jg = c((sX, Xg) => {
    var Wg = Hg(),
      QL = 1,
      ZL = Object.prototype,
      JL = ZL.hasOwnProperty;
    function eN(e, t, r, n, i, o) {
      var a = r & QL,
        s = Wg(e),
        u = s.length,
        l = Wg(t),
        v = l.length;
      if (u != v && !a) return !1;
      for (var d = u; d--; ) {
        var g = s[d];
        if (!(a ? g in t : JL.call(t, g))) return !1;
      }
      var p = o.get(e),
        h = o.get(t);
      if (p && h) return p == t && h == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var T = a; ++d < u; ) {
        g = s[d];
        var _ = e[g],
          R = t[g];
        if (n) var A = a ? n(R, _, g, t, e, o) : n(_, R, g, e, t, o);
        if (!(A === void 0 ? _ === R || i(_, R, r, n, o) : A)) {
          b = !1;
          break;
        }
        T || (T = g == "constructor");
      }
      if (b && !T) {
        var N = e.constructor,
          P = t.constructor;
        N != P &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof P == "function" &&
            P instanceof P
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    Xg.exports = eN;
  });
  var Kg = c((uX, zg) => {
    var tN = Tt(),
      rN = Ze(),
      nN = tN(rN, "DataView");
    zg.exports = nN;
  });
  var $g = c((cX, Yg) => {
    var iN = Tt(),
      oN = Ze(),
      aN = iN(oN, "Promise");
    Yg.exports = aN;
  });
  var Zg = c((lX, Qg) => {
    var sN = Tt(),
      uN = Ze(),
      cN = sN(uN, "Set");
    Qg.exports = cN;
  });
  var va = c((fX, Jg) => {
    var lN = Tt(),
      fN = Ze(),
      dN = lN(fN, "WeakMap");
    Jg.exports = dN;
  });
  var Yn = c((dX, ah) => {
    var ma = Kg(),
      ya = Vn(),
      Ea = $g(),
      ba = Zg(),
      _a = va(),
      oh = It(),
      tr = sa(),
      eh = "[object Map]",
      pN = "[object Object]",
      th = "[object Promise]",
      rh = "[object Set]",
      nh = "[object WeakMap]",
      ih = "[object DataView]",
      gN = tr(ma),
      hN = tr(ya),
      vN = tr(Ea),
      mN = tr(ba),
      yN = tr(_a),
      qt = oh;
    ((ma && qt(new ma(new ArrayBuffer(1))) != ih) ||
      (ya && qt(new ya()) != eh) ||
      (Ea && qt(Ea.resolve()) != th) ||
      (ba && qt(new ba()) != rh) ||
      (_a && qt(new _a()) != nh)) &&
      (qt = function (e) {
        var t = oh(e),
          r = t == pN ? e.constructor : void 0,
          n = r ? tr(r) : "";
        if (n)
          switch (n) {
            case gN:
              return ih;
            case hN:
              return eh;
            case vN:
              return th;
            case mN:
              return rh;
            case yN:
              return nh;
          }
        return t;
      });
    ah.exports = qt;
  });
  var gh = c((pX, ph) => {
    var Ia = ua(),
      EN = ca(),
      bN = ng(),
      _N = jg(),
      sh = Yn(),
      uh = xe(),
      ch = Hn(),
      IN = jn(),
      TN = 1,
      lh = "[object Arguments]",
      fh = "[object Array]",
      $n = "[object Object]",
      wN = Object.prototype,
      dh = wN.hasOwnProperty;
    function xN(e, t, r, n, i, o) {
      var a = uh(e),
        s = uh(t),
        u = a ? fh : sh(e),
        l = s ? fh : sh(t);
      (u = u == lh ? $n : u), (l = l == lh ? $n : l);
      var v = u == $n,
        d = l == $n,
        g = u == l;
      if (g && ch(e)) {
        if (!ch(t)) return !1;
        (a = !0), (v = !1);
      }
      if (g && !v)
        return (
          o || (o = new Ia()),
          a || IN(e) ? EN(e, t, r, n, i, o) : bN(e, t, u, r, n, i, o)
        );
      if (!(r & TN)) {
        var p = v && dh.call(e, "__wrapped__"),
          h = d && dh.call(t, "__wrapped__");
        if (p || h) {
          var b = p ? e.value() : e,
            T = h ? t.value() : t;
          return o || (o = new Ia()), i(b, T, r, n, o);
        }
      }
      return g ? (o || (o = new Ia()), _N(e, t, r, n, i, o)) : !1;
    }
    ph.exports = xN;
  });
  var Ta = c((gX, mh) => {
    var ON = gh(),
      hh = pt();
    function vh(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!hh(e) && !hh(t))
        ? e !== e && t !== t
        : ON(e, t, r, n, vh, i);
    }
    mh.exports = vh;
  });
  var Eh = c((hX, yh) => {
    var AN = ua(),
      SN = Ta(),
      CN = 1,
      RN = 2;
    function LN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          l = e[u],
          v = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var d = new AN();
          if (n) var g = n(l, v, u, e, t, d);
          if (!(g === void 0 ? SN(v, l, CN | RN, n, d) : g)) return !1;
        }
      }
      return !0;
    }
    yh.exports = LN;
  });
  var wa = c((vX, bh) => {
    var NN = ut();
    function PN(e) {
      return e === e && !NN(e);
    }
    bh.exports = PN;
  });
  var Ih = c((mX, _h) => {
    var qN = wa(),
      MN = Hr();
    function FN(e) {
      for (var t = MN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, qN(i)];
      }
      return t;
    }
    _h.exports = FN;
  });
  var xa = c((yX, Th) => {
    function DN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Th.exports = DN;
  });
  var xh = c((EX, wh) => {
    var GN = Eh(),
      VN = Ih(),
      UN = xa();
    function kN(e) {
      var t = VN(e);
      return t.length == 1 && t[0][2]
        ? UN(t[0][0], t[0][1])
        : function (r) {
            return r === e || GN(r, e, t);
          };
    }
    wh.exports = kN;
  });
  var Wr = c((bX, Oh) => {
    var BN = It(),
      HN = pt(),
      WN = "[object Symbol]";
    function XN(e) {
      return typeof e == "symbol" || (HN(e) && BN(e) == WN);
    }
    Oh.exports = XN;
  });
  var Qn = c((_X, Ah) => {
    var jN = xe(),
      zN = Wr(),
      KN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      YN = /^\w*$/;
    function $N(e, t) {
      if (jN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        zN(e)
        ? !0
        : YN.test(e) || !KN.test(e) || (t != null && e in Object(t));
    }
    Ah.exports = $N;
  });
  var Rh = c((IX, Ch) => {
    var Sh = Un(),
      QN = "Expected a function";
    function Oa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(QN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Oa.Cache || Sh)()), r;
    }
    Oa.Cache = Sh;
    Ch.exports = Oa;
  });
  var Nh = c((TX, Lh) => {
    var ZN = Rh(),
      JN = 500;
    function eP(e) {
      var t = ZN(e, function (n) {
          return r.size === JN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Lh.exports = eP;
  });
  var qh = c((wX, Ph) => {
    var tP = Nh(),
      rP =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      nP = /\\(\\)?/g,
      iP = tP(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(rP, function (r, n, i, o) {
            t.push(i ? o.replace(nP, "$1") : n || r);
          }),
          t
        );
      });
    Ph.exports = iP;
  });
  var Aa = c((xX, Mh) => {
    function oP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Mh.exports = oP;
  });
  var kh = c((OX, Uh) => {
    var Fh = Xt(),
      aP = Aa(),
      sP = xe(),
      uP = Wr(),
      cP = 1 / 0,
      Dh = Fh ? Fh.prototype : void 0,
      Gh = Dh ? Dh.toString : void 0;
    function Vh(e) {
      if (typeof e == "string") return e;
      if (sP(e)) return aP(e, Vh) + "";
      if (uP(e)) return Gh ? Gh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -cP ? "-0" : t;
    }
    Uh.exports = Vh;
  });
  var Hh = c((AX, Bh) => {
    var lP = kh();
    function fP(e) {
      return e == null ? "" : lP(e);
    }
    Bh.exports = fP;
  });
  var Xr = c((SX, Wh) => {
    var dP = xe(),
      pP = Qn(),
      gP = qh(),
      hP = Hh();
    function vP(e, t) {
      return dP(e) ? e : pP(e, t) ? [e] : gP(hP(e));
    }
    Wh.exports = vP;
  });
  var rr = c((CX, Xh) => {
    var mP = Wr(),
      yP = 1 / 0;
    function EP(e) {
      if (typeof e == "string" || mP(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -yP ? "-0" : t;
    }
    Xh.exports = EP;
  });
  var Zn = c((RX, jh) => {
    var bP = Xr(),
      _P = rr();
    function IP(e, t) {
      t = bP(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[_P(t[r++])];
      return r && r == n ? e : void 0;
    }
    jh.exports = IP;
  });
  var Jn = c((LX, zh) => {
    var TP = Zn();
    function wP(e, t, r) {
      var n = e == null ? void 0 : TP(e, t);
      return n === void 0 ? r : n;
    }
    zh.exports = wP;
  });
  var Yh = c((NX, Kh) => {
    function xP(e, t) {
      return e != null && t in Object(e);
    }
    Kh.exports = xP;
  });
  var Qh = c((PX, $h) => {
    var OP = Xr(),
      AP = Vr(),
      SP = xe(),
      CP = Wn(),
      RP = Xn(),
      LP = rr();
    function NP(e, t, r) {
      t = OP(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = LP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && RP(i) && CP(a, i) && (SP(e) || AP(e)));
    }
    $h.exports = NP;
  });
  var Jh = c((qX, Zh) => {
    var PP = Yh(),
      qP = Qh();
    function MP(e, t) {
      return e != null && qP(e, t, PP);
    }
    Zh.exports = MP;
  });
  var tv = c((MX, ev) => {
    var FP = Ta(),
      DP = Jn(),
      GP = Jh(),
      VP = Qn(),
      UP = wa(),
      kP = xa(),
      BP = rr(),
      HP = 1,
      WP = 2;
    function XP(e, t) {
      return VP(e) && UP(t)
        ? kP(BP(e), t)
        : function (r) {
            var n = DP(r, e);
            return n === void 0 && n === t ? GP(r, e) : FP(t, n, HP | WP);
          };
    }
    ev.exports = XP;
  });
  var ei = c((FX, rv) => {
    function jP(e) {
      return e;
    }
    rv.exports = jP;
  });
  var Sa = c((DX, nv) => {
    function zP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    nv.exports = zP;
  });
  var ov = c((GX, iv) => {
    var KP = Zn();
    function YP(e) {
      return function (t) {
        return KP(t, e);
      };
    }
    iv.exports = YP;
  });
  var sv = c((VX, av) => {
    var $P = Sa(),
      QP = ov(),
      ZP = Qn(),
      JP = rr();
    function eq(e) {
      return ZP(e) ? $P(JP(e)) : QP(e);
    }
    av.exports = eq;
  });
  var wt = c((UX, uv) => {
    var tq = xh(),
      rq = tv(),
      nq = ei(),
      iq = xe(),
      oq = sv();
    function aq(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? nq
        : typeof e == "object"
        ? iq(e)
          ? rq(e[0], e[1])
          : tq(e)
        : oq(e);
    }
    uv.exports = aq;
  });
  var Ca = c((kX, cv) => {
    var sq = wt(),
      uq = Pt(),
      cq = Hr();
    function lq(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!uq(t)) {
          var o = sq(r, 3);
          (t = cq(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    cv.exports = lq;
  });
  var Ra = c((BX, lv) => {
    function fq(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    lv.exports = fq;
  });
  var dv = c((HX, fv) => {
    var dq = /\s/;
    function pq(e) {
      for (var t = e.length; t-- && dq.test(e.charAt(t)); );
      return t;
    }
    fv.exports = pq;
  });
  var gv = c((WX, pv) => {
    var gq = dv(),
      hq = /^\s+/;
    function vq(e) {
      return e && e.slice(0, gq(e) + 1).replace(hq, "");
    }
    pv.exports = vq;
  });
  var ti = c((XX, mv) => {
    var mq = gv(),
      hv = ut(),
      yq = Wr(),
      vv = 0 / 0,
      Eq = /^[-+]0x[0-9a-f]+$/i,
      bq = /^0b[01]+$/i,
      _q = /^0o[0-7]+$/i,
      Iq = parseInt;
    function Tq(e) {
      if (typeof e == "number") return e;
      if (yq(e)) return vv;
      if (hv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = hv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = mq(e);
      var r = bq.test(e);
      return r || _q.test(e) ? Iq(e.slice(2), r ? 2 : 8) : Eq.test(e) ? vv : +e;
    }
    mv.exports = Tq;
  });
  var bv = c((jX, Ev) => {
    var wq = ti(),
      yv = 1 / 0,
      xq = 17976931348623157e292;
    function Oq(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = wq(e)), e === yv || e === -yv)) {
        var t = e < 0 ? -1 : 1;
        return t * xq;
      }
      return e === e ? e : 0;
    }
    Ev.exports = Oq;
  });
  var La = c((zX, _v) => {
    var Aq = bv();
    function Sq(e) {
      var t = Aq(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    _v.exports = Sq;
  });
  var Tv = c((KX, Iv) => {
    var Cq = Ra(),
      Rq = wt(),
      Lq = La(),
      Nq = Math.max;
    function Pq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : Lq(r);
      return i < 0 && (i = Nq(n + i, 0)), Cq(e, Rq(t, 3), i);
    }
    Iv.exports = Pq;
  });
  var Na = c((YX, wv) => {
    var qq = Ca(),
      Mq = Tv(),
      Fq = qq(Mq);
    wv.exports = Fq;
  });
  var Av = {};
  Ge(Av, {
    ELEMENT_MATCHES: () => Dq,
    FLEX_PREFIXED: () => Pa,
    IS_BROWSER_ENV: () => et,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => ni,
    withBrowser: () => ri,
  });
  var Ov,
    et,
    ri,
    Dq,
    Pa,
    xt,
    xv,
    ni,
    ii = ve(() => {
      "use strict";
      (Ov = le(Na())),
        (et = typeof window < "u"),
        (ri = (e, t) => (et ? e() : t)),
        (Dq = ri(() =>
          (0, Ov.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Pa = ri(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (xt = ri(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (xv = xt.split("transform")[0]),
        (ni = xv ? xv + "TransformStyle" : "transformStyle");
    });
  var qa = c(($X, Nv) => {
    var Gq = 4,
      Vq = 0.001,
      Uq = 1e-7,
      kq = 10,
      jr = 11,
      oi = 1 / (jr - 1),
      Bq = typeof Float32Array == "function";
    function Sv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Cv(e, t) {
      return 3 * t - 6 * e;
    }
    function Rv(e) {
      return 3 * e;
    }
    function ai(e, t, r) {
      return ((Sv(t, r) * e + Cv(t, r)) * e + Rv(t)) * e;
    }
    function Lv(e, t, r) {
      return 3 * Sv(t, r) * e * e + 2 * Cv(t, r) * e + Rv(t);
    }
    function Hq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ai(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > Uq && ++s < kq);
      return a;
    }
    function Wq(e, t, r, n) {
      for (var i = 0; i < Gq; ++i) {
        var o = Lv(t, r, n);
        if (o === 0) return t;
        var a = ai(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Nv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Bq ? new Float32Array(jr) : new Array(jr);
      if (t !== r || n !== i)
        for (var a = 0; a < jr; ++a) o[a] = ai(a * oi, t, n);
      function s(u) {
        for (var l = 0, v = 1, d = jr - 1; v !== d && o[v] <= u; ++v) l += oi;
        --v;
        var g = (u - o[v]) / (o[v + 1] - o[v]),
          p = l + g * oi,
          h = Lv(p, t, n);
        return h >= Vq ? Wq(u, p, t, n) : h === 0 ? p : Hq(u, l, l + oi, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : ai(s(l), r, i);
      };
    };
  });
  var Kr = {};
  Ge(Kr, {
    bounce: () => OM,
    bouncePast: () => AM,
    ease: () => Xq,
    easeIn: () => jq,
    easeInOut: () => Kq,
    easeOut: () => zq,
    inBack: () => mM,
    inCirc: () => pM,
    inCubic: () => Zq,
    inElastic: () => bM,
    inExpo: () => lM,
    inOutBack: () => EM,
    inOutCirc: () => hM,
    inOutCubic: () => eM,
    inOutElastic: () => IM,
    inOutExpo: () => dM,
    inOutQuad: () => Qq,
    inOutQuart: () => nM,
    inOutQuint: () => aM,
    inOutSine: () => cM,
    inQuad: () => Yq,
    inQuart: () => tM,
    inQuint: () => iM,
    inSine: () => sM,
    outBack: () => yM,
    outBounce: () => vM,
    outCirc: () => gM,
    outCubic: () => Jq,
    outElastic: () => _M,
    outExpo: () => fM,
    outQuad: () => $q,
    outQuart: () => rM,
    outQuint: () => oM,
    outSine: () => uM,
    swingFrom: () => wM,
    swingFromTo: () => TM,
    swingTo: () => xM,
  });
  function Yq(e) {
    return Math.pow(e, 2);
  }
  function $q(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Qq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Zq(e) {
    return Math.pow(e, 3);
  }
  function Jq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function eM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function tM(e) {
    return Math.pow(e, 4);
  }
  function rM(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function nM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function iM(e) {
    return Math.pow(e, 5);
  }
  function oM(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function aM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function sM(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function uM(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function cM(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function lM(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function fM(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function dM(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function pM(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function gM(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function hM(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function vM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function mM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function yM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function EM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function bM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function _M(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function IM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function TM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function wM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function xM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function OM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function AM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var zr,
    gt,
    Xq,
    jq,
    zq,
    Kq,
    Ma = ve(() => {
      "use strict";
      (zr = le(qa())),
        (gt = 1.70158),
        (Xq = (0, zr.default)(0.25, 0.1, 0.25, 1)),
        (jq = (0, zr.default)(0.42, 0, 1, 1)),
        (zq = (0, zr.default)(0, 0, 0.58, 1)),
        (Kq = (0, zr.default)(0.42, 0, 0.58, 1));
    });
  var qv = {};
  Ge(qv, {
    applyEasing: () => CM,
    createBezierEasing: () => SM,
    optimizeFloat: () => Yr,
  });
  function Yr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function SM(e) {
    return (0, Pv.default)(...e);
  }
  function CM(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Yr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Kr[e] ? Kr[e](t) : t);
  }
  var Pv,
    Fa = ve(() => {
      "use strict";
      Ma();
      Pv = le(qa());
    });
  var Dv = {};
  Ge(Dv, {
    createElementState: () => Fv,
    ixElements: () => HM,
    mergeActionState: () => Da,
  });
  function Fv(e, t, r, n, i) {
    let o =
      r === RM ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, nr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Da(e, t, r, n, i) {
    let o = XM(i);
    return (0, nr.mergeIn)(e, [t, BM, r], n, o);
  }
  function XM(e) {
    let { config: t } = e;
    return WM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var nr,
    ZX,
    RM,
    JX,
    LM,
    NM,
    PM,
    qM,
    MM,
    FM,
    DM,
    GM,
    VM,
    UM,
    kM,
    Mv,
    BM,
    HM,
    WM,
    Gv = ve(() => {
      "use strict";
      nr = le(Kt());
      ke();
      ({
        HTML_ELEMENT: ZX,
        PLAIN_OBJECT: RM,
        ABSTRACT_NODE: JX,
        CONFIG_X_VALUE: LM,
        CONFIG_Y_VALUE: NM,
        CONFIG_Z_VALUE: PM,
        CONFIG_VALUE: qM,
        CONFIG_X_UNIT: MM,
        CONFIG_Y_UNIT: FM,
        CONFIG_Z_UNIT: DM,
        CONFIG_UNIT: GM,
      } = Re),
        ({
          IX2_SESSION_STOPPED: VM,
          IX2_INSTANCE_ADDED: UM,
          IX2_ELEMENT_STATE_CHANGED: kM,
        } = Te),
        (Mv = {}),
        (BM = "refState"),
        (HM = (e = Mv, t = {}) => {
          switch (t.type) {
            case VM:
              return Mv;
            case UM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, nr.getIn)(u, [r, n]) !== n && (u = Fv(u, n, a, r, o)),
                Da(u, r, s, i, o)
              );
            }
            case kM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Da(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      WM = [
        [LM, MM],
        [NM, FM],
        [PM, DM],
        [qM, GM],
      ];
    });
  var Vv = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var jM = (e) => e.value;
    Oe.getPluginConfig = jM;
    var zM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = zM;
    var KM = (e) => e || { value: 0 };
    Oe.getPluginOrigin = KM;
    var YM = (e) => ({ value: e.value });
    Oe.getPluginDestination = YM;
    var $M = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = $M;
    var QM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = QM;
    var ZM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = ZM;
  });
  var kv = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var JM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      eF = () => window.Webflow.require("spline"),
      tF = (e, t) => e.filter((r) => !t.includes(r)),
      rF = (e, t) => e.value[t];
    Ae.getPluginConfig = rF;
    var nF = () => null;
    Ae.getPluginDuration = nF;
    var Uv = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      iF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = tF(n, o);
          return a.length ? a.reduce((u, l) => ((u[l] = Uv[l]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = Uv[a]), o), {});
      };
    Ae.getPluginOrigin = iF;
    var oF = (e) => e.value;
    Ae.getPluginDestination = oF;
    var aF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? JM(n) : null;
    };
    Ae.createPluginInstance = aF;
    var sF = (e, t, r) => {
      let n = eF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: l } = t;
          l.positionX != null && (u.position.x = l.positionX),
            l.positionY != null && (u.position.y = l.positionY),
            l.positionZ != null && (u.position.z = l.positionZ),
            l.rotationX != null && (u.rotation.x = l.rotationX),
            l.rotationY != null && (u.rotation.y = l.rotationY),
            l.rotationZ != null && (u.rotation.z = l.rotationZ),
            l.scaleX != null && (u.scale.x = l.scaleX),
            l.scaleY != null && (u.scale.y = l.scaleY),
            l.scaleZ != null && (u.scale.z = l.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = sF;
    var uF = () => null;
    Ae.clearPlugin = uF;
  });
  var Va = c((Ga) => {
    "use strict";
    Object.defineProperty(Ga, "__esModule", { value: !0 });
    Ga.normalizeColor = cF;
    var Bv = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function cF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Bv[o] == "string" ? Bv[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          d = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let g = (1 - Math.abs(2 * d - 1)) * v,
          p = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          h = d - g / 2,
          b,
          T,
          _;
        l >= 0 && l < 60
          ? ((b = g), (T = p), (_ = 0))
          : l >= 60 && l < 120
          ? ((b = p), (T = g), (_ = 0))
          : l >= 120 && l < 180
          ? ((b = 0), (T = g), (_ = p))
          : l >= 180 && l < 240
          ? ((b = 0), (T = p), (_ = g))
          : l >= 240 && l < 300
          ? ((b = p), (T = 0), (_ = g))
          : ((b = g), (T = 0), (_ = p)),
          (t = Math.round((b + h) * 255)),
          (r = Math.round((T + h) * 255)),
          (n = Math.round((_ + h) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          d = parseFloat(u[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * d - 1)) * v,
          p = g * (1 - Math.abs(((l / 60) % 2) - 1)),
          h = d - g / 2,
          b,
          T,
          _;
        l >= 0 && l < 60
          ? ((b = g), (T = p), (_ = 0))
          : l >= 60 && l < 120
          ? ((b = p), (T = g), (_ = 0))
          : l >= 120 && l < 180
          ? ((b = 0), (T = g), (_ = p))
          : l >= 180 && l < 240
          ? ((b = 0), (T = p), (_ = g))
          : l >= 240 && l < 300
          ? ((b = p), (T = 0), (_ = g))
          : ((b = g), (T = 0), (_ = p)),
          (t = Math.round((b + h) * 255)),
          (r = Math.round((T + h) * 255)),
          (n = Math.round((_ + h) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var Hv = c((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.renderPlugin =
      Se.getPluginOrigin =
      Se.getPluginDuration =
      Se.getPluginDestination =
      Se.getPluginConfig =
      Se.createPluginInstance =
      Se.clearPlugin =
        void 0;
    var lF = Va(),
      fF = (e, t) => e.value[t];
    Se.getPluginConfig = fF;
    var dF = () => null;
    Se.getPluginDuration = dF;
    var pF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, lF.normalizeColor)(i);
    };
    Se.getPluginOrigin = pF;
    var gF = (e) => e.value;
    Se.getPluginDestination = gF;
    var hF = () => null;
    Se.createPluginInstance = hF;
    var vF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: l, alpha: v } = o,
        d;
      a != null && (d = a + i),
        s != null &&
          l != null &&
          u != null &&
          v != null &&
          (d = `rgba(${s}, ${u}, ${l}, ${v})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    Se.renderPlugin = vF;
    var mF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Se.clearPlugin = mF;
  });
  var Wv = c((si) => {
    "use strict";
    var ka = yn().default;
    Object.defineProperty(si, "__esModule", { value: !0 });
    si.pluginMethodMap = void 0;
    var Ua = (ke(), nt($f)),
      yF = ka(Vv()),
      EF = ka(kv()),
      bF = ka(Hv()),
      ij = (si.pluginMethodMap = new Map([
        [Ua.ActionTypeConsts.PLUGIN_LOTTIE, { ...yF }],
        [Ua.ActionTypeConsts.PLUGIN_SPLINE, { ...EF }],
        [Ua.ActionTypeConsts.PLUGIN_VARIABLE, { ...bF }],
      ]));
  });
  var Xv = {};
  Ge(Xv, {
    clearPlugin: () => za,
    createPluginInstance: () => IF,
    getPluginConfig: () => Ha,
    getPluginDestination: () => Xa,
    getPluginDuration: () => _F,
    getPluginOrigin: () => Wa,
    isPluginType: () => Mt,
    renderPlugin: () => ja,
  });
  function Mt(e) {
    return Ba.pluginMethodMap.has(e);
  }
  var Ba,
    Ft,
    Ha,
    Wa,
    _F,
    Xa,
    IF,
    ja,
    za,
    Ka = ve(() => {
      "use strict";
      ii();
      Ba = le(Wv());
      (Ft = (e) => (t) => {
        if (!et) return () => null;
        let r = Ba.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ha = Ft("getPluginConfig")),
        (Wa = Ft("getPluginOrigin")),
        (_F = Ft("getPluginDuration")),
        (Xa = Ft("getPluginDestination")),
        (IF = Ft("createPluginInstance")),
        (ja = Ft("renderPlugin")),
        (za = Ft("clearPlugin"));
    });
  var zv = c((sj, jv) => {
    function TF(e, t) {
      return e == null || e !== e ? t : e;
    }
    jv.exports = TF;
  });
  var Yv = c((uj, Kv) => {
    function wF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Kv.exports = wF;
  });
  var Qv = c((cj, $v) => {
    function xF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    $v.exports = xF;
  });
  var Jv = c((lj, Zv) => {
    var OF = Qv(),
      AF = OF();
    Zv.exports = AF;
  });
  var Ya = c((fj, em) => {
    var SF = Jv(),
      CF = Hr();
    function RF(e, t) {
      return e && SF(e, t, CF);
    }
    em.exports = RF;
  });
  var rm = c((dj, tm) => {
    var LF = Pt();
    function NF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!LF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    tm.exports = NF;
  });
  var $a = c((pj, nm) => {
    var PF = Ya(),
      qF = rm(),
      MF = qF(PF);
    nm.exports = MF;
  });
  var om = c((gj, im) => {
    function FF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    im.exports = FF;
  });
  var sm = c((hj, am) => {
    var DF = Yv(),
      GF = $a(),
      VF = wt(),
      UF = om(),
      kF = xe();
    function BF(e, t, r) {
      var n = kF(e) ? DF : UF,
        i = arguments.length < 3;
      return n(e, VF(t, 4), r, i, GF);
    }
    am.exports = BF;
  });
  var cm = c((vj, um) => {
    var HF = Ra(),
      WF = wt(),
      XF = La(),
      jF = Math.max,
      zF = Math.min;
    function KF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = XF(r)), (i = r < 0 ? jF(n + i, 0) : zF(i, n - 1))),
        HF(e, WF(t, 3), i, !0)
      );
    }
    um.exports = KF;
  });
  var fm = c((mj, lm) => {
    var YF = Ca(),
      $F = cm(),
      QF = YF($F);
    lm.exports = QF;
  });
  function dm(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function ZF(e, t) {
    if (dm(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !dm(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Qa,
    pm = ve(() => {
      "use strict";
      Qa = ZF;
    });
  var Lm = {};
  Ge(Lm, {
    cleanupHTMLElement: () => YD,
    clearAllStyles: () => KD,
    clearObjectCache: () => hD,
    getActionListProgress: () => QD,
    getAffectedElements: () => rs,
    getComputedStyle: () => TD,
    getDestinationValues: () => RD,
    getElementId: () => ED,
    getInstanceId: () => mD,
    getInstanceOrigin: () => OD,
    getItemConfigByKey: () => CD,
    getMaxDurationItemIndex: () => Rm,
    getNamespacedParameterId: () => e1,
    getRenderType: () => Am,
    getStyleProp: () => LD,
    mediaQueriesEqual: () => r1,
    observeStore: () => ID,
    reduceListToGroup: () => ZD,
    reifyState: () => bD,
    renderHTMLElement: () => ND,
    shallowEqual: () => Qa,
    shouldAllowMediaQuery: () => t1,
    shouldNamespaceEventParameter: () => JD,
    stringifyTarget: () => n1,
  });
  function hD() {
    ui.clear();
  }
  function mD() {
    return "i" + vD++;
  }
  function ED(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + yD++;
  }
  function bD({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, di.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function ID({ store: e, select: t, onChange: r, comparator: n = _D }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, s) || ((s = l), r(s, e));
    }
    return a;
  }
  function vm(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function rs({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (F, O) =>
          F.concat(
            rs({
              config: { target: O },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: v,
        matchSelector: d,
        elementContains: g,
        isSiblingNode: p,
      } = i,
      { target: h } = e;
    if (!h) return [];
    let {
      id: b,
      objectId: T,
      selector: _,
      selectorGuids: R,
      appliesTo: A,
      useEventTarget: N,
    } = vm(h);
    if (T) return [ui.has(T) ? ui.get(T) : ui.set(T, {}).get(T)];
    if (A === ta.PAGE) {
      let F = a(b);
      return F ? [F] : [];
    }
    let L = (t?.action?.config?.affectedElements ?? {})[b || _] || {},
      W = !!(L.id || L.selector),
      X,
      j,
      Q,
      ie = t && s(vm(t.target));
    if (
      (W
        ? ((X = L.limitAffectedElements), (j = ie), (Q = s(L)))
        : (j = Q = s({ id: b, selector: _, selectorGuids: R })),
      t && N)
    ) {
      let F = r && (Q || N === !0) ? [r] : u(ie);
      if (Q) {
        if (N === dD) return u(Q).filter((O) => F.some((q) => g(O, q)));
        if (N === gm) return u(Q).filter((O) => F.some((q) => g(q, O)));
        if (N === hm) return u(Q).filter((O) => F.some((q) => p(q, O)));
      }
      return F;
    }
    return j == null || Q == null
      ? []
      : et && n
      ? u(Q).filter((F) => n.contains(F))
      : X === gm
      ? u(j, Q)
      : X === fD
      ? l(u(j)).filter(d(Q))
      : X === hm
      ? v(u(j)).filter(d(Q))
      : u(Q);
  }
  function TD({ element: e, actionItem: t }) {
    if (!et) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case ur:
      case cr:
      case lr:
      case fr:
      case gi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function OD(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return Wa(a)(t[a], n);
    switch (n.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Jr:
        return t[n.actionTypeId] || ns[n.actionTypeId];
      case en:
        return wD(t[n.actionTypeId], n.config.filters);
      case tn:
        return xD(t[n.actionTypeId], n.config.fontVariations);
      case wm:
        return { value: (0, ht.default)(parseFloat(o(e, li)), 1) };
      case ur: {
        let s = o(e, ct),
          u = o(e, lt),
          l,
          v;
        return (
          n.config.widthUnit === Ot
            ? (l = mm.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (l = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === Ot
            ? (v = mm.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (v = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: l, heightValue: v }
        );
      }
      case cr:
      case lr:
      case fr:
        return XD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case gi:
        return { value: (0, ht.default)(o(e, fi), r.display) };
      case gD:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function RD({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return Xa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Jr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case ur: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!et) return { widthValue: u, heightValue: l };
        if (a === Ot) {
          let v = n(e, ct);
          i(e, ct, ""), (u = o(e, "offsetWidth")), i(e, ct, v);
        }
        if (s === Ot) {
          let v = n(e, lt);
          i(e, lt, ""), (l = o(e, "offsetHeight")), i(e, lt, v);
        }
        return { widthValue: u, heightValue: l };
      }
      case cr:
      case lr:
      case fr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            l = u(e, s),
            v = (0, bm.normalizeColor)(l);
          return {
            rValue: v.red,
            gValue: v.green,
            bValue: v.blue,
            aValue: v.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case en:
        return t.config.filters.reduce(AD, {});
      case tn:
        return t.config.fontVariations.reduce(SD, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Am(e) {
    if (/^TRANSFORM_/.test(e)) return Im;
    if (/^STYLE_/.test(e)) return es;
    if (/^GENERAL_/.test(e)) return Ja;
    if (/^PLUGIN_/.test(e)) return Tm;
  }
  function LD(e, t) {
    return e === es ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function ND(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Im:
        return DD(e, t, r, i, a);
      case es:
        return jD(e, t, r, i, o, a);
      case Ja:
        return zD(e, i, a);
      case Tm: {
        let { actionTypeId: l } = i;
        if (Mt(l)) return ja(l)(u, t, i);
      }
    }
  }
  function DD(e, t, r, n, i) {
    let o = FD.map((s) => {
        let u = ns[s],
          {
            xValue: l = u.xValue,
            yValue: v = u.yValue,
            zValue: d = u.zValue,
            xUnit: g = "",
            yUnit: p = "",
            zUnit: h = "",
          } = t[s] || {};
        switch (s) {
          case or:
            return `${tD}(${l}${g}, ${v}${p}, ${d}${h})`;
          case ar:
            return `${rD}(${l}${g}, ${v}${p}, ${d}${h})`;
          case sr:
            return `${nD}(${l}${g}) ${iD}(${v}${p}) ${oD}(${d}${h})`;
          case Jr:
            return `${aD}(${l}${g}, ${v}${p})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Dt(e, xt, i), a(e, xt, o), UD(n, r) && a(e, ni, sD);
  }
  function GD(e, t, r, n) {
    let i = (0, di.default)(t, (a, s, u) => `${a} ${u}(${s}${MD(u, r)})`, ""),
      { setStyle: o } = n;
    Dt(e, $r, n), o(e, $r, i);
  }
  function VD(e, t, r, n) {
    let i = (0, di.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Dt(e, Qr, n), o(e, Qr, i);
  }
  function UD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === or && n !== void 0) ||
      (e === ar && n !== void 0) ||
      (e === sr && (t !== void 0 || r !== void 0))
    );
  }
  function WD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function XD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = ts[t],
      o = n(e, i),
      a = BD.test(o) ? o : r[i],
      s = WD(HD, a).split(Zr);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function jD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case ur: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: l, heightValue: v } = r;
        l !== void 0 && (s === Ot && (s = "px"), Dt(e, ct, o), a(e, ct, l + s)),
          v !== void 0 &&
            (u === Ot && (u = "px"), Dt(e, lt, o), a(e, lt, v + u));
        break;
      }
      case en: {
        GD(e, r, n.config, o);
        break;
      }
      case tn: {
        VD(e, r, n.config, o);
        break;
      }
      case cr:
      case lr:
      case fr: {
        let s = ts[n.actionTypeId],
          u = Math.round(r.rValue),
          l = Math.round(r.gValue),
          v = Math.round(r.bValue),
          d = r.aValue;
        Dt(e, s, o),
          a(e, s, d >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Dt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function zD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case gi: {
        let { value: i } = t.config;
        i === uD && et ? n(e, fi, Pa) : n(e, fi, i);
        return;
      }
    }
  }
  function Dt(e, t, r) {
    if (!et) return;
    let n = Om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    if (!a) {
      o(e, ir, n);
      return;
    }
    let s = a.split(Zr).map(xm);
    s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(Zr));
  }
  function Sm(e, t, r) {
    if (!et) return;
    let n = Om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ir,
        a
          .split(Zr)
          .map(xm)
          .filter((s) => s !== n)
          .join(Zr)
      );
  }
  function KD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l && ym({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        ym({ actionList: i[o], elementApi: t });
      });
  }
  function ym({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Em({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Em({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Em({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => za(o)(u, i))
        : (s = Cm({ effect: $D, actionTypeId: o, elementApi: r })),
        rs({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function YD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === ur) {
      let { config: a } = t;
      a.widthUnit === Ot && n(e, ct, ""), a.heightUnit === Ot && n(e, lt, "");
    }
    i(e, ir) && Cm({ effect: Sm, actionTypeId: o, elementApi: r })(e);
  }
  function $D(e, t, r) {
    let { setStyle: n } = r;
    Sm(e, t, r), n(e, t, ""), t === xt && n(e, ni, "");
  }
  function Rm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function QD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, l) => {
        if (n && l === 0) return;
        let { actionItems: v } = u,
          d = v[Rm(v)],
          { config: g, actionTypeId: p } = d;
        i.id === d.id && (s = a + o);
        let h = Am(p) === Ja ? 0 : g.duration;
        a += g.delay + h;
      }),
      a > 0 ? Yr(s / a) : 0
    );
  }
  function ZD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, pi.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, pi.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function JD(e, { basedOn: t }) {
    return (
      (e === Je.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Je.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function e1(e, t) {
    return e + pD + t;
  }
  function t1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function r1(e, t) {
    return Qa(e && e.sort(), t && t.sort());
  }
  function n1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Za + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Za + r + Za + n;
  }
  var ht,
    di,
    ci,
    pi,
    bm,
    JF,
    eD,
    tD,
    rD,
    nD,
    iD,
    oD,
    aD,
    sD,
    uD,
    li,
    $r,
    Qr,
    ct,
    lt,
    _m,
    cD,
    lD,
    gm,
    fD,
    hm,
    dD,
    fi,
    ir,
    Ot,
    Zr,
    pD,
    Za,
    Im,
    Ja,
    es,
    Tm,
    or,
    ar,
    sr,
    Jr,
    wm,
    en,
    tn,
    ur,
    cr,
    lr,
    fr,
    gi,
    gD,
    xm,
    ts,
    Om,
    ui,
    vD,
    yD,
    _D,
    mm,
    wD,
    xD,
    AD,
    SD,
    CD,
    ns,
    PD,
    qD,
    MD,
    FD,
    kD,
    BD,
    HD,
    Cm,
    Nm = ve(() => {
      "use strict";
      (ht = le(zv())), (di = le(sm())), (ci = le(fm())), (pi = le(Kt()));
      ke();
      pm();
      Fa();
      bm = le(Va());
      Ka();
      ii();
      ({
        BACKGROUND: JF,
        TRANSFORM: eD,
        TRANSLATE_3D: tD,
        SCALE_3D: rD,
        ROTATE_X: nD,
        ROTATE_Y: iD,
        ROTATE_Z: oD,
        SKEW: aD,
        PRESERVE_3D: sD,
        FLEX: uD,
        OPACITY: li,
        FILTER: $r,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: _m,
        BORDER_COLOR: cD,
        COLOR: lD,
        CHILDREN: gm,
        IMMEDIATE_CHILDREN: fD,
        SIBLINGS: hm,
        PARENT: dD,
        DISPLAY: fi,
        WILL_CHANGE: ir,
        AUTO: Ot,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: pD,
        BAR_DELIMITER: Za,
        RENDER_TRANSFORM: Im,
        RENDER_GENERAL: Ja,
        RENDER_STYLE: es,
        RENDER_PLUGIN: Tm,
      } = Re),
        ({
          TRANSFORM_MOVE: or,
          TRANSFORM_SCALE: ar,
          TRANSFORM_ROTATE: sr,
          TRANSFORM_SKEW: Jr,
          STYLE_OPACITY: wm,
          STYLE_FILTER: en,
          STYLE_FONT_VARIATION: tn,
          STYLE_SIZE: ur,
          STYLE_BACKGROUND_COLOR: cr,
          STYLE_BORDER: lr,
          STYLE_TEXT_COLOR: fr,
          GENERAL_DISPLAY: gi,
          OBJECT_VALUE: gD,
        } = Ue),
        (xm = (e) => e.trim()),
        (ts = Object.freeze({ [cr]: _m, [lr]: cD, [fr]: lD })),
        (Om = Object.freeze({
          [xt]: eD,
          [_m]: JF,
          [li]: li,
          [$r]: $r,
          [ct]: ct,
          [lt]: lt,
          [Qr]: Qr,
        })),
        (ui = new Map());
      vD = 1;
      yD = 1;
      _D = (e, t) => e === t;
      (mm = /px/),
        (wD = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = PD[n.type]), r),
            e || {}
          )),
        (xD = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = qD[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (AD = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (SD = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (CD = (e, t, r) => {
          if (Mt(e)) return Ha(e)(r, t);
          switch (e) {
            case en: {
              let n = (0, ci.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case tn: {
              let n = (0, ci.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (ns = {
        [or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ar]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (PD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (qD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (MD = (e, t) => {
          let r = (0, ci.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (FD = Object.keys(ns));
      (kD = "\\(([^)]+)\\)"), (BD = /^rgb/), (HD = RegExp(`rgba?${kD}`));
      Cm =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case or:
            case ar:
            case sr:
            case Jr:
              e(n, xt, r);
              break;
            case en:
              e(n, $r, r);
              break;
            case tn:
              e(n, Qr, r);
              break;
            case wm:
              e(n, li, r);
              break;
            case ur:
              e(n, ct, r), e(n, lt, r);
              break;
            case cr:
            case lr:
            case fr:
              e(n, ts[t], r);
              break;
            case gi:
              e(n, fi, r);
              break;
          }
        };
    });
  var Gt = c((qe) => {
    "use strict";
    var dr = yn().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.IX2VanillaUtils =
      qe.IX2VanillaPlugins =
      qe.IX2ElementsReducer =
      qe.IX2Easings =
      qe.IX2EasingUtils =
      qe.IX2BrowserSupport =
        void 0;
    var i1 = dr((ii(), nt(Av)));
    qe.IX2BrowserSupport = i1;
    var o1 = dr((Ma(), nt(Kr)));
    qe.IX2Easings = o1;
    var a1 = dr((Fa(), nt(qv)));
    qe.IX2EasingUtils = a1;
    var s1 = dr((Gv(), nt(Dv)));
    qe.IX2ElementsReducer = s1;
    var u1 = dr((Ka(), nt(Xv)));
    qe.IX2VanillaPlugins = u1;
    var c1 = dr((Nm(), nt(Lm)));
    qe.IX2VanillaUtils = c1;
  });
  var vi,
    vt,
    l1,
    f1,
    d1,
    p1,
    g1,
    h1,
    hi,
    Pm,
    v1,
    m1,
    is,
    y1,
    E1,
    b1,
    _1,
    qm,
    Mm = ve(() => {
      "use strict";
      ke();
      (vi = le(Gt())),
        (vt = le(Kt())),
        ({
          IX2_RAW_DATA_IMPORTED: l1,
          IX2_SESSION_STOPPED: f1,
          IX2_INSTANCE_ADDED: d1,
          IX2_INSTANCE_STARTED: p1,
          IX2_INSTANCE_REMOVED: g1,
          IX2_ANIMATION_FRAME_CHANGED: h1,
        } = Te),
        ({
          optimizeFloat: hi,
          applyEasing: Pm,
          createBezierEasing: v1,
        } = vi.IX2EasingUtils),
        ({ RENDER_GENERAL: m1 } = Re),
        ({
          getItemConfigByKey: is,
          getRenderType: y1,
          getStyleProp: E1,
        } = vi.IX2VanillaUtils),
        (b1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: v,
              skipToValue: d,
            } = e,
            { parameters: g } = t.payload,
            p = Math.max(1 - a, 0.01),
            h = g[n];
          h == null && ((p = 1), (h = s));
          let b = Math.max(h, 0) || 0,
            T = hi(b - r),
            _ = v ? d : hi(r + T * p),
            R = _ * 100;
          if (_ === r && e.current) return e;
          let A, N, P, L;
          for (let X = 0, { length: j } = i; X < j; X++) {
            let { keyframe: Q, actionItems: ie } = i[X];
            if ((X === 0 && (A = ie[0]), R >= Q)) {
              A = ie[0];
              let F = i[X + 1],
                O = F && R !== Q;
              (N = O ? F.actionItems[0] : null),
                O && ((P = Q / 100), (L = (F.keyframe - Q) / 100));
            }
          }
          let W = {};
          if (A && !N)
            for (let X = 0, { length: j } = o; X < j; X++) {
              let Q = o[X];
              W[Q] = is(u, Q, A.config);
            }
          else if (A && N && P !== void 0 && L !== void 0) {
            let X = (_ - P) / L,
              j = A.config.easing,
              Q = Pm(j, X, l);
            for (let ie = 0, { length: F } = o; ie < F; ie++) {
              let O = o[ie],
                q = is(u, O, A.config),
                Z = (is(u, O, N.config) - q) * Q + q;
              W[O] = Z;
            }
          }
          return (0, vt.merge)(e, { position: _, current: W });
        }),
        (_1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: v,
              pluginDuration: d,
              instanceDelay: g,
              customEasingFn: p,
              skipMotion: h,
            } = e,
            b = u.config.easing,
            { duration: T, delay: _ } = u.config;
          d != null && (T = d),
            (_ = g ?? _),
            a === m1 ? (T = 0) : (o || h) && (T = _ = 0);
          let { now: R } = t.payload;
          if (r && n) {
            let A = R - (i + _);
            if (s) {
              let X = R - i,
                j = T + _,
                Q = hi(Math.min(Math.max(0, X / j), 1));
              e = (0, vt.set)(e, "verboseTimeElapsed", j * Q);
            }
            if (A < 0) return e;
            let N = hi(Math.min(Math.max(0, A / T), 1)),
              P = Pm(b, N, p),
              L = {},
              W = null;
            return (
              v.length &&
                (W = v.reduce((X, j) => {
                  let Q = l[j],
                    ie = parseFloat(n[j]) || 0,
                    O = (parseFloat(Q) - ie) * P + ie;
                  return (X[j] = O), X;
                }, {})),
              (L.current = W),
              (L.position = N),
              N === 1 && ((L.active = !1), (L.complete = !0)),
              (0, vt.merge)(e, L)
            );
          }
          return e;
        }),
        (qm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case l1:
              return t.payload.ixInstances || Object.freeze({});
            case f1:
              return Object.freeze({});
            case d1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: v,
                  origin: d,
                  destination: g,
                  immediate: p,
                  verbose: h,
                  continuous: b,
                  parameterId: T,
                  actionGroups: _,
                  smoothing: R,
                  restingValue: A,
                  pluginInstance: N,
                  pluginDuration: P,
                  instanceDelay: L,
                  skipMotion: W,
                  skipToValue: X,
                } = t.payload,
                { actionTypeId: j } = i,
                Q = y1(j),
                ie = E1(Q, j),
                F = Object.keys(g).filter(
                  (q) => g[q] != null && typeof g[q] != "string"
                ),
                { easing: O } = i.config;
              return (0, vt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: g,
                destinationKeys: F,
                immediate: p,
                verbose: h,
                current: null,
                actionItem: i,
                actionTypeId: j,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: Q,
                isCarrier: v,
                styleProp: ie,
                continuous: b,
                parameterId: T,
                actionGroups: _,
                smoothing: R,
                restingValue: A,
                pluginInstance: N,
                pluginDuration: P,
                instanceDelay: L,
                skipMotion: W,
                skipToValue: X,
                customEasingFn:
                  Array.isArray(O) && O.length === 4 ? v1(O) : void 0,
              });
            }
            case p1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, vt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case g1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case h1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? b1 : _1;
                r = (0, vt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var I1,
    T1,
    w1,
    Fm,
    Dm = ve(() => {
      "use strict";
      ke();
      ({
        IX2_RAW_DATA_IMPORTED: I1,
        IX2_SESSION_STOPPED: T1,
        IX2_PARAMETER_CHANGED: w1,
      } = Te),
        (Fm = (e = {}, t) => {
          switch (t.type) {
            case I1:
              return t.payload.ixParameters || {};
            case T1:
              return {};
            case w1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Um = {};
  Ge(Um, { default: () => O1 });
  var Gm,
    Vm,
    x1,
    O1,
    km = ve(() => {
      "use strict";
      Gm = le(ea());
      Zf();
      Ed();
      Id();
      Vm = le(Gt());
      Mm();
      Dm();
      ({ ixElements: x1 } = Vm.IX2ElementsReducer),
        (O1 = (0, Gm.combineReducers)({
          ixData: Qf,
          ixRequest: yd,
          ixSession: _d,
          ixElements: x1,
          ixInstances: qm,
          ixParameters: Fm,
        }));
    });
  var Hm = c((qj, Bm) => {
    var A1 = It(),
      S1 = xe(),
      C1 = pt(),
      R1 = "[object String]";
    function L1(e) {
      return typeof e == "string" || (!S1(e) && C1(e) && A1(e) == R1);
    }
    Bm.exports = L1;
  });
  var Xm = c((Mj, Wm) => {
    var N1 = Sa(),
      P1 = N1("length");
    Wm.exports = P1;
  });
  var zm = c((Fj, jm) => {
    var q1 = "\\ud800-\\udfff",
      M1 = "\\u0300-\\u036f",
      F1 = "\\ufe20-\\ufe2f",
      D1 = "\\u20d0-\\u20ff",
      G1 = M1 + F1 + D1,
      V1 = "\\ufe0e\\ufe0f",
      U1 = "\\u200d",
      k1 = RegExp("[" + U1 + q1 + G1 + V1 + "]");
    function B1(e) {
      return k1.test(e);
    }
    jm.exports = B1;
  });
  var ry = c((Dj, ty) => {
    var Ym = "\\ud800-\\udfff",
      H1 = "\\u0300-\\u036f",
      W1 = "\\ufe20-\\ufe2f",
      X1 = "\\u20d0-\\u20ff",
      j1 = H1 + W1 + X1,
      z1 = "\\ufe0e\\ufe0f",
      K1 = "[" + Ym + "]",
      os = "[" + j1 + "]",
      as = "\\ud83c[\\udffb-\\udfff]",
      Y1 = "(?:" + os + "|" + as + ")",
      $m = "[^" + Ym + "]",
      Qm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Zm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      $1 = "\\u200d",
      Jm = Y1 + "?",
      ey = "[" + z1 + "]?",
      Q1 = "(?:" + $1 + "(?:" + [$m, Qm, Zm].join("|") + ")" + ey + Jm + ")*",
      Z1 = ey + Jm + Q1,
      J1 = "(?:" + [$m + os + "?", os, Qm, Zm, K1].join("|") + ")",
      Km = RegExp(as + "(?=" + as + ")|" + J1 + Z1, "g");
    function e2(e) {
      for (var t = (Km.lastIndex = 0); Km.test(e); ) ++t;
      return t;
    }
    ty.exports = e2;
  });
  var iy = c((Gj, ny) => {
    var t2 = Xm(),
      r2 = zm(),
      n2 = ry();
    function i2(e) {
      return r2(e) ? n2(e) : t2(e);
    }
    ny.exports = i2;
  });
  var ay = c((Vj, oy) => {
    var o2 = Kn(),
      a2 = Yn(),
      s2 = Pt(),
      u2 = Hm(),
      c2 = iy(),
      l2 = "[object Map]",
      f2 = "[object Set]";
    function d2(e) {
      if (e == null) return 0;
      if (s2(e)) return u2(e) ? c2(e) : e.length;
      var t = a2(e);
      return t == l2 || t == f2 ? e.size : o2(e).length;
    }
    oy.exports = d2;
  });
  var uy = c((Uj, sy) => {
    var p2 = "Expected a function";
    function g2(e) {
      if (typeof e != "function") throw new TypeError(p2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    sy.exports = g2;
  });
  var ss = c((kj, cy) => {
    var h2 = Tt(),
      v2 = (function () {
        try {
          var e = h2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    cy.exports = v2;
  });
  var us = c((Bj, fy) => {
    var ly = ss();
    function m2(e, t, r) {
      t == "__proto__" && ly
        ? ly(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    fy.exports = m2;
  });
  var py = c((Hj, dy) => {
    var y2 = us(),
      E2 = Gn(),
      b2 = Object.prototype,
      _2 = b2.hasOwnProperty;
    function I2(e, t, r) {
      var n = e[t];
      (!(_2.call(e, t) && E2(n, r)) || (r === void 0 && !(t in e))) &&
        y2(e, t, r);
    }
    dy.exports = I2;
  });
  var vy = c((Wj, hy) => {
    var T2 = py(),
      w2 = Xr(),
      x2 = Wn(),
      gy = ut(),
      O2 = rr();
    function A2(e, t, r, n) {
      if (!gy(e)) return e;
      t = w2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = O2(t[i]),
          l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var v = s[u];
          (l = n ? n(v, u, s) : void 0),
            l === void 0 && (l = gy(v) ? v : x2(t[i + 1]) ? [] : {});
        }
        T2(s, u, l), (s = s[u]);
      }
      return e;
    }
    hy.exports = A2;
  });
  var yy = c((Xj, my) => {
    var S2 = Zn(),
      C2 = vy(),
      R2 = Xr();
    function L2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = S2(e, a);
        r(s, a) && C2(o, R2(a, e), s);
      }
      return o;
    }
    my.exports = L2;
  });
  var by = c((jj, Ey) => {
    var N2 = Bn(),
      P2 = ko(),
      q2 = pa(),
      M2 = da(),
      F2 = Object.getOwnPropertySymbols,
      D2 = F2
        ? function (e) {
            for (var t = []; e; ) N2(t, q2(e)), (e = P2(e));
            return t;
          }
        : M2;
    Ey.exports = D2;
  });
  var Iy = c((zj, _y) => {
    function G2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    _y.exports = G2;
  });
  var wy = c((Kj, Ty) => {
    var V2 = ut(),
      U2 = zn(),
      k2 = Iy(),
      B2 = Object.prototype,
      H2 = B2.hasOwnProperty;
    function W2(e) {
      if (!V2(e)) return k2(e);
      var t = U2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !H2.call(e, n))) || r.push(n);
      return r;
    }
    Ty.exports = W2;
  });
  var Oy = c((Yj, xy) => {
    var X2 = ha(),
      j2 = wy(),
      z2 = Pt();
    function K2(e) {
      return z2(e) ? X2(e, !0) : j2(e);
    }
    xy.exports = K2;
  });
  var Sy = c(($j, Ay) => {
    var Y2 = fa(),
      $2 = by(),
      Q2 = Oy();
    function Z2(e) {
      return Y2(e, Q2, $2);
    }
    Ay.exports = Z2;
  });
  var Ry = c((Qj, Cy) => {
    var J2 = Aa(),
      eG = wt(),
      tG = yy(),
      rG = Sy();
    function nG(e, t) {
      if (e == null) return {};
      var r = J2(rG(e), function (n) {
        return [n];
      });
      return (
        (t = eG(t)),
        tG(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Cy.exports = nG;
  });
  var Ny = c((Zj, Ly) => {
    var iG = wt(),
      oG = uy(),
      aG = Ry();
    function sG(e, t) {
      return aG(e, oG(iG(t)));
    }
    Ly.exports = sG;
  });
  var qy = c((Jj, Py) => {
    var uG = Kn(),
      cG = Yn(),
      lG = Vr(),
      fG = xe(),
      dG = Pt(),
      pG = Hn(),
      gG = zn(),
      hG = jn(),
      vG = "[object Map]",
      mG = "[object Set]",
      yG = Object.prototype,
      EG = yG.hasOwnProperty;
    function bG(e) {
      if (e == null) return !0;
      if (
        dG(e) &&
        (fG(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          pG(e) ||
          hG(e) ||
          lG(e))
      )
        return !e.length;
      var t = cG(e);
      if (t == vG || t == mG) return !e.size;
      if (gG(e)) return !uG(e).length;
      for (var r in e) if (EG.call(e, r)) return !1;
      return !0;
    }
    Py.exports = bG;
  });
  var Fy = c((ez, My) => {
    var _G = us(),
      IG = Ya(),
      TG = wt();
    function wG(e, t) {
      var r = {};
      return (
        (t = TG(t, 3)),
        IG(e, function (n, i, o) {
          _G(r, i, t(n, i, o));
        }),
        r
      );
    }
    My.exports = wG;
  });
  var Gy = c((tz, Dy) => {
    function xG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    Dy.exports = xG;
  });
  var Uy = c((rz, Vy) => {
    var OG = ei();
    function AG(e) {
      return typeof e == "function" ? e : OG;
    }
    Vy.exports = AG;
  });
  var By = c((nz, ky) => {
    var SG = Gy(),
      CG = $a(),
      RG = Uy(),
      LG = xe();
    function NG(e, t) {
      var r = LG(e) ? SG : CG;
      return r(e, RG(t));
    }
    ky.exports = NG;
  });
  var Wy = c((iz, Hy) => {
    var PG = Ze(),
      qG = function () {
        return PG.Date.now();
      };
    Hy.exports = qG;
  });
  var zy = c((oz, jy) => {
    var MG = ut(),
      cs = Wy(),
      Xy = ti(),
      FG = "Expected a function",
      DG = Math.max,
      GG = Math.min;
    function VG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        v = !1,
        d = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(FG);
      (t = Xy(t) || 0),
        MG(r) &&
          ((v = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? DG(Xy(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function p(L) {
        var W = n,
          X = i;
        return (n = i = void 0), (l = L), (a = e.apply(X, W)), a;
      }
      function h(L) {
        return (l = L), (s = setTimeout(_, t)), v ? p(L) : a;
      }
      function b(L) {
        var W = L - u,
          X = L - l,
          j = t - W;
        return d ? GG(j, o - X) : j;
      }
      function T(L) {
        var W = L - u,
          X = L - l;
        return u === void 0 || W >= t || W < 0 || (d && X >= o);
      }
      function _() {
        var L = cs();
        if (T(L)) return R(L);
        s = setTimeout(_, b(L));
      }
      function R(L) {
        return (s = void 0), g && n ? p(L) : ((n = i = void 0), a);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
      }
      function N() {
        return s === void 0 ? a : R(cs());
      }
      function P() {
        var L = cs(),
          W = T(L);
        if (((n = arguments), (i = this), (u = L), W)) {
          if (s === void 0) return h(u);
          if (d) return clearTimeout(s), (s = setTimeout(_, t)), p(u);
        }
        return s === void 0 && (s = setTimeout(_, t)), a;
      }
      return (P.cancel = A), (P.flush = N), P;
    }
    jy.exports = VG;
  });
  var Yy = c((az, Ky) => {
    var UG = zy(),
      kG = ut(),
      BG = "Expected a function";
    function HG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(BG);
      return (
        kG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        UG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ky.exports = HG;
  });
  var Qy = {};
  Ge(Qy, {
    actionListPlaybackChanged: () => gr,
    animationFrameChanged: () => yi,
    clearRequested: () => gV,
    elementStateChanged: () => ms,
    eventListenerAdded: () => mi,
    eventStateChanged: () => gs,
    instanceAdded: () => hs,
    instanceRemoved: () => vs,
    instanceStarted: () => Ei,
    mediaQueriesDefined: () => Es,
    parameterChanged: () => pr,
    playbackRequested: () => dV,
    previewRequested: () => fV,
    rawDataImported: () => ls,
    sessionInitialized: () => fs,
    sessionStarted: () => ds,
    sessionStopped: () => ps,
    stopRequested: () => pV,
    testFrameRendered: () => hV,
    viewportWidthChanged: () => ys,
  });
  var $y,
    WG,
    XG,
    jG,
    zG,
    KG,
    YG,
    $G,
    QG,
    ZG,
    JG,
    eV,
    tV,
    rV,
    nV,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    ls,
    fs,
    ds,
    ps,
    fV,
    dV,
    pV,
    gV,
    mi,
    hV,
    gs,
    yi,
    pr,
    hs,
    Ei,
    vs,
    ms,
    gr,
    ys,
    Es,
    bi = ve(() => {
      "use strict";
      ke();
      ($y = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: WG,
          IX2_SESSION_INITIALIZED: XG,
          IX2_SESSION_STARTED: jG,
          IX2_SESSION_STOPPED: zG,
          IX2_PREVIEW_REQUESTED: KG,
          IX2_PLAYBACK_REQUESTED: YG,
          IX2_STOP_REQUESTED: $G,
          IX2_CLEAR_REQUESTED: QG,
          IX2_EVENT_LISTENER_ADDED: ZG,
          IX2_TEST_FRAME_RENDERED: JG,
          IX2_EVENT_STATE_CHANGED: eV,
          IX2_ANIMATION_FRAME_CHANGED: tV,
          IX2_PARAMETER_CHANGED: rV,
          IX2_INSTANCE_ADDED: nV,
          IX2_INSTANCE_STARTED: iV,
          IX2_INSTANCE_REMOVED: oV,
          IX2_ELEMENT_STATE_CHANGED: aV,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: sV,
          IX2_VIEWPORT_WIDTH_CHANGED: uV,
          IX2_MEDIA_QUERIES_DEFINED: cV,
        } = Te),
        ({ reifyState: lV } = $y.IX2VanillaUtils),
        (ls = (e) => ({ type: WG, payload: { ...lV(e) } })),
        (fs = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: XG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ds = () => ({ type: jG })),
        (ps = () => ({ type: zG })),
        (fV = ({ rawData: e, defer: t }) => ({
          type: KG,
          payload: { defer: t, rawData: e },
        })),
        (dV = ({
          actionTypeId: e = Ue.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: YG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (pV = (e) => ({ type: $G, payload: { actionListId: e } })),
        (gV = () => ({ type: QG })),
        (mi = (e, t) => ({
          type: ZG,
          payload: { target: e, listenerParams: t },
        })),
        (hV = (e = 1) => ({ type: JG, payload: { step: e } })),
        (gs = (e, t) => ({ type: eV, payload: { stateKey: e, newState: t } })),
        (yi = (e, t) => ({ type: tV, payload: { now: e, parameters: t } })),
        (pr = (e, t) => ({ type: rV, payload: { key: e, value: t } })),
        (hs = (e) => ({ type: nV, payload: { ...e } })),
        (Ei = (e, t) => ({ type: iV, payload: { instanceId: e, time: t } })),
        (vs = (e) => ({ type: oV, payload: { instanceId: e } })),
        (ms = (e, t, r, n) => ({
          type: aV,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (gr = ({ actionListId: e, isPlaying: t }) => ({
          type: sV,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ys = ({ width: e, mediaQueries: t }) => ({
          type: uV,
          payload: { width: e, mediaQueries: t },
        })),
        (Es = () => ({ type: cV }));
    });
  var Me = {};
  Ge(Me, {
    elementContains: () => Is,
    getChildElements: () => xV,
    getClosestElement: () => rn,
    getProperty: () => bV,
    getQuerySelector: () => _s,
    getRefType: () => Ts,
    getSiblingElements: () => OV,
    getStyle: () => EV,
    getValidDocument: () => IV,
    isSiblingNode: () => wV,
    matchSelector: () => _V,
    queryDocument: () => TV,
    setStyle: () => yV,
  });
  function yV(e, t, r) {
    e.style[t] = r;
  }
  function EV(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function bV(e, t) {
    return e[t];
  }
  function _V(e) {
    return (t) => t[bs](e);
  }
  function _s({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Zy) !== -1) {
        let n = e.split(Zy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(eE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function IV(e) {
    return e == null || e === document.documentElement.getAttribute(eE)
      ? document
      : null;
  }
  function TV(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Is(e, t) {
    return e.contains(t);
  }
  function wV(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function xV(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function OV(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Ts(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? vV
        : mV
      : null;
  }
  var Jy,
    bs,
    Zy,
    vV,
    mV,
    eE,
    rn,
    tE = ve(() => {
      "use strict";
      Jy = le(Gt());
      ke();
      ({ ELEMENT_MATCHES: bs } = Jy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Zy,
          HTML_ELEMENT: vV,
          PLAIN_OBJECT: mV,
          WF_PAGE: eE,
        } = Re);
      rn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[bs] && r[bs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ws = c((cz, nE) => {
    var AV = ut(),
      rE = Object.create,
      SV = (function () {
        function e() {}
        return function (t) {
          if (!AV(t)) return {};
          if (rE) return rE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    nE.exports = SV;
  });
  var _i = c((lz, iE) => {
    function CV() {}
    iE.exports = CV;
  });
  var Ti = c((fz, oE) => {
    var RV = ws(),
      LV = _i();
    function Ii(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ii.prototype = RV(LV.prototype);
    Ii.prototype.constructor = Ii;
    oE.exports = Ii;
  });
  var cE = c((dz, uE) => {
    var aE = Xt(),
      NV = Vr(),
      PV = xe(),
      sE = aE ? aE.isConcatSpreadable : void 0;
    function qV(e) {
      return PV(e) || NV(e) || !!(sE && e && e[sE]);
    }
    uE.exports = qV;
  });
  var dE = c((pz, fE) => {
    var MV = Bn(),
      FV = cE();
    function lE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = FV), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? lE(s, t - 1, r, n, i)
            : MV(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    fE.exports = lE;
  });
  var gE = c((gz, pE) => {
    var DV = dE();
    function GV(e) {
      var t = e == null ? 0 : e.length;
      return t ? DV(e, 1) : [];
    }
    pE.exports = GV;
  });
  var vE = c((hz, hE) => {
    function VV(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    hE.exports = VV;
  });
  var EE = c((vz, yE) => {
    var UV = vE(),
      mE = Math.max;
    function kV(e, t, r) {
      return (
        (t = mE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = mE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), UV(e, this, s);
        }
      );
    }
    yE.exports = kV;
  });
  var _E = c((mz, bE) => {
    function BV(e) {
      return function () {
        return e;
      };
    }
    bE.exports = BV;
  });
  var wE = c((yz, TE) => {
    var HV = _E(),
      IE = ss(),
      WV = ei(),
      XV = IE
        ? function (e, t) {
            return IE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: HV(t),
              writable: !0,
            });
          }
        : WV;
    TE.exports = XV;
  });
  var OE = c((Ez, xE) => {
    var jV = 800,
      zV = 16,
      KV = Date.now;
    function YV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = KV(),
          i = zV - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= jV) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    xE.exports = YV;
  });
  var SE = c((bz, AE) => {
    var $V = wE(),
      QV = OE(),
      ZV = QV($V);
    AE.exports = ZV;
  });
  var RE = c((_z, CE) => {
    var JV = gE(),
      eU = EE(),
      tU = SE();
    function rU(e) {
      return tU(eU(e, void 0, JV), e + "");
    }
    CE.exports = rU;
  });
  var PE = c((Iz, NE) => {
    var LE = va(),
      nU = LE && new LE();
    NE.exports = nU;
  });
  var ME = c((Tz, qE) => {
    function iU() {}
    qE.exports = iU;
  });
  var xs = c((wz, DE) => {
    var FE = PE(),
      oU = ME(),
      aU = FE
        ? function (e) {
            return FE.get(e);
          }
        : oU;
    DE.exports = aU;
  });
  var VE = c((xz, GE) => {
    var sU = {};
    GE.exports = sU;
  });
  var Os = c((Oz, kE) => {
    var UE = VE(),
      uU = Object.prototype,
      cU = uU.hasOwnProperty;
    function lU(e) {
      for (
        var t = e.name + "", r = UE[t], n = cU.call(UE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    kE.exports = lU;
  });
  var xi = c((Az, BE) => {
    var fU = ws(),
      dU = _i(),
      pU = 4294967295;
    function wi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = pU),
        (this.__views__ = []);
    }
    wi.prototype = fU(dU.prototype);
    wi.prototype.constructor = wi;
    BE.exports = wi;
  });
  var WE = c((Sz, HE) => {
    function gU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    HE.exports = gU;
  });
  var jE = c((Cz, XE) => {
    var hU = xi(),
      vU = Ti(),
      mU = WE();
    function yU(e) {
      if (e instanceof hU) return e.clone();
      var t = new vU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = mU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    XE.exports = yU;
  });
  var YE = c((Rz, KE) => {
    var EU = xi(),
      zE = Ti(),
      bU = _i(),
      _U = xe(),
      IU = pt(),
      TU = jE(),
      wU = Object.prototype,
      xU = wU.hasOwnProperty;
    function Oi(e) {
      if (IU(e) && !_U(e) && !(e instanceof EU)) {
        if (e instanceof zE) return e;
        if (xU.call(e, "__wrapped__")) return TU(e);
      }
      return new zE(e);
    }
    Oi.prototype = bU.prototype;
    Oi.prototype.constructor = Oi;
    KE.exports = Oi;
  });
  var QE = c((Lz, $E) => {
    var OU = xi(),
      AU = xs(),
      SU = Os(),
      CU = YE();
    function RU(e) {
      var t = SU(e),
        r = CU[t];
      if (typeof r != "function" || !(t in OU.prototype)) return !1;
      if (e === r) return !0;
      var n = AU(r);
      return !!n && e === n[0];
    }
    $E.exports = RU;
  });
  var tb = c((Nz, eb) => {
    var ZE = Ti(),
      LU = RE(),
      NU = xs(),
      As = Os(),
      PU = xe(),
      JE = QE(),
      qU = "Expected a function",
      MU = 8,
      FU = 32,
      DU = 128,
      GU = 256;
    function VU(e) {
      return LU(function (t) {
        var r = t.length,
          n = r,
          i = ZE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(qU);
          if (i && !a && As(o) == "wrapper") var a = new ZE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = As(o),
            u = s == "wrapper" ? NU(o) : void 0;
          u &&
          JE(u[0]) &&
          u[1] == (DU | MU | FU | GU) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[As(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && JE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            v = l[0];
          if (a && l.length == 1 && PU(v)) return a.plant(v).value();
          for (var d = 0, g = r ? t[d].apply(this, l) : v; ++d < r; )
            g = t[d].call(this, g);
          return g;
        };
      });
    }
    eb.exports = VU;
  });
  var nb = c((Pz, rb) => {
    var UU = tb(),
      kU = UU();
    rb.exports = kU;
  });
  var ob = c((qz, ib) => {
    function BU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ib.exports = BU;
  });
  var sb = c((Mz, ab) => {
    var HU = ob(),
      Ss = ti();
    function WU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Ss(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Ss(t)), (t = t === t ? t : 0)),
        HU(Ss(e), t, r)
      );
    }
    ab.exports = WU;
  });
  var vb,
    mb,
    yb,
    Eb,
    XU,
    jU,
    zU,
    KU,
    YU,
    $U,
    QU,
    ZU,
    JU,
    ek,
    tk,
    rk,
    nk,
    ik,
    ok,
    bb,
    _b,
    ak,
    sk,
    uk,
    Ib,
    ck,
    lk,
    Tb,
    fk,
    Cs,
    wb,
    ub,
    cb,
    xb,
    on,
    dk,
    ft,
    Ob,
    pk,
    He,
    tt,
    an,
    Ab,
    Rs,
    lb,
    Ls,
    gk,
    nn,
    hk,
    vk,
    mk,
    Sb,
    fb,
    yk,
    db,
    Ek,
    bk,
    _k,
    pb,
    Ai,
    Si,
    gb,
    hb,
    Cb,
    Rb = ve(() => {
      "use strict";
      (vb = le(nb())), (mb = le(Jn())), (yb = le(sb()));
      ke();
      Ns();
      bi();
      (Eb = le(Gt())),
        ({
          MOUSE_CLICK: XU,
          MOUSE_SECOND_CLICK: jU,
          MOUSE_DOWN: zU,
          MOUSE_UP: KU,
          MOUSE_OVER: YU,
          MOUSE_OUT: $U,
          DROPDOWN_CLOSE: QU,
          DROPDOWN_OPEN: ZU,
          SLIDER_ACTIVE: JU,
          SLIDER_INACTIVE: ek,
          TAB_ACTIVE: tk,
          TAB_INACTIVE: rk,
          NAVBAR_CLOSE: nk,
          NAVBAR_OPEN: ik,
          MOUSE_MOVE: ok,
          PAGE_SCROLL_DOWN: bb,
          SCROLL_INTO_VIEW: _b,
          SCROLL_OUT_OF_VIEW: ak,
          PAGE_SCROLL_UP: sk,
          SCROLLING_IN_VIEW: uk,
          PAGE_FINISH: Ib,
          ECOMMERCE_CART_CLOSE: ck,
          ECOMMERCE_CART_OPEN: lk,
          PAGE_START: Tb,
          PAGE_SCROLL: fk,
        } = Je),
        (Cs = "COMPONENT_ACTIVE"),
        (wb = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: ub } = Re),
        ({ getNamespacedParameterId: cb } = Eb.IX2VanillaUtils),
        (xb = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (on = xb(({ element: e, nativeEvent: t }) => e === t.target)),
        (dk = xb(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, vb.default)([on, dk])),
        (Ob = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !gk[i.eventTypeId]) return i;
          }
          return null;
        }),
        (pk = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Ob(e, n);
        }),
        (He = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = Ob(e, u);
          return (
            l &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + ub + n.split(ub)[1],
                actionListId: (0, mb.default)(l, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            sn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (tt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (an = { handler: tt(ft, He) }),
        (Ab = { ...an, types: [Cs, wb].join(" ") }),
        (Rs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (lb = "mouseover mouseout"),
        (Ls = { types: Rs }),
        (gk = { PAGE_START: Tb, PAGE_FINISH: Ib }),
        (nn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, yb.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (hk = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (vk = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (mk = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = nn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return hk(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (Sb = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Cs, wb].indexOf(n) !== -1 ? n === Cs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (fb = (e) => (t, r) => {
          let n = { elementHovered: vk(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (yk = (e) => (t, r) => {
          let n = { ...r, elementVisible: mk(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (db =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = nn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              v = l === "PX",
              d = i - o,
              g = Number((n / d).toFixed(2));
            if (r && r.percentTop === g) return r;
            let p = (v ? u : (o * (u || 0)) / 100) / d,
              h,
              b,
              T = 0;
            r &&
              ((h = g > r.percentTop),
              (b = r.scrollingDown !== h),
              (T = b ? g : r.anchorTop));
            let _ = s === bb ? g >= T + p : g <= T - p,
              R = {
                ...r,
                percentTop: g,
                inBounds: _,
                anchorTop: T,
                scrollingDown: h,
              };
            return (r && _ && (b || R.inBounds !== r.inBounds) && e(t, R)) || R;
          }),
        (Ek = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (bk = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (_k = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (pb =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ai = (e = !0) => ({
          ...Ab,
          handler: tt(
            e ? ft : on,
            Sb((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        })),
        (Si = (e = !0) => ({
          ...Ab,
          handler: tt(
            e ? ft : on,
            Sb((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        })),
        (gb = {
          ...Ls,
          handler: yk((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === _b) === r
              ? (He(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (hb = 0.05),
        (Cb = {
          [JU]: Ai(),
          [ek]: Si(),
          [ZU]: Ai(),
          [QU]: Si(),
          [ik]: Ai(!1),
          [nk]: Si(!1),
          [tk]: Ai(),
          [rk]: Si(),
          [lk]: { types: "ecommerce-cart-open", handler: tt(ft, He) },
          [ck]: { types: "ecommerce-cart-close", handler: tt(ft, He) },
          [XU]: {
            types: "click",
            handler: tt(
              ft,
              pb((e, { clickCount: t }) => {
                pk(e) ? t === 1 && He(e) : He(e);
              })
            ),
          },
          [jU]: {
            types: "click",
            handler: tt(
              ft,
              pb((e, { clickCount: t }) => {
                t === 2 && He(e);
              })
            ),
          },
          [zU]: { ...an, types: "mousedown" },
          [KU]: { ...an, types: "mouseup" },
          [YU]: {
            types: lb,
            handler: tt(
              ft,
              fb((e, t) => {
                t.elementHovered && He(e);
              })
            ),
          },
          [$U]: {
            types: lb,
            handler: tt(
              ft,
              fb((e, t) => {
                t.elementHovered || He(e);
              })
            ),
          },
          [ok]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: v = 0,
                } = r,
                {
                  clientX: d = o.clientX,
                  clientY: g = o.clientY,
                  pageX: p = o.pageX,
                  pageY: h = o.pageY,
                } = n,
                b = s === "X_AXIS",
                T = n.type === "mouseout",
                _ = v / 100,
                R = u,
                A = !1;
              switch (a) {
                case st.VIEWPORT: {
                  _ = b
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: N,
                    scrollTop: P,
                    scrollWidth: L,
                    scrollHeight: W,
                  } = nn();
                  _ = b ? Math.min(N + p, L) / L : Math.min(P + h, W) / W;
                  break;
                }
                case st.ELEMENT:
                default: {
                  R = cb(i, u);
                  let N = n.type.indexOf("mouse") === 0;
                  if (N && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let P = t.getBoundingClientRect(),
                    { left: L, top: W, width: X, height: j } = P;
                  if (!N && !Ek({ left: d, top: g }, P)) break;
                  (A = !0), (_ = b ? (d - L) / X : (g - W) / j);
                  break;
                }
              }
              return (
                T && (_ > 1 - hb || _ < hb) && (_ = Math.round(_)),
                (a !== st.ELEMENT || A || A !== o.elementHovered) &&
                  ((_ = l ? 1 - _ : _), e.dispatch(pr(R, _))),
                {
                  elementHovered: A,
                  clientX: d,
                  clientY: g,
                  pageX: p,
                  pageY: h,
                }
              );
            },
          },
          [fk]: {
            types: Rs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = nn(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(pr(r, s));
            },
          },
          [uk]: {
            types: Rs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = nn(),
                {
                  basedOn: v,
                  selectedAxis: d,
                  continuousParameterGroupId: g,
                  startsEntering: p,
                  startsExiting: h,
                  addEndOffset: b,
                  addStartOffset: T,
                  addOffsetValue: _ = 0,
                  endOffsetValue: R = 0,
                } = r,
                A = d === "X_AXIS";
              if (v === st.VIEWPORT) {
                let N = A ? o / s : a / u;
                return (
                  N !== i.scrollPercent && t.dispatch(pr(g, N)),
                  { scrollPercent: N }
                );
              } else {
                let N = cb(n, g),
                  P = e.getBoundingClientRect(),
                  L = (T ? _ : 0) / 100,
                  W = (b ? R : 0) / 100;
                (L = p ? L : 1 - L), (W = h ? W : 1 - W);
                let X = P.top + Math.min(P.height * L, l),
                  Q = P.top + P.height * W - X,
                  ie = Math.min(l + Q, u),
                  O = Math.min(Math.max(0, l - X), ie) / ie;
                return (
                  O !== i.scrollPercent && t.dispatch(pr(N, O)),
                  { scrollPercent: O }
                );
              }
            },
          },
          [_b]: gb,
          [ak]: gb,
          [bb]: {
            ...Ls,
            handler: db((e, t) => {
              t.scrollingDown && He(e);
            }),
          },
          [sk]: {
            ...Ls,
            handler: db((e, t) => {
              t.scrollingDown || He(e);
            }),
          },
          [Ib]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: tt(on, bk(He)),
          },
          [Tb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: tt(on, _k(He)),
          },
        });
    });
  var zb = {};
  Ge(zb, {
    observeRequests: () => kk,
    startActionGroup: () => sn,
    startEngine: () => qi,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => Wb,
    stopEngine: () => Mi,
  });
  function kk(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: Wk }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: Xk }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: jk }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: zk });
  }
  function Bk(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Mi(e),
          Ub({ store: e, elementApi: Me }),
          qi({ store: e, allowEvents: !0 }),
          kb();
      },
    });
  }
  function Hk(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function Wk({ rawData: e, defer: t }, r) {
    let n = () => {
      qi({ store: r, rawData: e, allowEvents: !0 }), kb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function kb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function Xk(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: v } = e;
    if (n && i && v && s) {
      let d = v.actionLists[n];
      d && (v = Rk({ actionList: d, actionItemId: i, rawData: v }));
    }
    if (
      (qi({ store: t, rawData: v, allowEvents: a, testManual: u }),
      (n && r === Ue.GENERAL_START_ACTION) || Ps(r))
    ) {
      hr({ store: t, actionListId: n }),
        Hb({ store: t, actionListId: n, eventId: o });
      let d = sn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: l,
      });
      l && d && t.dispatch(gr({ actionListId: n, isPlaying: !s }));
    }
  }
  function jk({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : Wb({ store: t }), Mi(t);
  }
  function zk(e, t) {
    Mi(t), Ub({ store: t, elementApi: Me });
  }
  function qi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ls(t)),
      i.active ||
        (e.dispatch(
          fs({
            hasBoundaryNodes: !!document.querySelector(Ri),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (Jk(e), Kk(), e.getState().ixSession.hasDefinedMediaQueries && Bk(e)),
        e.dispatch(ds()),
        Yk(e, n));
  }
  function Kk() {
    let { documentElement: e } = document;
    e.className.indexOf(Lb) === -1 && (e.className += ` ${Lb}`);
  }
  function Yk(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(yi(n, o)), t ? Hk(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Mi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach($k), qk(), e.dispatch(ps());
    }
  }
  function $k({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function Qk({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: v } = e.getState(),
      { events: d } = l,
      g = d[n],
      { eventTypeId: p } = g,
      h = {},
      b = {},
      T = [],
      { continuousActionGroups: _ } = a,
      { id: R } = a;
    Lk(p, i) && (R = Nk(t, R));
    let A = v.hasBoundaryNodes && r ? rn(r, Ri) : null;
    _.forEach((N) => {
      let { keyframe: P, actionItems: L } = N;
      L.forEach((W) => {
        let { actionTypeId: X } = W,
          { target: j } = W.config;
        if (!j) return;
        let Q = j.boundaryMode ? A : null,
          ie = Mk(j) + qs + X;
        if (((b[ie] = Zk(b[ie], P, W)), !h[ie])) {
          h[ie] = !0;
          let { config: F } = W;
          Li({
            config: F,
            event: g,
            eventTarget: r,
            elementRoot: Q,
            elementApi: Me,
          }).forEach((O) => {
            T.push({ element: O, key: ie });
          });
        }
      });
    }),
      T.forEach(({ element: N, key: P }) => {
        let L = b[P],
          W = (0, mt.default)(L, "[0].actionItems[0]", {}),
          { actionTypeId: X } = W,
          j = Pi(X) ? Fs(X)(N, W) : null,
          Q = Ms({ element: N, actionItem: W, elementApi: Me }, j);
        Ds({
          store: e,
          element: N,
          eventId: n,
          actionListId: o,
          actionItem: W,
          destination: Q,
          continuous: !0,
          parameterId: R,
          actionGroups: L,
          smoothing: s,
          restingValue: u,
          pluginInstance: j,
        });
      });
  }
  function Zk(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function Jk(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    Bb(e),
      (0, vr.default)(r, (i, o) => {
        let a = Cb[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        oB({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && tB(e);
  }
  function tB(e) {
    let t = () => {
      Bb(e);
    };
    eB.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(mi(window, [r, t]));
    }),
      t();
  }
  function Bb(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ys({ width: n, mediaQueries: i }));
    }
  }
  function oB({ logic: e, store: t, events: r }) {
    aB(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = rB(r, iB);
    if (!(0, qb.default)(s)) return;
    (0, vr.default)(s, (d, g) => {
      let p = r[g],
        { action: h, id: b, mediaQueries: T = o.mediaQueryKeys } = p,
        { actionListId: _ } = h.config;
      Fk(T, o.mediaQueryKeys) || t.dispatch(Es()),
        h.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(p.config) ? p.config : [p.config]).forEach((A) => {
            let { continuousParameterGroupId: N } = A,
              P = (0, mt.default)(a, `${_}.continuousParameterGroups`, []),
              L = (0, Pb.default)(P, ({ id: j }) => j === N),
              W = (A.smoothing || 0) / 100,
              X = (A.restingState || 0) / 100;
            L &&
              d.forEach((j, Q) => {
                let ie = b + qs + Q;
                Qk({
                  store: t,
                  eventStateKey: ie,
                  eventTarget: j,
                  eventId: b,
                  eventConfig: A,
                  actionListId: _,
                  parameterGroup: L,
                  smoothing: W,
                  restingValue: X,
                });
              });
          }),
        (h.actionTypeId === Ue.GENERAL_START_ACTION || Ps(h.actionTypeId)) &&
          Hb({ store: t, actionListId: _, eventId: b });
    });
    let u = (d) => {
        let { ixSession: g } = t.getState();
        nB(s, (p, h, b) => {
          let T = r[h],
            _ = g.eventState[b],
            { action: R, mediaQueries: A = o.mediaQueryKeys } = T;
          if (!Ni(A, g.mediaQueryKey)) return;
          let N = (P = {}) => {
            let L = i(
              {
                store: t,
                element: p,
                event: T,
                eventConfig: P,
                nativeEvent: d,
                eventStateKey: b,
              },
              _
            );
            Dk(L, _) || t.dispatch(gs(b, L));
          };
          R.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(T.config) ? T.config : [T.config]).forEach(N)
            : N();
        });
      },
      l = (0, Gb.default)(u, Uk),
      v = ({ target: d = document, types: g, throttle: p }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((h) => {
            let b = p ? l : u;
            d.addEventListener(h, b), t.dispatch(mi(d, [h, b]));
          });
      };
    Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
  }
  function aB(e) {
    if (!Vk) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = _s(o);
      t[a] ||
        ((i === Je.MOUSE_CLICK || i === Je.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Hb({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
        v = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ni(v, i.mediaQueryKey)) return;
      l.forEach((d) => {
        let { config: g, actionTypeId: p } = d,
          h =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          b = Li({ config: h, event: s, elementApi: Me }),
          T = Pi(p);
        b.forEach((_) => {
          let R = T ? Fs(p)(_, d) : null;
          Ds({
            destination: Ms({ element: _, actionItem: d, elementApi: Me }, R),
            immediate: !0,
            store: e,
            element: _,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: R,
          });
        });
      });
    }
  }
  function Wb({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, vr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Gs(r, e), i && e.dispatch(gr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? rn(r, Ri) : null;
    (0, vr.default)(o, (u) => {
      let l = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
        v = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && v) {
        if (s && l && !Is(s, u.element)) return;
        Gs(u, e),
          u.verbose && e.dispatch(gr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function sn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: v } = u,
      d = v[t] || {},
      { mediaQueries: g = u.mediaQueryKeys } = d,
      p = (0, mt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: h, useFirstGroupAsInitialState: b } = p;
    if (!h || !h.length) return !1;
    o >= h.length && (0, mt.default)(d, "config.loop") && (o = 0),
      o === 0 && b && o++;
    let _ =
        (o === 0 || (o === 1 && b)) && Ps(d.action?.actionTypeId)
          ? d.config.delay
          : void 0,
      R = (0, mt.default)(h, [o, "actionItems"], []);
    if (!R.length || !Ni(g, l.mediaQueryKey)) return !1;
    let A = l.hasBoundaryNodes && r ? rn(r, Ri) : null,
      N = Ak(R),
      P = !1;
    return (
      R.forEach((L, W) => {
        let { config: X, actionTypeId: j } = L,
          Q = Pi(j),
          { target: ie } = X;
        if (!ie) return;
        let F = ie.boundaryMode ? A : null;
        Li({
          config: X,
          event: d,
          eventTarget: r,
          elementRoot: F,
          elementApi: Me,
        }).forEach((q, B) => {
          let D = Q ? Fs(j)(q, L) : null,
            Z = Q ? Gk(j)(q, L) : null;
          P = !0;
          let re = N === W && B === 0,
            M = Sk({ element: q, actionItem: L }),
            G = Ms({ element: q, actionItem: L, elementApi: Me }, D);
          Ds({
            store: e,
            element: q,
            actionItem: L,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: M,
            destination: G,
            immediate: a,
            verbose: s,
            pluginInstance: D,
            pluginDuration: Z,
            instanceDelay: _,
          });
        });
      }),
      P
    );
  }
  function Ds(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: v,
      } = n,
      d = !u,
      g = xk(),
      { ixElements: p, ixSession: h, ixData: b } = t.getState(),
      T = wk(p, i),
      { refState: _ } = p[T] || {},
      R = Ts(i),
      A = h.reducedMotion && na[o.actionTypeId],
      N;
    if (A && u)
      switch (b.events[v]?.eventTypeId) {
        case Je.MOUSE_MOVE:
        case Je.MOUSE_MOVE_IN_VIEWPORT:
          N = l;
          break;
        default:
          N = 0.5;
          break;
      }
    let P = Ck(i, _, r, o, Me, s);
    if (
      (t.dispatch(
        hs({
          instanceId: g,
          elementId: T,
          origin: P,
          refType: R,
          skipMotion: A,
          skipToValue: N,
          ...n,
        })
      ),
      Xb(document.body, "ix2-animation-started", g),
      a)
    ) {
      sB(t, g);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: L }) => L[g], onChange: jb }),
      d && t.dispatch(Ei(g, h.tick));
  }
  function Gs(e, t) {
    Xb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === Vb && Pk(o, n, Me), t.dispatch(vs(e.id));
  }
  function Xb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function sB(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Ei(t, 0)), e.dispatch(yi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    jb(n[t], e);
  }
  function jb(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: v,
        eventId: d,
        eventTarget: g,
        eventStateKey: p,
        actionListId: h,
        isCarrier: b,
        styleProp: T,
        verbose: _,
        pluginInstance: R,
      } = e,
      { ixData: A, ixSession: N } = t.getState(),
      { events: P } = A,
      L = P[d] || {},
      { mediaQueries: W = A.mediaQueryKeys } = L;
    if (Ni(W, N.mediaQueryKey) && (n || r || i)) {
      if (l || (u === Tk && i)) {
        t.dispatch(ms(o, s, l, a));
        let { ixElements: X } = t.getState(),
          { ref: j, refType: Q, refState: ie } = X[o] || {},
          F = ie && ie[s];
        (Q === Vb || Pi(s)) && Ok(j, ie, F, d, a, T, Me, u, R);
      }
      if (i) {
        if (b) {
          let X = sn({
            store: t,
            eventId: d,
            eventTarget: g,
            eventStateKey: p,
            actionListId: h,
            groupIndex: v + 1,
            verbose: _,
          });
          _ && !X && t.dispatch(gr({ actionListId: h, isPlaying: !1 }));
        }
        Gs(e, t);
      }
    }
  }
  var Pb,
    mt,
    qb,
    Mb,
    Fb,
    Db,
    vr,
    Gb,
    Ci,
    Ik,
    Ps,
    qs,
    Ri,
    Vb,
    Tk,
    Lb,
    Li,
    wk,
    Ms,
    Vt,
    xk,
    Ok,
    Ub,
    Ak,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Ni,
    Pk,
    qk,
    Mk,
    Fk,
    Dk,
    Pi,
    Fs,
    Gk,
    Nb,
    Vk,
    Uk,
    eB,
    rB,
    nB,
    iB,
    Ns = ve(() => {
      "use strict";
      (Pb = le(Na())),
        (mt = le(Jn())),
        (qb = le(ay())),
        (Mb = le(Ny())),
        (Fb = le(qy())),
        (Db = le(Fy())),
        (vr = le(By())),
        (Gb = le(Yy()));
      ke();
      Ci = le(Gt());
      bi();
      tE();
      Rb();
      (Ik = Object.keys(Ln)),
        (Ps = (e) => Ik.includes(e)),
        ({
          COLON_DELIMITER: qs,
          BOUNDARY_SELECTOR: Ri,
          HTML_ELEMENT: Vb,
          RENDER_GENERAL: Tk,
          W_MOD_IX: Lb,
        } = Re),
        ({
          getAffectedElements: Li,
          getElementId: wk,
          getDestinationValues: Ms,
          observeStore: Vt,
          getInstanceId: xk,
          renderHTMLElement: Ok,
          clearAllStyles: Ub,
          getMaxDurationItemIndex: Ak,
          getComputedStyle: Sk,
          getInstanceOrigin: Ck,
          reduceListToGroup: Rk,
          shouldNamespaceEventParameter: Lk,
          getNamespacedParameterId: Nk,
          shouldAllowMediaQuery: Ni,
          cleanupHTMLElement: Pk,
          clearObjectCache: qk,
          stringifyTarget: Mk,
          mediaQueriesEqual: Fk,
          shallowEqual: Dk,
        } = Ci.IX2VanillaUtils),
        ({
          isPluginType: Pi,
          createPluginInstance: Fs,
          getPluginDuration: Gk,
        } = Ci.IX2VanillaPlugins),
        (Nb = navigator.userAgent),
        (Vk = Nb.match(/iPad/i) || Nb.match(/iPhone/)),
        (Uk = 12);
      eB = ["resize", "orientationchange"];
      (rB = (e, t) => (0, Mb.default)((0, Db.default)(e, t), Fb.default)),
        (nB = (e, t) => {
          (0, vr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + qs + o;
              t(i, n, a);
            });
          });
        }),
        (iB = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Li({ config: t, elementApi: Me });
        });
    });
  var Yb = c((yt) => {
    "use strict";
    var uB = yn().default,
      cB = Hi().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = Kb;
    yt.init = gB;
    yt.setEnv = pB;
    yt.store = void 0;
    vf();
    var lB = ea(),
      fB = cB((km(), nt(Um))),
      Vs = (Ns(), nt(zb)),
      dB = uB((bi(), nt(Qy)));
    yt.actions = dB;
    var Us = (yt.store = (0, lB.createStore)(fB.default));
    function pB(e) {
      e() && (0, Vs.observeRequests)(Us);
    }
    function gB(e) {
      Kb(), (0, Vs.startEngine)({ store: Us, rawData: e, allowEvents: !0 });
    }
    function Kb() {
      (0, Vs.stopEngine)(Us);
    }
  });
  var Jb = c((Wz, Zb) => {
    "use strict";
    var $b = Ve(),
      Qb = Yb();
    Qb.setEnv($b.env);
    $b.define(
      "ix2",
      (Zb.exports = function () {
        return Qb;
      })
    );
  });
  var t_ = c((Xz, e_) => {
    "use strict";
    var mr = Ve();
    mr.define(
      "links",
      (e_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = mr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          v = /\/$/,
          d,
          g;
        r.ready = r.design = r.preview = p;
        function p() {
          (i = o && mr.env("design")),
            (g = mr.env("slug") || a.pathname || ""),
            mr.scroll.off(b),
            (d = []);
          for (var _ = document.links, R = 0; R < _.length; ++R) h(_[R]);
          d.length && (mr.scroll.on(b), b());
        }
        function h(_) {
          if (!_.getAttribute("hreflang")) {
            var R =
              (i && _.getAttribute("href-disabled")) || _.getAttribute("href");
            if (((s.href = R), !(R.indexOf(":") >= 0))) {
              var A = e(_);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var N = e(s.hash);
                N.length && d.push({ link: A, sec: N, active: !1 });
                return;
              }
              if (!(R === "#" || R === "")) {
                var P =
                  s.href === a.href || R === g || (l.test(R) && v.test(g));
                T(A, u, P);
              }
            }
          }
        }
        function b() {
          var _ = n.scrollTop(),
            R = n.height();
          t.each(d, function (A) {
            if (!A.link.attr("hreflang")) {
              var N = A.link,
                P = A.sec,
                L = P.offset().top,
                W = P.outerHeight(),
                X = R * 0.5,
                j = P.is(":visible") && L + W - X >= _ && L + X <= _ + R;
              A.active !== j && ((A.active = j), T(N, u, j));
            }
          });
        }
        function T(_, R, A) {
          var N = _.hasClass(R);
          (A && N) || (!A && !N) || (A ? _.addClass(R) : _.removeClass(R));
        }
        return r;
      })
    );
  });
  var n_ = c((jz, r_) => {
    "use strict";
    var Fi = Ve();
    Fi.define(
      "scroll",
      (r_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = h() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (F) {
              window.setTimeout(F, 15);
            },
          u = Fi.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          p = document.createElement("style");
        p.appendChild(document.createTextNode(g));
        function h() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function T(F) {
          return b.test(F.hash) && F.host + F.pathname === r.host + r.pathname;
        }
        let _ =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            _.matches
          );
        }
        function A(F, O) {
          var q;
          switch (O) {
            case "add":
              (q = F.attr("tabindex")),
                q
                  ? F.attr("data-wf-tabindex-swap", q)
                  : F.attr("tabindex", "-1");
              break;
            case "remove":
              (q = F.attr("data-wf-tabindex-swap")),
                q
                  ? (F.attr("tabindex", q),
                    F.removeAttr("data-wf-tabindex-swap"))
                  : F.removeAttr("tabindex");
              break;
          }
          F.toggleClass("wf-force-outline-none", O === "add");
        }
        function N(F) {
          var O = F.currentTarget;
          if (
            !(
              Fi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))
            )
          ) {
            var q = T(O) ? O.hash : "";
            if (q !== "") {
              var B = e(q);
              B.length &&
                (F && (F.preventDefault(), F.stopPropagation()),
                P(q, F),
                window.setTimeout(
                  function () {
                    L(B, function () {
                      A(B, "add"),
                        B.get(0).focus({ preventScroll: !0 }),
                        A(B, "remove");
                    });
                  },
                  F ? 0 : 300
                ));
            }
          }
        }
        function P(F) {
          if (
            r.hash !== F &&
            n &&
            n.pushState &&
            !(Fi.env.chrome && r.protocol === "file:")
          ) {
            var O = n.state && n.state.hash;
            O !== F && n.pushState({ hash: F }, "", F);
          }
        }
        function L(F, O) {
          var q = i.scrollTop(),
            B = W(F);
          if (q !== B) {
            var D = X(F, q, B),
              Z = Date.now(),
              re = function () {
                var M = Date.now() - Z;
                window.scroll(0, j(q, B, M, D)),
                  M <= D ? s(re) : typeof O == "function" && O();
              };
            s(re);
          }
        }
        function W(F) {
          var O = e(l),
            q = O.css("position") === "fixed" ? O.outerHeight() : 0,
            B = F.offset().top - q;
          if (F.data("scroll") === "mid") {
            var D = i.height() - q,
              Z = F.outerHeight();
            Z < D && (B -= Math.round((D - Z) / 2));
          }
          return B;
        }
        function X(F, O, q) {
          if (R()) return 0;
          var B = 1;
          return (
            a.add(F).each(function (D, Z) {
              var re = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (B = re);
            }),
            (472.143 * Math.log(Math.abs(O - q) + 125) - 2e3) * B
          );
        }
        function j(F, O, q, B) {
          return q > B ? O : F + (O - F) * Q(q / B);
        }
        function Q(F) {
          return F < 0.5
            ? 4 * F * F * F
            : (F - 1) * (2 * F - 2) * (2 * F - 2) + 1;
        }
        function ie() {
          var { WF_CLICK_EMPTY: F, WF_CLICK_SCROLL: O } = t;
          o.on(O, d, N),
            o.on(F, v, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(p, document.head.firstChild);
        }
        return { ready: ie };
      })
    );
  });
  var o_ = c((zz, i_) => {
    "use strict";
    var hB = Ve();
    hB.define(
      "touch",
      (i_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            v;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", p, !1),
            o.addEventListener("touchcancel", h, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", p, !1),
            o.addEventListener("mouseout", h, !1);
          function d(T) {
            var _ = T.touches;
            (_ && _.length > 1) ||
              ((a = !0),
              _ ? ((s = !0), (l = _[0].clientX)) : (l = T.clientX),
              (v = l));
          }
          function g(T) {
            if (a) {
              if (s && T.type === "mousemove") {
                T.preventDefault(), T.stopPropagation();
                return;
              }
              var _ = T.touches,
                R = _ ? _[0].clientX : T.clientX,
                A = R - v;
              (v = R),
                Math.abs(A) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", T, { direction: A > 0 ? "right" : "left" }), h());
            }
          }
          function p(T) {
            if (a && ((a = !1), s && T.type === "mouseup")) {
              T.preventDefault(), T.stopPropagation(), (s = !1);
              return;
            }
          }
          function h() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", p, !1),
              o.removeEventListener("touchcancel", h, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", p, !1),
              o.removeEventListener("mouseout", h, !1),
              (o = null);
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var a_ = c((ks) => {
    "use strict";
    Object.defineProperty(ks, "__esModule", { value: !0 });
    ks.default = vB;
    function vB(e, t, r, n, i, o, a, s, u, l, v, d, g) {
      return function (p) {
        e(p);
        var h = p.form,
          b = {
            name: h.attr("data-name") || h.attr("name") || "Untitled Form",
            pageId: h.attr("data-wf-page-id") || "",
            elementId: h.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              h.html()
            ),
            trackingCookies: n(),
          };
        let T = h.attr("data-wf-flow");
        T && (b.wfFlow = T), i(p);
        var _ = o(h, b.fields);
        if (_) return a(_);
        if (((b.fileUploads = s(h)), u(p), !l)) {
          v(p);
          return;
        }
        d.ajax({
          url: g,
          type: "POST",
          data: b,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (p.success = !0), v(p);
          })
          .fail(function () {
            v(p);
          });
      };
    }
  });
  var u_ = c((Yz, s_) => {
    "use strict";
    var Di = Ve();
    Di.define(
      "forms",
      (s_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          l = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          d = window.alert,
          g = Di.env(),
          p,
          h,
          b,
          T = /list-manage[1-9]?.com/i,
          _ = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !g && !p && N();
            };
        function R() {
          (u = e("html").attr("data-wf-site")),
            (h = "https://webflow.com/api/v1/form/" + u),
            a &&
              h.indexOf("https://webflow.com") >= 0 &&
              (h = h.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (b = `${h}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(A);
        }
        function A(M, G) {
          var K = e(G),
            m = e.data(G, s);
          m || (m = e.data(G, s, { form: K })), P(m);
          var I = K.closest("div.w-form");
          (m.done = I.find("> .w-form-done")),
            (m.fail = I.find("> .w-form-fail")),
            (m.fileUploads = I.find(".w-file-upload")),
            m.fileUploads.each(function (ne) {
              D(ne, m);
            });
          var U =
            m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
          m.done.attr("aria-label") || m.form.attr("aria-label", U),
            m.done.attr("tabindex", "-1"),
            m.done.attr("role", "region"),
            m.done.attr("aria-label") ||
              m.done.attr("aria-label", U + " success"),
            m.fail.attr("tabindex", "-1"),
            m.fail.attr("role", "region"),
            m.fail.attr("aria-label") ||
              m.fail.attr("aria-label", U + " failure");
          var ee = (m.action = K.attr("action"));
          if (
            ((m.handler = null),
            (m.redirect = K.attr("data-redirect")),
            T.test(ee))
          ) {
            m.handler = O;
            return;
          }
          if (!ee) {
            if (u) {
              m.handler = (() => {
                let ne = a_().default;
                return ne(P, o, Di, Q, B, W, d, X, L, u, q, e, h);
              })();
              return;
            }
            _();
          }
        }
        function N() {
          (p = !0),
            n.on("submit", s + " form", function (ne) {
              var Y = e.data(this, s);
              Y.handler && ((Y.evt = ne), Y.handler(Y));
            });
          let M = ".w-checkbox-input",
            G = ".w-radio-input",
            K = "w--redirected-checked",
            m = "w--redirected-focus",
            I = "w--redirected-focus-visible",
            U = ":focus-visible, [data-wf-focus-visible]",
            ee = [
              ["checkbox", M],
              ["radio", G],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + M + ")",
            (ne) => {
              e(ne.target).siblings(M).toggleClass(K);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (ne) => {
              e(`input[name="${ne.target.name}"]:not(${M})`).map((J, be) =>
                e(be).siblings(G).removeClass(K)
              );
              let Y = e(ne.target);
              Y.hasClass("w-radio-input") || Y.siblings(G).addClass(K);
            }),
            ee.forEach(([ne, Y]) => {
              n.on(
                "focus",
                s + ` form input[type="${ne}"]:not(` + Y + ")",
                (J) => {
                  e(J.target).siblings(Y).addClass(m),
                    e(J.target).filter(U).siblings(Y).addClass(I);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${ne}"]:not(` + Y + ")",
                  (J) => {
                    e(J.target).siblings(Y).removeClass(`${m} ${I}`);
                  }
                );
            });
        }
        function P(M) {
          var G = (M.btn = M.form.find(':input[type="submit"]'));
          (M.wait = M.btn.attr("data-wait") || null),
            (M.success = !1),
            G.prop("disabled", !1),
            M.label && G.val(M.label);
        }
        function L(M) {
          var G = M.btn,
            K = M.wait;
          G.prop("disabled", !0), K && ((M.label = G.val()), G.val(K));
        }
        function W(M, G) {
          var K = null;
          return (
            (G = G || {}),
            M.find(':input:not([type="submit"]):not([type="file"])').each(
              function (m, I) {
                var U = e(I),
                  ee = U.attr("type"),
                  ne =
                    U.attr("data-name") || U.attr("name") || "Field " + (m + 1);
                ne = encodeURIComponent(ne);
                var Y = U.val();
                if (ee === "checkbox") Y = U.is(":checked");
                else if (ee === "radio") {
                  if (G[ne] === null || typeof G[ne] == "string") return;
                  Y =
                    M.find(
                      'input[name="' + U.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Y == "string" && (Y = e.trim(Y)),
                  (G[ne] = Y),
                  (K = K || ie(U, ee, ne, Y));
              }
            ),
            K
          );
        }
        function X(M) {
          var G = {};
          return (
            M.find(':input[type="file"]').each(function (K, m) {
              var I = e(m),
                U = I.attr("data-name") || I.attr("name") || "File " + (K + 1),
                ee = I.attr("data-value");
              typeof ee == "string" && (ee = e.trim(ee)), (G[U] = ee);
            }),
            G
          );
        }
        let j = { _mkto_trk: "marketo" };
        function Q() {
          return document.cookie.split("; ").reduce(function (G, K) {
            let m = K.split("="),
              I = m[0];
            if (I in j) {
              let U = j[I],
                ee = m.slice(1).join("=");
              G[U] = ee;
            }
            return G;
          }, {});
        }
        function ie(M, G, K, m) {
          var I = null;
          return (
            G === "password"
              ? (I = "Passwords cannot be submitted.")
              : M.attr("required")
              ? m
                ? l.test(M.attr("type")) &&
                  (v.test(m) ||
                    (I = "Please enter a valid email address for: " + K))
                : (I = "Please fill out the required field: " + K)
              : K === "g-recaptcha-response" &&
                !m &&
                (I = "Please confirm you\u2019re not a robot."),
            I
          );
        }
        function F(M) {
          B(M), q(M);
        }
        function O(M) {
          P(M);
          var G = M.form,
            K = {};
          if (/^https/.test(o.href) && !/^https/.test(M.action)) {
            G.attr("method", "post");
            return;
          }
          B(M);
          var m = W(G, K);
          if (m) return d(m);
          L(M);
          var I;
          t.each(K, function (Y, J) {
            l.test(J) && (K.EMAIL = Y),
              /^((full[ _-]?)?name)$/i.test(J) && (I = Y),
              /^(first[ _-]?name)$/i.test(J) && (K.FNAME = Y),
              /^(last[ _-]?name)$/i.test(J) && (K.LNAME = Y);
          }),
            I &&
              !K.FNAME &&
              ((I = I.split(" ")),
              (K.FNAME = I[0]),
              (K.LNAME = K.LNAME || I[1]));
          var U = M.action.replace("/post?", "/post-json?") + "&c=?",
            ee = U.indexOf("u=") + 2;
          ee = U.substring(ee, U.indexOf("&", ee));
          var ne = U.indexOf("id=") + 3;
          (ne = U.substring(ne, U.indexOf("&", ne))),
            (K["b_" + ee + "_" + ne] = ""),
            e
              .ajax({ url: U, data: K, dataType: "jsonp" })
              .done(function (Y) {
                (M.success = Y.result === "success" || /already/.test(Y.msg)),
                  M.success || console.info("MailChimp error: " + Y.msg),
                  q(M);
              })
              .fail(function () {
                q(M);
              });
        }
        function q(M) {
          var G = M.form,
            K = M.redirect,
            m = M.success;
          if (m && K) {
            Di.location(K);
            return;
          }
          M.done.toggle(m),
            M.fail.toggle(!m),
            m ? M.done.focus() : M.fail.focus(),
            G.toggle(!m),
            P(M);
        }
        function B(M) {
          M.evt && M.evt.preventDefault(), (M.evt = null);
        }
        function D(M, G) {
          if (!G.fileUploads || !G.fileUploads[M]) return;
          var K,
            m = e(G.fileUploads[M]),
            I = m.find("> .w-file-upload-default"),
            U = m.find("> .w-file-upload-uploading"),
            ee = m.find("> .w-file-upload-success"),
            ne = m.find("> .w-file-upload-error"),
            Y = I.find(".w-file-upload-input"),
            J = I.find(".w-file-upload-label"),
            be = J.children(),
            se = ne.find(".w-file-upload-error-msg"),
            y = ee.find(".w-file-upload-file"),
            V = ee.find(".w-file-remove-link"),
            z = y.find(".w-file-upload-file-name"),
            H = se.attr("data-w-size-error"),
            fe = se.attr("data-w-type-error"),
            Xe = se.attr("data-w-generic-error");
          if (
            (g ||
              J.on("click keydown", function (w) {
                (w.type === "keydown" && w.which !== 13 && w.which !== 32) ||
                  (w.preventDefault(), Y.click());
              }),
            J.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            Y.on("click", function (w) {
              w.preventDefault();
            }),
              J.on("click", function (w) {
                w.preventDefault();
              }),
              be.on("click", function (w) {
                w.preventDefault();
              });
          else {
            V.on("click keydown", function (w) {
              if (w.type === "keydown") {
                if (w.which !== 13 && w.which !== 32) return;
                w.preventDefault();
              }
              Y.removeAttr("data-value"),
                Y.val(""),
                z.html(""),
                I.toggle(!0),
                ee.toggle(!1),
                J.focus();
            }),
              Y.on("change", function (w) {
                (K = w.target && w.target.files && w.target.files[0]),
                  K &&
                    (I.toggle(!1),
                    ne.toggle(!1),
                    U.toggle(!0),
                    U.focus(),
                    z.text(K.name),
                    S() || L(G),
                    (G.fileUploads[M].uploading = !0),
                    Z(K, E));
              });
            var Fe = J.outerHeight();
            Y.height(Fe), Y.width(1);
          }
          function f(w) {
            var C = w.responseJSON && w.responseJSON.msg,
              $ = Xe;
            typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0
              ? ($ = fe)
              : typeof C == "string" &&
                C.indexOf("MaxFileSizeError") === 0 &&
                ($ = H),
              se.text($),
              Y.removeAttr("data-value"),
              Y.val(""),
              U.toggle(!1),
              I.toggle(!0),
              ne.toggle(!0),
              ne.focus(),
              (G.fileUploads[M].uploading = !1),
              S() || P(G);
          }
          function E(w, C) {
            if (w) return f(w);
            var $ = C.fileName,
              oe = C.postData,
              ge = C.fileId,
              k = C.s3Url;
            Y.attr("data-value", ge), re(k, oe, K, $, x);
          }
          function x(w) {
            if (w) return f(w);
            U.toggle(!1),
              ee.css("display", "inline-block"),
              ee.focus(),
              (G.fileUploads[M].uploading = !1),
              S() || P(G);
          }
          function S() {
            var w = (G.fileUploads && G.fileUploads.toArray()) || [];
            return w.some(function (C) {
              return C.uploading;
            });
          }
        }
        function Z(M, G) {
          var K = new URLSearchParams({ name: M.name, size: M.size });
          e.ajax({ type: "GET", url: `${b}?${K}`, crossDomain: !0 })
            .done(function (m) {
              G(null, m);
            })
            .fail(function (m) {
              G(m);
            });
        }
        function re(M, G, K, m, I) {
          var U = new FormData();
          for (var ee in G) U.append(ee, G[ee]);
          U.append("file", K, m),
            e
              .ajax({
                type: "POST",
                url: M,
                data: U,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                I(null);
              })
              .fail(function (ne) {
                I(ne);
              });
        }
        return r;
      })
    );
  });
  var f_ = c(($z, l_) => {
    "use strict";
    var Bs = Ve(),
      c_ = "w-condition-invisible",
      mB = "." + c_;
    function yB(e) {
      return e.filter(function (t) {
        return !cn(t);
      });
    }
    function cn(e) {
      return !!(e.$el && e.$el.closest(mB).length);
    }
    function Hs(e, t) {
      for (var r = e; r >= 0; r--) if (!cn(t[r])) return r;
      return -1;
    }
    function Ws(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!cn(t[r])) return r;
      return -1;
    }
    function EB(e, t) {
      return Hs(e - 1, t) === -1;
    }
    function bB(e, t) {
      return Ws(e + 1, t) === -1;
    }
    function un(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function _B(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        l = [],
        v,
        d,
        g,
        p = [];
      function h(m, I) {
        return (
          (l = o(m) ? m : [m]),
          d || h.build(),
          yB(l).length > 1 &&
            ((d.items = d.empty),
            l.forEach(function (U, ee) {
              var ne = G("thumbnail"),
                Y = G("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(ne);
              un(Y, `show item ${ee + 1} of ${l.length}`),
                cn(U) && Y.addClass(c_),
                (d.items = d.items.add(Y)),
                Q(U.thumbnailUrl || U.url, function (J) {
                  J.prop("width") > J.prop("height")
                    ? D(J, "wide")
                    : D(J, "tall"),
                    ne.append(D(J, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            D(d.content, "group")),
          i(Z(d.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          D(d.html, "noscroll"),
          h.show(I || 0)
        );
      }
      (h.build = function () {
        return (
          h.destroy(),
          (d = { html: r(t.documentElement), empty: r() }),
          (d.arrowLeft = G("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = G("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.close = G("control close").attr("role", "button")),
          un(d.arrowLeft, "previous image"),
          un(d.arrowRight, "next image"),
          un(d.close, "close lightbox"),
          (d.spinner = G("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (d.strip = G("strip").attr("role", "tablist")),
          (g = new O(d.spinner, q("hide"))),
          (d.content = G("content").append(
            d.spinner,
            d.arrowLeft,
            d.arrowRight,
            d.close
          )),
          (d.container = G("container").append(d.content, d.strip)),
          (d.lightbox = G("backdrop hide").append(d.container)),
          d.strip.on("click", B("item"), A),
          d.content
            .on("swipe", N)
            .on("click", B("left"), T)
            .on("click", B("right"), _)
            .on("click", B("close"), R)
            .on("click", B("image, caption"), _),
          d.container.on("click", B("view"), R).on("dragstart", B("img"), L),
          d.lightbox.on("keydown", W).on("focusin", P),
          r(n).append(d.lightbox),
          h
        );
      }),
        (h.destroy = function () {
          d && (Z(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (h.show = function (m) {
          if (m !== v) {
            var I = l[m];
            if (!I) return h.hide();
            if (cn(I)) {
              if (m < v) {
                var U = Hs(m - 1, l);
                m = U > -1 ? U : m;
              } else {
                var ee = Ws(m + 1, l);
                m = ee > -1 ? ee : m;
              }
              I = l[m];
            }
            var ne = v;
            (v = m),
              d.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              g.show();
            var Y = (I.html && K(I.width, I.height)) || I.url;
            return (
              Q(Y, function (J) {
                if (m !== v) return;
                var be = G("figure", "figure").append(D(J, "image")),
                  se = G("frame").append(be),
                  y = G("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(se),
                  V,
                  z;
                I.html &&
                  ((V = r(I.html)),
                  (z = V.is("iframe")),
                  z && V.on("load", H),
                  be.append(D(V, "embed"))),
                  I.caption &&
                    be.append(G("caption", "figcaption").text(I.caption)),
                  d.spinner.before(y),
                  z || H();
                function H() {
                  if (
                    (d.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    g.hide(),
                    m !== v)
                  ) {
                    y.remove();
                    return;
                  }
                  let fe = EB(m, l);
                  re(d.arrowLeft, "inactive", fe),
                    M(d.arrowLeft, fe),
                    fe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let Xe = bB(m, l);
                  if (
                    (re(d.arrowRight, "inactive", Xe),
                    M(d.arrowRight, Xe),
                    Xe && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (i(d.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(ie(d.view)),
                        i(y)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: m > ne ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : y.css("opacity", 1),
                    (d.view = y),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    Z(d.items, "active"), d.items.removeAttr("aria-selected");
                    var Fe = d.items.eq(m);
                    D(Fe, "active"), Fe.attr("aria-selected", !0), F(Fe);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              p.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (p.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              h
            );
          }
        }),
        (h.hide = function () {
          return (
            i(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then(j), h
          );
        }),
        (h.prev = function () {
          var m = Hs(v - 1, l);
          m > -1 && h.show(m);
        }),
        (h.next = function () {
          var m = Ws(v + 1, l);
          m > -1 && h.show(m);
        });
      function b(m) {
        return function (I) {
          this === I.target && (I.stopPropagation(), I.preventDefault(), m());
        };
      }
      var T = b(h.prev),
        _ = b(h.next),
        R = b(h.hide),
        A = function (m) {
          var I = r(this).index();
          m.preventDefault(), h.show(I);
        },
        N = function (m, I) {
          m.preventDefault(),
            I.direction === "left"
              ? h.next()
              : I.direction === "right" && h.prev();
        },
        P = function () {
          this.focus();
        };
      function L(m) {
        m.preventDefault();
      }
      function W(m) {
        var I = m.keyCode;
        I === 27 || X(I, "close")
          ? h.hide()
          : I === 37 || X(I, "left")
          ? h.prev()
          : I === 39 || X(I, "right")
          ? h.next()
          : X(I, "item") && r(":focus").click();
      }
      function X(m, I) {
        if (m !== 13 && m !== 32) return !1;
        var U = r(":focus").attr("class"),
          ee = q(I).trim();
        return U.includes(ee);
      }
      function j() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          Z(d.html, "noscroll"),
          D(d.lightbox, "hide"),
          d.view && d.view.remove(),
          Z(d.content, "group"),
          D(d.arrowLeft, "inactive"),
          D(d.arrowRight, "inactive"),
          (v = d.view = void 0),
          p.forEach(function (m) {
            var I = m.node;
            I &&
              (m.hidden
                ? I.attr("aria-hidden", m.hidden)
                : I.removeAttr("aria-hidden"),
              m.tabIndex
                ? I.attr("tabIndex", m.tabIndex)
                : I.removeAttr("tabIndex"));
          }),
          (p = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function Q(m, I) {
        var U = G("img", "img");
        return (
          U.one("load", function () {
            I(U);
          }),
          U.attr("src", m),
          U
        );
      }
      function ie(m) {
        return function () {
          m.remove();
        };
      }
      function F(m) {
        var I = m.get(0),
          U = d.strip.get(0),
          ee = I.offsetLeft,
          ne = I.clientWidth,
          Y = U.scrollLeft,
          J = U.clientWidth,
          be = U.scrollWidth - J,
          se;
        ee < Y
          ? (se = Math.max(0, ee + ne - J))
          : ee + ne > J + Y && (se = Math.min(ee, be)),
          se != null &&
            i(d.strip).add("scroll-left 500ms").start({ "scroll-left": se });
      }
      function O(m, I, U) {
        (this.$element = m),
          (this.className = I),
          (this.delay = U || 200),
          this.hide();
      }
      (O.prototype.show = function () {
        var m = this;
        m.timeoutId ||
          (m.timeoutId = setTimeout(function () {
            m.$element.removeClass(m.className), delete m.timeoutId;
          }, m.delay));
      }),
        (O.prototype.hide = function () {
          var m = this;
          if (m.timeoutId) {
            clearTimeout(m.timeoutId), delete m.timeoutId;
            return;
          }
          m.$element.addClass(m.className);
        });
      function q(m, I) {
        return m.replace(u, (I ? " ." : " ") + s);
      }
      function B(m) {
        return q(m, !0);
      }
      function D(m, I) {
        return m.addClass(q(I));
      }
      function Z(m, I) {
        return m.removeClass(q(I));
      }
      function re(m, I, U) {
        return m.toggleClass(q(I), U);
      }
      function M(m, I) {
        return m.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0);
      }
      function G(m, I) {
        return D(r(t.createElement(I || "div")), m);
      }
      function K(m, I) {
        var U =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          m +
          '" height="' +
          I +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(U);
      }
      return (
        (function () {
          var m = e.navigator.userAgent,
            I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            U = m.match(I),
            ee = m.indexOf("Android ") > -1 && m.indexOf("Chrome") === -1;
          if (!ee && (!U || U[2] > 7)) return;
          var ne = t.createElement("style");
          t.head.appendChild(ne), e.addEventListener("resize", Y, !0);
          function Y() {
            var J = e.innerHeight,
              be = e.innerWidth,
              se =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                J +
                "px}.w-lightbox-view {width:" +
                be +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * J +
                "px}.w-lightbox-image {max-width:" +
                be +
                "px;max-height:" +
                J +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * J +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * J +
                "px}.w-lightbox-item {width:" +
                0.1 * J +
                "px;padding:" +
                0.02 * J +
                "px " +
                0.01 * J +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * J +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * J +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * J +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * J +
                "px}.w-lightbox-image {max-width:" +
                0.96 * be +
                "px;max-height:" +
                0.96 * J +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * be +
                "px;max-height:" +
                0.84 * J +
                "px}}";
            ne.textContent = se;
          }
          Y();
        })(),
        h
      );
    }
    Bs.define(
      "lightbox",
      (l_.exports = function (e) {
        var t = {},
          r = Bs.env(),
          n = _B(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = l;
        function l() {
          (a = r && Bs.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              un(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var p = this;
            e.each(p, function (h, b) {
              var T = e.data(b, s);
              T ||
                (T = e.data(b, s, {
                  el: e(b),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                T.el.off(s),
                v(T),
                a
                  ? T.el.on("setting" + s, v.bind(null, T))
                  : T.el.on("click" + s, d(T)).on("click" + s, function (_) {
                      _.preventDefault();
                    });
            });
          },
        });
        function v(p) {
          var h = p.el.children(".w-json").html(),
            b,
            T;
          if (!h) {
            p.items = [];
            return;
          }
          try {
            h = JSON.parse(h);
          } catch (_) {
            console.error("Malformed lightbox JSON configuration.", _);
          }
          g(h),
            h.items.forEach(function (_) {
              _.$el = p.el;
            }),
            (b = h.group),
            b
              ? ((T = u[b]),
                T || (T = u[b] = []),
                (p.items = T),
                h.items.length &&
                  ((p.index = T.length), T.push.apply(T, h.items)))
              : ((p.items = h.items), (p.index = 0));
        }
        function d(p) {
          return function () {
            p.items.length && n(p.items, p.index || 0);
          };
        }
        function g(p) {
          p.images &&
            (p.images.forEach(function (h) {
              h.type = "image";
            }),
            (p.items = p.images)),
            p.embed && ((p.embed.type = "video"), (p.items = [p.embed])),
            p.groupId && (p.group = p.groupId);
        }
        return t;
      })
    );
  });
  var p_ = c((Qz, d_) => {
    "use strict";
    var At = Ve(),
      IB = $i(),
      Ce = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    At.define(
      "navbar",
      (d_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          l,
          v,
          d = At.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          p = ".w-nav",
          h = "w--open",
          b = "w--nav-dropdown-open",
          T = "w--nav-dropdown-toggle-open",
          _ = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          A = IB.triggers,
          N = e();
        (r.ready = r.design = r.preview = P),
          (r.destroy = function () {
            (N = e()), L(), u && u.length && u.each(Q);
          });
        function P() {
          (l = d && At.env("design")),
            (v = At.env("editor")),
            (s = e(document.body)),
            (u = o.find(p)),
            u.length && (u.each(j), L(), W());
        }
        function L() {
          At.resize.off(X);
        }
        function W() {
          At.resize.on(X);
        }
        function X() {
          u.each(I);
        }
        function j(y, V) {
          var z = e(V),
            H = e.data(V, p);
          H ||
            (H = e.data(V, p, {
              open: !1,
              el: z,
              config: {},
              selectedIdx: -1,
            })),
            (H.menu = z.find(".w-nav-menu")),
            (H.links = H.menu.find(".w-nav-link")),
            (H.dropdowns = H.menu.find(".w-dropdown")),
            (H.dropdownToggle = H.menu.find(".w-dropdown-toggle")),
            (H.dropdownList = H.menu.find(".w-dropdown-list")),
            (H.button = z.find(".w-nav-button")),
            (H.container = z.find(".w-container")),
            (H.overlayContainerId = "w-nav-overlay-" + y),
            (H.outside = K(H));
          var fe = z.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            H.button.attr("style", "-webkit-user-select: text;"),
            H.button.attr("aria-label") == null &&
              H.button.attr("aria-label", "menu"),
            H.button.attr("role", "button"),
            H.button.attr("tabindex", "0"),
            H.button.attr("aria-controls", H.overlayContainerId),
            H.button.attr("aria-haspopup", "menu"),
            H.button.attr("aria-expanded", "false"),
            H.el.off(p),
            H.button.off(p),
            H.menu.off(p),
            O(H),
            l
              ? (ie(H), H.el.on("setting" + p, q(H)))
              : (F(H),
                H.button.on("click" + p, M(H)),
                H.menu.on("click" + p, "a", G(H)),
                H.button.on("keydown" + p, B(H)),
                H.el.on("keydown" + p, D(H))),
            I(y, V);
        }
        function Q(y, V) {
          var z = e.data(V, p);
          z && (ie(z), e.removeData(V, p));
        }
        function ie(y) {
          y.overlay && (se(y, !0), y.overlay.remove(), (y.overlay = null));
        }
        function F(y) {
          y.overlay ||
            ((y.overlay = e(g).appendTo(y.el)),
            y.overlay.attr("id", y.overlayContainerId),
            (y.parent = y.menu.parent()),
            se(y, !0));
        }
        function O(y) {
          var V = {},
            z = y.config || {},
            H = (V.animation = y.el.attr("data-animation") || "default");
          (V.animOver = /^over/.test(H)),
            (V.animDirect = /left$/.test(H) ? -1 : 1),
            z.animation !== H && y.open && t.defer(re, y),
            (V.easing = y.el.attr("data-easing") || "ease"),
            (V.easing2 = y.el.attr("data-easing2") || "ease");
          var fe = y.el.attr("data-duration");
          (V.duration = fe != null ? Number(fe) : 400),
            (V.docHeight = y.el.attr("data-doc-height")),
            (y.config = V);
        }
        function q(y) {
          return function (V, z) {
            z = z || {};
            var H = i.width();
            O(y),
              z.open === !0 && J(y, !0),
              z.open === !1 && se(y, !0),
              y.open &&
                t.defer(function () {
                  H !== i.width() && re(y);
                });
          };
        }
        function B(y) {
          return function (V) {
            switch (V.keyCode) {
              case Ce.SPACE:
              case Ce.ENTER:
                return M(y)(), V.preventDefault(), V.stopPropagation();
              case Ce.ESCAPE:
                return se(y), V.preventDefault(), V.stopPropagation();
              case Ce.ARROW_RIGHT:
              case Ce.ARROW_DOWN:
              case Ce.HOME:
              case Ce.END:
                return y.open
                  ? (V.keyCode === Ce.END
                      ? (y.selectedIdx = y.links.length - 1)
                      : (y.selectedIdx = 0),
                    Z(y),
                    V.preventDefault(),
                    V.stopPropagation())
                  : (V.preventDefault(), V.stopPropagation());
            }
          };
        }
        function D(y) {
          return function (V) {
            if (y.open)
              switch (
                ((y.selectedIdx = y.links.index(document.activeElement)),
                V.keyCode)
              ) {
                case Ce.HOME:
                case Ce.END:
                  return (
                    V.keyCode === Ce.END
                      ? (y.selectedIdx = y.links.length - 1)
                      : (y.selectedIdx = 0),
                    Z(y),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ce.ESCAPE:
                  return (
                    se(y),
                    y.button.focus(),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ce.ARROW_LEFT:
                case Ce.ARROW_UP:
                  return (
                    (y.selectedIdx = Math.max(-1, y.selectedIdx - 1)),
                    Z(y),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ce.ARROW_RIGHT:
                case Ce.ARROW_DOWN:
                  return (
                    (y.selectedIdx = Math.min(
                      y.links.length - 1,
                      y.selectedIdx + 1
                    )),
                    Z(y),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
              }
          };
        }
        function Z(y) {
          if (y.links[y.selectedIdx]) {
            var V = y.links[y.selectedIdx];
            V.focus(), G(V);
          }
        }
        function re(y) {
          y.open && (se(y, !0), J(y, !0));
        }
        function M(y) {
          return a(function () {
            y.open ? se(y) : J(y);
          });
        }
        function G(y) {
          return function (V) {
            var z = e(this),
              H = z.attr("href");
            if (!At.validClick(V.currentTarget)) {
              V.preventDefault();
              return;
            }
            H && H.indexOf("#") === 0 && y.open && se(y);
          };
        }
        function K(y) {
          return (
            y.outside && o.off("click" + p, y.outside),
            function (V) {
              var z = e(V.target);
              (v && z.closest(".w-editor-bem-EditorOverlay").length) || m(y, z);
            }
          );
        }
        var m = a(function (y, V) {
          if (y.open) {
            var z = V.closest(".w-nav-menu");
            y.menu.is(z) || se(y);
          }
        });
        function I(y, V) {
          var z = e.data(V, p),
            H = (z.collapsed = z.button.css("display") !== "none");
          if ((z.open && !H && !l && se(z, !0), z.container.length)) {
            var fe = ee(z);
            z.links.each(fe), z.dropdowns.each(fe);
          }
          z.open && be(z);
        }
        var U = "max-width";
        function ee(y) {
          var V = y.container.css(U);
          return (
            V === "none" && (V = ""),
            function (z, H) {
              (H = e(H)), H.css(U, ""), H.css(U) === "none" && H.css(U, V);
            }
          );
        }
        function ne(y, V) {
          V.setAttribute("data-nav-menu-open", "");
        }
        function Y(y, V) {
          V.removeAttribute("data-nav-menu-open");
        }
        function J(y, V) {
          if (y.open) return;
          (y.open = !0),
            y.menu.each(ne),
            y.links.addClass(R),
            y.dropdowns.addClass(b),
            y.dropdownToggle.addClass(T),
            y.dropdownList.addClass(_),
            y.button.addClass(h);
          var z = y.config,
            H = z.animation;
          (H === "none" || !n.support.transform || z.duration <= 0) && (V = !0);
          var fe = be(y),
            Xe = y.menu.outerHeight(!0),
            Fe = y.menu.outerWidth(!0),
            f = y.el.height(),
            E = y.el[0];
          if (
            (I(0, E),
            A.intro(0, E),
            At.redraw.up(),
            l || o.on("click" + p, y.outside),
            V)
          ) {
            w();
            return;
          }
          var x = "transform " + z.duration + "ms " + z.easing;
          if (
            (y.overlay &&
              ((N = y.menu.prev()), y.overlay.show().append(y.menu)),
            z.animOver)
          ) {
            n(y.menu)
              .add(x)
              .set({ x: z.animDirect * Fe, height: fe })
              .start({ x: 0 })
              .then(w),
              y.overlay && y.overlay.width(Fe);
            return;
          }
          var S = f + Xe;
          n(y.menu).add(x).set({ y: -S }).start({ y: 0 }).then(w);
          function w() {
            y.button.attr("aria-expanded", "true");
          }
        }
        function be(y) {
          var V = y.config,
            z = V.docHeight ? o.height() : s.height();
          return (
            V.animOver
              ? y.menu.height(z)
              : y.el.css("position") !== "fixed" && (z -= y.el.outerHeight(!0)),
            y.overlay && y.overlay.height(z),
            z
          );
        }
        function se(y, V) {
          if (!y.open) return;
          (y.open = !1), y.button.removeClass(h);
          var z = y.config;
          if (
            ((z.animation === "none" ||
              !n.support.transform ||
              z.duration <= 0) &&
              (V = !0),
            A.outro(0, y.el[0]),
            o.off("click" + p, y.outside),
            V)
          ) {
            n(y.menu).stop(), E();
            return;
          }
          var H = "transform " + z.duration + "ms " + z.easing2,
            fe = y.menu.outerHeight(!0),
            Xe = y.menu.outerWidth(!0),
            Fe = y.el.height();
          if (z.animOver) {
            n(y.menu)
              .add(H)
              .start({ x: Xe * z.animDirect })
              .then(E);
            return;
          }
          var f = Fe + fe;
          n(y.menu).add(H).start({ y: -f }).then(E);
          function E() {
            y.menu.height(""),
              n(y.menu).set({ x: 0, y: 0 }),
              y.menu.each(Y),
              y.links.removeClass(R),
              y.dropdowns.removeClass(b),
              y.dropdownToggle.removeClass(T),
              y.dropdownList.removeClass(_),
              y.overlay &&
                y.overlay.children().length &&
                (N.length ? y.menu.insertAfter(N) : y.menu.prependTo(y.parent),
                y.overlay.attr("style", "").hide()),
              y.el.triggerHandler("w-close"),
              y.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  pu();
  vu();
  yu();
  bu();
  Tu();
  $i();
  Jb();
  t_();
  n_();
  o_();
  u_();
  f_();
  p_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715357557248,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-10-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715596300436,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-11-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1715609768872,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715632700524,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715632700525,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|de638f3b-fc36-8e43-3792-40a5f589cd32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715685846148,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-11-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1715686048009,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048009,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048009,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|9077ba47-aeac-2ec9-c460-c06f4d83ec8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048009,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048374,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-11-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1715686048374,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048374,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|a8047b37-1d0d-ec62-314e-6fd75e8f1ee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048374,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048669,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-11-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1715686048669,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048669,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c72e35bf-87ed-12a2-77e0-ae4e7c63c0f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715686048669,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715687592564,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715795369972,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1715795369973,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "66439488e3fca61d70634b56",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66439488e3fca61d70634b56",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715861017600,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6645a7238830dfdd92164520",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6645a7238830dfdd92164520",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715861044290,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6645b10993369c00b0a8cf24",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6645b10993369c00b0a8cf24",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1715866689889,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716220139345,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716288990208,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "105043b9-ceb4-e16a-e744-0fdf0fce8fa4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716288990209,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "664c8b83c0c07bff19ebce13",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664c8b83c0c07bff19ebce13",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1716292483985,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|40bc382f-fa2e-017b-75d5-25fd04f1240e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|40bc382f-fa2e-017b-75d5-25fd04f1240e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303119574,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|40bc382f-fa2e-017b-75d5-25fd04f1240e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|40bc382f-fa2e-017b-75d5-25fd04f1240e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303119575,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303347240,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303347241,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|ed6d2257-4b23-ac6d-dca0-abcc765b56d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|ed6d2257-4b23-ac6d-dca0-abcc765b56d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303360440,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|ed6d2257-4b23-ac6d-dca0-abcc765b56d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|ed6d2257-4b23-ac6d-dca0-abcc765b56d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303360440,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|1c83de69-6f44-9163-3b8a-c37cd40e184a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|1c83de69-6f44-9163-3b8a-c37cd40e184a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303374662,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|1c83de69-6f44-9163-3b8a-c37cd40e184a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|1c83de69-6f44-9163-3b8a-c37cd40e184a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303374663,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303403849,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|55bd5f60-4536-0f76-8d87-88ef94adaf46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303403849,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|c2ff2632-c9e7-c3b2-684b-521bad9849ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c2ff2632-c9e7-c3b2-684b-521bad9849ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303444935,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|c2ff2632-c9e7-c3b2-684b-521bad9849ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|c2ff2632-c9e7-c3b2-684b-521bad9849ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303444935,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|19ef4c9b-5900-868f-ec9a-b8264d236bce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|19ef4c9b-5900-868f-ec9a-b8264d236bce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303460642,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|19ef4c9b-5900-868f-ec9a-b8264d236bce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|19ef4c9b-5900-868f-ec9a-b8264d236bce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303460642,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|36dd8aea-044c-a00b-9ea4-073d3757fac1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|36dd8aea-044c-a00b-9ea4-073d3757fac1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303480601,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|36dd8aea-044c-a00b-9ea4-073d3757fac1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|36dd8aea-044c-a00b-9ea4-073d3757fac1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303480601,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303497643,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303497685,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303509309,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303509309,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303521714,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303521714,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303533414,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303533414,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303543179,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303543179,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d26",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303555437,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d26",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716303555483,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304129019,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304129019,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304141363,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304141405,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304154639,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304154640,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304164797,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|04ee42e8-26d7-e882-c68f-8e71f9bbab0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304164798,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|ae11b57f-cc5b-aa00-8150-788f4bd8a872",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|ae11b57f-cc5b-aa00-8150-788f4bd8a872",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304176583,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20|ae11b57f-cc5b-aa00-8150-788f4bd8a872",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20|ae11b57f-cc5b-aa00-8150-788f4bd8a872",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716304176584,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "af5dcb92-ae71-8407-2590-efb2a07ed45c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "af5dcb92-ae71-8407-2590-efb2a07ed45c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716369281489,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "af5dcb92-ae71-8407-2590-efb2a07ed45c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "af5dcb92-ae71-8407-2590-efb2a07ed45c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1716369281490,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-94" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".heading-style-h1.align-center.slide-in",
        originalId:
          "663e06c56841363663ffbc20|0db87232-e062-88e3-9007-fd9f195aef8b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".heading-style-h1.align-center.slide-in",
          originalId:
            "663e06c56841363663ffbc20|0db87232-e062-88e3-9007-fd9f195aef8b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1716374079154,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-96" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slide-in",
        originalId:
          "663e06c56841363663ffbc3d|cf952203-9913-045e-47af-bba40f8593eb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slide-in",
          originalId:
            "663e06c56841363663ffbc3d|cf952203-9913-045e-47af-bba40f8593eb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 26,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1716374157107,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-37", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-37-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1716781331745,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-38", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-38-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1716781538017,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-39", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "663e06c56841363663ffbc20",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "663e06c56841363663ffbc20",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-39-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1716781677869,
    },
  },
  actionLists: {
    "a-8": {
      id: "a-8",
      title: "navbar-animation",
      continuousParameterGroups: [
        {
          id: "a-8-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-8-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f91" },
                    widthValue: 80,
                    widthUnit: "rem",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f95" },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-8-n-8",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-padding",
                      selectorGuids: ["5b945d09-439a-aafb-d238-b957918308d5"],
                    },
                    widthValue: 0,
                    widthUnit: "px",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 1.5,
              actionItems: [
                {
                  id: "a-8-n-6",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f95" },
                    widthValue: 7,
                    widthUnit: "rem",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-10",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f93" },
                    widthValue: 8.75,
                    widthUnit: "rem",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-8-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f91" },
                    widthValue: 37.25,
                    widthUnit: "rem",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f95" },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-8-n-7",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f95" },
                    widthValue: 0,
                    widthUnit: "px",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-9",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-padding",
                      selectorGuids: ["5b945d09-439a-aafb-d238-b957918308d5"],
                    },
                    widthValue: 24,
                    widthUnit: "px",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-11",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "105043b9-ceb4-e16a-e744-0fdf0fce8f93" },
                    widthValue: 1.5625,
                    widthUnit: "rem",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1715357569694,
    },
    "a-10": {
      id: "a-10",
      title: "How-it-works",
      continuousParameterGroups: [
        {
          id: "a-10-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 61,
              actionItems: [
                {
                  id: "a-10-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|f8831bb8-d47c-1950-0ac9-39e0abd92d24",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 64,
              actionItems: [
                {
                  id: "a-10-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|f8831bb8-d47c-1950-0ac9-39e0abd92d24",
                    },
                    xValue: 0.9,
                    yValue: 0.9,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 66,
              actionItems: [
                {
                  id: "a-10-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d0b",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 69,
              actionItems: [
                {
                  id: "a-10-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|fe5f4109-a381-1d44-d148-3446bb4e4d0b",
                    },
                    xValue: 0.95,
                    yValue: 0.95,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1715596342124,
    },
    "a-11": {
      id: "a-11",
      title: "rotate-on-mouse-hover",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "663e06c56841363663ffbc20|65a6c00c-bf53-470d-4831-399927619934",
                    },
                    yValue: 40,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-11-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "663e06c56841363663ffbc20|65a6c00c-bf53-470d-4831-399927619934",
                    },
                    yValue: -40,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-11-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "663e06c56841363663ffbc20|65a6c00c-bf53-470d-4831-399927619934",
                    },
                    xValue: -40,
                    yValue: null,
                    zValue: null,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-11-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "663e06c56841363663ffbc20|65a6c00c-bf53-470d-4831-399927619934",
                    },
                    xValue: 40,
                    yValue: null,
                    zValue: null,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1715609292605,
    },
    "a-21": {
      id: "a-21",
      title: "button-link-hover-arrow",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                heightValue: 13,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-21-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.is-opacity-0-18",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "c1526763-af6f-d109-cb56-6a5cb876fbe9",
                  ],
                },
                value: 0.18,
                unit: "",
              },
            },
            {
              id: "a-21-n-11",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".text-size-regular.text-weight-semibold.txt-color-purple500",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7b7",
                    "08b611aa-3687-13fc-1648-07a731736dac",
                    "b5118e10-0627-2087-e765-c4b815223ad3",
                  ],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-wrapper-card",
                  selectorGuids: ["3c0a6d36-e926-fe87-1a2b-77a73bcbb43c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                heightValue: 19,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-21-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.is-opacity-0-18",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "c1526763-af6f-d109-cb56-6a5cb876fbe9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-12",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".text-size-regular.text-weight-semibold.txt-color-purple500",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7b7",
                    "08b611aa-3687-13fc-1648-07a731736dac",
                    "b5118e10-0627-2087-e765-c4b815223ad3",
                  ],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-wrapper-card",
                  selectorGuids: ["3c0a6d36-e926-fe87-1a2b-77a73bcbb43c"],
                },
                yValue: -4,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                xValue: 2,
                yValue: 1,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1715683930740,
    },
    "a-22": {
      id: "a-22",
      title: "button-link-hover-arrow-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                heightValue: 13,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-22-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.is-opacity-0-18",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "c1526763-af6f-d109-cb56-6a5cb876fbe9",
                  ],
                },
                value: 0.18,
                unit: "",
              },
            },
            {
              id: "a-22-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-22-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-22-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".text-size-regular.text-weight-semibold.txt-color-purple500",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7b7",
                    "08b611aa-3687-13fc-1648-07a731736dac",
                    "b5118e10-0627-2087-e765-c4b815223ad3",
                  ],
                },
                globalSwatchId: "--purple500",
                rValue: 112,
                bValue: 217,
                gValue: 115,
                aValue: 1,
              },
            },
            {
              id: "a-22-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-wrapper-card",
                  selectorGuids: ["3c0a6d36-e926-fe87-1a2b-77a73bcbb43c"],
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1715684213739,
    },
    "a-23": {
      id: "a-23",
      title: "mouse-click-card",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".text-size-regular.text-weight-semibold.txt-color-purple500",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7b7",
                    "08b611aa-3687-13fc-1648-07a731736dac",
                    "b5118e10-0627-2087-e765-c4b815223ad3",
                  ],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                globalSwatchId: "--purple400",
                rValue: 169,
                bValue: 247,
                gValue: 154,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".text-size-regular.text-weight-semibold.txt-color-purple500",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7b7",
                    "08b611aa-3687-13fc-1648-07a731736dac",
                    "b5118e10-0627-2087-e765-c4b815223ad3",
                  ],
                },
                globalSwatchId: "--black100",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-23-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-stroke",
                  selectorGuids: ["f5f0bd20-406c-ed16-3bba-b4534c8c4abf"],
                },
                globalSwatchId: "--black100",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-embed",
                  selectorGuids: ["d5019a10-eb91-0b13-dc3b-0835e2c8ceda"],
                },
                globalSwatchId: "--black100",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1715685850718,
    },
    "a-24": {
      id: "a-24",
      title: "hero-rotation",
      actionItemGroups: [],
      useFirstGroupAsInitialState: false,
      createdOn: 1715687600432,
    },
    "a-27": {
      id: "a-27",
      title: "drop-menu-open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1715795378701,
    },
    "a-28": {
      id: "a-28",
      title: "drop-menu-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navba-links",
                  selectorGuids: ["72969c83-0543-d491-d8c0-517131d30fe0"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1715795439625,
    },
    "a-29": {
      id: "a-29",
      title: "hero-rotation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "663e06c56841363663ffbc20|2fbc45cc-407c-303a-e6f9-3be2fdafaa3b",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 35000,
                target: {
                  id: "663e06c56841363663ffbc20|2fbc45cc-407c-303a-e6f9-3be2fdafaa3b",
                },
                zValue: 360,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716220143776,
    },
    a: {
      id: "a",
      title: "Navbar 14 menu [Open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-top",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971153"],
                },
                yValue: 8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-bottom",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971150"],
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-bottom",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971150"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-top",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971153"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-middle",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971164"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1626225663494,
    },
    "a-2": {
      id: "a-2",
      title: "Navbar 14 menu [Close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-top",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971153"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-bottom",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971150"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-bottom",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971150"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-top",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971153"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon_line-middle",
                  selectorGuids: ["80743b42-2466-a90a-eaa6-78b3a5971164"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1626226496146,
    },
    "a-32": {
      id: "a-32",
      title: "card-hover-opacity-logo",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.margin-right-8",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "7eb9a456-6f49-e466-591b-a1f56db2dbf3",
                  ],
                },
                value: 0.5,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.margin-right-8",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "7eb9a456-6f49-e466-591b-a1f56db2dbf3",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716303122363,
    },
    "a-33": {
      id: "a-33",
      title: "hover-card-logo-opacity",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-flex.margin-right-8",
                  selectorGuids: [
                    "e506ba88-aea3-3ce3-e3b8-5fad21f8baf4",
                    "7eb9a456-6f49-e466-591b-a1f56db2dbf3",
                  ],
                },
                value: 0.5,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716303199010,
    },
    "a-34": {
      id: "a-34",
      title: "submit-button-hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-embed-xsmall.is-newsletter",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7cf",
                    "fa03ac4e-2afe-c3a8-9d5c-a5c085be2718",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-embed-xsmall.is-newsletter",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7cf",
                    "fa03ac4e-2afe-c3a8-9d5c-a5c085be2718",
                  ],
                },
                value: 0.8,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1716369296379,
    },
    "a-35": {
      id: "a-35",
      title: "submit-button-hover-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-embed-xsmall.is-newsletter",
                  selectorGuids: [
                    "7a430290-1e11-fb0a-7a60-f535b0e8c7cf",
                    "fa03ac4e-2afe-c3a8-9d5c-a5c085be2718",
                  ],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1716369345913,
    },
    "a-37": {
      id: "a-37",
      title: "Autocomplete Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-37-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 31,
              actionItems: [
                {
                  id: "a-37-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|14dae180-9c59-fd26-18ed-5dd703064a67",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-37-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|14dae180-9c59-fd26-18ed-5dd703064a67",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1716781348503,
    },
    "a-38": {
      id: "a-38",
      title: "Chat Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-38-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 31,
              actionItems: [
                {
                  id: "a-38-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|42e544b1-4c31-defa-b70c-492419278622",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-38-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|42e544b1-4c31-defa-b70c-492419278622",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 39,
              actionItems: [
                {
                  id: "a-38-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|42e544b1-4c31-defa-b70c-492419278622",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 41,
              actionItems: [
                {
                  id: "a-38-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|42e544b1-4c31-defa-b70c-492419278622",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-38-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|42e544b1-4c31-defa-b70c-492419278622",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1716781541365,
    },
    "a-39": {
      id: "a-39",
      title: "Accept Reject Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-39-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 38,
              actionItems: [
                {
                  id: "a-39-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|45dc556d-1a50-10ed-9437-493995525c1b",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-39-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "663e06c56841363663ffbc20|45dc556d-1a50-10ed-9437-493995525c1b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1716781680890,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
