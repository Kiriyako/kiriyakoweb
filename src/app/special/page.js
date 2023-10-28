
export default async function Page() {
  async function getAnimeData() {
    const res = await fetch(`https://api.waifu.pics/sfw/happy`, { cache: 'no-store' });
    return res.json();
  }

  const data = await getAnimeData();

  return (
    <div id="front">
            <div id="anime">
                <br></br>
              <img alt={data.url} src={data.url} />
            </div>
      </div>
  );
}