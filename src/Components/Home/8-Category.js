import React, { useContext, useEffect, useState } from "react";
import { BackendContext } from "../../State/BackendState";

function Category({ category, iconfile }) {
  const { selectedCategoryGlobal } = useContext(BackendContext);
  const [selectedCategory, setselectedCategory] = selectedCategoryGlobal;

  const [select, setselect] = useState("notselected");

  useEffect(() => {
    if (selectedCategory.category === category.category) {
      setselect("selected");
    } else {
      setselect("notselected");
    }
  }, [selectedCategory, category]);

  const onCategoryClick = () => {
    if (selectedCategory.category === category.category) {
      setselectedCategory({ category: "" });
    } else {
      setselectedCategory(category);
    }
  };

  return (
    <div className={`categoryDiv ${select}`} onClick={onCategoryClick}>
      <img
        className="categoryIcon"
        alt="icon"
        src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryIcons/${iconfile}`}
      />
      <div className="divider"></div>
      <div className="categoryFont">{category.category}</div>
    </div>
  );
}

export default Category;
