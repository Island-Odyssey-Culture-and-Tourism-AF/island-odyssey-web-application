import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import SideNavBar from '../../components/admin/SideNavBar';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  if (role !== 'admin') {
    // Redirect the user to the login page or show an access denied message
    navigate('/sign-in');
  }
  return (
    <div>
      <div className="user-element"><strong>John Smith  </strong><img src="https://github.com/mdo.png" alt="" width="50" height="50" class="rounded-circle me-2" />
      </div>
      <SideNavBar />
    </div>
  )
}
