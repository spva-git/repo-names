import * as React from "react";

/**
 * This component loads the task details
 *
 * @returns {*} a React stateless functional component
 */
export const Task = () => (
  <div className="App">
    <h1>Interview Question</h1>
    <p>
      Please create a simple application that has a{" "}
      <a href="https://material-ui.com/demos/selects/">material ui dropdown</a>{" "}
      with a list of api endpoints.
      <br />
      <br />
      you will need to first setup Redux.
      <br />
      <br />
      When the user selects an item in the list, the dropdown should show a
      loader component with a css loader and fetch the data from the endpoint.
      <br />
      <br />
      Once the data has been fetched it should be presented in a{" "}
      <a href="https://material-ui.com/demos/tables/">material ui table</a>.
      <br />
      <br />
      In the following manner:
      <br />
      | Repo Name | 🌟 Number of Stars | 🍴Number of Forks |
      <br />
      <br />
      This task should take anywhere between 1 - 4 hours to complete.
      <br />
      <br />
      There are Dependencies that are already loaded for you, you can check them
      on the left. If you need more Dependencies you can click the Add Depenency
      button to add a new one.
      <br />
      <br />
      Please use the following libraries to accomplish the task:
      <ul>
        <li>Redux</li>
        <li>Containers</li>
        <li>High Order Components</li>
        <li>Lodash</li>
        <li>Material UI</li>
      </ul>
      <br />
      We are looking for code that is reuseable, maintainable and easy to
      understand and also attention to detail.
    </p>
    <h3>Bonus Tasks:</h3>
    <ul>
      <li>Use reselect in containers</li>
      <li>Make the header sortable</li>
      <li>Prevent dropdown from being used when the api call is loading</li>
    </ul>
  </div>
);
