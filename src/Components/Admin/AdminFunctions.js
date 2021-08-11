import { Pagination } from "react-admin";

const createGroup = (list, key) => {
  let group = [];
  list.forEach((listElement) => {
    if (typeof listElement === "object") {
      group.push({
        id: listElement[key],
        name: listElement[key],
      });
    } else {
      group.push({
        id: listElement,
        name: listElement,
      });
    }
  });
  return group;
};

export const getCategoriesAndLanguages = (setCategories, setLanguages) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/categories`)
    .then((res) => res.json())
    .then((data) => setCategories(createGroup(data, "category")));

  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/languages`)
    .then((res) => res.json())
    .then((data) => setLanguages(createGroup(data, "language")));
};

export const getDirItems = (setDirItems, dir) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/listDir/${dir}`)
    .then((res) => res.json())
    .then((data) => setDirItems(createGroup(data, "")));
};

export const getNumberOfLanguages = (setNumberOfLanguages) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/languages`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let array = [];
      for (let i = 0; i < data.length; i++) {
        array.push(i + 1);
      }
      setNumberOfLanguages(array);
    });
};

export const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100, 200]} {...props} />
);
