import React from "react";

export const SectionHeader = (props: { headerTxt: string }) => {
  return (
    <header className="sectionHeader">
      <h1>{props.headerTxt}</h1>
    </header>
  );
};
