import Link from "next/link";

export default function Project() {
  return (
    <div id="main">
      <h1>My Projects:</h1>
      <div id="project">
      <div className="project-item">
          <img width="600" height="285" src={`https://cdn.discordapp.com/attachments/1094570042781335554/1182721016879919164/image.png?ex=6585b9c8&is=657344c8&hm=6dfc9e3e1146113c95ac6146369f38bbd26ffa7fd87b4353b84c3e09f5d3f02d&`} alt="ayakaa" />
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
        <div className="project-item">
          <img width="600" height="285" src={`../../whetherlike.png`} alt="whetherlikevanilla" />
          <Link href={`https://kiriyako.github.io/whetherlike/`}><h2>Whetherlike (Vanilla JS)</h2></Link>
        </div>
      </div>
    </div>
  );
}
