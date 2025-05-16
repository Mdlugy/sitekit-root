import React, { Suspense, useMemo } from "react";
import RenderModule from "./renderModule";
// Dynamically import all modules from 'modules' and 'modules-premium'
const layoutImports = {
  ...import.meta.glob("../layouts/*/index.jsx"),
};

export default function RenderPage({ data }) {
  const { layout, modules, theme } = data;
  // Construct potential paths for the module
  const standardPath = `../layouts/${layout}/index.jsx`;

  // Determine the correct importer function
  const importer = layoutImports[standardPath]

  // Memoize the lazy-loaded Module
  const Layout = useMemo(() => {
    return importer ? React.lazy(importer) : null;
  }, [importer]);

  // If the Module doesn't exist, render a fallback UI
  if (!Layout) {
    return (
      <>
        <main>
          {modules.map((module, index) => {
                return <RenderModule key={index} data={module} />
            })}
        </main>
      </>
    );
  }


  // Render the dynamically imported Module with its props
  return (
    <Suspense fallback={<div>Loading {layout}...</div>}>
        <Layout theme={theme}>
            {modules.map((module, index) => {
                return <RenderModule key={index} data={module} />
            })}
        </Layout>
    </Suspense>
  );
}