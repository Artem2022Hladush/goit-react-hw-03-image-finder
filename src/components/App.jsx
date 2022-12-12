import React,  { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";


class App extends  Component{
  state = {
    photo: [],
    isLoading: false,
  }

componentDidMount() {
  this.setState({isLoading: true})
  fetch('https://pixabay.com/api/?q=cat&page=1&key=32019120-f6c917bb65a52104f5b17c554&image_type=photo&orientation=horizontal&per_page=12')
  .then(res => res.json())
  .then(photo => this.setState({photo}))
  .finally(() => this.setState({isLoading:false}))
}

render() {
  const {isLoading} = this.state;
  return (
    <>
    <Searchbar />
    {isLoading && <Loader/>}
    {this.state.photo && (
      <div>тут буде фото</div>
    )}
    </>
    );
}
};

export default App;