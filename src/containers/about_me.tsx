import * as React from 'react'
import MathJax from 'react-mathjax';
import ReactPlayer from 'react-player'
import { Card, CardHeader, CardMedia, Paper, Grid, CardContent, Typography } from '@material-ui/core'
import "./about_me.scss"

type AboutMeProps = {}
type AboutMeState = {
  background: {
    blochEqn: string,
    londonEqn1: string,
    londonEqn2: string
  }
}

class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  constructor(props) {
    super(props)
    this.state = {
      background: {
        blochEqn: "\\psi(\\vec{r}) = u(r)e^{i k \\cdot \\vec{r}}",
        londonEqn1: "\\frac{\\partial j_{s}}{\\partial t} = \\frac{n_{s} e^{2}}{m} E",
        londonEqn2: "\\nabla \\times j_{s} = -\\frac{n_{s}e^{2}}{m} B"
      }
    }
  }

  get bio() {
    return (
      <section className="bio">
        <Card className="card">
          <CardMedia image="/public/images/snowy.jpg" title="Staring Screen" className="media" />
          <CardContent className="content">
            <Typography variant="headline">
              Brief Introduction
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              I am currently a Senior Software Engineer at Fetch Robotics
            </Typography>
            <Typography variant="body1">
              I primarily work on the backend of fetchcore at Fetch Robotics, such as real-time data
              streaming, data collection on robots, and distributed robotic orchestration.
            </Typography>
          </CardContent>
        </Card>
      </section>
    )
  }

  get quote1() {
    return (
      <section className="quote">
        <Typography variant="caption">Simplicity is prerequisite for reliability</Typography>
      </section>
    )
  }

  get background() {
    const textContent = (
      <CardContent className="text-content">
        <Typography variant="headline">
          My Background
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          Solid State Physics - Superconductivity
        </Typography>
        <Typography variant="body1">
          I studied physics with a specialization in computational physics. My research interest was
          solid-state physics. I was studying how and why do materials go superconducting, i.e its
          electrical resistance drops to zero after reaching a critical temperature with Jorge Hirsch.
          My background heavily influenced my interests in programming. It was my first experience
          of writing a software to solve a real world problem.
        </Typography>
      </CardContent>
    )

    const mathContent = (
      <CardContent className="math">
        <Typography variant="body1" className="eqn">
          <MathJax.Provider>
            <MathJax.Node formula={this.state.background.blochEqn} />
            <MathJax.Node formula={this.state.background.londonEqn1} />
            <MathJax.Node formula={this.state.background.londonEqn2} />
          </MathJax.Provider>
        </Typography>
      </CardContent>
    )

    return (
      <section className="background">
        <Card className="card">
          {textContent}
          {mathContent}
        </Card>
      </section>
    )
  }

  get quote2() {
    return (
      <section className="quote">
        <Typography variant="caption">
          The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard
          chaos as effectively as possible.
        </Typography>
      </section>
    )
  }

  get activities() {
    return (
      <section className="activities">
        <Grid container className="column" direction="column">
          <Grid container className="row" direction="row" spacing={16} justify="center" >
            {this._playingGuitar}
            {this._drivingBoxster}
          </Grid>
        </Grid>
      </section>
    )
  }

  get _playingGuitar() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="Things I do outside of work" subheader="I enjoy playing an instrument." />
          <CardMedia image="/public/images/at-guitar-center.png" title="Surfing" className="media" />
        </Card>
      </Grid>
    )
  }

  get _drivingBoxster() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="Things I do outside of work" subheader="I enjoy driving." />
          <CardMedia image="/public/images/rudolph.jpg" title="Boxster GTS" className="media" />
        </Card>
      </Grid>
    )
  }

  get _traveling() {
    return (
      <Grid item>
        <Card className="long-card">
          <CardHeader title="I am a traveler" subheader="That one time I went to the snowy mountain" />
          <CardMedia image="/public/images/snowy.jpg" title="Snow Monkey Park" className="media" />
        </Card>
      </Grid>
    )  
  }

  render() {
    return (
      <section className="about-me">
        {this.bio}
        {this.quote1}
        {this.background}
        {this.quote2}
        {this.activities}
      </section>
    )
  }
}

export default AboutMe