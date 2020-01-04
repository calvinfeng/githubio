import * as React from 'react'
import { Switch, Route, BrowserRouter, useLocation, useHistory } from "react-router-dom"
import * as ReactDOM from 'react-dom'
import * as  MobileDetect from 'mobile-detect';
import { MenuRounded } from '@material-ui/icons'
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'

import GitHub from "./components/github"
import Home from './containers/home'
import AboutMe from './containers/about_me'
import GuitarJourney from './containers/guitar_journey'
import "./index.scss"

type IndexProps = {}
type IndexState = {
  anchorElement: HTMLElement,
  menuOpen: boolean,
}

enum Path {
  Home = "/",
  AboutMe = "/about",
  GuitarJourney = "/guitarjourney"
}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)
    this.state = {
      anchorElement: undefined,
      menuOpen: false
    }
  }

  handleMenuClose = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: null, menuOpen: false })
  }

  handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElement: e.currentTarget, menuOpen: true })
  }

  newPathNavigateHandler = (path: string) => (e: React.MouseEvent<HTMLElement>) => {
    const history = useHistory()
    history.push(path)
  }
  
  get topbar() {
    const linkedin: string = "https://www.linkedin.com/in/calvin-feng/"
    const linkedinIcon = <IconButton color="inherit" aria-label="Menu" onClick={() => window.open(linkedin)}>
      <img height="30px" src="/public/logos/linkedin.svg" />
    </IconButton>

    const github: string = "https://github.com/calvinfeng/"
    const githubIcon = <IconButton color="inherit" aria-label="Menu" onClick={() => window.open(github)}>
      <GitHub />
    </IconButton>

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
            <HomeMenuItem />
            <AboutMeMenuItem />
            <GuitarJourneyMenuItem />
          </Menu>
          <Typography color="inherit" variant="h6" className="title">Calvin Feng</Typography>
          {githubIcon}
        </Toolbar>
      </AppBar>
    )
  }

  get content() {
    return (
      <Switch>
        <Route exact path={Path.Home}>
          <Home />
        </Route>
        <Route path={Path.AboutMe}>
          <AboutMe />
        </Route>
        <Route path={Path.GuitarJourney}>
          <GuitarJourney />
        </Route>
      </Switch>
    )
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
      <BrowserRouter>
        <section className="index">
          {this.topbar}
          {this.content}
        </section>
      </BrowserRouter>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Index />, document.getElementById("root"))
})

/**
 * TODO: Use generator to create these function components.
 * I tried do higher order function but React complains that it is not returning a React node.
 * What the hell man...
 */

function HomeMenuItem() {
  const history = useHistory();
  const disabled = useLocation() === Path.Home;

  function handleClick() {
    history.push(Path.Home);
  }

  return (
    <MenuItem onClick={handleClick} disabled={disabled}>
      Home
    </MenuItem>
  );
}

function AboutMeMenuItem() {
  const history = useHistory();
  const disabled = useLocation() === Path.AboutMe;

  function handleClick() {
    history.push(Path.AboutMe);
  }

  return (
    <MenuItem onClick={handleClick} disabled={disabled}>
      About Me
    </MenuItem>
  );
}

function GuitarJourneyMenuItem() {
  const history = useHistory();
  const disabled = useLocation() === Path.GuitarJourney;

  function handleClick() {
    history.push(Path.GuitarJourney);
  }

  return (
    <MenuItem onClick={handleClick} disabled={disabled}>
      Guitar Journey
    </MenuItem>
  );
}