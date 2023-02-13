import './style.css';

function Filter() {
    return(
        <select name='filter' className="filter" placeholder="Filter">
            <option value='' hidden selected disabled className='filter__option'>Filter by Region</option>
            <option value='africa' className="filter__option">Africa</option>
            <option value='america' className="filter__option">America</option>
            <option value='asia' className="filter__option">Asia</option>
            <option value='europe' className="filter__option">Europe</option>
            <option value='oceania' className="filter__option">Oceania</option>
        </select>
    )
}


export default Filter;