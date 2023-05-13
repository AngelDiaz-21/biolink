// Variables for setup
let container;
let camera;
let renderer;
let scene;

function init(){
    container = document.querySelector(".scene");

    // Create scene
    scene = new THREE.Scene();

    const fov    = 20;
    const aspect = container.clientWidth / container.clientHeight;
    const near   = 1;
    const far    = 1000;

    // Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 2, 30);

    const ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 50, 100);
    scene.add(light);
    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight - 10);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    let cargar_mago = new THREE.GLTFLoader();
    cargar_mago.load("./mago/scene.gltf", function(gltf) {
        scene.add(gltf.scene);
        mago = gltf.scene.children[0];
        animar_mago();
    });
}

function animar_mago() {
    requestAnimationFrame(animar_mago);
    mago.position.y = 1;
    mago.position.z = 23;
    mago.rotation.z += 0.009;
    renderer.render(scene, camera);
}

init();
