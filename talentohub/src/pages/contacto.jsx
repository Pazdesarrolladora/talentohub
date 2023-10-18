import CarrucelPaginas from "../componentes/carrucelpaginas";
import CarruselContactanos from "../componentes/carruselContactanos";
import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <div className="row">
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
</div>
      <Footer />
    </>
  );
};

export default Contacto;
