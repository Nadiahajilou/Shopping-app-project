import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsDetail } from "../contex/ProductContex";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./detailpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);




  const productsDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );
  console.log(productsDetails);
  if (!productsDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productsDetails.image} alt={productsDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productsDetails.title}</h3>
        <p className={styles.description}>{productsDetails.description}</p>

        <p className={styles.category}>
          <SiOpenproject />
          {productsDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productsDetails.price}$
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;