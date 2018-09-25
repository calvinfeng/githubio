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

interface ProjectCardState {
  markdownTxt: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

class ProjectCard extends React.Component<ProjectCardProps, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card className="project-card">
        <CardActionArea>
          <CardMedia 
            className="project-image"
            image={this.props.image}
            title={this.props.title}  />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
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