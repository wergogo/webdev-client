export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading a local personal image:
      <br />
      <img
        id="wd-your-image"
        src="/images/Pochacco.png"
        width="200px"
        height="224px"
        alt="Pochacco, a cute dog character from Sanrio"
      />
      <br />
      Loading a remote AI sample image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="NASA space image"
        src="https://spaceplace.nasa.gov/gallery-space/en/NGC2336-galaxy.en.jpg"
      />
    </div>
  );
}