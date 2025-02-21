import { ProductDTO } from '../../../models/Product';
import './styles.css';

type Props = {
    products: ProductDTO[];
}

export default function Listing({ products }: Props) {
    return (
        <div className="main-page-container container ds-grid">
            {
                products.map(product => (
                    <div key={product.id} className='product-info'>
                        <p>{product.name}</p>
                        <h2>R$ {product.price}</h2>
                    </div>
                ))
            }
        </div>
    );
}