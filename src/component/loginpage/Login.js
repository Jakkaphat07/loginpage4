import React from 'react'
import { Lgnform, Logo, Greet, Wrapper, Loginbanner, Lgnfooter, Loginwrap } from './Styled'
import Tokiomarinelogo from "../../asset/Tokiomarinelogosi.png";
import Bannerback from "../../asset/bannerbgper.jpg"

function Login() {
  return (
    <Wrapper>
        <div>
            <Logo>
                <img src={Tokiomarinelogo} />
            </Logo>
            <Greet>
                <h1>Welcome Back</h1>
                <p>Enter your email and password to sign in</p>
            </Greet>
            <div>
                <form >
                    <p>Email</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="password" /> <br />
                    <a href='#'>Forget your password ?</a> <br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
        <Loginbanner>
            <div>
                <img src={Bannerback} />
            </div>
        </Loginbanner>
        <Lgnfooter>
            <p>Footer</p>
        </Lgnfooter>
    
    </Wrapper>
    
  )
}

export default Login