import React, { useEffect, useState } from "react";
import { getStoryIds } from '../services/apis'
import { Story } from "../components/Story"
import ReactPaginate from "react-paginate";

export function StoriesContainer() {  
  const [storyIds, setStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;
  const offset = currentPage * perPage;  
  const pageCount = Math.ceil(storyIds.length / perPage);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));    
  }, []);

  const handlePageClick = ({selected: selectedPage}) => {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="container">
      <h1 className="display-1 col-sm-8 my-4 offset-md-4">Hacker News</h1>
      {
        storyIds.slice(offset, offset + perPage).map( 
        storyId => {console.log("1:", storyId )
        return <Story key={storyId} storyId={storyId} />})
        }      
      <div>
        <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}        
        />
      </div>
    </div>
  ) 
}