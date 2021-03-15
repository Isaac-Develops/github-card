import { Card } from "react-bootstrap"

function GithubCard(props) {
  return (
    <>
      {props.user && props.active && (
        <Card>
          <Card.Img
            src={props.user.avatar_url}
            alt={props.user.name + "'s Profile Picture"}
            variant="top"
          />
          <Card.Body>
            <Card.Title>{props.user.name && props.user.name}</Card.Title>
            <Card.Text>
              {props.user.followers && "Followers: " + props.user.followers}
            </Card.Text>
            <Card.Text>
              {props.user.following && "Following: " + props.user.following}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default GithubCard
