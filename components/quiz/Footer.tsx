import React from 'react';
import Image from 'next/image';
// --- FOOTER COMPONENT ---
const Footer = () => {
  return (
    // Apply background, padding, and text alignment to the main container
    <footer className="block text-gray-400 text-center w-full py-4 items-center lg:hidden">
      
        {/* <p>ME-RIISE Foundation</p> */}
        <div className='flex items-center gap-2 mt-8 text-center items-center'>
            <p className='text-[15px]'>Designed with:</p>
            <Image 
            src={'/figma.png'}
            width={35}
            height={35}
            alt='Image'/>
            <Image 
            src={'/nextjs.png'}
            width={35}
            height={35}
            alt='Image'/>
            <Image 
            src={'/supabase.png'}
            width={35}
            height={35}
            alt='Image'/>
            <Image 
            src={'/shad.png'}
            width={35}
            height={35}
            className='rounded-md'
            alt='Image'/>
        </div>

        
    </footer>
  );
};

export default Footer;