import * as React from "react";
import styles from "./albumCard.module.scss";
import { motion } from 'framer-motion';
import fadeInRight from "../../animations/fadeInRight";
import fadeInUp from "../../animations/fadeInUp";

interface Props {
  cover: string;
  name: string;
  artist: string;
}

export const AlbumCard = ({ cover, name, artist }: Props) => {
  return (
    <div className={styles.container}>
     <div className={styles.cover}>
         <motion.div 
          variants={fadeInRight} 
          className={styles.imageContainer}
          >
          <div className={styles.puncture} />
          <img src={cover} ></img>
         </motion.div>
     </div>
     <motion.div variants={fadeInUp({delay: .4})} transition={{delay: .2}} className={styles.info}>
            <span className={styles.albumName}>name</span>
            <span className={styles.albumInfo}>artist</span>
     </motion.div>
    </div>
  );
};
