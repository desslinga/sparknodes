import React from 'react';

class ModuleRightPage extends React.Component {
  render() {
    return (
      <div className="right col-12 col-md-6 col-lg-7 col-xl-8">
        {this.props.children}
      </div>
    );
  }
}

export default ModuleRightPage;
