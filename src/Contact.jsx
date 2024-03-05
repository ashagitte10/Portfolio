import React from "react"
const Contact = () => {
    return (
        <>
        <div className="ps-5 pe-5">
            <div className="text-center">
                <h2 className="shadow p-2">Let's Connect</h2>
                <br></br>
                <p>All contact details to get connected</p>
                <div className="text-center ps-3 pe-3 " >
                    I'm always open to new opportunities, collaborations, and interesting projects. If you're looking for someone who is Software Devloper, let's connect and discuss how we can work together to achieve great things.
                    Feel free to explore my portfolio, and don't hesitate to reach out if you have any questions or just want to say hello!
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="text-center border-4">
                <input className="form-control-sm " type="text" placeholder="Your Name" aria-label=".form-control-lg example"></input>
                <br></br>
                <br></br>
                <input className="form-control-sm" type="email" placeholder="Mail ID" aria-label="default input example"></input>
                <br></br>
                <br></br>
                <input className="form-control-sm" type="number" placeholder="Mobile No." aria-label=".form-control-sm example"></input>
                <br></br>

                <br></br>
                <button className="btn border bg-primary">Connect</button>
                <br></br>
                <br></br>
            </div>
            </div>
        </>
    );
}

export default Contact;