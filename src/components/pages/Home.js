import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import Info from "../layout/Info";

const Home = () => (
  <Fragment>
    <Info />
    <Search />
    <Users />
  </Fragment>
);

export default Home;
