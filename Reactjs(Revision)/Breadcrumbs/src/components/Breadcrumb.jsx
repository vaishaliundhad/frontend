import React from 'react'
import { useLocation , Link } from 'react-router-dom'

const Breadcrumb = () => {

    const location = useLocation()

    console.log(location);

    let pageLink = ''

    const PagePath = location.pathname

    console.log(PagePath);

    const pathSplit = PagePath.split('/')

    console.log(pathSplit);

    const filterPath = pathSplit.filter((link) => link !== '')

    console.log(filterPath);

    const createLink = filterPath.map((link) => {


        pageLink += `/${link}`

        return(
            <div>
                <Link to={pageLink}><span>/</span>{link}</Link>
            </div>
        )
    })

    console.log(createLink);

    console.log("pageLink" , pageLink);
    
    
    
    
    
    

  return (
    <div className='flex'>
      {
        createLink
      }
    </div>
  )
}

export default Breadcrumb
