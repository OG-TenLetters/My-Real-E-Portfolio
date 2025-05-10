import React from "react";
import ReactBadge from "../../assets/React-Badge.webp";
import NextJsBadge from "../../assets/NextJs-Badge.svg";
import TailwindBadge from "../../assets/Tailwind-Badge.svg";
import FirebaseBadge from "../../assets/FireBase-Badge.svg";
import FigmaBadge from "../../assets/Figma-Badge.svg";
import SupabaseBadge from "../../assets/Supabase-Badge.svg";
import ThreeJsBadge from "../../assets/ThreeJs-Badge.png";
import JavaScriptBadge from "../../assets/JavaScript-Badge.webp";
import TypeScriptBadge from "../../assets/TypeScript-Badge.webp";
import HtmlBadge from "../../assets/HTML5-Badge.png";
import CssBadge from "../../assets/CSS-Badge.webp";

const TechBoxApi = () => {
  const techData = [
    {
      badge: ReactBadge,
      title: "React",
    },
    {
      badge: NextJsBadge,
      title: "Next.Js",
    },
    {
      badge: TailwindBadge,
      title: "Tailwind",
    },
    {
      badge: FirebaseBadge,
      title: "Firebase",
    },
    {
      badge: FigmaBadge,
      title: "Figma",
    },
    {
      badge: SupabaseBadge,
      title: "Supabase",
    },
    {
      badge: ThreeJsBadge,
      title: "ThreeJs",
    },
    {
      badge: JavaScriptBadge,
      title: "Javascript",
    },
    {
      badge: TypeScriptBadge,
      title: "Typescript",
    },
    {
      badge: HtmlBadge,
      title: "HTML5",
    },
    {
      badge: CssBadge,
      title: "CSS",
    },
  ];
  return techData;
};

export default TechBoxApi;
