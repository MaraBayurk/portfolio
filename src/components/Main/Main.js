
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
        </div>
    )
}