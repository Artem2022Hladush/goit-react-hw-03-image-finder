import React,  { Component } from "react";
import Notiflix from "notiflix";
import api from "./service/api";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";



class App extends  Component{
  state = {
    page: 1,
    query: '',
    photo: [],
    isLoading: false,
  }

  handleFormSubmit = (name) =>{
    console.log(name);
    this.setState({photo: [], query: name, page:1})
  }

async componentDidUpdate(_, prevState) {
  if (prevState.page !== this.state.page || 
    prevState.query !== this.state.query) {
      const {query, page}=this.state;
      this.setState({ isLoading: true });

      const response = await api
        .fetchApi(query, page)
        .catch(error => this.setState({ error }))
        .finally( ()=>this.setState({ isLoading: false }))
        if (response.data.totalHits === 0)
        {
          Notiflix.Notify.failure('Enter correct request');
          this.setState({ images: [] });
          return;
        }
    }
}

loadMore=()=> {
  this.setState(prevState=> ({page: prevState.page +1}))
}

render() {
  const {isLoading} = this.state;
  return (
    <>
    <Searchbar onSubmit={this.handleFormSubmit}/>
    {isLoading && <Loader/>}
    <Button onLoadMore={this.loadMore}/>
    <ImageGallery items={this.state.photo}/>
    </>
    );
}
};

export default App;
