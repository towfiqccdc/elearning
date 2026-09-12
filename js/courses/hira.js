/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "hira",
    title: "Hazard Identification & Risk Assessment",
    category: "Hazard& Risk",
    level: "Beginner",
    locked:true,
    icon: "bi-exclamation-triangle",
    summary: "Learn how to identify workplace hazards, assess risks, and apply effective control measures using the HIRA process.",
    description: "This course introduces the fundamental principles of Hazard Identification and Risk Assessment (HIRA). Employees will learn how to recognize hazards, understand the difference between hazards and risks, assess likelihood and severity, use a 5×5 risk matrix, determine risk levels, and apply the hierarchy of controls to reduce workplace risks. The course also covers job safety analysis, control measures, residual risk, and practical HIRA requirements for safe work activities.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    modules: [
      {
        title: "Hazard Identification & Risk Assessment",
        lessons: [
          {
            title: "General Idea",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/Hazard Indentification & Risk Assessment Eng.pdf",
            content: ``
          },
           
        ]
      },

            {
        title: "Hazard Identification",
        lessons: [

           {
            title: "Hazard Vs Risk",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/gFE0uj1V59A?si=jeEEo-IBFXCooQHi",
            slidesPdf: "",
            content: ``
          },

                     {
            title: "Classification of Hazard",
            type: "video",
            duration: "5 min",
            video: "https://youtu.be/vpbY50AST2Y?si=8rPGG1bV9HPnco-m",
            slidesPdf: "",
            content: ``
          },
        ]
      },
        
            {
        title: "Risk Assessment",
        lessons: [
          {
            title: "What Is Risk Assessment",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/xnVomQcRux8?si=MoNu8jUNCnYmUW5Y",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Steps of Risk Assessment",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/KJoOUNfk-ec?si=6xL0JoAr3gL2uW6r",
            slidesPdf: "",
            content: ``
          },

        ]
      },

                  {
        title: "Hierarchy of Controls",
        lessons: [
          {
            title: "Hierarchy of Controls",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/O8e0_RzDxQU?si=AvlUlZLFUkex5VAL",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Hierarchy of Controls With Example",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/dnXDTaYqagM?si=wMEWXgygSPBkUgR-",
            slidesPdf: "",
            content: ``
          },
                   {
            title: "Risk Assessment Practice",
            type: "read",
            duration: "2 min",
            video: "",
            slidesPdf: "",
            content: `

  <p>
    Test your understanding by completing the risk assessment challenge.
  </p>

  <iframe
    src="games/risk-assessment-challenge.html"
    width="100%"
    height="800"
    style="border:none; border-radius:12px;">
  </iframe>`
          },

        ]
      },

    ]
  });
