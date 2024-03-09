import {useState} from "react"
import './LandingScreen.css'
import data from '../data.json'

function LandingScreen(){


    function clickHandler(e){
        e.preventDefault();
        const paraCount = document.querySelector("#para-count");
        const paraArray = data.paragraph.slice(0, paraCount.value);
        if(paraCount.value > 15){
            alert("Paragraphs are limited here, you can generate maximum 15 paragraphs at a time.")
        }
        setParaData(paraArray);
        paraCount.value = "0"
    }

    const [paraData , setParaData] = useState([]);

    return(
        <div id='container'>
            <header>
                <h1>TIRED OF BORING LOREM IPSUM?</h1>
                <form id="form">
                    <label htmlFor = "para-count">PARAGRAPHS:</label>
                    <input id='para-count' type='number' placeholder="Enter count" defaultValue="0" min={0} max={15}/>
                    <button onClick={(e)=>{
                        clickHandler(e);
                    }}>GENERATE</button>
                </form>
            </header>
            <main id="main">
                {
                    paraData.map((elem,index)=>{
                        return(
                            <p key = {index} className="para">{elem.para}</p>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default LandingScreen;