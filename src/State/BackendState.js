import React, { useState, createContext, useEffect } from "react";
import {
  fetchLanguages,
  fetchArticles,
  fetchCategories,
  fetchUser,
} from "./StateFunctions";

const BackendContext = createContext();

const BackendContextProvider = (props) => {
  // LANGUAGES
  const [languageSelected, setlanguageSelected] = useState({
    imageurl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80",
    language: "",
  });
  const [languages, setlanguages] = useState([]);

  useEffect(() => {
    fetchLanguages(setlanguages);
  }, []);

  // ARTICLES
  const [articles, setarticles] = useState([]);

  // TABS
  const [tabSelected, settabSelected] = useState("read");

  useEffect(() => {
    fetchArticles(setarticles, tabSelected);
  }, [tabSelected]);

  // CATEGORIES

  const [categories, setcategories] = useState([]);
  const [selectedCategory, setselectedCategory] = useState({ category: "" });

  useEffect(() => {
    fetchCategories(setcategories);
  }, []);

  // SEARCH
  const [search, setsearch] = useState("");

  let filteredArticles = articles.filter((article) => {
    const filter =
      article.title.toLowerCase().includes(search.toLowerCase()) &&
      (article.category === selectedCategory.category ||
        selectedCategory.category === "") &&
      (article.language === languageSelected.language ||
        languageSelected.language === "");
    return filter;
  });

  // AUTH
  const [authOpen, setauthOpen] = useState("");

  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetchUser(setUser, setIsAuth);
  }, []);

  return (
    <BackendContext.Provider
      value={{
        languagesGlobal: [languages, setlanguages],
        languageSelectedGlobal: [languageSelected, setlanguageSelected],

        articlesGlobal: [articles, setarticles],

        tabSelectedGlobal: [tabSelected, settabSelected],

        categoriesGlobal: [categories, setcategories],
        selectedCategoryGlobal: [selectedCategory, setselectedCategory],

        searchGlobal: [search, setsearch],
        filteredArticles: filteredArticles,

        authOpenGlobal: [authOpen, setauthOpen],

        userGlobal: [user, setUser],
        isAuthGlobal: [isAuth, setIsAuth],
      }}
    >
      {props.children}
    </BackendContext.Provider>
  );
};

export { BackendContextProvider, BackendContext };
