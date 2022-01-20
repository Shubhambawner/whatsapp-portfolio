import right_intro_background from "../img/right_intro_background.JPG"
import smile from "../img/smile.JPG"
import clip from "../img/clip.JPG"
import search from "../img/search.JPG"
import send from "../img/send.JPG"
import send1 from "../img/send.png"
import profile from "../img/profile.jpg"
import user from "../img/user.jpg"
import back from "../img/back.png"

const TextChat = (props) => {
    let tarr = props.text.split("\\")
    let h = tarr.map(element=>{ 
        return(
            <p className="unstyle">{element}</p>
        )
     })
     console.log("--------------------",tarr,h, props.text)
        
     return(<p>{h}{props.link}</p>)
}

const RightHead = (props) => {
    let name = props.current.name
    let img = props.current.img
    let sub = "online"
    let backBtn
    if(window.outerWidth<550 || window.innerWidth<550 ){
        
        backBtn = <img className="imgChat2" src={back} alt="user" onClick={()=>{
            let gt = document.getElementsByClassName("mobile")[0]
            if(gt){ 
                let lt = document.getElementsByClassName("left")[0]
                lt.style.display="block"
            
                gt.style.left = "100vh";
                setTimeout(()=>{
                    gt.style.display="none";
                }, 500)
                
        
            }
        }}></img>
    }
    return (
        <div className="listItem headList" >
            {backBtn}
            <img className="imgChat" src={user} alt="user"></img>
            <div className="centerChat" >
                <h1>{name}</h1>
                <h3>{sub}</h3>
            </div>
            <div className="leftChat">

            </div>
        </div>
    )
}

const MakeChat = (props) => {
    let image = null;
    let link = null;
    if (props.item.img) {
        console.log("i------------------")
        image = <img className="chatImg" src={props.item.img} alt={props.item.img}></img>
    }
    if (props.item.link) {
        console.log("l------------------")
        link = <a href={props.item.link}>{props.item.link}</a>
    }
        


    if(props.item.img){
        if (props.item.sender == 1) {
            return (
                <div className="leftAligner"> 
                    <div className="whiteChat chat">
    
                        {image}
                        <div className="chatAligner subChat">
                        <TextChat link={link} text={props.item.txt} />
                        <u>{props.item.time}</u></div>
                    </div>
                    <div className="triangleGreen"></div>
                    
                </div>
            )
        } else {
            console.log(props.item.sender)
            return (
                <div className="rightAligner">
                    <div className="triangleWhite"></div>
                    <div className="greenChat chat">
    
                        {image}
                        <div className="chatAligner subChat">
                        <TextChat link={link} text={props.item.txt} />
                        <u>{props.item.time}</u></div>
                    </div>
                </div>
            )
        }
    }else{
        if (props.item.sender == 1) {
            return (
                <div className="leftAligner">
                    <div className="whiteChat chat">
    
                        {image}
                        <div className="chatAligner">
                        <TextChat link={link} text={props.item.txt} />
                        <u>{props.item.time}</u></div>
                    </div>
                    <div className="triangleGreen"></div>
                    
                </div>
            )
        } else {
            //console.log(props.item.sender)
            return (
                <div className="rightAligner">
                    <div className="triangleWhite"></div>
                    <div className="greenChat chat">
    
                        {image}
                        <div className="chatAligner">
                        <TextChat link={link} text={props.item.txt} />
                        <u>{props.item.time}</u></div>
                    </div>
                </div>
            )
        }
    }
    
}

const RightBody = (props) => {
    //console.log("rightRerendered!!!")
    let arr = props.chat.map(function (Chat) {
        return (<MakeChat item={Chat} key={Math.random()*1000000} />)
    })
    return (
        <div className="chatArea">{arr}</div>
    )
}

const Typer = (props) => {
    let j1; let j2; let j3; let j4; let j5
    if (props.t1)
        j1 = <div className="ico">
            <img className="ico1" src={props.t1} alt={props.t1}></img>
        </div>
    if (props.t2)
        j2 = <div className="ico">
            <img className="ico1" src={props.t2} alt={props.t2}></img>
        </div>

    let j = <input type="text" className="input" id="special" placeholder={props.t4} ></input>
    //sconsole.log("yyyy", j, j.value)

    if (props.t3)
        j3 = <div className="textBar">
            <div className="ico">
                <img src={props.t3} alt={props.t3}></img>
            </div>
            {j}
        </div>
    else {
        j3 = <div className="textBar">
            {j}
        </div>
    }
    if (props.t5)
        j5 = <div className="ico send"
            onClick={
                () => {
                    props.typeActivate(document.getElementById("special").value, props.Name1);
                    document.getElementById("special").value=""
                    setTimeout(()=>{
                        document.getElementsByClassName("chatArea")[0].scroll(0,100000);
                    }, 500)
                    
                }
            }
        >
            <img className="ico1" src={props.t5} alt={props.t5}></img>
        </div>
    return (
        <div className="typer">
            {j1}
            {j2}
            {j3}
            {j5}
        </div>
    )
}


const Right = (props) => {

    //console.log("r", props)

    let str = "";
    if(window.outerWidth<550 || window.innerWidth<550){
        str = "mobile";
    }
    let hsend;
    if(window.outerWidth<550 || window.innerWidth<550 ){
        hsend = send1;console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    }else{
        hsend = send;
    }
    console.log(hsend)
    if (props.currentChat == null) {
        return (
            <div className={str} id="re">
            <div className="rightIntro right">
                <img className="introImg" src={right_intro_background} alt="welocme"></img>
                <div className="introText1" >
                    <h1 className="underLine">Theme Watsapp web</h1>
                    <h3>A simple portfolio designd in react, based upon the theme of watsapp. Hope you enjoy it!</h3>
                    <h2>Developed by Shubham Bawner</h2>
                </div>
            </div>
            </div>
        )
    }
   

    else return (
        <div className={str} id="re">
        <div className="right">
            <RightHead current={props.currentChat} />
            <RightBody chat={props.currentChat.chats} />
            <Typer Name1={props.currentChat.name}
                t1={smile} t2={clip} t4="Type a message..." t5={hsend}
                typeActivate={(str, Name1) => { props.typeActivateChat(str, Name1) }} />

        </div></div>
    )
}
export default Right;
//"../img/right_intro_background.JPG"