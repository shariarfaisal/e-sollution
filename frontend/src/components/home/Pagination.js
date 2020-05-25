import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'


const Pagination = ({ page, setPage, notFound }) => {
  const history = useHistory()
  const [pages,setPages] = useState([1,2,3,4,5])


  const previousBtn = (e) => {
    if(page !== 1){
      history.push(`?page=${page - 1}`)
      const exists = pages.find(i => i === page - 1)
      if(!exists){
        pages.pop()
        pages.unshift(page-1)
        setPages([...pages])
      }
      setPage(page-1)
    }
  }

  const nextBtn = e => {
    history.push(`?page=${page + 1}`)
    const exists = pages.find(i => i === page + 1)
    if(!exists){
      pages.shift()
      pages.push(page+1)
      setPages([...pages])
    }
    setPage(page+1)
  }

  const normalBtn = (arg) => {
    if(!(page <= arg && notFound)){
      history.push(`?page=${arg}`)
      setPage(arg)
    }
  }

  return(
    <div className="pagination d-flex justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <button
            onClick={previousBtn}
            disabled={page === 1 ? true: false}
            type="button" className="btn btn-lg btn-light text-info border font-6 mx-1 px-4"
          >Previous</button>
        </li>
          {pages.map(i => {
            return(
              <li key={i} className="nav-item">
                <button
                  type="button"
                  onClick={e => normalBtn(i)}
                  className={`btn btn-lg btn-light font-6 border text-info mx-1 px-3 ${page === i ? 'btn-active': ''}`}
                >{i}</button>
              </li>
            )
          })}
        <li className="nav-item">
          <button
            disabled={notFound}
            onClick={nextBtn}
            type="button"
            className="btn btn-lg btn-light text-info font-6 border mx-1 px-4"
          >Next</button>
        </li>
      </ul>
    </div>
  )
}
export default Pagination
