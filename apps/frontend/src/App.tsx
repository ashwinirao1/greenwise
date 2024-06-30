import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import {
  SubmissionModal,
  Feedback, 
  Landing
} from "./components";
import { lightTheme } from "./theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// RECaptcha V3 site key (https://developers.google.com/recaptcha/docs/v3)
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;

function App() {
  return (
    <Router>
      <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ChakraProvider theme={lightTheme}>
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        > 
        
        <Routes>
          <Route exact path ="/" element={<Landing/>} />
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
          
          {/* MODALS  */}
          <SubmissionModal />
        </DAppKitProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
    </Router>
  );
}

export default App;
