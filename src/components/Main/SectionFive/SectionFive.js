import styles from './sectionFive.module.scss';
import linkedin from '../../../images/contact/linkedin.png';
import github from '../../../images/contact/github.png'
import gmail from '../../../images/contact/gmail.png'
import whatsapp from '../../../images/contact/whatsapp.png'
import cv from '../../../images/contact/cv.png'


export default function SectionFive(){
    return(
        <section className={styles.containerAbout}>
            <div className={styles.containerTitle}>
                <h2><b>Contacto</b></h2>
            </div>
            <div className={styles.containerContact}>
                <div>
                    <a href="https://www.linkedin.com/in/mara-bayurk/" target="_blank">
                        <img src={linkedin}/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/MaraBayurk" target="_blank">
                        <img src={github}/>
                    </a>
                </div>
                <div>
                    <a href="mailto:marabayurk@gmail.com" target="_blank">
                        <img src={gmail}/>
                    </a>
                </div>
                <div>
                <a href="https://api.whatsapp.com/send?phone=5493815741941&amp;text=Hola%20Mara!%20Vi%20tu%20pagina!%20" target="_blank">
                    <img src={whatsapp}/>
                </a>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1C6uRGerwN3GksKFpwUPI1mSJ2b2U0KAb/view" target="_blank">
                    <img src={cv}/>
                    </a>
                </div>
            </div>
        </section>

    )
}