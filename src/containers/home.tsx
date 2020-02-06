import * as React from 'react'
import ReactPlayer from 'react-player'
import ProjectCard from '../components/project_card'
import { Menu, MenuItem, IconButton, Paper, Grid, Snackbar } from '@material-ui/core'
import './home.scss'

interface HomeProps {}

interface HomeState {
    snackBarOpen: boolean
    snackBarMessage: string
}

declare var require: any

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props) {
    super(props)

    this.state = {
      snackBarOpen: false,
      snackBarMessage: ""
    }
  }

  handleSnackBarClose = () => {
    this.setState({ snackBarOpen: false, snackBarMessage: "" })
  }

  newSnackBarOpenHandler = (msg) => () => {
    this.setState(({ snackBarOpen: true, snackBarMessage: msg }))
  }

  get introduction() {
    return (
      <Paper className="introduction" elevation={1}>
        <div className="background-video">
        <ReactPlayer
            url={"https://www.youtube.com/watch?v=9d8wWcJLnFI"}
            width={"1280px"}
            height={"720px"}
            loop={true}
            muted={true}
            playing={true} />
        </div>
        <div className="foreground-text">
          <h1>Hello there,</h1>
          <h2>this is my personal blog for coding and music.</h2>
        </div>
      </Paper>
    )
  }

  get gallery() {
    const config = require('../configs/projects.json')
    const cards = config.projects.map((project) => {
      return (
        <Grid key={project.id} item>
          <ProjectCard 
            title={project.title}
            description={project.description}
            image={project.image} 
            github={project.github}
            live={project.live} />
        </Grid>
      )
    })

    return (
      <Paper className="gallery" elevation={1}>
        <Grid container 
          className="project-grid" 
          direction="column" 
          onMouseEnter={this.newSnackBarOpenHandler("Things I built")}
          onMouseLeave={this.handleSnackBarClose}>
          <Grid container className="grid-row" direction="row" spacing={1} justify="center" >{cards}</Grid>
        </Grid>
        <section className="logos"
          onMouseEnter={this.newSnackBarOpenHandler("Tools I use")}
          onMouseLeave={this.handleSnackBarClose}>
          <img alt="Golang" src="/public/logos/golang.png" />
          <img alt="Python" src="/public/logos/python.png" />
          <img alt="React" src="/public/logos/react.png" />
          <img alt="JavaScript" src="/public/logos/javascript.png" />
          <img alt="Rails" src="/public/logos/rails.png" />
          <img alt="Ruby" src="/public/logos/ruby.png" />
          <img alt="Node" src="/public/logos/node.png" />
          <img alt="TypeScript" src="/public/logos/typescript.png" />
          <img alt="Apache Kafka" src="/public/logos/kafka.png" />
          <img alt="PostgreSQL" src="/public/logos/postgresql.png" />
          <img alt="Cassandra" src="/public/logos/cassandra.png" />
          <img alt="Docker" src="/public/logos/docker.png" />
          <img alt="Tensorflow" src="/public/logos/tensorflow.svg" />
          <img alt="ROS" src="/public/logos/ros.png" />
        </section>
      </Paper>
    )
  }

  render() {
    return (
      <section className="home">
        {this.introduction}
        {this.gallery}
        <Snackbar
          onClose={this.handleSnackBarClose}
          open={this.state.snackBarOpen} 
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
          message={<span>{this.state.snackBarMessage}</span>} />
      </section>
    )
  }
}

export default Home