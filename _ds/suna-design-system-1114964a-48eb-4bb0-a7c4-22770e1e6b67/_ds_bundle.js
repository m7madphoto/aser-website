/* @ds-bundle: {"format":4,"namespace":"SunaDesignSystem_111496","components":[{"name":"Badge","sourcePath":"components/social/Badge.jsx"},{"name":"Caption","sourcePath":"components/social/Caption.jsx"},{"name":"Eyebrow","sourcePath":"components/social/Eyebrow.jsx"},{"name":"Headline","sourcePath":"components/social/Headline.jsx"},{"name":"PostFrame","sourcePath":"components/social/PostFrame.jsx"},{"name":"StatBlock","sourcePath":"components/social/StatBlock.jsx"}],"sourceHashes":{"components/social/Badge.jsx":"c2ca467154f3","components/social/Caption.jsx":"6c669b5f9d56","components/social/Eyebrow.jsx":"e14aced2e362","components/social/Headline.jsx":"b54e67bb7027","components/social/PostFrame.jsx":"0ee8b4f87869","components/social/StatBlock.jsx":"7ad8d404f1eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SunaDesignSystem_111496 = window.SunaDesignSystem_111496 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/social/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label for categories, services, or tags.
 */
function Badge({
  children,
  variant = 'filled',
  color = 'orange',
  size = 'sm',
  lang = 'ar',
  style,
  ...rest
}) {
  const colorSchemes = {
    orange: {
      filled: {
        bg: 'var(--color-orange)',
        text: 'var(--color-white)',
        border: 'var(--color-orange)'
      },
      outline: {
        bg: 'transparent',
        text: 'var(--color-orange)',
        border: 'var(--color-orange)'
      },
      ghost: {
        bg: 'var(--color-orange-subtle)',
        text: 'var(--color-orange)',
        border: 'transparent'
      }
    },
    white: {
      filled: {
        bg: 'var(--color-white)',
        text: 'var(--color-black)',
        border: 'var(--color-white)'
      },
      outline: {
        bg: 'transparent',
        text: 'var(--color-white)',
        border: 'var(--color-white)'
      },
      ghost: {
        bg: 'rgba(255,255,255,0.08)',
        text: 'var(--color-white)',
        border: 'transparent'
      }
    },
    black: {
      filled: {
        bg: 'var(--color-black)',
        text: 'var(--color-white)',
        border: 'var(--color-black)'
      },
      outline: {
        bg: 'transparent',
        text: 'var(--color-black)',
        border: 'var(--color-black)'
      },
      ghost: {
        bg: 'rgba(10,10,10,0.08)',
        text: 'var(--color-black)',
        border: 'transparent'
      }
    }
  };
  const sizeStyles = {
    sm: {
      fontSize: 'var(--type-xs)',
      padding: '4px 10px'
    },
    md: {
      fontSize: 'var(--type-sm)',
      padding: '6px 14px'
    },
    lg: {
      fontSize: 'var(--type-base)',
      padding: '8px 18px'
    }
  };
  const scheme = (colorSchemes[color] || colorSchemes.orange)[variant] || colorSchemes.orange.filled;
  const sz = sizeStyles[size] || sizeStyles.sm;
  const isArabic = lang === 'ar';
  return /*#__PURE__*/React.createElement("span", _extends({
    dir: isArabic ? 'rtl' : 'ltr',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sz.fontSize,
      fontWeight: 500,
      color: scheme.text,
      backgroundColor: scheme.bg,
      border: `1px solid ${scheme.border}`,
      borderRadius: 'var(--radius-pill)',
      padding: sz.padding,
      letterSpacing: isArabic ? 0 : 'var(--tracking-wide)',
      textTransform: isArabic ? 'none' : 'uppercase',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Badge.jsx", error: String((e && e.message) || e) }); }

// components/social/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Caption — supporting body text below a headline.
 * Minimal copy only. One or two lines maximum.
 */
function Caption({
  children,
  size = 'body',
  color = 'white',
  lang = 'ar',
  muted = false,
  align,
  style,
  ...rest
}) {
  const sizeMap = {
    body: 'var(--type-body)',
    caption: 'var(--type-caption)',
    label: 'var(--type-label)',
    title: 'var(--type-title)'
  };
  const colorMap = {
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    orange: 'var(--color-orange)',
    muted: 'var(--color-fg-muted)'
  };
  const isArabic = lang === 'ar';
  return /*#__PURE__*/React.createElement("p", _extends({
    dir: isArabic ? 'rtl' : 'ltr',
    style: {
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sizeMap[size] || size,
      fontWeight: isArabic ? 400 : 400,
      color: muted ? 'var(--color-fg-muted)' : colorMap[color] || color,
      lineHeight: 'var(--leading-relaxed)',
      letterSpacing: isArabic ? '0' : 'var(--tracking-normal)',
      textAlign: align || (isArabic ? 'right' : 'left'),
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Caption.jsx", error: String((e && e.message) || e) }); }

// components/social/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase label placed above a headline.
 * Sets category or context. Never longer than 3–4 words.
 */
function Eyebrow({
  children,
  color = 'orange',
  lang = 'ar',
  size = 'label',
  tracking = 'widest',
  style,
  ...rest
}) {
  const colorMap = {
    orange: 'var(--color-orange)',
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    muted: 'var(--color-fg-muted)'
  };
  const sizeMap = {
    micro: 'var(--type-micro)',
    label: 'var(--type-label)',
    sm: 'var(--type-sm)'
  };
  const trackingMap = {
    widest: 'var(--tracking-widest)',
    wider: 'var(--tracking-wider)',
    wide: 'var(--tracking-wide)'
  };
  const isArabic = lang === 'ar';
  return /*#__PURE__*/React.createElement("span", _extends({
    dir: isArabic ? 'rtl' : 'ltr',
    style: {
      display: 'block',
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sizeMap[size] || size,
      fontWeight: 500,
      color: colorMap[color] || color,
      letterSpacing: isArabic ? 'var(--tracking-wide)' : trackingMap[tracking] || tracking,
      textTransform: 'uppercase',
      lineHeight: 1,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/social/Headline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headline — editorial display text for social post headlines.
 * Primary voice of the post. Always big, always intentional.
 */
function Headline({
  children,
  size = 'display',
  color = 'white',
  lang = 'ar',
  weight = 'black',
  align,
  uppercase = false,
  style,
  ...rest
}) {
  const sizeMap = {
    display: 'var(--type-display)',
    headline: 'var(--type-headline)',
    subheadline: 'var(--type-subheadline)',
    title: 'var(--type-title)'
  };
  const colorMap = {
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    orange: 'var(--color-orange)'
  };
  const weightMap = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  };
  const isArabic = lang === 'ar';
  return /*#__PURE__*/React.createElement("h1", _extends({
    dir: isArabic ? 'rtl' : 'ltr',
    style: {
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sizeMap[size] || size,
      fontWeight: weightMap[weight] || weight,
      color: colorMap[color] || color,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: isArabic ? '0' : 'var(--tracking-tight)',
      textTransform: uppercase ? 'uppercase' : 'none',
      textAlign: align || (isArabic ? 'right' : 'left'),
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Headline.jsx", error: String((e && e.message) || e) }); }

// components/social/PostFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PostFrame — the base canvas for any social media post.
 * Sets correct aspect ratio and background. All post content lives inside.
 */
function PostFrame({
  ratio = 'square',
  bg = 'black',
  children,
  style,
  ...rest
}) {
  const paddingMap = {
    square: '100%',
    portrait: '125%',
    story: '177.78%',
    landscape: '52.36%',
    widescreen: '56.25%'
  };
  const bgMap = {
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    orange: 'var(--color-orange)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: '100%',
      paddingBottom: paddingMap[ratio] || paddingMap.square,
      backgroundColor: bgMap[bg] || bg,
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
Object.assign(__ds_scope, { PostFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PostFrame.jsx", error: String((e && e.message) || e) }); }

// components/social/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — oversized number with a descriptor label.
 * The most powerful typographic element for impact posts.
 */
function StatBlock({
  number,
  label,
  color = 'orange',
  labelColor,
  lang = 'ar',
  size = 'display',
  style,
  ...rest
}) {
  const colorMap = {
    orange: 'var(--color-orange)',
    white: 'var(--color-white)',
    black: 'var(--color-black)'
  };
  const sizeMap = {
    display: {
      number: 'var(--type-5xl)',
      label: 'var(--type-body)'
    },
    headline: {
      number: 'var(--type-4xl)',
      label: 'var(--type-sm)'
    },
    title: {
      number: 'var(--type-3xl)',
      label: 'var(--type-xs)'
    }
  };
  const sz = sizeMap[size] || sizeMap.display;
  const numColor = colorMap[color] || color;
  const lblColor = labelColor ? colorMap[labelColor] || labelColor : 'var(--color-fg-muted)';
  const isArabic = lang === 'ar';
  return /*#__PURE__*/React.createElement("div", _extends({
    dir: isArabic ? 'rtl' : 'ltr',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-tight)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sz.number,
      fontWeight: 900,
      color: numColor,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: isArabic ? '0' : 'var(--tracking-tight)',
      margin: 0
    }
  }, number), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: isArabic ? 'var(--font-arabic)' : 'var(--font-latin)',
      fontSize: sz.label,
      fontWeight: 400,
      color: lblColor,
      lineHeight: 'var(--leading-normal)',
      letterSpacing: isArabic ? '0' : 'var(--tracking-wide)',
      textTransform: isArabic ? 'none' : 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/StatBlock.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.PostFrame = __ds_scope.PostFrame;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
