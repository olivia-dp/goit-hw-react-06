import s from "./SearchBox.module.css"
import { changeFilter } from "../../reduce/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../reduce/filtersSlice";


const SearchBox = () => {
const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
    return (
        <>
        <label className={s.label}>
          <span className={s.span}>Find contacts by name:</span>
                <input className={s.input} type='text' value={filter} onChange={handleChange}/>
        </label>
        </>
    )
};

export default SearchBox;
