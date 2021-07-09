import { useContext, useEffect, useState } from "react";
import { BackendContext } from "../../State/BackendState";

function Flag({ language }) {
  const [select, setselect] = useState("notselected");

  const { languageSelectedGlobal } = useContext(BackendContext);
  const [languageSelected, setlanguageSelected] = languageSelectedGlobal;

  useEffect(() => {
    if (languageSelected.language === language.language) {
      setselect("selectedLanguage");
    } else {
      setselect("notselected");
    }
  }, [languageSelected, language]);

  const onFlagClick = () => {
    if (language.language === languageSelected.language) {
      setlanguageSelected({
        imageurl:
          "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80",
        language: "",
      });
    } else {
      setlanguageSelected(language);
    }
  };

  return (
    <div className={`flagDiv ${select}`}>
      <img
        className="flag"
        onClick={onFlagClick}
        src={`${process.env.REACT_APP_SERVER_DOMAIN}/flags/${language.flagfile}`}
        alt="flag"
      />
      <h4 className="countryName">{language.language}</h4>
    </div>
  );
}

export default Flag;
