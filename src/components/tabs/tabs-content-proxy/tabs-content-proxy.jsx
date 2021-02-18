import React from 'react';
import PropTypes from 'prop-types';

// types
import tabsType from "../../../types/tabs-types";

const getComponent = (tabs, activeTab) => {
  return tabs[activeTab].component;
};

const getProps = (props) => {
  const propKey = props.tabs[props.activeTab].propKey;
  return {[propKey]: props[propKey]};
};

const TabsContentProxy = (props) => {
  const {tabs} = props;
  const Component = getComponent(tabs, props.activeTab);
  const tabProps = getProps(props);

  return (
    <Component {...tabProps}/>
  );
};

TabsContentProxy.propTypes = {
  tabs: PropTypes.shape(tabsType),
  activeTab: PropTypes.string.isRequired
};

export default TabsContentProxy;
