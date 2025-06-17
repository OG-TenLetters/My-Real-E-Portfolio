import AnithonImg from "../../assets/AnithonShowcase.png";
import InternshipImg from "../../assets/InternshipShowcase.png";
import NetflixImg from "../../assets/NetflixShowcase.png";
import BookstoreImg from "../../assets/BookstoreShowcase.png";
import SpotifyImg from "../../assets/SpotifyCloneShowcase.png";
import SkinstricImg from "../../assets/SkinstricShowcase.png";

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
  const ViteColor = "#FFFF0060";

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
      This is my Netflix clone I made to get familiar
      with Tailwindcss. I also learned how to embed medias 
        and a working Login/Signup using firebase as authentication.
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/Netflix-Clone",
        },
        {
          link: "https://media-site-ruddy-eta.vercel.app/",
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
      title: "E-Bookstore",
      image: BookstoreImg,
      id: 4,
      para: `
        This project taught me how to manipulate logic with useState and useEffect
        to create an interactive UI for adding and removing products from a cart.
        Additionally, it was my first time using useParams and creating multiple pages.
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
    {
      title: "Spotify Clone",
      image: SpotifyImg,
      id: 5,
      para: `
      This is one of my clone projects I made to get familiar
      with Vite, practice using "use(Etc)" in React, getting well versed with useRef,
       hooks, and creating a functional progress bar for media.
    
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/Spotify-Clone-Attempt-1",
        },
        {
          link: "https://spotify-clone-blond-alpha.vercel.app/",
        },
      ],
      techs: [
        {
          tech: "Vite",
          bg_color: ViteColor,
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
      ],
    },
    {
      title: "Skinstric AI",
      image: SkinstricImg,
      id: 6,
      para: `
      This was the second internship project where I learned how to utilize useRef for animations, 
      how to make custom animation functions, working with due dates, creating EOD reports, and
       how to get user system permission for file transfer and camera usage. Additionally, 
       I learned how to push data to an API to meet requirements for data retrieval.
    
      `,
      links: [
        {
          link: "https://github.com/OG-TenLetters/Jadon-Skinstric-Internship",
        },
        {
          link: "https://jadon-skinstric-internship.vercel.app/",
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
  ];
  return projectData;
};

export default ProjectDetailsApi;
