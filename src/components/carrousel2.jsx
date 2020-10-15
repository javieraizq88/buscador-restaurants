import React from "react";


const Carrousel2 = props => {
    return (
        <div id="carouselExampleFade2" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src=  "https://images.unsplash.com/photo-1564758866811-4780aa0a1f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src=  "https://images.unsplash.com/photo-1464195643332-1f236b1c2255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=600"
                        className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1517638851339-a711cfcf3279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                        className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrousel2;