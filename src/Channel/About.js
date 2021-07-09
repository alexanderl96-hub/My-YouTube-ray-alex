import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className='aboutit'>
                <header className="nav">
                    <Link to="/" className="links2">Youtube</Link>
                    <Link to="/home" className="links2">Home</Link>
                    <Link to="/about" className="links2">About</Link>
                </header>
                <h2 className="about1">About</h2>
                <div>
                   <h1>Our Youtube App</h1>
                    <p className="about2"><em>This project is an artifical clone of the application Youtube. The program is built using React<br/> and calls upon the Youtube API
                    to render different videos based upon the search query. <br/> A user is able to type into a search bar and after submitting are able to see videos corresponding to that search.</em> </p>
                    <div className="collaborators">
                        <div className='profile' style={{float: 'left' }}>
                            <img src='https://avatars.githubusercontent.com/u/75263151?v=4' alt='Ray pic' style={{height: "200px", width: "200px" }}/>
                            <h3 className="about3">Rayvon Finney-Pinkston</h3>
                            <p className='parraph'>
                            Hey, my name is Ray, I’m 28 from Harlem, NY. I joined Pursuit to gain a better advantage for my son and family and change my career trajectory.  I’m hoping to use my love for tech to be able to transition to an engineering role like I hoped to before I left school. Fun Fact: in college I was the music coordinator for multiple college radio programs. Also im a huge fittted cap collector so anyone out there interested in MLB caps give me a shout!
                            </p>
                            <a href='https://github.com/rayfinn55' className='git'>Ray's Github</a>
                        </div>
                        <div className='profile' style={{float: 'right' }}>
                            <img src='https://i.imgur.com/4qMZueg.jpg' alt='Alex Pic' style={{height: "200px", width: "200px" }} />
                            <h3 className="about3">Alexander La Rosa Perez</h3>
                            <p className='parraph'>
                            I'm from Cuba. I grew up in a family of artists and athletes. I went to a professional training school for dancers, teachers and choreographers and for most of my career I have been working as a professional dancer.  In 2016 I moved to the United States to dance in an Afro Cuban Dance company, however, after moving here have also worked in different spaces such as recycling, construction, electricity, dishwasher, service, while dancing and teaching at the same time. I like music, history, technology in all its aspects
                            </p>
                            <a href='https://github.com/alexanderl96-hub' className='git'>Alex's Github</a>
                        </div>
                    </div>
                </div>
            </div>
                
                
        
        )
    }
}
