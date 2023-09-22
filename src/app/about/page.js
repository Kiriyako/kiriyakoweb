import Link from "next/link"
export default function About() {
  return (
    <div id="main">
      <h1 style={{ fontSize: '30px' }}>Hi. I am Kiriyako, just a random high-schooler from India. I like making web applications (though I suck). I&apos;m very much interested in Japanese culture and have been learning the language for almost 3 years now. I also own <Link href={`https://project-amai.github.io/about`}>project-amai.</Link></h1>
      <br></br>
      <h1 style={{ fontSize: '30px' }}>やーほ！ Kiriyakoと申します。高校生1年です。 ウェブアプリを作るが好きです (けど、へたくそです). 日本の文化は面白いと思いますそして3年くらい日本語を勉強します。</h1>
    </div>
  )
}
