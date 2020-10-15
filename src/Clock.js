import React,{Component} from 'react';


// learnt from https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            now : new Date()
        }
      }
    
   
      
    componentDidMount() {
        // didMount is like ngOnInit()?
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    componentWillUnmount() {
        clearInterval(this.timerID); // clear timer
    }
    tick() {
        this.setState({
          now: new Date()
        });
    }

    flag= 1;
    change(){
        // if(this.flag === 1){
        //     this.flag = 0;
        //     console.log(this.flag);
        //     return;
        // }else{
        //     this.flag = 1;
        //     console.log(this.flag);
        //     return;
        // }
       
    }
    
    render(){
        if(this.flag === 1){
            return(
                <div>
                   <h1>CLOCK HERE</h1>
              <p> {this.state.now.getHours()}: {this.state.now.getMinutes()} :{this.state.now.getSeconds()} </p>
              <button onClick ={this.change()}>click</button>
                </div>
              );
        }else{
            return(
                <div>
                    <h1>PLEASE ENTER A TIME</h1>
                    <button onClick ={this.change()}>click</button>
                </div>
            )
        }
      
    }
  }

//   function Clock() {
//     return (
//         // className="Clock"
//     <div > 
//         <p>this is a Clock</p>
          
//       </div>
//     );
//   }
export default Clock;