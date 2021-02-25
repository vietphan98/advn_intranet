import './App.css';
// font_color: #1F2739 ; background_color: #E9E8E8 fontFamily: "Helvetica, sans-serif" 
function App() {
  return (
    <div className="Main">
      <div className="" style={{ background: "", height: "5%", width:"100%" }}> </div>
      <div className="" style={{ background: "none", height: "90%", width:"100%" }}>

        {/* menu left */}
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

            <button style={{ size:"20px",borderRadius:"30px", height:"30px", width:"30px", border:"2px solid #B4C1CB",background:"#1F2739", }}>
              <span className="fa fa-power-off" style={{ color: "#B4C1CB"}}></span>
            </button>
          </div>
        </div>

        
        <div className="" style={{ background: "", height: "100%", width: "96.4%",float: "right" }}>

          {/* Encode/ Inkjet */}
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
          
          {/* PO-SO */}
          <div className="" style={{ background: "#E9E8E8", height:"19.9%", width:"75.5%", float:"left", lineHeight:"100%",borderRight:"1.5px solid black",borderBottom:"1.5px solid black" }}>
            {/* PO - SO - Button */}
            <div className="" style={{ background:"", height:"100%", width:"26%", float:"left" }}>
              <div className="" style={{ background:"", height:"20%", width:"100%" }}>
                <div className="" style={{ background: "white", height:"60%",width:"92.4%", margin:"7.2% 0 0 5%"}}>
                  <div className="" style={{  background:"#1F2739", height:"100%", width:"8%", float:"left", textAlign:"center",fontFamily: "Helvetica, sans-serif" }}>
                    <span className="fa fa-check" style={{ color:"white", lineHeight:"90%" }}></span>
                  </div>
                  <div className="" style={{  background:"", height:"100%", width:"17%", float:"left", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>PO</div>
                  <div className="" style={{  background:"", height:"100%", width:"75%", float:"right", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>RFHT2102-1088-FR</div>
                </div>
              </div>

              <div className="" style={{ background:"", height:"20%", width:"100%"}}>
                <div className="" style={{ background: "white", height:"63%",width:"92.4%", margin:"2.9% 0 0 5%"}}>
                  <div className="" style={{  background:"#B4C1CB", height:"100%", width:"8%", float:"left", textAlign:"center",fontFamily: "Helvetica, sans-serif" }}>
                  </div>
                  <div className="" style={{  background:"", height:"100%", width:"17%", float:"left", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>SO</div>
                  <div className="" style={{  background:"", height:"100%", width:"75%", float:"right", fontFamily: "Helvetica, sans-serif",fontSize:"9pt",fontWeight:"bold",textAlign:"center"  }}>48264862-10</div>
                </div>
              </div>
              
              <div className="" style={{ background:"", height:"42%", width:"100%" }}>
                <div className="" style={{ background:"", height:"100%", width:"21%",float:"left" }}>
                  <div className="" style={{ background:"#B4C1CB", height:"60%",width:"65%",margin: "12% 0 0 22%",textAlign:"center",fontSize:"20pt" }}>
                    <span className="fa fa-rotate-right" style={{ color:"black", size:"50pt",marginTop:"10%" }}></span>
                  </div>
                </div>

                <div className="" style={{ background:"", height:"100%", width:"20%",float:"left" }}>
                  <div className="" style={{ background:"#B4C1CB", height:"62%",width:"67%",margin: "12% 0 0 17%", }}></div>
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
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"7.5% 0 0 3%", float:"right"}}></div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;RBO</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>
              
              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;GPM</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;Quantily</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;SKU</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;UP</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>

            </div>

            {/* GPM CRD PD */}
            <div className="" style={{ background:"#E9E8E8", height:"100%", width:"21.5%", float:"left", fontFamily: "Helvetica, sans-serif", fontSize: "8pt", fontWeight: "" }}>
              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"8.7% 0 0 3%", float:"left"}}>&#160;&#160;GPM</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"8.7% 0 0 3%", float:"right"}}></div>
              </div>

              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;CRD</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>
              
              <div className="" style={{ height:"11.5%",width:"94%"}}>
                <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%", float: "left"}}>&#160;&#160;PD</div>
                <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
              </div>
            </div>

            {/* REPRINT SCAN  */}
            <div className="" style={{ background:"", height:"100%", width:"27%", float:"right", borderBottom:" 1px solid" }}>
              
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
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"2.1% 0 0 3%", float:"right"}}></div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;Reprint IN</div>
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%", float:"right"}}></div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;OUT</div>
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"right"}}>
                    <div style={{ background:"white", height:"100%", width:"90%", float:"left" }}></div> 
                    <div style={{ background:"#1F2739", height:"100%", width:"10%", float:"right", fontSize:"10pt",lineHeight:"5%"}}>
                      <span className="fa fa-times" style={{ color:"white", margin:"0 20% 0 18%"}}></span>
                    </div>
                  </div>
                </div>

                <div className="" style={{ height:"17%",width:"94%"}}>
                  <div className="" style={{ background: "white", height:"100%",width:"28%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"left"}}>&#160;&#160;Reprint OUT</div>
                  <div className="" style={{ background: "white", height:"100%",width:"66%", margin:"0.7% 0 0 3%",lineHeight:"130%", float:"right"}}>
                    <div style={{ background:"white", height:"100%", width:"90%", float:"left" }}></div> 
                    <div style={{ background:"#1F2739", height:"100%", width:"10%", float:"right", fontSize:"10pt",lineHeight:"5%"}}>
                      <span className="fa fa-times" style={{ color:"white", margin:"0 20% 0 18%"}}></span>
                    </div>
                  </div>
                </div>  

              </div>

            </div>
          </div>
          
          {/* Not scan OUT list */}
          <div className="" style={{ background: "#E9E8E8", height:"19.9%", width:"24.35%", float:"right", lineHeight:"100%",borderBottom:"1.5px solid black", fontFamily:"Helvetica, sans-serif", fontWeight:"" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"15%", width:"100%", fontSize:"8pt", lineHeight:"100%"}}>
                <div style={{ lineHeight:"20px",fontWeight:"bold" }}>&#160;&#160;Not scan OUT list </div>
            </div>
            <div style={{ background:"#B4C1CB", height:"15%", width:"100%", borderBottom:"0.5px solid #B4C1CB", textAlign:"center",fontWeight:"bold", fontSize:"9pt" }}>
                <div style={{ background:"white", height:"100%", width:"33%", float:"left", lineHeight:"170%" }}>PO</div>
                    <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
                <div style={{ background:"white", height:"100%", width:"33%", float:"left", lineHeight:"170%" }}>SO</div>
                    <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
                <div style={{ background:"white", height:"100%", width:"33%", float:"right", lineHeight:"170%" }}></div>
            </div>

            <div style={{ background:"#B4C1CB", height:"15%", width:"100%", borderBottom:"0.5px solid #B4C1CB",fontSize:"8pt",textAlign:"center"  }}>
                <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"left", lineHeight:"200%" }}>RFSB2101-1234</div>
                    <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
                <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"left", lineHeight:"200%" }}>45671239-1</div>
                    <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
                <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"right", lineHeight:"200%" }}></div>
            </div>
          </div>
          
          {/* Production report */}
          <div className="" style={{ background: "", height:"25%", width:"75.5%", float:"left", lineHeight:"100%",borderBottom:"1.5px solid black", borderRight: "1.5px solid black" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"12%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
              <div style={{ lineHeight:"20px" }}>&#160;&#160;Production report</div>
            </div>
            <div style={{ background:"", height:"88%", width:"100%" }}>
              {/* component 1 */}
              <div style={{ background:"#E9E8E8", height:"100%", width:"26.5%", float:"left", fontSize:"8pt" }}>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"6px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Good qty</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Bad qty</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>U11</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>U9</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Note</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
              </div>
              
              {/* component 2 */}
              <div style={{ background:"#E9E8E8", height:"100%", width:"25.5%", float:"left",fontSize:"8pt" }}>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"6px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"219px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"24%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"76%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>

              </div>
              
              {/* component 3 */}
              <div style={{ background:"#E9E8E8", height:"100%", width:"34%", float:"left ",fontSize:"8pt" }}>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"6px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"295px",marginLeft:"10px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"20%",float:"left",textAlign:"center",lineHeight:"180%" }}></div>
                    <div style={{ background:"white", height:"100%",width:"80%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
              </div>
              
              {/* component 4 */}
              <div style={{ background:"#E9E8E8", height:"100%", width:"14%", float:"right " }}>
                <div className="" style={{ background:"", height:"30%", width:"70%",textAlign:"center" }}>
                  <button className="" style={{ background:"#1F2739",border:"0 solid", borderRadius: "5px 5px", fontSize:"9pt",fontFamily: "Helvetica, sans-serif",lineHeight:"20%", height:"33px",width:"95px", marginLeft:"15px", marginTop:"6px", fontWeight:"bold",color:"#F5F6F7" }}><span className="fa fa-rotate-right" style={{ color:"white",marginTop:"3%" }}></span> SAVE</button>
                </div>

                <div className="" style={{ background:"", height:"30%", width:"70%",textAlign:"center" }}>
                  <button className="" style={{ background:"#F5F6F7",border:"1px solid black", borderRadius: "5px 5px", fontSize:"9pt",fontFamily: "Helvetica, sans-serif",lineHeight:"20%", height:"33px",width:"95px", marginLeft:"15px", marginTop:"3px", fontWeight:"bold",color:"black" }}><span className="fa fa-rotate-right" style={{ color:"black",marginTop:"3%" }}></span> REQUEST</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Downtime */}
          <div className="" style={{ background: "#E9E8E8", height:"25%", width:"24.37%", float:"right", lineHeight:"100%",borderBottom:"1.5px solid black" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"12%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
              <div style={{ lineHeight:"20px" }}>&#160;&#160;Downtime </div>
            </div>

            <div className="" style={{ background:"", height:"88%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"8pt", lineHeight:"100%"}}>
              {/* left S1 - S8 */}
              <div style={{ background:"", height:"100%", width:"30%", float:"left" }}>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"5px",fontFamily: "Helvetica, sans-serif"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S1</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}>Có</div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S2</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S3</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S4</div> 
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S5</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S6</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S7</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>S8</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
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
              <div style={{ background:"", height:"100%", width:"34%", float:"right" }}>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"5px",fontFamily: "Helvetica, sans-serif"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U1</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}>Có</div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U2</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U3</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U4</div> 
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U5</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U6</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U7</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"11%", width:"88%", marginLeft:"7px", marginTop:"1px"}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"32%",float:"left",textAlign:"center",lineHeight:"180%" }}>U8</div>
                    <div style={{ background:"white", height:"100%",width:"68%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>

              </div>
            </div>

          </div>
        
          {/* Data GridView */}
          <div className="" style={{ background: "", height:"47.5%", width:"75.5%", float:"left",borderRight:"1.5px solid"}}>
            <div style={{ background:"#B4C1CB", height:"43.3%", width:"100%" }}>
              <div className="" style={{ background:" #B4C1CB ", height:"12.5%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
                <div style={{ lineHeight:"20px" }}>&#160;&#160;Data grid View</div>
              </div>
              
              <div className="" style={{ background:"#B4C1CB", height:"12%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"7pt", lineHeight:"100%",textAlign:"center"}}>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left" }}>ID</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Name</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>PO</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>SO</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>SKU</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Order qty</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Bad qty</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Setup time</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Runing time</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Label used</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#F5F6F7",float:"right",marginLeft:"0.8px" }}>Label scrap</div>
              </div>

              <div style={{ height:"62%", width:"100%" }}>
                <div className="" style={{ background:"#B4C1CB", height:"20%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"7pt", lineHeight:"100%",textAlign:"center",marginTop:"0.5px"}}>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left" }}>R6767</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>Phạm Hồng Phúc</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>RFSB2101-1234</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>45612378-1</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>2</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>20,000</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>100</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>50</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>180</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>2000</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#E9E8E8",float:"right",marginLeft:"0.8px" }}>122</div>
                </div>
                <div className="" style={{ background:"#B4C1CB", height:"20%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"7pt", lineHeight:"100%",textAlign:"center",marginTop:"1px"}}>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>12</div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
                  <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#E9E8E8",float:"right",marginLeft:"0.8px" }}></div>
                </div>
              </div>

              <div className="" style={{ background:"#E9E8E8", height:"12.1%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"7pt", lineHeight:"100%",textAlign:"center",marginTop:"1px", borderBottom:"1px solid black"}}>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left"}}>Total</div>
                <div style={{ lineHeight:"20px",height:"100%",width:"27.29%", background:"#1F2739",float:"left",marginLeft:"" }}></div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.4px" }}>+</div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}></div>
                <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9.1%", background:"#1F2739",float:"right",marginLeft:"1px" }}></div>
              </div>
            </div>
            
            {/* #B4C1CB */}
            <div style={{ background:"#E9E8E8", height:"56.5%", width:"100%" }}>
              <div className="" style={{ background:"black", height:"11%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%", textAlign:"center",borderBottom:"1.5px solid #AFADAD"}}>
                <div style={{ background:"#E9E8E8",lineHeight:"20px", height:"100%",width:"9%",float:"left",borderBottom:"1.5px solid #E9E8E8" }}>Traceability</div>
                <div style={{ background:"#B4C1CB",lineHeight:"20px", height:"100%",width:"9%",float:"left",marginLeft:"0.8px" }}>Checklist</div>
                <div style={{ background:"#B4C1CB",lineHeight:"20px", height:"100%",width:"9%",float:"left",marginLeft:"0.8px" }}>Locator</div>
                <div style={{ background:"#B4C1CB",lineHeight:"20px", height:"100%",width:"9%",float:"left",marginLeft:"0.8px" }}>Quality</div>
                <div style={{ background:"#B4C1CB",lineHeight:"20px", height:"100%",width:"63.65%",float:"right",marginLeft:"0.8px" }}></div>
              </div>
            
              <div style={{ height:"88%",width:"100%" }}>
                <div style={{ background:"#E9E8E8", height:"100%", width:"26.5%", float:"left", fontSize:"8pt" }}>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"6px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Ink type</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Lot No.</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Reprint GPM 1</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Reason</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>SKU</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Reprint GPM 2</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>Reason</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
                <div style={{ background:"", height:"15.5px",width:"222px",marginLeft:"16px",marginTop:"1px", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:""}}>
                    <div style={{ background:"#F5F6F7", height:"100%",width:"27%",float:"left",textAlign:"center",lineHeight:"180%" }}>SKU</div>
                    <div style={{ background:"white", height:"100%",width:"73%",float:"right",textAlign:"center",lineHeight:"180%"  }}></div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Null */}
          <div className="" style={{ background: "#f5f5f0", height:"47.5%", width:"24.3%", float:"right" }}></div>
        </div>
      </div>
      <div className="" style={{ background: "white", height: "5%", width:"100%" }}> </div>
    </div>
  );
}

export default App;
