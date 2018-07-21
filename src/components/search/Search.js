import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '9611691-6945810e4ef412cd5d510274a',
    images: []
  }


  render() {
    return (
      <div>
        <TextField 
          name='searchText'
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText='Raid For Images!'
          fullWidth={true}
        />
        
      </div>
    )
  }
}

export default Search