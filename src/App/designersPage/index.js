import React from 'react'
import PropTypes from 'prop-types'


class Designers extends React.Component{
static propTypes={
  fname: PropTypes.string,
  lName:PropTypes.string,
  location:PropTypes.string,
  email:PropTypes.string,
  imbs:PropTypes.array
}
    render(){


        return(

                  <div className={'designers__info'} >
                          <div className={'designers__info-wrapper'}>
                              <div className={'designers__info-avatar'}>
                                  <img src={this.props.pic}  alt='author'/>
                              </div>
                              <div>
                                  <h1 className={'designers__info-name'}>{this.props.fName} {this.props.lName}</h1>
                                  <p className={'designers__info-loctaion'}>{this.props.location} city</p>
                                  <p className={'designers__info-email'}> Email: {this.props.email}</p>
                              </div>
                          </div>
                      <div className={'designers__work'} >
                          {this.props.imbs.map((work,index)=>(
                                <div  key={index}>
                                      <div className="card space" >
                                      <div>
                                          <img
                                              className="card__avatar"
                                              src= {work}
                                              alt="designers work"
                                          />
                                      </div>
                                  </div>
                                  <hr/>
                                </div>
                          ))}
                    </div>
                  </div>

        )
    }
}

export default Designers;