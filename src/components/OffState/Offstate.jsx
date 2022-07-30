import Style from "./Offstate.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const Offstate = ({setMachine}) => {
	const wrapContainerRef = useRef();
	const wrapRef = useRef();
	const q = gsap.utils.selector(wrapRef);

	useEffect(() => {
		q(".Offstate_text__LqpRx").forEach((el, i) => {
			gsap.to(el, {
				duration: 1,
				z: 1 * (i + 10),
                
			});
		});




	}, []);

	return (
		<div className={Style.off}>
			<div className={Style["scene-1"]}>
				<div className={Style["wrap-container"]} ref={wrapContainerRef}>
					<div className={Style.wrap} ref={wrapRef}>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
						<div className={Style.text}>
							MLH <br />
							<span className={Style.sub}> through time </span>
						</div>
					</div>
				</div>
				<button className={Style.explore} onClick={() => setMachine("ON")}>Start machine</button>
			</div>
		</div>
	);
};

export default Offstate;
