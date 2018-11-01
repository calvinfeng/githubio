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
          <CardMedia image="/public/images/working.jpg" title="Staring Screen" className="media" />
          <CardContent className="content">
            <Typography variant="headline">
              WHO AM I?
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              I am a Software Engineer at Fetch Robotics
            </Typography>
            <Typography variant="body1">
              I primarily work on the backend cloud services and infrastructure at Fetch. From time to time I write 
              couple ROS nodes here and there.
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
          I came from a physics background
        </Typography>
        <Typography variant="subheading" color="textSecondary">
          Solid State Physics - Superconductivity
        </Typography>
        <Typography variant="body1">
          I studied physics with a specialization in computational physics. My research was focused on studying how
          and why do materials go superconducting, i.e its electrical resistance drops to zero after reaching a very
          cold temperature. My background heavily influenced my interests in programming. As you can see I quote Dijkstra
          pretty often because he's a physicist and one of the first generation computer scientists.
        </Typography>
      </CardContent>
    )

    const videoContent = (
      <CardContent className="video-content">
        <ReactPlayer
          url={"https://www.youtube.com/watch?time_continue=4&v=Xts42tFYRRg"}
          height={"350px"}
          className="player" />
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
          {videoContent}
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
            {this._surfing}
            {this._driving}
          </Grid>
        </Grid>
      </section>
    )
  }

  get _surfing() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="Things I do outside of work" subheader="I am a surfer" />
          <CardMedia image="/public/images/surfing.jpg" title="Surfing" className="media" />
          <CardContent>
            <Typography variant="body1">
              Surfing is an exhaustive activity, hands down the best way to lose weight.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  get _driving() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="Things I do outside of work" subheader="I am a car enthusiast at infancy" />
          <CardMedia image="/public/images/rudolph.jpg" title="Boxster GTS" className="media" />
          <CardContent>
            <Typography variant="body1">
              I really enjoy driving. The next item on my bucket list is to track my car. 
            </Typography>
          </CardContent>
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

  get _videography() {
    return (
      <Grid item>
        <Card className="long-card">
          <CardHeader title="I am a photographer" subheader="I actually really enjoy making videos" />
          <ReactPlayer
              url={"https://www.youtube.com/watch?v=_GiKP-ZMXvQ"}
              width={"1024px"}
              height={"576px"} />
          <CardContent>
            <Typography component="p">
              Why do I enjoy driving? Because I get to make some pretty cool videos with a drone.
            </Typography>
          </CardContent>
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