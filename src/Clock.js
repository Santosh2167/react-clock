import React,{ Component } from "react";
import "./Clock.css";

class Clock extends Component{

    state = {date:this.props.date, second:this.props.second, minute:this.props.minute, hour: this.props.hour};

  
    componentDidMount() {
        setInterval(()=>{
            this.setState((state,props)=>{
                return{second: state.second+1
                }
            })
        },1000);


        setInterval(()=>{

            this.setState((state,props)=>{
                if(state.second===60){
                    return {second: 0, minute: state.minute+1}
                }
            })

        },1000)
    }
    

    
    render() {


        // const {minute, second, hour} = this.state;

        console.log("from render" + this.state.seconds);
            return (
                <div className="container">
                    <h3 className="label">{this.props.timezone}</h3>
                    <div className="clock-face" style={{ backgroundImage: `url(/${this.props.icon})` }}>
                        <div className="clock">
                            <div className="hours-container">
                                <div className="hours" style={{ transform: `rotateZ(${(this.state.hour * 30) + (this.state.minute / 2)}deg)`}}></div>
                            </div>
                            <div className="minutes-container">
                                <div className="minutes" style={{ transform: `rotateZ(${(this.state.minute * 6)}deg)`}}></div>
                            </div>
                            <div className="seconds-container">
                                <div className="seconds" style={{ transform: `rotateZ(${(this.state.second * 6)}deg)`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
             )
        }
}

export default Clock;





// const Clock = (props) => {
//     const seconds = props.date.getSeconds();
//     const minutes = props.date.getMinutes();
//     const hours = props.date.getHours();
    
//     return (
//         <div className="container">
//             <h3 className="label">{props.timezone}</h3>
//             <div className="clock-face" style={{ backgroundImage: `url(/${props.icon})` }}>
//                 <div className="clock">
//                     <div className="hours-container">
//                         <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
//                     </div>
//                     <div className="minutes-container">
//                         <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
//                     </div>
//                     <div className="seconds-container">
//                         <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Clock;