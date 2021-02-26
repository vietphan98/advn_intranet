import React from 'react';
import ReactScrollTable from 'react-scroll-table';

const tableProps = { 
    backgroundColor: '#E9E8E8',
    borderColor: '#B4C1CB',
    zIndex:1,
    marfin:"auto",
    overflow:"auto",
    columns: [ 
        { 
            header: 'PO', 
            accessor: 'po', 
            width: '30%',
        }, 
        { 
            header: 'SO', 
            accessor: 'so', 
            width: '30%',
        }, 
        { 
            header: '', 
            accessor: 'text', 
            width: '30%',
        }
        
    ], 
    data: [
        {po:"RFSB2021-2",so: '11111122-3', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}, 
        {po:"RFSB2021-2",so: '76891234-2', text: ''}
    ],
    downIcon: <i className="fa fa-down"/>, 
    maxHeight: 110,
    noDataText: 'no data here', 
    shadedColor: '#E9E8E8', 
    textColor: 'black', 
    upIcon: <i className="fa fa-up"/>   
};
export default function Not_scan_out_list() {
    return(
        <div style={{ background: "", height:"19.9%", width:"24.36%", float:"right", lineHeight:"100%",borderBottom:"1.5px solid black", fontFamily:"Helvetica, sans-serif", fontWeight:"",fontSize:"8pt" }}>
            <div className="" style={{ background:" #B4C1CB ", height:"15%", width:"100%", fontSize:"8pt", lineHeight:"100%"}}>
                <div style={{ lineHeight:"20px",fontWeight:"bold" }}>&#160;&#160;Not scan OUT list </div>
            </div>
            <ReactScrollTable {...tableProps} />
            
        </div>
    );
};
// export default function Not_scan_out_list() {
//     return (
//         <div className="" style={{ background: "#E9E8E8", height:"19.9%", width:"24.35%", float:"right", lineHeight:"100%",borderBottom:"1.5px solid black", fontFamily:"Helvetica, sans-serif", fontWeight:"" }}>
//             <div className="" style={{ background:" #B4C1CB ", height:"15%", width:"100%", fontSize:"8pt", lineHeight:"100%"}}>
//                 <div style={{ lineHeight:"20px",fontWeight:"bold" }}>&#160;&#160;Not scan OUT list </div>
//             </div>
//             <div style={{ background:"#B4C1CB", height:"15%", width:"100%", borderBottom:"0.5px solid #B4C1CB", textAlign:"center",fontWeight:"bold", fontSize:"9pt" }}>
//                 <div style={{ background:"white", height:"100%", width:"33%", float:"left", lineHeight:"170%" }}>PO</div>
//                     <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
//                 <div style={{ background:"white", height:"100%", width:"33%", float:"left", lineHeight:"170%" }}>SO</div>
//                     <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
//                 <div style={{ background:"white", height:"100%", width:"33%", float:"right", lineHeight:"170%" }}></div>
//             </div>

//             <div style={{ background:"#B4C1CB", height:"15%", width:"100%", borderBottom:"0.5px solid #B4C1CB",fontSize:"8pt",textAlign:"center"  }}>
//                 <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"left", lineHeight:"200%" }}>RFSB2101-1234</div>
//                     <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
//                 <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"left", lineHeight:"200%" }}>45671239-1</div>
//                     <div style={{ background:"", height:"100%", width:"0.5%", float:"left" }}></div>
//                 <div style={{ background:"#E9E8E8", height:"100%", width:"33%", float:"right", lineHeight:"200%" }}></div>
//             </div>
//         </div>
//     );
// };
