import './App.css';
import { Component } from "react";

class App extends Component{

constructor(props){
  super(props);
  this.state={
    Hospitals:[]
  }
}

API_URL = "http://localhost:5038";

componentDidMount(){
  this.refreshNotes();
}

async refreshNotes(){
  fetch(this.API_URL+"/api/Bloodbank/GetHospital").then(response=>response.json())
  .then(data=>{
  this.setState({Hospitals:data});
  })
}


async addClick(){
  var newHospital=document.getElementsById("newHospital").value;
  var newAddress=document.getElementsById("newAddress").value;
  const data = new FormData();
  data.append("newHospital",newHospital);
  data.append("newAddress",newAddress);

  fetch(this.API_URL+"/api/Bloodbank/AddHospital",{
    method: "POST",
    body:data
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshNotes();
  })
}

async deleteClick(id){
  fetch(this.API_URL+"/api/Bloodbank/DeleteHospital?id="+id,{
    method: "DELETE"
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshNotes();
  })
}



render() {
  const{Hospitals}=this.state;
  return (
    <div className="App">
      <h2>Blood Bank</h2>
      <input newHospital="newHospital"/>&nbsp;
      <input newAddress="newAddress"/>&nbsp;
      <button onClick={()=>this.addClick()}>Add Hospital</button>
      {Hospitals.map(hospital=>
        <p>
          <b>  {hospital.hospital_name}</b>
          <button onClick={()=>this.deleteClick(hospital.id)}>Delete Hospital</button>
        </p>
        )}
    </div>
  );
}
}
export default App;
