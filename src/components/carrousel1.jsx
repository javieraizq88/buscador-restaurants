import React from "react";

const Carrousel1 = props => {
    return (
        <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1563507466372-c61871fff681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100 " alt="..." />
                </div>
                <div class="carousel-item">
                    <img src= "https://images.unsplash.com/photo-1577169995124-d7be4d4d9df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100 " alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1548716188-9b0867f0d1c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1580685921572-725bf983b01d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        class="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel1;

