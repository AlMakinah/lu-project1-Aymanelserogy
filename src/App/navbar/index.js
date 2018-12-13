import React from 'react';
import {  Link } from 'react-router-dom'


class Nav extends React.Component{






    render(){
        return (
            <div className="nav">
                <nav className="navBar">
                    <ul className="navBar__ul">
                        <li className="navBar__ul-li">
                            <Link to='/'> Dribbles</Link>
                        </li>
                        <li className="navBar__ul-li">
                            <Link to="/Designers"> Designers</Link>
                        </li>
                        <li className="navBar__ul-li">
                            <Link to="/Urls"> Urls</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav;