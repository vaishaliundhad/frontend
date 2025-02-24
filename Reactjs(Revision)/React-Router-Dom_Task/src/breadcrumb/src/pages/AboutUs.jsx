import React, { useCallback, useState } from 'react'

// useCallback Hook and React.memo 

const AboutUs = () => {
  return (
    <div>
      <h1 className='heading'>This is AboutUs Page</h1>
      {/* <ListData/> */}
    </div>
  )
}


const initialData = [
  {
    id:1,
    name:'Object-1'
  },
  {
    id:2,
    name:'Object-2'
  },
  {
    id:3,
    name:'Object-3'
  }
]


// const List = React.memo(
//   ({users , onRemove}) => {
  
//     console.log('List Component Renderd!!');
    
//     return(
//       <div>
//         <ul>
//           {
//             users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)
//           }
//         </ul>
//       </div>
//     )
//   }
// )

const List = 
  ({users , onRemove}) => {
  
    console.log('List Component Renderd!!');
    
    return(
      <div>
        <ul>
          {
            users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)
          }
        </ul>
      </div>
    )
  }

const MemoList = React.memo(List)

const ListData = () => {

  const [user , setUser] = useState(initialData)
  const [inputData , setInputData] = useState('')

  const handleRemove = useCallback(
    (userId) => {
      const filterUser = user.filter((user) => user.id !== userId)
      setUser(filterUser)
    }, [user])

  return(
    <div>
      <input type="text" name="" id="" value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <MemoList users={user} onRemove={handleRemove}/>
    </div>
  )
}

export default AboutUs
