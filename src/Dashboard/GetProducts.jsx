import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { API_URL } from '../App';
import SideNav from './SideNav';

function GetProducts() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState('');
    const [found, setFound] = useState(true);
    const [request, setRequest] = useState(false);

    const [brandId, setBrandId] = useState('');
    const [pageIndex, setPageIndex] = useState('');
    const [typeId, setTypeId] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/Products?${`${pageSize ? `&PageSize=${pageSize}` : ``}${search ? `&search=${search}` : ``}`}`)
            .then(res => res.json())
            .then(data => {
                if (data.data.length === 0) {
                    setFound(true);
                    setRequest(false);
                } else {
                    setFound(false);
                    setRequest(false);
                    setProducts(data.data);
                }
            })
    }, [request])


    return (
        <div className='flex'>
            <SideNav />
            <div className='products_data p-7  w-4/5'>
                <div className='container'>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">All products</h1>
                    <div className="items-center justify-start flex-wrap flex md:divide-x gap-2 md:divide-gray-100">
                        <Link to={"/dashboard/addproduct"} id="createProductButton" className="text-white bg-main-color hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 focus:outline-none" type="button">Add new product</Link>
                        <input onChange={(e) => setSearch(e.target.value)} type="search" id='search_products' placeholder='search by Name' className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 p-2.5' />
                        {/* <input onChange={(e) => setBrandId(e.target.value)} type="number" id='brand_products' placeholder='Brand ID' min="1" max="6" className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 p-2.5' /> */}
                        {/* <input onChange={(e) => setTypeId(e.target.value)} type="number" id='type_products' placeholder='Type Id' min="1" max="4" className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 p-2.5' /> */}
                        {/* <input onChange={(e) => setPageIndex(e.target.value)} type="number" id='pageIndex_products' placeholder='page Index' min="1" className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 p-2.5' /> */}
                        <input onChange={(e) => setPageSize(e.target.value)} type="number" id='pageSize_products' placeholder='Page Size' min="1" className='focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 p-2.5' />
                        <input onClick={() => setRequest(true)} type="button" id='get_products' value="Get" className="cursor-pointer text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 focus:outline-none" />
                    </div>
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
                                                {/* <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                    description
                                                </th> */}
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                    price
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                    productBrand
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                    productType
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
                                                    products.map((item) => {
                                                        return (
                                                            <tr className="hover:bg-gray-100 " key={item.id}>
                                                                <td hidden className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">{item.id}</td>
                                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                                                                    <div className="text-base font-semibold text-gray-900 ">{item.name}</div>
                                                                </td>
                                                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                                                                    <img src={item.pictureUrl} alt="product image" className='w-24' />
                                                                </td>
                                                                {/* <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap max-w-xs overflow-x-clip">{item.description}</td> */}
                                                                <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs">{item.price}</td>
                                                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">{item.productBrand}</td>
                                                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">{item.productType}</td>
                                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                                    <Link to={`/dashboard/editproduct/${item.id}`} id="updateProductButton" className="inline-flex gap-1 items-center px-3 py-2 text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 ">
                                                                        <BiEdit className='text-xl' />
                                                                        <span className='text-sm font-medium text-center'>Update</span>
                                                                    </Link>
                                                                    <Link to={`/dashboard/deleteproduct/${item.id}`} id="deleteProductButton" className="inline-flex gap-1 items-center px-3 py-2  text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300">
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
        </div>
    )
}

export default GetProducts