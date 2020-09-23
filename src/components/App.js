import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
    //You have to be careful about the meaning of 'this' in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handlePetAdopt = this.handlePetAdopt.bind(this);
  }
  //If the filter type is 'all', send a request to /api/pets, If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
  //Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
  fetchPets() {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }
  //App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type
  handleFilterTypeChange(type) {
    this.setState({
      filters: {
        ...this.state.filters, 
        type: type
      }
    })
  }

    // this.setState({
    //   addressInfo: {
    //     ...this.state.addressInfo,
    //     city: 'New York City'
    //   }
    // });
//Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. This callback should take in an id for a pet, find the matching pet in state.pets and set the isAdopted property to true.
  handlePetAdopt(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters}
                       onChangeType={this.handleFilterTypeChange}
                       onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handlePetAdopt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
