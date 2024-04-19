import React,{ Fragment } from "react"
import { Mycontact2 } from "./Contactus";
import myimg from "./images/img1.png";

 const a = "kumar ";
 const  myimgonline = "https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg";
function Myabout()
{
    return(
        <Fragment>
            <h1>welcome  to react jsppppppppppppppppppp</h1>
            <div >skdjfjksdh fjk hsdjkfhsdname is: {a} </div>
            <div >skdjfjksdh fjk hsdjkfhsdname is: {<h4>ppppppppppppppppp</h4>} </div>
            <div >ooooooooooooooooooooooo is: {<Mycontact2/>} </div>
            <h1>display image from src folder</h1>
            <img src={myimg} alt="imagessdfdsf" width={500}/>
            <h1>display image from public folder</h1>
            <img src="photo/img2.png" width={600} alt="sdfhjdshfjds"/>
            <h1>display image from online link</h1>
            <img src={myimgonline} width={600} alt="sdfsdf"/>
            
        </Fragment>                                                   

        )
}

export default Myabout