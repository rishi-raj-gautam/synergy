import './about.css';
import synergyImage from './assets/Synergy.png';

function About() {
    return (
        <>
            <div className="about container-fluid" id="about">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <img 
                        src={synergyImage} 
                        className='synergy-image my-3' 
                        alt="Synergy 2024 Logo"
                    />
                    <h2 className='my-3'>Synergy 2024: Research and Innovation Symposium</h2>
                    <h5 className='p-2 m-1'>Join us for a Four-day event exploring the latest advancements in research and innovation.</h5>
                    <a href='https://forms.gle/9d3Bd8hEGX4so24p8' target='_blank'>
                        <button className='btn-r px-4 py-2 m-3'>Register Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default About;
