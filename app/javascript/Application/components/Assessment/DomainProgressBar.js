import React from 'react';
import PropTypes from 'prop-types';
import { calculateDomainProgress } from './AssessmentHelper';

import './style.sass';

const buildState = (isAssessmentUnderSix, domain) => ({
  progress: calculateDomainProgress(isAssessmentUnderSix, domain),
});

class DomainProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);
    const { isAssessmentUnderSix, domain } = this.props;
    this.state = buildState(isAssessmentUnderSix, domain);
  }

  static getDerivedStateFromProps(props) {
    const { isAssessmentUnderSix, domain } = props;
    return buildState(isAssessmentUnderSix, domain);
  }

  render() {
    const { progress } = this.state;
    return (
      <div className={'progress-bar'}>
        <div className={'progress'} style={{ width: `${progress}%` }} />
      </div>
    );
  }
}

DomainProgressBar.propTypes = {
  domain: PropTypes.object.isRequired,
  isAssessmentUnderSix: PropTypes.bool.isRequired,
};

export default DomainProgressBar;
