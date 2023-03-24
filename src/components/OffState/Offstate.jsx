import Style from "./Offstate.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Offstate = () => {
  const wrapContainerRef = useRef();
  const wrapRef = useRef();
  const q = gsap.utils.selector(wrapRef);

  // .Offstate_text__0-Ijx

  useEffect(() => {
    q("#text").forEach((el, i) => {
      gsap.to(el, {
        duration: 1,
        z: 1 * (i + 10),
      });
    });
  }, [q]);

  return (
    <div className={Style.off}>
      <div className={Style["scene-1"]}>
        <div className={Style["wrap-container"]} ref={wrapContainerRef}>
          <div className={Style.wrap} ref={wrapRef} id="wrap">
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>
            <div className={Style.text} id="text">
              <p>MLH</p>
              <p className={Style.sub}> through time </p>
            </div>

            {/* <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div>
            <div className={Style.text} id="text">
              MLH <br />
              <span className={Style.sub}> through time </span>
            </div> */}
          </div>
        </div>
		<div className={Style.instruction}>

        <h1 >SELECT A TIME PROFILE TO CONTINUE</h1>
		</div>
        {/* <button className={Style.explore} onClick={() => setMachine("ON")}>Start machine</button> */}
      </div>
    </div>
  );
};

export default Offstate;
