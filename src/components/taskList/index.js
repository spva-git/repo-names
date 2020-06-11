import React from "react";
import Header from './Header';
import Results from './Results';

class TaskList extends React.Component {
  constructor(props) {
    console.log('aaaaa',props)
    super(props);
    this.state = {
      items: [],
    };
  }
	
  setStorage = (itemid) => {
    this.setState({
      itemid: itemid
    })
    if(localStorage.getItem(itemid) !== null)
      localStorage.removeItem(itemid);
    else  
      localStorage.setItem(itemid, true);
  }

  render() {
    return (
      <section className="container">
        <div className="flex row-reverse app-container">
          <Header currentTopics={this.props.entries} setStorage={this.setStorage}/>
          <div className="results-container"> 
            <Results currentTopics={this.props.entries.items} setStorage={this.setStorage}/>     
          </div>
        </div>
      </section>
    );
  }
}

export default TaskList;
