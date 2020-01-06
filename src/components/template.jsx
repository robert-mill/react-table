import React, { Component } from "react";
import { getExamples } from "../services/dataService"; //example purposes
import TemplateTable from "./templateTable";
//import {getData, etc.. } from datasource eg api request file "../servics/dataService" etc

class Template extends Component {
  state = {
    exampleData: [],
    sortColumn: { path: "title", order: "asc" }
    //other aspects to be added ie pageSize, search Query, sortColumn etc
  };
  async componentDidMount() {
    this.setState({ exampleData: getExamples() });
  }
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { exampleData, sortColumn } = this.state;

    return (
      <TemplateTable
        data={exampleData}
        onSort={this.handleSort}
        sortColumn={sortColumn}
        //add other props example onDelete etc. and update the templateTable.jsx fields
      />
    );
  }
}

export default Template;
