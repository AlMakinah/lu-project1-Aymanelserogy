import React from 'react'
import DropPort from '../dropPortal';

class DropList  extends React.Component{

state={
    portActive:false
}

activatePort= ()=>{
    this.setState(port=>{
       return ( {portActive: !port.portActive})
    })
}

    render(){
        return(
            <>
                <span onClick={this.activatePort} ><i className="fas fa-chevron-circle-down"></i></span>
                <DropPort
                visibility={this.state.portActive}
                onClose={()=>this.setState({portActive:false})}
                />
            </>
        )
    }
}

export default DropList;