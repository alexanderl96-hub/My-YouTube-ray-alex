import React, { Component } from 'react'
import YouTube from 'react-youtube'
import CommentApp from './CommentApp.js'
import { Link } from 'react-router-dom'
// import Form from "./Form.js"



export default class Videosrender extends Component {
 
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
            },
        }
        return (
            <div className="playervars">
                <Link to="/home" className="arrowBack"><h1 className= "arrow">⬅</h1></Link>
                <YouTube className='videorend' videoId={this.props.match.params.id} opts={opts} />
                <CommentApp />
            </div>
        )
    }
}
