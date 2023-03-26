export const NavbarMenu = async (setNavbarMenu:React.Dispatch<React.SetStateAction<Object[]>>) => {
  fetch(`${process.env.REACT_APP_FETCH_URL}/navbar/readNavbar.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => setNavbarMenu(res));
};
