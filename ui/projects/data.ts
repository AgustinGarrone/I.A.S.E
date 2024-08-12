import grandbrizo from "../../public/projects/grand-brizo.jpg";
import gri from "../../public/projects/gri.jpg";
import grandbell from "../../public/projects/grand-bell.jpg";

export type PreviewProjectData = {
  company: string;
  description: string;
  img: string;
  animationName: string;
};

export const PREVIEW_PROJECTS_DATA: PreviewProjectData[] = [
  {
    company: "Grand Brizo",
    description:
      "Lorem ipsum dolor sit amet, consectminim veniam, quicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus er",
    img: grandbrizo.src,
    animationName: "animate__animated animate__fadeInLeft",
  },
  {
    company: "Gri Towers",
    description:
      "Lorem ipsum dolor sit amet, consectminim veniam, quicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus er",
    img: gri.src,
    animationName: "animate__animated animate__fadeInDown",
  },
  {
    company: "Grand Bell",
    description:
      "Lorem ipsum dolor sit amet, consectminim veniam, quicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus er",
    img: grandbell.src,
    animationName: "animate__animated animate__fadeInUp",
  },
];
