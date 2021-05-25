import React, { Component } from 'react'

import YoutubeApi from './YoutubeApi.js'
import {Link, Route} from 'react-router-dom'
import Videosrender from "./Videosrender.js"


export default class Home extends Component {
    constructor(){
        super()
        this.state={
            videos: [],
            searchvideo:'',
            videosid: '',
            isError: false,
            redisplay: false,
            randomvid: [],
            APIError: false
        }
    }
    async componentDidMount(){
        try{
            const random = await YoutubeApi.handleApi()
            this.setState({
                randomvid: random,
                APIError: false
            })
        }catch{
            this.setState({
                APIError: true
            })
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
       this.setState({
           searchvideo: e.target.value
       })
    }

    handleInput= async(e)=>{
        e.preventDefault()
        const { searchvideo} = this.state
          
        
        if(searchvideo){
            const result = await YoutubeApi.getsearch(searchvideo)
            console.log(result)
            
            this.setState({
                videos: result,
                searchvideo: '',
                isError: false,
                redisplay: false,
            })
        }else{
            this.setState({
                isError: true
            })
        }
           
    }
    
    // clearSearch = ()=>{
    //     this.setState({
    //         videos: [],
    //         searchvideo:'',
    //         isError: false,
    //     })
    // }
        
    // getlocations =(location)=>{
    //     this.setState({
    //         videosid: location
    //     })
    // }
        
    // getvideo =()=>{
    //     this.setState({
    //         isError: false
    //     })
    // }
    
    render() {
        const {searchvideo,videos, videosid } = this.state
        const current = videos.map((video, id)=>{return <div key={id}value={video.snippet.title} className='videodisplay'>
             {/* <p>{video.snippet.title}</p> <br></br> */}
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}
             onClick={<Link to={'/video/:id'}/>}/><Route path={`/video/:id`} component={Videosrender}/>
            <p>{video.snippet.title}</p>
            </div>})
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleInput}>
                      <input 
                         onChange={this.handleSubmit}
                         type="text" 
                         placeholder="Search..."
                         value={searchvideo}></input>
                      <button type="submit">Search</button>
                    </form>
                    {current  }
                    {/* <Videosrender videosid={videosid}/>  */}
                </div>
            </div>
        )
    }
}
