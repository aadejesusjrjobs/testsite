---
name: Zenith Productivity
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#68788f'
  on-tertiary-container: '#000510'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is rooted in the "Calm Tech" philosophy—creating an environment where the interface recedes to let the user’s focus emerge. It targets high-performance professionals and developers who require an AI tool that feels like a precision instrument rather than a toy.

The aesthetic is a refined **Minimalism** blended with **Corporate Modern** sensibilities. It prioritizes clarity, structural integrity, and purposeful motion. Every element must serve a functional purpose; decorative flourishes are replaced by generous whitespace and high-quality typographic hierarchies to reduce cognitive load and evoke a sense of professional mastery.

## Colors
The palette is engineered for prolonged focus in high-intensity work environments. 

- **Primary (Electric Indigo):** Used sparingly for primary actions, active states, and AI-driven insights. It represents the "spark" of intelligence within the tool.
- **Secondary (Deep Navy):** Forms the foundational surface layer. It provides a more stable, less aggressive base than pure black.
- **Tertiary (Crisp Slate):** Utilized for secondary text, borders, and inactive icons to maintain a clear hierarchy without visual clutter.
- **Functional Grays:** A range of cool-toned slates are used to differentiate container depths and UI chrome.

## Typography
The system utilizes **Inter** for all primary interface elements to ensure maximum legibility and a neutral, systematic feel. For technical data and labels, **Geist** is introduced to provide a subtle "developer-tool" precision.

- **Scale:** Use tight tracking on larger display types to maintain a cohesive, "tucked-in" look.
- **Hierarchy:** Contrast is achieved through weight transitions (SemiBold to Regular) and color shifts (Primary White to Slate) rather than excessive size differences.
- **Readability:** Body text uses a slightly increased line height (1.5x) to facilitate comfortable reading of long AI-generated responses.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy with a strict 4px baseline rhythm. 

- **Desktop:** 12-column grid with 24px gutters. Content should be centered with a max-width of 1440px to prevent excessive eye travel.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** Use "Generous" spacing (`xl` and `2xl`) between major sections to emphasize the calm nature of the tool. Components within containers should strictly adhere to the 8px or 16px internal padding rules.

## Elevation & Depth
This design system avoids heavy shadows, instead using **Tonal Layers** and **Low-Contrast Outlines** to define depth.

- **Level 0 (Background):** `#020617` — The deepest layer.
- **Level 1 (Cards/Sidebar):** `#0F172A` — Raised slightly via a 1px border of `#1E293B`.
- **Level 2 (Modals/Popovers):** `#1E293B` — Features a subtle, ultra-diffused shadow (`0 20px 25px -5px rgba(0, 0, 0, 0.5)`) to indicate focus.
- **AI Accents:** Elements containing AI interactions may use a subtle 1px inner glow or a very soft Indigo-tinted drop shadow to signify "active intelligence."

## Shapes
The shape language is **Soft** yet disciplined. 

- **Standard Elements:** 4px (`0.25rem`) corner radius for buttons and inputs to maintain a professional, sharp-edged feel without being aggressive.
- **Containers:** 8px (`0.5rem`) for cards and main UI panels to provide a subtle containment feel.
- **Interactive Pills:** Use full rounding (999px) only for status indicators or small "tags" to distinguish them from structural UI elements.

## Components
- **Buttons:** Primary buttons use a solid Electric Indigo background with white text. Secondary buttons use a ghost style with a Slate border that brightens on hover.
- **Inputs:** Fields are dark-themed with a subtle 1px border. On focus, the border transitions to Indigo with a 2px outer glow (ring).
- **Cards:** Defined by a 1px border rather than a shadow. The header area of a card should have a 16px padding and a subtle bottom divider.
- **AI Command Bar:** A unique component. Centered at the bottom or top, featuring a slightly larger blur radius and a shimmering indigo border-bottom to indicate the AI is "listening" or "thinking."
- **Chips/Tags:** Small, rectangular with a 2px radius. Use Slate backgrounds with a low-opacity Indigo text for "AI-generated" metadata.
- **Lists:** Clean rows with 12px vertical padding, separated by high-transparency dividers (`rgba(255,255,255,0.05)`).