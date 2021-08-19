import Link from 'next/link'
import { DiGithubAlt  } from "react-icons/di";
import { AiFillTwitterCircle } from "react-icons/ai"
import { BiTask } from "react-icons/bi";

const Hero =()=> (
    <>
    <section className="hero">
    <div className="hero__text-content">
    <span className="hero__intro">Hello World</span>
    <h2 className="hero__primary">My name is Lasisi Adetayo.</h2>
    <h2 className="hero__primary">I'm a Frontend Developer</h2>
        <Link href="https://twitter.com/babalasisi" >
        <a><AiFillTwitterCircle/>Twitter /</a> 
        </Link>
        <Link href="https://github.com/adetyaz">
           <a> <DiGithubAlt />Github /</a>
        </Link>
        <Link href="https://internship.zuri.team">
           <a> <img src="/images/i4g.png"  alt="i4g logo" className="hero__image" /> HNG8 </a>
        </Link>
    </div>
    </section>
    </>
);

export default Hero;
