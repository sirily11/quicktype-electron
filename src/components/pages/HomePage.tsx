import React from "react";
import {
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Container,
  Box,
  TextField,
  Card,
} from "@material-ui/core";
import AutoSizer from "react-virtualized-auto-sizer";
import MonacoEditor from "react-monaco-editor";
import { HomePageContext } from "../models/HomeContext";
import LeftEditor from "./components/LeftEditor";
import RightDisplay from "./components/RightDisply";

export function HomePage() {
  const { language, setLanguage } = React.useContext(
    HomePageContext
  );

  return (
    <div id="home">
      <Grid container>
        <LeftEditor />
        <RightDisplay />
      </Grid>
    </div>
  );
}
