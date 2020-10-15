import React, { useContext } from "react";
import { Context } from "../store/appContext.js";


const Modal = ({ restaurant, i }) => {
    const { store, actions } = useContext(Context);
    console.log(store.info)
    return (
        <>
            <div class="">
                {
                    <div class="modal" id={`modal_${i}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div>
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{restaurant.name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
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
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                                        &nbsp;  {restaurant.contact.phone}<br />
                                                <i class="far fa-envelope"></i> <a href="{restaurant.contact.email}">
                                                    &nbsp;  {restaurant.contact.email}</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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


