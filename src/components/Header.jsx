
export const Header = () => {
    return (

        // Inicia creación de carousel/banner principal
        <div className="jumbotron jumbotron-fluid">
            <div id="carouselHeader" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/banner1.jpg" className="d-block w-100" alt="banner1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "yellow" }} >SEAFOOD</h5>
                            <p style={{ color: "yellow" }}>Encuentra las mejores recetas con productos marinos</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/banner2.jpg" className="d-block w-100" alt="banner2" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/banner3.jpg" className="d-block w-100" alt="banner3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        // Finaliza creación de  carousel/banner
    )
}
