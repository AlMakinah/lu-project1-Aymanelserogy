import React from 'react'
import Rate from '../rating';


class Generes extends React.Component{

    state = {
        imgs: "https://picsum.photos/200/144/?image=",
          ip: 0,
          rate:10,
          random:Math.floor(Math.random() * (1000 - 0)) + 0
      }

      handleRan=()=>{
          this.setState((ips)=>{
              return({
                ip: ips.ip + 1,
                rate: Math.floor(Math.random() * (11 - 0)) + 0
            })
          })
      }

      componentDidMount(){
          this.frame = setInterval(() => {
            this.setState({
                random:Math.floor(Math.random() * (1000 - 0)) + 0
              })
          }, 2000);
      }

      componentWillUnmount(){
          clearInterval(this.frame)
      }



    render(){

        return(
            <div className={'container'}>
                <div className={'mockWrapper'}>
                        <div className="card space center">
                            <div className="card__hover">
                                <img
                                    className="card__avatar"
                                    src= {this.state.imgs+this.state.ip}
                                    alt="Random Frame"
                                />
                            </div>
                            <div>
                                <Rate rate={this.state.rate}/>
                                <button className={'card__button'} onClick={this.handleRan}>Random Image</button>
                            </div>
                        </div>
                </div>
                <div className={'itemWrapper'}>
                    <div className={'itemOne'}>
                        <h1>Basic Usage</h1>
                        <p>Just put your image size (width & height) after our URL and you'll get a placeholder.</p>
                        <div className={'itemUrl'}>
                            <p>https://picsum.photos/495/400</p>
                        </div>
                    </div>
                    <div>
                        <div className={'photo__avatar'}>
                            <img className='minimizingHide'
                                src= 'https://picsum.photos/495/400'
                                alt="Basic Frame"
                            />
                            <img
                                className='originalHide'
                                src= 'https://picsum.photos/200/150'
                                alt="Basic Frame"
                            />
                        </div>
                    </div>
                </div>
                <div className={'itemWrapper__reverse'}>
                    <div className={'itemOne'}>
                        <h1>Random Image</h1>
                        <p>Get a random image by appending <span className={'itemExtension'} >?random</span> to the end of the url.</p>
                        <div className={'itemUrl'}>
                            <p>https://picsum.photos/495/400/?random</p>
                        </div>
                    </div>
                    <div className={'photo'}>
                        <div className={'photo__avatar'}>
                            <img
                                className='minimizingHide'
                                src= {`https://picsum.photos/496/400/?image=${this.state.random}`}
                                alt="Random Frame"
                            />
                            <img
                                className='originalHide'
                                src= {`https://picsum.photos/200/150/?image=${this.state.random}`}
                                alt="Random Frame"
                            />
                        </div>
                    </div>
                </div>
                <div className={'itemWrapper'}>
                    <div className={'itemOne'}>
                        <h1>Gray Scale</h1>
                        <p>Use the <span className={'itemExtension'} >/g/</span> path to greyscale the image.</p>
                        <div className={'itemUrl'}>
                            <p>https://picsum.photos/g/495/400</p>
                        </div>
                    </div>
                    <div className={'photo'}>
                        <div className={'photo__avatar'}>
                            <img
                                className='minimizingHide'
                                src= 'https://picsum.photos/g/495/400'
                                alt="grey Frame"
                            />
                            <img
                                className='originalHide'
                                src= 'https://picsum.photos/g/200/150'
                                alt="grey Frame"
                            />
                        </div>
                    </div>
                </div>
                <div className={'itemWrapper__reverse'}>
                    <div className={'itemOne'}>
                        <h1>Specific Image</h1>
                        <p>Get a specific image by appending <span className={'itemExtension'} >?image</span> to the end of the url.</p>
                        <div className={'itemUrl'}>
                            <p>https://picsum.photos/495/400/?image=0</p>
                        </div>
                    </div>
                    <div className={'photo'}>
                        <div className={'photo__avatar'}>
                            <img
                                className='minimizingHide'
                                src= 'https://picsum.photos/495/400/?image=0'
                                alt="Specific Frame"
                            />
                            <img
                                className='originalHide'
                                src= 'https://picsum.photos/200/150/?image=0'
                                alt="Specific Frame"
                            />
                        </div>
                    </div>
                </div>
                <div className={'itemWrapper'}>
                    <div className={'itemOne'}>
                        <h1>Blurred image</h1>
                        <p>Get a blurred image by appending <span className={'itemExtension'} >?blur</span> to the end of the url.</p>
                        <div className={'itemUrl'}>
                            <p>https://picsum.photos/495/400/?blur</p>
                        </div>
                    </div>
                    <div className={'photo'}>
                        <div className={'photo__avatar'}>
                            <img
                                className='minimizingHide'
                                src= 'https://picsum.photos/495/400/?blur'
                                alt="Blurred Frame"
                            />
                            <img
                                className='originalHide'
                                src= 'https://picsum.photos/200/150/?blur'
                                alt="Blurred Frame"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Generes