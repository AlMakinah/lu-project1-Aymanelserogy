import React from 'react';
import store from '../../store'


class Counter extends React.Component{


  state={
    savedFrames:0
  }


  componentDidMount(){
    this.unsubcribe = store.subscribe(()=>{
      this.setState({
        savedFrames: store.getState().savedPics.length
      })
    })
  }

  componentWillUnmount(){
    this.unsubcribe()
  }


  render(){
    return (
      <div className="donutWrapper">
        <button className='donutCounter'><span>{this.state.savedFrames <=8 ? this.state.savedFrames : '8+' }</span> <i className="fas fa-save donutIcon"></i></button>
      </div>
    );
  }
}

export default Counter;