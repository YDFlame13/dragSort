import { useRef, useEffect } from "react";
import classNames from "classnames";
import { useDrag, useDrop } from "react-dnd";

import styles from "./index.module.scss";

const Item = ({
  index,
  item,
  sort,
}) => {
  const itemRef = useRef(null);
  
  const [{ dragging }, drag] = useDrag({
    type: "item",
    item: {
      ...item,
      index,
    },
    collect: (monitor) => {
      return {
        dragging: monitor.isDragging(),
      }
    }
  });
  
  const [, drop] = useDrop(() => {
    return {
      accept: "item",
      drop: (item) => {
        sort(item.index, index);
        item.index = index;
      }
    }
  });
  
  useEffect(() => {
    drag(itemRef);
    drop(itemRef);
  }, [])
  
  return (
    <div
      ref={itemRef}
      className={classNames(
        styles.item,
        dragging ? styles.moveItem : '',
      )}
    >
      <p>index: {index}</p>
      <p>{item.title}</p>
    </div>
  )
}

export default Item;