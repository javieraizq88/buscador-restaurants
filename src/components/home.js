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

            <div className="row">
                <div className="col-md-1"></div>
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
                                                    <p>Sitio web:
                                                        <a href={restaurant.contact.site}> {restaurant.contact.site}</a>
                                                    </p>
                                                    <p>Rating: {restaurant.rating}</p>
                                                    <p> &nbsp; Reservar:</p>
                                                
                                                    <p className="pl-5">{restaurant.contact.phone}
                                                    &nbsp; {restaurant.contact.email}</p>
                                                    
                                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#modal_${i}`}>
                                                        Launch demo modal
                                                </button>
                                                {/* creo id para llamarlo q sea unico en el proyecto y lo uso con el index #modal_${i}*/}
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


        </>
    )
}

export default Home;