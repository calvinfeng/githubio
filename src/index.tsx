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
  Grid,
  Snackbar
} from '@material-ui/core'

import { MenuRounded } from '@material-ui/icons'
import ReactPlayer from 'react-player'
import GitHub from "./components/github"
import Post from "./components/post"
import ProjectCard from './components/project_card'
import "./index.scss"

interface IndexState {
    anchorElement: HTMLElement,
    isMenuOpen: boolean,
    isSnackBarOpen: boolean,
    snackBarMessage: string
}

interface IndexProps {}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)

    this.state = {
      anchorElement: undefined,
      isMenuOpen: false,
      isSnackBarOpen: false,
      snackBarMessage: ""
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
            <MenuItem onClick={this.handleMenuClose}>About Me</MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className="title">
            Calvin Feng
          </Typography>
          <IconButton color="inherit" aria-label="Menu">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <img height="30px" src="/static/logos/linkedin.svg" />
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
        <Grid container 
          className="project-grid" 
          direction="column" 
          onMouseEnter={this.newSnackBarOpenHandler("Things I built")}
          onMouseLeave={this.handleSnackBarClose}>
          <Grid container className="grid-row" direction="row" spacing={16} justify="center" >
            {[0, 1, 2, 3, 4, 5].map(value => <Grid key={value} item><ProjectCard /></Grid>)}
          </Grid>
        </Grid>
        <section className="logos"
          onMouseEnter={this.newSnackBarOpenHandler("Tools I use")}
          onMouseLeave={this.handleSnackBarClose}>
          <img alt="Golang" src="/static/logos/golang.png" />
          <img alt="Python" src="/static/logos/python.png" />
          <img alt="React" src="/static/logos/react.png" />
          <img alt="JavaScript" src="/static/logos/javascript.png" />
          <img alt="Rails" src="/static/logos/rails.png" />
          <img alt="Ruby" src="/static/logos/ruby.png" />
          <img alt="Node" src="/static/logos/node.png" />
          <img alt="TypeScript" src="/static/logos/typescript.png" />
          <img alt="Apache Kafka" src="/static/logos/kafka.png" />
          <img alt="PostgreSQL" src="/static/logos/postgresql.png" />
          <img alt="Cassandra" src="/static/logos/cassandra.png" />
          <img alt="Docker" src="/static/logos/docker.png" />
          <img alt="Tensorflow" src="/static/logos/tensorflow.svg" />
          <img alt="ROS" src="/static/logos/ros.png" />
        </section>
      </Paper>
    )
  }

  get content() {
    const URLs: string[] = ["/static/markdowns/lorem_ipsum.md"]
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

  handleSnackBarClose = () => {
    this.setState({ isSnackBarOpen: false, snackBarMessage: "" })
  }

  newSnackBarOpenHandler = (msg) => () => {
    this.setState(({ isSnackBarOpen: true, snackBarMessage: msg }))
  }

  render() {
    return (
      <section className="index">
        {this.appbar}
        {this.introduction}
        {this.projectOverview}
        <Snackbar
          onClose={this.handleSnackBarClose}
          open={this.state.isSnackBarOpen} 
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
          message={<span>{this.state.snackBarMessage}</span>} />
      </section>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})