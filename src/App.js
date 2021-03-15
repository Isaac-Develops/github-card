import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import GithubCard from "./views/GithubCard"
import "./App.css"

function App() {
  const [user, setUser] = useState()
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive((active) => !active)
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Isaac-Develops")
      .then((res) => res.json())
      .then((user) => setUser(user))
  }, [])

  return (
    <>
      <Button onClick={handleToggle}>Toggle Profile</Button>
      <GithubCard active={active} user={user} />
    </>
  )
}

export default App
