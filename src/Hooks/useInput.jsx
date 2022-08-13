import React, { useState, useEffect } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const onInput = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
      setDirty(true)
  }


  return {
      value,
      onInput,
      onBlur
  }
}
