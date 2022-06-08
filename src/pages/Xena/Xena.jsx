import "./xena.scss"
import { Link } from "react-router-dom"

const Xena = () => {


    return(

        <html>
            <body>

            <div className="bgimg">
                <div className="middle">
               <h2 className="title logo"><Link to="/AnaSayfa"></Link></h2>
                   <hr></hr>
                  <p><b>En Yakın Zamanda Hizmetinizde..</b></p>                 
                
        
                </div> 
            </div>        
        </body>
    </html>

    )



}

export default Xena