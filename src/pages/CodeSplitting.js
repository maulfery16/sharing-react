import { Fragment, useState, lazy, Suspense } from "react";
import { wait } from "../helpers/wait";

// const AdminData = lazy(() => import("../components/AdminData"));
const AdminData = lazy(() => wait(200).then(() => import("../components/AdminData")));

function CodeSplitting() {
  const [isAdmin, setAdmin] = useState(false);

  const toggleAdmin = () => setAdmin((curr) => !curr);

  // const sumValues = () => {
  //   alert(sum(2, 2));
  // };
  // const minusValues = () => {
  //   alert(minus(12, 2));
  // };
  // const printDateCB = () => {
  //   alert(printDate());
  // }

  const sumValues = () => {
    import("../helpers/calculation").then((module) => {
      alert(module.sum(2, 2));
    });
  };
  const minusValues = () => {
    import("../helpers/calculation").then((module) => {
      alert(module.minus(12, 2));
    });
  };
  const printDateCB = () => {
    import ("../helpers/date").then((module) => {
      alert(module.printDate());
    });
  }

  return (
    <Fragment>
      <h1 className="title">Code Splitting</h1>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <button type="button" style={{ marginRight: 10 }} onClick={toggleAdmin}>
          Toggle Admin
        </button>
        <button type="button" style={{ marginRight: 10 }} onClick={sumValues}>
          Add 2 + 2
        </button>
        <button type="button" style={{ marginRight: 10 }} onClick={minusValues}>
          Minus 12 - 2
        </button>
        <button type="button" onClick={printDateCB}>
          Print Current Date
        </button>
      </div>
      {isAdmin ? (
        <Suspense fallback={<div className="loading">Loading ...</div>}>
          <AdminData />
        </Suspense>
      ) : (
        <div>You're not Admin</div>
      )}
    </Fragment>
  );
}

export default CodeSplitting;
