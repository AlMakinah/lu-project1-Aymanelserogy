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
                <p onClick={this.activatePort} style={{display:'inline-block'}}><i className="fas fa-chevron-circle-down"></i></p>
                <DropPort
                visibility={this.state.portActive}
                onClose={()=>this.setState({portActive:false})}
                />
            </>
        )
    }
}

export default DropList;