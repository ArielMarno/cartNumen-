import carouselbanner from "../assets/carousel/carouselbanner.jpg";
import carouselbanner2 from "../assets/carousel/carouselbanner2.jpg";
import carouselbanner3 from "../assets/carousel/carouselbanner3.jpg";


export const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carouselbanner} className="d-block w-100" alt="tienda banner" />
        </div>
        <div className="carousel-item">
          <img src={carouselbanner2} className="d-block w-100" alt="tienda banner" />
        </div>
        <div className="carousel-item">
          <img src={carouselbanner3} className="d-block w-100" alt="tienda banner" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  )
}
