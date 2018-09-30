import * as React from 'react'
import Post from "../components/post"
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
        londonEqn1: "$$\\frac{\\partial j_{s}}{\\partial t} = \\frac{n_{s} e^{2}}{m} E$$",
        londonEqn2: "$$\\nabla \\times j_{s} = -\\frac{n_{s}e^{2}}{m} B$$"
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
              vestibulum in. Quisque non libero massa. Integer congue sed nisl id iaculis. Mauris posuere augue eget 
              arcu laoreet, sit amet dignissim nunc fringilla. Aenean scelerisque mattis lacus id iaculis. Nulla 
              facilisi. Morbi pretium arcu euismod interdum sagittis. Vestibulum ante ipsum primis in faucibus orci 
              luctus et ultrices posuere cubilia Curae; Fusce commodo, magna nec rutrum vulputate, odio diam tincidunt 
              leo, sed fermentum metus velit non tortor. Ut non urna sit amet leo dictum sodales. Donec consectetur 
              libero vitae nunc lacinia, vel pharetra urna rhoncus. Aenean blandit faucibus mi nec sodales. Aenean 
              enim ex, commodo vitae est sed, pulvinar cursus purus.
            </Typography>
          </CardContent>
        </Card>
      </section>
    )
  }

  get background() {
    return (
      <section className="background">
        <Card className="card">
          <CardContent className="text-content">
            <Typography variant="headline">{this.state.background.headline}</Typography>
            <Typography variant="subheading" color="textSecondary">{this.state.background.subheading}</Typography>
            <Typography variant="body2">{this.state.background.londonEqn1}</Typography>
            <Typography variant="body2">{this.state.background.londonEqn2}</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan tortor ante, varius blandit est
              vestibulum in. Quisque non libero massa. Integer congue sed nisl id iaculis. Mauris posuere augue eget 
              arcu laoreet, sit amet dignissim nunc fringilla. Aenean scelerisque mattis lacus id iaculis. Nulla 
              facilisi. Morbi pretium arcu euismod interdum sagittis.
            </Typography>
          </CardContent>
          <CardContent className="video-content">
            <ReactPlayer
              url={"https://www.youtube.com/watch?time_continue=4&v=Xts42tFYRRg"}
              height={"350px"} />
          </CardContent>
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
          </Grid>
        </Grid>
      </section>
    )
  }

  get _surfing() {
    return (
      <Grid item>
        <Card className="card">
          <CardHeader title="My Old Hobby" subheader="Surfing" />
          <CardMedia image="/static/images/surfing.jpg" title="Surfing" className="media" />
          <CardContent>
            <Typography component="p">
              Maecenas nunc nisi, laoreet a condimentum sed, hendrerit ut erat. Vivamus ut nunc vel 
              nisi vestibulum convallis. In sed ex aliquet ex mollis scelerisque at nec leo. Donec 
              egestas justo odio, sit amet eleifend velit facilisis quis. Quisque luctus pellentesque 
              elit, ut posuere lectus. Vivamus viverra, urna ut sagittis maximus, neque nisi dapibus 
              lectus, eget bibendum libero urna non diam. Nulla hendrerit nisi ut nibh pellentesque, 
              eu vehicula magna ultricies. Maecenas id molestie sapien. Proin laoreet eget diam a sodales.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  get _driving() {
    return (
      <Grid item>
        <Card className="card">
          <CardHeader title="Current Hobby" subheader="Driving" />
          <CardMedia image="/static/images/rudolph.jpg" title="Boxster GTS" className="media" />
          <CardContent>
            <Typography component="p">
              Maecenas nunc nisi, laoreet a condimentum sed, hendrerit ut erat. Vivamus ut nunc vel 
              nisi vestibulum convallis. In sed ex aliquet ex mollis scelerisque at nec leo. Donec 
              egestas justo odio, sit amet eleifend velit facilisis quis. Quisque luctus pellentesque 
              elit, ut posuere lectus. Vivamus viverra, urna ut sagittis maximus, neque nisi dapibus 
              lectus, eget bibendum libero urna non diam. Nulla hendrerit nisi ut nibh pellentesque, 
              eu vehicula magna ultricies. Maecenas id molestie sapien. Proin laoreet eget diam a sodales.
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