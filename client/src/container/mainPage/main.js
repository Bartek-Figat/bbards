import React from 'react';
import Header from './header';
import Slider from './slider';
import Categories from './categories';
import NewPosts from './newPosts';
import { Add } from './add';
import { About } from './about';

function Main() {
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <Slider />
      <Categories />
      <NewPosts />
      <About />
      <Add />
    </div>
  );
}

export default Main;
