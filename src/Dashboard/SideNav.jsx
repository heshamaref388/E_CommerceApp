import { useState } from "react";
import { FaOpencart } from "react-icons/fa"
import { Link } from "react-router-dom";
import { AiOutlineSetting, AiOutlineBranches, AiOutlineLineChart } from "react-icons/ai";
import { BiCategory, BiMessageSquareAdd, BiUser } from "react-icons/bi";
import { IoBagHandle } from "react-icons/io5";
import { VscTypeHierarchySub } from "react-icons/vsc";
import sideNavImg from "./../assets/images/sidenav/control.png"
const SideNav = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <BiUser className="text-2xl" />, gap: true, link: "/dashboard" },
        { title: "Get products", src: <AiOutlineLineChart className="text-2xl" />, link: "/dashboard/getproducts" },
        { title: "All Brands", src: <IoBagHandle className="text-2xl" />, link: "/dashboard/allbrands" },
        { title: "All Types", src: <VscTypeHierarchySub className="text-2xl" />, link: "/dashboard/alltypes" },
        { title: "Add Product", src: <BiMessageSquareAdd className="text-2xl" />, gap: true, link: "/dashboard/addproduct" },
        { title: "Add Brand", src: <AiOutlineBranches className="text-2xl" />, link: "/dashboard/addbrand" },
        { title: "Add Type", src: <BiCategory className="text-2xl" />, link: "/dashboard/addtype" },
        { title: "Setting", src: <AiOutlineSetting className="text-2xl" />, gap: true, link: "/dashboard/" },
    ];

    return (
        <>
            <div
                className={` ${open ? "w-1/5" : "w-20 "
                    } bg-main-color h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src={sideNavImg}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-main-color
                                            border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <Link to={"/dashboard/"} className="flex gap-x-4 items-center">
                    <div className=" bg-white p-1.5 rounded">
                        <FaOpencart className={`text-2xl text-main-color cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`} />
                    </div>
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Nova
                    </h1>
                </Link>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                                        ${Menu.gap ? "mt-9" : "mt-2"}
                                } `}
                        >
                            <Link to={Menu.link} className="flex gap-2 items-center">
                                {/* <img src={`../src/assets/images/sidenav/${Menu.src}.png`} /> */}
                                {Menu.src}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}  </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};
export default SideNav;
