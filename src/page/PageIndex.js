import { Route, Routes } from "react-router-dom";
import Box from "./Box";
import Iframe from "./Boxs/Iframe";
import Explore from "./Boxs/Explore";
import Obuna from "./Obuna/Obuna";
import Obunam from "./Obuna/Obunam";
import Kutubxona from "./Kutubxona/Kutubxona";
import History from "./Kutubxona/History";
import Musiqa from "./Musiqa/Musiqa";
import YourVideo from "./Boxs/YourVideo";
import Setting from "../Setting/Setting";

export default function PageIndex() {
  // let [videos, setVideo] = useState([
  //   {
  //     id: 1,
  //     img: "./img/logo-og.png",
  //     profile: "./img/User-Avatar.png",
  //     title: "React js haqida and     - Coding IOS(Iphone Calclutor -No Talking) ",
  //     aUthor: "Proghub",
  //     views: 1.2,
  //     published: 11,
  //     link: "https://www.youtube.com/embed/mA_O7onmKQ8?si=YT5DtLDmZtbWXIqU",
  //     shortImg: "./img/youtube-shorts-icon.png",
  //     pros: "21 тыс. просмотров 23 часа назад",
  //     imege: "./img/mclaren-convertible-supercar.jpg",
  //   },
  //   {
  //     id: 2,
  //     img: "./img/e8bf1bde.webp",
  //     profile: "./img/User-Avatar.png",
  //     title: "Java Script haqida - Coding IOS(Iphone Calclutor -No Talking) ",
  //     aUthor: "Proghub",
  //     views: 1.2,
  //     published: 11,
  //     link: "https://www.youtube.com/embed/Kh6PfBhuLT8?si=2fAeevrBqyenVwB7",
  //     shortImg: "./img/youtube-shorts-icon.png",
  //     pros: "21 тыс. просмотров 23 часа назад",
  //     imege: "./img/mclaren-convertible-supercar.jpg",
  //   },
  //   {
  //     id: 3,
  //     img: "./img/kisspng-the-c-programming-language-computer-icons-comput-programming-5acadc2dec0be9.0824244915232440779669.jpg",
  //     profile: "./img/User-Avatar.png",
  //     title: "C++ haqida - Coding IOS(Iphone Calclutor -No Talking) ",
  //     aUthor: "Proghub",
  //     views: 1.2,
  //     published: 11,
  //     link: "https://www.youtube.com/embed/2BlETkdYFJk?si=Bkppni2l45jSdAF7",
  //     shortImg: "./img/youtube-shorts-icon.png",
  //     pros: "21 тыс. просмотров 23 часа назад",
  //     imege: "./img/mclaren-convertible-supercar.jpg",
  //   },
  //   {
  //     id: 4,
  //     img: "./img/html5.jpg",
  //     profile: "./img/User-Avatar.png",
  //     title: "HTML haqida - Coding IOS(Iphone Calclutor -No Talking) ",
  //     aUthor: "Proghub",
  //     views: 1.2,
  //     published: 11,
  //     link: "https://www.youtube.com/embed/4Usso0EThIM?si=EQkC6jAVwprAKlt1",
  //     shortImg: "./img/youtube-shorts-icon.png",
  //     pros: "21 тыс. просмотров 23 часа назад",
  //     imege: "./img/mclaren-convertible-supercar.jpg",
  //   },
  //   {
  //     id: 5,
  //     img: "./img/imgpreview.png ",
  //     profile: "./img/User-Avatar.png",
  //     title: "CSS haqida - Coding IOS(Iphone Calclutor -No Talking) ",
  //     aUthor: "Proghub",
  //     views: 1.2,
  //     published: 11,
  //     link: "https://www.youtube.com/embed/GWcl_m65nfY?si=bGoHhkhmMiK-5rRW",
  //     shortImg: "./img/youtube-shorts-icon.png",
  //     pros: "21 тыс. просмотров 23 часа назад",
  //     imege: "./img/mclaren-convertible-supercar.jpg",
  //   },
  // ])
  // let [obuna, setObuna] = useState([
  //   {
  //     rasmi: "./img/PngItem_6785829.png",
  //     nomi: "People Vs Food",
  //     obunachisi: "14,9 млн подписчиков"
  //   },
  //   {
  //     rasmi: "./img/PngItem_6785829.png",
  //     nomi: "People Vs Food",
  //     obunachisi: "14,9 млн подписчиков"
  //   },
  //   {
  //     rasmi: "./img/PngItem_6785829.png",
  //     nomi: "People Vs Food",
  //     obunachisi: "14,9 млн подписчиков"
  //   },
  //   {
  //     rasmi: "./img/PngItem_6785829.png",
  //     nomi: "People Vs Food",
  //     obunachisi: "14,9 млн подписчиков"
  //   },
  // ])

  // let [iframe, setIframe] = useState([]);
  // let link = useNavigate();
  // function setvid(obj) {
  //   link(`/iframe/${obj.id}`)
  //   // setIframe(iframe = [])
  //   // setIframe([...iframe, obj]);
  // }
  // let [history, setHistory] = useState([]);
  // function inHistory(obj) {
  //   if (history.filter((i) => i.id === obj.id).length === 0) {
  //     setHistory([obj, ...history]);
  //   }
  // }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/iframe" element={<Iframe />} />
        <Route
          path="/iframe/:id"
          element={
            <Iframe
            // iframe={iframe}
            // setIframe={setIframe}
            // videos={videos}
            // setVidoe={setVideo}
            // inHistory={inHistory}
            />
          }
        />
        <Route path="/obuna" element={<Obuna />} />
        <Route path="/obunam" element={<Obunam />} />
        <Route path="/kitob" element={<Kutubxona />} />
        <Route path="/history" element={<History />} />
        <Route path="/musiqa" element={<Musiqa />} />
        <Route path="/your" element={<YourVideo />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}
