import React from 'react';

export default function Station() {
    return (
        <div className="" style={{ background: "none", height:"7%", width:"100%", borderBottom:"1.5px solid black" }}>

            <div className="" style={{ background:"#B4C1CB",width:"100%", height:"100%",lineHeight:"200%" }}>
                <div style={{ color:"#1F2739", padding: "0.77% 0 0 1%",float:"left",height:"76.8%", width:"23%", background:"#B4C1CB",fontSize:"17.25pt", fontWeight: "bold", fontFamily: "Helvetica, sans-serif" }}>
                ENCODE/ INKJET</div>

                <div className="" style={{ background:"none", width:"23%", float:"left", height:"100%" }}>
                  <div className="" style={{ background:"none", height:"100%", width:"84%", float:"left" }}>

                    <div className="" style={{ background:"none", height:"51%", width:"100%", lineHeight:"100%" }}>
                      <div className="" style={{  color:"#413F3F",marginLeft:"12px",lineHeight:"310%", background:"none", height:"90%",float:"left", width:"13%",fontSize:"8pt",fontFamily: "Helvetica, sans-serif", fontWeight:"bold" }}>DATE</div>
                      <div className="form-control" style={{ width: "81%", float: "right", height:"90%", lineHeight: "150.2%",size: "50%" }}>
                        <input type="DATE" className="form-control" style={{padding:"1px 0 0 1px", marginLeft: "0.5%", height:"65%", width:"95%", fontSize:"10pt"}}></input>
                      </div>
                    </div>

                    <div className="" style={{ background:"none", height:"49%", width:"100%", lineHeight:"100%" }}>
                      <div className="" style={{  color:"#413F3F",marginLeft:"11.2px",lineHeight:"200%", background:"none", height:"90%",float:"left", width:"13%",fontSize:"8pt",fontFamily: "Helvetica, sans-serif", fontWeight:"bold" }}>SHIFT</div>

                      <div style={{ marginLeft:"1.4%",width: "24%", float: "left", height:"90%", lineHeight: "90%",size: "50%" }}>
                        <select className="form-control form-control-sm" style={{ width:"100%", fontSize: "9pt" }} >
                          <option selected></option>
                          <option>Ca 1</option>
                          <option>Ca 2</option>
                        </select>
                      </div>

                      <div style={{  color:"#413F3F ",lineHeight:"200%", background:"none", height:"90%",float:"left", width:"20%",fontSize:"8pt",fontFamily: "Helvetica, sans-serif",marginLeft:"1%", fontWeight:"bold" }}>MACHINE</div>

                      <div style={{ marginRight:"1.6%",width: "32%", float: "right", height:"90%", lineHeight: "",size: "50%" }}>
                        <select className="form-control form-control-sm" style={{ width: "100%"}} >
                          <option selected></option>
                          <option>Luser 1</option>
                          <option>Luser 2</option>
                        </select>
                      </div>

                    </div>

                  </div>
                  <div className="" style={{ background:"none", height:"100%", width:"16%", float:"right" }}>
                    <div className="" style={{ textAlign: "center", lineHeight:"292%" }} >
                      <button className="" style={{ height: "36px", width: "36px", borderRadius:"7px",background:"#1F2739", border: "0" }}>
                        <span className="fa fa-users" style={{ color: "white", fontSize:"14pt" }}></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="" style={{ background:"none", width:"45%", float:"left", height:"100%" }}></div>

                <div className="" style={{ background:"none", width:"8%", float:"right", height:"100%" }}>
                  <div className="" style={{ color: "#413F3F",background: "none", height:"38%", width:"100%", fontFamily:"Helvetica, sans-serif", fontSize:"8pt", fontWeight:"bold", lineHeight: "2.2", marginLeft: "4%"}}>TOTAL TIME</div>
                  <div className="" style={{ background: "none", height:"62%", width:"100%" }}>
                    <div className="" style={{ color: "#413F3F",background:"", height:"100%", width:"55%", fontSize:"24pt", fontWeight:"bold", fontFamily:"Helvetica, sans-serif", lineHeight:"0.9", marginLeft:"4%", float:"left" }}>720</div>
                    <div className=""  style={{ color: "#413F3F",background: "none", height:"38%", width:"100%", fontFamily:"Helvetica, sans-serif", fontSize:"7pt", fontWeight:"bold", lineHeight: "4.8", marginLeft: "0.5px" }}>min</div>
                  </div>
                </div>
            </div>
        </div>
    );
};