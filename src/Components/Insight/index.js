import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import "./styles.css";
import PieChart from "./PieChart";
import { INSIGHT_DATA } from "./PieChart/insightData";

const Insight = () => {
  const classes = useStyles();

  const [insightDetail, setInsightDetail] = useState(
    Object.keys(INSIGHT_DATA)[0]
  );
  console.log("sdfsd", Object.keys(INSIGHT_DATA)[0]);
  /**
   * @description update values in right grid from selection
   *
   * @param {Object} insight
   */
  const getInsightDetail = (insight) => {
    setInsightDetail(insight);
  };

  const {
    data: {
      color = "#0d274d",
      id = INSIGHT_DATA.our_services.id,
      info = INSIGHT_DATA.our_services.info,
      label = INSIGHT_DATA.our_services.label,
      value = INSIGHT_DATA.our_services.value,
    } = {},
  } = insightDetail || INSIGHT_DATA.our_services;

  return (
    <Paper elevation={24} className={`${classes.piePaper} piePaper`}>
      <Grid container className={`${classes.pieGrid} pieGrid`}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={`${classes.pieBox} pieBox`}
        >
          <PieChart
            data={INSIGHT_DATA}
            fetchInsightDetails={getInsightDetail}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box className={`${classes.pieDetail} pieDetail`}>
            <Typography
              variant={"h3"}
              className={`${classes.pieTitle} pieTitle`}
              style={{ color: color }}
            >
              {label}
            </Typography>
            <Typography
              variant={"body1"}
              className={`${classes.pieInfo} pieInfo`}
            >
              {info}
            </Typography>
            <Button
              variant="contained"
              className={`${classes.pieButton} pieButton`}
              style={{
                backgroundColor: color,
              }}
            >
              Know More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Insight;

const useStyles = makeStyles((theme) => ({
  piePaper: {
    width: "80%",
    margin: "3% auto",
  },
  pieGrid: {},

  pieBox: {
    width: "100%",
    height: "600px",
  },
  pieDetail: {
    width: "80%",
    margin: "20% auto",
  },
  pieInfo: {
    marginTop: "5%",
    color: "#0d274d",
  },
  pieButton: {
    color: "white",
    marginTop: "5%",
  },
}));
