import React, { useContext } from "react"
import { Context } from "../store/appContext";
import data1 from "./data1.js";
import Modal from "./modal";
import { Link } from 'react-router-dom';


const Home = props => {
    const { store, actions } = useContext(Context);
    console.log(store.info)
    return (
        <>

            <div className="">
                <div className="row">
                    <div className="col-md-1 "></div>
                    <div id="titulo-projects" className="col-md-10 col-xs-10 mr-2 mb-4">
                        <h2>Restaurantes</h2>
                        <hr />

                        <div class="row row-cols-1 row-cols-md-3">
                            {
                                data1.map((restaurant, i) => {
                                    return (
                                        <div class="col mb-4 ">
                                            <div className="">
                                                <div class="card">
                                                    <div className="card-header">
                                                        <h5 class=" text-center">
                                                            {restaurant.name}
                                                        </h5>
                                                    </div>
                                                    <div class="contenedor-img card bg-dark text-white">
                                                        <img src={restaurant.imagen} id="imagen" class="rounded card-img" alt="..." />
                                                        <div id="info-rest" class="card-img-overlay">
                                                            <h5 className="card-title d-flex justify-content-end">{restaurant.rating}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">

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

                                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#modal_${i}`}>
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
                <Link to="/ubicacion">
                    Ubicación
                </Link>
                <Link to="/videoEspañol">
                    video español
                </Link>
            </div>


        </>
    )
}

export default Home;