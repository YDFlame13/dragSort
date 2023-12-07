import { useState, useRef, useCallback } from "react";

import Item from "./item";
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
  
  const sort = useCallback((dragIndex, dropIndex) => {
    console.log(dragIndex, dropIndex, data);
    if(dragIndex === dropIndex)return ;
    const newData = [];
    data.forEach((d, i) => {
      if(i === dragIndex)return;
      if(i === dropIndex && dragIndex > dropIndex) newData.push(data[dragIndex]);
      newData.push(d);
      if(i === dropIndex && dragIndex < dropIndex) newData.push(data[dragIndex]);
    })
    setData(newData);
  }, [])
  
  const listRef = useRef(null);
  
  return (
    <div className={styles.root}>
      <div
        className={styles.list}
        ref={listRef}
      >
        {data.map((item, index) => (
          <Item
            key={`${index}`}
            item={item}
            index={index}
            sort={sort}
          />
        ))}
      </div>
    </div>
  )
}

export default Demo;