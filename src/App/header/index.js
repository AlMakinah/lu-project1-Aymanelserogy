import React from 'react';
import Search from '../search';
import Nav from '../navbar';
import Sign from '../signin';
import Counter from '../itemcounter'
import DropList from '../dropList';


class Header extends React.Component{


    render(){
        return(
            <div className="header">
                <div className='container'>
                    <div className='row row--3'>
                        <div className='col'>
                            <div>
                                <div className='originalHide'>
                                    <DropList/>
                                    <Counter/>
                                </div>
                                <div className='minimizingHide'>
                                    <Search/>
                                    <Nav/>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 counterSign'>
                            <div className='minimizingHide'>
                                <Counter/>
                                <Sign/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header