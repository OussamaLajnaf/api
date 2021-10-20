import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardList = ({users}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
      <p>{users.name[0]}</p>
    <Card.Title>{users.name}</Card.Title>
    <Card.Text>
      {users.email}
    </Card.Text>
    <Link to={`/Love/${users.id}`}>
    <Button variant="primary">Love</Button>
    </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default CardList
