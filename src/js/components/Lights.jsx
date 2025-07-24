import React, {useState} from "react";
import ReactDOM from "react-dom";

const Lights = () => {

const [select, setSelect] = useState("")

const lightOn = (color) => {
    if(select === color){
        setSelect("")
    } else {
        setSelect(color)
    }
    console.log(color)
}

    return (
        <div className="box container">
            <div className="support"></div>
            <div className="boxLight d-flex justify-conten-center align-items-center flex-column justify-content-around">
                <div 
                    className={select == "red" ? "red" : "off"}
                    onClick={()=>lightOn("red")}
                    ></div>
                <div 
                    className={ select == "yellow" ? "yellow" : "off" }
                    onClick={()=>lightOn("yellow")}
                ></div>
                <div 
                    className={ select == "green" ? "green" : "off" }
                    onClick={()=>lightOn("green")}
                ></div>
            </div>
        </div>
    );
};

export default Lights;