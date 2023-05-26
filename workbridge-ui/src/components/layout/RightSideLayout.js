
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function RightSideLayout() {
  return(

      <div className='px-4' >
      <Box className="rounded-lg px-30 py-12"style= {{float: 'right', paddingRight:'5%', marginTop:'1%'}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.seattletimes.com/wp-content/uploads/2019/04/web-feedback-958204844.jpg?d=1560x1032"
          alt="WorkBridge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Need help?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your feedback helps us provide a btter experience.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Give your feedback
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345}} style={{marginTop:'20px', paddingLeft:'30px'}}>

    <a href="url" style={{fontSize:'14px', color:'#993399', paddingRight:'20px'}}>contact us.</a> <a href="url" style={{fontSize:'14px', color:'#993399'}}>help center.</a><br></br>

      <a href="url" style={{fontSize:'14px', color:'#993399'}}> work bridge © 2023.</a>
    </Card>
      
        </Box>
      </div>
      
      

    
    )
  }