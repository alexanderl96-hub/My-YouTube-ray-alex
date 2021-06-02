import axios from 'axios'
 
// const apiKey = process.env.REACT_APP_API_KEY

// const handlefirst= async(e)=>{
//         const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&part=snippet&maxResults=50`)
//     console.log(data)
//     return  data.items
 
// }

/*
Never save your API key directly into a url as shown below. I can see that you have 
commented out your REACT_APP_API_KEY environment variable, which makes it clear you
are aware of this and are headed in the right direction! With a little more time I 
know you will acheive this.
*/
const handleApi= async(e)=>{
    e.preventDefault()
        /*
        While this API request works, one way to improve it would be to use string interpolation to
        pass in each URL parameter instead of hard-coding them. Examples of parameters to add dynamically
        to the url string would be `key` as mentioned above, as well as `chart`, `part`, and `maxResults`
        */
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&part=snippet&maxResults=50`)
    console.log(data)
    return  data.items
 
}
const getsearch =async (userinput) => {
    const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&type=video&part=snippet&maxResults=48&q=${userinput}`
    )
    return data.items
}
/*
Generally I do not recommend leaving commented out code in your commits. Instead of commenting it out,
consider waiting to commit until your code works as desired. It is professional best practice to only 
commit working code to a repository.
*/
// const myvideos =async (id)=>{
//     const {data}= await axios.get(`https://www.googleapis.com/youtube/v3/videos?&part=snippet&id=${id}&key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk`)
//     console.log(data.items)
//     return data.items
// }
const display={
    handleApi,
    getsearch,
    // myvideos,
    // handlefirst
}
export default display