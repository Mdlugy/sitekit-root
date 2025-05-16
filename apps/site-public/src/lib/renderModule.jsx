import React, { Suspense, useMemo } from "react";

// Dynamically import all modules from 'modules' and 'modules-premium'
const moduleImports = {
  ...import.meta.glob("../modules/*/index.jsx"),
  ...import.meta.glob("../modules-premium/*/index.jsx"),
};

export default function RenderModule({ data }) {
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
      <div style={{ border: "1px solid red", padding: "1rem", margin: "1rem 0" }}>
        <h1>{module}</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    );
  }

  // Render the dynamically imported Module with its props
  return (
    <Suspense fallback={<div>Loading {module}...</div>}>
      <Module {...props} />
    </Suspense>
  );
}