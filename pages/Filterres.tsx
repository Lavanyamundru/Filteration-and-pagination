import React from 'react'

import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import moment from 'moment';

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }
// ];

const computedTodos = [
  {
    userId: 1,
    id: 1,
    Title: "delectus aut autem",
    completed: false,
    date: new Date("10-07-2021"),
  },
  {
    userId: 1,
    id: 2,
    Title: "quis ut nam facilis et officia qui",
    completed: true,
    date: new Date("10-10-2021"),
  },
  {
    userId: 1,
    id: 3,
    Title: "fugiat veniam minus",
    completed: false,
    date: new Date("07-10-2021"),
  },
  {
    userId: 1,
    id: 4,
    Title: "rerum veniam amet",
    completed: true,
    date: new Date("07-09-2021"),
  },
  {
    userId: 1,
    id: 5,
    Title: "vero rerum temporibus dolor",
    completed: false,
    date: new Date("10-22-2022"),
  },
  {
    userId: 2,
    id: 6,
    Title: "et doloremque nulla",
    completed: false,
    date: new Date("02-20-2022"),
  },
  {
    userId: 2,
    id: 7,
    Title: "ab voluptatum amet voluptas",
    completed: true,
    date: new Date("10-02-2022"),
  },
  {
    userId: 2,
    id: 8,
    Title: "veritatis pariatur delectus",
    completed: false,
    date: new Date("03-15-2022"),
  },
  {
    userId: 2,
    id: 9,
    Title: "laborum aut in quam",
    completed: true,
    date: new Date("05-25-2022"),
  },
  {
    userId: 2,
    id: 10,
    Title: "repudiandae totam in est sint facere fuga",
    completed: false,
    date: new Date("02-04-2022"),
  },
  {
    userId: 3,
    id: 11,
    Title: "sint sit aut vero",
    completed: false,
    date: new Date("06-15-2022"),
  },
  {
    userId: 3,
    id: 12,
    Title: "totam quia non",
    completed: true,
    date: new Date("08-13-2022"),
  },
  {
    userId: 3,
    id: 13,
    Title: "totam atque quo nesciunt",
    completed: false,
    date: new Date("09-19-2022"),
  },
  {
    userId: 3,
    id: 14,
    Title: "nam qui rerum fugiat accusamus",
    completed: true,
    date: new Date("10-05-2022"),
  },
  {
    userId: 3,
    id: 15,
    Title: "sit reprehenderit omnis quia",
    completed: false,
    date: new Date("12-25-2021"),
  },
  {
    userId: 4,
    id: 16,
    Title: "deleniti ea temporibus enim",
    completed: true,
    date: new Date("12-20-2021"),
  },
  {
    userId: 4,
    id: 17,
    Title: "aut velit saepe ullam",
    completed: false,
    date: new Date("02-11-2021"),
  },
  {
    userId: 4,
    id: 18,
    Title: "sequi dolorem sed",
    completed: true,
    date: new Date("11-13-2021"),
  },
  {
    userId: 4,
    id: 19,
    Title: "suscipit qui totam",
    completed: false,
    date: new Date("04-25-2021"),
  },
  {
    userId: 4,
    id: 20,
    Title: "et quia ad iste a",
    completed: false,
    date: new Date("05-18-2021"),
  },
];

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'userId', width: 90 },
  {
    field: 'id',
    headerName: 'id',
    width: 150,
    editable: true,
  },
  {
    field: 'Title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'completed',
    headerName: 'completed',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
    valueFormatter: params => 
    moment(params?.value).format("DD/MM/YYYY"),
  },
];


const index = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}></div>
    <Container>
    <Box  sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={computedTodos}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
     
      // disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  </Container>
  </div>
      </div>
    
  )
}

export default index