import Link from "next/link"
export default function About(){
  return (
   <div id="main">
  
   <h1>My Socials: </h1>
   <Link href={`https://anilist.co/user/Kiriyako/`}> <h1> AniList: Kiriyako</h1></Link>
   <Link href={`https://github.com/Kiriyako`}><h1>GitHub: Kiriyako</h1></Link>
   <Link href={`https://www.reddit.com/user/VizardVictory`}><h1>Reddit: VizardVictory</h1></Link>
   <Link href={`https://open.spotify.com/user/e4o9n8roznot3q36966roaa7j`}><h1>Spotify: さとう</h1></Link>
   <Link href={`https://osu.ppy.sh/users/20913471`}><h1>osu!: VizardVictory2</h1></Link>
   <h1>Discord : kiriyako</h1>
   </div>
  )
}