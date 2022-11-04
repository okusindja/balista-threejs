import * as THREE from "three";

// Calculate degrees to rad
function degreesToRad(degrees) {
  let pi = Math.PI;
  return degrees * (pi / 180);
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2d94cc);

const camera1 = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 1,
  window.innerHeight / -3,
  0,
  2000
);
camera1.position.set(2, 1, 48.41);
camera1.rotation.set(degreesToRad(0), 0, 0);

const camera2 = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 1,
  window.innerHeight / -3,
  0,
  10000
);
camera2.position.set(45.075, 30.165, 28.41);
camera2.rotation.set(degreesToRad(-17), degreesToRad(21), 0);

const camera3 = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 1,
  window.innerHeight / -2,
  0,
  10000
);
camera3.position.set(50, 100.244, 0);
camera3.rotation.set(degreesToRad(-90), 0, 0);

const cameras = [camera1, camera2, camera3];

// Add each camera in the scene
cameras.forEach((camera) => {
  camera.lookAt(scene.position);
  scene.add(camera);
});

const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const wallGeometry = new THREE.BoxGeometry(1, 15, 30);
const wallMaterial = new THREE.MeshBasicMaterial({
  color: 0x8a6438,
});
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.set(-300, 150, 0);
// wall.rotateY(-Math.PI * 0.5);
scene.add(wall);

//Balista
// Balista - start of Blade
const bladeGeometry = new THREE.LatheGeometry(
  THREE.Vector2[(0, -0.5)],
  THREE.Vector3[(0.5, 0)],
  THREE.Vector4[(0, 0.5)],
  12,
  0,
  360
);
const bladeMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
blade.position.set(-3.094, 3.844, 0);
blade.rotateZ(-Math.PI * 0.5);
blade.scale.set(0.3, 0.9, 0.5);
// Balista - end of Blade

// Balista - start of Stick
const stickGeometry = new THREE.CylinderGeometry(1, 1, 1, 8, 1);
const stickMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const stick = new THREE.Mesh(stickGeometry, stickMaterial);
stick.position.set(0, 3.821, 0);
stick.rotateZ(-Math.PI * 0.5);
stick.scale.set(0.08, 6, 0.08);
//Balista - end of Stick

//Balista - start of Arrow
const arrow = new THREE.Group();
arrow.add(blade);
arrow.add(stick);
scene.add(arrow);
//Balista - end of Arrow

//Balista - start of arch and pads
const archGeometry = new THREE.TorusGeometry(1.12, 0.08, 8, 26, Math.PI * 1);
const archMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const arch = new THREE.Mesh(archGeometry, archMaterial);
arch.position.set(-0.306, 4.096, 0);
arch.rotation.set(Math.PI * 0.5, 0, Math.PI * 0.5);
arch.scale.set(2.6, 1.1, 0.52);

const archPadGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
const archPadMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const leftArchPad = new THREE.Mesh(archPadGeometry, archPadMaterial);
leftArchPad.position.set(-1.492, 3.81, 0.653);
leftArchPad.scale.set(0.42, 0.48, 0.14);

const rightArchPad = leftArchPad.clone();
rightArchPad.position.z = -0.592;

const archAndPads = new THREE.Group();
archAndPads.add(leftArchPad);
archAndPads.add(rightArchPad);
archAndPads.add(arch);

//Balista - end of arch and pads

//Balista - start of arrow container
const baseContainerGeometry = new THREE.BoxGeometry(6.26, 0.12, 0.98);
const baseContainerMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const baseContainer = new THREE.Mesh(
  baseContainerGeometry,
  baseContainerMaterial
);
baseContainer.position.set(0.975, 3.66, 0.025);

const egdeContainerPadGeometry = new THREE.BoxGeometry(6.24, 0.14, 0.32);
const egdeContainerPadMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const leftEdge = new THREE.Mesh(
  egdeContainerPadGeometry,
  egdeContainerPadMaterial
);
leftEdge.position.set(0.982, 3.788, 0.353);

const rightEdge = leftEdge.clone();
rightEdge.position.z = -0.304;

const ballistaStarter = leftEdge.clone();
ballistaStarter.position.set(3.054, 3.845, 0.022);
ballistaStarter.scale.x = 0.16;

const containersEdge = new THREE.Group();
containersEdge.add(leftEdge);
containersEdge.add(rightEdge);
containersEdge.add(baseContainer);
containersEdge.add(ballistaStarter);
scene.add(containersEdge);
//Balista - end of arrow container

//Balista - start of arch's rope
const ropeGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
const ropeMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const leftRope = new THREE.Mesh(ropeGeometry, ropeMaterial);
leftRope.position.set(1.339, 3.986, 1.432);
leftRope.rotation.set(
  degreesToRad(90.2),
  degreesToRad(-3.2),
  degreesToRad(128.4)
);
leftRope.scale.set(0.02, 1.58, 0.02);

const rightRope = leftRope.clone();
rightRope.position.z = -1.44;
leftRope.rotation.y = degreesToRad(-3.2);
leftRope.rotation.z = degreesToRad(-128.4);

const rope = new THREE.Group();
rope.add(leftRope);
rope.add(rightRope);
//Balista - end of arch's rope

//Balista - start of bottom supporter
const backSupporterGeometry = new THREE.BoxGeometry(1, 1, 1);
const backSupporterMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const backSupporter = new THREE.Mesh(
  backSupporterGeometry,
  backSupporterMaterial
);
backSupporter.position.set(2.93, 2.605, 0.017);
backSupporter.rotation.set(0, 0, degreesToRad(-15.2));
backSupporter.scale.set(0.1, 2.42, 0.4);

const middleSupporter = backSupporter.clone();
middleSupporter.position.set(0.603, 2.393, 0.017);
middleSupporter.rotation.set(0, 0, degreesToRad(65.8));
middleSupporter.scale.set(0.1, 4.52, 0.4);

const frontSupporter = backSupporter.clone();
frontSupporter.position.set(-1.5, 2.535, 0.031);
frontSupporter.rotation.set(0, 0, 0);
frontSupporter.scale.set(0.4, 2.16, 0.44);

const bottomSupporters = new THREE.Group();
bottomSupporters.add(backSupporter);
bottomSupporters.add(middleSupporter);
bottomSupporters.add(frontSupporter);
//Balista - end of arch's supporter

//Balista - start of wheels
const wheelGeometry = new THREE.TorusGeometry(
  1.04,
  0.22,
  11,
  30,
  degreesToRad(360)
);
const wheelMaterial = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const backWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
backWheel.position.set(2.564, 0.839, 0.049);
backWheel.rotation.set(0, degreesToRad(90), 0);
backWheel.scale.set(0.56, 0.56, 1.16);

const frontWheel = backWheel.clone();
frontWheel.position.x = -1.52;

const wheels = new THREE.Group();
wheels.add(backWheel);
wheels.add(frontWheel);
//Balista - end of wheels

//Balista - full balista object
const balista = new THREE.Group();
balista.add(arrow);
balista.add(archAndPads);
balista.add(containersEdge);
balista.add(rope);
balista.add(bottomSupporters);
balista.add(wheels);
balista.position.set(0, 0, 0);
balista.scale.set(1, 1, 1);
scene.add(balista);
//Balista - full balista object
//Balista END

const grassGeometry = new THREE.PlaneGeometry(4000, 4000);
grassGeometry.rotateX(-Math.PI * 0.5);
const grassMaterial = new THREE.MeshBasicMaterial({
  color: 0x23873e,
  side: THREE.DoubleSide,
});
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.position.y = 0;
grass.receiveShadow = true;
scene.add(grass);

//Target creation // Start
const targetGeometry = new THREE.CircleGeometry(3, 100);
const targetMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const target = new THREE.Mesh(targetGeometry, targetMaterial);
target.position.set(0.6, 0, 0);
target.rotateY(-Math.PI * 1.5);

wall.add(target);

const targetGeometryInner1 = new THREE.CircleGeometry(2.5, 100);
const targetMaterialInner1 = new THREE.MeshBasicMaterial({
  color: 0x000000,
});
const targetInner1 = new THREE.Mesh(targetGeometryInner1, targetMaterialInner1);
targetInner1.position.set(0, 0, 0.1);
target.add(targetInner1);

const targetGeometryInner3 = new THREE.CircleGeometry(2, 100);
const targetMaterialInner3 = new THREE.MeshBasicMaterial({
  color: 0x083483,
});
const targetInner3 = new THREE.Mesh(targetGeometryInner3, targetMaterialInner3);
targetInner3.position.set(0, 0, 0.2);
target.add(targetInner3);

const targetGeometryInner4 = new THREE.CircleGeometry(1.3, 100);
const targetMaterialInner4 = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const targetInner4 = new THREE.Mesh(targetGeometryInner4, targetMaterialInner4);
targetInner4.position.set(0, 0, 0.3);
target.add(targetInner4);

const targetGeometryInner5 = new THREE.CircleGeometry(0.6, 100);
const targetMaterialInner5 = new THREE.MeshBasicMaterial({
  color: 0xfff000,
});
const targetInner5 = new THREE.Mesh(targetGeometryInner5, targetMaterialInner5);
targetInner5.position.set(0, 0, 0.4);
target.add(targetInner5);
//Target creation // End

balista.scale.set(16, 16, 16);
balista.position.z = -40;
wall.position.z = -40;
wall.scale.set(15, 15, 15);

let selectedCamera = cameras[1];

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    balista.translateZ(6);
  }
  if (e.keyCode === 39) {
    balista.translateZ(-6);
  }

  switch (e.key) {
    case "1":
      selectedCamera = cameras[1];
      break;
    case "2":
      selectedCamera = cameras[0];
      break;
    case "3":
      selectedCamera = cameras[2];
      break;
  }
};

function animate() {
  requestAnimationFrame(animate);
  setTimeout(() => {
    arrow.translateX(-0.4);
  }, 5000);
  renderer.render(scene, selectedCamera);
}
animate();
