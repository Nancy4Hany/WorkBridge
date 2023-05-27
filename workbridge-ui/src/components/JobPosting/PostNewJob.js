import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import  RecruiterAppBar from '../layout/RecruiterAppBar'; 
const companies = [
  { name: 'Company 1' },
  { name: 'Company 2' },
  { name: 'Company 3' },
  // Add more company options as needed
];

const categories = [
  { name: 'Category 1' },
  { name: 'Category 2' },
  { name: 'Category 3' },
  // Add more category options as needed
];

export default function PostNewJob() {
  return (
    <>
    <RecruiterAppBar></RecruiterAppBar>
    <div id="form container" className="flex flex-col items-center justify-center px-6 rounded-lg" style={{ backgroundColor: '#f8e5ee' }}>
      <div style={{ border: '1px solid #B370B0', padding: '2%', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
        <div className="form" style={{ paddingLeft: '12%' }}>
          <div id="name container" style={{ padding: '2%' }}>
            <p style={{ fontSize: '30px', color: 'gray', paddingLeft: '15%' }}>Job Offer</p>
          </div>
          <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" required />
          </div>
          <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="Job description" variant="outlined" required />
          </div>
          {/* <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="skills [use (,) to separate]" variant="outlined" required />
          </div> */}
          <div id="apply form container" style={{ padding: '2%' }}>
            <Autocomplete
              id="company-select"
              options={companies}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Company" variant="outlined" required />}
            />
          </div>
          <div id="apply form container" style={{ padding: '2%' }}>
            <Autocomplete
              id="category-select"
              options={categories}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Category" variant="outlined" required />}
            />
          </div>
          <div id="pdf" style={{ padding: '2%' }}>
            <div>
              <AddPhotoAlternateIcon /> Add a picture
            </div>
            <input label="Add your CV" type="file" id="avatar" name="avatar" accept="image/jpeg" />
          </div>
          <div style={{ paddingLeft: '27%' }}>
            <IconButton aria-label="delete">
              Publish
              <PublishIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
