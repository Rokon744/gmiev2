import Image from 'next/image';
import React from 'react'
import { MdDelete } from "react-icons/md";
import emon from "../../assets/emon.jpg"

const Post = ({ item, deletePost }) => {
    return (
        <tr>
            <td className='py-10 flex items-center space-x-3'>
                <Image src={emon} className='w-[40px] h-[40px] rounded-full object-cover object-top' alt='emon' />
                <span>JOSIM</span>
            </td>
            <td className='max-w-[150px]'>{item.title}</td>
            <td>{new Date(item.date).toDateString()}</td>
            <td onClick={() => deletePost(item._id)} className='cursor-pointer' ><MdDelete className='text-[25px]' /></td>
        </tr>
    )
}

export default Post