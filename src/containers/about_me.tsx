import * as React from 'react'
import Post from "../components/post"
import ReactPlayer from 'react-player'
import { Card, CardHeader, CardMedia, Paper, Grid, CardContent, Typography } from '@material-ui/core'
import "./about_me.scss"

type AboutMeProps = {}
type AboutMeState = {}

class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  get bio() {
    return (
      <section className="bio">
        <Card className="card">
          <CardMedia image="/static/images/working.jpg" title="Boxster GTS" className="media" />
          <CardContent className="content">
            <Typography variant="headline">I SPENT MY TIME</Typography>
            <Typography variant="subheading" color="textSecondary">
              Mostly on pondering the meaning of code with Momo 
            </Typography>
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
            <Typography variant="headline">Background</Typography>
            <Typography variant="subheading" color="textSecondary">
              Solid State Physics - Superconductivity
            </Typography>
            <Typography variant="body2">
              {"$$\\frac{\\partial j_{s}}{\\partial t} = \\frac{n_{s} e^{2}}{m} E$$"}
            </Typography>
            <Typography variant="body2">
              {"$$\\nabla \\times j_{s} = -\\frac{n_{s}e^{2}}{m} B$$"}
            </Typography>
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
        <Grid container className="grid-col" direction="column">
          <Grid container className="grid-row" direction="row" spacing={16} justify="center" >
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