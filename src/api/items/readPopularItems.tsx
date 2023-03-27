import ItemsTypes from "../../type/Type";

export const readPopularItems = async (count : string, setItem : React.Dispatch<React.SetStateAction<ItemsTypes[]>> ) => {
  const formData = new FormData();
  formData.append("endPage",count);
  fetch(`${process.env.REACT_APP_FETCH_URL}/items/readPopularItems.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => (setItem(res)));
};
