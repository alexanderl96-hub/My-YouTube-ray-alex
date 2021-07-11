import React, { Component } from 'react'
import YoutubeApi from './YoutubeApi.js'
import {Link} from 'react-router-dom'



export default class Home extends Component {
    constructor(){
        super()
        this.state={
            videos: [],
            searchvideo:'',
            videosid: '',
            isError: false,
            nowplay: [],
            redisplay: false,
            randomvid: [],
        }
    }
    async componentDidMount(){
        try{
            const random = await YoutubeApi.handleApi()
            this.setState({
                randomvid: random,
                isError: false
            })
        }catch{
            this.setState({
                isError: true
            })
        }
    }

    handleInput = (e)=>{
        e.preventDefault()
       this.setState({
           searchvideo: e.target.value
       })
    }

    handleSubmit= async(e)=>{
        e.preventDefault()
        const { searchvideo} = this.state
          
        
        if(searchvideo){
            const result = await YoutubeApi.getsearch(searchvideo)
            console.log(result)
            
            this.setState({
                videos: result,
                searchvideo: '',
                isError: false,
                nowplay: result[0].id.videoId,
                redisplay: false,
            })
        }else{
            this.setState({
                isError: true
            })
        }
           
    }
    
   
    
    render() {
        const {searchvideo, videos, isError } = this.state
        const current = videos.map((video)=>{return (
            <Link key={video.id.videoId} to={`/video/${video.id.videoId}`} value={video.snippet.title} className= "titlelink">
                <div className="videodisplay">
                    <img src={video.snippet.thumbnails.default.url}  
                    alt={video.snippet.description} 
                    className='mapvideo' />
                </div>
                <h4 title={video.snippet.title} description={video.snippet.description} className= 'fix'>{video.snippet.title} </h4>
            </Link>
            
            
        )})
    
        return (
            <div className='about'>
                <header className="nav">
                    <Link to="/" className="links2">Youtube</Link>
                    <Link to="/about" className="links2">About</Link>
                </header>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                         onChange={this.handleInput}
                         type="text" 
                         placeholder="Search..."
                         value={searchvideo}
                         className="expand"></input>
                      <button type="submit" className="homebutton">Search</button>
                    </form>
                    <div>
                        <h2 className="error">{isError ? "No results found": null}</h2>
                    </div>
                    { current }
                </div>
            </div>
        )
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