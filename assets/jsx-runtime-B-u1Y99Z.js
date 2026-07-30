var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function k(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;
    function j(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }
    function ee(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function M(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), M(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + j(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              M(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          (a = e[u]), (s = l + j(a, u)), (c += M(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + j(a, u++)), (c += M(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return M(ee(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          ))
        );
      }
      return c;
    }
    function N(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        M(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function P(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var te =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      F = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            N(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`
            );
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = F),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: P };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, te);
        } catch (e) {
          te(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.3`);
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = c(u(), 1),
  f = `modulepreload`,
  p = function (e) {
    return `/` + e;
  },
  m = {},
  h = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = function (e) {
          return Promise.all(
            e.map((e) =>
              Promise.resolve(e).then(
                (e) => ({ status: `fulfilled`, value: e }),
                (e) => ({ status: `rejected`, reason: e })
              )
            )
          );
        },
        i = function (e) {
          return import.meta.resolve
            ? import.meta.resolve(e)
            : new URL(
                e,
                new URL(
                  `../../../src/node/plugins/importAnalysisBuild.ts`,
                  import.meta.url
                )
              ).href;
        },
        a = document.getElementsByTagName(`link`),
        o = document.querySelector(`meta[property=csp-nonce]`),
        s = o?.nonce || o?.getAttribute(`nonce`);
      r = e(
        t.map((e) => {
          if (((e = p(e, n)), (e = i(e)), e in m)) return;
          m[e] = !0;
          let t = e.endsWith(`.css`);
          for (let n = a.length - 1; n >= 0; n--) {
            let r = a[n];
            if (r.href === e && (!t || r.rel === `stylesheet`)) return;
          }
          let r = document.createElement(`link`);
          if (
            ((r.rel = t ? `stylesheet` : f),
            t || (r.as = `script`),
            (r.crossOrigin = ``),
            (r.href = e),
            s && r.setAttribute(`nonce`, s),
            document.head.appendChild(r),
            t)
          )
            return new Promise((t, n) => {
              r.addEventListener(`load`, t),
                r.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${e}`))
                );
            });
        })
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  g = (e) => {
    throw TypeError(e);
  },
  _ = (e, t, n) => t.has(e) || g(`Cannot ` + n),
  v = (e, t, n) => (
    _(e, t, `read from private field`), n ? n.call(e) : t.get(e)
  ),
  y = (e, t, n) =>
    t.has(e)
      ? g(`Cannot add the same private member more than once`)
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  b = `popstate`;
function x(e = {}) {
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return E(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : D(t);
  }
  return k(t, n, null, e);
}
function S(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function C(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function w() {
  return Math.random().toString(36).substring(2, 10);
}
function T(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function E(e, t, n = null, r) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? O(t) : t),
    state: n,
    key: (t && t.key) || r || w(),
  };
}
function D({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function O(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function k(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    (l = e), c && c({ action: s, location: h.location, delta: t });
  }
  function f(e, t) {
    s = `PUSH`;
    let r = E(h.location, e, t);
    n && n(r, e), (l = u() + 1);
    let d = T(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = E(h.location, e, t);
    n && n(r, e), (l = u());
    let i = T(r, l),
      d = h.createHref(r);
    o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 });
  }
  function m(e) {
    return A(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(b, d),
        (c = e),
        () => {
          i.removeEventListener(b, d), (c = null);
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function A(e, t = !1) {
  let n = `http://localhost`;
  typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    S(n, `No window.location.(origin|href) available to create URL`);
  let r = typeof e == `string` ? e : D(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
var j,
  ee = class {
    constructor(e) {
      if ((y(this, j, new Map()), e)) for (let [t, n] of e) this.set(t, n);
    }
    get(e) {
      if (v(this, j).has(e)) return v(this, j).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw Error(`No value found for context`);
    }
    set(e, t) {
      v(this, j).set(e, t);
    }
  };
j = new WeakMap();
var M = new Set([`lazy`, `caseSensitive`, `path`, `id`, `index`, `children`]);
function N(e) {
  return M.has(e);
}
var P = new Set([
  `lazy`,
  `caseSensitive`,
  `path`,
  `id`,
  `index`,
  `unstable_middleware`,
  `children`,
]);
function te(e) {
  return P.has(e);
}
function F(e) {
  return e.index === !0;
}
function ne(e, t, n = [], r = {}) {
  return e.map((e, i) => {
    let a = [...n, String(i)],
      o = typeof e.id == `string` ? e.id : a.join(`-`);
    if (
      (S(
        e.index !== !0 || !e.children,
        `Cannot specify children on an index route`
      ),
      S(
        !r[o],
        `Found a route id collision on id "${o}".  Route id's must be globally unique within Data Router usages`
      ),
      F(e))
    ) {
      let n = { ...e, ...t(e), id: o };
      return (r[o] = n), n;
    } else {
      let n = { ...e, ...t(e), id: o, children: void 0 };
      return (
        (r[o] = n), e.children && (n.children = ne(e.children, t, a, r)), n
      );
    }
  });
}
function I(e, t, n = `/`) {
  return re(e, t, n, !1);
}
function re(e, t, n, r) {
  let i = V((typeof t == `string` ? O(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = ae(e);
  se(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = ge(i);
    o = me(a[e], t, r);
  }
  return o;
}
function ie(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function ae(e, t = [], n = [], r = ``) {
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (S(
        o.relativePath.startsWith(r),
        `Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = U([r, o.relativePath]),
      c = n.concat(o);
    e.children &&
      e.children.length > 0 &&
      (S(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${s}".`
      ),
      ae(e.children, t, c, s)),
      !(e.path == null && !e.index) &&
        t.push({ path: s, score: fe(s, e.index), routesMeta: c });
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) i(e, t);
      else for (let n of oe(e.path)) i(e, t, n);
    }),
    t
  );
}
function oe(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = oe(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function se(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? pe(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex)
        )
      : t.score - e.score
  );
}
var L = /^:[\w-]+$/,
  ce = 3,
  le = 2,
  R = 1,
  z = 10,
  ue = -2,
  de = (e) => e === `*`;
function fe(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(de) && (r += ue),
    t && (r += le),
    n
      .filter((e) => !de(e))
      .reduce((e, t) => e + (L.test(t) ? ce : t === `` ? R : z), r)
  );
}
function pe(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function me(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = B(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = B(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l
        )),
      !u)
    )
      return null;
    Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: U([a, u.pathname]),
        pathnameBase: Se(U([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = U([a, u.pathnameBase]));
  }
  return o;
}
function B(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = he(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)), e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function he(e, t = !1, n = !0) {
  C(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      `/*`
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      `/*`
    )}".`
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (
            r.push({ paramName: t, isOptional: n != null }),
            n ? `/?([^\\/]+)?` : `/([^\\/]+)`
          )
        );
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
      ? (i += `\\/*$`)
      : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function ge(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      C(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function V(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function _e(e, t = `/`) {
  let {
    pathname: n,
    search: r = ``,
    hash: i = ``,
  } = typeof e == `string` ? O(e) : e;
  return {
    pathname: n ? (n.startsWith(`/`) ? n : H(n, t)) : t,
    search: Ce(r),
    hash: we(i),
  };
}
function H(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function ve(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ye(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function be(e) {
  let t = ye(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function xe(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = O(e))
    : ((i = { ...e }),
      S(
        !i.pathname || !i.pathname.includes(`?`),
        ve(`?`, `pathname`, `search`, i)
      ),
      S(
        !i.pathname || !i.pathname.includes(`#`),
        ve(`#`, `pathname`, `hash`, i)
      ),
      S(!i.search || !i.search.includes(`#`), ve(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) t.shift(), --e;
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = _e(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c;
}
var U = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  Se = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Ce = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  we = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Te = class {
    constructor(e, t) {
      (this.type = `DataWithResponseInit`),
        (this.data = e),
        (this.init = t || null);
    }
  };
function Ee(e, t) {
  return new Te(e, typeof t == `number` ? { status: t } : t);
}
var De = (e, t = 302) => {
    let n = t;
    typeof n == `number`
      ? (n = { status: n })
      : n.status === void 0 && (n.status = 302);
    let r = new Headers(n.headers);
    return r.set(`Location`, e), new Response(null, { ...n, headers: r });
  },
  W = class {
    constructor(e, t, n, r = !1) {
      (this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n);
    }
  };
function Oe(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
var G = [`POST`, `PUT`, `PATCH`, `DELETE`],
  ke = new Set(G),
  Ae = [`GET`, ...G],
  je = new Set(Ae),
  K = new Set([301, 302, 303, 307, 308]),
  Me = new Set([307, 308]),
  Ne = {
    state: `idle`,
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Pe = {
    state: `idle`,
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Fe = { state: `unblocked`, proceed: void 0, reset: void 0, location: void 0 },
  Ie = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Le = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Re = `remix-router-transitions`,
  ze = Symbol(`ResetLoaderData`);
function Be(e) {
  let t = e.window ? e.window : typeof window < `u` ? window : void 0,
    n =
      t !== void 0 &&
      t.document !== void 0 &&
      t.document.createElement !== void 0;
  S(
    e.routes.length > 0,
    `You must provide a non-empty routes array to createRouter`
  );
  let r = e.hydrationRouteProperties || [],
    i = e.mapRouteProperties || Le,
    a = {},
    o = ne(e.routes, i, void 0, a),
    s,
    c = e.basename || `/`,
    l = e.dataStrategy || nt,
    u = { unstable_middleware: !1, ...e.future },
    d = null,
    f = new Set(),
    p = null,
    m = null,
    h = null,
    g = e.hydrationData != null,
    _ = I(o, e.history.location, c),
    v = !1,
    y = null,
    b;
  if (_ == null && !e.patchRoutesOnNavigation) {
    let t = q(404, { pathname: e.history.location.pathname }),
      { matches: n, route: r } = xt(o);
    (b = !0), (_ = n), (y = { [r.id]: t });
  } else if (
    (_ &&
      !e.hydrationData &&
      tt(_, o, e.history.location.pathname).active &&
      (_ = null),
    !_)
  ) {
    (b = !1), (_ = []);
    let t = tt(null, o, e.history.location.pathname);
    t.active && t.matches && ((v = !0), (_ = t.matches));
  } else if (_.some((e) => e.route.lazy)) b = !1;
  else if (!_.some((e) => e.route.loader)) b = !0;
  else {
    let t = e.hydrationData ? e.hydrationData.loaderData : null,
      n = e.hydrationData ? e.hydrationData.errors : null;
    if (n) {
      let e = _.findIndex((e) => n[e.route.id] !== void 0);
      b = _.slice(0, e + 1).every((e) => !Ge(e.route, t, n));
    } else b = _.every((e) => !Ge(e.route, t, n));
  }
  let x,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: b,
      navigation: Ne,
      restoreScrollPosition: e.hydrationData == null && null,
      preventScrollReset: !1,
      revalidation: `idle`,
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = `POP`,
    D = !1,
    O,
    k = !1,
    j = new Map(),
    M = null,
    N = !1,
    P = !1,
    te = new Set(),
    F = new Map(),
    ae = 0,
    oe = -1,
    se = new Map(),
    L = new Set(),
    ce = new Map(),
    le = new Map(),
    R = new Set(),
    z = new Map(),
    ue,
    de = null;
  function fe() {
    if (
      ((d = e.history.listen(({ action: t, location: n, delta: r }) => {
        if (ue) {
          ue(), (ue = void 0);
          return;
        }
        C(
          z.size === 0 || r != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let i = Je({
          currentLocation: w.location,
          nextLocation: n,
          historyAction: t,
        });
        if (i && r != null) {
          let t = new Promise((e) => {
            ue = e;
          });
          e.history.go(r * -1),
            qe(i, {
              state: `blocked`,
              location: n,
              proceed() {
                qe(i, {
                  state: `proceeding`,
                  proceed: void 0,
                  reset: void 0,
                  location: n,
                }),
                  t.then(() => e.history.go(r));
              },
              reset() {
                let e = new Map(w.blockers);
                e.set(i, Fe), B({ blockers: e });
              },
            });
          return;
        }
        return H(t, n);
      })),
      n)
    ) {
      Rt(t, j);
      let e = () => zt(t, j);
      t.addEventListener(`pagehide`, e),
        (M = () => t.removeEventListener(`pagehide`, e));
    }
    return w.initialized || H(`POP`, w.location, { initialHydration: !0 }), x;
  }
  function pe() {
    d && d(),
      M && M(),
      f.clear(),
      O && O.abort(),
      w.fetchers.forEach((e, t) => Ae(t)),
      w.blockers.forEach((e, t) => Ke(t));
  }
  function me(e) {
    return f.add(e), () => f.delete(e);
  }
  function B(e, t = {}) {
    w = { ...w, ...e };
    let n = [],
      r = [];
    w.fetchers.forEach((e, t) => {
      e.state === `idle` && (R.has(t) ? n.push(t) : r.push(t));
    }),
      R.forEach((e) => {
        !w.fetchers.has(e) && !F.has(e) && n.push(e);
      }),
      [...f].forEach((e) =>
        e(w, {
          deletedFetchers: n,
          viewTransitionOpts: t.viewTransitionOpts,
          flushSync: t.flushSync === !0,
        })
      ),
      n.forEach((e) => Ae(e)),
      r.forEach((e) => w.fetchers.delete(e));
  }
  function he(t, n, { flushSync: r } = {}) {
    let i =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        Y(w.navigation.formMethod) &&
        w.navigation.state === `loading` &&
        t.state?._isRedirect !== !0,
      a;
    a = n.actionData
      ? Object.keys(n.actionData).length > 0
        ? n.actionData
        : null
      : i
      ? w.actionData
      : null;
    let c = n.loaderData
        ? vt(w.loaderData, n.loaderData, n.matches || [], n.errors)
        : w.loaderData,
      l = w.blockers;
    l.size > 0 && ((l = new Map(l)), l.forEach((e, t) => l.set(t, Fe)));
    let u =
      D === !0 ||
      (w.navigation.formMethod != null &&
        Y(w.navigation.formMethod) &&
        t.state?._isRedirect !== !0);
    (s &&= ((o = s), void 0)),
      N ||
        T === `POP` ||
        (T === `PUSH`
          ? e.history.push(t, t.state)
          : T === `REPLACE` && e.history.replace(t, t.state));
    let d;
    if (T === `POP`) {
      let e = j.get(w.location.pathname);
      e && e.has(t.pathname)
        ? (d = { currentLocation: w.location, nextLocation: t })
        : j.has(t.pathname) &&
          (d = { currentLocation: t, nextLocation: w.location });
    } else if (k) {
      let e = j.get(w.location.pathname);
      e
        ? e.add(t.pathname)
        : ((e = new Set([t.pathname])), j.set(w.location.pathname, e)),
        (d = { currentLocation: w.location, nextLocation: t });
    }
    B(
      {
        ...n,
        actionData: a,
        loaderData: c,
        historyAction: T,
        location: t,
        initialized: !0,
        navigation: Ne,
        revalidation: `idle`,
        restoreScrollPosition: et(t, n.matches || w.matches),
        preventScrollReset: u,
        blockers: l,
      },
      { viewTransitionOpts: d, flushSync: r === !0 }
    ),
      (T = `POP`),
      (D = !1),
      (k = !1),
      (N = !1),
      (P = !1),
      de?.resolve(),
      (de = null);
  }
  async function ge(t, n) {
    if (typeof t == `number`) {
      e.history.go(t);
      return;
    }
    let {
        path: r,
        submission: i,
        error: a,
      } = Ue(
        !1,
        He(w.location, w.matches, c, t, n?.fromRouteId, n?.relative),
        n
      ),
      o = w.location,
      s = E(w.location, r, n && n.state);
    s = { ...s, ...e.history.encodeLocation(s) };
    let l = n && n.replace != null ? n.replace : void 0,
      u = `PUSH`;
    l === !0
      ? (u = `REPLACE`)
      : l === !1 ||
        (i != null &&
          Y(i.formMethod) &&
          i.formAction === w.location.pathname + w.location.search &&
          (u = `REPLACE`));
    let d =
        n && `preventScrollReset` in n ? n.preventScrollReset === !0 : void 0,
      f = (n && n.flushSync) === !0,
      p = Je({ currentLocation: o, nextLocation: s, historyAction: u });
    if (p) {
      qe(p, {
        state: `blocked`,
        location: s,
        proceed() {
          qe(p, {
            state: `proceeding`,
            proceed: void 0,
            reset: void 0,
            location: s,
          }),
            ge(t, n);
        },
        reset() {
          let e = new Map(w.blockers);
          e.set(p, Fe), B({ blockers: e });
        },
      });
      return;
    }
    await H(u, s, {
      submission: i,
      pendingError: a,
      preventScrollReset: d,
      replace: n && n.replace,
      enableViewTransition: n && n.viewTransition,
      flushSync: f,
    });
  }
  function _e() {
    (de ||= Bt()), De(), B({ revalidation: `loading` });
    let e = de.promise;
    return w.navigation.state === `submitting`
      ? e
      : w.navigation.state === `idle`
      ? (H(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }),
        e)
      : (H(T || w.historyAction, w.navigation.location, {
          overrideNavigation: w.navigation,
          enableViewTransition: k === !0,
        }),
        e);
  }
  async function H(t, n, r) {
    O && O.abort(),
      (O = null),
      (T = t),
      (N = (r && r.startUninterruptedRevalidation) === !0),
      $e(w.location, w.matches),
      (D = (r && r.preventScrollReset) === !0),
      (k = (r && r.enableViewTransition) === !0);
    let i = s || o,
      a = r && r.overrideNavigation,
      l =
        r?.initialHydration && w.matches && w.matches.length > 0 && !v
          ? w.matches
          : I(i, n, c),
      u = (r && r.flushSync) === !0;
    if (
      l &&
      w.initialized &&
      !P &&
      wt(w.location, n) &&
      !(r && r.submission && Y(r.submission.formMethod))
    ) {
      he(n, { matches: l }, { flushSync: u });
      return;
    }
    let d = tt(l, i, n.pathname);
    if ((d.active && d.matches && (l = d.matches), !l)) {
      let { error: e, notFoundMatches: t, route: r } = Xe(n.pathname);
      he(
        n,
        { matches: t, loaderData: {}, errors: { [r.id]: e } },
        { flushSync: u }
      );
      return;
    }
    O = new AbortController();
    let f = pt(e.history, n, O.signal, r && r.submission),
      p = new ee(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      m;
    if (r && r.pendingError)
      m = [bt(l).route.id, { type: `error`, error: r.pendingError }];
    else if (r && r.submission && Y(r.submission.formMethod)) {
      let t = await ve(
        f,
        n,
        r.submission,
        l,
        p,
        d.active,
        r && r.initialHydration === !0,
        { replace: r.replace, flushSync: u }
      );
      if (t.shortCircuited) return;
      if (t.pendingActionResult) {
        let [e, r] = t.pendingActionResult;
        if (J(r) && Oe(r.error) && r.error.status === 404) {
          (O = null),
            he(n, {
              matches: t.matches,
              loaderData: {},
              errors: { [e]: r.error },
            });
          return;
        }
      }
      (l = t.matches || l),
        (m = t.pendingActionResult),
        (a = Nt(n, r.submission)),
        (u = !1),
        (d.active = !1),
        (f = pt(e.history, f.url, f.signal));
    }
    let {
      shortCircuited: h,
      matches: g,
      loaderData: _,
      errors: y,
    } = await ye(
      f,
      n,
      l,
      p,
      d.active,
      a,
      r && r.submission,
      r && r.fetcherSubmission,
      r && r.replace,
      r && r.initialHydration === !0,
      u,
      m
    );
    h ||
      ((O = null),
      he(n, { matches: g || l, ...yt(m), loaderData: _, errors: y }));
  }
  async function ve(e, t, n, o, s, l, u, d = {}) {
    if (
      (De(), B({ navigation: Pt(t, n) }, { flushSync: d.flushSync === !0 }), l)
    ) {
      let n = await rt(o, t.pathname, e.signal);
      if (n.type === `aborted`) return { shortCircuited: !0 };
      if (n.type === `error`) {
        let e = bt(n.partialMatches).route.id;
        return {
          matches: n.partialMatches,
          pendingActionResult: [e, { type: `error`, error: n.error }],
        };
      } else if (n.matches) o = n.matches;
      else {
        let { notFoundMatches: e, error: n, route: r } = Xe(t.pathname);
        return {
          matches: e,
          pendingActionResult: [r.id, { type: `error`, error: n }],
        };
      }
    }
    let f,
      p = jt(o, t);
    if (!p.route.action && !p.route.lazy)
      f = {
        type: `error`,
        error: q(405, {
          method: e.method,
          pathname: t.pathname,
          routeId: p.route.id,
        }),
      };
    else {
      let t = await Te(e, st(i, a, e, o, p, u ? [] : r, s), s, null);
      if (((f = t[p.route.id]), !f)) {
        for (let e of o)
          if (t[e.route.id]) {
            f = t[e.route.id];
            break;
          }
      }
      if (e.signal.aborted) return { shortCircuited: !0 };
    }
    if (Et(f)) {
      let t;
      return (
        (t =
          d && d.replace != null
            ? d.replace
            : ft(f.response.headers.get(`Location`), new URL(e.url), c) ===
              w.location.pathname + w.location.search),
        await we(e, f, !0, { submission: n, replace: t }),
        { shortCircuited: !0 }
      );
    }
    if (J(f)) {
      let e = bt(o, p.route.id);
      return (
        (d && d.replace) !== !0 && (T = `PUSH`),
        { matches: o, pendingActionResult: [e.route.id, f, p.route.id] }
      );
    }
    return { matches: o, pendingActionResult: [p.route.id, f] };
  }
  async function ye(t, n, l, u, d, f, p, m, h, g, _, v) {
    let y = f || Nt(n, p),
      b = p || m || Mt(y),
      x = !N && !g;
    if (d) {
      if (x) {
        let e = be(v);
        B(
          { navigation: y, ...(e === void 0 ? {} : { actionData: e }) },
          { flushSync: _ }
        );
      }
      let e = await rt(l, n.pathname, t.signal);
      if (e.type === `aborted`) return { shortCircuited: !0 };
      if (e.type === `error`) {
        let t = bt(e.partialMatches).route.id;
        return {
          matches: e.partialMatches,
          loaderData: {},
          errors: { [t]: e.error },
        };
      } else if (e.matches) l = e.matches;
      else {
        let { error: e, notFoundMatches: t, route: r } = Xe(n.pathname);
        return { matches: t, loaderData: {}, errors: { [r.id]: e } };
      }
    }
    let S = s || o,
      { dsMatches: C, revalidatingFetchers: T } = We(
        t,
        u,
        i,
        a,
        e.history,
        w,
        l,
        b,
        n,
        g ? [] : r,
        g === !0,
        P,
        te,
        R,
        ce,
        L,
        S,
        c,
        e.patchRoutesOnNavigation != null,
        v
      );
    if (
      ((oe = ++ae),
      !e.dataStrategy && !C.some((e) => e.shouldLoad) && T.length === 0)
    ) {
      let e = ze();
      return (
        he(
          n,
          {
            matches: l,
            loaderData: {},
            errors: v && J(v[1]) ? { [v[0]]: v[1].error } : null,
            ...yt(v),
            ...(e ? { fetchers: new Map(w.fetchers) } : {}),
          },
          { flushSync: _ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (x) {
      let e = {};
      if (!d) {
        e.navigation = y;
        let t = be(v);
        t !== void 0 && (e.actionData = t);
      }
      T.length > 0 && (e.fetchers = xe(T)), B(e, { flushSync: _ });
    }
    T.forEach((e) => {
      K(e.key), e.controller && F.set(e.key, e.controller);
    });
    let E = () => T.forEach((e) => K(e.key));
    O && O.signal.addEventListener(`abort`, E);
    let { loaderResults: D, fetcherResults: k } = await Ee(C, T, t, u);
    if (t.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener(`abort`, E),
      T.forEach((e) => F.delete(e.key));
    let A = St(D);
    if (A)
      return await we(t, A.result, !0, { replace: h }), { shortCircuited: !0 };
    if (((A = St(k)), A))
      return (
        L.add(A.key),
        await we(t, A.result, !0, { replace: h }),
        { shortCircuited: !0 }
      );
    let { loaderData: j, errors: ee } = _t(w, l, D, v, T, k);
    g && w.errors && (ee = { ...w.errors, ...ee });
    let M = ze(),
      ne = Be(oe),
      I = M || ne || T.length > 0;
    return {
      matches: l,
      loaderData: j,
      errors: ee,
      ...(I ? { fetchers: new Map(w.fetchers) } : {}),
    };
  }
  function be(e) {
    if (e && !J(e[1])) return { [e[0]]: e[1].data };
    if (w.actionData)
      return Object.keys(w.actionData).length === 0 ? null : w.actionData;
  }
  function xe(e) {
    return (
      e.forEach((e) => {
        let t = w.fetchers.get(e.key),
          n = Ft(void 0, t ? t.data : void 0);
        w.fetchers.set(e.key, n);
      }),
      new Map(w.fetchers)
    );
  }
  async function U(t, n, r, i) {
    K(t);
    let a = (i && i.flushSync) === !0,
      l = s || o,
      u = He(w.location, w.matches, c, r, n, i?.relative),
      d = I(l, u, c),
      f = tt(d, l, u);
    if ((f.active && f.matches && (d = f.matches), !d)) {
      G(t, n, q(404, { pathname: u }), { flushSync: a });
      return;
    }
    let { path: p, submission: m, error: h } = Ue(!0, u, i);
    if (h) {
      G(t, n, h, { flushSync: a });
      return;
    }
    let g = jt(d, p),
      _ = new ee(
        e.unstable_getContext ? await e.unstable_getContext() : void 0
      ),
      v = (i && i.preventScrollReset) === !0;
    if (m && Y(m.formMethod)) {
      await Se(t, n, p, g, d, _, f.active, a, v, m);
      return;
    }
    ce.set(t, { routeId: n, path: p }),
      await Ce(t, n, p, g, d, _, f.active, a, v, m);
  }
  async function Se(t, n, l, u, d, f, p, m, h, g) {
    De(), ce.delete(t);
    function _(e) {
      return !e.route.action && !e.route.lazy
        ? (G(t, n, q(405, { method: g.formMethod, pathname: l, routeId: n }), {
            flushSync: m,
          }),
          !0)
        : !1;
    }
    if (!p && _(u)) return;
    W(t, It(g, w.fetchers.get(t)), { flushSync: m });
    let v = new AbortController(),
      y = pt(e.history, l, v.signal, g);
    if (p) {
      let e = await rt(d, l, y.signal, t);
      if (e.type === `aborted`) return;
      if (e.type === `error`) {
        G(t, n, e.error, { flushSync: m });
        return;
      } else if (!e.matches) {
        G(t, n, q(404, { pathname: l }), { flushSync: m });
        return;
      } else if (((d = e.matches), (u = jt(d, l)), _(u))) return;
    }
    F.set(t, v);
    let b = ae,
      x = (await Te(y, st(i, a, y, d, u, r, f), f, t))[u.route.id];
    if (y.signal.aborted) {
      F.get(t) === v && F.delete(t);
      return;
    }
    if (R.has(t)) {
      if (Et(x) || J(x)) {
        W(t, Lt(void 0));
        return;
      }
    } else {
      if (Et(x))
        if ((F.delete(t), oe > b)) {
          W(t, Lt(void 0));
          return;
        } else
          return (
            L.add(t),
            W(t, Ft(g)),
            we(y, x, !1, { fetcherSubmission: g, preventScrollReset: h })
          );
      if (J(x)) {
        G(t, n, x.error);
        return;
      }
    }
    let C = w.navigation.location || w.location,
      E = pt(e.history, C, v.signal),
      D = s || o,
      k =
        w.navigation.state === `idle`
          ? w.matches
          : I(D, w.navigation.location, c);
    S(k, `Didn't find any matches after fetcher action`);
    let A = ++ae;
    se.set(t, A);
    let j = Ft(g, x.data);
    w.fetchers.set(t, j);
    let { dsMatches: ee, revalidatingFetchers: M } = We(
      E,
      f,
      i,
      a,
      e.history,
      w,
      k,
      g,
      C,
      r,
      !1,
      P,
      te,
      R,
      ce,
      L,
      D,
      c,
      e.patchRoutesOnNavigation != null,
      [u.route.id, x]
    );
    M.filter((e) => e.key !== t).forEach((e) => {
      let t = e.key,
        n = w.fetchers.get(t),
        r = Ft(void 0, n ? n.data : void 0);
      w.fetchers.set(t, r), K(t), e.controller && F.set(t, e.controller);
    }),
      B({ fetchers: new Map(w.fetchers) });
    let N = () => M.forEach((e) => K(e.key));
    v.signal.addEventListener(`abort`, N);
    let { loaderResults: ne, fetcherResults: re } = await Ee(ee, M, E, f);
    if (v.signal.aborted) return;
    if (
      (v.signal.removeEventListener(`abort`, N),
      se.delete(t),
      F.delete(t),
      M.forEach((e) => F.delete(e.key)),
      w.fetchers.has(t))
    ) {
      let e = Lt(x.data);
      w.fetchers.set(t, e);
    }
    let ie = St(ne);
    if (ie) return we(E, ie.result, !1, { preventScrollReset: h });
    if (((ie = St(re)), ie))
      return L.add(ie.key), we(E, ie.result, !1, { preventScrollReset: h });
    let { loaderData: le, errors: z } = _t(w, k, ne, void 0, M, re);
    Be(A),
      w.navigation.state === `loading` && A > oe
        ? (S(T, `Expected pending action`),
          O && O.abort(),
          he(w.navigation.location, {
            matches: k,
            loaderData: le,
            errors: z,
            fetchers: new Map(w.fetchers),
          }))
        : (B({
            errors: z,
            loaderData: vt(w.loaderData, le, k, z),
            fetchers: new Map(w.fetchers),
          }),
          (P = !1));
  }
  async function Ce(t, n, o, s, c, l, u, d, f, p) {
    let m = w.fetchers.get(t);
    W(t, Ft(p, m ? m.data : void 0), { flushSync: d });
    let h = new AbortController(),
      g = pt(e.history, o, h.signal);
    if (u) {
      let e = await rt(c, o, g.signal, t);
      if (e.type === `aborted`) return;
      if (e.type === `error`) {
        G(t, n, e.error, { flushSync: d });
        return;
      } else if (e.matches) (c = e.matches), (s = jt(c, o));
      else {
        G(t, n, q(404, { pathname: o }), { flushSync: d });
        return;
      }
    }
    F.set(t, h);
    let _ = ae,
      v = (await Te(g, st(i, a, g, c, s, r, l), l, t))[s.route.id];
    if ((F.get(t) === h && F.delete(t), !g.signal.aborted)) {
      if (R.has(t)) {
        W(t, Lt(void 0));
        return;
      }
      if (Et(v))
        if (oe > _) {
          W(t, Lt(void 0));
          return;
        } else {
          L.add(t), await we(g, v, !1, { preventScrollReset: f });
          return;
        }
      if (J(v)) {
        G(t, n, v.error);
        return;
      }
      W(t, Lt(v.data));
    }
  }
  async function we(
    e,
    r,
    i,
    {
      submission: a,
      fetcherSubmission: o,
      preventScrollReset: s,
      replace: l,
    } = {}
  ) {
    r.response.headers.has(`X-Remix-Revalidate`) && (P = !0);
    let u = r.response.headers.get(`Location`);
    S(u, `Expected a Location header on the redirect Response`),
      (u = ft(u, new URL(e.url), c));
    let d = E(w.location, u, { _isRedirect: !0 });
    if (n) {
      let e = !1;
      if (r.response.headers.has(`X-Remix-Reload-Document`)) e = !0;
      else if (Ie.test(u)) {
        let n = A(u, !0);
        e = n.origin !== t.location.origin || V(n.pathname, c) == null;
      }
      if (e) {
        l ? t.location.replace(u) : t.location.assign(u);
        return;
      }
    }
    O = null;
    let f =
        l === !0 || r.response.headers.has(`X-Remix-Replace`)
          ? `REPLACE`
          : `PUSH`,
      { formMethod: p, formAction: m, formEncType: h } = w.navigation;
    !a && !o && p && m && h && (a = Mt(w.navigation));
    let g = a || o;
    Me.has(r.response.status) && g && Y(g.formMethod)
      ? await H(f, d, {
          submission: { ...g, formAction: u },
          preventScrollReset: s || D,
          enableViewTransition: i ? k : void 0,
        })
      : await H(f, d, {
          overrideNavigation: Nt(d, a),
          fetcherSubmission: o,
          preventScrollReset: s || D,
          enableViewTransition: i ? k : void 0,
        });
  }
  async function Te(e, t, n, r) {
    let i,
      a = {};
    try {
      i = await ct(l, e, t, r, n, !1);
    } catch (e) {
      return (
        t
          .filter((e) => e.shouldLoad)
          .forEach((t) => {
            a[t.route.id] = { type: `error`, error: e };
          }),
        a
      );
    }
    if (e.signal.aborted) return a;
    for (let [n, r] of Object.entries(i))
      if (Tt(r)) {
        let i = r.result;
        a[n] = { type: `redirect`, response: dt(i, e, n, t, c) };
      } else a[n] = await ut(r);
    return a;
  }
  async function Ee(e, t, n, r) {
    let i = Te(n, e, r, null),
      a = Promise.all(
        t.map(async (e) => {
          if (e.matches && e.match && e.request && e.controller) {
            let t = (await Te(e.request, e.matches, r, e.key))[
              e.match.route.id
            ];
            return { [e.key]: t };
          } else
            return Promise.resolve({
              [e.key]: { type: `error`, error: q(404, { pathname: e.path }) },
            });
        })
      );
    return {
      loaderResults: await i,
      fetcherResults: (await a).reduce((e, t) => Object.assign(e, t), {}),
    };
  }
  function De() {
    (P = !0),
      ce.forEach((e, t) => {
        F.has(t) && te.add(t), K(t);
      });
  }
  function W(e, t, n = {}) {
    w.fetchers.set(e, t),
      B(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (n && n.flushSync) === !0 }
      );
  }
  function G(e, t, n, r = {}) {
    let i = bt(w.matches, t);
    Ae(e),
      B(
        { errors: { [i.route.id]: n }, fetchers: new Map(w.fetchers) },
        { flushSync: (r && r.flushSync) === !0 }
      );
  }
  function ke(e) {
    return (
      le.set(e, (le.get(e) || 0) + 1),
      R.has(e) && R.delete(e),
      w.fetchers.get(e) || Pe
    );
  }
  function Ae(e) {
    let t = w.fetchers.get(e);
    F.has(e) && !(t && t.state === `loading` && se.has(e)) && K(e),
      ce.delete(e),
      se.delete(e),
      L.delete(e),
      R.delete(e),
      te.delete(e),
      w.fetchers.delete(e);
  }
  function je(e) {
    let t = (le.get(e) || 0) - 1;
    t <= 0 ? (le.delete(e), R.add(e)) : le.set(e, t),
      B({ fetchers: new Map(w.fetchers) });
  }
  function K(e) {
    let t = F.get(e);
    t && (t.abort(), F.delete(e));
  }
  function Re(e) {
    for (let t of e) {
      let e = Lt(ke(t).data);
      w.fetchers.set(t, e);
    }
  }
  function ze() {
    let e = [],
      t = !1;
    for (let n of L) {
      let r = w.fetchers.get(n);
      S(r, `Expected fetcher: ${n}`),
        r.state === `loading` && (L.delete(n), e.push(n), (t = !0));
    }
    return Re(e), t;
  }
  function Be(e) {
    let t = [];
    for (let [n, r] of se)
      if (r < e) {
        let e = w.fetchers.get(n);
        S(e, `Expected fetcher: ${n}`),
          e.state === `loading` && (K(n), se.delete(n), t.push(n));
      }
    return Re(t), t.length > 0;
  }
  function Ve(e, t) {
    let n = w.blockers.get(e) || Fe;
    return z.get(e) !== t && z.set(e, t), n;
  }
  function Ke(e) {
    w.blockers.delete(e), z.delete(e);
  }
  function qe(e, t) {
    let n = w.blockers.get(e) || Fe;
    S(
      (n.state === `unblocked` && t.state === `blocked`) ||
        (n.state === `blocked` && t.state === `blocked`) ||
        (n.state === `blocked` && t.state === `proceeding`) ||
        (n.state === `blocked` && t.state === `unblocked`) ||
        (n.state === `proceeding` && t.state === `unblocked`),
      `Invalid blocker state transition: ${n.state} -> ${t.state}`
    );
    let r = new Map(w.blockers);
    r.set(e, t), B({ blockers: r });
  }
  function Je({ currentLocation: e, nextLocation: t, historyAction: n }) {
    if (z.size === 0) return;
    z.size > 1 && C(!1, `A router only supports one blocker at a time`);
    let r = Array.from(z.entries()),
      [i, a] = r[r.length - 1],
      o = w.blockers.get(i);
    if (
      !(o && o.state === `proceeding`) &&
      a({ currentLocation: e, nextLocation: t, historyAction: n })
    )
      return i;
  }
  function Xe(e) {
    let t = q(404, { pathname: e }),
      { matches: n, route: r } = xt(s || o);
    return { notFoundMatches: n, route: r, error: t };
  }
  function Ze(e, t, n) {
    if (((p = e), (h = t), (m = n || null), !g && w.navigation === Ne)) {
      g = !0;
      let e = et(w.location, w.matches);
      e != null && B({ restoreScrollPosition: e });
    }
    return () => {
      (p = null), (h = null), (m = null);
    };
  }
  function Qe(e, t) {
    return (
      (m &&
        m(
          e,
          t.map((e) => ie(e, w.loaderData))
        )) ||
      e.key
    );
  }
  function $e(e, t) {
    if (p && h) {
      let n = Qe(e, t);
      p[n] = h();
    }
  }
  function et(e, t) {
    if (p) {
      let n = Qe(e, t),
        r = p[n];
      if (typeof r == `number`) return r;
    }
    return null;
  }
  function tt(t, n, r) {
    if (e.patchRoutesOnNavigation) {
      if (!t) return { active: !0, matches: re(n, r, c, !0) || [] };
      if (Object.keys(t[0].params).length > 0)
        return { active: !0, matches: re(n, r, c, !0) };
    }
    return { active: !1, matches: null };
  }
  async function rt(t, n, r, l) {
    if (!e.patchRoutesOnNavigation) return { type: `success`, matches: t };
    let u = t;
    for (;;) {
      let t = s == null,
        d = s || o,
        f = a;
      try {
        await e.patchRoutesOnNavigation({
          signal: r,
          path: n,
          matches: u,
          fetcherKey: l,
          patch: (e, t) => {
            r.aborted || Ye(e, t, d, f, i);
          },
        });
      } catch (e) {
        return { type: `error`, error: e, partialMatches: u };
      } finally {
        t && !r.aborted && (o = [...o]);
      }
      if (r.aborted) return { type: `aborted` };
      let p = I(d, n, c);
      if (p) return { type: `success`, matches: p };
      let m = re(d, n, c, !0);
      if (
        !m ||
        (u.length === m.length &&
          u.every((e, t) => e.route.id === m[t].route.id))
      )
        return { type: `success`, matches: null };
      u = m;
    }
  }
  function it(e) {
    (a = {}), (s = ne(e, i, void 0, a));
  }
  function at(e, t) {
    let n = s == null;
    Ye(e, t, s || o, a, i), n && ((o = [...o]), B({}));
  }
  return (
    (x = {
      get basename() {
        return c;
      },
      get future() {
        return u;
      },
      get state() {
        return w;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: fe,
      subscribe: me,
      enableScrollRestoration: Ze,
      navigate: ge,
      fetch: U,
      revalidate: _e,
      createHref: (t) => e.history.createHref(t),
      encodeLocation: (t) => e.history.encodeLocation(t),
      getFetcher: ke,
      deleteFetcher: je,
      dispose: pe,
      getBlocker: Ve,
      deleteBlocker: Ke,
      patchRoutes: at,
      _internalFetchControllers: F,
      _internalSetRoutes: it,
    }),
    x
  );
}
function Ve(e) {
  return (
    e != null &&
    ((`formData` in e && e.formData != null) ||
      (`body` in e && e.body !== void 0))
  );
}
function He(e, t, n, r, i, a) {
  let o, s;
  if (i) {
    o = [];
    for (let e of t)
      if ((o.push(e), e.route.id === i)) {
        s = e;
        break;
      }
  } else (o = t), (s = t[t.length - 1]);
  let c = xe(r || `.`, be(o), V(e.pathname, n) || e.pathname, a === `path`);
  if (
    (r ?? ((c.search = e.search), (c.hash = e.hash)),
    (r == null || r === `` || r === `.`) && s)
  ) {
    let e = At(c.search);
    if (s.route.index && !e)
      c.search = c.search ? c.search.replace(/^\?/, `?index&`) : `?index`;
    else if (!s.route.index && e) {
      let e = new URLSearchParams(c.search),
        t = e.getAll(`index`);
      e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t));
      let n = e.toString();
      c.search = n ? `?${n}` : ``;
    }
  }
  return (
    n !== `/` && (c.pathname = c.pathname === `/` ? n : U([n, c.pathname])),
    D(c)
  );
}
function Ue(e, t, n) {
  if (!n || !Ve(n)) return { path: t };
  if (n.formMethod && !kt(n.formMethod))
    return { path: t, error: q(405, { method: n.formMethod }) };
  let r = () => ({ path: t, error: q(400, { type: `invalid-body` }) }),
    i = (n.formMethod || `get`).toUpperCase(),
    a = Ct(t);
  if (n.body !== void 0) {
    if (n.formEncType === `text/plain`) {
      if (!Y(i)) return r();
      let e =
        typeof n.body == `string`
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce(
              (e, [t, n]) => `${e}${t}=${n}
`,
              ``
            )
          : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: e,
        },
      };
    } else if (n.formEncType === `application/json`) {
      if (!Y(i)) return r();
      try {
        let e = typeof n.body == `string` ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: e,
            text: void 0,
          },
        };
      } catch {
        return r();
      }
    }
  }
  S(
    typeof FormData == `function`,
    `FormData is not available in this environment`
  );
  let o, s;
  if (n.formData) (o = mt(n.formData)), (s = n.formData);
  else if (n.body instanceof FormData) (o = mt(n.body)), (s = n.body);
  else if (n.body instanceof URLSearchParams) (o = n.body), (s = ht(o));
  else if (n.body == null) (o = new URLSearchParams()), (s = new FormData());
  else
    try {
      (o = new URLSearchParams(n.body)), (s = ht(o));
    } catch {
      return r();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (n && n.formEncType) || `application/x-www-form-urlencoded`,
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (Y(c.formMethod)) return { path: t, submission: c };
  let l = O(t);
  return (
    e && l.search && At(l.search) && o.append(`index`, ``),
    (l.search = `?${o}`),
    { path: D(l), submission: c }
  );
}
function We(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y) {
  let b = y ? (J(y[1]) ? y[1].error : y[1].data) : void 0,
    x = i.createURL(a.location),
    S = i.createURL(c),
    C;
  if (u && a.errors) {
    let e = Object.keys(a.errors)[0];
    C = o.findIndex((t) => t.route.id === e);
  } else if (y && J(y[1])) {
    let e = y[0];
    C = o.findIndex((t) => t.route.id === e) - 1;
  }
  let w = y ? y[1].statusCode : void 0,
    T = w && w >= 400,
    E = {
      currentUrl: x,
      currentParams: a.matches[0]?.params || {},
      nextUrl: S,
      nextParams: o[0].params,
      ...s,
      actionResult: b,
      actionStatus: w,
    },
    D = o.map((i, o) => {
      let { route: s } = i,
        c = null;
      if (
        (C != null && o > C
          ? (c = !1)
          : s.lazy
          ? (c = !0)
          : s.loader == null
          ? (c = !1)
          : u
          ? (c = Ge(s, a.loaderData, a.errors))
          : Ke(a.loaderData, a.matches[o], i) && (c = !0),
        c !== null)
      )
        return ot(n, r, e, i, l, t, c);
      let f = T
          ? !1
          : d ||
            x.pathname + x.search === S.pathname + S.search ||
            x.search !== S.search ||
            qe(a.matches[o], i),
        p = { ...E, defaultShouldRevalidate: f };
      return ot(n, r, e, i, l, t, Je(i, p), p);
    }),
    O = [];
  return (
    m.forEach((e, s) => {
      if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
      let c = a.fetchers.get(s),
        m = c && c.state !== `idle` && c.data === void 0,
        y = I(g, e.path, _);
      if (!y) {
        if (v && m) return;
        O.push({
          key: s,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (h.has(s)) return;
      let b = jt(y, e.path),
        x = new AbortController(),
        S = pt(i, e.path, x.signal),
        C = null;
      if (f.has(s)) f.delete(s), (C = st(n, r, S, y, b, l, t));
      else if (m) d && (C = st(n, r, S, y, b, l, t));
      else {
        let e = { ...E, defaultShouldRevalidate: !T && d };
        Je(b, e) && (C = st(n, r, S, y, b, l, t, e));
      }
      C &&
        O.push({
          key: s,
          routeId: e.routeId,
          path: e.path,
          matches: C,
          match: b,
          request: S,
          controller: x,
        });
    }),
    { dsMatches: D, revalidatingFetchers: O }
  );
}
function Ge(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && e.id in t,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : (typeof e.loader == `function` && e.loader.hydrate === !0) || (!r && !i);
}
function Ke(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = !e.hasOwnProperty(n.route.id);
  return r || i;
}
function qe(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith(`*`) && e.params[`*`] !== t.params[`*`])
  );
}
function Je(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == `boolean`) return n;
  }
  return t.defaultShouldRevalidate;
}
function Ye(e, t, n, r, i) {
  let a;
  if (e) {
    let t = r[e];
    S(t, `No route found to patch children into: routeId = ${e}`),
      (t.children ||= []),
      (a = t.children);
  } else a = n;
  let o = ne(
    t.filter((e) => !a.some((t) => Xe(e, t))),
    i,
    [e || `_`, `patch`, String(a?.length || `0`)],
    r
  );
  a.push(...o);
}
function Xe(e, t) {
  return `id` in e && `id` in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? ((!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)) ||
      e.children.every((e, n) => t.children?.some((t) => Xe(e, t)))
    : !1;
}
var Ze = new WeakMap(),
  Qe = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
    let i = n[t.id];
    if (
      (S(i, `No route found in manifest`), !i.lazy || typeof i.lazy != `object`)
    )
      return;
    let a = i.lazy[e];
    if (!a) return;
    let o = Ze.get(i);
    o || ((o = {}), Ze.set(i, o));
    let s = o[e];
    if (s) return s;
    let c = (async () => {
      let t = N(e),
        n = i[e] !== void 0 && e !== `hasErrorBoundary`;
      if (t)
        C(
          !t,
          `Route property ` +
            e +
            ` is not a supported lazy route property. This property will be ignored.`
        ),
          (o[e] = Promise.resolve());
      else if (n)
        C(
          !1,
          `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
        );
      else {
        let t = await a();
        t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
      }
      typeof i.lazy == `object` &&
        ((i.lazy[e] = void 0),
        Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
    })();
    return (o[e] = c), c;
  },
  $e = new WeakMap();
function et(e, t, n, r, i) {
  let a = n[e.id];
  if ((S(a, `No route found in manifest`), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == `function`) {
    let t = $e.get(a);
    if (t) return { lazyRoutePromise: t, lazyHandlerPromise: t };
    let n = (async () => {
      S(typeof e.lazy == `function`, `No lazy route function found`);
      let t = await e.lazy(),
        n = {};
      for (let e in t) {
        let r = t[e];
        if (r === void 0) continue;
        let i = te(e),
          o = a[e] !== void 0 && e !== `hasErrorBoundary`;
        i
          ? C(
              !i,
              `Route property ` +
                e +
                ` is not a supported property to be returned from a lazy route function. This property will be ignored.`
            )
          : o
          ? C(
              !o,
              `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`
            )
          : (n[e] = r);
      }
      Object.assign(a, n), Object.assign(a, { ...r(a), lazy: void 0 });
    })();
    return (
      $e.set(a, n),
      n.catch(() => {}),
      { lazyRoutePromise: n, lazyHandlerPromise: n }
    );
  }
  let o = Object.keys(e.lazy),
    s = [],
    c;
  for (let a of o) {
    if (i && i.includes(a)) continue;
    let o = Qe({ key: a, route: e, manifest: n, mapRouteProperties: r });
    o && (s.push(o), a === t && (c = o));
  }
  let l = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
  return (
    l?.catch(() => {}),
    c?.catch(() => {}),
    { lazyRoutePromise: l, lazyHandlerPromise: c }
  );
}
async function tt(e) {
  let t = e.matches.filter((e) => e.shouldLoad),
    n = {};
  return (
    (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
      n[t[r].route.id] = e;
    }),
    n
  );
}
async function nt(e) {
  return e.matches.some((e) => e.route.unstable_middleware)
    ? rt(
        e,
        !1,
        () => tt(e),
        (e, t) => ({ [t]: { type: `error`, result: e } })
      )
    : tt(e);
}
async function rt(e, t, n, r) {
  let { matches: i, request: a, params: o, context: s } = e,
    c = { handlerResult: void 0 };
  try {
    let e = i.flatMap((e) =>
        e.route.unstable_middleware
          ? e.route.unstable_middleware.map((t) => [e.route.id, t])
          : []
      ),
      r = await it({ request: a, params: o, context: s }, e, t, c, n);
    return t ? r : c.handlerResult;
  } catch (e) {
    if (!c.middlewareError) throw e;
    let n = await r(c.middlewareError.error, c.middlewareError.routeId);
    return t || !c.handlerResult ? n : Object.assign(c.handlerResult, n);
  }
}
async function it(e, t, n, r, i, a = 0) {
  let { request: o } = e;
  if (o.signal.aborted)
    throw o.signal.reason
      ? o.signal.reason
      : Error(
          `Request aborted without an \`AbortSignal.reason\`: ${o.method} ${o.url}`
        );
  let s = t[a];
  if (!s) return (r.handlerResult = await i()), r.handlerResult;
  let [c, l] = s,
    u = !1,
    d,
    f = async () => {
      if (u) throw Error("You may only call `next()` once per middleware");
      u = !0;
      let o = await it(e, t, n, r, i, a + 1);
      if (n) return (d = o), d;
    };
  try {
    let t = await l(
      { request: e.request, params: e.params, context: e.context },
      f
    );
    return u ? (t === void 0 ? d : t) : f();
  } catch (e) {
    throw (
      (r.middlewareError
        ? r.middlewareError.error !== e &&
          (r.middlewareError = { routeId: c, error: e })
        : (r.middlewareError = { routeId: c, error: e }),
      e)
    );
  }
}
function at(e, t, n, r, i) {
  let a = Qe({
      key: `unstable_middleware`,
      route: r.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    o = et(r.route, Y(n.method) ? `action` : `loader`, t, e, i);
  return {
    middleware: a,
    route: o.lazyRoutePromise,
    handler: o.lazyHandlerPromise,
  };
}
function ot(e, t, n, r, i, a, o, s = null) {
  let c = !1,
    l = at(e, t, n, r, i);
  return {
    ...r,
    _lazyPromises: l,
    shouldLoad: o,
    unstable_shouldRevalidateArgs: s,
    unstable_shouldCallHandler(e) {
      return (
        (c = !0),
        s
          ? typeof e == `boolean`
            ? Je(r, { ...s, defaultShouldRevalidate: e })
            : Je(r, s)
          : o
      );
    },
    resolve(e) {
      return c ||
        o ||
        (e && n.method === `GET` && (r.route.lazy || r.route.loader))
        ? lt({
            request: n,
            match: r,
            lazyHandlerPromise: l?.handler,
            lazyRoutePromise: l?.route,
            handlerOverride: e,
            scopedContext: a,
          })
        : Promise.resolve({ type: `data`, result: void 0 });
    },
  };
}
function st(e, t, n, r, i, a, o, s = null) {
  return r.map((r) =>
    r.route.id === i.route.id
      ? ot(e, t, n, r, a, o, !0, s)
      : {
          ...r,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: s,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: at(e, t, n, r, a),
          resolve: () => Promise.resolve({ type: `data`, result: void 0 }),
        }
  );
}
async function ct(e, t, n, r, i, a) {
  n.some((e) => e._lazyPromises?.middleware) &&
    (await Promise.all(n.map((e) => e._lazyPromises?.middleware)));
  let o = { request: t, params: n[0].params, context: i, matches: n },
    s = a
      ? () => {
          throw Error(
            "You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`"
          );
        }
      : (e) => {
          let t = o;
          return rt(
            t,
            !1,
            () =>
              e({
                ...t,
                fetcherKey: r,
                unstable_runClientMiddleware: () => {
                  throw Error(
                    "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                  );
                },
              }),
            (e, t) => ({ [t]: { type: `error`, result: e } })
          );
        },
    c = await e({ ...o, fetcherKey: r, unstable_runClientMiddleware: s });
  try {
    await Promise.all(
      n.flatMap((e) => [e._lazyPromises?.handler, e._lazyPromises?.route])
    );
  } catch {}
  return c;
}
async function lt({
  request: e,
  match: t,
  lazyHandlerPromise: n,
  lazyRoutePromise: r,
  handlerOverride: i,
  scopedContext: a,
}) {
  let o,
    s,
    c = Y(e.method),
    l = c ? `action` : `loader`,
    u = (n) => {
      let r,
        o = new Promise((e, t) => (r = t));
      (s = () => r()), e.signal.addEventListener(`abort`, s);
      let c = (r) =>
          typeof n == `function`
            ? n(
                { request: e, params: t.params, context: a },
                ...(r === void 0 ? [] : [r])
              )
            : Promise.reject(
                Error(
                  `You cannot call the handler for a route which defines a boolean "${l}" [routeId: ${t.route.id}]`
                )
              ),
        u = (async () => {
          try {
            return { type: `data`, result: await (i ? i((e) => c(e)) : c()) };
          } catch (e) {
            return { type: `error`, result: e };
          }
        })();
      return Promise.race([u, o]);
    };
  try {
    let i = c ? t.route.action : t.route.loader;
    if (n || r)
      if (i) {
        let e,
          [t] = await Promise.all([
            u(i).catch((t) => {
              e = t;
            }),
            n,
            r,
          ]);
        if (e !== void 0) throw e;
        o = t;
      } else {
        await n;
        let i = c ? t.route.action : t.route.loader;
        if (i) [o] = await Promise.all([u(i), r]);
        else if (l === `action`) {
          let n = new URL(e.url),
            r = n.pathname + n.search;
          throw q(405, { method: e.method, pathname: r, routeId: t.route.id });
        } else return { type: `data`, result: void 0 };
      }
    else if (i) o = await u(i);
    else {
      let t = new URL(e.url);
      throw q(404, { pathname: t.pathname + t.search });
    }
  } catch (e) {
    return { type: `error`, result: e };
  } finally {
    s && e.signal.removeEventListener(`abort`, s);
  }
  return o;
}
async function ut(e) {
  let { result: t, type: n } = e;
  if (Ot(t)) {
    let e;
    try {
      let n = t.headers.get(`Content-Type`);
      e =
        n && /\bapplication\/json\b/.test(n)
          ? t.body == null
            ? null
            : await t.json()
          : await t.text();
    } catch (e) {
      return { type: `error`, error: e };
    }
    return n === `error`
      ? {
          type: `error`,
          error: new W(t.status, t.statusText, e),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: `data`, data: e, statusCode: t.status, headers: t.headers };
  }
  return n === `error`
    ? Dt(t)
      ? t.data instanceof Error
        ? {
            type: `error`,
            error: t.data,
            statusCode: t.init?.status,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: `error`,
            error: new W(t.init?.status || 500, void 0, t.data),
            statusCode: Oe(t) ? t.status : void 0,
            headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: `error`, error: t, statusCode: Oe(t) ? t.status : void 0 }
    : Dt(t)
    ? {
        type: `data`,
        data: t.data,
        statusCode: t.init?.status,
        headers: t.init?.headers ? new Headers(t.init.headers) : void 0,
      }
    : { type: `data`, data: t };
}
function dt(e, t, n, r, i) {
  let a = e.headers.get(`Location`);
  if (
    (S(
      a,
      `Redirects returned/thrown from loaders/actions must have a Location header`
    ),
    !Ie.test(a))
  ) {
    let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
    (a = He(new URL(t.url), o, i, a)), e.headers.set(`Location`, a);
  }
  return e;
}
function ft(e, t, n) {
  if (Ie.test(e)) {
    let r = e,
      i = r.startsWith(`//`) ? new URL(t.protocol + r) : new URL(r),
      a = V(i.pathname, n) != null;
    if (i.origin === t.origin && a) return i.pathname + i.search + i.hash;
  }
  return e;
}
function pt(e, t, n, r) {
  let i = e.createURL(Ct(t)).toString(),
    a = { signal: n };
  if (r && Y(r.formMethod)) {
    let { formMethod: e, formEncType: t } = r;
    (a.method = e.toUpperCase()),
      t === `application/json`
        ? ((a.headers = new Headers({ "Content-Type": t })),
          (a.body = JSON.stringify(r.json)))
        : t === `text/plain`
        ? (a.body = r.text)
        : t === `application/x-www-form-urlencoded` && r.formData
        ? (a.body = mt(r.formData))
        : (a.body = r.formData);
  }
  return new Request(i, a);
}
function mt(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == `string` ? r : r.name);
  return t;
}
function ht(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function gt(e, t, n, r = !1, i = !1) {
  let a = {},
    o = null,
    s,
    c = !1,
    l = {},
    u = n && J(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((n) => {
      if (!(n.route.id in t)) return;
      let d = n.route.id,
        f = t[d];
      if (
        (S(!Et(f), `Cannot handle redirect results in processLoaderData`), J(f))
      ) {
        let t = f.error;
        if ((u !== void 0 && ((t = u), (u = void 0)), (o ||= {}), i)) o[d] = t;
        else {
          let n = bt(e, d);
          o[n.route.id] ?? (o[n.route.id] = t);
        }
        r || (a[d] = ze),
          c || ((c = !0), (s = Oe(f.error) ? f.error.status : 500)),
          f.headers && (l[d] = f.headers);
      } else
        (a[d] = f.data),
          f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode),
          f.headers && (l[d] = f.headers);
    }),
    u !== void 0 && n && ((o = { [n[0]]: u }), n[2] && (a[n[2]] = void 0)),
    { loaderData: a, errors: o, statusCode: s || 200, loaderHeaders: l }
  );
}
function _t(e, t, n, r, i, a) {
  let { loaderData: o, errors: s } = gt(t, n, r);
  return (
    i
      .filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad))
      .forEach((t) => {
        let { key: n, match: r, controller: i } = t,
          o = a[n];
        if (
          (S(o, `Did not find corresponding fetcher result`),
          !(i && i.signal.aborted))
        )
          if (J(o)) {
            let t = bt(e.matches, r?.route.id);
            (s && s[t.route.id]) || (s = { ...s, [t.route.id]: o.error }),
              e.fetchers.delete(n);
          } else if (Et(o)) S(!1, `Unhandled fetcher revalidation redirect`);
          else {
            let t = Lt(o.data);
            e.fetchers.set(n, t);
          }
      }),
    { loaderData: o, errors: s }
  );
}
function vt(e, t, n, r) {
  let i = Object.entries(t)
    .filter(([, e]) => e !== ze)
    .reduce((e, [t, n]) => ((e[t] = n), e), {});
  for (let a of n) {
    let n = a.route.id;
    if (
      (!t.hasOwnProperty(n) &&
        e.hasOwnProperty(n) &&
        a.route.loader &&
        (i[n] = e[n]),
      r && r.hasOwnProperty(n))
    )
      break;
  }
  return i;
}
function yt(e) {
  return e
    ? J(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function bt(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
      .reverse()
      .find((e) => e.route.hasErrorBoundary === !0) || e[0]
  );
}
function xt(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((e) => e.index || !e.path || e.path === `/`) || {
          id: `__shim-error-route__`,
        };
  return {
    matches: [{ params: {}, pathname: ``, pathnameBase: ``, route: t }],
    route: t,
  };
}
function q(
  e,
  { pathname: t, routeId: n, method: r, type: i, message: a } = {}
) {
  let o = `Unknown Server Error`,
    s = `Unknown @remix-run/router error`;
  return (
    e === 400
      ? ((o = `Bad Request`),
        r && t && n
          ? (s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`)
          : i === `invalid-body` && (s = `Unable to encode submission body`))
      : e === 403
      ? ((o = `Forbidden`), (s = `Route "${n}" does not match URL "${t}"`))
      : e === 404
      ? ((o = `Not Found`), (s = `No route matches URL "${t}"`))
      : e === 405 &&
        ((o = `Method Not Allowed`),
        r && t && n
          ? (s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`)
          : r && (s = `Invalid request method "${r.toUpperCase()}"`)),
    new W(e || 500, o, Error(s), !0)
  );
}
function St(e) {
  let t = Object.entries(e);
  for (let e = t.length - 1; e >= 0; e--) {
    let [n, r] = t[e];
    if (Et(r)) return { key: n, result: r };
  }
}
function Ct(e) {
  return D({ ...(typeof e == `string` ? O(e) : e), hash: `` });
}
function wt(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ``
    ? t.hash !== ``
    : e.hash === t.hash || t.hash !== ``;
}
function Tt(e) {
  return Ot(e.result) && K.has(e.result.status);
}
function J(e) {
  return e.type === `error`;
}
function Et(e) {
  return (e && e.type) === `redirect`;
}
function Dt(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `type` in e &&
    `data` in e &&
    `init` in e &&
    e.type === `DataWithResponseInit`
  );
}
function Ot(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.headers == `object` &&
    e.body !== void 0
  );
}
function kt(e) {
  return je.has(e.toUpperCase());
}
function Y(e) {
  return ke.has(e.toUpperCase());
}
function At(e) {
  return new URLSearchParams(e).getAll(`index`).some((e) => e === ``);
}
function jt(e, t) {
  let n = typeof t == `string` ? O(t).search : t.search;
  if (e[e.length - 1].route.index && At(n || ``)) return e[e.length - 1];
  let r = ye(e);
  return r[r.length - 1];
}
function Mt(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: a,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Nt(e, t) {
  return t
    ? {
        state: `loading`,
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: `loading`,
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Pt(e, t) {
  return {
    state: `submitting`,
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ft(e, t) {
  return e
    ? {
        state: `loading`,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: `loading`,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function It(e, t) {
  return {
    state: `submitting`,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Lt(e) {
  return {
    state: `idle`,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Rt(e, t) {
  try {
    let n = e.sessionStorage.getItem(Re);
    if (n) {
      let e = JSON.parse(n);
      for (let [n, r] of Object.entries(e || {}))
        r && Array.isArray(r) && t.set(n, new Set(r || []));
    }
  } catch {}
}
function zt(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [e, r] of t) n[e] = [...r];
    try {
      e.sessionStorage.setItem(Re, JSON.stringify(n));
    } catch (e) {
      C(
        !1,
        `Failed to save applied view transitions in sessionStorage (${e}).`
      );
    }
  }
}
function Bt() {
  let e,
    t,
    n = new Promise((r, i) => {
      (e = async (e) => {
        r(e);
        try {
          await n;
        } catch {}
      }),
        (t = async (e) => {
          i(e);
          try {
            await n;
          } catch {}
        });
    });
  return { promise: n, resolve: e, reject: t };
}
var Vt = d.createContext(null);
Vt.displayName = `DataRouter`;
var Ht = d.createContext(null);
Ht.displayName = `DataRouterState`;
var Ut = d.createContext({ isTransitioning: !1 });
Ut.displayName = `ViewTransition`;
var Wt = d.createContext(new Map());
Wt.displayName = `Fetchers`;
var Gt = d.createContext(null);
Gt.displayName = `Await`;
var X = d.createContext(null);
X.displayName = `Navigation`;
var Kt = d.createContext(null);
Kt.displayName = `Location`;
var Z = d.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Z.displayName = `Route`;
var qt = d.createContext(null);
qt.displayName = `RouteError`;
var Jt = !0;
function Yt(e, { relative: t } = {}) {
  S(Xt(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = d.useContext(X),
    { hash: i, pathname: a, search: o } = an(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : U([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function Xt() {
  return d.useContext(Kt) != null;
}
function Q() {
  return (
    S(
      Xt(),
      `useLocation() may be used only in the context of a <Router> component.`
    ),
    d.useContext(Kt).location
  );
}
var Zt = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function Qt(e) {
  d.useContext(X).static || d.useLayoutEffect(e);
}
function $t() {
  let { isDataRoute: e } = d.useContext(Z);
  return e ? Cn() : en();
}
function en() {
  S(
    Xt(),
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let e = d.useContext(Vt),
    { basename: t, navigator: n } = d.useContext(X),
    { matches: r } = d.useContext(Z),
    { pathname: i } = Q(),
    a = JSON.stringify(be(r)),
    o = d.useRef(!1);
  return (
    Qt(() => {
      o.current = !0;
    }),
    d.useCallback(
      (r, s = {}) => {
        if ((C(o.current, Zt), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = xe(r, JSON.parse(a), i, s.relative === `path`);
        e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : U([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, a, i, e]
    )
  );
}
var tn = d.createContext(null);
function nn(e) {
  let t = d.useContext(Z).outlet;
  return t && d.createElement(tn.Provider, { value: e }, t);
}
function rn() {
  let { matches: e } = d.useContext(Z),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function an(e, { relative: t } = {}) {
  let { matches: n } = d.useContext(Z),
    { pathname: r } = Q(),
    i = JSON.stringify(be(n));
  return d.useMemo(() => xe(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function on(e, t, n, r) {
  S(
    Xt(),
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: i } = d.useContext(X),
    { matches: a } = d.useContext(Z),
    o = a[a.length - 1],
    s = o ? o.params : {},
    c = o ? o.pathname : `/`,
    l = o ? o.pathnameBase : `/`,
    u = o && o.route;
  if (Jt) {
    let e = (u && u.path) || ``;
    Tn(
      c,
      !u || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${
        e === `/` ? `*` : `${e}/*`
      }">.`
    );
  }
  let f = Q(),
    p;
  if (t) {
    let e = typeof t == `string` ? O(t) : t;
    S(
      l === `/` || e.pathname?.startsWith(l),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`
    ),
      (p = e);
  } else p = f;
  let m = p.pathname || `/`,
    h = m;
  if (l !== `/`) {
    let e = l.replace(/^\//, ``).split(`/`);
    h = `/` + m.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let g = I(e, { pathname: h });
  Jt &&
    (C(
      u || g != null,
      `No routes matched location "${p.pathname}${p.search}${p.hash}" `
    ),
    C(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let _ = dn(
    g &&
      g.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, s, e.params),
          pathname: U([
            l,
            i.encodeLocation
              ? i.encodeLocation(e.pathname).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? l
              : U([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathnameBase).pathname
                    : e.pathnameBase,
                ]),
        })
      ),
    a,
    n,
    r
  );
  return t && _
    ? d.createElement(
        Kt.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              ...p,
            },
            navigationType: `POP`,
          },
        },
        _
      )
    : _;
}
function sn() {
  let e = Sn(),
    t = Oe(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    Jt &&
      (console.error(`Error handled by React Router default ErrorBoundary:`, e),
      (o = d.createElement(
        d.Fragment,
        null,
        d.createElement(`p`, null, `💿 Hey developer 👋`),
        d.createElement(
          `p`,
          null,
          `You can provide a way better UX than this when your app throws errors by providing your own `,
          d.createElement(`code`, { style: a }, `ErrorBoundary`),
          ` or`,
          ` `,
          d.createElement(`code`, { style: a }, `errorElement`),
          ` prop on your route.`
        )
      ))),
    d.createElement(
      d.Fragment,
      null,
      d.createElement(`h2`, null, `Unexpected Application Error!`),
      d.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? d.createElement(`pre`, { style: i }, n) : null,
      o
    )
  );
}
var cn = d.createElement(sn, null),
  ln = class extends d.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        `React Router caught the following error during render`,
        e,
        t
      );
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : d.createElement(
            Z.Provider,
            { value: this.props.routeContext },
            d.createElement(qt.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          );
    }
  };
function un({ routeContext: e, match: t, children: n }) {
  let r = d.useContext(Vt);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    d.createElement(Z.Provider, { value: e }, n)
  );
}
function dn(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    a = n?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    S(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(`,`)}`
    ),
      (i = i.slice(0, Math.min(i.length, e + 1)));
  }
  let o = !1,
    s = -1;
  if (n)
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: r } = n,
          a =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!r || r[t.route.id] === void 0);
        if (t.route.lazy || a) {
          (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((e, r, c) => {
    let l,
      u = !1,
      f = null,
      p = null;
    n &&
      ((l = a && r.route.id ? a[r.route.id] : void 0),
      (f = r.route.errorElement || cn),
      o &&
        (s < 0 && c === 0
          ? (Tn(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (u = !0),
            (p = null))
          : s === c &&
            ((u = !0), (p = r.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = l
            ? f
            : u
            ? p
            : r.route.Component
            ? d.createElement(r.route.Component, null)
            : r.route.element
            ? r.route.element
            : e),
          d.createElement(un, {
            match: r,
            routeContext: { outlet: e, matches: m, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || c === 0)
      ? d.createElement(ln, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: l,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
function fn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function pn(e) {
  let t = d.useContext(Vt);
  return S(t, fn(e)), t;
}
function mn(e) {
  let t = d.useContext(Ht);
  return S(t, fn(e)), t;
}
function hn(e) {
  let t = d.useContext(Z);
  return S(t, fn(e)), t;
}
function gn(e) {
  let t = hn(e),
    n = t.matches[t.matches.length - 1];
  return (
    S(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function _n() {
  return gn(`useRouteId`);
}
function vn() {
  return mn(`useNavigation`).navigation;
}
function yn() {
  let { matches: e, loaderData: t } = mn(`useMatches`);
  return d.useMemo(() => e.map((e) => ie(e, t)), [e, t]);
}
function bn() {
  let e = mn(`useLoaderData`),
    t = gn(`useLoaderData`);
  return e.loaderData[t];
}
function xn() {
  let e = mn(`useActionData`),
    t = gn(`useLoaderData`);
  return e.actionData ? e.actionData[t] : void 0;
}
function Sn() {
  let e = d.useContext(qt),
    t = mn(`useRouteError`),
    n = gn(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function Cn() {
  let { router: e } = pn(`useNavigate`),
    t = gn(`useNavigate`),
    n = d.useRef(!1);
  return (
    Qt(() => {
      n.current = !0;
    }),
    d.useCallback(
      async (r, i = {}) => {
        C(n.current, Zt),
          n.current &&
            (typeof r == `number`
              ? e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i }));
      },
      [e, t]
    )
  );
}
var wn = {};
function Tn(e, t, n) {
  !t && !wn[e] && ((wn[e] = !0), C(!1, n));
}
var En = {};
function Dn(e, t) {
  !e && !En[t] && ((En[t] = !0), console.warn(t));
}
function On(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (Jt &&
        e.element &&
        C(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: d.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (Jt &&
        e.hydrateFallbackElement &&
        C(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: d.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (Jt &&
        e.errorElement &&
        C(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: d.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var kn = [`HydrateFallback`, `hydrateFallbackElement`],
  An = class {
    constructor() {
      (this.status = `pending`),
        (this.promise = new Promise((e, t) => {
          (this.resolve = (t) => {
            this.status === `pending` && ((this.status = `resolved`), e(t));
          }),
            (this.reject = (e) => {
              this.status === `pending` && ((this.status = `rejected`), t(e));
            });
        }));
    }
  };
function jn({ router: e, flushSync: t }) {
  let [n, r] = d.useState(e.state),
    [i, a] = d.useState(),
    [o, s] = d.useState({ isTransitioning: !1 }),
    [c, l] = d.useState(),
    [u, f] = d.useState(),
    [p, m] = d.useState(),
    h = d.useRef(new Map()),
    g = d.useCallback(
      (n, { deletedFetchers: i, flushSync: o, viewTransitionOpts: p }) => {
        n.fetchers.forEach((e, t) => {
          e.data !== void 0 && h.current.set(t, e.data);
        }),
          i.forEach((e) => h.current.delete(e)),
          Dn(
            o === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let g =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == `function`;
        if (
          (Dn(
            p == null || g,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !p || !g)
        ) {
          t && o ? t(() => r(n)) : d.startTransition(() => r(n));
          return;
        }
        if (t && o) {
          t(() => {
            u && (c && c.resolve(), u.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: p.currentLocation,
                nextLocation: p.nextLocation,
              });
          });
          let i = e.window.document.startViewTransition(() => {
            t(() => r(n));
          });
          i.finished.finally(() => {
            t(() => {
              l(void 0), f(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            t(() => f(i));
          return;
        }
        u
          ? (c && c.resolve(),
            u.skipTransition(),
            m({
              state: n,
              currentLocation: p.currentLocation,
              nextLocation: p.nextLocation,
            }))
          : (a(n),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: p.currentLocation,
              nextLocation: p.nextLocation,
            }));
      },
      [e.window, t, u, c]
    );
  d.useLayoutEffect(() => e.subscribe(g), [e, g]),
    d.useEffect(() => {
      o.isTransitioning && !o.flushSync && l(new An());
    }, [o]),
    d.useEffect(() => {
      if (c && i && e.window) {
        let t = i,
          n = c.promise,
          o = e.window.document.startViewTransition(async () => {
            d.startTransition(() => r(t)), await n;
          });
        o.finished.finally(() => {
          l(void 0), f(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          f(o);
      }
    }, [i, c, e.window]),
    d.useEffect(() => {
      c && i && n.location.key === i.location.key && c.resolve();
    }, [c, u, n.location, i]),
    d.useEffect(() => {
      !o.isTransitioning &&
        p &&
        (a(p.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: p.currentLocation,
          nextLocation: p.nextLocation,
        }),
        m(void 0));
    }, [o.isTransitioning, p]);
  let _ = d.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (t) => e.navigate(t),
        push: (t, n, r) =>
          e.navigate(t, {
            state: n,
            preventScrollReset: r?.preventScrollReset,
          }),
        replace: (t, n, r) =>
          e.navigate(t, {
            replace: !0,
            state: n,
            preventScrollReset: r?.preventScrollReset,
          }),
      }),
      [e]
    ),
    v = e.basename || `/`,
    y = d.useMemo(
      () => ({ router: e, navigator: _, static: !1, basename: v }),
      [e, _, v]
    );
  return d.createElement(
    d.Fragment,
    null,
    d.createElement(
      Vt.Provider,
      { value: y },
      d.createElement(
        Ht.Provider,
        { value: n },
        d.createElement(
          Wt.Provider,
          { value: h.current },
          d.createElement(
            Ut.Provider,
            { value: o },
            d.createElement(
              Fn,
              {
                basename: v,
                location: n.location,
                navigationType: n.historyAction,
                navigator: _,
              },
              d.createElement(Mn, {
                routes: e.routes,
                future: e.future,
                state: n,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var Mn = d.memo(Nn);
function Nn({ routes: e, future: t, state: n }) {
  return on(e, void 0, n, t);
}
function Pn(e) {
  return nn(e.context);
}
function Fn({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
}) {
  S(
    !Xt(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let o = e.replace(/^\/*/, `/`),
    s = d.useMemo(
      () => ({ basename: o, navigator: i, static: a, future: {} }),
      [o, i, a]
    );
  typeof n == `string` && (n = O(n));
  let {
      pathname: c = `/`,
      search: l = ``,
      hash: u = ``,
      state: f = null,
      key: p = `default`,
    } = n,
    m = d.useMemo(() => {
      let e = V(c, o);
      return e == null
        ? null
        : {
            location: { pathname: e, search: l, hash: u, state: f, key: p },
            navigationType: r,
          };
    }, [o, c, l, u, f, p, r]);
  return (
    C(
      m != null,
      `<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    m == null
      ? null
      : d.createElement(
          X.Provider,
          { value: s },
          d.createElement(Kt.Provider, { children: t, value: m })
        )
  );
}
d.Component;
function In(e) {
  return function () {
    let t = { params: rn(), loaderData: bn(), actionData: xn(), matches: yn() };
    return d.createElement(e, t);
  };
}
function Ln(e) {
  return function () {
    let t = { params: rn(), loaderData: bn(), actionData: xn(), error: Sn() };
    return d.createElement(e, t);
  };
}
var Rn = `get`,
  zn = `application/x-www-form-urlencoded`;
function Bn(e) {
  return e != null && typeof e.tagName == `string`;
}
function Vn(e) {
  return Bn(e) && e.tagName.toLowerCase() === `button`;
}
function Hn(e) {
  return Bn(e) && e.tagName.toLowerCase() === `form`;
}
function Un(e) {
  return Bn(e) && e.tagName.toLowerCase() === `input`;
}
function Wn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gn(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !Wn(e);
}
var Kn = null;
function qn() {
  if (Kn === null)
    try {
      new FormData(document.createElement(`form`), 0), (Kn = !1);
    } catch {
      Kn = !0;
    }
  return Kn;
}
var Jn = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Yn(e) {
  return e != null && !Jn.has(e)
    ? (C(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zn}"`
      ),
      null)
    : e;
}
function Xn(e, t) {
  let n, r, i, a, o;
  if (Hn(e)) {
    let o = e.getAttribute(`action`);
    (r = o ? V(o, t) : null),
      (n = e.getAttribute(`method`) || Rn),
      (i = Yn(e.getAttribute(`enctype`)) || zn),
      (a = new FormData(e));
  } else if (Vn(e) || (Un(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? V(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Rn),
      (i =
        Yn(e.getAttribute(`formenctype`)) ||
        Yn(o.getAttribute(`enctype`)) ||
        zn),
      (a = new FormData(o, e)),
      !qn())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        a.append(`${e}x`, `0`), a.append(`${e}y`, `0`);
      } else t && a.append(t, r);
    }
  } else if (Bn(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  else (n = Rn), (r = null), (i = zn), (o = e);
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
function $(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
async function Zn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await h(() => import(e.module), []);
    return (t[e.id] = n), n;
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qn(e, t, n) {
  return ur(
    e
      .map((e) => {
        let r = t[e.route.id],
          i = n.routes[e.route.id];
        return [
          i && i.css ? i.css.map((e) => ({ rel: `stylesheet`, href: e })) : [],
          r?.links?.() || [],
        ];
      })
      .flat(2),
    sr(e, n)
  );
}
function $n(e) {
  return e.css ? e.css.map((e) => ({ rel: `stylesheet`, href: e })) : [];
}
async function er(e) {
  if (!e.css) return;
  let t = $n(e);
  await Promise.all(t.map(nr));
}
async function tr(e, t) {
  if ((!e.css && !t.links) || !fr()) return;
  let n = [];
  if (
    (e.css && n.push(...$n(e)), t.links && n.push(...t.links()), n.length === 0)
  )
    return;
  let r = [];
  for (let e of n)
    !rr(e) &&
      e.rel === `stylesheet` &&
      r.push({ ...e, rel: `preload`, as: `style` });
  await Promise.all(r.map(nr));
}
async function nr(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let n = document.createElement(`link`);
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function rr(e) {
  return e != null && typeof e.page == `string`;
}
function ir(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === `preload` &&
      typeof e.imageSrcSet == `string` &&
      typeof e.imageSizes == `string`
    : typeof e.rel == `string` && typeof e.href == `string`;
}
async function ar(e, t, n) {
  return ur(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await Zn(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        })
      )
    )
      .flat(1)
      .filter(ir)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` }
      )
  );
}
function or(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
    ? t.filter((t, a) => {
        let c = r.routes[t.route.id];
        if (!c || !c.hasLoader) return !1;
        if (o(t, a) || s(t, a)) return !0;
        if (t.route.shouldRevalidate) {
          let r = t.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: n[0]?.params || {},
            nextUrl: new URL(e, window.origin),
            nextParams: t.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof r == `boolean`) return r;
        }
        return !0;
      })
    : [];
}
function sr(e, t, { includeHydrateFallback: n } = {}) {
  return cr(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1)
  );
}
function cr(e) {
  return [...new Set(e)];
}
function lr(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function ur(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !rr(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(lr(i));
    return n.has(a) || (n.add(a), e.push({ key: a, link: i })), e;
  }, []);
}
var dr;
function fr() {
  if (dr !== void 0) return dr;
  let e = document.createElement(`link`);
  return (dr = e.relList.supports(`preload`)), (e = null), dr;
}
function pr(e) {
  return { __html: e };
}
var mr = -1,
  hr = -2,
  gr = -3,
  _r = -4,
  vr = -5,
  yr = -6,
  br = -7,
  xr = `B`,
  Sr = `D`,
  Cr = `E`,
  wr = `M`,
  Tr = `N`,
  Er = `P`,
  Dr = `R`,
  Or = `S`,
  kr = `Y`,
  Ar = `U`,
  jr = `Z`,
  Mr = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function Nr() {
  let e = new TextDecoder(),
    t = ``;
  return new TransformStream({
    transform(n, r) {
      let i = e.decode(n, { stream: !0 }),
        a = (t + i).split(`
`);
      t = a.pop() || ``;
      for (let e of a) r.enqueue(e);
    },
    flush(e) {
      t && e.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Pr =
  typeof window < `u` ? window : typeof globalThis < `u` ? globalThis : void 0;
function Fr(e) {
  let { hydrated: t, values: n } = this;
  if (typeof e == `number`) return Ir.call(this, e);
  if (!Array.isArray(e) || !e.length) throw SyntaxError();
  let r = n.length;
  for (let t of e) n.push(t);
  return (t.length = n.length), Ir.call(this, r);
}
function Ir(e) {
  let { hydrated: t, values: n, deferred: r, plugins: i } = this,
    a,
    o = [
      [
        e,
        (e) => {
          a = e;
        },
      ],
    ],
    s = [];
  for (; o.length > 0; ) {
    let [e, a] = o.pop();
    switch (e) {
      case br:
        a(void 0);
        continue;
      case vr:
        a(null);
        continue;
      case hr:
        a(NaN);
        continue;
      case yr:
        a(1 / 0);
        continue;
      case gr:
        a(-1 / 0);
        continue;
      case _r:
        a(-0);
        continue;
    }
    if (t[e]) {
      a(t[e]);
      continue;
    }
    let c = n[e];
    if (!c || typeof c != `object`) {
      (t[e] = c), a(c);
      continue;
    }
    if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let [n, l, u] = c;
        switch (n) {
          case Sr:
            a((t[e] = new Date(l)));
            continue;
          case Ar:
            a((t[e] = new URL(l)));
            continue;
          case xr:
            a((t[e] = BigInt(l)));
            continue;
          case Dr:
            a((t[e] = new RegExp(l, u)));
            continue;
          case kr:
            a((t[e] = Symbol.for(l)));
            continue;
          case Or:
            let n = new Set();
            t[e] = n;
            for (let e = c.length - 1; e > 0; e--)
              o.push([
                c[e],
                (e) => {
                  n.add(e);
                },
              ]);
            a(n);
            continue;
          case wr:
            let d = new Map();
            t[e] = d;
            for (let e = c.length - 2; e > 0; e -= 2) {
              let t = [];
              o.push([
                c[e + 1],
                (e) => {
                  t[1] = e;
                },
              ]),
                o.push([
                  c[e],
                  (e) => {
                    t[0] = e;
                  },
                ]),
                s.push(() => {
                  d.set(t[0], t[1]);
                });
            }
            a(d);
            continue;
          case Tr:
            let f = Object.create(null);
            t[e] = f;
            for (let e of Object.keys(l).reverse()) {
              let t = [];
              o.push([
                l[e],
                (e) => {
                  t[1] = e;
                },
              ]),
                o.push([
                  Number(e.slice(1)),
                  (e) => {
                    t[0] = e;
                  },
                ]),
                s.push(() => {
                  f[t[0]] = t[1];
                });
            }
            a(f);
            continue;
          case Er:
            if (t[l]) a((t[e] = t[l]));
            else {
              let n = new Mr();
              (r[l] = n), a((t[e] = n.promise));
            }
            continue;
          case Cr:
            let [, p, m] = c,
              h = m && Pr && Pr[m] ? new Pr[m](p) : Error(p);
            (t[e] = h), a(h);
            continue;
          case jr:
            a((t[e] = t[l]));
            continue;
          default:
            if (Array.isArray(i)) {
              let n = [],
                r = c.slice(1);
              for (let e = 0; e < r.length; e++) {
                let t = r[e];
                o.push([
                  t,
                  (t) => {
                    n[e] = t;
                  },
                ]);
              }
              s.push(() => {
                for (let r of i) {
                  let i = r(c[0], ...n);
                  if (i) {
                    a((t[e] = i.value));
                    return;
                  }
                }
                throw SyntaxError();
              });
              continue;
            }
            throw SyntaxError();
        }
      } else {
        let n = [];
        t[e] = n;
        for (let e = 0; e < c.length; e++) {
          let t = c[e];
          t !== mr &&
            o.push([
              t,
              (t) => {
                n[e] = t;
              },
            ]);
        }
        a(n);
        continue;
      }
    else {
      let n = {};
      t[e] = n;
      for (let e of Object.keys(c).reverse()) {
        let t = [];
        o.push([
          c[e],
          (e) => {
            t[1] = e;
          },
        ]),
          o.push([
            Number(e.slice(1)),
            (e) => {
              t[0] = e;
            },
          ]),
          s.push(() => {
            n[t[0]] = t[1];
          });
      }
      a(n);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return a;
}
async function Lr(e, t) {
  let { plugins: n } = t ?? {},
    r = new Mr(),
    i = e.pipeThrough(Nr()).getReader(),
    a = { values: [], hydrated: [], deferred: {}, plugins: n },
    o = await Rr.call(a, i),
    s = r.promise;
  return (
    o.done
      ? r.resolve()
      : (s = zr
          .call(a, i)
          .then(r.resolve)
          .catch((e) => {
            for (let t of Object.values(a.deferred)) t.reject(e);
            r.reject(e);
          })),
    { done: s.then(() => i.closed), value: o.value }
  );
}
async function Rr(e) {
  let t = await e.read();
  if (!t.value) throw SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw SyntaxError();
  }
  return { done: t.done, value: Fr.call(this, n) };
}
async function zr(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    let n = t.value;
    switch (n[0]) {
      case Er: {
        let e = n.indexOf(`:`),
          t = Number(n.slice(1, e)),
          r = this.deferred[t];
        if (!r) throw Error(`Deferred ID ${t} not found in stream`);
        let i = n.slice(e + 1),
          a;
        try {
          a = JSON.parse(i);
        } catch {
          throw SyntaxError();
        }
        let o = Fr.call(this, a);
        r.resolve(o);
        break;
      }
      case Cr: {
        let e = n.indexOf(`:`),
          t = Number(n.slice(1, e)),
          r = this.deferred[t];
        if (!r) throw Error(`Deferred ID ${t} not found in stream`);
        let i = n.slice(e + 1),
          a;
        try {
          a = JSON.parse(i);
        } catch {
          throw SyntaxError();
        }
        let o = Fr.call(this, a);
        r.reject(o);
        break;
      }
      default:
        throw SyntaxError();
    }
    t = await e.read();
  }
}
async function Br(e) {
  let t = { signal: e.signal };
  if (e.method !== `GET`) {
    t.method = e.method;
    let n = e.headers.get(`Content-Type`);
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = { "Content-Type": n }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
      ? ((t.headers = { "Content-Type": n }), (t.body = await e.text()))
      : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
      ? (t.body = new URLSearchParams(await e.text()))
      : (t.body = await e.formData());
  }
  return t;
}
var Vr = Symbol(`SingleFetchRedirect`),
  Hr = class extends Error {},
  Ur = 202,
  Wr = new Set([100, 101, 204, 205]);
function Gr(e, t, n, r, i) {
  let a = Kr(
    e,
    (e) => {
      let r = t.routes[e.route.id];
      $(r, `Route not found in manifest`);
      let i = n[e.route.id];
      return {
        hasLoader: r.hasLoader,
        hasClientLoader: r.hasClientLoader,
        hasShouldRevalidate: !!i?.shouldRevalidate,
      };
    },
    ei,
    r,
    i
  );
  return async (e) => e.unstable_runClientMiddleware(a);
}
function Kr(e, t, n, r, i) {
  return async (a) => {
    let { request: o, matches: s, fetcherKey: c } = a,
      l = e();
    if (o.method !== `GET`) return qr(a, n, i);
    let u = s.some((e) => {
      let { hasLoader: n, hasClientLoader: r } = t(e);
      return e.unstable_shouldCallHandler() && n && !r;
    });
    return !r && !u ? Jr(a, t, n, i) : c ? Zr(a, n, i) : Yr(a, l, t, n, r, i);
  };
}
async function qr(e, t, n) {
  let r = e.matches.find((e) => e.unstable_shouldCallHandler());
  $(r, `No action match found`);
  let i,
    a = await r.resolve(
      async (a) =>
        await a(async () => {
          let { data: a, status: o } = await t(e, n, [r.route.id]);
          return (i = o), ni(a, r.route.id);
        })
    );
  return Ot(a.result) || Oe(a.result) || Dt(a.result)
    ? { [r.route.id]: a }
    : { [r.route.id]: { type: a.type, result: Ee(a.result, i) } };
}
async function Jr(e, t, n, r) {
  let i = e.matches.filter((e) => e.unstable_shouldCallHandler()),
    a = {};
  return (
    await Promise.all(
      i.map((i) =>
        i.resolve(async (o) => {
          try {
            let { hasClientLoader: s } = t(i),
              c = i.route.id,
              l = s
                ? await o(async () => {
                    let { data: t } = await n(e, r, [c]);
                    return ni(t, c);
                  })
                : await o();
            a[i.route.id] = { type: `data`, result: l };
          } catch (e) {
            a[i.route.id] = { type: `error`, result: e };
          }
        })
      )
    ),
    a
  );
}
async function Yr(e, t, n, r, i, a) {
  let o = new Set(),
    s = !1,
    c = e.matches.map(() => ri()),
    l = ri(),
    u = {},
    d = Promise.all(
      e.matches.map(async (t, i) =>
        t.resolve(async (d) => {
          c[i].resolve();
          let f = t.route.id,
            { hasLoader: p, hasClientLoader: m, hasShouldRevalidate: h } = n(t),
            g =
              !t.unstable_shouldRevalidateArgs ||
              t.unstable_shouldRevalidateArgs.actionStatus == null ||
              t.unstable_shouldRevalidateArgs.actionStatus < 400;
          if (!t.unstable_shouldCallHandler(g)) {
            s ||= t.unstable_shouldRevalidateArgs != null && p && h === !0;
            return;
          }
          if (m) {
            p && (s = !0);
            try {
              let t = await d(async () => {
                let { data: t } = await r(e, a, [f]);
                return ni(t, f);
              });
              u[f] = { type: `data`, result: t };
            } catch (e) {
              u[f] = { type: `error`, result: e };
            }
            return;
          }
          p && o.add(f);
          try {
            let e = await d(async () => ni(await l.promise, f));
            u[f] = { type: `data`, result: e };
          } catch (e) {
            u[f] = { type: `error`, result: e };
          }
        })
      )
    );
  if (
    (await Promise.all(c.map((e) => e.promise)),
    ((!t.state.initialized && t.state.navigation.state === `idle`) ||
      o.size === 0) &&
      !window.__reactRouterHdrActive)
  )
    l.resolve({ routes: {} });
  else {
    let t = i && s && o.size > 0 ? [...o.keys()] : void 0;
    try {
      let n = await r(e, a, t);
      l.resolve(n.data);
    } catch (e) {
      l.reject(e);
    }
  }
  return await d, await Xr(l.promise, e.matches, o, u), u;
}
async function Xr(e, t, n, r) {
  try {
    let i,
      a = await e;
    if (`routes` in a) {
      for (let e of t)
        if (e.route.id in a.routes) {
          let t = a.routes[e.route.id];
          if (`error` in t) {
            i = t.error;
            break;
          }
        }
    }
    i !== void 0 &&
      Array.from(n.values()).forEach((e) => {
        r[e].result instanceof Hr && (r[e].result = i);
      });
  } catch {}
}
async function Zr(e, t, n) {
  let r = e.matches.find((e) => e.unstable_shouldCallHandler());
  $(r, `No fetcher match found`);
  let i = r.route.id,
    a = await r.resolve(async (r) =>
      r(async () => {
        let { data: r } = await t(e, n, [i]);
        return ni(r, i);
      })
    );
  return { [r.route.id]: a };
}
function Qr(e) {
  let t = e.searchParams.getAll(`index`);
  e.searchParams.delete(`index`);
  let n = [];
  for (let e of t) e && n.push(e);
  for (let t of n) e.searchParams.append(`index`, t);
  return e;
}
function $r(e, t) {
  let n =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u` ? `server://singlefetch/` : window.location.origin
        )
      : e;
  return (
    n.pathname === `/`
      ? (n.pathname = `_root.data`)
      : t && V(n.pathname, t) === `/`
      ? (n.pathname = `${t.replace(/\/$/, ``)}/_root.data`)
      : (n.pathname = `${n.pathname.replace(/\/$/, ``)}.data`),
    n
  );
}
async function ei(e, t, n) {
  let { request: r } = e,
    i = $r(r.url, t);
  r.method === `GET` &&
    ((i = Qr(i)), n && i.searchParams.set(`_routes`, n.join(`,`)));
  let a = await fetch(i, await Br(r));
  if (a.status === 404 && !a.headers.has(`X-Remix-Response`))
    throw new W(404, `Not Found`, !0);
  if (a.status === 204 && a.headers.has(`X-Remix-Redirect`))
    return {
      status: Ur,
      data: {
        redirect: {
          redirect: a.headers.get(`X-Remix-Redirect`),
          status: Number(a.headers.get(`X-Remix-Status`) || `302`),
          revalidate: a.headers.get(`X-Remix-Revalidate`) === `true`,
          reload: a.headers.get(`X-Remix-Reload-Document`) === `true`,
          replace: a.headers.get(`X-Remix-Replace`) === `true`,
        },
      },
    };
  if (Wr.has(a.status)) {
    let e = {};
    return (
      n && r.method !== `GET` && (e[n[0]] = { data: void 0 }),
      { status: a.status, data: { routes: e } }
    );
  }
  $(a.body, `No response body to decode`);
  try {
    let e = await ti(a.body, window),
      t;
    if (r.method === `GET`) {
      let n = e.value;
      t = Vr in n ? { redirect: n[Vr] } : { routes: n };
    } else {
      let r = e.value,
        i = n?.[0];
      $(i, `No routeId found for single fetch call decoding`),
        (t = `redirect` in r ? { redirect: r } : { routes: { [i]: r } });
    }
    return { status: a.status, data: t };
  } catch {
    throw Error(`Unable to decode turbo-stream response`);
  }
}
function ti(e, t) {
  return Lr(e, {
    plugins: [
      (e, ...n) => {
        if (e === `SanitizedError`) {
          let [e, r, i] = n,
            a = Error;
          e && e in t && typeof t[e] == `function` && (a = t[e]);
          let o = new a(r);
          return (o.stack = i), { value: o };
        }
        if (e === `ErrorResponse`) {
          let [e, t, r] = n;
          return { value: new W(t, r, e) };
        }
        if (e === `SingleFetchRedirect`) return { value: { [Vr]: n[0] } };
        if (e === `SingleFetchClassInstance`) return { value: n[0] };
        if (e === `SingleFetchFallback`) return { value: void 0 };
      },
    ],
  });
}
function ni(e, t) {
  if (`redirect` in e) {
    let {
      redirect: t,
      revalidate: n,
      reload: r,
      replace: i,
      status: a,
    } = e.redirect;
    throw De(t, {
      status: a,
      headers: {
        ...(n ? { "X-Remix-Revalidate": `yes` } : null),
        ...(r ? { "X-Remix-Reload-Document": `yes` } : null),
        ...(i ? { "X-Remix-Replace": `yes` } : null),
      },
    });
  }
  let n = e.routes[t];
  if (n == null) throw new Hr(`No result found for routeId "${t}"`);
  if (`error` in n) throw n.error;
  if (`data` in n) return n.data;
  throw Error(`Invalid response found for routeId "${t}"`);
}
function ri() {
  let e,
    t,
    n = new Promise((r, i) => {
      (e = async (e) => {
        r(e);
        try {
          await n;
        } catch {}
      }),
        (t = async (e) => {
          i(e);
          try {
            await n;
          } catch {}
        });
    });
  return { promise: n, resolve: e, reject: t };
}
var ii = class extends d.Component {
  constructor(e) {
    super(e), (this.state = { error: e.error || null, location: e.location });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location === e.location
      ? { error: e.error || t.error, location: t.location }
      : { error: e.error || null, location: e.location };
  }
  render() {
    return this.state.error
      ? d.createElement(ai, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function ai({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = d.createElement(`script`, {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
    },
  });
  if (Oe(e))
    return d.createElement(
      oi,
      { title: `Unhandled Thrown Response!` },
      d.createElement(
        `h1`,
        { style: { fontSize: `24px` } },
        e.status,
        ` `,
        e.statusText
      ),
      Jt ? n : null
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let t =
      e == null
        ? `Unknown Error`
        : typeof e == `object` && `toString` in e
        ? e.toString()
        : JSON.stringify(e);
    r = Error(t);
  }
  return d.createElement(
    oi,
    { title: `Application Error!`, isOutsideRemixApp: t },
    d.createElement(`h1`, { style: { fontSize: `24px` } }, `Application Error`),
    d.createElement(
      `pre`,
      {
        style: {
          padding: `2rem`,
          background: `hsla(10, 50%, 50%, 0.1)`,
          color: `red`,
          overflow: `auto`,
        },
      },
      r.stack
    ),
    n
  );
}
function oi({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  let { routeModules: i } = Fi();
  return i.root?.Layout && !n
    ? r
    : d.createElement(
        `html`,
        { lang: `en` },
        d.createElement(
          `head`,
          null,
          d.createElement(`meta`, { charSet: `utf-8` }),
          d.createElement(`meta`, {
            name: `viewport`,
            content: `width=device-width,initial-scale=1,viewport-fit=cover`,
          }),
          d.createElement(`title`, null, e)
        ),
        d.createElement(
          `body`,
          null,
          d.createElement(
            `main`,
            { style: { fontFamily: `system-ui, sans-serif`, padding: `2rem` } },
            r,
            t ? d.createElement(Ki, null) : null
          )
        )
      );
}
function si() {
  return d.createElement(
    oi,
    { title: `Loading...`, renderScripts: !0 },
    Jt
      ? d.createElement(`script`, {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
          },
        })
      : null
  );
}
function ci(e) {
  let t = {};
  return (
    Object.values(e).forEach((e) => {
      if (e) {
        let n = e.parentId || ``;
        t[n] || (t[n] = []), t[n].push(e);
      }
    }),
    t
  );
}
function li(e, t, n) {
  let r = _i(t),
    i =
      t.HydrateFallback && (!n || e.id === `root`)
        ? t.HydrateFallback
        : e.id === `root`
        ? si
        : void 0,
    a = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === `root`
      ? () => d.createElement(ai, { error: Sn() })
      : void 0;
  return e.id === `root` && t.Layout
    ? {
        ...(r
          ? {
              element: d.createElement(
                t.Layout,
                null,
                d.createElement(r, null)
              ),
            }
          : { Component: r }),
        ...(a
          ? {
              errorElement: d.createElement(
                t.Layout,
                null,
                d.createElement(a, null)
              ),
            }
          : { ErrorBoundary: a }),
        ...(i
          ? {
              hydrateFallbackElement: d.createElement(
                t.Layout,
                null,
                d.createElement(i, null)
              ),
            }
          : { HydrateFallback: i }),
      }
    : { Component: r, ErrorBoundary: a, HydrateFallback: i };
}
function ui(e, t, n, r, i, a) {
  return pi(t, n, r, i, a, ``, ci(t), e);
}
function di(e, t) {
  if ((e === `loader` && !t.hasLoader) || (e === `action` && !t.hasAction)) {
    let n = `You are trying to call ${
      e === `action` ? `serverAction()` : `serverLoader()`
    } on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new W(400, `Bad Request`, Error(n), !0));
  }
}
function fi(e, t) {
  let n = e === `clientAction` ? `a` : `an`,
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new W(405, `Method Not Allowed`, Error(r), !0));
}
function pi(e, t, n, r, i, a = ``, o = ci(e), s) {
  return (o[a] || []).map((a) => {
    let c = t[a.id];
    function l(e) {
      return (
        $(
          typeof e == `function`,
          `No single fetch function available for route handler`
        ),
        e()
      );
    }
    function u(e) {
      return a.hasLoader ? l(e) : Promise.resolve(null);
    }
    function d(e) {
      if (!a.hasAction) throw fi(`action`, a.id);
      return l(e);
    }
    function f(e) {
      h(() => import(e), []);
    }
    function p(e) {
      e.clientActionModule && f(e.clientActionModule),
        e.clientLoaderModule && f(e.clientLoaderModule);
    }
    async function m(e) {
      let n = t[a.id],
        r = n ? tr(a, n) : Promise.resolve();
      try {
        return e();
      } finally {
        await r;
      }
    }
    let g = { id: a.id, index: a.index, path: a.path };
    if (c) {
      Object.assign(g, {
        ...g,
        ...li(a, c, i),
        unstable_middleware: c.unstable_clientMiddleware,
        handle: c.handle,
        shouldRevalidate: mi(g.path, c, a, r, s),
      });
      let e = n && n.loaderData && a.id in n.loaderData,
        t = e ? n?.loaderData?.[a.id] : void 0,
        o = n && n.errors && a.id in n.errors,
        l = o ? n?.errors?.[a.id] : void 0,
        f = s == null && (c.clientLoader?.hydrate === !0 || !a.hasLoader);
      (g.loader = async ({ request: n, params: r, context: i }, s) => {
        try {
          return await m(
            async () => (
              $(c, "No `routeModule` available for critical-route loader"),
              c.clientLoader
                ? c.clientLoader({
                    request: n,
                    params: r,
                    context: i,
                    async serverLoader() {
                      if ((di(`loader`, a), f)) {
                        if (e) return t;
                        if (o) throw l;
                      }
                      return u(s);
                    },
                  })
                : u(s)
            )
          );
        } finally {
          f = !1;
        }
      }),
        (g.loader.hydrate = vi(a.id, c.clientLoader, a.hasLoader, i)),
        (g.action = ({ request: e, params: t, context: n }, r) =>
          m(async () => {
            if (
              ($(c, "No `routeModule` available for critical-route action"),
              !c.clientAction)
            ) {
              if (i) throw fi(`clientAction`, a.id);
              return d(r);
            }
            return c.clientAction({
              request: e,
              params: t,
              context: n,
              async serverAction() {
                return di(`action`, a), d(r);
              },
            });
          }));
    } else {
      a.hasClientLoader || (g.loader = (e, t) => m(() => u(t))),
        a.hasClientAction ||
          (g.action = (e, t) =>
            m(() => {
              if (i) throw fi(`clientAction`, a.id);
              return d(t);
            }));
      let e;
      async function n() {
        return (
          (e ||= (async () => {
            (a.clientLoaderModule || a.clientActionModule) &&
              (await new Promise((e) => setTimeout(e, 0)));
            let e = gi(a, t);
            return p(a), await e;
          })()),
          await e
        );
      }
      g.lazy = {
        loader: a.hasClientLoader
          ? async () => {
              let { clientLoader: e } = a.clientLoaderModule
                ? await h(() => import(a.clientLoaderModule), [])
                : await n();
              return (
                $(e, "No `clientLoader` export found"),
                (t, n) =>
                  e({
                    ...t,
                    async serverLoader() {
                      return di(`loader`, a), u(n);
                    },
                  })
              );
            }
          : void 0,
        action: a.hasClientAction
          ? async () => {
              let e = a.clientActionModule
                ? h(() => import(a.clientActionModule), [])
                : n();
              p(a);
              let { clientAction: t } = await e;
              return (
                $(t, "No `clientAction` export found"),
                (e, n) =>
                  t({
                    ...e,
                    async serverAction() {
                      return di(`action`, a), d(n);
                    },
                  })
              );
            }
          : void 0,
        unstable_middleware: a.hasClientMiddleware
          ? async () => {
              let { unstable_clientMiddleware: e } = a.clientMiddlewareModule
                ? await h(() => import(a.clientMiddlewareModule), [])
                : await n();
              return $(e, "No `unstable_clientMiddleware` export found"), e;
            }
          : void 0,
        shouldRevalidate: async () => {
          let e = await n();
          return mi(g.path, e, a, r, s);
        },
        handle: async () => (await n()).handle,
        Component: async () => (await n()).Component,
        ErrorBoundary: a.hasErrorBoundary
          ? async () => (await n()).ErrorBoundary
          : void 0,
      };
    }
    let _ = pi(e, t, n, r, i, a.id, o, s);
    return _.length > 0 && (g.children = _), g;
  });
}
function mi(e, t, n, r, i) {
  if (i) return hi(n.id, t.shouldRevalidate, i);
  if (!r && n.hasLoader && !n.hasClientLoader) {
    let n = e ? he(e)[1].map((e) => e.paramName) : [],
      r = (e) => n.some((t) => e.currentParams[t] !== e.nextParams[t]);
    if (t.shouldRevalidate) {
      let e = t.shouldRevalidate;
      return (t) => e({ ...t, defaultShouldRevalidate: r(t) });
    } else return (e) => r(e);
  }
  if (r && t.shouldRevalidate) {
    let e = t.shouldRevalidate;
    return (t) => e({ ...t, defaultShouldRevalidate: !0 });
  }
  return t.shouldRevalidate;
}
function hi(e, t, n) {
  let r = !1;
  return (i) =>
    r ? (t ? t(i) : i.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function gi(e, t) {
  let n = Zn(e, t),
    r = er(e),
    i = await n;
  return (
    await Promise.all([r, tr(e, i)]),
    {
      Component: _i(i),
      ErrorBoundary: i.ErrorBoundary,
      unstable_clientMiddleware: i.unstable_clientMiddleware,
      clientAction: i.clientAction,
      clientLoader: i.clientLoader,
      handle: i.handle,
      links: i.links,
      meta: i.meta,
      shouldRevalidate: i.shouldRevalidate,
    }
  );
}
function _i(e) {
  if (
    e.default != null &&
    !(typeof e.default == `object` && Object.keys(e.default).length === 0)
  )
    return e.default;
}
function vi(e, t, n, r) {
  return (r && e !== `root`) || (t != null && (t.hydrate === !0 || n !== !0));
}
var yi = new Set(),
  bi = 1e3,
  xi = new Set(),
  Si = 7680;
function Ci(e, t) {
  return e.mode === `lazy` && t === !0;
}
function wi({ sri: e, ...t }, n) {
  let r = new Set(n.state.matches.map((e) => e.route.id)),
    i = n.state.location.pathname.split(`/`).filter(Boolean),
    a = [`/`];
  for (i.pop(); i.length > 0; ) a.push(`/${i.join(`/`)}`), i.pop();
  a.forEach((e) => {
    let t = I(n.routes, e, n.basename);
    t && t.forEach((e) => r.add(e.route.id));
  });
  let o = [...r].reduce((e, n) => Object.assign(e, { [n]: t.routes[n] }), {});
  return { ...t, routes: o, sri: e ? !0 : void 0 };
}
function Ti(e, t, n, r, i, a) {
  if (Ci(r, n))
    return async ({ path: o, patch: s, signal: c, fetcherKey: l }) => {
      xi.has(o) ||
        (await ki(
          [o],
          l ? window.location.href : o,
          e,
          t,
          n,
          i,
          a,
          r.manifestPath,
          s,
          c
        ));
    };
}
function Ei(e, t, n, r, i, a) {
  d.useEffect(() => {
    if (!Ci(i, r) || window.navigator?.connection?.saveData === !0) return;
    function o(e) {
      let t =
        e.tagName === `FORM`
          ? e.getAttribute(`action`)
          : e.getAttribute(`href`);
      if (!t) return;
      let n =
        e.tagName === `A`
          ? e.pathname
          : new URL(t, window.location.origin).pathname;
      xi.has(n) || yi.add(n);
    }
    async function s() {
      document
        .querySelectorAll(`a[data-discover], form[data-discover]`)
        .forEach(o);
      let s = Array.from(yi.keys()).filter((e) =>
        xi.has(e) ? (yi.delete(e), !1) : !0
      );
      if (s.length !== 0)
        try {
          await ki(
            s,
            null,
            t,
            n,
            r,
            a,
            e.basename,
            i.manifestPath,
            e.patchRoutes
          );
        } catch (e) {
          console.error(`Failed to fetch manifest patches`, e);
        }
    }
    let c = ji(s, 100);
    s();
    let l = new MutationObserver(() => c());
    return (
      l.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [`data-discover`, `href`, `action`],
      }),
      () => l.disconnect()
    );
  }, [r, a, t, n, e, i]);
}
function Di(e, t) {
  let n = e || `/__manifest`;
  return t == null ? n : `${t}${n}`.replace(/\/+/g, `/`);
}
var Oi = `react-router-manifest-version`;
async function ki(e, t, n, r, i, a, o, s, c, l) {
  let u = new URL(Di(s, o), window.location.origin);
  if (
    (e.sort().forEach((e) => u.searchParams.append(`p`, e)),
    u.searchParams.set(`version`, n.version),
    u.toString().length > Si)
  ) {
    yi.clear();
    return;
  }
  let d;
  try {
    let e = await fetch(u, { signal: l });
    if (!e.ok) throw Error(`${e.status} ${e.statusText}`);
    if (e.status === 204 && e.headers.has(`X-Remix-Reload-Document`)) {
      if (!t) {
        console.warn(
          `Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.`
        );
        return;
      }
      if (sessionStorage.getItem(Oi) === n.version) {
        console.error(
          `Unable to discover routes due to manifest version mismatch.`
        );
        return;
      }
      sessionStorage.setItem(Oi, n.version),
        (window.location.href = t),
        console.warn(`Detected manifest version mismatch, reloading...`),
        await new Promise(() => {});
    } else if (e.status >= 400) throw Error(await e.text());
    sessionStorage.removeItem(Oi), (d = await e.json());
  } catch (e) {
    if (l?.aborted) return;
    throw e;
  }
  let f = new Set(Object.keys(n.routes)),
    p = Object.values(d).reduce(
      (e, t) => (t && !f.has(t.id) && (e[t.id] = t), e),
      {}
    );
  Object.assign(n.routes, p), e.forEach((e) => Ai(e, xi));
  let m = new Set();
  Object.values(p).forEach((e) => {
    e && (!e.parentId || !p[e.parentId]) && m.add(e.parentId);
  }),
    m.forEach((e) => c(e || null, pi(p, r, null, i, a, e)));
}
function Ai(e, t) {
  if (t.size >= bi) {
    let e = t.values().next().value;
    t.delete(e);
  }
  t.add(e);
}
function ji(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
function Mi() {
  let e = d.useContext(Vt);
  return (
    $(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`
    ),
    e
  );
}
function Ni() {
  let e = d.useContext(Ht);
  return (
    $(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`
    ),
    e
  );
}
var Pi = d.createContext(void 0);
Pi.displayName = `FrameworkContext`;
function Fi() {
  let e = d.useContext(Pi);
  return (
    $(e, `You must render this element inside a <HydratedRouter> element`), e
  );
}
function Ii(e, t) {
  let n = d.useContext(Pi),
    [r, i] = d.useState(!1),
    [a, o] = d.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: f,
    } = t,
    p = d.useRef(null);
  d.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 }
      );
      return (
        p.current && e.observe(p.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    d.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]);
  let m = () => {
      i(!0);
    },
    h = () => {
      i(!1), o(!1);
    };
  return n
    ? e === `intent`
      ? [
          a,
          p,
          {
            onFocus: Li(s, m),
            onBlur: Li(c, h),
            onMouseEnter: Li(l, m),
            onMouseLeave: Li(u, h),
            onTouchStart: Li(f, m),
          },
        ]
      : [a, p, {}]
    : [!1, p, {}];
}
function Li(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Ri(e, t, n) {
  if (n && !Gi) return [e[0]];
  if (t) {
    let n = e.findIndex((e) => t[e.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
function zi() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Fi(),
    { errors: i, matches: a } = Ni(),
    o = Ri(a, i, e),
    s = d.useMemo(() => Qn(o, n, t), [o, n, t]);
  return d.createElement(
    d.Fragment,
    null,
    typeof r == `string`
      ? d.createElement(`style`, { dangerouslySetInnerHTML: { __html: r } })
      : null,
    typeof r == `object`
      ? d.createElement(`link`, { rel: `stylesheet`, href: r.href })
      : null,
    s.map(({ key: e, link: t }) =>
      rr(t)
        ? d.createElement(Bi, { key: e, ...t })
        : d.createElement(`link`, { key: e, ...t })
    )
  );
}
function Bi({ page: e, ...t }) {
  let { router: n } = Mi(),
    r = d.useMemo(() => I(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? d.createElement(Hi, { page: e, matches: r, ...t }) : null;
}
function Vi(e) {
  let { manifest: t, routeModules: n } = Fi(),
    [r, i] = d.useState([]);
  return (
    d.useEffect(() => {
      let r = !1;
      return (
        ar(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Hi({ page: e, matches: t, ...n }) {
  let r = Q(),
    { manifest: i, routeModules: a } = Fi(),
    { basename: o } = Mi(),
    { loaderData: s, matches: c } = Ni(),
    l = d.useMemo(() => or(e, t, c, i, r, `data`), [e, t, c, i, r]),
    u = d.useMemo(() => or(e, t, c, i, r, `assets`), [e, t, c, i, r]),
    f = d.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        c = !1;
      if (
        (t.forEach((e) => {
          let t = i.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!l.some((t) => t.route.id === e.route.id) &&
              e.route.id in s &&
              a[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (c = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let u = $r(e, o);
      return (
        c &&
          n.size > 0 &&
          u.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`)
          ),
        [u.pathname + u.search]
      );
    }, [o, s, r, i, l, t, e, a]),
    p = d.useMemo(() => sr(u, i), [u, i]),
    m = Vi(u);
  return d.createElement(
    d.Fragment,
    null,
    f.map((e) =>
      d.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      })
    ),
    p.map((e) =>
      d.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n })
    ),
    m.map(({ key: e, link: t }) => d.createElement(`link`, { key: e, ...t }))
  );
}
function Ui() {
  let { isSpaMode: e, routeModules: t } = Fi(),
    { errors: n, matches: r, loaderData: i } = Ni(),
    a = Q(),
    o = Ri(r, n, e),
    s = null;
  n && (s = n[o[o.length - 1].route.id]);
  let c = [],
    l = null,
    u = [];
  for (let e = 0; e < o.length; e++) {
    let n = o[e],
      r = n.route.id,
      d = i[r],
      f = n.params,
      p = t[r],
      m = [],
      h = {
        id: r,
        data: d,
        meta: [],
        params: n.params,
        pathname: n.pathname,
        handle: n.route.handle,
        error: s,
      };
    if (
      ((u[e] = h),
      p?.meta
        ? (m =
            typeof p.meta == `function`
              ? p.meta({
                  data: d,
                  params: f,
                  location: a,
                  matches: u,
                  error: s,
                })
              : Array.isArray(p.meta)
              ? [...p.meta]
              : p.meta)
        : l && (m = [...l]),
      (m ||= []),
      !Array.isArray(m))
    )
      throw Error(
        `The route at ` +
          n.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    (h.meta = m), (u[e] = h), (c = [...m]), (l = c);
  }
  return d.createElement(
    d.Fragment,
    null,
    c.flat().map((e) => {
      if (!e) return null;
      if (`tagName` in e) {
        let { tagName: t, ...n } = e;
        if (!Wi(t))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${t}. Expected either 'link' or 'meta'`
            ),
            null
          );
        let r = t;
        return d.createElement(r, { key: JSON.stringify(n), ...n });
      }
      if (`title` in e)
        return d.createElement(`title`, { key: `title` }, String(e.title));
      if (
        (`charset` in e && ((e.charSet ??= e.charset), delete e.charset),
        `charSet` in e && e.charSet != null)
      )
        return typeof e.charSet == `string`
          ? d.createElement(`meta`, { key: `charSet`, charSet: e.charSet })
          : null;
      if (`script:ld+json` in e)
        try {
          let t = JSON.stringify(e[`script:ld+json`]);
          return d.createElement(`script`, {
            key: `script:ld+json:${t}`,
            type: `application/ld+json`,
            dangerouslySetInnerHTML: { __html: t },
          });
        } catch {
          return null;
        }
      return d.createElement(`meta`, { key: JSON.stringify(e), ...e });
    })
  );
}
function Wi(e) {
  return typeof e == `string` && /^(meta|link)$/.test(e);
}
var Gi = !1;
function Ki(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      isSpaMode: r,
      renderMeta: i,
      routeDiscovery: a,
      ssr: o,
    } = Fi(),
    { router: s, static: c, staticContext: l } = Mi(),
    { matches: u } = Ni(),
    f = Ci(a, o);
  i && (i.didRenderScripts = !0);
  let p = Ri(u, null, r);
  d.useEffect(() => {
    Gi = !0;
  }, []);
  let m = d.useMemo(() => {
      let r = l
          ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : ` `,
        i = c
          ? `${
              t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ``
            }${f ? `` : `import ${JSON.stringify(t.url)}`};
${p.map((e, n) => {
  let r = `route${n}`,
    i = t.routes[e.route.id];
  $(i, `Route ${e.route.id} not found in manifest`);
  let {
      clientActionModule: a,
      clientLoaderModule: o,
      clientMiddlewareModule: s,
      hydrateFallbackModule: c,
      module: l,
    } = i,
    u = [
      ...(a ? [{ module: a, varName: `${r}_clientAction` }] : []),
      ...(o ? [{ module: o, varName: `${r}_clientLoader` }] : []),
      ...(s ? [{ module: s, varName: `${r}_clientMiddleware` }] : []),
      ...(c ? [{ module: c, varName: `${r}_HydrateFallback` }] : []),
      { module: l, varName: `${r}_main` },
    ];
  return u.length === 1
    ? `import * as ${r} from ${JSON.stringify(l)};`
    : [
        u.map((e) => `import * as ${e.varName} from "${e.module}";`).join(`
`),
        `const ${r} = {${u.map((e) => `...${e.varName}`).join(`,`)}};`,
      ].join(`
`);
}).join(`
`)}
  ${
    f
      ? `window.__reactRouterManifest = ${JSON.stringify(wi(t, s), null, 2)};`
      : ``
  }
  window.__reactRouterRouteModules = {${p
    .map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`)
    .join(`,`)}};

import(${JSON.stringify(t.entry.module)});`
          : ` `;
      return d.createElement(
        d.Fragment,
        null,
        d.createElement(`script`, {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: pr(r),
          type: void 0,
        }),
        d.createElement(`script`, {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: pr(i),
          type: `module`,
          async: !0,
        })
      );
    }, []),
    h = Gi
      ? []
      : qi(t.entry.imports.concat(sr(p, t, { includeHydrateFallback: !0 }))),
    g = typeof t.sri == `object` ? t.sri : {};
  return Gi
    ? null
    : d.createElement(
        d.Fragment,
        null,
        typeof t.sri == `object`
          ? d.createElement(`script`, {
              "rr-importmap": ``,
              type: `importmap`,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: {
                __html: JSON.stringify({ integrity: g }),
              },
            })
          : null,
        f
          ? null
          : d.createElement(`link`, {
              rel: `modulepreload`,
              href: t.url,
              crossOrigin: e.crossOrigin,
              integrity: g[t.url],
              suppressHydrationWarning: !0,
            }),
        d.createElement(`link`, {
          rel: `modulepreload`,
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
          integrity: g[t.entry.module],
          suppressHydrationWarning: !0,
        }),
        h.map((t) =>
          d.createElement(`link`, {
            key: t,
            rel: `modulepreload`,
            href: t,
            crossOrigin: e.crossOrigin,
            integrity: g[t],
            suppressHydrationWarning: !0,
          })
        ),
        m
      );
}
function qi(e) {
  return [...new Set(e)];
}
function Ji(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
var Yi =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Yi && (window.__reactRouterVersion = `7.6.3`);
} catch {}
function Xi({ basename: e, children: t, history: n }) {
  let [r, i] = d.useState({ action: n.action, location: n.location }),
    a = d.useCallback(
      (e) => {
        d.startTransition(() => i(e));
      },
      [i]
    );
  return (
    d.useLayoutEffect(() => n.listen(a), [n, a]),
    d.createElement(Fn, {
      basename: e,
      children: t,
      location: r.location,
      navigationType: r.action,
      navigator: n,
    })
  );
}
Xi.displayName = `unstable_HistoryRouter`;
var Zi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qi = d.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      state: o,
      target: s,
      to: c,
      preventScrollReset: l,
      viewTransition: u,
      ...f
    },
    p
  ) {
    let { basename: m } = d.useContext(X),
      h = typeof c == `string` && Zi.test(c),
      g,
      _ = !1;
    if (typeof c == `string` && h && ((g = c), Yi))
      try {
        let e = new URL(window.location.href),
          t = c.startsWith(`//`) ? new URL(e.protocol + c) : new URL(c),
          n = V(t.pathname, m);
        t.origin === e.origin && n != null
          ? (c = n + t.search + t.hash)
          : (_ = !0);
      } catch {
        C(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let v = Yt(c, { relative: r }),
      [y, b, x] = Ii(n, f),
      S = aa(c, {
        replace: a,
        state: o,
        target: s,
        preventScrollReset: l,
        relative: r,
        viewTransition: u,
      });
    function w(t) {
      e && e(t), t.defaultPrevented || S(t);
    }
    let T = d.createElement(`a`, {
      ...f,
      ...x,
      href: g || v,
      onClick: _ || i ? e : w,
      ref: Ji(p, b),
      target: s,
      "data-discover": !h && t === `render` ? `true` : void 0,
    });
    return y && !h
      ? d.createElement(d.Fragment, null, T, d.createElement(Bi, { page: v }))
      : T;
  });
Qi.displayName = `Link`;
var $i = d.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l
) {
  let u = an(a, { relative: c.relative }),
    f = Q(),
    p = d.useContext(Ht),
    { navigator: m, basename: h } = d.useContext(X),
    g = p != null && ha(u) && o === !0,
    _ = m.encodeLocation ? m.encodeLocation(u).pathname : u.pathname,
    v = f.pathname,
    y =
      p && p.navigation && p.navigation.location
        ? p.navigation.location.pathname
        : null;
  t ||
    ((v = v.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (_ = _.toLowerCase())),
    y && h && (y = V(y, h) || y);
  let b = _ !== `/` && _.endsWith(`/`) ? _.length - 1 : _.length,
    x = v === _ || (!r && v.startsWith(_) && v.charAt(b) === `/`),
    S =
      y != null &&
      (y === _ || (!r && y.startsWith(_) && y.charAt(_.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: g },
    w = x ? e : void 0,
    T;
  T =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          g ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let E = typeof i == `function` ? i(C) : i;
  return d.createElement(
    Qi,
    {
      ...c,
      "aria-current": w,
      className: T,
      ref: l,
      style: E,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s
  );
});
$i.displayName = `NavLink`;
var ea = d.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Rn,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: f,
      ...p
    },
    m
  ) => {
    let h = ca(),
      g = la(s, { relative: l }),
      _ = o.toLowerCase() === `get` ? `get` : `post`,
      v = typeof s == `string` && Zi.test(s);
    return d.createElement(`form`, {
      ref: m,
      method: _,
      action: g,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o;
            h(r || e.currentTarget, {
              fetcherKey: t,
              method: s,
              navigate: n,
              replace: i,
              state: a,
              relative: l,
              preventScrollReset: u,
              viewTransition: f,
            });
          },
      ...p,
      "data-discover": !v && e === `render` ? `true` : void 0,
    });
  }
);
ea.displayName = `Form`;
function ta({ getKey: e, storageKey: t, ...n }) {
  let r = d.useContext(Pi),
    { basename: i } = d.useContext(X),
    a = Q(),
    o = yn();
  pa({ getKey: e, storageKey: t });
  let s = d.useMemo(() => {
    if (!r || !e) return null;
    let t = fa(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      console.error(t), sessionStorage.removeItem(e);
    }
  }).toString();
  return d.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${JSON.stringify(t || ua)}, ${JSON.stringify(s)})`,
    },
  });
}
ta.displayName = `ScrollRestoration`;
function na(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ra(e) {
  let t = d.useContext(Vt);
  return S(t, na(e)), t;
}
function ia(e) {
  let t = d.useContext(Ht);
  return S(t, na(e)), t;
}
function aa(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: a,
    viewTransition: o,
  } = {}
) {
  let s = $t(),
    c = Q(),
    l = an(e, { relative: a });
  return d.useCallback(
    (u) => {
      if (Gn(u, t)) {
        u.preventDefault();
        let t = n === void 0 ? D(c) === D(l) : n;
        s(e, {
          replace: t,
          state: r,
          preventScrollReset: i,
          relative: a,
          viewTransition: o,
        });
      }
    },
    [c, s, l, n, r, t, e, i, a, o]
  );
}
var oa = 0,
  sa = () => `__${String(++oa)}__`;
function ca() {
  let { router: e } = ra(`useSubmit`),
    { basename: t } = d.useContext(X),
    n = _n();
  return d.useCallback(
    async (r, i = {}) => {
      let { action: a, method: o, encType: s, formData: c, body: l } = Xn(r, t);
      if (i.navigate === !1) {
        let t = i.fetcherKey || sa();
        await e.fetch(t, n, i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: l,
          formMethod: i.method || o,
          formEncType: i.encType || s,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || a, {
          preventScrollReset: i.preventScrollReset,
          formData: c,
          body: l,
          formMethod: i.method || o,
          formEncType: i.encType || s,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n]
  );
}
function la(e, { relative: t } = {}) {
  let { basename: n } = d.useContext(X),
    r = d.useContext(Z);
  S(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...an(e || `.`, { relative: t }) },
    o = Q();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : U([n, a.pathname])),
    D(a)
  );
}
var ua = `react-router-scroll-positions`,
  da = {};
function fa(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: V(e.pathname, n) || e.pathname },
        t
      )),
    (i ??= e.key),
    i
  );
}
function pa({ getKey: e, storageKey: t } = {}) {
  let { router: n } = ra(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      ia(`useScrollRestoration`),
    { basename: a } = d.useContext(X),
    o = Q(),
    s = yn(),
    c = vn();
  d.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    []
  ),
    ma(
      d.useCallback(() => {
        if (c.state === `idle`) {
          let t = fa(o, s, a, e);
          da[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || ua, JSON.stringify(da));
        } catch (e) {
          C(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t])
    ),
    typeof document < `u` &&
      (d.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || ua);
          e && (da = JSON.parse(e));
        } catch {}
      }, [t]),
      d.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          da,
          () => window.scrollY,
          e ? (t, n) => fa(t, n, a, e) : void 0
        );
        return () => t && t();
      }, [n, a, e]),
      d.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          if (o.hash) {
            let e = document.getElementById(
              decodeURIComponent(o.hash.slice(1))
            );
            if (e) {
              e.scrollIntoView();
              return;
            }
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i]));
}
function ma(e, t) {
  let { capture: n } = t || {};
  d.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function ha(e, t = {}) {
  let n = d.useContext(Ut);
  S(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = ra(`useViewTransitionState`),
    i = an(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let a = V(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = V(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return B(i.pathname, o) != null || B(i.pathname, a) != null;
}
[...Wr];
function ga(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [e, r] of t)
    if (r && r.__type === `RouteErrorResponse`)
      n[e] = new W(r.status, r.statusText, r.data, r.internal === !0);
    else if (r && r.__type === `Error`) {
      if (r.__subType) {
        let t = window[r.__subType];
        if (typeof t == `function`)
          try {
            let i = new t(r.message);
            (i.stack = r.stack), (n[e] = i);
          } catch {}
      }
      if (n[e] == null) {
        let t = Error(r.message);
        (t.stack = r.stack), (n[e] = t);
      }
    } else n[e] = r;
  return n;
}
function _a(e, t, n, r, i, a) {
  let o = { ...e, loaderData: { ...e.loaderData } },
    s = I(t, r, i);
  if (s)
    for (let e of s) {
      let t = e.route.id,
        r = n(t);
      vi(t, r.clientLoader, r.hasLoader, a) &&
      (r.hasHydrateFallback || !r.hasLoader)
        ? delete o.loaderData[t]
        : r.hasLoader || (o.loaderData[t] = null);
    }
  return o;
}
var va = o((e) => {
    var t = Symbol.for(`react.transitional.element`);
    function n(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    (e.jsx = n), (e.jsxs = n);
  }),
  ya = o((e, t) => {
    t.exports = va();
  });
export {
  Ei as C,
  u as D,
  Ln as E,
  o as O,
  On as S,
  In as T,
  Ti as _,
  Pn as a,
  S as b,
  Ki as c,
  pi as d,
  ui as f,
  _a as g,
  ga as h,
  Ui as i,
  c as k,
  ta as l,
  ti as m,
  Pi as n,
  ii as o,
  Be as p,
  zi as r,
  jn as s,
  ya as t,
  x as u,
  Gr as v,
  Sn as w,
  Oe as x,
  kn as y,
};
