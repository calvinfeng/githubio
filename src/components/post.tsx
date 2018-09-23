import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import axios from 'axios';

interface PostState {
    markdownTxt: string
}

class Post extends React.Component<any, PostState> {
    constructor(props) {
        super(props);

        this.state = {
            markdownTxt: ""
        }
    }

    componentDidMount() {
        axios.get("markdowns/post_1.md").then((res) => {
            this.setState({ markdownTxt: res.data });
        })
    }

    render() {
        return <ReactMarkdown source={this.state.markdownTxt} />
    }
}

export default Post;