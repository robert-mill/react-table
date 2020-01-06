import React, { Component } from "react";
import Table from "./common/table";

class TemplateTable extends Component {
  columns = [
    {
      path: "examplePath1",
      label: "Eample Lable 1"
    },
    { path: "examplePath2", label: "Eample Lable 2" },
    { path: "examplePath3", label: "Eample Lable 3" }
  ];
  render() {
    const { data, onSort, sortColumn } = this.props;

    console.log(data);
    return (
      <Table
        data={data}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TemplateTable;
