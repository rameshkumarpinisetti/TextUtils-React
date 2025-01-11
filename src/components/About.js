import React from 'react'
// import React, {useState} from 'react'
// import PropTypes from 'prop-types';
export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let myStyle = {
        color: props.theme === 'dark' ? 'white' : 'black',
        backgroundColor: props.theme === 'dark' ? 'black' : 'white',
    }
  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button "  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
                <p>This is the first item's accordion body.</p> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
                <p>This is the second item's accordion body.</p> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
                <p>This is the third item's accordion body.</p> 
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
        </div> */}
    </div>
  )
}
