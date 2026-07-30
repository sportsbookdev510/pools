import { D as e, k as t, t as n } from "./jsx-runtime-B-u1Y99Z.js";
var r = t(e()),
  i = [
    `text-body-1`,
    `text-body-2`,
    `text-body-3`,
    `text-body-4`,
    `text-heading-1`,
    `text-heading-2`,
    `text-heading-3`,
    `text-subheading-1`,
    `text-subheading-2`,
    `text-button-1`,
    `text-button-2`,
    `text-button-3`,
    `text-button-4`,
  ];
function a(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = a(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function o() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = a(e)) && (r && (r += ` `), (r += t));
  return r;
}
var s = `-`,
  c = (e) => {
    let t = d(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        let n = e.split(s);
        return n[0] === `` && n.length !== 1 && n.shift(), l(n, t) || ee(e);
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        return t && r[e] ? [...i, ...r[e]] : i;
      },
    };
  },
  l = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let n = e[0],
      r = t.nextPart.get(n),
      i = r ? l(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    let a = e.join(s);
    return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
  },
  u = /^\[(.+)\]$/,
  ee = (e) => {
    if (u.test(e)) {
      let t = u.exec(e)[1],
        n = t?.substring(0, t.indexOf(`:`));
      if (n) return `arbitrary..` + n;
    }
  },
  d = (e) => {
    let { theme: t, classGroups: n } = e,
      r = { nextPart: new Map(), validators: [] };
    for (let e in n) f(n[e], r, e, t);
    return r;
  },
  f = (e, t, n, r) => {
    e.forEach((e) => {
      if (typeof e == `string`) {
        let r = e === `` ? t : p(t, e);
        r.classGroupId = n;
        return;
      }
      if (typeof e == `function`) {
        if (m(e)) {
          f(e(r), t, n, r);
          return;
        }
        t.validators.push({ validator: e, classGroupId: n });
        return;
      }
      Object.entries(e).forEach(([e, i]) => {
        f(i, p(t, e), n, r);
      });
    });
  },
  p = (e, t) => {
    let n = e;
    return (
      t.split(s).forEach((e) => {
        n.nextPart.has(e) ||
          n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(e));
      }),
      n
    );
  },
  m = (e) => e.isThemeGetter,
  h = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map(),
      i = (i, a) => {
        n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map()));
      };
    return {
      get(e) {
        let t = n.get(e);
        if (t !== void 0) return t;
        if ((t = r.get(e)) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        n.has(e) ? n.set(e, t) : i(e, t);
      },
    };
  },
  g = `!`,
  _ = `:`,
  v = 1,
  y = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a;
        for (let o = 0; o < e.length; o++) {
          let s = e[o];
          if (n === 0 && r === 0) {
            if (s === _) {
              t.push(e.slice(i, o)), (i = o + v);
              continue;
            }
            if (s === `/`) {
              a = o;
              continue;
            }
          }
          s === `[`
            ? n++
            : s === `]`
            ? n--
            : s === `(`
            ? r++
            : s === `)` && r--;
        }
        let o = t.length === 0 ? e : e.substring(i),
          s = b(o);
        return {
          modifiers: t,
          hasImportantModifier: s !== o,
          baseClassName: s,
          maybePostfixModifierPosition: a && a > i ? a - i : void 0,
        };
      };
    if (t) {
      let e = t + _,
        n = r;
      r = (t) =>
        t.startsWith(e)
          ? n(t.substring(e.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: t,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  b = (e) =>
    e.endsWith(g)
      ? e.substring(0, e.length - 1)
      : e.startsWith(g)
      ? e.substring(1)
      : e,
  x = (e) => {
    let t = Object.fromEntries(e.orderSensitiveModifiers.map((e) => [e, !0]));
    return (e) => {
      if (e.length <= 1) return e;
      let n = [],
        r = [];
      return (
        e.forEach((e) => {
          e[0] === `[` || t[e] ? (n.push(...r.sort(), e), (r = [])) : r.push(e);
        }),
        n.push(...r.sort()),
        n
      );
    };
  },
  S = (e) => ({
    cache: h(e.cacheSize),
    parseClassName: y(e),
    sortModifiers: x(e),
    ...c(e),
  }),
  C = /\s+/,
  w = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
      } = t,
      o = [],
      s = e.trim().split(C),
      c = ``;
    for (let e = s.length - 1; e >= 0; --e) {
      let t = s[e],
        {
          isExternal: l,
          modifiers: u,
          hasImportantModifier: ee,
          baseClassName: d,
          maybePostfixModifierPosition: f,
        } = n(t);
      if (l) {
        c = t + (c.length > 0 ? ` ` + c : c);
        continue;
      }
      let p = !!f,
        m = r(p ? d.substring(0, f) : d);
      if (!m) {
        if (!p) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        if (((m = r(d)), !m)) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        p = !1;
      }
      let h = a(u).join(`:`),
        _ = ee ? h + g : h,
        v = _ + m;
      if (o.includes(v)) continue;
      o.push(v);
      let y = i(m, p);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        o.push(_ + t);
      }
      c = t + (c.length > 0 ? ` ` + c : c);
    }
    return c;
  };
function te() {
  let e = 0,
    t,
    n,
    r = ``;
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ne(t)) && (r && (r += ` `), (r += n));
  return r;
}
var ne = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ne(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
function T(e, ...t) {
  let n,
    r,
    i,
    a = o;
  function o(o) {
    return (
      (n = S(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    );
  }
  function s(e) {
    let t = r(e);
    if (t) return t;
    let a = w(e, n);
    return i(e, a), a;
  }
  return function () {
    return a(te.apply(null, arguments));
  };
}
var E = (e) => {
    let t = (t) => t[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  D = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  O = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  k = /^\d+\/\d+$/,
  A = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  j =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  M = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  re = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ie =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  N = (e) => k.test(e),
  P = (e) => !!e && !Number.isNaN(Number(e)),
  F = (e) => !!e && Number.isInteger(Number(e)),
  ae = (e) => e.endsWith(`%`) && P(e.slice(0, -1)),
  I = (e) => A.test(e),
  oe = () => !0,
  se = (e) => j.test(e) && !M.test(e),
  L = () => !1,
  R = (e) => re.test(e),
  z = (e) => ie.test(e),
  ce = (e) => !B(e) && !H(e),
  le = (e) => G(e, Y, L),
  B = (e) => D.test(e),
  V = (e) => G(e, X, se),
  ue = (e) => G(e, Z, P),
  de = (e) => G(e, q, L),
  fe = (e) => G(e, J, z),
  pe = (e) => G(e, ve, R),
  H = (e) => O.test(e),
  U = (e) => K(e, X),
  me = (e) => K(e, Q),
  he = (e) => K(e, q),
  ge = (e) => K(e, Y),
  _e = (e) => K(e, J),
  W = (e) => K(e, ve, !0),
  G = (e, t, n) => {
    let r = D.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  K = (e, t, n = !1) => {
    let r = O.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  q = (e) => e === `position` || e === `percentage`,
  J = (e) => e === `image` || e === `url`,
  Y = (e) => e === `length` || e === `size` || e === `bg-size`,
  X = (e) => e === `length`,
  Z = (e) => e === `number`,
  Q = (e) => e === `family-name`,
  ve = (e) => e === `shadow`,
  ye = () => {
    let e = E(`color`),
      t = E(`font`),
      n = E(`text`),
      r = E(`font-weight`),
      i = E(`tracking`),
      a = E(`leading`),
      o = E(`breakpoint`),
      s = E(`container`),
      c = E(`spacing`),
      l = E(`radius`),
      u = E(`shadow`),
      ee = E(`inset-shadow`),
      d = E(`text-shadow`),
      f = E(`drop-shadow`),
      p = E(`blur`),
      m = E(`perspective`),
      h = E(`aspect`),
      g = E(`ease`),
      _ = E(`animate`),
      v = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      y = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      b = () => [...y(), H, B],
      x = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      S = () => [`auto`, `contain`, `none`],
      C = () => [H, B, c],
      w = () => [N, `full`, `auto`, ...C()],
      te = () => [F, `none`, `subgrid`, H, B],
      ne = () => [`auto`, { span: [`full`, F, H, B] }, F, H, B],
      T = () => [F, `auto`, H, B],
      D = () => [`auto`, `min`, `max`, `fr`, H, B],
      O = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      k = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      A = () => [`auto`, ...C()],
      j = () => [
        N,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      M = () => [e, H, B],
      re = () => [...y(), he, de, { position: [H, B] }],
      ie = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      se = () => [`auto`, `cover`, `contain`, ge, le, { size: [H, B] }],
      L = () => [ae, U, V],
      R = () => [``, `none`, `full`, l, H, B],
      z = () => [``, P, U, V],
      G = () => [`solid`, `dashed`, `dotted`, `double`],
      K = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      q = () => [P, ae, he, de],
      J = () => [``, `none`, p, H, B],
      Y = () => [`none`, P, H, B],
      X = () => [`none`, P, H, B],
      Z = () => [P, H, B],
      Q = () => [N, `full`, ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [I],
        breakpoint: [I],
        color: [oe],
        container: [I],
        "drop-shadow": [I],
        ease: [`in`, `out`, `in-out`],
        font: [ce],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [I],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [I],
        shadow: [I],
        spacing: [`px`, P],
        text: [I],
        "text-shadow": [I],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, N, B, H, h] }],
        container: [`container`],
        columns: [{ columns: [P, B, H, s] }],
        "break-after": [{ "break-after": v() }],
        "break-before": [{ "break-before": v() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: b() }],
        overflow: [{ overflow: x() }],
        "overflow-x": [{ "overflow-x": x() }],
        "overflow-y": [{ "overflow-y": x() }],
        overscroll: [{ overscroll: S() }],
        "overscroll-x": [{ "overscroll-x": S() }],
        "overscroll-y": [{ "overscroll-y": S() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: w() }],
        "inset-x": [{ "inset-x": w() }],
        "inset-y": [{ "inset-y": w() }],
        start: [{ start: w() }],
        end: [{ end: w() }],
        top: [{ top: w() }],
        right: [{ right: w() }],
        bottom: [{ bottom: w() }],
        left: [{ left: w() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [F, `auto`, H, B] }],
        basis: [{ basis: [N, `full`, `auto`, s, ...C()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [P, N, `auto`, `initial`, `none`, B] }],
        grow: [{ grow: [``, P, H, B] }],
        shrink: [{ shrink: [``, P, H, B] }],
        order: [{ order: [F, `first`, `last`, `none`, H, B] }],
        "grid-cols": [{ "grid-cols": te() }],
        "col-start-end": [{ col: ne() }],
        "col-start": [{ "col-start": T() }],
        "col-end": [{ "col-end": T() }],
        "grid-rows": [{ "grid-rows": te() }],
        "row-start-end": [{ row: ne() }],
        "row-start": [{ "row-start": T() }],
        "row-end": [{ "row-end": T() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": D() }],
        "auto-rows": [{ "auto-rows": D() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...O(), `normal`] }],
        "justify-items": [{ "justify-items": [...k(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...k()] }],
        "align-content": [{ content: [`normal`, ...O()] }],
        "align-items": [{ items: [...k(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...k(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": O() }],
        "place-items": [{ "place-items": [...k(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...k()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: A() }],
        mx: [{ mx: A() }],
        my: [{ my: A() }],
        ms: [{ ms: A() }],
        me: [{ me: A() }],
        mt: [{ mt: A() }],
        mr: [{ mr: A() }],
        mb: [{ mb: A() }],
        ml: [{ ml: A() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: j() }],
        w: [{ w: [s, `screen`, ...j()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...j()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...j()] },
        ],
        h: [{ h: [`screen`, `lh`, ...j()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...j()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...j()] }],
        "font-size": [{ text: [`base`, n, U, V] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, H, ue] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              ae,
              B,
            ],
          },
        ],
        "font-family": [{ font: [me, B, t] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, H, B] }],
        "line-clamp": [{ "line-clamp": [P, `none`, H, ue] }],
        leading: [{ leading: [a, ...C()] }],
        "list-image": [{ "list-image": [`none`, H, B] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, H, B] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: M() }],
        "text-color": [{ text: M() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...G(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [P, `from-font`, `auto`, H, V] },
        ],
        "text-decoration-color": [{ decoration: M() }],
        "underline-offset": [{ "underline-offset": [P, `auto`, H, B] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: C() }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              H,
              B,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, H, B] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: re() }],
        "bg-repeat": [{ bg: ie() }],
        "bg-size": [{ bg: se() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  F,
                  H,
                  B,
                ],
                radial: [``, H, B],
                conic: [F, H, B],
              },
              _e,
              fe,
            ],
          },
        ],
        "bg-color": [{ bg: M() }],
        "gradient-from-pos": [{ from: L() }],
        "gradient-via-pos": [{ via: L() }],
        "gradient-to-pos": [{ to: L() }],
        "gradient-from": [{ from: M() }],
        "gradient-via": [{ via: M() }],
        "gradient-to": [{ to: M() }],
        rounded: [{ rounded: R() }],
        "rounded-s": [{ "rounded-s": R() }],
        "rounded-e": [{ "rounded-e": R() }],
        "rounded-t": [{ "rounded-t": R() }],
        "rounded-r": [{ "rounded-r": R() }],
        "rounded-b": [{ "rounded-b": R() }],
        "rounded-l": [{ "rounded-l": R() }],
        "rounded-ss": [{ "rounded-ss": R() }],
        "rounded-se": [{ "rounded-se": R() }],
        "rounded-ee": [{ "rounded-ee": R() }],
        "rounded-es": [{ "rounded-es": R() }],
        "rounded-tl": [{ "rounded-tl": R() }],
        "rounded-tr": [{ "rounded-tr": R() }],
        "rounded-br": [{ "rounded-br": R() }],
        "rounded-bl": [{ "rounded-bl": R() }],
        "border-w": [{ border: z() }],
        "border-w-x": [{ "border-x": z() }],
        "border-w-y": [{ "border-y": z() }],
        "border-w-s": [{ "border-s": z() }],
        "border-w-e": [{ "border-e": z() }],
        "border-w-t": [{ "border-t": z() }],
        "border-w-r": [{ "border-r": z() }],
        "border-w-b": [{ "border-b": z() }],
        "border-w-l": [{ "border-l": z() }],
        "divide-x": [{ "divide-x": z() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": z() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...G(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...G(), `hidden`, `none`] }],
        "border-color": [{ border: M() }],
        "border-color-x": [{ "border-x": M() }],
        "border-color-y": [{ "border-y": M() }],
        "border-color-s": [{ "border-s": M() }],
        "border-color-e": [{ "border-e": M() }],
        "border-color-t": [{ "border-t": M() }],
        "border-color-r": [{ "border-r": M() }],
        "border-color-b": [{ "border-b": M() }],
        "border-color-l": [{ "border-l": M() }],
        "divide-color": [{ divide: M() }],
        "outline-style": [{ outline: [...G(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [P, H, B] }],
        "outline-w": [{ outline: [``, P, U, V] }],
        "outline-color": [{ outline: M() }],
        shadow: [{ shadow: [``, `none`, u, W, pe] }],
        "shadow-color": [{ shadow: M() }],
        "inset-shadow": [{ "inset-shadow": [`none`, ee, W, pe] }],
        "inset-shadow-color": [{ "inset-shadow": M() }],
        "ring-w": [{ ring: z() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: M() }],
        "ring-offset-w": [{ "ring-offset": [P, V] }],
        "ring-offset-color": [{ "ring-offset": M() }],
        "inset-ring-w": [{ "inset-ring": z() }],
        "inset-ring-color": [{ "inset-ring": M() }],
        "text-shadow": [{ "text-shadow": [`none`, d, W, pe] }],
        "text-shadow-color": [{ "text-shadow": M() }],
        opacity: [{ opacity: [P, H, B] }],
        "mix-blend": [{ "mix-blend": [...K(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": K() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [P] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": q() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": q() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": M() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": M() }],
        "mask-image-t-from-pos": [{ "mask-t-from": q() }],
        "mask-image-t-to-pos": [{ "mask-t-to": q() }],
        "mask-image-t-from-color": [{ "mask-t-from": M() }],
        "mask-image-t-to-color": [{ "mask-t-to": M() }],
        "mask-image-r-from-pos": [{ "mask-r-from": q() }],
        "mask-image-r-to-pos": [{ "mask-r-to": q() }],
        "mask-image-r-from-color": [{ "mask-r-from": M() }],
        "mask-image-r-to-color": [{ "mask-r-to": M() }],
        "mask-image-b-from-pos": [{ "mask-b-from": q() }],
        "mask-image-b-to-pos": [{ "mask-b-to": q() }],
        "mask-image-b-from-color": [{ "mask-b-from": M() }],
        "mask-image-b-to-color": [{ "mask-b-to": M() }],
        "mask-image-l-from-pos": [{ "mask-l-from": q() }],
        "mask-image-l-to-pos": [{ "mask-l-to": q() }],
        "mask-image-l-from-color": [{ "mask-l-from": M() }],
        "mask-image-l-to-color": [{ "mask-l-to": M() }],
        "mask-image-x-from-pos": [{ "mask-x-from": q() }],
        "mask-image-x-to-pos": [{ "mask-x-to": q() }],
        "mask-image-x-from-color": [{ "mask-x-from": M() }],
        "mask-image-x-to-color": [{ "mask-x-to": M() }],
        "mask-image-y-from-pos": [{ "mask-y-from": q() }],
        "mask-image-y-to-pos": [{ "mask-y-to": q() }],
        "mask-image-y-from-color": [{ "mask-y-from": M() }],
        "mask-image-y-to-color": [{ "mask-y-to": M() }],
        "mask-image-radial": [{ "mask-radial": [H, B] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": q() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": q() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": M() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": M() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": y() }],
        "mask-image-conic-pos": [{ "mask-conic": [P] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": q() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": q() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": M() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": M() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: re() }],
        "mask-repeat": [{ mask: ie() }],
        "mask-size": [{ mask: se() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, H, B] }],
        filter: [{ filter: [``, `none`, H, B] }],
        blur: [{ blur: J() }],
        brightness: [{ brightness: [P, H, B] }],
        contrast: [{ contrast: [P, H, B] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, f, W, pe] }],
        "drop-shadow-color": [{ "drop-shadow": M() }],
        grayscale: [{ grayscale: [``, P, H, B] }],
        "hue-rotate": [{ "hue-rotate": [P, H, B] }],
        invert: [{ invert: [``, P, H, B] }],
        saturate: [{ saturate: [P, H, B] }],
        sepia: [{ sepia: [``, P, H, B] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, H, B] }],
        "backdrop-blur": [{ "backdrop-blur": J() }],
        "backdrop-brightness": [{ "backdrop-brightness": [P, H, B] }],
        "backdrop-contrast": [{ "backdrop-contrast": [P, H, B] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, P, H, B] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, H, B] }],
        "backdrop-invert": [{ "backdrop-invert": [``, P, H, B] }],
        "backdrop-opacity": [{ "backdrop-opacity": [P, H, B] }],
        "backdrop-saturate": [{ "backdrop-saturate": [P, H, B] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, P, H, B] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              H,
              B,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [P, `initial`, H, B] }],
        ease: [{ ease: [`linear`, `initial`, g, H, B] }],
        delay: [{ delay: [P, H, B] }],
        animate: [{ animate: [`none`, _, H, B] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [m, H, B] }],
        "perspective-origin": [{ "perspective-origin": b() }],
        rotate: [{ rotate: Y() }],
        "rotate-x": [{ "rotate-x": Y() }],
        "rotate-y": [{ "rotate-y": Y() }],
        "rotate-z": [{ "rotate-z": Y() }],
        scale: [{ scale: X() }],
        "scale-x": [{ "scale-x": X() }],
        "scale-y": [{ "scale-y": X() }],
        "scale-z": [{ "scale-z": X() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: Z() }],
        "skew-x": [{ "skew-x": Z() }],
        "skew-y": [{ "skew-y": Z() }],
        transform: [{ transform: [H, B, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: b() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: Q() }],
        "translate-x": [{ "translate-x": Q() }],
        "translate-y": [{ "translate-y": Q() }],
        "translate-z": [{ "translate-z": Q() }],
        "translate-none": [`translate-none`],
        accent: [{ accent: M() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: M() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              H,
              B,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, H, B] },
        ],
        fill: [{ fill: [`none`, ...M()] }],
        "stroke-w": [{ stroke: [P, U, V, ue] }],
        stroke: [{ stroke: [`none`, ...M()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  },
  be = (
    e,
    {
      cacheSize: t,
      prefix: n,
      experimentalParseClassName: r,
      extend: i = {},
      override: a = {},
    }
  ) => (
    $(e, `cacheSize`, t),
    $(e, `prefix`, n),
    $(e, `experimentalParseClassName`, r),
    xe(e.theme, a.theme),
    xe(e.classGroups, a.classGroups),
    xe(e.conflictingClassGroups, a.conflictingClassGroups),
    xe(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers),
    $(e, `orderSensitiveModifiers`, a.orderSensitiveModifiers),
    Se(e.theme, i.theme),
    Se(e.classGroups, i.classGroups),
    Se(e.conflictingClassGroups, i.conflictingClassGroups),
    Se(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers),
    Ce(e, i, `orderSensitiveModifiers`),
    e
  ),
  $ = (e, t, n) => {
    n !== void 0 && (e[t] = n);
  },
  xe = (e, t) => {
    if (t) for (let n in t) $(e, n, t[n]);
  },
  Se = (e, t) => {
    if (t) for (let n in t) Ce(e, t, n);
  },
  Ce = (e, t, n) => {
    let r = t[n];
    r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
  },
  we = (e, ...t) =>
    typeof e == `function` ? T(ye, e, ...t) : T(() => be(ye(), e), ...t),
  Te =
    `foreground.background.neutral1.neutral1-light.neutral1-dark.neutral2.neutral2-light.neutral2-dark.neutral3.neutral3-light.neutral3-dark.surface1.surface1-light.surface1-dark.surface2.surface2-light.surface2-dark.surface3.surface3-light.surface3-dark.surface4.surface4-light.surface4-dark.surface5.surface5-light.surface5-dark.accent1.accent1-light.accent1-dark.accent2.accent2-light.accent2-dark.success.warning.critical.destructive.muted-foreground.card-foreground.popover-foreground.primary-foreground.secondary-foreground.destructive-foreground`.split(
      `.`
    ),
  Ee = we({
    extend: {
      classGroups: {
        "font-size": [...i],
        "text-color": Te.map((e) => `text-${e}`),
      },
    },
  });
function De(...e) {
  return Ee(o(e));
}
var Oe = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  ke = o,
  Ae = (e, t) => (n) => {
    if (t?.variants == null) return ke(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Oe(t) || Oe(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return r === void 0 || (e[n] = r), e;
        }, {});
    return ke(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className
    );
  },
  je = n(),
  Me = Ae(`flex`, {
    variants: {
      direction: {
        row: `flex-row`,
        column: `flex-col`,
        rowReverse: `flex-row-reverse`,
        columnReverse: `flex-col-reverse`,
      },
      align: {
        start: `items-start`,
        center: `items-center`,
        end: `items-end`,
        stretch: `items-stretch`,
        baseline: `items-baseline`,
      },
      justify: {
        start: `justify-start`,
        center: `justify-center`,
        end: `justify-end`,
        between: `justify-between`,
        around: `justify-around`,
        evenly: `justify-evenly`,
      },
      wrap: {
        noWrap: `flex-nowrap`,
        wrap: `flex-wrap`,
        wrapReverse: `flex-wrap-reverse`,
      },
      gap: {
        0: `gap-0`,
        1: `gap-1`,
        2: `gap-2`,
        3: `gap-3`,
        4: `gap-4`,
        6: `gap-6`,
        8: `gap-8`,
      },
    },
    defaultVariants: {
      direction: `row`,
      align: `stretch`,
      justify: `start`,
      wrap: `noWrap`,
      gap: 0,
    },
  }),
  Ne = r.forwardRef(
    (
      {
        className: e,
        direction: t,
        align: n,
        justify: r,
        wrap: i,
        gap: a,
        ...o
      },
      s
    ) =>
      (0, je.jsx)(`div`, {
        ref: s,
        className: De(
          Me({ direction: t, align: n, justify: r, wrap: i, gap: a }),
          e
        ),
        ...o,
      })
  );
Ne.displayName = `Flex`;
var Pe = `Pools`,
  Fe = `/opengraph.png`,
  Ie = 1200,
  Le = `#131313`;
function Re(e, t) {
  return !t || t === `/`
    ? e || `/`
    : `${e}${t.endsWith(`/`) ? t.slice(0, -1) : t}`;
}
export {
  Re as a,
  o as c,
  Le as i,
  Ie as n,
  Ne as o,
  Pe as r,
  we as s,
  Fe as t,
};
