import React,  { Component } from "react";
import Notiflix from "notiflix";
import api from "./service/api";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";



class App extends  Component{
  state = {
    page: 1,
    query: ' ',
    photo: [],
    isLoading: false,
    totalPages: 0,
    showModal: false,
    largeImage: ' ',

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
        console.log(response.data)
        if (response.data.totalHits === 0)
        {
          Notiflix.Notify.failure('Enter correct request');
          this.setState({ images: [] });
          return;
        }
        response.data.hits.forEach(({id,webformatURL, tags, largeImageURL})=> {
          return this.setState(prev=> ({
            photo:[...prev.photo, {id,webformatURL, tags, largeImageURL}],
            totalPages: Math.ceil(response.datatotalHits/12)
          }))
        })
    }
}

handleFormSubmit = (name) =>{
  console.log(name);
  this.setState({photo: [], query: name, page:1})
}


loadMore=()=> {
  this.setState(prevState=> ({page: prevState.page +1}))
}

togleModal=()=> {
  this.setState(state => ({
    showModal: !state.showModal
  }))
}

onClick=(photo)=>{
  this.setState({largeImage:photo,showModal:true})
}

render() {
  const {isLoading, showModal, largeImage, photo,} = this.state;
  return (
    <>
    <Searchbar onSubmit={this.handleFormSubmit}/>
    {isLoading && <Loader/>}
    {showModal && <Modal src={largeImage} onClose={this.togleModal}/>}
    <ImageGallery items={photo} onClick={this.onClick}/>
    {photo.length!==0 &&  <Button onLoadMore={this.loadMore}/>}

    </>
    );
}
};

export default App;
