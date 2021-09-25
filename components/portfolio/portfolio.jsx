import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link'
import { DiGithubBadge, DiReact } from "react-icons/di"

const Porfolio =()=>(
    <section className="portfolio">
        <h3 className="portfolio__title">portfolio</h3>
        <h2 className="portfolio__subtitle">What I Have Done</h2>
        <VerticalTimeline animate={true}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(0 0 0)' }}
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">ThyFlow Website</h3>
            <p>
            {/* <Link href="github.com/adetyaz/Oja">
                    <a href="">
                        <DiGithubBadge /> Github
                    </a>
                </Link>,  */}
            <Link href="https://www.thyflow.com/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">EdenLife Clone</h3>
            <p>
            <Link href="github.com/adetyaz/Eden">
                    <a href="">
                        <DiGithubBadge /> Github
                    </a>
                </Link>, 
            <Link href="https://edenlife-clone.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(0 0 0)' }}
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Oja Stores</h3>
            <p>
            <Link href="github.com/adetyaz/Oja">
                    <a href="">
                        <DiGithubBadge /> Github
                    </a>
                </Link>, 
            <Link href="https://ojastores.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Room Booking App</h3>
            <p>
            <Link href="https://book-a-room.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">WeJapa</h3>
           
            <p>
            <Link href="github.com/adetyaz/WeJapa">
                    <a href="">
                        <DiGithubBadge /> Github
                    </a>
                </Link>, 
            <Link href="https://wejapa.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Seamless Video</h3>
           
            <p>
            <Link href="github.com/adetyaz/seamless">
                    <a href="">
                        <DiGithubBadge /> Github
                    </a>
                </Link>, 
            <Link href="https://seamless-video.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(0 0 0)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Outdoor Tour Website</h3>    
            <p>
        
                <Link href="https://ourdoor-tour.netlify.app/">
                    <a href="">
                        <DiReact /> Web Demo
                    </a>
                </Link>
            </p>
        </VerticalTimelineElement>
        
        </VerticalTimeline>
    </section>
)
export default Porfolio;