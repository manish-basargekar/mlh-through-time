import Style from "./App.module.scss";
import { useEffect, useState } from "react";
import Lights from "./components/Lights/Lights";

function App() {
	const [time, setTime] = useState();

  const [loading, setLoading] = useState(true);

  const [urlId, setUrlId] = useState("20130908152346");

	const handleTime = (time) => {
    switch (time) {
      case 1:
        setUrlId("20130908152346");
        break;
      case 2:
        setUrlId("20140208014240");
        break;
      case 3:
        setUrlId("20150117071213");
        break;
      case 4:
        setUrlId("20160101091348");
        break;
      case 5:
        setUrlId("20170102014410");
        break;
      case 6:
        setUrlId("20180730062419");
      case 7:
        setUrlId("20190616115005");
      default:
        break;
    }
  }

  useEffect(() => {
    console.log("loading");
  }, [loading]);

  const handLoading = () => {
    setLoading(!loading);
  }

	return (
		<div className={Style.App}>
			<div className={Style.container}>
				<div className={Style.view}>
          
					<iframe
						src={`https://web.archive.org/web/${urlId}/http://mlh.io/`}
						frameBorder="0"
            onLoad={handLoading}
					></iframe>
					{/* <Lights /> */}
				</div>
				<div className={Style.sidebar}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					ratione quas fugiat ipsam facere explicabo sunt ex reiciendis
					consequatur, perspiciatis assumenda magni nostrum iusto blanditiis,
					porro enim cumque vitae animi!
				</div>
				<div className={Style["left-bar"]}>
					<div className={Style.time}>Sun, 08 Sep 2013</div>
					<div className={Style["time-profile"]}>
						<h2>Time profiles</h2>
						<button className={Style.profile} onClick={() => handleTime(1)}>2013</button>
						<button className={Style.profile} onClick={() => handleTime(2)}>2014</button>
						<button className={Style.profile} onClick={() => handleTime(3)}>2015</button>
						<button className={Style.profile} onClick={() => handleTime(4)}>2016</button>
						<button className={Style.profile} onClick={() => handleTime(5)}>2017</button>
						<button className={Style.profile} onClick={() => handleTime(6)}>2018</button>
						<button className={Style.profile} onClick={() => handleTime(7)}>2019</button>
					</div>
				</div>
				<div className={Style.circle}></div>
				<div className={Style.bigRedButton}></div>
			</div>
		</div>
	);
}

export default App;
