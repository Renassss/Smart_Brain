import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import Register from "./components/Register/Register";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin"
import Particles from "react-tsparticles";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";


const ParticlesOption = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.9,
      width: 0.3,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
const particlesInit = (main) => {
};

const particlesLoaded = (container) => {
};
const initialState={
      input:"",
      imageUrl:"",
      box: [],
      route:"signin",
      isSignedIn:false,
      user:{
        id:"",
        name:"",
        email:"",
        entries:0,
        joind:new Date()
      }
    }
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }



  onLoadUser=(data)=>{
    this.setState({user:{
        name:data.name,
        id:data.id,
        email:data.email,
        entries:data.entries,
        joind:data.joind
    }})
   
  }

  faceBoundingBox =(response) => {
    const boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById("imggg");
    const width = Number(image.width);
    const height= Number(image.height);
      return {
        leftCol:boundingBox.left_col * width,
        topRow : boundingBox.top_row * height,
        rightCol:width -(boundingBox.right_col * width),
        bottomRow: height - (boundingBox.bottom_row * height),
      }
    }
      

  

  displayFaceBox = (box) =>{
    this.setState({box:box});

  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onRouteChange =(route) => {
    if(route==="signin"){
      this.setState(initialState)
    }else if(route==="home"){
      this.setState({isSignedIn:true})
    }
     this.setState({route:route});
     this.setState({imageUrl:""});
  }

  onButtonSubmit = () =>{

    this.setState({imageUrl:this.state.input});
   fetch("https://infinite-sea-27329.herokuapp.com/imageUrll",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            input:this.state.input
          })
          })
   .then(res=> res.json())
    .then(resp => {
      if(resp){
        this.displayFaceBox(this.faceBoundingBox(resp));
        fetch("https://infinite-sea-27329.herokuapp.com/image",{
          method:"put",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            id:this.state.user.id
          })
          })
        .then(res=>res.json())
        .then(data=> {
            this.setState(Object.assign(this.state.user,{entries:data}))
        })
        .catch(console.log)
      }
      
    })
    .catch(err => console.log(`Something must have gone WRONG!!!`));
  }

  render() {
      const {route}=this.state;
      return(
        <div className="App" >
        <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesOption}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {route ==="signin"?
        
        <Signin onLoadUser={this.onLoadUser}  onRouteChange={this.onRouteChange}/>
        :
        (route === "register" ?
        <Register onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
        :
        <div>
        <Logo />
        <Rank rank={this.state.user.entries} userInfo={this.state.user.name} />
        <ImageLinkForm search={this.onInputChange} asd={this.state.input}  onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
        </div>
        )
       
        }


        
      </div>
      )
      
      
  }
}

export default App;
