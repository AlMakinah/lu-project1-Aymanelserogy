import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.createElement('div');
document.body.appendChild(root);

class Account extends React.Component{



static propTypes={
 visibility: PropTypes.bool,
 onClose: PropTypes.func
}
static defaultProps={
    visibility: false,
    onClose: ()=>null
}



    render(){

        return(
            ReactDOM.createPortal(
                <>
                    {this.props.visibility ?

                    <>
                        <div className={'create__Portal'}>
                           <>
                            <div className={'create__Header'}>
                                    <p>Dribble</p>
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div className={'create__container'}>
                                    <div>
                                        <div className={'create__uploadAuthorImage'}>
                                            <div   className={'create__uploadAuthorImage-avatar'} >
                                                <img src='https://picsum.photos/g/40/40'alt='author'/>
                                            </div>
                                            <div>
                                                <button className={'create__uploadAuthorImage-upload'}>Upload new picture</button>
                                                <button className={'create__uploadAuthorImage-delete'}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <form className={'create__form'}>
                                            <label>
                                                <p  className={'create__form-label'}>Bio</p>
                                                <textarea/>
                                                <p className={'create__form-description'}> Use your bio to intoduce yourself to the community. <a href='#'>(See example)</a></p>
                                            </label>
                                            <lable>
                                                <p className={'create__form-label'}>Location</p>
                                                <input className={'create__form-input'} type='text'/>
                                            </lable>
                                            <label >
                                                <p className={'create__form-label'}>What brings you to dribble?</p>
                                                <div className={'create__form-chooseList'} ><input type='checkbox'/> <p> I'm here for Inspiration</p> </div>
                                                <div className={'create__form-chooseList'}><input type='checkbox'/> <p> I'm here to share my design work</p></div>
                                                <div className={'create__form-chooseList'}><input type='checkbox'/> <p> I'm here to hire designers</p></div>
                                                <p  className={'create__form-description'}>Please check all that apply</p>
                                            </label>
                                            <button className={'create__form-submit'}>Create</button>
                                        </form>
                                    </div>
                                </div>
                            </>
                            </div>
                            <div className={'portalBody'} onClick={this.props.onClose}  >
                                <button onClick={this.props.onClose}><i className="far fa-times-circle"></i></button>
                            </div>
                    </>:
                    <div  className={'.noPortal'} />
                }
                </>
            ,root)

        );
    }
}

export default Account