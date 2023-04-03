import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/contents/productlist/ProductList';
import ProductOption from '../../components/contents/productOption/ProductOption';
import ItemsTypes from '../../type/Type';
import styles from './Products.module.css';

export default function Products() {
  //제목을 받아서 해당 카테고리에 있는 상품을 필터한다음
  // 리스트로 뿌려줌
  const [lists, setLists] = useState<ItemsTypes[]>([]);

  const param = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <ProductOption setLists={setLists} />
      </div>
      <div className={styles.lists}>
        <ProductList param={param} lists={lists} setLists={setLists} />
      </div>
    </div>
  );
}

 