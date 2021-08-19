import Link from 'next/link';

const Header =()=>(
    <div className="header">
         <Link href="https://internship.zuri.team">
            <div className="logo-box">
                <img src="/images/logo.png" alt="" className="logo"/>
            </div>
        </Link>
    </div>
 
);
export default Header;