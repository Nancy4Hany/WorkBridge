

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CenterLayout() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='side components' >
            <div style={{ marginTop: '-40px' }} >
                <Box className=" px-32 py-14" style={{ backgroundColor: '#f8e5ee' }}>
                    <div style={{paddingLeft:'30%'}}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Graphic designer"
                                subheader="Deadline:"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://blog.hubspot.com/hs-fs/hubfs/learn-graphic-design.jpg?width=595&height=400&name=learn-graphic-design.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <div className='desacription'>
                                    <Typography variant="body2" color="text.primary">
                                        description:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        we need a graphic designer
                                    </Typography>
                                </div>
                                <div className='salary'>
                                    <Typography variant="body2" color="text.primary">
                                        salary:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        salary
                                    </Typography>
                                </div>
                                <div className='position'>
                                    <Typography variant="body2" color="text.primary">
                                        position:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        position
                                    </Typography>
                                </div>

                                <div className='skills'>
                                    <Typography variant="body2" color="text.primary">
                                        skills:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        skills
                                    </Typography>
                                </div>

                                <div className='Field of experty'>
                                    <Typography variant="body2" color="text.primary">
                                        Field of experty:
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Field of experty
                                    </Typography>
                                </div>

                            </CardContent>
                            <CardActions disableSpacing>
                                <Button href={applyForm} color="secondary">Apply</Button>
                            </CardActions>

                        </Card>
                    </div>

                </Box>
            </div>

        </div>


    );

}