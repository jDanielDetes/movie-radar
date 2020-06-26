import React, { Component } from "react";
import { useState } from "react";
import { Menu,Icon } from "semantic-ui-react";

function NavBar() {
  return (
    <div>
      <Menu inverted>
          
        <Menu.Item
          position="right "
          name="Home"
          onClick={() => {
            console.log("Home");
          }}
        >
            <Icon name='home' inverted/>
          Home
        </Menu.Item>

        <Menu.Item
          name="Search"
          onClick={() => {
            console.log("Search");
          }}
        >
            <Icon name='search' inverted/>
          Search
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
