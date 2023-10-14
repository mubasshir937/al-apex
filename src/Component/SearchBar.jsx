// import React , { useState } from 'react';

// function SearchBar() {

//     // const [input, setInput] = useState ("");
//     const [searchQuery, setSearchQuery] = useState('');

//     const fetchData = (value) => {
//         fetch("http://localhost:8081/lead_management") .then ((response) => response.json()).then(json => {
//             console.log(json);
//         })
//      }

//      const search = (value) => {
//       console.log(value); setSearchQuery (value)
//     }

//     // const handleChange = (value) => {
//     //     setInput (value)
//     //     fetchData(value)
//     // }

//     const handleSearchClick = () => {
//         console.log('Searching for:', searchQuery);
//     }

//   return (
//     <div className='input-wrapper' style={{marginLeft:"52rem"}}>
//       <input
//         placeholder="Type to search..."
//         value={searchQuery}
//         onChange={(e) => search(e.target.value)}
//       />
//       <button onClick={handleSearchClick}>Search</button>
//     </div>

//   )
// }

// export default SearchBar

/////////////////////////////////////////////////////////////////////

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";




function sleep(delay = 0) {

  // let searchTerm = req.body.search;
  // connection.query('SELECT * FROM user WHERE first_name LIKE ?' ['%' +searchTerm +'%'],(err, rows) =>{
  // connection .release();
  // if(!err){
  //   res.render('home',{ rows });
  // }else{
  //   console.log(err);
  // }
  // console.log('the data from user table: \n', rows);
  // }); 
  
     
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);   

      if (active) {
        setOptions([...client]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {  
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300, marginLeft: "52rem" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
              
            ),
          }}
        />
      )}
    />
  );
}

const client = [
  { title: "Mannan Inamdar" },
  { title: "Danish Shaikh" },
  { title: "Mubasshir Shaikh" },
  { title: "Ashish infra " },
  { title: "Yasir sayyed" },
  { title: "Saad ansari" },
  { title: "zaid sayyed" },
  { title: "Huzair Ansari" },
];
