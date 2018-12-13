import React from 'react'
import Header from '../header';
import Footer from '../footer';
import ImageList from '../imgaeCardList';



class Main extends React.Component{

    render(){
        return(
            <>
                <Header/>
                <ImageList/>
                <Footer/>
            </>
        )
    }
}

export default Main