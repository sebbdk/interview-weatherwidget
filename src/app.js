import React from 'react'
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';

import Index from './m/pages/index'

import './app.css';

export default function App(props) {
  let initialPath = 0;
  if (props.path) {
    const paths = ["/"];
    const path = props.path.replace(/\/$/, '');
    initialPath = paths.indexOf(path);
    initialPath = initialPath < 0 ? 0 : initialPath;
  }

  const routerContent = (
    <div>
      <Route exact path="/Curriculum-Vitae/" component={Index} />
      <Route exact path="/" component={Index} />
    </div>
  );

  const memRouter = (
    <MemoryRouter
      initialEntries={["/"]}
      initialIndex={initialPath}>
      {routerContent}
    </MemoryRouter>
  );

  const browserRouter = (
    <BrowserRouter>
      {routerContent}
    </BrowserRouter>
  );

  const router = props.isBrowser ? browserRouter : memRouter;

  return (
    <div className="app">
      {router}
    </div>
  );
}