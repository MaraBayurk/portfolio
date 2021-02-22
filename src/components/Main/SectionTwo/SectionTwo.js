
import styles from './sectionTwo.module.scss'
import foto from '../../../foto.jpeg'

export default function SectionTwo(){
    return(
        <div className={styles.container_second}>
            <div className={styles.container_img}>
                <img src={foto} className={styles.img}/>
            </div>
            <div className={styles.container_description}>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat phasellus natoque consequat, 
                    nec platea hac turpis ornare. Felis mi mattis nulla laoreet ultricies augue integer ligula convallis, 
                    netus ullamcorper suspendisse scelerisque elementum tincidunt mollis nam placerat, fringilla egestas 
                    himenaeos malesuada gravida class porta parturient. Pretium in praesent lectus at phasellus hac erat 
                    pellentesque nullam, auctor convallis bibendum augue rhoncus pharetra tortor lobortis, natoque vestibulum 
                    pulvinar vivamus dignissim sociis curabitur fermentum.
                </p>
            </div>
        </div>
    )
}