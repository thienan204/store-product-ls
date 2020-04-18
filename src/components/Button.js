import styled from 'styled-components'


const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border-radius:0.5rem;
border: 1px solid ${props=>(props.cart?"var(--mainBlue)":"var(--mainYellow)")};
color: ${props=>(props.cart?"var(--mainBlue)":"var(--mainYellow)")};
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props=>(props.cart?"var(--mainBlue)":"var(--mainYellow)")};
  color:var(--mainBlue);
}
&:focus{
  color:var(--mainYellow);
}
`

export {ButtonContainer}