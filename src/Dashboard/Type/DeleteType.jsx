import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SideNav from '../SideNav';
import axios from 'axios';
import { API_URL } from '../../App';

const DeleteType = () => {

    const { typeId } = useParams();
    const navigate = useNavigate();

    const [type, setType] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/DashboardType/${typeId}`)
            .then((res) => res.json())
            .then((type) => {
                setType(type);
            })
    }, [typeId])


    const uploadData = async (e) => {
        e.preventDefault();

        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to Delete this! If you click Ok you will be delete all related products",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your type has been deleted.',
                        'success'
                    )
                    const res = await axios.post(`${API_URL}/DashboardType/deleteType/${typeId}`, type, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    navigate("/dashboard/alltypes")
                }
            })

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='flex'>
            <SideNav />
            <div className='p-5 w-4/5'>
                <div className="relative p-4 bg-white rounded-lg shadow  sm:p-5">
                    <form onSubmit={uploadData}>
                        <h3 className="text-2xl font-semibold text-gray-900 ">
                            Delete type
                        </h3>

                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">type Name</label>
                                <div value={type.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg select-none block w-full p-2.5 " >{type.name}</div>
                            </div>
                            <div className='flex justify-between gap-5 col-span-2 border w-fit'>
                                <img src={type.pictureUrl} className='w-28 h-28' />
                            </div>
                            <div className="flex items-center space-x-4">
                                <button type="submit" className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    Delete type
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteType