import profile from "../img/chat.JPG"
import userProfile from "../img/profile.jpg"
import nitrr from "../img/nitrr.JPG"
import mhbsc from "../img/mhbsc.JPG"
import icell from "../img/icell.JPG"
import hnitrr from "../img/hnitrr.JPG"
import chessup from "../img/chessup.jpeg"
import iiitpr from "../img/iiitpr.JPG"

let DataBase2 = {
    top: {
        Name: "Shubham",
        img: userProfile,
    },
    chat: {
        "EDUCATION": {
            name: "EDUCATION", //This HAS to be as same as the chat name
            msgUnvisited: 2,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                {
                    sender: 0,
                    txt: "B.Tech (Hons.), IT\\National Institute Of Technology, Raipur\\2020 - 2024"
                    ,
                    img: nitrr,
                    time: "Dec 21",
                    link: "http://www.nitrr.ac.in/"

                },
                {
                    sender: 0,
                    txt: "Senior Secondary (XII), Science\\Dawle Publick School\\(Mah. State board)\\Year of completion: 2020",
                    img: mhbsc,
                    time: "Mar 20",
                    link: null
                }
            ]
        },
        "SKILLS": {
            name: "SKILLS", //This HAS to be as same as the chat name
            msgUnvisited: 6,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                {
                    sender: 0,
                    txt: "ReactJS\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                },
                {
                    sender: 0,
                    txt: "JavaScript\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                },
                {
                    sender: 0,
                    txt: "C++ Programming\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                },
                {
                    sender: 0,
                    txt: "HTML\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                },
                {
                    sender: 0,
                    txt: "CSS/Bootstrap\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                },
                {
                    sender: 0,
                    txt: "Java\\Intermediate",
                    img: null,
                    time: Date().substring(16,21),
                    link: null
                }
            ]
        },
        "POSITIONS": {
            name: "NETWORK AND POSITIONS", //This HAS to be as same as the chat name
            msgUnvisited: 2,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                {
                    sender: 0,
                    txt: "Member(web team) at hack club NIT Raipur"
                    ,
                    img: hnitrr,
                    time: "Dec 21",
                    link: "https://hack-club-nitrr.netlify.app/"

                },
                {
                    sender: 0,
                    txt: "Member(frontend team) at Innovation Cell NIT Raipur",
                    img: icell,
                    time: "Oct 21",
                    link: "http://cdc.nitrr.ac.in/innovationcell.html"
                }
            ]
        },
        "PROJECTS": {
            name: "PROJECTS", //This HAS to be as same as the chat name
            msgUnvisited: 4,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                {
                    sender: 0,
                    txt: "Chess game using react(personal project)"
                    ,
                    img: null,
                    time: "Nov 21",
                    link: "https://chess-up.netlify.app/"

                },
                {
                    sender: 0,
                    txt: "Users(players) can:"+
                    "\\0. Play alternate moves."+
                    "\\1. See the current status of game(who's turn, win , draw)."+
                    "\\2. Undo/redo."+
                    "\\3. Go back and forth in time, i.e move to any previous state of game and come"+
                    "back to any preceding state.",
                    img: chessup,
                    time: "Nov 21",
                    link: "http://cdc.nitrr.ac.in/innovationcell.html"
                },
                {
                    sender: 0,
                    txt: "Web-Watsapp theme (personal project)"
                    ,
                    img: null,
                    time: "Jan 22",
                    link: "https://portfolio-wp.netlify.app/"

                },
                {
                    sender: 0,
                    txt: "Functionality:"+
                    "\\0. UI replicant to watsapp."+
                    "\\1. Localhost sync to the messages"+
                    "\\2. message can be typed to be displayed on chat"+
                    "\\3. React hooks, ",
                    img: null,
                    time: "Jan 22",
                    link: null
                }
            ]
        },
        "EXPERIENCE": {
            name: "EXPERIENCE", //This HAS to be as same as the chat name
            msgUnvisited: 3,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                {
                    sender: 0,
                    txt: "Web Developement Intern at\\IIITPrep Publications"
                    ,
                    img: iiitpr,
                    time: "Oct 21",
                    link: "https://iiitprep.com/"

                },
                {
                    sender: 0,
                    txt: "1. built and integrated Google apps script APIs for database\\2. contributed in web interface developement for online test platform, reactJS\\3.integrated google sheets bakend"
                    ,
                    img: null,
                    time: "Oct 21",
                    link: null

                },
                {
                    sender: 0,
                    txt: "view certificate: ",
                    img: null,
                    time: "Oct 21",
                    link: "https://internshala.com/student/certificate/86091312/033C1DD9-7F3F-0EFD-3EF8-B295D76BDEF3"
                }
            ]
        },
        "ACHIEVEMENTS": {
            name: "ACHIEVEMENTS", //This HAS to be as same as the chat name
            msgUnvisited: 4,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                
                {
                    sender: 0,
                    txt: "Cleared qualification rounds of google code jam and hash code",
                    img: null,
                    time: Date().substring(16,21),
                    link: "https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000004360f1"
                },
                {
                    sender: 0,
                    txt: "Competitive coding: 3 star at codecheff"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: null

                },
                {
                    sender: 0,
                    txt: "8.60 cgpa"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: null

                },
                {
                    sender: 0,
                    txt: "qualified JEE mains and JEE advanced(air ~11000)"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: null

                }
            ]
        },
        "OTHER PROFILES": {
            name: "OTHER PROFILES", //This HAS to be as same as the chat name
            msgUnvisited: 3,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                
                
                {
                    sender: 0,
                    txt: "Github profile"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: "https://github.com/shubhamBawner"

                },
                {
                    sender: 0,
                    txt: "LinkedIn profile",
                    img: null,
                    time: Date().substring(16,21),
                    link: "https://www.linkedin.com/in/shubham-bawner-456131205"
                },
                {
                    sender: 0,
                    txt: "Codecheff profile",
                    img: null,
                    time: Date().substring(16,21),
                    link: "https://www.codechef.com/users/shubham_bawner"
                }
                
                
            ]
        },
        "CONTACT": {
            name: "CONTACT", //This HAS to be as same as the chat name
            msgUnvisited: 3,
            img: userProfile,
            sub: "this text will apear blo name",
            chats: [
                
                {
                    sender: 0,
                    txt: "Email:",
                    img: null,
                    time: Date().substring(16,21),
                    link: "wurtzreaxnwittigreaxn@gmail.com"
                },
                {
                    sender: 0,
                    txt: "Phone"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: "7410730191"

                },
                {
                    sender: 0,
                    txt: "Locations: Alola(Maharashtra), India"
                    ,
                    img: null,
                    time: Date().substring(16,21),
                    link: null

                }

                
                
            ]
        },
    }
}
export default DataBase2;