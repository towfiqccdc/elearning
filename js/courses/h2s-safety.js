/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "h2s-safety",
    title: "Hydrogen Sulfide H2S Training",
    category: "H2S",
    level: "Intermediate",
    icon: "bi-cloud-haze2",
    locked:true,
    summary: "Recognize H₂S hazards, understand exposure risks, and respond safely to an H₂S emergency.",
    description: "This course provides essential knowledge about Hydrogen Sulfide (H₂S), including its properties, health hazards, detection, alarm response, personal protective equipment, emergency procedures, and safe work practices in areas where H₂S may be present.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    modules: [
      {
        title: "introduction to hydrogen sulfide safety in oil and gas extraction",
        lessons: [
          {
            title: "Silent Killer: hydrogen sulfide release in odessa, texas",
            type: "video",
            duration: "20 min",
            video: "https://youtu.be/jh2HWT8gPeY?si=Z5a9K1e7WJkvT7vd",
            slides: "",
            content: ``
          },
          {
            title: "OSHA Fact Sheet",
            type: "document",
            duration: "10 min",
            video: "",
            pdfDoc:"documents/h2s/hydrogen_sulfide_fact.pdf",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },
          {
            title: "H2S General Concept",
            type: "slides",
            duration: "20 min",
            video: "",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "slides/H2S Safety.pdf",
            content: ``
          }
        ]
      },
            {
        title: "Hydrogen Sulfide Hazards",
        lessons: [
          {
            title: "Hydrogen Sulphide",
            type: "video",
            duration: "6 min",
            video: "https://youtu.be/CpM4R0nFf8Q?si=DHeQfjaFBLXKD4Oe",
            slides: "",
            content: ``
          },
          {
            title: "H2S Safety & Health Hazards",
            type: "read",
            duration: "15 min",
            video: "",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: `<p>H<sub>2</sub>S or sour gas is often found in oil and gas formations. It is a colorless gas that is highly toxic and extremely flammable. It is heavier than air and may travel along the ground or accumulate in low-lying areas. At low concentrations, it smells like &ldquo;rotten eggs,&rdquo; but at higher concentrations it does not have a noticeable odor. At higher concentrations it can quickly &mdash; almost immediately &mdash; overcome unprotected workers, including rescue workers. This swift unconsciousness is often referred to as &ldquo;knockdown.&rdquo;</p>

<p>Many wells where H<sub>2</sub>S gas is found have been identified, but pockets of the gas can occur anywhere and at any time. Sweet wells (containing no H<sub>2</sub>S) have been known to turn sour overnight. Also, hydrochloric acid treatments, when in contact with iron sulfide corrosion products, can react to create H<sub>2</sub>S gas in the well bore or in rig tanks. H<sub>2</sub>S hazards may include and/or be related to the following:</p>

<h3>Exposure to H<sub>2</sub>S by Inhalation</h3>

<p>Exposure by breathing (inhalation of) H<sub>2</sub>S is a primary concern. H<sub>2</sub>S fires and explosions occur at much higher concentrations than exposure limits (i.e., death can result from H<sub>2</sub>S inhalation exposures of 700&ndash;1000 ppm, while fire and explosion hazards are at levels above 40,000 ppm).</p>

<p>H<sub>2</sub>S accompanies the release of any oil or gas from a well system where H<sub>2</sub>S exists. Post warning signs indicating the hazards associated with the release of H<sub>2</sub>S at any well site that has H<sub>2</sub>S present in the system at high concentrations.</p>

<p>H<sub>2</sub>S gas causes a wide range of health effects depending on how much H<sub>2</sub>S is inhaled, and for how long. Exposure to high concentrations can quickly lead to incapacitation and death. The NIOSH IDLH (Immediately Dangerous to Life and Health) limit is only 100 parts per million (ppm).</p>

<p>The OSHA permissible exposure limit (PEL) to H<sub>2</sub>S for general industry is 20 ppm, which is not to be exceeded at any time during an 8-hour shift, except that an exposure of 50 ppm H<sub>2</sub>S is allowed for up to 10 minutes per 8-hour period as long as no other measurable exposure occurs during that 8-hour time period (see 29 CFR 1910.1000, Table Z-2). Health effects begin with prolonged exposures as low as 2 to 5 ppm &mdash; potentially resulting in nausea, tearing of the eyes, headaches, and loss of sleep. Generally, industry practice uses 10 ppm as an alarm set point to warn workers of the hazard, and to evacuate the area, and the NIOSH Recommended Exposure Limit is 10 ppm.</p>

<figure style="text-align:center;">
  <img src="https://pdhsafety.com/media/courses/334/7743/c6/h2s_warningsign.gif" style="max-width:280px;width:100%;height:auto;display:block;margin:16px auto;" />
  <figcaption style="text-align:center;font-size:0.9em;color:#595959;">Figure 1. H<sub>2</sub>S warning sign: &ldquo;Warning Hazardous Area&rdquo; in yellow letters on a black background and black letters on a yellow background. The sign reads: H<sub>2</sub>S, Extreme Health Hazard, Fatal or Harmful if Inhaled. (Reference: API RP 49)</figcaption>
</figure>

<p>H<sub>2</sub>S sometimes can be detectable by its characteristic odor; however, the sense of smell cannot be relied upon to provide a warning of higher concentrations of the gas (i.e., greater than 100 ppm) because H<sub>2</sub>S rapidly eliminates the sense of smell (due to paralysis of the olfactory nerve). Longer exposures to lower concentrations also have a similar desensitizing effect on the sense of smell.</p>

<blockquote style="border-left:4px solid #C00000;background:#FFF2CC;padding:10px 16px;margin:16px 0;font-weight:bold;">
  Never rely on sense of smell for the presence of H<sub>2</sub>S.
</blockquote>

<p>The toxic hazards associated with H<sub>2</sub>S exposure are serious at well sites. Many fatalities have occurred. Maintain strict diligence to prevent and control exposure.</p>

<h4>Possible Solutions</h4>
<ul>
  <li>Even in areas where H<sub>2</sub>S has not been seen, H<sub>2</sub>S still may suddenly present a situation where action is required. The presence of H<sub>2</sub>S should always be a concern. Establish and follow company policies, emergency procedures, and contingency plans for personnel if H<sub>2</sub>S is suspected or detected.</li>
  <li>Good planning and training programs for workers are the best ways to prevent exposure, injury, and death.</li>
  <li>Actively monitor for H<sub>2</sub>S gas, including both personal and area monitoring. Wear or place personal and area monitors in, or as close as possible to, the breathing zone.</li>
  <li>Provide comprehensive training for workers in H<sub>2</sub>S operations.
    <ul>
      <li>Identification of the characteristics, sources, and hazards of H<sub>2</sub>S.</li>
      <li>Proper use of the H<sub>2</sub>S detection methods used on the site.</li>
      <li>Recognition of, and proper response to, H<sub>2</sub>S warnings at the workplace.</li>
      <li>Symptoms of H<sub>2</sub>S exposure.</li>
      <li>Proper rescue techniques and first-aid procedures to be used in a H<sub>2</sub>S exposure.</li>
      <li>Proper use and maintenance of PPE, with demonstrated proficiency in using the PPE.</li>
      <li>Worker awareness and understanding of workplace practices and maintenance procedures to prevent exposure to H<sub>2</sub>S.</li>
      <li>Wind direction awareness (windsocks) and routes of egress.</li>
      <li>Confined space and enclosed facility entry and work procedures.</li>
      <li>Locations and use of safety equipment.</li>
      <li>Locations of safe briefing areas.</li>
      <li>Use and operation of all H<sub>2</sub>S monitoring systems.</li>
      <li>Wearing personal monitors as close as possible to the breathing zone to be most effective (e.g., above the chest or on the collar).</li>
      <li>Emergency response procedures, corrective actions, and shutdown procedures.</li>
      <li>Effects of H<sub>2</sub>S on the components of the H<sub>2</sub>S handling system (i.e., <em>metal corrosion or fatigue</em>).</li>
      <li>The importance of drilling fluid treatment plans prior to encountering H<sub>2</sub>S.</li>
    </ul>
  </li>
  <li>Provide training before beginning work assignments.</li>
  <li>When concentrations of H<sub>2</sub>S are unknown in an area:
    <ul>
      <li>Wear a NIOSH approved supplied-air respirator until H<sub>2</sub>S concentrations can be characterized.</li>
      <li>Use the buddy system for all initial characterizations.</li>
      <li>Before downgrading to other respiratory protection equipment, always acquire reliable quantitative data.</li>
    </ul>
  </li>
  <li>Ensure that monitors are properly maintained and calibrated. Refer to manufacturer&rsquo;s requirements.</li>
  <li>Develop and implement an H<sub>2</sub>S contingency plan
    <ul>
      <li>Appropriate instruction in the use of H<sub>2</sub>S safety equipment to all personnel present at all H<sub>2</sub>S hazard areas.</li>
      <li>Gas detection monitoring and alarms where H<sub>2</sub>S may exist.</li>
      <li>Appropriate respiratory protection for normal and emergency use.</li>
    </ul>
  </li>
  <li>Develop and implement an emergency response plan</li>
  <li>Ensure the use of air-supplied respirators, such as self-contained breathing apparatus, for emergency responders who will be entering areas of unknown concentrations of H<sub>2</sub>S.</li>
</ul>

<h3>H<sub>2</sub>S Accumulation and Knockdown</h3>

<p>It is possible for H<sub>2</sub>S gas to accumulate in any low area or in enclosed areas, such as gas venting systems, mud systems, cellars, pits, and tanks. A condition referred to as &ldquo;knockdown,&rdquo; or swift unconsciousness, can occur in such locations, with collapse occurring within 1 to 2 breaths. Breathing then stops and death occurs within minutes if H<sub>2</sub>S exposure continues.</p>

<p>Simply opening a hatch can lead to knockdown if a worker breathes in gases coming out of the hatch. An H<sub>2</sub>S meter will not provide fast enough warning in this situation, as knockdown is almost immediate when H<sub>2</sub>S is at or above 700 ppm.</p>

<h4>Possible Solutions</h4>
<ul>
  <li>Refer to the possible solutions in the <em>Exposure to H<sub>2</sub>S by Inhalation</em> section, above.</li>
  <li>Restrict/prevent access to areas that could contain H<sub>2</sub>S concentrations in the air.</li>
  <li>Provide adequate ventilation for the removal of any accumulations of H<sub>2</sub>S.</li>
  <li>Provide adequate respiratory protection and training to anyone who must enter an area that contains, or might contain, H<sub>2</sub>S.</li>
</ul>

<h3>H<sub>2</sub>S Fire and Explosion Hazards</h3>

<p>A byproduct of combustion of H<sub>2</sub>S is toxic SO<sub>2</sub> gas. SO<sub>2</sub> gas will most likely be present when there has been a fire or explosion involving H<sub>2</sub>S. Wear proper PPE when responding to a fire or explosion incident, including proper respiratory protection. Not all H<sub>2</sub>S is burned off at the flare. Therefore, both H<sub>2</sub>S and SO<sub>2</sub> emissions are possible, and are to be avoided, at flare discharges.</p>

<h4>Possible Solutions</h4>
<ul>
  <li>See the <em>Fire and Explosion</em> section for possible solutions to fire and explosion hazards.</li>
  <li>Consider these hazards during RAs/HAs/JSAs and make responders to fires or explosions involving H<sub>2</sub>S aware of the H<sub>2</sub>S and SO<sub>2</sub> exposure hazards.</li>
  <li>Provide H<sub>2</sub>S and SO<sub>2</sub> training to responders before response.</li>
  <li>Use SO<sub>2</sub> monitors if exposure to SO<sub>2</sub> is possible, or if responding to an H<sub>2</sub>S fire or explosion.</li>
</ul>

<h3>H<sub>2</sub>S Metal Fatigue</h3>

<p>H<sub>2</sub>S is highly corrosive and causes metals to thin or to become brittle. Therefore, employers need to take special precautions when choosing equipment when they may reasonably expect to encounter H<sub>2</sub>S. National Association of Corrosion Engineers (NACE) standard MR 0175 includes recommendations for selection of specific materials when H<sub>2</sub>S is present.</p>

<p>Metal fatigue, including hydrogen embrittlement, or sulfide stress cracking, can result in equipment failure, which can release H<sub>2</sub>S gas, and lead to H<sub>2</sub>S exposure and injury.</p>

<h4>Possible Solutions</h4>
<ul>
  <li>Select materials in H<sub>2</sub>S service in accordance with NACE specifications, standards, and recommended practices.</li>
  <li>Inspect equipment and materials according to <a href="https://www.techstreet.com/api/pages/home" target="_blank" rel="noopener">API standards</a> and recommended practices, and to manufacturers' recommendations, to identify and remove from service anything damaged by H<sub>2</sub>S corrosion before failures occur.</li>
  <li>Pay attention to older equipment that has been in H<sub>2</sub>S service.</li>
  <li>Do not step on, or hammer on, piping susceptible to H<sub>2</sub>S corrosion. Brittleness is possible, and a gas release could occur.</li>
  <li>Inspect metal ladders, steps, and stairways for corrosion. The metal, and/or the bolts, could be corroded enough to result in collapse when a load is applied (i.e., either personnel or equipment loads).</li>
  <li>Perform non-destructive testing periodically on piping and vessels in accordance with <a href="https://www.techstreet.com/api/pages/home" target="_blank" rel="noopener">API standards</a>.</li>
  <li>Treat drilling fluids with corrosion inhibitors, pH adjusters, or other products to chemically reduce corrosion failures.</li>
</ul>

<figure style="text-align:center;">
  <img src="https://pdhsafety.com/media/courses/334/7743/c6/h2s_corrosion_pipe2.jpg" style="max-width:360px;width:100%;height:auto;display:block;margin:16px auto;" />
  <figcaption style="text-align:center;font-size:0.9em;color:#595959;">Figure 2. Example of H<sub>2</sub>S-related metal fatigue and corrosion on well-site piping.</figcaption>
</figure>`
          }
        ]
      },
            {
        title: "Hydrogen Sulfide in Workplaces",
        lessons: [
          {
            title: "What You Remember Could Save a Life",
            type: "video",
            duration: "20 min",
            video: "https://youtu.be/Hgu1bMyHRqw?si=AS-LEGn9Lk8tP96B",
            slides: "",
            content: ``
          },
          {
            title: "H2S - typical sites and locations",
            type: "video",
            duration: "20 min",
            video: "https://youtu.be/B5MlG5J6HQs?si=UCvo1tO5DkpPASg3",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Hydrogen Sulphide at The Work Site",
            type: "document",
            duration: "20 min",
            video: "",
            pdfDoc:"documents/h2s/whs-pub-ch029.pdf",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          }
        ]
      },
     {
        title: "Evaluating/Controlling Exposure",
        lessons: [
          {
            title: "H2S Personal Alarm Monitors",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/A2NF4rifTqo?si=_N3o8supETLN-MAp",
            slides: "",
            content: ``
          },
          {
            title: "Hydrogen Sulphide Workplace Exposure Limits",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/KkK9L4NgtgQ?si=ZndGCY3_t9BeEOEE",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },
          {
            title: "Occupational Exposure limit ,Explosive Limits of Various Gases",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/zaE_EA9gTm0?si=b7uyy_JLOP8hjyWP",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          }
        ]
      },
           {
        title: "Protection Against H2S Exposure",
        lessons: [
          {
            title: "H2s Gas Monitor: Using a Monitor",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/mXxXIiifRI8?si=x1uwlu0LyQe46eMs",
            slides: "",
            content: ``
          },
          {
            title: "Hydrogen Sulfide H2S Questions & Answers",
            type: "video",
            duration: "4 min",
            video: "https://youtu.be/fC_eRq6qvL4?si=ZgEk9KxbJ7OdYZvt",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },
          {
            title: "What to Do in the Event of an H2S Release",
            type: "video",
            duration: "7 min",
            video: "https://youtu.be/TVklyhyXH1M?si=f9f9aly7eLwRO1M2",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          }
        ]
      },
                 {
        title: "Entering Dangerous H2S Atmospheres / Respiratory Protection",
        lessons: [
          {
            title: "Respiratory Protection Safety & H2S",
            type: "video",
            duration: "60 min",
            video: "https://youtu.be/shiqmwcA3mQ?si=Cb0Zvok9iUxJ_-L4",
            slides: "",
            content: ``
          },
          {
            title: "Advantages & Disadvantages of Different Types of Respiratory PPE",
            type: "video",
            duration: "4 min",
            video: "https://youtu.be/xDO_LTyUz8Y?si=pVy1orNoR0mankVP",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },

        ]
      },
                       {
        title: "Health Effects of H2S Exposure",
        lessons: [
          {
            title: "The Human Toll of H2S Gas",
            type: "video",
            duration: "8 min",
            video: "https://youtu.be/lSVu6yOz5U0?si=VwTHeK5qbCp1IQ7z",
            slides: "",
            content: ``
          },
          {
            title: "The Danger of Hydrogen Sulfide(h2s) When Inhaled.",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/uyua3fxcusA?si=2tGphMQXUHXdfSpr",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "",
            content: ``
          },

        ]
      },
                            {
        title: "Hydrogen Sulfide Rescue",
        lessons: [
          {
            title: "H2S Rescue",
            type: "video",
            duration: "2 min",
            video: "https://youtu.be/ANeVIv5Ksgs?si=EB_jYRIUaiDCl0BI",
            slides: "",
            content: ``
          },
          {
            title: "H2S Contingency Plan.",
            type: "read",
            duration: "20 min",
            video: "",
            pdfDoc:"",
            slidesFile: "",
            slidesPdf: "documents/h2s/APP_120046_589122.pdf",
            content: ``
          },

        ]
      },
    ]
  });
