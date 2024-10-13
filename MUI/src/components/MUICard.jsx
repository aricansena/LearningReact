import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Photo from '../data/image/unnamed.jpg';

function MUICard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="intothewild"
                height="140"
                image={Photo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Into The Wild
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis non fugiat iusto ex obcaecati quae ullam voluptatibus neque recusandae deleniti, eligendi odio numquam rem dignissimos officiis modi officia, praesentium natus.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">İncele</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default MUICard