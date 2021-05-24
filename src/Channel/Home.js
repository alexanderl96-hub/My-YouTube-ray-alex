import React, { Component } from 'react'
// import axios from 'axios'
import YoutubeApi from './YoutubeApi.js'


export default class Home extends Component {
    constructor(){
        super()
        this.state={
            videos: {},
            searchvideo:'',
            isError: false
        }
    }
    handleSubmit = (e)=>{
        console.log('estoyaqui')
       this.setState({
           searchvideo: e.target.value
       })
    }
    handleInput= async(userinput)=>{
       
        // const { searchvideo } = this.state
        
            const result = await YoutubeApi.getsearch(userinput)
        console.log(result)
        
        this.setState({
            
        })
        // if(currentvideos !== searchvideo){
        //     this.setState({
        //         videos: {},
        //         searchvideo: "",
        //         isError: true
        //     })
        //  } this.setState({
        //     videos: currentvideos,
        //     searchvideo: "",
        //     isError: false
        // })

        // }catch(e){
        //     this.setState({
        //         videos: {},
        //         searchvideo: "",
        //         isError: true
        //     })
        // }
        
    }
    
    render() {
        const {searchvideo,videos} = this.state
        // const disvideos = videos.map((ved )=> <div key={ved.id} > {ved.id }</div>)
        return (
            <div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                         onChange={this.handleInput}
                         type="text" 
                         id=""
                         placeholder="Search..."
                         value={searchvideo}></input>
                      <button>Search</button>
                    </form>
                    
                    {videos.nextPageToken}
                </div>
            </div>
        )
    }
}
