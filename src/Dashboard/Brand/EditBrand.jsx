import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideNav from '../SideNav';
import { API_URL } from '../../App';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditBrand = () => {

    const { brandId } = useParams();
    const navigate = useNavigate();

    const [brandName, setBrandName] = useState("");
    const [brandImage, setBrandImage] = useState("");

    const [imageSrc, setImageSrc] = useState(null);
    const [newImg, setNewImg] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/DashboardBrand/${brandId}`)
            .then((res) => res.json())
            .then((brand) => {
                setBrandImage(brand.pictureUrl)
                setBrandName(brand.name);
            })
    }, [brandId])


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
    const uploadData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', brandId);
        formData.append('name', brandName);
        formData.append('url', newImg);

        try {
            await axios.post(`${API_URL}/DashboardBrand/editbrand/${brandId}`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Brand Updated successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate("/dashboard/allbrands")
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
                        <h3 className="focus:outline-none text-2xl font-semibold text-gray-900 ">
                            Edit Brand
                        </h3>

                        <div className="focus:outline-none grid gap-4 mb-4 sm:grid-cols-2">
                            <div className="focus:outline-none sm:col-span-2">
                                <label htmlFor="name" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900 ">Brand Name</label>
                                <input value={brandName} onChange={(e) => { setBrandName(e.target.value) }} type="text" name="name" id="name" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " placeholder="Apple" />
                            </div>
                            <div className='flex justify-between gap-5 col-span-2 w-full'>
                                <div className='grow'>
                                    <label htmlFor="pictureUrl" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Choose Picture</label>
                                    <input onChange={handleFileChange} type="file" name="pictureUrl" id="pictureUrl" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " />
                                </div>
                                <img src={imageSrc ? imageSrc : brandImage} className='w-28 h-28' />
                            </div>
                            <div className="focus:outline-none flex items-center space-x-4">
                                <button type="submit" className="text-white bg-main-color focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    Update Brand
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBrand