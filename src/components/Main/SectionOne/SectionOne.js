
import styles from './sectionOne.module.scss'
import imagen from '../../../images/foto.jpeg'


export default function SectionOne(){
    return(
      <header className={styles.containerOne}>
            <div className={styles.container_img}>
              <div>
                <img src={imagen} className={styles.img} alt=""/>
                <div className={styles.corner}> 
                   <div className={styles.cornerdiv}></div>
                </div>
              </div>
            </div>
            <div className={styles.containerName}>
              <h1> Mara Valentina Bayurk </h1>
              <h3>Full Stack Developer </h3>
            </div>
        </header>

    )
}