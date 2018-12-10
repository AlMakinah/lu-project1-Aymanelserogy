import React from 'react';




class Love extends React.Component {


state={
    counter: 0,
    active: false
}

loveClick=()=>{
    this.setState(couxnter=> {

       return ({
           active: !couxnter.active
    })
    })
}




    render(){
        return(
           <div className={'icon__wrapper'}>
               <button className={'icon__button'}  onClick={this.loveClick}>
               <i className="fas fa-heart " style={{color: this.props.active? 'gold': 'grey', fontSize:'inherit'}}></i>
               <span className={'icon__score'}> {this.props.loved}</span>
               </button>
           </div>
        )
    }
}

export default Love;