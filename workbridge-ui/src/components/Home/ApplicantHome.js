import CenterLayout from '../Posts/PostsForApplicant';
import  ApplicantAppBar from '../layout/ApplicantAppBar'; 
import  LeftSideLayout from '../layout/LeftSideLayout'; 
import  RightSideLayout from '../layout/RightSideLayout';

export default function ApplicantHome() {
    return(
        <div>
        <ApplicantAppBar></ApplicantAppBar>
        <LeftSideLayout></LeftSideLayout>
        <RightSideLayout></RightSideLayout>
        <CenterLayout></CenterLayout>
        </div>

    )}