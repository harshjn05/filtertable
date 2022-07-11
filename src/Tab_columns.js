import { Link } from "@material-ui/core";
import './App.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const COLUMNS = [

      {
        headerName: 'Queue',
        field: 'queue',
        filter: true,
        floatingFilter : true,
      },
      {
        headerName: 'Instrument Ref',
        field: 'instr_ref',
        filter: true,
        floatingFilter : true,
      },
      {
        headerName: 'Trade ID',
        field: 'trade_id',
        floatingFilter : true,
        filter: true,
      },
      {
        headerName: 'Trade Version',
        field: 'trade_ver',
        floatingFilter : true,
        filter: true,
      },  
          {
        headerName: 'Doc Version',
        field: 'doc_ver',
        floatingFilter : true,
        filter: true,
      },   
      {
        headerName: 'Trade Date',
        field: 'trade_date', 
        filter: 'agDateColumnFilter',
        floatingFilter : true,

        filterParams:  {
          comparator: (filt, cellValue) => {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[2]),
              Number(dateParts[1]) - 1,
              Number(dateParts[0])
            );
            console.log( cellValue);
            if (filt.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filt) {
              return -1;
            }
            if (cellDate > filt) {
              return 1;
            }
          },
  
  }},
  {
    headerName: ' Business Event',
    field: 'bussiness_event',
    floatingFilter : true,
    filter: true,
  
  },  
  {
    headerName: ' Allotment',
    field: 'allotment',
    floatingFilter : true,
    filter: true,
  },
  {
    headerName: ' SCB Entity',
    field: 'scb_entity',
    floatingFilter : true,
    filter: true,
  },
  {
    headerName: ' Counter Party',
    field: 'counter_party',
    floatingFilter : true,
    filter: true,
  }, 
  {
    headerName: ' Client Type',
    field: 'client_type',
    floatingFilter : true,
    filter: true,
  },
  {
    headerName: 'Affirmation Status',
    field: 'affirmation_status',
    floatingFilter : true,
    filter: true,
  }, 
  {
    headerName: 'Outbound Status',
    field: 'outbound_status',
    floatingFilter : true,
    filter: true,
  }, 
  
 {
    headerName: 'Inbound Status',
    field: 'inbound_status',
    floatingFilter : true,
    filter: true,
  }, 
  {
    headerName: 'OS Days',
    field: 'OS_days',
    floatingFilter : true,
    filter: 'agNumberColumnFilter',
  
  },
  {
    headerName: 'Payment Date',
    field: 'payment_date', 
    filter: 'agDateColumnFilter',
    floatingFilter : true,

    filterParams:  {
      comparator: (filt, cellValue) => {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        console.log( cellValue);
        if (filt.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filt) {
          return -1;
        }
        if (cellDate > filt) {
          return 1;
        }
      },

}},
{
    headerName: 'Currency',
    field: 'ccy',
    floatingFilter : true,
    filter: true,
  }, 
  {
    headerName: 'Valuation Date',
    field: 'valuation_date', 
    filter: 'agDateColumnFilter',
    floatingFilter : true,

    filterParams:  {
      comparator: (filt, cellValue) => {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        console.log( cellValue);
        if (filt.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filt) {
          return -1;
        }
        if (cellDate > filt) {
          return 1;
        }
      },
    }},
      {
        headerName: 'Dispatch Date',
        field: 'dispatch_date', 
        filter: 'agDateColumnFilter',
                floatingFilter : true,

        filterParams:  {
          comparator: (filt, cellValue) => {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[2]),
              Number(dateParts[1]) - 1,
              Number(dateParts[0])
            );
            console.log( cellValue);
            if (filt.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filt) {
              return -1;
            }
            if (cellDate > filt) {
              return 1;
            }
          },
}},
{
    headerName: 'Instrument Name',
    field: 'instrument_name', 
    floatingFilter : true,
    filter: true,
  }, 

  {
    headerName: ' Draft Owner',
    field: 'draft_owner',
    floatingFilter : true,
    filter: true,
  }, 
  {
    headerName: ' Check Owner',
    field: 'check_owner',
    floatingFilter : true,
    filter: true,
    
  }, 
  {
    headerName: 'Comment',
    field: 'draft_owner',
    cellRenderer:rowData=><div>
    <Popup contentStyle={{width: "300px"}} trigger={<button> Read Comment </button>} 
      >
      <div>{rowData.data.draft_owner}</div>
    </Popup>
</div>
  },
  {
    headerName: 'Download File',
    field: 'instr_ref',
    cellRenderer:rowData=><Link href={`https://google.com?userid=${rowData.data.trade_id}`} target="_blank"><button >Download</button></Link>,
    pinned: 'right'
  },
  ]
  
  