import React from "react";
import '../App.css';

function Intro(){
    return(
        <div className="intro">
            <div className="intro-details">
                <p>Hi There 👋. I am</p>
                <h1 className="grad-text" style={{fontSize: "60px", fontWeight: "800"}}>Harsha <br />Arimanda</h1>
                <p>FULL STACK DEVELOPER 😍</p>
                <button className="dnld-btn">Download Resume</button>
            </div>
            <div className="intro-card">
                <pre>1. class Harsha:</pre>
                <pre>2.   def getDetails(self):</pre>
                <pre>3.     self.name = 'Arimanda Harsha Vardhan Reddy'</pre>
                <pre>4.     self.DOB = 21/01/2000</pre>
                <pre>5.     self.skills = &#123;</pre>
                <pre>6.       "Front End": ['HTML', 'CSS', 'JS'],</pre>
                <pre>7.       "Back End": ['Python', 'Node'],</pre>
                <pre>8.       "Database": 'MongoDB',</pre>
                <pre>9.       "API": 'REST API'</pre>
                <pre>10.     &#125;</pre>
                <pre>11.   def printDetails(self):</pre>
                <pre>12.     print(self.name, self.DOB, self.skills, sep="\n")</pre>
                <pre>13.</pre>
                <pre>14. H = Harsha()<br />15. H.printDetails()</pre>
            </div>
        </div>
    )
}

export default Intro;