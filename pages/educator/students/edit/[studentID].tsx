import { useRouter } from 'next/router'
import React from 'react'

const editStudent = () => {

  const router = useRouter()
  const { studentID } = router.query
  console.log(router)
  return (
    <div>
      The ID is {studentID}
    </div>
  )
}

export default editStudent
