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
   
    </Routes>

  )
}

export default App;