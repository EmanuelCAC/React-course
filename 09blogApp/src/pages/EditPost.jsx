import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Conteiner from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

function EditPost() {

  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        } else {
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  appwr

  return (
    <div className='py-6'>
      <Conteiner>
        <PostForm post={post} />
      </Conteiner>
    </div>
  )
}

export default EditPost
