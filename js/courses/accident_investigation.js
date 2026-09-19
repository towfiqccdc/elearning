/*
  One course's content. This file is loaded automatically by
  js/courses-data.js — you don't need to add a <script> tag anywhere.

  To add a NEW course: copy this file, change every field below, give it
  a unique `slug`, save it as js/courses/your-new-slug.js, then add
  "your-new-slug" to the COURSE_FILES list in js/courses-data.js.
  That's the only other file you need to touch.
*/
registerCourse({
    slug: "accident_investigation",
    title: "Effective Accident Investigation",
    category: "Root Cause Investigation",
    level: "Beginner",
    icon: "bi-clipboard2-pulse",
    summary: "Learn how to investigate workplace accidents, identify immediate and underlying causes, determine root causes, and apply effective corrective actions to prevent recurrence.",
    description: "This course introduces the fundamental principles of effective workplace accident investigation. Employees will learn how to respond to accidents, secure the incident scene, collect and preserve evidence, interview witnesses, document facts, identify immediate and underlying causes, determine root causes, and develop effective corrective and preventive actions. The course also covers accident investigation techniques, investigation team responsibilities, root cause analysis, accident reporting, and practical requirements for preventing similar incidents from happening again.",
    instructor: "CCDC HSE Department",
    duration: "30 min",
    thumbImage: "images/courses/investigation.png",
    previewImage: "images/courses-wide/investigation.png",
    modules: [
      {
        title: "The Basics",
        lessons: [
          {
            title: "Basic",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>The Basics of Accident Investigation</h3>

<p>
A fitting metaphor for accident investigation is to compare it to navigating a simple maze.
Imagine a group of people being asked to solve a maze as quickly as possible. When you ask
the person who finished first how they solved it, you may find that they started at the end
and traced their path backward to the beginning.
</p>

<p>
This reflects the common approach used in accident investigations. Investigators often work
<strong>backward from the accident or final event to identify what happened and why it happened</strong>.
</p>

<p>
Navigating a maze can be difficult when starting at the beginning and moving forward toward
the end. However, it becomes much easier when the path is approached in reverse. Similarly,
accident investigation involves looking backward through the sequence of events.
</p>

<p>
What may appear uncertain or complicated when looking forward becomes clearer when
investigators trace the events backward from the point where the accident occurred.
</p>

<div style="background:#f8f9fa; border-left:4px solid #dc3545; padding:12px 15px; margin:20px 0;">
  <strong>Key Principle:</strong>
  Accident investigation is not simply about finding out what happened. It is about
  tracing the events backward to understand <strong>how and why the accident occurred</strong>
  and what can be done to prevent it from happening again.
</div>

<p style="font-size:13px; color:#666;">
  <strong>Source:</strong> U.S. Department of Energy (DOE)
</p>

<h3>What is an Accident?</h3>

<p>
An accident is the final event in a series of <strong>unplanned and unique events</strong>
that results in an employee's injury or illness and may also involve property or equipment damage.
It is the end result of a combination of surface causes and deeper root causes.
</p>

<p>
To understand how an accident occurs, it is important to understand the relationship between
an <strong>actor</strong>, an <strong>action</strong>, and an <strong>event</strong>.
</p>

<ul>
  <li>
    An <strong>event</strong> occurs when an <strong>actor</strong> (a person or object)
    performs an <strong>action</strong>.
  </li>
  <li>
    The actor may be a person or an object such as equipment, tools, materials, or other
    workplace items.
  </li>
  <li>
    The action performed by the person or object can cause a change that contributes to
    an accident.
  </li>
  <li>
    An accident may result from multiple factors that occur simultaneously or interact
    with one another.
  </li>
  <li>
    These events may be interconnected or cross-linked, creating a sequence that ultimately
    leads to the accident.
  </li>
</ul>

<div style="background:#fff3cd; border-left:4px solid #ffc107; padding:12px 15px; margin:20px 0;">
  <strong>Remember:</strong>
  An accident is rarely caused by a single factor. Effective investigation looks at the
  complete sequence of events and the underlying causes.
</div>

<h3>What is an Incident?</h3>

<p>
In occupational safety and health, a <strong>workplace incident</strong> is an event that
disrupts, or has the potential to disrupt, normal workplace activities. An incident does
not necessarily result in an injury, illness, or property damage.
</p>

<p>
Incidents can include situations such as <strong>near misses, equipment malfunctions,
unsafe events, or other workplace irregularities</strong> that have the potential to cause harm.
</p>

<ul>
  <li>
    <strong>Near Miss:</strong> An event where an injury, illness, or property damage
    could have occurred but did not.
  </li>
  <li>
    <strong>Equipment Malfunction:</strong> Failure or abnormal operation of equipment
    that may create a safety risk.
  </li>
  <li>
    <strong>Other Irregularities:</strong> Any unexpected workplace event that could
    potentially lead to harm or disruption.
  </li>
</ul>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:12px 15px; margin:20px 0;">
  <strong>Key Point:</strong>
  An incident does not have to cause harm to be important. A near miss can reveal the
  same hazards and weaknesses that could eventually lead to a serious accident.
</div>`
          },
            {
            title: "Accident Type",
            type: "read",
            duration: "5 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Accident Types</h3>

<p>
An accident is not a single type of event that fits into one broad category.
In reality, workplace accidents can occur in many different ways. Understanding
the type of accident helps investigators accurately describe what happened and
identify appropriate causes and controls.
</p>

<p>Below is a partial list of common accident types:</p>

<ul>
  <li>
    <strong>Struck-by:</strong>
    An object forcefully hits a person, where the object exerts the force.
  </li>

  <li>
    <strong>Struck-against:</strong>
    A person forcefully strikes an object, with the person generating the force.
  </li>

  <li>
    <strong>Contact-by:</strong>
    Injury occurs when a person comes into contact with a harmful substance
    or material.
  </li>

  <li>
    <strong>Contact-with:</strong>
    A person initiates contact with a harmful substance or material.
  </li>

  <li>
    <strong>Caught-on:</strong>
    A person, or part of their clothing or equipment, becomes caught on an
    object that may be moving or stationary. This can cause the person to lose
    balance and fall, be pulled into machinery, or suffer other harm.
  </li>

  <li>
    <strong>Caught-in:</strong>
    A person or part of their body becomes trapped or otherwise caught in an
    opening or enclosure.
  </li>

  <li>
    <strong>Caught-between:</strong>
    A person becomes trapped or caught between objects, equipment, or structures,
    resulting in injury or potential injury.
  </li>

  <li>
    <strong>Fall-to-surface:</strong>
    A person falls and lands on the same level or surface on which they were
    standing. This may occur because of slipping, tripping, or losing balance.
  </li>

  <li>
    <strong>Fall-to-below:</strong>
    A slip or trip results in a fall from the surface a person is on to a
    lower level. For example, a worker may fall from a scaffold, platform,
    roof, or ladder.
  </li>

  <li>
    <strong>Overexertion:</strong>
    Excessive strain is placed on the body when a person lifts, pushes, pulls,
    holds, carries, or throws a heavy or large object.
  </li>

  <li>
    <strong>Bodily Reaction:</strong>
    An injury occurs solely from free body movement or from adopting a strained
    or unnatural position. This can include injuries caused by twisting,
    bending, reaching, or sudden movements.
  </li>

  <li>
    <strong>Overexposure:</strong>
    A person is exposed to harmful energy, a lack of energy, or harmful
    substances for a period of time. Examples include excessive noise, heat,
    cold, toxic chemicals, or hazardous atmospheres.
  </li>
</ul>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:12px 15px; margin:20px 0;">
  <strong>Investigation Tip:</strong>
  Correctly identifying the accident type is an important first step in
  understanding the event. Investigators should focus on the actual mechanism
  of injury and the sequence of events that led to it.
</div>`
          },
             {
            title: "Are Accidents Always Unplanned?",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Are Accidents Always Unplanned?</h3>

<p>
Accidents are generally considered <strong>unforeseen, unplanned, and unintentional events</strong>.
However, some accidents occur only after risks have been ignored, accepted, or tolerated for
weeks, months, or even years. In these situations, there may have been an intentional decision
to accept a known risk.
</p>

<p>
Therefore, it is not always accurate to say that an accident is completely "unplanned."
Workplace policies, processes, procedures, and practices can sometimes create conditions in
which accidents become highly foreseeable, particularly when safety is not treated as a priority.
</p>

<p>
For example, when a work crew falls behind schedule, workers may experience pressure from
management to hurry or take unsafe shortcuts to meet deadlines. <strong>Rushing and taking
shortcuts can significantly increase the likelihood of an accident.</strong>
</p>

<div style="background:#fff3cd; border-left:4px solid #ffc107; padding:12px 15px; margin:20px 0;">
  <strong>Important:</strong>
  A strong safety culture does not accept the idea that "accidents just happen."
  Employers should identify and correct hazards before they result in injury, illness,
  equipment damage, or other losses.
</div>

<h3>Real-Life Example: Failure to Replace a Broken Part Results in Fatality</h3>

<p>
In <strong>June 2020</strong>, a serious incident occurred at a manufacturing facility in
Ohio involving a batch operator and a concrete mixer.
</p>

<p>
The mixer discharged concrete through a pneumatic door that was designed to remain open when
its pneumatic energy was released through an exhaust valve. However, the handle of the exhaust
valve had broken off and had not been repaired or replaced.
</p>

<p>
As a result, the batch operator attempted to close the discharge door manually. During this
process, the door closed unexpectedly, causing a <strong>severe head injury</strong>.
The operator was transported to the hospital but died five days later.
</p>

<p>
A federal investigation resulted in a workplace safety citation, a
<strong>$500,000 fine</strong>—the maximum allowed—and a court-ordered
<strong>Safety Compliance Plan</strong>.
</p>

<div style="background:#f8f9fa; border:1px solid #dee2e6; border-radius:6px; padding:15px; margin:20px 0;">
  <h4 style="margin-top:0;">What Can We Learn From This Incident?</h4>

  <ul style="margin-bottom:0;">
    <li>
      <strong>Unresolved hazards can become foreseeable incidents:</strong>
      Hazards that remain uncorrected over time can eventually result in serious incidents.
    </li>

    <li>
      <strong>Investigate known maintenance issues:</strong>
      Investigators should determine whether equipment defects or maintenance problems
      were known but left unaddressed.
    </li>

    <li>
      <strong>Look at system factors:</strong>
      Procedures, responsibilities, communication, supervision, and follow-up may influence
      how workplace risks are managed.
    </li>

    <li>
      <strong>Identify immediate and underlying causes:</strong>
      Effective investigation should go beyond the immediate event and identify the deeper
      causes that allowed the incident to occur.
    </li>

    <li>
      <strong>Use incidents to improve:</strong>
      A strong safety culture treats preventable incidents as opportunities to identify
      weaknesses and improve the safety management system.
    </li>
  </ul>
</div>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:12px 15px; margin:20px 0;">
  <strong>Key Investigation Principle:</strong>
  Do not stop at asking, "What happened?" Ask,
  <strong>"Why was the hazard allowed to exist, and why did the system fail to prevent it?"</strong>
</div>`
          },
                     {
            title: "Accident Theories",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Accident Theories</h3>

<p>
Accident theories help investigators understand <strong>how and why accidents occur</strong>.
Different theories provide different ways of looking at the sequence of events, human actions,
and organizational or system factors that may contribute to an accident.
</p>

<h3>Domino Theory</h3>

<p>
The <strong>Domino Theory</strong> suggests that accidents happen because of a chain of events,
similar to a row of dominoes falling one after another.
</p>

<p>
The first "domino" might be an unsafe or unusual condition, such as a
<strong>spill on a floor</strong>. This may lead to the next domino, such as an unsafe action
where the spill is not cleaned up. Eventually, the combination of conditions and actions can
lead to an accident—the final "domino."
</p>

<p>
The theory suggests that if one of the dominoes is removed or corrected, particularly an
early contributing factor, the chain can be interrupted and the accident can be prevented.
</p>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:12px 15px; margin:20px 0;">
  <strong>Investigation Focus:</strong>
  Look for the sequence of events leading to the accident and identify where the chain
  could have been interrupted.
</div>

<h3>Common Sense Theory</h3>

<p>
The <strong>Common Sense Theory</strong> is based on the assumption that accidents are caused
by a lack of common sense.
</p>

<p>
"Common sense" generally refers to practical knowledge that people are expected to understand
and apply. However, what seems obvious to one person may not be obvious to another. Individual
understanding is influenced by <strong>education, training, experience, and workplace conditions</strong>.
</p>

<p>
When an accident is simply blamed on an employee's lack of common sense, the investigation may
focus only on the person rather than the conditions that influenced their actions.
</p>

<p>
Telling employees to "use common sense" is rarely an effective corrective action. This approach
can result in temporary fixes that address only the <strong>apparent cause</strong> while leaving
deeper organizational or system problems unresolved.
</p>

<div style="background:#fff3cd; border-left:4px solid #ffc107; padding:12px 15px; margin:20px 0;">
  <strong>Investigation Warning:</strong>
  Avoid stopping the investigation at "the worker should have known better."
  Ask what training, procedures, supervision, equipment, or workplace conditions influenced
  the worker's actions.
</div>

<h3>Systems Theory</h3>

<p>
The <strong>Systems Theory</strong> takes a broader and more comprehensive approach to accident
investigation. It recognizes that accidents can result from complex interactions between
multiple factors rather than from a single event or individual mistake.
</p>

<p>
These factors may include the <strong>work environment, materials, equipment, people,
work practices, and the safety management system</strong>.
</p>

<p>
Systems Theory also considers deeper root causes within the organization, such as weaknesses
in policies, procedures, training, supervision, communication, planning, maintenance,
or management controls.
</p>

<p>
Under this approach, an accident is viewed as the result of interactions between different
parts of the overall system. Therefore, effective accident investigation should examine both
the <strong>immediate causes</strong> and the <strong>underlying system factors</strong>
that allowed the accident to occur.
</p>

<div style="background:#f8f9fa; border-left:4px solid #198754; padding:12px 15px; margin:20px 0;">
  <strong>Key Principle:</strong>
  Accidents are rarely the result of one factor. Effective investigation looks beyond the
  final event to understand how people, equipment, environment, work processes, and the
  safety management system interacted to create the conditions for the accident.
</div>`
          },
          {
            title: "The Systems Approach",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>The Systems Approach</h3>

<p>
The systems approach to understanding why accidents happen looks at how different parts of a safety management system interact with each other.
</p>

<p>
It focuses on the bigger picture instead of just blaming individuals. This method sees accidents as signs that something is wrong with the system itself, not just hazardous conditions or the actions of one or more employees.
</p>

<p>
When using a systems approach, investigators usually assume the following:
</p>

<ul>
  <li>
    <strong>Accidents are due to system weaknesses:</strong>
    Accidents usually happen because of defects, or root causes, within the safety management system. For example, if a worker slips on a wet floor, the problem might not just be the worker’s mistake—it could be that the system didn’t provide clear rules about cleaning up spills or failed to put up warning signs.
  </li>

  <li>
    <strong>The goal is to fix the system, not to blame people:</strong>
    The investigation's main purpose is to find out what went wrong in the system so it can be fixed. For instance, if someone gets hurt while using a machine, the focus should be on whether training was missing or if the machine was poorly maintained—not just on the actions of the person using it.
  </li>

  <li>
    <strong>Discipline is not right if the system fails to support workers:</strong>
    If the system doesn't give workers the tools, training, or support they need, it's unfair to punish them for mistakes. For example, if employees don't know the emergency procedures because they were never taught, the system is at fault.
  </li>

  <li>
    <strong>Prevention means improving the system:</strong>
    To prevent future accidents, the design and function of the safety system must be improved. This includes changing inputs (like training and equipment), structure (like reporting lines and responsibilities), processes (like how inspections are done), and outcomes (like tracking incidents).
  </li>

  <li>
    <strong>A systems approach leads to long-term, cost-saving solutions:</strong>
    Instead of quick fixes or blaming people, fixing the root causes leads to safer workplaces and saves money over time. For example, updating old equipment might cost more at first, but it reduces injuries and downtime later on.
  </li>
</ul>`
          },
          {
            title: "Why Conduct the Accident Investigation",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Why Conduct the Accident Investigation</h3>

<p>
The primary purpose of an accident investigation is not to assign blame or fault, but rather to determine the root cause of the accident. The key objectives are:
</p>

<ul>
  <li>
    <strong>Identifying the Causes:</strong>
    To find out what happened and why it happened. This involves understanding the sequence of events that led to the accident, as well as the underlying factors contributing to the situation.
  </li>

  <li>
    <strong>Preventing Future Accidents:</strong>
    By identifying the root causes, measures can be implemented to prevent similar accidents in the future. This could involve changes in procedures, equipment, training, or management practices.
  </li>

  <li>
    <strong>Improving the Safety Management System:</strong>
    The findings from the investigation can be used to improve the organization's safety management system rather than merely placing blame.
  </li>

  <li>
    <strong>Compliance with OSHA Regulations:</strong>
    Conducting an accident investigation may be a regulatory requirement under certain OSHA standards. It ensures that employers fulfill their obligation to provide a safe and healthful workplace.
  </li>

  <li>
    <strong>Educating Employees and Management:</strong>
    Through the investigation process, both employees and management can learn more about the potential hazards in their work environment and the importance of following safety protocols.
  </li>
</ul>

<p>
In essence, an accident investigation is a proactive approach to enhancing workplace safety, aimed at understanding and mitigating risks to prevent recurrence, rather than simply reacting to incidents after they occur.
</p>

<h4>How to Determine the Real Purpose of an Investigation</h4>

<p>
Not all employers conduct accident investigations to uncover root causes. So, why do some employers conduct accident investigations? The answer to this question is key to the success of the entire investigation process. Here's an important principle to understand:
</p>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:15px; margin:20px 0;">
  <strong>To determine the actual purpose of a process,</strong><br>
  look at its final output.
</div>

<p>
What does this principle mean when applied to accident investigations? It means that to comprehend the purpose of the accident investigation process, one must consider its final output: the report.
</p>

<ul>
  <li>
    If the recommendations from an investigation are centered on identifying the employee(s) at fault, then the purpose of the investigation shifts to placing blame, rather than truly uncovering the root causes of the incident.
  </li>

  <li>
    If the recommendations are focused on identifying and correcting weaknesses in the safety management system itself, then the purpose of the process becomes fixing the system to prevent future incidents.
  </li>
</ul>`
          },
          {
            title: "Fix the System - Not the Blame",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Fix the System - Not the Blame</h3>

<p>
Unfortunately, you might think that the purpose of an employer's investigation aligns with OSHA's mandate. But is this really the case?
</p>

<p>
The issue with assuming that the goal of conducting employer accident investigations is to establish blame lies in the fact that once this goal is achieved, the investigation often stops.
</p>

<p>
If you think that the main goal of your investigation is to determine fault, then the analysis is deemed complete once blame is assigned. As a result, the investigation ends without further analysis of root causes. This approach also means that the employer fails to meet basic OSHA guidelines for conducting accident investigations.
</p>

<div style="background:#fff3cd; border-left:4px solid #ffc107; padding:15px; margin:20px 0; text-align:center;">
  <strong>When the purpose of an investigation is achieved,<br>
  IT STOPS!</strong>
</div>

<p>
According to 
<a href="https://www.osha.gov/pls/oshaweb/owadisp.show_document?p_table=federal_register%26p_id=12909" target="_blank" rel="noopener noreferrer">
OSHA's Safety and Health Program Management Guidelines
</a>,
the primary purpose of investigating accidents is to identify their causes and to find ways to prevent future occurrences.
</p>

<p>
OSHA goes on to say this about the investigation process:
</p>

<blockquote style="background:#f8f9fa; border-left:4px solid #6c757d; padding:15px; margin:20px 0;">
  "Although a first look may suggest that 'employee error' is a major factor, it is rarely sufficient to stop there. Even when an employee has disobeyed a required work practice, it is critical to ask, "Why?" A thorough analysis will generally reveal a number of deeper factors, which permitted or even encouraged an employee's action. Such factors may include a supervisor allowing or pressuring the employee to take short cuts in the interest of production, inadequate equipment, or a work practice which is difficult for the employee to carry out safely. An <strong>effective analysis</strong> will identify actions to address each of the causal factors in an accident or 'near miss' incident."
</blockquote>

<h4>The Output of Your Investigation</h4>

<p>
The output of your accident investigation should not merely identify violations of safety rules and assign fault like you would see in an OSHA report. The end product should identify the underlying root causes: the safety management system weaknesses such as inadequate supervision, training, physical resources, or psychosocial support.
</p>

<p>
Effective accident investigation reports do not address the question of fault. Competent managers (safety, human resources, and supervisory) should address the possibility of fault only if the completed accident report cannot identify safety management system weaknesses that contributed to the accident.
</p>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:15px; margin:20px 0;">
  <strong>Key Principle:</strong>
  Fix the system—not the blame. The purpose of an effective accident investigation is to identify and correct the weaknesses that allowed the accident to occur.
</div>`
          },
                     {
            title: "The Accident Investigation Program",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>The Accident Investigation Program</h3>

<p>
An effective accident investigation program follows standard written procedures that are clearly stated and straightforward, allowing for easy step-by-step implementation.
</p>

<p>
Characteristics common in the most effective accident investigation programs include:
</p>

<ul>
  <li>
    At least two competent persons should conduct the investigation. Working in pairs is often more effective for gathering and analyzing facts about the accident.
  </li>

  <li>
    Accident investigators must be properly trained in investigative techniques and procedures.
  </li>

  <li>
    The investigation report should be written, addressing both the immediate (surface) causes and deeper (root) causes of accidents.
  </li>

  <li>
    Recommendations in the accident investigation report should aim to:
    <ol>
      <li>correct hazardous conditions and unsafe work practices, and</li>
      <li>improve underlying Safety Management System (SMS) weaknesses.</li>
    </ol>
  </li>

  <li>
    The goal of the accident investigation is to determine the facts, not to assign blame. Disciplinary actions should be a separate matter, handled by management/human resources, and only considered if root causes remain unidentified.
  </li>

  <li>
    Surface causes of accidents should be corrected promptly, with long-term systemic improvements implemented in a timely manner.
  </li>

  <li>
    Accident reports should be evaluated annually by competent persons for consistency and quality.
  </li>

  <li>
    Safety personnel should review and evaluate the investigation program each year.
  </li>

  <li>
    Data on accident types, locations, and trends should be analyzed to enhance future investigations and prevent accidents.
  </li>

  <li>
    Information about corrective actions and system improvements should be communicated to everyone. Training should be provided as necessary.
  </li>
</ul>

<h3>The Seven-Step Process</h3>

<p>
In the upcoming course modules, we will explore a proven seven-step process for effectively investigating accidents. The seven steps are:
</p>

<ol>
  <li><strong>Secure the accident scene</strong></li>
  <li><strong>Document the accident scene</strong></li>
  <li><strong>Conduct interviews</strong></li>
  <li><strong>Develop the sequence of events</strong></li>
  <li><strong>Conduct surface and root cause analysis</strong></li>
  <li><strong>Determine the solutions</strong></li>
  <li><strong>Write the report</strong></li>
</ol>

<div style="background:#e7f3ff; border-left:4px solid #0d6efd; padding:15px; margin:20px 0;">
  <strong>Key Point:</strong>
  An effective accident investigation follows a structured process. The objective is to establish the facts, identify surface and root causes, determine effective solutions, and prevent similar accidents from happening again.
</div>`
          },
           
        ]
      },

            {
        title: "Step 1: Secure the Scene",
        lessons: [

           {
            title: "Step 1: Secure the Scene",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Step 1: Secure the Scene</h3>

<p>The first step in an effective accident investigation procedure is to promptly secure the accident scene, enabling us to accurately gather facts.</p>

<p>At this point, your primary focus should not be on determining the cause of the accident. Instead, concentrate on securing the accident scene to gather as much relevant information as possible.</p>

<p>To secure the accident scene, you can use yellow caution tape, position warning cones, or assign a guard to keep people away.</p>

<h3>Getting Started</h3>

<p>You should commence the investigation only when it is safe to do so. As the accident investigator, avoid interfering with emergency responders, and ensure that hazards have been adequately mitigated before beginning.</p>`
          },

          {
            title: "Reasons for Securing the Accident Scene",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Reasons for Securing the Accident Scene</h3>

<p>It's always important to know why we are doing something, isn't it?</p>

<p>In this scenario, it's crucial to prevent any material evidence from being tampered with or moved, particularly if the accident involves a reportable (serious or fatal) injury that could prompt an OSHA accident investigation.</p>

<p>Keep in mind that, upon OSHA's request, the employer should label materials, tools, or equipment essential for a thorough accident investigation. Ensuring that material evidence doesn't go missing or disappear from the scene is crucial.</p>`
          },

            {
            title: "Things Disappear",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Things Disappear</h3>

<p>Items such as evidence and memories naturally evolve over time and may even fade away following accidents.</p>

<h4>Material Evidence</h4>

<p>Material evidence encompasses anything that could be significant in determining what transpired.</p>

<p>Somehow, tools, equipment, and other items have a tendency to shift. Employers are often eager to 'clean up' the accident scene to resume work. Therefore, it's crucial to establish a procedure to safeguard material evidence from being relocated or vanishing.</p>

<p>If evidence goes missing, you can understand why it might become challenging to uncover the surface causes of the accident. Without identifying the surface causes, discovering and addressing the root causes will become nearly impossible. We'll delve deeper into surface and root causes later in the course.</p>

<h4>Memory</h4>

<p>Accidents are traumatic events that lead to both physical and psychological trauma. Physical trauma may affect the victim and others involved to varying degrees. Similarly, the extent of psychological trauma depends on an individual's proximity to the accident or the victim. In one way or another, everyone is impacted.</p>

<p>As time passes after an accident, people's recollections of what they saw and heard can become distorted by their thoughts and emotions. Interactions with others can also contribute to this distortion of reality. Over time, the memories of everyone connected to the accident are likely to undergo some alterations. Considering this, it's crucial to obtain written statements and conduct interviews as soon as possible.</p>`
          },

                    {
            title: "Reporting Accidents",
            type: "read",
            duration: "5 min",
            video: "",
            slidesPdf: "",
            content: ``
          },
        ]
      },
        
            {
        title: "Step 2: Document the Scene",
        lessons: [
          {
            title: "Step 2: Document the Scene",
            type: "read",
            duration: "5 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Step 2: Document the Scene</h3>

<h4>Be Prepared</h4>

<p>Once the accident scene has been roped off, it's important to immediately begin gathering evidence from as many sources as possible during an investigation.</p>

<p>One of the biggest challenges you'll face as an investigator is to determine what information is relevant. You want to gather data that will help you determine what happened, how it happened, and why it happened. Identifying items which answer these questions is the purpose of documenting the accident scene.</p>

<p>You won't be able to document the scene effectively unless you come prepared, so make sure you have put together an accident investigation kit for use during the investigation.</p>

<p><strong>Sample Accident Investigation Kit</strong></p>

<p><strong>Essential Items:</strong></p>

<ol>
  <li>Camera, film, and batteries</li>
  <li>Tape measure—preferably 100 foot</li>
  <li>Clipboard &amp; writing paper</li>
  <li>Graph paper</li>
  <li>Straight-edge ruler</li>
  <li>Pens &amp; pencils</li>
  <li>Accident investigation forms</li>
  <li>Flashlight with fresh batteries</li>
</ol>

<p><strong>Additional Helpful Items:</strong></p>

<ol>
  <li>Accident investigators checklist</li>
  <li>Sturdy gloves</li>
  <li>High-visibility plastic tape to mark off area</li>
  <li>First aid kit</li>
  <li>Audio or video recorder with extra memory or tapes</li>
  <li>Identification tags</li>
  <li>Tape, bags, and specimen containers to secure items</li>
  <li>Compass for sketching the scene &amp; identifying north</li>
  <li>Paint stick or chalk (yellow/black) to mark the scene</li>
  <li>Protractor to sketch the scene</li>
  <li>Tarp (to keep the scene and/or investigators dry)</li>
  <li>Investigators template (available online in varying styles)</li>
  <li>Personal protective equipment appropriate to your business</li>
</ol>

<p>As you'll learn, there are many ways to document the scene, so it may become quite difficult for one person to effectively complete all actions.</p>

<p>The most effective strategy is to document as much as possible, even if you don't think the information is relevant. It's easy to discard clues or leads later if they prove to not be useful to the investigation. It's not at all easy to dig up material evidence late into the investigation. All items found at the scene should be considered important and potentially relevant material evidence. Consequently, a team approach is probably the most efficient strategy to use when investigating serious accidents.</p>
`
          },
          {
            title: "Methods to Document the Accident Scene",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Methods to Document the Accident Scene</h3>

<p>Let's talk about the various methods you can use to document the accident scene.</p>

<h4>Make Personal Observations</h4>

<p>With clipboard in hand, take notes on personal observations. Try to involve all of your senses (sight, hearing, smell, etc.).</p>

<ul>
  <li>What is present and what is not? What equipment, tools, materials, machines, or structures appear to be broken, damaged, struck, or otherwise involved in the event? Look for gouges, scratches, dents, or smears. If vehicles are involved, check for tracks and skid marks. Look for irregularities on surfaces. Are there any fluid spills, stains, contaminated materials, or debris? Is something missing that should be present, such as fall protection?</li>

  <li>What about the environment? Were there any distractions, adverse conditions caused by weather? Record the time of day, location, lighting conditions, etc. Note the terrain (flat, rough, etc.).</li>

  <li>What is the activity occurring around the accident scene?</li>

  <li>Who is present and who is not? You'll need this information to take initial statements and interviews.</li>

  <li>Measure distances and positions of anything and everything you believe to be of any value to the investigation.</li>
</ul>`
          },
          {
            title: "Get Initial Statements",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Get Initial Statements</h3>

<p>If you are fortunate, there will be one or more eyewitnesses to the accident.</p>

<p>Ask them for an <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/702witstatement.pdf" target="_blank" rel="noopener noreferrer">initial written statement</a> describing the accident. Additionally, try to gather other information from the witness, which may include:</p>

<ul>
  <li>Names of potential witnesses for future interviews.</li>
  <li>Names of company rescuers or emergency response services.</li>
  <li>A list of materials, equipment, and objects that may have been moved or disturbed during a rescue.</li>
</ul>`
          },

            {
            title: "Take Photos of the Accident Scene",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Take Photos of the Accident Scene</h3>

<p>When taking photos, begin with wide-angle shots and gradually zoom in for close-ups as you capture the images.</p>

<p>Below are some other important points to remember about taking photos:</p>

<ul>
  <li>Take photos from different locations to show the position of objects in the accident scene and capture minute and/or transient details such as the ends of broken ropes, defective tools, drugs, wet areas, or containers.</li>

  <li>Capture panoramic photos to present the entire scene from top to bottom and side to side.</li>

  <li>Make sure to take notes for each photo. These notes will be included in the appendix of the report along with the photos. Identify the type of photo, date, time, location, direction (N, E, S, W), subject, weather conditions, measurements, etc.</li>

  <li>If photographing hard-to-measure objects, place an item of known dimensions such as a ruler or pencil in the photo for reference.</li>

  <li>Clearly identify the person taking the photos.</li>

  <li>Consider indicating the locations and directions at which photos were taken on sketches.</li>
</ul>`
          },

            {
            title: "Take Videos of the Scene",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Take Videos of the Scene</h3>

<p>A video can capture details and conversations that may provide valuable information for your investigation. If you have permission, begin recording the scene as soon as you can safely do so without impeding the work of emergency responders</p>

<p>Consult your supervisor to determine your company's policy on video recording. Some important points to remember when videoing the scene include:</p>

<ul>
  <li>Familiarize yourself with the surroundings by starting at a distance and gradually zooming in on the scene.</li>

  <li>Capture a complete 360-degree view by recording the details of the scene slowly in a circle.</li>

  <li>Provide narration for what you are filming, describing objects, their size, direction, location, etc.</li>

  <li>If a vehicle was involved, record its direction of travel both coming and going.</li>

  <li>Review the video whenever possible to identify any information you may have missed.</li>
</ul>

<p><strong>Additional Tips When Video Recording</strong></p>

<ul>
  <li>Exercise caution when using the zoom function; being too close can make it difficult to discern what is being captured upon later review.</li>

  <li>Shoot from multiple angles to capture different aspects of the scene.</li>

  <li>If you anticipate recording for extended periods, consider using a tripod to reduce shaking and fatigue.</li>

  <li>Transfer the digital video to your work computer for storage, ensuring it remains on file for further review.</li>

  <li>Keep an ample supply of storage devices such as memory cards, discs, or tapes on hand, and carry an extra battery.</li>

  <li>While recording, ensure that the auto-focus function is activated to enhance the clarity of the video.</li>
</ul>`
          },

            {
            title: "Sketch the Accident Scene",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Sketch the Accident Scene</h3>

<p>Sketches are very important because they complement the information in photos and are good at indicating distances between the various elements of the accident.</p>

<h4>Pinpointing Location</h4>

<p>It is important to be as precise as possible when making sketches.</p>

<img src="images/Pinpointing%20Location.png"
     alt="Pinpointing Location"
     style="width:100%; max-width:700px; max-height:450px; object-fit:contain; display:block; margin:20px auto; border-radius:8px;">

<p>The first sketch illustrates the Triangulation Method which makes it possible to later pinpoint the exact location of an object.</p>

<p>Using the triangulation method is important because it establishes "position evidence". In this accident, the victim contacted a high-voltage line with a metal tree trimming pole. The position of the victim's head is measured from three points. Notice the small circles with horizontal lines through them. These circles indicate where photos were taken. Also, North is indicated and all major objects are identified.</p>

<h4>Showing Motion Through Time</h4>

<p>The second sketch illustrates one of the major advantages of sketching. It shows motion through time.</p>

<img src="images/Motion.png"
     alt="Motion Through Time"
     style="width:100%; max-width:700px; max-height:450px; object-fit:contain; display:block; margin:20px auto; border-radius:8px;">

<p>In this sketch, you can see the directions the deceased and the bulldozer were traveling shortly before the accident and at the time of the accident.</p>

<p>Sketches also help establish testimony if it becomes necessary to defend against a damage or injury claim. The sketch may also help establish a claim against a supplier or manufacturer.</p>

<p>You don't have to be a professional illustrator to make a decent sketch, but you must be accurate in your measurements.</p>

<p><strong>More Sketching Best Practices</strong></p>

<ul>
  <li>Make sketches large, preferably 8" x 10".</li>
  <li>Ensure sketches are clear and include information pertinent to the investigation.</li>
  <li>Include measurements and establish precise, fixed, identifiable reference points.</li>
  <li>Print legibly; all printing should be on the same plane.</li>
  <li>Indicate directions: N, E, S, W.</li>
  <li>Always tie measurements to a permanent point, e.g., a telephone pole or building.</li>
  <li>Mark the locations where people were standing.</li>
  <li>Use an arrow to indicate the direction of motion.</li>
  <li>Utilize sketches when interviewing people.</li>
  <li>Clearly show where photos were taken.</li>
</ul>`
          },

           {
            title: "Interview Records",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Interview Records</h3>

<p>To best get important information from records, you should 'interview' them as though they were eyewitnesses by asking questions. If you inquire, they will provide answers.</p>

<p>Below are some of the records you may want to interview.</p>

<ul>
  <li>maintenance records</li>
  <li>training records</li>
  <li>standard operating procedures</li>
  <li>safety policies, plans, and rules</li>
  <li>work schedules</li>
  <li>personnel records</li>
  <li>disciplinary records</li>
  <li>medical records (if permission granted, or otherwise allowed)</li>
  <li>safety committee minutes</li>
  <li>police report</li>
</ul>

<p>Documenting the scene is crucial for numerous reasons. Keep in mind that the team approach is most effective because accuracy in reconstructing the accident is the ultimate goal. Considering all the time and budget constraints, as well as the complexity of the investigation process, it's clear that two heads are better than one.</p>`
          },

        ]
      },

                  {
        title: "Step 3: Perform Interviews",
        lessons: [
          {
            title: "Step 3: Perform Interviews",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Step 3: Perform Interviews</h3>

<h4>Digging Up the Facts</h4>

<p>After you have initially documented the accident scene, the next step is to start digging for additional details by conducting interviews.</p>

<p>This activity is often considered the most challenging aspect of an investigation. This module aims to assist you in understanding how to prepare for an interview and formulate interview questions. It will also cover strategies for organizing the interview and involving participants to ensure the most accurate information is obtained.</p>`
          },
          {
            title: "Doing Things Right",
            type: "read",
            duration: "10 min",
            video: " ",
            slidesPdf: "",
            content: `<h3>Doing Things Right</h3>

<p>The primary objective of an accident investigation interview is to gather a precise and complete understanding of the events leading up to, occurring during, and following the accident.</p>

<p>It is crucial to focus on understanding the sequence of events rather than assigning blame. To fulfill this objective, it is essential to assure the interviewee that the purpose of the interview is not to find fault but to understand what happened.</p>

<p>Interviewers can best convey the objective of the interview process by skillfully asking questions. Below are seven "right things to do" when asking questions during the interview.</p>

<p>Be sure you:</p>

<ul>
  <li>ask the <strong>right people</strong>,</li>
  <li>the <strong>right questions</strong>,</li>
  <li>at the <strong>right time</strong>,</li>
  <li>in the <strong>right place</strong>,</li>
  <li>in the <strong>right way</strong>,</li>
  <li>for the <strong>right reason</strong>,</li>
  <li>to uncover the <strong>right facts</strong>.</li>
</ul>`
          },
                   {
            title: "Cooperation is the Key",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Cooperation is the Key</h3>

<p><strong>Cooperation</strong>, not <strong>intimidation</strong>, is the key to a successful accident investigation interview.</p>

<p>It is very counterproductive to say or do anything that could be interpreted by the interviewee as an attempt to establish blame.</p>

<p>The purpose of the accident interview is to uncover additional information about the hazardous conditions, unsafe work practices, and related system weaknesses that contributed to the accident.</p>

<p>It's important that effective techniques to establish trust and a cooperative atmosphere be used by the interviewer during the process.</p>

<p>Two basic questions you'll want to answer are:</p>

<ul>
  <li>What are effective ways to increase cooperation in the accident interview process?</li>
  <li>What communication strategies might increase the likelihood of an untrusting relationship in the interview?</li>
</ul>

<p>We'll be discussing both good and bad interviewing techniques that will help to answer the two important questions above.</p>`
          },

           {
            title: "Preparing for the Interview",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Preparing for the Interview</h3>

<p>During this phase of the interview process, your first task is to determine who to interview.</p>

<p>You will need to tailor your questions to fit the interviewee. Each interview will be a unique experience. Interviews should take place as soon as possible, although they typically don't occur until things have settled down a bit.</p>

<p>Below are some individuals you may want to consider interviewing:</p>

<ul>
  <li><strong>The victim</strong>: To ascertain the immediate events leading up to and including the accident.</li>
  <li><strong>Co-workers</strong>: To establish the variance between actual and appropriate procedures being used.</li>
  <li><strong>Direct supervisor</strong>: To gather background information on the victim, including procedural details about the task performed, training, workload, scheduling, and available resources.</li>
  <li><strong>Manager</strong>: To obtain information on related operational and safety management programs/systems.</li>
  <li><strong>Training department</strong>: To gather information on the quantity and quality of training received by the victim and others.</li>
  <li><strong>Personnel department</strong>: To acquire information about the work history, discipline, and appraisals of the victim and other employees.</li>
  <li><strong>Maintenance personnel</strong>: To determine the background regarding corrective and preventive maintenance.</li>
  <li><strong>Emergency responders</strong>: To learn about their observations and actions when responding to the accident.</li>
  <li><strong>Medical personnel</strong>: To obtain medical information (in accordance with the law).</li>
  <li><strong>Coroner</strong>: A valuable source for determining the type and extent of fatal injuries.</li>
  <li><strong>Police</strong>: If they filed a report.</li>
  <li><strong>Other interested persons</strong>: Anyone with an interest in the accident may provide valuable information.</li>
  <li><strong>The victim's spouse and family</strong>: They may offer insights into the victim's state of mind or other work-related issues.</li>
</ul>`
          },

           {
            title: "Effective Interviewing Techniques",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Effective Interviewing Techniques</h3>

<p>An important aspect of your job, as the interviewer, is to construct a composite story or "word picture" of what happened using the various accounts of the accident and other evidence. To do that, you will need to understand effective interview techniques and be able to skillfully apply those techniques.</p>

<p>It's essential to remember that you are conducting an accident investigation, not a criminal investigation. While these two interview processes may share similarities, each serves a distinct purpose and demands different techniques to achieve its goals. In an accident investigation, the last thing you want to do is to appear accusatory when interviewing an individual.</p>

<p><strong>Some effective techniques to ensure you get to the facts and not just find fault include the following:</strong></p>

<ul>
  <li>Keep the purpose of the investigation in mind: Determine the cause of the accident to prevent similar occurrences. The interview is not to establish liability but to gather facts and improve safety management system weaknesses. Ensure the interviewee understands the goal: "We want to prevent anyone from getting hurt like this again."</li>

  <li>Avoid interviewing more than one person at a time, as hearing an interviewee's account may influence others' stories.</li>

  <li>Start by asking for background information such as name, job, and phone number. Then, allow the witness to describe what happened without interruption. Encourage them to talk, and listen actively. Avoid asking "if" they can explain, as it might lead to a simple "no."</li>

  <li>Approach the investigation with an open mind, avoiding preconceptions about individuals or facts.</li>

  <li>Visit the scene. Even if you are familiar with the location or the victim's job, don't assume things are always the same. If a private interview is not possible at the location, find a neutral office or meeting room.</li>

  <li>Create a comfortable atmosphere. Explain the purpose and your role, expressing genuine concern about the accident and the desire to prevent similar occurrences.</li>

  <li>Stress the importance of the information provided by the interviewee. Make it clear that their input is valuable.</li>

  <li>Maintain a friendly, understanding, and open-minded demeanor. Stay calm and unhurried during the interview.</li>
</ul>`
          },

          {
            title: "More Effective Interviewing Techniques",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>More Effective Interviewing Techniques</h3>

<p>As you conduct interviews, gaining experience along the way, you'll further develop the "art" of interviewing by improving your ability to apply these techniques. Below are more ideas you can use while interviewing witnesses.</p>

<ul>
  <li>Avoid asking leading questions, interruptions, or expressing approval or disapproval verbally or through facial cues.</li>

  <li>Use open-ended questions to clarify specific areas or gather details. Try to steer clear of closed-ended questions that elicit simple yes or no responses.</li>

  <li>Refrain from asking "why-you" questions, as they tend to provoke defensive responses. For example, instead of asking, "Why did you drive the forklift with under-inflated tires?" ask, "What are the forklift inspection procedures?"</li>

  <li>Recap the facts and sequence of events back to the person to prevent misunderstandings.</li>

  <li>Take notes meticulously but casually. Let the individual review your notes, possibly filling in missing information and correcting inaccuracies. Provide the interviewee with a copy of the notes and have them initial to confirm accuracy.</li>

  <li>Record the interview only with permission. Explain that the recorder's purpose is to ensure accurate information. Offer to give the interviewee a copy of the recording.</li>

  <li>Allow the interviewee to have a witness present if they desire, especially in union environments where this is often an employee right.</li>

  <li>Seek the interviewee's opinion on the accident's causes and prevention measures. Do not accept answers that assign blame, as blame is not established at this stage of the investigation. Disciplinary matters are typically discussed after the investigation is complete and closed, usually handled by the supervisor and the Human Resources Department, not the accident investigator.</li>

  <li>Conclude the interview with a statement of appreciation for their contribution. Encourage them to contact you if they recall anything else. If possible, communicate the investigation's outcome to each person interviewed, but do not discuss the possibility of disciplinary action.</li>
</ul>

<p>Understanding and applying the information provided above during the interview process will help establish a high level of trust and a cooperative relationship, enabling you to gather accurate information. Remember, intimidation and assigning blame have no place in the accident investigation process, and, moreover, they are ineffective.</p>
`
          },
        ]
      },

            {
        title: "Step 4: Conduct Event Analysis",
        lessons: [
          {
            title: "Step 4: Conduct Event Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h3>Step 4: Conduct Event Analysis</h3>

<h4>Event Identification</h4>

<p>So far in your investigation, you have documented the accident scene and collected a lot of factual data that's strewn all over your desk. Now your task is to turn that data into useful information that will help you understand what happened.</p>

<p>You're not gathering all of this information just to conduct an assessment of what was and was not present immediately prior to the accident. You're conducting an analysis of each event to determine specifically how surface causes (behaviors and conditions), and the underlying root causes (system weaknesses) contributed to the accident. With this distinction in mind, let's look at the event analysis process.</p>

<h4>Two Components of an Event: The Actor and the Action</h4>

<p>Each event leading up to and including the injury event consists of one actor (a person) and one action (a behavior).</p>

<ol>
  <li><strong>Actor</strong>: The actor is a person or object that directly influences the sequence of events. An actor may actively participate in the process or simply observe it. An actor initiates a change by performing an action or failing to perform an action.</li>

  <li><strong>Action</strong>: An action is "the something" done by an actor. Actions may or may not be observable. An action can describe a behavior that is either carried out or not carried out. Failure to act should be considered an action, just as significant as an action that is accomplished.</li>
</ol>

<p>It's essential to understand that when describing an event in writing, you should first identify the actor and then describe what the actor did. Keep in mind that the actor is the 'doer,' not the person or object being acted upon or otherwise subjected to an action.</p>

<p>For instance, take a look at the event statement below:</p>

<p>"Jessie unhooked the lifeline from the harness."</p>

<p>In this example, "Jessie" is the actor and "unhooked" describes the action. First, we describe the actor — Jessie. Next, we describe the action — unhooking. The lifeline and harness, although "objects," are not actors because they are not performing an action. Rather, something is being done to them. Also note that the statement is written in active tense.</p>`
          },

                    {
            title: "Four Categories of Event Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h4>Four Categories of Event Analysis</h4>

<p>Events can happen at any time, in any location, and to anyone.</p>

<p>All events at an accident scene can be categorized into one of four analysis categories. Your analysis of the event will vary depending on its category.</p>

<p>Significant events leading to an accident can happen anytime, ranging from a few minutes to weeks or even months prior. When identifying events, don't concern yourself with the sequence of events leading to the accident at this stage. It's not relevant at this point. What matters is identifying the actor and action that define an event.</p>

<p>Below are four analysis categories of events:</p>

<!-- Actual Events -->
<div style="margin:25px 0; padding:20px; border:1px solid #ddd; border-radius:10px; background:#f8f9fa;">
  <h5 style="margin-top:0;"><strong>1. Actual Events</strong></h5>

  <p>These are events that you can confirm actually occurred, meaning they were witnessed by one or more persons (preferably two or more) who can verify that it did happen. It is advisable to interview all witnesses to the event.</p>

  <p><strong>Example</strong></p>

  <p>Bob and Bobbie saw Bill turn off the chipper power switch and then walk over and reach into the chipper in an attempt to remove some jammed wood.</p>
</div>

<!-- Assumed Events -->
<div style="margin:25px 0; padding:20px; border:1px solid #ddd; border-radius:10px; background:#f8f9fa;">
  <h5 style="margin-top:0;"><strong>2. Assumed Events</strong></h5>

  <p>These are events that are presumed to have occurred but have not yet been verified. It's important to flag these somehow as a reminder that further investigation is required. Assumed events can be more challenging to confirm.</p>

  <p>In any step-by-step process, you cannot proceed to step 3 without first completing the first two steps. If a worker is injured at step 3, you may assume they accomplished steps 1 and 2 unless it is established that they bypassed the first two steps. If completing steps 1 and 2 could have prevented an injury at step 3, and the worker is injured, you may assume the worker did not follow steps 1 or 2.</p>

  <p><strong>Example</strong></p>

  <p>If Bill's hand was crushed while clearing a piece of wood that was stuck in a large chipper, we may assume he did not perform lockout/tagout, or we may assume that he performed lockout/tagout incorrectly. Only further investigation and analysis will uncover what happened.</p>
</div>

<!-- Non-Events -->
<div style="margin:25px 0; padding:20px; border:1px solid #ddd; border-radius:10px; background:#f8f9fa;">
  <h5 style="margin-top:0;"><strong>3. Non-Events</strong></h5>

  <p>If an event was supposed to happen, but did not, that is a non-event. Although non-events describe an event that did not occur, they should be captured because they may help discover conditions and behaviors relevant to the investigation.</p>

  <p><strong>Example</strong></p>

  <p><strong>Example:</strong> Bill did not try to start the chipper to verify lockout/tagout was successfully performed. He failed to perform the verification step of the lockout/tagout procedure.</p>
</div>

<!-- Simultaneous Events -->
<div style="margin:25px 0; padding:20px; border:1px solid #ddd; border-radius:10px; background:#f8f9fa;">
  <h5 style="margin-top:0;"><strong>4. Simultaneous Events</strong></h5>

  <p>In some accident scenarios, two or more events occur at precisely the same time, resulting in a hazardous condition or set of unsafe behaviors that cause an injury.</p>

  <p><strong>Example</strong></p>

  <p>Ralph wondered why the chipper was off and turned it back on at the same instant in time that Robert reached into the chipper to remove the jammed wood.</p>
</div>`
          },

            {
            title: "Tracing Techniques",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<h4>Tracing Techniques</h4>

<p>To help initially identify the direct and contributing events, it is generally best to work backward from the point of the accident to the initiating event. This approach is known as the "backward tracing" or "reverse tracing" method, and it involves tracing events back to the point of origin.</p>

<p>The backward tracing method can be effective because it allows investigators to identify the surface causes (behaviors and conditions) in each event. It can also help in identifying the underlying factors that contributed to the accident and to develop effective corrective actions to prevent similar accidents from happening in the future.</p>

<p>Below are the steps involved in the backward tracing method for identifying events:</p>

<p><strong>Steps in Backward Tracing</strong></p>

<ol>
  <li>
    <strong>Identify the accident and gather the facts:</strong> What happened, where it happened, who was involved, and what the outcome was.
  </li>

  <li>
    <strong>Identify the immediate and surface causes:</strong> Identify the immediate cause of the injury/fatality and the surface causes that led directly to the accident. Surface causes include unique unsafe acts and hazardous conditions.
  </li>

  <li>
    <strong>Identify the contributing root causes:</strong> Identify the contributing causes that led to the immediate and surface causes. These may include performance weaknesses in the safety management system (SMS) elements.
  </li>

  <li>
    <strong>Identify the deep root causes:</strong> They are the underlying reasons why the contributing factors existed in the first place, and may include SMS design flaws.
  </li>
</ol>`
          },

            {
            title: "Event Sequencing",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: ` <h4>Event Sequencing</h4>

<p>In this step, the investigator must take the identified events and arrange them in the proper sequence to accurately determine how the initial event transformed a planned work process into an unintended accident.</p>

<p>You can arrange the events in a sequence moving forward through time from the initial event to the final injury event moving forward by asking "what happened next?" You can also use backward tracing which is valuable in sequencing because it's more likely contributing events will be identified while working backward through the sequence.</p>

<p>Ensure that you are constructing only one event. If an event is difficult to understand, it may be because the description is too vague or general. To solve this problem, increase the level of detail. Strategies to increase detail:</p>

<ol>
  <li><strong>Look around:</strong> Determine if anything else was said or done before or after the event you are currently assessing.</li>
  <li><strong>Separate the actors:</strong> Remember, an actor may be a person or an object performing a specific action. If an event involves actions by more than one actor, break it down into two events. If the event contains the conjunction "and," it is likely a combination of two events. You can identify some combined events in the sample sequence of events in the next section.</li>
</ol>

<h4>Sample Sequence of Events</h4>

<p>Below is an example of a sequence of events of an actual fatality investigation conducted by OSHA. It gives you a good idea what a sequence looks like.</p>

<p><strong>Sequence of Events</strong></p>

<div style="margin:15px 0; padding:12px 16px; border-radius:8px; background:#f8f9fa; border:1px solid #ddd;">
  <strong>Key:</strong>
  <span style="background:#d9edf7; padding:2px 5px; border-radius:2px;">Actor</span>
  <span style="background:#dff0d8; padding:2px 5px; border-radius:2px;">Action</span>
  <span style="background:#f2dede; padding:2px 5px; border-radius:2px;">Conjunction</span>
</div>

<ol>
  <li>
    At 12:30 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #1</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">returned to the worksite</span>
    <span style="background:#f2dede; padding:2px 4px; border-radius:2px;">from</span>
    lunch.
  </li>

  <li>
    At 12:35 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #1</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">started laying irrigation pipes into a 2-ft deep ditch.</span>
  </li>

  <li>
    At approximately 12:40 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">employee #1</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">oriented an irrigation pipe vertically.</span>
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">The pole</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">contacted a high-voltage power line</span>
    directly over the work area.
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">heard a 'zap'</span>
    <span style="background:#f2dede; padding:2px 4px; border-radius:2px;">and</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">turned to see the mainline pipe and Employee #1 falling into an irrigation ditch.</span>
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">ran to Employee #1</span>
    <span style="background:#f2dede; padding:2px 4px; border-radius:2px;">and</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">noticed that he appeared to be unconscious.</span>
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">pulled Employee #1 out of the irrigation ditch.</span>
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">ran about 600 ft to his truck.</span>
  </li>

  <li>
    At 12: 45 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">placed a call for help on his mobile phone.</span>
  </li>

  <li>
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">Employee #2</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">ran back to Employee #1.</span>
  </li>

  <li>
    At 12:55 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">paramedics</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">arrived.</span>
  </li>

  <li>
    At 12:57 PM 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">paramedics</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">started administering CPR on Employee #1 using a heart defibrillator.</span>
  </li>

  <li>
    At approximately 1:10 PM the 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">paramedics</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">transported Employee #1 to the hospital.</span>
  </li>

  <li>
    At 1:30 PM the 
    <span style="background:#d9edf7; padding:2px 4px; border-radius:2px;">attending physician</span>
    <span style="background:#dff0d8; padding:2px 4px; border-radius:2px;">pronounced Employee #1 deceased.</span>
  </li>
</ol>`
          },

            {
            title: "Paint a Word Picture",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<h3>Paint a Word Picture</h3>

<p>It's important that the sequence of events clearly describes a word picture of what occurred so that someone who is unfamiliar with the accident can 'see it happen' as they read the narrative.</p>

<h4>Sample Sequence of Events</h4>

<p>Click on the image to see another example that shows how a sequence of events can be developed using cards.</p>

<img src="images/accident_sequence.png"
     alt="Sample Sequence of Events"
     style="width:100%; max-width:700px; max-height:450px; object-fit:contain; display:block; margin:20px auto; border-radius:8px; cursor:pointer;">

<p>Describe each event on a card in no particular sequence. Next, post and arrange the events on your desk or a wall in the proper sequence.</p>

<p>Once the sequence of events is developed, we can then study each event in the sequence to determine the related causal factors below.</p>

<ul>
  <li><strong>Hazardous conditions</strong>: Objects and physical states that directly caused or contributed to the accident.</li>
  <li><strong>Unsafe behaviors</strong>: Actions taken/not taken that directly caused or contributed to the accident.</li>
  <li><strong>System weaknesses</strong>: Underlying inadequate or missing policies, programs, plans, processes, procedures, and practices that contributed to the accident.</li>
</ul>

<p>We'll study more about these three elements in the next module.</p>`
          },

        ]
      },

          {
        title: "Step 5: Conduct Cause Analysis",
        lessons: [
          {
            title: "Step 5: Conduct Cause Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<h2>Introduction</h2>

<p>
  You've completed the initial part of the accident analysis by gathering information
  and using it to break the accident down into an accurate sequence of events.
</p>

<p>
  You have a good mental picture of what happened. Now it's time to continue the analysis
  process by completing each of the following three phases of analysis to determine what
  caused those events.
</p>

<p>
  This module will introduce us to the three phases of analysis below:
</p>

<ul>
  <li>
    <strong>Injury Analysis</strong> to determine the direct causes of injury
  </li>
  <li>
    <strong>Surface Cause Analysis</strong> to determine the unique conditions,
    behaviors, and actions causing the accident
  </li>
  <li>
    <strong>Root Cause Analysis</strong> to determine the system weaknesses
    contributing to the accident
  </li>
</ul>

<p>
  Check out the short podcast video by Dan Clark. Folklore that 'accidents happen'
  has been proven wrong. But are people naturally accident prone? In this podcast,
  Dan Clark delves into these topics.
</p>`
          },

                    {
            title: "Three Phases of Cause Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h2>Three Phases of Cause Analysis</h2>

<p>
  During the three phases of accident analysis, important questions must be asked: What is the direct cause of the injury? What are the surface causes? What are the root causes of the accident?
</p>

<h4>Phase 1: Injury Analysis</h4>

<p>
  This phase of the analysis determines what directly caused the injury to the employee involved in the accident. The focus is on trying to determine how a harmful form of energy transfer resulted in the injury. Remember, the outcome of the accident process is an injury.
</p>

<h4>Phase 2: Surface Cause Analysis</h4>

<p>
  Surface cause analysis determines the unique conditions, behaviors, and actions that interact in each event to produce the accident. The analysis focuses on identifying and correcting the specific factors that directly caused or contributed to the accident.
</p>

<h4>Phase 3: Root Cause Analysis</h4>

<p>
  Root cause analysis, also called system analysis, focuses on the safety management system weaknesses that contribute to the unique surface causes for accidents. Therefore, root causes always pre-exist surface causes. They include inadequate safety management system performance, principles, policies, programs, plans, processes, procedures, and practices that contribute to the accident. Below are examples of each of the root cause categories.
</p>

<h3>Root Cause System Weakness Categories</h3>

<ul>
  <li>
    <strong>Performance:</strong> The measurable outcomes of the safety management system, which in an inadequate system may reflect poor safety records, frequent accidents, or non-compliance with safety standards.
  </li>
  <li>
    <strong>Principles:</strong> The foundational beliefs or values guiding the safety management system. In an inadequate system, these principles might be poorly defined, inconsistently applied, or not prioritized.
  </li>
  <li>
    <strong>Policies:</strong> The formal rules or guidelines governing safety practices. In an inadequate system, safety policies may be outdated, incomplete, or not enforced, leading to gaps in safety coverage.
  </li>
  <li>
    <strong>Programs:</strong> Specific initiatives or efforts designed to promote safety. In an inadequate system, these programs may be poorly planned, under-resourced, or ineffective in achieving their safety objectives.
  </li>
  <li>
    <strong>Plans:</strong> Detailed strategies for implementing safety measures. In an inadequate system, safety plans might be vague, unrealistic, or not aligned with actual workplace risks.
  </li>
  <li>
    <strong>Processes:</strong> The series of operational and administrative procedures taken to manage safety. In an inadequate system, these processes may be inefficient, unstructured, or fail to address key safety concerns.
  </li>
  <li>
    <strong>Procedures:</strong> The specific step-by-step instructions for performing tasks safely. In an inadequate system, procedures may be unclear, incomplete, or not consistently followed.
  </li>
  <li>
    <strong>Practices:</strong> The actual behaviors and actions of employees and management regarding safety. In an inadequate system, unsafe practices may be common, and there may be a lack of adherence to established safety procedures.
  </li>
</ul>`
          },
           

            {
            title: "Injury Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<h2>Injury Analysis</h2>

<h4>What is the Direct Cause of Injury?</h4>

<p>
  In a comprehensive accident report, you'll be asked to determine the direct cause of the worker's injury.
  It's important to understand the nature of the cause that resulted in the injury so that you can write and clearly describe what directly caused the injury in terms of a "cause and effect" relationship. The cause in the cause-effect relationship is always the harmful transfer of energy. The effect in the cause-effect relationship is the injury.
</p>

<p>
  Let's look at some examples that illustrate this important principle.
</p>

<ul>
  <li>
    If Bob falls off a ladder and hits the ground so hard that it fractures his lower leg, the direct cause of injury is the transfer of excessive kinetic energy (the cause) that breaks the leg bone (the effect).
  </li>
  <li>
    A harsh acid splashes on Brenda's face causing a serious burn. The direct cause of Brenda's injury is the harmful chemical reaction (the cause) as energy is transferred from the acid to her skin causing the burn (the effect).
  </li>
</ul>

<p>
  As you can see, in each example above, we identify some form of harmful energy transfer that results in an injury. And, simply put, that's how you describe the direct cause of an injury. If you don't describe the type of energy transfer involved and resulting injury, you're not writing an adequate statement.
</p>

<p>
  The <strong>severity</strong> of the injury depends on the <strong>magnitude</strong> of the harmful energy. Below are the various forms of energy that can be harmful.
</p>

<h4>Harmful Forms of Energy</h4>

<ul>
  <li>
    <strong>Acoustic Energy</strong> - Excessive noise and vibration.
  </li>

  <li>
    <strong>Chemical Energy</strong> - Corrosive, toxic, flammable, or reactive substances. Involves a release of energy ranging from "not violent" to "explosive" and "capable of detonation."
  </li>

  <li>
    <strong>Electrical Energy</strong> - Low voltage (below 440 volts) and high voltage (above 440 volts).
  </li>

  <li>
    <strong>Kinetic (Impact) Energy</strong> - Energy from "things in motion" and "impact". It is associated with the collision of objects in relative motion to each other. It includes impact between moving objects, a moving object against a stationary object, falling objects or persons, flying objects, and flying particles. It also involves movement resulting from hazards of high pressure pneumatic and hydraulic systems.
  </li>

  <li>
    <strong>Mechanical Energy</strong> - Cut, crush, bend, shear, pinch, wrap, pull, and puncture. Such hazards are associated with components that move in circular, transverse (single direction), or reciprocating motion.
  </li>

  <li>
    <strong>Potential Energy</strong> - Involves "stored energy." Includes objects that are under pressure, tension, or compression; or objects that attract or repulse one another. Susceptible to sudden unexpected movement. Includes gravity - potential falling objects, potential falls of persons. Includes forces transferred biomechanically to the human body during lifting.
  </li>

  <li>
    <strong>Radiant Energy</strong> - Relatively short wavelength energy forms within the electromagnetic spectrum. Includes infra-red, visible, microwave, ultra-violet, x-ray, and ionizing radiation.
  </li>

  <li>
    <strong>Thermal Energy</strong> - Excessive heat, extreme cold, sources of flame ignition, flame propagation, and heat-related explosions.
  </li>
</ul>`
          },


          {
            title: "Surface Cause Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<h2>Surface Cause Analysis</h2>

<p>
  The surface causes of accidents are the unique hazardous conditions and unsafe or inappropriate behaviors that occur during the sequence of events, contributing in some way to the accident.
</p>

<h4>Hazardous Conditions</h4>

<p>Let's look at some characteristics and examples of hazardous conditions:</p>

<ul>
  <li>Are unique things or objects that are somehow defective or unsafe</li>
  <li>Employee physical or psychological conditions such as fatigue or stress</li>
  <li>May also be unique defects in processes, procedures, or practices</li>
  <li>May exist at any level of the organization</li>
  <li>Are the symptoms of deeper root causes</li>
</ul>

<p>Hazardous conditions may exist in any of the categories below.</p>

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">
  <div style="flex: 1; min-width: 200px;">
    <ul>
      <li>Materials</li>
      <li>Machinery</li>
      <li>Equipment</li>
      <li>Tools</li>
      <li>Chemicals</li>
    </ul>
  </div>

  <div style="flex: 1; min-width: 200px;">
    <ul>
      <li>Environment</li>
      <li>Workstations</li>
      <li>Facilities</li>
      <li>People</li>
      <li>Workload</li>
    </ul>
  </div>
</div>

<h4>Examples of Hazardous Conditions</h4>

<ul>
  <li>
    <strong>Equipment:</strong> Malfunctioning or poorly maintained forklifts leading to potential collision or tipping hazards.
  </li>

  <li>
    <strong>Machinery:</strong> Unshielded moving parts on conveyor belts that can cause entanglement injuries.
  </li>

  <li>
    <strong>Tools:</strong> Worn-out or damaged power tools that may overheat, short-circuit, or cause electric shocks.
  </li>

  <li>
    <strong>Chemicals:</strong> Improper storage of flammable liquids that increases the risk of fire or explosion.
  </li>

  <li>
    <strong>Facilities:</strong> Poorly lit stairways or walkways that increase the likelihood of slips, trips, and falls.
  </li>

  <li>
    <strong>Electrical Systems:</strong> Exposed wiring or overloaded circuits that pose a significant risk of electrical fires.
  </li>

  <li>
    <strong>Confined Spaces:</strong> Limited ventilation in confined spaces that can lead to oxygen deficiency or the buildup of toxic gases.
  </li>

  <li>
    <strong>Pressure Vessels:</strong> Faulty pressure relief valves on boilers or tanks that could result in explosions.
  </li>
</ul>

<h4>Unsafe or Inappropriate Behaviors</h4>

<p>
  It's important to know that most hazardous conditions in the workplace are the result of the unsafe or inappropriate behaviors (worker error) that produced them.
</p>

<p>Below are examples of the characteristics of inappropriate behaviors:</p>

<ul>
  <li>Actions we take or don't take that increase risk of injury or illness</li>
  <li>May also be thought to be unique performance errors in a process, procedure, or practice</li>
  <li>May exist at any level of the organization</li>
  <li>Are the result of deeper root causes</li>
</ul>

<p>
  Below are some examples of unsafe or inappropriate employee/manager behaviors.
</p>

<p><strong>Examples of inappropriate behaviors.</strong></p>

<p><strong>Employees</strong></p>

<ul>
  <li>Failing to comply with rules</li>
  <li>Using unsafe methods</li>
  <li>Taking shortcuts</li>
  <li>Horseplay</li>
  <li>Failing to report injuries</li>
  <li>Failing to report hazards</li>
</ul>

<p><strong>Managers/Supervisors</strong></p>

<ul>
  <li>Allowing unsafe behaviors</li>
  <li>Failing to train</li>
  <li>Failing to supervise</li>
  <li>Failing to correct</li>
  <li>Scheduling too much work</li>
  <li>Ignoring worker stress</li>
</ul>`
          },
          {
            title: "Root Cause Analysis",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `

<p>
  After we have identified the unique conditions and behaviors during event analysis, we need to analyze them to determine their related root causes.
</p>

<p>
  As you've learned, the root causes for accidents are the underlying safety management system (SMS) weaknesses that contribute to the conditions and behaviors we have identified. SMS weaknesses may take two forms:
</p>

<ul>
  <li>
    <strong>System Design Root Causes:</strong> Inadequate design of one or more components of the safety management system, including principles, policies, plans, programs, processes, procedures, and practices. Proper design is essential to ensure consistent adherence to safe conditions, activities, behaviors, and practices throughout the workplace. Most surface causes ultimately lead to flaws in system design.
  </li>

  <li>
    <strong>System Performance Root Causes:</strong> Inadequate implementation and performance of one or more components of the safety management system. Effective implementation is crucial after designing safety management system components. Designing an effective safety plan that is poorly implemented can lead to failures, just as properly implementing a poorly written safety plan can yield the same results. In both cases, improvements in policies, plans, programs, processes, procedures, or practices may be necessary.
  </li>
</ul>

<p>
  Safety managers should work with safety engineers to eliminate or reduce exposure to hazards through effectively improving safety system components. Because systems design components can be common throughout the workplace, eliminating any single root cause may simultaneously eliminate many hazardous conditions and unsafe behaviors.
</p>

<p>
  Since root causes reside within safety management systems, upper management is most likely going to be involved in making the necessary improvements. When analyzing for system weaknesses, it may be beneficial to coordinate closely with those who will be responsible for implementing system improvements.
</p>`
          },

            {
            title: "Analysis Tools",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `

<p>
  We've discussed the various phases of accident investigation analysis, and now we'll shift gears and talk about the tools you can use.
</p>

<h4>5-Why Analysis</h4>

<p>
  The 5-Why Analysis is a helpful method to begin your journey towards identifying the root causes of an accident. Let's explore how to perform a 5-Why Analysis of an accident by going through the steps below. Begin with understanding the details of the accident and ask why it occurred. The answer to each "why" question becomes the basis for the next question. Repeating this series of questions and answers at least five times will lead you to a better understanding of the fundamental root cause behind the accident.
</p>

<div style="overflow-x: auto; margin: 20px 0;">
  <table>
    <thead>
      <tr>
        <th colspan="3">Description of the Accident</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">
          Bob broke his arm when he hit the ground after falling off an extension ladder.
        </td>
      </tr>
      <tr>
        <th>Question</th>
        <th>Answer</th>
        <th></th>
      </tr>
      <tr>
        <td>1</td>
        <td>Why did Bob fall off the ladder?</td>
        <td>Because he lost his balance</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Why did Bob lose his balance?</td>
        <td>Because the ladder was very unstable</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Why did Bob use the defective ladder?</td>
        <td>Because it was the only ladder available</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Why was it the only ladder available?</td>
        <td>Because it was never replaced</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Why was the ladder never replaced?</td>
        <td>Because management was unaware it was defective</td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  You'll notice that in most cases, determining the root causes of an accident demands more than just five questions. Moreover, for each of these questions, you're likely to come across several potential answers. Each answer will then lead you down different lines of questioning. It's crucial to keep asking "why" in each of these paths until you reach the core underlying factors that led to the accident. Also, you'll realize that the root causes of accidents often tie back to failures within the safety management system – its structure, inputs, processes, and outputs.
</p>

<h4>The Fishbone Diagram</h4>

<p>
  You can use the 5-why technique coupled with the cause-effect fishbone diagram to help you discover root causes.
</p>

<p>
  The "fish" should look something like the diagram in the image. The backbone and larger bones represent the surface causes. The smaller bones represent root causes. The diagram you make will probably be more complex than this one.
</p>

<img
  src="images/fishbone.png"
  alt="Fishbone Diagram"
  style="max-width: 100%; height: auto; display: block; margin: 20px auto;"
>

<p>
  Each of the surface causes described as conditions and behaviors will eventually lead you to the root causes.
</p>

<p>
  The root causes will be listed as system weaknesses. Ultimately, you'll identify inadequate principles, policies, programs, plans, processes, procedures, and practices – the real root causes!
</p>`
          },


        ]
      },

            {
        title: "Step 6: Develop Solutions",
        lessons: [
          {
            title: "Effective Recommendations",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `

<p>
  Effective recommendations will result in valuable, proactive safety improvements that not only prevent future accidents, but they will also improve the safety management system.
</p>

<p>
  To persuade management to act on safety recommendations, it's important to explain the benefits. Effective recommendations can enhance safety and prevent accidents, ultimately improving the overall safety management system.
</p>

<p>
  However, there are times when management may not fully grasp the benefits of implementing recommendations. This could result from a lack of information. It is crucial to provide pertinent details and anticipate any questions decision-makers may have.
</p>

<p>
  By highlighting the long-term financial benefits of taking action, you can construct a compelling argument that management cannot ignore. Ultimately, implementing these recommendations can not only prevent accidents but also contribute to a safer workplace and improved financial outcomes.
</p>

<p>
  This module will help you put together an "offer they can’t refuse" by emphasizing the long-term financial benefits of taking action.
</p>`
          },

                    {
            title: "Do it Right!",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `<p>
  It's important to divide your recommendations into the categories below:
</p>

<ol>
  <li>
    Immediate or short-term corrective actions to eliminate or reduce hazardous conditions and/or unsafe behaviors related to the accident.
  </li>
  <li>
    Long-term safety management system improvements to create or revise existing safety policies, programs, plans, processes, procedures, and practices identified as missing or inadequate in the investigation.
  </li>
</ol>

<p>
  Some employers may assign the responsibility for making recommendations to safety directors or other managers. However, as the accident investigator, you may be required to take on this very important responsibility. Consequently, it's a good idea to know where to start and how to write strong recommendations.
</p>

<p>
  <strong><em>Tip:</em></strong> If you find the responsibility is yours, be sure to seek the help of experts if you are unsure how to proceed. OSHA consultants, other safety professionals, and your workers' compensation insurer can be great sources for assistance.
</p>`
          },
           
                              {
            title: "The Hierarchy of Control (HOC) Strategies",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `

<p>
  Traditionally, a prioritized 'Hierarchy of Controls' (HOC) has been used to implement practical and effective exposure controls to protect workers.
</p>

<h2>Higher Priority Strategies</h2>

<ol>
  <li>
    <strong>Elimination:</strong> Completely remove the hazard. (no hazard = no accident) This control strategy is our top priority because it has the potential to entirely eliminate the hazard by changing something in the workplace.
  </li>

  <li>
    <strong>Substitution:</strong> Replace the hazard with a less hazardous condition, process, or method. Basic examples include substituting a toxic chemical with a non-toxic one or upgrading from an old, poorly-designed machine to a new model.
  </li>

  <li>
    <strong>Engineering controls:</strong> Check if any of the following strategies are used in your workplace:

    <ul>
      <li>
        <strong>Design:</strong> For example, design a tool to reduce the risk of strain or sprain.
      </li>
      <li>
        <strong>Redesign:</strong> For example, modify the design of a machine to make dangerous moving parts or electrical circuits out of reach.
      </li>
      <li>
        <strong>Enclosure:</strong> For example, install a hood over a noisy printer or a machine guard around a dangerous moving part.
      </li>
    </ul>
  </li>
</ol>

<p>
  OSHA expects employers to prioritize hazard control by first attempting elimination, substitution, or engineering solutions to prevent serious injuries. For example, if a machine generates excessive noise, employers should aim to reduce the noise to acceptable levels using these strategies. In this case, an engineering control like enclosure may be effective.
</p>

<h2>Lower Priority Strategies</h2>

<p>
  The final three control strategies are less effective than elimination, substitution, and engineering controls in the long term because they do not remove the hazard itself.
  These controls aim to reduce exposure to hazards by managing behaviors - changing our actions.
</p>

<ol start="4">
  <li>
    <strong>Warnings:</strong> Signs and labels that convey messages such as "Keep Out" or "May cause eye irritation" are used to alert employees to hazards. It's essential to note that employees may not always pay attention to posted warning signs unless compliance is enforced. To illustrate this concept, consider your behavior when driving a vehicle. Do you adhere to the posted speed limit, or the enforced speed limit? Note: We have listed warnings as a distinct hazard control strategy to align the training with ANSI Z10. However, OSHA classifies the use of warnings as an "administrative control."
  </li>

  <li>
    <strong>Administrative/Work Practice Controls:</strong> This control strategy also aims to reduce exposure by limiting the distance and duration of exposure to hazards. Employers may implement job rotation, work/break schedules, and improved work procedures and practices to achieve this. For example, develop and implement a safe work procedure for preventative maintenance on air conditioning equipment.
  </li>

  <li>
    <strong>Personal protective equipment (PPE):</strong> Some jobs legally require the use of PPE. PPE acts as a barrier between workers and hazards and should be used in conjunction with other control strategies, not as a replacement for them. When other controls cannot adequately eliminate or reduce hazards, PPE may be necessary in addition to those strategies. Remember, PPE does not eliminate or reduce the hazard itself; it creates a barrier between you and the hazard. Its effectiveness largely depends on employees' behavior.
  </li>
</ol>

<p>
  As long as employees comply with warning signs, administrative controls, and wear PPE when required, these control strategies will be effective. However, human beings are natural risk-takers, and it's 'normal' for us to prioritize efficiency in our work. Sometimes, safe work procedures are not perceived as efficient, so we may resist using them. Here's an important principle to remember:
</p>

<div class="highlight-box">
  <p>
    <strong>Any system that relies on human behavior is inherently unreliable.</strong>
  </p>
</div>

<h4>Interim Measures</h4>

<p>
  Using a lower-priority hazard control method over a higher-priority control strategy may be appropriate for providing temporary protection until the hazard is permanently abated. If the hazard cannot be eliminated entirely, interim control measures will likely involve a combination of control methods used together. OSHA believes that feasible interim measures are always available if higher-level control methods are not possible.
</p>`
          },

          {
            title: "Recommend System Improvements",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: ` 

<p>
  The surface causes for accidents actually represent the symptoms of underlying safety management system weaknesses.
</p>

<img
  src="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/images/702_7_5_rf50630796_s.jpg"
  alt="Two workers one explaining safety rules to the other"
  style="max-width: 100%; height: auto; display: block; margin: 20px auto;"
>

<p>
  Training is one of the most important long-term improvements in the SMS.
</p>

<p>
  The behaviors and conditions that caused the accident are typically the effects of deeper root causes. This is a fact.
</p>

<p>
  As an accident investigator, your first assumption should be that root causes have contributed to an accident, and your job is to find them. Accidents solely the result of a 'personal failure' will be rare in most organizations.
</p>

<p>
  Efforts should be made to improve safety management system components for long-term workplace safety. Examples of improvements include:
</p>

<ul>
  <li>Including 'safety' in a mission statement.</li>
  <li>Clarifying responsibility and accountability in the safety policy.</li>
  <li>Implementing checklists with safety checks in work processes.</li>
  <li>Incorporating hands-on practice into safety training.</li>
  <li>Revising purchasing policy to consider safety alongside cost.</li>
  <li>Expanding the safety inspection process to involve all supervisors and employees.</li>
</ul>`
          },

                                                  {
            title: "GIGO or QIQO ? ",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `

<p>
  When managers don't respond to a recommendation, it may be due to insufficient information to take action.
</p>

<p>
  You may have heard of the "garbage in, garbage out" (GIGO) principle, which states that using low-quality input results in low-quality output. Conversely, using high-quality input leads to high-quality results, known as the 'Quality in - Quality out' or 'QIQO' principle.
</p>

<p>
  Presenting quality information to management is more likely to lead to effective decisions and long-lasting positive improvements.
</p>

<h2>Six Key Questions</h2>

<p>
  To ensure that your recommendations include high-quality short-term corrective actions and long-term safety management system improvements, address the following six key questions. This will not only prepare you to answer any questions from management when presenting your recommendations but also help you justify the need for action based on management's obligations.
</p>

<p>
  Answer the following six questions to help develop and justify recommendations.
</p>

<ol>
  <li>
    <strong>What exactly is the problem?</strong>

    <ul>
      <li>
        What are the particular hazardous conditions and unsafe work practices that led to the issue?
      </li>

      <li>
        What are the system components, including the inadequate design or implementation of safety management programs, policies, plans, processes, procedures, and general practices, that permitted these conditions and behaviors to persist?
      </li>
    </ul>
  </li>
</ol>`
          },

             {
            title: "Six Key Questions",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: "",
            content: `

<ol start="2">
  <li>
    <strong>What is the history of the problem?</strong>

    <p>
      Knowing the history of the problem will help you be able to determine the probability of similar accidents.
    </p>

    <ul>
      <li>Have similar accidents occurred before?</li>
      <li>What were the previous direct and indirect costs associated with similar accidents?</li>
      <li>How did similar accidents impact production and morale?</li>
      <li>Describe their impact on direct costs related to past injuries or illnesses, including budgeted or insured costs.</li>
      <li>Describe their impact on indirect costs related to loss of efficiency, productivity, and employee morale, including unbudgeted or uninsured costs.</li>
    </ul>
  </li>

  <li>
    <strong>What are the solutions that would correct the problem?</strong>

    <ul>
      <li>What are the specific controls that will eliminate or at least reduce exposure to the hazardous conditions?</li>
      <li>What are the specific system improvements needed to ensure a long-term fix?</li>
    </ul>
  </li>

  <li>
    <strong>Who is the decision-maker?</strong>

    <ul>
      <li>Who is the person who can approve, authorize, and act on the corrective measures?</li>
      <li>What are the possible objections that he/she might have?</li>
      <li>What are the arguments that will be most effective in overcoming objections?</li>
    </ul>
  </li>

  <li>
    <strong>Why is the decision-maker doing safety?</strong>

    <p>
      It's important to know what is motivating the decision-maker. Is the decision-maker doing safety to fulfill one or more of the following imperatives?
    </p>

    <ul>
      <li>
        <strong>The social obligation:</strong> You may want to emphasize improved morale, public relations. Common in a humane corporate culture.
      </li>
      <li>
        <strong>The financial obligation:</strong> You may want to emphasize the costs/benefits. Common in an achievement-driven culture.
      </li>
      <li>
        <strong>The legal obligation:</strong> You may need to emphasize possible penalties if corrections are not made. Common in a fear-driven culture.
      </li>
    </ul>

    <p>
      Employer motivation will determine the nature of the objections to the recommendations you submit. What are possible objections the decision-maker might raise? Whatever they might be, it's important you understand their motivations so that you are better prepared with responses that satisfy the decision-maker's needs.
    </p>

    <ul>
      <li>List the possible decision-maker objections.</li>
      <li>List the arguments that are most likely to be successful against those objections.</li>
      <li>As a last resort, review employer obligations under administrative law.</li>
    </ul>
  </li>

  <li>
    <strong>What are the costs vs. benefits?</strong>

    <p>
      Ask these important questions to address the benefits in all three obligation categories.
    </p>

    <ul>
      <li>
        What is the "message" sent to the workforce and the community as a result of action or inaction? Answer this question to address the social obligation.
      </li>
      <li>
        What is the investment required to take corrective action contrasted against the costs if corrective actions are not taken? Answer this question to address the financial obligation.
      </li>
      <li>
        What are the costs that might result if OSHA investigates and/or legal action is taken against the company? Answer this question to address the legal obligation.
      </li>
    </ul>
  </li>
</ol>

<p>
  It's important to have the answers to all of these questions ready for the decision maker.
</p>

<p>
  The maintenance supervisor may be able to help you estimate the investment required for recommended corrective actions.
</p>

<h4>More ideas to consider:</h4>

<ul>
  <li>These options must also eliminate or reduce the hazards and the exposures;</li>
  <li>Try to include at least three real-world examples, but only one or two for this exercise;</li>
  <li>Briefly list low-/high-cost solutions that eliminate the problem now/soon;</li>
  <li>Briefly list low-/high-cost solutions that reduce the problem now/soon;</li>
  <li>Briefly list the advantages and disadvantages of each solution.</li>
</ul>`
          },

                       {
            title: "Estimating Direct and Indirect Costs",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `

<p>
  By adopting the recommended safety actions, we can save money on both direct and indirect accident costs. These savings are realized by avoiding the need to pay for these costs in the future.
</p>

<p>
  To help estimate these costs, OSHA's
  <a href="https://www.osha.gov/safetypays/" title="Link to OSHA" target="_blank" rel="noopener noreferrer">Safety Pays Program</a>
  tools can be used. These tools are valuable in calculating direct and indirect accident costs, as well as the necessary business volume to cover these costs.
</p>

<h2>Indirect and Direct Costs Ratio</h2>

<p>
  The indirect costs for accidents will usually be greater than the direct costs. Indirect costs can range from 1 to 20 times greater than the direct costs, depending on the total costs of the injury. For every $1 spent in direct costs, you’ll pay an additional $1 to $6 in indirect costs. To determine the ratio between the indirect and direct costs, use the equation in the image. You can also estimate the ratio based on accident costs by visiting
  <a href="https://www.osha.gov/safetypays/background" title="Link to OSHA" target="_blank" rel="noopener noreferrer">OSHA's Individual Injury Estimator: Background of Cost Estimates</a>
  webpage.
</p>

<p>
  Let's say an employee fractured his leg while working around the machinery in our scenario. If the total accident costs are $100,000 (indirect cost = $50,000 and the direct cost = $50,000), the ratio between indirect and direct costs based on the OSHA Injury Estimator of indirect to direct costs will be 1 to 1.
</p>

<h2>Total Costs to Direct Costs Ratio</h2>

<p>
  This ratio is a little more dramatic than contrasting the indirect costs with direct costs. It helps emphasize the fact that direct costs are actually just the tip of the iceberg. To determine this ratio, use the following equation:
</p>

<img
  src="images/cost.png"
  alt="Total Costs to Direct Costs Ratio"
  style="max-width: 85%; height: auto; display: block; margin: 20px auto;"
>

<p>
  In this case, if the indirect (uninsured) cost totals $50,000 and the direct (insured) cost is $50,000, total accident costs will be $100,000. The ratio of total costs to direct costs will be $100,000/$50,000 = 2:1. This ratio can be much higher.
</p>`
          },

                             {
            title: "Safety Pays!",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Safety Pays - Cost-Benefit Analysis</title>

  <style>
    /* =========================
       GENERAL PAGE STYLING
    ========================= */

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      color: #222222;
      line-height: 1.6;
    }

    .safety-pays {
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px;
    }

    /* =========================
       HEADINGS
    ========================= */

    .safety-pays h2 {
      margin: 0 0 25px;
      color: #1f4e79;
      font-size: 28px;
      font-weight: 700;
    }

    .safety-pays h3 {
      margin: 28px 0 12px;
      color: #333333;
      font-size: 21px;
      font-weight: 700;
    }

    .safety-pays h4 {
      margin: 32px 0 12px;
      color: #222222;
      font-size: 17px;
      font-weight: 700;
      line-height: 1.5;
    }

    /* =========================
       PARAGRAPHS
    ========================= */

    .safety-pays p {
      margin: 0 0 16px;
      font-size: 16px;
      line-height: 1.65;
    }

    .safety-pays a {
      color: #1f4e79;
      text-decoration: underline;
    }

    /* =========================
       LIST
    ========================= */

    .safety-pays ul {
      margin: 12px 0 24px;
      padding-left: 25px;
    }

    .safety-pays li {
      margin-bottom: 9px;
      font-size: 16px;
      line-height: 1.6;
    }

    /* =========================
       INLINE MATH
    ========================= */

    .safety-pays li math {
      font-size: 1.05em;
    }

    /* =========================
       EQUATION BOX
    ========================= */

    .safety-pays .equation {
      margin: 32px 0 42px;
      padding: 24px 28px 28px;

      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 10px;

      text-align: center;
      overflow-x: auto;
    }

    /* Equation title */

    .safety-pays .equation p {
      margin: 0 0 24px;

      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      color: #222222;
      text-align: center;
    }

    /* Formula */

    .safety-pays .equation math {
      display: block;
      margin: 10px auto 0;

      font-size: 1.2em;
      line-height: 2;
      text-align: center;
    }

    /* =========================
       FINAL PARAGRAPH
    ========================= */

    .safety-pays .final-paragraph {
      margin-top: 8px;
      margin-bottom: 0;
    }

    /* =========================
       RESPONSIVE DESIGN
    ========================= */

    @media (max-width: 600px) {

      .safety-pays {
        padding: 20px 16px;
      }

      .safety-pays h2 {
        font-size: 24px;
      }

      .safety-pays h3 {
        font-size: 19px;
      }

      .safety-pays h4 {
        font-size: 16px;
        margin-top: 28px;
      }

      .safety-pays p,
      .safety-pays li {
        font-size: 15px;
      }

      .safety-pays .equation {
        margin: 28px 0 34px;
        padding: 20px 14px 24px;
      }

      .safety-pays .equation p {
        font-size: 15px;
        margin-bottom: 20px;
      }

      .safety-pays .equation math {
        font-size: 1em;
        margin-top: 8px;
      }
    }
  </style>
</head>

<body>

  <section class="safety-pays">

    <!-- =========================
         TITLE
    ========================= -->

    

    <h3>Constructing a Cost-Benefit Analysis</h3>

    <p>
      Employers may want to know what the financial benefits are if they
      approve a recommendation. They may require you to contrast the benefits
      if the recommendation is approved against the costs if it is not.
      To do that, let's construct a cost-benefit analysis using the scenario
      below.
    </p>

    <!-- =========================
         SCENARIO
    ========================= -->

    <h3>Scenario</h3>

    <p>
      To convince the decision-maker to approve a $10,000 investment in fall
      protection training, we need to compare the financial impact of
      approving the investment versus not approving it. Based on
      <a href="https://www.osha.gov/safetypays/estimator"
         target="_blank"
         rel="noopener noreferrer">
        OSHA Safety Pays Program Estimated Cost
      </a>
      data, total accident costs for a serious injury can total over $100,000.
      For this scenario, we'll use the following financial information.
    </p>

    <ul>

      <li>
        Investment: $10,000
      </li>

      <li>
        Estimated Total Accident Costs: $100,000
      </li>

      <li>
        Gross Annual Sales: $10,000,000
      </li>

      <li>
        Net Annual Profit: $600,000
      </li>

      <li>
        Percent Net Annual Profit Margin:

        <math display="block">
          <mrow>

            <mo>(</mo>

            <mfrac>
              <mn>600000</mn>
              <mn>10000000</mn>
            </mfrac>

            <mo>)</mo>

            <mo>&#x00D7;</mo>

            <mn>100</mn>

            <mo>=</mo>

            <mn>6</mn>

            <mo>%</mo>

          </mrow>
        </math>

      </li>

    </ul>


    <!-- =========================
         QUESTION 1
    ========================= -->

    <h4>
      What will be the impact of the investment on Net Profit Margin if it
      prevents an accident?
    </h4>

    <p>
      A $10,000 investment in training will reduce the company's net annual
      profit by about 1.7% to $590,000. The net profit margin will be reduced
      to 5.9%.
    </p>

    <div class="equation">

      <p>
        Net Profit Margin After Investment
      </p>

      <math display="block">

        <mrow>

          <mfrac>

            <mrow>
              <mo>$</mo>
              <mn>590000</mn>
            </mrow>

            <mrow>
              <mo>$</mo>
              <mn>10000000</mn>
            </mrow>

          </mfrac>

          <mo>&#x00D7;</mo>

          <mn>100</mn>

          <mo>&#x2248;</mo>

          <mn>5.9</mn>

          <mo>%</mo>

        </mrow>

      </math>

    </div>


    <!-- =========================
         QUESTION 2
    ========================= -->

    <h4>
      What will be the impact on net profit margin if the investment is not
      approved and an accident occurs?
    </h4>

    <p>
      The current net annual profit of $600,000 would be reduced by about
      16.7% to $500,000. The net profit margin is reduced to 5%.
    </p>

    <div class="equation">

      <p>
        Net Profit Margin After Accident
      </p>

      <math display="block">

        <mrow>

          <mfrac>

            <mrow>
              <mo>$</mo>
              <mn>500000</mn>
            </mrow>

            <mrow>
              <mo>$</mo>
              <mn>10000000</mn>
            </mrow>

          </mfrac>

          <mo>&#x00D7;</mo>

          <mn>100</mn>

          <mo>=</mo>

          <mn>5</mn>

          <mo>%</mo>

        </mrow>

      </math>

    </div>


    <!-- =========================
         QUESTION 3
    ========================= -->

    <h4>
      What is the Return on the Investment (ROI) when it prevents an accident?
    </h4>

    <p>
      If the $10,000 investment in this scenario prevents a $100,000 accident,
      the ROI will be 900%.
    </p>

    <div class="equation">

      <p>
        Return on Investment (ROI)
      </p>

      <math display="block">

        <mrow>

          <mfrac>

            <mrow>

              <mo>$</mo>
              <mn>100000</mn>

              <mo>&#x2212;</mo>

              <mo>$</mo>
              <mn>10000</mn>

            </mrow>

            <mrow>

              <mo>$</mo>
              <mn>10000</mn>

            </mrow>

          </mfrac>

          <mo>&#x00D7;</mo>

          <mn>100</mn>

          <mo>=</mo>

          <mn>900</mn>

          <mo>%</mo>

        </mrow>

      </math>

    </div>


    <!-- =========================
         CONCLUSION
    ========================= -->

    <p class="final-paragraph">
      As you can see, the financial benefits of investing in accident
      prevention can be substantial compared to the potential costs of a
      serious accident.
    </p>

  </section>

</body>

</html>`
          },

           {
            title: "Provide Options",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: `<h2>Provide Options</h2>

<p>
  Another good recommendation strategy is to provide the decision-maker with alternative corrective actions.
</p>

<p>
  Giving the decision-maker options increases the probability that the decision-maker will choose to approve at least one of them. It also gives them a sense that they are in control. Your options might follow the logic below:
</p>

<ol>
  <li>
    <strong>First option</strong> - If we had all the money we needed, what could we do? Eliminate the hazard primarily with engineering controls. Additional administrative controls if required.
  </li>

  <li>
    <strong>Second option</strong> - If we have limited funds, what would we do? Eliminate the hazard with primarily administrative controls. Engineering controls if required.
  </li>

  <li>
    <strong>Third option</strong> - If we don't have any money, what can we do? Reduce exposure to the hazard with administrative controls and/or PPE.
  </li>
</ol>`
          },



          
        ]
      },


        {
        title: "Step 7: Write the Report",
        lessons: [
          {
            title: "Step 7: Write the Report",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: ` 

<p>
  Now that you have analyzed the facts and developed effective recommendations, you must report your findings to those who have the authority to take action.
</p>

<p>
  In this module, we'll cover the procedure for effectively reporting the facts.
</p>

<h2>Perception is Reality</h2>

<p>
  Never forget that your primary goal as an accident investigator is to uncover the surface causes, root causes, and report findings and recommendations. Your challenge is to be objective and accurate.
</p>

<p>
  To repeat, it is not your job to investigate to establish blame: that’s OSHA’s job. In fact, if your analysis of the facts has uncovered root-cause system weaknesses, justification for discipline does not exist because management has not fulfilled its OSHA-required responsibilities.
</p>

<p>
  Your findings and how you present them shape perceptions and subsequent corrective actions. If your report arrives at conclusions such as "Bob should have used common sense," or "Bobbie forgot to use PPE," it won't be effective at all.
</p>

<p>
  If you make accusatory statements, it will not result in permanent system improvements. Bottom line: If the accident investigation doesn't help to fix the system, it has most likely been a waste of time and effort.
</p>

<p>
  <strong>Examples of OSHA Fatal Fact reports that address both surface and root causes.</strong>
</p>

<h4>OSHA Fatal Fact Accident Reports</h4>

<p>
  OSHA's
  <a href="https://www.osha.gov/Publications/fatalfacts.html"
     title="Link to Fatal Facts"
     target="_blank"
     rel="noopener noreferrer"
     style="color: #0066cc; text-decoration: underline;">
    Fatal Facts
  </a>
  describe cases that are representative of employers who failed to identify and correct hazardous working conditions leading to fatalities at their worksites. The documents offer ideas on how to correct these hazards and educate workers about safe work practices.
</p>

<ol>
  <li>
    <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/702FatalFact14.pdf"
       title="Link to Fatal Facts"
       target="_blank"
       rel="noopener noreferrer"
       style="color: #0066cc; text-decoration: underline;">
      Crushed by Carriage during Skyline-Skidding Operation
    </a>
  </li>

  <li>
    <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/702FatalFact15.pdf"
       title="Link to Fatal Facts"
       target="_blank"
       rel="noopener noreferrer"
       style="color: #0066cc; text-decoration: underline;">
      Warehouse Fall from Pallet Elevated by Forklift
    </a>
  </li>

  <li>
    <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/702FatalFact16.pdf"
       title="Link to Fatal Facts"
       target="_blank"
       rel="noopener noreferrer"
       style="color: #0066cc; text-decoration: underline;">
      Confined Space Entry on a Farm
    </a>
  </li>

  <li>
    <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/702FatalFact8.pdf"
       title="Link to Fatal Facts"
       target="_blank"
       rel="noopener noreferrer"
       style="color: #0066cc; text-decoration: underline;">
      Material Hoist Collapse
    </a>
  </li>
</ol>`
          },

                    {
            title: "The Accident Report Form",
            type: "read",
            duration: "10 min",
            video: "",
            slidesPdf: " ",
            content: ` <div class="accident-report-content">

  <h2>The Accident Report Form</h2>

  <p>
    One of the reasons an accident investigation might fail to help eliminate similar accidents is that the report form is poorly designed. Some poorly designed forms actually make it quite difficult to get beyond identification of only surface causes: root causes are often ignored.
  </p>

  <p>
    Let's look at one format that is designed to emphasize root cause analysis. Look at this
    <a href="https://www.oshacademy.com/courses/training/702-effective-accident-investigation/documents/aiworksheet.pdf"
       title="AI Worksheet"
       target="_blank"
       rel="noopener noreferrer"
       style="color: #0066cc; text-decoration: underline;">
      sample accident report (PDF)
    </a>.
    This is a report format similar to that used by OSHA accident investigators in conducting workplace accident investigations, but it goes further. This form includes the identification of safety management system weaknesses and recommended improvements. You may want to print this form while we discuss the various sections.
  </p>


  <!-- SECTION I -->
  <h4 style="margin-top: 32px;">Section I. Background</h4>

  <p>
    This section contains background information that answers questions about who the victim is, the time, date, and location of the accident, as well as other necessary details. Make sure you obtain all of this information for possible reference at a later date.
  </p>


  <!-- SECTION II -->
  <h4 style="margin-top: 32px;">Section II. Description of the Accident</h4>

  <p>
    This section presents a descriptive narrative of the events leading up to, including, and immediately after the accident. It's important that the narrative paints a vivid "word picture" so that someone unfamiliar with the accident can clearly see what happened.
  </p>

  <p>
    Below is a sample Section II Description of the accident.
  </p>

  <div style="
    margin: 24px 0;
    padding: 18px 20px;
    background: #f7f9fc;
    border: 1px solid #dfe5ec;
    border-left: 5px solid #0066cc;
    border-radius: 8px;
  ">
    <p style="margin: 0 0 8px 0;">
      <strong>Sample</strong>
    </p>

    <p style="margin: 0;">
      <strong>Section II: Description of the Accident</strong>
    </p>
  </div>

  <ol style="
    padding-left: 28px;
    margin: 20px 0 28px 0;
  ">
    <li style="margin-bottom: 12px;">
      Employee #1 returned to work at 12:30 PM after lunch to continue laying irrigation pipes.
    </li>

    <li style="margin-bottom: 12px;">
      At approximately 12:45 PM Employee #1 began dumping accumulated sand from an irrigation mainline pipe.
    </li>

    <li style="margin-bottom: 12px;">
      Employee #1 oriented the pipe vertically and it contacted a high-voltage power line directly over the work area.
    </li>

    <li style="margin-bottom: 12px;">
      Employee #2 heard a "zap" and turned to see the mainline pipe falling and employee #1 falling into an irrigation ditch.
    </li>

    <li style="margin-bottom: 12px;">
      Employee #2 ran to Employee #1 and pulled him from the irrigation ditch, laid him on his back and ran about 600 ft to his truck and placed a call for help on his mobile phone.
    </li>

    <li style="margin-bottom: 12px;">
      Employee #2 then ran back to find Employee #1 had fallen back into the ditch.
    </li>

    <li style="margin-bottom: 12px;">
      Employee #2 jumped back into the ditch and held Employee #1 out of the water until help arrived.
    </li>

    <li style="margin-bottom: 12px;">
      Two other ranch employees arrived and assisted Employee #2 in getting Employee #1 out of the ditch.
    </li>

    <li style="margin-bottom: 12px;">
      Approximately one minute later, paramedics arrived and began to administer CPR on employee #1.
    </li>

    <li style="margin-bottom: 12px;">
      They also used a heart defibrillation machine in an attempt to stabilize Employee #1's heartbeat.
    </li>

    <li>
      At approximately 1:10 PM an ambulance arrived and transported Employee #1 to the hospital where he was pronounced dead at 1:30 PM.
    </li>
  </ol>


  <!-- SECTION III -->
  <h4 style="margin-top: 32px;">Section III. Findings</h4>

  <p>
    The findings section describes the hazardous conditions, unsafe behaviors, <strong>and</strong> the system weaknesses your analysis has uncovered. Each description of a surface or root cause will also include justification for the finding. The justification will explain how you came to your conclusion.
  </p>

  <p>
    Unfortunately, the most common failure found in accident reports is that they address only surface causes. Consequently, similar accidents recur. These report forms may have a format that "forces" the investigator to list only surface causes for accidents. The form does not "report" the system weaknesses associated with each surface cause. Consequently, the investigator believes the job is done without ferreting out the system weaknesses representing the root causes.
  </p>

  <p>
    Other forms may actually require the investigator to indicate the status of employee negligence. Now, how can the accident investigator assure an interviewee or any other employee that the purpose of the analysis process is to "fix the system — not the blame," when the report form shouts "negligent"?
  </p>

  <p>
    To complete this section, just state the facts: The hazardous conditions, unsafe behaviors, practices, and inadequate or missing programs, policies, plans, processes and procedures that produced them. Be sure to write complete descriptive sentences. Not short cryptic phrases. For example, look at the descriptive surface cause and root cause statements below.
  </p>


  <!-- CAUSE STATEMENTS -->
  <div style="
    margin: 28px 0 20px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #e5e7eb;
  ">
    <p style="margin: 0;">
      <strong>Sample Cause Statements</strong>
    </p>
  </div>


  <div style="
    margin: 20px 0;
    padding: 18px 20px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  ">

    <p style="margin: 0 0 16px 0;">
      <strong>Sample Surface Cause Statements</strong>
    </p>

    <p style="margin: 0 0 14px 0;">
      <strong>Hazardous condition:</strong> A high-voltage power line was located directly over the work area.
    </p>

    <p style="margin: 0;">
      <strong>Unsafe behaviors/activities:</strong> Employee #1 was working with equipment within 10 feet of high-voltage power lines without spotter or taking other precautions. Employee #1 received training from another employee who did not have sufficient knowledge of safety procedures.
    </p>

  </div>


  <div style="
    margin: 20px 0;
    padding: 18px 20px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  ">

    <p style="margin: 0 0 16px 0;">
      <strong>Sample Root Cause Statements</strong>
    </p>

    <p style="margin: 0 0 14px 0;">
      <strong>Inadequate process:</strong> The process of training employee #1 and #2 around high-voltage lines does not include safe work procedures.
    </p>

    <p style="margin: 0 0 14px 0;">
      <strong>Inadequate training plan:</strong> Safety training plan does not include procedures for employees working around high-voltage lines.
    </p>

    <p style="margin: 0;">
      <strong>Missing Policy:</strong> Policies regarding safe working procedures and practices related to work around high-voltage lines do not exist.
    </p>

  </div>


  <!-- SECTION IV -->
  <h4 style="margin-top: 32px;">Section IV. Recommendations</h4>

  <p>
    If root causes are not addressed properly in Section III of the report, it is doubtful recommendations in this section will include improving system inadequacies.
  </p>

  <p>
    Effective recommendations will describe ways to eliminate or reduce both surface and root causes. They will also detail estimated costs involved with implementing corrective actions. Review the sample Section IV. Recommendations below.
  </p>


  <div style="
    margin: 24px 0 20px 0;
    padding: 16px 20px;
    background: #f7f9fc;
    border: 1px solid #dfe5ec;
    border-left: 5px solid #0066cc;
    border-radius: 8px;
  ">
    <p style="margin: 0;">
      <strong>Sample Recommendations</strong>
    </p>
  </div>


  <p>
    <strong>Sample recommendation that corrects surface cause</strong>
  </p>

  <ul style="padding-left: 24px;">
    <li style="margin-bottom: 12px;">
      Conduct immediate training for all affected employees and their supervisors who are exposed to the high-voltage line. Document all training. Estimated costs: $500.00
    </li>
  </ul>


  <p style="margin-top: 24px;">
    <strong>Sample recommendations that correct the root cause</strong>
  </p>

  <ul style="padding-left: 24px;">
    <li style="margin-bottom: 12px;">
      Develop and implement policy directing supervisors to conduct safety training, including demonstration, to all employees under their control. Estimated costs: $1500.00
    </li>

    <li style="margin-bottom: 12px;">
      Develop company safety training plan for employees and supervisors that includes safe work procedures and responsibilities while working near high-voltage lines. Estimated costs: $1,000.00
    </li>

    <li>
      Develop and implement an executive-level safety and health education plan. Estimated costs: $500.00
    </li>
  </ul>


  <!-- SECTION V -->
  <h4 style="margin-top: 32px;">Section V. Summary</h4>

  <p>
    This section contains a brief review of the causes of the accident and recommendations for corrective actions. In your review, it's important to include language that contrasts the costs of the accident with the benefits derived from investing in corrective actions. Including bottom-line information will ensure that your recommendation will be understood and appreciated by management.
  </p>

</div>`
          },


           
        ]
      },


    ]
  });
