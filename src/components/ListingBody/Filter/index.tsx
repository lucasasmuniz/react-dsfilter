import './styles.css';

export default function Filter(){
    return(
        <div className="main-page-container container mb-20">
            <form className='filter-form'>
                <input type="text" placeholder='Preço mínimo'/>
                <input type="text" placeholder='Preço máximo'/>
                <button type='submit'>Filtrar</button>
            </form>
        </div>
    );
}