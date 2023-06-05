import { useState } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  makeStyles,
} from "@material-ui/core"
import { ThemeProvider as ThemeProviderNew, createTheme as createThemeNew } from "@mui/material"
import { SubstrateLight, SubstrateDark, SubstrateDarkNew, SubstrateLightNew } from "../themes"
import { useLocalStorage } from "../hooks"

import { Logo } from "."

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    maxWidth: "1330px",
    padding: theme.spacing(2),
    paddingRight: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1),
    },
  },
}))

const ThemeToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  const [localTheme, setLocalTheme] = useLocalStorage("theme")
  const [theme, setTheme] = useState(localTheme === "true" ? true : false)
  const appliedTheme = createTheme(theme ? SubstrateDark : SubstrateLight)
  const appliedThemeNew = createThemeNew(theme ? SubstrateLightNew : SubstrateDarkNew )

  const selectTheme = (selected: boolean) => {
    setLocalTheme(selected.toString())
    setTheme(selected)
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <ThemeProviderNew theme={appliedThemeNew}>
        <CssBaseline />
        <div className={classes.root}>
          <Logo theme={theme} onClick={() => selectTheme(!theme)} />
        </div>
        {children}
      </ThemeProviderNew>
    </ThemeProvider>
  )
}

export default ThemeToggleProvider
