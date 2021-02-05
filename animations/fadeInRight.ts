import { defaultEasing } from "./easings";

const fadeInRight = {
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: defaultEasing,
    },
  },
};

export default fadeInRight;
