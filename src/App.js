import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames'

import styles from './App.module.scss';

const LIST_COLUMN = 3;
const MARGIN = 6;

const App = () => {
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
  const [moveInfo, setMoveInfo] = useState({
    index: -1,
  })
  
  const listRef = useRef(null);
  const itemSize = useRef({});
  
  const onMouseDown = (e, index) => {
    const {clientX, clientY, button} = e;
    if(button !== 0) return;
    const { top, left, offsetLeft, offsetTop } = itemSize.current;
    if(top){
      const row = Math.floor(index / LIST_COLUMN);
      const column = index % LIST_COLUMN;
      const style = {
        left: left * column,
        top: top * row,
      };
      const mouseCoordinate = {
        x: clientX - offsetLeft,
        y: clientY - offsetTop,
      };
      const mouseOffset = {
        x: mouseCoordinate.x - style.left,
        y: mouseCoordinate.y - style.top,
      };
      setMoveInfo({
        index,
        overIndex: index,
        item: data[index],
        style: {
          left: `${style.left}px`,
          top: `${style.top}px`,
        },
        mouseOffset,
        mouseCoordinate,
      }) 
    }
  }
  
  const onMouseMove = (e) => {
    if(moveInfo.index >= 0){
      const {clientX, clientY} = e;
      const { offsetLeft, offsetTop, top, left } = itemSize.current;
      const { mouseOffset } = moveInfo;
      const mouseCoordinate = {
        x: clientX - offsetLeft,
        y: clientY - offsetTop,
      }
      const style = {
        left: `${mouseCoordinate.x - mouseOffset.x}px`,
        top: `${mouseCoordinate.y - mouseOffset.y}px`,
      }
      const row = Math.floor(mouseCoordinate.y / top);
      const column = Math.floor(mouseCoordinate.x / left);
      setMoveInfo({
        ...moveInfo,
        overIndex: row * LIST_COLUMN + column,
        style,
        mouseCoordinate,
      })
    }
  }
  
  const onMouseUp = () => {
    const { index, overIndex } = moveInfo;
    if(index >= 0 && index !== overIndex){
      const newData = [];
      data.forEach((d, i) => {
        if(i === index)return;
        if(i === overIndex) newData.push(data[index]);
        newData.push(d);
      })
      setData(newData);
      setMoveInfo({
        index: -1,
      })
    }
  }
  
  const isOver = (i) => {
    const { index, overIndex } = moveInfo;
    if(index >= 0 && index !== i){
      return overIndex === i;
    }
    return false;
  }
  
  useEffect(() => {
    if(listRef.current){
      const {offsetLeft, offsetTop} = listRef.current;
      const itemDiv = listRef.current.querySelector(`.${styles.item}`);
      itemSize.current.top = itemDiv.clientHeight + 2 * MARGIN;
      itemSize.current.left = itemDiv.clientWidth  + 2 * MARGIN;
      itemSize.current.offsetLeft = offsetLeft;
      itemSize.current.offsetTop = offsetTop;
    }
  }, [listRef.current])
  
  return (
    <div className={styles.root}>
      <div
        className={styles.list}
        ref={listRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {data.map((item, index) => (
          <div 
            key={`${index}`}
            className={classnames(
              styles.item, 
              moveInfo.index === index ? styles.moveItem : '',
              isOver(index) ? styles.overItem : '',
            )}
            onMouseDown={(e)=>{onMouseDown(e, index)}}
          >
            <p>index: {index}</p>
            <p>{item.title}</p>
          </div>
        ))}
        {moveInfo.index >= 0 && (
          <div
            className={classnames(styles.item, styles.copyItem)}
            style={moveInfo.style}
          >
            <p>index: {moveInfo.index}</p>
            <p>{moveInfo.item.title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;