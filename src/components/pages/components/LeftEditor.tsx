import React from "react";
import {
  Grid,
  MenuItem,
  Container,
  Box,
  TextField,
  Card,
} from "@material-ui/core";
import AutoSizer from "react-virtualized-auto-sizer";
import MonacoEditor from "react-monaco-editor";
import { HomePageContext } from "../../models/HomeContext";
import { editor } from "monaco-editor";
import { Select } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export default function LeftEditor() {
  const {
    language,
    setLanguage,
    setEditor,
    editor,
    monaco,
    setCode,
    code,
  } = React.useContext(HomePageContext);

  return (
    <Grid item xs={5} style={{ height: "100vh", overflowY: "hidden" }}>
      <Box p={1} alignItems="center" alignContent="center">
        <Grid container>
          <Grid item xs={7}>
            <TextField
              variant="filled"
              label="Name"
              fullWidth
              required={language === "json"}
            />
          </Grid>
          <Box mr={1} />
          <Grid item xs={4} style={{ alignItems: "center" }}>
            <Select
              placeholder="Select your language"
              value={language}
              onChange={(e, { value }) => setLanguage(value as string)}
              options={[
                { key: "json", value: "json", text: "json" },
                { key: "typescript", value: "typescript", text: "typescript" },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
      <Box p={1} style={{ height: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <MonacoEditor
              width={width}
              height={height - 100}
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value, e) => {
                const markers: editor.IMarker[] = monaco?.getModelMarkers();
                setCode(value);
                if (markers.length > 0) {
                  console.log("Has error");
                } else {
                  // do somethign
                }
              }}
              editorDidMount={(editor, monaco) => {
                setEditor(editor, monaco.editor);
              }}
            />
          )}
        </AutoSizer>
      </Box>
    </Grid>
  );
}
