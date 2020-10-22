import React from "react";

const Navbar = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className="nav-link" href="/">
                <img
                    width="100px"
                    src="https://my-portfolio.javieraizq88.vercel.app/static/media/logo.2e4ad5db.jpg"
                />
                <span className="sr-only">(current)</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <a class="btn btn-outline-light my-2 my-sm-0" href="/buscarnombre" type="submit">Buscar</a>
                </form>
            </div>
        </nav>



    )
}

export default Navbar