import React from 'react';
import { shallow } from 'enzyme';
import EditableItem, { Action, ModeContext } from '../index';

function ModeContextProvider(props) {
  const { children, mode } = props;
  console.log('mode provider', mode);
  return <ModeContext.Provider value={mode}>{children}</ModeContext.Provider>;
}

it('should render string', () => {
  const viewContent = 'test content';
  const wrapper = shallow(
    <EditableItem label="test" viewContent={viewContent}>
      test children
    </EditableItem>,
    {
      wrappingComponent: ModeContextProvider,
      wrappingComponentProps: {
        mode: Action.view,
      },
    }
  );
  expect(wrapper.getElement()).toMatchSnapshot();
  const provider = wrapper.getWrappingComponent();
  provider.setProps({
    mode: Action.edit,
  });
  wrapper.update();
  expect(wrapper.getElement()).toMatchSnapshot();
});
