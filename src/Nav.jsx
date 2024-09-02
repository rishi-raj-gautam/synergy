import './nav.css'
import synergyImage from './assets/Synergy.png';
function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg container-fluid">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={synergyImage} height="40px" width="224px"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                <div className="navbar-nav ">
                        
                        <a className="nav-link active mx-2 px-3" aria-current="page" href="#about">About</a>
                        <a className="nav-link active mx-2 px-3" aria-current="page" href="#schedule">Schedule</a>
                        
                        

                       <button className="button mx-2 px-3">
                            <a href='https://forms.gle/9d3Bd8hEGX4so24p8' target='_blank'><span>Regsiter Now</span></a>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav;