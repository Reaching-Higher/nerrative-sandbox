# PHASE I: WF Component Build! #

Your task here is to code out a version of the wireframe included in this folder.

> Instructions:
- Use flexbox to manage the position of your component in the layout.
- Use CSS grid to build the internal layout. Each internal element is up to you.
- Use proper semantic html where applicable.
- Use the prebuilt tailwind classes for colors and text elements. These can be found in the tailwind.config.js file in the root directory.
- As depicted in the wireframe, all actionable elements should respond to hover.

> Notes:
- You do not have to use typescript in this round. We'll go through that phase on the second pass.
- You do not need to make this responsive, desktop view is fine for now.
- Notice that the current layout has a dark background - you will need to adapt the colors in the WF so that they are appropriate for dark mode.
- The sizes of each element don't need to be pixel perfect, but try to keep a similar alignment between the elements.



# PHASE II: Adding TypeScript #

In this phase of the process, I'd like you to add TypeScript to your component. 

> Instructions:

+ Part 1 +

1. Remove the @ts-nocheck comment from the top of your component file. This will cause the TS compiler to highlight any existing issues with your code.
2. Pull the most recent changes to the repo. This will include an API route that I've constructed, from which you will pull data that will act as the content for your component.
3. You will need to figure out how to get the data from the internal API into your component. I suggest the next.js documentation as a first resort.
4. Define an interface for the data that comes in from the fetch request. This interface will need to have the same shape as the data that comes back from the API. I'll leave it to you to figure out where to add these types 😉.

+ Part II + 

1. Because the data that will provide the text content for each card is now in the form of an array, you'll need to restructure your component so that it can render this data. For this step, I want you to create a separate component beneath your main component that accepts one of the objects from the array that comes in from the fetch request.
> Notes:
- Construct the new component such that it uses the same interface you defined for the data that comes back from the fetch request.
- This component should include any applicable styling.
- Remember that some objects in the array include extra properties. Use conditional logic to deal with this.


# PHASE III: Responsive Components #

In this phase of the process, I'd like you to make your component responsive to different screen sizes.

> Instructions:

1. You should see two new wireframes in your folder. Add styling to your component that matches these wireframes at the appropriate screen sizes.
2. Add to, or rewrite your tailwind classes so that when the screen size shrinks towards mobile, everything retains its proportion. When the size of the viewport reaches the specified breakpoint, it should restructure itself to match the new wireframes. 


> Notes:
- The layout is also responsive and should accommodate varying screen sizes.
- This should be a fairly easy one!
