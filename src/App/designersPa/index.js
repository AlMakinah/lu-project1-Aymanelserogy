import React from 'react'
import Header from '../header';
import Footer from '../footer';
import WorkList from '../miniWorkList';

class Dpage extends React.Component{

    render(){
        return(
            <>
                <Header/>
                <WorkList/>
                <Footer/>
            </>
        )
    }
}
export default Dpage