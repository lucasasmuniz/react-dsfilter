import { useEffect, useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import { ProductDTO } from "../../models/Product";
import * as productService from '../../services/product-service.ts';

export default function ListingBody(){

    const [products, setProducts] = useState<ProductDTO[]>([])

    useEffect(() => {
        setProducts(productService.findByPrice(0,Number.MAX_VALUE))
    }, [])

    return(
        <main>
            <section>
                <Filter />
                <Listing products={products}/>
            </section>
        </main>
    );
}