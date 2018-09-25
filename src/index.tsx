import * as React from 'react'
import * as ReactDOM from 'react-dom'
import GitHub from "./components/github"
import Post from "./components/post"
import Landing from './containers/landing'
import "./index.scss"

// Material UI
import { MenuRounded } from '@material-ui/icons'
import { 
  AppBar, Typography, Toolbar, Menu, MenuItem, IconButton, 
} from '@material-ui/core'

interface IndexProps {}

interface IndexState {
    anchorElement: HTMLElement,
    menuOpen: boolean,
}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)

    this.state = {
      anchorElement: undefined,
      menuOpen: false,
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
            open={this.state.menuOpen}
            onClose={this.handleMenuClose} 
            getContentAnchorEl={null}
            anchorEl={this.state.anchorElement}
            anchorOrigin={{"vertical": "bottom", "horizontal": "center"}} >
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
    this.setState({ anchorElement: null, menuOpen: false })
  }

  handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: e.currentTarget, menuOpen: true })
  }

  render() {
    return (
      <section className="index">
        {this.appbar}
        <Landing />
      </section>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})