import React from "react";
import {useForm} from 'react-hook-form';
import axios from "axios";

const CreateProduct = () => {
    const {handleSubmit, register, formState: 
        {errors},} = useForm();

        const submitHandler = async ({title, description,price, imgUrl}) => {
            const res = await axios.post ("http://localhost:5000/products", {
                title,
                description,
                price,
                imgUrl,
            });
            if (res.status === 200) {
                alert("Product created successfully");
            } else {
            alert("Error creating product");
        }
        }
    return (
    <>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label className="form-label">Description</label>
                <input type="text"
                name="description"
                id="description"
                {...register("description", {required:
                "Please enter product description"})}/>
                {errors.description && <div>{errors.description.message}</div>}
            </div>
            <div>
                <label className="form-label">Price</label>
                <input type="number"
                name="price"
                id="price"
                {...register("price", {required:
                "Please enter product price"})}/>
                {errors.description && <div>{errors.price.message}</div>}
            </div>
            <div>
                <label className="form-label">Image URL</label>
                <input type="text"
                name="imgUrl"
                id="imgUrl"
                {...register("imgUrl", {required:
                "Please enter product image URL"})}/>
                {errors.description && <div>{errors.imgUrl.message}</div>}
            </div>
        </form>
    </> );
};

export default CreateProduct;