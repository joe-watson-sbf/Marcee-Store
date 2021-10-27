import './scss/styles.css';
import {BrowserRouter} from 'react-router-dom';
import Site from './containers/Site/Site';
/** 
 * https://dev.h2prog.com/API_TEST/formations
 * 
*/
function App() {
  return (
    <BrowserRouter>
      <Site/>
    </BrowserRouter>
  );
}

export default App;