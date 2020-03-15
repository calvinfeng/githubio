import * as React from 'react'
import "./guitar_journey.scss"
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid'
import { Card, Typography, CardMedia, CardContent, Paper } from '@material-ui/core';

enum VideoOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

type VideoJSON = {
  date?: string
  description?: string
  title?: string
  orientation?: string
  url: string
}

type VideoGroupJSON = {
  group_title: string
  videos: VideoJSON[]
}

class GuitarJourney extends React.Component<{}, {}> {

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
    const config = require('../configs/recordings.json')

    const cards = config['monthly_progress_recordings'].map((video: VideoJSON) => {
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
    const config = require('../configs/recordings.json')
    const papers = config['practice_recordings'].map((videoGroup: VideoGroupJSON) => {
      const videoPlayers = videoGroup.videos.map((video: VideoJSON) => {
        let className;
        if (video.orientation === VideoOrientation.Portrait) {
          className = 'portrait-mode'
        } else {
          className = 'landscape-mode'
        }
        return <div className={className}>
          <ReactPlayer height="300px" controls={true} light={true} url={video.url} key={video.url}/>
        </div>
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