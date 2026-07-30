import {
  E as e,
  T as t,
  a as n,
  c as r,
  i,
  l as a,
  r as o,
  t as s,
  w as c,
  x as l,
} from "./jsx-runtime-B-u1Y99Z.js";
import { i as u, o as d } from "./seo-c6sTC6go.js";
var f = `pools-theme`,
  p = `(function () {
  try {
    if (!false) {
      localStorage.removeItem('${f}')
      document.documentElement.classList.add('dark')
      return
    }
    var stored = localStorage.getItem('${f}')
    document.documentElement.classList.toggle('dark', stored !== 'light')
  } catch (_) {}
})()`,
  m = s(),
  h = () => [
    { rel: `icon`, href: `/favicon.ico`, sizes: `32x32` },
    { rel: `icon`, href: `/favicon.svg`, type: `image/svg+xml` },
    { rel: `apple-touch-icon`, href: `/apple-touch-icon.png` },
    { rel: `manifest`, href: `/manifest.webmanifest` },
  ],
  g = () => !1;
function _({ children: e }) {
  return (0, m.jsxs)(`html`, {
    lang: `en`,
    className: `dark`,
    suppressHydrationWarning: !0,
    children: [
      (0, m.jsxs)(`head`, {
        children: [
          (0, m.jsx)(`meta`, { charSet: `utf-8` }),
          (0, m.jsx)(`meta`, {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`,
          }),
          (0, m.jsx)(`meta`, { name: `theme-color`, content: u }),
          (0, m.jsx)(`script`, { dangerouslySetInnerHTML: { __html: p } }),
          (0, m.jsx)(i, {}),
          (0, m.jsx)(o, {}),
        ],
      }),
      (0, m.jsxs)(`body`, {
        className: `bg-surface1 text-neutral1 antialiased`,
        children: [e, (0, m.jsx)(a, {}), (0, m.jsx)(r, {})],
      }),
    ],
  });
}
var v = t(function () {
    return (0, m.jsx)(n, {});
  }),
  y = e(function () {
    let e = c(),
      t = l(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
        ? e.message
        : `Unknown error`;
    return (0,
    m.jsxs)(d, { direction: `column`, align: `center`, justify: `center`, gap: 2, className: `min-h-screen p-8`, children: [(0, m.jsx)(`h1`, { className: `text-2xl font-semibold tracking-tight`, children: `Something went wrong` }), (0, m.jsx)(`p`, { className: `text-neutral2 text-sm`, children: t })] });
  });
export {
  y as ErrorBoundary,
  _ as Layout,
  v as default,
  h as links,
  g as shouldRevalidate,
};
