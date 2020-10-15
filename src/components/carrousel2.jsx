import React from "react";


const Carrousel2 = props => {
    return (
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src=  "https://images.unsplash.com/photo-1564758866811-4780aa0a1f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src=  "https://images.unsplash.com/photo-1579869696034-ec145eb3987c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1580685921572-725bf983b01d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel2;