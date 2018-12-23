import React, { Component } from 'react';
import Clock from "./Clock";

class App extends Component {

    // state = this.state{latitude: null, errorMessage: "",value: 1};

    state = {latitude: null, errorMessage: "",value: 1};

    constructor(props) {
        super(props);
          window.navigator.geolocation.getCurrentPosition(
            position =>{this.setState({latitude: position.coords.latitude})},
            error => {this.setState({errorMessage: error.message})}
        );

        // setInterval(()=>{
        //     this.setState((state,props) => )
        // },1000);

    }

    componentDidMount() {//only called when first time (only first time) it is mounted
        console.log("mounted");
    }

    componentDidUpdate() {
        console.log("updated");
    }

    componentWillMount(){
        console.log("unmounted");
    }
    
    isItWarm() {
        
            const {latitude, error} = this.state;
            const date = new Date;

            if (latitude) {
                const month = date.getMonth();

                if(
                    (month >= 4 && month<=9 && latitude >0)
                    ||
                    ((month>=9 || month <=4) && latitude <0)
                    ||
                    (latitude ===0)
                ){
                    return true;
                }
            }

            return false;


            
    }

    getClockIcon() {
        if(this.isItWarm()){
            return "sun.svg";
        }

        return "snowflake.svg";
    }

    render() {
        const {latitude, errorMessage} = this.state;
        return (
                
                <div>

                    {errorMessage || <Clock 
                        icon={latitude !== null ? this.getClockIcon() : null}
                        timezone={"Sydney/Australia"} 
                        date={new Date()}
                        minute = {new Date().getMinutes()} 
                        hour = {new Date().getHours()}
                        second = {new Date().getSeconds()}
                    />}
                </div>
            );
    }
}

export default App;
