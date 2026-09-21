/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "chemical_safety",
    title: "Chemical Safety & Hazard Communication",
    category: "Chemical Safety",
    level: "Intermediate",
    icon: "bi-exclamation-triangle-fill",
    summary: "Learn how to identify chemical hazards, understand safety signs and GHS symbols, use Safety Data Sheets (SDS/MSDS), and safely handle, store, and respond to chemical emergencies.",
    description: "This course introduces the fundamental principles of chemical safety in the workplace. Employees will learn how to identify chemical hazards, understand chemical safety signs and labels, recognize the Globally Harmonized System (GHS) hazard pictograms, and interpret important information from Safety Data Sheets (SDS), formerly known as MSDS. The course covers chemical classification, hazard and precautionary statements, required personal protective equipment (PPE), safe chemical handling and storage, labeling requirements, exposure prevention, spill response, emergency procedures, and basic first-aid measures. Employees will also learn how to use SDS information to understand the hazards, safe handling requirements, and emergency controls associated with chemicals used at the workplace.",
    instructor: "CCDC HSE Department",
    duration: "50 min",
    thumbImage: "images/courses/chemical_sign.jpg",
    previewImage: "images/courses-wide/chemical_safety.jpg",
    modules: [
      {
        title: "Chemical Safety Signs and Labels",
        lessons: [
          {
            title: "GHS Symbols/Hazard Pictograms-EN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/ghs/chemical_sign_EN.pdf",
            content: ``
          },

         {
            title: "GHS Symbols/Hazard Pictograms-BN",
            type: "slides",
            duration: "20 min",
            video: "",
            slidesPdf: "slides/ghs/chemical_sign_BN.pdf",
            content: ``
          },

                              {
            title: "Understanding GHS Symbols",
            type: "video",
            duration: "5 min",
            video: "videos/ghs/GHS.mp4",
            slidesPdf: "",
            content: ``
          },
                    {
            title: "What is the NFPA 704 Fire Diamond",
            type: "video",
            duration: "5 min",
            video: "videos/ghs/NFPA_704.mp4",
            slidesPdf: "",
            content: ``
          },

            {
            title: "OSHA-HAZCOM:Hazard Communication Standard",
            type: "read",
            duration: "15 min",
            video: " ",
            slidesPdf: "",
            content: `<div class="hazcom-module">
<style>
  .hazcom-module{
    --hz-red:#c0392b;
    --hz-dark:#1c1c1c;
    --hz-gray-bg:#f7f6f4;
    --hz-border:#e0ddd8;
    font-family:'Segoe UI', Arial, sans-serif;
    color:var(--hz-dark);
    line-height:1.6;
    max-width:900px;
    margin:0 auto;
  }
  .hazcom-module *{box-sizing:border-box;}
  .hazcom-module section{
    background:#fff;
    border:1px solid var(--hz-border);
    border-radius:8px;
    padding:24px 28px;
    margin:24px 0;
  }
  .hazcom-module h2{
    font-size:1.3rem;
    border-left:5px solid var(--hz-red);
    padding-left:12px;
    margin-top:0;
  }
  .hazcom-module h3{font-size:1.05rem;color:var(--hz-red);margin-bottom:4px;}
  .hazcom-module figure{margin:0 0 30px;text-align:center;}
  .hazcom-module figure img{
    max-width:100%;
    height:auto;
    border:1px solid var(--hz-border);
    border-radius:6px;
    background:#fff;
  }
  .hazcom-module figcaption{font-size:0.9rem;color:#666;margin-top:10px;}
  .hazcom-module .element-list{list-style:none;padding:0;margin:0;counter-reset:elcount;}
  .hazcom-module .element-list li{
    counter-increment:elcount;
    position:relative;
    padding:14px 0 14px 46px;
    border-bottom:1px dashed var(--hz-border);
  }
  .hazcom-module .element-list li:last-child{border-bottom:none;}
  .hazcom-module .element-list li::before{
    content:counter(elcount);
    position:absolute;
    left:0;
    top:12px;
    width:30px;
    height:30px;
    background:var(--hz-red);
    color:#fff;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:0.95rem;
  }
  .hazcom-module .pictogram-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
    gap:12px;
    margin-top:16px;
  }
  .hazcom-module .pictogram-grid div{
    background:var(--hz-gray-bg);
    border:1px solid var(--hz-border);
    border-radius:6px;
    padding:10px 12px;
    font-size:0.9rem;
    display:flex;
    align-items:center;
    gap:10px;
  }
  .hazcom-module .pictogram-grid img{
    width:40px;
    height:40px;
    flex-shrink:0;
    border:1px dashed #bbb;
    border-radius:4px;
    background:repeating-linear-gradient(45deg,#f0f0f0,#f0f0f0 6px,#e6e6e6 6px,#e6e6e6 12px);
    object-fit:contain;
  }
  .hazcom-module .pictogram-grid strong{display:block;color:var(--hz-red);font-size:0.85rem;}
  .hazcom-module .callout{
    background:#fdf3f2;
    border-left:5px solid var(--hz-red);
    padding:14px 18px;
    border-radius:4px;
    font-size:0.95rem;
    margin-top:16px;
  }
</style>

<section>
  <h2>Why Labels Are Standardized</h2>
  <p>
    Every hazardous chemical container in a U.S. workplace carries a label built under OSHA's
    Hazard Communication Standard (HazCom), aligned with the UN's Globally Harmonized System
    (GHS). Before this standard, manufacturers used inconsistent formats and symbols. Today,
    a label looks the same whether the product was made in Ohio or Osaka &mdash; so hazard
    information is instantly recognizable no matter where a worker encounters it.
  </p>
  <div class="callout">
    The goal is speed: in an emergency, a worker should be able to identify a hazard in the two
    or three seconds it takes to glance at a container &mdash; not by reading a paragraph of
    fine print.
  </div>
</section>

<section>
  <h2>Labeled Example: Methanol</h2>
  <figure>
    <img src="images/hazcom.jpeg" alt="Sample GHS HazCom label for Methanol showing the six required elements: product identifier, signal word, hazard statements, precautionary statements, pictograms, and supplier information">
    <figcaption>Figure 1 &mdash; A GHS-compliant label for methanol, annotated with its six required elements.</figcaption>
  </figure>

  <h2>The Six Required Label Elements</h2>
  <ol class="element-list">
    <li>
      <h3>Product Identifier</h3>
      The chemical's name, code, or batch number, matching what's on the Safety Data Sheet
      (SDS). On the example label it's simply <strong>&ldquo;Methanol,&rdquo;</strong> printed
      large and bold at the top so it can be cross-referenced with the SDS instantly.
    </li>
    <li>
      <h3>Signal Word</h3>
      Exactly one of two words: <strong>Danger</strong> (more severe hazard) or
      <strong>Warning</strong> (less severe). No ambiguity &mdash; a worker gauges severity at
      a glance.
    </li>
    <li>
      <h3>Hazard Statements</h3>
      Standardized phrases describing the nature of the hazard, e.g. <em>&ldquo;Highly
      flammable liquid and vapor&rdquo;</em> or <em>&ldquo;Causes damage to organs.&rdquo;</em>
      Because the wording is standardized, a phrase means the same thing on every label a
      worker will ever read.
    </li>
    <li>
      <h3>Precautionary Statements</h3>
      What to actually do: protective equipment, storage, and emergency response (e.g.
      <em>&ldquo;IF SWALLOWED: Immediately call a POISON CENTER or doctor/physician&rdquo;</em>).
      This is often the most operationally important part of the label.
    </li>
    <li>
      <h3>Hazard Pictograms</h3>
      Red-bordered diamond symbols that communicate hazard type across language barriers.
      A chemical can carry more than one, with no cap.
      <div class="pictogram-grid">
        <div><img src="images/ghs/fire.png" alt="Flame pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Flame</strong>Flammable materials</span></div>
        <div><img src="images/ghs/death.png" alt="Skull and crossbones pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Skull &amp; Crossbones</strong>Acute toxicity</span></div>
        <div><img src="images/ghs/corrosion.png" alt="Corrosion pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Corrosion</strong>Skin/eye damage or metal corrosion</span></div>
        <div><img src="images/ghs/health.png" alt="Health hazard pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Health Hazard</strong>Carcinogen, organ toxicity</span></div>
        <div><img src="images/ghs/exclamatory.png" alt="Exclamation mark pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Exclamation Mark</strong>Irritant, less severe effects</span></div>
        <div><img src="images/ghs/pressure.png" alt="Gas cylinder pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Gas Cylinder</strong>Gases under pressure</span></div>
        <div><img src="images/ghs/explosion.png" alt="Exploding bomb pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Exploding Bomb</strong>Explosives</span></div>
        <div><img src="images/ghs/oxydizer.png" alt="Flame over circle pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Flame Over Circle</strong>Oxidizers</span></div>
        <div><img src="images/ghs/environment.png" alt="Environment pictogram icon" onerror="this.onerror=null;this.removeAttribute('src');"><span><strong>Environment</strong>Aquatic toxicity</span></div>
      </div>
      <p style="margin-top:14px;">
        Methanol's label carries three: flame (flammable liquid), skull and crossbones (toxic
        if ingested), and health hazard (organ damage from repeated exposure).
      </p>
    </li>
    <li>
      <h3>Supplier Information</h3>
      The manufacturer or distributor's name, address, and phone number &mdash; for
      traceability, and often the fastest way to reach poison control or emergency technical
      support.
    </li>
  </ol>
</section>

<section>
  <h2>The Label Is a Summary, Not the Full Picture</h2>
  <p>
    Notice the line <em>&ldquo;CONSULT SDS FOR ADDITIONAL INFORMATION ON HAZARDS&rdquo;</em> at
    the bottom of the label. The Safety Data Sheet is a standardized 16-section document
    containing the complete toxicological, handling, storage, and emergency-response data.
    The label gives workers what they need at a glance; the SDS is where they go for depth.
  </p>
</section>

<section>
  <h2>Where the Standard Stands Today</h2>
  <p>
    OSHA updated HazCom in 2024 (effective July 19, 2024) to align with Revision 7 of GHS.
    The six core label elements above were not changed. What did change:
  </p>
  <ul>
    <li>New hazard classification categories (desensitized explosives; updates to flammable gases and aerosols)</li>
    <li>Revised wording for some hazard and precautionary statements</li>
    <li>New labeling rules for very small containers (100 mL or less, especially 3 mL or less)</li>
    <li>New provisions for chemicals released for shipment and bulk containers</li>
  </ul>
  <p>
    Compliance is being phased in through January 2028; companies may use either the 2012 or
    2024 version during the transition. The methanol example above remains fully valid and
    representative of how HazCom labels work today.
  </p>
</section>
</div>`
          },
           
        ]
      },

            {
        title: "Material Safety Data Sheet (MSDS/SDS)",
        lessons: [

           {
            title: "What is MSDS/SDS",
            type: "video",
            duration: "5 min",
            video: "videos/ghs/sds.mp4",
            slidesPdf: "",
            content: `<p> A Material Safety Data Sheet (MSDS) is a fact sheet developed by manufacturers describing the chemical properties of a product. Material Safety Data Sheets include brand-specific information such as physical data (solid, liquid, color, melting point, flash point, etc.), health effects, first aid, reactivity, storage, handling, disposal, personal protection and spill/leak procedures. As required by the Occupational Health and Safety Administration (OSHA), the target audience for information in a MSDS is the occupation worker who may be exposed to chemicals at work. However, much of the information is also relevant to consumers.

<br> The term "Material Safety Data Sheet" has been changed to "Safety Data Sheet" (SDS) to comply with a format required by OSHA to be consistent the United Nations Globally Harmonized System of Classification and Labelling of Chemicals (GHS).</p>`
          },

            {
            title: "SDS -Example",
            type: "document",
            duration: "15 min",
            video: " ",
            slidesPdf: "",
            pdfDoc: "slides/ghs/sds1.pdf",
            content: `<p> </p>`
          },

            {
            title: "SDS -Example",
            type: "document",
            duration: "15 min",
            video: " ",
            slidesPdf: "",
            pdfDoc: "slides/ghs/sds2.pdf",
            content: `<p> </p>`
          },

        ]
      },
        


    ]
  });
