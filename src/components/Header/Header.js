import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
       return (
              <div>
                     <h2>This is my fancy Routing Website</h2>
                     <nav>
                      <CustomLink to="/">Home</CustomLink>
                      <CustomLink to="/friends">Friends</CustomLink>
                      <CustomLink to="/posts">Posts</CustomLink>
                      <CustomLink to="/About">About</CustomLink>
                     </nav>
              </div>
       );
};

export default Header;
