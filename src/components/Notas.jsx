import React from "react";
import { datos } from "../data/infoNotas";

const Notas = ({nota}) => {
    // console.log(index)
  return (
    <div>
      <div className="card col">
        {/* {console.log(index)} */}
        <div className="card-body text-center">{`${nota.texto}`}</div>
      </div>
    </div>
  );
};

export default Notas;

// {hacer un apartado de notas con candado que se necesite una contraseña para poder verlas}

{
  /*
    <div className="card">
  <div className="card-body">
    This is some text within a card body.
  </div>
</div>
 */
}
