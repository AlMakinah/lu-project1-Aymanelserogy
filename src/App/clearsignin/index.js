import React from 'react'
import Access from '../accountSign';

class Clearsign extends React.Component{

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
            <>
                <button className={'clearSignIN'} onClick={this.portalHandle}>
                    or sign in
                </button>
                <Access
                    visibility={this.state.portalVisibility}
                    onClose={()=>this.setState({portalVisibility:false})}
                 />
            </>
        )
    }
}

export default Clearsign