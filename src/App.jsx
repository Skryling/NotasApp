import { useState } from "react";
import NavBar from "./components/NavBar";
import Notas from "./components/Notas";
import { datos } from "./data/infoNotas";
// import './App.css'

function App() {
  const coso = "hola mundo!"
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center flex-column flex-grow">
        <div className="row">
          {datos.map((nota, index) => (
            <Notas nota={nota} key={index} />
          ))}
        </div>
      </div>
      {/* <del>{`${coso}`}</del> */}
      
    </>
  );
}

export default App;
