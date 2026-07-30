import { D as e, T as t, k as n, t as r } from "./jsx-runtime-B-u1Y99Z.js";
import {
  a as i,
  c as a,
  n as o,
  o as s,
  r as c,
  s as l,
  t as u,
} from "./seo-c6sTC6go.js";
var d = n(e(), 1),
  f = [
    `body-1`,
    `body-2`,
    `body-3`,
    `body-4`,
    `button-1`,
    `button-2`,
    `button-3`,
    `button-4`,
    `heading-1`,
    `heading-2`,
    `heading-3`,
    `subheading-1`,
    `subheading-2`,
  ],
  p = [`size-body2`, `size-body3`, `size-body4`, `size-micro`, `size-card-art`],
  m = [`4`, `6`, `8`, `12`, `16`, `18`, `20`, `24`, `28`, `32`, `36`, `card`],
  h = l({
    extend: {
      classGroups: {
        "font-size": [{ text: [...f, ...p] }],
        rounded: [{ rounded: [...m] }],
        "rounded-s": [{ "rounded-s": [...m] }],
        "rounded-e": [{ "rounded-e": [...m] }],
        "rounded-t": [{ "rounded-t": [...m] }],
        "rounded-r": [{ "rounded-r": [...m] }],
        "rounded-b": [{ "rounded-b": [...m] }],
        "rounded-l": [{ "rounded-l": [...m] }],
        "rounded-ss": [{ "rounded-ss": [...m] }],
        "rounded-se": [{ "rounded-se": [...m] }],
        "rounded-ee": [{ "rounded-ee": [...m] }],
        "rounded-es": [{ "rounded-es": [...m] }],
        "rounded-tl": [{ "rounded-tl": [...m] }],
        "rounded-tr": [{ "rounded-tr": [...m] }],
        "rounded-br": [{ "rounded-br": [...m] }],
        "rounded-bl": [{ "rounded-bl": [...m] }],
        leading: [{ leading: [`body`, `card`] }],
        tracking: [{ tracking: [`heading-1`, `heading-2`, `heading-3`] }],
        "max-w": [{ "max-w": [`shell`] }],
        duration: [{ duration: [`fast`, `base`, `slow`] }],
        ease: [{ ease: [`emphasized`, `spring-out`, `spring-back`] }],
      },
    },
  });
function g(...e) {
  return h(a(e));
}
var _ = r(),
  v = {
    tabTitle: `Something new`,
    ogTitle: `Pools`,
    ogDescription: `Coming soon from Uniswap`,
    comingSoon: `comingsoon`,
    ogImageAlt: `The Pools droplet mark and wordmark on a dark green background.`,
  },
  y = () => [
    {
      rel: `preload`,
      href: `/fonts/terminal-grotesque.woff2`,
      as: `font`,
      type: `font/woff2`,
      crossOrigin: `anonymous`,
    },
  ],
  b = ({ matches: e, location: t }) => {
    let n = e[0]?.data?.origin ?? ``,
      r = `${n}${u}`,
      a = i(n, t.pathname);
    return [
      { title: v.tabTitle },
      { name: `description`, content: v.ogDescription },
      { name: `robots`, content: `noindex, nofollow` },
      { property: `og:type`, content: `website` },
      { property: `og:site_name`, content: c },
      { property: `og:title`, content: v.ogTitle },
      { property: `og:description`, content: v.ogDescription },
      { property: `og:url`, content: a },
      { property: `og:locale`, content: `en_US` },
      { property: `og:image`, content: r },
      { property: `og:image:type`, content: `image/png` },
      { property: `og:image:width`, content: String(o) },
      { property: `og:image:height`, content: `630` },
      { property: `og:image:alt`, content: v.ogImageAlt },
      { name: `twitter:card`, content: `summary_large_image` },
      { name: `twitter:image`, content: r },
      { name: `twitter:image:alt`, content: v.ogImageAlt },
      { tagName: `link`, rel: `canonical`, href: a },
    ];
  },
  x = `https://d29c45bs0h4ffe.cloudfront.net/rh-cca/frong.mp4`,
  S = { width: 1280, height: 720 },
  C = { y: 654, fill: `#0E1010` },
  w = {
    centerX: 640,
    baselineY: 698,
    fontSize: 34,
    fontFamily: `'Terminal Grotesque', Arial, 'Helvetica Neue', Helvetica, sans-serif`,
    fill: `#EBFBF2`,
  },
  T = {
    grainOpacity: 0.07,
    staticOpacity: 0.04,
    scanlineOpacity: 0.09,
    bandTravelSeconds: 13,
  },
  E = `
/* Terminal Grotesque by Raphaël Bastide (Velvetyne Type Foundry) */
@font-face {
  font-family: 'Terminal Grotesque';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/terminal-grotesque.woff2') format('woff2');
}
.teaser-fx-noise::before,
.teaser-fx-noise::after {
  content: '';
  position: absolute;
  inset: -50%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E");
}
.teaser-fx-noise::before {
  background-size: 180px 180px;
  opacity: ${T.grainOpacity};
  mix-blend-mode: overlay;
}
.teaser-fx-noise::after {
  background-size: 520px 520px;
  opacity: ${T.staticOpacity};
  mix-blend-mode: screen;
}
.teaser-fx-lines::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0px 1px, transparent 1px 3px);
  opacity: ${T.scanlineOpacity};
}
.teaser-fx-lines::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -14%;
  height: 14%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(226, 240, 226, 0.045) 30%,
    rgba(226, 240, 226, 0.08) 50%,
    rgba(8, 16, 8, 0.05) 78%,
    transparent
  );
}
@media (prefers-reduced-motion: no-preference) {
  .teaser-fx-noise::before {
    animation: teaser-grain 0.9s step-end infinite;
  }
  .teaser-fx-noise::after {
    animation: teaser-grain 0.6s step-end infinite reverse;
  }
  .teaser-fx-lines::after {
    animation: teaser-band ${T.bandTravelSeconds}s linear infinite;
  }
}
@keyframes teaser-grain {
  0%, 100% { transform: translate(0, 0); }
  11% { transform: translate(-4%, -8%); }
  22% { transform: translate(-12%, 4%); }
  33% { transform: translate(6%, -14%); }
  44% { transform: translate(-4%, 14%); }
  56% { transform: translate(-12%, 8%); }
  67% { transform: translate(12%, 2%); }
  78% { transform: translate(2%, 12%); }
  89% { transform: translate(-8%, 6%); }
}
@keyframes teaser-band {
  from { transform: translateY(0); }
  to { transform: translateY(914%); }
}
`;
function D({ className: e }) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 231 207`,
    fill: `none`,
    "aria-hidden": !0,
    className: e,
    children: (0, _.jsx)(`path`, {
      d: `M49.4525 114.194C51.017 113.712 52.6511 114.427 53.4212 115.817C53.5124 115.982 53.5866 116.145 53.6146 116.206C53.6555 116.295 53.6547 116.288 53.6409 116.263L57.1693 122.402C57.2664 122.571 57.5208 123.012 57.6185 123.611L57.6517 123.877L57.6605 124.174C57.643 125.654 56.6948 127.017 55.2278 127.469L55.2034 127.475L55.178 127.484L50.0501 128.926C40.8253 131.769 32.0574 134.448 26.1009 138.104C24.605 139.023 21.2771 142.064 19.9066 144.469C20.1064 144.514 55.8957 151.101 75.5853 154.724C78.0432 155.177 78.0172 158.771 75.553 159.187C55.8529 162.514 20.0933 168.553 19.9066 168.591C21.1078 169.544 24.6169 172.368 26.1009 173.321C31.8315 177.002 39.3566 180.417 48.4134 183.326C66.5234 189.142 87.8505 192.721 113.753 192.721C143.296 192.721 169.729 188.069 188.52 180.786C197.939 177.136 205.078 172.962 209.739 168.691C214.107 164.688 215.791 161.108 215.984 158.109L216.003 157.518C216.003 154.207 214.178 150.115 208.822 145.532C203.492 140.973 195.382 136.596 184.818 132.885L181.429 131.695C179.643 131.068 178.694 129.082 179.31 127.263L181.649 120.353L181.779 120.024C182.458 118.528 184.086 117.72 185.661 118.097L185.998 118.195L189.387 119.387C200.159 123.17 209.487 127.882 216.47 133.469L217.835 134.598L219.137 135.754C225.529 141.625 230.019 148.951 230.019 157.518C230.019 166.1 225.505 173.452 219.112 179.309C212.715 185.17 203.853 190.119 193.501 194.133C172.748 202.175 144.551 206.998 113.753 206.998C86.6941 206.998 63.911 203.275 44.1986 196.944C34.3449 193.779 25.6422 189.908 18.6234 185.398C11.6703 180.932 5.92998 175.557 2.64484 169.194L0.395816 164.834C-0.672795 162.764 0.522693 160.229 2.77765 159.788L2.8714 159.77L2.9671 159.76L48.4935 157.049L3.20636 152.113L3.11066 152.104L3.01691 152.087C0.700397 151.634 -0.483065 148.983 0.704409 146.907L3.25421 142.452C6.8172 136.224 12.7575 130.954 19.9066 126.565C27.1218 122.136 35.9981 118.338 46.0179 115.252L49.4525 114.194ZM115.828 0.671695C117.046 -0.223917 118.676 -0.223879 119.894 0.671695C121.958 2.18882 170.346 38.3855 170.346 83.0701C170.346 112.94 146.806 137.247 117.865 137.247C88.923 137.247 65.3831 112.939 65.3831 83.0701C65.3834 38.3864 113.77 2.19017 115.828 0.671695Z`,
      fill: `currentColor`,
    }),
  });
}
var O = t(function () {
  let [e, t] = (0, d.useState)(0),
    [n, r] = (0, d.useState)(!1),
    [i, a] = (0, d.useState)(!1),
    o = (0, d.useCallback)((e) => {
      if (e === null) return;
      (e.muted = !0), e.play().catch(() => void 0);
      let n = () => {
        t(1), r(!0);
      };
      if (e.readyState >= e.HAVE_ENOUGH_DATA) {
        n();
        return;
      }
      let i = () => {
        Number.isFinite(e.duration) &&
          e.duration > 0 &&
          e.buffered.length > 0 &&
          t(Math.min(1, e.buffered.end(e.buffered.length - 1) / e.duration));
      };
      return (
        i(),
        e.addEventListener(`progress`, i),
        e.addEventListener(`canplaythrough`, n, { once: !0 }),
        e.addEventListener(`error`, n, { once: !0 }),
        () => {
          e.removeEventListener(`progress`, i),
            e.removeEventListener(`canplaythrough`, n),
            e.removeEventListener(`error`, n);
        }
      );
    }, []);
  return (0, _.jsxs)(`main`, {
    className: `fixed inset-0 overflow-hidden bg-black [container-type:size]`,
    children: [
      (0, _.jsxs)(s, {
        className: `-translate-x-1/2 absolute bottom-0 left-1/2 h-[max(100cqh,56.25cqw)] w-[max(100cqw,177.7778cqh)]`,
        children: [
          (0, _.jsx)(`video`, {
            ref: o,
            className: `absolute inset-0 h-full w-full object-cover`,
            src: x,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            preload: `auto`,
            disablePictureInPicture: !0,
            "aria-hidden": !0,
          }),
          (0, _.jsxs)(`svg`, {
            className: `absolute inset-0 h-full w-full`,
            viewBox: `0 0 ${S.width} ${S.height}`,
            preserveAspectRatio: `none`,
            children: [
              (0, _.jsx)(`rect`, {
                x: 0,
                y: C.y,
                width: S.width,
                height: S.height - C.y,
                fill: C.fill,
              }),
              (0, _.jsx)(`text`, {
                x: w.centerX,
                y: w.baselineY,
                textAnchor: `middle`,
                fill: w.fill,
                fontFamily: w.fontFamily,
                fontSize: w.fontSize,
                style: {
                  filter: `drop-shadow(0 0 3px rgba(235, 251, 242, 0.5))`,
                },
                children: v.comingSoon,
              }),
            ],
          }),
          (0, _.jsx)(`style`, {
            href: `teaser-fx`,
            precedence: `medium`,
            children: E,
          }),
          (0, _.jsx)(s, {
            "aria-hidden": !0,
            className: `teaser-fx-noise pointer-events-none absolute inset-0 overflow-hidden`,
          }),
          (0, _.jsx)(s, {
            "aria-hidden": !0,
            className: `teaser-fx-lines pointer-events-none absolute inset-0 overflow-hidden`,
          }),
        ],
      }),
      !i &&
        (0, _.jsx)(s, {
          align: `center`,
          justify: `center`,
          "aria-hidden": !0,
          onTransitionEnd: (e) => {
            e.target === e.currentTarget &&
              e.propertyName === `opacity` &&
              a(!0);
          },
          className: g(
            `pointer-events-none absolute inset-0 z-10 bg-surface1 transition-opacity duration-700 ease-out`,
            n && `opacity-0`
          ),
          children: (0, _.jsxs)(s, {
            className: `relative size-22`,
            children: [
              (0, _.jsx)(D, {
                className: `absolute inset-0 size-full text-surface3`,
              }),
              (0, _.jsx)(s, {
                className: `absolute inset-0 transition-[clip-path] duration-300 ease-linear`,
                style: { clipPath: `inset(${(1 - e) * 100}% 0 0 0)` },
                children: (0, _.jsx)(D, { className: `size-full text-white` }),
              }),
            ],
          }),
        }),
    ],
  });
});
export { O as default, y as links, b as meta };
