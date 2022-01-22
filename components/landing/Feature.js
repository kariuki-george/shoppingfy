import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "./Card";

function Feature() {
  return (
    <div className="flex flex-col w-full  p-5 items-center bg-modal-bg">
      <h2 className="text-3xl">FEATURE</h2>
      <p className="p-5">Our Special Feature</p>
      <div className="mb-5 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-evenly ">
        <Card
          icon={<CategoryIcon />}
          desc={"Acess to premade categories to choose from."}
          heading={"Categories"}
        />
        <Card
          icon={<AddBoxIcon />}
          desc={"Add your own categories."}
          heading={"Add"}
        />
        <Card
          icon={<TimelineIcon />}
          desc={"Access all your previous shopping lists. "}
          heading={"History"}
        />
        <Card
          icon={<AnalyticsIcon />}
          desc={"See what you bought most in your previous month."}
          heading={"Statistics"}
        />
      </div>
    </div>
  );
}

export default Feature;
