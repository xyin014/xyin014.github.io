# Fibonacci Web Design

This website follows **Juergen Schmidhuber's Fibonacci Web Design** principles.
Source: https://people.idsia.ch/~juergen/fibonacciwebdesign.html

---

## Core Principle

Every measurement — widths, heights, margins, paddings, font sizes, line-heights —
must be a **Fibonacci number multiplied by the base unit of 2 pixels**.

Sequence: **2, 4, 6, 10, 16, 26, 42, 68, 110, 178, 288, 466, 754**

The ratios between consecutive Fibonacci numbers converge to the **golden ratio**
(phi = 0.618034...). This harmonic proportion is applied recursively throughout
the layout, creating fractal self-similarity at every scale.

---

## Layout Rules

### Content Width
- Total content width: **754px** (Fibonacci number)
- Centered on screen with `margin: 0 auto`

### Two-Column Golden Split (Home page)
- Main column: **466px**
- Sidebar: **288px**
- 288 / 466 = 0.618 = phi (golden ratio)
- Column gap: **0px** (content flush to column edges)

### Recursive Subdivision
Apply the golden ratio recursively within each column:
- 754 = 466 + 288 (level 0)
- 466 = 288 + 178 (level 1)
- 288 = 178 + 110 (level 2)
- 178 = 110 + 68  (level 3)
- 110 = 68 + 42   (level 4)

Use CSS classes `.fib-sub-1`, `.fib-sub-2`, `.fib-sub-3` for nested grids.

### Single-Column Pages
- Publications: full **754px**
- Misc, About: narrow **466px**

---

## Typography Scale

Only Fibonacci sizes are permitted for font-size and line-height:

| Role          | Font Size | Line Height | Ratio       |
|---------------|-----------|-------------|-------------|
| Caption/Label | 10px      | 16px        | 16/10 = phi |
| Body/H2/H3    | 16px      | 26px        | 26/16 = phi |
| H1/Page Title | 26px      | 42px        | 42/26 = phi |
| Display       | 42px      | 68px        | 68/42 = phi |
| Hero          | 68px      | 110px       | 110/68 = phi|

Hierarchy is achieved through **weight and color**, not extra sizes.
H2 and H3 share body size (16px) but differ by weight (700 vs 600).

**Non-Fibonacci sizes (12, 14, 18, 20, 22, 32, etc.) are forbidden.**

---

## Spacing

All margins and paddings must use Fibonacci values from `tokens.css`:
- `--fib-1` through `--fib-14` (2px through 1220px)

Common spacing:
- Paragraph spacing: **16px** (`--fib-5`)
- Section spacing: **42px** (`--fib-7`)
- Column gap: **26px** (`--fib-6`) when gap is needed
- Large section breaks: **68px** (`--fib-8`)

---

## Margin Rules (Schmidhuber's Elegant Solution)

- **No left margins** for left-justified text
- **No right margins** for right-justified text
- Content sits flush against its column edge
- This eliminates arbitrary margin decisions and reinforces the grid

On mobile (below 466px), minimal Fibonacci padding (10px) is acceptable
for readability.

---

## Images and Graphical Elements

All images, cards, and visual elements must have **Fibonacci dimensions**:
- Widths: 68, 110, 178, 288, 466, 754px
- Heights: 42, 68, 110, 178, 288, 466px
- Aspect ratios should approximate phi (e.g., 288x178, 466x288)

Use `.fib-w-*` and `.fib-h-*` utility classes from `grid.css`.

---

## Responsive Breakpoints

Three Fibonacci-derived breakpoints:

| Breakpoint | Container | Layout       |
|------------|-----------|--------------|
| >= 780px   | 754px     | Two-column   |
| 466-779px  | 466px     | Single column|
| < 466px    | Fluid     | Compressed   |

Below 780px: sidebar stacks below main.
Below 466px: H1 drops to 26px, nav becomes hamburger (26x26px).

---

## Color Palette (Golden Angle Rotation)

Colors are derived by rotating hue by the **golden angle (137.5 degrees)**,
all at the same saturation (52%) and lightness (50%):
- Primary: **#613DC1** (purple, HSL 262°)
- Accent: **#C1953D** (gold, HSL 39.5° = 262° + 137.5°)
- Tertiary: **#3DC1BB** (teal, HSL 177° = 39.5° + 137.5°)

Neutrals are minimal — one background, one surface, one border, one muted text:
- Background: **#FAFAF8**, Surface: **#F3F2EE**, Border: **#DDD9D0**
- Text: **#1A1A2E**, Muted: **#6B6B80**

---

## CSS Architecture

```
css/
  tokens.css       -- All Fibonacci variables, colors, fonts
  reset.css        -- Minimal reset
  grid.css         -- Fibonacci grid system + subdivision classes
  typography.css   -- Fibonacci type scale
  nav.css          -- Navigation (68px tall, Fibonacci)
  components.css   -- Cards, lists, footer, dividers
  responsive.css   -- Three Fibonacci breakpoints
```

### Design Token Variables (tokens.css)
- `--fib-1` through `--fib-14`: The Fibonacci pixel sequence
- `--text-xs` through `--text-3xl`: Fibonacci font sizes only
- `--lh-xs` through `--lh-3xl`: Fibonacci line-heights (size x phi)
- `--col-main`, `--col-side`: Golden-split column widths

---

## Checklist for New Elements

When adding any new element to this site:

1. Is the width a Fibonacci number? (68, 110, 178, 288, 466, 754)
2. Is the height a Fibonacci number?
3. Is the font-size from the Fibonacci scale? (10, 16, 26, 42, 68)
4. Is the line-height the next Fibonacci number above the font-size?
5. Are all margins/paddings Fibonacci values?
6. Does the element sit flush to its column edge (no unnecessary margins)?
7. If the element subdivides space, does it use the golden ratio?
8. Do images have Fibonacci dimensions with phi aspect ratio?

---

## Attribution

Design inspired by Juergen Schmidhuber's Fibonacci Web Design (2005).
https://people.idsia.ch/~juergen/fibonacciwebdesign.html
