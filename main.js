const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// SCENE

var createScene = function() {
    
    var scene = new BABYLON.Scene(engine);

    let camera = new BABYLON.ArcRotateCamera("Camera", 0, BABYLON.Tools.ToRadians(0), 100, new BABYLON.Vector3(0, 30, 0), scene);
    camera.setPosition(new BABYLON.Vector3(BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(90), 100));
     // camera.lowerRadiusLimit = 50;
    camera.upperRadiusLimit = 150;

    camera.attachControl(canvas);
    
    // Lights

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.9;

    // HDRI

/*     var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData('Assets/HDRI/Studio2.dds', scene);
    scene.environmentTexture = hdrTexture;
    hdrTexture.level = 0.4; */

    scene.clearColor = new BABYLON.Color3(1, 1, 1);

    // Mesh Loader

    BABYLON.SceneLoader.AppendAsync('Assets/Meshes/', 'hylite_master.gltf', scene);

    // Get Meshes

    let casesClosed;
    let casesOpen;
    let pens;

    casesClosed = scene.getNodeByName('Cases_Closed');
    casesOpen = scene.getNodeByName('Cases_Open');
    pens = scene.getNodeByName('Pens');
    
    console.log(casesClosed, 'CasesClosed');

    
    // Get Materials

    // 


    //PBR

/*  var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);

    mesh.material = pbr;

    pbr.baseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
    pbr.metallic = 1;
    pbr.roughness = 1.0;

    pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData('Assets/HDRI/Studio2.dds', scene);
    pbr.specularGlossinessTexture = new BABYLON.Texture("Assets/Textures/The_Hugger_30L_Spec.jpg", scene); */
    
    return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});