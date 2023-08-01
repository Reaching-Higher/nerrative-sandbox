
/*
  * Page Files & Imports *
  # In Next.js 13, any file within the 'app' directory named page.tsx is treated as a route.
  # These page routes get their name from the direct parent folder. In this case, '3d-sandbox'. 
  # If you visit http://localhost/3d-sandbox you'll see the contents of this page.
  
  * However *
  # Because it is difficult to know which page.tsx file you're seeing in your editor, we're going to 
  # use something similar to a 'barrel file' architecture. Essentially, this means that we will have a 
  # component file that uses the name of the folder as its file name. That component will then be 
  # imported into its page as you see below. Use this pattern whenever creating new pages.
*/

import React from 'react'

import { ThreeDSandbox } from './3d-sandbox'

const ThreeDPage = () => {
  return (
    <ThreeDSandbox />
  )
}

export default ThreeDPage