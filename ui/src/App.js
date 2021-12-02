import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import ServiceTable from './ServiceTable';
import CommitTable from './CommitTable';
import DeployTable from './DeployTable';

function App() {
  return (
    <React.Fragment>
      <ServiceTable />
      <CommitTable />
      <DeployTable />
    </React.Fragment>
  );
}

export default App;
