import * as React from 'react'
import "./guitar_journey.scss"
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid'
import { Card, Typography, CardMedia, CardContent, Paper } from '@material-ui/core';

type VideoJSON = {
  date?: string
  description?: string
  title?: string
  url: string
}

type VideoGroupJSON = {
  group_title: string
  videos: VideoJSON[]
}

const monthlyProgressRecordings: VideoJSON[] = [
  {
    url: "https://www.youtube.com/watch?v=tjxsubPb_3A",
    title: "Monthly Progress 001",
    date: "2019 September",
    description: "This is my first attempt at Wonderful Tonight by Eric Clapton. I only have an Epiphone PR150 at the moment. I try best my best to play what I can."
  },
  {
    url: "https://www.youtube.com/watch?v=XDyRzfTAsBI",
    title: "Monthly Progress 002",
    date: "2019 October",
    description: "This is Wonderful Tonight with electric guitar for intro and solo. The audio quality is poor because I don't know the proper way recording electric guitar." 
  },
  {
    url: "https://www.youtube.com/watch?v=u2TNvnlBhy0",
    title: "Monthly Progress 003",
    date: "2019 November",
    description: "Wonderful Tonight & 21 Guns. This is a bit of mixed bag. My skill level is a bit limited on both songs. I can only play snippets of them."
  },
  {
    url: "https://www.youtube.com/watch?v=H_qs9Mpl2ek",
    title: "Monthly Progress 004",
    date: "2019 December",
    description: "My first attempt with Now and Forever at 60 BPM. I am having trouble with the Am7 to C Major 7th chord transition."
  },
  {
    url: "https://www.youtube.com/watch?v=WdLsPuKwA1E",
    title: "Monthly Progress 005",
    date: "2020 January",
    description: "This is an almost complete attempt of 21 Guns. I started experimenting with new recording approach."
  }
]

const practiceRecordings: VideoGroupJSON[] = [
  {
    group_title: "2019 October",
    videos: [
      { url: "https://www.youtube.com/watch?v=U4-0h6go0RA" },
      { url: "https://www.youtube.com/watch?v=fu_npFZMHkc" },
      { url: "https://www.youtube.com/watch?v=OeN2GGssoJ4" },
      { url: "https://www.youtube.com/watch?v=_mQIFluFuv8" }
    ]
  },
  {
    group_title: "2019 November",
    videos: [
      { url: "https://www.youtube.com/watch?v=AGhYB0QryhU" },
      { url: "https://www.youtube.com/watch?v=rcOqJuiFrQM" },
      { url: "https://www.youtube.com/watch?v=J3sxA_JeyBo" }
    ]
  },
  {
    group_title: "2019 December",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=emjmvfMPtqs"
      }
    ]
  },
  {
    group_title: "2020 January",
    videos: [
      { url: "https://www.youtube.com/watch?v=tLh_cBTHLOY" },
      { url: "https://www.youtube.com/watch?v=qmrl3do41lo" },
      { url: "https://www.youtube.com/watch?v=4W1_zKsl7wE" },
      { url: "https://www.youtube.com/watch?v=FKmWPsknfuc" }
    ]
  },
  {
    group_title: "2020 February",
    videos: [
      { url: "https://www.youtube.com/watch?v=Nkoxd0XPgyk" },
      { url: "https://www.youtube.com/watch?v=a0tmaY6MabQ" }
    ]
  }
]

type GuitarJourneyProps = {}

type GuitarJourneyState = {}

class GuitarJourney extends React.Component<GuitarJourneyProps, GuitarJourneyState> {

  get introduction() {
    return (
      <Card className="text-card">
        <CardMedia image="/public/images/guitar.jpg" title="Random Guitar" className="media" />
        <CardContent className="content">
          <Typography variant="h4">Guitar Journey</Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>
            A documentary of my learning progress from a beginner to intermediate player
          </Typography>
          <Typography variant="body2" paragraph={true}>
            I was first exposed to guitar when I was around 16. As a teenager, I was lacking the
            discipline to stay focused and practice rigoriously. I took guitar lessons for a year.
            I didn't really pay much attention to music theory or maintain a practice routine. Perhaps
            this is one of those things I wish I could have done better. It was the middle of 2019,
            I discovered Justin Sandercoe's free online guitar course. The lessons are so well
            structured, it motivated me to pick up guitar seriously once again.
          </Typography>
          <Typography variant="body2" paragraph={true}>
            Ever since August, 2019 I've been practicing with a rigorious schedule. I practiced
            strictly at least one hour a day. I wanted to see how far can discipline get me. I
            decided to document my guitar playing. Every month I will record a progress report
            video. The idea of the progress report is to play a song from beginning to end and track
            how far I can go each month. In between every month, I upload a set of practice
            recordings of licks and sections of a song to increase the data granularity. I use
            songs as metric, because I feel this is what most people care about anyways.
          </Typography>
        </CardContent>
      </Card>
    )
  }

  get monthlyProgress() {
    const cards = monthlyProgressRecordings.map((video: VideoJSON) => {
      return <Card key={video.title} className="monthly-video-card ">
        <div className="text-container">
          <Typography gutterBottom variant="h5">{video.title}</Typography>
          <Typography variant="subtitle2">{video.date}</Typography>
          <Typography variant="body2">{video.description}</Typography>
        </div>
        <ReactPlayer controls={true} height={"300px"} light={true} url={video.url}/>
      </Card>
    })

    return <Grid className="monthly-progress-video-grid">
      {cards.reverse().map((card, idx) => <Grid item key={`card-${idx+1}`}>{card}</Grid>)}
    </Grid>
  }

  get practiceRecordingIntroduction() {
    return (
      <Card className="pano-text-card">
        <CardMedia image="/public/images/playingguitar.jpg" title="Guitar Pano" className="media" />
        <CardContent className="content">
          <Typography variant="h5">Random Uploads</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A collection of random uploads from month to month
          </Typography>
        </CardContent>
      </Card>
    )
  }

  get practiceRecordingUploads() {
    const papers = practiceRecordings.map((videoGroup: VideoGroupJSON) => {
      const videoPlayers = videoGroup.videos.map((video: VideoJSON) => {
        return <ReactPlayer controls={true} height={"300px"} light={true} url={video.url} key={video.url}/>
      })
      
      return <Paper key={videoGroup.group_title} className="practice-recording-uploads-paper">
        <div className="practice-recording-uploads-text-container">
          <Typography gutterBottom variant="h6">{videoGroup.group_title}</Typography>
        </div>
        <Grid className="practice-recording-uploads-video-grid">
          {videoPlayers.reverse()}
        </Grid>
      </Paper>
    })

    return papers.reverse()
  }
  
  render() {
    return <section id="guitar-journey">
      {this.introduction}
      {this.monthlyProgress}
      {this.practiceRecordingIntroduction}
      {this.practiceRecordingUploads}
    </section> 
  }
}

export default GuitarJourney