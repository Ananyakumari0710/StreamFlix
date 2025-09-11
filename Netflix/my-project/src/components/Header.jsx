import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import { API_END_POINT } from '../utils/constant.js';
import { setUser } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler= async ()=>{
    //logout
    try {
      const res= await axios.get(`${API_END_POINT}/logout`);

     if(res.data.success){
        toast.success(res.data.message);
     }
        dispatch(setUser(null));
        navigate("/");
      }
     catch (error) {
      console.log(error);
      
    }
    
  }
  return (
    <div className=' absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black '>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />
      {
        user && (
          <div className='flex items-center'>
            <IoIosArrowDropdown size="24px" color='white' />
            <h6 className='text-lg font-medium text-white'>{user.fullName}</h6>
            <div className='ml-4 '>
              <button onClick={logouthandler} className='bg-red-800 text-black px-4 py-2' >Logout</button>
              <button className='bg-red-800 text-black px-4 py-2 ml-2'>Search Movie</button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Header