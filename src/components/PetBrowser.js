import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    //Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components. App should determine which pets to pass down as props. App should be responsible for filtering this list based on the types of pets the user wants to see.
    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ))
    return <div className="ui cards">
      {pets}
    </div>
  }
}

export default PetBrowser
