import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarRear, faHouse, faLocationDot, faPlaneDeparture, faStopwatch } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
  return (
        <>
        {/* Nav Section */}
        <section id='nav-bar'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand">Ride Ready</a>
                    <form class="d-flex">
                        <ul className="navbar-nav ml-auto d-flex flex-row">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ marginLeft: '10px' }}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ marginLeft: '10px' }}>Regsiter</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </section>
        <section id='about'>
            <div className="container-fluid d-flex justify-content-center align-items-center text-center text-white" style={{ height: '70vh', width: '80vh' }}>
                <div>
                    <h1>Welcome to Car Booking</h1><br></br>
                    <h4>Fast & Easy Way To Rent A Car</h4><br></br>
                    <p>"Seamless rides at your fingertips: Book, ride, and arrive stress-free with our cab booking platform's intuitive interface and reliable service."</p>
                </div>
            </div>
        </section>
        <section id='popular-services' className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Popular Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faLocationDot} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/>
                                <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>City Transfer</h5>
                                <p className="card-text"style={{textAlign:'left'}}>Description of service 1.</p>
                            </div>
                        </div>
                    </div>
            <div className="col-md-4 mb-4">
                <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faHouse} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/> 
                            <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>City Tour</h5>
                            <p className="card-text" style={{textAlign:'left'}}>Description of service 2.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faCarRear} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/> 
                            <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>Unlimited Km Car Rental</h5>
                            <p className="card-text" style={{textAlign:'left'}}>Description of service 3.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faStopwatch} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/>
                            <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>Fast & Easy Booking</h5>
                            <p className="card-text" style={{textAlign:'left'}}>Description of service 4.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faLocationDot} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/>
                                <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>Many Pickup Location</h5>
                                <p className="card-text" style={{textAlign:'left'}}>Description of service 5.</p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card-services bg-white" style={{ marginBottom: '20px' }}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faPlaneDeparture} style={{color:'orange',fontSize:'30px',marginBottom:'20px'}}/>
                            <h5 className="card-title" style={{fontSize:'25px',textAlign:'left'}}>Airport Service</h5>
                            <p className="card-text" style={{textAlign:'left'}}>Description of service 6.</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </section>

        <section id='car-offer' className="py-5">
            <h2 id='h2' className="text-center">Car's Offers</h2><br></br>
            <div className="container d-flex justify-content-center">
                <div className="row justify-content-center">
                {/* First Row */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/offer-toyota.png" className="card-img-top" alt="Car 1" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">Tesla Malibu</h5><br></br>
                            <p className="card-text">Rs.20/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model 3
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Automatic
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 25Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/toyota-offer-2.png" className="card-img-top" alt="Car 2" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">Toyota Aventador</h5><br></br>
                            <p className="card-text">Rs.22/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model-22
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Automatic
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 20Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/bmw-offer.png" className="card-img-top" alt="Car 3" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">BMW X3</h5><br></br>
                            <p className="card-text">Rs.15/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model-X3
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Automatic
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 18Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/nissan-offer.png" className="card-img-top" alt="Car 4" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">Nissan Mercielago</h5><br></br>
                            <p className="card-text">Rs.14/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model-2021
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Manual
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 17Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/offer-toyota.png" className="card-img-top" alt="Car 5" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">Ferrari Camry</h5><br></br>
                            <p className="card-text">Rs.25/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model 3
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Automatic
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 25Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="./src/assets/mercedes-offer.png" className="card-img-top" alt="Car 6" /><br></br>
                        <div className="card-body">
                            <h5 className="card-title">Mercedes Benz XC90</h5><br></br>
                            <p className="card-text">Rs.16/km</p>
                            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-car" style={{color:'orange'}}></i>Model 3
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> Automatic
                                </span>
                                <span className=" d-flex align-items-center gap-1">
                                    <i className="fa fa-gear" style={{color:'orange'}}></i> 25Km/L
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section id='earn-with-us'>
        <div className="container" style={{marginBottom:'30px', height:'25rem'}}>
          <div className="row">
            <div className="col-md-6" style={{paddingTop:'6rem'}}>
              <img src="./src/assets/offer-toyota.png" alt="Car" style={{ maxWidth: '100%', height: '150%' }} />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2 style={{color:'white'}}>Do You Want to Earn With Us?</h2>
                <p style={{color:'white'}}>So Don't Be Late</p>
                <button className="btn btn-primary">Become a Driver</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
        <section>
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved Ride Ready</p>
        </footer>
        </section>
        </>  
    );
}

export default NavBar;
