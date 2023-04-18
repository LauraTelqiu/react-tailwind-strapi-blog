import React from 'react'

const BlogContent = () => {

  const blog = [
    {
      "id": 1,
      'title': 'Blog 1',
      'desc': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      'coverImg': 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
      'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To'
      //         'authorName':'John Doe',
      //         'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
      //         'authorDesc':'Web Developer'

    },

  ]


  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
          <div className='col-span-2 gap-x-8 gap-y-8 '>
            <img className='h-56 w-full object-cover' src={blog.coverImg} />
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
            <div className='pt-5'><p>
              {blog.content}
            </p>

            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default BlogContent
