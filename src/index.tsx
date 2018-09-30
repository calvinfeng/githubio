import * as React from 'react'
import * as ReactDOM from 'react-dom'
import GitHub from "./components/github"
import Home from './containers/home'
import AboutMe from './containers/about_me'
import "./index.scss"
import { MenuRounded } from '@material-ui/icons'
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'

type IndexProps = {}
type IndexState = {
  anchorElement: HTMLElement,
  menuOpen: boolean,
  page: string
}

enum Page {
  Home = "HOME",
  AboutMe = "ABOUT_ME",
  Vlog = "VLOG"
}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)

    this.state = {
      anchorElement: undefined,
      menuOpen: false,
      page: Page.Home
    }
  }

  handleMenuClose = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: null, menuOpen: false })
  }

  handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: e.currentTarget, menuOpen: true })
  }

  newSelectPageHandler = (page: string) => (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: null, menuOpen: false, page })
  }
  
  newOpenLinkHandler = (url: string) => () => {
    window.open(url)
  }

  get header() {
    const github: string = "https://github.com/calvinfeng/"
    const linkedin: string = "https://www.linkedin.com/in/calvin-feng/"

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
            <MenuItem onClick={this.newSelectPageHandler(Page.Home)} disabled={this.state.page == Page.Home}>
              Home
            </MenuItem>
            <MenuItem onClick={this.newSelectPageHandler(Page.AboutMe)} disabled={this.state.page == Page.AboutMe}>
              About Me
            </MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className="title">Calvin Feng</Typography>
          <IconButton color="inherit" aria-label="Menu" onClick={this.newOpenLinkHandler(github)}>
            <GitHub />
          </IconButton>
          <IconButton color="inherit" aria-label="Menu" onClick={this.newOpenLinkHandler(linkedin)}>
            <img height="30px" src="/static/logos/linkedin.svg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }

  get body() {
    switch(this.state.page) {
      case Page.Home:
        return <Home />
      case Page.AboutMe:
        return <AboutMe />
      default:
        return <Home />
    }
  }

  render() {
    return (
      <section className="index">
        {this.header}
        {this.body}
      </section>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})