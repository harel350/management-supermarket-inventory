import ProductsTable from "../../helper/components/productsTable/productsTable";

export default function ProductsListPage() {
    return (
        <div>
            <ProductsTable productsListData={[{productName:'name0',category:'fruit',price:11},{productName:'name1',category:'fruit',price:10}]}/>
        </div>
    )
}