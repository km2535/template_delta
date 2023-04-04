import ItemsTypes from "../../type/Type";

export const readProductListSearch = async (startPage: string, pageCnt: string, setLists: React.Dispatch<React.SetStateAction<ItemsTypes[]>>, id: string, price:string) => {
  const formData = new FormData();
  formData.append("id",id);
  formData.append("startPage",startPage);
  formData.append("pageCnt", pageCnt);
  formData.append("price", price);

  fetch(`${process.env.REACT_APP_FETCH_URL}/items/readProductListSearch.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => (setLists(res)));
};
