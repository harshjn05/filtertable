import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './DATA12.json'
import React, {useState, useRef, useMemo,} from 'react';
import {COLUMNS} from './Tab_columns';
import img from './logoo.png'

export const Alphaaa =()=>{
    const dataa= data
  const gridRef = useRef();
  const [columnDefs] = useState( COLUMNS)
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,

    };
  }, []);
  const [gridApi, setGridApi] = useState(null);
  const [setGridColumnApi] = useState(null);
  const searchStyle={width:"1000",align: 'center', padding:"5px 20px",borderRadius:5,outline:0,
  border:"2px grey solid",fontSize:"100%"}
    function onGridReady(params) {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
    }
  const onFilterTextChange=(e)=>{
    gridApi.setQuickFilter(e.target.value)
  }
  const onExportClick=()=>{
    gridApi.exportDataAsCsv();
  }
  const user_name='Harsh Jain'
  const BankID='989898'

  return (
    <>
      <div className="head11" >
      <p>Username:<b> {user_name} </b><br/> Bank ID: <b>{BankID} </b></p>
        <img src={img} alt="logo" />
        <h1>Shape EQD Archival GUI<br/></h1>
      </div>
      <hr/>
    <div className='searchbar' >
    <input type="search" style={searchStyle} hidden='true' onChange={onFilterTextChange} placeholder="Search here" />
    <button className='btn'  onClick={()=>onExportClick()}>Export Trade Data</button>
</div>
    <div style={{height: '100'}}>

      <div className="ag-theme-alpine" style={{height: 550}}>
        <AgGridReact ref={gridRef}
            rowData={dataa} animateRows={true} 
            columnDefs={columnDefs} defaultColDef={defaultColDef}  
            pagination={true}
            alwaysShowHorizontalScroll={true}
            domLayout={'fixedHeight'}
            paginationPageSize={50}     
            onGridReady={onGridReady}
            showToolPanel={true}
            />
      </div>
    </div></>
  );
}

