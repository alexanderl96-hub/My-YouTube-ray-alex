import React, { Component } from 'react'
import YoutubeApi from './YoutubeApi.js'
import {Link} from 'react-router-dom'



export default class Home extends Component {
    constructor(){
        super()
        /* Nice use of state, as well as componentDidMount lifecycle method to set state
        and handle errors */
        this.state={
            videos: [],
            searchvideo:'',
            videosid: '',
            isError: false,
            nowplay: [],
            redisplay: false,
            randomvid: [],
            APIError: false
        }
    }
    async componentDidMount(){
        /*
        Nice use of try/catch to handle errors for you API requests.
        */
        try{
            const random = await YoutubeApi.handleApi()
            this.setState({
                randomvid: random,
                APIError: false
            })
        /*
        One way to improve this catch block would be to use the convention `catch(error)` and
        then log `error` to improve error handling
        */
        }catch{
            this.setState({
                APIError: true
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
        const {searchvideo,videos } = this.state
        /*
        Nice use of .map to render a list of linked videos
        */
        const current = videos.map((video)=>{return (
            <Link key={video.id.videoId} to={`/video/${video.id.videoId}`} value={video.snippet.title}>
                <div className="videodisplay">
                    <img src={video.snippet.thumbnails.default.url}  
                    alt={video.snippet.description} 
                    style={{ width:"360px",}} 
                    className='mapvideo' />
                    {/* <h4>{video.snippet.title}</h4> */}
                </div>
                <h4 title={video.snippet.title} description={video.snippet.description}>{video.snippet.title}</h4>
            </Link>
            
            
        )})
    
        return (
            <div className='about'>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                         onChange={this.handleInput}
                         type="text" 
                         placeholder="Search..."
                         value={searchvideo}></input>
                      <button type="submit">Search</button>
                    </form>
                    {current}
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