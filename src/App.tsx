import { useState } from "react";
import MainPage from "./routes/MainPage";
import { ContextProductCount } from "./utils/context-product";


export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
      <MainPage />
    </ContextProductCount.Provider>
  )
}
