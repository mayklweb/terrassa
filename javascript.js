let viewer,
  progress,
  progressElement,
  panorama1,
  panorama2,
  panorama3,
  panorama4,
  panorama5,
  panorama6,
  panorama7,
  panorama8,
  panorama9,
  panorama10,
  panorama11,
  panorama12,
  panorama13,
  panorama14,
  panorama15,
  panorama16,
  currentPanorama,
  interval;


window.onload = function () {
  let element = document.getElementById("progress");
  if (element) {
      element.style.display = "block"; // Xatolikni oldini olish
  } else {
      console.error("Element topilmadi!");
  }
};



viewer = new PANOLENS.Viewer();

function transitionToPanorama(nextPanorama) {
  let duration = 800;
  let startFov = viewer.camera.fov;
  let endFov = 100;

  function animate(zoomOut, callback) {
    let startTime = performance.now();
    requestAnimationFrame(function step(time) {
      let progress = Math.min((time - startTime) / duration, 1);
      viewer.camera.fov = zoomOut
        ? startFov + (endFov - startFov) * progress
        : endFov - (endFov - startFov) * progress;
      viewer.camera.updateProjectionMatrix();
      viewer.container.style.opacity = zoomOut ? 1 - progress : progress;

      if (progress < 1) requestAnimationFrame(step);
      else if (callback) callback();
    });
  }

  animate(true, () => {
    viewer.setPanorama(nextPanorama);
    animate(false);
  });
}

// }

// function onEnter(panorama) {
//   let startFov = 40; // Boshlang'ich FOV
//   let endFov = 90; // Zoom qilganda FOV
//   let duration = 1000; // 1 soniya ichida zoom

//   let startTime = performance.now();

//   function animateZoom(time) {
//     let progress = (time - startTime) / duration;
//     if (progress < 1) {
//       viewer.camera.fov = startFov - (startFov - endFov) * progress;
//       viewer.camera.updateProjectionMatrix();
//       requestAnimationFrame(animateZoom);
//     } else {
//       viewer.camera.fov = endFov;
//       viewer.camera.updateProjectionMatrix();
//     }
//   }

//   requestAnimationFrame(animateZoom);
// }

function onEnter(panorama) {
  transitionToPanorama(panorama);
}

function onProgress(event) {
  progress = (event.progress.loaded / event.progress.total) * 100;

  if (progress === 100) {
  }
}

panorama1 = new PANOLENS.ImagePanorama("media/16.webp");
panorama1.addEventListener("progress", onProgress);
panorama1.addEventListener("enter", () => onEnter(panorama1));

panorama2 = new PANOLENS.ImagePanorama("media/15.webp");
panorama2.addEventListener("progress", onProgress);
panorama2.addEventListener("enter", () => onEnter(panorama2));

panorama3 = new PANOLENS.ImagePanorama("media/14.webp");
panorama3.addEventListener("progress", onProgress);
panorama3.addEventListener("enter", () => onEnter(panorama3));

panorama4 = new PANOLENS.ImagePanorama("media/13.webp");
panorama4.addEventListener("progress", onProgress);
panorama4.addEventListener("enter", onEnter);

panorama5 = new PANOLENS.ImagePanorama("media/12.webp");
panorama5.addEventListener("progress", onProgress);
panorama5.addEventListener("enter", onEnter);

panorama6 = new PANOLENS.ImagePanorama("media/11.webp");
panorama6.addEventListener("progress", onProgress);
panorama6.addEventListener("enter", onEnter);

panorama7 = new PANOLENS.ImagePanorama("media/10.webp");
panorama7.addEventListener("progress", onProgress);
panorama7.addEventListener("enter", onEnter);

panorama8 = new PANOLENS.ImagePanorama("media/9.webp");
panorama8.addEventListener("progress", onProgress);
panorama8.addEventListener("enter", onEnter);

panorama9 = new PANOLENS.ImagePanorama("media/8.webp");
panorama9.addEventListener("progress", onProgress);
panorama9.addEventListener("enter", onEnter);

panorama10 = new PANOLENS.ImagePanorama("media/7.webp");
panorama10.addEventListener("progress", onProgress);
panorama10.addEventListener("enter", onEnter);

panorama11 = new PANOLENS.ImagePanorama("media/6.webp");
panorama11.addEventListener("progress", onProgress);
panorama11.addEventListener("enter", onEnter);

panorama12 = new PANOLENS.ImagePanorama("media/5.webp");
panorama12.addEventListener("progress", onProgress);
panorama12.addEventListener("enter", onEnter);

panorama13 = new PANOLENS.ImagePanorama("media/4.webp");
panorama13.addEventListener("progress", onProgress);
panorama13.addEventListener("enter", onEnter);

panorama14 = new PANOLENS.ImagePanorama("media/3.webp");
panorama14.addEventListener("progress", onProgress);
panorama14.addEventListener("enter", onEnter);

panorama15 = new PANOLENS.ImagePanorama("media/2.webp");
panorama15.addEventListener("progress", onProgress);
panorama15.addEventListener("enter", onEnter);

panorama16 = new PANOLENS.ImagePanorama("media/1.webp");
panorama16.addEventListener("progress", onProgress);
panorama16.addEventListener("enter", onEnter);

// Linking panoramas
panorama16.link(panorama15, new THREE.Vector3(4000, 160, 360));

panorama15.link(panorama14, new THREE.Vector3(-300, 800, -3800));
panorama15.link(panorama16, new THREE.Vector3(1800, -100, 200));

panorama14.link(panorama13, new THREE.Vector3(-2500, 400, 1400));
panorama14.link(panorama15, new THREE.Vector3(-2400, -1000, 300));

panorama13.link(panorama9, new THREE.Vector3(550, -200, 1800));
panorama13.link(panorama7, new THREE.Vector3(-800, 550, -2400));
panorama13.link(panorama12, new THREE.Vector3(-2000, -200, 1100));
panorama13.link(panorama14, new THREE.Vector3(0, -800, -2200));

panorama12.link(panorama11, new THREE.Vector3(1100, 0, -2600));
panorama12.link(panorama13, new THREE.Vector3(-3000, 0, 1000));

panorama11.link(panorama10, new THREE.Vector3(2400, 100, -800));
panorama11.link(panorama12, new THREE.Vector3(-2600, 0, 600));

panorama10.link(panorama11, new THREE.Vector3(-1400, 0, 100));

panorama9.link(panorama8, new THREE.Vector3(-3000, -100, 500));
panorama9.link(panorama13, new THREE.Vector3(2200, 0, -400));

panorama8.link(panorama9, new THREE.Vector3(-3000, -100, 200));

panorama7.link(panorama13, new THREE.Vector3(-2400, -800, 900));
panorama7.link(panorama6, new THREE.Vector3(-2200, 800, 1800));

panorama6.link(panorama7, new THREE.Vector3(50, -800, -1800));
panorama6.link(panorama5, new THREE.Vector3(-2200, -100, 0));
panorama6.link(panorama3, new THREE.Vector3(-600, -100, 2200));

panorama5.link(panorama4, new THREE.Vector3(2400, -100, -400));
panorama5.link(panorama6, new THREE.Vector3(-400, -100, -2200));

panorama4.link(panorama5, new THREE.Vector3(-1100, -100, -1800));
panorama4.link(panorama3, new THREE.Vector3(1800, -100, 600));

panorama3.link(panorama6, new THREE.Vector3(500, -100, -1800));
panorama3.link(panorama4, new THREE.Vector3(-1400, -100, -700));
panorama3.link(panorama2, new THREE.Vector3(100, -100, 1800));

panorama2.link(panorama3, new THREE.Vector3(-1900, -100, 600));

panorama1.link(panorama3, new THREE.Vector3(-1900, -100, 600));

viewer.add(
  panorama1,
  panorama2,
  panorama3,
  panorama4,
  panorama5,
  panorama6,
  panorama7,
  panorama8,
  panorama9,
  panorama10,
  panorama11,
  panorama12,
  panorama13,
  panorama14,
  panorama15,
  panorama16
);

// document.querySelectorAll("div").forEach((div) => {
//   if (getComputedStyle(div).height === "44px") {
//     div.style.display = "none"; /* yoki inline, flex */
//   }
// });
