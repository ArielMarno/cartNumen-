import carouselbanner from "../assets/carousel/carouselbanner.jpg";
import carouselbanner2 from "../assets/carousel/carouselbanner2.jpg";
import carouselbanner3 from "../assets/carousel/carouselbanner3.jpg";


export const Carousel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carouselbanner} class="d-block w-100" alt="tienda banner" />
        </div>
        <div class="carousel-item">
          <img src={carouselbanner2} class="d-block w-100" alt="tienda banner" />
        </div>
        <div class="carousel-item">
          <img src={carouselbanner3} class="d-block w-100" alt="tienda banner" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  )
}
