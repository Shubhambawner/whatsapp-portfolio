import userProfile from "../img/user.jpg"
import download from "../img/download.png"
import download2 from "../img/download1.png"
import Resume from "../img/Resume.pdf"

const LeftTop = (props)=>{
    let img ;
    if(window.outerWidth<550 || window.innerWidth<550) img = download;
    else img = download2;
    return(
        
        <div className="listItem headList2">
            <img className="imgChat" src = {userProfile} alt="me"></img>
            <div className="centerChat" >
                <h1>SHUBHAM BAWNER</h1>
                <h3>Web enthusiast, NIT Raipur.</h3>
            </div>
            <div className="leftChat">
                <a href={Resume}>Download</a>
                <img  className="imgChat2 icon" src={img} alt="status"></img>
            </div>
        </div>
    )
}

const ListItem = (props)=>{
    console.log(props.data.img,"gggg")
    let sub = ""
    sub=props.data.chats[0].txt
    if(props.data.msgUnvisited==0){
        return(
            <div className="listItem" id={props.tg} onClick={()=>{props.clicker(props.tg)}}>
                <img className="imgChat" src={props.data.img} alt="user"></img>
                <div className="centerChat underLine2" >
                    <h1>{props.data.name}</h1>
                    <h3>{sub}</h3>
                </div>
                <div className="leftChat underLine2">
                    <h4>{Date().substring(16,21)}</h4>
                    
                </div>
            </div>
        )
    }else{
        return(
            <div className="listItem" id={props.tg} onClick={()=>{props.clicker(props.tg)}}>
                <img className="imgChat" src={props.data.img} alt="user"></img>
                <div className="centerChat underLine2" >
                    <h1>{props.data.name}</h1>
                    <h3>{sub}</h3>
                </div>
                <div className="leftChat underLine2">
                    <h4>{Date().substring(16,21)}</h4>
                    <div className="round">{props.data.msgUnvisited}</div>
                </div>
            </div>
        )
    }
    
}

const Chatlist = (props)=>{
    let list = [];
    for(let i in props.chat){
        console.log(i);
        list.push( <ListItem data={props.chat[i]} tg={i} clicker={(element)=>{props.clicker(element)}} key={Math.random()*1000000}/> )
    }
    return(
        <div className="lister">{list}
        </div>
    )
}

const Left = (props)=>{
    return(
        <div className="left">
            <LeftTop/>
            <Chatlist chat = {props.dataSet.chat} clicker={(element)=>{props.clicker(element)}} />
            <div className="reset" onClick={() => {localStorage.clear();window.location.reload();}} style={{"cursor":"pointer"}}>reset chat</div>
        
        </div>
    )
}
export default Left;