import { useDispatch, useSelector } from "react-redux";
import { postDocter } from "../Redux/DocterReducer/action";
import {useState} from 'react'
import { Navigate } from "react-router-dom";
import {DoctersDashboard} from './DoctersDashboard'


export const AddBook = () => {

  const dispatch=useDispatch()
  const auth=useSelector(store=>store.authReducer)
  const docter=useSelector(store=>store.docterReducer)

  const[formdata,setFormdata]=useState({
    
    name: "",
	  image: "",
	  specialization: "",
	  experience: "",
	  location: "",
	  date: "",
		slots : "",
	  fee: ""
    
  })

  const handleChange=(e)=>{
    let {name,value}=e.target 
    if(name=='published_year' || name=='isbn'){
      value=Number(value)
    }
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    let st=postDocter(dispatch,formdata,auth.token)
    if(st){
      return <Navigate to='/' />
    }
    
  }

  return (
    <div data-testid="add-new-page">
      <form className="form" data-testid="addbook-form" onSubmit={handleSubmit}>
        <p className="form-title">Add New Book</p>
        <div className="input-container">
          <span>Book Name</span>
          <input
            type="text"
            data-testid="book-title"
            placeholder="Enter Book Name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Author Name</span>
          <input
            type="text"
            data-testid="book-author"
            placeholder="Enter Author Name"
            name="author"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book published year</span>
          <input
            type="text"
            data-testid="book-published_year"
            placeholder="Enter book published year"
            name="published_year"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span>Book Genre</span>
          <input
            type="text"
            data-testid="book-genre"
            placeholder="Enter Book genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <span style={{ color: "black" }}>Book isbn no</span>
          <input
            type="text"
            data-testid="book-isbn"
            placeholder="Enter Book isbn no"
            name="isbn"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
