import React from 'react'
import SideNav from './SideNav'
import { useSelector } from 'react-redux';

function AdminDashboard() {
    const authUser = useSelector(state => state.auth.user);

    return (
        <div className='flex'>
            <SideNav />
            <div className='text-4xl p-7  w-4/5'>
                Hello {authUser.displayName}
            </div>
        </div>
    )
}

export default AdminDashboard