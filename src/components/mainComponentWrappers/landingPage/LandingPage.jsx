import { useRef, useEffect } from "react";
import useState from "react-usestateref";
import SectionWrappers from "../../wrappers/sectionWrappers";
import NextInput from "../../inputs/NextInput.jsx";
import ProgressBar from "../../inputs/ProgressBar";
import SideBars from "../../overlays/sideBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteName } from "../../overlays/siteName";

export default function LandingPage() {
  const LandingPageBackgroundSectionRef = useRef(null);
  const [greybar, setGreybar] = useState(3);
  const [greenbar, setGreenbar] = useState(1);
  const [, setCount, countRef] = useState(1);
  const [, setImageCurrent, imageCurrentRef] = useState(null);

  useEffect(() => {
    const onPageLoad = () => {
      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      async function load() {
        for (let i = 1; i < 6; i++) {
          if (countRef.current === 0) {
            i = 7;
            break;
          }
          setImageCurrent(i);
          if (LandingPageBackgroundSectionRef.current === null);
          else {
            LandingPageBackgroundSectionRef.current.className = `LandingPageSection backgroundMain${[
              i,
            ]}`;
          }
          changeBar(i);

          if (i === 5) {
            setGreenbar(5);
            setGreybar(0);
            i = 0;
          }

          function changeBar(i) {
            setGreenbar(i);
            setGreybar(5 - i);
          }

          await timer(8000);
        }
      }

      if (countRef.current === 0) {
        return console.log("end please");
      } else {
        if (LandingPageBackgroundSectionRef.current === null);
        else {
          load();
        }
      }
    };

    if (document.readyState === "complete") {
      if (LandingPageBackgroundSectionRef.current === null);
      else {
        onPageLoad();
      }
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [countRef, setImageCurrent]);

  const SideBarFunctionEndRotationRight = () => {
    setCount(0);
    if (imageCurrentRef.current === 1) {
      setImageCurrent(5);
    } else {
      setImageCurrent(imageCurrentRef.current - 1);
    }

    LandingPageBackgroundSectionRef.current.className = `LandingPageSection backgroundMain${[
      imageCurrentRef.current,
    ]}`;
    setGreenbar(imageCurrentRef.current);
    setGreybar(5 - imageCurrentRef.current);
  };

  const SideBarFunctionEndRotationLeft = () => {
    setCount(0);
    if (imageCurrentRef.current === 5) {
      setImageCurrent(1);
    } else {
      setImageCurrent(imageCurrentRef.current + 1);
    }

    LandingPageBackgroundSectionRef.current.className = `LandingPageSection backgroundMain${[
      imageCurrentRef.current,
    ]}`;
    setGreenbar(imageCurrentRef.current);
    setGreybar(5 - imageCurrentRef.current);
  };

  return (
    <>
      <SectionWrappers
        sectionWrapperRef={LandingPageBackgroundSectionRef}
        sectionWrapperClassName="LandingPageSection"
      >
        <div className="content">
          <div className="upperContent">
            <div className="titleHolder">
              <h1>
                {SiteName}
                <span>
                  <FontAwesomeIcon icon="fa-moon" />
                </span>
              </h1>
              <h2>The Complete Travel APP Planner</h2>
            </div>
          </div>
          <div className="middleContent">
            <NextInput
              ButtonText={"Create Trip"}
              ButtonClass={`nextButton`}
              Linked={"/content"}
              ButtonClassContainer={`leftAnime`}
            />
            <NextInput
              ButtonText={"Saved Trips"}
              ButtonClass={`nextButton`}
              Linked={"/usercontent"}
              ButtonClassContainer={`rightAnime`}
            />
          </div>
          <div className="bottomContent">
            <h3>Designed With You in Mind</h3>
            <ProgressBar green={greenbar} grey={greybar} />
          </div>
        </div>
      </SectionWrappers>
      <SideBars
        functionOnclick={SideBarFunctionEndRotationLeft}
        direction="right"
      />
      <SideBars
        backgroundChanger={LandingPageBackgroundSectionRef}
        functionOnclick={SideBarFunctionEndRotationRight}
        direction="left"
      />
    </>
  );
}
