import React from 'react'
import { useParams } from 'react-router-dom'

export default function View() {

 const {id}=useParams();
  return (
    <div className='.view'>
  This is view pagejjjjjjjjjjjjjjjjjjjj{id}
    </div>
  )
}
