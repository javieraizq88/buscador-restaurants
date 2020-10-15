import React from "react";

const Carrousel1 = props => {
    return (
        <div id="carouselExampleFade1" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1579869696034-ec145eb3987c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src= "https://images.unsplash.com/photo-1549996647-190b679b33d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100" alt="..." />
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel1;

