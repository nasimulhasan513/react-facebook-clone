import { Button } from '@material-ui/core'
import React from 'react'
import './styles/Login.css'
import {auth,provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
function Login() {
    const [state,dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(res=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        }).catch(err=>alert(err))
    }   
    
    return (
        <div className="Login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" alt=""/>
               
            </div>
            <Button type="submit" onClick={signIn} >Sign in</Button>
        </div>
    )
}

export default Login
