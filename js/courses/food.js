/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "food",
    title: "Food Hygiene",
    category: "Health & Hygiene",
    level: "Intermediate",
    icon: "bi-egg-fried",
    summary: "Learn how to maintain good food hygiene, prevent contamination, and safely prepare, handle, store, and serve food.",
    description: "This course introduces the fundamental principles of food hygiene and food safety. Employees will learn how to maintain personal hygiene, prevent cross-contamination, safely handle and prepare food, control food temperatures, store food properly, maintain clean cooking and dining areas, and follow safe practices during food preparation and serving. The course also covers common sources of food contamination, proper handwashing, safe thawing and cooking, cleaning and sanitation, pest control, and the responsibilities of food handlers in preventing foodborne illness.",
    instructor: "CCDC HSE Department",
    duration: "50 min",
    thumbImage: "images/courses/food.jpg",
    previewImage: "images/courses-wide/food.jpg",
    modules: [
      {
        title: "Food Safety & Personal Hygiene",
        lessons: [
          {
            title: "Basics-EN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/food/food-Eng.pdf",
            content: ``
          },

         {
            title: "Basics-BN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/food/food-BN.pdf",
            content: ``
          },
           
        ]
      },

            {
        title: "Food Hygiene ",
        lessons: [

           {
            title: "Four Golden Rules of food safety",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/RUeVNCEDbCo?si=_k3vHvmT7KaU8UcX",
            slidesPdf: "",
            content: ``
          },

            {
            title: "Handwashing",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/cCpr11OuYKI?si=kOPgdlexM7DhHgHI",
            slidesPdf: "",
            content: ``
          },

                      {
            title: "Food Poisoning: Symptoms, Causes and Treatment",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/-eLqn6lqMbU?si=D8C9MfRHf8SrJOcv",
            slidesPdf: "",
            content: ``
          },

        ]
      },
        
              {
        title: "Food Hygiene ",
        lessons: [

           {
            title: "What is cross-contamination",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/horgGwEAm7s?si=9vu6tGW2qc9Y4AuE",
            slidesPdf: "",
            content: ``
          },

        ]
      },

    ]
  });
