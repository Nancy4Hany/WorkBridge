import  LeftSideLayout from '../layout/LeftSideLayout'; 
import  RightSideLayout from '../layout/RightSideLayout';
import PostsForRecruiter from '../Posts/PostsForRecruiter'; 
import  RecruiterAppBar from '../layout/RecruiterAppBar'; 

export default function RecruiterHome() {
    return(
        <div>
        <RecruiterAppBar></RecruiterAppBar>
        <LeftSideLayout></LeftSideLayout>
        <RightSideLayout></RightSideLayout>
        <PostsForRecruiter></PostsForRecruiter>
        </div>

    )}