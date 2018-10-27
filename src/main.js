var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 1000;
camera.position.z = 0;
camera.up.x = 0, camera.up.y = 0, camera.up.z = 1;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
light.position.set(100, 100, 200);
scene.add(light);

var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1.0);
document.body.appendChild(renderer.domElement);
//add Object
var geometry = new THREE.Geometry();
var material = new THREE.LineBasicMaterial({ vertexColors: true});
var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color(0xFF0000);
var p1 = new THREE.Vector3( -100, 0, 100);
var p2 = new THREE.Vector3( 100, 0, -100);
geometry.vertices.push(p1);
geometry.vertices.push(p2);
geometry.colors.push(color1, color2);
var line = new THREE.Line(geometry, material, THREE.LineSegments);
scene.add(line);


// function render () {
    renderer.clear();
    renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }

// render();