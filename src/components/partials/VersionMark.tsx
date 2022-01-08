import React from "react";
import pckg from "../../../package.json";

export const VersionMark: React.FC = () => {
  return (
    <aside className="labelMark t-paragraph5Normal">v. {pckg?.version}</aside>
  );
};
