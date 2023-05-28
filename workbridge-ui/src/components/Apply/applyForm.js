import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function JobApplicationForm() {
  const handleSubmit = () => {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const cvFile = document.getElementById('cv-upload').files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('cv', cvFile);

    axios.post('http://localhost:8802/job-application/submit', formData)
      .then(response => {
        // Handle the success response
        console.log('Application submitted successfully:', response.data);
        // You can perform additional actions here, such as showing a success message
      })
      .catch(error => {
        // Handle the error response
        console.error('Error submitting application:', error);
        // You can perform additional actions here, such as showing an error message
      });
  };

  return (
    <div
      id="form container"
      className="flex flex-col items-center justify-center px-6 rounded-lg"
      style={{ backgroundColor: '#f8e5ee' }}
    >
      <Box
        style={{
          border: '1px solid #B370B0',
          padding: '2%',
          alignItems: 'center',
          marginTop: '3%',
          marginBottom: '3%',
        }}
      >
        <h2 style={{ color: 'blue' }}>Submit Application</h2>

        <div id="name container">
          <TextField id="name-input" label="Name" variant="outlined" />
        </div>
        <div id="email container">
          <TextField id="email-input" label="Email" variant="outlined" />
        </div>

        <div id="cv container">
          <input
            accept="application/pdf"
            id="cv-upload"
            type="file"
            style={{ display: 'none' }}
          />
          <label htmlFor="cv-upload">
            <TextField
              id="cv-input"
              label="CV"
              variant="outlined"
              disabled
            />
            <Button
              variant="contained"
              component="span"
              color="primary"
              endIcon={<PublishIcon />}
            >
              Upload CV
            </Button>
          </label>
        </div>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Application
          <PublishIcon style={{ marginLeft: '0.5rem' }} />
        </Button>
      </Box>
    </div>
  );
}
