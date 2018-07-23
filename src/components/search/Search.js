import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import ImageResults from '../image-results/ImageResults'

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '9611691-6945810e4ef412cd5d510274a',
    images: []
  }

  onTextChange = (e) => {

    const val = e.target.value

    this.setState({ [e.target.name]: val}, () => {

      if(val === ''){
        this.setState({
          images: []
        })
      } else {
        axios
        .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err))
      }
    })
  }

  // Changes number of pictures on screen. 
  onAmountChange = (e, index, value) => {

    this.setState({ amount:value })

    // checks if query is empty. 
    // if it's empty clears all results and doesn't let search to happen
    if (this.state.searchText == '') this.setState({images: []})
    else this.onTextChange(e)
  }
  
  
  

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField 
          name='searchText'
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText='Raid For Images!'
          fullWidth={true}
        />
        <br />
        <SelectField
          name='amount'
          floatingLabelText='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText='5' />
          <MenuItem value={10} primaryText='10' />
          <MenuItem value={15} primaryText='15' />
          <MenuItem value={30} primaryText='30' />
          <MenuItem value={50} primaryText='50' />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null }
        
      </div>
    )
  }
}

export default Search