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
import { HomePageContext } from "../../models/HomeContext";

export default function RightDisplay() {
  const { language, setLanguage } = React.useContext(HomePageContext);
  return (
    <Grid item xs={7}>
      <Card>Hello</Card>
    </Grid>
  );
}
