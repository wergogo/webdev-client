export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-banner wd-bg-color-green wd-fg-color-white">
          Banner
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box holds a long sentence, but it still measures 120 by
          60 pixels because its width and height are declared explicitly
        </div>
      </div>
    </div>
  );
}
