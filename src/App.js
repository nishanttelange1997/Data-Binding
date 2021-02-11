import React,{useState} from "react";
import "./Design.css";
function App() {
  
  
  
const  [myname,changeMyname]=useState("Nishant");


 const changeName = (event) =>
{
changeMyname(event.target.value);
}

  return(
    <center >
    <div className="forcenter">
     
     <h1> {myname}</h1>
   <input type="text" value={myname} onChange={changeName} ></input>
   <br></br>

   <input type="date" value={myname} onChange={changeName} ></input>
   <br></br>

   <input type="time" value={myname} onChange={changeName} ></input>
   
   
   <br></br>
  
   <input type="password" ></input>
   <br></br>
   <input type="email"></input>
   

   <br></br>
   <br></br>
    <input type="radio" value="Male" name="myname" onChange={changeName}/>Male
    <br></br>
    <input type="radio" value="Female" name="myname" onChange={changeName}/>Female
    
    <br></br>
    <h3> Select Your City</h3>
    <select onChange={changeName}>
    <option>Amaravati</option>
    <option>Pune</option>
    <option>Mumbai</option>
    <option>Hydrabad</option>
    <option>Delhi</option>


    </select>

   
 </div>
</center>
  );
}

export default App;
