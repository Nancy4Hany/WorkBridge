// Reqs
import { Routes, Route } from 'react-router-dom'
// Registration
import SignUp from './components/Registration/SignUp';
import Login from './components/Registration/Login';
// Profile
import Profile from './components/SeekerProfile/Profile';
// Edit profile
import EditPersonalSection from './components/SeekerProfile/EditPersonalSection';
import EditAccountSection from './components/SeekerProfile/EditAccountSection';
import EditBackgroundSection from './components/SeekerProfile/EditBackgroundSection';
import ConfirmEdits from './components/SeekerProfile/ConfirmEdits';
// cv
import CVContent from './components/ViewCV/CV';
// post job
import PostNewJob from './components/JobPosting/PostNewJob';
// Feedback
import Feedback from './components/Feedback/Feedback';
// Interviews
import InterviewsTable from './components/Interview/InterviewsTable';
import ScheduleInterview from './components/Interview/ScheduleInterview';
// video call
import Lobby from './components/VideoCallSystem/Lobby';
import Room from './components/VideoCallSystem/Room';
// testing files 
import RecruiterHomeTest from './components/Tests/RecruiterHomeTest';
import SeekerHomeTest from './components/Tests/SeekerHomeTest';
import ApplicationsTable from './components/ApplicationsTable';
// import PostNewJob from './components/JobPosting/PostNewJob'; 
import CenterLayout from './components/Posts/PostsForApplicant';
import PostsForRecruiter from './components/Posts/PostsForRecruiter';
import ApplicantHome from './components/Home/ApplicantHome';
import RecruiterHome from './components/Home/RecruiterHome';

function App() {
  return (
    <Routes>
      {/* Registration routes  */}
      <Route path='/' element={<Login />} />
      <Route path='/Sign-up' element={<SignUp />} />
      {/* testing routes */}
      <Route path='/RecruiterHomeTest' element={<RecruiterHomeTest />} />
      <Route path='/SeekerHomeTest' element={<SeekerHomeTest />} />
      {/* video call routes */}
      <Route path='/Lobby' element={<Lobby />} />
      <Route path='Room' element={<Room />} />
      {/* job posting routes */}
      <Route path='/Post-a-job' element={<PostNewJob />} />
      {/* cv parser route */}
      <Route path='/CV' element={<CVContent />} />
      {/* feedback route */}
      <Route path='/Feedback' element={<Feedback />} />
      {/* interview routes */}
      <Route path='/Schedule-an-interview' element={<ScheduleInterview />} />
      <Route path='/Table-of-interviews' element={<InterviewsTable />} />
      {/* profile route */}
      <Route path='/Profile' element={<Profile />} />
      {/* Edit account routes */}
      <Route path='/Confirm-edits' element={<ConfirmEdits />} />
      <Route path='/Edit-background-info' element={<EditBackgroundSection />} />
      <Route path='/Edit-account-info' element={<EditAccountSection />} />
      <Route path='/Edit-personal-info' element={<EditPersonalSection />} />
      <Route path='/ApplicationsTable' element={<ApplicationsTable />} />
      <Route path='/CenterLayout' element={<CenterLayout />} />
      <Route path='/PostsForRecruiter' element={<PostsForRecruiter />} />
      <Route path='/ApplicantHome' element={<ApplicantHome />} />
      <Route path='/RecruiterHome' element={<RecruiterHome />} />
      {/* <Route path='/Post-a-job' element={<PostNewJob />} /> */}
    </Routes>

  )
}

export default App;