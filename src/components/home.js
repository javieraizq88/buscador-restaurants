import React, { useContext } from "react"
import { Context } from "../store/appContext";
import data1 from "./data1.js";
import Modal from "./modal";
import { Link } from 'react-router-dom';
import Carrousel from "./carrousel";
import Carrousel1 from "./carrousel1";
import Carrousel2 from "./carrousel2";


const Home = props => {
    const { store, actions } = useContext(Context);
    // orden alfabetico 
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
                <div className="d-flex justify-content-between">
                    <div className="card-body card-carr">
                        <Carrousel />
                    </div>
                    <div className="card-body card-carr">
                        <Carrousel1 />
                    </div>
                    <div className="card-body card-carr">
                        <Carrousel2 />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1 "></div>
                    <div className=" col-md-10 col-xs-10 mr-2 mb-4 ">
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