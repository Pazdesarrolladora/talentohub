import "../css/carrusel.css"


const Carrusel = () => {
  return (
    <>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <img src="https://res.cloudinary.com/dcwloh062/image/upload/v1697417408/wepik-export-20231016004919RTME_fyaunf.png" className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carrusel