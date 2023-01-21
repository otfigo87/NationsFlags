import React from 'react';
import Logo from '../components/Logo';
import Navigation from "../components/Navigation";



const Blog = () => {
  return (
    <div className="blog-container">
        <Logo />
        <Navigation />
        <h1>Blog</h1>

        <form>
            <input type="text" placeholder='Name'/>
            <textarea name="" placeholder='Message'></textarea>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
  )
}

export default Blog