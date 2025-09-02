import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

export default function NavBar() {
    const darkMode = true;

  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton>
                {darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}