import React from 'react';

export default function Data_grid_view() {
    return (
    <div style={{ background:"#E9E8E8", height:"43.3%", width:"100%" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"12.5%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
                <div style={{ lineHeight:"20px" }}>&#160;&#160;Data grid View</div>
        </div>
        <div style={{ boder:"2px solid red",background:"",height:"87.5%",width:"100%",margin:"auto",overflow:"auto"}}>
            <table style={{ width:"100%",textAlign:"center",fontSize:"8pt" }}>
                <thead style={{  }}>
                    <tr style={{ background:"white",width:"100%",top:0 }} >
                        <th >ID</th>
                        <th style={{ width:"9%" }}>Name</th>
                        <th style={{ width:"9%" }}>PO</th>
                        <th style={{ width:"9%" }}>SO</th>
                        <th style={{ width:"9%" }}>SKU</th>
                        <th style={{ width:"9%" }}>Order qty</th>
                        <th style={{ width:"9%" }}>Bad qty</th>
                        <th style={{ width:"9%" }}>Setup time</th>
                        <th style={{ width:"9%" }}>Running</th>
                        <th style={{ width:"9%" }}>Label used</th>
                        <th style={{ width:"9%" }}>Label scrap</th>
                    </tr>
                </thead>

                <tbody style={{ width:"100%",height:"300px",border:"1.5px solid black" }}>
                    <tr >
                        <td>R6767</td>
                        <td>Pham Hông</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>R6767</td>
                        <td>Pham Hông Phuc</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr >
                        <td>R6767</td>
                        <td>Pham Hông</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>R6767</td>
                        <td>Pham Hông Phuc</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr >
                        <td>R6767</td>
                        <td>Pham Hông</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>R6767</td>
                        <td>Pham Hông Phuc</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr >
                        <td>R6767</td>
                        <td>Pham Hông</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>R6767</td>
                        <td>Pham Hông Phuc</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>

                    <tr >
                        <td>R6767</td>
                        <td>Pham Hông</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>R6767</td>
                        <td>Pham Hông Phuc</td>
                        <td>RFSB1234-1234</td>
                        <td>1234214-2</td>
                        <td>3</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                        <td>123</td>
                        <td>1</td>
                        <td>12</td>
                    </tr>
                </tbody>
                <tfoot style={{ display:"fixed" }}>
                    <tr style={{ background:"#1F2739",color:"white",boder:"1px solid black" }} >
                        <td colSpan={3} style={{ width:"9%",textAlign:"left" }}>&#160;&#160;Total</td>
                        <td style={{ width:"9%" }}>123</td>
                        <td style={{ width:"9%" }}>123</td>
                        <td style={{ width:"9%" }}>+</td>
                        <td style={{ width:"9%" }}>+</td>
                        <td style={{ width:"9%" }}>+</td>
                        <td style={{ width:"9%" }}>+</td>
                        <td style={{ width:"9%" }}>+</td>
                        <td style={{ width:"9%" }}>+</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    // <div style={{ background:"#B4C1CB", height:"43.3%", width:"100%" }}>
    //     <div className="" style={{ background:" #B4C1CB ", height:"12.5%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%"}}>
    //         <div style={{ lineHeight:"20px" }}>&#160;&#160;Data grid View</div>
    //     </div>

    //     <div className="" style={{ background:"#B4C1CB", height:"12%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"7pt", lineHeight:"100%",textAlign:"center"}}>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left" }}>ID</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Name</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>PO</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>SO</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>SKU</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Order qty</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Bad qty</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Setup time</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Runing time</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#F5F6F7",float:"left",marginLeft:"0.8px" }}>Label used</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#F5F6F7",float:"right",marginLeft:"0.8px" }}>Label scrap</div>
    //     </div>

    //     <div style={{ height:"62%", width:"100%" }}>
    //         <div className="" style={{ background:"#B4C1CB", height:"20%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"7pt", lineHeight:"100%",textAlign:"center",marginTop:"0.5px"}}>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left" }}>R6767</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>Phạm Hồng Phúc</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>RFSB2101-1234</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>45612378-1</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>2</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>20,000</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>100</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>50</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>180</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>2000</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#E9E8E8",float:"right",marginLeft:"0.8px" }}>122</div>
    //         </div>
    //         <div className="" style={{ background:"#B4C1CB", height:"20%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"", fontSize:"7pt", lineHeight:"100%",textAlign:"center",marginTop:"1px"}}>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}>12</div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9%", background:"#E9E8E8",float:"left",marginLeft:"0.8px" }}></div>
    //             <div style={{ lineHeight:"20px",height:"100%",width:"9.1%", background:"#E9E8E8",float:"right",marginLeft:"0.8px" }}></div>
    //         </div>
    //     </div>

    //     <div className="" style={{ background:"#E9E8E8", height:"12.9%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%",textAlign:"center",marginTop:"1px", borderBottom:"1px solid black"}}>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left"}}>Total</div>
    //         <div style={{ lineHeight:"20px",height:"100%",width:"27.29%", background:"#1F2739",float:"left",marginLeft:"" }}></div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.4px" }}>+</div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}>+</div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9%", background:"#1F2739",float:"left",marginLeft:"0.8px" }}></div>
    //         <div style={{ color:"#E9E8E8",lineHeight:"20px",height:"100%",width:"9.1%", background:"#1F2739",float:"right",marginLeft:"1px" }}></div>
    //     </div>
    // </div>          
    );
};
