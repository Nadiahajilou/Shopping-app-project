import Cards from "../components/Cards";

import styles from "./productsPage.module.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { getInitailQuery, searchProducts } from "../helper/helper";
import { filterProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

function ProuductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  console.log(products);
  const [search, setSearch] = useState(" ");
 
  const [display, setDisplay] = useState([]);
 
  const [searchParams, setSearchParams] = useSearchParams();

  //ejad yek state moshtarak baraye search va category , yana vaghti karbar dastebandi ro roye jewelery gozasht faghat roye jewelry ha search kone va natayej ro az jewelry ha render kone
  const [query, setQuery] = useState({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //harmoghe karabar search kard ya dastebany ie ro entkhab kard bia function haye droun useeefect ro ejra kon
  useEffect(() => {
    //baraye inke  query haro dar url handel konim:👇
    setSearchParams(query);
    setSearch(query.search || "");

    let finalproducts = searchProducts(products, query.search);
    //dar moteghayer paien beja inke  kol products ha categorize konim faghat roye finalproducts ha (product haye search shode )categorize mknim
    finalproducts = filterProducts(finalproducts, query.category);
    setDisplay(finalproducts);
  }, [query]);

  useEffect(() => {
    setQuery(getInitailQuery(searchParams));
    setDisplay(products);
  }, [products]);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
      />
      <div className={styles.container}>
        <div className={styles.products} >
          {loading && <Loader />}
          {display.map((product) => (
            <Cards key={product.id} data={product} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProuductsPage;
