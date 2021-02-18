import React from 'react';
import PropTypes from 'prop-types';

// types
import tabsType from "../../../types/tabs-types";

const getComponent = (tabs) => {
  return tabs.items[tabs.active].component;
};

const getProps = (props) => {
  const propKey = props.tabs.items[props.tabs.active].propKey;
  return {[propKey]: props[propKey]};
};

const TabsContentProxy = (props) => {
  const {tabs} = props;
  const Component = getComponent(tabs);
  const tabProps = getProps(props);

  return (
    <Component {...tabProps}/>
  );
};

TabsContentProxy.propTypes = {
  tabs: PropTypes.shape(tabsType)
};

export default TabsContentProxy;
