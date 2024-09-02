import './about.css'

function About() {
    return <>
        <div className="about container-fluid" id="about">
            {/* <div class="container text-center"> */}
                
                    <div class="col d-flex flex-column justify-content-center align-items-center">
                    <img src='src\assets\Synergy.png' height='100px' width='560' className='my-3'></img>
                        <h2 className='my-3'>Synergy 2024: Research and Innovation Symposium</h2>
                        <h5 className='p-2 m-1' >Join us for a Four-day event exploring the latest advancements in research and innovation.</h5>
                        <button className='btn-r px-4 py-2 m-3'>Register Now</button>
                    </div>
                
            
        </div>
    </>
}
export default About;