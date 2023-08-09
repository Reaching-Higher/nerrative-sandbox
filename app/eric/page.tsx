import React from 'react';

import EricCommunitySection from './communitycard';
// ^ Please use named exports whenever possible.

/*
  ! NOTE !
  # I know I haven't told you guys this yet, but I want to organize imports 
  # by category. Follow the below template:

  - 3rd party imports (React, Next, Framer, etc.)
  % SPACE %
  - Helper fns, data imports, hooks. Anything created in app that is NOT a component.
  % SPACE %
  - Components (anything that returns JSX)
  % SPACE %
  - Styling elements (CSS, animations, etc.)
  % SPACE %
  % SPACE %
  ...code

*/

/*
  # Here I ended up importing my component EricCommunitySection calling it from another page --
  # I forgot what this method is called actually lol
  > No worries! I like that you're paying attention to the way your code is organized and labeled.
  # I'm assuming its okay make these comments in general our code?
  > Yes, please! Like the figma comments, code comments go a long way towards clarifying your purpose.

  # Not sure if the class is needed here--  its needed but keeps me referenced.
  > Are you talking about the "flex" here? If so, then yes. The contents will overflow if it is absent.
*/

const App = () => {
  return (
    <div className="flex">
      {/* @ts-expect-error Server Component */}
      <EricCommunitySection />
    </div>
  );
};

export default App;
