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
                        
                        <a className="nav-link active mx-1 px-3 my-1" aria-current="page" href="#about">About</a>
                        <a className="nav-link active mx-1 px-3 my-1" aria-current="page" href="#schedule">Schedule</a>
                        <a className="nav-link active mx-1 px-3 my-1" aria-current="page" href="#speakers">Speakers</a>
                        

                        <a href='https://forms.gle/9d3Bd8hEGX4so24p8' target='_blank'>
                        <button className='btn mx-2 px-3 py-2 my-1'>Register Now</button>
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Nav;