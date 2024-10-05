import { TextField, Typography } from "@mui/material";
import { useEffect } from "react";


export default function OptionFields({ 
  options,
  allOptions,
  requiredOptions,
  onChange
}) {
  if (allOptions.length === 0) {
    return (
      <Typography>Please select a diagram type.</Typography>
    )
  }

  return (
    <>
    {allOptions.map((opt, index) => (
          <TextField
            required={requiredOptions.includes(opt)}
            size="small"
            key={index}
            name={opt}
            label={opt}
            value={options[opt]}
            onChange={onChange}
          />
    ))}
    </>
  )
}