import React from "react";
import ThemeV1 from "./theme_v1";

function MainTheme({ data }) {
  const themes = {
    theme_v1: <ThemeV1 data={data} />,
  };
  return themes[data.theme];
}

export default MainTheme;
