import React from "react";
import { Select, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { HomePageContext } from "../../../models/HomeContext";
import { FormLabel } from "@material-ui/core";

const languages = [
  "Swift",
  "Dart",
  "Java",
  "Python",
  "C",
  "C++",
  "Typescript",
  "Kotlin",
];

export default function TargetLanguageSelector() {
  const { targetLanguage, setTargetLanguage } = React.useContext(
    HomePageContext
  );
  return (
    <Form style={{ margin: 10 }}>
      <Form.Group widths="equal">
        <Form.Field
          control="select"
          style={{ fontColor: "white" }}
          placeHolder="Select your target"
          value={targetLanguage}
          onChange={(e: any) => setTargetLanguage(e.target.value)}
        >
          {languages.map((v, i) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </Form.Field>
      </Form.Group>
    </Form>
  );
}
