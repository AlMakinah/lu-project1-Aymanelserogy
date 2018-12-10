import React from 'react'
import Account from '../createAccount';

class Pinksign extends React.Component{




    state={
        portalVisibility:false
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
            <  >
                <button onClick={this.portalHandle} className={'pinkSign__button'}>
                     sign up
                </button>
                <Account
                 visibility={this.state.portalVisibility}
                 onClose={()=>this.setState({portalVisibility:false})}
                />
            </>
        )
    }
}

export default Pinksign