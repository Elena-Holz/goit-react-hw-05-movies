import {useState } from "react";
import css from 'components/SearchBar/SearchBar.module.css';
import PropTypes from 'prop-types';


export default function Searchbar({onChange}) {
    const [searchName, setSearchName] = useState('');
   

    const handleChange = (e) => {
        return setSearchName(e.target.value.trim().toLowerCase());
    }


     const handleSubmit = (e) => {
         e.preventDefault();
        if (searchName.trim() === '') {
            alert('Enter request name')
            return;
        }
         setSearchName(searchName) 
         console.log('searchname', searchName);
       onChange(searchName)
        setSearchName("");
    }


        return (
      
    <form className={css.searchForm} onSubmit={handleChange}>
        <div className={css.formGroup}>
             <button type="submit" className={css.searchbtn} onClick={handleSubmit}>
                <span className={css.searchButton_label}>Search</span>
            </button>       
            <input
            className={css.field}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
                onChange={handleChange}
            value={searchName}
            />
            
        </div>
    </form>

        
    )
}

Searchbar.propTypes = {
    searchName: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
}

//  <div className={styles.formGroup}>
//             {label && <label htmlFor={id}>{label}</label>}
//             <input id={id} value={value} name={name} onChange={handleChange} type={type} className={fullClassName} placeholder={placeholder} required={required} pattern={pattern} />
//         </div>

//  const fullClassName = className ? `${styles.field} ${className}` : styles.field;