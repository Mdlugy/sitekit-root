import React, { Suspense, useMemo } from "react";
import { overrideTheme } from "../helpers/overrideTheme";
// Dynamically import all modules from 'modules' and 'modules-premium'
const moduleImports = {
  ...import.meta.glob("../modules/*/index.jsx"),
  ...import.meta.glob("../modules-premium/*/index.jsx"),
};

export default function RenderModule({ data, theme }) {
  const { module, props } = data;
  
  // Construct potential paths for the module
  const standardPath = `../modules/${module}/index.jsx`;
  const premiumPath = `../modules-premium/${module}/index.jsx`;

  // Determine the correct importer function
  const importer = moduleImports[standardPath] || moduleImports[premiumPath];

  // Memoize the lazy-loaded Module
  const Module = useMemo(() => {
    return importer ? React.lazy(importer) : null;
  }, [importer]);

  // If the Module doesn't exist, render a fallback UI
  if (!Module) {
    return (
      <div id = {props.id} style={{ border: "1px solid red", padding: "1rem" }}>
        <h1>{module}</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    );
  }
  var themeInstance = null;
  if (props.themeOverrides) {
  themeInstance= overrideTheme(theme, props.themeOverrides);  
}
  // Render the dynamically imported Module with its props
  return (
    <Suspense fallback={<div>Loading {module}...</div>}>
      <Module id = {props.id} content={props.content} theme={themeInstance||theme} />
    </Suspense>
  );
}