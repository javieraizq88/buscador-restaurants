import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import data from "./data1.js";
import Modal from "./modal";

const BuscarUbicacion = props => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    fetch('./db.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }, [])

  data.sort(function (a, b) {
    if (a.address > b.address) {
      return 1;
    }
    if (a.address < b.address) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  return (
    <div>
      <div className="container">
        <div id="contenido1" >
          <div className=" contenedorBusq d-flex justify-content-between">
          <div className="card-body contenedorBusq2">
              <a type="button" className="btn btn-secondary" href="/buscarnombre">Encuentra tu restaurant por el nombre  </a>

            </div>
            <div className="card-body contenedorBusq1">
              <a type="button" className="btn btn-secondary" href="/buscarubicacion">Encuentra tu restaurant por la dirección</a>
              <p className="mt-3">Escribe la dirección y aparecerán los restaurantes</p>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="mb-2"
                  value={store.buscarUbicacion}
                  onChange={(e) => actions.handleChange(e)}
                  name="buscarUbicacion"
                  icon="search"
                  placeholder="Dirección"
                  type="" />
              </form>
              <small>Respete Mayúsculas y minúsculas</small>
            </div>



          </div>


          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 ">
          <h1><strong> Elige tu Restaurante</strong></h1>                 

            {
            store.buscarUbicacion !== "" ?
              data
                .filter((restaurant, i) => {
                  const { address } = restaurant
                  return (address.street.includes(store.buscarUbicacion))
                })
                .map((restaurant, i) => {
                  return (
                    <div className=" mb-4 pl-3">
                      <div className="">
                        <div className="card">
                          <div className="card-header">
                            <h5 className=" text-center d-flex justify-content-around">
                              <div>{restaurant.name}</div>
                              <div>
                                <a href="https://www.facebook.com/">
                                  <i className="far fa-thumbs-up"> </i>
                                </a>
                              </div>
                            </h5>
                          </div>
                          <div className="contenedor-img card bg-dark text-white">
                            <img src={restaurant.imagen} id="imagen" className="rounded card-img" alt="imagen-restaurant" />
                            <div id="info-rest" className="card-img-overlay">
                              <h5 className="card-title d-flex justify-content-end">{restaurant.rating}</h5>
                            </div>
                          </div>
                          <div className="card-body">
                            <p>
                              <strong>Dirección:</strong>
                              <p className="pl-3">
                                &nbsp;{restaurant.address.street}<br />
                              &nbsp;{restaurant.address.city}, {restaurant.address.state} <br />
                              </p>
                            </p>
                            <p>
                              <strong>Sitio web:</strong>
                              <p className="pl-3">
                                &nbsp;<a href={restaurant.contact.site}> {restaurant.contact.site}</a>
                              </p>
                            </p>

                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target={`#modal_${i}`}>
                              Más información
                                    </button>
                          </div>
                        </div>

                      </div>
                      <Modal restaurant={restaurant} i={i} />
                    </div>
                  )
                })
              :
              (
                <div className="mt-4 mb-4 pl-3" id="error">
                  <h5>No hay restaurantes con esa dirección, busque nuevamente</h5>
                </div>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default BuscarUbicacion;