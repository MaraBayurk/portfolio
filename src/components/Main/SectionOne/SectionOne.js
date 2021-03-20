
import styles from './sectionOne.module.scss'
import imagen from '../../../foto.jpeg'


export default function SectionOne(){
    return(
      <section className={styles.containerOne}>
            <div className={styles.container_img}>
                <img src={imagen} className={styles.img}/>
            </div>
            <div className={styles.containerName}>
              <h1>Mara Valentina Bayurk</h1>
              <h3>Full Stack Developer</h3>
            </div>
        </section>

    )
}