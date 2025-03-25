// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const d = 20;
const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
camera.position.set(20, 20, 20);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Island base
const baseGeometry = new THREE.BoxGeometry(10, 2, 10);
const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x8888AA });
const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
scene.add(baseMesh);

// Tree
const treeTrunkGeometry = new THREE.ConeGeometry(0.5, 3, 4);
const treeFoliageGeometry = new THREE.SphereGeometry(2, 8, 8);
const treeMaterial = new THREE.MeshLambertMaterial({ color: 0x448844 });
const treeTrunk = new THREE.Mesh(treeTrunkGeometry, treeMaterial);
const treeFoliage = new THREE.Mesh(treeFoliageGeometry, treeMaterial);
treeTrunk.position.y = 1.5;
treeFoliage.position.y = 4;
const tree = new THREE.Group();
tree.add(treeTrunk);
tree.add(treeFoliage);
tree.position.set(3, 2, 3);
scene.add(tree);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();