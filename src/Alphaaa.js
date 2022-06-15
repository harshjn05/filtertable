import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './DATA12.json'
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {COLUMNS} from './Tab_columns'

export const Alphaaa =()=>{
    const dataa= data
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState( COLUMNS)
  const sidebar = 'columns'
  const defaultColDef = useMemo( ()=> ( {
    sortable:true,
    filter:true,
    floatingFilter:true
    
  }), []);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const searchDivStyle={backgroundColor:"#dedede",padding:10}
  const searchStyle={width:"1000",padding:"10px 20px",borderRadius:20,outline:0,
  border:"2px #68bf40 solid",fontSize:"100%"}
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

  const savedFilterState = useRef();
/*
  const onBtSave = useCallback( ()=> {
    const filterModel = gridRef.current.api.getFilterModel();
    console.log('Saving Filter Model', filterModel);
    savedFilterState.current = filterModel;
  }, []);

  const onBtApply = useCallback( ()=> {
    const filterModel = savedFilterState.current;
    console.log('Applying Filter Model', filterModel);
    gridRef.current.api.setFilterModel(filterModel);
  }, []);
  */
  return (
    <>
     
     <div class='btn' align='right'> <button onClick={()=>onExportClick()}>Export</button></div>
    <div style={searchDivStyle}>
    <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="Search" />
</div>
    <div style={{height: '100%'}}>

      <div className="ag-theme-alpine" style={{height: 2270}}>
        <AgGridReact ref={gridRef}
            rowData={dataa} animateRows={true} 
            columnDefs={columnDefs} defaultColDef={defaultColDef}  
            pagination={true}
            paginationPageSize={50}     
            onGridReady={onGridReady}
            sideBar={sidebar}
   
            />
      </div>
    </div></>
  );
}

