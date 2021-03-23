import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {
  Navbr,
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  Footer,
} from "./components/File";

function App() {
  return (
    <div>
      <Navbr />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Body6 />
      <MessengerCustomerChat
        pageId="109212154590685"
        appId="440775383659685"
      />
      <Footer />
    </div>
  );
}

export default App;
