import React from "react";
import { datos } from "../data/infoNotas";

const Notas = ({nota}) => {
    // console.log(index)
  return (
    <div>
      <div className="card col">
        {/* {console.log(index)} */}
        <div className="card-body">{`${nota.texto}`}</div>
      </div>
    </div>
  );
};

export default Notas;
{
  /*
    <div className="card">
  <div className="card-body">
    This is some text within a card body.
  </div>
</div>
 */
}
