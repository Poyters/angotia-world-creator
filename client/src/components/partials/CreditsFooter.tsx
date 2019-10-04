import React from 'react';


const CreditsFooter = () => {
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer className="t-paragraph2Light creditsFooter">
      <div className="creditsFooter__box">
        <a href="http://poyters.pl">
          {`Created by Poyters @2018-${currentYear}`}
        </a>
      </div>
    </footer>
  );
};

export default CreditsFooter;