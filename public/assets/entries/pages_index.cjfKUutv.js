/* empty css                      */ var js = { exports: {} },
  Il = {},
  Ls = { exports: {} },
  H = {},
  Nd;
function xm() {
  if (Nd) return H;
  Nd = 1;
  var y = Symbol.for("react.element"),
    E = Symbol.for("react.portal"),
    P = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    $ = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    ee = Symbol.for("react.suspense"),
    G = Symbol.for("react.memo"),
    pe = Symbol.for("react.lazy"),
    R = Symbol.iterator;
  function j(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (R && f[R]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var rt = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Le = Object.assign,
    Ae = {};
  function Xe(f, w, I) {
    ((this.props = f),
      (this.context = w),
      (this.refs = Ae),
      (this.updater = I || rt));
  }
  ((Xe.prototype.isReactComponent = {}),
    (Xe.prototype.setState = function (f, w) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, w, "setState");
    }),
    (Xe.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function Ut() {}
  Ut.prototype = Xe.prototype;
  function $t(f, w, I) {
    ((this.props = f),
      (this.context = w),
      (this.refs = Ae),
      (this.updater = I || rt));
  }
  var Pt = ($t.prototype = new Ut());
  ((Pt.constructor = $t), Le(Pt, Xe.prototype), (Pt.isPureReactComponent = !0));
  var Fe = Array.isArray,
    ue = { current: null },
    lt = { current: null },
    it = { transition: null },
    Vt = {
      ReactCurrentDispatcher: ue,
      ReactCurrentCache: lt,
      ReactCurrentBatchConfig: it,
      ReactCurrentOwner: { current: null },
    },
    He = Object.prototype.hasOwnProperty,
    tn = Vt.ReactCurrentOwner;
  function kt(f, w, I) {
    var T,
      V = {},
      K = null,
      ie = null;
    if (w != null)
      for (T in (w.ref !== void 0 && (ie = w.ref),
      w.key !== void 0 && (K = "" + w.key),
      w))
        He.call(w, T) &&
          T !== "key" &&
          T !== "ref" &&
          T !== "__self" &&
          T !== "__source" &&
          (V[T] = w[T]);
    var he = arguments.length - 2;
    if (he === 1) V.children = I;
    else if (1 < he) {
      for (var ne = Array(he), Qe = 0; Qe < he; Qe++)
        ne[Qe] = arguments[Qe + 2];
      V.children = ne;
    }
    if (f && f.defaultProps)
      for (T in ((he = f.defaultProps), he)) V[T] === void 0 && (V[T] = he[T]);
    return {
      $$typeof: y,
      type: f,
      key: K,
      ref: ie,
      props: V,
      _owner: tn.current,
    };
  }
  function Xn(f, w) {
    return {
      $$typeof: y,
      type: f.type,
      key: w,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function Ht(f) {
    return typeof f == "object" && f !== null && f.$$typeof === y;
  }
  function nn(f) {
    var w = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (I) {
        return w[I];
      })
    );
  }
  var ot = /\/+/g;
  function _(f, w) {
    return typeof f == "object" && f !== null && f.key != null
      ? nn("" + f.key)
      : w.toString(36);
  }
  function A() {}
  function M(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (
          (typeof f.status == "string"
            ? f.then(A, A)
            : ((f.status = "pending"),
              f.then(
                function (w) {
                  f.status === "pending" &&
                    ((f.status = "fulfilled"), (f.value = w));
                },
                function (w) {
                  f.status === "pending" &&
                    ((f.status = "rejected"), (f.reason = w));
                },
              )),
          f.status)
        ) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function Z(f, w, I, T, V) {
    var K = typeof f;
    (K === "undefined" || K === "boolean") && (f = null);
    var ie = !1;
    if (f === null) ie = !0;
    else
      switch (K) {
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case y:
            case E:
              ie = !0;
              break;
            case pe:
              return ((ie = f._init), Z(ie(f._payload), w, I, T, V));
          }
      }
    if (ie)
      return (
        (V = V(f)),
        (ie = T === "" ? "." + _(f, 0) : T),
        Fe(V)
          ? ((I = ""),
            ie != null && (I = ie.replace(ot, "$&/") + "/"),
            Z(V, w, I, "", function (Qe) {
              return Qe;
            }))
          : V != null &&
            (Ht(V) &&
              (V = Xn(
                V,
                I +
                  (!V.key || (f && f.key === V.key)
                    ? ""
                    : ("" + V.key).replace(ot, "$&/") + "/") +
                  ie,
              )),
            w.push(V)),
        1
      );
    ie = 0;
    var he = T === "" ? "." : T + ":";
    if (Fe(f))
      for (var ne = 0; ne < f.length; ne++)
        ((T = f[ne]), (K = he + _(T, ne)), (ie += Z(T, w, I, K, V)));
    else if (((ne = j(f)), typeof ne == "function"))
      for (f = ne.call(f), ne = 0; !(T = f.next()).done; )
        ((T = T.value), (K = he + _(T, ne++)), (ie += Z(T, w, I, K, V)));
    else if (K === "object") {
      if (typeof f.then == "function") return Z(M(f), w, I, T, V);
      throw (
        (w = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (w === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : w) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ie;
  }
  function le(f, w, I) {
    if (f == null) return f;
    var T = [],
      V = 0;
    return (
      Z(f, T, "", "", function (K) {
        return w.call(I, K, V++);
      }),
      T
    );
  }
  function Nt(f) {
    if (f._status === -1) {
      var w = f._result;
      ((w = w()),
        w.then(
          function (I) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = I));
          },
          function (I) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = I));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = w)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  function Ge() {
    return new WeakMap();
  }
  function St() {
    return { s: 0, v: void 0, o: null, p: null };
  }
  function We() {}
  var xt =
    typeof reportError == "function"
      ? reportError
      : function (f) {
          console.error(f);
        };
  return (
    (H.Children = {
      map: le,
      forEach: function (f, w, I) {
        le(
          f,
          function () {
            w.apply(this, arguments);
          },
          I,
        );
      },
      count: function (f) {
        var w = 0;
        return (
          le(f, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (f) {
        return (
          le(f, function (w) {
            return w;
          }) || []
        );
      },
      only: function (f) {
        if (!Ht(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    }),
    (H.Component = Xe),
    (H.Fragment = P),
    (H.Profiler = C),
    (H.PureComponent = $t),
    (H.StrictMode = c),
    (H.Suspense = ee),
    (H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vt),
    (H.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (H.cache = function (f) {
      return function () {
        var w = lt.current;
        if (!w) return f.apply(null, arguments);
        var I = w.getCacheForType(Ge);
        ((w = I.get(f)), w === void 0 && ((w = St()), I.set(f, w)), (I = 0));
        for (var T = arguments.length; I < T; I++) {
          var V = arguments[I];
          if (typeof V == "function" || (typeof V == "object" && V !== null)) {
            var K = w.o;
            (K === null && (w.o = K = new WeakMap()),
              (w = K.get(V)),
              w === void 0 && ((w = St()), K.set(V, w)));
          } else
            ((K = w.p),
              K === null && (w.p = K = new Map()),
              (w = K.get(V)),
              w === void 0 && ((w = St()), K.set(V, w)));
        }
        if (w.s === 1) return w.v;
        if (w.s === 2) throw w.v;
        try {
          var ie = f.apply(null, arguments);
          return ((I = w), (I.s = 1), (I.v = ie));
        } catch (he) {
          throw ((ie = w), (ie.s = 2), (ie.v = he), he);
        }
      };
    }),
    (H.cloneElement = function (f, w, I) {
      if (f == null)
        throw Error(
          "The argument must be a React element, but you passed " + f + ".",
        );
      var T = Le({}, f.props),
        V = f.key,
        K = f.ref,
        ie = f._owner;
      if (w != null) {
        if (
          (w.ref !== void 0 && ((K = w.ref), (ie = tn.current)),
          w.key !== void 0 && (V = "" + w.key),
          f.type && f.type.defaultProps)
        )
          var he = f.type.defaultProps;
        for (ne in w)
          He.call(w, ne) &&
            ne !== "key" &&
            ne !== "ref" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (T[ne] = w[ne] === void 0 && he !== void 0 ? he[ne] : w[ne]);
      }
      var ne = arguments.length - 2;
      if (ne === 1) T.children = I;
      else if (1 < ne) {
        he = Array(ne);
        for (var Qe = 0; Qe < ne; Qe++) he[Qe] = arguments[Qe + 2];
        T.children = he;
      }
      return {
        $$typeof: y,
        type: f.type,
        key: V,
        ref: K,
        props: T,
        _owner: ie,
      };
    }),
    (H.createContext = function (f) {
      return (
        (f = {
          $$typeof: $,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = { $$typeof: D, _context: f }),
        (f.Consumer = f)
      );
    }),
    (H.createElement = kt),
    (H.createFactory = function (f) {
      var w = kt.bind(null, f);
      return ((w.type = f), w);
    }),
    (H.createRef = function () {
      return { current: null };
    }),
    (H.forwardRef = function (f) {
      return { $$typeof: b, render: f };
    }),
    (H.isValidElement = Ht),
    (H.lazy = function (f) {
      return { $$typeof: pe, _payload: { _status: -1, _result: f }, _init: Nt };
    }),
    (H.memo = function (f, w) {
      return { $$typeof: G, type: f, compare: w === void 0 ? null : w };
    }),
    (H.startTransition = function (f) {
      var w = it.transition,
        I = new Set();
      it.transition = { _callbacks: I };
      var T = it.transition;
      try {
        var V = f();
        typeof V == "object" &&
          V !== null &&
          typeof V.then == "function" &&
          (I.forEach(function (K) {
            return K(T, V);
          }),
          V.then(We, xt));
      } catch (K) {
        xt(K);
      } finally {
        it.transition = w;
      }
    }),
    (H.unstable_useCacheRefresh = function () {
      return ue.current.useCacheRefresh();
    }),
    (H.use = function (f) {
      return ue.current.use(f);
    }),
    (H.useCallback = function (f, w) {
      return ue.current.useCallback(f, w);
    }),
    (H.useContext = function (f) {
      return ue.current.useContext(f);
    }),
    (H.useDebugValue = function () {}),
    (H.useDeferredValue = function (f, w) {
      return ue.current.useDeferredValue(f, w);
    }),
    (H.useEffect = function (f, w) {
      return ue.current.useEffect(f, w);
    }),
    (H.useId = function () {
      return ue.current.useId();
    }),
    (H.useImperativeHandle = function (f, w, I) {
      return ue.current.useImperativeHandle(f, w, I);
    }),
    (H.useInsertionEffect = function (f, w) {
      return ue.current.useInsertionEffect(f, w);
    }),
    (H.useLayoutEffect = function (f, w) {
      return ue.current.useLayoutEffect(f, w);
    }),
    (H.useMemo = function (f, w) {
      return ue.current.useMemo(f, w);
    }),
    (H.useOptimistic = function (f, w) {
      return ue.current.useOptimistic(f, w);
    }),
    (H.useReducer = function (f, w, I) {
      return ue.current.useReducer(f, w, I);
    }),
    (H.useRef = function (f) {
      return ue.current.useRef(f);
    }),
    (H.useState = function (f) {
      return ue.current.useState(f);
    }),
    (H.useSyncExternalStore = function (f, w, I) {
      return ue.current.useSyncExternalStore(f, w, I);
    }),
    (H.useTransition = function () {
      return ue.current.useTransition();
    }),
    (H.version = "18.3.0-canary-14898b6a9-20240318"),
    H
  );
}
var zd;
function $s() {
  return (zd || ((zd = 1), (Ls.exports = xm())), Ls.exports);
}
var jd;
function _m() {
  if (jd) return Il;
  jd = 1;
  var y = $s(),
    E = Symbol.for("react.element"),
    P = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    C = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  function D($, b, ee) {
    var G,
      pe = {},
      R = null,
      j = null;
    (ee !== void 0 && (R = "" + ee),
      b.key !== void 0 && (R = "" + b.key),
      b.ref !== void 0 && (j = b.ref));
    for (G in b) c.call(b, G) && G !== "key" && G !== "ref" && (pe[G] = b[G]);
    if ($ && $.defaultProps)
      for (G in ((b = $.defaultProps), b)) pe[G] === void 0 && (pe[G] = b[G]);
    return {
      $$typeof: E,
      type: $,
      key: R,
      ref: j,
      props: pe,
      _owner: C.current,
    };
  }
  return ((Il.Fragment = P), (Il.jsx = D), (Il.jsxs = D), Il);
}
var Ld;
function Em() {
  return (Ld || ((Ld = 1), (js.exports = _m())), js.exports);
}
var S = Em(),
  vo = {},
  Rs = { exports: {} },
  ge = {},
  Ts = { exports: {} },
  Os = {},
  Rd;
function Cm() {
  return (
    Rd ||
      ((Rd = 1),
      (function (y) {
        function E(_, A) {
          var M = _.length;
          _.push(A);
          e: for (; 0 < M; ) {
            var Z = (M - 1) >>> 1,
              le = _[Z];
            if (0 < C(le, A)) ((_[Z] = A), (_[M] = le), (M = Z));
            else break e;
          }
        }
        function P(_) {
          return _.length === 0 ? null : _[0];
        }
        function c(_) {
          if (_.length === 0) return null;
          var A = _[0],
            M = _.pop();
          if (M !== A) {
            _[0] = M;
            e: for (var Z = 0, le = _.length, Nt = le >>> 1; Z < Nt; ) {
              var Ge = 2 * (Z + 1) - 1,
                St = _[Ge],
                We = Ge + 1,
                xt = _[We];
              if (0 > C(St, M))
                We < le && 0 > C(xt, St)
                  ? ((_[Z] = xt), (_[We] = M), (Z = We))
                  : ((_[Z] = St), (_[Ge] = M), (Z = Ge));
              else if (We < le && 0 > C(xt, M))
                ((_[Z] = xt), (_[We] = M), (Z = We));
              else break e;
            }
          }
          return A;
        }
        function C(_, A) {
          var M = _.sortIndex - A.sortIndex;
          return M !== 0 ? M : _.id - A.id;
        }
        if (
          ((y.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var D = performance;
          y.unstable_now = function () {
            return D.now();
          };
        } else {
          var $ = Date,
            b = $.now();
          y.unstable_now = function () {
            return $.now() - b;
          };
        }
        var ee = [],
          G = [],
          pe = 1,
          R = null,
          j = 3,
          rt = !1,
          Le = !1,
          Ae = !1,
          Xe = typeof setTimeout == "function" ? setTimeout : null,
          Ut = typeof clearTimeout == "function" ? clearTimeout : null,
          $t = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Pt(_) {
          for (var A = P(G); A !== null; ) {
            if (A.callback === null) c(G);
            else if (A.startTime <= _)
              (c(G), (A.sortIndex = A.expirationTime), E(ee, A));
            else break;
            A = P(G);
          }
        }
        function Fe(_) {
          if (((Ae = !1), Pt(_), !Le))
            if (P(ee) !== null) ((Le = !0), nn());
            else {
              var A = P(G);
              A !== null && ot(Fe, A.startTime - _);
            }
        }
        var ue = !1,
          lt = -1,
          it = 5,
          Vt = -1;
        function He() {
          return !(y.unstable_now() - Vt < it);
        }
        function tn() {
          if (ue) {
            var _ = y.unstable_now();
            Vt = _;
            var A = !0;
            try {
              e: {
                ((Le = !1), Ae && ((Ae = !1), Ut(lt), (lt = -1)), (rt = !0));
                var M = j;
                try {
                  t: {
                    for (
                      Pt(_), R = P(ee);
                      R !== null && !(R.expirationTime > _ && He());
                    ) {
                      var Z = R.callback;
                      if (typeof Z == "function") {
                        ((R.callback = null), (j = R.priorityLevel));
                        var le = Z(R.expirationTime <= _);
                        if (((_ = y.unstable_now()), typeof le == "function")) {
                          ((R.callback = le), Pt(_), (A = !0));
                          break t;
                        }
                        (R === P(ee) && c(ee), Pt(_));
                      } else c(ee);
                      R = P(ee);
                    }
                    if (R !== null) A = !0;
                    else {
                      var Nt = P(G);
                      (Nt !== null && ot(Fe, Nt.startTime - _), (A = !1));
                    }
                  }
                  break e;
                } finally {
                  ((R = null), (j = M), (rt = !1));
                }
                A = void 0;
              }
            } finally {
              A ? kt() : (ue = !1);
            }
          }
        }
        var kt;
        if (typeof $t == "function")
          kt = function () {
            $t(tn);
          };
        else if (typeof MessageChannel < "u") {
          var Xn = new MessageChannel(),
            Ht = Xn.port2;
          ((Xn.port1.onmessage = tn),
            (kt = function () {
              Ht.postMessage(null);
            }));
        } else
          kt = function () {
            Xe(tn, 0);
          };
        function nn() {
          ue || ((ue = !0), kt());
        }
        function ot(_, A) {
          lt = Xe(function () {
            _(y.unstable_now());
          }, A);
        }
        ((y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (y.unstable_continueExecution = function () {
            Le || rt || ((Le = !0), nn());
          }),
          (y.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (it = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (y.unstable_getFirstCallbackNode = function () {
            return P(ee);
          }),
          (y.unstable_next = function (_) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = j;
            }
            var M = j;
            j = A;
            try {
              return _();
            } finally {
              j = M;
            }
          }),
          (y.unstable_pauseExecution = function () {}),
          (y.unstable_requestPaint = function () {}),
          (y.unstable_runWithPriority = function (_, A) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var M = j;
            j = _;
            try {
              return A();
            } finally {
              j = M;
            }
          }),
          (y.unstable_scheduleCallback = function (_, A, M) {
            var Z = y.unstable_now();
            switch (
              (typeof M == "object" && M !== null
                ? ((M = M.delay),
                  (M = typeof M == "number" && 0 < M ? Z + M : Z))
                : (M = Z),
              _)
            ) {
              case 1:
                var le = -1;
                break;
              case 2:
                le = 250;
                break;
              case 5:
                le = 1073741823;
                break;
              case 4:
                le = 1e4;
                break;
              default:
                le = 5e3;
            }
            return (
              (le = M + le),
              (_ = {
                id: pe++,
                callback: A,
                priorityLevel: _,
                startTime: M,
                expirationTime: le,
                sortIndex: -1,
              }),
              M > Z
                ? ((_.sortIndex = M),
                  E(G, _),
                  P(ee) === null &&
                    _ === P(G) &&
                    (Ae ? (Ut(lt), (lt = -1)) : (Ae = !0), ot(Fe, M - Z)))
                : ((_.sortIndex = le), E(ee, _), Le || rt || ((Le = !0), nn())),
              _
            );
          }),
          (y.unstable_shouldYield = He),
          (y.unstable_wrapCallback = function (_) {
            var A = j;
            return function () {
              var M = j;
              j = A;
              try {
                return _.apply(this, arguments);
              } finally {
                j = M;
              }
            };
          }));
      })(Os)),
    Os
  );
}
var Td;
function Pm() {
  return (Td || ((Td = 1), (Ts.exports = Cm())), Ts.exports);
}
var Od;
function Nm() {
  if (Od) return ge;
  Od = 1;
  var y = $s(),
    E = Pm(),
    P = {
      usingClientEntryPoint: !1,
      Events: null,
      Dispatcher: { current: null },
    };
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var C = Object.assign,
    D = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $ = D.ReactCurrentDispatcher,
    b = { pending: !1, data: null, method: null, action: null },
    ee = [],
    G = -1;
  function pe(e) {
    return { current: e };
  }
  function R(e) {
    0 > G || ((e.current = ee[G]), (ee[G] = null), G--);
  }
  function j(e, t) {
    (G++, (ee[G] = e.current), (e.current = t));
  }
  var rt = Symbol.for("react.element"),
    Le = Symbol.for("react.portal"),
    Ae = Symbol.for("react.fragment"),
    Xe = Symbol.for("react.strict_mode"),
    Ut = Symbol.for("react.profiler"),
    $t = Symbol.for("react.provider"),
    Pt = Symbol.for("react.consumer"),
    Fe = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    lt = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    Vt = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    tn = Symbol.for("react.scope"),
    kt = Symbol.for("react.offscreen"),
    Xn = Symbol.for("react.legacy_hidden"),
    Ht = Symbol.for("react.cache"),
    nn = Symbol.iterator;
  function ot(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (nn && e[nn]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = pe(null),
    A = pe(null),
    M = pe(null),
    Z = pe(null),
    le = {
      $$typeof: Fe,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    };
  function Nt(e, t) {
    switch ((j(M, t), j(A, e), j(_, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? fd(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          ((e = fd(e)), (t = dd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (R(_), j(_, t));
  }
  function Ge() {
    (R(_), R(A), R(M));
  }
  function St(e) {
    e.memoizedState !== null && j(Z, e);
    var t = _.current,
      n = dd(t, e.type);
    t !== n && (j(A, e), j(_, n));
  }
  function We(e) {
    (A.current === e && (R(_), R(A)),
      Z.current === e && (R(Z), (le._currentValue = null)));
  }
  var xt = E.unstable_scheduleCallback,
    f = E.unstable_cancelCallback,
    w = E.unstable_shouldYield,
    I = E.unstable_requestPaint,
    T = E.unstable_now,
    V = E.unstable_getCurrentPriorityLevel,
    K = E.unstable_ImmediatePriority,
    ie = E.unstable_UserBlockingPriority,
    he = E.unstable_NormalPriority,
    ne = E.unstable_LowPriority,
    Qe = E.unstable_IdlePriority,
    Yd = E.log,
    Xd = E.unstable_setDisableYieldValue,
    Ar = null,
    Ze = null;
  function Gd(e) {
    if (Ze && typeof Ze.onCommitFiberRoot == "function")
      try {
        Ze.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function rn(e) {
    if (
      (typeof Yd == "function" && Xd(e),
      Ze && typeof Ze.setStrictMode == "function")
    )
      try {
        Ze.setStrictMode(Ar, e);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : qd,
    Zd = Math.log,
    Jd = Math.LN2;
  function qd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zd(e) / Jd) | 0)) | 0);
  }
  var $l = 128,
    Vl = 4194304;
  function Ur(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Hl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes;
    e = e.pingedLanes;
    var i = n & 134217727;
    return (
      i !== 0
        ? ((n = i & ~l),
          n !== 0 ? (r = Ur(n)) : ((e &= i), e !== 0 && (r = Ur(e))))
        : ((n &= ~l), n !== 0 ? (r = Ur(n)) : e !== 0 && (r = Ur(e))),
      r === 0
        ? 0
        : t !== 0 &&
            t !== r &&
            (t & l) === 0 &&
            ((l = r & -r),
            (e = t & -t),
            l >= e || (l === 32 && (e & 4194176) !== 0))
          ? t
          : r
    );
  }
  function bd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hs(e, t) {
    return e.errorRecoveryDisabledLanes & t
      ? 0
      : ((e = e.pendingLanes & -536870913),
        e !== 0 ? e : e & 536870912 ? 536870912 : 0);
  }
  function Ws() {
    var e = $l;
    return (($l <<= 1), ($l & 4194176) === 0 && ($l = 128), e);
  }
  function Qs() {
    var e = Vl;
    return ((Vl <<= 1), (Vl & 62914560) === 0 && (Vl = 4194304), e);
  }
  function wo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ep(e, t, n) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.entangledLanes &= t),
      (e.errorRecoveryDisabledLanes &= t),
      (e.shellSuspendCounter = 0),
      (t = e.entanglements));
    for (var l = e.expirationTimes, i = e.hiddenUpdates; 0 < r; ) {
      var o = 31 - ut(r),
        u = 1 << o;
      ((t[o] = 0), (l[o] = -1));
      var s = i[o];
      if (s !== null)
        for (i[o] = null, o = 0; o < s.length; o++) {
          var p = s[o];
          p !== null && (p.lane &= -536870913);
        }
      r &= ~u;
    }
    n !== 0 && Bs(e, n, 0);
  }
  function Bs(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var r = 31 - ut(t);
    ((e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194218)));
  }
  function Ks(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  function tp(e, t) {
    for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
      var n = 1 << (31 - ut(t));
      ((e.entanglements[1] |= n), (t &= ~n));
    }
  }
  var ae = 0;
  function np(e, t) {
    var n = ae;
    try {
      return ((ae = e), t());
    } finally {
      ae = n;
    }
  }
  function Ys(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  var ko = Object.prototype.hasOwnProperty,
    ln = Math.random().toString(36).slice(2),
    Me = "__reactFiber$" + ln,
    on = "__reactProps$" + ln,
    Wt = "__reactContainer$" + ln,
    So = "__reactEvents$" + ln,
    rp = "__reactListeners$" + ln,
    lp = "__reactHandles$" + ln,
    Xs = "__reactResources$" + ln,
    $r = "__reactMarker$" + ln;
  function xo(e) {
    (delete e[Me], delete e[on], delete e[So], delete e[rp], delete e[lp]);
  }
  function zn(e) {
    var t = e[Me];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Wt] || n[Me])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = gd(e); e !== null; ) {
            if ((n = e[Me])) return n;
            e = gd(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Gn(e) {
    if ((e = e[Me] || e[Wt])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Zn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function un(e) {
    return e[on] || null;
  }
  function Jn(e) {
    var t = e[Xs];
    return (
      t ||
        (t = e[Xs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Pe(e) {
    e[$r] = !0;
  }
  var Gs = new Set(),
    Zs = {};
  function jn(e, t) {
    (qn(e, t), qn(e + "Capture", t));
  }
  function qn(e, t) {
    for (Zs[e] = t, e = 0; e < t.length; e++) Gs.add(t[e]);
  }
  var Qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ip = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Js = {},
    qs = {};
  function op(e) {
    return ko.call(qs, e)
      ? !0
      : ko.call(Js, e)
        ? !1
        : ip.test(e)
          ? (qs[e] = !0)
          : ((Js[e] = !0), !1);
  }
  function _o(e, t, n) {
    if (op(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Eo(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Bt(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  var Co;
  function Vr(e) {
    if (Co === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Co = (t && t[1]) || "";
      }
    return (
      `
` +
      Co +
      e
    );
  }
  var Po = !1;
  function No(e, t) {
    if (!e || Po) return "";
    Po = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var r = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var x = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(x.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(x, []);
              } catch (g) {
                var m = g;
              }
              Reflect.construct(e, [], x);
            } else {
              try {
                x.call();
              } catch (g) {
                m = g;
              }
              e.call(x.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (g) {
              m = g;
            }
            (x = e()) &&
              typeof x.catch == "function" &&
              x.catch(function () {});
          }
        } catch (g) {
          if (g && m && typeof g.stack == "string") return [g.stack, m.stack];
        }
        return [null, null];
      },
    };
    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var l = Object.getOwnPropertyDescriptor(
      r.DetermineComponentFrameRoot,
      "name",
    );
    l &&
      l.configurable &&
      Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    try {
      var i = r.DetermineComponentFrameRoot(),
        o = i[0],
        u = i[1];
      if (o && u) {
        var s = o.split(`
`),
          p = u.split(`
`);
        for (
          l = r = 0;
          r < s.length && !s[r].includes("DetermineComponentFrameRoot");
        )
          r++;
        for (; l < p.length && !p[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (r === s.length || l === p.length)
          for (
            r = s.length - 1, l = p.length - 1;
            1 <= r && 0 <= l && s[r] !== p[l];
          )
            l--;
        for (; 1 <= r && 0 <= l; r--, l--)
          if (s[r] !== p[l]) {
            if (r !== 1 || l !== 1)
              do
                if ((r--, l--, 0 > l || s[r] !== p[l])) {
                  var v =
                    `
` + s[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= r && 0 <= l);
            break;
          }
      }
    } finally {
      ((Po = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? Vr(n) : "";
  }
  function up(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Vr(e.type);
      case 16:
        return Vr("Lazy");
      case 13:
        return Vr("Suspense");
      case 19:
        return Vr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = No(e.type, !1)), e);
      case 11:
        return ((e = No(e.type.render, !1)), e);
      case 1:
        return ((e = No(e.type, !0)), e);
      default:
        return "";
    }
  }
  function bs(e) {
    try {
      var t = "";
      do ((t += up(e)), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var sp = Symbol.for("react.client.reference");
  function zo(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === sp ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ae:
        return "Fragment";
      case Le:
        return "Portal";
      case Ut:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case lt:
        return "Suspense";
      case it:
        return "SuspenseList";
      case Ht:
        return "Cache";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $t:
          return (e._context.displayName || "Context") + ".Provider";
        case Fe:
          return (e.displayName || "Context") + ".Consumer";
        case ue:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Vt:
          return (
            (t = e.displayName || null),
            t !== null ? t : zo(e.type) || "Memo"
          );
        case He:
          ((t = e._payload), (e = e._init));
          try {
            return zo(e(t));
          } catch {}
      }
    return null;
  }
  function ap(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 26:
      case 27:
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return zo(t);
      case 8:
        return t === Xe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function st(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ea(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function cp(e) {
    var t = ea(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((r = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Wl(e) {
    e._valueTracker || (e._valueTracker = cp(e));
  }
  function ta(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ea(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ql(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var fp = /[\n"\\]/g;
  function at(e) {
    return e.replace(fp, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function jo(e, t, n, r, l, i, o, u) {
    ((e.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.type = o)
        : e.removeAttribute("type"),
      t != null
        ? o === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + st(t))
          : e.value !== "" + st(t) && (e.value = "" + st(t))
        : (o !== "submit" && o !== "reset") || e.removeAttribute("value"),
      t != null
        ? Lo(e, o, st(t))
        : n != null
          ? Lo(e, o, st(n))
          : r != null && e.removeAttribute("value"),
      l == null && i != null && (e.defaultChecked = !!i),
      l != null &&
        (e.checked = l && typeof l != "function" && typeof l != "symbol"),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (e.name = "" + st(u))
        : e.removeAttribute("name"));
  }
  function na(e, t, n, r, l, i, o, u) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || n != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      ((n = n != null ? "" + st(n) : ""),
        (t = t != null ? "" + st(t) : n),
        u || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = r ?? l),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = u ? e.checked : !!r),
      (e.defaultChecked = !!r),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.name = o));
  }
  function Lo(e, t, n) {
    (t === "number" && Ql(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  var Hr = Array.isArray;
  function bn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + st(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ra(e, t, n) {
    if (
      t != null &&
      ((t = "" + st(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + st(n) : "";
  }
  function la(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(c(92));
        if (Hr(r)) {
          if (1 < r.length) throw Error(c(93));
          r = r[0];
        }
        n = r;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = st(t)),
      (e.defaultValue = n),
      (r = e.textContent),
      r === n && r !== "" && r !== null && (e.value = r));
  }
  var Bl;
  function ia(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Bl = Bl || document.createElement("div"),
          Bl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bl.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  }
  var oa = ia;
  typeof MSApp < "u" &&
    MSApp.execUnsafeLocalFunction &&
    (oa = function (e, t) {
      return MSApp.execUnsafeLocalFunction(function () {
        return ia(e, t);
      });
    });
  var ua = oa;
  function er(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function sa(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : r
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || dp.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function aa(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var r in n)
        !n.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""));
      for (var l in t)
        ((r = t[l]), t.hasOwnProperty(l) && n[l] !== r && sa(e, l, r));
    } else for (var i in t) t.hasOwnProperty(i) && sa(e, i, t[i]);
  }
  function ca(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pp = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Ro = null;
  function To(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var tr = null,
    nr = null;
  function fa(e) {
    var t = Gn(e);
    if (t && (e = t.stateNode)) {
      var n = un(e);
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (jo(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + at("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = un(r);
                if (!l) throw Error(c(90));
                jo(
                  r,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((r = n[t]), r.form === e.form && ta(r));
          }
          break e;
        case "textarea":
          ra(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && bn(e, !!n.multiple, t, !1));
      }
    }
  }
  function da(e) {
    tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
  }
  function pa() {
    if (tr) {
      var e = tr,
        t = nr;
      if (((nr = tr = null), fa(e), t)) for (e = 0; e < t.length; e++) fa(t[e]);
    }
  }
  function Ln(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ha(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ma(e) {
    if (Ln(e) !== e) throw Error(c(188));
  }
  function hp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Ln(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (ma(l), e);
          if (i === r) return (ma(l), t);
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            ((o = !0), (n = l), (r = i));
            break;
          }
          if (u === r) {
            ((o = !0), (r = l), (n = i));
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function ya(e) {
    return ((e = hp(e)), e !== null ? ga(e) : null);
  }
  function ga(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = ga(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var sn = {},
    Re = pe(sn),
    Be = pe(!1),
    an = sn;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ue(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kl() {
    (R(Be), R(Re));
  }
  function va(e, t, n) {
    if (Re.current !== sn) throw Error(c(168));
    (j(Re, t), j(Be, n));
  }
  function wa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(c(108, ap(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Yl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        sn),
      (an = Re.current),
      j(Re, e),
      j(Be, Be.current),
      !0
    );
  }
  function ka(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(c(169));
    (n
      ? ((e = wa(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        R(Be),
        R(Re),
        j(Re, e))
      : R(Be),
      j(Be, n));
  }
  function mp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == "function" ? Object.is : mp,
    rr = [],
    lr = 0,
    Xl = null,
    Gl = 0,
    ft = [],
    dt = 0,
    Tn = null,
    Kt = 1,
    Yt = "";
  function On(e, t) {
    ((rr[lr++] = Gl), (rr[lr++] = Xl), (Xl = e), (Gl = t));
  }
  function Sa(e, t, n) {
    ((ft[dt++] = Kt), (ft[dt++] = Yt), (ft[dt++] = Tn), (Tn = e));
    var r = Kt;
    e = Yt;
    var l = 32 - ut(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Kt = (1 << (32 - ut(t) + l)) | (n << l) | r),
        (Yt = i + e));
    } else ((Kt = (1 << i) | (n << l) | r), (Yt = e));
  }
  function Zl(e) {
    e.return !== null && (On(e, 1), Sa(e, 1, 0));
  }
  function Oo(e) {
    for (; e === Xl; )
      ((Xl = rr[--lr]), (rr[lr] = null), (Gl = rr[--lr]), (rr[lr] = null));
    for (; e === Tn; )
      ((Tn = ft[--dt]),
        (ft[dt] = null),
        (Yt = ft[--dt]),
        (ft[dt] = null),
        (Kt = ft[--dt]),
        (ft[dt] = null));
  }
  var te = null,
    Y = null,
    W = !1,
    _t = null,
    zt = !1;
  function Jl(e, t) {
    var n = tt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ir(e, t) {
    t.flags = (t.flags & -4097) | 2;
  }
  function xa(e, t) {
    return (
      (t = rm(t, e.type, e.pendingProps, zt)),
      t !== null
        ? ((e.stateNode = t), (te = e), (Y = Tl(t.firstChild)), (zt = !1), !0)
        : !1
    );
  }
  function _a(e, t) {
    return (
      (t = lm(t, e.pendingProps, zt)),
      t !== null ? ((e.stateNode = t), (te = e), (Y = null), !0) : !1
    );
  }
  function Ea(e, t) {
    e: {
      var n = t;
      for (t = zt; n.nodeType !== 8; ) {
        if (!t) {
          t = null;
          break e;
        }
        if (((n = gt(n)), n === null)) {
          t = null;
          break e;
        }
      }
      t = n;
    }
    return t !== null
      ? ((n = Tn !== null ? { id: Kt, overflow: Yt } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 536870912,
        }),
        (n = tt(18, null, null, 0)),
        (n.stateNode = t),
        (n.return = e),
        (e.child = n),
        (te = e),
        (Y = null),
        !0)
      : !1;
  }
  function Dn(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function cn() {
    throw Error(c(418));
  }
  function Ca(e) {
    for (te = e.return; te; )
      switch (te.tag) {
        case 3:
        case 27:
          zt = !0;
          return;
        case 5:
        case 13:
          zt = !1;
          return;
        default:
          te = te.return;
      }
  }
  function Wr(e) {
    if (e !== te) return !1;
    if (!W) return (Ca(e), (W = !0), !1);
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || vs(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && (t = Y))
    )
      if (Dn(e)) (Pa(), cn());
      else for (; t; ) (Jl(e, t), (t = gt(t)));
    if ((Ca(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Y = gt(e);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Y = null;
      }
    } else Y = te ? gt(e.stateNode) : null;
    return !0;
  }
  function Pa() {
    for (var e = Y; e; ) e = gt(e);
  }
  function or() {
    ((Y = te = null), (W = !1));
  }
  function Do(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  var pt = [],
    ur = 0,
    Fo = 0;
  function ql() {
    for (var e = ur, t = (Fo = ur = 0); t < e; ) {
      var n = pt[t];
      pt[t++] = null;
      var r = pt[t];
      pt[t++] = null;
      var l = pt[t];
      pt[t++] = null;
      var i = pt[t];
      if (((pt[t++] = null), r !== null && l !== null)) {
        var o = r.pending;
        (o === null ? (l.next = l) : ((l.next = o.next), (o.next = l)),
          (r.pending = l));
      }
      i !== 0 && Na(n, l, i);
    }
  }
  function bl(e, t, n, r) {
    ((pt[ur++] = e),
      (pt[ur++] = t),
      (pt[ur++] = n),
      (pt[ur++] = r),
      (Fo |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r));
  }
  function Mo(e, t, n, r) {
    return (bl(e, t, n, r), ei(e));
  }
  function fn(e, t) {
    return (bl(e, null, null, t), ei(e));
  }
  function Na(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      ((i.childLanes |= n),
        (r = i.alternate),
        r !== null && (r.childLanes |= n),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = i),
        (i = i.return));
    l &&
      t !== null &&
      e.tag === 3 &&
      ((i = e.stateNode),
      (l = 31 - ut(n)),
      (i = i.hiddenUpdates),
      (e = i[l]),
      e === null ? (i[l] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function ei(e) {
    Uu();
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = null,
    sr = null,
    Io = !1,
    ni = !1,
    Ao = !1,
    ar = 0;
  function Je(e) {
    (e !== sr &&
      e.next === null &&
      (sr === null ? (ti = sr = e) : (sr = sr.next = e)),
      (ni = !0),
      Io || ((Io = !0), ja(gp)));
  }
  function Fn(e) {
    if (!Ao && ni) {
      var t = null;
      Ao = !0;
      do
        for (var n = !1, r = ti; r !== null; ) {
          if (!e || r.tag === 0) {
            var l = J,
              i = Hl(r, r === oe ? l : 0);
            if ((i & 3) !== 0)
              try {
                if (((n = !0), (l = r), (Q & 6) !== 0)) throw Error(c(327));
                if (!zr()) {
                  var o = Ai(l, i);
                  if (l.tag !== 0 && o === 2) {
                    var u = i,
                      s = Hs(l, u);
                    s !== 0 && ((i = s), (o = af(l, u, s)));
                  }
                  if (o === 1)
                    throw ((u = Er), Kn(l, 0), It(l, i, 0), Je(l), u);
                  o === 6
                    ? It(l, i, Ye)
                    : ((l.finishedWork = l.current.alternate),
                      (l.finishedLanes = i),
                      Iu(l, Mt, dl, Pr, Ye));
                }
                Je(l);
              } catch (p) {
                t === null ? (t = [p]) : t.push(p);
              }
          }
          r = r.next;
        }
      while (n);
      if (((Ao = !1), t !== null)) {
        if (1 < t.length) {
          if (typeof AggregateError == "function") throw new AggregateError(t);
          for (e = 1; e < t.length; e++) ja(yp.bind(null, t[e]));
        }
        throw t[0];
      }
    }
  }
  function yp(e) {
    throw e;
  }
  function gp() {
    ni = Io = !1;
    for (var e = T(), t = null, n = ti; n !== null; ) {
      var r = n.next;
      if (ar !== 0 && bh()) {
        var l = n,
          i = ar;
        ((l.pendingLanes |= 2),
          (l.entangledLanes |= 2),
          (l.entanglements[1] |= i));
      }
      ((l = za(n, e)),
        l === 0
          ? ((n.next = null),
            t === null ? (ti = r) : (t.next = r),
            r === null && (sr = t))
          : ((t = n), (l & 3) !== 0 && (ni = !0)),
        (n = r));
    }
    ((ar = 0), Fn(!1));
  }
  function za(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;
    ) {
      var o = 31 - ut(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = bd(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
    if (
      ((t = oe),
      (n = J),
      (n = Hl(e, e === t ? n : 0)),
      (r = e.callbackNode),
      n === 0 || (e === t && ye === 2) || e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && f(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) !== 0)
      return (
        r !== null && r !== null && f(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    if (((t = n & -n), t === e.callbackPriority)) return t;
    switch ((r !== null && f(r), Ys(n))) {
      case 2:
        n = K;
        break;
      case 8:
        n = ie;
        break;
      case 32:
        n = he;
        break;
      case 268435456:
        n = Qe;
        break;
      default:
        n = he;
    }
    return (
      (r = sf.bind(null, e)),
      (n = xt(n, r)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  function ja(e) {
    tm(function () {
      (Q & 6) !== 0 ? xt(K, e) : e();
    });
  }
  function Uo() {
    return (ar === 0 && (ar = Ws()), ar);
  }
  var Qr = null,
    $o = 0,
    cr = 0,
    fr = null;
  function vp(e, t) {
    if (Qr === null) {
      var n = (Qr = []);
      (($o = 0),
        (cr = Uo()),
        (fr = {
          status: "pending",
          value: void 0,
          then: function (r) {
            n.push(r);
          },
        }));
    }
    return ($o++, t.then(La, La), t);
  }
  function La() {
    if (Qr !== null && --$o === 0) {
      fr !== null && (fr.status = "fulfilled");
      var e = Qr;
      ((Qr = null), (cr = 0), (fr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wp(e, t) {
    var n = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((r.status = "fulfilled"), (r.value = t));
          for (var l = 0; l < n.length; l++) (0, n[l])(t);
        },
        function (l) {
          for (r.status = "rejected", r.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        },
      ),
      r
    );
  }
  var dn = !1;
  function ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vo(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function jt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Q & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        (t = ei(e)),
        Na(e, null, n),
        t
      );
    }
    return (bl(e, r, t, n), ei(e));
  }
  function Br(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ks(e, n));
    }
  }
  function Ra(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Ho = !1;
  function Kr() {
    if (Ho) {
      var e = fr;
      if (e !== null) throw e;
    }
  }
  function Yr(e, t, n, r) {
    Ho = !1;
    var l = e.updateQueue;
    dn = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      ((s.next = null), o === null ? (i = p) : (o.next = p), (o = s));
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (u = v.lastBaseUpdate),
        u !== o &&
          (u === null ? (v.firstBaseUpdate = p) : (u.next = p),
          (v.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((o = 0), (v = p = s = null), (u = i));
      do {
        var m = u.lane & -536870913,
          g = m !== u.lane;
        if (g ? (J & m) === m : (r & m) === m) {
          (m !== 0 && m === cr && (Ho = !0),
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var z = e,
              U = u;
            m = t;
            var de = n;
            switch (U.tag) {
              case 1:
                if (((z = U.payload), typeof z == "function")) {
                  x = z.call(de, x, m);
                  break e;
                }
                x = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = U.payload),
                  (m = typeof z == "function" ? z.call(de, x, m) : z),
                  m == null)
                )
                  break e;
                x = C({}, x, m);
                break e;
              case 2:
                dn = !0;
            }
          }
          ((m = u.callback),
            m !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = l.callbacks),
              g === null ? (l.callbacks = [m]) : g.push(m)));
        } else
          ((g = {
            lane: m,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            v === null ? ((p = v = g), (s = x)) : (v = v.next = g),
            (o |= m));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((g = u),
            (u = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null));
        }
      } while (!0);
      (v === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = v),
        i === null && (l.shared.lanes = 0),
        (vn |= o),
        (e.lanes = o),
        (e.memoizedState = x));
    }
  }
  function Ta(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Oa(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ta(n[e], t);
  }
  function Xr(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!ko.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  var li = Error(c(460)),
    Da = Error(c(474)),
    Wo = { then: function () {} };
  function Fa(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function ii() {}
  function Ma(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ii, ii), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === li ? Error(c(483)) : e);
      default:
        if (typeof t.status == "string") t.then(ii, ii);
        else {
          if (((e = oe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "fulfilled"), (l.value = r));
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "rejected"), (l.reason = r));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === li ? Error(c(483)) : e);
        }
        throw ((Gr = t), li);
    }
  }
  var Gr = null;
  function Ia() {
    if (Gr === null) throw Error(c(459));
    var e = Gr;
    return ((Gr = null), e);
  }
  var dr = null,
    Zr = 0;
  function oi(e) {
    var t = Zr;
    return ((Zr += 1), dr === null && (dr = []), Ma(dr, e, t));
  }
  function kp(e, t, n, r) {
    function l(u) {
      var s = o.refs;
      u === null ? delete s[i] : (s[i] = u);
    }
    if (((e = n._owner), !e))
      throw Error(typeof r != "string" ? c(284) : c(290, r));
    if (e.tag !== 1) throw Error(c(309));
    var i = "" + r,
      o = e.stateNode;
    if (!o) throw Error(c(147, i));
    return t !== null &&
      t.ref !== null &&
      typeof t.ref == "function" &&
      t.ref._stringRef === i
      ? t.ref
      : ((l._stringRef = i), l);
  }
  function Jr(e, t, n, r) {
    var l = r.ref;
    ((e =
      l !== null && typeof l != "function" && typeof l != "object"
        ? kp(e, t, r, l)
        : l),
      (n.ref = e));
  }
  function ui(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        c(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Aa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ua(e) {
    function t(d, a) {
      if (e) {
        var h = d.deletions;
        h === null ? ((d.deletions = [a]), (d.flags |= 16)) : h.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) (t(d, a), (a = a.sibling));
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        (a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling));
      return d;
    }
    function l(d, a) {
      return ((d = kn(d, a)), (d.index = 0), (d.sibling = null), d);
    }
    function i(d, a, h) {
      return (
        (d.index = h),
        e
          ? ((h = d.alternate),
            h !== null
              ? ((h = h.index), h < a ? ((d.flags |= 33554434), a) : h)
              : ((d.flags |= 33554434), a))
          : ((d.flags |= 1048576), a)
      );
    }
    function o(d) {
      return (e && d.alternate === null && (d.flags |= 33554434), d);
    }
    function u(d, a, h, k) {
      return a === null || a.tag !== 6
        ? ((a = Hu(h, d.mode, k)), (a.return = d), a)
        : ((a = l(a, h)), (a.return = d), a);
    }
    function s(d, a, h, k) {
      var N = h.type;
      return N === Ae
        ? v(d, a, h.props.children, k, h.key)
        : a !== null &&
            (a.elementType === N ||
              (typeof N == "object" &&
                N !== null &&
                N.$$typeof === He &&
                Aa(N) === a.type))
          ? ((k = l(a, h.props)), Jr(d, a, k, h), (k.return = d), k)
          : ((k = $i(h.type, h.key, h.props, null, d.mode, k)),
            Jr(d, a, k, h),
            (k.return = d),
            k);
    }
    function p(d, a, h, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== h.containerInfo ||
        a.stateNode.implementation !== h.implementation
        ? ((a = Wu(h, d.mode, k)), (a.return = d), a)
        : ((a = l(a, h.children || [])), (a.return = d), a);
    }
    function v(d, a, h, k, N) {
      return a === null || a.tag !== 7
        ? ((a = Yn(h, d.mode, k, N)), (a.return = d), a)
        : ((a = l(a, h)), (a.return = d), a);
    }
    function x(d, a, h) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = Hu("" + a, d.mode, h)), (a.return = d), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case rt:
            return (
              (h = $i(a.type, a.key, a.props, null, d.mode, h)),
              Jr(d, null, h, a),
              (h.return = d),
              h
            );
          case Le:
            return ((a = Wu(a, d.mode, h)), (a.return = d), a);
          case He:
            var k = a._init;
            return x(d, k(a._payload), h);
        }
        if (Hr(a) || ot(a))
          return ((a = Yn(a, d.mode, h, null)), (a.return = d), a);
        if (typeof a.then == "function") return x(d, oi(a), h);
        if (a.$$typeof === Fe) return x(d, Pi(d, a, h), h);
        ui(d, a);
      }
      return null;
    }
    function m(d, a, h, k) {
      var N = a !== null ? a.key : null;
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return N !== null ? null : u(d, a, "" + h, k);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case rt:
            return h.key === N ? s(d, a, h, k) : null;
          case Le:
            return h.key === N ? p(d, a, h, k) : null;
          case He:
            return ((N = h._init), m(d, a, N(h._payload), k));
        }
        if (Hr(h) || ot(h)) return N !== null ? null : v(d, a, h, k, null);
        if (typeof h.then == "function") return m(d, a, oi(h), k);
        if (h.$$typeof === Fe) return m(d, a, Pi(d, h, k), k);
        ui(d, h);
      }
      return null;
    }
    function g(d, a, h, k, N) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((d = d.get(h) || null), u(a, d, "" + k, N));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case rt:
            return (
              (d = d.get(k.key === null ? h : k.key) || null),
              s(a, d, k, N)
            );
          case Le:
            return (
              (d = d.get(k.key === null ? h : k.key) || null),
              p(a, d, k, N)
            );
          case He:
            var L = k._init;
            return g(d, a, h, L(k._payload), N);
        }
        if (Hr(k) || ot(k))
          return ((d = d.get(h) || null), v(a, d, k, N, null));
        if (typeof k.then == "function") return g(d, a, h, oi(k), N);
        if (k.$$typeof === Fe) return g(d, a, h, Pi(a, k, N), N);
        ui(a, k);
      }
      return null;
    }
    function z(d, a, h, k) {
      for (
        var N = null, L = null, O = a, F = (a = 0), je = null;
        O !== null && F < h.length;
        F++
      ) {
        O.index > F ? ((je = O), (O = null)) : (je = O.sibling);
        var q = m(d, O, h[F], k);
        if (q === null) {
          O === null && (O = je);
          break;
        }
        (e && O && q.alternate === null && t(d, O),
          (a = i(q, a, F)),
          L === null ? (N = q) : (L.sibling = q),
          (L = q),
          (O = je));
      }
      if (F === h.length) return (n(d, O), W && On(d, F), N);
      if (O === null) {
        for (; F < h.length; F++)
          ((O = x(d, h[F], k)),
            O !== null &&
              ((a = i(O, a, F)),
              L === null ? (N = O) : (L.sibling = O),
              (L = O)));
        return (W && On(d, F), N);
      }
      for (O = r(d, O); F < h.length; F++)
        ((je = g(O, d, F, h[F], k)),
          je !== null &&
            (e &&
              je.alternate !== null &&
              O.delete(je.key === null ? F : je.key),
            (a = i(je, a, F)),
            L === null ? (N = je) : (L.sibling = je),
            (L = je)));
      return (
        e &&
          O.forEach(function (Nn) {
            return t(d, Nn);
          }),
        W && On(d, F),
        N
      );
    }
    function U(d, a, h, k) {
      var N = ot(h);
      if (typeof N != "function") throw Error(c(150));
      if (((h = N.call(h)), h == null)) throw Error(c(151));
      for (
        var L = (N = null), O = a, F = (a = 0), je = null, q = h.next();
        O !== null && !q.done;
        F++, q = h.next()
      ) {
        O.index > F ? ((je = O), (O = null)) : (je = O.sibling);
        var Nn = m(d, O, q.value, k);
        if (Nn === null) {
          O === null && (O = je);
          break;
        }
        (e && O && Nn.alternate === null && t(d, O),
          (a = i(Nn, a, F)),
          L === null ? (N = Nn) : (L.sibling = Nn),
          (L = Nn),
          (O = je));
      }
      if (q.done) return (n(d, O), W && On(d, F), N);
      if (O === null) {
        for (; !q.done; F++, q = h.next())
          ((q = x(d, q.value, k)),
            q !== null &&
              ((a = i(q, a, F)),
              L === null ? (N = q) : (L.sibling = q),
              (L = q)));
        return (W && On(d, F), N);
      }
      for (O = r(d, O); !q.done; F++, q = h.next())
        ((q = g(O, d, F, q.value, k)),
          q !== null &&
            (e && q.alternate !== null && O.delete(q.key === null ? F : q.key),
            (a = i(q, a, F)),
            L === null ? (N = q) : (L.sibling = q),
            (L = q)));
      return (
        e &&
          O.forEach(function (Sm) {
            return t(d, Sm);
          }),
        W && On(d, F),
        N
      );
    }
    function de(d, a, h, k) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === Ae &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case rt:
            e: {
              for (var N = h.key, L = a; L !== null; ) {
                if (L.key === N) {
                  if (((N = h.type), N === Ae)) {
                    if (L.tag === 7) {
                      (n(d, L.sibling),
                        (a = l(L, h.props.children)),
                        (a.return = d),
                        (d = a));
                      break e;
                    }
                  } else if (
                    L.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === He &&
                      Aa(N) === L.type)
                  ) {
                    (n(d, L.sibling),
                      (a = l(L, h.props)),
                      Jr(d, L, a, h),
                      (a.return = d),
                      (d = a));
                    break e;
                  }
                  n(d, L);
                  break;
                } else t(d, L);
                L = L.sibling;
              }
              h.type === Ae
                ? ((a = Yn(h.props.children, d.mode, k, h.key)),
                  (a.return = d),
                  (d = a))
                : ((k = $i(h.type, h.key, h.props, null, d.mode, k)),
                  Jr(d, a, k, h),
                  (k.return = d),
                  (d = k));
            }
            return o(d);
          case Le:
            e: {
              for (L = h.key; a !== null; ) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === h.containerInfo &&
                    a.stateNode.implementation === h.implementation
                  ) {
                    (n(d, a.sibling),
                      (a = l(a, h.children || [])),
                      (a.return = d),
                      (d = a));
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              ((a = Wu(h, d.mode, k)), (a.return = d), (d = a));
            }
            return o(d);
          case He:
            return ((L = h._init), de(d, a, L(h._payload), k));
        }
        if (Hr(h)) return z(d, a, h, k);
        if (ot(h)) return U(d, a, h, k);
        if (typeof h.then == "function") return de(d, a, oi(h), k);
        if (h.$$typeof === Fe) return de(d, a, Pi(d, h, k), k);
        ui(d, h);
      }
      return (typeof h == "string" && h !== "") || typeof h == "number"
        ? ((h = "" + h),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, h)), (a.return = d), (d = a))
            : (n(d, a), (a = Hu(h, d.mode, k)), (a.return = d), (d = a)),
          o(d))
        : n(d, a);
    }
    return function (d, a, h, k) {
      return ((Zr = 0), (d = de(d, a, h, k)), (dr = null), d);
    };
  }
  var Mn = Ua(!0),
    $a = Ua(!1),
    pr = pe(null),
    si = pe(0);
  function Va(e, t) {
    ((e = qt), j(si, e), j(pr, t), (qt = e | t.baseLanes));
  }
  function ai() {
    (j(si, qt), j(pr, pr.current));
  }
  function Qo() {
    ((qt = si.current), R(pr), R(si));
  }
  var Lt = pe(null),
    Rt = null;
  function pn(e) {
    var t = e.alternate;
    (j(_e, _e.current & 1),
      j(Lt, e),
      Rt === null &&
        (t === null || pr.current !== null || t.memoizedState !== null) &&
        (Rt = e));
  }
  function Bo(e) {
    if (e.tag === 22) {
      if ((j(_e, _e.current), j(Lt, e), Rt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Rt = e);
      }
    } else hn();
  }
  function hn() {
    (j(_e, _e.current), j(Lt, Lt.current));
  }
  function In(e) {
    (R(Lt), Rt === e && (Rt = null), R(_e));
  }
  var _e = pe(0);
  function ci(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var hr = D.ReactCurrentDispatcher,
    mr = D.ReactCurrentBatchConfig,
    An = 0,
    X = null,
    ce = null,
    ve = null,
    fi = !1,
    yr = !1,
    Un = !1,
    di = 0,
    qr = 0,
    gr = null,
    Sp = 0;
  function Ee() {
    throw Error(c(321));
  }
  function Ko(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function pi(e, t, n, r, l, i) {
    return (
      (An = i),
      (X = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (hr.current = e === null || e.memoizedState === null ? tl : nl),
      (Un = !1),
      (e = n(r, l)),
      (Un = !1),
      yr && (e = Wa(t, n, r, l)),
      Ha(),
      e
    );
  }
  function Ha() {
    hr.current = mn;
    var e = ce !== null && ce.next !== null;
    if (((An = 0), (ve = ce = X = null), (fi = !1), (qr = 0), (gr = null), e))
      throw Error(c(300));
  }
  function Wa(e, t, n, r) {
    X = e;
    var l = 0;
    do {
      if ((yr && (gr = null), (qr = 0), (yr = !1), 25 <= l))
        throw Error(c(301));
      ((l += 1), (ve = ce = null), (e.updateQueue = null), (hr.current = rl));
      var i = t(n, r);
    } while (yr);
    return i;
  }
  function xp() {
    var e = hr.current.useState()[0];
    return typeof e.then == "function" ? br(e) : e;
  }
  function hi() {
    var e = di !== 0;
    return ((di = 0), e);
  }
  function Yo(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Xo(e) {
    if (fi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      fi = !1;
    }
    ((An = 0), (ve = ce = X = null), (yr = !1), (qr = di = 0), (gr = null));
  }
  function Ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ve === null ? (X.memoizedState = ve = e) : (ve = ve.next = e), ve);
  }
  function Ce() {
    if (ce === null) {
      var e = X.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ce.next;
    var t = ve === null ? X.memoizedState : ve.next;
    if (t !== null) ((ve = t), (ce = e));
    else {
      if (e === null)
        throw X.alternate === null ? Error(c(467)) : Error(c(310));
      ((ce = e),
        (e = {
          memoizedState: ce.memoizedState,
          baseState: ce.baseState,
          baseQueue: ce.baseQueue,
          queue: ce.queue,
          next: null,
        }),
        ve === null ? (X.memoizedState = ve = e) : (ve = ve.next = e));
    }
    return ve;
  }
  var Go;
  Go = function () {
    return { lastEffect: null, events: null, stores: null };
  };
  function br(e) {
    var t = qr;
    return (
      (qr += 1),
      gr === null && (gr = []),
      (e = Ma(gr, e, t)),
      X.alternate === null &&
        (ve === null ? X.memoizedState === null : ve.next === null) &&
        (hr.current = tl),
      e
    );
  }
  function mi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return br(e);
      if (e.$$typeof === Fe) return Oe(e);
    }
    throw Error(c(438, String(e)));
  }
  function $n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zo(e) {
    var t = Ce();
    return Jo(t, ce, e);
  }
  function Jo(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(c(311));
    r.lastRenderedReducer = n;
    var l = e.baseQueue,
      i = r.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = i.next), (i.next = o));
      }
      ((t.baseQueue = l = i), (r.pending = null));
    }
    if (((i = e.baseState), l === null)) e.memoizedState = i;
    else {
      t = l.next;
      var u = (o = null),
        s = null,
        p = t,
        v = !1;
      do {
        var x = p.lane & -536870913;
        if (x !== p.lane ? (J & x) === x : (An & x) === x) {
          var m = p.revertLane;
          if (m === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: p.action,
                  hasEagerState: p.hasEagerState,
                  eagerState: p.eagerState,
                  next: null,
                }),
              x === cr && (v = !0));
          else if ((An & m) === m) {
            ((p = p.next), m === cr && (v = !0));
            continue;
          } else
            ((x = {
              lane: 0,
              revertLane: p.revertLane,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
              s === null ? ((u = s = x), (o = i)) : (s = s.next = x),
              (X.lanes |= m),
              (vn |= m));
          ((x = p.action),
            Un && n(i, x),
            (i = p.hasEagerState ? p.eagerState : n(i, x)));
        } else
          ((m = {
            lane: x,
            revertLane: p.revertLane,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          }),
            s === null ? ((u = s = m), (o = i)) : (s = s.next = m),
            (X.lanes |= x),
            (vn |= x));
        p = p.next;
      } while (p !== null && p !== t);
      if (
        (s === null ? (o = i) : (s.next = u),
        !ct(i, e.memoizedState) && ((Te = !0), v && ((n = fr), n !== null)))
      )
        throw n;
      ((e.memoizedState = i),
        (e.baseState = o),
        (e.baseQueue = s),
        (r.lastRenderedState = i));
    }
    return (l === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
  }
  function qo(e) {
    var t = Ce(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do ((i = e(i, o.action)), (o = o.next));
      while (o !== l);
      (ct(i, t.memoizedState) || (Te = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Qa(e, t, n) {
    var r = X,
      l = Ce(),
      i = W;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var o = !ct((ce || l).memoizedState, n);
    if (
      (o && ((l.memoizedState = n), (Te = !0)),
      (l = l.queue),
      bo(Ya.bind(null, r, l, e), [e]),
      l.getSnapshot !== t || o || (ve !== null && ve.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        vr(9, Ka.bind(null, r, l, n, t), { destroy: void 0 }, null),
        oe === null)
      )
        throw Error(c(349));
      i || (An & 60) !== 0 || Ba(r, t, n);
    }
    return n;
  }
  function Ba(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = X.updateQueue),
      t === null
        ? ((t = Go()), (X.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Ka(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Xa(t) && Ga(e));
  }
  function Ya(e, t, n) {
    return n(function () {
      Xa(t) && Ga(e);
    });
  }
  function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Ga(e) {
    var t = fn(e, 2);
    t !== null && $e(t, e, 2);
  }
  function Za(e) {
    var t = Ke();
    if (typeof e == "function") {
      var n = e;
      ((e = n()), Un && (rn(!0), n(), rn(!1)));
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Ja(e, t, n, r) {
    return ((e.baseState = n), Jo(e, ce, typeof r == "function" ? r : $n));
  }
  function _p(e, t, n, r) {
    if (wi(e)) throw Error(c(485));
    ((e = t.pending),
      e === null
        ? ((e = { payload: r, next: null }),
          (e.next = t.pending = e),
          qa(t, n, r))
        : (t.pending = e.next = { payload: r, next: e.next }));
  }
  function qa(e, t, n) {
    var r = e.action,
      l = e.state,
      i = mr.transition,
      o = { _callbacks: new Set() };
    mr.transition = o;
    try {
      var u = r(l, n);
      u !== null && typeof u == "object" && typeof u.then == "function"
        ? ($c(o, u),
          u.then(
            function (s) {
              ((e.state = s), yi(e, t));
            },
            function () {
              return yi(e, t);
            },
          ),
          t(u))
        : (t(u), (e.state = u), yi(e, t));
    } catch (s) {
      (t({ then: function () {}, status: "rejected", reason: s }), yi(e, t));
    } finally {
      mr.transition = i;
    }
  }
  function yi(e, t) {
    var n = e.pending;
    if (n !== null) {
      var r = n.next;
      r === n
        ? (e.pending = null)
        : ((r = r.next), (n.next = r), qa(e, t, r.payload));
    }
  }
  function ba(e, t) {
    return t;
  }
  function ec(e, t, n) {
    ((e = Jo(e, t, ba)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? br(e)
          : e),
      (t = Ce()));
    var r = t.queue,
      l = r.dispatch;
    return (
      n !== t.memoizedState &&
        ((X.flags |= 2048),
        vr(9, Ep.bind(null, r, n), { destroy: void 0 }, null)),
      [e, l]
    );
  }
  function Ep(e, t) {
    e.action = t;
  }
  function vr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, inst: n, deps: r, next: null }),
      (t = X.updateQueue),
      t === null
        ? ((t = Go()), (X.updateQueue = t), (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function tc() {
    return Ce().memoizedState;
  }
  function gi(e, t, n, r) {
    var l = Ke();
    ((X.flags |= e),
      (l.memoizedState = vr(
        1 | t,
        n,
        { destroy: void 0 },
        r === void 0 ? null : r,
      )));
  }
  function vi(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = l.memoizedState.inst;
    ce !== null && r !== null && Ko(r, ce.memoizedState.deps)
      ? (l.memoizedState = vr(t, n, i, r))
      : ((X.flags |= e), (l.memoizedState = vr(1 | t, n, i, r)));
  }
  function nc(e, t) {
    gi(8390656, 8, e, t);
  }
  function bo(e, t) {
    vi(2048, 8, e, t);
  }
  function rc(e, t) {
    return vi(4, 2, e, t);
  }
  function lc(e, t) {
    return vi(4, 4, e, t);
  }
  function ic(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function oc(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), vi(4, 4, ic.bind(null, t, e), n));
  }
  function eu() {}
  function uc(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Ko(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function sc(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && Ko(t, r[1])
      ? r[0]
      : ((r = e()), Un && (rn(!0), e(), rn(!1)), (n.memoizedState = [r, t]), r);
  }
  function ac(e, t, n) {
    return ct(n, t)
      ? n
      : pr.current !== null
        ? ((e.memoizedState = n), ct(n, t) || (Te = !0), n)
        : (An & 42) === 0
          ? ((Te = !0), (e.memoizedState = n))
          : (Ye === 0 && (Ye = (J & 536870912) === 0 || W ? Ws() : 536870912),
            (e = Lt.current),
            e !== null && (e.flags |= 32),
            (e = Ye),
            (X.lanes |= e),
            (vn |= e),
            t);
  }
  function cc(e, t, n, r, l) {
    var i = ae;
    ae = i !== 0 && 8 > i ? i : 8;
    var o = mr.transition,
      u = { _callbacks: new Set() };
    ((mr.transition = u), hc(e, !1, t, n));
    try {
      var s = l();
      if (s !== null && typeof s == "object" && typeof s.then == "function") {
        $c(u, s);
        var p = wp(s, r);
        el(e, t, p);
      } else el(e, t, r);
    } catch (v) {
      el(e, t, { then: function () {}, status: "rejected", reason: v });
    } finally {
      ((ae = i), (mr.transition = o));
    }
  }
  function fc(e, t, n, r) {
    if (e.tag !== 5) throw Error(c(476));
    if (e.memoizedState === null) {
      var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $n,
          lastRenderedState: b,
        },
        i = l;
      ((l = {
        memoizedState: b,
        baseState: b,
        baseQueue: null,
        queue: l,
        next: null,
      }),
        (e.memoizedState = l));
      var o = e.alternate;
      o !== null && (o.memoizedState = l);
    } else i = e.memoizedState.queue;
    cc(e, i, t, b, function () {
      return n(r);
    });
  }
  function tu() {
    var e = Oe(le);
    return e !== null ? e : b;
  }
  function dc() {
    return Ce().memoizedState;
  }
  function pc() {
    return Ce().memoizedState;
  }
  function Cp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en(t);
          e = jt(n);
          var r = Xt(t, e, n);
          (r !== null && ($e(r, t, n), Br(r, t, n)),
            (t = { cache: mu() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Pp(e, t, n) {
    var r = en(e);
    ((n = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      wi(e)
        ? mc(t, n)
        : ((n = Mo(e, t, n, r)), n !== null && ($e(n, e, r), yc(n, t, r))));
  }
  function el(e, t, n) {
    var r = en(e),
      l = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (wi(e)) mc(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), ct(u, o))) {
            (bl(e, t, l, 0), oe === null && ql());
            return;
          }
        } catch {
        } finally {
        }
      ((n = Mo(e, t, l, r)), n !== null && ($e(n, e, r), yc(n, t, r)));
    }
  }
  function hc(e, t, n, r) {
    if (
      (Uc(),
      (r = {
        lane: 2,
        revertLane: Uo(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      wi(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = Mo(e, n, r, 2)), t !== null && $e(t, e, 2));
  }
  function wi(e) {
    var t = e.alternate;
    return e === X || (t !== null && t === X);
  }
  function mc(e, t) {
    yr = fi = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function yc(e, t, n) {
    if ((n & 4194176) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ks(e, n));
    }
  }
  var mn = {
    readContext: Oe,
    use: mi,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
  };
  ((mn.useCacheRefresh = Ee),
    (mn.useHostTransitionStatus = Ee),
    (mn.useFormState = Ee),
    (mn.useOptimistic = Ee));
  var tl = {
    readContext: Oe,
    use: mi,
    useCallback: function (e, t) {
      return ((Ke().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Oe,
    useEffect: nc,
    useImperativeHandle: function (e, t, n) {
      ((n = n != null ? n.concat([e]) : null),
        gi(4194308, 4, ic.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return gi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      gi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ke();
      t = t === void 0 ? null : t;
      var r = e();
      return (Un && (rn(!0), e(), rn(!1)), (n.memoizedState = [r, t]), r);
    },
    useReducer: function (e, t, n) {
      var r = Ke();
      if (n !== void 0) {
        var l = n(t);
        Un && (rn(!0), n(t), rn(!1));
      } else l = t;
      return (
        (r.memoizedState = r.baseState = l),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: l,
        }),
        (r.queue = e),
        (e = e.dispatch = Pp.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ke();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: function (e) {
      e = Za(e);
      var t = e.queue,
        n = el.bind(null, X, t);
      return ((t.dispatch = n), [e.memoizedState, n]);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return ((Ke().memoizedState = e), e);
    },
    useTransition: function () {
      var e = Za(!1);
      return (
        (e = cc.bind(null, X, e.queue, !0, !1)),
        (Ke().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = Ke();
      if (W) {
        if (n === void 0) throw Error(c(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(c(349));
        (J & 60) !== 0 || Ba(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        nc(Ya.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vr(9, Ka.bind(null, r, i, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = Ke(),
        t = oe.identifierPrefix;
      if (W) {
        var n = Yt,
          r = Kt;
        ((n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = di++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Sp++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Ke().memoizedState = Cp.bind(null, X));
    },
  };
  ((tl.useHostTransitionStatus = tu),
    (tl.useFormState = function (e, t) {
      if (W) {
        var n = oe.formState;
        if (n !== null) {
          e: {
            if (W) {
              if (Y) {
                t: {
                  for (var r = Y, l = zt; r.nodeType !== 8; ) {
                    if (!l) {
                      r = null;
                      break t;
                    }
                    if (((r = gt(r)), r === null)) {
                      r = null;
                      break t;
                    }
                  }
                  ((l = r.data), (r = l === "F!" || l === "F" ? r : null));
                }
                if (r) {
                  ((Y = gt(r)), (r = r.data === "F!"));
                  break e;
                }
              }
              cn();
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Ke()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ba,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = el.bind(null, X, r)),
        (r.dispatch = n),
        (r = Ke()),
        (l = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = l),
        (n = _p.bind(null, X, l, n)),
        (l.dispatch = n),
        (r.memoizedState = e),
        [t, n]
      );
    }),
    (tl.useOptimistic = function (e) {
      var t = Ke();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n),
        (t = hc.bind(null, X, !0, n)),
        (n.dispatch = t),
        [e, t]
      );
    }));
  var nl = {
    readContext: Oe,
    use: mi,
    useCallback: uc,
    useContext: Oe,
    useEffect: bo,
    useImperativeHandle: oc,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: Zo,
    useRef: tc,
    useState: function () {
      return Zo($n);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Ce();
      return ac(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Zo($n)[0],
        t = Ce().memoizedState;
      return [typeof e == "boolean" ? e : br(e), t];
    },
    useSyncExternalStore: Qa,
    useId: dc,
  };
  ((nl.useCacheRefresh = pc),
    (nl.useHostTransitionStatus = tu),
    (nl.useFormState = function (e) {
      var t = Ce();
      return ec(t, ce, e);
    }),
    (nl.useOptimistic = function (e, t) {
      var n = Ce();
      return Ja(n, ce, e, t);
    }));
  var rl = {
    readContext: Oe,
    use: mi,
    useCallback: uc,
    useContext: Oe,
    useEffect: bo,
    useImperativeHandle: oc,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: qo,
    useRef: tc,
    useState: function () {
      return qo($n);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Ce();
      return ce === null
        ? ((t.memoizedState = e), e)
        : ac(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = qo($n)[0],
        t = Ce().memoizedState;
      return [typeof e == "boolean" ? e : br(e), t];
    },
    useSyncExternalStore: Qa,
    useId: dc,
  };
  ((rl.useCacheRefresh = pc),
    (rl.useHostTransitionStatus = tu),
    (rl.useFormState = function (e) {
      var t = Ce(),
        n = ce;
      if (n !== null) return ec(t, n, e);
      ((t = t.memoizedState), (n = Ce()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r]);
    }),
    (rl.useOptimistic = function (e, t) {
      var n = Ce();
      return ce !== null
        ? Ja(n, ce, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    }));
  function qe(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function nu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ki = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = en(e),
        l = jt(r);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = Xt(e, l, r)),
        t !== null && ($e(t, e, r), Br(t, e, r)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = en(e),
        l = jt(r);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = Xt(e, l, r)),
        t !== null && ($e(t, e, r), Br(t, e, r)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = en(e),
        r = jt(n);
      ((r.tag = 2),
        t != null && (r.callback = t),
        (t = Xt(e, r, n)),
        t !== null && ($e(t, e, n), Br(t, e, n)));
    },
  };
  function gc(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xr(n, r) || !Xr(l, i)
          : !0
    );
  }
  function vc(e, t, n) {
    var r = !1,
      l = sn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Oe(i))
        : ((l = Ue(t) ? an : Re.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : sn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ki),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function wc(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ki.enqueueReplaceState(t, t.state, null));
  }
  function ru(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ri(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Oe(i))
      : ((i = Ue(t) ? an : Re.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (nu(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && ki.enqueueReplaceState(l, l.state, null),
        Yr(e, n, l, r),
        Kr(),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  var kc = new WeakMap();
  function wr(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = kc.get(e);
      typeof n != "string" && ((n = bs(t)), kc.set(e, n));
    } else n = bs(t);
    return { value: e, source: t, stack: n, digest: null };
  }
  function Sc(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function lu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function xc(e, t, n) {
    ((n = jt(n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Mi || ((Mi = !0), (ju = r)), lu(e, t));
      }),
      n
    );
  }
  function _c(e, t, n) {
    ((n = jt(n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          lu(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (lu(e, t),
            typeof r != "function" &&
              (wn === null ? (wn = new Set([this])) : wn.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Ec(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = jt(2)), (t.tag = 2), Xt(n, t, 2))),
            (n.lanes |= 2)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  function Np(e, t, n, r, l) {
    if (
      ((n.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      var i = n.tag;
      if (
        ((n.mode & 1) !== 0 ||
          (i !== 0 && i !== 11 && i !== 15) ||
          ((i = n.alternate)
            ? ((n.updateQueue = i.updateQueue),
              (n.memoizedState = i.memoizedState),
              (n.lanes = i.lanes))
            : ((n.updateQueue = null), (n.memoizedState = null))),
        (i = Lt.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              n.mode & 1 &&
                (Rt === null
                  ? Mu()
                  : i.alternate === null && Se === 0 && (Se = 3)),
              (i.flags &= -257),
              Ec(i, t, n, e, l),
              r === Wo
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([r])) : t.add(r),
                  i.mode & 1 && Au(e, r, l)),
              !1
            );
          case 22:
            if (i.mode & 1)
              return (
                (i.flags |= 65536),
                r === Wo
                  ? (i.flags |= 16384)
                  : ((t = i.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (i.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Au(e, r, l)),
                !1
              );
        }
        throw Error(c(435, i.tag));
      }
      if (e.tag === 1) return (Au(e, r, l), Mu(), !1);
      r = Error(c(426));
    }
    if (W && n.mode & 1 && ((i = Lt.current), i !== null))
      return (
        (i.flags & 65536) === 0 && (i.flags |= 256),
        Ec(i, t, n, e, l),
        Do(wr(r, n)),
        !1
      );
    if (
      ((e = r = wr(r, n)),
      Se !== 4 && (Se = 2),
      fl === null ? (fl = [e]) : fl.push(e),
      t === null)
    )
      return !0;
    e = t;
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (l = xc(e, r, l)),
            Ra(e, l),
            !1
          );
        case 1:
          if (
            ((t = r),
            (n = e.type),
            (i = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (wn === null || !wn.has(i)))))
          )
            return (
              (e.flags |= 65536),
              (l &= -l),
              (e.lanes |= l),
              (l = _c(e, t, l)),
              Ra(e, l),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var zp = D.ReactCurrentOwner,
    Cc = Error(c(461)),
    Te = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? $a(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function Pc(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Zt(t, l),
      (r = pi(e, t, n, r, i, l)),
      (n = hi()),
      e !== null && !Te
        ? (Yo(e, t, l), Tt(e, t, l))
        : (W && n && Zl(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
    );
  }
  function Nc(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Vu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), zc(e, t, i, r, l))
        : ((e = $i(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Xr), n(o, r) && e.ref === t.ref)
      )
        return Tt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = kn(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function zc(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Xr(i, r) && e.ref === t.ref)
        if (((Te = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Te = !0);
        else return ((t.lanes = e.lanes), Tt(e, t, l));
    }
    return iu(e, t, n, r, l);
  }
  function jc(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = (t.stateNode._pendingVisibility & 2) !== 0,
      o = e !== null ? e.memoizedState : null;
    if ((ll(e, t), r.mode === "hidden" || i)) {
      if ((t.flags & 128) !== 0) {
        if (((n = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (r = t.child = e.child, l = 0; r !== null; )
            ((l = l | r.lanes | r.childLanes), (r = r.sibling));
          t.childLanes = l & ~n;
        } else ((t.childLanes = 0), (t.child = null));
        return Lc(e, t, n);
      }
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ol(t, null),
          ai(),
          Bo(t));
      else if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ol(t, o !== null ? o.cachePool : null),
          o !== null ? Va(t, o) : ai(),
          Bo(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Lc(e, t, o !== null ? o.baseLanes | n : n)
        );
    } else
      o !== null
        ? (ol(t, o.cachePool), Va(t, o), hn(), (t.memoizedState = null))
        : (e !== null && ol(t, null), ai(), hn());
    return (Ne(e, t, l, n), t.child);
  }
  function Lc(e, t, n) {
    var r = yu();
    return (
      (r = r === null ? null : { parent: we._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: n, cachePool: r }),
      e !== null && ol(t, null),
      ai(),
      Bo(t),
      null
    );
  }
  function ll(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function iu(e, t, n, r, l) {
    var i = Ue(n) ? an : Re.current;
    return (
      (i = Rn(t, i)),
      Zt(t, l),
      (n = pi(e, t, n, r, i, l)),
      (r = hi()),
      e !== null && !Te
        ? (Yo(e, t, l), Tt(e, t, l))
        : (W && r && Zl(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
    );
  }
  function Rc(e, t, n, r, l, i) {
    return (
      Zt(t, i),
      (n = Wa(t, r, n, l)),
      Ha(),
      (r = hi()),
      e !== null && !Te
        ? (Yo(e, t, i), Tt(e, t, i))
        : (W && r && Zl(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
    );
  }
  function Tc(e, t, n, r, l) {
    if (Ue(n)) {
      var i = !0;
      Yl(t);
    } else i = !1;
    if ((Zt(t, l), t.stateNode === null))
      (xi(e, t), vc(t, n, r), ru(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Oe(p))
        : ((p = Ue(n) ? an : Re.current), (p = Rn(t, p)));
      var v = n.getDerivedStateFromProps,
        x =
          typeof v == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && wc(t, o, r, p)),
        (dn = !1));
      var m = t.memoizedState;
      ((o.state = m),
        Yr(t, r, o, l),
        Kr(),
        (s = t.memoizedState),
        u !== r || m !== s || Be.current || dn
          ? (typeof v == "function" && (nu(t, n, v, r), (s = t.memoizedState)),
            (u = dn || gc(t, n, u, r, m, s, p))
              ? (x ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        Vo(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : qe(t.type, u)),
        (o.props = p),
        (x = t.pendingProps),
        (m = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Oe(s))
          : ((s = Ue(n) ? an : Re.current), (s = Rn(t, s))));
      var g = n.getDerivedStateFromProps;
      ((v =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || m !== s) && wc(t, o, r, s)),
        (dn = !1),
        (m = t.memoizedState),
        (o.state = m),
        Yr(t, r, o, l),
        Kr());
      var z = t.memoizedState;
      u !== x || m !== z || Be.current || dn
        ? (typeof g == "function" && (nu(t, n, g, r), (z = t.memoizedState)),
          (p = dn || gc(t, n, p, r, m, z, s) || !1)
            ? (v ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, z, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, z, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = z)),
          (o.props = r),
          (o.state = z),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ou(e, t, n, r, i, l);
  }
  function ou(e, t, n, r, l, i) {
    ll(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && ka(t, n, !1), Tt(e, t, i));
    ((r = t.stateNode), (zp.current = t));
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Mn(t, e.child, null, i)), (t.child = Mn(t, null, u, i)))
        : Ne(e, t, u, i),
      (t.memoizedState = r.state),
      l && ka(t, n, !0),
      t.child
    );
  }
  function Oc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? va(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && va(e, t.context, !1),
      Nt(e, t.containerInfo));
  }
  function Dc(e, t, n, r, l) {
    return (or(), Do(l), (t.flags |= 256), Ne(e, t, n, r), t.child);
  }
  var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function su(e) {
    return { baseLanes: e, cachePool: Vc() };
  }
  function au(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Ye), e);
  }
  function Fc(e, t, n) {
    var r = t.pendingProps,
      l = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o =
          e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
      o && ((l = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (W) {
        if ((l ? pn(t) : hn(), W)) {
          var u = (i = Y);
          if (!u) (Dn(t) && cn(), ir(te, t), (W = !1), (te = t), (Y = i));
          else if (!Ea(t, u)) {
            (Dn(t) && cn(), (Y = gt(u)));
            var s = te;
            Y && Ea(t, Y) ? Jl(s, u) : (ir(te, t), (W = !1), (te = t), (Y = i));
          }
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return (
            (t.mode & 1) === 0
              ? (t.lanes = 2)
              : i.data === "$!"
                ? (t.lanes = 16)
                : (t.lanes = 536870912),
            null
          );
        In(t);
      }
      return (
        (i = r.children),
        (r = r.fallback),
        l
          ? (hn(),
            (l = t.mode),
            (u = t.child),
            (i = { mode: "hidden", children: i }),
            (l & 1) === 0 && u !== null
              ? ((u.childLanes = 0), (u.pendingProps = i))
              : (u = Vi(i, l, 0, null)),
            (r = Yn(r, l, n, null)),
            (u.return = t),
            (r.return = t),
            (u.sibling = r),
            (t.child = u),
            (l = t.child),
            (l.memoizedState = su(n)),
            (l.childLanes = au(e, o, n)),
            (t.memoizedState = uu),
            r)
          : (pn(t), cu(t, i))
      );
    }
    if (((u = e.memoizedState), u !== null && ((s = u.dehydrated), s !== null)))
      return jp(e, t, i, o, r, s, u, n);
    if (l) {
      (hn(), (l = r.fallback), (i = t.mode), (u = e.child), (s = u.sibling));
      var p = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== u
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = kn(u, p)), (r.subtreeFlags = u.subtreeFlags & 31457280)),
        s !== null ? (l = kn(s, l)) : ((l = Yn(l, i, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (i = e.child.memoizedState),
        i === null
          ? (i = su(n))
          : ((u = i.cachePool),
            u !== null
              ? ((s = we._currentValue),
                (u = u.parent !== s ? { parent: s, pool: s } : u))
              : (u = Vc()),
            (i = { baseLanes: i.baseLanes | n, cachePool: u })),
        (l.memoizedState = i),
        (l.childLanes = au(e, o, n)),
        (t.memoizedState = uu),
        r
      );
    }
    return (
      pn(t),
      (o = e.child),
      (e = o.sibling),
      (o = kn(o, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function cu(e, t) {
    return (
      (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Si(e, t, n, r) {
    return (
      r !== null && Do(r),
      Mn(t, e.child, null, n),
      (e = cu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jp(e, t, n, r, l, i, o, u) {
    if (n)
      return t.flags & 256
        ? (pn(t), (t.flags &= -257), (i = Sc(Error(c(422)))), Si(e, t, u, i))
        : t.memoizedState !== null
          ? (hn(), (t.child = e.child), (t.flags |= 128), null)
          : (hn(),
            (i = l.fallback),
            (o = t.mode),
            (l = Vi({ mode: "visible", children: l.children }, o, 0, null)),
            (i = Yn(i, o, u, null)),
            (i.flags |= 2),
            (l.return = t),
            (i.return = t),
            (l.sibling = i),
            (t.child = l),
            (t.mode & 1) !== 0 && Mn(t, e.child, null, u),
            (o = t.child),
            (o.memoizedState = su(u)),
            (o.childLanes = au(e, r, u)),
            (t.memoizedState = uu),
            i);
    if ((pn(t), (t.mode & 1) === 0)) return Si(e, t, u, null);
    if (i.data === "$!") {
      if (((i = i.nextSibling && i.nextSibling.dataset), i)) var s = i.dgst;
      return (
        (i = s),
        (r = Error(c(419))),
        (r.digest = i),
        (i = Sc(r, i, void 0)),
        Si(e, t, u, i)
      );
    }
    if (((r = (u & e.childLanes) !== 0), Te || r)) {
      if (((r = oe), r !== null)) {
        if (((l = u & -u), (l & 42) !== 0)) l = 1;
        else
          switch (l) {
            case 2:
              l = 1;
              break;
            case 8:
              l = 4;
              break;
            case 32:
              l = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              l = 64;
              break;
            case 268435456:
              l = 134217728;
              break;
            default:
              l = 0;
          }
        if (
          ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane)
        )
          throw ((o.retryLane = l), fn(e, l), $e(r, e, l), Cc);
      }
      return (i.data !== "$?" && Mu(), Si(e, t, u, null));
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = qp.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Y = Tl(i.nextSibling)),
        (te = t),
        (W = !0),
        (_t = null),
        (zt = !1),
        e !== null &&
          ((ft[dt++] = Kt),
          (ft[dt++] = Yt),
          (ft[dt++] = Tn),
          (Kt = e.id),
          (Yt = e.overflow),
          (Tn = t)),
        (t = cu(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Mc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), hu(e.return, t, n));
  }
  function fu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Ic(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ne(e, t, r.children, n), (r = _e.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t);
          else if (e.tag === 19) Mc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((j(_e, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && ci(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            fu(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ci(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          fu(t, !0, n, null, i);
          break;
        case "together":
          fu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xi(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Tt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (vn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = kn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Lp(e, t, n) {
    switch (t.tag) {
      case 3:
        (Oc(t), yn(t, we, e.memoizedState.cache), or());
        break;
      case 27:
      case 5:
        St(t);
        break;
      case 1:
        Ue(t.type) && Yl(t);
        break;
      case 4:
        Nt(t, t.stateNode.containerInfo);
        break;
      case 10:
        yn(t, t.type._context, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (pn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Fc(e, t, n)
              : (pn(t), (e = Tt(e, t, n)), e !== null ? e.sibling : null);
        pn(t);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Ic(e, t, n);
          t.flags |= 128;
        }
        var l = t.memoizedState;
        if (
          (l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          j(_e, _e.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), jc(e, t, n));
      case 24:
        yn(t, we, e.memoizedState.cache);
    }
    return Tt(e, t, n);
  }
  var du = pe(null),
    _i = null,
    kr = null,
    pu = null;
  function Ei() {
    pu = kr = _i = null;
  }
  function yn(e, t, n) {
    (j(du, t._currentValue), (t._currentValue = n));
  }
  function Gt(e) {
    ((e._currentValue = du.current), R(du));
  }
  function hu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ci(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var l = r.dependencies;
      if (l !== null)
        for (var i = r.child, o = l.firstContext; o !== null; ) {
          if (o.context === t) {
            if (r.tag === 1) {
              ((o = jt(n & -n)), (o.tag = 2));
              var u = r.updateQueue;
              if (u !== null) {
                u = u.shared;
                var s = u.pending;
                (s === null ? (o.next = o) : ((o.next = s.next), (s.next = o)),
                  (u.pending = o));
              }
            }
            ((r.lanes |= n),
              (o = r.alternate),
              o !== null && (o.lanes |= n),
              hu(r.return, n, e),
              (l.lanes |= n));
            break;
          }
          o = o.next;
        }
      else if (r.tag === 10) i = r.type === e.type ? null : r.child;
      else if (r.tag === 18) {
        if (((i = r.return), i === null)) throw Error(c(341));
        ((i.lanes |= n),
          (l = i.alternate),
          l !== null && (l.lanes |= n),
          hu(i, n, e),
          (i = r.sibling));
      } else i = r.child;
      if (i !== null) i.return = r;
      else
        for (i = r; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((r = i.sibling), r !== null)) {
            ((r.return = i.return), (i = r));
            break;
          }
          i = i.return;
        }
      r = i;
    }
  }
  function Zt(e, t) {
    ((_i = e),
      (pu = kr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Te = !0), (e.firstContext = null)));
  }
  function Oe(e) {
    return Ac(_i, e);
  }
  function Pi(e, t, n) {
    return (_i === null && Zt(e, n), Ac(e, t));
  }
  function Ac(e, t) {
    var n = t._currentValue;
    if (pu !== t)
      if (((t = { context: t, memoizedValue: n, next: null }), kr === null)) {
        if (e === null) throw Error(c(308));
        ((kr = t), (e.dependencies = { lanes: 0, firstContext: t }));
      } else kr = kr.next = t;
    return n;
  }
  var Rp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Tp = E.unstable_scheduleCallback,
    Op = E.unstable_NormalPriority,
    we = {
      $$typeof: Fe,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function mu() {
    return { controller: new Rp(), data: new Map(), refCount: 0 };
  }
  function il(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Tp(Op, function () {
          e.controller.abort();
        }));
  }
  var Dp = D.ReactCurrentBatchConfig;
  function Uc() {
    var e = Dp.transition;
    return (e !== null && e._callbacks.add(Fp), e);
  }
  function Fp(e, t) {
    vp(e, t);
  }
  function $c(e, t) {
    e._callbacks.forEach(function (n) {
      return n(e, t);
    });
  }
  var Vn = pe(null);
  function yu() {
    var e = Vn.current;
    return e !== null ? e : oe.pooledCache;
  }
  function ol(e, t) {
    t === null ? j(Vn, Vn.current) : j(Vn, t.pool);
  }
  function Vc() {
    var e = yu();
    return e === null ? null : { parent: we._currentValue, pool: e };
  }
  function Ot(e) {
    e.flags |= 4;
  }
  function Hc(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (
      ((e.flags |= 16777216),
      (J & 42) === 0 &&
        ((t = !(t.type === "stylesheet" && (t.state.loading & 3) === 0)), !t))
    )
      if (df()) e.flags |= 8192;
      else throw ((Gr = Wo), Da);
  }
  function Ni(e, t) {
    t !== null
      ? (e.flags |= 4)
      : e.flags & 16384 &&
        ((t = e.tag !== 22 ? Qs() : 536870912), (e.lanes |= t));
  }
  function ul(e, t) {
    if (!W)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 31457280),
          (r |= l.flags & 31457280),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Mp(e, t, n) {
    var r = t.pendingProps;
    switch ((Oo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (me(t), null);
      case 1:
        return (Ue(t.type) && Kl(), me(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          Gt(we),
          Ge(),
          R(Be),
          R(Re),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Wr(t)
              ? Ot(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), _t !== null && (Ou(_t), (_t = null)))),
          me(t),
          null
        );
      case 26:
        if (((n = t.memoizedState), e === null))
          (Ot(t),
            n !== null ? (me(t), Hc(t, n)) : (me(t), (t.flags &= -16777217)));
        else {
          var l = e.memoizedState;
          (n !== l && Ot(t),
            n !== null
              ? (me(t), n === l ? (t.flags &= -16777217) : Hc(t, n))
              : (e.memoizedProps !== r && Ot(t),
                me(t),
                (t.flags &= -16777217)));
        }
        return null;
      case 27:
        if (
          (We(t),
          (n = M.current),
          (l = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== r && Ot(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (me(t), null);
          }
          ((e = _.current),
            Wr(t)
              ? yd(t.stateNode, t.type, t.memoizedProps, e, t)
              : ((e = vd(l, r, n)), (t.stateNode = e), Ot(t)));
        }
        return (me(t), null);
      case 5:
        if ((We(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && Ot(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return (me(t), null);
          }
          if (((e = _.current), Wr(t)))
            yd(t.stateNode, t.type, t.memoizedProps, e, t);
          else {
            switch (((l = oo(M.current)), e)) {
              case 1:
                e = l.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = l.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = l.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((e = l.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof r.is == "string"
                        ? l.createElement("select", { is: r.is })
                        : l.createElement("select")),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size));
                    break;
                  default:
                    e =
                      typeof r.is == "string"
                        ? l.createElement(n, { is: r.is })
                        : l.createElement(n);
                }
            }
            ((e[Me] = t), (e[on] = r));
            e: for (l = t.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                ((l.child.return = l), (l = l.child));
                continue;
              }
              if (l === t) break e;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === t) break e;
                l = l.return;
              }
              ((l.sibling.return = l.return), (l = l.sibling));
            }
            t.stateNode = e;
            e: switch ((De(e, n, r), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ot(t);
          }
        }
        return (me(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && Ot(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = M.current), Wr(t))) {
            e: {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (e[Me] = t),
                (r = e.nodeValue !== n) && ((l = te), l !== null))
              )
                switch (l.tag) {
                  case 3:
                    if (((l = (l.mode & 1) !== 0), hs(e.nodeValue, n, l), l)) {
                      e = !1;
                      break e;
                    }
                    break;
                  case 27:
                  case 5:
                    var i = (l.mode & 1) !== 0;
                    if (
                      (l.memoizedProps.suppressHydrationWarning !== !0 &&
                        hs(e.nodeValue, n, i),
                      i)
                    ) {
                      e = !1;
                      break e;
                    }
                }
              e = r;
            }
            e && Ot(t);
          } else
            ((e = oo(e).createTextNode(r)), (e[Me] = t), (t.stateNode = e));
        }
        return (me(t), null);
      case 13:
        if (
          (In(t),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (W && Y !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Pa(), or(), (t.flags |= 384), (l = !1));
          else if (((l = Wr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(c(317));
              l[Me] = t;
            } else
              (or(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (me(t), (l = !1));
          } else (_t !== null && (Ou(_t), (_t = null)), (l = !0));
          if (!l) return t.flags & 256 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((n = r !== null),
            (e = e !== null && e.memoizedState !== null),
            n &&
              ((r = t.child),
              (l = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (l = r.alternate.memoizedState.cachePool.pool),
              (i = null),
              r.memoizedState !== null &&
                r.memoizedState.cachePool !== null &&
                (i = r.memoizedState.cachePool.pool),
              i !== l && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Ni(t, t.updateQueue),
            me(t),
            null);
      case 4:
        return (Ge(), e === null && Ll(t.stateNode.containerInfo), me(t), null);
      case 10:
        return (Gt(t.type._context), me(t), null);
      case 17:
        return (Ue(t.type) && Kl(), me(t), null);
      case 19:
        if ((R(_e), (l = t.memoizedState), l === null)) return (me(t), null);
        if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
          if (r) ul(l, !1);
          else {
            if (Se !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = ci(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      ul(l, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Ni(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (kf(n, e), (n = n.sibling));
                  return (j(_e, (_e.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              T() > Nr &&
              ((t.flags |= 128), (r = !0), ul(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ci(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ni(t, e),
                ul(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !i.alternate &&
                  !W)
              )
                return (me(t), null);
            } else
              2 * T() - l.renderingStartTime > Nr &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), ul(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = l.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (l.last = i));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = T()),
            (t.sibling = null),
            (e = _e.current),
            j(_e, r ? (e & 1) | 2 : e & 1),
            t)
          : (me(t), null);
      case 22:
      case 23:
        return (
          In(t),
          Qo(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : me(t),
          (n = t.updateQueue),
          n !== null && Ni(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== n && (t.flags |= 2048),
          e !== null && R(Vn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Gt(we),
          me(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ip(e, t) {
    switch ((Oo(t), t.tag)) {
      case 1:
        return (
          Ue(t.type) && Kl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Gt(we),
          Ge(),
          R(Be),
          R(Re),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (We(t), null);
      case 13:
        if (
          (In(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          or();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (R(_e), null);
      case 4:
        return (Ge(), null);
      case 10:
        return (Gt(t.type._context), null);
      case 22:
      case 23:
        return (
          In(t),
          Qo(),
          e !== null && R(Vn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Gt(we), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wc(e, t) {
    switch ((Oo(t), t.tag)) {
      case 1:
        ((e = t.type.childContextTypes), e != null && Kl());
        break;
      case 3:
        (Gt(we), Ge(), R(Be), R(Re));
        break;
      case 26:
      case 27:
      case 5:
        We(t);
        break;
      case 4:
        Ge();
        break;
      case 13:
        In(t);
        break;
      case 19:
        R(_e);
        break;
      case 10:
        Gt(t.type._context);
        break;
      case 22:
      case 23:
        (In(t), Qo(), e !== null && R(Vn));
        break;
      case 24:
        Gt(we);
    }
  }
  function Ap(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, r);
    } catch (l) {
      this.onError(l);
    }
  }
  var sl = !1,
    zi = null,
    ji = !1,
    gu = null,
    Up = {
      onError: function (e) {
        ((sl = !0), (zi = e));
      },
    };
  function $p(e, t, n, r, l, i, o, u, s) {
    ((sl = !1), (zi = null), Ap.apply(Up, arguments));
  }
  function Vp(e, t, n, r, l, i, o, u, s) {
    if (($p.apply(this, arguments), sl)) {
      if (sl) {
        var p = zi;
        ((sl = !1), (zi = null));
      } else throw Error(c(198));
      ji || ((ji = !0), (gu = p));
    }
  }
  var Jt = !1,
    Ie = !1,
    Qc = typeof WeakSet == "function" ? WeakSet : Set,
    ze = null;
  function Hn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = r;
            break;
          default:
            l = r;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      se(e, t, i);
    }
  }
  function be(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (l) {
          se(e, t, l);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          se(e, t, l);
        }
      else n.current = null;
  }
  function vu(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var Bc = !1;
  function Hp(e, t) {
    if (((ys = Ji), (e = Zf()), os(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              p = 0,
              v = 0,
              x = e,
              m = null;
            t: for (;;) {
              for (
                var g;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (g = x.firstChild) !== null;
              )
                ((m = x), (x = g));
              for (;;) {
                if (x === e) break t;
                if (
                  (m === n && ++p === l && (u = o),
                  m === i && ++v === r && (s = o),
                  (g = x.nextSibling) !== null)
                )
                  break;
                ((x = m), (m = x.parentNode));
              }
              x = g;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      gs = { focusedElem: e, selectionRange: n }, Ji = !1, ze = t;
      ze !== null;
    )
      if (
        ((t = ze), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ze = e));
      else
        for (; ze !== null; ) {
          t = ze;
          try {
            var z = t.alternate,
              U = t.flags;
            switch (t.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((U & 1024) !== 0 && z !== null) {
                  var de = z.memoizedProps,
                    d = z.memoizedState,
                    a = t.stateNode,
                    h = a.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? de : qe(t.type, de),
                      d,
                    );
                  a.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                (U & 1024) !== 0 && md(t.stateNode.containerInfo);
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((U & 1024) !== 0) throw Error(c(163));
            }
          } catch (k) {
            se(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ze = e));
            break;
          }
          ze = t.return;
        }
    return ((z = Bc), (Bc = !1), z);
  }
  function Sr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.inst,
            o = i.destroy;
          o !== void 0 && ((i.destroy = void 0), vu(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function wu(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create,
            l = n.inst;
          ((r = r()), (l.destroy = r));
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Kc(e, t) {
    try {
      wu(t, e);
    } catch (n) {
      se(e, e.return, n);
    }
  }
  function Yc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Oa(t, n);
      } catch (r) {
        se(e, e.return, r);
      }
    }
  }
  function Xc(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src && (r.src = n.src);
      }
    } catch (l) {
      se(e, e.return, l);
    }
  }
  function Gc(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Ft(e, n), r & 4 && Kc(n, 5));
        break;
      case 1:
        if ((Ft(e, n), r & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (u) {
              se(n, n.return, u);
            }
          else {
            var l =
              n.elementType === n.type
                ? t.memoizedProps
                : qe(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              se(n, n.return, u);
            }
          }
        (r & 64 && Yc(n), r & 512 && Hn(n, n.return));
        break;
      case 3:
        if ((Ft(e, n), r & 64 && ((r = n.updateQueue), r !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Oa(r, e);
          } catch (u) {
            se(n, n.return, u);
          }
        }
        break;
      case 26:
        (Ft(e, n), r & 512 && Hn(n, n.return));
        break;
      case 27:
      case 5:
        (Ft(e, n), t === null && r & 4 && Xc(n), r & 512 && Hn(n, n.return));
        break;
      case 12:
        Ft(e, n);
        break;
      case 13:
        (Ft(e, n), r & 4 && bc(e, n));
        break;
      case 22:
        if ((n.mode & 1) !== 0) {
          if (((l = n.memoizedState !== null || Jt), !l)) {
            t = (t !== null && t.memoizedState !== null) || Ie;
            var i = Jt,
              o = Ie;
            ((Jt = l),
              (Ie = t) && !o
                ? gn(e, n, (n.subtreeFlags & 8772) !== 0)
                : Ft(e, n),
              (Jt = i),
              (Ie = o));
          }
        } else Ft(e, n);
        r & 512 &&
          (n.memoizedProps.mode === "manual"
            ? Hn(n, n.return)
            : be(n, n.return));
        break;
      default:
        Ft(e, n);
    }
  }
  function Zc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Zc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Jc(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function ku(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = io)));
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Su(e, t, n), e = e.sibling; e !== null; )
        (Su(e, t, n), (e = e.sibling));
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; )
        (Li(e, t, n), (e = e.sibling));
  }
  var ke = null,
    et = !1;
  function Dt(e, t, n) {
    for (n = n.child; n !== null; ) (qc(e, t, n), (n = n.sibling));
  }
  function qc(e, t, n) {
    if (Ze && typeof Ze.onCommitFiberUnmount == "function")
      try {
        Ze.onCommitFiberUnmount(Ar, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ie || be(n, t),
          Dt(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ie || be(n, t);
        var r = ke,
          l = et;
        for (
          ke = n.stateNode, Dt(e, t, n), n = n.stateNode, e = n.attributes;
          e.length;
        )
          n.removeAttributeNode(e[0]);
        (xo(n), (ke = r), (et = l));
        break;
      case 5:
        Ie || be(n, t);
      case 6:
        ((r = ke),
          (l = et),
          (ke = null),
          Dt(e, t, n),
          (ke = r),
          (et = l),
          ke !== null &&
            (et
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ke.removeChild(n.stateNode)));
        break;
      case 18:
        ke !== null &&
          (et
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? ks(e.parentNode, n)
                : e.nodeType === 1 && ks(e, n),
              El(e))
            : ks(ke, n.stateNode));
        break;
      case 4:
        ((r = ke),
          (l = et),
          (ke = n.stateNode.containerInfo),
          (et = !0),
          Dt(e, t, n),
          (ke = r),
          (et = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ie &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l.tag,
              o = l.inst,
              u = o.destroy;
            (u !== void 0 &&
              ((i & 2) !== 0 || (i & 4) !== 0) &&
              ((o.destroy = void 0), vu(n, t, u)),
              (l = l.next));
          } while (l !== r);
        }
        Dt(e, t, n);
        break;
      case 1:
        if (
          !Ie &&
          (be(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (s) {
            se(n, t, s);
          }
        Dt(e, t, n);
        break;
      case 21:
        Dt(e, t, n);
        break;
      case 22:
        (be(n, t),
          n.mode & 1
            ? ((Ie = (r = Ie) || n.memoizedState !== null),
              Dt(e, t, n),
              (Ie = r))
            : Dt(e, t, n));
        break;
      default:
        Dt(e, t, n);
    }
  }
  function bc(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        El(e);
      } catch (n) {
        se(t, t.return, n);
      }
  }
  function Wp(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Qc()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Qc()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function xu(e, t) {
    var n = Wp(e);
    t.forEach(function (r) {
      var l = bp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 27:
              case 5:
                ((ke = u.stateNode), (et = !1));
                break e;
              case 3:
                ((ke = u.stateNode.containerInfo), (et = !0));
                break e;
              case 4:
                ((ke = u.stateNode.containerInfo), (et = !0));
                break e;
            }
            u = u.return;
          }
          if (ke === null) throw Error(c(160));
          (qc(i, o, l), (ke = null), (et = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          se(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ef(t, e), (t = t.sibling));
  }
  var Et = null;
  function ef(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ht(t, e), Ct(e), r & 4)) {
          try {
            (Sr(3, e, e.return), wu(3, e));
          } catch (g) {
            se(e, e.return, g);
          }
          try {
            Sr(5, e, e.return);
          } catch (g) {
            se(e, e.return, g);
          }
        }
        break;
      case 1:
        (ht(t, e),
          Ct(e),
          r & 512 && n !== null && be(n, n.return),
          r & 64 &&
            Jt &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? n : r.concat(n))))));
        break;
      case 26:
        var l = Et;
        if (
          (ht(t, e), Ct(e), r & 512 && n !== null && be(n, n.return), r & 4)
        ) {
          if (
            ((t = n !== null ? n.memoizedState : null),
            (r = e.memoizedState),
            n === null)
          )
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (r = e.memoizedProps),
                    (t = l.ownerDocument || l));
                  t: switch (n) {
                    case "title":
                      ((l = t.getElementsByTagName("title")[0]),
                        (!l ||
                          l[$r] ||
                          l[Me] ||
                          l.namespaceURI === "http://www.w3.org/2000/svg" ||
                          l.hasAttribute("itemprop")) &&
                          ((l = t.createElement(n)),
                          t.head.insertBefore(
                            l,
                            t.querySelector("head > title"),
                          )),
                        De(l, n, r),
                        (l[Me] = e),
                        Pe(l),
                        (n = l));
                      break e;
                    case "link":
                      var i = _d("link", "href", t).get(n + (r.href || ""));
                      if (i) {
                        for (var o = 0; o < i.length; o++)
                          if (
                            ((l = i[o]),
                            l.getAttribute("href") ===
                              (r.href == null ? null : r.href) &&
                              l.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              l.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              l.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            i.splice(o, 1);
                            break t;
                          }
                      }
                      ((l = t.createElement(n)),
                        De(l, n, r),
                        t.head.appendChild(l));
                      break;
                    case "meta":
                      if (
                        (i = _d("meta", "content", t).get(
                          n + (r.content || ""),
                        ))
                      ) {
                        for (o = 0; o < i.length; o++)
                          if (
                            ((l = i[o]),
                            l.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              l.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              l.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              l.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              l.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            i.splice(o, 1);
                            break t;
                          }
                      }
                      ((l = t.createElement(n)),
                        De(l, n, r),
                        t.head.appendChild(l));
                      break;
                    default:
                      throw Error(c(468, n));
                  }
                  ((l[Me] = e), Pe(l), (n = l));
                }
                e.stateNode = n;
              } else Ed(l, e.type, e.stateNode);
            else e.stateNode = xd(l, r, e.memoizedProps);
          else if (t !== r)
            (t === null
              ? n.stateNode !== null &&
                ((n = n.stateNode), n.parentNode.removeChild(n))
              : t.count--,
              r === null
                ? Ed(l, e.type, e.stateNode)
                : xd(l, r, e.memoizedProps));
          else if (r === null && e.stateNode !== null) {
            e.updateQueue = null;
            try {
              var u = e.stateNode,
                s = e.memoizedProps;
              (cd(u, e.type, n.memoizedProps, s), (u[on] = s));
            } catch (g) {
              se(e, e.return, g);
            }
          }
        }
        break;
      case 27:
        if (r & 4 && e.alternate === null) {
          for (l = e.stateNode, i = e.memoizedProps, o = l.firstChild; o; ) {
            var p = o.nextSibling,
              v = o.nodeName;
            (o[$r] ||
              v === "HEAD" ||
              v === "BODY" ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(o),
              (o = p));
          }
          for (o = e.type, p = l.attributes; p.length; )
            l.removeAttributeNode(p[0]);
          (De(l, o, i), (l[Me] = e), (l[on] = i));
        }
      case 5:
        if (
          (ht(t, e),
          Ct(e),
          r & 512 && n !== null && be(n, n.return),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            er(t, "");
          } catch (g) {
            se(e, e.return, g);
          }
        }
        if (r & 4 && ((r = e.stateNode), r != null)) {
          ((t = e.memoizedProps),
            (n = n !== null ? n.memoizedProps : t),
            (l = e.type),
            (e.updateQueue = null));
          try {
            (cd(r, l, n, t), (r[on] = t));
          } catch (g) {
            se(e, e.return, g);
          }
        }
        break;
      case 6:
        if ((ht(t, e), Ct(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((n = e.stateNode), (r = e.memoizedProps));
          try {
            n.nodeValue = r;
          } catch (g) {
            se(e, e.return, g);
          }
        }
        break;
      case 3:
        if (
          ((ao = null),
          (l = Et),
          (Et = uo(t.containerInfo)),
          ht(t, e),
          (Et = l),
          Ct(e),
          r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            El(t.containerInfo);
          } catch (g) {
            se(e, e.return, g);
          }
        break;
      case 4:
        ((n = Et),
          (Et = uo(e.stateNode.containerInfo)),
          ht(t, e),
          Ct(e),
          (Et = n));
        break;
      case 13:
        (ht(t, e),
          Ct(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (zu = T()),
          r & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), xu(e, n))));
        break;
      case 22:
        if (
          (r & 512 && n !== null && be(n, n.return),
          (u = e.memoizedState !== null),
          (s = n !== null && n.memoizedState !== null),
          e.mode & 1)
        ) {
          var x = Jt,
            m = Ie;
          ((Jt = x || u), (Ie = m || s), ht(t, e), (Ie = m), (Jt = x));
        } else ht(t, e);
        if (
          (Ct(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          r & 8192 &&
            ((t._visibility = u ? t._visibility & -2 : t._visibility | 1),
            u &&
              ((t = Jt || Ie),
              n === null || s || t || ((e.mode & 1) !== 0 && xr(e))),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                n = t;
                try {
                  ((l = t.stateNode),
                    u
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = t.stateNode),
                        (p = t.memoizedProps.style),
                        (v =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (o.style.display =
                          v == null || typeof v == "boolean"
                            ? ""
                            : ("" + v).trim())));
                } catch (g) {
                  se(e, e.return, g);
                }
              }
            } else if (t.tag === 6) {
              if (n === null)
                try {
                  t.stateNode.nodeValue = u ? "" : t.memoizedProps;
                } catch (g) {
                  se(e, e.return, g);
                }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        r & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((r = n.retryQueue),
            r !== null && ((n.retryQueue = null), xu(e, r))));
        break;
      case 19:
        (ht(t, e),
          Ct(e),
          r & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), xu(e, n))));
        break;
      case 21:
        break;
      default:
        (ht(t, e), Ct(e));
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Jc(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(c(160));
          }
          switch (r.tag) {
            case 27:
              var l = r.stateNode,
                i = ku(e);
              Li(e, i, l);
              break;
            case 5:
              var o = r.stateNode;
              r.flags & 32 && (er(o, ""), (r.flags &= -33));
              var u = ku(e);
              Li(e, u, o);
              break;
            case 3:
            case 4:
              var s = r.stateNode.containerInfo,
                p = ku(e);
              Su(e, p, s);
              break;
            default:
              throw Error(c(161));
          }
        }
      } catch (v) {
        se(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ft(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Gc(e, t.alternate, t), (t = t.sibling));
  }
  function xr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Sr(4, t, t.return), xr(t));
          break;
        case 1:
          be(t, t.return);
          var n = t.stateNode;
          if (typeof n.componentWillUnmount == "function") {
            var r = t,
              l = t.return;
            try {
              var i = r;
              ((n.props = i.memoizedProps),
                (n.state = i.memoizedState),
                n.componentWillUnmount());
            } catch (o) {
              se(r, l, o);
            }
          }
          xr(t);
          break;
        case 26:
        case 27:
        case 5:
          (be(t, t.return), xr(t));
          break;
        case 22:
          (be(t, t.return), t.memoizedState === null && xr(t));
          break;
        default:
          xr(t);
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        l = e,
        i = t,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (gn(l, i, n), Kc(i, 4));
          break;
        case 1:
          if (
            (gn(l, i, n),
            (l = i.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (s) {
              se(i, i.return, s);
            }
          if (((r = i.updateQueue), r !== null)) {
            var u = r.shared.hiddenCallbacks;
            if (u !== null)
              for (r.shared.hiddenCallbacks = null, r = 0; r < u.length; r++)
                Ta(u[r], l);
          }
          (n && o & 64 && Yc(i), Hn(i, i.return));
          break;
        case 26:
        case 27:
        case 5:
          (gn(l, i, n), n && r === null && o & 4 && Xc(i), Hn(i, i.return));
          break;
        case 12:
          gn(l, i, n);
          break;
        case 13:
          (gn(l, i, n), n && o & 4 && bc(l, i));
          break;
        case 22:
          (i.memoizedState === null && gn(l, i, n), Hn(i, i.return));
          break;
        default:
          gn(l, i, n);
      }
      t = t.sibling;
    }
  }
  function tf(e, t) {
    try {
      wu(t, e);
    } catch (n) {
      se(e, e.return, n);
    }
  }
  function _u(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && il(n)));
  }
  function Eu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && il(e)));
  }
  function Wn(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (nf(e, t, n, r), (t = t.sibling));
  }
  function nf(e, t, n, r) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Wn(e, t, n, r), l & 2048 && tf(t, 9));
        break;
      case 3:
        (Wn(e, t, n, r),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && il(e))));
        break;
      case 23:
        break;
      case 22:
        var i = t.stateNode;
        (t.memoizedState !== null
          ? i._visibility & 4
            ? Wn(e, t, n, r)
            : t.mode & 1
              ? al(e, t)
              : ((i._visibility |= 4), Wn(e, t, n, r))
          : i._visibility & 4
            ? Wn(e, t, n, r)
            : ((i._visibility |= 4),
              Qn(e, t, n, r, (t.subtreeFlags & 10256) !== 0)),
          l & 2048 && _u(t.alternate, t));
        break;
      case 24:
        (Wn(e, t, n, r), l & 2048 && Eu(t.alternate, t));
        break;
      default:
        Wn(e, t, n, r);
    }
  }
  function Qn(e, t, n, r, l) {
    for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        o = t,
        u = n,
        s = r,
        p = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Qn(i, o, u, s, l), tf(o, 8));
          break;
        case 23:
          break;
        case 22:
          var v = o.stateNode;
          (o.memoizedState !== null
            ? v._visibility & 4
              ? Qn(i, o, u, s, l)
              : o.mode & 1
                ? al(i, o)
                : ((v._visibility |= 4), Qn(i, o, u, s, l))
            : ((v._visibility |= 4), Qn(i, o, u, s, l)),
            l && p & 2048 && _u(o.alternate, o));
          break;
        case 24:
          (Qn(i, o, u, s, l), l && p & 2048 && Eu(o.alternate, o));
          break;
        default:
          Qn(i, o, u, s, l);
      }
      t = t.sibling;
    }
  }
  function al(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          r = t,
          l = r.flags;
        switch (r.tag) {
          case 22:
            (al(n, r), l & 2048 && _u(r.alternate, r));
            break;
          case 24:
            (al(n, r), l & 2048 && Eu(r.alternate, r));
            break;
          default:
            al(n, r);
        }
        t = t.sibling;
      }
  }
  var cl = 8192;
  function _r(e) {
    if (e.subtreeFlags & cl)
      for (e = e.child; e !== null; ) (rf(e), (e = e.sibling));
  }
  function rf(e) {
    switch (e.tag) {
      case 26:
        (_r(e),
          e.flags & cl &&
            e.memoizedState !== null &&
            ym(Et, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        _r(e);
        break;
      case 3:
      case 4:
        var t = Et;
        ((Et = uo(e.stateNode.containerInfo)), _r(e), (Et = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = cl), (cl = 16777216), _r(e), (cl = t))
            : _r(e));
        break;
      default:
        _r(e);
    }
  }
  function lf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((ze = r), uf(r, e));
        }
      lf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (of(e), (e = e.sibling));
  }
  function of(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Cu(e), e.flags & 2048 && Sr(9, e, e.return));
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Ri(e))
          : Cu(e);
        break;
      default:
        Cu(e);
    }
  }
  function Ri(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          ((ze = r), uf(r, e));
        }
      lf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Sr(8, t, t.return), Ri(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), Ri(t)));
          break;
        default:
          Ri(t);
      }
      e = e.sibling;
    }
  }
  function uf(e, t) {
    for (; ze !== null; ) {
      var n = ze;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Sr(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          il(n.memoizedState.cache);
      }
      if (((r = n.child), r !== null)) ((r.return = n), (ze = r));
      else
        e: for (n = e; ze !== null; ) {
          r = ze;
          var l = r.sibling,
            i = r.return;
          if ((Zc(r), r === n)) {
            ze = null;
            break e;
          }
          if (l !== null) {
            ((l.return = i), (ze = l));
            break e;
          }
          ze = i;
        }
    }
  }
  var Qp = {
      getCacheSignal: function () {
        return Oe(we).controller.signal;
      },
      getCacheForType: function (e) {
        var t = Oe(we),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
    },
    Bp = typeof WeakMap == "function" ? WeakMap : Map,
    Ti = D.ReactCurrentDispatcher,
    Oi = D.ReactCurrentCache,
    Di = D.ReactCurrentOwner,
    mt = D.ReactCurrentBatchConfig,
    Q = 0,
    oe = null,
    B = null,
    J = 0,
    ye = 0,
    yt = null,
    Pu = !1,
    qt = 0,
    Se = 0,
    Er = null,
    vn = 0,
    Cr = 0,
    Nu = 0,
    Ye = 0,
    fl = null,
    Mt = null,
    Pr = !1,
    Fi = !1,
    zu = 0,
    Nr = 1 / 0,
    dl = null,
    Mi = !1,
    ju = null,
    wn = null,
    Ii = !1,
    bt = null,
    pl = 0,
    Lu = 0,
    Ru = null,
    hl = 0,
    Tu = null;
  function en(e) {
    return (e.mode & 1) === 0
      ? 2
      : (Q & 2) !== 0 && J !== 0
        ? J & -J
        : Uc() !== null
          ? ((e = cr), e !== 0 ? e : Uo())
          : ((e = ae),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 32 : Df(e.type))),
            e);
  }
  function $e(e, t, n) {
    (((e === oe && ye === 2) || e.cancelPendingCommit !== null) &&
      (Kn(e, 0), It(e, J, Ye)),
      ml(e, n),
      ((Q & 2) === 0 || e !== oe) &&
        (e === oe && ((Q & 2) === 0 && (Cr |= n), Se === 4 && It(e, J, Ye)),
        Je(e),
        n === 2 &&
          Q === 0 &&
          (t.mode & 1) === 0 &&
          ((Nr = T() + 500), Fn(!0))));
  }
  function sf(e, t) {
    if ((Q & 6) !== 0) throw Error(c(327));
    var n = e.callbackNode;
    if (zr() && e.callbackNode !== n) return null;
    var r = Hl(e, e === oe ? J : 0);
    if (r === 0) return null;
    var l = (r & 60) === 0 && (r & e.expiredLanes) === 0 && !t;
    if (((t = l ? Xp(e, r) : Ai(e, r)), t !== 0)) {
      var i = l;
      do {
        if (t === 6) It(e, r, 0);
        else {
          if (((l = e.current.alternate), i && !Kp(l))) {
            ((t = Ai(e, r)), (i = !1));
            continue;
          }
          if (t === 2) {
            i = r;
            var o = Hs(e, i);
            o !== 0 && ((r = o), (t = af(e, i, o)));
          }
          if (t === 1) throw ((n = Er), Kn(e, 0), It(e, r, 0), Je(e), n);
          ((e.finishedWork = l), (e.finishedLanes = r));
          e: {
            switch (((i = e), t)) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((r & 4194176) === r) {
                  It(i, r, Ye);
                  break e;
                }
                break;
              case 2:
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((r & 62914560) === r && ((t = zu + 300 - T()), 10 < t)) {
              if ((It(i, r, Ye), Hl(i, 0) !== 0)) break e;
              i.timeoutHandle = pd(cf.bind(null, i, l, Mt, dl, Pr, r, Ye), t);
              break e;
            }
            cf(i, l, Mt, dl, Pr, r, Ye);
          }
        }
        break;
      } while (!0);
    }
    return (
      Je(e),
      za(e, T()),
      (e = e.callbackNode === n ? sf.bind(null, e) : null),
      e
    );
  }
  function af(e, t, n) {
    var r = fl,
      l = e.current.memoizedState.isDehydrated;
    if ((l && (Kn(e, n).flags |= 256), (n = Ai(e, n)), n !== 2)) {
      if (Pu && !l) return ((e.errorRecoveryDisabledLanes |= t), (Cr |= t), 4);
      ((e = Mt), (Mt = r), e !== null && Ou(e));
    }
    return n;
  }
  function Ou(e) {
    Mt === null ? (Mt = e) : Mt.push.apply(Mt, e);
  }
  function cf(e, t, n, r, l, i, o) {
    if (
      (i & 42) === 0 &&
      ((Fl = { stylesheets: null, count: 0, unsuspend: mm }),
      rf(t),
      (t = gm()),
      t !== null)
    ) {
      ((e.cancelPendingCommit = t(Iu.bind(null, e, n, r, l))), It(e, i, o));
      return;
    }
    Iu(e, n, r, l, o);
  }
  function Kp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!ct(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ml(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      Q & 2 ? (Pr = !0) : Q & 4 && (Fi = !0),
      Uu());
  }
  function It(e, t, n) {
    ((t &= ~Nu), (t &= ~Cr), (e.suspendedLanes |= t), (e.pingedLanes &= ~t));
    for (var r = e.expirationTimes, l = t; 0 < l; ) {
      var i = 31 - ut(l),
        o = 1 << i;
      ((r[i] = -1), (l &= ~o));
    }
    n !== 0 && Bs(e, n, t);
  }
  function Du(e, t) {
    var n = Q;
    Q |= 1;
    try {
      return e(t);
    } finally {
      ((Q = n), Q === 0 && ((Nr = T() + 500), Fn(!0)));
    }
  }
  function Bn(e) {
    bt !== null && bt.tag === 0 && (Q & 6) === 0 && zr();
    var t = Q;
    Q |= 1;
    var n = mt.transition,
      r = ae;
    try {
      if (((mt.transition = null), (ae = 2), e)) return e();
    } finally {
      ((ae = r), (mt.transition = n), (Q = t), (Q & 6) === 0 && Fn(!1));
    }
  }
  function Fu() {
    if (B !== null) {
      if (ye === 0) var e = B.return;
      else ((e = B), Ei(), Xo(e), (dr = null), (Zr = 0), (e = B));
      for (; e !== null; ) (Wc(e.alternate, e), (e = e.return));
      B = null;
    }
  }
  function Kn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), em(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Fu(),
      (oe = e),
      (B = n = kn(e.current, null)),
      (J = t),
      (ye = 0),
      (yt = null),
      (Pu = !1),
      (Se = 0),
      (Er = null),
      (Ye = Nu = Cr = vn = 0),
      (Mt = fl = null),
      (Pr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var l = 31 - ut(r),
          i = 1 << l;
        ((t |= e[l]), (r &= ~i));
      }
    return ((qt = t), ql(), n);
  }
  function ff(e, t) {
    ((X = null),
      (hr.current = mn),
      (Di.current = null),
      t === li
        ? ((t = Ia()),
          (ye =
            df() && (vn & 134217727) === 0 && (Cr & 134217727) === 0 ? 2 : 3))
        : t === Da
          ? ((t = Ia()), (ye = 4))
          : (ye =
              t === Cc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (yt = t),
      B === null && ((Se = 1), (Er = t)));
  }
  function df() {
    var e = Lt.current;
    return e === null
      ? !0
      : (J & 4194176) === J
        ? Rt === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? e === Rt
          : !1;
  }
  function pf() {
    var e = Ti.current;
    return ((Ti.current = mn), e === null ? mn : e);
  }
  function hf() {
    var e = Oi.current;
    return ((Oi.current = Qp), e);
  }
  function Mu() {
    ((Se = 4),
      ((vn & 134217727) === 0 && (Cr & 134217727) === 0) ||
        oe === null ||
        It(oe, J, Ye));
  }
  function Ai(e, t) {
    var n = Q;
    Q |= 2;
    var r = pf(),
      l = hf();
    ((oe !== e || J !== t) && ((dl = null), Kn(e, t)), (t = !1));
    e: do
      try {
        if (ye !== 0 && B !== null) {
          var i = B,
            o = yt;
          switch (ye) {
            case 8:
              (Fu(), (Se = 6));
              break e;
            case 3:
            case 2:
              t || Lt.current !== null || (t = !0);
            default:
              ((ye = 0), (yt = null), yl(e, i, o));
          }
        }
        Yp();
        break;
      } catch (u) {
        ff(e, u);
      }
    while (!0);
    if (
      (t && e.shellSuspendCounter++,
      Ei(),
      (Q = n),
      (Ti.current = r),
      (Oi.current = l),
      B !== null)
    )
      throw Error(c(261));
    return ((oe = null), (J = 0), ql(), Se);
  }
  function Yp() {
    for (; B !== null; ) mf(B);
  }
  function Xp(e, t) {
    var n = Q;
    Q |= 2;
    var r = pf(),
      l = hf();
    (oe !== e || J !== t) && ((dl = null), (Nr = T() + 500), Kn(e, t));
    e: do
      try {
        if (ye !== 0 && B !== null) {
          t = B;
          var i = yt;
          t: switch (ye) {
            case 1:
              ((ye = 0), (yt = null), yl(e, t, i));
              break;
            case 2:
              if (Fa(i)) {
                ((ye = 0), (yt = null), yf(t));
                break;
              }
              ((t = function () {
                (ye === 2 && oe === e && (ye = 7), Je(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              ye = 7;
              break e;
            case 4:
              ye = 5;
              break e;
            case 7:
              Fa(i)
                ? ((ye = 0), (yt = null), yf(t))
                : ((ye = 0), (yt = null), yl(e, t, i));
              break;
            case 5:
              switch (B.tag) {
                case 5:
                case 26:
                case 27:
                  ((t = B), (ye = 0), (yt = null));
                  var o = t.sibling;
                  if (o !== null) B = o;
                  else {
                    var u = t.return;
                    u !== null ? ((B = u), Ui(u)) : (B = null);
                  }
                  break t;
              }
              ((ye = 0), (yt = null), yl(e, t, i));
              break;
            case 6:
              ((ye = 0), (yt = null), yl(e, t, i));
              break;
            case 8:
              (Fu(), (Se = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Gp();
        break;
      } catch (s) {
        ff(e, s);
      }
    while (!0);
    return (
      Ei(),
      (Ti.current = r),
      (Oi.current = l),
      (Q = n),
      B !== null ? 0 : ((oe = null), (J = 0), ql(), Se)
    );
  }
  function Gp() {
    for (; B !== null && !w(); ) mf(B);
  }
  function mf(e) {
    var t = $u(e.alternate, e, qt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Ui(e) : (B = t),
      (Di.current = null));
  }
  function yf(e) {
    var t = e.alternate;
    switch (e.tag) {
      case 2:
        e.tag = 0;
      case 15:
      case 0:
        var n = e.type,
          r = e.pendingProps;
        r = e.elementType === n ? r : qe(n, r);
        var l = Ue(n) ? an : Re.current;
        ((l = Rn(e, l)), (t = Rc(t, e, r, n, l, J)));
        break;
      case 11:
        ((n = e.type.render),
          (r = e.pendingProps),
          (r = e.elementType === n ? r : qe(n, r)),
          (t = Rc(t, e, r, n, e.ref, J)));
        break;
      case 5:
        Xo(e);
      default:
        (Wc(t, e), (e = B = kf(e, qt)), (t = $u(t, e, qt)));
    }
    ((e.memoizedProps = e.pendingProps),
      t === null ? Ui(e) : (B = t),
      (Di.current = null));
  }
  function yl(e, t, n) {
    (Ei(), Xo(t), (dr = null), (Zr = 0));
    var r = t.return;
    try {
      if (Np(e, r, t, n, J)) {
        ((Se = 1), (Er = n), (B = null));
        return;
      }
    } catch (l) {
      if (r !== null) throw ((B = r), l);
      ((Se = 1), (Er = n), (B = null));
      return;
    }
    if (t.flags & 32768)
      e: {
        e = t;
        do {
          if (((t = Ip(e.alternate, e)), t !== null)) {
            ((t.flags &= 32767), (B = t));
            break e;
          }
          ((e = e.return),
            e !== null &&
              ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
            (B = e));
        } while (e !== null);
        ((Se = 6), (B = null));
      }
    else Ui(t);
  }
  function Ui(e) {
    var t = e;
    do {
      e = t.return;
      var n = Mp(t.alternate, t, qt);
      if (n !== null) {
        B = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        B = t;
        return;
      }
      B = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function Iu(e, t, n, r, l) {
    var i = ae,
      o = mt.transition;
    try {
      ((mt.transition = null), (ae = 2), Zp(e, t, n, r, i, l));
    } finally {
      ((mt.transition = o), (ae = i));
    }
    return null;
  }
  function Zp(e, t, n, r, l, i) {
    do zr();
    while (bt !== null);
    if ((Q & 6) !== 0) throw Error(c(327));
    var o = e.finishedWork,
      u = e.finishedLanes;
    if (o === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current))
      throw Error(c(177));
    ((e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null));
    var s = o.lanes | o.childLanes;
    if (
      ((s |= Fo),
      ep(e, s, i),
      (Fi = !1),
      e === oe && ((B = oe = null), (J = 0)),
      ((o.subtreeFlags & 10256) === 0 && (o.flags & 10256) === 0) ||
        Ii ||
        ((Ii = !0),
        (Lu = s),
        (Ru = n),
        eh(he, function () {
          return (zr(), null);
        })),
      (n = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || n)
    ) {
      ((n = mt.transition), (mt.transition = null), (i = ae), (ae = 2));
      var p = Q;
      ((Q |= 4),
        (Di.current = null),
        Hp(e, o),
        ef(o, e),
        Kh(gs),
        (Ji = !!ys),
        (gs = ys = null),
        (e.current = o),
        Gc(e, o.alternate, o),
        I(),
        (Q = p),
        (ae = i),
        (mt.transition = n));
    } else e.current = o;
    if (
      (Ii ? ((Ii = !1), (bt = e), (pl = u)) : gf(e, s),
      (s = e.pendingLanes),
      s === 0 && (wn = null),
      Gd(o.stateNode),
      Je(e),
      t !== null)
    )
      for (l = e.onRecoverableError, o = 0; o < t.length; o++)
        ((s = t[o]),
          (n = { digest: s.digest, componentStack: s.stack }),
          l(s.value, n));
    if (Mi) throw ((Mi = !1), (e = ju), (ju = null), e);
    return (
      (pl & 3) !== 0 && e.tag !== 0 && zr(),
      (s = e.pendingLanes),
      r || Fi || ((u & 4194218) !== 0 && (s & 42) !== 0)
        ? e === Tu
          ? hl++
          : ((hl = 0), (Tu = e))
        : (hl = 0),
      Fn(!1),
      null
    );
  }
  function gf(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), il(t)));
  }
  function zr() {
    if (bt !== null) {
      var e = bt,
        t = Lu;
      Lu = 0;
      var n = Ys(pl),
        r = 32 > n ? 32 : n;
      n = mt.transition;
      var l = ae;
      try {
        if (((mt.transition = null), (ae = r), bt === null)) var i = !1;
        else {
          ((r = Ru), (Ru = null));
          var o = bt,
            u = pl;
          if (((bt = null), (pl = 0), (Q & 6) !== 0)) throw Error(c(331));
          var s = Q;
          if (
            ((Q |= 4),
            of(o.current),
            nf(o, o.current, u, r),
            (Q = s),
            Fn(!1),
            Ze && typeof Ze.onPostCommitFiberRoot == "function")
          )
            try {
              Ze.onPostCommitFiberRoot(Ar, o);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        ((ae = l), (mt.transition = n), gf(e, t));
      }
    }
    return !1;
  }
  function vf(e, t, n) {
    ((t = wr(n, t)),
      (t = xc(e, t, 2)),
      (e = Xt(e, t, 2)),
      e !== null && (ml(e, 2), Je(e)));
  }
  function se(e, t, n) {
    if (e.tag === 3) vf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (wn === null || !wn.has(r)))
          ) {
            ((e = wr(n, e)),
              (e = _c(t, e, 2)),
              (t = Xt(t, e, 2)),
              t !== null && (ml(t, 2), Je(t)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Au(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Bp();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) ||
      ((Pu = !0), l.add(n), (e = Jp.bind(null, e, t, n)), t.then(e, e));
  }
  function Jp(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      Q & 2 ? (Pr = !0) : Q & 4 && (Fi = !0),
      Uu(),
      oe === e &&
        (J & n) === n &&
        (Se === 4 || (Se === 3 && (J & 62914560) === J && 300 > T() - zu)
          ? (Q & 2) === 0 && Kn(e, 0)
          : (Nu |= n)),
      Je(e));
  }
  function wf(e, t) {
    (t === 0 && (t = (e.mode & 1) === 0 ? 2 : Qs()),
      (e = fn(e, t)),
      e !== null && (ml(e, t), Je(e)));
  }
  function qp(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wf(e, n));
  }
  function bp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (r !== null && r.delete(t), wf(e, n));
  }
  function Uu() {
    if (50 < hl)
      throw (
        (hl = 0),
        (Tu = null),
        Q & 2 && oe !== null && (oe.errorRecoveryDisabledLanes |= J),
        Error(c(185))
      );
  }
  var $u;
  $u = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Be.current) Te = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Te = !1), Lp(e, t, n));
        Te = (e.flags & 131072) !== 0;
      }
    else ((Te = !1), W && (t.flags & 1048576) !== 0 && Sa(t, Gl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (xi(e, t), (e = t.pendingProps));
        var l = Rn(t, Re.current);
        (Zt(t, n), (l = pi(null, t, r, e, l, n)));
        var i = hi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ue(r) ? ((i = !0), Yl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ri(t),
              (l.updater = ki),
              (t.stateNode = l),
              (l._reactInternals = t),
              ru(t, r, e, n),
              (t = ou(null, t, r, !0, i, n)))
            : ((t.tag = 0), W && i && Zl(t), Ne(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (xi(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = nh(r)),
            (e = qe(r, e)),
            l)
          ) {
            case 0:
              t = iu(null, t, r, e, n);
              break e;
            case 1:
              t = Tc(null, t, r, e, n);
              break e;
            case 11:
              t = Pc(null, t, r, e, n);
              break e;
            case 14:
              t = Nc(null, t, r, qe(r.type, e), n);
              break e;
          }
          throw Error(c(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : qe(r, l)),
          iu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : qe(r, l)),
          Tc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Oc(t), e === null)) throw Error(c(387));
          ((l = t.pendingProps),
            (i = t.memoizedState),
            (r = i.element),
            Vo(e, t),
            Yr(t, l, null, n));
          var o = t.memoizedState;
          if (
            ((l = o.cache),
            yn(t, we, l),
            l !== i.cache && Ci(t, we, n),
            Kr(),
            (l = o.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: l, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((r = wr(Error(c(423)), t)), (t = Dc(e, t, l, n, r)));
              break e;
            } else if (l !== r) {
              ((r = wr(Error(c(424)), t)), (t = Dc(e, t, l, n, r)));
              break e;
            } else
              for (
                Y = Tl(t.stateNode.containerInfo.firstChild),
                  te = t,
                  W = !0,
                  _t = null,
                  zt = !0,
                  n = $a(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((or(), l === r)) {
              t = Tt(e, t, n);
              break e;
            }
            Ne(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ll(e, t),
          (n = t.memoizedState =
            dm(t.type, e === null ? null : e.memoizedProps, t.pendingProps)),
          e !== null ||
            W ||
            n !== null ||
            ((n = t.type),
            (e = t.pendingProps),
            (r = oo(M.current).createElement(n)),
            (r[Me] = t),
            (r[on] = e),
            De(r, n, e),
            Pe(r),
            (t.stateNode = r)),
          null
        );
      case 27:
        return (
          St(t),
          e === null &&
            W &&
            ((r = t.stateNode = vd(t.type, t.pendingProps, M.current)),
            (te = t),
            (zt = !0),
            (Y = Tl(r.firstChild))),
          (r = t.pendingProps.children),
          e !== null || W ? Ne(e, t, r, n) : (t.child = Mn(t, null, r, n)),
          ll(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            W &&
            ((l = r = Y),
            l
              ? xa(t, l) ||
                (Dn(t) && cn(),
                (Y = gt(l)),
                (i = te),
                Y && xa(t, Y)
                  ? Jl(i, l)
                  : (ir(te, t), (W = !1), (te = t), (Y = r)))
              : (Dn(t) && cn(), ir(te, t), (W = !1), (te = t), (Y = r))),
          St(t),
          (l = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (r = i.children),
          vs(l, i) ? (r = null) : o !== null && vs(l, o) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((l = pi(e, t, xp, null, null, n)),
            (le._currentValue = l),
            Te &&
              e !== null &&
              e.memoizedState.memoizedState !== l &&
              Ci(t, le, n)),
          ll(e, t),
          Ne(e, t, r, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            W &&
            ((r = t.pendingProps !== ""),
            (e = n = Y),
            e && r
              ? _a(t, e) ||
                (Dn(t) && cn(),
                (Y = gt(e)),
                (r = te),
                Y && _a(t, Y)
                  ? Jl(r, e)
                  : (ir(te, t), (W = !1), (te = t), (Y = n)))
              : (Dn(t) && cn(), ir(te, t), (W = !1), (te = t), (Y = n))),
          null
        );
      case 13:
        return Fc(e, t, n);
      case 4:
        return (
          Nt(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mn(t, null, r, n)) : Ne(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : qe(r, l)),
          Pc(e, t, r, l, n)
        );
      case 7:
        return (Ne(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ne(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ne(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            yn(t, r, o),
            i !== null)
          )
            if (ct(i.value, o)) {
              if (i.children === l.children && !Be.current) {
                t = Tt(e, t, n);
                break e;
              }
            } else Ci(t, r, n);
          (Ne(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Zt(t, n),
          (l = Oe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ne(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = qe(r, t.pendingProps)),
          (l = qe(r.type, l)),
          Nc(e, t, r, l, n)
        );
      case 15:
        return zc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : qe(r, l)),
          xi(e, t),
          (t.tag = 1),
          Ue(r) ? ((e = !0), Yl(t)) : (e = !1),
          Zt(t, n),
          vc(t, r, l),
          ru(t, r, l, n),
          ou(null, t, r, !0, e, n)
        );
      case 19:
        return Ic(e, t, n);
      case 22:
        return jc(e, t, n);
      case 24:
        return (
          Zt(t, n),
          (r = Oe(we)),
          e === null
            ? ((l = yu()),
              l === null &&
                ((l = oe),
                (i = mu()),
                (l.pooledCache = i),
                i.refCount++,
                i !== null && (l.pooledCacheLanes |= n),
                (l = i)),
              (t.memoizedState = { parent: r, cache: l }),
              ri(t),
              yn(t, we, l))
            : ((e.lanes & n) !== 0 && (Vo(e, t), Yr(t, null, null, n), Kr()),
              (l = e.memoizedState),
              (i = t.memoizedState),
              l.parent !== r
                ? ((l = { parent: r, cache: r }),
                  (t.memoizedState = l),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = l),
                  yn(t, we, r))
                : ((r = i.cache), yn(t, we, r), r !== l.cache && Ci(t, we, n))),
          Ne(e, t, t.pendingProps.children, n),
          t.child
        );
    }
    throw Error(c(156, t.tag));
  };
  function eh(e, t) {
    return xt(e, t);
  }
  function th(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function tt(e, t, n, r) {
    return new th(e, t, n, r);
  }
  function Vu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function nh(e) {
    if (typeof e == "function") return Vu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ue)) return 11;
      if (e === Vt) return 14;
    }
    return 2;
  }
  function kn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = tt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 31457280),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function kf(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function $i(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) Vu(e) && (o = 1);
    else if (typeof e == "string")
      o = hm(e, n, _.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ae:
          return Yn(n.children, l, i, t);
        case Xe:
          ((o = 8), (l |= 8), (l & 1) !== 0 && (l |= 16));
          break;
        case Ut:
          return (
            (e = tt(12, n, t, l | 2)),
            (e.elementType = Ut),
            (e.lanes = i),
            e
          );
        case lt:
          return (
            (e = tt(13, n, t, l)),
            (e.elementType = lt),
            (e.lanes = i),
            e
          );
        case it:
          return (
            (e = tt(19, n, t, l)),
            (e.elementType = it),
            (e.lanes = i),
            e
          );
        case kt:
          return Vi(n, l, i, t);
        case Xn:
        case tn:
        case Ht:
          return (
            (e = tt(24, n, t, l)),
            (e.elementType = Ht),
            (e.lanes = i),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $t:
                o = 10;
                break e;
              case Fe:
                o = 9;
                break e;
              case Pt:
              case ue:
                o = 11;
                break e;
              case Vt:
                o = 14;
                break e;
              case He:
                ((o = 16), (r = null));
                break e;
            }
          throw Error(c(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = tt(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function Yn(e, t, n, r) {
    return ((e = tt(7, e, r, t)), (e.lanes = n), e);
  }
  function Vi(e, t, n, r) {
    ((e = tt(22, e, r, t)), (e.elementType = kt), (e.lanes = n));
    var l = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var i = l._current;
        if (i === null) throw Error(c(456));
        if ((l._pendingVisibility & 2) === 0) {
          var o = fn(i, 2);
          o !== null && ((l._pendingVisibility |= 2), $e(o, i, 2));
        }
      },
      attach: function () {
        var i = l._current;
        if (i === null) throw Error(c(456));
        if ((l._pendingVisibility & 2) !== 0) {
          var o = fn(i, 2);
          o !== null && ((l._pendingVisibility &= -3), $e(o, i, 2));
        }
      },
    };
    return ((e.stateNode = l), e);
  }
  function Hu(e, t, n) {
    return ((e = tt(6, e, null, t)), (e.lanes = n), e);
  }
  function Wu(e, t, n) {
    return (
      (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function rh(e, t, n, r, l, i) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wo(0)),
      (this.hiddenUpdates = wo(null)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function Qu(e, t, n, r, l, i, o, u, s, p, v) {
    return (
      (e = new rh(e, t, n, u, s, v)),
      t === 1 ? ((t = 1), i === !0 && (t |= 24)) : (t = 0),
      (i = tt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = mu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: r, isDehydrated: n, cache: t }),
      ri(i),
      e
    );
  }
  function lh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Sf(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
      if (Ln(e) !== e || e.tag !== 1) throw Error(c(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ue(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(c(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ue(n)) return wa(e, n, t);
    }
    return t;
  }
  function xf(e, t, n, r, l, i, o, u, s, p, v) {
    return (
      (e = Qu(n, r, !0, e, l, i, o, u, s, p, v)),
      (e.context = Sf(null)),
      (n = e.current),
      (r = en(n)),
      (l = jt(r)),
      (l.callback = t ?? null),
      Xt(n, l, r),
      (e.current.lanes = r),
      ml(e, r),
      Je(e),
      e
    );
  }
  function Hi(e, t, n, r) {
    var l = t.current,
      i = en(l);
    return (
      (n = Sf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = jt(i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, i)),
      e !== null && ($e(e, l, i), Br(e, l, i)),
      i
    );
  }
  function Wi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 27:
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ih(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ur(t.pendingLanes);
          n !== 0 &&
            (tp(t, n), Je(t), (Q & 6) === 0 && ((Nr = T() + 500), Fn(!1)));
        }
        break;
      case 13:
        (Bn(function () {
          var r = fn(e, 2);
          r !== null && $e(r, e, 2);
        }),
          Bu(e, 2));
    }
  }
  function _f(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Bu(e, t) {
    (_f(e, t), (e = e.alternate) && _f(e, t));
  }
  function Ef(e) {
    if (e.tag === 13) {
      var t = fn(e, 67108864);
      (t !== null && $e(t, e, 67108864), Bu(e, 67108864));
    }
  }
  function oh() {
    return null;
  }
  var Ku = !1;
  function Cf(e, t, n) {
    if (Ku) return e(t, n);
    Ku = !0;
    try {
      return Du(e, t, n);
    } finally {
      ((Ku = !1), (tr !== null || nr !== null) && (Bn(), pa()));
    }
  }
  function gl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = un(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Yu = !1;
  if (Qt)
    try {
      var vl = {};
      (Object.defineProperty(vl, "passive", {
        get: function () {
          Yu = !0;
        },
      }),
        window.addEventListener("test", vl, vl),
        window.removeEventListener("test", vl, vl));
    } catch {
      Yu = !1;
    }
  function Qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bi() {
    return !0;
  }
  function Pf() {
    return !1;
  }
  function nt(e) {
    function t(n, r, l, i, o) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Bi
          : Pf),
        (this.isPropagationStopped = Pf),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Bi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Bi));
        },
        persist: function () {},
        isPersistent: Bi,
      }),
      t
    );
  }
  var jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ki = nt(jr),
    wl = C({}, jr, { view: 0, detail: 0 }),
    uh = nt(wl),
    Xu,
    Gu,
    kl,
    Yi = C({}, wl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ju,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== kl &&
              (kl && e.type === "mousemove"
                ? ((Xu = e.screenX - kl.screenX), (Gu = e.screenY - kl.screenY))
                : (Gu = Xu = 0),
              (kl = e)),
            Xu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Gu;
      },
    }),
    Nf = nt(Yi),
    sh = C({}, Yi, { dataTransfer: 0 }),
    ah = nt(sh),
    ch = C({}, wl, { relatedTarget: 0 }),
    Zu = nt(ch),
    fh = C({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dh = nt(fh),
    ph = C({}, jr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hh = nt(ph),
    mh = C({}, jr, { data: 0 }),
    zf = nt(mh),
    yh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vh[e])
        ? !!t[e]
        : !1;
  }
  function Ju() {
    return wh;
  }
  var kh = C({}, wl, {
      key: function (e) {
        if (e.key) {
          var t = yh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? gh[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ju,
      charCode: function (e) {
        return e.type === "keypress" ? Qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Sh = nt(kh),
    xh = C({}, Yi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    jf = nt(xh),
    _h = C({}, wl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ju,
    }),
    Eh = nt(_h),
    Ch = C({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ph = nt(Ch),
    Nh = C({}, Yi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zh = nt(Nh);
  function jh(e, t, n, r, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = un(l).action,
        o = r.submitter;
      if (
        (o &&
          ((t = (t = un(o)) ? t.formAction : o.getAttribute("formAction")),
          t != null && ((i = t), (o = null))),
        typeof i == "function")
      ) {
        var u = new Ki("action", "action", null, r, l);
        e.push({
          event: u,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (!r.defaultPrevented) {
                  if ((u.preventDefault(), o)) {
                    var s = o.ownerDocument.createElement("input");
                    ((s.name = o.name),
                      (s.value = o.value),
                      o.parentNode.insertBefore(s, o));
                    var p = new FormData(l);
                    s.parentNode.removeChild(s);
                  } else p = new FormData(l);
                  fc(
                    n,
                    { pending: !0, data: p, method: l.method, action: i },
                    i,
                    p,
                  );
                }
              },
              currentTarget: l,
            },
          ],
        });
      }
    }
  }
  var qu = !1,
    Sn = null,
    xn = null,
    _n = null,
    Sl = new Map(),
    xl = new Map(),
    En = [],
    Lh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Lf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        _n = null;
        break;
      case "pointerover":
      case "pointerout":
        Sl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xl.delete(t.pointerId);
    }
  }
  function _l(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Gn(t)), t !== null && Ef(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Rh(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Sn = _l(Sn, e, t, n, r, l)), !0);
      case "dragenter":
        return ((xn = _l(xn, e, t, n, r, l)), !0);
      case "mouseover":
        return ((_n = _l(_n, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Sl.set(i, _l(Sl.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          xl.set(i, _l(xl.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function Rf(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = Ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ha(n)), t !== null)) {
            ((e.blockedOn = t),
              np(e.priority, function () {
                if (n.tag === 13) {
                  var r = en(n),
                    l = fn(n, r);
                  (l !== null && $e(l, n, r), Bu(n, r));
                }
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = es(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ro = r), n.target.dispatchEvent(r), (Ro = null));
      } else return ((t = Gn(n)), t !== null && Ef(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Tf(e, t, n) {
    Xi(e) && n.delete(t);
  }
  function Th() {
    ((qu = !1),
      Sn !== null && Xi(Sn) && (Sn = null),
      xn !== null && Xi(xn) && (xn = null),
      _n !== null && Xi(_n) && (_n = null),
      Sl.forEach(Tf),
      xl.forEach(Tf));
  }
  function Gi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      qu ||
        ((qu = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, Th)));
  }
  var Zi = null;
  function Of(e) {
    Zi !== e &&
      ((Zi = e),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        Zi === e && (Zi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            l = e[t + 2];
          if (typeof r != "function") {
            if (ts(r || n) === null) continue;
            break;
          }
          var i = Gn(n);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            fc(i, { pending: !0, data: l, method: n.method, action: r }, r, l));
        }
      }));
  }
  function El(e) {
    function t(s) {
      return Gi(s, e);
    }
    (Sn !== null && Gi(Sn, e),
      xn !== null && Gi(xn, e),
      _n !== null && Gi(_n, e),
      Sl.forEach(t),
      xl.forEach(t));
    for (var n = 0; n < En.length; n++) {
      var r = En[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); )
      (Rf(n), n.blockedOn === null && En.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (r = 0; r < n.length; r += 3) {
        var l = n[r],
          i = n[r + 1],
          o = un(l);
        if (typeof i == "function") o || Of(n);
        else if (o) {
          var u = null;
          if (i && i.hasAttribute("formAction")) {
            if (((l = i), (o = un(i)))) u = o.formAction;
            else if (ts(l) !== null) continue;
          } else u = o.action;
          (typeof u == "function" ? (n[r + 1] = u) : (n.splice(r, 3), (r -= 3)),
            Of(n));
        }
      }
  }
  var Lr = D.ReactCurrentBatchConfig,
    Ji = !0;
  function Oh(e, t, n, r) {
    var l = ae,
      i = Lr.transition;
    Lr.transition = null;
    try {
      ((ae = 2), bu(e, t, n, r));
    } finally {
      ((ae = l), (Lr.transition = i));
    }
  }
  function Dh(e, t, n, r) {
    var l = ae,
      i = Lr.transition;
    Lr.transition = null;
    try {
      ((ae = 8), bu(e, t, n, r));
    } finally {
      ((ae = l), (Lr.transition = i));
    }
  }
  function bu(e, t, n, r) {
    if (Ji) {
      var l = es(r);
      if (l === null) (ps(e, t, r, qi, n), Lf(e, r));
      else if (Rh(l, e, t, n, r)) r.stopPropagation();
      else if ((Lf(e, r), t & 4 && -1 < Lh.indexOf(e))) {
        for (; l !== null; ) {
          var i = Gn(l);
          if (
            (i !== null && ih(i),
            (i = es(r)),
            i === null && ps(e, t, r, qi, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else ps(e, t, r, null, n);
    }
  }
  function es(e) {
    return ((e = To(e)), ts(e));
  }
  var qi = null;
  function ts(e) {
    if (((qi = null), (e = zn(e)), e !== null)) {
      var t = Ln(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = ha(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((qi = e), null);
  }
  function Df(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (V()) {
          case K:
            return 2;
          case ie:
            return 8;
          case he:
          case ne:
            return 32;
          case Qe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cn = null,
    ns = null,
    bi = null;
  function Ff() {
    if (bi) return bi;
    var e,
      t = ns,
      n = t.length,
      r,
      l = "value" in Cn ? Cn.value : Cn.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (bi = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  var Fh = [9, 13, 27, 32],
    rs = Qt && "CompositionEvent" in window,
    Cl = null;
  Qt && "documentMode" in document && (Cl = document.documentMode);
  var Mh = Qt && "TextEvent" in window && !Cl,
    Mf = Qt && (!rs || (Cl && 8 < Cl && 11 >= Cl)),
    If = " ",
    Af = !1;
  function Uf(e, t) {
    switch (e) {
      case "keyup":
        return Fh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $f(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Rr = !1;
  function Ih(e, t) {
    switch (e) {
      case "compositionend":
        return $f(t);
      case "keypress":
        return t.which !== 32 ? null : ((Af = !0), If);
      case "textInput":
        return ((e = t.data), e === If && Af ? null : e);
      default:
        return null;
    }
  }
  function Ah(e, t) {
    if (Rr)
      return e === "compositionend" || (!rs && Uf(e, t))
        ? ((e = Ff()), (bi = ns = Cn = null), (Rr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Mf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uh[e.type] : t === "textarea";
  }
  function Hf(e, t, n, r) {
    (da(r),
      (t = lo(t, "onChange")),
      0 < t.length &&
        ((n = new Ki("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Pl = null,
    Nl = null;
  function $h(e) {
    od(e, 0);
  }
  function eo(e) {
    var t = Zn(e);
    if (ta(t)) return e;
  }
  function Vh(e, t) {
    if (e === "change") return t;
  }
  var Wf = !1;
  if (Qt) {
    var ls;
    if (Qt) {
      var is = "oninput" in document;
      if (!is) {
        var Qf = document.createElement("div");
        (Qf.setAttribute("oninput", "return;"),
          (is = typeof Qf.oninput == "function"));
      }
      ls = is;
    } else ls = !1;
    Wf = ls && (!document.documentMode || 9 < document.documentMode);
  }
  function Bf() {
    Pl && (Pl.detachEvent("onpropertychange", Kf), (Nl = Pl = null));
  }
  function Kf(e) {
    if (e.propertyName === "value" && eo(Nl)) {
      var t = [];
      (Hf(t, Nl, e, To(e)), Cf($h, t));
    }
  }
  function Hh(e, t, n) {
    e === "focusin"
      ? (Bf(), (Pl = t), (Nl = n), Pl.attachEvent("onpropertychange", Kf))
      : e === "focusout" && Bf();
  }
  function Wh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return eo(Nl);
  }
  function Qh(e, t) {
    if (e === "click") return eo(t);
  }
  function Bh(e, t) {
    if (e === "input" || e === "change") return eo(t);
  }
  function Yf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xf(e, t) {
    var n = Yf(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Yf(n);
    }
  }
  function Gf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Gf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Zf() {
    for (var e = window, t = Ql(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ql(e.document);
    }
    return t;
  }
  function os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Kh(e) {
    var t = Zf(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Gf(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && os(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Xf(n, i)));
          var o = Xf(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Yh = Qt && "documentMode" in document && 11 >= document.documentMode,
    Tr = null,
    us = null,
    zl = null,
    ss = !1;
  function Jf(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ss ||
      Tr == null ||
      Tr !== Ql(r) ||
      ((r = Tr),
      "selectionStart" in r && os(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (zl && Xr(zl, r)) ||
        ((zl = r),
        (r = lo(us, "onSelect")),
        0 < r.length &&
          ((t = new Ki("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Tr))));
  }
  function to(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Or = {
      animationend: to("Animation", "AnimationEnd"),
      animationiteration: to("Animation", "AnimationIteration"),
      animationstart: to("Animation", "AnimationStart"),
      transitionend: to("Transition", "TransitionEnd"),
    },
    as = {},
    qf = {};
  Qt &&
    ((qf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Or.animationend.animation,
      delete Or.animationiteration.animation,
      delete Or.animationstart.animation),
    "TransitionEvent" in window || delete Or.transitionend.transition);
  function no(e) {
    if (as[e]) return as[e];
    if (!Or[e]) return e;
    var t = Or[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in qf) return (as[e] = t[n]);
    return e;
  }
  var bf = no("animationend"),
    ed = no("animationiteration"),
    td = no("animationstart"),
    nd = no("transitionend"),
    rd = new Map(),
    ld =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Pn(e, t) {
    (rd.set(e, t), jn(t, [e]));
  }
  for (var cs = 0; cs < ld.length; cs++) {
    var fs = ld[cs],
      Xh = fs.toLowerCase(),
      Gh = fs[0].toUpperCase() + fs.slice(1);
    Pn(Xh, "on" + Gh);
  }
  (Pn(bf, "onAnimationEnd"),
    Pn(ed, "onAnimationIteration"),
    Pn(td, "onAnimationStart"),
    Pn("dblclick", "onDoubleClick"),
    Pn("focusin", "onFocus"),
    Pn("focusout", "onBlur"),
    Pn(nd, "onTransitionEnd"),
    qn("onMouseEnter", ["mouseout", "mouseover"]),
    qn("onMouseLeave", ["mouseout", "mouseover"]),
    qn("onPointerEnter", ["pointerout", "pointerover"]),
    qn("onPointerLeave", ["pointerout", "pointerover"]),
    jn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    jn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    jn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    jn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var jl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Zh = new Set(
      "cancel close invalid load scroll scrollend toggle".split(" ").concat(jl),
    );
  function id(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Vp(r, t, void 0, e), (e.currentTarget = null));
  }
  function od(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              p = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped()))
              break e;
            (id(l, u, p), (i = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (p = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (id(l, u, p), (i = s));
          }
      }
    }
    if (ji) throw ((e = gu), (ji = !1), (gu = null), e);
  }
  function re(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ud(t, e, 2, !1), n.add(r));
  }
  function ds(e, t, n) {
    var r = 0;
    (t && (r |= 4), ud(n, e, r, t));
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function Ll(e) {
    if (!e[ro]) {
      ((e[ro] = !0),
        Gs.forEach(function (n) {
          n !== "selectionchange" && (Zh.has(n) || ds(n, !1, e), ds(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ro] || ((t[ro] = !0), ds("selectionchange", !1, t));
    }
  }
  function ud(e, t, n, r) {
    switch (Df(t)) {
      case 2:
        var l = Oh;
        break;
      case 8:
        l = Dh;
        break;
      default:
        l = bu;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Yu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ps(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = zn(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Cf(function () {
      var p = i,
        v = To(n),
        x = [];
      e: {
        var m = rd.get(e);
        if (m !== void 0) {
          var g = Ki,
            z = e;
          switch (e) {
            case "keypress":
              if (Qi(n) === 0) break e;
            case "keydown":
            case "keyup":
              g = Sh;
              break;
            case "focusin":
              ((z = "focus"), (g = Zu));
              break;
            case "focusout":
              ((z = "blur"), (g = Zu));
              break;
            case "beforeblur":
            case "afterblur":
              g = Zu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Nf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = ah;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Eh;
              break;
            case bf:
            case ed:
            case td:
              g = dh;
              break;
            case nd:
              g = Ph;
              break;
            case "scroll":
            case "scrollend":
              g = uh;
              break;
            case "wheel":
              g = zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = hh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = jf;
          }
          var U = (t & 4) !== 0,
            de = !U && (e === "scroll" || e === "scrollend"),
            d = U ? (m !== null ? m + "Capture" : null) : m;
          U = [];
          for (var a = p, h; a !== null; ) {
            var k = a;
            if (
              ((h = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                h === null ||
                d === null ||
                ((k = gl(a, d)), k != null && U.push(Rl(a, k, h))),
              de)
            )
              break;
            a = a.return;
          }
          0 < U.length &&
            ((m = new g(m, z, null, n, v)), x.push({ event: m, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((m = e === "mouseover" || e === "pointerover"),
            (g = e === "mouseout" || e === "pointerout"),
            m &&
              n !== Ro &&
              (z = n.relatedTarget || n.fromElement) &&
              (zn(z) || z[Wt]))
          )
            break e;
          if (
            (g || m) &&
            ((m =
              v.window === v
                ? v
                : (m = v.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
            g
              ? ((z = n.relatedTarget || n.toElement),
                (g = p),
                (z = z ? zn(z) : null),
                z !== null &&
                  ((de = Ln(z)),
                  (U = z.tag),
                  z !== de || (U !== 5 && U !== 27 && U !== 6)) &&
                  (z = null))
              : ((g = null), (z = p)),
            g !== z)
          ) {
            if (
              ((U = Nf),
              (k = "onMouseLeave"),
              (d = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((U = jf),
                (k = "onPointerLeave"),
                (d = "onPointerEnter"),
                (a = "pointer")),
              (de = g == null ? m : Zn(g)),
              (h = z == null ? m : Zn(z)),
              (m = new U(k, a + "leave", g, n, v)),
              (m.target = de),
              (m.relatedTarget = h),
              (k = null),
              zn(v) === p &&
                ((U = new U(d, a + "enter", z, n, v)),
                (U.target = h),
                (U.relatedTarget = de),
                (k = U)),
              (de = k),
              g && z)
            )
              t: {
                for (U = g, d = z, a = 0, h = U; h; h = Dr(h)) a++;
                for (h = 0, k = d; k; k = Dr(k)) h++;
                for (; 0 < a - h; ) ((U = Dr(U)), a--);
                for (; 0 < h - a; ) ((d = Dr(d)), h--);
                for (; a--; ) {
                  if (U === d || (d !== null && U === d.alternate)) break t;
                  ((U = Dr(U)), (d = Dr(d)));
                }
                U = null;
              }
            else U = null;
            (g !== null && sd(x, m, g, U, !1),
              z !== null && de !== null && sd(x, de, z, U, !0));
          }
        }
        e: {
          if (
            ((m = p ? Zn(p) : window),
            (g = m.nodeName && m.nodeName.toLowerCase()),
            g === "select" || (g === "input" && m.type === "file"))
          )
            var N = Vh;
          else if (Vf(m))
            if (Wf) N = Bh;
            else {
              N = Wh;
              var L = Hh;
            }
          else
            (g = m.nodeName) &&
              g.toLowerCase() === "input" &&
              (m.type === "checkbox" || m.type === "radio") &&
              (N = Qh);
          if (N && (N = N(e, p))) {
            Hf(x, N, n, v);
            break e;
          }
          (L && L(e, m, p),
            e === "focusout" &&
              p &&
              m.type === "number" &&
              p.memoizedProps.value != null &&
              Lo(m, "number", m.value));
        }
        switch (((L = p ? Zn(p) : window), e)) {
          case "focusin":
            (Vf(L) || L.contentEditable === "true") &&
              ((Tr = L), (us = p), (zl = null));
            break;
          case "focusout":
            zl = us = Tr = null;
            break;
          case "mousedown":
            ss = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ss = !1), Jf(x, n, v));
            break;
          case "selectionchange":
            if (Yh) break;
          case "keydown":
          case "keyup":
            Jf(x, n, v);
        }
        var O;
        if (rs)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          Rr
            ? Uf(e, n) && (F = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (F = "onCompositionStart");
        (F &&
          (Mf &&
            n.locale !== "ko" &&
            (Rr || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Rr && (O = Ff())
              : ((Cn = v),
                (ns = "value" in Cn ? Cn.value : Cn.textContent),
                (Rr = !0))),
          (L = lo(p, F)),
          0 < L.length &&
            ((F = new zf(F, e, null, n, v)),
            x.push({ event: F, listeners: L }),
            O ? (F.data = O) : ((O = $f(n)), O !== null && (F.data = O)))),
          (O = Mh ? Ih(e, n) : Ah(e, n)) &&
            ((F = lo(p, "onBeforeInput")),
            0 < F.length &&
              ((L = new zf("onBeforeInput", "beforeinput", null, n, v)),
              x.push({ event: L, listeners: F }),
              (L.data = O))),
          jh(x, e, p, n, v));
      }
      od(x, t);
    });
  }
  function Rl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function lo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          i === null ||
          ((l = gl(e, n)),
          l != null && r.unshift(Rl(e, l, i)),
          (l = gl(e, t)),
          l != null && r.push(Rl(e, l, i))),
        (e = e.return));
    }
    return r;
  }
  function Dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function sd(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (((u = u.tag), s !== null && s === r)) break;
      ((u !== 5 && u !== 26 && u !== 27) ||
        p === null ||
        ((s = p),
        l
          ? ((p = gl(n, i)), p != null && o.unshift(Rl(n, p, s)))
          : l || ((p = gl(n, i)), p != null && o.push(Rl(n, p, s)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Jh = /\r\n?/g,
    qh = /\u0000|\uFFFD/g;
  function ad(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Jh,
        `
`,
      )
      .replace(qh, "");
  }
  function hs(e, t, n) {
    if (((t = ad(t)), ad(e) !== t && n)) throw Error(c(425));
  }
  function io() {}
  function fe(e, t, n, r, l, i) {
    switch (n) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || er(e, r)
          : typeof r == "number" && t !== "body" && er(e, "" + r);
        break;
      case "className":
        Eo(e, "class", r);
        break;
      case "tabIndex":
        Eo(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Eo(e, n, r);
        break;
      case "style":
        aa(e, r, i);
        break;
      case "src":
      case "href":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        e.setAttribute(n, "" + r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (n === "formAction"
              ? (t !== "input" && fe(e, t, "name", l.name, l, null),
                fe(e, t, "formEncType", l.formEncType, l, null),
                fe(e, t, "formMethod", l.formMethod, l, null),
                fe(e, t, "formTarget", l.formTarget, l, null))
              : (fe(e, t, "encType", l.encType, l, null),
                fe(e, t, "method", l.method, l, null),
                fe(e, t, "target", l.target, l, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        e.setAttribute(n, "" + r);
        break;
      case "onClick":
        r != null && (e.onclick = io);
        break;
      case "onScroll":
        r != null && re("scroll", e);
        break;
      case "onScrollEnd":
        r != null && re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (((r = r.__html), r != null)) {
            if (l.children != null) throw Error(c(60));
            ua(e, r);
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "" + r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "" + r)
          : e.removeAttribute(n);
        break;
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(n, "")
          : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(n)
          : e.setAttribute(n, r);
        break;
      case "xlinkActuate":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        _o(e, "is", r);
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((l = pp.get(n) || n), _o(e, l, r));
    }
  }
  function ms(e, t, n, r, l, i) {
    switch (n) {
      case "style":
        aa(e, r, i);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (((t = r.__html), t != null)) {
            if (l.children != null) throw Error(c(60));
            ua(e, t);
          }
        }
        break;
      case "children":
        typeof r == "string" ? er(e, r) : typeof r == "number" && er(e, "" + r);
        break;
      case "onScroll":
        r != null && re("scroll", e);
        break;
      case "onScrollEnd":
        r != null && re("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = io);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      default:
        Zs.hasOwnProperty(n) ||
          (typeof r == "boolean" && (r = "" + r), _o(e, n, r));
    }
  }
  function De(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        re("invalid", e);
        var r = null,
          l = null,
          i = null,
          o = null,
          u = null,
          s = null;
        for (v in n)
          if (n.hasOwnProperty(v)) {
            var p = n[v];
            if (p != null)
              switch (v) {
                case "name":
                  r = p;
                  break;
                case "type":
                  l = p;
                  break;
                case "checked":
                  u = p;
                  break;
                case "defaultChecked":
                  s = p;
                  break;
                case "value":
                  i = p;
                  break;
                case "defaultValue":
                  o = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(c(137, t));
                  break;
                default:
                  fe(e, t, v, p, n, null);
              }
          }
        (na(e, i, o, u, s, l, r, !1), Wl(e));
        return;
      case "select":
        re("invalid", e);
        var v = (l = i = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((o = n[r]), o != null))
            switch (r) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                l = o;
                break;
              case "multiple":
                v = o;
              default:
                fe(e, t, r, o, n, null);
            }
        ((t = i),
          (n = l),
          (e.multiple = !!v),
          t != null ? bn(e, !!v, t, !1) : n != null && bn(e, !!v, n, !0));
        return;
      case "textarea":
        (re("invalid", e), (i = r = v = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((o = n[l]), o != null))
            switch (l) {
              case "value":
                v = o;
                break;
              case "defaultValue":
                r = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(c(91));
                break;
              default:
                fe(e, t, l, o, n, null);
            }
        (la(e, v, r, i), Wl(e));
        return;
      case "option":
        for (o in n)
          if (n.hasOwnProperty(o) && ((v = n[o]), v != null))
            switch (o) {
              case "selected":
                e.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                fe(e, t, o, v, n, null);
            }
        return;
      case "dialog":
        (re("cancel", e), re("close", e));
        break;
      case "iframe":
      case "object":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (v = 0; v < jl.length; v++) re(jl[v], e);
        break;
      case "image":
        (re("error", e), re("load", e));
        break;
      case "details":
        re("toggle", e);
        break;
      case "embed":
      case "source":
      case "img":
      case "link":
        (re("error", e), re("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (u in n)
          if (n.hasOwnProperty(u) && ((v = n[u]), v != null))
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                fe(e, t, u, v, n, null);
            }
        return;
      default:
        if (ca(t)) {
          for (s in n)
            n.hasOwnProperty(s) &&
              ((v = n[s]), v != null && ms(e, t, s, v, n, null));
          return;
        }
    }
    for (i in n)
      n.hasOwnProperty(i) && ((v = n[i]), v != null && fe(e, t, i, v, n, null));
  }
  function cd(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          i = null,
          o = null,
          u = null,
          s = null,
          p = null,
          v = null;
        for (g in n) {
          var x = n[g];
          if (n.hasOwnProperty(g) && x != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = x;
              default:
                r.hasOwnProperty(g) || fe(e, t, g, null, r, x);
            }
        }
        for (var m in r) {
          var g = r[m];
          if (((x = n[m]), r.hasOwnProperty(m) && (g != null || x != null)))
            switch (m) {
              case "type":
                i = g;
                break;
              case "name":
                l = g;
                break;
              case "checked":
                p = g;
                break;
              case "defaultChecked":
                v = g;
                break;
              case "value":
                o = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(137, t));
                break;
              default:
                g !== x && fe(e, t, m, g, r, x);
            }
        }
        jo(e, o, u, s, p, v, i, l);
        return;
      case "select":
        g = o = u = m = null;
        for (i in n)
          if (((s = n[i]), n.hasOwnProperty(i) && s != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                r.hasOwnProperty(i) || fe(e, t, i, null, r, s);
            }
        for (l in r)
          if (
            ((i = r[l]),
            (s = n[l]),
            r.hasOwnProperty(l) && (i != null || s != null))
          )
            switch (l) {
              case "value":
                m = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== s && fe(e, t, l, i, r, s);
            }
        ((t = u),
          (n = o),
          (r = g),
          m != null
            ? bn(e, !!n, m, !1)
            : !!r != !!n &&
              (t != null ? bn(e, !!n, t, !0) : bn(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        g = m = null;
        for (u in n)
          if (
            ((l = n[u]),
            n.hasOwnProperty(u) && l != null && !r.hasOwnProperty(u))
          )
            switch (u) {
              case "value":
                break;
              case "children":
                break;
              default:
                fe(e, t, u, null, r, l);
            }
        for (o in r)
          if (
            ((l = r[o]),
            (i = n[o]),
            r.hasOwnProperty(o) && (l != null || i != null))
          )
            switch (o) {
              case "value":
                m = l;
                break;
              case "defaultValue":
                g = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && fe(e, t, o, l, r, i);
            }
        ra(e, m, g);
        return;
      case "option":
        for (var z in n)
          if (
            ((m = n[z]),
            n.hasOwnProperty(z) && m != null && !r.hasOwnProperty(z))
          )
            switch (z) {
              case "selected":
                e.selected = !1;
                break;
              default:
                fe(e, t, z, null, r, m);
            }
        for (s in r)
          if (
            ((m = r[s]),
            (g = n[s]),
            r.hasOwnProperty(s) && m !== g && (m != null || g != null))
          )
            switch (s) {
              case "selected":
                e.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                fe(e, t, s, m, r, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var U in n)
          ((m = n[U]),
            n.hasOwnProperty(U) &&
              m != null &&
              !r.hasOwnProperty(U) &&
              fe(e, t, U, null, r, m));
        for (p in r)
          if (
            ((m = r[p]),
            (g = n[p]),
            r.hasOwnProperty(p) && m !== g && (m != null || g != null))
          )
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(137, t));
                break;
              default:
                fe(e, t, p, m, r, g);
            }
        return;
      default:
        if (ca(t)) {
          for (var de in n)
            ((m = n[de]),
              n.hasOwnProperty(de) &&
                m != null &&
                !r.hasOwnProperty(de) &&
                ms(e, t, de, null, r, m));
          for (v in r)
            ((m = r[v]),
              (g = n[v]),
              !r.hasOwnProperty(v) ||
                m === g ||
                (m == null && g == null) ||
                ms(e, t, v, m, r, g));
          return;
        }
    }
    for (var d in n)
      ((m = n[d]),
        n.hasOwnProperty(d) &&
          m != null &&
          !r.hasOwnProperty(d) &&
          fe(e, t, d, null, r, m));
    for (x in r)
      ((m = r[x]),
        (g = n[x]),
        !r.hasOwnProperty(x) ||
          m === g ||
          (m == null && g == null) ||
          fe(e, t, x, m, r, g));
  }
  var ys = null,
    gs = null;
  function oo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function vs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ws = null;
  function bh() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ws
        ? !1
        : ((ws = e), !0)
      : ((ws = null), !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0,
    em = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hd = typeof Promise == "function" ? Promise : void 0,
    tm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof hd < "u"
          ? function (e) {
              return hd.resolve(null).then(e).catch(nm);
            }
          : pd;
  function nm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ks(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), El(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    El(t);
  }
  function md(e) {
    var t = e.nodeType;
    if (t === 9) Ss(e);
    else if (t === 1)
      switch (e.nodeName) {
        case "HEAD":
        case "HTML":
        case "BODY":
          Ss(e);
          break;
        default:
          e.textContent = "";
      }
  }
  function Ss(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Ss(n), xo(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function rm(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[$r])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== l.rel ||
                e.getAttribute("href") !== (l.href == null ? null : l.href) ||
                e.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (l.src == null ? null : l.src) ||
                  e.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  e.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = gt(e)), e === null)) break;
    }
    return null;
  }
  function lm(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = gt(e)), e === null)
      )
        return null;
    return e;
  }
  function Tl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function gt(e) {
    return Tl(e.nextSibling);
  }
  function yd(e, t, n, r, l) {
    switch (((e[Me] = l), (e[on] = n), (r = (l.mode & 1) !== 0), t)) {
      case "dialog":
        (re("cancel", e), re("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < jl.length; l++) re(jl[l], e);
        break;
      case "source":
        re("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (re("error", e), re("load", e));
        break;
      case "details":
        re("toggle", e);
        break;
      case "input":
        (re("invalid", e),
          na(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ),
          Wl(e));
        break;
      case "select":
        re("invalid", e);
        break;
      case "textarea":
        (re("invalid", e), la(e, n.value, n.defaultValue, n.children), Wl(e));
    }
    ((l = n.children),
      (typeof l != "string" && typeof l != "number") ||
        e.textContent === "" + l ||
        (n.suppressHydrationWarning !== !0 && hs(e.textContent, l, r),
        r || t === "body" || (e.textContent = l)),
      n.onScroll != null && re("scroll", e),
      n.onScrollEnd != null && re("scrollend", e),
      n.onClick != null && (e.onclick = io));
  }
  function gd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function vd(e, t, n) {
    switch (((t = oo(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  var vt = new Map(),
    wd = new Set();
  function uo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var xs = {
    prefetchDNS: im,
    preconnect: om,
    preload: um,
    preloadModule: sm,
    preinitStyle: am,
    preinitScript: cm,
    preinitModuleScript: fm,
  };
  function kd(e, t, n) {
    var r = document;
    if (typeof t == "string" && t) {
      var l = at(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        wd.has(l) ||
          (wd.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          r.querySelector(l) === null &&
            ((t = r.createElement("link")),
            De(t, "link", e),
            Pe(t),
            r.head.appendChild(t))));
    }
  }
  function im(e) {
    kd("dns-prefetch", e, null);
  }
  function om(e, t) {
    kd("preconnect", e, t);
  }
  function um(e, t, n) {
    var r = document;
    if (e && t && r) {
      var l = 'link[rel="preload"][as="' + at(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + at(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + at(n.imageSizes) + '"]'))
        : (l += '[href="' + at(e) + '"]');
      var i = l;
      switch (t) {
        case "style":
          i = Fr(e);
          break;
        case "script":
          i = Mr(e);
      }
      vt.has(i) ||
        ((e = C(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        vt.set(i, e),
        r.querySelector(l) !== null ||
          (t === "style" && r.querySelector(Ol(i))) ||
          (t === "script" && r.querySelector(Dl(i))) ||
          ((t = r.createElement("link")),
          De(t, "link", e),
          Pe(t),
          r.head.appendChild(t)));
    }
  }
  function sm(e, t) {
    var n = document;
    if (e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        l =
          'link[rel="modulepreload"][as="' + at(r) + '"][href="' + at(e) + '"]',
        i = l;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Mr(e);
      }
      if (
        !vt.has(i) &&
        ((e = C({ rel: "modulepreload", href: e }, t)),
        vt.set(i, e),
        n.querySelector(l) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Dl(i))) return;
        }
        ((r = n.createElement("link")),
          De(r, "link", e),
          Pe(r),
          n.head.appendChild(r));
      }
    }
  }
  function am(e, t, n) {
    var r = document;
    if (e) {
      var l = Jn(r).hoistableStyles,
        i = Fr(e);
      t = t || "default";
      var o = l.get(i);
      if (!o) {
        var u = { loading: 0, preload: null };
        if ((o = r.querySelector(Ol(i)))) u.loading = 5;
        else {
          ((e = C({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = vt.get(i)) && _s(e, n));
          var s = (o = r.createElement("link"));
          (Pe(s),
            De(s, "link", e),
            (s._p = new Promise(function (p, v) {
              ((s.onload = p), (s.onerror = v));
            })),
            s.addEventListener("load", function () {
              u.loading |= 1;
            }),
            s.addEventListener("error", function () {
              u.loading |= 2;
            }),
            (u.loading |= 4),
            so(o, t, r));
        }
        ((o = { type: "stylesheet", instance: o, count: 1, state: u }),
          l.set(i, o));
      }
    }
  }
  function cm(e, t) {
    var n = document;
    if (e) {
      var r = Jn(n).hoistableScripts,
        l = Mr(e),
        i = r.get(l);
      i ||
        ((i = n.querySelector(Dl(l))),
        i ||
          ((e = C({ src: e, async: !0 }, t)),
          (t = vt.get(l)) && Es(e, t),
          (i = n.createElement("script")),
          Pe(i),
          De(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        r.set(l, i));
    }
  }
  function fm(e, t) {
    var n = document;
    if (e) {
      var r = Jn(n).hoistableScripts,
        l = Mr(e),
        i = r.get(l);
      i ||
        ((i = n.querySelector(Dl(l))),
        i ||
          ((e = C({ src: e, async: !0, type: "module" }, t)),
          (t = vt.get(l)) && Es(e, t),
          (i = n.createElement("script")),
          Pe(i),
          De(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        r.set(l, i));
    }
  }
  function dm(e, t, n) {
    if (((t = (t = M.current) ? uo(t) : null), !t)) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((n = Fr(n.href)),
            (t = Jn(t).hoistableStyles),
            (e = t.get(n)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              t.set(n, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Fr(n.href);
          var r = Jn(t).hoistableStyles,
            l = r.get(e);
          return (
            l ||
              ((t = t.ownerDocument || t),
              (l = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, l),
              vt.has(e) ||
                pm(
                  t,
                  e,
                  {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  },
                  l.state,
                )),
            l
          );
        }
        return null;
      case "script":
        return typeof n.src == "string" && n.async === !0
          ? ((n = Mr(n.src)),
            (t = Jn(t).hoistableScripts),
            (e = t.get(n)),
            e ||
              ((e = { type: "script", instance: null, count: 0, state: null }),
              t.set(n, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function Fr(e) {
    return 'href="' + at(e) + '"';
  }
  function Ol(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Sd(e) {
    return C({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function pm(e, t, n, r) {
    (vt.set(t, n),
      e.querySelector(Ol(t)) ||
        (e.querySelector('link[rel="preload"][as="style"][' + t + "]")
          ? (r.loading = 1)
          : ((t = e.createElement("link")),
            (r.preload = t),
            t.addEventListener("load", function () {
              return (r.loading |= 1);
            }),
            t.addEventListener("error", function () {
              return (r.loading |= 2);
            }),
            De(t, "link", n),
            Pe(t),
            e.head.appendChild(t))));
  }
  function Mr(e) {
    return '[src="' + at(e) + '"]';
  }
  function Dl(e) {
    return "script[async]" + e;
  }
  function xd(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + at(n.href) + '"]');
          if (r) return ((t.instance = r), Pe(r), r);
          var l = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            Pe(r),
            De(r, "style", l),
            so(r, n.precedence, e),
            (t.instance = r)
          );
        case "stylesheet":
          l = Fr(n.href);
          var i = e.querySelector(Ol(l));
          if (i) return ((t.state.loading |= 4), (t.instance = i), Pe(i), i);
          ((r = Sd(n)),
            (l = vt.get(l)) && _s(r, l),
            (i = (e.ownerDocument || e).createElement("link")),
            Pe(i));
          var o = i;
          return (
            (o._p = new Promise(function (u, s) {
              ((o.onload = u), (o.onerror = s));
            })),
            De(i, "link", r),
            (t.state.loading |= 4),
            so(i, n.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Mr(n.src)),
            (l = e.querySelector(Dl(i)))
              ? ((t.instance = l), Pe(l), l)
              : ((r = n),
                (l = vt.get(i)) && ((r = C({}, n)), Es(r, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement("script")),
                Pe(l),
                De(l, "link", r),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((r = t.instance), (t.state.loading |= 4), so(r, n.precedence, e));
    return t.instance;
  }
  function so(e, t, n) {
    for (
      var r = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = r.length ? r[r.length - 1] : null,
        i = l,
        o = 0;
      o < r.length;
      o++
    ) {
      var u = r[o];
      if (u.dataset.precedence === t) i = u;
      else if (i !== l) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function _s(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Es(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ao = null;
  function _d(e, t, n) {
    if (ao === null) {
      var r = new Map(),
        l = (ao = new Map());
      l.set(n, r);
    } else ((l = ao), (r = l.get(n)), r || ((r = new Map()), l.set(n, r)));
    if (r.has(e)) return r;
    for (
      r.set(e, null), n = n.getElementsByTagName(e), l = 0;
      l < n.length;
      l++
    ) {
      var i = n[l];
      if (
        !(
          i[$r] ||
          i[Me] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = i.getAttribute(t) || "";
        o = e + o;
        var u = r.get(o);
        u ? u.push(i) : r.set(o, [i]);
      }
    }
    return r;
  }
  function Ed(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function hm(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async === !0 &&
          !t.onLoad &&
          !t.onError &&
          typeof t.src == "string" &&
          t.src
        )
          return !0;
    }
    return !1;
  }
  var Fl = null;
  function mm() {}
  function ym(e, t, n) {
    if (Fl === null) throw Error(c(475));
    var r = Fl;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var l = Fr(n.href),
          i = e.querySelector(Ol(l));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (r.count++, (r = co.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = i),
            Pe(i));
          return;
        }
        ((i = e.ownerDocument || e),
          (n = Sd(n)),
          (l = vt.get(l)) && _s(n, l),
          (i = i.createElement("link")),
          Pe(i));
        var o = i;
        ((o._p = new Promise(function (u, s) {
          ((o.onload = u), (o.onerror = s));
        })),
          De(i, "link", n),
          (t.instance = i));
      }
      (r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (r.count++,
          (t = co.bind(r)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function gm() {
    if (Fl === null) throw Error(c(475));
    var e = Fl;
    return (
      e.stylesheets && e.count === 0 && Cs(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Cs(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function co() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Cs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var fo = null;
  function Cs(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (fo = new Map()),
        t.forEach(vm, e),
        (fo = null),
        co.call(e)));
  }
  function vm(e, t) {
    if (!(t.state.loading & 4)) {
      var n = fo.get(e);
      if (n) var r = n.get(null);
      else {
        ((n = new Map()), fo.set(e, n));
        for (
          var l = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < l.length;
          i++
        ) {
          var o = l[i];
          (o.nodeName === "link" || o.getAttribute("media") !== "not all") &&
            (n.set(o.dataset.precedence, o), (r = o));
        }
        r && n.set(null, r);
      }
      ((l = t.instance),
        (o = l.getAttribute("data-precedence")),
        (i = n.get(o) || r),
        i === r && n.set(null, l),
        n.set(o, l),
        this.count++,
        (r = co.bind(this)),
        l.addEventListener("load", r),
        l.addEventListener("error", r),
        i
          ? i.parentNode.insertBefore(l, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ps = P.Dispatcher;
  typeof document < "u" && (Ps.current = xs);
  var Cd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ns(e) {
    this._internalRoot = e;
  }
  ((po.prototype.render = Ns.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      Hi(e, t, null, null);
    }),
    (po.prototype.unmount = Ns.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Bn(function () {
            Hi(null, e, null, null);
          }),
            (t[Wt] = null));
        }
      }));
  function po(e) {
    this._internalRoot = e;
  }
  po.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ae;
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
      (En.splice(n, 0, e), n === 0 && Rf(e));
    }
  };
  function zs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ho(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Pd() {}
  function wm(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = Wi(o);
          i.call(p);
        };
      }
      var o = xf(t, r, e, 0, null, !1, !1, "", Pd, null, null);
      return (
        (e._reactRootContainer = o),
        (e[Wt] = o.current),
        Ll(e.nodeType === 8 ? e.parentNode : e),
        Bn(),
        o
      );
    }
    if ((md(e), typeof r == "function")) {
      var u = r;
      r = function () {
        var p = Wi(s);
        u.call(p);
      };
    }
    var s = Qu(e, 0, !1, null, null, !1, !1, "", Pd, null, null);
    return (
      (e._reactRootContainer = s),
      (e[Wt] = s.current),
      Ll(e.nodeType === 8 ? e.parentNode : e),
      Bn(function () {
        Hi(t, s, n, r);
      }),
      s
    );
  }
  function mo(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Wi(o);
          u.call(s);
        };
      }
      Hi(t, o, e, l);
    } else o = wm(n, t, e, l, r);
    return Wi(o);
  }
  function yo(e, t) {
    if (e === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  var Ir = P.Dispatcher;
  P.Events = [Gn, Zn, un, da, pa, Du];
  var Ml = {
      findFiberByHostInstance: zn,
      bundleType: 0,
      version: "18.3.0-canary-14898b6a9-20240318",
      rendererPackageName: "react-dom",
    },
    km = {
      bundleType: Ml.bundleType,
      version: Ml.version,
      rendererPackageName: Ml.rendererPackageName,
      rendererConfig: Ml.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = ya(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ml.findFiberByHostInstance || oh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.0-canary-14898b6a9-20240318",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!go.isDisabled && go.supportsFiber)
      try {
        ((Ar = go.inject(km)), (Ze = go));
      } catch {}
  }
  return (
    (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
    (ge.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zs(t)) throw Error(c(299));
      return lh(e, t, null, n);
    }),
    (ge.createRoot = function (e, t) {
      if (!zs(e)) throw Error(c(299));
      var n = !1,
        r = "",
        l = Cd,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = Qu(e, 1, !1, null, null, n, !1, r, l, i, null)),
        (e[Wt] = t.current),
        (Ps.current = xs),
        Ll(e.nodeType === 8 ? e.parentNode : e),
        new Ns(t)
      );
    }),
    (ge.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(c(188))
          : ((e = Object.keys(e).join(",")), Error(c(268, e)));
      return ((e = ya(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ge.flushSync = function (e) {
      return Bn(e);
    }),
    (ge.hydrate = function (e, t, n) {
      if (!ho(t)) throw Error(c(299));
      return mo(null, e, t, !0, n);
    }),
    (ge.hydrateRoot = function (e, t, n) {
      if (!zs(e)) throw Error(c(299));
      var r = !1,
        l = "",
        i = Cd,
        o = null,
        u = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (o = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (u = n.formState)),
        (t = xf(t, null, e, 1, n ?? null, r, !1, l, i, o, u)),
        (e[Wt] = t.current),
        (Ps.current = xs),
        Ll(e),
        new po(t)
      );
    }),
    (ge.preconnect = function (e, t) {
      var n = Ir.current;
      n &&
        typeof e == "string" &&
        (t
          ? ((t = t.crossOrigin),
            (t =
              typeof t == "string"
                ? t === "use-credentials"
                  ? t
                  : ""
                : void 0))
          : (t = null),
        n.preconnect(e, t));
    }),
    (ge.prefetchDNS = function (e) {
      var t = Ir.current;
      t && typeof e == "string" && t.prefetchDNS(e);
    }),
    (ge.preinit = function (e, t) {
      var n = Ir.current;
      if (n && typeof e == "string" && t && typeof t.as == "string") {
        var r = t.as,
          l = yo(r, t.crossOrigin),
          i = typeof t.integrity == "string" ? t.integrity : void 0,
          o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
        r === "style"
          ? n.preinitStyle(
              e,
              typeof t.precedence == "string" ? t.precedence : void 0,
              { crossOrigin: l, integrity: i, fetchPriority: o },
            )
          : r === "script" &&
            n.preinitScript(e, {
              crossOrigin: l,
              integrity: i,
              fetchPriority: o,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
      }
    }),
    (ge.preinitModule = function (e, t) {
      var n = Ir.current;
      if (n && typeof e == "string")
        if (typeof t == "object" && t !== null) {
          if (t.as == null || t.as === "script") {
            var r = yo(t.as, t.crossOrigin);
            n.preinitModuleScript(e, {
              crossOrigin: r,
              integrity: typeof t.integrity == "string" ? t.integrity : void 0,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
          }
        } else t == null && n.preinitModuleScript(e);
    }),
    (ge.preload = function (e, t) {
      var n = Ir.current;
      if (
        n &&
        typeof e == "string" &&
        typeof t == "object" &&
        t !== null &&
        typeof t.as == "string"
      ) {
        var r = t.as,
          l = yo(r, t.crossOrigin);
        n.preload(e, r, {
          crossOrigin: l,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
          type: typeof t.type == "string" ? t.type : void 0,
          fetchPriority:
            typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
          referrerPolicy:
            typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
          imageSrcSet:
            typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
          imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        });
      }
    }),
    (ge.preloadModule = function (e, t) {
      var n = Ir.current;
      if (n && typeof e == "string")
        if (t) {
          var r = yo(t.as, t.crossOrigin);
          n.preloadModule(e, {
            as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
            crossOrigin: r,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          });
        } else n.preloadModule(e);
    }),
    (ge.render = function (e, t, n) {
      if (!ho(t)) throw Error(c(299));
      return mo(null, e, t, !1, n);
    }),
    (ge.unmountComponentAtNode = function (e) {
      if (!ho(e)) throw Error(c(299));
      return e._reactRootContainer
        ? (Bn(function () {
            mo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ge.unstable_batchedUpdates = Du),
    (ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ho(n)) throw Error(c(299));
      if (e == null || e._reactInternals === void 0) throw Error(c(38));
      return mo(e, t, n, !1, r);
    }),
    (ge.useFormState = function (e, t, n) {
      return $.current.useFormState(e, t, n);
    }),
    (ge.useFormStatus = function () {
      return $.current.useHostTransitionStatus();
    }),
    (ge.version = "18.3.0-canary-14898b6a9-20240318"),
    ge
  );
}
var Dd;
function zm() {
  if (Dd) return Rs.exports;
  Dd = 1;
  function y() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (E) {
        console.error(E);
      }
  }
  return (y(), (Rs.exports = Nm()), Rs.exports);
}
var Fd;
function jm() {
  if (Fd) return vo;
  Fd = 1;
  var y = zm();
  return ((vo.createRoot = y.createRoot), (vo.hydrateRoot = y.hydrateRoot), vo);
}
var Lm = jm();
let Ds;
const Rm = (y) => {
    const E = y.data.pageMeta.language || "en",
      P = y.config.Head ?? (() => S.jsx(S.Fragment, {})),
      c = y.Page ?? (() => S.jsx(S.Fragment, {})),
      C = S.jsxs(S.Fragment, {
        children: [
          S.jsxs("head", {
            children: [
              S.jsx("meta", { charSet: "UTF-8" }),
              S.jsx("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1",
              }),
              S.jsx(P, { data: y.data }),
            ],
          }),
          S.jsx(c, { data: y.data }),
        ],
      });
    (Ds === void 0 && (Ds = Lm.createRoot(document.documentElement)),
      (document.documentElement.lang = E),
      Ds.render(C));
  },
  Tm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, onRenderClient: Rm },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var Ve = $s(),
  Fs = { exports: {} },
  Ms = {},
  Md;
function Om() {
  return (
    Md ||
      ((Md = 1),
      (function (y) {
        Object.defineProperty(y, "__esModule", { value: !0 });
        function E(P) {
          for (var c = 0, C, D = 0, $ = P.length; $ >= 4; ++D, $ -= 4)
            ((C =
              (P.charCodeAt(D) & 255) |
              ((P.charCodeAt(++D) & 255) << 8) |
              ((P.charCodeAt(++D) & 255) << 16) |
              ((P.charCodeAt(++D) & 255) << 24)),
              (C = (C & 65535) * 1540483477 + (((C >>> 16) * 59797) << 16)),
              (C ^= C >>> 24),
              (c =
                ((C & 65535) * 1540483477 + (((C >>> 16) * 59797) << 16)) ^
                ((c & 65535) * 1540483477 + (((c >>> 16) * 59797) << 16))));
          switch ($) {
            case 3:
              c ^= (P.charCodeAt(D + 2) & 255) << 16;
            case 2:
              c ^= (P.charCodeAt(D + 1) & 255) << 8;
            case 1:
              ((c ^= P.charCodeAt(D) & 255),
                (c = (c & 65535) * 1540483477 + (((c >>> 16) * 59797) << 16)));
          }
          return (
            (c ^= c >>> 13),
            (c = (c & 65535) * 1540483477 + (((c >>> 16) * 59797) << 16)),
            ((c ^ (c >>> 15)) >>> 0).toString(36)
          );
        }
        y.default = E;
      })(Ms)),
    Ms
  );
}
var Id;
function $d() {
  return (Id || ((Id = 1), (Fs.exports = Om())), Fs.exports);
}
$d();
var Is = {},
  Ad;
function Dm() {
  return (Ad || ((Ad = 1), (Is._default = $d().default)), Is);
}
Dm();
var Fm = "data-ws-tag",
  Vs = (y) => y[Fm],
  Vd = Ve.createContext({
    assetBaseUrl: "/",
    imageLoader: ({ src: y }) => y,
    videoLoader: ({ src: y }) => y,
    resources: {},
    breakpoints: [],
    onError: (y) => {
      console.error(y);
    },
  }),
  Hd = (y) => Object.keys(y).some((E) => E.startsWith("__react")),
  Mm = typeof window > "u",
  Im = (y) => {
    const [E, P] = Ve.useState();
    if (
      (Ve.useEffect(() => {
        const c = `meta[${y.name ? `name="${y.name}"` : `property="${y.property}"`}]`;
        let C = document.querySelectorAll(c);
        for (const D of C) Hd(D) || D.remove();
        ((C = document.querySelectorAll(c)), C.length === 0 && P(y));
      }, [y]),
      Mm)
    )
      return S.jsx("meta", { ...y });
    if (E !== void 0) return S.jsx("meta", { ...E });
  },
  Am = ({
    url: y,
    host: E,
    siteName: P,
    pageMeta: c,
    imageLoader: C,
    assetBaseUrl: D,
  }) => {
    const $ = [];
    if (
      (y !== void 0 && $.push({ property: "og:url", content: y }),
      c.title && $.push({ property: "og:title", content: c.title }),
      $.push({ property: "og:type", content: "website" }),
      P && $.push({ property: "og:site_name", content: P }),
      c.excludePageFromSearch &&
        $.push({ name: "robots", content: "noindex, nofollow" }),
      c.description &&
        ($.push({ name: "description", content: c.description }),
        $.push({ property: "og:description", content: c.description })),
      c.socialImageAssetName)
    ) {
      const ee = E ? `https://${E}` : "";
      $.push({
        property: "og:image",
        content: `${ee}${C({ src: `${D}${c.socialImageAssetName}`, format: "raw" })}`,
      });
    } else
      c.socialImageUrl &&
        $.push({ property: "og:image", content: c.socialImageUrl });
    $.push(...c.custom);
    const b = c.custom.some((ee) => ee.property === "twitter:card");
    return (
      (c.socialImageAssetName !== void 0 || c.socialImageUrl !== void 0) &&
        b === !1 &&
        $.push({ property: "twitter:card", content: "summary_large_image" }),
      $.map((ee, G) => S.jsx(Im, { ...ee }, G))
    );
  },
  Um = typeof window > "u",
  $m = (y) => {
    const [E, P] = Ve.useState();
    if (
      (Ve.useEffect(() => {
        const c = "head > title";
        let C = document.querySelectorAll(c);
        for (const D of C) Hd(D) || D.remove();
        ((C = document.querySelectorAll(c)), C.length === 0 && P(y));
      }, [y]),
      Um)
    )
      return S.jsx("title", { ...y });
    if (E !== void 0) return S.jsx("title", { ...E });
  };
const Ul = "/assets/",
  As = ({ src: y }) => y,
  Vm = "div",
  xe = Ve.forwardRef(({ tag: y, ...E }, P) => {
    const c = Vs(E) ?? y ?? Vm;
    return Ve.createElement(c, { ...E, ref: P });
  });
xe.displayName = "Box";
const Hm = "div",
  Wd = Ve.forwardRef(({ tag: y, ...E }, P) => {
    const c = Vs(E) ?? y ?? Hm;
    return Ve.createElement(c, { ...E, ref: P });
  });
Wd.displayName = "Text";
const Wm = "h1",
  Qd = Ve.forwardRef(({ tag: y, ...E }, P) => {
    const c = Vs(E) ?? y ?? Wm;
    return Ve.createElement(c, { ...E, ref: P });
  });
Qd.displayName = "Heading";
const wt = Ve.forwardRef(({ children: y, ...E }, P) =>
  S.jsx("p", { ...E, ref: P, children: y }),
);
wt.displayName = "Paragraph";
var Qm = [16, 32, 48, 64, 96, 128, 256, 384],
  Us = [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  Al = [...Qm, ...Us],
  Bm = (y, E) => {
    if (E) {
      const C = /(^|\s)(1?\d?\d)vw/g,
        D = [];
      for (let $; ($ = C.exec(E)); $) D.push(Number.parseInt($[2], 10));
      if (D.length) {
        const $ = Math.min(...D) * 0.01;
        return { widths: Al.filter((b) => b >= Us[0] * $), kind: "w" };
      }
      return { widths: Al, kind: "w" };
    }
    if (y == null) return { widths: Us, kind: "w" };
    const P = 2;
    let c = Al.findIndex((C) => C >= P * y);
    return (
      (c = c < 0 ? Al.length : c),
      { widths: Al.slice(0, c + 1), kind: "w" }
    );
  },
  Km = ({ src: y, width: E, quality: P, sizes: c, loader: C }) => {
    const { widths: D, kind: $ } = Bm(E, c);
    return {
      sizes: !c && $ === "w" ? "100vw" : c,
      srcSet: D.map(
        (b, ee) =>
          `${C({ src: y, quality: P, width: b })} ${$ === "w" ? b : ee + 1}${$}`,
      ).join(", "),
      src: C({ src: y, quality: P, width: D[D.length - 1] }),
    };
  },
  Ud = (y) => {
    if (typeof y == "number") return Math.round(y);
    if (typeof y == "string") {
      const E = Number.parseFloat(y);
      if (!Number.isNaN(E)) return Math.round(E);
    }
  },
  Ym = "(min-width: 1280px) 50vw, 100vw",
  Xm = 80,
  Gm = (y) => {
    try {
      return (new URL(y), !0);
    } catch {
      return !1;
    }
  },
  Zm = (y) => {
    const E = Ud(y.width),
      P = Math.max(Math.min(Ud(y.quality) ?? Xm, 100), 0);
    if (y.src != null && y.src !== "") {
      if (y.src.startsWith("data:")) return { src: y.src };
      if (y.srcSet == null && y.optimize) {
        const C = y.sizes ?? (y.width == null ? Ym : void 0);
        return Km({
          src: y.src,
          width: E,
          quality: P,
          sizes: C,
          loader: y.loader,
        });
      }
      const c = {
        src: Gm(y.src) ? y.src : y.loader({ src: y.src, format: "raw" }),
      };
      return (
        y.srcSet != null && (c.srcSet = y.srcSet),
        y.sizes != null && (c.sizes = y.sizes),
        c
      );
    }
  },
  Bd = Ve.forwardRef(
    (
      {
        quality: y,
        loader: E,
        optimize: P = !0,
        loading: c = "lazy",
        decoding: C = "async",
        ...D
      },
      $,
    ) => {
      const b = Zm({
        src: D.src,
        srcSet: D.srcSet,
        sizes: D.sizes,
        width: D.width,
        quality: y,
        loader: E,
        optimize: P,
      }) ?? { src: Jm };
      return S.jsx("img", {
        alt: "",
        ...D,
        ...b,
        decoding: C,
        loading: c,
        ref: $,
      });
    },
  );
Bd.displayName = "Image";
var Jm = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;
const At = Ve.forwardRef(
  (
    {
      loading: y = "lazy",
      width: E,
      height: P,
      optimize: c = !0,
      decoding: C,
      $webstudio$canvasOnly$assetId: D,
      ...$
    },
    b,
  ) => {
    const ee = String($.src ?? ""),
      { imageLoader: G, renderer: pe } = Ve.useContext(Vd);
    let R = C,
      j = ee;
    return (
      pe === "canvas" &&
        ((y = "eager"),
        (R = "sync"),
        (j = D ?? ee),
        E !== void 0 &&
          P !== void 0 &&
          Number.isNaN(E) &&
          Number.isNaN(P) &&
          ((c = !1), (E = void 0), (P = void 0))),
      S.jsx(
        Bd,
        {
          loading: y,
          decoding: R,
          optimize: c,
          width: E,
          height: P,
          ...$,
          loader: G,
          src: ee,
          ref: b,
        },
        j,
      )
    );
  },
);
At.displayName = "Image";
const Kd = "MMS Setup Guide Page",
  qm = [
    { id: "nPRfowgVeU1-_R-igzAvZ" },
    { id: "2KmmbyzrN_rWr7DmL1Up1", maxWidth: 991 },
    { id: "eHt2503ieUAbafQHljIWW", maxWidth: 767 },
    { id: "vyfqHPpV8NskNM5lQJBhR", maxWidth: 479 },
    { id: "63dc0cd627f19700082762ae", minWidth: 1024 },
  ],
  bm = "ptl7-Q3M_VwJyFabuucGEHv7nEFB_x.png",
  ey = [],
  ty = [],
  ny = (y) =>
    S.jsx("body", {
      className: "w-element w-element-1",
      children: S.jsxs(xe, {
        className: "w-box w-main",
        children: [
          S.jsx(xe, { className: "w-box w-black-background" }),
          S.jsx(xe, {
            className: "w-box w-card",
            children: S.jsxs(xe, {
              className: "w-box w-colour-background",
              children: [
                S.jsx(xe, {
                  className: "w-box w-box-9",
                  children: S.jsx(xe, {
                    className: "w-box w-box-10",
                    children: S.jsx(At, {
                      src: "/assets/ptl7-Q3M_VwJyFabuucGEHv7nEFB_x.png",
                      width: 720,
                      height: 720,
                      alt: "",
                      loading: "eager",
                      className: "w-image w-image-9",
                    }),
                  }),
                }),
                S.jsxs(xe, {
                  className: "w-box w-name-handle",
                  children: [
                    S.jsx(Qd, {
                      className: "w-heading w-heading-1",
                      children: "Mudbourn's Minecraft Server",
                    }),
                    S.jsxs(Wd, {
                      className: "w-text w-text-1",
                      children: [
                        "Address: ",
                        S.jsx("a", {
                          href: "https://media.tenor.com/XbMSZwwwqDgAAAAe/an-iq-too-high-meme.png",
                          className: "w-element w-element-2",
                          children: "mc.mudbourn.info",
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsx(xe, {
                  className: "w-box w-information",
                  children: S.jsx(wt, {
                    className: "w-paragraph w-paragraph-1",
                    children: "Fabric (Java Edition) 1.21.11",
                  }),
                }),
                S.jsx(xe, {
                  className: "w-box w-information-1",
                  children: S.jsx(wt, {
                    className: "w-paragraph w-paragraph-2",
                    children: S.jsx("b", {
                      className: "w-element",
                      children: "NOTE:",
                    }),
                  }),
                }),
                S.jsx(xe, {
                  className: "w-box w-information-2",
                  children: S.jsxs(wt, {
                    className: "w-paragraph w-paragraph-3",
                    children: [
                      "MMS uses a whitelist system. Please join the ",
                      S.jsx("a", {
                        href: "https://discord.gg/XzBB2cnjp2",
                        className: "w-element w-element-3",
                        children: "Discord server",
                      }),
                      " to link your",
                      "",
                      S.jsx("br", {}),
                      "",
                      "Minecraft account and gain access to the Minecraft server.",
                      "",
                      S.jsx("br", {}),
                      "",
                      "",
                      S.jsx("br", {}),
                      "",
                      "Additionally, ",
                      "",
                      S.jsx("br", {}),
                      "",
                      "",
                      S.jsx("br", {}),
                      "",
                      "Minecraft accounts can only be linked to Discord accounts that are currently",
                      "",
                      S.jsx("br", {}),
                      "",
                      "IN the server. Being banned from this Discord server will unlink your account,",
                      "",
                      S.jsx("br", {}),
                      "",
                      "effectively banning you from the Minecraft server as well. ",
                      "",
                      S.jsx("br", {}),
                      "",
                      "",
                      S.jsx("br", {}),
                      "",
                      "Additionally, I often back up the file containing Minecraft UUIDs and their",
                      "",
                      S.jsx("br", {}),
                      "",
                      "corresponding Discord user IDs.",
                      "",
                      S.jsx("br", {}),
                      "",
                      "",
                      S.jsx("br", {}),
                      "",
                      S.jsx("b", {
                        className: "w-element",
                        children:
                          "Please do not try to ban evade, or break the rules in this Discord server.",
                      }),
                    ],
                  }),
                }),
                S.jsx("h1", {
                  className: "w-element w-h1",
                  children: "Client Setup Guide",
                }),
                S.jsxs(xe, {
                  className: "w-box w-gallery-row-1",
                  children: [
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-4",
                      children: [
                        "Download the Instance file for ATLauncher found on this ",
                        S.jsx("a", {
                          href: "https://drive.google.com/drive/folders/1we5Ba0onPnymESLgz4c5NNu2tJO6LwKK",
                          className: "w-element w-element-4",
                          children: "Google Drive folder",
                        }),
                        ".",
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-3",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.42.25_2x_wVKkdSIUOGE3z_7XAUgZw.png",
                        width: 1220,
                        height: 792,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-3",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-5",
                      children: [
                        "Download ATLauncher for your device from the ",
                        S.jsx("a", {
                          href: "https://atlauncher.com/downloads",
                          className: "w-element w-element-5",
                          children: "ATLauncher Official Website",
                        }),
                        ".",
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-2",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.43.20_2x_hRFU8UpMlzuD7s44J29ke.png",
                        width: 3114,
                        height: 2022,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-2",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-6",
                      children: [
                        'Open ATLauncher and click "Accounts" on the right to log into your Microsoft account. ',
                        "",
                        S.jsx("br", {}),
                        "",
                        "",
                        S.jsx("br", {}),
                        "",
                        "ATLauncher requires you to do this to continue, so no pirated versions of the game will ",
                        "",
                        S.jsx("br", {}),
                        "",
                        "not work. ",
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-4",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.48.32_2x_amQHipSDfP2eVCSN_Ijgg.png",
                        width: 2432,
                        height: 1578,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-4",
                      }),
                    }),
                    S.jsx(wt, {
                      className: "w-paragraph w-paragraph-7",
                      children:
                        'Once logged into your account, click  "Instances" on the right.',
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-5",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.44.09_2_2x_nXgrEdEZRaOu_j1K1EpGG.png",
                        width: 806,
                        height: 522,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-5",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-8",
                      children: [
                        'Find the "Import" button on the top left and import the instance you downloaded from ',
                        "",
                        S.jsx("br", {}),
                        "",
                        'earlier via the "Browse" option.',
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-6",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.46.21_2x_-9d5KRIBtnBjswM0uuxbY.png",
                        width: 672,
                        height: 436,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-6",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-9",
                      children: [
                        'You should probably name the instance the same thing the zip file you imported was named excluding the ".zip" part,  but feel free to name it anything as long as you can remember what ',
                        "",
                        S.jsx("br", {}),
                        "",
                        "version of the server your instance was created for. This will be important for updates.",
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-7",
                      children: S.jsx(At, {
                        src: "/assets/CleanShot_2026-03-11_at_05.47.39_2x_4UmzaNCs2jIQXkcXw9p2O.png",
                        width: 934,
                        height: 606,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-7",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-10",
                      children: [
                        'Click "Play", then find the server and join it from the "Multiplayer" button in the main menu.',
                        "",
                        S.jsx("br", {}),
                        "",
                        "You will see a message like this. Remember your code, and go to the Discord server as ",
                        "",
                        S.jsx("br", {}),
                        "",
                        "mentioned earlier.",
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-8",
                      children: S.jsx(At, {
                        src: "/assets/Screen-Capture-2026-03-24-18-39-52_1_qwndgs7o8bCyzoTRMhsxH.png",
                        width: 2414,
                        height: 1489,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-8",
                      }),
                    }),
                    S.jsxs(wt, {
                      className: "w-paragraph w-paragraph-11",
                      children: [
                        'Gain access to the server by verifying, then navigate to the "mms-portal" channel.',
                        "",
                        S.jsx("br", {}),
                        "",
                        'Type "/link " followed by your code  from Minecraft and link your accounts.',
                      ],
                    }),
                    S.jsx(xe, {
                      className: "w-box w-box-1",
                      children: S.jsx(At, {
                        src: "/assets/Screen-Capture-2026-03-24-18-40-22_t8hJXDuduZIwKJPzzkku2.png",
                        width: 1988,
                        height: 1186,
                        alt: "",
                        loading: "eager",
                        className: "w-image w-image-1",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  ry = ({ data: y }) => {
    const { system: E, resources: P, url: c, pageMeta: C } = y;
    return S.jsxs(Vd.Provider, {
      value: {
        imageLoader: As,
        assetBaseUrl: Ul,
        resources: P,
        breakpoints: qm,
        onError: console.error,
      },
      children: [
        S.jsx(ny, { system: E }, c),
        S.jsx(Am, {
          url: c,
          pageMeta: C,
          siteName: Kd,
          imageLoader: As,
          assetBaseUrl: Ul,
        }),
        S.jsx($m, { children: C.title }),
      ],
    });
  },
  ly = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ry },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  iy = ({}) => {
    const y = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: Kd,
    };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx("script", {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(y, null, 2) },
        }),
        S.jsx("link", { rel: "icon", href: As({ src: `${Ul}${bm}` }) }),
        ey.map((E) =>
          S.jsx(
            "link",
            {
              rel: "preload",
              href: `${Ul}${E}`,
              as: "font",
              crossOrigin: "anonymous",
            },
            E,
          ),
        ),
        ty.map((E) =>
          S.jsx("link", { rel: "preload", href: `${Ul}${E}`, as: "image" }, E),
        ),
      ],
    });
  },
  oy = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: iy }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  sy = {
    isClientRuntimeLoaded: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: !0 },
    },
    onBeforeRenderEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: null },
    },
    dataEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: { server: !0 } },
    },
    onRenderClient: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/renderer/+onRenderClient.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: Tm },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/index/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: ly },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/index/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: oy },
    },
  };
export { sy as configValuesSerialized };
