/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "induction",
    title: "New Employee Induction Training",
    category: "Safety Induction",
    level: "Beginner",
    icon: "bi-exclamation-triangle",
    summary: "Learn the essential HSE requirements, site rules, emergency procedures, and safe work practices required before starting work at CCDC.",
    description: "This course provides newly joined employees with the essential knowledge required to work safely at CCDC operations. It introduces company HSE policies, workplace rules, personal protective equipment, hazard identification, permit to work requirements, emergency response, fire safety, H₂S awareness, confined space hazards, lifting safety, electrical safety, incident reporting, and stop-work authority.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    modules: [
      {
        title: "New Employee HSE Induction",
        lessons: [
          {
            title: "Safety Induction",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/CCDC Safety Induction.pdf",
            content: ``
          },

        ]
      },
            
    ]
  });
