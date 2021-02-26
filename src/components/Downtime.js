import React from 'react';

export default function Downtime() {
    return (
        <div className="" style={{ background: "#E9E8E8", height:"25%", width:"24.37%", float:"right", lineHeight:"100%",borderBottom:"1.5px solid black" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"12%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
                <div style={{ lineHeight:"20px",float:"left",width:"42%",height:"100%" }}>&#160;&#160;Downtime </div> 
                <div style={{ float:"rigth", width:"58%",fontSize:"10pt" }}>
                    <button style={{ marginTop:"1.5px",lineHeight:"10px", fontFamily:"Helvetica, sans-serif",background:"#1F2739",height:"16px", color:"#E9E8E8", border:"0px solid", borderRadius:"4px" }}>SAVE</button>
                </div>  
            </div>

            <div className="" style={{ background:"", height:"88%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"8pt", lineHeight:"100%"}}>
              {/* left S1 - S8 */}
              <div style={{ background:"", height:"100%", width:"32%", float:"left" }}>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"5px",fontFamily: "Helvetica, sans-serif"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S1</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S2</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S3</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S4</div> 
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S5</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S6</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S7</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S8</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>

              </div>

              {/* Unscheduled - Scheduled */}
              <div style={{ background:"", height:"100%", width:"36%", float:"left" }}>
                <div style={{ background:"#F5F6F7", height:"45%", width:"96%", marginLeft:"3px", marginTop:"5%" }}>
                  <div style={{ background:"", height:"32%", width:"100%",textAlign:"center",fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"9pt",lineHeight:"270%" }}>Unscheduled</div>
                  <div style={{ background:"", height:"68%", width:"100%" }}>
                    <div style={{ color:"orange",fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"25pt",lineHeight:"110%", marginLeft:"15px",float:"left" }}>30</div>
                    <div style={{ fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"9pt",float:"left", lineHeight:"400%"}}>min</div>
                  </div>
                </div>

                <div style={{ background:"#F5F6F7", height:"45%", width:"96%", marginLeft:"3px", marginTop:"4%"  }}>
                  <div style={{ background:"", height:"32%", width:"100%",textAlign:"center",fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"9pt",lineHeight:"270%" }}>Scheduled</div>
                  <div style={{ background:"", height:"68%", width:"100%" }}>
                    <div style={{ color:"#6EB391",fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"25pt",lineHeight:"110%", marginLeft:"15px",float:"left" }}>120</div>
                    <div style={{ fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"9pt",float:"left", lineHeight:"400%"}}>min</div>
                  </div>
                </div>
              </div>

              {/* left U1 - U8 */}
              <div style={{ background:"", height:"100%", width:"32%", float:"right" }}>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"5px",fontFamily: "Helvetica, sans-serif"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U1</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U2</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U3</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U4</div> 
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U5</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U6</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U7</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U8</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"5px"  }}>
                        <input style={{ height:"9.5px",width:"49px",fontSize:"8pt",textAlign:"center" }}></input>
                    </div>
                </div>

              </div>
            </div>

        </div>
    );
};