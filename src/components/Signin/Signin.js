import React from "react";

class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      emailSignIn:"",
      passwordSignIn:""      
    }
  }
  emailSignInChange=(event)=>{
    this.setState({emailSignIn:event.target.value});
  }
  passwordSignInChange=(event)=>{
    this.setState({passwordSignIn:event.target.value});
  }
  onSubmitClick=()=>{
    fetch("https://infinite-sea-27329.herokuapp.com/signin",{
      // https://infinite-sea-27329.herokuapp.com
      method:"post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        email:this.state.emailSignIn,
        password:this.state.passwordSignIn
      })
    })
    .then(res => res.json())
    .then(data=>{
      if(data.id){
        this.props.onRouteChange("home");
        this.props.onLoadUser(data);
      }
      else{
        let warningel=document.getElementById("warning");
        warningel.innerHTML=data;
      }
    })

  }
  render(){
      return(
    <div className="flex items-center" >
        <article className="tc flex justify-center br3 shadow-5 ba  b--black-1 mv4 w-100 w-50-m w-25-l center ">
          <main className="pa4 w-100 ph5 black-80">
            <div className="measure center w-100 h-100">
              <fieldset id="sign_up" className="ba b--transparent  mh0 pv3">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                  <input
                  onChange={this.emailSignInChange}
                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                  
                </div>  
                <div className="mv3">
                  <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                  <input
                  onChange={this.passwordSignInChange}
                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                
                </div>
              </fieldset>
              <div className="">
                <input id="dsa" onClick={this.onSubmitClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"/>
              </div>
              <div className="lh-copy mt3">
                <p href="#0" onClick={()=>this.props.onRouteChange("register")} className="f5 mt4 link dim black db pointer">Register</p>
                <p id="warning" className="red pa2 f4"></p>
              </div>
            </div>
        </main>
        </article>
        </div>
      )
  }

}


export default Signin; 



