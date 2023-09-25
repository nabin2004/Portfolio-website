// Initialize Firebase (this part is optional for this example)
// You've already provided the Firebase initialization code in your question

// Create a Three.js scene and a rotating cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background') });

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Mouse movement interaction
const mouse = new THREE.Vector2();

document.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube based on mouse movement
  cube.rotation.x += mouse.y * 0.05;
  cube.rotation.y += mouse.x * 0.05;

  renderer.render(scene, camera);
};

animate();
