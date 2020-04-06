//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver for the header

import React from 'react';
import './header.css';

const Header = ({htext, fontsize, hcolor, onMouseOver}) => <div className="custom_header"
    style={{fontSize:fontsize, color:hcolor}}
    onMouseOver={onMouseOver}>
        <ul>
            <li>{htext}</li>
        </ul>
</div>

function MouseOver(){
    alert("click!");
}

Header.defaultProps = {
    fontsize: 12,
    hcolor: "#000",
    onMouseOver:MouseOver
}

export default Header;