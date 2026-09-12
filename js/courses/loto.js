/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "loto",
    title: "Lockout/Tagout (LOTO)",
    category: "Electrical & Mechanical Safety",
    level: "Intermediate",
    icon: "bi-lock-fill",
    summary: "Learn how to safely isolate hazardous energy, apply Lockout/Tagout procedures, and prevent unexpected equipment start-up during maintenance work.",
    description: "This course introduces the fundamental principles of Lockout/Tagout (LOTO) for controlling hazardous energy during maintenance, inspection, repair, and servicing activities. Employees will learn how to identify hazardous energy sources, understand the difference between isolation and shutdown, follow the LOTO procedure, properly apply locks and tags, verify zero energy, and safely restore equipment to service. The course also covers electrical, mechanical, hydraulic, pneumatic, pressure, thermal, and other forms of hazardous energy, as well as authorized and affected employees, group LOTO, and practical LOTO requirements for safe work activities.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    modules: [
      {
        title: "Lockout/Tagout (LOTO)",
        lessons: [
          {
            title: "LOTO: General Overview",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/loto/loto.pdf",
            content: ``
          },

         {
            title: "Type of LOTO",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/loto/LOTO type.pdf",
            content: ``
          },
           
        ]
      },

            {
        title: "Pad Lock & Hasp",
        lessons: [

           {
            title: "Pad Lock & Hasp",
            type: "video",
            duration: "5 min",
            video: "videos/loto/padlock & hasp.mp4",
            slidesPdf: "",
            content: `<p> A LOTO hasp and padlock allow multiple authorized workers to safely isolate the same energy source. The hasp is attached to the energy-isolating device, allowing each worker to place their own personal padlock on it. The equipment must not be re-energized until all personal locks are removed by their respective workers and the area is confirmed safe.</p>`
          },

        ]
      },
        
            {
        title: "Valve Loto",
        lessons: [
          {
            title: "Gate Valve",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Gate valve lockout .mp4",
            slidesPdf: "",
            content: ``
          },

                    {
            title: "Adjustable Gate Valve",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Adjustable Gate Valve Lockout.mp4",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Ball Valve-1",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Ball valve lockout.mp4",
            slidesPdf: "",
            content: ``
          },

                    {
            title: "Ball Valve-2",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Fast & Simple Ball Valve.mp4",
            slidesPdf: "",
            content: ``
          },

                    {
            title: "Butterfly Valve",
            type: "video",
            duration: "2 min",
            video: "videos/loto/BUTTERFLY VALVE LOCKOUT.mp4",
            slidesPdf: "",
            content: ``
          },

                              {
            title: "Adjustable Flange Valve",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Adjustable flange Valve Lock.mp4",
            slidesPdf: "",
            content: ``
          },
                             {
            title: "Plug Valve",
            type: "video",
            duration: "2 min",
            video: "videos/loto/plug valve.mp4",
            slidesPdf: "",
            content: ``
          },
        ]
      },

                  {
        title: "Breaker Loto",
        lessons: [
          {
            title: "Pin Out Standard Miniature Circuit Breaker Type-1",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Pin Out Standard.mp4",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Pin Out Standard Miniature Circuit Breaker Type-2",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Pin out standard 2.mp4",
            slidesPdf: "",
            content: ``
          },

                    {
            title: "Pin Out Standard Miniature Circuit Breaker Type-3",
            type: "video",
            duration: "2 min",
            video: "videos/loto/PIN TYPE MCB LOCKOUT.mp4",
            slidesPdf: "",
            content: ``
          },
                   {
            title: "Miniature Circuit Breaker Lockout Type 1",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Miniature Circuit Breaker Lockout.mp4",
            slidesPdf: "",
            content: ``
          },
                             {
            title: "Miniature Circuit Breaker Lockout Type 2",
            type: "video",
            duration: "2 min",
            video: "videos/loto/MCB loto.mp4",
            slidesPdf: "",
            content: ``
          },
                             {
            title: "Multi-function Circuit Breaker Lockout",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Multi-function Circuit Breaker Lockout.mp4",
            slidesPdf: "",
            content: ``
          },
                                       {
            title: "Universal Multi-Pole Breaker Lockout",
            type: "video",
            duration: "2 min",
            video: "videos/loto/Multi-Pole Breaker Lockout .mp4",
            slidesPdf: "",
            content: ``
          },

        ]
      },

        {
        title: "Plug Loto",
        lessons: [
          {
            title: "Plug loto Type-1",
            type: "video",
            duration: "2 min",
            video: "videos/loto/plug loto1.mp4",
            slidesPdf: "",
            content: ``
          },

          {
            title: "Plug loto Type-2",
            type: "video",
            duration: "2 min",
            video: "videos/loto/PLUG LOCKOUT.mp4",
            slidesPdf: "",
            content: ``
          },
           
        ]
      },
              {
        title: "Cable Loto",
        lessons: [
          {
            title: "Cable loto Type-1",
            type: "video",
            duration: "20 min",
            video: "videos/loto/cable loto.mp4",
            slidesPdf: "",
            content: ``
          },

           
        ]
      },
                    {
        title: "Group box Loto",
        lessons: [
          {
            title: "Group Box Loto",
            type: "video",
            duration: "5 min",
            video: "videos/loto/Group Lockout.mp4",
            slidesPdf: "",
            content: ``
          },
           
        ]
      },

                          {
        title: "Checklist",
        lessons: [
          {
            title: "CCDC LOTO Checklist",
            type: "document",
            duration: "2 min",
            video: " ",
            slidesPdf: "",
            pdfDoc:"documents/Lock out Tag out operation Check list.pdf",
            content: ``
          },
           
        ]
      },

    ]
  });
