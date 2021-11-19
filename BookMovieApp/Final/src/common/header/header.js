import './header.css';
import './logo.svg';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import Home from "../../screens/HOME/Home";


const container = styled.div`
   display: flex;
   flex-direction: column;
   `;

const Header = styled.div`
   background-color: black;
   color: white;
   display: flex;
   flex-direction: row;
   padding: 10px;
   `;
const container = styled.div`
   background-color: #ff9999;
   padding: 8px 8px 8px 8px;
   text-align: center;
   font-size: 1rem;
`;
const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`;
function App() {
    return<container>
        <Header>
            Movies App
        </Header>
        Upcoming Movies
        <MovieListContainer>
            <Home/>
            <Home/>
            <Home/>
            <Home/>
        </MovieListContainer>
    </container>
}
handleLogoutClick=() => {
    AuthActions.login().then(() => {
     window.location.reload();
    });
   }
   <Button
       variant="contained"
       onClick={handleLoginClick}
       color="default"
    >
        Login
   </Button>

  handleLogoutClick=()=> {;
    AuthActions.logout().then(() => {
     window.location.reload();
    });
   }

    <Button
       variant="contained"
       onClick={handleLogoutClick}
       color="default"
    >
      Logout
   </Button>


SignIn(user,someCallBackMethodToBeCalledAfterLogin)
    {
        var xhr = new XMLHttpRequest();

             xhr.onreadystatechange = ()=>{

                if(xhr.readyState == 4 && xhr.status == 200)
                {
                    let result = JSON.parse(xhr.responseText);
                    if(result.isLoggedIn == "true")
                    {
                        debugger;
                        console.log(result["access-token"]);
                        sessionStorage.setItem("accessToken", result["access-token"])
                        this.isUserAuthenticated = true;
                        someCallBackMethodToBeCalledAfterLogin(this.isUserAuthenticated )

                    }
                    else
                    {
                        this.isUserAuthenticated = false;
                        someCallBackMethodToBeCalledAfterLogin(this.isUserAuthenticated )

                    }
                }
            }
            xhr.open("POST",`http://localhost:9898/auth/login`);
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.setRequestHeader('Authorization', 'Basic '+window.btoa(user.uname+":"+ user.password));
            xhr.send();
    }

    logOut(callBackmethodToBeCalledAfterSigningOut)= () => {
        //this.isUserAuthenticated = false;  //may be ajax call involved and ut may take time ..so we need callback method
        sessionStorage.removeItem("accessToken");
        this.isUserAuthenticated = false;
        callBackmethodToBeCalledAfterSigningOut();
    }





app.post("/login",(req,res)=>{
   authHeaderKeyValueArray =  req.headers.authorization.split(" ");
   //console.log(authHeaderKeyValueArray);
   var credentials =  atob(authHeaderKeyValueArray[1]);
   var credDetails = credentials.split(":");
   let uname = credDetails[0];
   let password = credDetails[1];
    // console.log(uname);
    // console.log(password);
    //Compare Uname and password with DB
    if(uname == "mahesh" && password == "mahesh@123") //Please check this with DB in actual 
    {
        let tokenGenerator = new TokenGenerator();
        let accessToken = tokenGenerator.generate();
        //Store this access token in DB...............
        //res.header('access-token', accessToken);
        res.send({"isLoggedIn": "true", 'access-token': accessToken});
    }
    else{
        res.send({"isLoggedIn": "false"});
    }
});

function App() {
    const [searchQuery, updateSearchQuery] = useState("");
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();
    const [timeoutId, updateTimeoutId] = useState();
  
    const fetchData = async (searchString) => {
      const response = await Axios.get(
        `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
      );
      updateMovieList(response.data.Search);
    };
}