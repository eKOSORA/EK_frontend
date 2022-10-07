import { useRouter } from 'next/router'
import React from 'react'

const editStudent = () => {

  const router = useRouter()
  const { studentId } = router.query

  return (
    <div>
{studentId}
    </div>
  )
}

export default editStudent
