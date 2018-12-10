    import React from 'react'
    import Account from '../createAccount';
    import Access from '../accountSign';


    class Sign extends React.Component{

        state={
            accountVisibility:false,
            portalVisibility:false
        }

        accountHandle=()=>{
            this.setState((port)=>{
                return(
                {accountVisibility: !port.accountVisibility}
                )
            })
        }

        portalHandle=()=>{
            this.setState((port)=>{
                return(
                {portalVisibility: !port.portalVisibility}
                )
            })
        }


        render(){
            return(
                <div className='signHeader' >
                    <ul className='signHeader__ul'>
                        <li className='signHeader__ul-li'>
                            <a href="#" onClick={this.accountHandle}> Signup</a>
                            <Account
                                visibility={this.state.accountVisibility}
                                onClose={()=>this.setState({accountVisibility:false})}
                            />
                        </li>
                        <li className='signHeader__ul-li'>
                            <a href="#"  onClick={this.portalHandle}> Signin</a>
                            <Access
                                visibility={this.state.portalVisibility}
                                onClose={()=>this.setState({portalVisibility:false})}
                            />
                        </li>
                    </ul>
                </div>
            )
        }
    }

    export default Sign;