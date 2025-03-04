import logo from "./logo.svg";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <FormikContainer />
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        {/* <LoginForm /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
