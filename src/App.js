import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ETHTracker from "./ETHTracker";
import "./styles.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ETHTracker cryptoName="ethereum" />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
