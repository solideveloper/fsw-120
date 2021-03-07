import React from 'react'
import './djreact.css'


class DjReact extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ["white", "white", "white", "white"] 
        }
    }

    smallDj = () => {
        this.setState(prevState => {
            let box1 = "black";
            let box2 = "black";
            let box3 = "black";
            let box4 = "black";
            return {
                color: [box1, box2, box3, box4]
            }
        })
    }

    partyDJ = () => {
        this.setState(prevState => {
            let box1 = "purple"; 
            let box3 = "purple";
            return {
                color: [box1, box3, prevState.color[2], prevState.color[3]]
            }
        })
    }

    proDJright = () => {
        this.setState(prevState => {
            let box4 = "blue"; 
            return {
                color: [prevState.color[0], prevState.color[1], box4, prevState.color[4], box4]
            }
        })
    }

    proDJleft = () => {
        this.setState(prevState => {
            let box3 = "blue"; 
            return {
                color: [prevState.color[0], prevState.color[1], box3, prevState.color[3], box3]
            }
        })
    }

    bigTimeDj1 = () => {
        this.setState(prevState => {
            let box2 = "green"; 
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], box2]
            }
        })
    }

    bigTimeDj2 = () => {
        this.setState(prevState => {
            let box4 = "yelloworange"; 
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], box4]
            }
        })
    }

    bigTimeDj3 = () => {
        this.setState(prevState => {
            let box2 = "orange"; 
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], box2]
            }
        })
    }

    bigTimeDj4 = () => {
        this.setState(prevState => {
            let box4 = "pink"; 
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], box4]
            }
        })
    }

    daGreat = () => {
        this.setState(prevState => {
            let box2 = "crimson"
            return {
                color: [prevState.color[0], box2, prevState.color[2], prevState.color[3]]
            }
        })
    }

    daGoat = () => {
        this.setState(prevState => {
            let box3 = "yellow"
            return {
                color: [prevState.color[0], prevState.color[1], box3, prevState.color[3]]
            }
        })
    }

    

    render() {
        return(
            <div>
                <div className = "box">
                    <h1>Select a DJ from the list below... </h1><br/>
                    <button onClick={this.smallDj}>DJ Smalls</button>

                    <button onClick={this.partyDJ}>DJ Party</button>

                    <button onClick={this.proDJright}>DJ ProRight</button>
                    <button onClick={this.proDJleft}>DJ ProLeft</button>

                    <button onClick={this.bigTimeDj1}>DJ Big Time1</button>
                    <button onClick={this.bigTimeDj2}>DJ Big Time2</button>
                    <button onClick={this.bigTimeDj3}>DJ Big Time3</button>
                    <button onClick={this.bigTimeDj4}>DJ Big Time4</button>

                    <button onClick={this.daGreat}>DJ Great</button>

                    <button onCLick={this.daGoat}>Da DJ Goat</button>
                </div>
                
                    
                <div className = "box2">
                    <div style={{background: this.state.color[0]}} className="boxStyle"></div>
                    <div style={{background: this.state.color[1]}} className="boxStyle"></div>
                    <div style={{background: this.state.color[2]}} className="boxStyle"></div>
                    <div style={{background: this.state.color[3]}} className="boxStyle"></div>
              
                </div>               
            </div>
        )
    }
}

export default DjReact