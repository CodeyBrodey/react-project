import './style.css';

function Filter() {
    return(
        <button className='filter '>
            <span filter__text>Filter by Region</span>
            <svg className='filter__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
            <div className="filter__options filter__options--open">
                <button className='filter__options__btns'>Africa</button>
                <button className='filter__options__btns'>America</button>
                <button className='filter__options__btns'>Asia</button>
                <button className='filter__options__btns'>Europe</button>
                <button className='filter__options__btns'>Oceania</button>
            </div>
        </button>
    )
}


export default Filter;