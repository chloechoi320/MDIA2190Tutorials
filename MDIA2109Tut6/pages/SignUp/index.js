import {useEffect} from 'react';
import Input from '../../comps/Input';
import Header from '../../comps/Header';
import './signup.css';

const SignUp = () => {

    useEffect(()=>{
        setTimeout(()=>{
        document.querySelector("#signuppage").style.left = 0;
        }, 50)
    }, []);

 return <div id="signuppage">
    <Header nametext="Sing Up Using Your Google Account!" fontsize={20}/>
    <Input placeholder="email" />
</div>
}

export default SignUp;