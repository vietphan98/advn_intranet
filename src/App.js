import './App.css';

import Header from "./components/Header";
import Menu from "./components/Menu";
import Data_grid_view from "./components/Data_grid_view";
import Downtime from "./components/Downtime";
import Footer from "./components/Footer";
import Not_scan_out_list from "./components/Not_scan_out_list";
import Null from "./components/Null";
import Production_report from "./components/Production_report";
import Scan_item from "./components/Scan_item";
import Station from "./components/Station";
import Components_Botom from "./components/Components_Bottom";

// font_color: #1F2739 ; background_color: #E9E8E8 fontFamily: "Helvetica, sans-serif" 
function App() {
  return (
    <div className="Main">
      <Header></Header>
      <div className="" style={{ background: "none", height: "90%", width:"100%" }}>

        {/* menu left */}
        <Menu></Menu>
 
        <div className="" style={{ background: "", height: "100%", width: "96.4%",float: "right" }}>

          {/* Encode/ Inkjet */}
          <Station></Station>

          {/* PO-SO */}
          <Scan_item></Scan_item>

          {/* Not scan OUT list */}
          <Not_scan_out_list></Not_scan_out_list>

          {/* Production report */}
          <Production_report></Production_report>

          {/* Downtime */}
          <Downtime></Downtime>

          <div className="" style={{ background: "", height:"47.5%", width:"75.5%", float:"left",borderRight:"1.5px solid"}}>
          {/* Data GridView */}
          <Data_grid_view></Data_grid_view>

          <Components_Botom></Components_Botom>
          </div>

          {/* Null */}
          <Null></Null>  
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
