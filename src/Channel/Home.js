import React, { Component } from 'react'
// import axios from 'axios'
import YoutubeApi from './YoutubeApi.js'


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
        console.log('estoy')
       this.setState({
           searchvideo: e.target.value
       })
    }

    handleInput= async(e)=>{
        e.preventDefault()
        const { searchvideo, videosid } = this.state
        const pathname = window.location.pathname
        if (
            (pathname === "/about" && searchvideo) ||
            (pathname === `/video/${videosid}` && searchvideo)
          ) {
            this.setState({
              redisplay: true,
            });
        }   
        
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
    
    clearSearch = ()=>{
        this.setState({
            videos: [],
            searchvideo:'',
            isError: false,
        })
    }
        
    getlocations =(location)=>{
        this.setState({
            videosid: location
        })
    }
        
    getvideo =()=>{
        this.setState({
            isError: false
        })
    }
    
    render() {
        const {searchvideo,videos, videosid} = this.state
        const current = videos.map((vid)=>{return <div key={vid.id}value={vid.snippet.title}>
            {vid.snippet.title}
            <img src={vid.snippet.thumbnails.url} alt={vid.snippet.title} /></div>})
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
                    
                    {current}
                </div>
            </div>
        )
    }
}
