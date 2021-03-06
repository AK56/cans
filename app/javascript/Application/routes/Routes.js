/* eslint-disable react/no-multi-comp,react/no-children-prop */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page } from '../components/Layout';
import { navigation } from '../util/constants';

const page = (route, navigateTo) => <Page navigateTo={navigateTo} {...route} />;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" children={route => page(route, navigation.CHILD_LIST)} />
      <Route exact path="/clients/new" children={route => page(route, navigation.CHILD_PROFILE_ADD)} />
      <Route exact path="/clients/:clientId" children={route => page(route, navigation.CHILD_PROFILE)} />
      <Route exact path="/clients/:clientId/edit" children={route => page(route, navigation.CHILD_PROFILE_EDIT)} />
      <Route exact path="/clients/:clientId/assessments" children={route => page(route, navigation.ASSESSMENT_ADD)} />
      <Route
        exact
        path="/clients/:clientId/assessments/:id"
        children={route => page(route, navigation.ASSESSMENT_EDIT)}
      />
    </Switch>
  );
};

export default Routes;
