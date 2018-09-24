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

class ProjectCard extends React.Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      title: "Mofasa",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique enim vitae libero placerat, 
      nec tempor arcu tristique.`
    }
  }

  render() {
    return (
      <Card className="project-card">
        <CardActionArea>
          <CardMedia 
            image="/static/images/mofasa.png"
            title="My Face" className="project-image" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">{this.state.title}</Typography>
            <Typography component="p">{this.state.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Source code</Button>
          <Button size="small" color="primary">Live</Button>
        </CardActions>
      </Card>
    )   
  }
}

export default ProjectCard