type bannerData = {
  ID?: string, 
  IMG_URL :string
}

export const Banner = async (setBannerImg: React.Dispatch<React.SetStateAction<string[]>> ) => {
  fetch(`${process.env.REACT_APP_FETCH_URL}/banner/readBanner.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => (res.map((v:bannerData) => setBannerImg(v.IMG_URL.split(",")))));
};
