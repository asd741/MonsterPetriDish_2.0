import React, { Component } from 'react';
import { Link } from "gatsby";
import './monster.css';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
import {connect} from 'react-redux'

export default class Monster extends Component {
  componentDidMount() {
    let renderer, scene, camera;
    let cameraControl, stats, monster;
    // function initStats() {
    //     const stats = new Stats();
    //     stats.setMode(0);
    //     document.getElementById("stats").appendChild(stats.domElement);
    //     return stats;
    //   }

    // 自訂頂點創建粒子系統

    function generateSprite(color) {
      var canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;

      var context = canvas.getContext("2d");
      var gradient = context.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      if (color === "blue") {
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.2, "rgba(0,255,255,1)");
        gradient.addColorStop(0.4, "rgba(0,0,64,1)");
        gradient.addColorStop(1, "rgba(0,0,0,1)");
      }
      if (color === "white") {
        gradient.addColorStop(0.8, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
      }
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      var texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    }
    function createSpherePoints() {
      const bodyGeometry = new THREE.SphereGeometry(150, 190, 120);
      const eyesGeometry = new THREE.Geometry();
      const mouthGeometry = new THREE.Geometry();
      const handGeometry = new THREE.Geometry();
      const footGeometry = new THREE.Geometry();
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite("blue")
      });
      const eyesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite("white")
      });
      const mouthMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite("white")
      });
      const handMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite("blue")
      });
      const footMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        map: generateSprite("white")
      });
      for (let x = -4; x < 4; x++) {
        for (let y = -4; y < 4; y++) {
          for (let z = -4; z < 4; z++) {
            if (x * x + y * y + z * z <= 15) {
              const point = new THREE.Vector3(x * 4, y * 4, z * 4);
              eyesGeometry.vertices.push(point);
            }
          }
        }
      }
      for (let z = 0; z < 5; z++) {
        for (let x = -4, y = 0; x < 3;) {
          const topL = new THREE.Vector3(x * 3, y * 3, z);
          mouthGeometry.vertices.push(topL);
          x++;
          y++;
        }
        for (let x = 3, y = 5; x < 8;) {
          const topR = new THREE.Vector3(x * 3, y * 3, z);
          mouthGeometry.vertices.push(topR);
          x++;
          y--;
        }
        for (let x = -4; x < 9; x++) {
          const middle = new THREE.Vector3(x * 3, 0, z);
          mouthGeometry.vertices.push(middle);
        }
        for (let x = -4, y = 0; x < 3;) {
          const bottomL = new THREE.Vector3(x * 3, y * 3, z);
          mouthGeometry.vertices.push(bottomL);
          x++;
          y--;
        }
        for (let x = 3, y = -5; x < 8;) {
          const bottomR = new THREE.Vector3(x * 3, y * 3, z);
          mouthGeometry.vertices.push(bottomR);
          x++;
          y++;
        }
      }
      for (let z = 0; z > -7; z--) {
        for (let x = -4, y = -5; y < -1;) {
          const left = new THREE.Vector3(x * 3, y * 3 - z / 2, z);
          footGeometry.vertices.push(left);
          x++;
          y++;
        }
      }
      for (let z = 0; z > -5; z--) {
        for (let y = -4; y < 10;) {
          const middle = new THREE.Vector3(0 + z / 2, y * 3, z);
          footGeometry.vertices.push(middle);
          y++;
        }
      }
      for (let z = 0; z > -5; z--) {
        for (let x = 4, y = -5; y < -1;) {
          const right = new THREE.Vector3(x * 3, y * 3 - z / 2, z);
          footGeometry.vertices.push(right);
          x--;
          y++;
        }
      }
      for (let z = 0; z < 6; z++) {
        for (let y = 0; y < 25; y++) {
          for (let x = 0; x < 25; x++) {
            if (x < y) {
              handGeometry.vertices.push(new THREE.Vector3(x * 3, y * 3, z));
            }
          }
        }
      }
      let body = new THREE.Points(bodyGeometry, material),
        leftEyes = new THREE.Points(eyesGeometry, eyesMaterial),
        rightEyes = new THREE.Points(eyesGeometry, eyesMaterial),
        mouth = new THREE.Points(mouthGeometry, mouthMaterial),
        leftHand = new THREE.Points(handGeometry, handMaterial),
        rightHand = new THREE.Points(handGeometry, handMaterial),
        leftFoot = new THREE.Points(footGeometry, footMaterial),
        rightFoot = new THREE.Points(footGeometry, footMaterial);
      monster = new THREE.Group();
      body.position.set(0, 0, 0);
      leftEyes.position.set(-50, 55, 120);
      rightEyes.position.set(50, 55, 120);
      mouth.position.set(0, -30, 120);
      leftFoot.position.set(-40, -175, 0);
      rightFoot.position.set(40, -175, 0);
      leftHand.position.set(-150, -60, 0);
      rightHand.position.set(150, 50, 0);
      leftHand.rotation.z += 0.8;
      rightHand.rotation.z += 3.95;
      monster.add(
        body,
        leftEyes,
        rightEyes,
        mouth,
        leftHand,
        rightHand,
        leftFoot,
        rightFoot
      );
      scene.add(monster);
    }

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 400);
      camera.lookAt(scene.position);

      // cameraControl = new THREE.OrbitControls(camera);
      // cameraControl.autoRotate = true
      // stats = initStats();

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // 創建粒子系統
      createSpherePoints();

      // spotlight
      let spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-10, 40, 30);
      scene.add(spotLight);

      document.getElementById('monster').appendChild(renderer.domElement);
    }
    function animate() {
      monster.rotation.z += 0.005;
      monster.rotation.y += 0.005;
      monster.rotation.x += 0.005;
    }
    function render() {
      // stats.update();
      if(!window.monster){
        return;
      }
      animate();
      
      requestAnimationFrame(render);
      // cameraControl.update();
      renderer.render(scene, camera);
    }

    window.onresize=()=>{
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    init();
    render();
    window.monster=true;
  }
  
  componentWillUnmount(){
    window.monster=false;
    window.onresize=null;
  }
  render() {
    return (
      <div style={{ "position": "relative" }}>
        <div id="stats" />
        <div id='monster'/>
      </div>
    );
  }
}

