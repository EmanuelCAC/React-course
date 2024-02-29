import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Conteiner from '../components/container/Container'
import PostCard from '../components/PostCard'

function AllPost() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
        <Conteiner>
          <div className="flex flex-wrap">
            <h1>Login to read posts</h1>
          </div>
        </Conteiner>
      </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Conteiner>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Conteiner>
    </div>
  )
}

export default AllPost
