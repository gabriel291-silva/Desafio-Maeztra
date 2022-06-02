import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBanner from './components/sliderBanner/sliderBanner';
import Shelf from './components/shelf/shelf';
import CardBootstrap from './components/card/cardBootstrap';
import TarjetaHome from './components/tarjetaHome/tarjetaHome';
import PopUp from './components/popUp/popUp';
import { useState,useEffect } from 'react';

function App() {

  const [statePopUp,setStatePopUp] = useState(false);
    

    useEffect(() => {
      setTimeout(() => {
        setStatePopUp(true)
      }, 2000);
    }, []);

  return (
    <div className="App">
    <Header/>
    <SliderBanner/>
    <TarjetaHome/>
    <PopUp trigger={statePopUp} setTrigger={setStatePopUp}/>
    </div>
  );


}

export default App;
