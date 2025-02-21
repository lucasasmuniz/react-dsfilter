import { useState } from 'react';
import './styles.css';

type Props = {
    onFilter: Function;
}

type FormData = {
    min?: number,
    max?: number
}

export default function Filter({onFilter}:Props) {

    const [formData, setFormData] = useState<FormData>({})

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.min || 0, formData.max || Number.MAX_VALUE);
    }

    function handleInputChange(event:any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value})
    }

    return (
        <div className="main-page-container container mb-20">
            <form className='filter-form'>
                <input 
                name="min" 
                value={formData.min || ""} 
                onChange={handleInputChange}
                type="text" 
                placeholder='Preço mínimo'/>
                <input 
                name="max" 
                value={formData.max || ""}
                onChange={handleInputChange}
                type="text" 
                placeholder='Preço máximo' />
                <button onClick={handleSubmit} type='submit'>Filtrar</button>
            </form>
        </div>
    );
}