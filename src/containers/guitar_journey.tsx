import * as React from 'react'
import "./guitar_journey.scss"
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid'
import { Card, Typography } from '@material-ui/core';

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
        {this.monthlyProgress}
      </section> 
    }
}

export default GuitarJourney