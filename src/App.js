import "./App.css";
import { lazy } from "react";
import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";
import { startCase, camelCase } from "lodash";


const ReactMemo = lazy(() => import("./pages/ReactMemo"));
const LocalState = lazy(() => import("./pages/LocalState"));
const CodeSplitting = lazy(() => import("./pages/CodeSplitting"));
const UseCallback = lazy(() => import("./pages/UseCallback"));
const UseCallback2 = lazy(() => import("./pages/UseCallback2"));
const UseMemo = lazy(() => import("./pages/UseMemo"));
const UseMemo2 = lazy(() => import("./pages/UseMemo2"));
const UseMemo3 = lazy(() => import("./pages/UseMemo3"));

const routes = [
  {
    id: "default",
    path: "/",
    element: LocalState,
    exact: true,
  },
  {
    id: "localState",
    path: "/localState",
    element: LocalState,
    exact: true,
  },
  {
    id: "memo",
    path: "/memo",
    element: ReactMemo,
    exact: true,
  },
  {
    id: "codeSplitting",
    path: "/codeSplitting",
    element: CodeSplitting,
    exact: true,
  },
  {
    id: "useCallback",
    path: "/useCallback",
    element: UseCallback,
    exact: true,
  },
  {
    id: "useCallback2",
    path: "/useCallback2",
    element: UseCallback2,
    exact: true,
  },
  {
    id: "useMemo",
    path: "/useMemo",
    element: UseMemo,
    exact: true,
  },
  {
    id: "useMemo2",
    path: "/useMemo2",
    element: UseMemo2,
    exact: true,
  },
  {
    id: "useMemo3",
    path: "/useMemo3",
    element: UseMemo3,
    exact: true,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="container">
              <ul className="menus">
                {routes.filter((route) => route.id !== "default").map((route) => (
                  <li key={route.id}>
                    <Link to={route.path}>{startCase(camelCase(route.id))}</Link>
                  </li>
                ))}
              </ul>
              <Outlet />
            </div>
          }
        >
          {routes.map((route, key) => {
            const Component = route.element;
            return (
              <Route
                exact={route.exact}
                key={key}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
