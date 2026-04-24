# Design Document (DESIGN.md)

## Project

Accredian Enterprise Landing Page (Partial Clone)

---

## 1. Design Goals

The design focuses on creating a modern, premium, and responsive UI inspired by the Accredian Enterprise website while maintaining originality.

### Key Goals

* Clear visual hierarchy
* Consistent spacing and alignment
* Premium black and silver aesthetic
* Fully responsive across devices
* Reusable and scalable UI components

---

## 2. Design Principles

### 1. Simplicity

Avoid unnecessary complexity. Keep layouts clean and readable.

### 2. Consistency

Maintain consistent:

* Colors
* Typography
* Spacing
* Component structure

### 3. Accessibility

* Proper contrast ratios
* Readable font sizes
* Mobile-friendly touch targets

### 4. Responsiveness

Design is built using a mobile-first approach and scales to larger screens.

---

## 3. Layout Structure

The page is divided into modular sections:

### Navbar

* Logo (left)
* Navigation links (right)
* Sticky positioning on scroll

### Hero Section

* Main headline (ACCredian branding alignment)
* Supporting text
* Call-to-action button
* Clean premium layout

### Features Section

* Grid-based layout
* Cards with icon + title + description

### Benefits / Why Choose Us

* Highlight key advantages
* Structured in columns or rows

### Testimonials

* User feedback cards
* Clean typography and spacing

### Lead Capture Form (Bonus)

* Input fields (Name, Email)
* CTA button
* Minimal and centered layout

### Footer

* Navigation links
* Contact / info section
* Social links (optional)

---

## 4. Color System (Black and Silver Theme)

### Primary Colors

* Background Primary: `#000000` (Pure Black)
* Background Secondary: `#0F0F0F` (Soft Black)

### Silver Palette

* Primary Silver: `#C0C0C0`
* Light Silver: `#E5E5E5`
* Dark Silver: `#8A8A8A`

### Text Colors

* Text Primary: `#FFFFFF`
* Text Secondary: `#B0B0B0`

### Accent

* Subtle Glow Accent: `#D9D9D9` (used for highlights and hover states)

---

## 5. Typography

### Font Family

Primary Font: Exo 2

Import:

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
</style>
```

### Usage

* Headings: Exo 2, bold
* Body: Exo 2, regular
* Branding text (ACCredian): Exo 2, semi-bold to bold

### Font Sizes

* Heading 1: `text-4xl md:text-6xl`
* Heading 2: `text-2xl md:text-4xl`
* Body: `text-base md:text-lg`
* Small text: `text-sm`

---

## 6. Spacing System

Consistent spacing using Tailwind scale:

* Section padding: `py-16 md:py-24`
* Container padding: `px-4 md:px-10`
* Gap between elements: `gap-6 md:gap-10`

---

## 7. Component Design

### Button

* Background: silver or gradient silver
* Text: black
* Rounded: `rounded-xl`
* Hover: glow effect + slight scale

### Card

* Background: `#0F0F0F`
* Border: subtle silver border
* Shadow: soft glow shadow
* Padding: `p-6`
* Rounded: `rounded-2xl`

### Input Fields

* Background: dark
* Border: silver
* Focus: glowing silver outline
* Padding: `px-4 py-2`

---

## 8. Loading Screen Animation (Key Feature)

A branded entry animation is implemented before the main page loads.

### Behavior

1. The screen starts with a full black background.
2. The text "ACCREDIAN" appears letter-by-letter in sequence:
   A → C → C → R → E → D → I → A → N
3. Each letter fades or slides in with a slight delay.
4. After the full word appears:

   * The entire word scales down smoothly
   * A subtle glow effect is applied
5. The text then transitions its position toward the Hero section heading location.
6. The loading screen fades out while aligning the final text position with the Hero section branding.

### Purpose

* Creates a strong first impression
* Reinforces brand identity
* Adds a premium feel to the UI

### Technical Notes

* Implement using React state + useEffect
* Use CSS transitions or Framer Motion for smooth animation
* Control timing using staggered delays
* Ensure animation duration is optimized (not too long)

---

## 9. Responsive Strategy

### Breakpoints (Tailwind)

* Mobile: default
* Tablet: `md:`
* Desktop: `lg:`

### Behavior

* Stack content vertically on small screens
* Use grid/flex layouts on larger screens
* Adjust font sizes and spacing dynamically

---

## 10. Interaction and Animations

### Core Interactions

* Smooth scrolling navigation
* Button hover glow effects
* Card hover elevation

### Advanced Animations

* Loading screen intro animation
* Section fade-ins on scroll
* Subtle transitions for content appearance

---

## 11. UX Considerations

* Strong visual focus on hero section
* Immediate brand recognition via loading animation
* Clear CTA placement
* Minimal cognitive load
* Fast perceived performance

---

## 12. Asset Strategy

* Use optimized images via Next.js Image component
* Prefer SVG icons
* Keep assets lightweight
* Maintain consistent visual tone (dark + metallic)

---

## 13. Future Design Improvements

* Advanced motion design system
* Interactive hero animations
* Improved accessibility compliance
* Design system documentation

---

## Conclusion

The design emphasizes a premium black and silver aesthetic combined with smooth animations and strong branding. The loading animation enhances the user experience by creating a visually engaging transition into the main content while maintaining performance and usability.

---
