import React from 'react'
import Typical from 'react-typical'
import './Typing.css'


function Typing() {
    


    return (
        <div>
            <div className="image">
  
            </div>
        <br />
        
        <div className="typing" >
        <p>
            I am {" "}
            <Typical
        steps={['ABDUL HADI BP', 3000, 'Flutter Developer', 3000 ,'Develop mobile apps',3000 ,'Convener of TECHSIAS'  ,3000]}
        loop={Infinity}
        wrapper="b"
      /></p>
        </div>
        </div>

    )
}

export default Typing
