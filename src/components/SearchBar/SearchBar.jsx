import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements['input-images'].value;
        
        if(event.target.elements['input-images'].value.length > 0){
            onSearch(inputValue);
        }else{
            toast.error("Заповни поле пошуку")
        }
        
    };

    return (
        <header className={css.header}>
            <div><Toaster
            position="top-right"
            reverseOrder={false}
            /></div>
            <form onSubmit={handleSubmit} className={css.form}>
                <input type="text" autoComplete="off" autoFocus placeholder="Search images" name="input-images" className={css.input} />
                <button type="submit" className={css.btn} name="btn">Load</button>
            </form>
        </header>
    );
}

export default SearchBar;
