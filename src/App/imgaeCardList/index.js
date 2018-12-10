import React from 'react'
import Card from '../card';


class ImageList extends React.Component{


    state={
        imgs: [
            "https://picsum.photos/200/144/?image=0",
            "https://picsum.photos/200/144/?image=100",
            "https://picsum.photos/200/144/?image=200",
            "https://picsum.photos/200/144/?image=300",
            "https://picsum.photos/200/144/?image=400",
            "https://picsum.photos/200/144/?image=500",
            "https://picsum.photos/200/144/?image=600",
            "https://picsum.photos/200/144/?image=700"
        ],
        imbs:[
            "https://picsum.photos/600/300/?image=0",
            "https://picsum.photos/600/300/?image=100",
            "https://picsum.photos/600/300/?image=200",
            "https://picsum.photos/600/300/?image=300",
            "https://picsum.photos/600/300/?image=400",
            "https://picsum.photos/600/300/?image=500",
            "https://picsum.photos/600/300/?image=600",
            "https://picsum.photos/600/300/?image=700"
        ],
    }

    render(){

        return(
        <div className='container'>
            <div className={'card__wrapper'}>
                {this.state.imgs.map((pic,index)=>{
                  return (
                            <Card  pic= {pic} key={index} imbs={this.state.imbs[index]}/>
                        )
                })}
            </div>
        </div>
        )
    }
}

export default ImageList;