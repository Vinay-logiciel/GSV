import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { SideMenu } from "../../../Configs/More";
import AboutPageImage from "../../../Assets/Images/aboutPage.png";
import "./About.css";
import WhyChooseUs from "./WhyChoose/index";
import SideBar from "./index";

const About = (props) => {
  const [step, setStep] = useState(1);
  const [storeLabel, setStoreLabel] = useState();
  const [choose, setChoose] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [presence, setPresence] = useState(false);
  const [customers, setCustomers] = useState(false);
  //   const [choose, setChoose] = useState(false)
  //   const [choose, setChoose] = useState(false)
  //   const [choose, setChoose] = useState(false)

  return (
    <SideBar>
      <p>fdsfdsf</p>
      <Grid item xs={4}>
        <div>
          <h1 className="aboutHeading my-5">About Us</h1>
          <p>
            We are growing as a leading information and communication service
            provider and we help organizations in developing next generation
            infrastructure which keeps them operational without any disruption.
            We Design, Deliver & Manage Services that helps our customers in
            improving their customer experience, empower their people, create
            competitive edge and immediately respond to changing scenario. We
            Design, Deliver & Manage Services that helps our customers in
            improving their customer experience, empower their people, create
            competitive edge and immediately respond to changing scenario.
          </p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <img src={AboutPageImage} alt="aboutImage" />
        </div>
      </Grid>
    </SideBar>
  );
};

export default About;
