import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.createElement('div');
document.body.appendChild(root);
class Access extends React.Component{


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
                        <div className={'sign__Portal'}>
                                <div className={'sign__Portal-header'}>
                                    <h1 className={'sign__Portal-headerH1'}>Dribble</h1>
                                    <p className={'sign__Portal-headerP'}>Sign IN</p>
                                </div>
                            <div className={'sign__Portal-form'} >
                                <form className={'sign__Portal-formBody'}>
                                    <label>
                                        <p>Email</p>
                                        <div ><input type='email' required/></div>
                                    </label>
                                    <label>
                                        <p >Password</p>
                                        <div ><input type='password' required/></div>
                                    </label>
                                    <button>
                                            sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={'portalBody'} onClick={this.props.onClose}  >
                            <button onClick={this.props.onClose} ><i className="far fa-times-circle"></i></button>
                        </div>
                    </>:
                    <div className={'noPortal'} />
                }
                </>
            ,root)

        );
    }
}

export default Access