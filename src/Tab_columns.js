import { Link } from "@material-ui/core";
export const COLUMNS = [
    {
        headerName: 'Id',
        field: 'id',
        sortable: true,
        filter:  'agNumberColumnFilter',
        floatingFilter : true,
    
      },
      {
        
        headerName: 'First Name',
        field: 'first_name',
        filter: true,
        floatingFilter : true,
      },
      {
        headerName: 'Last Name',
        field: 'last_name',
        filter: true,
        floatingFilter : true,
    
      },
    
      {
        headerName: 'Phone',
        field: 'contact no',
        floatingFilter : true,
        filter: 'agNumberColumnFilter',
      
      },
        {
          headerName: 'Email',
          field: 'email'
        },
      {
        headerName: 'Gender',
        field: 'gender',
    
      },
      { field: 'Date',  filter: 'agDateColumnFilter',
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
        headerName: 'IP Address',
        field: 'ip_address',
    
      },
      {
        headerName: 'Initial_Balance',
        field: 'Initial balance',
        sortable:true,
        filter: 'agNumberColumnFilter',
        filterParams:  {
            comparator: (filt, cellValue) => {
              var dateAsString = cellValue;
              if (dateAsString == null) return -1;
              var dateParts = dateAsString.slice(1,dateAsString.length());
              var cellDate = Number(dateParts)
              if (filt === cellDate) {
                return 0;
              }
              if (cellDate < filt) {
                return -1;
              }
              if (cellDate > filt) {
                return 1;
              }
            },
    
    }
      },
    
      {
        headerName: 'Company',
        field: 'Company name',
        filter: 'agSetColumnFilter',

      },
      {
        headerName: 'HyperLink',
        field: 'Department',
        cellRenderer:rowData=><Link href={`https://google.com`} target="_blank">Google</Link>,
        pinned: 'right'
    
      },
      
  
  ]
  
  