import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"
import "./App.css"

function App() {
  const [user, setUser] = useState()
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    fetch("https://api.github.com/users/Isaac-Develops")
      .then((res) => res.json())
      .then((user) => setUser(user))

    setActive((active) => !active)
  }

  return (
    <>
      <Button onClick={handleToggle}>Toggle Profile</Button>
      {user && active && (
        <Card>
          <Card.Img
            src={user.avatar_url}
            alt={user.name + "'s Profile Picture"}
            variant="top"
          />
          <Card.Body>
            <Card.Title>{user.name && user.name}</Card.Title>
            <Card.Text>
              {user.followers && "Followers: " + user.followers}
            </Card.Text>
            <Card.Text>
              {user.following && "Following: " + user.following}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default App
