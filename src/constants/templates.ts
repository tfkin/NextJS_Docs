export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1 style="text-align: center; font-size: 24px; font-weight: bold;">Software Development Proposal</h1>
      <h2 style="font-size: 18px; font-weight: bold;">Introduction</h2>
      <p><br></p>
      <p>Provide an overview of the project and its objectives.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Scope of Work</h2>
      <p><br></p>
      <p>Detail the features, functionalities, and deliverables.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Timeline</h2>
      <p><br></p>
      <p>Provide a timeline of the project milestones.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Budget</h2>
      <p><br></p>
      <p>Include an estimated budget for the project.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Conclusion</h2>
      <p><br></p>
      <p>Summarize the value and next steps.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1 style="text-align: center; font-size: 24px; font-weight: bold;">Project Proposal</h1>
      <h2 style="font-size: 18px; font-weight: bold;">Executive Summary</h2>
      <p><br></p>
      <p>Provide a summary of the project goals and outcomes.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Project Details</h2>
      <p><br></p>
      <p>Outline the project scope, objectives, and deliverables.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Stakeholders</h2>
      <p><br></p>
      <p>List key stakeholders and their roles.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Resources and Budget</h2>
      <p><br></p>
      <p>Specify resources required and budget allocation.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Conclusion</h2>
      <p><br></p>
      <p>Explain why the project is important and the next steps.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p style="font-weight: bold;">[Your Name]</p>
      <p><br></p>
      <p>[Your Address]</p>
      <p><br></p>
      <p>[City, State, ZIP Code]</p>
      <p><br></p>
      <p>[Date]</p>
      <p><br></p>
      <p style="font-weight: bold;">[Recipient's Name]</p>
      <p><br></p>
      <p>[Recipient's Position]</p>
      <p><br></p>
      <p>[Company Name]</p>
      <p><br></p>
      <p>[Company Address]</p>
      <p><br></p>
      <p>Dear [Recipient's Name],</p>
      <p><br></p>
      <p>[Body of the letter]</p>
      <p><br></p>
      <p>Sincerely,</p>
      <p><br></p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1 style="text-align: center; font-size: 24px; font-weight: bold;">[Your Name]</h1>
      <p style="text-align: center;">[Contact Information]</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Professional Summary</h2>
      <p><br></p>
      <p>Briefly describe your experience and skills.</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Work Experience</h2>
      <p><br></p>
      <p style="font-weight: bold;">[Job Title] - [Company Name]</p>
      <p>[Dates of Employment]</p>
      <p><br></p>
      <p>[Responsibilities and Achievements]</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Education</h2>
      <p><br></p>
      <p style="font-weight: bold;">[Degree] - [Institution Name]</p>
      <p>[Dates of Study]</p>
      <p><br></p>
      <h2 style="font-size: 18px; font-weight: bold;">Skills</h2>
      <p><br></p>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
      </ul>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p style="font-weight: bold;">[Your Name]</p>
      <p><br></p>
      <p>[Your Address]</p>
      <p><br></p>
      <p>[City, State, ZIP Code]</p>
      <p><br></p>
      <p>[Date]</p>
      <p><br></p>
      <p style="font-weight: bold;">[Recipient's Name]</p>
      <p><br></p>
      <p>[Recipient's Position]</p>
      <p><br></p>
      <p>[Company Name]</p>
      <p><br></p>
      <p>[Company Address]</p>
      <p><br></p>
      <p>Dear [Recipient's Name],</p>
      <p><br></p>
      <p>[Introduction and reason for writing]</p>
      <p><br></p>
      <p>[Highlight relevant skills and experience]</p>
      <p><br></p>
      <p>[Express enthusiasm and willingness to contribute]</p>
      <p><br></p>
      <p>Sincerely,</p>
      <p><br></p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p style="font-weight: bold;">[Your Name]</p>
      <p><br></p>
      <p>[Your Address]</p>
      <p><br></p>
      <p>[City, State, ZIP Code]</p>
      <p><br></p>
      <p>[Date]</p>
      <p><br></p>
      <p style="font-weight: bold;">[Recipient's Name]</p>
      <p><br></p>
      <p>[Recipient's Address]</p>
      <p><br></p>
      <p>Dear [Recipient's Name],</p>
      <p><br></p>
      <p>[Body of the letter]</p>
      <p><br></p>
      <p>Sincerely,</p>
      <p><br></p>
      <p>[Your Name]</p>
      `,
  },
];
