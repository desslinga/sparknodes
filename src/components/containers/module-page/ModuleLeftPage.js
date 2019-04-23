import React from 'react';

class ModuleLeftPage extends React.Component {
  render() {
    return (
      <div className="left col-12 col-md-6 col-lg-5 col-xl-4">
        {this.props.children}
      </div>
    );
  }
}

export default ModuleLeftPage;
