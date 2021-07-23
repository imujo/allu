import React, { useContext } from "react";
import Nav from "./2-Nav";
import Header from "./3-Header";
import Body from "./4-Body";
import Footer from "./11-Footer";
import Auth from "../Random/Auth";
import { BackendContext } from "../../State/BackendState";
import ContactAbout from "./ContactAbout";

function Home() {
  const { authOpenGlobal } = useContext(BackendContext);
  const [authOpen, setAuthOpen] = authOpenGlobal;

  return (
    <div>
      {/* Nav */}
      <Nav />

      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Contact & About */}
      <ContactAbout />

      {/* Footer */}
      <Footer />

      {/* Auth */}
      {authOpen === "" ? undefined : (
        <Auth type={authOpen} setAuthOpen={setAuthOpen} />
      )}
    </div>
  );
}

export default Home;
