import * as React from 'react'
import { 
  Card, 
  CardActionArea, 
  CardActions, 
  Button, 
  CardMedia, 
  CardContent, 
  Typography 
} from '@material-ui/core'
import './project_card.scss'

type ProjectCardState = {}
type ProjectCardProps = {
  title: string,
  description: string,
  image: string,
  github: string,
  live: string
}

class ProjectCard extends React.Component<ProjectCardProps, any> {
  constructor(props) {
    super(props)
  }

  newOpenLinkHandler = (url: string) => () => {
    setTimeout(() => {
      window.open(url)
    }, 300)
  }

  get buttons() {
    const buttons = [
      <Button size="small" color="primary" onClick={this.newOpenLinkHandler(this.props.github)}>Source code</Button>
    ]

    if (this.props.live.length > 0) {
      buttons.push(
        <Button size="small" color="primary" onClick={this.newOpenLinkHandler(this.props.live)}>Visit</Button>
      )
    }

    return buttons
  }

  render() {
    return (
      <Card className="project-card">
        <CardMedia 
          className="project-image"
          image={this.props.image}
          title={this.props.title}  />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">{this.props.title}</Typography>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        <CardActions>{this.buttons}</CardActions>
      </Card>
    )   
  }
}

export default ProjectCard