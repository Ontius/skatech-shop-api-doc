import React from "react";
import { Table, Popover, OverlayTrigger } from "react-bootstrap";
import { map, values, keys } from "lodash";

import DataApi from "../../../api";

class EndpointItemTable extends React.Component {
  render() {
    const { items } = this.props;
    const placement = "bottom";

    return (
      <Table className="w-100" striped bordered hover>
        <thead>
          <tr>
            <th className="d-none d-lg-table-cell">API-Endpoint</th>
            <th>Methode</th>
            <th>Daten</th>
            <th>Beschreibung</th>
          </tr>
        </thead>
        <tbody className="w-100">
          {map(
            items,
            ({ route, method, data = [], description, json }, index) => (
              <OverlayTrigger
                trigger="click"
                key={route}
                placement={placement}
                overlay={
                  <Popover
                    className="bg-dark"
                    id={`popover-positioned-${placement}`}
                  >
                    <pre className="text-light">
                      {JSON.stringify(json, null, 2)}
                    </pre>
                  </Popover>
                }
              >
                <tr className="s20d-enpoint-item">
                  <div class="mobile-route d-lg-none">{route}</div>
                  <td className="endpoint-route d-none d-lg-table-cell">
                    {route}
                  </td>
                  <td>{method}</td>
                  <td>
                    <ul>
                      {map(data, item => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{description}</td>
                </tr>
              </OverlayTrigger>
            )
          )}
        </tbody>
        {this.props.children}
      </Table>
    );
  }
}

class EndpointItem extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h2 className="mt-5">{title}</h2>
        <EndpointItemTable items={this.props.items} />
      </div>
    );
  }
}

class APIEndpointDoc extends React.Component {
  render() {
    const groups = DataApi.getApiEndpointGroups();

    return (
      <div className="container pt-4">
        <h1 className="text-primary">API Endpoints</h1>
        {map(groups, group => (
          <EndpointItem {...group} />
        ))}
        <div style={{ height: "300px" }} />
      </div>
    );
  }
}

export default APIEndpointDoc;
