// @ts-nocheck
import React from 'react';
import Link from 'next/link';


//  below isthe grid/cass vbased component sampler using tailwind 
//  I went with a 1280 cause its kind of a default know res 720p
//  I'm assuming its okay make these comments in general our code? 



const EricCommunitySection = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
       <div className="grid grid-cols-2 grid-rows-4 gap-1 w-1280 h-720">
      
         <div className="flex flex-col justify-center-top items-left bg-white p-4 col-span-2 sm:col-span-2 md:col-span-1 row-span-2 outline-black">
            <h1 className="text-4xl font-bold mb-4 text-dark font-body">Get Involved In The Nerrative Community</h1>
               <p className="text-md text-left text-dark font-body" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
        </div>
          
          <div className="flex flex-col justify-center items-left bg-white p-4">
            <h2 className="text-2xl font-bold mb-4 text-dark font-body" >Join A Collective</h2>
               <p className="text-sm text-left text-dark font-body" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
        </div> 
          
           <div className="flex flex-col justify-center-top items-center bg-darkgrey p-4 row-span-2">
             <h2 className="text-4xl font-bold mb-4 text-dark font-body" >Nerrative Community Forums</h2>
                <p className="text-md text-center text-dark font-body" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                <p><br />
                </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

       
        </div>

            <div className="flex flex-col justify-center items-center bg-darkgrey p-4">
              <h2 className="text-2xl font-bold mb-4 text-dark font-body" >Topic Forums</h2>
                <p className="text-sm text-center text-dark font-body" >        
                    <Link href="/whereever">Learn More</Link>
                    </p>
        </div>
  
             {/*  Using the tailwind brand accent color  */}

             <div className="flex flex-col justify-center items-center bg-brandAccent p-4">
               <h2 className="text-4xl font-bold mb-4 text-dark font-display" >Class Forum</h2>
                 <p className="text-sm text-center text-dark font-body" >
                     <Link href="/whereever">Learn More</Link> 
                        </p>
     
        </div>
     
            {/*  Create a class to allow the hoover transition effect w/ pulse  here  */}

    <div class={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 opacity-70 animate-pulse transition duration-2 ease-in-out hover:opacity-100`}>  
                         
              <h2 className="text-4xl font-bold  mb-4 text-white font-body" > 
                <Link href="/whereever">[ New Arrivals | Join Us ]</Link></h2>
                   <div className="text-lg text-center text-white font-body" >
                     {/* White space / */}
                      </div> 
                          </div>

   
      </div>
    </div>
  );
};

export default EricCommunitySection;