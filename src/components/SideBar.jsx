import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./sideBar.module.css";

function SideBar({ setQuery,query }) {
  const categoriHandler = (e) => {
    const tagName = e.target.tagName;
   
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    
    setQuery((query) => createQueryObject(query, { category: category }));
  };

  const categories = [
    { id: 1, type: "All" },
    { id: 2, type: "Electronics" },
    { id: 3, type: "Jewelery" },
    { id: 4, type: "Men's Clothing" },
    { id: 5, type: "Women's Clothing" },
  ];
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>categories</p>
      </div>
      <ul onClick={categoriHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
