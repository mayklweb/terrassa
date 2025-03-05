import panorama from 'panorama'

const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot.position.set(2000, 0, -2000);
infospot.addHoverText("Bu yerda ma'lumot bor!");
panorama.add(infospot);

const panorama2 = new PANOLENS.ImagePanorama('second-image.jpg');
infospot.addEventListener("click", () => {
    viewer.setPanorama(panorama2);
});


const videoPanorama = new PANOLENS.VideoPanorama('your-video.mp4');
viewer.add(videoPanorama);
