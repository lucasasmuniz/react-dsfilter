import { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import { ProductDTO } from "../../models/Product";
import * as productService from '../../services/product-service.ts';
import { ContextProductCount } from "../../utils/context-product.ts";

export default function ListingBody(){

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const {setContextProductCount} = useContext(ContextProductCount);

    useEffect(() => {
        const products = productService.findByPrice(0,Number.MAX_VALUE);
        setProducts(products)
        setContextProductCount(products.length);
    }, [])

    function handleFilter(minValue:number, maxValue:number){
        const products = productService.findByPrice(minValue,maxValue);
        setProducts(products)
        setContextProductCount(products.length);
    }

    return(
        <main>
            <section>
                <Filter onFilter={handleFilter}/>
                <Listing products={products}/>
            </section>
        </main>
    );
}