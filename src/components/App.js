import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import MyToolbar from './MyToolbar.js';
import CompSampMethod from './CompSampMethod.js';

function App() {
  return (
    <Box component="div" sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyToolbar />
      <Box
        component="main"
        bgcolor="#f5f5f5"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Box component="div" sx={{ height: '48px' }}></Box>
        <Container maxWidth="lg" sx={{ my: '8px', px: '8px !important' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  height: '720px',
                  padding: '16px',
                  flexDirection: 'column',
                  overflow: 'auto'
                }}
              >
                <CompSampMethod />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
