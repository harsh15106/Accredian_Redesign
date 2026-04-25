# Accredian Enterprise Page (Clone)

## Overview

This project is a clone of the Accredian Enterprise website built as part of a Full Stack Developer Intern assignment. The goal was to recreate the landing page with a clean UI, responsive design, reusable components, and basic API integration using modern web development practices.

Live Demo: [Add your Vercel link here]
Repository: https://github.com/harsh15106/Accredian_Redesign

---

## Tech Stack

* Next.js (App Router)
* Tailwind CSS
* TypeScript
* Vercel (Deployment)

---

## Features

### 1. Landing Page

* Complete landing page with multiple sections:

  * Hero Section
  * Benefits
  * CAT Framework
  * Delivery Results
  * Features
  * FAQ Section
  * Testimonials Carousel
  * CTA Banner
  * Footer
* Clean and structured layout inspired by Accredian Enterprise website

### 2. Responsive Design

* Fully responsive across mobile, tablet, and desktop
* Mobile-first approach
* Optimized typography and spacing for smaller screens

### 3. Component-Based Architecture

* Reusable UI components:

  * Button
  * Card
  * Input
* Section-based modular components:

  * Hero
  * Navbar
  * FAQSection
  * Testimonials
  * Footer
* Clean separation of concerns

### 4. Interactive UI

* Smooth scrolling navigation
* Animated transitions
* Interactive FAQ tabs
* Testimonials carousel with smooth sliding
* Hover and click feedback (bouncy button effect)

### 5. Form Integration

* Enquiry form implemented as a reusable component
* Triggered via "Enquire Now" button
* Modal-based form popup
* Toast-based validation feedback

### 6. Form Validation (Client-side)

* All fields required
* Name and location accept only characters
* Mobile number:

  * Fixed +91 prefix
  * Exactly 10 digits
* Email:

  * Converted to lowercase
  * Must include '@'
* Candidate count:

  * Numbers only
* Validation errors shown via toast notifications

### 7. API Integration

* Next.js API route for handling form submissions
* Endpoint: `/api/leads`
* Accepts POST requests with form data
* Returns success/error response
* Ready for future database or third-party integration

### 8. UI Enhancements

* Custom scrollbar 
* Loading screen
* Smooth animations
* Dark theme with gold accents

---

## Project Structure

```
Accerdian_Full_Stack/
├── app/
│   ├── api/leads/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── FAQSection.tsx
│   ├── Testimonials.tsx
│   └── ...
├── lib/
├── public/
├── styles/
└── config files
```

---

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/harsh15106/Accredian_Redesign.git
   ```

2. Navigate to the project:

   ```
   cd Accerdian_Full_Stack
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open in browser:

   ```
   http://localhost:3000
   ```

---

## Deployment

* Deployed using Vercel
* Automatic builds from GitHub

---

## AI Usage

AI tools were used during development to accelerate productivity and improve code quality.

### Where AI Helped

* Generating UI structure and layout ideas
* Debugging layout and responsiveness issues
* Suggesting validation logic for forms
* Improving animations and interactions

### Manual Improvements

* Refined UI to match theme (black, white, gold)
* Fixed responsiveness issues manually
* Customized animations and interactions
* Structured folder architecture
* Improved UX consistency across sections

---

## Improvements with More Time

* Integrate database (MongoDB / PostgreSQL) for storing leads
* Add authentication for admin dashboard
* Optimize performance (lazy loading, image optimization)
* Enhance animations using Framer Motion

---

## Conclusion

This project demonstrates the ability to:

* Build scalable and reusable UI components
* Work with Next.js App Router
* Implement responsive and modern UI design
* Integrate APIs and handle form data
* Use AI tools effectively while applying manual improvements

---
