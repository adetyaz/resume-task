import { DiGithubBadge, DiJavascript, DiJekyllSmall } from "react-icons/di";
import Link from 'next/link'

const About =()=>(
    <section className="about">
        <div className="about__me">
            <h3 className="about__title">about</h3>
            <h2 className="about__subtitle">more about me</h2>
            <p className="about__text about__text--white">
            I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. I am excellent in working with others to achieve a certain objective on time and with excellence. In my previous role, I improved the performance, operations and productivity of my team by 35%.
                I am a highly competent IT professional with a proven track record in designing websites, networking. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
            <Link href="https://docs.google.com/document/d/16DXf8uodzYjpJlBDM0VaUDGFlQ8xL6o-as9PhgMmyPg/edit?usp=sharing">
            <button className="btn--primary btn">              
                <span className="btn__text">Download CV</span>
            </button>
            </Link>
        </div>
        <div className="about__skills">
            <h3 className="about__title">services</h3>
            <h2 className="about__subtitle">what i do</h2>
            <p className="about__text">I have developed some skills over the years and I'm enthusiastic to add more to what I know already</p>
            <div className="about__skillset">
                <h4 className="about__skill"><DiJavascript className="about__icon" />Responsive Web Design</h4>
            </div>
            <div className="about__skillset">
                <h4 className="about__skill"><DiGithubBadge className="about__icon" />Git</h4>
            </div>
            <div className="about__skillset">
                <h4 className="about__skill"><DiJekyllSmall className="about__icon" />Technical Writing</h4>     
            </div>
            <div className="about__skillset">
                <h4 className="about__skill"><DiJekyllSmall className="about__icon" />Web Development</h4>     
            </div>
        </div>
    </section>
)   
export default About;