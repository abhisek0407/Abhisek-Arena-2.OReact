import React from 'react'
import mainpic from "../assets/pic1.jpg";
import './Main.css'
const Main = () => {
  return (
    <div className='maincont'>
        <section>
        <div style={{
            backgroundImage: `url(${mainpic})`,
            // backgroundSize: "cover",
             backgroundPosition: "center",
             height: "100vh",
             width: "50vw",
             backgroundRepeat: "no-repeat"
        }}>

        </div>
        </section>
    </div>
  )
}

export default Main
