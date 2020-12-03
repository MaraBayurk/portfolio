import styles from './index.module.scss';
import Header from './components/Header/Header'
import foto from './foto.jpeg'

function App(prop) {
  let nombre= "Mara Bayurk";
  console.log(prop);
  return (
    <div className= {styles.app}>
     <Header/>
     <div className={styles.main}>
       <div className={styles.container_brand}>
         <div className={styles.container_brand_img}>
           <img src= {foto}></img>
         </div>
         <div className={styles.container_brand_text}>
           <h1>{nombre}</h1>
           <h2>{prop.oficio}</h2>
         </div>
       </div>
     </div>
     <div className={styles.footer}></div>
    </div>
  );
}

export default App;
