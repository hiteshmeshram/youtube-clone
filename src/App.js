
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import appStore from './utils/appStore';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Provider store={appStore}>
    <div >

      <Router>
           <Head/>
           <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/watch" element={<WatchPage/>}></Route>
           </Routes>
      </Router>
      

      
    </div></Provider>
  );
}

export default App;
