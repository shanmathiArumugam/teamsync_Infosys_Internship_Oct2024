import React, { useState } from 'react';
import Hero from './components/Hero';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticationState } from '../../../store/atoms/authVerifierSelector';
import { sidebarSelection } from '../../../store/atoms/adminDashboardAtoms';

const ProjectView = () => {
  let selectedSidebar=useRecoilValue(sidebarSelection);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const auth = useRecoilValue(authenticationState);
  const token=localStorage.getItem("token");
  if(!token){
    return <Navigate to="/" />;
  }
  setTimeout(() => {
    if (!auth.isValid) {
      return <Navigate to="/" />;
    }
  
    if (auth.isAdmin) {
      return <Navigate to="/" />;
    }
  }, 100);

  return (
    <>
      <Hero />
    </>
    // <div className="min-h-screen bg-gray-50">
    //   <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
    //   {/* Main Content */}
    //   <div className="lg:ml-56">
    //     {selectedSidebar==="project-view"&&<ProjectView />}
    //     <Hero sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    //   </div>
    // </div>
  );
};

export default ProjectView;