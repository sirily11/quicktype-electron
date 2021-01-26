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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HomePageContext } from "../../models/HomeContext";
import TargetLanguageSelector from "./right/TargetLanguageSelector";

export default function RightDisplay() {
  const { targetLanguage, convertedCode } = React.useContext(HomePageContext);
  return (
    <Grid item xs={7}>
      <Card style={{ height: "95vh", margin: 10 }}>
        <TargetLanguageSelector />
        <div style={{ margin: 10, height: "100%" }}>
          <SyntaxHighlighter
            language={targetLanguage.toLowerCase()}
            style={atomDark}
          >
            {convertedCode ?? ""}
          </SyntaxHighlighter>
        </div>
      </Card>
    </Grid>
  );
}
