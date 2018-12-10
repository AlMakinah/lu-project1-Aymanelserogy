import React from 'react';
import Search from '../search';
import Nav from '../navbar';
import Sign from '../signin';
import Counter from '../itemcounter'


class Header extends React.Component{


    render(){
        return(
            <div className="header">
                <div className='container'>
                    <div className='row row--3'>
                        <div className='col'>
                            <Search/>
                            <Nav/>
                        </div>
                        <div className='col-2 counterSign'>
                            <Counter/>
                            <Sign/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header