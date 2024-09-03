import Sach from './assets/Sach.jpg'
import Abhi from './assets/Abhi.jpg'
import Adv from './assets/Advisor.jpg'
import './speaker.css'
function Speaker(){
    return <>
    <div className='container-fluid speaker'>
        <div><h2 className='sch my-5 text-center'>Speakers</h2></div>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Sach} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>Dr. Sachin Ahuja</h5>
        <p>Executive Director, UIE</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Adv} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>Dr. Sartajvir Singh Dhillon</h5>
        <p>Associate Director, UIE</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Abhi} className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5>Abhishek Pandey</h5>
        <p>Assistant Director, UIE</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
}
export default Speaker;