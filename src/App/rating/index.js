import React from 'react';
import PropTypes from 'prop-types'

class Rate extends React.Component{

  static PropTypes={
    rate: PropTypes.number
  }
  state={
    rate: this.props.rate
  }

  stars=(rate)=>{
    let trat = []
    let x = Math.round(rate)/2
    let y = Math.round(rate)%2
    console.log(y)
    if( y <= 0 ){
      for (let i = 0; i < x; i++) {
        trat.push(<i key={i} className="fas fa-star"></i>)
      }
      for (let j = 0; j < 5-x; j++) {
        trat.push(<i key={j+5} className="far fa-star"></i>)
      }
    }else if( y >= 0.5 ){
      for (let i = 0; i < x-1; i++) {
        trat.push(<i key={i} className="fas fa-star"></i>)
      }for (let i = 0; i < y; i=i+1.5) {
        trat.push(<i key={i+16} className="fas fa-star-half-alt"></i>)
      }
      for (let j = 0; j < 5-(x+0.5); j++) {
        trat.push(<i key={j+5} className="far fa-star"></i>)
      }
    }
    return trat
  }

    render(){
      return (
        <>
          <div>
            {this.stars(this.props.rate)}<span className="numb">{this.props.rate}</span>
          </div>
        </>
      );
    }
  }

export default Rate;
