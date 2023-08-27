import { Grid, TextField } from "@mui/material";
import TextInput, { onSubmitProps } from "./TextInput";
import { useState } from "react";

interface CharMap {
  [key: string]: string;
}

const fixText = (text: string) => {
  const charMap: CharMap = {
    "Ã¡": "á",
    "Ã©": "é",
    "Ã­": "í",
    "Ã³": "ó",
    Ãº: "ú",
    "Ã±": "ñ",
    "Ã": "Á",
    "Ã‰": "É",
    "Ã": "Í",
    "Ã“": "Ó",
    Ãš: "Ú",
    "Ã‘": "Ñ",
    "â€œ": '"',
    "â€": '"',
    "â€™": "'",
    "â€¦": "...",
    "Ã¢": "â",
    "Ã£": "ã",
    "â€": "í©",
    "âž”": "→",
    "â†’": "→",
    "â€¢": "bullet point..",
  };

  // Create a regular expression pattern from the keys of the charMap
  const pattern = new RegExp(Object.keys(charMap).join("|"), "g");

  // Replace the matched patterns with their corresponding values
  const fixedText = text.replace(pattern, match => {
    return charMap[match];
  });

  return fixedText;

  /*
  const fixedText = text.replace(/./g, char => {
    console.log(char);
    return charMap[char] || char;
  });

  return fixedText;
  */
};

export default function TextFixer() {
  const [text, setText] = useState("");
  const onSubmit: onSubmitProps = (value, actions) => {
    const { brokenText } = value;
    const fixedText = fixText(brokenText);
    setText(fixedText);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Grid item xs={12} container gap={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={5}>
          <TextInput onSubmit={onSubmit} />
        </Grid>

        <Grid item xs={5}>
          <TextField value={text} multiline rows={30} fullWidth />
        </Grid>
      </Grid>
    </>
  );
}
