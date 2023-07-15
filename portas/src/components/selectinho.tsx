import React, { useState, useEffect } from "react";
import "./styles.css";
import Select from "react-select";

export default function selectinho() {
  const [options, setOptions] = useState([]);
  const initialOptions: any = [
    {
      label: "Hello",
      value: "hello"
    },
    {
      label: "Goodbye",
      value: "goodbye"
    },
    {
      label: "Test",
      value: "test"
    }
  ];

  const handleInputChange = (input: any)  => {
    console.log(input);
    setOptions(
      initialOptions.filter((opt: any) => {
        console.log(opt);
        return (
          opt && opt.value && opt.value.contains && opt.value.contains(input)
        );
      })
    );
  };

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select options={options} onInputChange={handleInputChange} />
    </div>
  );
}


//https://codesandbox.io/s/react-select-dynamic-options-9kvjv?file=/src/App.js:0-950