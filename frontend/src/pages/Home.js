import React from 'react';
import "../styles/CategoryCard.css";
import "../styles/home.css";
import CategoryCard from '../components/CategoryCard';

const home = ()=> {
    return (
        <div>
            <div>
                <p>Categories</p>
                <section className="categories">
                <CategoryCard categoryText="T-shirt"/>
                <CategoryCard categoryText="Mobile"/>
                <CategoryCard categoryText="Computer"/>
                </section>
            </div>

            
        </div>
    );
};
export default home;