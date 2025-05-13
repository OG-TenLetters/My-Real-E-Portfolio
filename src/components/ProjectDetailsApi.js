import React from "react";
import AnithonImg from "../assets/AnithonShowcase.png";
import InternshipImg from "../assets/InternshipShowcase.png";
import NetflixImg from "../assets/NetflixShowcase.png";
import BookstoreImg from "../assets/BookstoreShowcase.png";

const ProjectDetailsApi = () => {
  const ReactColor = "#55bed5";
  const NextJsColor = "#000000";
  const Html5Color = "#a9721d";
  const CssColor = "#002677";
  const BootstrapColor = "#2f0072";
  const TailwindColor = "#005174";
  const FirebaseColor = "#801900";
  const SupabaseColor = "#007a43";
  const TypescriptColor = "#2f74c0";

  const projectData = [
    {
      title: "Anithon",
      image: AnithonImg,
      id: 1,
      para: `
      This is a from scratch project that I used to practice building up my
      styling skills and utilizing useState, useEffect, useContext
      etc. This included integrating a real API as well.
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/Anime-List-React",
        },
        {
          link: "https://anime-list-react-orpin.vercel.app/",
        },
      ],
      techs: [
        {
          tech: "React",
          bg_color: ReactColor,
        },
        {
          tech: "HTML",
          bg_color: "#ad6e0e",
        },
        {
          tech: "CSS",
          bg_color: CssColor,
        },
      ],
    },
    {
      title: "Internship",
      image: InternshipImg,
      id: 2,
      para: `
      I got to work in an internship setting that taught me how to work in
      task chunks and how to work with a team. I also learned how to do proper PRs, 
      pull requests, and merging.
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/jadon-internship",
        },
        {
          link: "https://jadon-internship.vercel.app/",
        },
      ],
      techs: [
        {
          tech: "React",
          bg_color: ReactColor,
        },
        {
          tech: "HTML",
          bg_color: Html5Color,
        },
        {
          tech: "CSS",
          bg_color: CssColor,
        },
        {
          tech: "Bootstrap",
          bg_color: BootstrapColor,
        },
      ],
    },
    {
      title: "Netflix Clone",
      image: NetflixImg,
      id: 3,
      para: `
      This is one of my clone projects I made to get familiar
      with Tailwindcss and to practice using "use(Etc)" in React 
      along with practicing Firebase.
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/Netflix-Clone",
        },
        {
          link: "https://netflix-clone-ruddy-eta.vercel.app/",
        },
      ],
      techs: [
        {
          tech: "NextJs",
          bg_color: NextJsColor,
        },
        {
          tech: "HTML5",
          bg_color: Html5Color,
        },
        {
          tech: "CSS",
          bg_color: CssColor,
        },
        {
          tech: "Typescript",
          bg_color: TypescriptColor,
        },
        {
          tech: "Tailwind",
          bg_color: TailwindColor,
        },
        {
          tech: "Firebase",
          bg_color: FirebaseColor,
        },
      ],
    },
    {
      title: "E-commerce Bookstore",
      image: BookstoreImg,
      id: 4,
      para: `
        This project taught me how to manipulate logic with useState and useEffect
        to create an interactive UI for adding and removing products from a cart.
        Additionally, it was my first time using useParams and creating multiple pages
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/E-Commerce-With-React",
        },
        {
          link: "https://libraryapp-react-one.vercel.app/",
        },
      ],
      techs: [
        {
          tech: "React",
          bg_color: ReactColor,
        },
        {
          tech: "HTML5",
          bg_color: Html5Color,
        },
        {
          tech: "CSS",
          bg_color: CssColor,
        },
      ],
    },
  ];
  return projectData;
};

export default ProjectDetailsApi;
