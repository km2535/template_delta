import React from 'react';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import GoogleBtn from '../../components/ui/login/google/GoogleBtn';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title} onClick={() => navigate("/")}>
          LOGIN
        </div>
        <div className={styles.socialLogin}>
          <GoogleBtn/>
        </div>
        <div className={styles.description}>
          * 별도의 회원가입이 필요없습니다.
        </div>
      </div>
    </div>
  );
}

