import { lazy, Suspense } from "react";
import "./App.css";
const LazyHomepage = lazy(() => import("./Components/Pages/Homepage"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(38, 38, 38)",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            Loading...
          </div>
        }
      >
        <LazyHomepage />
      </Suspense>
    </>
  );
}

export default App;
