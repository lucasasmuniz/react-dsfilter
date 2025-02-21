import { useContext } from 'react';
import './styles.css';
import { ContextProductCount } from '../../utils/context-product';

export default function Header() {

  const {contextProductCount} = useContext(ContextProductCount);

  return (
    <header>
        <nav className='container'>
            <h1>DSFilter</h1>
            <p>{contextProductCount} produto(s)</p>
        </nav>
    </header>
  )
}
