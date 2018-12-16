import React, { Component }from 'react';
import PropTypes from 'prop-types'
import Seen from '../seenicon';
import Love from '../loveicon';
import Comment from '../commenticon';
import DribblePort from '../openDribblePort'





class Card extends Component {
    static propTypes = {
        pic: PropTypes.string,
        imbs: PropTypes.string
      }


    state = {
        portVis:false,
        urls:'',
        active:false,
        seen:100,
        loved:200,
        boolSeen:false
    }

    handleDribblePort=()=>{
        this.setState(port=>{
            return ({
                portVis: !port.portVis,
                boolSeen:true,
                seen: port.boolSeen? port.seen : port.seen+1
            })
        })
    }

    love=()=>{
        this.setState((prat)=>{
            return ({
                active: !prat.active
            })
        },()=>{this.setState({
            loved: !this.state.active ? this.state.loved-1 :this.state.loved+1
        })
        })
    }
    render(){

        return(
                <>
                        <div  className="card space">
                            <div className="card__hover">
                                <img
                                    onClick={this.handleDribblePort.bind(this)}
                                    className="card__avatar"
                                    onMouseEnter={this.hover}
                                    onMouseLeave={this.unHover}
                                    src= {this.props.pic}
                                    alt="The GodFather"
                                />
                                <p
                                    onClick={this.handleDribblePort.bind(this)}
                                    className="card__title"
                                >
                                    {this.props.dis}
                                </p>
                            </div>
                            <div>
                                <Seen seen={this.state.seen}/>
                                <span onClick={this.handleDribblePort.bind(this)} > <Comment /> </span>
                                <span onClick={this.love}><Love loved={this.state.loved} active={this.state.active}/></span>
                            </div>

                        </div>
                <DribblePort
                            visibile= {this.state.portVis}
                            onClose={()=>{this.setState({portVis:false})}}
                            imgs={this.props.imbs}
                            imdb={this.props.pic}
                            active={this.state.active}
                            seen={this.state.seen}
                            loved={this.state.loved}
                            love={this.love}
                        />
                    </>
        )
    }
}

export default Card;