import React from 'react'
import Designers from '../designersPage';


class WorkList extends React.Component{

    state={
        work:[["https://picsum.photos/200/144/?image=0","https://picsum.photos/200/144/?image=01","https://picsum.photos/200/144/?image=02"],
            ["https://picsum.photos/200/144/?image=10","https://picsum.photos/200/144/?image=11","https://picsum.photos/200/144/?image=12"],
            ["https://picsum.photos/200/144/?image=20","https://picsum.photos/200/144/?image=21","https://picsum.photos/200/144/?image=22"],
            ["https://picsum.photos/200/144/?image=30","https://picsum.photos/200/144/?image=31","https://picsum.photos/200/144/?image=32"],
            ["https://picsum.photos/200/144/?image=40","https://picsum.photos/200/144/?image=41","https://picsum.photos/200/144/?image=42"],
            ["https://picsum.photos/200/144/?image=50","https://picsum.photos/200/144/?image=51","https://picsum.photos/200/144/?image=52"],
            ["https://picsum.photos/200/144/?image=60","https://picsum.photos/200/144/?image=61","https://picsum.photos/200/144/?image=62"],
            ["https://picsum.photos/200/144/?image=70","https://picsum.photos/200/144/?image=71","https://picsum.photos/200/144/?image=72"],
            ["https://picsum.photos/200/144/?image=80","https://picsum.photos/200/144/?image=81","https://picsum.photos/200/144/?image=82"],
            ["https://picsum.photos/200/144/?image=90","https://picsum.photos/200/144/?image=91","https://picsum.photos/200/144/?image=92"],
            ["https://picsum.photos/200/144/?image=100","https://picsum.photos/200/144/?image=101","https://picsum.photos/200/144/?image=102"],
    ],
        error: null,
        isLoaded: false,
        users: []
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }




    render(){

        return(
        <div >
            <div className={'container'}>
                {this.state.isLoaded ? this.state.users.map((user,index)=>{
                  return (
                            <Designers
                                pic= {user.picture.medium}
                                key={index}
                                fName={user.name.first}
                                lName={user.name.last}
                                location={user.location.city}
                                email={user.email}
                                imbs={this.state.work[index]}/>
                        )
                }): <div className={'spinnerWrapper'}><div className={'spinner'}/></div>}
            </div>
        </div>
        )
    }
}

export default WorkList;