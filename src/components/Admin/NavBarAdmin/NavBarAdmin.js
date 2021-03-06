import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBarAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faMailBulk,
  faPhotoVideo,
  faStore,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const NavBarAdmin = () => {
  const [messages, setMessages] = useState(null);
  const [products, setProducts] = useState(null);
  const [emails, setEmails] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const [orders, setOrders] = useState();

  const getData = () => {
    Axios.get("http://localhost:8000/api/messages")
      .then(result => result.data)
      .then(data => {
        setMessages(data);
      });
    Axios.get("http://localhost:8000/api/products")
      .then(result => result.data)
      .then(data => {
        setProducts(data);
      });
    Axios.get("http://localhost:8000/api/emails")
      .then(result => result.data)
      .then(data => {
        setEmails(data);
      });
    Axios.get("http://localhost:8000/api/orders")
      .then(result => result.data)
      .then(data => {
        setOrders(data);
      });
  };

  return (
    <div className="navBarAdminContainer">
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faHome} />
        Admin panel
      </NavLink>
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin-medias"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faPhotoVideo} />
        Medias
      </NavLink>
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin-products"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faStore} />
        Products
        {products && products.length > 0 ? (
          <p className="messageNumberAdminNavBar">{products.length}</p>
        ) : null}
      </NavLink>
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin-sales"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faShoppingBag} />
        Sales
        {orders && orders.length > 0 ? (
          <p className="messageNumberAdminNavBar">{orders.length}</p>
        ) : null}
      </NavLink>
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin-messages"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faEnvelope} />
        Messages
        {messages && messages.length > 0 ? (
          <p className="messageNumberAdminNavBar">{messages.length}</p>
        ) : null}
      </NavLink>
      <NavLink
        activeClassName="activeItemListNavBarAdmin"
        className="itemListNavBarAdmin"
        to="/admin-subscribers"
      >
        <FontAwesomeIcon className="iconNavBarAdmin" icon={faMailBulk} />
        Newsletter
        {emails && emails.length > 0 ? (
          <p className="messageNumberAdminNavBar">{emails.length}</p>
        ) : null}
      </NavLink>
    </div>
  );
};

export default NavBarAdmin;
