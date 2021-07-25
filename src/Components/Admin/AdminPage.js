import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import ReadArticleList from "./ReadArticle/ReadArticleList";
import ListenArticleList from "./ListenArticle/ListenArticleList";
import ReadArticleCreate from "./ReadArticle/ReadArticleCreate";
import ListenArticleCreate from "./ListenArticle/ListenArticleCreate";
import ReadArticleEdit from "./ReadArticle/ReadArticleEdit";
import ListenArticleEdit from "./ListenArticle/ListenArticleEdit";
import CategoriesList from "./Categories/CategoriesList";
import CategoriesCreate from "./Categories/CategoriesCreate";
import CategoriesEdit from "./Categories/CategoriesEdit";
import LanguagesCreate from "./Languages/LanguagesCreate";
import LanguagesEdit from "./Languages/LanguagesEdit";
import LanguagesList from "./Languages/LanguagesList";
import CommentsList from "./Comments/CommentsList";
import UsersList from "./Users/UsersList";
import UsersEdit from "./Users/UsersEdit";
import UsersCreate from "./Users/UsersCreate";
import UploadList from "./UploadList";
import MiscList from "./Misc/MiscList";
import MiscEdit from "./Misc/MiscEdit";
import fileListenArticleList from "./Files/ListenArticle/fileListenArticleList";
import fileListenArticleCreate from "./Files/ListenArticle/fileListenArticleCreate";
import fileLIstenArticleEdit from "./Files/ListenArticle/fileListenArticleEdit";

function AdminPage() {
  return (
    <Admin
      dataProvider={simpleRestProvider(
        `${process.env.REACT_APP_SERVER_DOMAIN}/admin`
      )}
    >
      <Resource
        name="readArticles"
        list={ReadArticleList}
        create={ReadArticleCreate}
        edit={ReadArticleEdit}
      />
      <Resource
        name="listenArticles"
        list={ListenArticleList}
        create={ListenArticleCreate}
        edit={ListenArticleEdit}
      />
      <Resource
        name="categories"
        list={CategoriesList}
        create={CategoriesCreate}
        edit={CategoriesEdit}
      />
      <Resource
        name="languages"
        list={LanguagesList}
        create={LanguagesCreate}
        edit={LanguagesEdit}
      />
      <Resource name="comments" list={CommentsList} />
      <Resource
        name="users"
        list={UsersList}
        create={UsersCreate}
        edit={UsersEdit}
      />
      <Resource name="upload" list={UploadList} />
      <Resource name="misc" list={MiscList} edit={MiscEdit} />
      <Resource
        name="fileListenArticle"
        list={fileListenArticleList}
        create={fileListenArticleCreate}
        edit={fileLIstenArticleEdit}
      />
    </Admin>
  );
}

export default AdminPage;
