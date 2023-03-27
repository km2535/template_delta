import { optionsType } from "../../type/Type";

export const ItemsArrangeMethod = async (setOptions: React.Dispatch<React.SetStateAction<optionsType[]>>) => {
  fetch(`${process.env.REACT_APP_FETCH_URL}/items/readArrangeMethod.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => (setOptions(res)));
};
