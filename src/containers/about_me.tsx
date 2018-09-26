import * as React from 'react'
import Post from "../components/post"
import "./about_me.scss"


type Props = {

}

type State = {

}

class AboutMe extends React.Component<Props, State> {
  get content() {
    const URLs: string[] = ["/static/markdowns/lorem_ipsum.md"]
    const posts = URLs.map((url) => {
      return <Post markdownURL={url} />
    })

    return (
      <section className="content">
        {posts}
      </section>
    )
  }
}