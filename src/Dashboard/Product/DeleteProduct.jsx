import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../App';
import SideNav from '../SideNav';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeleteProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState("");

    // add new data to the final result to sent it
    useEffect(() => {
        fetch(`${API_URL}/Products/${productId}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product)
            })
    }, [productId])

    const uploadData = async (e) => {
        e.preventDefault();

        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const res = await axios.post(`${API_URL}/DashboardProduct/deleteproduct/${productId}`, product, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    navigate("/dashboard/getproducts")
                }
            })

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='flex'>
            <SideNav />
            <div className=" w-4/5 focus:outline-none relative p-4 max-w-5xl m-auto h-full md:h-auto">
                <div className="focus:outline-none relative p-4 bg-white rounded-lg shadow  sm:p-5">
                    <div className="focus:outline-none flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="focus:outline-none text-2xl font-semibold text-gray-900 ">
                            Delete Product
                        </h3>
                    </div>
                    <form onSubmit={uploadData}>
                        <div className="focus:outline-none grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="id" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">ID</label>
                                <input disabled value={product.id} type="text" name="id" id="id" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="name" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input disabled value={product.name} type="text" name="name" id="name" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="brand" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">brand</label>
                                <input disabled value={product.productBrand} type="text" name="brand" id="brand" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="type" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Type</label>
                                <input disabled value={product.productType} type="text" name="type" id="type" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="price" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Price</label>
                                <input disabled value={product.price} type="number" name="price" id="price" className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            </div>
                            <div className='flex justify-between gap-5 w-full'>
                                <div className='grow'>
                                    <label htmlFor="pictureUrl" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Product Image</label>
                                    <img src={product.pictureUrl} className='w-28 h-28' />
                                </div>
                            </div>
                            <div className='flex justify-between col-span-2 gap-5 w-full'>
                                <div className='grow'>
                                    <label htmlFor="pictureUrl" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">other product Images</label>
                                    <div className='flex gap-2'>
                                        {
                                            product.images ? product.images.map((img) => {
                                                return <img src={img.name} className='w-24 h-24 border rounded' key={img.id} />
                                            }) : <p>Don't Have other Images</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="focus:outline-none sm:col-span-2">
                                <label htmlFor="description" className="focus:outline-none block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <textarea disabled value={product.description} id="description" rows="5" className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  " placeholder="Write a description..."></textarea>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="available" className="focus:outline-none mb-2 text-sm font-medium text-gray-900">Availability</label>
                            <input disabled checked={product.available} type="checkbox" name="available" id="available" className="m-3" />
                        </div>
                        <div className="focus:outline-none flex items-center space-x-4">
                            <button type="submit" className="text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                Delete Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteProduct