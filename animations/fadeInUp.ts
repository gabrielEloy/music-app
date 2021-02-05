import { defaultEasing } from "./easings";

interface IFadeInUp {
  delay?: number;
}

const fadeInUp = ({ delay = 0 }: IFadeInUp = {}) => ({
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: defaultEasing,
      delay
    },
  },
});

export default fadeInUp;
