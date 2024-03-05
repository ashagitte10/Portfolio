import React from "react";
const Home = () => {
    return (
   <>
            {/* <div className="container">
   <img src="../photo.png" style={{height:"100%",width:"50%"}}></img>

   <div className="justify-content-center">
   <h3>Hi there! i'am</h3>
   
    <h1>Software Engineer</h1>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Rem commodi iure sit odit hic sed eum quod voluptatum velit illum.</p>
     
    <button className="btn" style={{border:"1px solid black"}} >Download CV</button>
    </div>
    </div> */}

            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src="../photo.png" ></img>
                </div>
                <div className="col-6" style={{backgroundColor:"lightpink", paddingTop:"150px"}}>
                    <h3>Hi there! i'am</h3>
                    <h1>Software Engineer</h1>
                    <p> I believe in continuous learning and staying updated with the 
                        latest industry trends. I'm not just a Engineer; 
                        I'm a Innovative Thinker! 
                        My approach involves innovative ideas, ensuring that every project 
                        I undertake is a success.
</p>
                    <button className="btn border border-2 "> <a className="text-decoration-none" href="../233151193_20231020_R.pdf" download>Download CV</a></button>
                </div>
                </div>
            </>
            )
}

            export default Home;