import file1 from "../about-screen/img/file1.png";
import file2 from "../about-screen/img/file2.png";
import file3 from "../about-screen/img/file3.png";
import mailIcon from "../about-screen/img/mail-icon.png";
import phoneIcon from "../about-screen/img/phone-icon.png";

export const navItems = [
  { label: "bio", img: file1 },
  { label: "interests", img: file2 },
  { label: "education", img: file3 },
];
export const contactItems = [
  { label: "@gmail", img: mailIcon },
  { label: "0808 517 6952", img: phoneIcon},
];

export const bio = [ { label: "about-me" }];
export const interests = [
  { label: "coding" },
  { label: "gaming" },
  { label: "skating" },
];
export const education = [{ label: "high-school" }, { label: "university" }];

// data.js
export const messageData = `/**
About me
Experienced Frontend Developer
2 Years of Proven Expertise
Mobile-First Advocate
HTML, CSS, JavaScript Specialist
Proficient in:
React, Vue, jQuery, typescript,
Bootstrap, Tailwind
Responsive Web Design Pro
Problem-Solving Guru
Collaborative Team Player
Results-Driven Developer
Delivering Impactful Web Solutions
Ready to elevate your projects to new 
heights. Let's connect!
**/`;

export const users = [
  { id: 1, name: 'User 1', image: file1 },
  { id: 2, name: 'User 2', image: file2 },
  { id: 3, name: 'User 3', image: file3},
  // Add more user data as needed
];
export const codeSnippet = `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`;
