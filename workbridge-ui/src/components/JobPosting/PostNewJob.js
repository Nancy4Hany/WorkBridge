import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RecruiterAppBar from '../layout/RecruiterAppBar';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8806',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function PostNewJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    fetchCompanies();
    fetchCategories();
    fetchRecruiters();
  }, []);

  const fetchCompanies = () => {
    instance.get('/companies')
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
      });
  };

  const fetchCategories = () => {
    instance.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  };

  const fetchRecruiters = () => {
    instance.get('/recruiters')
      .then(response => {
        setRecruiters(response.data);
      })
      .catch(error => {
        console.error('Error fetching recruiters:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      description: description,
      company: {
        id: selectedCompany.id
      },
      recruiter: {
        id: selectedRecruiter.id
      },
      category: {
        id: selectedCategory.id
      }
    };

    instance.post('/jobposts', data)
      .then(response => {
        console.log('Job post created:', response.data);
        // Handle successful creation of job post
      })
      .catch(error => {
        console.error('Error creating job post:', error);
        // Handle error while creating job post
      });
  };

  return (
    <>
      <RecruiterAppBar />
      <div id="form container" className="flex flex-col items-center justify-center px-6 rounded-lg" style={{ backgroundColor: '#f8e5ee' }}>
        <div style={{ border: '1px solid #B370B0', padding: '2%', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
          <div className="form" style={{ paddingLeft: '12%' }}>
            <div id="name container" style={{ padding: '2%' }}>
              <p style={{ fontSize: '30px', color: 'gray', paddingLeft: '15%' }}>Job Offer</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div id="name container" style={{ padding: '2%' }}>
                <TextField id="outlined-basic" label="Job title" variant="outlined" required
                  onChange={(e) => setTitle(e.target.value)} value={title} />
              </div>
              <div id="name container" style={{ padding: '2%' }}>
                <TextField id="outlined-multiline-static" label="Description" multiline rows={4} variant="outlined" required
                  onChange={(e) => setDescription(e.target.value)} value={description} />
              </div>
              <div id="name container" style={{ padding: '2%' }}>
                <Autocomplete
                  id="company-select"
                  options={companies}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => setSelectedCompany(value)}
                  renderInput={(params) => <TextField {...params} label="Select Company" variant="outlined" required />}
                />
              </div>
              <div id="name container" style={{ padding: '2%' }}>
                <Autocomplete
                  id="category-select"
                  options={categories}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => setSelectedCategory(value)}
                  renderInput={(params) => <TextField {...params} label="Select Category" variant="outlined" required />}
                />
              </div>
              <div id="name container" style={{ padding: '2%' }}>
                <Autocomplete
                  id="recruiter-select"
                  options={recruiters}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => setSelectedRecruiter(value)}
                  renderInput={(params) => <TextField {...params} label="Select Recruiter" variant="outlined" required />}
                />
              </div>
              <div style={{ paddingLeft: '27%' }}>
                <IconButton aria-label="delete" type="submit">
                  Publish
                  <PublishIcon />
                </IconButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
