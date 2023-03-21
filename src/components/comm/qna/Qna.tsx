import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Qna.module.css"

type propsQnaIcon = {
  imgUrl: string, 
  serviceUrl : string,
  serviceName: string
}
export default function Qna({ imgUrl, serviceName, serviceUrl }: propsQnaIcon) {
  const navigate = useNavigate();

  return (
    <>
    {
        serviceName.includes('qnaTalk') ?
          <div className={styles.container} onClick={() => navigate(serviceUrl)}>
            <img className={styles.img} src={imgUrl} alt={serviceName} />
          </div>
          :
          <a className={styles.container} href={serviceUrl} target="_blank" rel="noreferrer" >
            <img className={styles.img} src={imgUrl} alt={serviceName} />
          </a>
    }
    
    </>
  );
}

