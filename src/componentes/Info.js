import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = ({match}) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        let getonUser=async()=>{
            try {
               let res=await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`) 
               setUser(res.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        getonUser()
    
    }, [match.params.id])
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
      
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    <Link to= "/">
    <Button variant="primary">Back</Button>
    </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Info
