"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navbar = () => {
  const session = useSession();
   console.log(session)
    return (
        <div>
            <div className="navbar bg-red-100 mx-3 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mx-3">
        <Link href='/'><li className='mx-3'>Home</li></Link>
        <Link href='/posts'><li className='mx-3'>Post</li></Link>
        <Link href='/meals'><li className='mx-3'>Meals</li></Link>
        <Link href='/fonts'><li className='mx-3'>Fonts</li></Link>
        <Link href='/animals'><li className='mx-3'>Animals</li></Link>
        <Link href='/current-time'><li className='mx-3'>Current Time</li></Link>

        <Link href='/dashboard'><li className='mx-3'>Dashboard</li></Link>

        <Link href='/dashboard'><li className='mx-3'>dashboard</li></Link>

       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl mx-5">Next Core 2 Buld Mode</a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 mx-3 ">
      <Link href='/'><li className='mx-3'>Home</li></Link>
      <Link href='/posts'><li className='mx-3'>Post</li></Link>
      <Link href='/meals'><li className='mx-3'>Meals</li></Link>
      <Link href='/fonts'><li className='mx-3'>Fonts</li></Link>
      <Link href='/animals'><li className='mx-3'>Animals</li></Link>
      <Link href='/current-time'><li className='mx-3'>Current Time</li></Link>
      <Link href='/dashboard'><li className='mx-3'>Dashboard</li></Link>
     

      <Link href='/dashboard'><li className='mx-3'>dashboard</li></Link>

    </ul>
  </div>

  <div className=' flex justify-around navbar-start text-blue-500'>
    {/* <div>  <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} width={50} height={50}></Image> </div> */}
    <div>  {session?.data?.user?.name}</div>
    <div> {session?.data?.user?.type}</div>
  </div>
  <div >
    { session.status === "unauthenticated" ? 
     <Link href='/api/auth/signin'><button className='btn btn-ghost'>SignIn</button></Link>
      : 
    <button onClick={()=> signOut()} className='btn btn-ghost' >LogOut</button>
    }
  </div>
  <div>
  <Link href='/api/auth/signup'><button className='btn btn-ghost'>SignUp</button></Link>
  </div>

</div>
        </div>
    );
};

export default navbar;