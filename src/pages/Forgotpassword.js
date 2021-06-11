import {useRef} from 'react';
import {Link} from 'react-router-dom';
import { Card, Form, Button, Container  } from 'react-bootstrap';
import {ReactComponent as Logoform} from "../assets/svgs/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup} = useAuth()


    function handleSubmit(e) {
        e.preventDefault();

        signup(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div className="main">
  
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
                <div className="w-100" align='center' style={{ maxWidth:"400px" }}>
                    <Card style={{backgroundColor:"#f3f5f7", border:"1px solid grey", padding:20, borderRadius:20}}>
                        <Link to="/"> <Logoform style={{alignSelf:"center"}} width={80} height={80} /></Link>
                        <h2 className="text-center mb-4">Password Reset</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder='Enter Your E-mail'  required />
                            </Form.Group>
                            <Button style={{borderRadius:8, marginTop:10}} type="submit" className="w-100">Next</Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            Want to Login? <Link to="/login" style={{textDecoration:'none', color: 'green'}} >Login</Link>
            </div>

                    </Card>
                    
            </div>
            </Container>

            
        </div>
      );
}
 
export default ForgotPassword;