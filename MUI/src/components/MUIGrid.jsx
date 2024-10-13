import React from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


function MUIGrid() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid sx={{ backgroundColor: 'black' }} size={{ xs: 12, sm: 6, md: 8, lg: 9 }}>
                    <p>1</p>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <p>2</p>
                </Grid>

            </Grid>
        </Box>
    )
}

export default MUIGrid
{/* <Grid container>
                <Grid xs={12} sm={6} md={8} lg={9}>ITEM 1 </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>ITEM 2 </Grid>
            </Grid> */
}