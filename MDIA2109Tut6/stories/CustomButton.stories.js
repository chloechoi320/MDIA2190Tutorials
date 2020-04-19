import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title:"My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
    alert("Successfully Canceled");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom Placeholder"
/>;
export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;


/*export const PageWithCustomButtons = () => <div>
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
} */
