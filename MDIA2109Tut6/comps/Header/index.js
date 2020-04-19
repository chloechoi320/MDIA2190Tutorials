//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver for the header

import React from 'react';
import './header.css';

const Header = ({nametext, htext, fontsize, hcolor, onMouseOver}) => <div className="custom_header"
    style={{fontSize:fontsize, color:hcolor}}
    onMouseOver={onMouseOver}>
        {/* <ul>
            <li>{htext}</li>
        </ul> */}
        <h1 style={{fontSize:fontsize}}>{nametext}</h1>
</div>

// function MouseOver(){
//     alert("click!");
// }

Header.defaultProps = {
    fontsize: 12,
    hcolor: "#000",
    // onMouseOver:MouseOver,
    nametext: "Header"
}

export default Header;