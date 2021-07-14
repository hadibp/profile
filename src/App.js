import Bg from './componants/body/Bg';
import './App.css';
import Morphing from './componants/Morphing/Morphing';
import Typing from './componants/Typing/Typing';

function App() {
  return (
    <div className="App">
     <h1> welcome to my profile</h1>
     <Bg/>
     <br/>
     <br/>

     {/* <Morphing/> */}

     <Typing/>


    </div>
  );
}

export default App;
