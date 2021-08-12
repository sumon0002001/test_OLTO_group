import React, {useState} from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout} = useAuth();
  const history = useHistory();

  async function handleLogout(){
     setError("")
    
     try {
    await logout()
    history.push('/login')

     } catch {
         setError("Failed to Logout")
     }

  }

  return (
    <>
      <div className="w-100 text-center mt-2">
      Trading Signals Feed? <Link to="/tradingSignal">Teading Signal</Link>
      </div>
    
     <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong>{currentUser.email}
        <Link to='/update-profile' className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card.Body>
    </Card>   
    <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>
        Log out
      </Button>
    </div> 
    <Link to='/chatbot' className="btn btn-primary w-100 mt-3">
          Chatbot
    </Link>

    </>
    )
}
