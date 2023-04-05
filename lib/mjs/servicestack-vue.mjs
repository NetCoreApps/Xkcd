var Ps = Object.defineProperty;
var Ds = (e, l, t) => l in e ? Ps(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
var ye = (e, l, t) => (Ds(e, typeof l != "symbol" ? l + "" : l, t), t);
import { defineComponent as Y, computed as c, openBlock as o, createElementBlock as u, normalizeClass as b, unref as s, createElementVNode as n, createCommentVNode as _, renderSlot as Z, ref as P, toDisplayString as S, inject as Oe, nextTick as ul, isRef as An, h as ft, resolveComponent as Q, createBlock as X, withCtx as ve, mergeProps as Ce, useAttrs as Os, createVNode as fe, createTextVNode as he, watchEffect as Sl, normalizeStyle as El, withModifiers as je, Fragment as be, renderList as $e, withDirectives as gt, vModelCheckbox as Hl, withKeys as js, createStaticVNode as dl, vModelSelect as Bs, useSlots as Nl, onMounted as lt, createSlots as zl, normalizeProps as _t, guardReactiveProps as al, vModelDynamic as Rs, onUnmounted as Ut, watch as At, vModelText as Es, provide as qt, resolveDynamicComponent as Hs, resolveDirective as Ns } from "vue";
import { errorResponseExcept as zs, dateFmt as Tn, toTime as Us, omit as nt, enc as Al, setQueryString as qs, lastRightPart as pt, leftPart as cl, map as De, toDate as bt, toDateTime as Qs, toCamelCase as Ks, mapGet as ce, chop as Gs, appendQueryString as Rt, humanize as Ie, ApiResult as Ze, delaySet as In, queryString as Tl, combinePaths as Ws, rightPart as Zs, toPascalCase as Ye, errorResponse as dt, trimEnd as Js, $1 as ol, lastLeftPart as Xs, ResponseStatus as Ll, ResponseError as _n, nameOf as Ys, HttpMethods as Ul, uniqueKeys as Il, humanify as Fn, fromXsdDuration as Pn, isDate as fl, timeFmt12 as ea, apiValue as ta, indexOfAny as la, each as na } from "@servicestack/client";
const sa = { class: "flex items-center" }, aa = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, oa = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ia = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ra = [
  ia
], ua = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, da = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), ca = [
  da
], fa = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ma = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), va = [
  ma
], ha = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ga = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), pa = [
  ga
], ya = /* @__PURE__ */ Y({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const l = e, t = c(() => l.type == "info" ? "bg-blue-50 dark:bg-blue-200" : l.type == "error" ? "bg-red-50 dark:bg-red-200" : l.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), a = c(() => l.type == "info" ? "border-blue-400" : l.type == "error" ? "border-red-400" : l.type == "success" ? "border-green-400" : "border-yellow-400"), i = c(() => l.type == "info" ? "text-blue-700" : l.type == "error" ? "text-red-700" : l.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (o(), u("div", {
      class: b([s(t), s(a), "border-l-4 p-4"])
    }, [
      n("div", sa, [
        e.hideIcon ? _("", !0) : (o(), u("div", aa, [
          e.type == "warn" ? (o(), u("svg", oa, ra)) : e.type == "error" ? (o(), u("svg", ua, ca)) : e.type == "info" ? (o(), u("svg", fa, va)) : e.type == "success" ? (o(), u("svg", ha, pa)) : _("", !0)
        ])),
        n("div", null, [
          n("p", {
            class: b([s(i), "text-sm"])
          }, [
            Z(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), ba = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, wa = { class: "flex" }, xa = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), ka = { class: "ml-3" }, $a = { class: "text-sm font-medium text-green-800" }, Ca = { key: 0 }, _a = { class: "ml-auto pl-3" }, La = { class: "-mx-1.5 -my-1.5" }, Va = /* @__PURE__ */ n("span", { class: "sr-only" }, "Dismiss", -1), Ma = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Sa = [
  Va,
  Ma
], Aa = /* @__PURE__ */ Y({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const l = P(!1);
    return (t, a) => l.value ? _("", !0) : (o(), u("div", ba, [
      n("div", wa, [
        xa,
        n("div", ka, [
          n("h3", $a, [
            e.message ? (o(), u("span", Ca, S(e.message), 1)) : Z(t.$slots, "default", { key: 1 })
          ])
        ]),
        n("div", _a, [
          n("div", La, [
            n("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: a[0] || (a[0] = (i) => l.value = !0)
            }, Sa)
          ])
        ])
      ])
    ]));
  }
}), Ta = { class: "flex" }, Ia = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ n("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Fa = { class: "ml-3" }, Pa = { class: "text-sm text-red-700 dark:text-red-200" }, Da = /* @__PURE__ */ Y({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const l = e;
    let t = Oe("ApiState", void 0);
    const a = c(() => l.status || t != null && t.error.value ? zs.call({ responseStatus: l.status ?? (t == null ? void 0 : t.error.value) }, l.except ?? []) : null);
    return (i, r) => s(a) ? (o(), u("div", {
      key: 0,
      class: b(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      n("div", Ta, [
        Ia,
        n("div", Fa, [
          n("p", Pa, S(s(a)), 1)
        ])
      ])
    ], 2)) : _("", !0);
  }
}), Oa = ["id", "aria-describedby"], ja = /* @__PURE__ */ Y({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (l, t) => e.description ? (o(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      n("div", null, S(e.description), 1)
    ], 8, Oa)) : _("", !0);
  }
});
function ml(e) {
  return Tn(e).replace(/\//g, "-");
}
function Dn(e) {
  return e == null ? "" : Us(e);
}
function On(e, l) {
  e.value = null, ul(() => e.value = l);
}
function kt(e) {
  return Object.keys(e).forEach((l) => {
    const t = e[l];
    e[l] = An(t) ? s(t) : t;
  }), e;
}
function Lt(e, l, t) {
  t ? (l.value = e.entering.cls + " " + e.entering.from, setTimeout(() => l.value = e.entering.cls + " " + e.entering.to, 0)) : (l.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => l.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function tl() {
  if (typeof document > "u")
    return;
  let e = document.activeElement, l = e && e.form;
  if (l) {
    let t = ':not([disabled]):not([tabindex="-1"])', a = l.querySelectorAll(`a:not([disabled]), button${t}, input[type=text]${t}, [tabindex]${t}`), i = Array.prototype.filter.call(
      a,
      (d) => d.offsetWidth > 0 || d.offsetHeight > 0 || d === e
    ), r = i.indexOf(e);
    r > -1 && (i[r + 1] || i[0]).focus();
  }
}
function Tt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const l = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!l)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof l.getTypeName != "function")
    throw new Error(`${JSON.stringify(l)} is not a Request DTO`);
  const t = l.getTypeName();
  if (!t)
    throw new Error("DTO Required");
  return t;
}
function et(e, l, t) {
  t || (t = {});
  let a = t.cls || t.className || t.class;
  return a && (t = nt(t, ["cls", "class", "className"]), t.class = a), l == null ? `<${e}` + Fl(t) + "/>" : `<${e}` + Fl(t) + `>${l || ""}</${e}>`;
}
function Fl(e) {
  return Object.keys(e).reduce((l, t) => `${l} ${t}="${Al(e[t])}"`, "");
}
function vl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Ct(e) {
  return Kl(e);
}
let Ba = ["string", "number", "boolean", "null", "undefined"];
function yt(e) {
  return Ba.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Et(e) {
  return !yt(e);
}
class jn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(l) {
    return typeof localStorage > "u" ? null : localStorage.getItem(l);
  }
  setItem(l, t) {
    typeof localStorage > "u" || localStorage.setItem(l, t);
  }
  removeItem(l) {
    typeof localStorage > "u" || localStorage.removeItem(l);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(l) {
    return typeof localStorage > "u" ? null : localStorage.key(l);
  }
}
function il(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function ql(e) {
  if (typeof history < "u") {
    const l = qs(location.href, e);
    history.pushState({}, "", l);
  }
}
function Ql(e, l) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const a = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    l
  );
  return new Function("with(this) { return (" + e + ") }").call(a);
}
function Pl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function Ra() {
  return {
    LocalStore: jn,
    dateInputFormat: ml,
    timeInputFormat: Dn,
    setRef: On,
    unRefs: kt,
    transition: Lt,
    focusNextElement: tl,
    getTypeName: Tt,
    htmlTag: et,
    htmlAttrs: Fl,
    linkAttrs: vl,
    toAppUrl: Ct,
    isPrimitive: yt,
    isComplexType: Et,
    pushState: ql,
    scopedExpr: Ql,
    copyText: Pl
  };
}
class ne {
}
ye(ne, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (l) => location.href = l,
  assetsPathResolver: (l) => l,
  fallbackPathResolver: (l) => l,
  storage: new jn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" }
}), ye(ne, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), ye(ne, "user", P(null)), ye(ne, "metadata", P(null));
function Ea(e) {
  ne.config = Object.assign(ne.config, e);
}
function Ha(e) {
  ne.autoQueryGridDefaults = Object.assign(ne.autoQueryGridDefaults, e);
}
function Kl(e) {
  return e && ne.config.assetsPathResolver ? ne.config.assetsPathResolver(e) : e;
}
function Na(e) {
  return e && ne.config.fallbackPathResolver ? ne.config.fallbackPathResolver(e) : e;
}
function wt() {
  const e = c(() => ne.config), l = c(() => ne.autoQueryGridDefaults);
  return {
    config: e,
    setConfig: Ea,
    autoQueryGridDefaults: l,
    setAutoQueryGridDefaults: Ha,
    assetsPathResolver: Kl,
    fallbackPathResolver: Na
  };
}
const Bn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), Rn = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, Ln = Object.keys(Rn), at = (e, l) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${l}</svg>`, ll = {
  img: at("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: at("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: at("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: at("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: at("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: at("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: at("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: at("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: at("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, za = /[\r\n%#()<>?[\\\]^`{|}]/g, Vn = 1024, Ua = ["Bytes", "KB", "MB", "GB", "TB"], qa = (() => {
  const e = "application/", l = e + "vnd.openxmlformats-officedocument.", t = "image/", a = "text/", i = "audio/", r = "video/", d = {
    jpg: t + "jpeg",
    tif: t + "tiff",
    svg: t + "svg+xml",
    ico: t + "x-icon",
    ts: a + "typescript",
    py: a + "x-python",
    sh: a + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: l + "spreadsheetml.sheet",
    xltx: l + "spreadsheetml.template",
    docx: l + "wordprocessingml.document",
    dotx: l + "wordprocessingml.template",
    pptx: l + "presentationml.presentation",
    potx: l + "presentationml.template",
    ppsx: l + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function v(m, h) {
    m.split(",").forEach((g) => d[g] = h);
  }
  function f(m, h) {
    m.split(",").forEach((g) => d[g] = h(g));
  }
  return f("jpeg,gif,png,tiff,bmp,webp", (m) => t + m), f("jsx,csv,css", (m) => a + m), f("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (m) => i + m), f("3gpp,avi,dv,divx,ogg,mp4,webm", (m) => r + m), f("rtf,pdf", (m) => e + m), v("htm,html,shtm", a + "html"), v("js,mjs,cjs", a + "javascript"), v("yml,yaml", e + "yaml"), v("bat,cmd", e + "bat"), v("xml,csproj,fsproj,vbproj", a + "xml"), v("txt,ps1", a + "plain"), v("qt,mov", r + "quicktime"), v("doc,dot", e + "msword"), v("xls,xlt,xla", e + "excel"), v("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), v("cer,crt,der", e + "x-x509-ca-cert"), v("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), v("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Dl = [];
function En(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(za, encodeURIComponent);
}
function Gl(e) {
  return "data:image/svg+xml;utf8," + En(e);
}
function Hn(e) {
  let l = URL.createObjectURL(e);
  return Dl.push(l), l;
}
function Nn() {
  Dl.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (l) {
      console.error("URL.revokeObjectURL", l);
    }
  }), Dl = [];
}
function Wl(e) {
  if (!e)
    return null;
  let l = cl(e, "?");
  return pt(l, "/");
}
function Qt(e) {
  let l = Wl(e);
  return l == null || l.indexOf(".") === -1 ? null : pt(l, ".").toLowerCase();
}
function Zl(e) {
  let l = Qt(e.name);
  return l && Bn.indexOf(l) >= 0 ? Hn(e) : mt(e.name);
}
function Jl(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let l = Qt(e);
  return l && Bn.indexOf(l) >= 0 || !1;
}
function mt(e) {
  if (!e)
    return null;
  let l = Qt(e);
  return l == null || Jl(e) ? e : Bt(l) || Gl(ll.doc);
}
function Bt(e) {
  let l = zn(e);
  return l && Gl(l) || null;
}
function zn(e) {
  if (ll[e])
    return ll[e];
  for (let l = 0; l < Ln.length; l++) {
    let t = Ln[l];
    if (Rn[t].indexOf(e) >= 0)
      return ll[t];
  }
  return null;
}
function Xl(e, l = 2) {
  if (e === 0)
    return "0 Bytes";
  const t = l < 0 ? 0 : l, a = Math.floor(Math.log(e) / Math.log(Vn));
  return parseFloat((e / Math.pow(Vn, a)).toFixed(t)) + " " + Ua[a];
}
function Qa(e) {
  return e.files && Array.from(e.files).map((l) => ({ fileName: l.name, contentLength: l.size, filePath: Zl(l) }));
}
function hl(e, l) {
  e.onerror = null, e.src = Yl(e.src, l) || "";
}
function Yl(e, l) {
  return Bt(pt(e, ".").toLowerCase()) || (l ? Bt(l) || l : null) || Bt("doc");
}
function Ol(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const l = pt(e, ".").toLowerCase();
  return qa[l] || "application/" + l;
}
function Tm() {
  return {
    extSvg: zn,
    extSrc: Bt,
    getExt: Qt,
    encodeSvg: En,
    canPreview: Jl,
    getFileName: Wl,
    getMimeType: Ol,
    formatBytes: Xl,
    filePathUri: mt,
    svgToDataUri: Gl,
    fileImageUri: Zl,
    objectUrl: Hn,
    flush: Nn,
    inputFiles: Qa,
    iconOnError: hl,
    iconFallbackSrc: Yl
  };
}
class Ka {
  constructor(l) {
    ye(this, "view");
    ye(this, "includeTypes");
    Object.assign(this, l);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const Vt = "/metadata/app.json", Ga = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, Wa = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, jl = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(jl), ...Object.values(jl)];
const Za = {
  String: "string",
  Boolean: "bool",
  ...jl
};
function Yt(e) {
  return Za[e] || e;
}
function Un(e, l) {
  return e ? (l || (l = []), e === "Nullable`1" ? Yt(l[0]) + "?" : e.endsWith("[]") ? `List<${Yt(e.substring(0, e.length - 2))}>` : l.length === 0 ? Yt(e) : cl(Yt(e), "`") + "<" + l.join(",") + ">") : "";
}
function Ja(e) {
  return e && Un(e.name, e.genericArgs);
}
class Mt {
  constructor() {
    ye(this, "Query");
    ye(this, "QueryInto");
    ye(this, "Create");
    ye(this, "Update");
    ye(this, "Patch");
    ye(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((t) => !!t).map((t) => t);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(l) {
    Te.isQueryInto(l) && !this.QueryInto ? this.QueryInto = l : Te.isQuery(l) && !this.Query ? this.Query = l : Te.isCreate(l) && !this.Create ? this.Create = l : Te.isUpdate(l) && !this.Update ? this.Update = l : Te.isPatch(l) && !this.Patch ? this.Patch = l : Te.isDelete(l) && !this.Delete && (this.Delete = l);
  }
  static from(l) {
    const t = new Mt();
    return l.forEach((a) => {
      t.add(a);
    }), t;
  }
  static forType(l, t) {
    var i;
    let a = new Mt();
    return l && (t ?? (t = (i = ne.metadata.value) == null ? void 0 : i.api), t == null || t.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == l && a.add(r);
    })), a;
  }
}
const Te = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => De(e.request.inherits, (l) => Te.AnyRead.indexOf(l.name) >= 0),
  isQuery: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`1"),
  isQueryInto: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`2"),
  isCrud: (e) => {
    var l;
    return (l = e.request.implements) == null ? void 0 : l.some((t) => Te.AnyWrite.indexOf(t.name) >= 0);
  },
  isCreate: (e) => el(e, Te.Create),
  isUpdate: (e) => el(e, Te.Update),
  isPatch: (e) => el(e, Te.Patch),
  isDelete: (e) => el(e, Te.Delete),
  model: (e) => {
    var l, t, a;
    return e ? De(e.inherits, (i) => Te.AnyRead.indexOf(i.name) >= 0) ? (l = e.inherits) == null ? void 0 : l.genericArgs[0] : (a = (t = e.implements) == null ? void 0 : t.find((i) => Te.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : a.genericArgs[0] : null;
  }
};
function Xa(e) {
  var l;
  return ((l = e.input) == null ? void 0 : l.type) || gl(en(e));
}
function qn(e) {
  return e.endsWith("?") ? Gs(e, 1) : e;
}
function gl(e) {
  return Ga[qn(e)];
}
function Ya(e) {
  return e && Wa[e] || "String";
}
function en(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Bl(e) {
  return e && gl(e) == "number" || !1;
}
function Qn(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function eo(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Kn(e) {
  if (!(e != null && e.type))
    return !1;
  const l = en(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum ? !1 : gl(e.type) == null;
}
function Gn(e) {
  var t, a, i;
  if (!(e != null && e.type))
    return !1;
  const l = en(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum || ((t = e.input) == null ? void 0 : t.type) == "file" || ((a = e.input) == null ? void 0 : a.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : gl(e.type) != null;
}
function Ht(e, l) {
  let t = typeof e == "string" ? pl(e) : e;
  t || (console.warn(`Metadata not found for: ${e}`), t = { request: { name: e } });
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return t.returnsVoid ? void 0 : new a();
    }, r.prototype.getTypeName = function() {
      return t.request.name;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function to(e, l, t = {}) {
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof t.createResponse == "function" ? t.createResponse() : new a();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function nl(e, l) {
  return e ? (Object.keys(e).forEach((t) => {
    let a = e[t];
    typeof a == "string" && a.startsWith("/Date") && (e[t] = ml(bt(a)));
  }), e) : {};
}
function lo(e, l) {
  let t = {};
  return Array.from(e.elements).forEach((a) => {
    var h;
    let i = a;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = l && l.find((g) => g.name.toLowerCase() == r);
    let v = d == null ? void 0 : d.type, f = (h = d == null ? void 0 : d.genericArgs) == null ? void 0 : h[0], m = i.type === "checkbox" ? i.checked : i.value;
    Bl(v) ? m = Number(m) : v === "List`1" && typeof m == "string" && (m = m.split(",").map((g) => Bl(f) ? Number(g) : g)), t[i.id] = m;
  }), t;
}
function tn(e) {
  var l;
  return ((l = e == null ? void 0 : e.api) == null ? void 0 : l.operations) && e.api.operations.length > 0;
}
function no(e) {
  if (e != null && e.assert && !ne.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ne.metadata.value;
}
function Nt(e) {
  return e && tn(e) ? (e.date = Qs(new Date()), ne.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Vt, JSON.stringify(e)), !0) : !1;
}
function so() {
  ne.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Vt);
}
function Wn() {
  if (ne.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (tn(e))
    Nt(e);
  else {
    const l = typeof localStorage < "u" ? localStorage.getItem(Vt) : null;
    if (l)
      try {
        Nt(JSON.parse(l));
      } catch {
        console.error(`Could not JSON.parse ${Vt} from localStorage`);
      }
  }
  return ne.metadata.value != null;
}
async function Mn(e, l) {
  let t = l ? await l() : await fetch(e);
  if (t.ok) {
    let a = await t.text();
    Nt(JSON.parse(a));
  } else
    console.error(`Could not download ${l ? "AppMetadata" : e}: ${t.statusText}`);
  tn(ne.metadata.value) || console.warn("AppMetadata is not available");
}
async function ao(e) {
  var r;
  const { olderThan: l, resolvePath: t, resolve: a } = e || {};
  let i = Wn() && l !== 0;
  if (i && l) {
    let d = bt((r = ne.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > l) && (i = !1);
  }
  if (!i) {
    if ((t || a) && await Mn(t || Vt, a), ne.metadata.value != null)
      return;
    const d = Oe("client");
    if (d != null) {
      const v = await d.api(new Ka());
      v.succeeded && Nt(v.response);
    }
    if (ne.metadata.value != null)
      return;
    await Mn(Vt);
  }
  return ne.metadata.value;
}
function it(e, l) {
  var d;
  let t = (d = ne.metadata.value) == null ? void 0 : d.api;
  if (!t || !e)
    return null;
  let a = t.types.find((v) => v.name.toLowerCase() === e.toLowerCase() && (!l || v.namespace == l));
  if (a)
    return a;
  let i = pl(e);
  if (i)
    return i.request;
  let r = t.operations.find((v) => v.response && v.response.name.toLowerCase() === e.toLowerCase() && (!l || v.response.namespace == l));
  return r ? r.response : null;
}
function pl(e) {
  var a;
  let l = (a = ne.metadata.value) == null ? void 0 : a.api;
  return l ? l.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function oo({ dataModel: e }) {
  var a;
  const l = (a = ne.metadata.value) == null ? void 0 : a.api;
  if (!l)
    return [];
  let t = l.operations;
  if (e) {
    const i = typeof e == "string" ? it(e) : e;
    t = t.filter((r) => Zn(r.dataModel, i));
  }
  return t;
}
function ln(e) {
  return e ? it(e.name, e.namespace) : null;
}
function Zn(e, l) {
  return e && l && e.name === l.name && (!e.namespace || !l.namespace || e.namespace === l.namespace);
}
function io(e, l) {
  let t = it(e);
  return t && t.properties && t.properties.find((i) => i.name.toLowerCase() === l.toLowerCase());
}
function Jn(e) {
  return Xn(it(e));
}
function Xn(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let l = {};
    for (let t = 0; t < e.enumNames.length; t++) {
      const a = (e.enumDescriptions ? e.enumDescriptions[t] : null) || e.enumNames[t], i = (e.enumValues != null ? e.enumValues[t] : null) || e.enumNames[t];
      l[i] = a;
    }
    return l;
  }
  return null;
}
function Yn(e) {
  if (!e)
    return null;
  let l = {}, t = e.input && e.input.allowableEntries;
  if (t) {
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      l[r.key] = r.value;
    }
    return l;
  }
  let a = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (a) {
    for (let i = 0; i < a.length; i++) {
      let r = a[i];
      l[r] = r;
    }
    return l;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = it(i);
    if (r)
      return Xn(r);
  }
  return null;
}
function nn(e) {
  if (!e)
    return;
  const l = [];
  return Object.keys(e).forEach((t) => l.push({ key: t, value: e[t] })), l;
}
function ro(e, l) {
  const a = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, l))(e.name, (l == null ? void 0 : l.type) || Xa(e) || "text");
  return e.isEnum && (a.type = "select", a.allowableEntries = nn(Yn(e))), a;
}
function uo(e) {
  let l = [];
  if (e) {
    const t = Ke(e), a = pl(e.name), i = ln(a == null ? void 0 : a.dataModel);
    t.forEach((r) => {
      var v, f, m;
      if (!Gn(r))
        return;
      const d = ro(r, r.input);
      if (d.id = Ks(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const h = (f = (v = ne.metadata.value) == null ? void 0 : v.plugins.filesUpload) == null ? void 0 : f.locations.find((g) => g.name == r.uploadTo);
        h && !d.accept && h.allowExtensions && (d.accept = h.allowExtensions.map((g) => g.startsWith(".") ? g : `.${g}`).join(","));
      }
      if (i) {
        const h = (m = i.properties) == null ? void 0 : m.find((g) => g.name == r.name);
        r.ref || (r.ref = h == null ? void 0 : h.ref);
      }
      if (d.options)
        try {
          const h = {
            $typeFields: t.map((y) => y.name),
            $dataModelFields: i ? Ke(i).map((y) => y.name) : []
          }, g = Ql(d.options, h);
          Object.keys(g).forEach((y) => {
            d[y] = g[y];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      l.push(d);
    });
  }
  return l;
}
function Ke(e) {
  if (!e)
    return [];
  let l = [], t = {};
  function a(i) {
    i.forEach((r) => {
      t[r.name] || (t[r.name] = 1, l.push(r));
    });
  }
  for (; e; )
    e.properties && a(e.properties), e = e.inherits ? ln(e.inherits) : null;
  return l.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function el(e, l) {
  var t;
  return ((t = e.request.implements) == null ? void 0 : t.some((a) => a.name === l)) || !1;
}
function Kt(e) {
  return e ? es(e, Ke(e)) : null;
}
function es(e, l) {
  let t = l.find((r) => r.name.toLowerCase() === "id");
  if (t && t.isPrimaryKey)
    return t;
  let i = l.find((r) => r.isPrimaryKey) || t;
  if (!i) {
    let r = Te.model(e);
    if (r)
      return De(it(r), (d) => Kt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function co(e, l) {
  return De(Kt(e), (t) => ce(l, t.name));
}
function ts(e, l, t) {
  return e && e.valueType === "none" ? "" : t.key === "%In" || t.key === "%Between" ? `(${t.value})` : fo(l, t.value);
}
function fo(e, l) {
  return e ? (e = qn(e), Bl(e) || e === "Boolean" ? l : eo(e) ? `[${l}]` : `'${l}'`) : l;
}
function Je() {
  const e = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.app) || null;
  }), l = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.api) || null;
  }), t = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.plugins.autoQuery.viewerConventions) || [];
  });
  return Wn(), {
    loadMetadata: ao,
    getMetadata: no,
    setMetadata: Nt,
    clearMetadata: so,
    metadataApp: e,
    metadataApi: l,
    filterDefinitions: t,
    typeOf: it,
    typeOfRef: ln,
    typeEquals: Zn,
    apiOf: pl,
    findApis: oo,
    typeName: Ja,
    typeName2: Un,
    property: io,
    enumOptions: Jn,
    propertyOptions: Yn,
    createFormLayout: uo,
    typeProperties: Ke,
    supportsProp: Gn,
    Crud: Te,
    Apis: Mt,
    getPrimaryKey: Kt,
    getPrimaryKeyByProps: es,
    getId: co,
    createDto: Ht,
    makeDto: to,
    toFormValues: nl,
    formValues: lo,
    isComplexProp: Kn,
    asKvps: nn
  };
}
const We = class {
  static async getOrFetchValue(l, t, a, i, r, d, v) {
    const f = We.getValue(a, v, r);
    return f ?? (await We.fetchLookupIds(l, t, a, i, r, d, [v]), We.getValue(a, v, r));
  }
  static getValue(l, t, a) {
    const i = We.Lookup[l];
    if (i) {
      const r = i[t];
      if (r)
        return a = a.toLowerCase(), r[a];
    }
  }
  static setValue(l, t, a, i) {
    const r = We.Lookup[l] ?? (We.Lookup[l] = {}), d = r[t] ?? (r[t] = {});
    a = a.toLowerCase(), d[a] = i;
  }
  static setRefValue(l, t) {
    const a = ce(t, l.refId);
    if (a == null || l.refLabel == null)
      return null;
    const i = ce(t, l.refLabel);
    return We.setValue(l.model, a, l.refLabel, i), i;
  }
  static async fetchLookupIds(l, t, a, i, r, d, v) {
    const f = t.operations.find((m) => {
      var h;
      return Te.isAnyQuery(m) && ((h = m.dataModel) == null ? void 0 : h.name) == a;
    });
    if (f) {
      const m = We.Lookup[a] ?? (We.Lookup[a] = {}), h = [];
      Object.keys(m).forEach((C) => {
        const V = m[C];
        ce(V, r) && h.push(C);
      });
      const g = v.filter((C) => !h.includes(C));
      if (g.length == 0)
        return;
      const y = d ? null : `${i},${r}`, x = {
        [i + "In"]: g.join(",")
      };
      y && (x.fields = y);
      const L = Ht(f, x), $ = await l.api(L, { jsconfig: "edv,eccn" });
      if ($.succeeded)
        (ce($.response, "results") || []).forEach((V) => {
          if (!ce(V, i)) {
            console.error(`result[${i}] == null`, V);
            return;
          }
          const A = `${ce(V, i)}`, B = ce(V, r);
          r = r.toLowerCase();
          const E = m[A] ?? (m[A] = {});
          E[r] = `${B}`;
        });
      else {
        console.error(`Failed to call ${f.request.name}`);
        return;
      }
    }
  }
};
let vt = We;
ye(vt, "Lookup", {});
const ls = Y({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: l }) {
    return () => {
      let t = e.image;
      if (e.type) {
        const { typeOf: r } = Je(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? t = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let a = e.svg || (t == null ? void 0 : t.svg) || "";
      if (a.startsWith("<svg ")) {
        let d = cl(a, ">").indexOf("class="), v = `${(t == null ? void 0 : t.cls) || ""} ${l.class || ""}`;
        if (d == -1)
          a = `<svg class="${v}" ${a.substring(4)}`;
        else {
          const f = d + 6 + 1;
          a = `${a.substring(0, f) + v} ${a.substring(f)}`;
        }
        return ft("span", { innerHTML: a });
      } else
        return ft("img", {
          class: [t == null ? void 0 : t.cls, l.class],
          src: Kl(e.src || (t == null ? void 0 : t.uri)),
          onError: (r) => hl(r.target)
        });
    };
  }
}), mo = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, vo = { class: "flex" }, ho = /* @__PURE__ */ n("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), go = /* @__PURE__ */ n("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), po = [
  ho,
  go
], yo = /* @__PURE__ */ Y({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (l, t) => (o(), u("div", mo, [
      n("div", vo, [
        (o(), u("svg", {
          class: b(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, po, 2)),
        n("span", null, [
          Z(l.$slots, "default")
        ])
      ])
    ]));
  }
}), bo = ["href", "onClick"], wo = ["type"], xo = /* @__PURE__ */ Y({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const l = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (t, a) => {
      const i = Q("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            class: b(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, bo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, wo));
    };
  }
}), ko = ["href", "onClick"], $o = ["type"], Co = /* @__PURE__ */ Y({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const l = e, t = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, a = c(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (t[l.color] || t.indigo));
    return (i, r) => {
      const d = Q("router-link");
      return e.href ? (o(), X(d, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: v }) => [
          n("button", {
            class: b(s(a)),
            href: e.href,
            onClick: v
          }, [
            Z(i.$slots, "default")
          ], 10, ko)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: s(a)
      }, i.$attrs), [
        Z(i.$slots, "default")
      ], 16, $o));
    };
  }
}), _o = ["type", "href", "onClick"], Lo = ["type"], Vo = /* @__PURE__ */ Y({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const l = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (t, a) => {
      const i = Q("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            type: e.type ?? "button",
            class: b(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, _o)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type ?? "button",
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, Lo));
    };
  }
});
function He(e, l) {
  return Array.isArray(e) ? e.indexOf(l) >= 0 : e == l || e.includes(l);
}
const rl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, ot = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, ht = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, jt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, ns = {
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ue = {
  panelClass(e = "slideOver") {
    return e == "card" ? ht.panelClass : jt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? ht.formClass : jt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? ht.headingClass : jt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? ht.subHeadingClass : jt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, oe = {
  getGridClass(e = "stripedRows") {
    return oe.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "overflow-x-auto" : oe.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : oe.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : He(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : oe.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return He(e, "fullWidth") || He(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : oe.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : oe.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return oe.theadRowClass + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return oe.theadCellClass + (He(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (He(e, "whiteBackground") || He(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : oe.tableClass) + (He(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", l, t, a) {
    return (a ? "cursor-pointer " : "") + (t ? "bg-indigo-100 dark:bg-blue-800" : (a ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (He(e, "stripedRows") ? l % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: rl,
  card: ht,
  form: Ue,
  grid: oe,
  input: ot,
  modal: ns,
  slideOver: jt
}, Symbol.toStringTag, { value: "Module" })), Mo = /* @__PURE__ */ Y({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const l = e, t = Os(), a = c(() => (rl[l.color] || rl.blue) + (t.href ? "" : " cursor-pointer"));
    return (i, r) => (o(), u("a", {
      class: b(s(a))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), So = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Ao = {
  role: "list",
  class: "flex items-center space-x-4"
}, To = ["href", "title"], Io = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), Fo = { class: "sr-only" }, Po = /* @__PURE__ */ Y({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (l, t) => (o(), u("nav", So, [
      n("ol", Ao, [
        n("li", null, [
          n("div", null, [
            n("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              Io,
              n("span", Fo, S(e.homeLabel), 1)
            ], 8, To)
          ])
        ]),
        Z(l.$slots, "default")
      ])
    ]));
  }
}), Do = { class: "flex items-center" }, Oo = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), jo = ["href", "title"], Bo = ["title"], Ro = /* @__PURE__ */ Y({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("li", null, [
      n("div", Do, [
        Oo,
        e.href ? (o(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, jo)) : (o(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, Bo))
      ])
    ]));
  }
}), Eo = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Ho = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, No = /* @__PURE__ */ Y({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("div", null, [
      e.title ? (o(), u("h2", Eo, S(e.title), 1)) : _("", !0),
      n("ul", Ho, [
        Z(l.$slots, "default")
      ])
    ]));
  }
}), zo = { class: "relative flex items-start space-x-4 py-6" }, Uo = { class: "flex-shrink-0" }, qo = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, Qo = { class: "min-w-0 flex-1" }, Ko = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Go = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Wo = ["href"], Zo = /* @__PURE__ */ n("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Jo = { class: "text-base text-gray-500" }, Xo = /* @__PURE__ */ n("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Yo = /* @__PURE__ */ Y({
  __name: "NavListItem",
  props: {
    title: null,
    href: null,
    icon: null,
    iconSvg: null,
    iconSrc: null,
    iconAlt: null
  },
  setup(e) {
    return (l, t) => {
      const a = Q("Icon");
      return o(), u("li", zo, [
        n("div", Uo, [
          n("span", qo, [
            fe(a, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        n("div", Qo, [
          n("h3", Ko, [
            n("span", Go, [
              n("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Zo,
                he(" " + S(e.title), 1)
              ], 8, Wo)
            ])
          ]),
          n("p", Jo, [
            Z(l.$slots, "default")
          ])
        ]),
        Xo
      ]);
    };
  }
});
function ei(e) {
  ne.user.value = e;
}
function ti() {
  ne.user.value = null;
}
function ss(e) {
  var l;
  return (((l = ne.user.value) == null ? void 0 : l.roles) || []).indexOf(e) >= 0;
}
function li(e) {
  var l;
  return (((l = ne.user.value) == null ? void 0 : l.permissions) || []).indexOf(e) >= 0;
}
function sn() {
  return ss("Admin");
}
function sl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const l = ne.user.value;
  if (!l)
    return !1;
  if (sn())
    return !0;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((f) => t.indexOf(f) >= 0) || d.length > 0 && !d.some((f) => t.indexOf(f) >= 0) || !r.every((f) => a.indexOf(f) >= 0) || v.length > 0 && !v.every((f) => a.indexOf(f) >= 0));
}
function ni(e) {
  if (!e || !e.requiresAuth)
    return null;
  const l = ne.user.value;
  if (!l)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (sn())
    return null;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], f = i.filter((h) => t.indexOf(h) < 0);
  if (f.length > 0)
    return `Requires ${f.map((h) => "<b>" + h + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "");
  let m = r.filter((h) => a.indexOf(h) < 0);
  return m.length > 0 ? `Requires ${m.map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : d.length > 0 && !d.some((h) => t.indexOf(h) >= 0) ? `Requires any ${d.filter((h) => t.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "") : v.length > 0 && !v.every((h) => a.indexOf(h) >= 0) ? `Requires any ${v.filter((h) => a.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : null;
}
function an() {
  const e = c(() => ne.user.value || null), l = c(() => ne.user.value != null);
  return { signIn: ei, signOut: ti, user: e, isAuthenticated: l, hasRole: ss, hasPermission: li, isAdmin: sn, canAccess: sl, invalidAccessMessage: ni };
}
const si = { key: 0 }, ai = { class: "md:p-4" }, as = /* @__PURE__ */ Y({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: l } = an(), { config: t } = wt(), a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Rt(t.value.redirectSignIn, { redirect: r });
      t.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Rt(t.value.redirectSignOut, { ReturnUrl: r });
      t.value.navigate(d);
    };
    return (r, d) => {
      const v = Q("Alert"), f = Q("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", si, [
        fe(v, {
          class: b(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        n("div", ai, [
          s(l) ? (o(), X(f, {
            key: 1,
            onClick: i
          }, {
            default: ve(() => [
              he("Sign Out")
            ]),
            _: 1
          })) : (o(), X(f, {
            key: 0,
            onClick: a
          }, {
            default: ve(() => [
              he("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : _("", !0);
    };
  }
}), oi = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, ii = { class: "p-4" }, ri = /* @__PURE__ */ n("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), ui = { class: "flex w-full justify-center" }, di = /* @__PURE__ */ n("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ n("g", { fill: "currentColor" }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ n("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), ci = /* @__PURE__ */ n("span", null, "ASC", -1), fi = [
  di,
  ci
], mi = /* @__PURE__ */ dl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), vi = [
  mi
], hi = /* @__PURE__ */ n("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), gi = { key: 0 }, pi = ["id", "value"], yi = ["for"], bi = { key: 1 }, wi = { class: "mb-2" }, xi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, ki = ["onClick"], $i = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Ci = [
  $i
], _i = { class: "flex" }, Li = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Vi = [
  Li
], Mi = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, on = /* @__PURE__ */ Y({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, a = P(), i = P(""), r = P(""), d = P([]), v = c(() => t.column.meta.isEnum == !0), f = c(() => t.column.meta.isEnum == !0 ? nn(Jn(t.column.type)) : []), m = c(() => {
      var k;
      return ((k = y(t.column.type)) == null ? void 0 : k.map((R) => ({ key: R.value, value: R.name }))) || [];
    }), h = P({ filters: [] }), g = c(() => h.value.filters);
    Sl(() => h.value = Object.assign({}, t.column.settings, {
      filters: Array.from(t.column.settings.filters)
    })), Sl(() => {
      var k, R, H;
      return d.value = ((H = (R = (k = t.column.settings.filters) == null ? void 0 : k[0]) == null ? void 0 : R.value) == null ? void 0 : H.split(",")) || [];
    });
    function y(k) {
      let R = t.definitions;
      return Qn(k) || (R = R.filter((H) => H.types !== "string")), R;
    }
    function x(k, R) {
      return y(k).find((H) => H.value === R);
    }
    function L() {
      var R;
      if (!i.value)
        return;
      let k = (R = x(t.column.type, i.value)) == null ? void 0 : R.name;
      k && (h.value.filters.push({ key: i.value, name: k, value: r.value }), i.value = r.value = "");
    }
    function $(k) {
      h.value.filters.splice(k, 1);
    }
    function C(k) {
      return ts(x(t.column.type, k.key), t.column.type, k);
    }
    function V() {
      l("done");
    }
    function A() {
      var k;
      i.value = "%", (k = a.value) == null || k.focus();
    }
    function B() {
      if (r.value && L(), v.value) {
        let k = Object.values(d.value).filter((R) => R);
        h.value.filters = k.length > 0 ? [{ key: "%In", name: "In", value: k.join(",") }] : [];
      }
      l("save", h.value), l("done");
    }
    function E(k) {
      h.value.sort = k === h.value.sort ? void 0 : k, ul(B);
    }
    return (k, R) => {
      var K;
      const H = Q("SelectInput"), j = Q("TextInput"), D = Q("PrimaryButton"), z = Q("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: V,
        onVnodeMounted: A
      }, [
        n("div", {
          class: "absolute",
          style: El(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: R[5] || (R[5] = je(() => {
          }, ["stop"]))
        }, [
          n("div", oi, [
            n("div", ii, [
              ri,
              n("div", ui, [
                n("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: R[0] || (R[0] = (G) => E("ASC")),
                  class: b(`${h.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, fi, 2),
                n("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: R[1] || (R[1] = (G) => E("DESC")),
                  class: b(`${h.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, vi, 2)
              ]),
              hi,
              s(v) ? (o(), u("div", gi, [
                (o(!0), u(be, null, $e(s(f), (G) => (o(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  gt(n("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": R[2] || (R[2] = (te) => d.value = te),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, pi), [
                    [Hl, d.value]
                  ]),
                  n("label", {
                    for: G.key,
                    class: "ml-3"
                  }, S(G.value), 9, yi)
                ]))), 128))
              ])) : (o(), u("div", bi, [
                (o(!0), u(be, null, $e(s(g), (G, te) => (o(), u("div", wi, [
                  n("span", xi, [
                    he(S(e.column.name) + " " + S(G.name) + " " + S(C(G)) + " ", 1),
                    n("button", {
                      type: "button",
                      onClick: (F) => $(te),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Ci, 8, ki)
                  ])
                ]))), 256)),
                n("div", _i, [
                  fe(H, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (G) => i.value = G),
                    entries: s(m),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((K = x(e.column.type, i.value)) == null ? void 0 : K.valueType) !== "none" ? (o(), X(j, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": R[4] || (R[4] = (G) => r.value = G),
                    onKeyup: js(L, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : _("", !0),
                  n("div", { class: "pt-1" }, [
                    n("button", {
                      type: "button",
                      onClick: L,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Vi)
                  ])
                ])
              ]))
            ]),
            n("div", Mi, [
              fe(D, {
                onClick: B,
                color: "red",
                class: "ml-2"
              }, {
                default: ve(() => [
                  he(" Save ")
                ]),
                _: 1
              }),
              fe(z, { onClick: V }, {
                default: ve(() => [
                  he(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), Si = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, Ai = { class: "flex flex-wrap" }, Ti = { class: "group pr-4 sm:pr-6 lg:pr-8" }, Ii = { class: "flex justify-between w-full font-medium" }, Fi = { class: "w-6 flex justify-end" }, Pi = { class: "hidden group-hover:inline" }, Di = ["onClick", "title"], Oi = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ji = [
  Oi
], Bi = {
  key: 0,
  class: "pt-2"
}, Ri = { class: "ml-2" }, Ei = { key: 1 }, Hi = { class: "pt-2" }, Ni = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, zi = ["onClick"], Ui = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), qi = [
  Ui
], Qi = /* @__PURE__ */ n("span", null, "Clear All", -1), Ki = [
  Qi
], rn = /* @__PURE__ */ Y({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.columns.filter((g) => g.settings.filters.length > 0));
    function i(g) {
      var y, x;
      return (x = (y = g == null ? void 0 : g[0]) == null ? void 0 : y.value) == null ? void 0 : x.split(",");
    }
    function r(g) {
      let y = t.definitions;
      return Qn(g) || (y = y.filter((x) => x.types !== "string")), y;
    }
    function d(g, y) {
      return r(g).find((x) => x.value === y);
    }
    function v(g, y) {
      return ts(d(g.type, y.value), g.type, y);
    }
    function f(g) {
      g.settings.filters = [], l("change", g);
    }
    function m(g, y) {
      g.settings.filters.splice(y, 1), l("change", g);
    }
    function h() {
      t.columns.forEach((g) => {
        g.settings.filters = [], l("change", g);
      }), l("done");
    }
    return (g, y) => (o(), u("div", Si, [
      n("div", Ai, [
        (o(!0), u(be, null, $e(s(a), (x) => (o(), u("fieldset", Ti, [
          n("legend", Ii, [
            n("span", null, S(s(Ie)(x.name)), 1),
            n("span", Fi, [
              n("span", Pi, [
                n("button", {
                  onClick: (L) => f(x),
                  title: `Clear all ${s(Ie)(x.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, ji, 8, Di)
              ])
            ])
          ]),
          x.meta.isEnum ? (o(), u("div", Bi, [
            (o(!0), u(be, null, $e(i(x.settings.filters), (L) => (o(), u("div", {
              key: L,
              class: "flex items-center"
            }, [
              n("label", Ri, S(L), 1)
            ]))), 128))
          ])) : (o(), u("div", Ei, [
            (o(!0), u(be, null, $e(x.settings.filters, (L, $) => (o(), u("div", Hi, [
              n("span", Ni, [
                he(S(x.name) + " " + S(L.name) + " " + S(v(x, L)) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (C) => m(x, $),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, qi, 8, zi)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      n("div", { class: "flex justify-center pt-4" }, [
        n("button", {
          type: "button",
          onClick: h,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Ki)
      ])
    ]));
  }
}), Gi = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Wi = { class: "" }, Zi = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Ji = /* @__PURE__ */ n("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Xi = { class: "mt-4" }, Yi = ["for"], er = ["id"], tr = ["value", "selected"], lr = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, nr = ["id", "checked"], sr = ["for"], ar = { class: "mt-4" }, or = { class: "pb-2 px-4" }, ir = { class: "" }, rr = ["id", "value"], ur = ["for"], dr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, un = /* @__PURE__ */ Y({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, { autoQueryGridDefaults: a } = wt(), i = P({});
    Sl(() => i.value = Object.assign({
      take: a.value.take,
      selectedColumns: []
    }, t.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      l("done");
    }
    function v() {
      l("save", i.value);
    }
    return (f, m) => {
      const h = Q("PrimaryButton"), g = Q("SecondaryButton"), y = Q("ModalDialog");
      return o(), X(y, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ve(() => [
          n("div", Gi, [
            n("div", Wi, [
              n("div", Zi, [
                Ji,
                n("div", Xi, [
                  n("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Yi),
                  gt(n("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (x) => i.value.take = x),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(be, null, $e(r.filter((x) => t.maxLimit == null || x <= t.maxLimit), (x) => (o(), u("option", {
                      value: x,
                      selected: x === i.value.take
                    }, S(x), 9, tr))), 256))
                  ], 8, er), [
                    [Bs, i.value.take]
                  ])
                ]),
                n("div", lr, [
                  n("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (x) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, nr),
                  n("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, sr)
                ]),
                n("div", ar, [
                  n("div", or, [
                    n("div", ir, [
                      (o(!0), u(be, null, $e(e.columns, (x) => (o(), u("div", {
                        key: x.name,
                        class: "flex items-center"
                      }, [
                        gt(n("input", {
                          type: "checkbox",
                          id: x.name,
                          value: x.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (L) => i.value.selectedColumns = L),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, rr), [
                          [Hl, i.value.selectedColumns]
                        ]),
                        n("label", {
                          for: x.name,
                          class: "ml-3"
                        }, S(x.name), 9, ur)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          n("div", dr, [
            fe(h, {
              onClick: v,
              color: "red",
              class: "ml-2"
            }, {
              default: ve(() => [
                he(" Save ")
              ]),
              _: 1
            }),
            fe(g, { onClick: d }, {
              default: ve(() => [
                he(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), cr = { key: 0 }, fr = { key: 1 }, mr = {
  key: 2,
  class: "pt-1"
}, vr = { key: 0 }, hr = { key: 1 }, gr = { key: 3 }, pr = { class: "pl-1 pt-1 flex flex-wrap" }, yr = { class: "flex mt-1" }, br = ["title"], wr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), xr = [
  wr
], kr = ["disabled"], $r = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Cr = [
  $r
], _r = ["disabled"], Lr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Vr = [
  Lr
], Mr = ["disabled"], Sr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Ar = [
  Sr
], Tr = ["disabled"], Ir = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Fr = [
  Ir
], Pr = {
  key: 0,
  class: "flex mt-1"
}, Dr = { class: "px-4 text-lg text-black dark:text-white" }, Or = { key: 0 }, jr = { key: 1 }, Br = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Rr = { key: 2 }, Er = { class: "flex flex-wrap" }, Hr = {
  key: 0,
  class: "pl-2 mt-1"
}, Nr = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), zr = [
  Nr
], Ur = {
  key: 1,
  class: "pl-2 mt-1"
}, qr = /* @__PURE__ */ dl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), Qr = [
  qr
], Kr = {
  key: 2,
  class: "pl-2 mt-1"
}, Gr = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Wr = /* @__PURE__ */ n("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Zr = [
  Wr
], Jr = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Xr = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ n("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Yr = [
  Xr
], eu = /* @__PURE__ */ n("span", { class: "whitespace-nowrap" }, "Copy URL", -1), tu = {
  key: 3,
  class: "pl-2 mt-1"
}, lu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), nu = [
  lu
], su = {
  key: 4,
  class: "pl-2 mt-1"
}, au = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), ou = { class: "mr-1" }, iu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ru = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), uu = [
  ru
], du = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, cu = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), fu = [
  cu
], mu = {
  key: 5,
  class: "pl-2 mt-1"
}, vu = ["title"], hu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), gu = { class: "whitespace-nowrap" }, pu = { key: 7 }, yu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, bu = { class: "mr-1 select-none" }, wu = {
  key: 1,
  class: "flex justify-between items-center"
}, xu = { class: "mr-1 select-none" }, ku = /* @__PURE__ */ Y({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: null,
    id: { default: "AutoQueryGrid" },
    apis: null,
    type: null,
    prefs: null,
    deny: null,
    hide: null,
    selectedColumns: null,
    toolbarButtonClass: null,
    tableStyle: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null,
    apiPrefs: null,
    canFilter: null,
    disableKeyBindings: null,
    configureField: null,
    skip: { default: 0 },
    create: { type: Boolean },
    edit: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: l, emit: t }) {
    const a = e, { config: i, autoQueryGridDefaults: r } = wt(), d = r, v = Oe("client"), f = i.value.storage;
    l({ update: Ge, search: mn, createRequestArgs: xl, reset: $n, createDone: Dt, createSave: _l, editDone: Pt, editSave: Jt });
    const m = (w) => typeof w == "string" ? w.split(",") : w || [];
    function h(w, M) {
      const ee = m(M);
      return w.reduce((W, de) => (W[de] = !ee.includes(de), W), {});
    }
    const g = "filtering,queryString,queryFilters".split(","), y = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), x = c(() => a.deny ? h(g, a.deny) : h(g, d.value.deny)), L = c(() => a.hide ? h(y, a.hide) : h(y, d.value.hide));
    function $(w) {
      return x.value[w];
    }
    function C(w) {
      return L.value[w];
    }
    const V = c(() => a.tableStyle ?? d.value.tableStyle), A = c(() => a.gridClass ?? oe.getGridClass(V.value)), B = c(() => a.grid2Class ?? oe.getGrid2Class(V.value)), E = c(() => a.grid3Class ?? oe.getGrid3Class(V.value)), k = c(() => a.grid4Class ?? oe.getGrid4Class(V.value)), R = c(() => a.tableClass ?? oe.getTableClass(V.value)), H = c(() => a.theadClass ?? oe.getTheadClass(V.value)), j = c(() => a.theadRowClass ?? oe.getTheadRowClass(V.value)), D = c(() => a.theadCellClass ?? oe.getTheadCellClass(V.value)), z = c(() => a.toolbarButtonClass ?? oe.toolbarButtonClass);
    function K(w, M) {
      var Le;
      if (a.rowClass)
        return a.rowClass(w, M);
      const ee = !!me.value.AnyUpdate, de = ((Le = ze.value) != null && Le.name ? ce(w, ze.value.name) : null) == U.value;
      return oe.getTableRowClass(a.tableStyle, M, de, ee);
    }
    const G = Nl(), te = c(() => {
      var w;
      return $l(((w = me.value.AnyQuery.viewModel) == null ? void 0 : w.name) || me.value.AnyQuery.dataModel.name);
    }), F = c(() => {
      const w = Object.keys(G).map((M) => M.toLowerCase());
      return Ke(te.value).filter((M) => w.includes(M.name.toLowerCase()) || w.includes(M.name.toLowerCase() + "-header")).map((M) => M.name);
    });
    function p() {
      let w = m(a.selectedColumns);
      return w.length > 0 ? w : F.value.length > 0 ? F.value : [];
    }
    const I = c(() => {
      let M = p().map((W) => W.toLowerCase());
      const ee = Ke(te.value);
      return M.length > 0 ? M.map((W) => ee.find((de) => de.name.toLowerCase() === W)).filter((W) => W != null) : ee;
    }), le = c(() => {
      let w = I.value.map((ee) => ee.name), M = m(ge.value.selectedColumns).map((ee) => ee.toLowerCase());
      return M.length > 0 ? w.filter((ee) => M.includes(ee.toLowerCase())) : w;
    }), T = P([]), O = P(new Ze()), ue = P(new Ze()), ie = P(), se = P(!1), U = P(), J = P(), pe = P(!1), _e = P(), ae = P(a.skip), Pe = P(!1), Ae = 25, ge = P({ take: Ae }), Re = P(!1), Me = c(() => T.value.some((w) => w.settings.filters.length > 0 || !!w.settings.sort) || ge.value.selectedColumns), Ne = c(() => T.value.map((w) => w.settings.filters.length).reduce((w, M) => w + M, 0)), Xe = c(() => {
      var w;
      return Ke($l(xt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), ze = c(() => {
      var w;
      return Kt($l(xt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), N = c(() => ge.value.take ?? Ae), q = c(() => O.value.response ? ce(O.value.response, "results") : []), re = c(() => {
      var w;
      return ((w = O.value.response) == null ? void 0 : w.total) ?? q.value.length ?? 0;
    }), xe = c(() => ae.value > 0), we = c(() => ae.value > 0), Fe = c(() => q.value.length >= N.value), qe = c(() => q.value.length >= N.value), ke = {
      NoQuery: "No Query API was found"
    };
    function Ee(w) {
      if (w) {
        if (a.canFilter)
          return a.canFilter(w);
        const M = Xe.value.find((ee) => ee.name.toLowerCase() == w.toLowerCase());
        if (M)
          return !Kn(M);
      }
      return !1;
    }
    function Qe(w) {
      $("queryString") && ql(w);
    }
    async function rt(w) {
      ae.value += w, ae.value < 0 && (ae.value = 0);
      const M = Math.floor(re.value / N.value) * N.value;
      ae.value > M && (ae.value = M), Qe({ skip: ae.value || void 0 }), await Ge();
    }
    async function Ft(w, M) {
      var de, Le;
      if (J.value = null, U.value = M, !w || !M)
        return;
      let ee = Ht(me.value.AnyQuery, { [w]: M });
      const W = await v.api(ee);
      if (W.succeeded) {
        let Se = (de = ce(W.response, "results")) == null ? void 0 : de[0];
        Se || console.warn(`API ${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}(${w}:${M}) returned no results`), J.value = Se;
      }
    }
    async function ws(w, M) {
      var de;
      t("rowSelected", w, M);
      const ee = (de = ze.value) == null ? void 0 : de.name, W = ee ? ce(w, ee) : null;
      !ee || !W || (Qe({ edit: W }), Ft(ee, W));
    }
    function xs(w, M) {
      var W;
      if (!$("filtering"))
        return;
      let ee = M.target;
      if (Ee(w) && (ee == null ? void 0 : ee.tagName) !== "TD") {
        let de = (W = ee == null ? void 0 : ee.closest("TABLE")) == null ? void 0 : W.getBoundingClientRect(), Le = T.value.find((Se) => Se.name.toLowerCase() == w.toLowerCase());
        if (Le && de) {
          let Se = 318, ut = de.x + Se + 10;
          _e.value = {
            column: Le,
            topLeft: {
              x: Math.max(Math.floor(M.clientX + Se / 2), ut),
              y: de.y + 45
            }
          };
        }
      }
      t("headerSelected", w, M);
    }
    function ks() {
      _e.value = null;
    }
    async function $s(w) {
      var ee;
      let M = (ee = _e.value) == null ? void 0 : ee.column;
      M && (M.settings = w, f.setItem(Wt(M.name), JSON.stringify(M.settings)), await Ge()), _e.value = null;
    }
    async function Cs(w) {
      f.setItem(Wt(w.name), JSON.stringify(w.settings)), await Ge();
    }
    async function _s(w) {
      pe.value = !1, ge.value = w, f.setItem(kl(), JSON.stringify(w)), await Ge();
    }
    async function Ge() {
      await mn(xl());
    }
    async function Ls() {
      await Ge();
    }
    async function mn(w) {
      const M = me.value.AnyQuery;
      if (!M) {
        console.error(ke.NoQuery);
        return;
      }
      let ee = Ht(M, w), W = In((Se) => {
        O.value.response = O.value.error = void 0, Re.value = Se;
      }), de = await v.api(ee);
      W(), ul(() => O.value = de);
      let Le = ce(de.response, "results") || [];
      !de.succeeded || Le.label == 0;
    }
    function xl() {
      let w = {
        include: "total",
        take: N.value
      }, M = m(ge.value.selectedColumns || a.selectedColumns);
      if (M.length > 0) {
        let W = ze.value;
        W && M.includes(W.name) && (M = [W.name, ...M]);
        const de = Xe.value, Le = [];
        M.forEach((Se) => {
          var Xt;
          const ut = de.find((Ve) => Ve.name.toLowerCase() == Se.toLowerCase());
          (Xt = ut == null ? void 0 : ut.ref) != null && Xt.selfId && Le.push(ut.ref.selfId), ce(G, Se) && Le.push(...de.filter((Ve) => {
            var ct, Ot;
            return ((Ot = (ct = Ve.ref) == null ? void 0 : ct.selfId) == null ? void 0 : Ot.toLowerCase()) == Se.toLowerCase();
          }).map((Ve) => Ve.name));
        }), Le.forEach((Se) => {
          M.includes(Se) || M.push(Se);
        }), w.fields = M.join(",");
      }
      let ee = [];
      if (T.value.forEach((W) => {
        W.settings.sort && ee.push((W.settings.sort === "DESC" ? "-" : "") + W.name), W.settings.filters.forEach((de) => {
          let Le = de.key.replace("%", W.name);
          w[Le] = de.value;
        });
      }), $("queryString") && $("queryFilters")) {
        let W = Tl(location.search);
        if (Object.keys(W).forEach((de) => {
          I.value.find((Se) => Se.name === de) && (w[de] = W[de]);
        }), typeof W.skip < "u") {
          const de = parseInt(W.skip);
          isNaN(de) || (ae.value = w.skip = de);
        }
      }
      return typeof w.skip > "u" && ae.value > 0 && (w.skip = ae.value), ee.length > 0 && (w.orderBy = ee.join(",")), w;
    }
    function Vs() {
      const w = vn("csv");
      Pl(w), typeof window < "u" && window.open(w);
    }
    function Ms() {
      const w = vn("json");
      Pl(w), Pe.value = !0, setTimeout(() => Pe.value = !1, 3e3);
    }
    function vn(w = "json") {
      var Le;
      const M = xl(), ee = `/api/${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}`, W = Ws(v.baseUrl, Rt(ee, { ...M, jsconfig: "edv" }));
      return W.indexOf("?") >= 0 ? cl(W, "?") + "." + w + "?" + Zs(W, "?") : W + ".json";
    }
    async function Ss() {
      T.value.forEach((w) => {
        w.settings = { filters: [] }, f.removeItem(Wt(w.name));
      }), ge.value = { take: Ae }, f.removeItem(kl()), await Ge();
    }
    function As() {
      se.value = !0, Qe({ create: null });
    }
    const xt = c(() => Tt(a.type)), st = c(() => {
      var w;
      return xt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name);
    }), kl = () => {
      var w;
      return `${a.id}/ApiPrefs/${xt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)}`;
    }, Wt = (w) => {
      var M;
      return `Column/${a.id}:${xt.value || ((M = me.value.AnyQuery) == null ? void 0 : M.dataModel.name)}.${w}`;
    }, { metadataApi: hn, typeOf: $l, apiOf: gn, filterDefinitions: Ts } = Je(), { invalidAccessMessage: Cl } = an(), pn = c(() => a.filterDefinitions || Ts.value), me = c(() => {
      let w = m(a.apis);
      return w.length > 0 ? Mt.from(w.map((M) => gn(M)).filter((M) => M != null).map((M) => M)) : Mt.forType(xt.value, hn.value);
    }), Zt = (w) => `<span class="text-yellow-700">${w}</span>`, yn = c(() => {
      if (!hn.value)
        return Zt(`AppMetadata not loaded, see <a class="${rl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let M = m(a.apis).map((W) => gn(W) == null ? W : null).filter((W) => W != null);
      if (M.length > 0)
        return Zt(`Unknown API${M.length > 1 ? "s" : ""}: ${M.join(", ")}`);
      let ee = me.value;
      return ee.empty ? Zt("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ee.AnyQuery ? null : Zt(ke.NoQuery);
    }), bn = c(() => me.value.AnyQuery && Cl(me.value.AnyQuery)), wn = c(() => me.value.Create && Cl(me.value.Create)), xn = c(() => me.value.AnyUpdate && Cl(me.value.AnyUpdate)), Is = c(() => sl(me.value.Create));
    c(() => sl(me.value.AnyUpdate));
    const kn = c(() => sl(me.value.Delete));
    function Pt() {
      J.value = null, U.value = null, Qe({ edit: void 0 });
    }
    function Dt() {
      se.value = !1, Qe({ create: void 0 });
    }
    async function Jt() {
      await Ge(), Pt();
    }
    async function _l() {
      await Ge(), Dt();
    }
    function $n() {
      var ee;
      O.value = new Ze(), ue.value = new Ze(), se.value = !1, U.value = null, J.value = null, pe.value = !1, _e.value = null, ae.value = a.skip, Pe.value = !1, ge.value = { take: Ae }, Re.value = !1;
      const w = a.prefs || il(f.getItem(kl()));
      w && (ge.value = w), T.value = I.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(Wt(W.name)))
        )
      })), isNaN(a.skip) || (ae.value = a.skip);
      let M = (ee = ze.value) == null ? void 0 : ee.name;
      if ($("queryString")) {
        const W = Tl(location.search);
        typeof W.create < "u" ? se.value = typeof W.create < "u" : M && (typeof W.edit == "string" || typeof W.edit == "number") && Ft(M, W.edit);
      }
      a.create === !0 && (se.value = !0), M && a.edit != null && Ft(M, a.edit);
    }
    return lt(async () => {
      $n(), await Ge();
    }), (w, M) => {
      const ee = Q("Alert"), W = Q("EnsureAccessDialog"), de = Q("AutoCreateForm"), Le = Q("AutoEditForm"), Se = Q("ErrorSummary"), ut = Q("Loading"), Cn = Q("SettingsIcons"), Xt = Q("DataGrid");
      return s(yn) ? (o(), u("div", cr, [
        fe(ee, { innerHTML: s(yn) }, null, 8, ["innerHTML"])
      ])) : s(bn) ? (o(), u("div", fr, [
        fe(as, { "invalid-access": s(bn) }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", mr, [
        se.value && s(me).Create ? (o(), u("div", vr, [
          s(wn) ? (o(), X(W, {
            key: 0,
            title: `Create ${s(st)}`,
            "invalid-access": s(wn),
            "alert-class": "text-yellow-700",
            onDone: Dt
          }, null, 8, ["title", "invalid-access"])) : s(G).createform ? Z(w.$slots, "createform", {
            key: 1,
            type: s(me).Create.request.name,
            configure: e.configureField,
            done: Dt,
            save: _l
          }) : (o(), X(de, {
            key: 2,
            type: s(me).Create.request.name,
            configure: e.configureField,
            onDone: Dt,
            onSave: _l
          }, {
            header: ve(() => [
              Z(w.$slots, "formheader", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            footer: ve(() => [
              Z(w.$slots, "formfooter", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : J.value && s(me).AnyUpdate ? (o(), u("div", hr, [
          s(xn) ? (o(), X(W, {
            key: 0,
            title: `Update ${s(st)}`,
            "invalid-access": s(xn),
            "alert-class": "text-yellow-700",
            onDone: Pt
          }, null, 8, ["title", "invalid-access"])) : s(G).editform ? Z(w.$slots, "editform", {
            key: 1,
            model: J.value,
            type: s(me).AnyUpdate.request.name,
            deleteType: s(kn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            done: Pt,
            save: Jt
          }) : (o(), X(Le, {
            key: 2,
            modelValue: J.value,
            "onUpdate:modelValue": M[0] || (M[0] = (Ve) => J.value = Ve),
            type: s(me).AnyUpdate.request.name,
            deleteType: s(kn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: Pt,
            onSave: Jt,
            onDelete: Jt
          }, {
            header: ve(() => [
              Z(w.$slots, "formheader", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: U.value
              })
            ]),
            footer: ve(() => [
              Z(w.$slots, "formfooter", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: U.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : _("", !0),
        s(G).toolbar ? Z(w.$slots, "toolbar", { key: 2 }) : C("toolbar") ? (o(), u("div", gr, [
          pe.value ? (o(), X(un, {
            key: 0,
            columns: s(I),
            prefs: ge.value,
            onDone: M[1] || (M[1] = (Ve) => pe.value = !1),
            onSave: _s
          }, null, 8, ["columns", "prefs"])) : _("", !0),
          n("div", pr, [
            n("div", yr, [
              C("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${s(st)} Preferences`,
                onClick: M[2] || (M[2] = (Ve) => pe.value = !pe.value)
              }, xr, 8, br)) : _("", !0),
              C("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: b(["pl-2", s(xe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !s(xe),
                onClick: M[3] || (M[3] = (Ve) => rt(-s(re)))
              }, Cr, 10, kr)) : _("", !0),
              C("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: b(["pl-2", s(we) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !s(we),
                onClick: M[4] || (M[4] = (Ve) => rt(-s(N)))
              }, Vr, 10, _r)) : _("", !0),
              C("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: b(["pl-2", s(Fe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !s(Fe),
                onClick: M[5] || (M[5] = (Ve) => rt(s(N)))
              }, Ar, 10, Mr)) : _("", !0),
              C("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: b(["pl-2", s(qe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !s(qe),
                onClick: M[6] || (M[6] = (Ve) => rt(s(re)))
              }, Fr, 10, Tr)) : _("", !0)
            ]),
            C("pagingInfo") ? (o(), u("div", Pr, [
              n("div", Dr, [
                Re.value ? (o(), u("span", Or, "Querying...")) : _("", !0),
                s(q).length ? (o(), u("span", jr, [
                  Br,
                  he(" " + S(ae.value + 1) + " - " + S(Math.min(ae.value + s(q).length, s(re))) + " ", 1),
                  n("span", null, " of " + S(s(re)), 1)
                ])) : O.value.completed ? (o(), u("span", Rr, "No Results")) : _("", !0)
              ])
            ])) : _("", !0),
            n("div", Er, [
              C("refresh") ? (o(), u("div", Hr, [
                n("button", {
                  type: "button",
                  onClick: Ls,
                  title: "Refresh",
                  class: b(s(z))
                }, zr, 2)
              ])) : _("", !0),
              C("downloadCsv") ? (o(), u("div", Ur, [
                n("button", {
                  type: "button",
                  onClick: Vs,
                  title: "Download CSV",
                  class: b(s(z))
                }, Qr, 2)
              ])) : _("", !0),
              C("copyApiUrl") ? (o(), u("div", Kr, [
                n("button", {
                  type: "button",
                  onClick: Ms,
                  title: "Copy API URL",
                  class: b(s(z))
                }, [
                  Pe.value ? (o(), u("svg", Gr, Zr)) : (o(), u("svg", Jr, Yr)),
                  eu
                ], 2)
              ])) : _("", !0),
              s(Me) && C("resetPreferences") ? (o(), u("div", tu, [
                n("button", {
                  type: "button",
                  onClick: Ss,
                  title: "Reset Preferences & Filters",
                  class: b(s(z))
                }, nu, 2)
              ])) : _("", !0),
              C("filtersView") && s(Ne) > 0 ? (o(), u("div", su, [
                n("button", {
                  type: "button",
                  onClick: M[7] || (M[7] = (Ve) => ie.value = ie.value == "filters" ? null : "filters"),
                  class: b(s(z)),
                  "aria-expanded": "false"
                }, [
                  au,
                  n("span", ou, S(s(Ne)) + " " + S(s(Ne) == 1 ? "Filter" : "Filters"), 1),
                  ie.value != "filters" ? (o(), u("svg", iu, uu)) : (o(), u("svg", du, fu))
                ], 2)
              ])) : _("", !0),
              C("newItem") && s(me).Create && s(Is) ? (o(), u("div", mu, [
                n("button", {
                  type: "button",
                  onClick: As,
                  title: s(st),
                  class: b(s(z))
                }, [
                  hu,
                  n("span", gu, "New " + S(s(st)), 1)
                ], 10, vu)
              ])) : _("", !0),
              s(G).toolbarbuttons ? Z(w.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: s(z)
              }) : _("", !0)
            ])
          ])
        ])) : _("", !0),
        ie.value == "filters" ? (o(), X(rn, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: s(pn),
          columns: T.value,
          onDone: M[8] || (M[8] = (Ve) => ie.value = null),
          onChange: Cs
        }, null, 8, ["definitions", "columns"])) : _("", !0),
        ue.value.error ?? O.value.error ? (o(), X(Se, {
          key: 5,
          status: ue.value.error ?? O.value.error
        }, null, 8, ["status"])) : Re.value ? (o(), X(ut, {
          key: 6,
          class: "p-2"
        })) : _("", !0),
        _e.value ? (o(), u("div", pu, [
          fe(on, {
            definitions: s(pn),
            column: _e.value.column,
            "top-left": _e.value.topLeft,
            onDone: ks,
            onSave: $s
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : _("", !0),
        s(q).length ? (o(), X(Xt, {
          key: 8,
          id: e.id,
          items: s(q),
          type: e.type,
          "selected-columns": s(le),
          class: "mt-1",
          onFiltersChanged: Ge,
          tableStyle: s(V),
          gridClass: s(A),
          grid2Class: s(B),
          grid3Class: s(E),
          grid4Class: s(k),
          tableClass: s(R),
          theadClass: s(H),
          theadRowClass: s(j),
          theadCellClass: s(D),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: ws,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: xs
        }, zl({
          header: ve(({ column: Ve, label: ct }) => {
            var Ot;
            return [
              $("filtering") && Ee(Ve) ? (o(), u("div", yu, [
                n("span", bu, S(ct), 1),
                fe(Cn, {
                  column: T.value.find((Fs) => Fs.name.toLowerCase() === Ve.toLowerCase()),
                  "is-open": ((Ot = _e.value) == null ? void 0 : Ot.column.name) === Ve
                }, null, 8, ["column", "is-open"])
              ])) : (o(), u("div", wu, [
                n("span", xu, S(ct), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          $e(Object.keys(s(G)), (Ve) => ({
            name: Ve,
            fn: ve((ct) => [
              Z(w.$slots, Ve, _t(al(ct)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : _("", !0)
      ]));
    };
  }
}), $u = { class: "flex" }, Cu = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _u = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Lu = [
  _u
], Vu = /* @__PURE__ */ n("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Mu = /* @__PURE__ */ n("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Su = [
  Vu,
  Mu
], Au = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Tu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), Iu = [
  Tu
], Fu = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Pu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Du = [
  Pu
], Ou = /* @__PURE__ */ Y({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (l, t) => {
      var a, i, r, d, v, f, m;
      return o(), u("div", $u, [
        (r = (i = (a = e.column) == null ? void 0 : a.settings) == null ? void 0 : i.filters) != null && r.length ? (o(), u("svg", Cu, Lu)) : (o(), u("svg", {
          key: 1,
          class: b(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Su, 2)),
        ((v = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : v.sort) === "ASC" ? (o(), u("svg", Au, Iu)) : ((m = (f = e.column) == null ? void 0 : f.settings) == null ? void 0 : m.sort) === "DESC" ? (o(), u("svg", Fu, Du)) : _("", !0)
      ]);
    };
  }
}), ju = /* @__PURE__ */ Y({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (l, t) => {
      const a = Q("EnsureAccess"), i = Q("SlideOver");
      return e.invalidAccess ? (o(), X(i, {
        key: 0,
        title: e.title,
        onDone: t[0] || (t[0] = (r) => l.$emit("done")),
        "content-class": "relative flex-1"
      }, zl({
        default: ve(() => [
          fe(a, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: ve(() => [
            he(S(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : _("", !0);
    };
  }
}), Bu = ["for"], Ru = { class: "mt-1 relative rounded-md shadow-sm" }, Eu = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Hu = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Nu = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), zu = [
  Nu
], Uu = ["id"], qu = ["id"], Qu = {
  inheritAttrs: !1
}, Ku = /* @__PURE__ */ Y({
  ...Qu,
  __name: "TextInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e, { expose: l }) {
    const t = e, a = (y) => y.value;
    l({
      focus: r
    });
    const i = P();
    function r() {
      var y;
      (y = i.value) == null || y.focus();
    }
    const d = c(() => t.type || "text"), v = c(() => t.label ?? Ie(Ye(t.id))), f = c(() => t.placeholder ?? v.value);
    let m = Oe("ApiState", void 0);
    const h = c(() => dt.call({ responseStatus: t.status ?? (m == null ? void 0 : m.error.value) }, t.id)), g = c(() => [ot.base, h.value ? ot.invalid : ot.valid, t.inputClass]);
    return (y, x) => (o(), u("div", {
      class: b([y.$attrs.class])
    }, [
      s(v) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(s(v)), 11, Bu)) : _("", !0),
      n("div", Ru, [
        n("input", Ce({
          ref_key: "txtInput",
          ref: i,
          type: s(d),
          name: e.id,
          id: e.id,
          class: s(g),
          placeholder: s(f),
          value: e.modelValue,
          onInput: x[0] || (x[0] = (L) => y.$emit("update:modelValue", a(L.target))),
          "aria-invalid": s(h) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, s(nt)(y.$attrs, ["class"])), null, 16, Eu),
        s(h) ? (o(), u("div", Hu, zu)) : _("", !0)
      ]),
      s(h) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(s(h)), 9, Uu)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, qu)) : _("", !0)
    ], 2));
  }
}), Gu = ["for"], Wu = { class: "mt-1 relative rounded-md shadow-sm" }, Zu = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Ju = ["id"], Xu = ["id"], Yu = {
  inheritAttrs: !1
}, ed = /* @__PURE__ */ Y({
  ...Yu,
  __name: "TextareaInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e) {
    const l = e, t = (f) => f.value, a = c(() => l.label ?? Ie(Ye(l.id))), i = c(() => l.placeholder ?? a.value);
    let r = Oe("ApiState", void 0);
    const d = c(() => dt.call({ responseStatus: l.status ?? (r == null ? void 0 : r.error.value) }, l.id)), v = c(() => ["shadow-sm " + ot.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, l.inputClass]);
    return (f, m) => (o(), u("div", {
      class: b([f.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(s(a)), 11, Gu)) : _("", !0),
      n("div", Wu, [
        n("textarea", Ce({
          name: e.id,
          id: e.id,
          class: s(v),
          placeholder: s(i),
          onInput: m[0] || (m[0] = (h) => f.$emit("update:modelValue", t(h.target))),
          "aria-invalid": s(d) != null,
          "aria-describedby": `${e.id}-error`
        }, s(nt)(f.$attrs, ["class"])), S(e.modelValue), 17, Zu)
      ]),
      s(d) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(s(d)), 9, Ju)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Xu)) : _("", !0)
    ], 2));
  }
}), td = ["for"], ld = ["id", "name", "value", "aria-invalid", "aria-describedby"], nd = ["value"], sd = ["id"], ad = {
  inheritAttrs: !1
}, od = /* @__PURE__ */ Y({
  ...ad,
  __name: "SelectInput",
  props: {
    status: null,
    id: null,
    modelValue: null,
    inputClass: null,
    label: null,
    labelClass: null,
    options: null,
    values: null,
    entries: null
  },
  setup(e) {
    const l = e, t = (v) => v.value, a = c(() => l.label ?? Ie(Ye(l.id)));
    let i = Oe("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id)), d = c(() => l.entries || (l.values ? l.values.map((v) => ({ key: v, value: v })) : l.options ? Object.keys(l.options).map((v) => ({ key: v, value: l.options[v] })) : []));
    return (v, f) => (o(), u("div", {
      class: b([v.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(s(a)), 11, td)) : _("", !0),
      n("select", Ce({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          s(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: f[0] || (f[0] = (m) => v.$emit("update:modelValue", t(m.target))),
        "aria-invalid": s(r) != null,
        "aria-describedby": `${e.id}-error`
      }, s(nt)(v.$attrs, ["class"])), [
        (o(!0), u(be, null, $e(s(d), (m) => (o(), u("option", {
          value: m.key
        }, S(m.value), 9, nd))), 256))
      ], 16, ld),
      s(r) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(s(r)), 9, sd)) : _("", !0)
    ], 2));
  }
}), id = { class: "flex items-center h-5" }, rd = ["id", "name", "checked"], ud = { class: "ml-3 text-sm" }, dd = ["for"], cd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, fd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, md = {
  inheritAttrs: !1
}, vd = /* @__PURE__ */ Y({
  ...md,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.label ?? Ie(Ye(t.id)));
    let i = Oe("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id));
    return (d, v) => (o(), u("div", {
      class: b(["relative flex items-start", d.$attrs.class])
    }, [
      n("div", id, [
        n("input", Ce({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: v[0] || (v[0] = (f) => d.$emit("update:modelValue", f.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, s(nt)(d.$attrs, ["class"])), null, 16, rd)
      ]),
      n("div", ud, [
        n("label", {
          for: e.id,
          class: b(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(s(a)), 11, dd),
        s(r) ? (o(), u("p", cd, S(s(r)), 1)) : e.help ? (o(), u("p", fd, S(e.help), 1)) : _("", !0)
      ])
    ], 2));
  }
}), hd = ["id"], gd = ["for"], pd = { class: "mt-1 relative rounded-md shadow-sm" }, yd = ["id", "name", "value"], bd = ["onClick"], wd = { class: "flex flex-wrap pb-1.5" }, xd = { class: "pt-1.5 pl-1" }, kd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, $d = ["onClick"], Cd = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), _d = [
  Cd
], Ld = { class: "pt-1.5 pl-1 shrink" }, Vd = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], Md = ["id"], Sd = ["onMouseover", "onClick"], Ad = { class: "block truncate" }, Td = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Id = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Fd = [
  Id
], Pd = ["id"], Dd = ["id"], Od = {
  inheritAttrs: !1
}, jd = /* @__PURE__ */ Y({
  ...Od,
  __name: "TagInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: null,
    string: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => typeof t.modelValue == "string" ? t.modelValue.trim().length == 0 ? [] : t.modelValue.split(",") : t.modelValue || []), i = P(), r = P(!1), d = c(() => !t.allowableValues || t.allowableValues.length == 0 ? [] : t.allowableValues.filter((p) => !a.value.includes(p) && p.toLowerCase().includes(m.value.toLowerCase())));
    function v(p) {
      i.value = p;
    }
    const f = P(null), m = P(""), h = c(() => t.type || "text"), g = c(() => t.label ?? Ie(Ye(t.id)));
    let y = Oe("ApiState", void 0);
    const x = c(() => dt.call({ responseStatus: t.status ?? (y == null ? void 0 : y.error.value) }, t.id)), L = c(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      x.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      t.inputClass
    ]), $ = (p) => k(a.value.filter((I) => I != p));
    function C(p) {
      var I;
      document.activeElement === p.target && ((I = f.value) == null || I.focus());
    }
    const V = P();
    function A() {
      r.value = !0, V.value = !0;
    }
    function B() {
      A();
    }
    function E() {
      G(H()), V.value = !1, setTimeout(() => {
        V.value || (r.value = !1);
      }, 200);
    }
    function k(p) {
      const I = t.string ? p.join(",") : p;
      l("update:modelValue", I);
    }
    function R(p) {
      if (p.key == "Backspace" && m.value.length == 0 && a.value.length > 0 && $(a.value[a.value.length - 1]), !(!t.allowableValues || t.allowableValues.length == 0))
        if (p.code == "Escape" || p.code == "Tab")
          r.value = !1;
        else if (p.code == "Home")
          i.value = d.value[0], z();
        else if (p.code == "End")
          i.value = d.value[d.value.length - 1], z();
        else if (p.code == "ArrowDown") {
          if (r.value = !0, !i.value)
            i.value = d.value[0];
          else {
            const I = d.value.indexOf(i.value);
            i.value = I + 1 < d.value.length ? d.value[I + 1] : d.value[0];
          }
          K();
        } else if (p.code == "ArrowUp") {
          if (!i.value)
            i.value = d.value[d.value.length - 1];
          else {
            const I = d.value.indexOf(i.value);
            i.value = I - 1 >= 0 ? d.value[I - 1] : d.value[d.value.length - 1];
          }
          K();
        } else
          p.code == "Enter" ? i.value && r.value ? (G(i.value), p.preventDefault()) : r.value = !1 : r.value = d.value.length > 0;
    }
    function H() {
      if (m.value.length == 0)
        return "";
      let p = Js(m.value.trim(), ",");
      return p[0] == "," && (p = p.substring(1)), p = p.trim(), p.length == 0 && r.value && d.value.length > 0 ? i.value : p;
    }
    function j(p) {
      const I = H();
      if (I.length > 0) {
        const le = t.delimiters.some((O) => O == p.key);
        if (le && p.preventDefault(), p.key == "Enter" || p.key == "NumpadEnter" || p.key.length == 1 && le) {
          G(I);
          return;
        }
      }
    }
    const D = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function z() {
      setTimeout(() => {
        let p = ol(`#${t.id}-tag li.active`);
        p && p.scrollIntoView(D);
      }, 0);
    }
    function K() {
      setTimeout(() => {
        let p = ol(`#${t.id}-tag li.active`);
        p && ("scrollIntoViewIfNeeded" in p ? p.scrollIntoViewIfNeeded(D) : p.scrollIntoView(D));
      }, 0);
    }
    function G(p) {
      if (p.length === 0)
        return;
      const I = Array.from(a.value);
      I.indexOf(p) == -1 && I.push(p), k(I), m.value = "", r.value = !1;
    }
    function te(p) {
      var le;
      const I = (le = p.clipboardData) == null ? void 0 : le.getData("Text");
      F(I);
    }
    function F(p) {
      if (!p)
        return;
      const I = new RegExp(`\\n|\\t|${t.delimiters.join("|")}`), le = Array.from(a.value);
      p.split(I).map((O) => O.trim()).forEach((O) => {
        le.indexOf(O) == -1 && le.push(O);
      }), k(le), m.value = "";
    }
    return (p, I) => (o(), u("div", {
      class: b([p.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      s(g) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(s(g)), 11, gd)) : _("", !0),
      n("div", pd, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(a).join(",")
        }, null, 8, yd),
        n("button", {
          class: b(s(L)),
          onClick: je(C, ["prevent"]),
          onFocus: I[2] || (I[2] = (le) => r.value = !0),
          tabindex: "-1"
        }, [
          n("div", wd, [
            (o(!0), u(be, null, $e(s(a), (le) => (o(), u("div", xd, [
              n("span", kd, [
                he(S(le) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (T) => $(le),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, _d, 8, $d)
              ])
            ]))), 256)),
            n("div", Ld, [
              gt(n("input", Ce({
                ref_key: "txtInput",
                ref: f,
                type: s(h),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: e.id,
                id: e.id,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${m.value.length + 1}ch`,
                "onUpdate:modelValue": I[0] || (I[0] = (le) => m.value = le),
                "aria-invalid": s(x) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: R,
                onKeypress: j,
                onPaste: je(te, ["prevent", "stop"]),
                onFocus: B,
                onBlur: E,
                onClick: I[1] || (I[1] = (le) => r.value = !0)
              }, s(nt)(p.$attrs, ["class"])), null, 16, Vd), [
                [Rs, m.value]
              ])
            ])
          ])
        ], 42, bd),
        r.value && s(d).length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: R,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(s(d), (le) => (o(), u("li", {
            class: b([le === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (T) => v(le),
            onClick: (T) => G(le),
            role: "option",
            tabindex: "-1"
          }, [
            n("span", Ad, S(le), 1)
          ], 42, Sd))), 256))
        ], 40, Md)) : _("", !0),
        s(x) ? (o(), u("div", Td, Fd)) : _("", !0)
      ]),
      s(x) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(s(x)), 9, Pd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Dd)) : _("", !0)
    ], 10, hd));
  }
}), Bd = { class: "relative w-full" }, Rd = ["for"], Ed = { class: "block mt-2" }, Hd = /* @__PURE__ */ n("span", { class: "sr-only" }, "help ?? useLabel", -1), Nd = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], zd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Ud = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), qd = [
  Ud
], Qd = ["id"], Kd = ["id"], Gd = { key: 0 }, Wd = ["title"], Zd = ["alt", "src"], Jd = {
  key: 1,
  class: "mt-3"
}, Xd = { class: "w-full" }, Yd = { class: "pr-6 align-bottom pb-2" }, ec = ["title"], tc = ["src", "onError"], lc = ["href"], nc = {
  key: 1,
  class: "overflow-hidden"
}, sc = { class: "align-top pb-2 whitespace-nowrap" }, ac = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, oc = /* @__PURE__ */ Y({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    values: null,
    files: null
  },
  setup(e) {
    var E;
    const l = e, t = P(null), { assetsPathResolver: a, fallbackPathResolver: i } = wt(), r = {}, d = P(), v = P(((E = l.files) == null ? void 0 : E.map(f)) || []);
    function f(k) {
      return k.filePath = a(k.filePath), k;
    }
    l.values && l.values.length > 0 && (v.value = l.values.map((k) => {
      let R = k.replace(/\\/g, "/");
      return { fileName: Xs(pt(R, "/"), "."), filePath: R, contentType: Ol(R) };
    }).map(f));
    const m = c(() => l.label ?? Ie(Ye(l.id))), h = c(() => l.placeholder ?? m.value);
    let g = Oe("ApiState", void 0);
    const y = c(() => dt.call({ responseStatus: l.status ?? (g == null ? void 0 : g.error.value) }, l.id)), x = c(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      y.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      l.inputClass
    ]), L = (k) => {
      let R = k.target;
      d.value = "", v.value = Array.from(R.files || []).map((H) => ({
        fileName: H.name,
        filePath: Zl(H),
        contentLength: H.size,
        contentType: H.type || Ol(H.name)
      }));
    }, $ = () => {
      var k;
      return (k = t.value) == null ? void 0 : k.click();
    }, C = (k) => k == null ? !1 : k.startsWith("data:") || k.startsWith("blob:"), V = c(() => {
      if (v.value.length > 0)
        return v.value[0].filePath;
      let k = typeof l.modelValue == "string" ? l.modelValue : l.values && l.values[0];
      return k && mt(a(k)) || null;
    }), A = (k) => !k || k.startsWith("data:") || k.endsWith(".svg") ? "" : "rounded-full object-cover";
    function B(k) {
      d.value = i(V.value);
    }
    return Ut(Nn), (k, R) => (o(), u("div", {
      class: b(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      n("div", Bd, [
        s(m) ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(s(m)), 11, Rd)) : _("", !0),
        n("div", Ed, [
          Hd,
          n("input", Ce({
            ref_key: "input",
            ref: t,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: s(x),
            placeholder: s(h),
            "aria-invalid": s(y) != null,
            "aria-describedby": `${e.id}-error`
          }, k.$attrs, { onChange: L }), null, 16, Nd),
          s(y) ? (o(), u("div", zd, qd)) : _("", !0)
        ]),
        s(y) ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, S(s(y)), 9, Qd)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, S(e.help), 9, Kd)) : _("", !0)
      ]),
      e.multiple ? (o(), u("div", Jd, [
        n("table", Xd, [
          (o(!0), u(be, null, $e(v.value, (H) => (o(), u("tr", null, [
            n("td", Yd, [
              n("div", {
                class: "flex w-full",
                title: C(H.filePath) ? "" : H.filePath
              }, [
                n("img", {
                  src: r[s(mt)(H.filePath)] || s(a)(s(mt)(H.filePath)),
                  class: b(["mr-2 h-8 w-8", A(H.filePath)]),
                  onError: (j) => r[s(mt)(H.filePath)] = s(i)(s(mt)(H.filePath))
                }, null, 42, tc),
                C(H.filePath) ? (o(), u("span", nc, S(H.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: s(a)(H.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, S(H.fileName), 9, lc))
              ], 8, ec)
            ]),
            n("td", sc, [
              H.contentLength && H.contentLength > 0 ? (o(), u("span", ac, S(s(Xl)(H.contentLength)), 1)) : _("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Gd, [
        s(V) ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: C(s(V)) ? "" : s(V)
        }, [
          n("img", {
            onClick: $,
            class: b(["h-16 w-16", A(s(V))]),
            alt: `Current ${s(m)}`,
            src: d.value || s(a)(s(V)),
            onError: B
          }, null, 42, Zd)
        ], 8, Wd)) : _("", !0)
      ]))
    ], 2));
  }
}), ic = ["id"], rc = ["for"], uc = { class: "relative mt-1" }, dc = ["id", "placeholder"], cc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), fc = [
  cc
], mc = ["id"], vc = ["onMouseover", "onClick"], hc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), gc = [
  hc
], pc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, yc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), bc = [
  yc
], wc = ["id"], xc = ["id"], kc = /* @__PURE__ */ Y({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: l, emit: t }) {
    const a = e, i = P(!1);
    l({ toggle: z });
    function r(F) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(F) >= 0;
    }
    const d = c(() => a.label ?? Ie(Ye(a.id)));
    let v = Oe("ApiState", void 0);
    const f = c(() => dt.call({ responseStatus: a.status ?? (v == null ? void 0 : v.error.value) }, a.id)), m = c(() => [ot.base, f.value ? ot.invalid : ot.valid]), h = P(null), g = P(""), y = P(null), x = P(a.viewCount), L = P([]), $ = c(() => g.value ? a.options.filter((p) => a.match(p, g.value)).slice(0, x.value) : a.options), C = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function V(F) {
      y.value = F, L.value.indexOf(F) > Math.floor(x.value * 0.9) && (x.value += a.viewCount, te());
    }
    const A = [",", `
`, "	"];
    function B(F) {
      var I;
      const p = (I = F.clipboardData) == null ? void 0 : I.getData("Text");
      E(p);
    }
    function E(F) {
      if (!F)
        return;
      const p = A.some((I) => F.includes(I));
      if (!a.multiple || !p) {
        const I = a.options.filter((le) => a.match(le, F));
        I.length == 1 && (G(I[0]), i.value = !1, tl());
      } else if (p) {
        const I = new RegExp("\\r|\\n|\\t|,"), T = F.split(I).filter((O) => O.trim()).map((O) => a.options.find((ue) => a.match(ue, O))).filter((O) => !!O);
        if (T.length > 0) {
          g.value = "", i.value = !1, y.value = null;
          let O = Array.from(a.modelValue || []);
          T.forEach((ue) => {
            r(ue) ? O = O.filter((ie) => ie != ue) : O.push(ue);
          }), t("update:modelValue", O), tl();
        }
      }
    }
    function k(F) {
      C.indexOf(F.code) || K();
    }
    function R(F) {
      if (!(F.shiftKey || F.ctrlKey || F.altKey)) {
        if (!i.value) {
          F.code == "ArrowDown" && (i.value = !0, y.value = L.value[0]);
          return;
        }
        if (F.code == "Escape" || F.code == "Tab")
          i.value = !1;
        else if (F.code == "Home")
          y.value = L.value[0], j();
        else if (F.code == "End")
          y.value = L.value[L.value.length - 1], j();
        else if (F.code == "ArrowDown") {
          if (!y.value)
            y.value = L.value[0];
          else {
            const p = L.value.indexOf(y.value);
            y.value = p + 1 < L.value.length ? L.value[p + 1] : L.value[0];
          }
          D();
        } else if (F.code == "ArrowUp") {
          if (!y.value)
            y.value = L.value[L.value.length - 1];
          else {
            const p = L.value.indexOf(y.value);
            y.value = p - 1 >= 0 ? L.value[p - 1] : L.value[L.value.length - 1];
          }
          D();
        } else
          F.code == "Enter" && (y.value ? (G(y.value), a.multiple || (F.preventDefault(), tl())) : i.value = !1);
      }
    }
    const H = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function j() {
      setTimeout(() => {
        let F = ol(`#${a.id}-autocomplete li.active`);
        F && F.scrollIntoView(H);
      }, 0);
    }
    function D() {
      setTimeout(() => {
        let F = ol(`#${a.id}-autocomplete li.active`);
        F && ("scrollIntoViewIfNeeded" in F ? F.scrollIntoViewIfNeeded(H) : F.scrollIntoView(H));
      }, 0);
    }
    function z(F) {
      var p;
      i.value = F, F && (K(), (p = h.value) == null || p.focus());
    }
    function K() {
      i.value = !0, te();
    }
    function G(F) {
      if (g.value = "", i.value = !1, a.multiple) {
        let p = Array.from(a.modelValue || []);
        r(F) ? p = p.filter((I) => I != F) : p.push(F), y.value = null, t("update:modelValue", p);
      } else {
        let p = F;
        a.modelValue == F && (p = null), t("update:modelValue", p);
      }
    }
    function te() {
      L.value = $.value;
    }
    return At(g, te), (F, p) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      s(d) ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, S(s(d)), 9, rc)) : _("", !0),
      n("div", uc, [
        gt(n("input", Ce({
          ref_key: "txtInput",
          ref: h,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": p[0] || (p[0] = (I) => g.value = I),
          class: s(m),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: p[1] || (p[1] = (I) => i.value = !0),
          onKeydown: R,
          onKeyup: k,
          onClick: K,
          onPaste: B
        }, F.$attrs), null, 16, dc), [
          [Es, g.value]
        ]),
        n("button", {
          type: "button",
          onClick: p[2] || (p[2] = (I) => z(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, fc),
        i.value ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: R,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(L.value, (I) => (o(), u("li", {
            class: b([I === y.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (le) => V(I),
            onClick: (le) => G(I),
            role: "option",
            tabindex: "-1"
          }, [
            Z(F.$slots, "item", _t(al(I))),
            r(I) ? (o(), u("span", {
              key: 0,
              class: b(["absolute inset-y-0 right-0 flex items-center pr-4", I === y.value ? "text-white" : "text-indigo-600"])
            }, gc, 2)) : _("", !0)
          ], 42, vc))), 256))
        ], 40, mc)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: R,
          onClick: p[3] || (p[3] = (I) => z(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(F.$slots, "item", _t(al(e.modelValue)))
        ], 32)) : _("", !0),
        s(f) ? (o(), u("div", pc, bc)) : _("", !0)
      ]),
      s(f) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(s(f)), 9, wc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, xc)) : _("", !0)
    ], 8, ic));
  }
}), $c = ["id", "name", "value"], Cc = { class: "block truncate" }, _c = /* @__PURE__ */ Y({
  __name: "Combobox",
  props: {
    id: null,
    modelValue: null,
    multiple: { type: Boolean },
    options: null,
    values: null,
    entries: null
  },
  emits: ["update:modelValue"],
  setup(e, { expose: l, emit: t }) {
    const a = e;
    l({
      toggle(g) {
        var y;
        (y = d.value) == null || y.toggle(g);
      }
    });
    function i(g) {
      t("update:modelValue", g);
    }
    const r = c(() => a.multiple != null ? a.multiple : Array.isArray(a.modelValue)), d = P();
    function v(g, y) {
      return !y || g.value.toLowerCase().includes(y.toLowerCase());
    }
    const f = c(() => a.entries || (a.values ? a.values.map((g) => ({ key: g, value: g })) : a.options ? Object.keys(a.options).map((g) => ({ key: g, value: a.options[g] })) : [])), m = P(r.value ? [] : null);
    lt(() => {
      a.modelValue == null || a.modelValue === "" ? m.value = r.value ? [] : null : typeof a.modelValue == "string" ? m.value = f.value.find((g) => g.key === a.modelValue) || null : Array.isArray(a.modelValue) && (m.value = f.value.filter((g) => a.modelValue.includes(g.key)));
    });
    const h = c(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((g) => encodeURIComponent(g.key)).join(",") : m.value.key);
    return (g, y) => {
      const x = Q("Autocomplete");
      return o(), u(be, null, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(h)
        }, null, 8, $c),
        fe(x, Ce({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: s(f),
          match: v,
          multiple: s(r)
        }, g.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            y[0] || (y[0] = (L) => m.value = L),
            i
          ]
        }), {
          item: ve(({ key: L, value: $ }) => [
            n("span", Cc, S($), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), Lc = /* @__PURE__ */ Y({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = c(() => nt(t.input, i)), d = P(De(
      t.modelValue[t.input.id],
      (f) => t.input.type === "file" ? null : t.input.type === "date" && f instanceof Date ? ml(f) : t.input.type === "time" ? Dn(f) : f
    ));
    At(d, () => {
      t.modelValue[t.input.id] = d.value, l("update:modelValue", t.modelValue);
    });
    const v = c(() => {
      const f = t.modelValue[t.input.id];
      if (t.input.type !== "file" || !f)
        return [];
      if (typeof f == "string")
        return [{ filePath: f, fileName: pt(f, "/") }];
      if (!Array.isArray(f) && typeof f == "object")
        return f;
      if (Array.isArray(f)) {
        const m = [];
        return f.forEach((h) => {
          typeof h == "string" ? m.push({ filePath: h, fileName: pt(h, "/") }) : typeof h == "object" && m.push(h);
        }), m;
      }
    });
    return (f, m) => {
      var V, A, B, E, k, R, H, j, D, z, K, G, te, F, p, I, le, T, O, ue, ie, se;
      const h = Q("SelectInput"), g = Q("CheckboxInput"), y = Q("TagInput"), x = Q("Combobox"), L = Q("FileInput"), $ = Q("TextareaInput"), C = Q("TextInput");
      return s(a) == "select" ? (o(), X(h, Ce({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (U) => d.value = U),
        status: (V = e.api) == null ? void 0 : V.error,
        "input-class": (A = e.input.css) == null ? void 0 : A.input,
        "label-class": (B = e.input.css) == null ? void 0 : B.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "checkbox" ? (o(), X(g, Ce({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (U) => d.value = U),
        status: (E = e.api) == null ? void 0 : E.error,
        "input-class": (k = e.input.css) == null ? void 0 : k.input,
        "label-class": (R = e.input.css) == null ? void 0 : R.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : s(a) == "tag" ? (o(), X(y, Ce({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[2] || (m[2] = (U) => d.value = U),
        status: (H = e.api) == null ? void 0 : H.error,
        "input-class": (j = e.input.css) == null ? void 0 : j.input,
        "label-class": (D = e.input.css) == null ? void 0 : D.label,
        allowableValues: e.input.allowableValues,
        string: ((z = e.input.prop) == null ? void 0 : z.type) == "String"
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : s(a) == "combobox" ? (o(), X(x, Ce({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[3] || (m[3] = (U) => d.value = U),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (G = e.input.css) == null ? void 0 : G.input,
        "label-class": (te = e.input.css) == null ? void 0 : te.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "file" ? (o(), X(L, Ce({
        key: 4,
        id: e.input.id,
        status: (F = e.api) == null ? void 0 : F.error,
        modelValue: d.value,
        "onUpdate:modelValue": m[4] || (m[4] = (U) => d.value = U),
        "input-class": (p = e.input.css) == null ? void 0 : p.input,
        "label-class": (I = e.input.css) == null ? void 0 : I.label,
        files: s(v)
      }, s(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : s(a) == "textarea" ? (o(), X($, Ce({
        key: 5,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[5] || (m[5] = (U) => d.value = U),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (T = e.input.css) == null ? void 0 : T.input,
        "label-class": (O = e.input.css) == null ? void 0 : O.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), X(C, Ce({
        key: 6,
        type: s(a),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[6] || (m[6] = (U) => d.value = U),
        status: (ue = e.api) == null ? void 0 : ue.error,
        "input-class": (ie = e.input.css) == null ? void 0 : ie.input,
        "label-class": (se = e.input.css) == null ? void 0 : se.label
      }, s(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), Vc = { class: "lookup-field" }, Mc = ["name", "value"], Sc = {
  key: 0,
  class: "flex justify-between"
}, Ac = ["for"], Tc = {
  key: 0,
  class: "flex items-center"
}, Ic = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, Fc = /* @__PURE__ */ n("span", { class: "sr-only" }, "Clear", -1), Pc = /* @__PURE__ */ n("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Dc = [
  Fc,
  Pc
], Oc = {
  key: 1,
  class: "mt-1 relative"
}, jc = { class: "w-full inline-flex truncate" }, Bc = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, Rc = /* @__PURE__ */ n("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Ec = ["id"], Hc = ["id"], Nc = /* @__PURE__ */ Y({
  __name: "LookupInput",
  props: {
    id: null,
    status: null,
    input: null,
    metadataType: null,
    modelValue: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, { config: a } = wt(), { metadataApi: i } = Je(), r = c(() => t.id || t.input.id), d = c(() => t.label ?? Ie(Ye(r.value)));
    let v = Oe("ApiState", void 0);
    const f = Oe("client"), m = c(() => dt.call({ responseStatus: t.status ?? (v == null ? void 0 : v.error.value) }, r.value)), h = P(""), g = P(""), y = c(() => ce(t.modelValue, r.value)), x = c(() => Ke(t.metadataType).find((A) => A.name.toLowerCase() == r.value.toLowerCase())), L = c(() => {
      var A, B, E;
      return ((E = it((B = (A = x.value) == null ? void 0 : A.ref) == null ? void 0 : B.model)) == null ? void 0 : E.icon) || a.value.tableIcon;
    });
    let $;
    function C(A) {
      if (A) {
        if ($ == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        $.openModal({ name: "ModalLookup", ref: A }, (B) => {
          if (console.debug("openModal", h.value, " -> ", B, vt.setRefValue(A, B), A), B) {
            const E = ce(B, A.refId);
            h.value = vt.setRefValue(A, B) || E;
            const k = s(t.modelValue);
            k[r.value] = E, l("update:modelValue", k);
          }
        });
      }
    }
    function V() {
      t.modelValue[r.value] = null, h.value = "";
    }
    return lt(async () => {
      var j, D;
      $ = Oe("ModalProvider", void 0);
      const A = t.modelValue;
      t.modelValue[r.value] || (t.modelValue[r.value] = null);
      const B = x.value, E = B == null ? void 0 : B.ref;
      if (!E) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      h.value = "";
      let k = E.selfId == null ? ce(A, B.name) : ce(A, E.selfId);
      if (Et(k) && (k = ce(A, E.refId)), k == null)
        return;
      if (((j = i.value) == null ? void 0 : j.operations.find((z) => {
        var K;
        return ((K = z.dataModel) == null ? void 0 : K.name) == E.model;
      })) != null) {
        const z = ce(A, B.name);
        if (Et(z))
          return;
        if (h.value = `${z}`, g.value = B.name, E.refLabel != null) {
          const K = Ke(t.metadataType).find((te) => te.type == E.model);
          K == null && console.warn(`Could not find ${E.model} Property on ${t.metadataType.name}`);
          const G = K != null ? ce(A, K.name) : null;
          if (G != null) {
            let te = ce(G, E.refLabel);
            te && (h.value = `${te}`, vt.setValue(E.model, k, E.refLabel, te));
          } else {
            const te = ((D = B.attributes) == null ? void 0 : D.some((p) => p.name == "Computed")) == !0;
            let F = await vt.getOrFetchValue(f, i.value, E.model, E.refId, E.refLabel, te, k);
            h.value = F || `${E.model}: ${h.value}`;
          }
        }
      }
    }), (A, B) => {
      var k;
      const E = Q("Icon");
      return o(), u("div", Vc, [
        n("input", {
          type: "hidden",
          name: s(r),
          value: s(y)
        }, null, 8, Mc),
        s(d) ? (o(), u("div", Sc, [
          n("label", {
            for: s(r),
            class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, S(s(d)), 11, Ac),
          s(y) ? (o(), u("div", Tc, [
            n("span", Ic, S(s(y)), 1),
            n("button", {
              onClick: V,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, Dc)
          ])) : _("", !0)
        ])) : _("", !0),
        (k = s(x)) != null && k.ref ? (o(), u("div", Oc, [
          n("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: B[0] || (B[0] = (R) => C(s(x).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            n("span", jc, [
              n("span", Bc, [
                fe(E, {
                  class: "mr-1 w-5 h-5",
                  image: s(L)
                }, null, 8, ["image"]),
                n("span", null, S(h.value), 1)
              ])
            ]),
            Rc
          ])
        ])) : _("", !0),
        s(m) ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${s(r)}-error`
        }, S(s(m)), 9, Ec)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${s(r)}-description`
        }, S(e.help), 9, Hc)) : _("", !0)
      ]);
    };
  }
}), zc = /* @__PURE__ */ Y({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e;
    function a($, C) {
      t.modelValue[$.id] = ce(C, $.id), l("update:modelValue", t.modelValue);
    }
    const { metadataApi: i, apiOf: r, typeOf: d, typeOfRef: v, createFormLayout: f, Crud: m } = Je(), h = c(() => t.type || Tt(t.modelValue)), g = c(() => d(h.value)), y = c(() => {
      var $, C;
      return v((C = ($ = i.value) == null ? void 0 : $.operations.find((V) => V.request.name == h.value)) == null ? void 0 : C.dataModel) || g.value;
    }), x = c(() => {
      const $ = g.value;
      if (!$) {
        if (t.formLayout)
          return t.formLayout.map((k) => {
            const R = { name: k.id, type: Ya(k.type) }, H = Object.assign({ prop: R }, k);
            return t.configureField && t.configureField(H), H;
          });
        throw new Error(`MetadataType for ${h.value} not found`);
      }
      const C = Ke($), V = y.value, A = t.formLayout ? t.formLayout : f($), B = [], E = r($.name);
      return A.forEach((k) => {
        var D;
        const R = C.find((z) => z.name == k.name);
        if (k.ignore)
          return;
        const H = ((D = V == null ? void 0 : V.properties) == null ? void 0 : D.find((z) => {
          var K;
          return z.name.toLowerCase() == ((K = k.name) == null ? void 0 : K.toLowerCase());
        })) ?? R, j = Object.assign({ prop: H, op: E }, k);
        t.configureField && t.configureField(j), B.push(j);
      }), B;
    }), L = c(() => x.value.filter(($) => $.type != "hidden").map(($) => $.id));
    return ($, C) => {
      var E;
      const V = Q("ErrorSummary"), A = Q("LookupInput"), B = Q("DynamicInput");
      return o(), u(be, null, [
        e.hideSummary ? _("", !0) : (o(), X(V, {
          key: 0,
          status: (E = e.api) == null ? void 0 : E.error,
          except: s(L)
        }, null, 8, ["status", "except"])),
        n("div", {
          class: b(e.flexClass)
        }, [
          n("div", {
            class: b(e.divideClass)
          }, [
            n("div", {
              class: b(e.spaceClass)
            }, [
              n("fieldset", {
                class: b(e.fieldsetClass)
              }, [
                (o(!0), u(be, null, $e(s(x), (k) => {
                  var R, H, j;
                  return o(), u("div", {
                    key: "f.id",
                    class: b([
                      "w-full",
                      ((R = k.css) == null ? void 0 : R.field) ?? (k.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (k.type == "checkbox" ? " flex items-center" : "")),
                      k.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((H = k.prop) == null ? void 0 : H.ref) != null && k.type != "file" && !k.prop.isPrimaryKey ? (o(), X(A, {
                      key: 0,
                      metadataType: s(y),
                      input: k,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (D) => a(k, D),
                      status: (j = e.api) == null ? void 0 : j.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), X(B, {
                      key: 1,
                      input: k,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": C[0] || (C[0] = (D) => $.$emit("update:modelValue", D)),
                      api: e.api
                    }, null, 8, ["input", "modelValue", "api"]))
                  ], 2);
                }), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
});
function yl() {
  const e = P(!1), l = P(), t = P(), a = Oe("client");
  function i({ message: $, errorCode: C, fieldName: V, errors: A }) {
    return C || (C = "Exception"), A || (A = []), l.value = V ? new Ll({
      errorCode: C,
      message: $,
      errors: [new _n({ fieldName: V, errorCode: C, message: $ })]
    }) : new Ll({ errorCode: C, message: $, errors: A });
  }
  function r({ fieldName: $, message: C, errorCode: V }) {
    if (V || (V = "Exception"), !l.value)
      i({ fieldName: $, message: C, errorCode: V });
    else {
      let A = new Ll(l.value);
      A.errors = [
        ...(A.errors || []).filter((B) => {
          var E;
          return ((E = B.fieldName) == null ? void 0 : E.toLowerCase()) !== ($ == null ? void 0 : $.toLowerCase());
        }),
        new _n({ fieldName: $, message: C, errorCode: V })
      ], l.value = A;
    }
  }
  async function d($, C, V) {
    e.value = !0;
    let A = await a.api(kt($), C, V);
    return e.value = !1, t.value = A.response, l.value = A.error, A;
  }
  async function v($, C, V) {
    e.value = !0;
    let A = await a.apiVoid(kt($), C, V);
    return e.value = !1, t.value = A.response, l.value = A.error, A;
  }
  async function f($, C, V, A) {
    e.value = !0;
    let B = await a.apiForm(kt($), C, V, A);
    return e.value = !1, t.value = B.response, l.value = B.error, B;
  }
  async function m($, C, V, A) {
    e.value = !0;
    let B = await a.apiFormVoid(kt($), C, V, A);
    return e.value = !1, t.value = B.response, l.value = B.error, B;
  }
  function h($, C) {
    return Rt(`swr.${Ys($)}`, C ? Object.assign({}, $, C) : $);
  }
  function g($) {
    const C = ne.config.storage.getItem($);
    return C ? JSON.parse(C) : null;
  }
  async function y($, C, V, A) {
    const B = h($, V);
    C(new Ze({ response: g(B) }));
    const E = await a.api($, V, A);
    if (E.succeeded && E.response) {
      E.response._date = new Date().valueOf();
      const k = JSON.stringify(E.response);
      ne.config.storage.setItem(B, k), C(E);
    }
    return E;
  }
  function x($) {
    if ($.request) {
      const C = h($.request, $.args);
      ne.config.storage.removeItem(C);
    }
  }
  let L = { setError: i, addFieldError: r, loading: e, error: l, api: d, apiVoid: v, apiForm: f, apiFormVoid: m, swr: y, unRefs: kt, setRef: On, swrCacheKey: h, swrClear: x };
  return qt("ApiState", L), L;
}
const Uc = ["onSubmit"], qc = { key: 0 }, Qc = { key: 2 }, Kc = ["innerHTML"], Gc = /* @__PURE__ */ n("input", {
  type: "submit",
  class: "hidden"
}, null, -1), Wc = { class: "flex justify-end" }, Zc = /* @__PURE__ */ n("div", null, null, -1), Jc = /* @__PURE__ */ Y({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    configureField: null,
    bodyClass: null,
    formClass: { default: "shadow sm:rounded-md" },
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" }
  },
  emits: ["success", "error", "update:modelValue"],
  setup(e, { emit: l }) {
    const t = e;
    qt("ModalProvider", {
      openModal: d
    });
    const i = P(), r = P();
    function d(D, z) {
      i.value = D, r.value = z;
    }
    async function v(D) {
      r.value && r.value(D), i.value = void 0, r.value = void 0;
    }
    const f = yl(), { getTypeName: m } = Ra(), { typeOf: h, Crud: g, createDto: y } = Je(), x = P(new Ze()), L = c(() => typeof t.buttonsClass == "string" ? t.formClass : Ue.buttonsClass), $ = c(() => typeof t.headingClass == "string" ? t.formClass : ht.headingClass), C = c(() => typeof t.subHeadingClass == "string" ? t.subHeadingClass : ht.subHeadingClass), V = c(() => {
      var D;
      return t.type ? m(t.type) : (D = t.modelValue) != null && D.getTypeName ? t.modelValue.getTypeName() : null;
    }), A = c(() => h(V.value)), B = P(t.modelValue || R()), E = c(() => f.loading.value), k = c(() => {
      var D;
      return t.heading || ((D = h(V.value)) == null ? void 0 : D.description) || Ie(V.value);
    });
    function R() {
      return typeof t.type == "string" ? y(t.type) : t.type ? new t.type() : t.modelValue;
    }
    async function H(D) {
      let z = D.target;
      const K = R();
      let G = De(K == null ? void 0 : K.getMethod, (p) => typeof p == "function" ? p() : null) || "POST", te = De(K == null ? void 0 : K.createResponse, (p) => typeof p == "function" ? p() : null) == null;
      const F = t.jsconfig;
      if (Ul.hasRequestBody(G)) {
        let p = new K.constructor(), I = new FormData(z);
        console.debug("AutoForm.submitForm", p, I), te ? x.value = await f.apiFormVoid(p, I, { jsconfig: F }) : x.value = await f.apiForm(p, I, { jsconfig: F });
      } else {
        let p = new K.constructor(B.value);
        console.debug("AutoForm.submit", p), te ? x.value = await f.apiVoid(p, { jsconfig: F }) : x.value = await f.api(p, { jsconfig: F });
      }
      x.value.succeeded ? l("success", x.value.response) : l("error", x.value.error);
    }
    function j(D) {
      l("update:modelValue", D);
    }
    return (D, z) => {
      var p, I, le;
      const K = Q("AutoFormFields"), G = Q("FormLoading"), te = Q("PrimaryButton"), F = Q("ModalLookup");
      return s(A) ? (o(), u("form", {
        key: 0,
        onSubmit: je(H, ["prevent"]),
        autocomplete: "off",
        class: b(e.formClass)
      }, [
        n("div", {
          class: b(e.innerFormClass)
        }, [
          n("div", {
            class: b(e.bodyClass)
          }, [
            n("div", {
              class: b(e.headerClass)
            }, [
              D.$slots.heading ? (o(), u("div", qc, [
                Z(D.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: b(s($))
              }, S(s(k)), 3)),
              D.$slots.subheading ? (o(), u("div", Qc, [
                Z(D.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: b(s(C))
              }, S(e.subHeading), 3)) : (p = s(A)) != null && p.notes ? (o(), u("p", {
                key: 4,
                class: b(["notes", s(C)]),
                innerHTML: (I = s(A)) == null ? void 0 : I.notes
              }, null, 10, Kc)) : _("", !0)
            ], 2),
            Z(D.$slots, "header"),
            Gc,
            fe(K, {
              type: e.type,
              modelValue: B.value,
              "onUpdate:modelValue": j,
              api: x.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            Z(D.$slots, "footer")
          ], 2),
          Z(D.$slots, "buttons", {}, () => [
            n("div", {
              class: b(s(L))
            }, [
              n("div", null, [
                e.showLoading && s(E) ? (o(), X(G, { key: 0 })) : _("", !0)
              ]),
              n("div", Wc, [
                Zc,
                fe(te, null, {
                  default: ve(() => [
                    he(S(e.submitLabel), 1)
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ])
        ], 2),
        ((le = i.value) == null ? void 0 : le.name) == "ModalLookup" && i.value.ref ? (o(), X(F, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : _("", !0)
      ], 42, Uc)) : _("", !0);
    };
  }
}), Xc = { key: 0 }, Yc = { class: "text-red-700" }, e0 = /* @__PURE__ */ n("b", null, "type", -1), t0 = ["onSubmit"], l0 = { key: 0 }, n0 = { key: 2 }, s0 = ["innerHTML"], a0 = { class: "flex justify-end" }, o0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, i0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), r0 = { class: "fixed inset-0 overflow-hidden" }, u0 = ["onSubmit"], d0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, c0 = { class: "flex-1" }, f0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, m0 = { class: "flex items-start justify-between space-x-3" }, v0 = { class: "space-y-1" }, h0 = { key: 0 }, g0 = { key: 2 }, p0 = ["innerHTML"], y0 = { class: "flex h-7 items-center" }, b0 = { class: "flex justify-end" }, w0 = /* @__PURE__ */ Y({
  __name: "AutoCreateForm",
  props: {
    type: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    buttonsClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: null
  },
  emits: ["done", "save", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(T) {
    }
    qt("ModalProvider", {
      openModal: v
    });
    const r = P(), d = P();
    function v(T, O) {
      r.value = T, d.value = O;
    }
    async function f(T) {
      d.value && d.value(T), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, typeProperties: h, Crud: g, createDto: y, formValues: x } = Je(), L = c(() => Tt(t.type)), $ = c(() => m(L.value)), C = P(typeof t.type == "string" ? y(t.type) : t.type ? new t.type() : null), V = c(() => t.panelClass || Ue.panelClass(t.formStyle)), A = c(() => t.formClass || Ue.formClass(t.formStyle)), B = c(() => t.headingClass || Ue.headingClass(t.formStyle)), E = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), k = c(() => t.buttonsClass || Ue.buttonsClass), R = c(() => g.model($.value)), H = c(() => {
      var T;
      return t.heading || ((T = m(L.value)) == null ? void 0 : T.description) || (R.value ? `New ${Ie(R.value)}` : Ie(L.value));
    }), j = P(new Ze());
    let D = yl(), z = c(() => D.loading.value);
    async function K(T) {
      var se, U;
      let O = T.target;
      if (!t.autosave) {
        l("save", new C.value.constructor(x(O, h($.value))));
        return;
      }
      let ue = De((se = C.value) == null ? void 0 : se.getMethod, (J) => typeof J == "function" ? J() : null) || "POST", ie = De((U = C.value) == null ? void 0 : U.createResponse, (J) => typeof J == "function" ? J() : null) == null;
      if (Ul.hasRequestBody(ue)) {
        let J = new C.value.constructor(), pe = new FormData(O);
        ie ? j.value = await D.apiFormVoid(J, pe, { jsconfig: "eccn" }) : j.value = await D.apiForm(J, pe, { jsconfig: "eccn" });
      } else {
        let J = x(O, h($.value)), pe = new C.value.constructor(J);
        ie ? j.value = await D.apiVoid(pe, { jsconfig: "eccn" }) : j.value = await D.api(pe, { jsconfig: "eccn" });
      }
      j.value.succeeded ? (O.reset(), l("save", j.value.response)) : l("error", j.value.error);
    }
    function G() {
      l("done");
    }
    const te = P(!1), F = P(""), p = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(te, () => {
      Lt(p, F, te.value), te.value || setTimeout(G, 700);
    }), te.value = !0;
    function I() {
      t.formStyle == "slideOver" ? te.value = !1 : G();
    }
    const le = (T) => {
      T.key === "Escape" && I();
    };
    return lt(() => window.addEventListener("keydown", le)), Ut(() => window.removeEventListener("keydown", le)), (T, O) => {
      var _e, ae, Pe, Ae, ge;
      const ue = Q("AutoFormFields"), ie = Q("FormLoading"), se = Q("SecondaryButton"), U = Q("PrimaryButton"), J = Q("CloseButton"), pe = Q("ModalLookup");
      return o(), u("div", null, [
        s($) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: b(s(V))
        }, [
          n("form", {
            onSubmit: je(K, ["prevent"])
          }, [
            n("div", {
              class: b(s(A))
            }, [
              n("div", null, [
                T.$slots.heading ? (o(), u("div", l0, [
                  Z(T.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: b(s(B))
                }, S(s(H)), 3)),
                T.$slots.subheading ? (o(), u("div", n0, [
                  Z(T.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: b(s(E))
                }, S(e.subHeading), 3)) : (_e = s($)) != null && _e.notes ? (o(), u("p", {
                  key: 4,
                  class: b(["notes", s(E)]),
                  innerHTML: (ae = s($)) == null ? void 0 : ae.notes
                }, null, 10, s0)) : _("", !0)
              ]),
              Z(T.$slots, "header"),
              fe(ue, {
                modelValue: C.value,
                "onUpdate:modelValue": a,
                api: j.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(T.$slots, "footer")
            ], 2),
            n("div", {
              class: b(s(k))
            }, [
              n("div", null, [
                e.showLoading && s(z) ? (o(), X(ie, { key: 0 })) : _("", !0)
              ]),
              n("div", a0, [
                e.showCancel ? (o(), X(se, {
                  key: 0,
                  onClick: I,
                  disabled: s(z)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : _("", !0),
                fe(U, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(z)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, t0)
        ], 2)) : (o(), u("div", o0, [
          i0,
          n("div", r0, [
            n("div", {
              onMousedown: I,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: O[0] || (O[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", F.value])
                }, [
                  n("form", {
                    class: b(s(A)),
                    onSubmit: je(K, ["prevent"])
                  }, [
                    n("div", d0, [
                      n("div", c0, [
                        n("div", f0, [
                          n("div", m0, [
                            n("div", v0, [
                              T.$slots.heading ? (o(), u("div", h0, [
                                Z(T.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: b(s(B))
                              }, S(s(H)), 3)),
                              T.$slots.subheading ? (o(), u("div", g0, [
                                Z(T.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: b(s(E))
                              }, S(e.subHeading), 3)) : (Pe = s($)) != null && Pe.notes ? (o(), u("p", {
                                key: 4,
                                class: b(["notes", s(E)]),
                                innerHTML: (Ae = s($)) == null ? void 0 : Ae.notes
                              }, null, 10, p0)) : _("", !0)
                            ]),
                            n("div", y0, [
                              fe(J, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: I
                              })
                            ])
                          ])
                        ]),
                        Z(T.$slots, "header"),
                        fe(ue, {
                          modelValue: C.value,
                          "onUpdate:modelValue": a,
                          api: j.value,
                          configureField: e.configureField
                        }, null, 8, ["modelValue", "api", "configureField"]),
                        Z(T.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: b(s(k))
                    }, [
                      n("div", null, [
                        e.showLoading && s(z) ? (o(), X(ie, { key: 0 })) : _("", !0)
                      ]),
                      n("div", b0, [
                        e.showCancel ? (o(), X(se, {
                          key: 0,
                          onClick: I,
                          disabled: s(z)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : _("", !0),
                        fe(U, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(z)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, u0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", Xc, [
          n("p", Yc, [
            he("Could not create form for unknown "),
            e0,
            he(" " + S(s(L)), 1)
          ])
        ])),
        ((ge = r.value) == null ? void 0 : ge.name) == "ModalLookup" && r.value.ref ? (o(), X(pe, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : _("", !0)
      ]);
    };
  }
}), x0 = { key: 0 }, k0 = { class: "text-red-700" }, $0 = /* @__PURE__ */ n("b", null, "type", -1), C0 = ["onSubmit"], _0 = { key: 0 }, L0 = { key: 2 }, V0 = ["innerHTML"], M0 = { class: "flex justify-end" }, S0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, A0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), T0 = { class: "fixed inset-0 overflow-hidden" }, I0 = ["onSubmit"], F0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, P0 = { class: "flex-1" }, D0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, O0 = { class: "flex items-start justify-between space-x-3" }, j0 = { class: "space-y-1" }, B0 = { key: 0 }, R0 = { key: 2 }, E0 = ["innerHTML"], H0 = { class: "flex h-7 items-center" }, N0 = { class: "flex justify-end" }, z0 = /* @__PURE__ */ Y({
  __name: "AutoEditForm",
  props: {
    modelValue: null,
    type: null,
    deleteType: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(U) {
    }
    qt("ModalProvider", {
      openModal: v
    });
    const r = P(), d = P();
    function v(U, J) {
      r.value = U, d.value = J;
    }
    async function f(U) {
      d.value && d.value(U), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, apiOf: h, typeProperties: g, createFormLayout: y, getPrimaryKey: x, Crud: L, createDto: $, formValues: C } = Je(), V = c(() => Tt(t.type)), A = c(() => m(V.value)), B = P(typeof t.type == "string" ? $(t.type, nl(t.modelValue)) : t.type ? new t.type(nl(t.modelValue)) : null), E = c(() => t.panelClass || Ue.panelClass(t.formStyle)), k = c(() => t.formClass || Ue.formClass(t.formStyle)), R = c(() => t.headingClass || Ue.headingClass(t.formStyle)), H = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), j = c(() => L.model(A.value)), D = c(() => {
      var U;
      return t.heading || ((U = m(V.value)) == null ? void 0 : U.description) || (j.value ? `Update ${Ie(j.value)}` : Ie(V.value));
    }), z = P(new Ze());
    let K = yl(), G = c(() => K.loading.value);
    const te = () => De(m(L.model(A.value)), (U) => x(U));
    function F(U) {
      const { op: J, prop: pe } = U;
      J && (L.isPatch(J) || L.isUpdate(J)) && (U.disabled = pe == null ? void 0 : pe.isPrimaryKey), t.configureField && t.configureField(U);
    }
    async function p(U) {
      var Pe, Ae;
      let J = U.target;
      if (!t.autosave) {
        l("save", new B.value.constructor(C(J, g(A.value))));
        return;
      }
      let pe = De((Pe = B.value) == null ? void 0 : Pe.getMethod, (ge) => typeof ge == "function" ? ge() : null) || "POST", _e = De((Ae = B.value) == null ? void 0 : Ae.createResponse, (ge) => typeof ge == "function" ? ge() : null) == null, ae = te();
      if (Ul.hasRequestBody(pe)) {
        let ge = new B.value.constructor(), Re = ce(t.modelValue, ae.name), Me = new FormData(J);
        ae && !Array.from(Me.keys()).some((N) => N.toLowerCase() == ae.name.toLowerCase()) && Me.append(ae.name, Re);
        let Ne = [];
        const Xe = V.value && h(V.value);
        if (Xe && L.isPatch(Xe)) {
          let N = nl(t.modelValue), q = y(A.value), re = {};
          if (ae && (re[ae.name] = Re), q.forEach((we) => {
            let Fe = we.id, qe = ce(N, Fe);
            if (ae && ae.name.toLowerCase() === Fe.toLowerCase())
              return;
            let ke = Me.get(Fe), Ee = ke != null, Qe = we.type === "checkbox" ? Ee !== !!qe : we.type === "file" ? Ee : ke != qe;
            !ke && !qe && (Qe = !1), Qe && (ke ? re[Fe] = ke : we.type !== "file" && Ne.push(Fe));
          }), Array.from(Me.keys()).filter((we) => !re[we]).forEach((we) => Me.delete(we)), Array.from(Me.keys()).filter((we) => we.toLowerCase() != ae.name.toLowerCase()).length == 0 && Ne.length == 0) {
            ie();
            return;
          }
        }
        const ze = Ne.length > 0 ? { jsconfig: "eccn", reset: Ne } : { jsconfig: "eccn" };
        _e ? z.value = await K.apiFormVoid(ge, Me, ze) : z.value = await K.apiForm(ge, Me, ze);
      } else {
        let ge = C(J, g(A.value));
        ae && !ce(ge, ae.name) && (ge[ae.name] = ce(t.modelValue, ae.name));
        let Re = new B.value.constructor(ge);
        _e ? z.value = await K.apiVoid(Re, { jsconfig: "eccn" }) : z.value = await K.api(Re, { jsconfig: "eccn" });
      }
      z.value.succeeded ? (J.reset(), l("save", z.value.response)) : l("error", z.value.error);
    }
    async function I(U) {
      let J = te();
      const pe = J ? ce(t.modelValue, J.name) : null;
      if (!pe) {
        console.error(`Could not find Primary Key for Type ${V.value} (${j.value})`);
        return;
      }
      const _e = { [J.name]: pe }, ae = typeof t.deleteType == "string" ? $(t.deleteType, _e) : t.deleteType ? new t.deleteType(_e) : null;
      De(ae.createResponse, (Ae) => typeof Ae == "function" ? Ae() : null) == null ? z.value = await K.apiVoid(ae) : z.value = await K.api(ae), z.value.succeeded ? l("delete", z.value.response) : l("error", z.value.error);
    }
    function le() {
      l("done");
    }
    const T = P(!1), O = P(""), ue = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(T, () => {
      Lt(ue, O, T.value), T.value || setTimeout(le, 700);
    }), T.value = !0;
    function ie() {
      t.formStyle == "slideOver" ? T.value = !1 : le();
    }
    const se = (U) => {
      U.key === "Escape" && ie();
    };
    return lt(() => window.addEventListener("keydown", se)), Ut(() => window.removeEventListener("keydown", se)), (U, J) => {
      var Me, Ne, Xe, ze, N;
      const pe = Q("AutoFormFields"), _e = Q("ConfirmDelete"), ae = Q("FormLoading"), Pe = Q("SecondaryButton"), Ae = Q("PrimaryButton"), ge = Q("CloseButton"), Re = Q("ModalLookup");
      return o(), u("div", null, [
        s(A) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: b(s(E))
        }, [
          n("form", {
            onSubmit: je(p, ["prevent"])
          }, [
            n("div", {
              class: b(s(k))
            }, [
              n("div", null, [
                U.$slots.heading ? (o(), u("div", _0, [
                  Z(U.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: b(s(R))
                }, S(s(D)), 3)),
                U.$slots.subheading ? (o(), u("div", L0, [
                  Z(U.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: b(s(H))
                }, S(e.subHeading), 3)) : (Me = s(A)) != null && Me.notes ? (o(), u("p", {
                  key: 4,
                  class: b(["notes", s(H)]),
                  innerHTML: (Ne = s(A)) == null ? void 0 : Ne.notes
                }, null, 10, V0)) : _("", !0)
              ]),
              Z(U.$slots, "header"),
              fe(pe, {
                modelValue: B.value,
                "onUpdate:modelValue": a,
                api: z.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(U.$slots, "footer")
            ], 2),
            n("div", {
              class: b(s(Ue).buttonsClass)
            }, [
              n("div", null, [
                e.deleteType ? (o(), X(_e, {
                  key: 0,
                  onDelete: I
                })) : _("", !0)
              ]),
              n("div", null, [
                e.showLoading && s(G) ? (o(), X(ae, { key: 0 })) : _("", !0)
              ]),
              n("div", M0, [
                fe(Pe, {
                  onClick: ie,
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                fe(Ae, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, C0)
        ], 2)) : (o(), u("div", S0, [
          A0,
          n("div", T0, [
            n("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: J[0] || (J[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", O.value])
                }, [
                  n("form", {
                    class: b(s(k)),
                    onSubmit: je(p, ["prevent"])
                  }, [
                    n("div", F0, [
                      n("div", P0, [
                        n("div", D0, [
                          n("div", O0, [
                            n("div", j0, [
                              U.$slots.heading ? (o(), u("div", B0, [
                                Z(U.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: b(s(R))
                              }, S(s(D)), 3)),
                              U.$slots.subheading ? (o(), u("div", R0, [
                                Z(U.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: b(s(H))
                              }, S(e.subHeading), 3)) : (Xe = s(A)) != null && Xe.notes ? (o(), u("p", {
                                key: 4,
                                class: b(["notes", s(H)]),
                                innerHTML: (ze = s(A)) == null ? void 0 : ze.notes
                              }, null, 10, E0)) : _("", !0)
                            ]),
                            n("div", H0, [
                              fe(ge, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        Z(U.$slots, "header"),
                        fe(pe, {
                          modelValue: B.value,
                          "onUpdate:modelValue": a,
                          api: z.value,
                          configureField: F
                        }, null, 8, ["modelValue", "api"]),
                        Z(U.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: b(s(Ue).buttonsClass)
                    }, [
                      n("div", null, [
                        e.deleteType ? (o(), X(_e, {
                          key: 0,
                          onDelete: I
                        })) : _("", !0)
                      ]),
                      n("div", null, [
                        e.showLoading && s(G) ? (o(), X(ae, { key: 0 })) : _("", !0)
                      ]),
                      n("div", N0, [
                        fe(Pe, {
                          onClick: ie,
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        fe(Ae, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, I0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", x0, [
          n("p", k0, [
            he("Could not create form for unknown "),
            $0,
            he(" " + S(s(V)), 1)
          ])
        ])),
        ((N = r.value) == null ? void 0 : N.name) == "ModalLookup" && r.value.ref ? (o(), X(Re, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : _("", !0)
      ]);
    };
  }
}), U0 = /* @__PURE__ */ n("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), q0 = ["onClick"], Q0 = /* @__PURE__ */ Y({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: l }) {
    let t = P(!1);
    const a = () => {
      t.value && l("delete");
    }, i = c(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      t.value ? "cursor-pointer bg-red-600 dark:bg-red-300 hover:bg-red-700 dark:hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400 dark:bg-red-500"
    ]);
    return (r, d) => (o(), u(be, null, [
      gt(n("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (v) => An(t) ? t.value = v : t = v)
      }, null, 512), [
        [Hl, s(t)]
      ]),
      U0,
      n("span", Ce({
        onClick: je(a, ["prevent"]),
        class: s(i)
      }, r.$attrs), [
        Z(r.$slots, "default", {}, () => [
          he("Delete")
        ])
      ], 16, q0)
    ], 64));
  }
}), K0 = {
  class: "flex",
  title: "loading..."
}, G0 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, W0 = /* @__PURE__ */ dl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), Z0 = [
  W0
], J0 = { class: "ml-2 mt-1 text-gray-400" }, X0 = /* @__PURE__ */ Y({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Oe("ApiState", void 0), (l, t) => (o(), u("div", K0, [
      e.icon ? (o(), u("svg", G0, Z0)) : _("", !0),
      n("span", J0, S(e.text), 1)
    ]));
  }
}), Y0 = ["onClick"], ef = {
  key: 3,
  class: "flex justify-between items-center"
}, tf = { class: "mr-1 select-none" }, lf = ["onClick"], nf = /* @__PURE__ */ Y({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: null,
    tableStyle: { default: "stripedRows" },
    selectedColumns: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    isSelected: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: l }) {
    const t = e, a = P(), i = P(null), r = (T) => i.value === T, d = Nl(), v = (T) => Object.keys(d).find((O) => O.toLowerCase() == T.toLowerCase() + "-header"), f = (T) => Object.keys(d).find((O) => O.toLowerCase() == T.toLowerCase()), m = c(() => Il(t.items).filter((T) => !!(d[T] || d[T + "-header"]))), { typeOf: h, typeProperties: g } = Je(), y = c(() => Tt(t.type)), x = c(() => h(y.value)), L = c(() => g(x.value));
    function $(T) {
      const O = t.headerTitles && ce(t.headerTitles, T) || T;
      return t.headerTitle ? t.headerTitle(O) : Fn(O);
    }
    function C(T) {
      const O = T.toLowerCase();
      return L.value.find((ue) => ue.name.toLowerCase() == O);
    }
    function V(T) {
      const O = C(T);
      return O != null && O.format ? O.format : (O == null ? void 0 : O.type) == "TimeSpan" || (O == null ? void 0 : O.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const A = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function B(T) {
      const O = t.visibleFrom && ce(t.visibleFrom, T);
      return O && De(A[O], (ue) => `hidden ${ue}`);
    }
    const E = c(() => t.gridClass ?? oe.getGridClass(t.tableStyle)), k = c(() => t.grid2Class ?? oe.getGrid2Class(t.tableStyle)), R = c(() => t.grid3Class ?? oe.getGrid3Class(t.tableStyle)), H = c(() => t.grid4Class ?? oe.getGrid4Class(t.tableStyle)), j = c(() => t.tableClass ?? oe.getTableClass(t.tableStyle)), D = c(() => t.tbodyClass ?? oe.getTbodyClass(t.tbodyClass)), z = c(() => t.theadClass ?? oe.getTheadClass(t.tableStyle)), K = c(() => t.theadRowClass ?? oe.getTheadRowClass(t.tableStyle)), G = c(() => t.theadCellClass ?? oe.getTheadCellClass(t.tableStyle));
    function te(T, O) {
      return t.rowClass ? t.rowClass(T, O) : oe.getTableRowClass(t.tableStyle, O, !!(t.isSelected && t.isSelected(T)), t.isSelected != null);
    }
    function F(T, O) {
      return t.rowStyle ? t.rowStyle(T, O) : void 0;
    }
    const p = c(() => {
      const T = (typeof t.selectedColumns == "string" ? t.selectedColumns.split(",") : t.selectedColumns) || (m.value.length > 0 ? m.value : Il(t.items)), O = L.value.reduce((ue, ie) => (ue[ie.name.toLowerCase()] = ie.format, ue), {});
      return T.filter((ue) => {
        var ie;
        return ((ie = O[ue.toLowerCase()]) == null ? void 0 : ie.method) != "hidden";
      });
    });
    function I(T, O) {
      l("headerSelected", O, T);
    }
    function le(T, O, ue) {
      l("rowSelected", ue, T);
    }
    return (T, O) => {
      const ue = Q("CellFormat"), ie = Q("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: b(s(E))
      }, [
        n("div", {
          class: b(s(k))
        }, [
          n("div", {
            class: b(s(R))
          }, [
            n("div", {
              class: b(s(H))
            }, [
              n("table", {
                class: b(s(j))
              }, [
                n("thead", {
                  class: b(s(z))
                }, [
                  n("tr", {
                    class: b(s(K))
                  }, [
                    (o(!0), u(be, null, $e(s(p), (se) => (o(), u("td", {
                      class: b([B(se), s(G), r(se) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      n("div", {
                        onClick: (U) => I(U, se)
                      }, [
                        s(d)[se + "-header"] ? Z(T.$slots, se + "-header", {
                          key: 0,
                          column: se
                        }) : v(se) ? Z(T.$slots, v(se), {
                          key: 1,
                          column: se
                        }) : s(d).header ? Z(T.$slots, "header", {
                          key: 2,
                          column: se,
                          label: $(se)
                        }) : (o(), u("div", ef, [
                          n("span", tf, S($(se)), 1)
                        ]))
                      ], 8, Y0)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                n("tbody", {
                  class: b(s(D))
                }, [
                  (o(!0), u(be, null, $e(e.items, (se, U) => (o(), u("tr", {
                    class: b(te(se, U)),
                    style: El(F(se, U)),
                    onClick: (J) => le(J, U, se)
                  }, [
                    (o(!0), u(be, null, $e(s(p), (J) => (o(), u("td", {
                      class: b([B(J), s(oe).tableCellClass])
                    }, [
                      s(d)[J] ? Z(T.$slots, J, _t(Ce({ key: 0 }, se))) : f(J) ? Z(T.$slots, f(J), _t(Ce({ key: 1 }, se))) : C(J) ? (o(), X(ue, {
                        key: 2,
                        type: s(x),
                        propType: C(J),
                        modelValue: se
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), X(ie, {
                        key: 3,
                        value: s(ce)(se, J),
                        format: V(J)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, lf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : _("", !0);
    };
  }
});
let Rl = () => new Date().getTime(), sf = ["/", "T", ":", "-"], tt = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, af = new Intl.RelativeTimeFormat(tt.locale, {}), Sn = 24 * 60 * 60 * 1e3 * 365, Vl = {
  year: Sn,
  month: Sn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, $t = {
  currency: os,
  bytes: is,
  link: rs,
  linkTel: us,
  linkMailTo: ds,
  icon: cs,
  iconRounded: fs,
  attachment: ms,
  hidden: vs,
  time: hs,
  relativeTime: cn,
  relativeTimeFromMs: bl,
  formatDate: It,
  formatNumber: dn
};
"iconOnError" in globalThis || (globalThis.iconOnError = hl);
class Be {
}
ye(Be, "currency", { method: "currency" }), ye(Be, "bytes", { method: "bytes" }), ye(Be, "link", { method: "link" }), ye(Be, "linkTel", { method: "linkTel" }), ye(Be, "linkMailTo", { method: "linkMailTo" }), ye(Be, "icon", { method: "icon" }), ye(Be, "iconRounded", { method: "iconRounded" }), ye(Be, "attachment", { method: "attachment" }), ye(Be, "time", { method: "time" }), ye(Be, "relativeTime", { method: "relativeTime" }), ye(Be, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), ye(Be, "date", { method: "formatDate" }), ye(Be, "number", { method: "formatNumber" }), ye(Be, "hidden", { method: "hidden" });
function of(e) {
  tt = Object.assign({}, tt, e);
}
function rf(e) {
  Object.keys(e || {}).forEach((l) => {
    typeof e[l] == "function" && ($t[l] = e[l]);
  });
}
function Gt(e, l) {
  return l ? et("span", e, l) : e;
}
function os(e, l) {
  const t = nt(l, ["currency"]);
  return Gt(new Intl.NumberFormat(void 0, { style: "currency", currency: (l == null ? void 0 : l.currency) || "USD" }).format(e), t);
}
function is(e, l) {
  return Gt(Xl(e), l);
}
function rs(e, l) {
  return et("a", e, vl({ ...l, href: e }));
}
function us(e, l) {
  return et("a", e, vl({ ...l, href: `tel:${e}` }));
}
function ds(e, l) {
  l || (l = {});
  let { subject: t, body: a } = l, i = nt(l, ["subject", "body"]), r = {};
  return t && (r.subject = t), a && (r.body = a), et("a", e, vl({ ...i, href: `mailto:${Rt(e, r)}` }));
}
function cs(e, l) {
  return et("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function fs(e, l) {
  return et("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function ms(e, l) {
  let t = Wl(e), i = Qt(t) == null || Jl(e) ? Ct(e) : Yl(e);
  const r = Ct(i);
  let d = l && (l["icon-class"] || l.iconClass), v = et("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), f = `<span class="pl-1">${t}</span>`;
  return et("a", v + f, Object.assign({ class: "flex", href: Ct(e), title: e }, l ? nt(l, ["icon-class", "iconClass"]) : null));
}
function vs(e) {
  return "";
}
function hs(e, l) {
  let t = typeof e == "string" ? new Date(Pn(e) * 1e3) : fl(e) ? bt(e) : null;
  return Gt(t ? ea(t) : e, l);
}
function It(e, l) {
  if (e == null)
    return "";
  let t = typeof e == "number" ? new Date(e) : typeof e == "string" ? bt(e) : e;
  if (!fl(t))
    return console.warn(`${t} is not a Date value`), e == null ? "" : `${e}`;
  let a = tt.date ? wl(tt.date) : null;
  return Gt(typeof a == "function" ? a(t) : Tn(t), l);
}
function dn(e, l) {
  if (typeof e != "number")
    return e;
  let t = tt.number ? wl(tt.number) : null, a = typeof t == "function" ? t(e) : `${e}`;
  return a === "" && (console.warn(`formatNumber(${e}) => ${a}`, t), a = `${e}`), Gt(a, l);
}
function gs(e, l, t) {
  let a = ta(e), i = l ? wl(l) : null;
  if (typeof i == "function") {
    let d = t;
    if (l != null && l.options)
      try {
        d = Ql(l.options, t);
      } catch (v) {
        console.error(`Could not evaluate '${l.options}'`, v, ", with scope:", t);
      }
    return i(e, d);
  }
  let r = a != null ? fl(a) ? It(a, t) : typeof a == "number" ? dn(a, t) : a : null;
  return r ?? "";
}
function zt(e, l, t) {
  return yt(e) ? gs(e, l, t) : mf(e, l, t);
}
function uf(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (fl(e))
    return e.getTime() - Rl();
  if (typeof e == "string") {
    let l = Number(e);
    if (!isNaN(l))
      return l;
    if (e[0] === "P" || e.startsWith("-P"))
      return Pn(e) * 1e3 * -1;
    if (la(e, sf) >= 0)
      return bt(e).getTime() - Rl();
  }
  return NaN;
}
function bl(e, l) {
  for (let t in Vl)
    if (Math.abs(e) > Vl[t] || t === "second")
      return (l || af).format(Math.round(e / Vl[t]), t);
}
function cn(e, l) {
  let t = uf(e);
  return isNaN(t) ? "" : bl(t, l);
}
function df(e, l) {
  return bl(e.getTime() - (l ? l.getTime() : Rl()));
}
function wl(e) {
  if (!e)
    return null;
  let { method: l, options: t } = e, a = `${l}(${t})`, i = $t[a] || $t[l];
  if (typeof i == "function")
    return i;
  let r = e.locale || tt.locale;
  if (l.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", v = `return new ${l}(${d},${t || "undefined"})`;
    try {
      let f = Function(v)();
      return i = l === "Intl.DateTimeFormat" ? (m) => f.format(bt(m)) : l === "Intl.NumberFormat" ? (m) => f.format(Number(m)) : l === "Intl.RelativeTimeFormat" ? (m) => cn(m, f) : (m) => f.format(m), $t[a] = i;
    } catch (f) {
      console.error(`Invalid format: ${v}`, f);
    }
  } else {
    let d = globalThis[l];
    if (typeof d == "function") {
      let v = t != null ? Function("return " + t)() : void 0;
      return i = (f) => d(f, v, r), $t[a] = i;
    }
    console.error(`No '${l}' function exists`, Object.keys($t));
  }
  return null;
}
function ps(e, l) {
  return e ? e.length > l ? e.substring(0, l) + "..." : e : "";
}
function ys(e) {
  return e.substring(0, 6) === "/Date(" ? It(bt(e)) : e;
}
function cf(e) {
  return fn(St(e)).replace(/"/g, "");
}
function bs(e) {
  if (e == null || e === "")
    return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function fn(e, l = 4) {
  return e = bs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, l);
}
function ff(e) {
  return e = bs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = St(e), fn(e));
}
function St(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return ys(e);
  if (yt(e))
    return e;
  if (e instanceof Date)
    return It(e);
  if (Array.isArray(e))
    return e.map(St);
  if (typeof e == "object") {
    let l = {};
    return Object.keys(e).forEach((t) => {
      t != "__type" && (l[t] = St(e[t]));
    }), l;
  }
  return e;
}
function mf(e, l, t) {
  let a = e;
  if (Array.isArray(e)) {
    if (yt(e[0]))
      return a.join(",");
    e[0] != null && (a = e[0]);
  }
  if (a == null)
    return "";
  if (a instanceof Date)
    return It(a, t);
  let i = Object.keys(a), r = [];
  for (let d = 0; d < Math.min(tt.maxNestedFields, i.length); d++) {
    let v = i[d], f = `${St(a[v])}`;
    r.push(`<b class="font-medium">${v}</b>: ${Al(ps(ys(f), tt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), et("span", "{ " + r.join(", ") + " }", Object.assign({ title: Al(cf(e)) }, t));
}
function Fm() {
  return {
    Formats: Be,
    setDefaultFormats: of,
    setFormatters: rf,
    formatValue: zt,
    formatter: wl,
    dateInputFormat: ml,
    currency: os,
    bytes: is,
    link: rs,
    linkTel: us,
    linkMailTo: ds,
    icon: cs,
    iconRounded: fs,
    attachment: ms,
    hidden: vs,
    time: hs,
    relativeTime: cn,
    relativeTimeFromDate: df,
    relativeTimeFromMs: bl,
    formatDate: It,
    formatNumber: dn,
    indentJson: fn,
    prettyJson: ff,
    scrub: St,
    truncate: ps,
    apiValueFmt: gs,
    iconOnError: hl
  };
}
const vf = Y({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: l }) {
    const { typeOf: t } = Je();
    function a(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var V;
      const i = a(e.propType), r = ce(e.modelValue, e.propType.name), d = Object.assign({}, e, l), v = ft("span", { innerHTML: zt(r, i, d) }), f = Et(r) && Array.isArray(r) ? ft("span", {}, [
        ft("span", { class: "mr-2" }, `${r.length}`),
        v
      ]) : v, m = (V = e.propType) == null ? void 0 : V.ref;
      if (!m)
        return f;
      const g = Ke(e.type).find((A) => A.type === m.model);
      if (!g)
        return f;
      const y = ce(e.modelValue, g.name), x = y && m.refLabel && ce(y, m.refLabel);
      if (!x)
        return f;
      const L = t(m.model), $ = L == null ? void 0 : L.icon, C = $ ? ft(ls, { image: $, class: "w-5 h-5 mr-1" }) : null;
      return ft("span", { class: "flex", title: `${m.model} ${r}` }, [
        C,
        x
      ]);
    };
  }
}), hf = { key: 0 }, gf = {
  key: 0,
  class: "mr-2"
}, pf = ["innerHTML"], yf = ["innerHTML"], bf = {
  inheritAttrs: !1
}, wf = /* @__PURE__ */ Y({
  ...bf,
  __name: "PreviewFormat",
  props: {
    value: null,
    format: null,
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const l = e, t = c(() => Array.isArray(l.value));
    return (a, i) => s(Et)(e.value) ? (o(), u("span", hf, [
      e.includeCount && s(t) ? (o(), u("span", gf, S(e.value.length), 1)) : _("", !0),
      n("span", {
        innerHTML: s(zt)(e.value, e.format, a.$attrs)
      }, null, 8, pf)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: s(zt)(e.value, e.format, a.$attrs)
    }, null, 8, yf));
  }
}), xf = ["innerHTML"], kf = { key: 0 }, $f = /* @__PURE__ */ n("b", null, null, -1), Cf = { key: 2 }, _f = /* @__PURE__ */ Y({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, l, t, a, i) => a }
  },
  setup(e) {
    const l = e, t = c(() => yt(l.value)), a = c(() => Array.isArray(l.value)), i = (f) => Fn(f), r = (f) => l.fieldAttrs ? l.fieldAttrs(f) : null, d = c(() => Il(l.value)), v = (f) => f ? Object.keys(f).map((m) => ({ key: i(m), val: f[m] })) : [];
    return (f, m) => {
      const h = Q("HtmlFormat", !0);
      return o(), u("div", {
        class: b(e.depth == 0 ? "prose html-format" : "")
      }, [
        s(t) ? (o(), u("div", {
          key: 0,
          innerHTML: s(zt)(e.value)
        }, null, 8, xf)) : s(a) ? (o(), u("div", {
          key: 1,
          class: b(e.classes("array", "div", e.depth, s(oe).gridClass))
        }, [
          s(yt)(e.value[0]) ? (o(), u("div", kf, "[ " + S(e.value.join(", ")) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: b(e.classes("array", "div", e.depth, s(oe).grid2Class))
          }, [
            n("div", {
              class: b(e.classes("array", "div", e.depth, s(oe).grid3Class))
            }, [
              n("div", {
                class: b(e.classes("array", "div", e.depth, s(oe).grid4Class))
              }, [
                n("table", {
                  class: b(e.classes("object", "table", e.depth, s(oe).tableClass))
                }, [
                  n("thead", {
                    class: b(e.classes("array", "thead", e.depth, s(oe).theadClass))
                  }, [
                    n("tr", null, [
                      (o(!0), u(be, null, $e(s(d), (g) => (o(), u("th", {
                        class: b(e.classes("array", "th", e.depth, s(oe).theadCellClass + " whitespace-nowrap"))
                      }, [
                        $f,
                        he(S(i(g)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  n("tbody", null, [
                    (o(!0), u(be, null, $e(e.value, (g, y) => (o(), u("tr", {
                      class: b(e.classes("array", "tr", e.depth, y % 2 == 0 ? "bg-white" : "bg-gray-50", y))
                    }, [
                      (o(!0), u(be, null, $e(s(d), (x) => (o(), u("td", {
                        class: b(e.classes("array", "td", e.depth, s(oe).tableCellClass))
                      }, [
                        fe(h, Ce({
                          value: g[x],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(x)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (o(), u("div", Cf, [
          n("table", {
            class: b(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(be, null, $e(v(e.value), (g) => (o(), u("tr", {
              class: b(e.classes("object", "tr", e.depth, ""))
            }, [
              n("th", {
                class: b(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, S(g.key), 3),
              n("td", {
                class: b(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                fe(h, Ce({
                  value: g.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(g.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), Lf = { class: "absolute top-0 right-0 pt-4 pr-4" }, Vf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), Mf = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Sf = [
  Vf,
  Mf
], Af = /* @__PURE__ */ Y({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    return (t, a) => (o(), u("div", Lf, [
      n("button", {
        type: "button",
        onClick: a[0] || (a[0] = (i) => t.$emit("close")),
        class: b([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Sf, 2)
    ]));
  }
}), Tf = ["id", "aria-labelledby"], If = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), Ff = { class: "fixed inset-0 overflow-hidden" }, Pf = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Df = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Of = { class: "flex-1" }, jf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Bf = { class: "flex items-start justify-between space-x-3" }, Rf = { class: "space-y-1" }, Ef = ["id"], Hf = {
  key: 1,
  class: "text-sm text-gray-500"
}, Nf = { class: "flex h-7 items-center" }, zf = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, Uf = /* @__PURE__ */ Y({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = P(!1), a = P(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(t, () => {
      Lt(i, a, t.value), t.value || setTimeout(() => l("done"), 700);
    }), t.value = !0;
    const r = () => t.value = !1, d = (v) => {
      v.key === "Escape" && r();
    };
    return lt(() => window.addEventListener("keydown", d)), Ut(() => window.removeEventListener("keydown", d)), (v, f) => {
      const m = Q("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        If,
        n("div", Ff, [
          n("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            n("div", {
              onMousedown: f[0] || (f[0] = je(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              n("div", {
                class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                n("div", Pf, [
                  n("div", Df, [
                    n("div", Of, [
                      n("div", jf, [
                        n("div", Bf, [
                          n("div", Rf, [
                            e.title ? (o(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, S(e.title), 9, Ef)) : _("", !0),
                            v.$slots.subtitle ? (o(), u("p", Hf, [
                              Z(v.$slots, "subtitle")
                            ])) : _("", !0)
                          ]),
                          n("div", Nf, [
                            fe(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      n("div", {
                        class: b(e.contentClass)
                      }, [
                        Z(v.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  n("div", zf, [
                    Z(v.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Tf);
    };
  }
}), qf = ["id", "data-transition-for", "aria-labelledby"], Qf = { class: "fixed inset-0 z-10 overflow-y-auto" }, Kf = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Gf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), Wf = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Zf = [
  Gf,
  Wf
], Jf = /* @__PURE__ */ Y({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    sizeClass: { default: ns.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = P(!1), a = P(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = P(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    At(t, () => {
      Lt(i, a, t.value), Lt(d, r, t.value), t.value || setTimeout(() => l("done"), 200);
    }), t.value = !0;
    const v = () => t.value = !1;
    qt("ModalProvider", {
      openModal: g
    });
    const m = P(), h = P();
    function g(L, $) {
      m.value = L, h.value = $;
    }
    async function y(L) {
      h.value && h.value(L), m.value = void 0, h.value = void 0;
    }
    const x = (L) => {
      L.key === "Escape" && v();
    };
    return lt(() => window.addEventListener("keydown", x)), Ut(() => window.removeEventListener("keydown", x)), (L, $) => {
      var V;
      const C = Q("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: v,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        n("div", {
          class: b(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        n("div", Qf, [
          n("div", Kf, [
            n("div", {
              class: b(["relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8", e.sizeClass, r.value]),
              onMousedown: $[0] || ($[0] = je(() => {
              }, ["stop"]))
            }, [
              n("div", null, [
                n("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  n("button", {
                    type: "button",
                    onClick: v,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, Zf)
                ]),
                Z(L.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((V = m.value) == null ? void 0 : V.name) == "ModalLookup" && m.value.ref ? (o(), X(C, {
          key: 0,
          "ref-info": m.value.ref,
          onDone: y
        }, null, 8, ["ref-info"])) : _("", !0)
      ], 40, qf);
    };
  }
}), Xf = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Yf = { class: "mt-3 pl-5 flex flex-wrap items-center" }, e1 = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, t1 = { class: "hidden md:inline" }, l1 = { class: "flex pb-1 sm:pb-0" }, n1 = ["title"], s1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), a1 = [
  s1
], o1 = ["disabled"], i1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), r1 = [
  i1
], u1 = ["disabled"], d1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), c1 = [
  d1
], f1 = ["disabled"], m1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), v1 = [
  m1
], h1 = ["disabled"], g1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), p1 = [
  g1
], y1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, b1 = { class: "px-4 text-lg text-black dark:text-white" }, w1 = { key: 0 }, x1 = { key: 1 }, k1 = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), $1 = { key: 2 }, C1 = {
  key: 1,
  class: "pl-2"
}, _1 = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), L1 = [
  _1
], V1 = { class: "flex pb-1 sm:pb-0" }, M1 = {
  key: 0,
  class: "pl-2"
}, S1 = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), A1 = { class: "mr-1" }, T1 = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, I1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), F1 = [
  I1
], P1 = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, D1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), O1 = [
  D1
], j1 = { key: 1 }, B1 = { key: 4 }, R1 = { key: 0 }, E1 = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, H1 = { class: "mr-1 select-none" }, N1 = {
  key: 1,
  class: "flex justify-between items-center"
}, z1 = { class: "mr-1 select-none" }, U1 = /* @__PURE__ */ Y({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: null,
    skip: { default: 0 },
    prefs: null,
    selectedColumns: null,
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: null,
    canFilter: null
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = e, a = Nl(), { config: i } = wt(), { metadataApi: r, filterDefinitions: d } = Je(), v = Oe("client"), f = i.value.storage, m = c(() => t.toolbarButtonClass ?? oe.toolbarButtonClass), h = c(() => d.value), g = 25, y = P({ take: g }), x = P(new Ze()), L = P(t.skip), $ = P(!1), C = P(), V = (N) => typeof N == "string" ? N.split(",") : N || [];
    function A(N, q) {
      return oe.getTableRowClass("fullWidth", q, !1, !0);
    }
    function B() {
      let N = V(t.selectedColumns);
      return N.length > 0 ? N : [];
    }
    const E = c(() => it(t.refInfo.model)), k = c(() => {
      let q = B().map((xe) => xe.toLowerCase());
      const re = Ke(E.value);
      return q.length > 0 ? q.map((xe) => re.find((we) => we.name.toLowerCase() === xe)).filter((xe) => xe != null) : re;
    }), R = c(() => {
      let N = k.value.map((re) => re.name), q = V(y.value.selectedColumns).map((re) => re.toLowerCase());
      return q.length > 0 ? N.filter((re) => q.includes(re.toLowerCase())) : N;
    }), H = c(() => y.value.take ?? g), j = c(() => x.value.response ? ce(x.value.response, "results") : []), D = c(() => {
      var N;
      return ((N = x.value.response) == null ? void 0 : N.total) ?? j.value.length ?? 0;
    }), z = c(() => L.value > 0), K = c(() => L.value > 0), G = c(() => j.value.length >= H.value), te = c(() => j.value.length >= H.value), F = P([]), p = c(() => F.value.some((N) => N.settings.filters.length > 0 || !!N.settings.sort)), I = c(() => F.value.map((N) => N.settings.filters.length).reduce((N, q) => N + q, 0)), le = c(() => Kt(E.value)), T = c(() => {
      var N;
      return (N = r.value) == null ? void 0 : N.operations.find((q) => {
        var re;
        return ((re = q.dataModel) == null ? void 0 : re.name) == t.refInfo.model && Te.isAnyQuery(q);
      });
    }), O = P(), ue = P(!1), ie = P(), se = () => `${t.id}/ApiPrefs/${t.refInfo.model}`, U = (N) => `Column/${t.id}:${t.refInfo.model}.${N}`;
    async function J(N) {
      L.value += N, L.value < 0 && (L.value = 0);
      var q = Math.floor(D.value / H.value) * H.value;
      L.value > q && (L.value = q), await Me();
    }
    async function pe(N, q) {
      l("done", N);
    }
    function _e() {
      l("done", null);
    }
    function ae(N, q) {
      var xe, we, Fe;
      let re = q.target;
      if ((re == null ? void 0 : re.tagName) !== "TD") {
        let qe = (xe = re == null ? void 0 : re.closest("TABLE")) == null ? void 0 : xe.getBoundingClientRect(), ke = F.value.find((Ee) => Ee.name.toLowerCase() == N.toLowerCase());
        if (ke && qe) {
          let Ee = 318, rt = (((we = q.target) == null ? void 0 : we.tagName) === "DIV" ? q.target : (Fe = q.target) == null ? void 0 : Fe.closest("DIV")).getBoundingClientRect(), Ft = Ee + 25;
          ie.value = {
            column: ke,
            topLeft: {
              x: Math.max(Math.floor(rt.x + 25), Ft),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Pe() {
      ie.value = null;
    }
    async function Ae(N) {
      var re;
      let q = (re = ie.value) == null ? void 0 : re.column;
      q && (q.settings = N, f.setItem(U(q.name), JSON.stringify(q.settings)), await Me()), ie.value = null;
    }
    async function ge(N) {
      f.setItem(U(N.name), JSON.stringify(N.settings)), await Me();
    }
    async function Re(N) {
      ue.value = !1, y.value = N, f.setItem(se(), JSON.stringify(N)), await Me();
    }
    async function Me() {
      await Ne(Xe());
    }
    async function Ne(N) {
      const q = T.value;
      if (!q) {
        console.error(`No Query API was found for ${t.refInfo.model}`);
        return;
      }
      let re = Ht(q, N), xe = In((qe) => {
        x.value.response = x.value.error = void 0, $.value = qe;
      }), we = await v.api(re);
      xe(), ul(() => x.value = we);
      let Fe = ce(we.response, "results") || [];
      !we.succeeded || Fe.label == 0;
    }
    function Xe() {
      let N = {
        include: "total",
        take: H.value
      }, q = V(y.value.selectedColumns || t.selectedColumns);
      if (q.length > 0) {
        let xe = le.value;
        xe && q.includes(xe.name) && (q = [xe.name, ...q]), N.fields = q.join(",");
      }
      let re = [];
      return F.value.forEach((xe) => {
        xe.settings.sort && re.push((xe.settings.sort === "DESC" ? "-" : "") + xe.name), xe.settings.filters.forEach((we) => {
          let Fe = we.key.replace("%", xe.name);
          N[Fe] = we.value;
        });
      }), typeof N.skip > "u" && L.value > 0 && (N.skip = L.value), re.length > 0 && (N.orderBy = re.join(",")), N;
    }
    async function ze() {
      F.value.forEach((N) => {
        N.settings = { filters: [] }, f.removeItem(U(N.name));
      }), await Me();
    }
    return lt(async () => {
      const N = t.prefs || il(f.getItem(se()));
      N && (y.value = N), F.value = k.value.map((q) => ({
        name: q.name,
        type: q.type,
        meta: q,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(U(q.name)))
        )
      })), isNaN(t.skip) || (L.value = t.skip), await Me();
    }), (N, q) => {
      const re = Q("ErrorSummary"), xe = Q("Loading"), we = Q("SettingsIcons"), Fe = Q("DataGrid"), qe = Q("ModalDialog");
      return o(), u(be, null, [
        e.refInfo ? (o(), X(qe, {
          key: 0,
          ref_key: "modalDialog",
          ref: O,
          id: e.id,
          onDone: _e
        }, {
          default: ve(() => [
            n("div", Xf, [
              n("div", Yf, [
                n("h3", e1, [
                  he(" Select "),
                  n("span", t1, S(s(Ie)(e.refInfo.model)), 1)
                ]),
                n("div", l1, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: q[0] || (q[0] = (ke) => ue.value = !ue.value)
                  }, a1, 8, n1)) : _("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: b(["pl-2", s(z) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !s(z),
                    onClick: q[1] || (q[1] = (ke) => J(-s(D)))
                  }, r1, 10, o1)) : _("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: b(["pl-2", s(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !s(K),
                    onClick: q[2] || (q[2] = (ke) => J(-s(H)))
                  }, c1, 10, u1)) : _("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: b(["pl-2", s(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !s(G),
                    onClick: q[3] || (q[3] = (ke) => J(s(H)))
                  }, v1, 10, f1)) : _("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: b(["pl-2", s(te) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !s(te),
                    onClick: q[4] || (q[4] = (ke) => J(s(D)))
                  }, p1, 10, h1)) : _("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", y1, [
                  n("div", b1, [
                    $.value ? (o(), u("span", w1, "Querying...")) : _("", !0),
                    s(j).length ? (o(), u("span", x1, [
                      k1,
                      he(" " + S(L.value + 1) + " - " + S(Math.min(L.value + s(j).length, s(D))) + " ", 1),
                      n("span", null, " of " + S(s(D)), 1)
                    ])) : x.value.completed ? (o(), u("span", $1, "No Results")) : _("", !0)
                  ])
                ])) : _("", !0),
                s(p) && e.showResetPreferences ? (o(), u("div", C1, [
                  n("button", {
                    type: "button",
                    onClick: ze,
                    title: "Reset Preferences & Filters",
                    class: b(s(m))
                  }, L1, 2)
                ])) : _("", !0),
                n("div", V1, [
                  e.showFiltersView && s(I) > 0 ? (o(), u("div", M1, [
                    n("button", {
                      type: "button",
                      onClick: q[5] || (q[5] = (ke) => C.value = C.value == "filters" ? null : "filters"),
                      class: b(s(m)),
                      "aria-expanded": "false"
                    }, [
                      S1,
                      n("span", A1, S(s(I)) + " " + S(s(I) == 1 ? "Filter" : "Filters"), 1),
                      C.value != "filters" ? (o(), u("svg", T1, F1)) : (o(), u("svg", P1, O1))
                    ], 2)
                  ])) : _("", !0)
                ])
              ]),
              C.value == "filters" ? (o(), X(rn, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: s(h),
                columns: F.value,
                onDone: q[6] || (q[6] = (ke) => C.value = null),
                onChange: ge
              }, null, 8, ["definitions", "columns"])) : _("", !0),
              ie.value ? (o(), u("div", j1, [
                fe(on, {
                  definitions: s(h),
                  column: ie.value.column,
                  "top-left": ie.value.topLeft,
                  onDone: Pe,
                  onSave: Ae
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : _("", !0),
              x.value.error ? (o(), X(re, {
                key: 2,
                status: x.value.error
              }, null, 8, ["status"])) : $.value ? (o(), X(xe, { key: 3 })) : (o(), u("div", B1, [
                s(j).length ? (o(), u("div", R1, [
                  fe(Fe, {
                    id: e.id,
                    items: s(j),
                    type: e.refInfo.model,
                    "selected-columns": s(R),
                    onFiltersChanged: Me,
                    tableStyle: "fullWidth",
                    rowClass: A,
                    onRowSelected: pe,
                    onHeaderSelected: ae
                  }, zl({
                    header: ve(({ column: ke, label: Ee }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!t.canFilter || t.canFilter(ke)) ? (o(), u("div", E1, [
                          n("span", H1, S(Ee), 1),
                          fe(we, {
                            column: F.value.find((rt) => rt.name.toLowerCase() === ke.toLowerCase()),
                            "is-open": ((Qe = ie.value) == null ? void 0 : Qe.column.name) === ke
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), u("div", N1, [
                          n("span", z1, S(Ee), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    $e(Object.keys(s(a)), (ke) => ({
                      name: ke,
                      fn: ve((Ee) => [
                        Z(N.$slots, ke, _t(al(Ee)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : _("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : _("", !0),
        ue.value ? (o(), X(un, {
          key: 1,
          columns: s(k),
          prefs: y.value,
          onDone: q[7] || (q[7] = (ke) => ue.value = !1),
          onSave: Re
        }, null, 8, ["columns", "prefs"])) : _("", !0)
      ], 64);
    };
  }
}), q1 = { class: "sm:hidden" }, Q1 = ["for"], K1 = ["id", "name"], G1 = ["value"], W1 = { class: "hidden sm:block" }, Z1 = { class: "border-b border-gray-200" }, J1 = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, X1 = ["onClick"], Y1 = /* @__PURE__ */ Y({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Ie(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, t = c(() => Object.keys(l.tabs)), a = (h) => l.label ? l.label(h) : Ie(h), i = c(() => l.id || "tabs"), r = c(() => l.param || "tab"), d = P();
    function v(h) {
      if (d.value = h, l.url) {
        const g = t.value[0];
        ql({ tab: h === g ? void 0 : h });
      }
    }
    function f(h) {
      return d.value === h;
    }
    const m = c(() => `${100 / Object.keys(l.tabs).length}%`);
    return lt(() => {
      if (d.value = Object.keys(l.tabs)[0], l.url) {
        const g = Tl(location.search)[r.value];
        g && (d.value = g);
      }
    }), (h, g) => (o(), u("div", null, [
      n("div", q1, [
        n("label", {
          for: s(i),
          class: "sr-only"
        }, "Select a tab", 8, Q1),
        n("select", {
          id: s(i),
          name: s(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: g[0] || (g[0] = (y) => {
            var x;
            return v((x = y.target) == null ? void 0 : x.value);
          })
        }, [
          (o(!0), u(be, null, $e(s(t), (y) => (o(), u("option", {
            key: y,
            value: y
          }, S(a(y)), 9, G1))), 128))
        ], 40, K1)
      ]),
      n("div", W1, [
        n("div", Z1, [
          n("nav", J1, [
            (o(!0), u(be, null, $e(s(t), (y) => (o(), u("a", {
              href: "#",
              onClick: je((x) => v(y), ["prevent"]),
              style: El({ width: s(m) }),
              class: b([f(y) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, S(a(y)), 15, X1))), 256))
          ])
        ])
      ]),
      n("div", {
        class: b(e.bodyClass)
      }, [
        (o(), X(Hs(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), em = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), tm = [
  em
], lm = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), nm = [
  lm
], sm = /* @__PURE__ */ Y({
  __name: "DarkModeToggle",
  setup(e) {
    const l = typeof document < "u" ? document.querySelector("html") : null;
    let t = P(l == null ? void 0 : l.classList.contains("dark"));
    function a() {
      t.value ? l == null || l.classList.remove("dark") : l == null || l.classList.add("dark"), t.value = !t.value, localStorage.setItem("color-scheme", t.value ? "dark" : "light");
    }
    return (i, r) => (o(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => a())
    }, [
      n("span", {
        class: b(`${s(t) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        n("span", {
          class: b(`${s(t) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, tm, 2),
        n("span", {
          class: b(`${s(t) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, nm, 2)
      ], 2)
    ]));
  }
}), am = { key: 0 }, om = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, im = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, rm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, um = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, dm = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, cm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, fm = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, mm = ["onSubmit"], vm = { class: "mt-8" }, hm = {
  key: 1,
  class: "mt-6"
}, gm = /* @__PURE__ */ dl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), pm = { class: "mt-6 grid grid-cols-3 gap-3" }, ym = ["href", "title"], bm = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, wm = /* @__PURE__ */ n("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), xm = /* @__PURE__ */ n("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), km = [
  wm,
  xm
], $m = /* @__PURE__ */ Y({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: l }) {
    const t = e, { getMetadata: a, createDto: i } = Je(), r = yl(), { signIn: d } = an(), v = a({ assert: !0 }), f = v.plugins.auth, m = document.baseURI, h = v.app.baseUrl, g = P(i("Authenticate")), y = P(new Ze());
    lt(() => {
      f == null || f.authProviders.map((j) => j.formLayout).filter((j) => j).forEach((j) => j.forEach((D) => g.value[D.id] = ""));
    });
    const x = c(() => (f == null ? void 0 : f.authProviders.filter((j) => j.formLayout)) || []), L = c(() => x.value[0] || {}), $ = c(() => x.value[Math.max(x.value.length - 1, 0)] || {}), C = c(() => (t.provider ? f == null ? void 0 : f.authProviders.find((j) => j.name === t.provider) : null) ?? L.value), V = (j) => j === !1 || j === "false";
    function A(j) {
      return j.label || j.navItem && j.navItem.label;
    }
    const B = c(() => {
      var j;
      return (((j = C.value) == null ? void 0 : j.formLayout) || []).map((D) => {
        var z, K;
        return Object.assign({}, D, {
          type: (z = D.type) == null ? void 0 : z.toLowerCase(),
          autocomplete: D.autocomplete || (((K = D.type) == null ? void 0 : K.toLowerCase()) === "password" ? "current-password" : void 0) || (D.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, D.css)
        });
      });
    }), E = c(() => V(t.oauth) ? [] : (f == null ? void 0 : f.authProviders.filter((j) => j.type === "oauth")) || []), k = c(() => {
      let j = na(
        f == null ? void 0 : f.authProviders.filter((z) => z.formLayout && z.formLayout.length > 0),
        (z, K) => {
          let G = A(K) || Ye(K.name);
          z[G] = K.name === L.value.name ? "" : K.name;
        }
      );
      const D = C.value;
      return D && V(t.tabs) && (j = { [A(D) || Ye(D.name)]: D }), j;
    }), R = c(() => {
      let j = B.value.map((D) => D.id).filter((D) => D);
      return y.value.summaryMessage(j);
    });
    async function H() {
      if (g.value.provider = C.value.name, y.value = await r.api(g.value), y.value.succeeded) {
        const j = y.value.response;
        d(j), l("login", j), y.value = new Ze(), g.value = i("Authenticate");
      }
    }
    return (j, D) => {
      const z = Q("ErrorSummary"), K = Q("AutoFormFields"), G = Q("PrimaryButton"), te = Q("Icon"), F = Ns("href");
      return s(f) ? (o(), u("div", om, [
        n("div", im, [
          n("h2", rm, S(e.title), 1),
          Object.keys(s(k)).length > 1 ? (o(), u("p", um, [
            n("span", dm, [
              (o(!0), u(be, null, $e(s(k), (p, I) => gt((o(), u("a", {
                class: b([
                  p === "" || p === s(L).name ? "rounded-l-md" : p === s($).name ? "rounded-r-md -ml-px" : "-ml-px",
                  e.provider === p ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                he(S(I), 1)
              ], 2)), [
                [F, { provider: p }]
              ])), 256))
            ])
          ])) : _("", !0)
        ]),
        n("div", cm, [
          s(R) ? (o(), X(z, {
            key: 0,
            class: "mb-3",
            errorSummary: s(R)
          }, null, 8, ["errorSummary"])) : _("", !0),
          n("div", fm, [
            s(B).length ? (o(), u("form", {
              key: 0,
              onSubmit: je(H, ["prevent"])
            }, [
              fe(K, {
                modelValue: g.value,
                formLayout: s(B),
                api: y.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              n("div", vm, [
                fe(G, { class: "w-full" }, {
                  default: ve(() => [
                    he("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, mm)) : _("", !0),
            s(E).length ? (o(), u("div", hm, [
              gm,
              n("div", pm, [
                (o(!0), u(be, null, $e(s(E), (p) => (o(), u("div", null, [
                  n("a", {
                    href: s(h) + p.navItem.href + "?continue=" + s(m),
                    title: A(p),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    p.icon ? (o(), X(te, {
                      key: 0,
                      image: p.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (o(), u("svg", bm, km))
                  ], 8, ym)
                ]))), 256))
              ])
            ])) : _("", !0)
          ])
        ])
      ])) : (o(), u("div", am, "No Auth Plugin"));
    };
  }
}), Cm = {
  Alert: ya,
  AlertSuccess: Aa,
  ErrorSummary: Da,
  InputDescription: ja,
  Icon: ls,
  Loading: yo,
  OutlineButton: xo,
  PrimaryButton: Co,
  SecondaryButton: Vo,
  TextLink: Mo,
  Breadcrumbs: Po,
  Breadcrumb: Ro,
  NavList: No,
  NavListItem: Yo,
  AutoQueryGrid: ku,
  SettingsIcons: Ou,
  FilterViews: rn,
  FilterColumn: on,
  QueryPrefs: un,
  EnsureAccess: as,
  EnsureAccessDialog: ju,
  TextInput: Ku,
  TextareaInput: ed,
  SelectInput: od,
  CheckboxInput: vd,
  TagInput: jd,
  FileInput: oc,
  Autocomplete: kc,
  Combobox: _c,
  DynamicInput: Lc,
  LookupInput: Nc,
  AutoFormFields: zc,
  AutoForm: Jc,
  AutoCreateForm: w0,
  AutoEditForm: z0,
  ConfirmDelete: Q0,
  FormLoading: X0,
  DataGrid: nf,
  CellFormat: vf,
  PreviewFormat: wf,
  HtmlFormat: _f,
  CloseButton: Af,
  SlideOver: Uf,
  ModalDialog: Jf,
  ModalLookup: U1,
  Tabs: Y1,
  DarkModeToggle: sm,
  SignIn: $m
}, _m = ["onClick", "title"], Lm = /* @__PURE__ */ Y({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const l = e, { config: t } = wt(), a = () => t.value.navigate(l.to ?? "/");
    return (i, r) => (o(), u("a", Ce({
      onClick: je(a, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, _m));
  }
}), Vm = { RouterLink: Lm }, Ml = Cm, Pm = {
  install(e) {
    Object.keys(Ml).forEach((l) => {
      e.component(l, Ml[l]);
    });
  },
  component(e) {
    return e && (Ml[e] || Vm[e]) || null;
  }
};
export {
  Im as css,
  Pm as default,
  an as useAuth,
  yl as useClient,
  wt as useConfig,
  Tm as useFiles,
  Fm as useFormatters,
  Je as useMetadata,
  Ra as useUtils
};
