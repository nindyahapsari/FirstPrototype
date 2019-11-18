let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* The Geometry Form */

let geometry = new THREE.TorusKnotGeometry(20, 3, 74, 20);
let material = new THREE.MeshBasicMaterial({ wireframe: true });
let torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 80;

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 1000;

/* ANIMATION */

let animate = () => {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;

  controls.update();

  renderer.render(scene, camera);
};

animate();
