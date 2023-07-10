import { useEffect, useState, useRef } from 'react';
import styles from '../styles/App.css';


export const MenuItem = (props) => {
  

    const [menuItem, setMenuItem] = useState({});

  useState(() => {
    const text = props.text;
    const letterObj = {};

    for (let i = 0; i < text.length; i++) {
      const menuItem = text[i];
      letterObj[`letter${i}`] = menuItem;
    }

    setMenuItem(letterObj);
  }, [props.text]);

    return (
        <div>
        <h1 className="word">
          {Object.values(menuItem).map((menuItem, index) => (
            <span className="letter" key={index}>{menuItem}</span>
          ))}
        </h1>
      </div>
    );
}