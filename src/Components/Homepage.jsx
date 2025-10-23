import React from "react";
import { useState } from "react";
function Homepage() {
    const [fromdata, setfromdata] = useState({
        rawtext: "",
        platform: "",
    });

  return (
    <div>
      <h1>Welcome to the AI Post Generator</h1>
      <p>Create engaging posts with the power of AI!</p>
      <form>
        <h3>Enter Raw Text:</h3>
        <textarea name="rawText" id="Enter your text here..." rows="18" cols="170" value={fromdata.rawtext}>  </textarea>
        <br />
        <h6>Select Platform:</h6>
        <div>
            <input type="checkbox" name="platform" id="Linkedin" value={'Linkedin'} onChange={(e) =>{console.log(e.target.value,e.target.checked)}} />
            <samp>Linkedin</samp>
        </div>   
                <div>
            <input type="checkbox" name="platform" id="Twitter" value={'Twitter'} onChange={(e) =>{console.log(e.target.value,e.target.checked)}}/>
            <samp>Twitter</samp>
        </div>  
                <div>
            <input type="checkbox" name="platform" id="Instagram" value={'Instagram'} onChange={(e) =>{console.log(e.target.value,e.target.checked)}}/>
            <samp>Instagram</samp>
        </div>       
        </form>
    </div>
  );
}
export default Homepage;