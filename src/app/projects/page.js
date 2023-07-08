import Link from "next/link";

export default function Project() {
  return (
    <div id="main">
      <h1>My Projects:</h1>
      <div id="project">
      <div className="project-item">
          <img width="600" height="285" src={`../../whetherlikeNew.png`} alt="whetherlike" />
          <Link href={`https://whetherlike.vercel.app/`}><h2>Whetherlike (New)</h2></Link>
        </div>
        <div className="project-item">
          <img width="600" height="285" src={`../../inuani.png`} alt="inuani" />
          <Link href={`https://inuani.vercel.app/`}><h2>inuani</h2></Link>
        </div>
        <div className="project-item">
          <img width="600" height="285" src={`../../kanjiyuki.png`} alt="kanjiyuki" />
          <Link href={`https://kiriyako.github.io/KanjiYuki/`}><h2>KanjiYuki</h2></Link>
        </div>
        <div className="project-item">
          <img width="600" height="285" src={`../../whetherlike.png`} alt="whetherlikevanilla" />
          <Link href={`https://kiriyako.github.io/whetherlike/`}><h2>Whetherlike (Vanilla JS)</h2></Link>
        </div>
      </div>
    </div>
  );
}
