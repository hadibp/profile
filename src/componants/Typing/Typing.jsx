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
            I  {" "}
            <Typical
        steps={['am ABDUL HADI BP', 3000, 'am a Flutter Developer', 3000, 'Develop mobile apps',3000,'Develop RESTful API in node js',3000,'am an ex-Convener of TECHSIAS' ,3000,'am Currently working in fortlogic pvt. Ltd ,3000]}
        loop={Infinity}
        wrapper="b"
      /></p>
        </div>
        </div>

    )
}

export default Typing
