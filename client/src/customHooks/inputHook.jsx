import { useState } from "react";

function useInput({
  defaultValue = "",
  type = "text",
  name = "",
  id = "input",
  placeholder = "",
  label = "",
}) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClear() {
    setValue("");
  }

  function getValue() {
    return value;
  }

  function getKeyValue() {
    return { key: name, value };
  }
  
  return {
    handleChange,
    handleClear,
    getValue,
    getKeyValue,
    attrs: {
      value,
      type,
      name,
      id,
      placeholder,
      label,
    },
  };
}

export default useInput;
