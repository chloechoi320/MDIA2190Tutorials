import {useEffect} from 'react';
import Header from '../../comps/Header';
import './about.css';

const About = () => { 

useEffect(()=>{
    setTimeout(()=>{
    document.querySelector("#aboutpage").style.left = 0;
    }, 50)
}, []);

    return <div id="aboutpage">
    <Header nametext="Guess Who!" fontsize={24} hcolor={"#66cdaa"}/>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
}

export default About;

