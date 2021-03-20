import styles from './main.module.scss'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'

export default function Main(){

    return(
        <div className={styles.container}>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <section className={styles.containerTech}>
            <div className={styles.containerTitle}>
              <h2><b>Tecnologías</b></h2>
            </div>
            <div className={styles.tech}>
            
            </div>
          </section>
        </div>
    )
}