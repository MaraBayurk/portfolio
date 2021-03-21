import styles from './sectionThree.module.scss';
import CarruselApp from './CarruselApp.js';
import CarruselEcommerce from './CarruselEcommerce.js';


export default function SectionThree(){
    return(
    <section className={styles.containerProjects}>
        <div className={styles.containerTitle}>
          <h2><b>Proyectos</b></h2>
        </div>
          <div className={styles.containerCard} >
            <div className={styles.containerImg}>
            <a href="https://kitty-shop.herokuapp.com/" target="_BLANK" rel="noreferrer">
              <CarruselEcommerce/>
            </a>
               
            </div>
            <div className={styles.description}>
            <h2>Kitty Shop</h2>
            <p>Ecommerce Kitty-Shop dedicado a la venta de artículos para mascotas, realizado en 
              equipo utilizando metología SCRUM.</p>
              <p>Estuve encargada principalmente en la creación de componentes con React 
              estilizando con SASS.</p>
              <p><b>Front:</b> React, Redux, Axios, Sass.</p>
              <p><b>Back:</b> Express, Sequelize, PostgreSql.</p>
            </div>
          </div>
          <div className={styles.containerCard} >
          <div className={styles.containerImg}>
            <a href="#">
              <CarruselApp/>
            </a>
            </div>
            <div className={styles.description}>
            <h2>Potrero App Student</h2>
            <p> App para el manejo de los estudiantes que asisten a clases de apoyo en la Fundación El Potrero.</p>
           <p> Estuve enfocada en el desarrollo de la app mobile utilizando React Native con Expo.</p> 
            <p><b>Front:</b>  React Native, Expo, TypeScript, React Navigation, Redux.</p>
            <p><b>Back:</b> TypeScript, Express, Sequelize, PostgreSql.-</p>
            </div>
          </div>

      </section>
    )
}