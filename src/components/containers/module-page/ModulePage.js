import React from 'react';

import ModuleRightPage from './ModuleRightPage';
import ModuleLeftPage from './ModuleLeftPage';
import ModuleSectionList from '../ModuleSectionList';

import LinkedListIntroLeft from '../../modules/linked-lists/sections/LinkedListIntroLeft';
import LinkedListIntroRight from '../../modules/linked-lists/sections/LinkedListIntroRight';
import LinkedListPartsLeft from '../../modules/linked-lists/sections/LinkedListPartsLeft';
import LinkedListSinglyIntroLeft from '../../modules/linked-lists/sections/LinkedListSinglyIntroLeft';
import LinkedListSinglyInsertLeft from '../../modules/linked-lists/sections/LinkedListSinglyInsertLeft';

import MenuToggleButton from '../../ui/MenuToggleButton';

class ModulePage extends React.Component {
  state = {
    showModuleList: false,
  };

  moduleListButtonHandler = () => {
    this.setState({
      showModuleList: !this.state.showModuleList
    });
  }

  render() {
    document.querySelector('body').className = 'theme-dark'
    return (
      <div className="module-page container-fluid">
        <MenuToggleButton
          onClick={this.moduleListButtonHandler}
          invertWhiteAuto={this.state.showModuleList}
        />
        <ModuleSectionList show={this.state.showModuleList}/>
        <div className="row">
          <ModuleLeftPage>
            <LinkedListIntroLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
            <LinkedListIntroRight/>
          </ModuleRightPage>
          <ModuleLeftPage>
            <LinkedListPartsLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
          </ModuleRightPage>
          <ModuleLeftPage>
            <LinkedListSinglyIntroLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
          </ModuleRightPage>
          <ModuleLeftPage>
            <LinkedListSinglyInsertLeft/>
          </ModuleLeftPage>
          <ModuleRightPage>
          </ModuleRightPage>
        </div>
      </div>
    );
  }
}

export default ModulePage;
