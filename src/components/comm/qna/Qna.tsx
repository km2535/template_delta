import React from 'react';
import styles from "./Qna.module.css"

type propsQnaIcon = {
  imgUrl: string, 
  serviceUrl : string,
  serviceName: string
}
export default function Qna({imgUrl, serviceName,serviceUrl} : propsQnaIcon ) {

  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgUrl} alt={serviceName} />
    </div>
  );
}

