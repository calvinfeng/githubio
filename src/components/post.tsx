import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import { Paper } from '@material-ui/core'
import axios from 'axios';

interface PostState {
  markdownTxt: string
}

interface PostProps {
  markdownURL: string
}

import "./post.scss"
class Post extends React.Component<PostProps, PostState> {
  constructor(props) {
    super(props)

    this.state = {
      markdownTxt: ""
    }
  }

  componentDidMount() {
    axios.get(this.props.markdownURL).then((res) => {
      this.setState({ markdownTxt: res.data });
    })
  }

  render() {
    return (
      <Paper elevation={1} className="material-paper">
        <ReactMarkdown source={this.state.markdownTxt} />
      </Paper>
    )
  }
}

export default Post;