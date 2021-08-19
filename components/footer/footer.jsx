import Link from 'next/link'

const Footer =()=>(
    <footer className="footer">
        <p className="footer__copyright">
            <Link href="https://internship.zuri.team">
                <a>
                    <img src="/images/zuri.png" alt="zuri logo" /> 
                </a> 
            </Link>
             &mdash; all rights reserved. 
        </p>
    </footer>
)
export default Footer;