import React from 'react'

class Filters extends React.Component {
  constructor() {
    super();
    
    //bind this
    this.handleChangeTypeFilter = this.handleChangeTypeFilter.bind(this)
  }
  //Should receive an onChangeType callback prop. This callback prop gets called whenever the value of the <select> element changes with the value of the <select>
  handleChangeTypeFilter(event) {
    this.props.onChangeType(event.target.value);
  }
  
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
        <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChangeTypeFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
