import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton, Paper } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import GitHub from "./icons/github"
import Post from "./components/post"
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
        <div className="left-container">
          <img src="/imgs/my_face.jpeg" width="300px"/>
        </div>
        <div className="right-container">
          <p>
            I am a Software Engineer at Fetch Robotics. From day to day, I am dealing with the 
            following technologies.
          </p>
          <div className="icons">        
          </div>
        </div>
      </Paper>
    )
  }

  get content() {
    const URLs: string[] = ["posts/lorem_ipsum.md"]
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
        {this.content}
      </section>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})