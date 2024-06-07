import { NavLink } from 'react-router-dom';
import brixlogo from "../../Images/brixlogo.png"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Divider } from 'antd';


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const Link = [
        { name: 'Home', href: '/' },
       
        { name: 'AboutUs', href: '/AboutUs' },

        { name: 'Portfolio', href: '/Project' },
 

        { name: 'Contact', href: '/Contact' },

    ];
    return (
        <>
            <div className={`alpha-navbar navbar-light bg_alpha_blue ${props.bg} `}>
                <nav className="navbar navbar-expand-lg navbar-light container ">
                    <div className="alpha-logo">
                        <NavLink to="/LandingPage">
                            <img src={brixlogo} width='140px' alt='' />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-lg-4">
                            {Link.map((each, index) => (
                                <li className="nav-item fw-600  fs_16 tc-black Rubik" key={index}>
                                    {each.submenu ? (
                                        <div className="dropdown">
                                            <a className="nav-link text-white  px-3 dropdown-toggle" role="button" id={`dropdownMenuLink-${index}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {each.name}
                                            </a>
                                            <div className="dropdown-menu border-0 mt-0 mt-md-2" aria-labelledby={`dropdownMenuLink-${index}`}>
                                                <div className='row max-width-80vw'>
                                                    {each.submenu.map((submenuItem, submenuIndex) => (
                                                        <div className={`${submenuItem?.categories ? 'col-12 col-md-3 ' : 'col-12'}`}>
                                                            {/* <NavLink to={submenuItem.href} className="dropdown-item fs_14 tc-black Rubik" key={submenuIndex}>{submenuItem.name} {submenuItem?.categories && <img src={solutionMenuArrow} className='px-3' alt='solutionMenuArrow'/>}</NavLink> */}
                                                            {submenuItem?.categories && <Divider className='my-2' />}
                                                            {submenuItem?.categories?.map((category, catIndx) => (
                                                            <NavLink to={category.href} className="dropdown-item fs_14 tc-black text-wrap fw-500" key={catIndx}>{category.name}</NavLink>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink to={each.href} className={`nav-link text-white px-3`} >{each.name}</NavLink>
                                    )}
                                    <div className="hover-dot"></div>
                                </li>
                            ))}
                        </ul>
                        <div className="d-lg-flex align-items-center px-3">
                            {/* <p className="tc-orange pe-5 mb-lg-0 cursor-pointer text-white" onClick={() => navigate('/Join-Waitlist')}>Join the waitlist</p> */}
                        <NavLink to='/Contact'>    <button onClick={() => setIsOpen(true)} className=" bg-sky border-0 px-3 py-2 rounded-1 text-white">Talk To Us  </button></NavLink>
                        </div>
                    
                    </div>
                </nav>
            </div>
        </>
    );
}
export default NavBar;