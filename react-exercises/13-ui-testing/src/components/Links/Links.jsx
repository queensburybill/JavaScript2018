import React from "react";
import "./Links.css";

function Links(props) {
  return (
    <ul className="App-links">
      {props.links.map((link, index) => {
        const key = `link-${index}`;
        return (
          <li key={key}>
            <a
              href={link.href}
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
