import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2d94cc);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 7, 100);
controls.update();

const wallGeometry = new THREE.BoxGeometry(1, 13, 30);
const wallMaterial = new THREE.MeshStandardMaterial({
  color: 0x8a6438,
  emissive: 0x4f3619,
});
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.set(0, 6.5, -14.48);
wall.rotateY(-Math.PI * 0.5);
scene.add(wall);

const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshStandardMaterial({
  color: 0x083483,
  emissive: 0x041b44,
});
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 2.5, 0);
cube.castShadow = true;
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(7, 6, 8);
light.castShadow = true;
scene.add(light);

const grassGeometry = new THREE.PlaneGeometry(1000, 1000);
grassGeometry.rotateX(-Math.PI * 0.5);
const grassMaterial = new THREE.MeshStandardMaterial({
  color: 0x23873e,
  side: THREE.DoubleSide,
});
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.receiveShadow = true;
scene.add(grass);

//Target creation // Start
const targetGeometry = new THREE.CircleGeometry(3, 100);
const targetMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const target = new THREE.Mesh(targetGeometry, targetMaterial);
target.position.set(0.6, 0, 0);
target.rotateY(-Math.PI * 1.5);

wall.add(target);

const targetGeometryInner1 = new THREE.CircleGeometry(2.5, 100);
const targetMaterialInner1 = new THREE.MeshStandardMaterial({
  color: 0x000000,
});
const targetInner1 = new THREE.Mesh(targetGeometryInner1, targetMaterialInner1);
targetInner1.position.set(0, 0, 0.1);
target.add(targetInner1);

const targetGeometryInner3 = new THREE.CircleGeometry(2, 100);
const targetMaterialInner3 = new THREE.MeshStandardMaterial({
  color: 0x083483,
});
const targetInner3 = new THREE.Mesh(targetGeometryInner3, targetMaterialInner3);
targetInner3.position.set(0, 0, 0.2);
target.add(targetInner3);

const targetGeometryInner4 = new THREE.CircleGeometry(1.3, 100);
const targetMaterialInner4 = new THREE.MeshStandardMaterial({
  color: 0xff0000,
});
const targetInner4 = new THREE.Mesh(targetGeometryInner4, targetMaterialInner4);
targetInner4.position.set(0, 0, 0.3);
target.add(targetInner4);

const targetGeometryInner5 = new THREE.CircleGeometry(0.6, 100);
const targetMaterialInner5 = new THREE.MeshStandardMaterial({
  color: 0xfff000,
});
const targetInner5 = new THREE.Mesh(targetGeometryInner5, targetMaterialInner5);
targetInner5.position.set(0, 0, 0.4);
target.add(targetInner5);
//Target creation // End

camera.position.z = 5;

document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    cube.position.x -= 0.7;
  }
  if (e.keyCode === 38) {
    cube.position.z -= 0.7;
  }
  if (e.keyCode === 39) {
    cube.position.x += 0.7;
  }
  if (e.keyCode === 40) {
    cube.position.z += 0.7;
  }
};

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
