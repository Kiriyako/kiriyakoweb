import Link from "next/link";

export default function Project() {
  return (
    <div id="main">
      <h1>My Projects:</h1>
      <div id="project">
      <div className="project-item">
          <img width="600" height="285" src={`../../katharsis.png`} alt="katharsis" />
          <Link href={`https://katharsis.netlify.app/`}><h2>Katharsis</h2></Link>
        </div>
      <div className="project-item">
          <img width="600" height="285" src={`../../ayakaa.png`} alt="ayakaa" />
          <Link href={`https://ayakaa.netlify.app/`}><h2>ayakaa</h2></Link>
        </div>
      <div className="project-item">
          <img width="600" height="285" src={`../../whetherlikeNew.png`} alt="whetherlike" />
          <Link href={`https://whetherlike.netlify.app/`}><h2>Whetherlike (New)</h2></Link>
        </div>
        <div className="project-item">
          <img width="600" height="285" src={`../../inuani.png`} alt="inuani" />
          <Link href={`https://inuani.netlify.app/`}><h2>inuani</h2></Link>
        </div>
        <div className="project-item">
          <img width="600" height="285" src={`../../kanjiyuki.png`} alt="kanjiyuki" />
          <Link href={`https://kiriyako.github.io/KanjiYuki/`}><h2>KanjiYuki</h2></Link>
        </div>
      </div>
    </div>
  );
}
