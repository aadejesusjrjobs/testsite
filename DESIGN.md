---
name: Identity Core
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#424753'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
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
  tertiary: '#b51b15'
  on-tertiary: '#ffffff'
  tertiary-container: '#d9372b'
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
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930004'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Roboto Flex
    fontSize: 57px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Roboto Flex
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Roboto Flex
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: Roboto Flex
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: Roboto Flex
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
  container-max: 448px
  gutter: 16px
---

## Brand & Style

The design system focuses on a high-trust, frictionless authentication experience. It prioritizes clarity and security through a **Corporate/Modern** aesthetic grounded in Material Design 3 (MD3) principles. The target audience is global and diverse, requiring an interface that feels both institutional and welcoming.

The style utilizes a "Surface-First" approach: large, expansive white spaces allow the high-quality typography to drive the hierarchy. Interaction points are marked by soft, meaningful transitions and generous touch targets. The emotional response should be one of calm, reliability, and effortless progression.

## Colors

The palette is anchored by a sophisticated range of neutral grays to maintain a professional backdrop. Google's brand colors are used strategically as functional accents rather than decorative elements:

- **Primary (Blue):** Used for primary actions, active states, and focus indicators.
- **Success (Green):** Used for completion states and positive feedback.
- **Error (Red):** Used for critical alerts and destructive actions.
- **Warning (Yellow):** Used for cautionary states.
- **Neutral:** A spectrum from `#1F1F1F` (Text) to `#F0F2F2` (Background fills) ensures high legibility and soft contrast.

## Typography

This design system utilizes **Roboto Flex** for its exceptional versatility and readability across all weights. The typographic scale follows a strict hierarchy to guide users through the authentication flow:

- **Headlines:** Set in `Regular` weight to maintain a clean, modern look without feeling aggressive.
- **Body Text:** Optimized for long-form reading and instructions with ample line height.
- **Labels:** Set in `Medium` weight to provide clear distinction for buttons and form headers.
- **Scaling:** On mobile devices, large headlines scale down to prevent excessive line-breaking, ensuring the "Login Box" remains centered and visible.

## Layout & Spacing

The layout utilizes a **Fixed Grid** approach for the central authentication module. 

- **Desktop:** The login card is centered both horizontally and vertically, with a fixed width of `448px`.
- **Mobile:** The layout becomes fluid, with `24px` horizontal margins.
- **Spacing Rhythm:** An 8px linear scale is used for all spatial relationships. Elements within the card (like an email input and "Next" button) are separated by `xl` (32px) blocks to minimize cognitive load.
- **Safe Areas:** A minimum of `48px` padding is maintained at the top of the viewport for brand placement (Logo).

## Elevation & Depth

In accordance with MD3, depth is communicated through **Tonal Layers** and subtle **Ambient Shadows**. 

- **Level 0 (Background):** Pure white or ultra-light gray (#F8F9FA).
- **Level 1 (Card):** The primary login container uses a very soft, diffused shadow (Blur: 10px, Y: 2px, Opacity: 8%) or a low-contrast outline (#E0E0E0) depending on the context.
- **Interaction:** Buttons utilize a slight elevation increase on hover to provide tactile feedback. High-priority components (like the account picker) use tonal overlays—a 5-8% primary color tint—to signify elevation without heavy shadows.

## Shapes

The design system adopts a **Rounded** shape language to evoke friendliness and modernism. 

- **Main Containers:** The primary login card uses `rounded-xl` (24px) to create a distinct, soft frame.
- **Input Fields:** Text fields use `rounded-sm` (4px) or `rounded-md` (8px) to maintain a sense of structure and alignment.
- **Buttons:** Primary action buttons are fully rounded (Pill-shaped) to maximize their visual distinction and signify clickability.

## Components

### Buttons
- **Primary:** Pill-shaped, solid Primary Blue background, white text. No shadow in rest state; subtle elevation on hover.
- **Secondary/Text:** No background or border. Primary Blue text. Used for "Create account" or "Forgot email."

### Input Fields
- **Outlined Style:** A 1px border (#747775) that thickens to 2px Primary Blue on focus.
- **Floating Labels:** Labels transition from inside the field to the top border on focus, following the MD3 spec.

### Cards
- **Authentication Card:** The central vessel. White background, 24px corner radius, and 40px internal padding for desktop.

### Account Picker
- **List Items:** 56px height minimum. Features a circular avatar (40px) on the left and a 1px divider between items.
- **Hover State:** A subtle gray (#F1F3F4) background fill with a 4px corner radius.

### Progress Indicators
- **Linear Progress:** A 4px thick bar at the very top of the login card, appearing only during transition/loading states using the Primary Blue.