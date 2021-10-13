import { React } from "react";
import { Card, CardMedia } from "@mui/material";
import Banner from "../../assets/images/banner.jpeg";

export default function LoginHome() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia component="img" height="820" src={Banner} alt="banner" />
        </Card>
      </div>
    </>
  );
}
