import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function ThemeCom() {
    const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' }, secondary:{ main: '#ff4081' }
    }
});
    return (
        <ThemeProvider theme={theme}>
            <Button color='primary'>Primary Button</Button>
            <Button color='secondary'>Secondary Button</Button>
        </ThemeProvider> 
    );
}       
export default ThemeCom;