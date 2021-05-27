import React, { Component } from 'react'
// import {Link, Route} from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className='aboutit'>
                <h2>About</h2>
                <div>
                <h1>Our Youtube App</h1>
                 <p><em>This project is an artifical clone of the application Youtube. The program is built using React<br/> and calls upon the Youtube API
                to render different videos based upon the search query. <br/> A user is able to type into a search bar and after submitting are able to see videos corresponding to that search.</em> </p>
                <div className="collaborators">
                    <div className='profile' style={{float: 'left' }}>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHytxjtRoZ8Kw/profile-displayphoto-shrink_200_200/0/1607012315788?e=1622073600&v=beta&t=pVmt334EG1LgO7aqXUtNEbCCF5B7z-jg72b8fIUwyRo' alt='Ray pic' style={{height: "200px", width: "200px" }}/>
                <h3>Rayvon Finney-Pinkston</h3>
                <p className='parraph'>
                Hey, my name is Ray, I’m 28 from Harlem, NY. I joined Pursuit to gain a better advantage for my son and family and change my career trajectory.  I’m hoping to use my love for tech to be able to transition to an engineering role like I hoped to before I left school. Fun Fact: in college I was the music coordinator for multiple college radio programs. Also im a huge fittted cap collector so anyone out there interested in MLB caps give me a shout!
                </p>
                <a href='https://github.com/rayfinn55' className='git'>Ray's Github</a>
                {/* <Link to='/raysGithub'>Ray's Github</Link>
                <Route path='/raysGithub' component={() => {
                        window.location.href = 'https://github.com/rayfinn55';
                        return null; 
                    }}/> */}
                    </div>
               <div className='profile' style={{float: 'right' }}>
               <img src='https://i.imgur.com/4qMZueg.jpg' alt='Alex Pic' style={{height: "200px", width: "200px" }} />
                <h3>Alexander La Rosa Perez</h3>
                <p className='parraph'>
                I'm from Cuba. I grew up in a family of artists and athletes. I went to a professional training school for dancers, teachers and choreographers and for most of my career I have been working as a professional dancer.  In 2016 I moved to the United States to dance in an Afro Cuban Dance company, however, after moving here have also worked in different spaces such as recycling, construction, electricity, dishwasher, service, while dancing and teaching at the same time. I like music, history, technology in all its aspects
                </p>
                <a href='https://github.com/alexanderl96-hub' className='git'>Alex's Github</a>
                {/* <Link to='/alexGithub'>Alex's Github</Link>
                <Route path='/alexGithub' component={() => {
                            window.location.href  ='https://github.com/alexanderl96-hub'/>)
                             
                             }}/> */}
               </div>
               
                </div>
            </div>
            </div>
                
                
        
        )
    }
}
