import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Select from "@material-ui/core/Select";
import matchSorter from "match-sorter";
import ENDPOINTS from "../../constants";
class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.val = "";
    //console.log('old data', makeData());
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    console.log(this.props.entries);
    return (
      <div>
        <Select
          name="form-field-name"
          value={this.props.val}
          onChange={val => {
            console.log(
              "This is the new value of field myField: " + val.target.value
            );
            this.setState({ typed: val.target.value });
            const data = [...this.state.data];
            this.setState({ data });
          }}
        >
          <option
            value="None"
            //classes={{ root: classes.menuItem }}
          >
            <em>None</em>
          </option>
          {Object.keys(ENDPOINTS).map((key, index) => (
            <option
              value={ENDPOINTS[key].value}
              classes={{ root: ENDPOINTS[key].value }}
            >
              {ENDPOINTS[key].label}
            </option>
          ))}
        </Select>
        <ReactTable
          data={this.props.entries.items}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Repo Name",
              id: "name",
              accessor: d => d.name
            },
            {
              Header: "Star Count",
              id: "stargazers_count",
              accessor: d => d.stargazers_count,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["candidateName"] }),
              filterAll: true
            },
            {
              Header: "Fork Count",
              id: "forks_count",
              accessor: d => d.forks_count,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["candidateEmail"] }),
              filterAll: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TaskList;
