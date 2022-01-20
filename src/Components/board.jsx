import Left from "./left"
import Right from "./right"
import { useState } from "react"

import DataBase2 from "./DataBase"


/**Here actual datastructure being created is only this, DataBase
 * the state of Board just refers to this, dataSet refers to this, currentChat refers to part of it, 
 * so, changing this thing will change them, however, as state variable contents the references, which remain unchanged, 
 * so component wont re-render */

const Board = () => {

    var dt = new Date()
    let DataBase = null;
    //
    if (localStorage.getItem("DataBase"))
        DataBase = JSON.parse(localStorage.getItem("DataBase"))
    else {
        DataBase = DataBase2;
        localStorage.setItem("DataBase", JSON.stringify(DataBase));
    }

    console.log("/////////////////",DataBase)

    let [dataSet, setD] = useState(DataBase)
    let [currentChat, setCurrentChat] = useState(null);
    let [c, setC] = useState(0);
    console.log(dataSet)

    //setCurrentChat(dataSet.chat["my background"]);

    let clicker = (element) => {

        let gt = document.getElementsByClassName("mobile")[0]
        if (gt) {
            gt.style.display = "block";
            let lt = document.getElementsByClassName("left")[0]
            lt.style.display="none"
            setTimeout(()=>{
                gt.style.left = "0vh";
                console.log("*********************")
            }, 500)
            
            
        }
        DataBase.chat[element].msgUnvisited = 0;
        localStorage.setItem("DataBase", JSON.stringify(DataBase));
        setD(DataBase);
        setCurrentChat(DataBase.chat[element]);
        console.log("yeeeeeeeeeeeeeeeeeeeeeeey", element, typeof element)
        let h = document.getElementById(element);
        setTimeout(() => {
            h.style.background = "#eeeeee";
        }, 1000)
        console.log("yeeeeeeeeeeeeeeeeeeeeeeey", h, document.getElementsByClassName("headList"))
    }

    let typeActivateChat = (str, Name) => {
        let g = currentChat;
        g.chats.push({
            sender: 1,
            txt: str,
            img: null,
            time: Date().substring(15, 21)
        })

        if (DataBase.chat[Name]) {
            DataBase.chat[Name] = g;
            console.log("DataBaseUpdate?", DataBase)
        }
        else {
            console.log("Error?", DataBase, Name)
        }
        /*react components change state if path to the state variable changes, 
        i.e we set a completely freshly created object(even if that is same to previous one) 
        but changing the contents of the state variable, like adding element to array, and re-setting the state, 
        will not re-render the element

        //here, we see that g is not a new variable, its just a referance to variable currentChat, 
        so any modifications within g are not looked upon as CHANGE for state to re-render, same for database*/

        /**
         * Here, as soon as we update contents of g, current chat and dataSet both get updated, that is, no neet to setState() for modifying state variables!
         * this is because, 
         *  
         */
        localStorage.setItem("DataBase", JSON.stringify(DataBase));

        setC(c + 1);
        /**This is specially to re-render the board item!!! */
        console.log("hhhDataBase", DataBase)
        document.getElementsByClassName("chatArea")[0].scroll(0, 100000);

    }

    return (
        <div className="Board">
            <Left dataSet={dataSet} clicker={(element) => { clicker(element) }} />
            <Right currentChat={currentChat} typeActivateChat={(str, Name1) => { typeActivateChat(str, Name1) }} />
        </div>
    )
}


export default Board;