import Link from "next/link"
export default function About(){
  return (
   <div id="main">
  
   <h1 style={{fontSize: '30px;'}}>Hi. I am Kiriyako, just a random high-schooler from India. I like making web applications (though I suck). <br></br>I also own <Link href={`https://project-amai.github.io/about`} >project-amai.</Link>  </h1>
   </div>
  )
}