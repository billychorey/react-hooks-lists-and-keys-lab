import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkAnchor = links.map((link) => {
    console.log({link})
    return (
      <a href={`#${link}`} key={link}>{link}</a>
    )
  })

  return <nav>{linkAnchor}</nav>;
}

export default NavBar;