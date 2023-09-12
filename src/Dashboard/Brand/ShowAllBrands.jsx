import React, { useEffect, useState } from 'react'
import BestBrands from '../../components/BestBrands';
import { API_URL } from '../../App';
import SideNav from '../SideNav';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const ShowAllBrands = () => {
    const [brands, setBrands] = useState();
    const [found, setFound] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/Products/brands`)
            .then(response => response.json())
            .then(brands => {
                if (brands.length === 0) {
                    setFound(true);
                } else {
                    setFound(false);
                    setBrands(brands)
                }
            });
    }, [])

    return (
        <div className='flex'>
            <SideNav />
            <div className='p-5 w-4/5'>
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden shadow">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                                    <thead className="bg-gray-100 ">
                                        <tr>
                                            <th scope="col" hidden className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                id
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                name
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                picture
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            found ?
                                                <tr>
                                                    <td colSpan="8" className='notfound p-3 text-xl md:text-3xl w-full'>Not Matched any Data</td>
                                                </tr>
                                                :
                                                brands.map((item) => {
                                                    return (
                                                        <tr className="hover:bg-gray-100 " key={item.id}>
                                                            <td hidden className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">{item.id}</td>
                                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                                                <div className="text-base font-semibold text-gray-900 ">{item.name}</div>
                                                            </td>
                                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                                                                <img src={item.pictureUrl} alt="product image" className='h-24' />
                                                            </td>
                                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                                <Link to={`/dashboard/editbrand/${item.id}`} id="updateProductButton" className="inline-flex gap-1 items-center px-3 py-2 text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 ">
                                                                    <BiEdit className='text-xl' />
                                                                    <span className='text-sm font-medium text-center'>Update</span>
                                                                </Link>
                                                                <Link to={`/dashboard/deletebrand/${item.id}`} id="deleteProductButton" className="inline-flex gap-1 items-center px-3 py-2  text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300">
                                                                    <MdDelete className='text-xl' />
                                                                    <span className='text-sm font-medium text-center'>Delete item</span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowAllBrands