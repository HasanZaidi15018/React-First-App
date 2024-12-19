import UserCard from "./components/UserCard"
import './App.css'
import me from'./assets/me.jpg'
import img1 from'./assets/img1.jpg'
import drew from'./assets/img2.jpg'
function App()
{

  return (
  
    <div className="container">
       <UserCard name="Hasan" desc="Developer, born and raised in Lucknow" img={me}/>
       <UserCard name="Jake" desc="Designer, born and raised in New Jersey" img={img1}/>
       <UserCard name="Drew" desc="Data Analyst, born and raised in Sydney" img={drew}/>
    </div>
   
    
  )
}

export default App
