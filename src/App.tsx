import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

//React Query stored in a global variable to be used in the entire app ( stored in memory)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // set to 24 hours
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

// const key = import.meta.env.VITE_API_KEY;
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
