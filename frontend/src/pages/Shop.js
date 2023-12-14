import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import CreateProduct from './createProduct';
import "../styles/ProductCard.css";
import "../styles/shop.css";
import axios from 'axios';

const fetchProducts = async () => {
    const res = await axios.get("http:/localhost:5000/products");
const data = res.data;

console.log(data);

return data;
};
const Shop = ()=> {
   const [productData, setProductData] = useState([]);
   const assignData = async () => {
    const fetchedProductData = fetchProducts();
   setProductData (fetchedProductData);
};

    useEffect(() => {
        fetchProducts();
        
    }, []);
    return (
        <div>
            <p>All Products</p><section className='all-products'>
            <ProductCard productImg="https://media.istockphoto.com/id/1034254074/vector/set-of-three-wide-television-screens-mock-up-isolated.jpg?s=612x612&w=0&k=20&c=EKU-pmsfUC3_paMfCOJNOWGtUJBFXTC0mLprpEy7wMc=" title="TV"
            price="30,000 INR"/>
            <ProductCard productImg="https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png" title="Mobile"
            price="16,000 INR"/>
            <ProductCard productImg="https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=" title="Laptop"
            price="55,000 INR"/>
            <ProductCard productImg="https://cdn.pixabay.com/photo/2015/07/20/19/50/usb-853230_1280.png" title="PenDrive"
            price="2,000 INR"/>
        </section>
        <section>
            { productData.map((product) =>{
                    return (
                        <ProductCard productImg={product.imgUrl}
                        title={product.title}
                        price={product.price}/>
                        );
                })
            };
            </section></div>
    );
};
export default Shop;