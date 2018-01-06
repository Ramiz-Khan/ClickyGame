import React from "react";
import Images from "./images";


const $ = document.getElementsByClassName(".char-img");


// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    imgArray: []
  };

handleClick = event => {

   $.on("click" , function  (event) { 
     
    console.log(event.target.data(Images.img));

})

};


// imgShuffleEval = props => {
//   let imgArray = [];
  
//   $.on("click", function (event) {



//     console.log(event.data(img));
//   } )

// }

  // handleIncrement increases this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
   
  //   this.setState({ count: this.state.count + 1 });
  // };


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" >
            Increment
          </button>
      </div>
    );
  }
}


export default Counter;
