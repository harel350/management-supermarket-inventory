import { useState } from "react"
import Input from "../../helper/components/input/input"
import './addProductPage.css'
export default function AddProductPage() {
    const [productName, setProductName] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [price, setPriec] = useState(0)
    const categoryList = [
        { categoryId: 1, categoryName: 'fruit' },
        { categoryId: 2, categoryName: 'fruit2' },
        { categoryId: 3, categoryName: 'fruit3' },
    ]
    function onSubmitHandle(e) {
        e.preventDefault()
        let productData = {
            productName: productName,
            categoryName: categoryName,
            price: price
        }

        fetch('http://localhost:4000/product/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
    }
    function onChangeHandle(value, fieldName) {

        switch (fieldName) {
            case 'productName':
                setProductName(value);
                break;
            case 'categoryName':
                setCategoryName(value);
                break;
            case 'price':
                setPriec(value);
                break;
            default:
                break;
        }

        console.log('fieldName', fieldName)
        console.log('value', value)
    }
    return (
        <div className="bg">
            <div className=" addProductContainer">
                <form className="addProductForm containerBg" onSubmit={onSubmitHandle}>
                    <Input
                        value={productName}
                        type='text'
                        id="productName"
                        labelName="Product's name"
                        onChange={onChangeHandle} />
                    <Input
                        value={categoryName}
                        type='text'
                        list={true}
                        datalist={categoryList}
                        id="categoryName"
                        labelName="Category name"
                        onChange={onChangeHandle} />

                    <Input
                        value={price}
                        type='number'
                        id="price"
                        labelName="Price"
                        onChange={onChangeHandle} />
                    {/* <Input
                    type='file'
                    id="imageUrl"
                    labelName="Image url"
                    onChange={(value) => console.log(value)} /> */}

                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}