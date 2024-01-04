import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-areas: "leftside rightside" "footer footer" ;
    justify-content: center;
    
`

export const Loginwrap = styled.section`
 grid-area: leftsdie;
    
`

export const Logo = styled.section`
    margin-top: 50%;
    width: 1rem;
    
`

export const Greet = styled.section`
    margin-top: 1rem;
    margin-left: 30%;
    h1{
        color:#0096FF;
        font-size: 25px;
    }
    p{
        color:#d3d4d4;
        font-size: 15px;
    }

`

export const Lgnform = styled.section`
   
    
`
export const Loginbanner = styled.section`
    grid-area: rightside;
    margin-left: 50%;
    border-bottom-left-radius: 80px 80px;
    width: 650px;
    height: 500px;
   
`
export const Border = styled.form`
    border-bottom-left-radius: 80px 80px;
    
`

export const Lgnfooter = styled.footer`
   grid-area: footer;
    
`