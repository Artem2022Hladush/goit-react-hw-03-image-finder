import React,  { Component } from "react";
import api from "./service/api";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";



class App extends  Component{
  state = {
    page: 1,
    query: '',
    photo: [],
    isLoading: false,
  }

  handleFormSubmit = name =>{
    console.log(name);
    this.setState({photo: [], query: name, page:1})
  }

// componentDidMount() {
//   this.setState({isLoading: true})
//   fetch('https://pixabay.com/api/?q=cat&page=1&key=32019120-f6c917bb65a52104f5b17c554&image_type=photo&orientation=horizontal&per_page=12')
//   .then(res => res.json())
//   .then(photo => this.setState({photo}))
//   .finally(() => this.setState({isLoading:false}))
// }

render() {
  const {isLoading} = this.state;
  return (
    <>
    <Searchbar onSubmit={this.handleFormSubmit}/>
    {isLoading && <Loader/>}
    </>
    );
}
};

export default App;
