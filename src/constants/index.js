/**
 * A list of endpoints that is used for generating a dropdown
 */
const ENDPOINTS = {
  REACT_REPOSITORY: {
    label: "React Repository",
    value: "https://api.github.com/search/repositories?q=react"
  },
  REDUX_REPOSITORY: {
    label: "Redux Repository",
    value: "https://api.github.com/search/repositories?q=redux"
  },
  REACT_DOM_REPOSITORY: {
    label: "Redux Redux Repository",
    value: "https://api.github.com/search/repositories?q=react-dom"
  },
  LODASH_REPOSITORY: {
    label: "Lodash Repository",
    value: "https://api.github.com/search/repositories?q=lodash"
  },
  RAMDA_REPOSITORY: {
    label: "Redux Repository",
    value: "https://api.github.com/search/repositories?q=ramda"
  }
};
export default ENDPOINTS;
