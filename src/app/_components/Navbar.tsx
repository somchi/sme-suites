
import React from 'react';

function NavBar() {
  return (
  <div className="">
    <div className="flex justify-end font-montserrat mt-4 mr-10">
    <a href="" className="text-black  py-0 px-8 rounded ml-2">Features</a>
    <a href="" className="mr-4 text-black  py-0 px-8 rounded">Pricing</a>
    <a href="" className="bg-blue-500 hover:bg-blue-700 text-white py-0 px-8 rounded">Sign Up</a>
  </div>
  <div className='-mt-10 ml-20 w-1/6 h-auto'>
    <img src='./sme-image.png' className=''/>
   </div>
 </div>

  );
}

export default NavBar;
