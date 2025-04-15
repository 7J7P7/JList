import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [tabThemes, setTabThemes] = useState({ tasks: "blue", tsm: "green", sm: "orange", stats: "purple" });
  const handleThemeChange = (tab, color) => setTabThemes((prev) => ({ ...prev, [tab]: color }));
  return <ThemeContext.Provider value={{ tabThemes, handleThemeChange }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);