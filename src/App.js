import styles from './index.module.scss';
import Header from './components/Header/Header'
import foto from './foto.jpeg'
import Main from './components/Main/Main';

function App(prop) {
  let nombre= "Mara Bayurk";
  console.log(prop);
  return (
    <div className= {styles.app}>
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
