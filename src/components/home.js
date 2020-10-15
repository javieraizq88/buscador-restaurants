import React, { useContext } from "react"
import { Context } from "../store/appContext";
import data1 from "./data1.js";
import Modal from "./modal";
import { Link } from 'react-router-dom';


const Home = props => {
    const { store, actions } = useContext(Context);

    data1.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    return (
        <>

            <div className="">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="nav-link" href="/">
                        <img
                            width="120px"
                            src="data:image/png;base64,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"
                        />
                        <span class="sr-only">(current)</span>
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Buscar
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/buscarnombre">Por nombre</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item active" href="#">Por ubicación</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-md-1 "></div>
                    <div id="titulo-projects" className=" col-md-10 col-xs-10 mr-2 mb-4 ">
                        <hr />
                        <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 ">
                            {
                                data1.map((restaurant, i) => {
                                    return (
                                        <div className=" mb-4 pl-3">
                                            <div className="">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 className=" text-center">
                                                            {restaurant.name}
                                                        </h5>
                                                    </div>
                                                    <div className="contenedor-img card bg-dark text-white">
                                                        <img src={restaurant.imagen} id="imagen" className="rounded card-img" alt="..." />
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

                                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal_${i}`}>
                                                            Más información
                                                </button>
                                                        {/* creo id para llamar al modal con un id q sea unico en el proyecto y lo uso con el index #modal_${i}*/}
                                                    </div>
                                                </div>

                                            </div>
                                            <Modal restaurant={restaurant} i={i} />
                                        </div>
                                    )

                                })
                            } {/* Fin del mapeo */}

                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Home;