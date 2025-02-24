// const Todokey ='ReactTodo';

// export const setLocalStorageTodoData =(task)=>{
//     return localStorage.setItem(Todokey , JSON.stringify(task))
// }

// export const  getLocalSrorageTodoData =(task)=>{
//  const rawTodo = localStorage.getItem(Todokey)
//  if(!rawTodo) return [];
//  return JSON.parse(rawTodo)
// }

const TodoKey = 'React';

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(TodoKey , JSON.stringify(task))
}

export const getLocalStorageTodoData = () => {
    const rawTodo =  localStorage.getItem(TodoKey)
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
}