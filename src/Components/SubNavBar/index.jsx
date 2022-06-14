import React, { useState } from "react";
import { object } from "prop-types";
import { Box, makeStyles, MenuItem, Modal, Tab, Tabs } from "@material-ui/core";
import SideBar from "../More/SideBarTab";

import "./styles.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNavBar = ({ subNavMenus, isOpen, onNavMenus }) => {
  const classes = useStyles();

  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = React.useState(0);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setIsMoreOpen(true);

    setMenuListing(Object.values(subNavMenus.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus.menus)[newValue] || menuListing);
  };

  const handleClose = () => {
    setIsMoreOpen(false);
  };

  return (
    <>
      {!subNavMenus.isMore ? (
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          id={subNavMenus.value}
          className={`${classes.subMenuBar}  subMenuBar`}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Object.values(subNavMenus.menus).map((menu, index) => {
              return (
                <Tab
                  label={menu.label}
                  {...a11yProps({ index })}
                  key={index}
                  className={` ${classes.navbar_text} navbar_text`}
                />
              );
            })}
          </Tabs>
        </Box>
      ) : (
        <Modal
          open={isMoreOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={BoxModalstyles}
            style={{ backgroundColor: "white", height: "100%" }}
          >
            <SideBar />
          </Box>
        </Modal>
      )}
    </>
  );
};

/**
 * Props validation
 */
SubNavBar.propTypes = {
  subNavMenus: object,
};

/**
 * Default Props
 */
SubNavBar.defaultProps = {
  subNavMenus: {},
};

export default SubNavBar;
const BoxModalstyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  subMenu: {
    cursor: "pointer",
  },
  navbar_text: {
    fontSize: "1rem",
    marginRight: "10%",
    color: "#000000",
    whiteSpace: "initial",
    width: "70%",
  },
  subMenuBar: {
    fontSize: "1.3rem",
    display: "flex",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    minWidth: "180px",
    whiteSpace: "break-spaces",
    justifyContent: "center",
  },
}));
