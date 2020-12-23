import './MainPage.css';

import enrollhero_logo from './pics/enrollhero_logo.png';
import react_logo from './pics/react_logo.png';
import flask_logo from './pics/flask-logo.png';
import python_logo from './pics/python-logo.png';
import postgresql_logo from './pics/postgresql-logo.png';

import spotify from './pics/spotify.jpg';
import mancala from './pics/mancala.jpg';
import diff from './pics/diff-file.jpg';
import four from './pics/connect-four.jpg';
import march from './pics/march-madness.jpg';

import { useEffect, useState } from 'react';

import Window from './Window';

function MainPage( props ) {

    const activities = ['developing new projects', 'programming', 'building a website', 'analyzing data', 'fixing bugs', 'watching basketball', 'rock climbing', 'jumping off a cliff'];

    const [activity, setActivity] = useState(activities[0]);

    const projects = [
        {
            title: "Mergify",
            pic: spotify,
            desc: "Web app that makes it easy to merge pre-existing playlists together using the Spotify Web API.",
            link: "https://spotify-playlist-merger.herokuapp.com/",
        },
        {
            title: "Mancala",
            pic: mancala,
            desc: "Mancala Game built in C++ for the command line. Includes AI that uses decision tree mechanics.",
            link: "https://github.com/calvincgee/Mancala-Game",
        },
        {
            title: "Diff File Generator",
            pic: diff,
            desc: "Written in C++, contains an algorith to compress diff files to 1/100th of their original size. Utilizes hash tables and recursion.",
            link: "https://github.com/calvincgee/Diff-File-Generator",
        },
        {
            title: "Connect Four",
            pic: four,
            desc: "GUI and command line playable Connect Four game written in Java.",
            link: "https://github.com/calvincgee/connect-four-game",
        },
        {
            title: "CBB Analysis",
            pic: march,
            desc: "Conducted data analysis on past 10 tournaments to analyze how accurately pre-season rankings were at predicting winners.",
            link: "https://www.kaggle.com/calvingee/exploring-how-rankings-affect-march-madness-result",
        },
    ]
    
    useEffect(() => {
        let index = 1;
        let changeActivity = setInterval(() => {setActivity(activities[index % activities.length]); index++;}, 2000);
    }, []);

    return(
        <div className = {props.display || "mainpage"}>
            <div className="header">
                <h1>Hi! My name is</h1>
                <h1 id="name">Calvin</h1>
                <div className="activity">
                <p>I am currently</p>
                <div className="border">
                    <p id="activityBox">{activity}</p>
                </div>
                </div>
                <div className="linkArea">
                <h3>Links:</h3>
                <a href = 'https://github.com/calvincgee?tab=repositories' target="_blank">Github</a>
                <a href = 'https://www.kaggle.com/calvingee' target="_blank">Kaggle</a>
                <a href = 'https://www.linkedin.com/in/calvin-gee/' target="_blank">LinkedIn</a>
                </div>
            </div>
            <div className="main">
                <div className="current">
                <h2>What's in the works</h2>
                <div style = {{display: "flex", flexDirection: "row"}}>
                    <p>I am currently working as a full stack development intern at EnrollHero. We are building a web application that helps
                        Medicare insurance brokers keep track of their clients and facilitates an easy sign-up process. The project uses React, 
                        Flask, and PostgreSQL.
                    </p>
                    <img src = {enrollhero_logo} alt = 'EnrollHero Logo' width="50px" height="50px"></img>
                </div>
                </div>
                <div className="projects">
                <h2>Projects</h2>
                <div className = "projDisplay">
                    {
                    projects.map(proj => (
                        <Window proj = {proj} key = {proj.title}></Window>
                    ))
                    }
                </div>
                </div>
                <div className="skills">
                <h2>What I like to work with</h2>
                <div className="skills_images">
                    <img src = {react_logo} alt = 'React logo' width="150" height="150"></img>
                    <img src = {python_logo} alt = 'Python logo' width="100" height = "100"></img>
                    <img src = {postgresql_logo} alt = 'Postrgres logo' width="300" height="100"></img>
                    <img src = {flask_logo} alt = 'Flask logo' width="120" height="90"></img>
                </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;