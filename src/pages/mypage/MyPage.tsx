import React, {  useState } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import Button from '../../components/ui/button/Button';
import IndividualView from './individual/IndividualView';
import styles from './MyPage.module.css'
import Market from './market/Market';

export default function MyPage() {
  const user = useAuthContext();
  const [agree1, setAgree1] = useState<boolean>(false)
  const [agree2, setAgree2] = useState<boolean>(false)
  const [market, setMarket] = useState<boolean>(false)
  const [individual, setindividual] = useState<boolean>(false)
  const [phone, setPhone] = useState<string>("");

  const allAgree = (e : React.ChangeEvent<HTMLInputElement>) => {
    setAgree1(e.currentTarget.checked);
    setAgree2(e.currentTarget.checked);
  }
  const individualAgree = () => {
    setAgree1((prev)=>!prev)
  }
  const marketingAgree = () => {
    setAgree2((prev)=>!prev)
  }
  const marketingInfo = () => {
    setMarket((prev)=>!prev)
  }
  const individualInfo = () => {
    setindividual((prev)=>!prev)
  }
  const addressSearch = () => {
    
  }
  const phoneNumber = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
  }
  const saveMyInfo = () => {
   console.log(user?.email, user?.name,agree1,agree2,phone) 
  }
  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <div className={styles.mainTitle}>나의 정보</div>
        <div className={styles.line}></div>
        <div className={styles.mainInfoContainer}>
          <div className={styles.name}>
            <div className={styles.subTitle}>성명</div>
            <div className={styles.subContent}>{user?.name ||"홍길동"}</div>
          </div>
          <div className={styles.email}>
            <div className={styles.subTitle}>이메일</div>
            <div className={styles.subContent}>{user?.email ||"홍길동"}</div>
          </div>
        </div>
      </div>
      <div className={styles.subInfo}>
        <div className={styles.mainTitle}>추가정보 입력</div>
        <div className={styles.line}></div>
        <div className={styles.delivery}>
          <div className={styles.subInfoTitle}>배송지 정보</div>
          <div className={styles.inputAddr}>
            <div className={styles.addrContent1}>
              <input type="text" className={styles.addr1}/>
            </div>
            <div className={styles.addrContent2}>
              <input type="text" className={styles.addr2}/>
            </div>
            <div className={styles.addrContent3}>
              <input type="text" className={styles.addr3}/>
            </div>
          </div>
        </div>
        <div className={styles.addrBtn}>
          <div className={styles.BtnContent}>
            <Button fontsize='16' text='주소검색' onClick={addressSearch} main={false} />
          </div>
        </div>
        <div className={styles.phoneNum}>
          <div className={styles.subInfoTitle}>연락처</div>
          <div className={styles.phoneNumInfo}>
            <input type="text" placeholder='연락가능한 번호를 입력하세요.' onChange={phoneNumber}/>
          </div>
        </div>
      </div>
      <div className={styles.policy}>
        <div className={styles.allAgree}>
          <input type="checkbox" id='allAgree' onChange={allAgree}/>
          <div className={styles.subInfoTitle} >
            <label htmlFor="allAgree" className={styles.agree} >
              전체동의
            </label>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.singleAgree}>
          <div className={styles.detail}>
            <input type="checkbox" id='policy1' checked={agree1} onClick={individualAgree} readOnly/>
            <div className={styles.policy1}>
              <label htmlFor="policy1">
                [필수]개인정보처리방침 동의 
              </label>
              <span className={styles.view} onClick={individualInfo}>[이용약관]</span>
            </div>
          </div>
          <div className={styles.detail}>
            <input type="checkbox" id='policy2' checked={agree2} onClick={marketingAgree} readOnly/>
            <div className={styles.policy2} >
              <label htmlFor="policy2">
                [선택]마케팅 정보 수신 동의 
              </label>
              <span className={styles.view} onClick={marketingInfo}>[이용약관]</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Btn}>
        <div className={styles.saveBtn}>
          <Button fontsize='16' main text='저장하기' onClick={saveMyInfo}/>
        </div>
        <div className={styles.line}></div>
        <div className={styles.addInfo}>※모든 개인정보는 회원탈퇴 시 지체없이 파기됩니다.</div>
      </div>
      {individual && 
      <div className={styles.modalView}>
        <IndividualView setindividual={setindividual} />
      </div>
      }
      {market && 
      <div className={styles.modalView}>
        <Market setMarket={setMarket} />
      </div>
      }
    </div>
  );
}

