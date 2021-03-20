import styles from './index.module.scss';
import Main from './components/Main/Main';

function App(prop) {
  return (
    <div className= {styles.app}>
     <Main/>
    </div>
  );
}

export default App;
