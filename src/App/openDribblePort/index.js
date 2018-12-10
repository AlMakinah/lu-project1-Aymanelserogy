import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Love from '../loveicon';
import store from '../../store'
import {save , unsave} from './portActions'


const port = document.createElement('div')
document.body.appendChild(port)

class DribblePort extends React.Component{



static propTypes={
    visibile: PropTypes.bool,
    onClose: PropTypes.func,
    imgs: PropTypes.string,
    loved:PropTypes.number

}

static defaultProps={
    visibile:false,
    onClose: ()=> null,
    imgs: '',


}
state={
    comment:[],
    saveActive:false,
    saved: 20
}
handleSave=()=>{
    this.setState(save=> {
        return ({
            saveActive: !save.saveActive
     })
     },()=>store.dispatch({
        type: this.state.saveActive? save : unsave,
        savedPix: this.props.imgs
      }))
      this.follow()
}
follow=()=>{
    this.setState({
        saved: this.state.saveActive ? this.state.saved-1 : this.state.saved+1
    })
}

render(){


        return(

            ReactDOM.createPortal(
                <>
                    {this.props.visibile ?
                        <>
                            <div className='dribblePortal' >
                            {console.log(store.getState())}
                                <div className={'dribblePortal__header'}>
                                    <div className={'dribblePortal__header-author'}>
                                        <div className={'dribblePortal__header-authorAvatar'}>
                                            <img src='https://picsum.photos/g/40/40'alt='author'/>
                                        </div>
                                        <div >
                                            <h1 className={'dribblePortal__header-authorWorkTitle'}>Pay Junction - Paper Receipts</h1>
                                            <p className={'dribblePortal__header-authorName'}>
                                                by
                                                <span className={'dribblePortal__header-authorNameBlue'}> Eddie Lobanivsjky </span>
                                                on
                                                <span className={'dribblePortal__header-authorNameDate'}> August 20, 2018 </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div >
                                        <button onClick={this.handleSave} className={'dribblePortal__header-saveButton'} style={{color:this.state.saveActive ? 'gold':''}}>{this.state.saveActive ? 'Saved':'Save'}</button>
                                        <button className={'dribblePortal__header-likeButton'} onClick={this.props.love}>
                                            <i style={{marginRight:'5px', color:  this.props.active ? "gold" : "grey"}} className="fas fa-heart">
                                            </i>
                                            Like
                                        </button>
                                    </div>
                                </div>
                                <div className={'dribblePortal__mainImage'}>
                                    <div className={'dribblePortal__mainImage-wrapper'} >
                                        <img src={this.props.imgs} alt='a frame'/>
                                    </div>
                                </div>
                                <div className='portal__container'>
                                    <div className='row row--3'>
                                        <div className='col'>
                                            <p className={'dribblePortal__description'}>
                                                Hey guys, here’s a sneak peak of my  work in progress I was happy everyone got to see my last work and commented so much.I’ll be sure to keep you updated
                                            </p>
                                            <hr/>
                                            <div>
                                                <h1 className={'dribblePortal__responces-title'}>Responces</h1>
                                                <div className={'dribblePortal__commentSection'}>
                                                    <div className={'dribblePortal__comment'}>
                                                        <div className={'dribblePortal__comment-authorAvatar'}>
                                                            <img src='https://picsum.photos/g/24/24'alt='author'/>
                                                        </div>
                                                        <div>
                                                            <h1 className={'dribblePortal__comment-authorName'}>User Name</h1>
                                                            <p className={'dribblePortal__comment-authorComment'} >
                                                                I like what you did with this place, I like what you did with this place, I’m not sure what to do about that part. what do you think?
                                                            </p>
                                                            <div className={'dribblePortal__comment-actions'}>
                                                                <span className={'dribblePortal__comment-actionsSpan'} >August, 20 2018</span>
                                                                <span className={'dribblePortal__comment-actionsSpan'} ><Love/></span>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <hr/>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div>

                                            </div>
                                            <div>
                                                <div className={'dribblePortal__sideCopy'}>
                                                    <button><i className="fas fa-clone"> </i> Copy Link</button>
                                                </div>
                                                <div className={'dribblePortal__sideNumbers'}>
                                                    <p><button className={'dribblePortal__sideNumbers-buttons'}><i className="fas fa-eye"></i></button> <span>{this.props.seen} Views</span></p>
                                                    <p><button className={'dribblePortal__sideNumbers-buttons'}><i className="fas fa-heart"></i></button> <span >{this.props.loved}  Likes</span></p>
                                                    <p><button className={'dribblePortal__sideNumbers-buttons'}><i className="far fa-save"></i></button> <span>{this.state.saved} Saves</span></p>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={'portalBody'} onClick={this.props.onClose}  >
                                <button onClick={this.props.onClose} ><i className="far fa-times-circle"></i></button>
                            </div>
                        </>
                        :
                        <div className={'noPortal'}> </div>
                    }
                </>
            ,port)
        )
    }
}

export default DribblePort;