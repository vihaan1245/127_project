
love_nwantiti = "";
last_forever = "";

function preload()
{
  love_nwantiti = loadSound("love.mp3");
  last_forever = loadSound("last.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

}

function draw()
{
   image(video, 0, 0, 600, 500);
}