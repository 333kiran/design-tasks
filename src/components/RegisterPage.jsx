import React from 'react';
import {Box,TextField,Button,Typography,styled} from '@mui/material';

const Container = styled(Box)`
 background:linear-gardiant(red,white);
`;

const MainBox = styled(Box)`
margin:3rem 10rem;
 width:1050px;
 height:660px;
 display:flex;
 box-shadow:0px 3px 5px 0px rgba(0,0,0,0.7);

`;
const ImageBox = styled(Box)`
width:500px;
`;
const FormBox = styled(Box)`
width:550px;
height:800px;
display: flex;
flex-direction: column;
padding:25px 35px;
flex: 1;
& > div, & > button, & > p {
 margin-top: 11px;
 color:black;
}
`;

const InputBox = styled(Box)`
margin:1rem;

`;
const LoginButton = styled(Button)`
  text-transform: none;
  margin-top:1rem;
  margin-left:1rem;
  background:#d50000;
  color:#fff;
  height:48px;
  border-radius:2px;
  width:28rem;
`
const Text = styled(Typography)`
 color:black;
 margin-left:9rem;
 opacity:0.7;
 margin-bottom:2rem;
`; 
const TextLogo = styled(Typography)`
 font-weight:600;
 font-size:1.5rem;
 margin-left:19px;
 color:#d50000;
`;

const RegisterPage = () => {
    const Imagepic = "https://th.bing.com/th/id/R.8fceb8895ee04a14e98d03f81a22b442?rik=gUH2KSMeLSyxlw&riu=http%3a%2f%2fwww.skautomations.in%2fwp-content%2fuploads%2f2018%2f08%2fsolutions.jpg&ehk=Vf4GyIBT0EwybwlRVtNQq1j3vZ%2bw6aYYB1aSbeCT1hw%3d&risl=&pid=ImgRaw&r=0";

  return (
    <Container>
           <MainBox>
    <ImageBox><img src={Imagepic} alt="pic" width="500" height="660"/></ImageBox>
    <FormBox>
        <Text>Already  have an account?<span style={{fontWeight:600}}> Login here</span></Text>
        <Box>
            <TextLogo>Register here</TextLogo>
            <Typography style={{marginLeft:19}}>lorem ipsum dummy test </Typography>
           <InputBox>
             <Typography>Name</Typography>
             <TextField variant='outlined'   label="enter your name here" style={{width:'28rem'}}/>
           </InputBox>

           <InputBox>
             <Typography>Email</Typography>
             <TextField variant='outlined'   label="enter your email here" style={{width:'28rem'}}/>
           </InputBox>
           <InputBox>
             <Typography>Phone no.</Typography>
             <TextField variant='outlined'   label="enter your phone number here" style={{width:'28rem'}}/>
           </InputBox>
           <InputBox>
             <Typography>Address</Typography>
             <TextField variant='outlined'   label="enter your name here" style={{width:'28rem'}}/>
           </InputBox>
         <LoginButton variant="contained">Register</LoginButton>
            
        </Box>
    </FormBox>
   </MainBox>
   </Container>

  )
}

export default RegisterPage;