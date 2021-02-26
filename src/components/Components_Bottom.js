import React from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Traceability from './components_bottom/Traceability';
import Checklist from './components_bottom/Checklist';

export default function Components_Bottom() {

    return (
<Tabs style={{ background:"#E9E8E8", height:"56.5%", width:"100%" }}>
    <TabList style={{ background:"", height:"11%", width:"100%", fontFamily:"Helvetica, sans-serif", fontWeight:"bold", fontSize:"8pt", lineHeight:"100%", textAlign:"center",borderBottom:"1.5px solid #AFADAD"}}>
          <Tab style={{ lineHeight:"5px",background:"#B4C1CB", height:"20%",width:"9%",float:"left" }}>Traceability</Tab>
          <Tab style={{ lineHeight:"5px",background:"#B4C1CB", height:"20%",width:"9%",float:"left",marginLeft:"0.8px" }}>Checklist</Tab>
          <Tab style={{ lineHeight:"5px",background:"#B4C1CB", height:"20%",width:"9%",float:"left",marginLeft:"0.8px" }}>Locator</Tab>
          <Tab style={{ lineHeight:"5px",background:"#B4C1CB", height:"20%",width:"9%",float:"left",marginLeft:"0.8px" }}>Quality</Tab>
          <Tab style={{ lineHeight:"5px",background:"#B4C1CB", height:"20%",width:"49.69%",float:"right",marginLeft:"0.8px" }}></Tab>
    </TabList>

    <TabPanel style={{ background:"#E9E8E8", height:"80%", width:"26.5%", float:"left", fontSize:"8pt" }}>
        <Traceability></Traceability>  
    </TabPanel>
    <TabPanel style={{ background:"#E9E8E8", height:"80%", width:"26.5%", float:"left", fontSize:"8pt" }}>
        <Checklist></Checklist> 
    </TabPanel>
    
</Tabs>
    );
};
