import * as React from 'react'
import Post from "../components/post"
import { Card, CardHeader, CardMedia, Paper, Grid } from '@material-ui/core'
import "./about_me.scss"

type AboutMeProps = {}
type AboutMeState = {}

class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  get header() {
    return (
      <Paper className="header" elevation={1}>
        <div className="background-image">
          <img src="/static/images/rudolph.jpg/" />
        </div>
        <div className="foreground-text">
        </div>
      </Paper>
    )
  }

  get content() {
    const URLs: string[] = ["/static/markdowns/lorem_ipsum.md"]
    const posts = URLs.map((url) => {
      return <Post markdownURL={url} />
    })

    return (
      <section className="about-me">
        {posts}
      </section>
    )
  }

  get driving() {
    return (
      <Grid item>
        <Card className="card">
          <CardHeader title="My Hobby" subheader="Driving" />
          <CardMedia image="/static/images/rudolph.jpg" title="Boxster GTS" className="media" />
        </Card>
      </Grid>
    )
  }

  get activities() {
    return (
      <Grid container className="activity-grid" direction="column">
        <Grid container className="grid-row" direction="row" spacing={16} justify="center" >
          {this.driving}
          {this.driving}
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <section className="about-me">
        {this.activities}
      </section>
    )
  }
}

export default AboutMe