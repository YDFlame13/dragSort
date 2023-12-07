import { useDragLayer } from "react-dnd";
import classNames from "classnames";

import styles from "./index.module.scss";

const DragLayer = () => {
  const { isDragging, item, currentOffset} = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  
  console.log( { isDragging, item, currentOffset} );
  
  return isDragging ? (
    <div
      className={classNames(
        styles.item,
        styles.copyItem,
      )}
      style={{
        left: currentOffset?.x,
        top: currentOffset?.y,
      }}
    >
      <p>index: {item.index}</p>
      <p>{item.title}</p>
    </div>
  ) : null;
}

export default DragLayer;