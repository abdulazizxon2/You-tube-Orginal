import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextYT = createContext();

export default function ContextProv({ children }) {
  let [videos, setVideo] = useState([
    {
      id: 1,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title:
        "React js haqida and     - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/mA_O7onmKQ8?si=YT5DtLDmZtbWXIqU",
      shortImg: "./img/youtube-shorts-icon.png",
      pros: "21 тыс. просмотров 23 часа назад",
      imege: "./img/mclaren-convertible-supercar.jpg",
    },
    {
      id: 2,
      img: "./img/e8bf1bde.webp",
      profile: "./img/User-Avatar.png",
      title: "Java Script haqida - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/Kh6PfBhuLT8?si=2fAeevrBqyenVwB7",
      shortImg: "./img/youtube-shorts-icon.png",
      pros: "21 тыс. просмотров 23 часа назад",
      imege: "./img/mclaren-convertible-supercar.jpg",
    },
    {
      id: 3,
      img: "./img/kisspng-the-c-programming-language-computer-icons-comput-programming-5acadc2dec0be9.0824244915232440779669.jpg",
      profile: "./img/User-Avatar.png",
      title: "C++ haqida - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/2BlETkdYFJk?si=Bkppni2l45jSdAF7",
      shortImg: "./img/youtube-shorts-icon.png",
      pros: "21 тыс. просмотров 23 часа назад",
      imege: "./img/mclaren-convertible-supercar.jpg",
    },
    {
      id: 4,
      img: "./img/html5.jpg",
      profile: "./img/User-Avatar.png",
      title: "HTML haqida - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/4Usso0EThIM?si=EQkC6jAVwprAKlt1",
      shortImg: "./img/youtube-shorts-icon.png",
      pros: "21 тыс. просмотров 23 часа назад",
      imege: "./img/mclaren-convertible-supercar.jpg",
    },
    {
      id: 5,
      img: "./img/imgpreview.png ",
      profile: "./img/User-Avatar.png",
      title: "CSS haqida - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/GWcl_m65nfY?si=bGoHhkhmMiK-5rRW",
      shortImg: "./img/youtube-shorts-icon.png",
      pros: "21 тыс. просмотров 23 часа назад",
      imege: "./img/mclaren-convertible-supercar.jpg",
    },
  ]);
  let [obuna, setObuna] = useState([
    {
      rasmi: "./img/PngItem_6785829.png",
      nomi: "People Vs Food",
      obunachisi: "14,9 млн подписчиков",
    },
    {
      rasmi: "./img/PngItem_6785829.png",
      nomi: "People Vs Food",
      obunachisi: "14,9 млн подписчиков",
    },
    {
      rasmi: "./img/PngItem_6785829.png",
      nomi: "People Vs Food",
      obunachisi: "14,9 млн подписчиков",
    },
    {
      rasmi: "./img/PngItem_6785829.png",
      nomi: "People Vs Food",
      obunachisi: "14,9 млн подписчиков",
    },
  ]);

  let link = useNavigate();
  function setvid(obj) {
    link(`/iframe/${obj.id}`);

  }
  let [history, setHistory] = useState([]);
  function inHistory(obj) {
    if (history.filter((i) => i.id === obj.id).length === 0) {
      setHistory([obj, ...history]);
    }
  }

  let [open, setOpen] = useState(false)
  function clickOpen() {
    setOpen(!open)
  }
  let [search, setSearch] = useState("")
  function searchs(e) {
    setSearch(e.target.value)
  }

  return <ContextYT.Provider value={{
    videos,
    clickOpen,
    open,
    inHistory,
    setvid,
    obuna,
    setObuna,
    setVideo,
    search,
    setSearch,
    searchs
  }}>
    {children}
  </ContextYT.Provider>;
}
