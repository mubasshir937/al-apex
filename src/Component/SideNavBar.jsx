import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState } from "react";
import "./LoginPage/Input2.css";
import { API_URL } from "../config/API";
import SearchBar from "./SearchBar";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [personsData, setPersonsData] = useState([]);

  const initialState = {
    first_name: "",
    address: "",
    industry: "",
    premises_address: null,
    location: null,
    area: null,
    state: null,
    product: null,
    bulk: null,
    license_no: null,
    date_of_grant: null,
    date_of_calling: null,
  };

  const [state, setState] = useState(initialState);

  const {
    handleSubmit,
  } = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;   
    setState({ ...state, [name]: value });
  };

  const PersonalInfo = () => {
    API_URL.get(`/lead_management`).then((res) => {
      setPersonsData(res?.data);
    });
  };
  
  React.useEffect(() => {
    console.log("personsData", personsData);
    PersonalInfo();
  }, []);

  // const drawer = (
  //   <div>
  //     <div className="search" style={{ marginTop: "10px", marginLeft: "10px" }}>
  //       {/* <SearchBar /> */}
  //       {/* <div className="input-wrapper">
  //        <input 
  //         placeholder="Type of search .."
  //         value={input}
  //         onChange={(e) => setInput(e.target.value)}           
  //        />
  //       </div> */}
  //     </div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //       {personsData &&
  //         personsData?.map((item, index) => (
  //           <ListItem key={index} disablePadding>
  //             <ListItemButton
  //               onClick={() => {
  //                 setState(item);
  //                 // console.log("Button Click", item);
  //               }}
  //             >
  //               <ListItemText primary={item.first_name} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //     </List>
  //   </div>
  // );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        >
        <Toolbar>
          <Typography variant="h6"  component="div" style={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            Personal Details
        <div >
        <SearchBar /> 
        </div>
          </Typography>
        
        </Toolbar>

      </AppBar>
      {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <Typography paragraph>
            <div className="main">
              <Grid>
                <div style={{ marginTop: "100px" }}>
                  <form
                    style={{
                      margin: "auto",
                      padding: "15px",
                      // maxWidth: "400px",
                      alignItems: "center",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="name"> Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="your name"
                      value={state.first_name ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>
                    <label htmlFor="address"> Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="your address"
                      value={state.address ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>
                    <label htmlFor="industry"> Industry</label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      placeholder="your industry name"
                      value={state.industry ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="Premises Address"> Premises Address </label>
                    <input
                      type="text"
                      id="Premises Address"
                      name="Premises Address"
                      placeholder="your Premises Address"
                      value={state.premises_address ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="location"> Location </label>
                    <input
                      type="text"
                      id="Location"
                      name="Location"
                      placeholder="your location"
                      value={state.location ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="area"> Area </label>
                    <input
                      type="text"
                      id="Area "
                      name="Area"
                      placeholder="your area"
                      value={state.area ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="state"> State </label>
                    <input
                      type="text"
                      id="state "
                      name="state"
                      placeholder="your state"
                      value={state.state ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="product"> Product </label>
                    <input
                      type="text"
                      id="Product "
                      name="Product"
                      placeholder="your Product"
                      value={state.product ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>
                    <label htmlFor="product"> Bulk </label>
                    <input
                      type="Int"
                      id="Bulk "
                      name="Bulk"
                      placeholder="your Bulk"
                      value={state.bulk ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="product"> License No </label>
                    <input
                      type="Int"
                      id=" license_no "
                      name=" license_no"
                      placeholder="your  license no"
                      value={state.license_no ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="product"> date of grant </label>
                    <input
                      type="text"
                      id="date_of_grant "
                      name="date_of_grant"
                      placeholder="your date of grant"
                      value={state.date_of_grant ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>

                    <label htmlFor="product"> date of calling </label>
                    <input
                      type="text"
                      id="date_of_calling "
                      name="date_of_calling"
                      placeholder="your date_of_calling"
                      value={state.date_of_calling ?? ""}
                      onChange={handleInputChange}
                      disabled
                    ></input>
                  </form>
                </div>
              </Grid>
            </div>
          <div  >
            <button style={{margin:"0.8rem",padding:"0.6rem",backgroundColor:"#0078d2"}}>View</button>
            <button style={{margin:"o.5rem",padding:"0.6rem",backgroundColor:"#0078d2"}}>Update</button>
            <button style={{margin:"0.5rem",padding:"0.6rem",backgroundColor:"#0078d2"}}>Delete</button>
          </div>

            {/* <PersonalInfo /> */}
          </Typography>
        </Toolbar>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
