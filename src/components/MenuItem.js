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

  const getRandomDelay = () => {
    const minDelay = 0;
    const maxDelay = 5;
    console.log(Math.random() * (maxDelay - minDelay + 1) + minDelay + 's')
    return Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay) + 's';
  
  };

    return (
        <div className="">
        <h1 className="word text-xl h-10 w-min">
          {Object.values(menuItem).map((menuItem, index) => (
            <span className="letter" key={index} style={{ animationDelay:  getRandomDelay() }}>{menuItem}</span>
          ))}
        </h1>
      </div>
    );
}