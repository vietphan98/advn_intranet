import React from 'react';

export default function Menu() {
    const cssMenu = {

    }
    return (
        <div className="" style={{ background: "", height: "100%", width: "3.6%", float: "left" }}>
            <div className="" style={{ background: "#1F2739",height:"72%", width:"100%", textAlign:"center", fontSize:"20pt" }}>
                <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739" }}>
                    <span className="fa fa-home" style={{ color: "#B4C1CB"}}></span>
                </button>
            </div>

            <div className="" style={{ background: "#1F2739",height:"28%", width:"100%", textAlign:"center", fontSize:"20pt"  }}>
                <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739", }}>
                    <span className="fa fa-search" style={{ color: "#B4C1CB"}}></span>
                </button>

                <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739", }}>
                    <span className="fa fa-user" style={{ color: "#B4C1CB"}}></span>
                </button>

                <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739", }}>
                    <span className="fa fa-gears" style={{ color: "#B4C1CB"}}></span>
                </button>

                {/* <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739", }}>
                <span className="fa fa-power-off" style={{ color: "#B4C1CB"}}></span>
                </button> */}
            </div>
        </div>
    );
};