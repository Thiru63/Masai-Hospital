import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { getDataDocters } from "../Redux/DocterReducer/action";
import { Loading } from "../Components/Loading";
import { BookCard } from "../Components/BookCard";
import { Navigate } from "react-router-dom";

export const DoctersDashboard = () => {
  
  const dispatch=useDispatch()
  const state=useSelector(store=>store.docterReducer)
  const auth=useSelector(store=>store.authReducer)
  console.log(state)

useEffect(()=>{
getDataDocters(dispatch,auth.token)
},[])

  if(!auth.isAuth){
    return <Navigate to='/login'/>
  }

  if(state.loading){
    return <Loading/>
  }

  return (
    <div style={{ textAlign: "center" }} id="dashBoard">
      <h1>Welcome to Masai Library Dashboard</h1>
      <div data-testid="all-books">{/* render all the books */}
      {state.books?.map((book,i)=>{
        return <BookCard key={book._id} book={book}/>
      })}
      </div>
    </div>
  );
};
