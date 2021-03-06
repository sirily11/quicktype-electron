import React, { Component } from "react";
import { editor } from "monaco-editor";
import {} from 'quicktype'

interface HomePageContext {
  code: string;
  language: string;
  targetLanguage: string;
  convertedCode?: string;
  editor?: editor.IStandaloneCodeEditor;
  monaco?: any;
  setCode(code: string): void;
  convert(code: string): void;
  setTargetLanguage(language: string): void;
  setLanguage(language: string): void;
  setEditor(editor: editor.IStandaloneCodeEditor, monaco: any): void;
}

interface HomePageProps {}



export class HomePageProvider extends Component<
  HomePageProps,
  HomePageContext
> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      language: "typescript",
      targetLanguage: "swift",
      code: "",
      setLanguage: this.setLanguage,
      convert: this.convert,
      setEditor: this.setEditor,
      setCode: this.setCode,
      setTargetLanguage: this.setTargetLanguage,
    };
  }

  setTargetLanguage = (language: string) => {
    this.setState({ targetLanguage: language });
  };

  setCode = (code: string) => {
    this.setState({ code: code });
  };

  setEditor = (editor: editor.IStandaloneCodeEditor, monaco: any) => {
    this.setState({ editor: editor, monaco });
  };

  setLanguage = (language: string) => {
    this.setState({ language: language });
  };

  convert = (code: string) => {};

  render() {
    return (
      <HomePageContext.Provider value={this.state}>
        {this.props.children}
      </HomePageContext.Provider>
    );
  }
}

//@ts-ignore
const context: HomePageContext = {};

export const HomePageContext = React.createContext(context);
