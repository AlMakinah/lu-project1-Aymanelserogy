import React from 'react';



class Seen extends React.Component {

    render(){
        return(
           <div className={'seen'} style={{display:'inline-block'}}>
               <button onClick={this.loveClick} className={'seen__button'}>
               <i className="fas fa-eye"></i>
               <span  className={'seen__times'}> {this.props.seen}</span>
               </button>
           </div>
        )
    }
}

export default Seen;