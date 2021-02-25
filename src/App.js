import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Not_scan_out_list from './components/Not_scan_out_list';
import Scan_item from './components/Scan_item';
import Station from './components/Station';
import Production_report from './components/Production_report';
import Downtime from './components/Downtime';
import Data_grid_view from './components/Data_grid_view';
import Null from './components/Null';
// font_color: #1F2739 ; background_color: #E9E8E8 fontFamily: "Helvetica, sans-serif" 
function App() {
  return (
    <div className="Main">
      <Header></Header>
      <div className="" style={{ background: "none", height: "90%", width:"100%" }}>
        <Menu></Menu>
        <div className="" style={{ background: "", height: "100%", width: "96.4%",float: "right" }}>
          <Station></Station>
          <Scan_item></Scan_item>
          <Not_scan_out_list></Not_scan_out_list>
          <Production_report></Production_report>
          <Downtime></Downtime>
          <Data_grid_view></Data_grid_view>
          <Null></Null>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
