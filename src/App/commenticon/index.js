import React from 'react';


class Comment extends React.Component {


    render(){
        return(
           <div className={'commentIcon'} >
               <button>
                    <i className="fas fa-comment"></i>
                    <span> 23</span>
               </button>
           </div>
        )
    }
}

export default Comment;