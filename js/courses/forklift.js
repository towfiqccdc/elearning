/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "forklift",
    title: "Forklift Operational Safety",
    category: "Vehicle",
    level: "Intermediate",
    icon: "bi-truck",
    locked:false,
    summary: "Learn the essential safety practices for operating forklifts safely, including hazard identification, pre-use inspections, load handling, and safe driving techniques.",
    description: "This course provides essential knowledge and practical safety requirements for safe forklift operation. Employees will learn how to identify common forklift hazards, conduct pre-use inspections, understand forklift stability and load capacity, safely pick up and transport loads, maintain proper visibility, follow site traffic rules, and operate safely around pedestrians. The course also covers safe parking, battery and fuel safety, prohibited practices, emergency response, and the responsibilities of forklift operators.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    thumbImage: "images/courses/forklift.jpg",
    previewImage: "images/courses-wide/forklift.jpg",
    modules: [
      {
        title: "Forklift Operational Safety",
        lessons: [
          {
            title: "General Idea-EN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/forklift/Forklift Safety English.pdf",
            content: ``
          },

                    {
            title: "General Idea-BN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/forklift/Forklift Safety Bangla.pdf",
            content: ``
          },
           
        ]
      },

      

            {
        title: "Forklift Hazards & Risks",
        lessons: [

           {
            title: "Hazards",
            type: "video",
            duration: "7 min",
            video: "https://youtu.be/jAfHrhzydns?si=gxNrOtjT_PdtTQ1f",
            slidesPdf: "",
            content: ``
          },

                     {
            title: "How to Operate a Forklift",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/ZoDmthGk9aA?si=kVGiAUMznsCyQy70",
            slidesPdf: "",
            content: ``
          },
        ]
      },
        
            {
        title: "Stability Triangle & Load Center",
        lessons: [
          {
            title: "Load Center",
            type: "video",
            duration: "2 min",
            video: "videos/forklift/Load Center.mp4",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Stability Triangle 3D",
            type: "video",
            duration: "2 min",
            video: "videos/forklift/Stability Triangle.mp4",
            slidesPdf: "",
            content: ``
          },
                    {
            title: "Stability Triangle Explained",
            type: "video",
            duration: "7 min",
            video: "videos/forklift/Forklift Stability Triangle Explained.mp4",
            slidesPdf: "",
            content: ``
          },

        ]
      },

                  {
        title: "Forklift On Slope",
        lessons: [
          {
            title: "How Should You Drive on Forklift Ramp",
            type: "read",
            duration: "2 min",
            video: "",
            slidesPdf: "",
            content: `<img src="slides/forklift/ramp.png" alt="">`
          },
          {
            title: "Forklift Reversing on Slope",
            type: "video",
            duration: "2 min",
            video: "videos/forklift/forklift reversing on slope.mp4",
            slidesPdf: "",
            content: ``
          },


        ]
      },

      {
        title: "Forklift Pre Use Check",
        lessons: [
          {
            title: " How to carry out a Pre-Use Check",
            type: "video",
            duration: "5 min",
            video: "videos/forklift/Forklift Operation_ How to carry out a Pre-Use Check.mp4",
            slidesPdf: "",
            content: ``
          },



        ]
      },

    ]
  });
