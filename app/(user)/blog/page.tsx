import BlogList from '@/components/BlogList';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity'
import React from 'react'


const query =groq`*[_type=='post']`;

export default async function Blog() {

  const posts = await client.fetch(query)
console.log(posts)
  return (
    <div><BlogList posts={posts}/></div>
  )
}
