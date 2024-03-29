import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
             <Content>
                <CTA>
                    <CTALogoOne src="/src/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam, molestiae dolor fugiat natus adipisci eos repellendus mollitia nesciunt nisi eligendi ut deserunt, tempore eveniet, saepe dolorum incidunt ex harum?</Description>
                    <CTALogoTwo src="/src/images/cta-logo-two.png" alt="" />
                </CTA>
               <BgImage />
             </Content>
        </Container>
    ); 
};

const Container = styled.section`
    overflow: hidden;
    display : flex;
    flex-direction : column;
    text-align : center;
    height : 100vh;
`;
const Content = styled.div`
    margin-bottom : 10vw;
    width : 100%;
    position : relative;
    min-height : 100vh;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    padding : 80px 40px;
    height : 100%;
`;
const BgImage = styled.div`
    height : 100%;
    background-image: url('/src/images/login-background.jpg');
    background-position : top;
    background-size : cover;
    background-repeat : no-repeat;
    position : absolute;
    top:0;
    left: 0;
    right : 0;
    z-index : -1;
    `;
const CTA = styled.div `
    margin-bottom: 2vw;
    max-width : 650px;
    flex-wrap : wrap;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align : center;
    margin-right: auto;
    margin-left : auto;

`;

const CTALogoOne = styled.img`
    width : 100%;
    display : block;
    margin-bottom : 12px;
    max-width : 600px;
    min-height : 1px;
`;

const SignUp = styled.a`
 font-weight: bold;
 color: #f9f9f9;
 background-color: #0063e5;
 margin-bottom: 12px;
 width: 100%;
 letter-spacing: 1.5px;
 padding: 16.5px 0;
 border: 1px solid transparent;
 border-radius: 4px;

 &:hover{
    background-color: #0483ee;
 }
`
const Description = styled.p`
    color:hsla(0, 0%, 95,3%, 1);
    font-size : 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    max-width : 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`


export default Login;