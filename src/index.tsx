import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Material UI
import { 
  AppBar, 
  Typography, 
  Toolbar, 
  Menu, 
  MenuItem, 
  IconButton, 
  Paper, 
  Grid 
} from '@material-ui/core'

import { MenuRounded } from '@material-ui/icons'
import ReactPlayer from 'react-player'
import GitHub from "./icons/github"
import Post from "./components/post"
import ProjectCard from './components/project_card'
import "./index.scss"

interface IndexState {
    anchorElement: HTMLElement,
    isMenuOpen: boolean
}

interface IndexProps {}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)

    this.state = {
      anchorElement: undefined,
      isMenuOpen: false
    }
  }

  get appbar() {
    return (
      <AppBar position="static" color="default" className="app-bar">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={this.handleMenuClick}>
            <MenuRounded />
          </IconButton>
          <Menu 
            open={this.state.isMenuOpen}
            onClose={this.handleMenuClose} 
            getContentAnchorEl={null}
            anchorEl={this.state.anchorElement}
            anchorOrigin={{"vertical": "bottom", "horizontal": "center"}} >
            <MenuItem onClick={this.handleMenuClose}>Machine Learning</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>Vlog</MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className="title">
            Calvin Feng
          </Typography>
          <IconButton color="inherit" aria-label="Menu">
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }

  get introduction() {
    return (
      <Paper className="introduction" elevation={1}>
        <div className="background-video">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=9d8wWcJLnFI"}
            width={"1024px"}
            height={"576px"}
            loop={true}
            muted={true}
            playing={true} />
        </div>
        <div className="foreground-text">
          <h1>Hi, I'm Calvin</h1>
          <h2>I learn & build things, including what you're looking at</h2>
        </div>
      </Paper>
    )
  }

  get projectOverview() {
    return (
      <Paper className="project-overview" elevation={1}>
        <Typography className="title-1" variant="display2">What I built...</Typography>
        <Grid container className="project-grid" direction="column">
        <Grid container className="grid-row" direction="row" spacing={16} justify="center" >
          {[0, 1, 2].map(value => <Grid key={value} item><ProjectCard /></Grid>)}
        </Grid>
        <Grid container className="grid-row" direction="row" spacing={16} justify="center" >
          {[0, 1, 2].map(value => <Grid key={value} item><ProjectCard /></Grid>)}
        </Grid>
        </Grid>
        <div className="logos">
          <img alt="Golang" src="/logos/golang.png" />
          <img alt="Python" src="/logos/python.png" />
          <img alt="JavaScript" src="/logos/javascript.png" />
          <img alt="TypeScript" src="/logos/typescript.png" />
          <img alt="React" src="/logos/react.png" />
          <img alt="Apache Kafka" src="/logos/kafka.png" />
          <img alt="PostgreSQL" src="/logos/postgresql.png" />
          <img alt="Cassandra" src="/logos/cassandra.png" />
          <img alt="Tensorflow" src="/logos/tensorflow.svg" />
          <img alt="ROS" src="/logos/ros.png" />
        </div>
      </Paper>
    )
  }

  get content() {
    const URLs: string[] = ["posts/lorem_ipsum.md"]
    // const URLs: string[] = []
    const posts = URLs.map((url) => {
      return <Post markdownURL={url} />
    })

    return (
      <section className="content">
        {posts}
      </section>
    )
  }
    
  handleMenuClose = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: null, isMenuOpen: false })
  }

  handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: e.currentTarget, isMenuOpen: true })
  }

  render() {
    return (
      <section className="index">
        {this.appbar}
        {this.introduction}
        {this.projectOverview}
      </section>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})