/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
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
  });
