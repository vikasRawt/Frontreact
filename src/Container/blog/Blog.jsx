import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import{blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className='gpt_blog section_padding'  id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient_text'>A lot is happening.
         we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article imgUrl={blog01} date= "7th Aug 2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
        </div>
      <div className='gpt3__blog-container-groupB'>
      <Article imgUrl={blog02} date= "7th Aug 2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
      <Article imgUrl={blog03} date= "7th Aug 2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
      <Article imgUrl={blog04} date= "7th Aug 2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
      <Article imgUrl={blog05} date= "7th Aug 2023" title="GPT-3 and Open AI is the future.Let us explore how it is?"/>
      </div>
    </div>
    </div>
  );
}

export default Blog;