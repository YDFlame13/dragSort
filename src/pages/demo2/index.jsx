import { useState } from "react";

import styles from "./index.module.scss";

const Demo = () => {
  const [data, setData] = useState([
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 7',
    },
    {
      title: 'Title 8',
    },
    {
      title: 'Title 9',
    },
    {
      title: 'Title 10',
    },
    {
      title: 'Title 11',
    },
    {
      title: 'Title 12',
    },
    {
      title: 'Title 13',
    },
    {
      title: 'Title 14',
    },
    {
      title: 'Title 15',
    },
    {
      title: 'Title 16',
    },
  ])
  
  const onDragStart = (e) => {
    console.log("DragStart", e);
  }
  const onDragEnd = (e) => {
    console.log("onDragEnd", e);
  }
  
  return (
    <div className={styles.root}>
      <div
        className={styles.list}
      >
        {data.map((item, index) => (
          <div 
            key={`${index}`}
            className={styles.item}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            <p>index: {index}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Demo;