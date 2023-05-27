

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function LeftSideLayout() {
  return(
<div className='side components' >
      <div className='px-5 py-7' style={{marginTop:'-20px'}} >
      <Box className="rounded-lg px-30 py-12"style= {{float: 'left',paddingLeft:'4.5%'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://recruiteze.com/wp-content/uploads/2017/08/word-image-22.jpeg"
          alt="WorkBridge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Go premium!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To see who viewd your Profile and to unlock many other features!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Start free trial
        </Button>
      </CardActions>
    </Card>
      
        </Box>
      </div>
        
    </div>
    )
  }