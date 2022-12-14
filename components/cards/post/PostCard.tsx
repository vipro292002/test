import Link from 'next/link'
import React from 'react'
import { IPostCard } from '../../../lib/types/PostCard'

type Props = {}

const PostCart: React.FC<IPostCard> = ({ title, href, category, description, date, datetime, imageUrl, readingTime, author, tags }) => {
  return (
    <div className="group flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out" >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imageUrl} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">

          <Link href={category.href}>
            <a className="text-sm font-medium text-primary-100 hover:underline hover:text-primary-300">
              {category.name}
            </a>
          </Link>

          <Link href={href}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 group-hover:text-primary-100">{title}</p>
              <p className="mt-3 text-base text-gray-500">{description}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Link href={author.href} >
              <a>
                <span className="sr-only">{author.name}</span>
                <img className="h-10 w-10 rounded-full" src={author.imageUrl} alt="" />
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <Link href={author.href} >
              <a className="hover:underline text-sm font-medium text-gray-900 hover:text-primary-100">
                {author.name}
              </a>
            </Link>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={datetime}>{date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTime} read</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 ">
          {tags.map((item: { id: number, name: string }, index: number) => {
            return <div
              key={index + 1}
              className="hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-primary-100 rounded-full"
            >

              <Link href={`/blog/category/tag?${item.id}`} >
                <a className='hover:text-primary-300  '>
                  {item.name}
                </a>
              </Link>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default PostCart