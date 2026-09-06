/*
  ===========================================================================
  COURSE DATA — this is the ONLY file you need to edit to:
    - add a new course
    - add/edit modules and lessons within a course
    - add a video or slide deck to a lesson

  Each lesson has a `type`: "reading", "video", or "slides".
  The type controls what shows above the lesson text:
    - "reading" — text only, no media area
    - "video"   — fill in `video`. Paste any normal YouTube link (watch,
                  share, or embed format all work — it's auto-converted),
                  or a direct .mp4 file path. Leave "" for a "video coming
                  soon" placeholder.
    - "slides"  — fill in ONE of these three fields, in order of preference:

                  1. `slidesPdf` (RECOMMENDED) — path to a PDF exported
                     from PowerPoint (File > Save As > PDF, one click).
                     Renders as a proper in-page slideshow: full-size stage,
                     prev/next arrows, keyboard arrow-key navigation, and a
                     thumbnail strip to jump to any slide — with no
                     download link shown anywhere.
                     e.g. slidesPdf: "slides/ptw-overview.pdf"

                  2. `slides` — an embeddable link for a deck already
                     hosted online (Google Slides "Publish to web > Embed",
                     or PowerPoint Online's Embed option). Only useful if
                     the file is reachable at a public URL — won't work for
                     something purely local.

                  3. `slidesFile` — a fallback: a direct path to the raw
                     .pptx file. This shows a "Download" card instead of a
                     slideshow — use this only if you haven't converted to
                     PDF yet, since it lets people download the file.

                  Leave all three "" for a "slides coming soon" placeholder.

  IMPORTANT: the slides feature (PDF.js) only works when this site is
  served over http (e.g. `python3 -m http.server` — see README), not when
  index.html is opened by double-clicking it. This is a browser security
  restriction on the file:// protocol, not a bug.

  Working examples of all three lesson types are already in the data below
  — look for "How to Complete One" (STOP Cards, a working slidesPdf demo)
  and "The Compliance Audit Procedure" (HSE Audit, the slidesFile fallback).

  Each course needs a unique `slug` (used in the URL: course.html?c=slug).
  ===========================================================================
*/

const COURSES = [
  {
    slug: "fire-extinguisher-training",
    title: "Fire Extinguisher Training",
    category: "High-Risk Work",
    level: "Intermediate",
    icon: "bi-fire",
    summary: "How to identify fire classes, choose the right extinguisher, and respond safely to a small fire.",
    description: "Fires on site are rare but fast-moving, and using the wrong extinguisher — or hesitating — can make things worse. This course covers the fire triangle, the different classes of fire, how each extinguisher type works, and the correct technique and decision-making for a safe response.",
    instructor: "CCDC HSE Department",
    duration: "40 min",
    modules: [
      {
        title: "Introduction",
        lessons: [
          {
            title: "Introduction",
            type: "read",
            duration: "7 min",
            video: "",
            slides: "",
            content: `<div class="fx-lesson">
<style>
  .fx-lesson { color: #1f2937; font-size: 15px; line-height: 1.6; }
  .fx-lesson * { box-sizing: border-box; }

  .fx-lesson header {
    border-bottom: 2px solid #1f2937;
    padding-bottom: 16px;
    margin-bottom: 32px;
  }

  .fx-lesson h1 {
    font-size: 28px;
    font-weight: 800;
    color: #111827;
    letter-spacing: -0.5px;
  }

  .fx-lesson .subtitle {
    font-size: 15px;
    color: #4b5563;
    margin-top: 4px;
  }

  .fx-lesson .section-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin-top: 36px;
    margin-bottom: 16px;
    border-left: 4px solid #dc2626;
    padding-left: 10px;
  }

  .fx-lesson p { margin-bottom: 12px; }
  .fx-lesson ul { margin: 8px 0 16px 20px; }
  .fx-lesson li { margin-bottom: 4px; }

  .fx-lesson .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
    margin-bottom: 24px;
  }

  @media (max-width: 650px) {
    .fx-lesson .grid-2 { grid-template-columns: 1fr; }
  }

  .fx-lesson .img-box { text-align: center; }
  .fx-lesson .img-box img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .fx-lesson .caption {
    font-size: 12px;
    color: #6b7280;
    margin-top: 6px;
  }

  .fx-lesson .class-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin: 20px 0;
  }

  .fx-lesson .class-card {
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 14px;
    text-align: center;
  }

  .fx-lesson .badge {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }
  .fx-lesson .badge.a { background: #16a34a; }
  .fx-lesson .badge.b { background: #9333ea; }
  .fx-lesson .badge.c { background: #0284c7; }
  .fx-lesson .badge.d { background: #d97706; }
  .fx-lesson .badge.k { background: #111827; }

  .fx-lesson .class-card h4 {
    font-size: 13px;
    font-weight: 700;
    color: #111827;
  }
  .fx-lesson .class-card p {
    font-size: 12px;
    color: #4b5563;
    margin-bottom: 0;
  }

  .fx-lesson table.types-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  .fx-lesson table.types-table th,
  .fx-lesson table.types-table td {
    border-bottom: 1px solid #e5e7eb;
    padding: 12px 10px;
    text-align: left;
    vertical-align: top;
  }
  .fx-lesson table.types-table th {
    font-size: 12px;
    font-weight: 700;
    color: #374151;
    text-transform: uppercase;
    border-bottom: 2px solid #111827;
  }
  .fx-lesson .type-name {
    font-weight: 700;
    color: #111827;
  }

  .fx-lesson .pill {
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-right: 2px;
  }
  .fx-lesson .pill.a { background: #16a34a; }
  .fx-lesson .pill.b { background: #9333ea; }
  .fx-lesson .pill.c { background: #0284c7; }
  .fx-lesson .pill.d { background: #d97706; }
  .fx-lesson .pill.k { background: #111827; }
  .fx-lesson .pill.off { background: #e5e7eb; color: #9ca3af; text-decoration: line-through; }

  .fx-lesson .warn {
    background: #fff5f5;
    border-left: 4px solid #dc2626;
    padding: 12px 16px;
    margin: 20px 0;
    font-size: 14px;
  }
  .fx-lesson .note {
    background: #fffbe3;
    border-left: 4px solid #d97706;
    padding: 12px 16px;
    margin: 20px 0;
    font-size: 14px;
  }
  .fx-lesson footer {
    margin-top: 40px;
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
    font-size: 12px;
    color: #6b7280;
  }
</style>

<header>
  <h1>How Fire Extinguishers Work</h1>
  <div class="subtitle">A minimal reference guide for fire safety, extinguisher types, and applications</div>
</header>

<div class="section-title">1. Fire Triangle &amp; Extinguisher Anatomy</div>

<div class="grid-2">
  <div>
    <p>Fire is a rapid chemical reaction between oxygen and a combustible fuel, releasing heat, light, and smoke. For a fire to burn, four elements must be present simultaneously:</p>
    <ul>
      <li><strong>Fuel:</strong> Combustible material.</li>
      <li><strong>Oxygen:</strong> Sustains combustion.</li>
      <li><strong>Heat:</strong> Raises material to ignition temperature.</li>
      <li><strong>Chemical Reaction:</strong> The combustion process.</li>
    </ul>
    <p>Fire extinguishers work by cooling the fuel, removing oxygen, or interrupting this chemical reaction.</p>
  </div>

  <div class="img-box">
    <img src="https://www.firetrainingcompany.co.uk/wp-content/uploads/sites/7/2021/09/fire-triangle.png" alt="Fire Extinguisher Equipment" style="max-height: 180px; object-fit: cover;">
    <div class="caption">Fire requires Fuel, Oxygen, and Heat to exist</div>
  </div>
</div>

<div class="grid-2" style="margin-top: 20px;">
  <div class="img-box">
    <img src="https://pdhsafety.com/media/courses/236/Portable%20Fire%20Extinguishers/Extinguisher%20Basics/cutaway.jpg" alt="Fire Extinguisher Unit" style="max-height: 220px; object-fit: cover;">
    <div class="caption">Standard Stored-Pressure Fire Extinguisher</div>
  </div>

  <div>
    <p><strong>Key Extinguisher Components:</strong></p>
    <ul>
      <li><strong>Handle / Lever:</strong> Squeezed to release the agent.</li>
      <li><strong>Safety Pin:</strong> Prevents accidental discharge.</li>
      <li><strong>Pressure Gauge:</strong> Indicates if pressure is operational.</li>
      <li><strong>Discharge Nozzle / Hose:</strong> Directs the extinguishing agent.</li>
      <li><strong>Cylinder:</strong> Holds agent (Water, CO₂, or Dry Chemical).</li>
    </ul>
  </div>
</div>

<div class="section-title">2. Fire Classes</div>
<p>Match the class letter on the extinguisher label to the burning material:</p>

<div class="class-grid">
  <div class="class-card">
    <div class="badge a">A</div>
    <h4>Ordinary Combustibles</h4>
    <p>Wood, paper, cloth, rubber, plastics</p>
  </div>
  <div class="class-card">
    <div class="badge b">B</div>
    <h4>Flammable Liquids</h4>
    <p>Gasoline, oil, paints, solvents</p>
  </div>
  <div class="class-card">
    <div class="badge c">C</div>
    <h4>Electrical Equipment</h4>
    <p>Wiring, fuse boxes, machinery</p>
  </div>
  <div class="class-card">
    <div class="badge d">D</div>
    <h4>Combustible Metals</h4>
    <p>Magnesium, titanium, sodium</p>
  </div>
  <div class="class-card">
    <div class="badge k">K</div>
    <h4>Kitchen Fires</h4>
    <p>Cooking oils and fats</p>
  </div>
</div>

<div class="section-title">3. Types of Fire Extinguishers</div>

<table class="types-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Rated For</th>
      <th>How It Works &amp; Best Used On</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="type-name">Water (APW)</span></td>
      <td><span class="pill a">A</span><span class="pill off">B</span><span class="pill off">C</span></td>
      <td>Cools fuel. Use <strong>only</strong> on wood, paper, and cloth. Never use on liquid or electrical fires.</td>
    </tr>
    <tr>
      <td><span class="type-name">Carbon Dioxide (CO₂)</span></td>
      <td><span class="pill off">A</span><span class="pill b">B</span><span class="pill c">C</span></td>
      <td>Displaces oxygen. Leaves no residue. Has a hard discharge horn and no pressure gauge.</td>
    </tr>
    <tr>
      <td><span class="type-name">Multi-Purpose Dry Chemical</span></td>
      <td><span class="pill a">A</span><span class="pill b">B</span><span class="pill c">C</span></td>
      <td>Coats fuel and breaks chemical reaction. Most common all-purpose extinguisher.</td>
    </tr>
    <tr>
      <td><span class="type-name">Class D Powder</span></td>
      <td><span class="pill d">D</span></td>
      <td>Special agents for combustible metal fires (e.g., magnesium, titanium).</td>
    </tr>
    <tr>
      <td><span class="type-name">Class K Wet Chemical</span></td>
      <td><span class="pill k">K</span></td>
      <td>Forms a cooling blanket over hot cooking oils. Used in commercial kitchens.</td>
    </tr>
  </tbody>
</table>

<div class="warn">
  <strong>WARNING: Never use water on flammable liquids or electrical fires.</strong> Water will spread liquid fires and can cause fatal electric shock on energized equipment.
</div>

<div class="note">
  <strong>Class K Note:</strong> Class K extinguishers are meant to be used only after the fixed hood suppression system has been activated.
</div>

<div class="section-title">4. Typical Locations</div>
<ul>
  <li><strong>Water (APW):</strong> Offices, dorms, warehouses.</li>
  <li><strong>CO₂:</strong> Server rooms, computer labs, electrical panels.</li>
  <li><strong>Multi-Purpose Dry Chemical:</strong> Homes, workshops, general facilities.</li>
  <li><strong>Class D:</strong> Metal machine shops and chemical labs.</li>
  <li><strong>Class K:</strong> Commercial kitchens and cafeterias.</li>
</ul>

<footer>
  Reference guide — always follow local regulations and site safety procedures. If a fire is spreading, evacuate immediately.
</footer>
</div>`
          },
          {
            title: "Fire Triangle",
            type: "video",
            duration: "8 min",
            video: "https://youtu.be/q3wjPro_rUU?si=jCQYMdy9bnhSurg2",
            slidesPdf: "",
            content: `<p>The fire triangle illustrates that combustion requires three essential elements—heat, fuel, and oxygen—and removing any one of them can stop or prevent a fire.</p>`
          }
        ]
      },
      {
        title: "Basic Firefighting Concepts",
        lessons: [
          {
            title: "Fire Extinguisher Concepts",
            type: "slides",
            duration: "9 min",
            video: "",
            slidesPdf: "slides/Fire Extinguisher_English.pdf",
            content: ``
          },
          {
            title: "How To Use Fire Extinguisher",
            type: "video",
            duration: "10 min",
            video: "https://youtu.be/GVBamXXVD30?si=hCHBdjwS8xYvgTMB",
            slides: "",
            content: ``
          }
        ]
      },
            {
        title: "Fire Extinguisher Maintenance/ Inspection / Testing",
        lessons: [
          {
            title: "How To Inspect Fire Extinguisher",
            type: "video",
            duration: "9 min",
            video: "https://youtu.be/cnM8qO9naM4?si=Ue2BRoEhiOlWTwC0",
            slidesPdf: "",
            content: ``
          },
          {
            title: "What Happens During Annual Fire Extinguisher Service",
            type: "video",
            duration: "10 min",
            video: "https://youtu.be/1gOgpvyz0zc?si=Hb3nXHu8sk7FreaL",
            slides: "",
            content: ``
          },
          {
            title: "6 Year Fire Extinguisher Maintenance",
            type: "video",
            duration: "10 min",
            video: "https://youtu.be/LUGTHtia-4I?si=kUPxsPRla0hqtcvK",
            slides: "",
            content: ``
          },
         {
            title: "Hydrostatic Testing of Stored Pressure Fire Extinguisher Final",
            type: "video",
            duration: "10 min",
            video: "https://youtu.be/PNIrUop9SmQ?si=_ygMx7USUOwnXrJv",
            pdfDoc:"",
            slides: "",
            content: ``
          },
        ]
      },
      {
        title: "Documents",
        lessons: [
          {
            title: "NFPA Standard",
            type: "document",
            duration: "9 min",
            video: "",
            slidesPdf: "",
            pdfDoc:"documents/NFPA-10-2022 Standard For Portable Fire Extinguisher.pdf",
            content: ``
          },
        ]
        }
    ]
  },
  
  {
    slug: "ptw",
    title: "Permit to Work (PTW) System",
    category: "Work Permits",
    level: "Beginner",
    icon: "bi-file-earmark-check",
    summary: "Understand how CCDC's Permit to Work system controls high-risk activities on site, from issuing to close-out.",
    description: "The Permit to Work (PTW) system is the backbone of high-risk work control on any drilling site. This course walks through why PTW exists, the different permit types used across CCDC operations, and the full lifecycle of a permit — from risk assessment to issue, execution, and close-out.",
    instructor: "CCDC HSE Department",
    duration: "45 min",
    modules: [
      {
        title: "Introduction to PTW",
        lessons: [
          {
            title: "Why PTW Matters",
            type: "reading",
            duration: "8 min",
            video: "",
            slides: "",
            content: ``
          },
          {
            title: "The PTW Lifecycle",
            type: "reading",
            duration: "10 min",
            video: "",
            slides: "",
            content: `<p>Every permit follows the same lifecycle: risk assessment, preparation, approval, execution, monitoring, and closure.</p>
                      <ol>
                        <li><strong>Risk Assessment</strong> — identify hazards and required controls</li>
                        <li><strong>Preparation</strong> — complete the permit form with scope, controls, and PPE</li>
                        <li><strong>Approval</strong> — authorized issuer reviews and signs</li>
                        <li><strong>Execution</strong> — work proceeds under the conditions stated on the permit</li>
                        <li><strong>Monitoring</strong> — conditions are checked periodically during the work</li>
                        <li><strong>Closure</strong> — permit is formally closed once work is complete and the area is safe</li>
                      </ol>`
          }
        ]
      },
      {
        title: "Permit Types",
        lessons: [
          {
            title: "Hot Work & Working at Height",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p><strong>Hot Work</strong> permits cover any activity producing a spark, flame, or sufficient heat to act as an ignition source — welding, grinding, cutting.</p>
                      <p><strong>Working at Height</strong> permits apply to any work at elevation where a fall could cause injury, and require fall protection plans to be documented before work starts.</p>`
          },
          {
            title: "Electrical Isolation & Lifting",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p><strong>Electrical Isolation</strong> permits ensure equipment is de-energized, locked out, and tagged before anyone works on it.</p>
                      <p><strong>Lifting</strong> permits apply to crane and rigging operations, requiring a lift plan, competent rigger, and clear exclusion zones.</p>`
          },
          {
            title: "Permit Issuing Walkthrough",
            type: "video",
            duration: "6 min",
            video: "",
            slides: "",
            content: `<p>This lesson will walk through a real permit form field-by-field, showing common mistakes to avoid during issuing.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "confined-space",
    title: "Confined Space Entry",
    category: "High-Risk Work",
    level: "Intermediate",
    icon: "bi-exclamation-diamond",
    summary: "Safe entry procedures, atmospheric testing, and emergency rescue planning for confined space work.",
    description: "Confined spaces present some of the highest-consequence risks on a drilling site. This course covers how to recognize a confined space, the atmospheric testing and ventilation requirements before entry, and what a proper rescue plan looks like.",
    instructor: "CCDC HSE Department",
    duration: "40 min",
    modules: [
      {
        title: "Recognizing the Hazard",
        lessons: [
          {
            title: "What Counts as a Confined Space",
            type: "video",
            duration: "7 min",
            video: "https://youtu.be/omsAodbwOo4?si=OtgzkIitm-9aQ71i",
            slides: "",
            content: `<p>A confined space has limited entry/exit, is not designed for continuous occupancy, and may develop a hazardous atmosphere. Tanks, pits, vessels, and some cellars all qualify.</p>`
          },
          {
            title: "Common Hazards Inside",
            type: "slides",
            duration: "8 min",
            video: "",
            slidesPdf: "slides/Confined_Spaces.pdf",
            content: `<p>Oxygen deficiency, toxic gas accumulation (like H2S), flammable atmospheres, and engulfment are the leading hazards found in confined spaces.</p>`
          }
        ]
      },
      {
        title: "Entry Procedures",
        lessons: [
          {
            title: "Atmospheric Testing & Ventilation",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p>Test for oxygen levels, flammable gases, and toxic substances before and during entry. Maintain continuous ventilation where required, and re-test if work is interrupted.</p>`
          },
          {
            title: "Emergency Rescue Procedures",
            type: "video",
            duration: "10 min",
            video: "",
            slides: "",
            content: `<p>This lesson covers the standby attendant role, communication procedures, and non-entry rescue equipment. Video to be added.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "compressed-gas",
    title: "Compressed Gas Safety",
    category: "Materials Handling",
    level: "Beginner",
    icon: "bi-droplet-half",
    summary: "Safe handling, storage, and transport of compressed gas cylinders on site.",
    description: "Compressed gas cylinders store enormous potential energy and can become dangerous projectiles if mishandled. This course covers correct handling, storage, and transport practices.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    modules: [
      {
        title: "Handling & Storage",
        lessons: [
          {
            title: "Cylinder Handling Basics",
            type: "slides",
            duration: "8 min",
            video: "",
            slidesPdf: "slides/H2S Safety.pdf",
            content: `<p>Secure cylinders upright at all times, use trolleys for transport, and never drop, roll, or drag a cylinder.</p>`
          },
          {
            title: "Storage Requirements",
            type: "reading",
            duration: "8 min",
            video: "",
            slides: "",
            content: `<p>Separate incompatible gases (e.g. oxygen from fuel gases), keep cylinders away from heat sources, and store in well-ventilated, upright racks.</p>`
          },
          {
            title: "Knowledge Check Topics",
            type: "reading",
            duration: "6 min",
            video: "",
            slides: "",
            content: `<p>Placeholder for content drawn from the 50-mark compressed gas safety assessment — cylinder color coding, valve protection, and leak response.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "slings-rigging",
    title: "Slings & Rigging Hardware",
    category: "Materials Handling",
    level: "Intermediate",
    icon: "bi-link-45deg",
    summary: "Inspection, safe working loads, and correct use of lifting hardware.",
    description: "Rigging failures are among the most severe incident categories on a drilling site. This course covers sling types, pre-use inspection, and safe lifting practices.",
    instructor: "CCDC HSE Department",
    duration: "35 min",
    modules: [
      {
        title: "Rigging Fundamentals",
        lessons: [
          {
            title: "Types of Slings & Hardware",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p>Wire rope, chain, and synthetic slings each have different safe working loads (SWL) and inspection criteria. Selecting the wrong type for the load and environment is a common root cause of failures.</p>`
          },
          {
            title: "Pre-Use Inspection",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p>Before every lift: check for wear, deformation, cuts, corrosion, and missing tags. Any doubt means the sling is removed from service.</p>`
          },
          {
            title: "Safe Lifting Practices",
            type: "video",
            duration: "8 min",
            video: "",
            slides: "",
            content: `<p>Video walkthrough of a compliant lift — tag lines, exclusion zones, and signal person communication. Video to be added.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "journey-management",
    title: "Journey Management",
    category: "Transport & Logistics",
    level: "Beginner",
    icon: "bi-signpost-split",
    summary: "Route risk assessment and journey planning for site travel.",
    description: "Road travel is statistically one of the highest-risk activities in the drilling industry. This course covers how Journey Management Plans and Route Risk & Security Assessments (RRSA) are built.",
    instructor: "CCDC HSE Department",
    duration: "25 min",
    modules: [
      {
        title: "Planning a Safe Journey",
        lessons: [
          {
            title: "Route Risk Assessment Basics",
            type: "reading",
            duration: "8 min",
            video: "",
            slides: "",
            content: `<p>Journey Management Plans assess road conditions, accident history, and security risks along a route before travel is approved.</p>`
          },
          {
            title: "Security Considerations",
            type: "reading",
            duration: "7 min",
            video: "",
            slides: "",
            content: `<p>RRSA documents combine verified accident and crime data to flag higher-risk stretches of a route and set mitigation measures.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "emergency-response",
    title: "Emergency Response & Alarm Signals",
    category: "Emergency Preparedness",
    level: "Beginner",
    icon: "bi-bell",
    summary: "Rig emergency alarm signals and the correct response actions for each.",
    description: "Knowing what each alarm signal means — and what to do when you hear it — is fundamental to everyone on site, regardless of role.",
    instructor: "CCDC HSE Department",
    duration: "20 min",
    modules: [
      {
        title: "Alarm Signals",
        lessons: [
          {
            title: "Alarm Signal Types",
            type: "reading",
            duration: "6 min",
            video: "",
            slides: "",
            content: `<p>Each alarm tone corresponds to a specific emergency type — fire, H2S release, general muster, or all-clear. Recognizing the difference by sound alone is a core competency.</p>`
          },
          {
            title: "Muster Point Procedures",
            type: "reading",
            duration: "7 min",
            video: "",
            slides: "",
            content: `<p>On hearing a muster alarm: stop work safely, proceed to your designated muster point, and remain for headcount until the all-clear is given.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "stop-cards",
    title: "STOP Card Program",
    category: "Behavioral Safety",
    level: "Beginner",
    icon: "bi-card-checklist",
    summary: "Observation-based safety reporting using STOP cards.",
    description: "The STOP card program empowers every employee to report unsafe — and safe — behaviors and conditions they observe on site, building a culture of shared accountability.",
    instructor: "CCDC HSE Department",
    duration: "15 min",
    modules: [
      {
        title: "Using STOP Cards",
        lessons: [
          {
            title: "What is a STOP Card",
            type: "reading",
            duration: "6 min",
            video: "",
            slides: "",
            content: `<p>STOP cards let any employee report unsafe or safe behaviors and conditions observed on site — no seniority required to raise one.</p>`
          },
          {
            title: "How to Complete One",
            type: "slides",
            duration: "6 min",
            video: "",
            slides: "",
            slidesFile: "",
            slidesPdf: "slides/stop-cards-demo.pdf",
            content: `<p>Be specific about the location, behavior/condition observed, and any conversation held with the person involved. Cards feed into monthly trend statistics.</p>
                      <p>This is a working demo slideshow (placeholder content) — replace <code>slides/stop-cards-demo.pdf</code> with your real STOP card training deck saved as a PDF.</p>`
          }
        ]
      }
    ]
  },
  {
    slug: "hse-audit",
    title: "HSE Inspection & Audit",
    category: "Compliance",
    level: "Advanced",
    icon: "bi-clipboard-data",
    summary: "Conducting HSE inspections and understanding the compliance audit process.",
    description: "This course covers how routine HSE inspections are conducted and how they feed into CCDC's formal Compliance Audit Procedure, built on a Plan-Do-Check-Act structure.",
    instructor: "CCDC HSE Department",
    duration: "40 min",
    modules: [
      {
        title: "Inspections & Audits",
        lessons: [
          {
            title: "Inspection Fundamentals",
            type: "reading",
            duration: "9 min",
            video: "",
            slides: "",
            content: `<p>Regular inspections identify hazards before they cause incidents. A good inspection is scheduled, structured, and followed up with tracked corrective actions.</p>`
          },
          {
            title: "The Compliance Audit Procedure",
            type: "slides",
            duration: "10 min",
            video: "",
            slides: "",
            slidesFile: "slides/hse-compliance-audit-procedure.pptx",
            content: `<p>CCDC's audit procedure follows a Plan-Do-Check-Act (PDCA) structure, tying findings back into the three-tier HSE Management System.</p>
                      <p>The full procedure deck is available above — this is a placeholder link; drop your actual file in a <code>slides/</code> folder next to index.html and update the path here.</p>`
          }
        ]
      }
    ]
  }
];

// ---- Helper functions used by the site — no need to edit below this line ----

function getAllCourses() {
  return COURSES;
}

function getCourseBySlug(slug) {
  return COURSES.find(c => c.slug === slug);
}

function getAllCategories() {
  return [...new Set(COURSES.map(c => c.category))];
}

function countLessons(course) {
  return course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
}
