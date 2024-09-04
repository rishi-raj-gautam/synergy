import './schedule.css';
import Rea from './assets/Research.png'
import Idea from './assets/Idea.png'
import Inno from './assets/Inno.jpg'
import symp from './assets/symp.jpg'
function Schedule() {
    const cardData = [
        {
            imageUrl: Rea,
            category: 'Day 1: 7th September 2024',
            heading: 'Research Paper Writing and Publishing 📝',
            authorName: 'Dr. Abhishek Pandey',
            
        },
        {
            imageUrl: Inno,
            category: 'Day 2: 14th September 2024',
            heading: 'Innovators Lab 🛠',
            authorName: 'Prof. Vishal Dutt',
            
        },
        {
            imageUrl: Idea,
            category: 'Day 3: 21st September 2024',
            heading: 'Patent Filing 🛡',
            authorName: 'Dr. Sartajvir Singh',
            
        },
        {
            imageUrl: symp,
            category: 'Day 4: 28th September 2024',
            heading: 'Symposium 🎤',
            authorName: 'All',
    
        },
    ];

    return (
        <>
            <div className="schedule container-fluid d-flex flex-column justify-content-center" id="schedule">
                <h2 className="sch mb-5 text-center">Schedule</h2>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className=" col-lg-8 col-mb-12 mb-3">
                            {/* Card Container */}
                            <div className="card-container d-flex flex-wrap justify-content-center">
                                {cardData.map((card, index) => (
                                    <div className="card m-2" key={index}>
                                        <div
                                            className="card-image"
                                            style={{ backgroundImage: `url(${card.imageUrl})` }}
                                        ></div>
                                        <div className="category">{card.category}</div>
                                        <div className="heading">
                                            {card.heading}
                                            <div className="author">
                                                By <span className="name">{card.authorName}</span> {card.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
                            {/* Text Container */}
                            <div className="text-container text-center">
                                <h2 className='txt'>
                                    
        
                                    ⏰ Time: 10:30 AM - 3:30 PM (Each Saturday)
                                    📍 Venue: Block A3 Seminar Hall
                                    <br/>
                                    <br/>
                                    Event Coordinator: Dr. Sartajvir Singh

                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;
