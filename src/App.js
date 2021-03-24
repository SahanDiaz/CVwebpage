import React from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';
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
      <FacebookProvider appId="440775383659685" chatSupport>
        <CustomChat pageId="109212154590685" minimized={false}/>
      </FacebookProvider> 
      {/* <MessengerCustomerChat
        pageId="109212154590685"
        appId="440775383659685"
      /> */}
     
      <Footer />
    </div>
  );
}

export default App;
