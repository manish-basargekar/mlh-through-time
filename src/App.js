import Style from "./App.module.scss";
import { useEffect, useState } from "react";
import Offstate from "./components/OffState/Offstate";
import Loading from "./components/Loading/Loading";
import RangeSVG from "./components/RangeSVG/RangeSVG";
import CavuSVG from "./components/CavuSVG/CavuSVG";

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
                    title={`MLH websiste for ${time}`}
									></iframe>
								</>
							)}
						</>
					)}
				</div>
				<div className={Style.sidebar}>
					<div className={Style.top}></div>
					<RangeSVG />
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
					<CavuSVG />
				</div>
				<div className={Style["bottom-bar"]}>
					<div className={Style.pattern}></div>
					<div className={Style.time}>{time ? time : "TIME"}</div>
					<div className={Style.content}>
						{!time && (
							<div className={Style.Item}>
								{/* <div className={Style.sidebarItemDate}>{item.date}</div> */}
								<div className={Style.Title}>INTRODUCTION</div>
								<div className={Style.Description}>
									<p>
										This is a timeline of the events that happened at MLH. You
										can click on the time profiles to see the mlh website in
										past :)
									</p>
									<p style={{ marginTop: "1rem" }}>
										This site was built for a MLH hacky birthy hackathon. Made
										by{" "}
										<a
											href="http://www.mnsh.me"
											target="_blank"
											rel="noopener noreferrer"
										>
											Manish
										</a>
									</p>
								</div>
							</div>
						)}
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
