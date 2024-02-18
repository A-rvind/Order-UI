import { FaSearch } from "react-icons/fa"
import "./Order.css"

{/* ONLY Responsive
NO Functionalities added*/}

const Main = () => {
  return (
   <>
    <div className='main-contaier'>
        <div className='oneheader'>
           <div className="logo">Orders</div> 
           <button className='create'>CREATE NEW</button>
        </div>

        <div className="section">
         <div className="isearch">
            <p>What are  you looking for?</p>
            <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input type="search-input" placeholder='Search for category, name, company, etc' className='isearch'/>
             </div>        
         </div>

        
         <div className="category-menu">
            <p>Category</p>
            <select className='cate' >
             <option value="">All</option>
             <option value="category1">category 1</option>
             <option value="category2">category 2</option>
            </select>
         </div>

         <div className="status-menu">
            <p>Status</p>
            <select className='cate2'>
             <option value="">All</option>
             <option value="pending">Pending</option>
             <option value="completed">completed</option>
             </select>
             
         </div>
         
            <button className='btnsearch'>SEARCH </button>
        </div>        
        </div>
        
   </>
  )
}

export default Main


 