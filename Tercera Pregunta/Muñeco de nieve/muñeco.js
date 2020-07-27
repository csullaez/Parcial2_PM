// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
    var canvasWidth = window.innerWidth * 0.9;
    var canvasHeight = window.innerHeight * 0.9;

    // CAMERA

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 80000);
    camera.position.set(0, 2, 15);
    camera.lookAt(0, 0, 0);

    // LIGHTS

    light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
    light.position.set(1, 1, 1);
    light.target.position.set(0, 0, 0);
    light.target.updateMatrixWorld()

    var ambientLight = new THREE.AmbientLight(0x111111);

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0xAAAAAA, 1.0);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    // Add to DOM
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // CONTROLS
    cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);



    var cuerpo = new THREE.Geometry();
    material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var traslateObjetoX = 0;
    var traslateObjetoY = 0;
    var traslateObjetoZ = 0;

    var rotateObjetoX = 0;
    var rotateObjetoY = 0;
    var rotateObjetoZ = 0;
    bola_grande = new THREE.SphereGeometry(1.2, 32, 32);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, -0.9 + traslateObjetoY, + traslateObjetoZ);

    cuerpo.mergeMesh(esfera);



    bola_pequeña = new THREE.SphereGeometry(.8, 32, 32);
    var esfera = new THREE.Mesh(bola_pequeña);
    esfera.position.set(0.9 + traslateObjetoX, .9 + traslateObjetoY, + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cuerpo.mergeMesh(esfera);



    bola_pequeña = new THREE.SphereGeometry(.6, 32, 32);
    var esfera = new THREE.Mesh(bola_pequeña);
    esfera.position.set(0.9 + traslateObjetoX, 2.1 + traslateObjetoY, + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cuerpo.mergeMesh(esfera);
    var muñeco = new THREE.Mesh(cuerpo, material);
    //Zapatos

    var zapatos = new THREE.Geometry();
    bola_grande = new THREE.SphereGeometry(.3, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.3 + traslateObjetoX, -1.7 + traslateObjetoY, .7 + traslateObjetoZ);

    zapatos.mergeMesh(esfera);


    // var zapatos = new THREE.Geometry();
    bola_grande = new THREE.SphereGeometry(.3, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(1.5 + traslateObjetoX, -1.7 + traslateObjetoY, .7 + traslateObjetoZ);

    zapatos.mergeMesh(esfera);

    zapatoscompletos = new THREE.Mesh(zapatos, material);


    //Botones
    var boton = new THREE.Geometry();
    material = new THREE.MeshPhongMaterial({ color: 0x161616 });

    bola_grande = new THREE.SphereGeometry(.15, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, -1.3 + traslateObjetoY, 1.1 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);



    bola_grande = new THREE.SphereGeometry(.15, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, -0.7 + traslateObjetoY, 1.15 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);

    bola_grande = new THREE.SphereGeometry(.15, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, -0.1 + traslateObjetoY, .9 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);


    bola_grande = new THREE.SphereGeometry(.1, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, 0.5 + traslateObjetoY, .7 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);


    bola_grande = new THREE.SphereGeometry(.1, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, 0.9 + traslateObjetoY, .8 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);


    var traslateObjetoX = 0;
    var traslateObjetoY = 0;
    var traslateObjetoZ = 0;

    var rotateObjetoX = 0;
    var rotateObjetoY = 0;
    var rotateObjetoZ = 0;
    bola_grande = new THREE.SphereGeometry(.1, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, 1.3 + traslateObjetoY, .7 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    boton.mergeMesh(esfera);
    botones = new THREE.Mesh(boton, material);


    var cara = new THREE.Geometry();
    var traslateObjetoX = 0;
    var traslateObjetoY = 0;
    var traslateObjetoZ = 0;

    var rotateObjetoX = 0;
    var rotateObjetoY = 0;
    var rotateObjetoZ = 0;
    bola_grande = new THREE.SphereGeometry(.1, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.7 + traslateObjetoX, 2.3 + traslateObjetoY, .5 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);


    var traslateObjetoX = 0;
    var traslateObjetoY = 0;
    var traslateObjetoZ = 0;

    var rotateObjetoX = 0;
    var rotateObjetoY = 0;
    var rotateObjetoZ = 0;
    bola_grande = new THREE.SphereGeometry(.1, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(1.1 + traslateObjetoX, 2.3 + traslateObjetoY, .5 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);




    //Boca
    var traslateObjetoX = 0;
    var traslateObjetoY = 0;
    var traslateObjetoZ = 0;

    var rotateObjetoX = 0;
    var rotateObjetoY = 0;
    var rotateObjetoZ = 0;
    bola_grande = new THREE.SphereGeometry(.05, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(1.2 + traslateObjetoX, 2 + traslateObjetoY, .5 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);

    bola_grande = new THREE.SphereGeometry(.05, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(1.1 + traslateObjetoX, 1.9 + traslateObjetoY, .52 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);


    bola_grande = new THREE.SphereGeometry(.045, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(1 + traslateObjetoX, 1.85 + traslateObjetoY, .54 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);
    bola_grande = new THREE.SphereGeometry(.045, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.9 + traslateObjetoX, 1.85 + traslateObjetoY, .55 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);

    bola_grande = new THREE.SphereGeometry(.05, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.8 + traslateObjetoX, 1.9 + traslateObjetoY, .55 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);

    bola_grande = new THREE.SphereGeometry(.05, 32, 36);
    var esfera = new THREE.Mesh(bola_grande);
    esfera.position.set(0.7 + traslateObjetoX, 2 + traslateObjetoY, .55 + traslateObjetoZ);
    esfera.rotateX(rotateObjetoX);
    esfera.rotateY(rotateObjetoY);
    esfera.rotateZ(rotateObjetoZ);
    cara.mergeMesh(esfera);

    rostro = new THREE.Mesh(cara, material);



    //Sombrero

    var som = new THREE.Geometry();
    cilindro = new THREE.CylinderGeometry(.6, .5, 0.6, 64);
    var mesh = new THREE.Mesh(cilindro);
    mesh.position.set(0.9 + traslateObjetoX, 3.2 + traslateObjetoY, + traslateObjetoZ);
    som.mergeMesh(mesh);


    cilindro = new THREE.CylinderGeometry(.77, .6, 0.05, 64);
    var mesh = new THREE.Mesh(cilindro);
    mesh.position.set(0.9 + traslateObjetoX, 2.7 + traslateObjetoY, + traslateObjetoZ);
    som.mergeMesh(mesh);
    sombrero = new THREE.Mesh(som, material);


    material = new THREE.MeshPhongMaterial({ color: 0x990000 });
    cilindro = new THREE.CylinderGeometry(.5, .5, 0.35, 64);
    var mesh = new THREE.Mesh(cilindro, material);
    mesh.position.set(0.9 + traslateObjetoX, 2.9 + traslateObjetoY, + traslateObjetoZ);
    som.mergeMesh(mesh);

    //NARIZ
    material = new THREE.MeshPhongMaterial({ color: 0xF26D15 });
    zanahoria = new THREE.CylinderGeometry(0.01, 0.1, 0.8, 64);
    var nariz = new THREE.Mesh(zanahoria, material);
    nariz.position.set(0.9 + traslateObjetoX, 2.2 + traslateObjetoY, .9 + traslateObjetoZ);
    nariz.rotateX(rotateObjetoX + 1.5);

    //BRAZOS
    //Izquierda
    material = new THREE.MeshPhongMaterial({ color: 0x783F04 });
    var brazos = new THREE.Geometry();

    cilindro = new THREE.CylinderGeometry(.035, .05, 1.4, 64);
    var brazoizq = new THREE.Mesh(cilindro);
    brazoizq.position.set(-.4 + traslateObjetoX, 1.42 + traslateObjetoY, .2 + traslateObjetoZ);
    brazoizq.rotateZ(rotateObjetoX + 1);
    brazos.mergeMesh(brazoizq);

    //dedos
    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo1 = new THREE.Mesh(cilindro);
    dedo1.position.set(-1.08 + traslateObjetoX, 1.75 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo1.rotateZ(rotateObjetoX + 2.2);
    brazos.mergeMesh(dedo1);

    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo2 = new THREE.Mesh(cilindro);
    dedo2.position.set(-1.1 + traslateObjetoX, 1.85 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo2.rotateZ(rotateObjetoX + 1.3);
    brazos.mergeMesh(dedo2);

    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo3 = new THREE.Mesh(cilindro);
    dedo3.position.set(-1 + traslateObjetoX, 1.9 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo3.rotateZ(rotateObjetoX + 0.2);
    brazos.mergeMesh(dedo3);


    //Derecha
    cilindro = new THREE.CylinderGeometry(.035, .05, 1.35, 64);
    var brazoder = new THREE.Mesh(cilindro);
    brazoder.position.set(2.2 + traslateObjetoX, 1.45 + traslateObjetoY, .2 + traslateObjetoZ);
    brazoder.rotateZ(rotateObjetoX + -1);
    brazos.mergeMesh(brazoder);

    //dedos
    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo4 = new THREE.Mesh(cilindro);
    dedo4.position.set(2.88 + traslateObjetoX, 1.75 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo4.rotateZ(rotateObjetoX + -2.2);
    brazos.mergeMesh(dedo4);

    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo5 = new THREE.Mesh(cilindro);
    dedo5.position.set(2.88 + traslateObjetoX, 1.85 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo5.rotateZ(rotateObjetoX + -1.3);
    brazos.mergeMesh(dedo5);

    cilindro = new THREE.CylinderGeometry(.025, .025, .25, 64);
    var dedo6 = new THREE.Mesh(cilindro);
    dedo6.position.set(2.78 + traslateObjetoX, 1.92 + traslateObjetoY, .2 + traslateObjetoZ);
    dedo6.rotateZ(rotateObjetoX + 0.2);
    brazos.mergeMesh(dedo6);

    brazoscompletos = new THREE.Mesh(brazos, material);




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Arboles
    //Tronco izquierda
    var troncos = new THREE.Geometry();
    cilindro = new THREE.CylinderGeometry(.7, .7, 3, 64);
    var tronco1 = new THREE.Mesh(cilindro);
    tronco1.position.set(6 + traslateObjetoX, -.6 + traslateObjetoY, .2 + traslateObjetoZ);
    troncos.mergeMesh(tronco1);
    troncoscompletos = new THREE.Mesh(troncos, material);


    // tronco derecha
    traslateObjetoY = 1;
    cilindro = new THREE.CylinderGeometry(.7, .7, 4, 64);
    var tronco2 = new THREE.Mesh(cilindro);
    tronco2.position.set(-5 + traslateObjetoX, -.9 + traslateObjetoY, .2 + traslateObjetoZ);
    troncos.mergeMesh(tronco2);
    troncoscompletos = new THREE.Mesh(troncos, material);

    // Hojas verdes
    material = new THREE.MeshPhongMaterial({ color: 0x274E13 });
    var hojas = new THREE.Geometry();

    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas1 = new THREE.Mesh(cilindro);
    hojas1.position.set(-5 + traslateObjetoX, 0.1 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas1);


    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas2 = new THREE.Mesh(cilindro);
    hojas2.position.set(-5 + traslateObjetoX, 1 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas2);


    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas3 = new THREE.Mesh(cilindro);
    hojas3.position.set(-5 + traslateObjetoX, 1.9 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas3);

    hojascompletasverdes = new THREE.Mesh(hojas, material);

    // Hojas blancas
    material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var hojas = new THREE.Geometry();

    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas1 = new THREE.Mesh(cilindro);
    hojas1.position.set(6 + traslateObjetoX, 0.1 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas1);


    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas2 = new THREE.Mesh(cilindro);
    hojas2.position.set(6 + traslateObjetoX, 1 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas2);


    cilindro = new THREE.CylinderGeometry(.1, 1.5, 1.7, 64);
    var hojas3 = new THREE.Mesh(cilindro);
    hojas3.position.set(6 + traslateObjetoX, 1.9 + traslateObjetoY, .2 + traslateObjetoZ);
    hojas.mergeMesh(hojas3);

    hojascompletasblancas = new THREE.Mesh(hojas, material);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    scene = new THREE.Scene();
    scene.add(light);
    scene.add(ambientLight);
    scene.add(muñeco);
    scene.add(botones);
    scene.add(zapatoscompletos);
    scene.add(rostro);
    scene.add(nariz);
    scene.add(mesh);
    scene.add(sombrero);
    scene.add(brazoscompletos);
    scene.add(troncoscompletos);
    scene.add(hojascompletasverdes);
    scene.add(hojascompletasblancas);

}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}

function render() {
    var delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
}

try {
    init();
    animate();
} catch (e) {
    var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
    $('#container').append(errorReport + e);
}

