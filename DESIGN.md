---
name: Standard Professional
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4fa'
  surface-container: '#ebeef4'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#dfe3e8'
  on-surface: '#181c20'
  on-surface-variant: '#424753'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f7'
  outline: '#727785'
  outline-variant: '#c2c6d5'
  surface-tint: '#005ac1'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#2771df'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#006e2c'
  on-secondary: '#ffffff'
  secondary-container: '#86f898'
  on-secondary-container: '#00722f'
  tertiary: '#765700'
  on-tertiary: '#ffffff'
  tertiary-container: '#956e00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#89fa9b'
  secondary-fixed-dim: '#6ddd81'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffdea0'
  tertiary-fixed-dim: '#fbbc06'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#dfe3e8'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built upon the principles of clarity, efficiency, and trust. It targets professional environments where information density must be balanced with legibility. The aesthetic follows a **Modern Corporate** approach, characterized by vast white space, a disciplined color palette, and a focus on functional utility over decorative flair. 

The emotional response should be one of "effortless productivity." By utilizing a restrained visual language, the interface recedes into the background, allowing the user's data and tasks to take center stage. High-quality sans-serif typography and purposeful alignment create a sense of systematic order and reliability.

## Colors

The palette is rooted in a high-contrast foundation to ensure maximum accessibility and a "clean" feel. 

- **Primary Blue (#4285F4):** Used for primary actions, active states, and key wayfinding elements.
- **Surface & Background:** The application primarily uses a pure white background to maximize "breathability." A light gray surface color is used for secondary containers, sidebars, and subtle grouping.
- **Functional Colors:** Success (Green), Warning (Yellow), and Error (Red) follow standard semantic conventions to ensure intuitive status communication.
- **Neutrals:** A scale of grays is used for text hierarchy, borders, and icons, ensuring that the primary blue remains the dominant focal point.

## Typography

This design system utilizes **Inter** for all roles to achieve a systematic, utilitarian look that remains highly readable at small sizes. 

Typography is organized into a clear hierarchy:
- **Headlines:** Use tighter letter spacing and heavier weights to provide strong visual anchors.
- **Body:** Standardized at 16px for optimal long-form reading, switching to 14px for dense data views.
- **Labels:** Used for buttons, form headers, and navigation items, utilizing medium weights to differentiate from body text.

On mobile devices, the `headline-lg` scales down to 24px to prevent excessive line wrapping while maintaining its relative importance.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. We employ a strict 8px spatial rhythm to ensure consistency across all components.

- **Desktop (1024px+):** Fixed maximum container width of 1280px, centered with 32px side margins. Gutters are fixed at 24px.
- **Tablet (768px - 1023px):** Fluid width with 24px side margins.
- **Mobile (0px - 767px):** Fluid width with 16px side margins.

Spacing between major sections should use `2xl` (48px) or `3xl` (64px) to reinforce the "Google-inspired" sense of openness. Vertical rhythm within cards and components should primarily use `md` (16px).

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Ambient Shadows** to indicate elevation. 

- **Level 0 (Background):** Pure white (#FFFFFF).
- **Level 1 (Surface):** Light gray (#F8F9FA). Used for sidebars or secondary content areas.
- **Level 2 (Cards/Menus):** White surfaces with a very soft, diffused shadow: `0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px rgba(60, 64, 67, 0.15)`.
- **Level 3 (Modals/Overlays):** White surfaces with deeper shadows and a semi-transparent dark overlay for the background to focus user attention.

Avoid heavy borders; instead, use subtle 1px outlines in `#DADCE0` for structural definition when tonal separation is insufficient.

## Shapes

The shape language is modern and approachable. We use **Rounded** corners (8px base) to soften the professional aesthetic and make the UI feel more accessible.

- **Standard Elements:** Buttons, inputs, and cards use an 8px (`0.5rem`) corner radius.
- **Large Elements:** Modals and large containers use a 16px (`1rem`) corner radius.
- **Contextual Elements:** Small tags or badges may use a "Pill" shape (full rounding) to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `#4285F4` background with white text. 8px rounded corners.
- **Secondary:** Outlined with a 1px `#DADCE0` border and `#4285F4` text.
- **Tertiary/Ghost:** No background or border; `#5F6368` text that shifts to `#202124` on hover.

### Input Fields
Inputs should have a 1px border in `#DADCE0`, 8px roundedness, and `body-md` typography. On focus, the border transitions to 2px `#4285F4`. Labels should use `label-md` and sit clearly above the field.

### Cards
Cards are the primary container for grouping information. They use a white background, the Level 2 shadow profile, and 8px padding (`md`).

### Lists
List items should have a minimum height of 48px for touch targets. Use a subtle `#F8F9FA` background hover state. Dividers between items should be 1px wide and `#F1F3F4`.

### Chips & Badges
Chips use a light gray background (`#E8EAED`) and 16px (`rounded-xl`) height. Badges for status (e.g., "Error") use a light tint of the status color with high-contrast text.