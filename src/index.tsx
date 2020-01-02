import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as  MobileDetect from 'mobile-detect';
import GitHub from "./components/github"
import Home from './containers/home'
import AboutMe from './containers/about_me'
import GuitarJourney from './containers/guitar_journey'
import { MenuRounded } from '@material-ui/icons'
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'
import "./index.scss"

type IndexProps = {}
type IndexState = {
  anchorElement: HTMLElement,
  menuOpen: boolean,
  page: string
}

enum Page {
  Home = "HOME",
  AboutMe = "ABOUT_ME",
  GuitarJourney = "GUITAR_JOURNEY"
}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)

    this.state = {
      anchorElement: undefined,
      menuOpen: false,
      page: Page.GuitarJourney
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
            <MenuItem onClick={this.newSelectPageHandler(Page.GuitarJourney)} disabled={this.state.page == Page.GuitarJourney}>
              Guitar Journey
            </MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className="title">Calvin Feng</Typography>
          <IconButton color="inherit" aria-label="Menu" onClick={this.newOpenLinkHandler(github)}>
            <GitHub />
          </IconButton>
          <IconButton color="inherit" aria-label="Menu" onClick={this.newOpenLinkHandler(linkedin)}>
            <img height="30px" src="/public/logos/linkedin.svg" />
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
      case Page.GuitarJourney:
        return <GuitarJourney />
      default:
        return <Home />
    }
  }

  render() {
    const md = new MobileDetect(window.navigator.userAgent);

    if (md.mobile() !== null) {
      return (
        <section className="index">
          <h1>Oops sorry...</h1>
          <h2>Your viewing device is {md.mobile()}</h2>
          <p>
            I haven't gotten the time to implement a mobile version.
            Please visit this page on a desktop/laptop browser.
          </p>
        </section>
      )
    }

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