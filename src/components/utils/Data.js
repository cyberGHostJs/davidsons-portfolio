import file1 from "../about-screen/img/file1.png";
import file2 from "../about-screen/img/file2.png";
import file3 from "../about-screen/img/file3.png";
import reactLogo from "../project-screen/img/reactLogo.png";
import vueLogo from "../project-screen/img/vueLogo.png";
import htmlLogo from "../project-screen/img/htmlLogo.png";
import cssLogo from "../project-screen/img/cssLogo.png";
import mailIcon from "../about-screen/img/mail-icon.png";
import phoneIcon from "../about-screen/img/phone-icon.png";
import project1 from "../project-screen/img/project1.png";
import project2 from "../project-screen/img/project2.png";
import project3 from "../project-screen/img/project3.png";
import vueTag from "../project-screen/img/vueTag.png";
import reactTag from "../project-screen/img/reactTag.png";

export const navItems = [
  { label: "bio", img: file1 },
  { label: "interests", img: file2 },
  { label: "education", img: file3 },
];
export const contactItems = [
  { label: "@gmail", img: mailIcon },
  { label: "+2348085176952", img: phoneIcon },
];
export const otherContacts = [
  { label: "Instagram", img: mailIcon },
  { label: "Twitter", img: phoneIcon },
];

export const bio = [{ label: "about-me" }];
export const interests = [
  { label: "coding" },
  { label: "gaming" },
  { label: "skating" },
];
export const education = [{ label: "high-school" }, { label: "university" }];

// data.js
export const aboutMessageData = `/**
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

export const codingMessageData = `/**
coding 
**/`;

export const gamingMessageData = `/**
gaming MessageData 
**/`;

export const skatingMessageData = `/**
skating MessageData 
**/`;

export const highSchoolMessageData = `/**
highSchool MessageData 
**/`;

export const universityMessageData = `/**
university MessageData 
**/`;

export const users = [
  { id: 1, name: "User 1", image: file1 },
  { id: 2, name: "User 2", image: file2 },
  { id: 3, name: "User 3", image: file3 },
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

export const menuOptions = [
  {
    id: 1,
    title: "React",
    imageSrc: reactLogo,
    complete: false,
  },
  {
    id: 2,
    title: "Vue",
    imageSrc: vueLogo,
    complete: false,
  },
  {
    id: 4,
    title: "CSS",
    imageSrc: cssLogo,
    complete: false,
  },
  {
    id: 5,
    title: "HTML",
    imageSrc: htmlLogo,
    complete: false,
  },
];
export const profileData = [
  {
    id: 1,
    name: "John Doe",
    image: project1,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    link: "https://movies-watch-list.vercel.app/",
    imgTag: reactTag,
    tag: "React, HTML, CSS",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: project2,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    link: "https://care-pro.vercel.app/login",
    imgTag: reactTag,
    tag: "React, HTML, CSS",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: project3,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    link: "https://apivault.dev/",
    imgTag: vueTag,
    tag: "Vue, HTML, CSS",
  },
  // {
  //   id: 4,
  //   name: "Bob Brown",
  //   image: "bob.jpg",
  //   description: "Full-stack Developer",
  // },
  // {
  //   id: 5,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 6,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 7,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 8,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 9,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 10,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 11,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 12,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 13,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
  // {
  //   id: 14,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Duis aute irure dolor in velit esse cillum dolore.",
  // },
  // {
  //   id: 15,
  //   name: "Eva Wilson",
  //   image: "eva.jpg",
  //   description: "Product Manager",
  // },
];

export const reducer = (state, action) => {
  if (action.type === "COMPLETE") {
    return state.map((todo) => {
      if (todo.id === action.id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
  }
  if (action.type === "RESET") {
    return state.map((todo) => ({ ...todo, complete: false }));
  }
  return state;
};
