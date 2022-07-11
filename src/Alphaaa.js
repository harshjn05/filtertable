import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './DATA12.json'
import React, {useState, useRef, useMemo,} from 'react';
import {COLUMNS} from './Tab_columns';


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
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const searchDivStyle={backgroundColor:"#dedede",padding:5}
  const searchStyle={width:"1000",padding:"5px 20px",borderRadius:5,outline:0,
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

  return (
    <>

    <div style={searchDivStyle}>
    <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="Search here" />
    <button className='btn' style={{float: 'right'}} onClick={()=>onExportClick()}>Export Trade Data</button>
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

