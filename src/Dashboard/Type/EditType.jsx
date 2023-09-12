import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL } from '../../App';
import SideNav from '../SideNav';

const EditType = () => {

    const { typeId } = useParams();
    const navigate = useNavigate();

    const [typeName, setTypeName] = useState("");
    const [typeImage, setTypeImage] = useState(null);

    const [imageSrc, setImageSrc] = useState(null);
    const [newImg, setNewImg] = useState(null);

    const handleFileChange = (e) => {
        setNewImg(e.target.files[0]);
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setImageSrc(x.target.result);
                console.log(imageFile, imageSrc)
            }
            reader.readAsDataURL(imageFile);
        } else {
            setImageSrc(null);
        }
    };

    useEffect(() => {
        fetch(`${API_URL}/DashboardType/${typeId}`)
            .then((res) => res.json())
            .then((type) => {
                setTypeImage(type.pictureUrl)
                setTypeName(type.name);
            })
    }, [typeId])


    const uploadData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', typeId);
        formData.append('name', typeName);
        formData.append('url', newImg);

        try {
            await axios.post(`${API_URL}/DashboardType/editType/${typeId}`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'type updated successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate("/dashboard/alltypes")
            })
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='flex'>
            <SideNav />
            <div className='p-5 w-4/5'>
                <div className="focus:outline-none relative p-4 bg-white rounded-lg shadow  sm:p-5">
                    <form onSubmit={uploadData}>
                        <h3 className="focus:outline-none text-2xl font-semibold text-gray-900 mb-6">
                            Update Category or Type
                        </h3>
                        <div className="focus:outline-none grid gap-4 mb-4 sm:grid-cols-2">
                            <div className="focus:outline-none sm:col-span-2">
                                <label htmlFor="name" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">type Name</label>
                                <input value={typeName} onChange={(e) => { setTypeName(e.target.value) }} type="text" name="name" id="name" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " placeholder="Men's clothes" />
                            </div>
                            <div className="flex justify-between gap-5 col-span-2 w-full">
                                <div className='grow'>
                                    <label htmlFor="image" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">type Image</label>
                                    <input onChange={handleFileChange} type="file" name="image" id="image" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " />
                                </div>
                                <img src={imageSrc ? imageSrc : typeImage} className='w-28 h-28' />
                            </div>
                            <div className="focus:outline-none flex items-center space-x-4">
                                <button type="submit" className="text-white bg-main-color focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditType