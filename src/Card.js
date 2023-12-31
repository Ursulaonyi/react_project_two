import "./Card.css"
import React, {useState} from "react";

function Card(){
    var [counter, incrementC]=useState(0);
    var doIncrement = () => {
        //Change if valueChange <50
        if (counter <= 49 ){
            incrementC(++counter);
        }
        else{
            alert("Value is greater than 50");
            counter=0;
        }
    }
    return(
        <>
            <center className="card1">
                <div>
                    <h1>Welcome to my Counter App</h1>
                    <p>This application is expected to display a counter on button click</p>
                    <h3>See counter in action below</h3>
                    <p>
                        <i>
                            You have click on the button <b>{counter}</b> times
                        </i>
                    </p>
                </div>
                <button onClick={doIncrement }>Increment Now</button>
            </center>
        </>
    )
}

// var counter=0;
// function showAlert(){
//     alert(counter++);
//     // alert("Increment Button is Clicked");
// }


export default Card;