import React, { useCallback, useId, useState } from 'react'

const AboutUs = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <ListData/>
    </div>
  )
}

const intialData =[
  {
    id:1,
    name:'object-1'
  },
  {
    id:2,
    name:'object-2'
  },
  {
    id:3,
    name:'object-3'
  }
]

const List = ({ users, onRemove }) => {
  console.log('list components Rendering!!!');
  return (
    <div>
      <ul>
        {
          users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span> </li>)
        }
      </ul>
    </div>
  )

}

const MemoList = React.memo(List)

const ListData = () => {
  const [user, setuser] = useState(intialData)
  const [inputData, setinputData] = useState('')




  const handleRemove = useCallback(
    (userId) => {
      const filterUser = user.filter((user) => user.id !== userId)
      setuser(filterUser)
    }, [user])

   return (
    <div>
      <input type="text" name='' id='' value={inputData} onChange={(e) => setinputData(e.target.value)} />
      <MemoList users={user} onChange={handleRemove}></MemoList>
    </div>
  )
}

export default AboutUs
