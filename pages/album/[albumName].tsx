import React from 'react'
import styles from '../../styles/albumName.module.scss';
import FooterTriangleLeft from '../../assets/FooterTriangle';
import FooterTriangleRight from '../../assets/FooterTriangleRight';

interface Props {
    
}

const Album = (props: Props) => {
    return (
        <div className={styles.container}>
            <header></header>
            <main>
                <div className={styles.musicImageArea}>
                    <div style={{backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/71DX9fQhSHL._SL1212_.jpg)'}}className={styles.coverContainer}>
                        
                    </div>
                </div>
                <div className={styles.musicInfoArea}>
                    <h1>Album title</h1>
                    <p>song lirics</p>
                </div>
            </main>
            <footer>
                <FooterTriangleLeft />
                <FooterTriangleRight />
            </footer>
        </div>
    )
}

export default Album
