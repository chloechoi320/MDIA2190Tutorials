import React, {useState, useEffect} from 'react';
import './cb.css';

const CustomButton = ({text, color, textColor, onClick}) => <div 
    style={{backgroundColor:color, color:textColor, boxShadow:"1px 1px 5px "+color}}
    className="custom_button_box"
    onClick={onClick}>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
    alert("Clicked");
    //document.query...style.width = "100px";
}

CustomButton.defaultProps = {
    text:"Default Button",
    color:"#83dbd3",
    textColor: "#FFF",
    onClick:ButtonClick
}
export default CustomButton;