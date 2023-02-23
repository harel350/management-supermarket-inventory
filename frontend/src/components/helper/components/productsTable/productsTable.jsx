export default function ProductsTable(props) {
    const headerTableTitle = ['#', 'Product name', 'Categoty name', 'Price']
    return (
        <div>
            <table className='table' >
                <thead className='thead'>
                    <tr>
                        {
                            headerTableTitle.map(item => {
                                return (
                                    <th key={item} scope="col">{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productsListData.map((item, index) => {
                            return (
                                <tr className='tr' key={index}>
                                    <th scope='col' >{index + 1}</th>
                                    <td>{item.productName}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                       <td >
                                        <i className="fa-solid fa-pencil editIcon"></i>
                                    </td>
                                   {/* <td onClick={onClickRemoveHandle.bind(this, item)}>
                                        <i className="fa-solid fa-trash trashIcon"></i>
                                    </td> */}
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}