import React from 'react'
import Conteiner from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

function AddPost() {
  return (
    <div className='py-6'>
      <Conteiner>
        <PostForm />
      </Conteiner>
    </div>
  )
}

export default AddPost
