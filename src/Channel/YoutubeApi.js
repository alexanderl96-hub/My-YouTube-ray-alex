import axios from 'axios'
 
// const apiKey = process.env.REACT_APP_API_KEY

// const handlefirst= async(e)=>{
//         const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&part=snippet&maxResults=50`)
//     console.log(data)
//     return  data.items
 
// }

const handleApi= async(e)=>{
    e.preventDefault()
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&part=snippet&maxResults=50`)
    console.log(data)
    return  data.items
 
}
const getsearch =async (userinput) => {
    const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi-oQkFDT7KXTOjGxOtYcl9C45EEHLUjk&type=video&part=snippet&maxResults=48&q=${userinput}`
    )
    return data.items
}
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