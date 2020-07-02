import React,{useState} from "react";
import './RegisterForm.styles.scss';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import DatePickerR from '../date'


export default () => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')


  
  const history = useHistory();
  const navigateTo = () => history.push('/news');//eg.history.push('/login');
  return (
    <div className="form-container">
      <form className="form-style-9">
        
        <ul>
            <li>
          <input
            className="field-style field-full align-none"
            name="name"
            onChange={(e)=> setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Add your title here"
          />
        </li>
        
        <li>
          <textarea
            className="col-12 form-control"
            name="description"
            onChange={(e)=> setDesc(e.target.value)}
            type="text"
            value={desc}
            placeholder="Add your description here"
          />
        </li>
        <li>
          <input
            className="field-style field-split align-left"
            name="author"
            onChange={(e)=> setAuthor(e.target.value)}
            type="text"
            value={author}
            placeholder="Add your author here"
          />
          
           <DatePickerR />
        </li>
        <li>
          
       </li>
        </ul>
        
        <button className="button" onClick={()=>console.log(name,desc,date,author)} onClick={navigateTo}>
          Create
        </button>
        
      </form>
    </div>
  );
};
