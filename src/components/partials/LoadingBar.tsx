import React from 'react';
import logo32x32 from '../../assets/images/logo-32x32.png';
import logo128x128 from '../../assets/images/logo-128x128.png';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

interface LoadingBarProps {
  isIcon?: boolean;
  page?: boolean;
  centeralized?: boolean;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ isIcon, page, centeralized }) => {
  const loadingBarContent = (
    <div className={
      classnames({ loadingBarWrapper: page }, { centeralizedLoadingBar: centeralized })
    }>
      <div className={classnames('loadingBar', { 'loadingBar--page': page })}>
        {isIcon ? (
          <div className="loadingBar__icon">
            {page ? (
              <img src={logo128x128} alt="Logo" />
            ) : (
              <img src={logo32x32} alt="Logo" />
            )}
          </div>
        ) : null}
        <div className="loadingBar__animation loadingBar__animation--style1"></div>
        <div className="loadingBar__animation loadingBar__animation--style2"></div>
        <div className="loadingBar__animation loadingBar__animation--style3"></div>
        <div className="loadingBar__animation"></div>
      </div>
    </div>
  );

  if (page) {
    return ReactDOM.createPortal(loadingBarContent, document.body);
  }

  return loadingBarContent;
};
