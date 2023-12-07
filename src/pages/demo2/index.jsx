import { useState } from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const ITEM_ID_STR = "item";

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
  
  const [dragInfo, setDragInfo] = useState({
    dragIndex: -1,
  })
  
  const getIndex = (e) => {
    const id = e.target.id;
    if(id.startsWith(ITEM_ID_STR)){
      return Number(id.replace(ITEM_ID_STR, ""));
    }
    return -1;
  }
  
  const onDragStart = (e) => {
    const dragIndex = getIndex(e);
    setDragInfo({
      dragIndex,
    })
  }
  const onDragEnd = (e) => {
    setDragInfo({
      dragIndex: -1,
    })
  }
  const onDragEnter = (e) => {
    const targetIndex = getIndex(e);
    if(targetIndex >= 0){
      setDragInfo({
        ...dragInfo,
        targetIndex,
      })
    }
  }
  const onDragLeave = (e) => {
    setDragInfo({
      ...dragInfo,
      targetIndex: -1,
    })
  }
  
  const onDrop = (e) => {
    const { dragIndex, targetIndex } = dragInfo;
    if(targetIndex < 0 || dragIndex === targetIndex)return ;
    const newData = [];
    data.forEach((d, i) => {
      if(i === dragIndex)return;
      if(i === targetIndex && dragIndex > targetIndex) newData.push(data[dragIndex]);
      newData.push(d);
      if(i === targetIndex && dragIndex < targetIndex) newData.push(data[dragIndex]);
    })
    setData(newData);
  }
  
  const onDragOver = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className={styles.root}>
      <div
        className={styles.list}
      >
        {data.map((item, index) => (
          <div 
            key={`${index}`}
            id={ITEM_ID_STR + index}
            className={classNames(
              styles.item,
              dragInfo.dragIndex >= 0 ? styles.draggingItem : '',
              dragInfo.dragIndex === index ? styles.moveItem : '',
              dragInfo.targetIndex === index ? styles.overItem : '',
            )}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onDragOver={onDragOver}
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