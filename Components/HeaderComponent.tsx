import { ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { darkTheme } from '../Config/config';

const HeaderComponent = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Planner APP
                        </Typography>
                    
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}

export default HeaderComponent;