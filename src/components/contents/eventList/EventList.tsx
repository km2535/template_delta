import React, { useEffect, useState } from 'react';
import { EventLists } from '../../../api/events/Events';
import styles from "./EventList.module.css"
import { v4 as uuid } from "uuid";
import Event from './event/Event';
import DefaultEvent from './defaultEvent/DefaultEvent';

type eventsData = {
  ID?: string, 
  IMG_URL ?:string
}

export default function EventList() {
  // 이미지를 불러오고 이미지가 없는 곳에는 기본이미지를 띄운다.
  const [eventImg, setEventImg] = useState<Object[]>([]);
  useEffect(() => {
    EventLists(setEventImg)
  }, []);
  return (
    <div className={styles.container}>
      {eventImg.length === 1 && 
      <>
        {eventImg.map((event: eventsData) =>
        <Event event={event} key={uuid()} />
        )}
        <DefaultEvent/>
        <DefaultEvent/>
      </>
      }
      {eventImg.length === 2 && 
        <>
        {eventImg.map((event: eventsData) =>
          <Event event={event} key={uuid()} />
        )}
        <DefaultEvent/>
        </>
      }
      {eventImg.length >= 3 && 
        <>
        {eventImg.map((event: eventsData) =>
          <Event event={event} key={uuid()} />
        )}
        </>
      }
      
    </div>
  );
}

