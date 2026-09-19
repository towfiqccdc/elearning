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
    thumbImage: "images/courses/loto.jpg",
    previewImage: "images/courses-wide/loto.jpg",
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

                   {
            title: "Importance of Lock Out Tag Out",
            type: "video",
            duration: "5 min",
            video: "videos/loto/loto_importance.mp4",
            slidesPdf: "",
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

      {
        title: "LOTO Tag",
        lessons: [
          {
            title: "How to fill LOTO tag?",
            type: "read",
            duration: "5 min",
            video: " ",
            slidesPdf: "",
            pdfDoc:"",
            content: `<h3>What Is a LOTO Tag?</h3>
<p>A LOTO (Lockout/Tagout) tag is a warning label attached to a lock on an energy-isolating device — a breaker, valve, or switch — that has been shut off and physically locked during maintenance or repair work. The tag tells anyone nearby that the equipment is de-energized on purpose, who locked it, and that it must not be turned back on until that person removes it themselves.</p>
<p>The tag and the physical lock always work together: the lock stops the equipment from being operated, and the tag tells people <em>why</em> it's locked and <em>who</em> to contact before touching it.</p>

<h3>Why It's Important</h3>
<ul>
  <li>Warns other workers that the equipment is intentionally de-energized — not a fault.</li>
  <li>Identifies exactly who is authorized to remove the lock, preventing someone else from re-energizing equipment while a person is still working on it.</li>
  <li>Creates an accountability trail — name, date, and reason are all recorded on the tag itself.</li>
  <li>A blank, incomplete, or illegible tag is treated as a safety violation — it must be fully and clearly filled out every time.</li>
</ul>

<h3>Example of a Correctly Filled Tag</h3>
<img src="images/loto-tag-example.jpg" alt="Example of a correctly filled-out LOTO tag, front and back">
<p style="font-size:13px; color:#666; margin-top:8px;">Front: who locked it, their department, and the date. Back: any extra remarks about the work being done.</p>

<h3>How to Fill Out a LOTO Tag — Step by Step</h3>
<ol>
  <li><strong>Isolate the energy source first.</strong> Shut off and physically lock the breaker, valve, or switch before touching the tag.</li>
  <li><strong>Write your full name</strong> in the "Name" field — never initials only, and never someone else's name.</li>
  <li><strong>Write your department</strong> so anyone reading the tag knows who to contact.</li>
  <li><strong>Write the date</strong> you applied the lock/tag, not a later date.</li>
  <li><strong>Fill in "Expected Completion"</strong> if the tag has that field, so others know roughly when the work should be done.</li>
  <li><strong>Describe the reason and equipment in Remarks</strong> — e.g. "Pump P-12 motor repair" — so anyone reading it understands exactly why it's locked.</li>
  <li><strong>Attach the tag to the same lock</strong> securing the energy-isolating device — never leave it loose or attached elsewhere.</li>
  <li><strong>Verify isolation</strong> by attempting to start the equipment (a "try" step) after the tag is applied, confirming zero energy.</li>
  <li><strong>Only you remove your own lock/tag</strong> once the work is fully complete and the equipment is safe to re-energize.</li>
</ol>

<h3>Key Rule to Remember</h3>
<p>No one removes another person's lock or tag — ever, under any circumstance — except through a formal, authorized "lock removal" procedure when the original person is unavailable. If a tag is damaged, illegible, or falls off, stop work and replace it before continuing.</p>`
          },
           
        ]
      },

    ]
  });
