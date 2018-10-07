import * as React from 'react'
import MathJax from 'react-mathjax';
import ReactPlayer from 'react-player'
import { Card, CardHeader, CardMedia, Paper, Grid, CardContent, Typography } from '@material-ui/core'
import "./about_me.scss"

type AboutMeProps = {}
type AboutMeState = {
  bio: {
    headline: string,
    subheading: string
  },
  background: {
    headline: string,
    subheading: string,
    londonEqn1: string,
    londonEqn2: string
  }
}

class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  constructor(props) {
    super(props)
    this.state = {
      bio: {
        headline: "HOW I SPEND MY TIME",
        subheading: "I ponder what to name my variables and functions with Momo"
      },
      background: {
        headline: "Background",
        subheading: "Solid State Physics - Superconductivity",
        londonEqn1: "\\frac{\\partial j_{s}}{\\partial t} = \\frac{n_{s} e^{2}}{m} E",
        londonEqn2: "\\nabla \\times j_{s} = -\\frac{n_{s}e^{2}}{m} B"
      }
    }
  }

  get bio() {
    return (
      <section className="bio">
        <Card className="card">
          <CardMedia image="/static/images/working.jpg" title="Boxster GTS" className="media" />
          <CardContent className="content">
            <Typography variant="headline">{this.state.bio.headline}</Typography>
            <Typography variant="subheading" color="textSecondary">{this.state.bio.subheading}</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan tortor ante, varius blandit est
              vestibulum in. Quisque non libero massa.
            </Typography>
          </CardContent>
        </Card>
      </section>
    )
  }

  get background() {
    const textContent = (
      <CardContent className="text-content">
        <Typography variant="headline">{this.state.background.headline}</Typography>
        <Typography variant="subheading" color="textSecondary">{this.state.background.subheading}</Typography>
        <Typography variant="body1">
          I studied physics with a specialization in computational physics. My research was centered on studying how
          and why do materials go superconducting, i.e its electrical resistance drops to zero after reaching a very
          cold temperature. I was interested in learning what determines the critical temperature of such phase 
          transition.
        </Typography>
      </CardContent>
    )

    const videoContent = (
      <CardContent className="video-content">
        <ReactPlayer
          url={"https://www.youtube.com/watch?time_continue=4&v=Xts42tFYRRg"}
          height={"350px"} />
        <Typography variant="body1" className="eqn">
          <MathJax.Provider>
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

  get activities() {
    return (
      <section className="activities">
        <Grid container className="column" direction="column">
          <Grid container className="row" direction="row" spacing={16} justify="center" >
            {this._surfing}
            {this._driving}
            {this._traveling}
          </Grid>
        </Grid>
      </section>
    )
  }

  get _surfing() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="What do I used to do?" subheader="Surf with a GoPro but I'm not that pro" />
          <CardMedia image="/static/images/surfing.jpg" title="Surfing" className="media" />
        </Card>
      </Grid>
    )
  }

  get _driving() {
    return (
      <Grid item>
        <Card className="medium-card">
          <CardHeader title="What do I do besides coding?" subheader="Drive up to the mountains" />
          <CardMedia image="/static/images/rudolph.jpg" title="Boxster GTS" className="media" />
        </Card>
      </Grid>
    )
  }

  get _traveling() {
    return (
      <Grid item>
        <Card className="long-card">
          <CardHeader title="Traveling" subheader="That one time I went to the snowy mountain" />
          <CardMedia image="/static/images/snowy.jpg" title="Snow Monkey Park" className="media" />
        </Card>
      </Grid>
    )  
  }

  get _videography() {
    return (
      <Grid item>
        <Card className="long-card">
          <CardHeader title="What else?" subheader="I actually really enjoy making videos" />
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
        {this.background}
        {this.activities}
      </section>
    )
  }
}

export default AboutMe