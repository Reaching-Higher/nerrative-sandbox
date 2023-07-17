// @ts-nocheck

import React from 'react';
import EricCommunitySection from './communitycard';

// Here I ended up importing my component EricCommunitySection calling it from another page -- 
// I forgot what this method is called actually lol
// I'm assuming its okay make these comments in general our code? 


 /* //  Not sure if the class is needed here--  its needed but keeps me referenced. */

const App = () => {
  return (
              <div className="flex">  
   
              <EricCommunitySection />
        </div>
  );
};

export default App;