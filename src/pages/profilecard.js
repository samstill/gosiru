import { Card,Button ,Container  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuth } from"../context/AuthContext";


const ProfileCard = () => {
    const { currentUser } = useAuth()

    return ( 
        <div className="main">
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
                <div className="w-100" align='center' style={{ maxWidth:"400px" }}>
            <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#f3f5f7'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                <Card.Body>
                    <Card.Title>{currentUser && currentUser.email}</Card.Title>
                    <Card.Text>
                    <h6>Email:</h6>
                    <p>{currentUser && currentUser.email}</p>
                    <h4>Frontend Developer</h4>
                    </Card.Text>
                    <Link to="/dashboard"><Button variant="primary" borderRadius="20px">Visit Console</Button></Link>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </div>
     );
}
 
export default ProfileCard;