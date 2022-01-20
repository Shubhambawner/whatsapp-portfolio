import Board from "./Components/board";

if(window.outerWidth<550 || window.innerWidth<550){
    alert("For mobile phones, The website is under construction. Please view on desktop for best experience")
}

 const App = ()=>{
    return(
        <div className="background">        
        <Board/>
        </div>
    )
}

export default App;