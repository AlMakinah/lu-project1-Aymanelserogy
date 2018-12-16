import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from 'react-router-dom';
import Search from '../search';

const drop = document.createElement('div')
document.body.appendChild(drop)

class  DropPort extends React.Component{




    render(){
        return(
            ReactDOM.createPortal(
                <>
                    {this.props.visibility ?
                        <>
                            <div style={{position:'absolute', top:'6%',backgroundColor:'#F4F4F4', width:'100%',zIndex:'1000'}}>
                                <div style={{textAlign:'center'}} >
                                    <nav className="navBar" >
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
                                            <li className="navBar__ul-li">
                                                <Search/>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className={'portalBody'} onClick={this.props.onClose}>
                            </div>
                        </>
                         :
                        <div className={'noPortal'}> </div>
                    }
                </>,drop
            )
        )
    }
}

export default DropPort