import React from "react";

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:"",
      password:''
    }
  }
  setName=(event)=>{
    this.setState({name:event.target.value})
  } 
   setEmail=(event)=>{
    this.setState({email:event.target.value})
  } 
   setPassword=(event)=>{
     this.setState({password:event.target.value})
  }
  onRegister=()=>{
    const{name,email,password}=this.state;
    if(!name || !email || !password){
      let warningel=document.getElementById("warnings");
        warningel.innerHTML="Enter The informations Pleas";
    }
    else{
    fetch("https://infinite-sea-27329.herokuapp.com/register",{
    method:'post',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
      })
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.id){
        console.log(data.id);
        this.props.onLoadUser(data);
        this.props.onRouteChange("home");

      }
    })
    }

  }

  
  render(){
    return(
    <div className="flex items-center">
        <article className="tc flex justify-center br3 shadow-5 ba  b--black-1 mv4 w-100 w-50-m w-25-l  center ">
          <main className="pa5 w-100 ph5 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                  <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name"
                  onChange={this.setName}
                  />
                </div>  
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                  <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={this.setEmail}
                  />
                </div>  
                <div className="mv3">
                  <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                  <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.setPassword}
                  />
                </div>
              </fieldset>
              <div className="">
                <input  onClick={this.onRegister}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign Up"/>
              </div>
              <p id="warnings" className="red pa2 f4"></p>
              <div className="lh-copy mt3">
              </div>
            </div>
        </main>
        </article>
        </div>
      )
  }
  
}


export default Register;