import React from 'react'
import Pinksign from '../pinksignup';
import Clearsign from '../clearsignin';


class Footer extends React.Component{


    render(){
        return (
            <div className={'footer'}>
                <div><Pinksign/></div>
                <Clearsign/>
                <hr/>
                <p>copyright</p>
            </div>
        )
    }
}
export default Footer