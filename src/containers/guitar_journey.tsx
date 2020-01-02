import * as React from 'react'
import "./guitar_journey.scss"
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid'
import { Card, Typography, CardMedia, CardContent } from '@material-ui/core';

type GuitarJourneyProps = {}
type GuitarJourneyState = {}

type VideoJSON = {
    url: string
    title: string
    date: string
    description: string
}

const monthlyProgressVideos: VideoJSON[] = [
  {
    url: "https://www.youtube.com/watch?v=tjxsubPb_3A",
    title: "Monthly Progress 001",
    date: "2019 September",
    description: "This is my first attempt at Wonderful Tonight by Eric Clapton."
  },
  {
    url: "https://www.youtube.com/watch?v=XDyRzfTAsBI",
    title: "Monthly Progress 002",
    date: "2019 October",
    description: "This is Wonderful Tonight with electric guitar for intro and solo." 
  },
  {
    url: "https://www.youtube.com/watch?v=u2TNvnlBhy0",
    title: "Monthly Progress 003",
    date: "2019 November",
    description: "Wonderful Tonight & 21 Guns"
  },
  {
      url: "https://www.youtube.com/watch?v=H_qs9Mpl2ek",
      title: "Monthly Progress 004",
      date: "2019 December",
      description: "My first attempt with Now and Forever at 60 BPM"
  }
]

class GuitarJourney extends React.Component<GuitarJourneyProps, GuitarJourneyState> {

  get introduction() {
    return (
      <section className="introduction">
        <Card className="card">
          <CardMedia image="/public/images/guitar.jpg" title="Random Guitar" className="media" />
          <CardContent className="content">
            <Typography variant="headline">Guitar Journey</Typography>
            <Typography variant="subheading">
              A documentary of my learning progress from a beginner to intermediate player
            </Typography>
            <Typography variant="body1" className="paragraph">
              I started playing guitar when I was 16. I took lessons for about a year and stopped.
              I failed to continue the learning on my own. My progress came to a halt. In college,
              I didn't get to practice a lot due to sound restriction. In the early years of my
              software career, I was mostly focused on sharpening my professional skill. In the middle
              of 2019, I ran into Justin Sandercoe's free online guitar course. It simply kickstarted
              my guitar learning journey once again.
            </Typography>
            <Typography variant="body1" className="paragraph">
              Ever since August, 2019 I've been practicing with a rigorious schedule. I practiced strictly
              at least one hour a day. I wanted to understand how far can discipline get me. I decided
              to document my guitar playing. Every month I will record a progress report video. The idea
              of the progress report is to play a song from beginning to end and see how far can I go.
              In between every month, I upload a set of practice recordings of licks and sections of a song. 
            </Typography>
          </CardContent>
        </Card>
      </section>
    )
  }
    
    get monthlyProgress() {
      const cards = monthlyProgressVideos.map((video: VideoJSON) => {
        return <Card key={video.title} className="video-card">
          <div className="text-container">
            <Typography gutterBottom variant="headline" component="h2">{video.title}</Typography>
            <Typography component="p">{video.date}</Typography>
            <Typography component="p">{video.description}</Typography>
          </div>
          <ReactPlayer
            className="youtube-video"
            controls={true}
            height={"350px"}
            light={true}
            url={video.url} />
        </Card>
      })

      return <Grid className="monthly-progress-grid">
        {
          cards.map((card) => {
            return <Grid item key={card.key}>{card}</Grid>
          })
        }
      </Grid>
    }

    render() {
      return <section id="guitar-journey">
        {this.introduction}
        {this.monthlyProgress}
      </section> 
    }
}

export default GuitarJourney