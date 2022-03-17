import React from "react";

function Api({ id, name, description }) {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <h4 className="card-title">ID {id}</h4>
              <h4 className="card-title">Nombre del juego {name}</h4>
              <p className="card-text text-secondary">Precio:{description}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Api;