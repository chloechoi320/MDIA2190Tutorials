import Link from 'next/link';
import Router from 'next/router';
import {FaSearch} from 'react-icons/fa';
import {IoIosLogIn} from 'react-icons/io';
import {FaInfoCircle} from 'react-icons/fa';
import {IoIosChatbubbles} from 'react-icons/io';
import {FaPhone} from 'react-icons/fa';
import './index.css';


function ClickIndex(){
    // if(confirm("Are you sure?")){
    //     //move to chatPage
    //     Router.push("/ChatPage")
    // }
    document.querySelector("#mainapp").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

const Index = () => <div id="mainapp">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet"></link>
    <div id="index" onClick={ClickIndex}><FaSearch /> Index</div>
    <Link href="/SignUp"><button><IoIosLogIn color="#7c211e"/> Sign Up</button></Link>
    <Link href="/About"><button><FaInfoCircle color="#7c211e"/> About</button></Link>
    <Link href="/ChatPage"><button><IoIosChatbubbles color="#7c211e"/> Chats</button></Link>
    <Link href="/Contact"><button><FaPhone color="#7c211e"/> Contact</button></Link>

</div>

export default Index;
