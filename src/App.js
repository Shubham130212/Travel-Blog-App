import Header from "./header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Home from "./home/Home";
import Diaries from "./diaries/Diaries";
import Auth from "./auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile/Profile";
import { Add } from "@mui/icons-material";
import { useEffect } from "react";
import { authAction } from "./store";
import {DiaryUpdate} from "./diaries/DiaryUpdate";


function App() {
  const dispatch=useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(()=>{
     if(localStorage.getItem("userId")){
      dispatch(authAction.login());
     }
  },[localStorage]);
  return (
    <div>
      <header>
        <Header />
      </header>


      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/diaries" element={<Diaries />}>
            </Route>
            <Route path="/auth" element={<Auth />}>
            </Route>
            {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />}>
              </Route>
              <Route path="/profile" element={<Profile />}>
              </Route>
              <Route path="/post/:id" element={<DiaryUpdate />}>{""}
              </Route>
            </>
            )}
          </Routes>
        </Router>

      </section>
    </div>
  );
}

export default App;
