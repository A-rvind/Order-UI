import "./Order.css"
import DataTable from 'react-data-table-component';


{/* ONLY Responsive
NO Functionalities added*/}
const Orderpage = () => {

    {/* DUMMY DATA*/}
    const columns = [
        {
            name: 'ID',
            selector: (row) =>row.id,
            sortable: true          

        },
        {
            name: 'SHPIIFY#',
            selector: (row) => row.shipiify,
            sortable: true          
        },
        {
            name: 'DATE',
            selector: (row) => row.date,
            sortable: true           
        },
        {
            name: 'STATUS',
            selector: (row) =>row.id,
            sortable: true          

        },
        {
            name: 'CUSTOMER',
            selector: (row) => row.name,
            sortable: true          
        },
        {
            name: 'EMAIL',
            selector: (row) =>row.email,
            sortable: true          

        },
        {
            name: 'COUNTRY',
            selector: (row) => row.country,
            sortable: true          
        },
        {
            name: 'SHIPPING',
            selector: (row) =>row.shipping,
            sortable: true          

        },
        {
            name: 'SOURCE',
            selector: (row) => row.source,
            sortable: true          
        },
        {
            name: 'ODER TYPE',
            selector:(row) => row.order,
            sortable: true
        }
    ];
    const data =[
        
        {
            id: 1,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'yousea@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 2,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'dkbvjdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 3,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'kndvdcdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer',
           
        },
        {
            id: 1,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'yousea@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 2,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'dkbvjdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 3,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'kndvdcdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer',
           
        },
        {
            id: 1,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'yousea@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 2,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'dkbvjdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer'
            
        },
        {
            id: 3,
            shipiify: 17713,
            date: '18 Feb 2024',
            status: 'completed',
            name: 'Arvind',
            email:'kndvdcdv@gmaul.com',
            country: 'India',
            shipping: 'Maharashtra, Pune',
            source: 'Amazon',
            order: 'Customer',
           
        },
        
    ]

    
  return (
    <div className='container'>

        <div className="subcontainer">
            <div className="subheader">Product Summary</div>
            <div className='rightside'>
            <div className="right"><p>Search </p>
            <select className='right1' >
             <option value="">ALL COLUMS</option>
             <option value="category1">category 1</option>
             <option value="category2">category 2</option>
            </select>
            </div>
            <div className="right">
            <button className='dispatch'>DISPATCH SELECTED</button>                
                </div>  
            <div className="pagination"> {/* DUMMY TO SHOW CASE THE PAGINATION*/}
                <a>&#60;</a>
                <a >1</a>
                <a>2</a>
                <a className='active'>3</a>
                <a>4</a>
                <a>5</a>
                <a>6</a>
                <a>7</a>
                <a>8</a>
                <a>&gt;</a>
                </div>       
                 
            
            </div>
        </div>
        <div> {/*DATA TABLE using react-component */}
        <DataTable
            
            columns={columns}
            data={data} 
            selectableRows
            fixedHeader
            fixedHeaderScrollHeight='500px'
            selectableRowsHighlight
            highlightOnHover
            
        /> </div>
    </div>
  )
}

export default Orderpage



