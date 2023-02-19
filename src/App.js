import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Authentication from './Components/Authentication/Auth/Authentication';
import { useData } from './context/ContextProvider';
import firebaseInit from './firebase/firebase.init';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { setUser } from './app/actionCreators/actionCreators';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import DashboardMain from './Components/Admin/DashboardMain/DashboardMain';
import DashboardHome from './Components/Admin/DashboardMain/DashboardHome';
import ManageBlogs from './Components/Admin/Blogs/ManageBlogs';
import AddBlog from './Components/Admin/Blogs/AddBlog/AddBlog';
import EditBlog from './Components/Admin/Blogs/EditBlog/EditBlog';
import AdminRoute from './Components/Authentication/AdminRoute/AdminRoute';
import SingleBlogTemplate from './Components/Common/SingleBlogTemplate/SingleBlogTemplate';
import AllBlogs from './Components/PublicRoutes/AllBlogs/AllBlogs';
import ManageProjects from './Components/Admin/Projects/ManageProjects';
import AddProject from './Components/Admin/Projects/AddProject/AddProject';
import EditProject from './Components/Admin/Projects/EditProject/EditProject';
import SingleProjectTemplate from './Components/Common/SingleProjectTemplate/SingleProjectTemplate';
import AllProjects from './Components/PublicRoutes/AllProjects/AllProjects';
import axios from 'axios';
// import 'animate.css/animate.compat.css';

  firebaseInit();

  
  function App() {
    const {dispatch} = useData();
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        axios.get(`https://personal-server-22-h7arc3im7-ashikfree999.vercel.app/user/${user.email}`)
        .then(res => {
          dispatch(setUser({email: user.email, role:res.data.role}))
        })
      } else {
        dispatch(setUser(""))
        
      }
    });
    
  }, [dispatch]);
  
  
  return (
    <>
    {/* <article id='application'> */}
      <Router>
        <ReactNotifications />
        <Routes>
          <Route path='/' element={<Main/>} >
            <Route path='' element={<Home />}/>
            <Route path='authentication' element={<Authentication />}/>
            <Route path='blog/:id' element={<SingleBlogTemplate />}/>
            <Route path='all-blogs' element={<AllBlogs />}/>
            <Route path='view_project/:id' element={<SingleProjectTemplate />}/>
            <Route path='all-projects' element={<AllProjects />}/>
          </Route>
          <Route path="/panel" element={<AdminRoute><DashboardMain /></AdminRoute>} >
            <Route path="" element={<DashboardHome />} />
            <Route path="blogs" element={<ManageBlogs />} />
            <Route path="add-new-blog" element={<AddBlog />} />
            <Route path="edit-blog/:id" element={<EditBlog />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="add-new-projects" element={<AddProject />} />
            <Route path="edit-project/:id" element={<EditProject />} />
          </Route>
        </Routes>
      </Router>

    {/* </article> */}
      
    </>
  );
}

export default App;
