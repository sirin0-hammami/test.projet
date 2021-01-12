import './App.css';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Buttons from './Components/Buttons';
import Buttons2 from './Components/Buttons2';
import Begin from './Components/Begin';
function App() {
  const [enable,setEnable]=useState(false)
  const [compteur,setCompteur]=useState(0)
  const Name=["Al pacino","Penélope Cruz","Meryl Streep","Christoph Waltz","Fathi Haddaoui"]
  return (
    <div style={{backgroundColor:'black',height:'800PX',width:'100%'}} >

     {Name[compteur] ? <Begin compteur={compteur} Name={Name} enable={enable} handleClick={()=>setEnable(true)} ></Begin> :null}

     {Name[compteur] ? <Buttons enable={enable} incrementer={()=>setCompteur(compteur+1)}></Buttons>  :null}
      <Buttons2>  </Buttons2>
    </div>
  );
}

export default App;