import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


const Modal = ({ restaurant, i }) => {
    const { store, actions } = useContext(Context);
    console.log(store.info)
    return (
        <>
            <div className="">
                {
                    <div className="modal" id={`modal_${i}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{restaurant.name}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <strong> Valoración: </strong>  &nbsp;{restaurant.rating} de 4
                                        </div>

                                        <div>
                                            <strong>Dirección:</strong><br />
                                            <p className="pl-3">
                                                &nbsp;{restaurant.address.street}<br />
                                                &nbsp;{restaurant.address.city}, {restaurant.address.state} <br />
                                            </p>
                                        </div>

                                        <div>
                                            <strong>Contacto:</strong><br />
                                            <p className="pl-3">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                        &nbsp;  {restaurant.contact.phone}<br />
                                                <i className="far fa-envelope"></i> <a href="{restaurant.contact.email}">
                                                    &nbsp;  {restaurant.contact.email}</a>
                                            </p>
                                        </div>
                                    </div>

 
                                </div>

                            </div>
                        </div>
                    </div>

                } {/* Fin del mapeo */}

            </div>

        </>
    )
}

export default Modal;


