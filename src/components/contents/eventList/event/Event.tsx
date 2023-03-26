import React from 'react';
import styles from "./Event.module.css"

type eventsData = {
  ID?: string, 
  IMG_URL ?:string
}
export default function Event({event}:{event : eventsData}) {
  return (
    <div className={styles.container}>
          <img className={styles.img} src={`${process.env.REACT_APP_API_URL}/data/events/${event.ID}/${event.IMG_URL}`} alt="" />
    </div>
  );
}

