import React from 'react';

export default function Scan_item() {
    return (
        <div className="" style={{ background: "#E9E8E8", height:"19.9%", width:"75.5%", float:"left", lineHeight:"100%",borderRight:"1.5px solid black",borderBottom:"1.5px solid black" }}>
            {/* PO - SO - Button */}
            <div className="" style={{ background:"", height:"100%", width:"26%", float:"left" }}>
              <div className="" style={{ background:"", height:"25%", width:"100%" }}>
                <div className="" style={{ background: "white", height:"60%",width:"92.4%", margin:"5% 0 0 5%"}}>
                  <div className="" style={{  background:"#B4C1CB", height:"100%", width:"8%", float:"left", textAlign:"center",fontFamily: "Helvetica, sans-serif" }}>
                    
                  </div>
                  <div className="" style={{  lineHeight:"20px",background:"", height:"100%", width:"17%", float:"left", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>PO</div>
                  <div className="" style={{  background:"", height:"100%", width:"75%", float:"right", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>
                    <input style={{ textAlign:"center",height:"16px",border:"0px solid white" }} value="RFHT2102-1088-FR" ></input>
                  </div>
                </div>
              </div>

              <div className="" style={{ background:"", height:"25%", width:"100%"}}>
                <div className="" style={{ background: "white", height:"63%",width:"92.4%", margin:"1% 0 0 5%"}}>
                  <div className="" style={{  background:"#B4C1CB", height:"100%", width:"8%", float:"left", textAlign:"center",fontFamily: "Helvetica, sans-serif" }}>
                  </div>
                  <div className="" style={{  lineHeight:"20px",background:"", height:"100%", width:"17%", float:"left", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>SO</div>
                  <div className="" style={{  background:"", height:"100%", width:"75%", float:"right", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>
                  <input style={{ textAlign:"center",height:"18px",border:"0px solid white" }} value="43215678-1" />
                  </div>
                </div>
              </div>

              <div className="" style={{ background:"", height:"42%", width:"100%" }}>
                <div className="" style={{ background:"", height:"100%", width:"21%",float:"left" }}>
                  <button className="" style={{ border:"0 solid",background:"#B4C1CB", height:"60%",width:"65%",margin: "12% 0 0 22%",textAlign:"center",fontSize:"20pt" }}>
                    <span className="fa fa-rotate-right" style={{ color:"black", size:"50pt",marginTop:"10%" }}></span>
                  </button>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"20%",float:"left" }}>
                  <div className="" style={{ boder:"0 solid",background:"#B4C1CB", height:"62%",width:"67%",margin: "12% 0 0 17%"}}>
                    
                  </div>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"20%",float:"left" }}>
                  <div className="" style={{ background:"#B4C1CB", height:"62%",width:"68%",margin: "12% 0 0 16%", }}></div>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"20%",float:"left" }}>
                  <div className="" style={{ background:"#B4C1CB", height:"61%",width:"67%",margin: "12% 0 0 16%", }}></div>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"19%",float:"left" }}>
                  <div className="" style={{ background:"#B4C1CB", height:"61%",width:"72%",margin: "12% 0 0 13%", }}></div>
                </div>
              </div>
            </div>

            {/* Item RBO GPM Quantily SKU UP */}
            <div className="" style={{ background:"#E9E8E8", height:"100%", width:"25.5%", float:"left", fontFamily: "Helvetica, sans-serif", fontSize: "8pt", fontWeight: ""}}>
              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"7.5% 0 0 3%", float:"left"}}>&#160;&#160;Item</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"7.5% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="IDCode" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;RBO</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;GPM</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;Quantily</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;SKU</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;UP</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                <input style={{ height:"9px",width:"140px",fontSize:"9pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

            </div>

            {/* GPM CRD PD */}
            <div className="" style={{ background:"#E9E8E8", height:"100%", width:"21.5%", float:"left", fontFamily: "Helvetica, sans-serif", fontSize: "8pt", fontWeight: "" }}>
              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"8.7% 0 0 3%", float:"left"}}>&#160;&#160;GPM</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"8.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"116px",fontSize:"8pt",textAlign:"center" }} value="GPM" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;CRD</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.8% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"116px",fontSize:"8pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;PD</div>
                <div className="" style={{ lineHeight:"10px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                    <input style={{ height:"9px",width:"116px",fontSize:"8pt",textAlign:"center" }} value="" disabled></input>
                </div>
              </div>
            </div>

            {/* REPRINT SCAN  */}
            <div className="" style={{ background:"", height:"100%", width:"27%", float:"right", borderBottom:" 1px solid",fontWeight:"" }}>

              <div className="" style={{ background:"#E9E8E8", height:"41%", width:"100%" ,borderRight:" 1px solid"}}>

                <div className="" style={{ background:"", height:"100%", width:"27%", float:"left" }}>
                  <button className="" style={{ border:"0.5px solid", borderRadius: "5px 5px", fontSize:"7pt",fontFamily: "Helvetica, sans-serif",text:"center", height:"65%",width:"95%", marginLeft:"13%", marginTop:"22.5%", fontWeight:"bold" }}>REPRINT</button>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"73%", float:"right" }}>
                  <button className="" style={{ background:"#1F2739",border:"0 solid", borderRadius: "5px 5px", fontSize:"10pt",fontFamily: "Helvetica, sans-serif",text:"center", height:"65%",width:"85%", marginLeft:"7%", marginTop:"8%", fontWeight:"bold" }}><p2 style={{ color:"yellow" }}>SCAN IN</p2><p2 style={{ color: "#F5F6F7" }}>/</p2> <p2 style={{ color:"orange" }}>OUT</p2></button>
                </div>

              </div>

              <div className="" style={{ background:"#E9E8E8", height:"59%", width:"100%",borderRight:" 1px solid", fontFamily: "Helvetica, sans-serif", fontSize: "8pt" }}>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"2.1% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;IN</div>
                  <div className="" style={{ lineHeight:"5px",background: "white", height:"100%",width:"66%", margin:"2.1% 0 0 3%", float:"right"}}>
                      <input style={{ height:"8px",width:"148px",fontSize:"8pt",textAlign:"center" }} value="123" disabled></input>
                  </div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;Reprint IN</div>
                  <div className="" style={{ lineHeight:"5px",background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}>
                      <input style={{ height:"8px",width:"148px",fontSize:"8pt",textAlign:"center" }} value="" disabled></input>
                  </div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;OUT</div>
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"right"}}>
                    <div style={{ background:"white", height:"100%", width:"90%", float:"left" }}>
                        <input style={{ height:"8px",width:"148px",fontSize:"8pt",textAlign:"center" }} value="" disabled></input>
                    </div> 
                  </div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;Reprint OUT</div>
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.8% 0 0 3%",lineHeight:"130%", float:"right"}}>
                    <div style={{ background:"white", height:"100%", width:"90%", float:"left" }}>
                        <input style={{ height:"8px",width:"148px",fontSize:"8pt",textAlign:"center" }} value="RFSB-2021" disabled></input>
                    </div>
                  </div>
                </div>  

              </div>

            </div>
        </div>
    );
};