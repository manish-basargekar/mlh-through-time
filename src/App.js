import Style from "./App.module.scss";
import { useEffect, useState } from "react";
import Offstate from "./components/OffState/Offstate";
import Loading from "./components/Loading/Loading";

function App() {
	const data = [
		{
			date: "2013",
			title: "Beginnings",
			description:
				"Major League Hacking was co-founded by Jonathan Gottfried and Mike Swift in 2013. Since its inception, the organization has ran over 200 weekend long complitions worldwide each year.",
		},
		{
			date: "2014",
			title: "Hackcon",
			description:
				"The first Hackcon was held at Alley NYC in 2014 as a 2 day conference for hackercommunity leaders and organizers to learn from each other and work to improve Hackathons.",
		},
		{
			date: "2014",
			title: "Hackathon Hackers Facebook",
			description:
				"The Hackathon Hackers Facebook page was establishd as a way for bring the hackathon communuty as a whole closer together. This page became a resources for many organizers as it included information from past Hackcons as well.",
		},
		{
			date: "2015",
			title: "MLH Community Council",
			description:
				"The MLH Community Council is a boared of active community members who represent various roles within the organization itself such as hackers, organizers, sponsers, etc. The purpose of which is to help develop ways to tailor to student hackers and bring a variety of perspectives to the table when dicussing important community issues.",
		},
		{
			date: "2016",
			title: "Certified B Corporation",
			description:
				" Since MLH is powered by one community of 65,000 hackers in 16 different countries, Major League Hacking became a Certified B Corporation in 2016. This means that they had to take into account the impacts of the community from their decisions, and not just their investors and sponsors.",
		},
		{
			date: "2017",
			title: "MyMLH V2",
			description:
				"Over the 2016, more than 20,000 hackers had registered for more than 25 MLH Member Events using MyMLH including MHacks, HackTX, HackRU, HackNotts, BrickHack, RevolutionUC and many more. It has been fantastic watching hackers sign up in seconds for events and watching organizers focus their time on making the event experience better for hackers rather than worrying about recreating registration systems.",
		},
		{
			date: "2019",
			title: "MLH x APAC",
			description:
				"  In order to assure that as many hackers around the word have the oppertunity compete in these competitions, MLA had officially launched in the Asia-Pacific for hackers in India, australia, Singapore, etc.",
		},
		{
			date: "2022",
			title: "TechTogether Acquisition",
			description:
				"   In order to promote and create an inclusive environment for all progammers, MLH made the descision to aquire TechTogether, a organization whos' events specifically serve hackers who pertain to marginalized groups.",
		},
	];

	const years = [
		"2013",
		"2014",
		"2015",
		"2016",
		"2017",
		"2018",
		"2019",
		"2020",
		"2021",
		"2022",
	];

	const [time, setTime] = useState();

	const [loading, setLoading] = useState(false);

	const [urlId, setUrlId] = useState("20130908152346");

	const [machine, setMachine] = useState("OFF");

	const handleTime = (time) => {
		setMachine("ON");
		switch (time) {
			case "2013":
				setUrlId("20130908152346");
				setTime("2013");
				break;
			case "2014":
				setUrlId("20140208014240");
				setTime("2014");
				break;
			case "2015":
				setUrlId("20150117071213");
				setTime("2015");
				break;
			case "2016":
				setUrlId("20160101091348");
				setTime("2016");
				break;
			case "2017":
				setUrlId("20170102014410");
				setTime("2017");
				break;
			case "2018":
				setUrlId("20180730062419");
				setTime("2018");
			case "2019":
				setUrlId("20190616115005");
				setTime("2019");
				break;
			case "2020":
				setUrlId("20200108180900");
				setTime("2020");
				break;
			case "2021":
				setUrlId("20200108180900");
				setTime("2021");
				break;
			case "2022":
				setUrlId("20200108180900");
				setTime("2022");
				break;
			default:
				break;
		}
	};

	// useEffect(() => {
	// 	console.log("loading");
	// }, [loading]);

	// const handLoading = () => {
	// 	setLoading(!loading);
	// };

	useEffect(() => {
		if (machine === "ON") {
			setTimeout(() => {
				setLoading(true);
			}, 5000);
		}
	}, [loading, machine]);

	return (
		<div className={Style.App}>
			<div className={Style.container}>
				<div className={Style.view}>
					{/* <Lights /> */}
					{machine === "OFF" ? (
						<Offstate setMachine={setMachine} />
					) : (
						<>
							{!loading ? (
								<Loading />
							) : (
								// <div>
								//   An iframe
								// </div>
								<>
									<iframe
										src={`https://web.archive.org/web/${urlId}/http://mlh.io/`}
										frameBorder="0"
									></iframe>
								</>
							)}
						</>
					)}
				</div>
				<div className={Style.sidebar}>
					<div className={Style.top}></div>
					<div className={Style.bottom}>
						<svg
							width="149"
							height="183"
							viewBox="0 0 149 183"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_2_2"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="149"
								height="183"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M111 0H0V109H0.0105591C0.0105591 149.869 33.1415 183 74.0106 183C114.88 183 148.011 149.869 148.011 109C148.011 81.6052 133.124 57.6872 111 44.8938V0Z"
									fill="white"
								/>
							</mask>
							<g mask="url(#mask0_2_2)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M111 0H0V109H0.0105591C0.0105591 149.869 33.1415 183 74.0106 183C114.88 183 148.011 149.869 148.011 109C148.011 81.6052 133.124 57.6872 111 44.8938V0Z"
									fill="black"
								/>
								<path
									d="M0 0V-2H-2V0H0ZM111 0H113V-2H111V0ZM0 109H-2V111H0V109ZM0.0105591 109H2.01056V107H0.0105591V109ZM111 44.8938H109V46.0476L109.999 46.6252L111 44.8938ZM0 2H111V-2H0V2ZM2 109V0H-2V109H2ZM0.0105591 107H0V111H0.0105591V107ZM74.0106 181C34.2461 181 2.01056 148.764 2.01056 109H-1.98944C-1.98944 150.974 32.0369 185 74.0106 185V181ZM146.011 109C146.011 148.764 113.775 181 74.0106 181V185C115.984 185 150.011 150.974 150.011 109H146.011ZM109.999 46.6252C131.531 59.0758 146.011 82.3481 146.011 109H150.011C150.011 80.8623 134.718 56.2986 112.001 43.1624L109.999 46.6252ZM109 0V44.8938H113V0H109Z"
									fill="#606060"
								/>
								<path
									d="M74.0107 177C111.566 177 142.011 146.555 142.011 109C142.011 71.4446 111.566 41 74.0107 41C36.4553 41 6.0107 71.4446 6.0107 109C6.0107 146.555 36.4553 177 74.0107 177Z"
									fill="black"
									stroke="#2B2B2B"
									strokeWidth="2"
								/>
								<path
									d="M74.0107 171C108.252 171 136.011 143.242 136.011 109C136.011 74.7583 108.252 47 74.0107 47C39.769 47 12.0107 74.7583 12.0107 109C12.0107 143.242 39.769 171 74.0107 171Z"
									stroke="#2B2B2B"
									strokeWidth="2"
								/>
								<path
									d="M12.5176 109.177C12.5738 101.089 14.2097 93.07 17.3318 85.5765C20.4539 78.083 25.0011 71.2623 30.7138 65.5037C36.4264 59.7451 43.1926 55.1615 50.6261 52.0145C58.0596 48.8676 66.0147 47.2189 74.0374 47.1626C82.06 47.1064 89.993 48.6436 97.3835 51.6867C104.774 54.7297 111.477 59.2188 117.11 64.8979C122.743 70.5769 127.196 77.3345 130.214 84.785C133.232 92.2354 134.556 100.887 134.5 108.974L105.651 108.524C105.68 104.282 104.881 100.088 103.298 96.1799C101.715 92.2722 99.3794 88.7279 96.4249 85.7493C93.4704 82.7707 89.9547 80.4162 86.0785 78.8202C82.2023 77.2241 78.0415 76.4178 73.8337 76.4473C69.6259 76.4769 65.4535 77.3416 61.5547 78.9921C57.6559 80.6427 54.1071 83.0468 51.1108 86.0671C48.1146 89.0874 45.7296 92.6648 44.0921 96.5951C42.4546 100.525 41.5966 104.732 41.5671 108.973L12.5176 109.177Z"
									fill="#00FF00"
									fillOpacity="0.1"
								/>
								<path
									d="M120.011 108.5C120.011 102.525 118.834 96.6082 116.547 91.0879C114.261 85.5676 110.909 80.5517 106.684 76.3266C102.459 72.1016 97.4432 68.7501 91.9228 66.4635C86.4025 64.1769 80.4859 63 74.5107 63C68.5356 63 62.619 64.1769 57.0986 66.4635C51.5783 68.7501 46.5624 72.1016 42.3374 76.3266C38.1123 80.5517 34.7608 85.5676 32.4742 91.0879C30.1876 96.6082 29.0107 102.525 29.0107 108.5H74.5107H120.011Z"
									fill="#818181"
									fillOpacity="0.1"
									stroke="#005C00"
								/>
								<path
									d="M120.011 108.5C120.011 102.525 118.834 96.6082 116.547 91.0879C114.261 85.5676 110.909 80.5517 106.684 76.3266C102.459 72.1016 97.4432 68.7501 91.9228 66.4635C86.4025 64.1769 80.4859 63 74.5107 63V108.5H120.011Z"
									fill="#00FF00"
									fillOpacity="0.1"
								/>
								<path d="M79.6572 103.646L115.657 67.6464" stroke="#00FF85" />
								<path
									d="M12.0568 24V15.2727H15.0057C15.6875 15.2727 16.2472 15.3892 16.6847 15.6222C17.1222 15.8523 17.446 16.169 17.6562 16.5724C17.8665 16.9759 17.9716 17.4347 17.9716 17.9489C17.9716 18.4631 17.8665 18.919 17.6562 19.3168C17.446 19.7145 17.1236 20.027 16.6889 20.2543C16.2543 20.4787 15.6989 20.5909 15.0227 20.5909H12.6364V19.6364H14.9886C15.4545 19.6364 15.8295 19.5682 16.1136 19.4318C16.4006 19.2955 16.608 19.1023 16.7358 18.8523C16.8665 18.5994 16.9318 18.2983 16.9318 17.9489C16.9318 17.5994 16.8665 17.294 16.7358 17.0327C16.6051 16.7713 16.3963 16.5696 16.1094 16.4276C15.8224 16.2827 15.4432 16.2102 14.9716 16.2102H13.1136V24H12.0568ZM16.1648 20.0795L18.3125 24H17.0852L14.9716 20.0795H16.1648ZM20.0906 24H18.9826L22.1871 15.2727H23.2781L26.4826 24H25.3746L22.7667 16.6534H22.6985L20.0906 24ZM20.4996 20.5909H24.9656V21.5284H20.4996V20.5909ZM34.7624 15.2727V24H33.7397L28.984 17.1477H28.8988V24H27.842V15.2727H28.8647L33.6374 22.142H33.7227V15.2727H34.7624ZM42.843 18C42.7493 17.7131 42.6257 17.456 42.4723 17.2287C42.3217 16.9986 42.1413 16.8026 41.9311 16.6406C41.7237 16.4787 41.4879 16.3551 41.2237 16.2699C40.9595 16.1847 40.6697 16.142 40.3544 16.142C39.8374 16.142 39.3672 16.2756 38.9439 16.5426C38.5206 16.8097 38.1839 17.2031 37.9339 17.723C37.6839 18.2429 37.5589 18.8807 37.5589 19.6364C37.5589 20.392 37.6854 21.0298 37.9382 21.5497C38.1911 22.0696 38.5334 22.4631 38.9652 22.7301C39.397 22.9972 39.8828 23.1307 40.4226 23.1307C40.9226 23.1307 41.3629 23.0241 41.7436 22.8111C42.1271 22.5952 42.4254 22.2912 42.6385 21.8991C42.8544 21.5043 42.9624 21.0398 42.9624 20.5057L43.2862 20.5739H40.6612V19.6364H43.9851V20.5739C43.9851 21.2926 43.8317 21.9176 43.5249 22.4489C43.2209 22.9801 42.8004 23.392 42.2635 23.6847C41.7294 23.9744 41.1158 24.1193 40.4226 24.1193C39.6499 24.1193 38.9709 23.9375 38.3857 23.5739C37.8033 23.2102 37.3487 22.6932 37.022 22.0227C36.6982 21.3523 36.5362 20.5568 36.5362 19.6364C36.5362 18.946 36.6286 18.3253 36.8132 17.7741C37.0007 17.2202 37.2649 16.7486 37.6058 16.3594C37.9467 15.9702 38.3501 15.6719 38.8161 15.4645C39.282 15.2571 39.7947 15.1534 40.3544 15.1534C40.8146 15.1534 41.2436 15.223 41.6413 15.3622C42.0419 15.4986 42.3984 15.6932 42.7109 15.946C43.0263 16.196 43.2891 16.4957 43.4993 16.8452C43.7095 17.1918 43.8544 17.5767 43.9339 18H42.843ZM45.7951 24V15.2727H51.0621V16.2102H46.8519V19.1591H50.7894V20.0966H46.8519V23.0625H51.1303V24H45.7951Z"
									fill="white"
								/>
								<path
									d="M74.0107 171C108.252 171 136.011 143.242 136.011 109C136.011 74.7583 108.252 47 74.0107 47C39.769 47 12.0107 74.7583 12.0107 109C12.0107 143.242 39.769 171 74.0107 171Z"
									stroke="#2B2B2B"
									strokeWidth="2"
								/>
								<path
									d="M74.5 115C78.0899 115 81 112.09 81 108.5C81 104.91 78.0899 102 74.5 102C70.9101 102 68 104.91 68 108.5C68 112.09 70.9101 115 74.5 115Z"
									fill="black"
									stroke="#00FF85"
								/>
							</g>
						</svg>
					</div>
				</div>
				<div className={Style["left-bar"]}>
					<div className={Style["time-profile"]}>
						<h4>Time profiles</h4>
						{years.map((year, index) => {
							return (
								<button
									key={index}
									className={Style.profile}
									onClick={() => handleTime(year)}
									style={{
										backgroundColor: year === time ? "lime" : "",
										color: year === time ? "#000" : "",
										border: year === time ? "none" : "",
									}}
								>
									{year}
								</button>
							);
						})}
					</div>
					<div className={Style.box}>
						<svg
							width="148"
							height="183"
							viewBox="0 0 148 183"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_4_18"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="148"
								height="183"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M148 0H36V45.4889C14.434 58.42 0 82.0244 0 109C0 149.869 33.1309 183 74 183C114.869 183 148 149.869 148 109V0Z"
									fill="white"
								/>
							</mask>
							<g mask="url(#mask0_4_18)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M148 0H36V45.4889C14.434 58.42 0 82.0244 0 109C0 149.869 33.1309 183 74 183C114.869 183 148 149.869 148 109V0Z"
									fill="black"
								/>
								<path
									d="M36 0V-2H34V0H36ZM148 0H150V-2H148V0ZM36 45.4889L37.0285 47.2042L38 46.6216V45.4889H36ZM36 2H148V-2H36V2ZM38 45.4889V0H34V45.4889H38ZM2 109C2 82.7559 16.0401 59.789 37.0285 47.2042L34.9715 43.7736C12.8278 57.0511 -2 81.2929 -2 109H2ZM74 181C34.2355 181 2 148.764 2 109H-2C-2 150.974 32.0264 185 74 185V181ZM146 109C146 148.764 113.765 181 74 181V185C115.974 185 150 150.974 150 109H146ZM146 0V109H150V0H146Z"
									fill="#606060"
								/>
								<path
									d="M74 172C39.2061 172 11 143.794 11 109C11 74.2061 39.2061 46 74 46C108.794 46 137 74.2061 137 109C137 143.794 108.794 172 74 172ZM74 97.4652C67.6295 97.4652 62.4652 102.629 62.4652 109C62.4652 115.371 67.6295 120.535 74 120.535C80.3705 120.535 85.5348 115.371 85.5348 109C85.5348 102.629 80.3705 97.4652 74 97.4652Z"
									fill="#00FF00"
									fillOpacity="0.1"
									stroke="#00FF85"
								/>
								<path
									d="M74 177C36.4446 177 6 146.555 6 109C6 71.4446 36.4446 41 74 41C111.555 41 142 71.4446 142 109C142 146.555 111.555 177 74 177ZM74 100.493C69.3018 100.493 65.4931 104.302 65.4931 109C65.4931 113.698 69.3018 117.507 74 117.507C78.6982 117.507 82.5069 113.698 82.5069 109C82.5069 104.302 78.6982 100.493 74 100.493Z"
									stroke="#2B2B2B"
									strokeWidth="2"
								/>
								<path
									d="M33.9893 109C33.9893 131.091 51.8979 149 73.9893 149C96.0807 149 113.989 131.091 113.989 109C113.989 86.9086 96.0807 69 73.9893 69C51.8979 69 33.9893 86.9086 33.9893 109Z"
									stroke="#00FF85"
									strokeDasharray="2 2"
								/>
								<path
									d="M49.9893 109C49.9893 122.255 60.7345 133 73.9893 133C87.2441 133 97.9893 122.255 97.9893 109C97.9893 95.7452 87.2441 85 73.9893 85C60.7345 85 49.9893 95.7452 49.9893 109Z"
									stroke="#00FF85"
									strokeDasharray="2 2"
								/>
								<path
									d="M112.08 13H111.023C110.96 12.696 110.851 12.429 110.695 12.1989C110.541 11.9688 110.354 11.7756 110.132 11.6193C109.913 11.4602 109.67 11.3409 109.403 11.2614C109.136 11.1818 108.858 11.142 108.568 11.142C108.04 11.142 107.561 11.2756 107.132 11.5426C106.706 11.8097 106.366 12.2031 106.114 12.723C105.864 13.2429 105.739 13.8807 105.739 14.6364C105.739 15.392 105.864 16.0298 106.114 16.5497C106.366 17.0696 106.706 17.4631 107.132 17.7301C107.561 17.9972 108.04 18.1307 108.568 18.1307C108.858 18.1307 109.136 18.0909 109.403 18.0114C109.67 17.9318 109.913 17.8139 110.132 17.6577C110.354 17.4986 110.541 17.304 110.695 17.0739C110.851 16.8409 110.96 16.5739 111.023 16.2727H112.08C112 16.7187 111.855 17.1179 111.645 17.4702C111.435 17.8224 111.173 18.1222 110.861 18.3693C110.548 18.6136 110.197 18.7997 109.808 18.9276C109.422 19.0554 109.009 19.1193 108.568 19.1193C107.824 19.1193 107.162 18.9375 106.582 18.5739C106.003 18.2102 105.547 17.6932 105.214 17.0227C104.882 16.3523 104.716 15.5568 104.716 14.6364C104.716 13.7159 104.882 12.9205 105.214 12.25C105.547 11.5795 106.003 11.0625 106.582 10.6989C107.162 10.3352 107.824 10.1534 108.568 10.1534C109.009 10.1534 109.422 10.2173 109.808 10.3452C110.197 10.473 110.548 10.6605 110.861 10.9077C111.173 11.152 111.435 11.4503 111.645 11.8026C111.855 12.152 112 12.5511 112.08 13ZM114.145 19H113.037L116.242 10.2727H117.333L120.537 19H119.429L116.821 11.6534H116.753L114.145 19ZM114.554 15.5909H119.02V16.5284H114.554V15.5909ZM121.434 10.2727L124.025 17.6193H124.127L126.718 10.2727H127.826L124.622 19H123.531L120.326 10.2727H121.434ZM134.913 10.2727H135.97V16.0511C135.97 16.6477 135.829 17.1804 135.548 17.6491C135.27 18.1151 134.876 18.483 134.368 18.7528C133.859 19.0199 133.262 19.1534 132.578 19.1534C131.893 19.1534 131.297 19.0199 130.788 18.7528C130.279 18.483 129.885 18.1151 129.603 17.6491C129.325 17.1804 129.186 16.6477 129.186 16.0511V10.2727H130.243V15.9659C130.243 16.392 130.336 16.7713 130.524 17.1037C130.711 17.4332 130.978 17.6932 131.325 17.8835C131.674 18.071 132.092 18.1648 132.578 18.1648C133.064 18.1648 133.481 18.071 133.831 17.8835C134.18 17.6932 134.447 17.4332 134.632 17.1037C134.819 16.7713 134.913 16.392 134.913 15.9659V10.2727Z"
									fill="white"
								/>
							</g>
						</svg>
					</div>
				</div>
				<div className={Style["bottom-bar"]}>
					<div className={Style.pattern}></div>
					<div className={Style.time}>{time ? time : "TIME"}</div>
					<div className={Style.content}>
						{data
							.filter((item) => item.date === time)
							.map((item, index) => {
								return (
									<div key={index} className={Style.Item}>
										{/* <div className={Style.sidebarItemDate}>{item.date}</div> */}
										<div className={Style.Title}>{item.title}</div>
										<div className={Style.Description}>{item.description}</div>
									</div>
								);
							})}
					</div>
				</div>
				<div className={Style.logo}>MLH THROUGH TIME</div>
				<div className={Style.header}>
					<div className={Style.marquee}>
						<div>
							<span>Fasten your seat belts {"  "} Fasten your seat belts</span>

							<span>{"    "}Fasten your seat belts</span>
							<span>{"    "}Fasten your seat belts</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
