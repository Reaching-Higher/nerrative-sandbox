import React from 'react'

import { TextBlock } from '../_components/text-block'

export const Intro = () => {
  return (
    <section className="!h-screen flex-container">
      <div className="grid h-[65dvh] grid-cols-2">
        <div className="h-full w-[80%] flex items-center">
          <TextBlock
            heading="The Next evolution of learning"
            paragraph={[
              'Describe what Nerrative is. Consectetur adipiscing elit. Quisque nec felis tristique, rutrum tellus quis, imperdiet dolor. Proin mi quam, sollicitudin nec congue in, luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis tristique, rutrum tellus quis, imperdiet dolor. Proin mi quam, sollicitudin nec congue in, luctus.',
              'Describe the main professional development features. Consectetur adipiscing elit. Quisque nec felis tristique, rutrum tellus quis, imperdiet dolor. Proin mi quam, sollicitudin nec congue in, luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec felis tristique, rutrum tellus quis, imperdiet dolor. Proin mi quam, sollicitudin nec congue.',
            ]}
            button="Learn More"
            path="/"
          />
        </div>
        <div className="w-full h-full">
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            src="/video/sample-video.mp4"
          />
        </div>
      </div>
    </section>
  );
}
