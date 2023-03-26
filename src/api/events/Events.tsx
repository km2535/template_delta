
export const EventLists = async (setEventImg: React.Dispatch<React.SetStateAction<Object[]>> ) => {
  fetch(`${process.env.REACT_APP_FETCH_URL}/eventList/readEvents.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => ( setEventImg(res)));
};
