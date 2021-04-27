import styles from './sectionThree.module.scss';
import CarruselApp from './CarruselApp.js';
import CarruselEcommerce from './CarruselEcommerce.js';
import CarruselVivero from './CarruselVivero.js';
import CarruselFormReactNative from './CarruselFormReactNative';


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
            <a href="https://drive.google.com/file/d/1fnFZTy71Ya9ntCigJrjz8l5ONj_66Bq_/view"  target="_BLANK" rel="noreferrer">
              <CarruselApp/>
            </a>
            </div>
            <div className={styles.description}>
            <h2>Potrero App Student</h2>
            <p> App para el manejo de los estudiantes que asisten a clases de apoyo en la Fundación El Potrero.</p>
           <p> Estuve enfocada en el desarrollo de la app mobile utilizando React Native.</p> 
            <p><b>Front:</b>  React Native, Expo, TypeScript, React Navigation, Redux.</p>
            <p><b>Back:</b> TypeScript, Express, Sequelize, PostgreSql.-</p>
            </div>
          </div>


          <div className={styles.containerCard} >
          <div className={styles.containerImg}>
          <a href="https://lasrosas.herokuapp.com/" target="_BLANK" rel="noreferrer">
              <CarruselVivero/>
            </a>
            </div>
            <div className={styles.description}>
            <h2>Las Rosas</h2>
            <p> Desarrollo de Ecommerce para Vivero Las Rosas </p>
            <p>Implementacion de catalogo, checkout, sistema de reviews, mercado pago, panel de administracion. </p> 
            <p><b>Front:</b> React, Redux, Axios, Sass.</p>
            <p><b>Back:</b> Express, Sequelize, PostgreSql.-</p>
            </div>
          </div>

          <div className={styles.containerCard} >
          <div className={styles.containerImg}>
          <a href="https://github.com/MaraBayurk/Form-React-Native-CLI" target="_BLANK" rel="noreferrer">
              <CarruselFormReactNative/>
            </a>
            </div>
            <div className={styles.description}>
            <h2>Formulario React Native CLI</h2>
            <p>Formulario realizado para cumplir con propositos de envio de informacion detallada del cliente, incluye
        los siguientes inputs: nombre, apellido, fecha de nacimiento ( con incorpacion de calendario dinámico).
              </p> 
            <p>Ademas cuenta con las siguientes features: </p>
            <p>Toma de imagen Selfie <br/> Ubicacion en tiempo real</p>
            <p>Realizado con: <b>React Native CLI</b></p>

            </div>
          </div>

      </section>
    )
}