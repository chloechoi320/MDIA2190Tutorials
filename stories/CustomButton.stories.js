import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header
        htext="About" 
        fontsize="12px"
        hcolor="#ffba00"
        onMouseOver={aOver}
    />

    <Header
        htext="Profile"
        fontsize="14px"
        hcolor="#ff8e00"
        onMouseOver={bOver}
    />

    <Header
        htext="Contact"
        fontsize="20px"
        hcolor="#b8002a"
        onMouseOver={cOver}
    />

    <CustomButton 
        color="#999"
        text="Cancel"
        onClick={CancelClick}/>
    <CustomButton 
        color="#637d9e"
        text="OK"
        onClick={okClick}/>
    <CustomButton 
        text="Edit"
        onClick={editClick}/>
    <CustomButton 
        color="#5bbbcb"
        text="Submit"
        onClick={submitClick}/>

</div>

function CancelClick(){
    alert("Successfully Canceled");
}

function okClick(){
    alert("Alrighty");
}

function editClick(){
    alert("Now you can edit");
}

function submitClick(){
    alert("Successfully Submitted");
}

function aOver(){
    alert("Mouse over 1");
}

function bOver(){
    alert("Mouse over 2");
}

function cOver(){
    alert("Mouse over 3");
}