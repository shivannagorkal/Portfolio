/**
 * Shivanna Portfolio - 3D WebGL Experience
 * Built with Three.js
 */

(function () {
  'use strict';

  // Check WebGL availability
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded. 3D features disabled.');
    return;
  }

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // Reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Scene, Camera, Renderer ---
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x080B09, 0.04);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 16);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // --- Color Palette (matches CSS --green: #00D978) ---
  const COLOR_GREEN = 0x00D978;
  const COLOR_GREEN_DIM = 0x00B864;
  const COLOR_GREEN_GLOW = 0x44DDAA;
  const COLOR_DARK = 0x080B09;
  // ==========================================
  // 1. CYBER CORE (Interactive Holographic Object)
  // ==========================================
  const coreGroup = new THREE.Group();
  scene.add(coreGroup);

  // Responsive Core Positioning: shift right on desktop to balance hero text
  function updateCorePosition() {
    if (window.innerWidth > 992) {
      coreGroup.position.set(4.2, 0.2, 0);
      coreGroup.scale.set(1, 1, 1);
    } else if (window.innerWidth > 600) {
      coreGroup.position.set(3, -0.5, -2);
      coreGroup.scale.set(0.85, 0.85, 0.85);
    } else {
      coreGroup.position.set(0, 1.2, -4);
      coreGroup.scale.set(0.7, 0.7, 0.7);
    }
  }
  updateCorePosition();

  // 1A. Inner Wireframe Icosahedron
  const innerGeo = new THREE.IcosahedronGeometry(2.0, 1);
  const innerMat = new THREE.MeshBasicMaterial({
    color: COLOR_GREEN,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const innerIcosa = new THREE.Mesh(innerGeo, innerMat);
  coreGroup.add(innerIcosa);

  // 1B. Outer Wireframe Polyhedron
  const outerGeo = new THREE.DodecahedronGeometry(2.8, 0);
  const outerMat = new THREE.MeshBasicMaterial({
    color: COLOR_GREEN_DIM,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const outerPoly = new THREE.Mesh(outerGeo, outerMat);
  coreGroup.add(outerPoly);

  // 1C. Glowing Energy Center (Solid Core)
  const energyGeo = new THREE.SphereGeometry(0.65, 16, 16);
  const energyMat = new THREE.MeshBasicMaterial({
    color: COLOR_GREEN_GLOW,
    wireframe: false,
    transparent: true,
    opacity: 0.25
  });
  const energyCore = new THREE.Mesh(energyGeo, energyMat);
  coreGroup.add(energyCore);

  // 1D. Orbital Gimbal Rings
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: COLOR_GREEN,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x88ffcc,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.03, 8, 80), ringMat1);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.0, 0.025, 8, 80), ringMat2);
  ring1.rotation.x = Math.PI / 3;
  ring2.rotation.y = Math.PI / 4;
  coreGroup.add(ring1);
  coreGroup.add(ring2);

  // 1E. Orbiting Satellite Nodes (reduced)
  const satelliteCount = 3;
  const satellites = [];
  const satGeo = new THREE.OctahedronGeometry(0.14);
  const satMat = new THREE.MeshBasicMaterial({ color: COLOR_GREEN_GLOW, transparent: true, opacity: 0.5 });

  for (let i = 0; i < satelliteCount; i++) {
    const sat = new THREE.Mesh(satGeo, satMat);
    coreGroup.add(sat);
    satellites.push({
      mesh: sat,
      orbitRadius: 3.6 + (i % 2) * 0.5,
      angle: (i / satelliteCount) * Math.PI * 2,
      speed: 0.015 * (i % 2 === 0 ? 1 : -1.2),
      tilt: (i * Math.PI) / 3
    });
  }

  // ==========================================
  // 2. UNDULATING CYBER GRID PLANE
  // ==========================================
  const gridWidth = 70;
  const gridDepth = 70;
  const gridSegments = 36;
  const gridGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, gridSegments, gridSegments);
  gridGeo.rotateX(-Math.PI / 2);

  const gridMat = new THREE.MeshBasicMaterial({
    color: COLOR_GREEN_DIM,
    wireframe: true,
    transparent: true,
    opacity: 0.06
  });

  const cyberGrid = new THREE.Mesh(gridGeo, gridMat);
  cyberGrid.position.set(0, -6.5, 0);
  scene.add(cyberGrid);

  // Store original vertex Y values for wave animation
  const posAttr = gridGeo.attributes.position;
  const originalY = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    originalY[i] = posAttr.getY(i);
  }

  // ==========================================
  // 3. FLOATING CYBER DUST & PARTICLES
  // ==========================================
  const particleCount = 400;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    particlePos[i * 3] = (Math.random() - 0.5) * 60;
    particlePos[i * 3 + 1] = (Math.random() - 0.5) * 40;
    particlePos[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

  function createParticleTexture() {
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(0, 217, 120, 1)');
    grad.addColorStop(0.3, 'rgba(0, 217, 120, 0.5)');
    grad.addColorStop(1, 'rgba(0, 217, 120, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.Texture(pCanvas);
    texture.needsUpdate = true;
    return texture;
  }

  const particleMat = new THREE.PointsMaterial({
    size: 0.22,
    map: createParticleTexture(),
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // ==========================================
  // 4. MOUSE & TOUCH INTERACTION
  // ==========================================
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;
  let dragVelocityX = 0;
  let dragVelocityY = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

    if (isDragging) {
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      dragVelocityX = deltaX * 0.005;
      dragVelocityY = deltaY * 0.005;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    }
  });

  window.addEventListener('mousedown', (e) => {
    if (e.target.closest('a, button, input, textarea, .nav-logo, .hamburger')) return;
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
  }, { passive: true });

  // ==========================================
  // 5. SCROLL PARALLAX & CAMERA DYNAMICS
  // ==========================================
  let scrollProgress = 0;
  function updateScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // ==========================================
  // 6. ANIMATION LOOP
  // ==========================================
  let clock = new THREE.Clock();
  let isPaused = false;

  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
    if (!isPaused) clock.getDelta();
  });

  function animate() {
    requestAnimationFrame(animate);
    if (isPaused) return;

    const elapsedTime = clock.getElapsedTime();

    // Mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Apply drag inertia
    coreGroup.rotation.y += dragVelocityX;
    coreGroup.rotation.x += dragVelocityY;
    dragVelocityX *= 0.92;
    dragVelocityY *= 0.92;

    // Core self rotations (slowed down)
    innerIcosa.rotation.x += 0.003;
    innerIcosa.rotation.y += 0.004;

    outerPoly.rotation.x -= 0.002;
    outerPoly.rotation.y -= 0.003;

    ring1.rotation.z += 0.003;
    ring2.rotation.x += 0.003;

    // Core pulsing energy (subtle)
    const pulse = 0.75 + Math.sin(elapsedTime * 2) * 0.05;
    energyCore.scale.set(pulse, pulse, pulse);

    // Satellites (slowed)
    satellites.forEach((sat) => {
      sat.angle += sat.speed * 0.6;
      sat.mesh.position.x = Math.cos(sat.angle) * sat.orbitRadius;
      sat.mesh.position.y = Math.sin(sat.angle) * sat.orbitRadius * Math.sin(sat.tilt);
      sat.mesh.position.z = Math.sin(sat.angle) * sat.orbitRadius * Math.cos(sat.tilt);
      sat.mesh.rotation.x += 0.02;
      sat.mesh.rotation.y += 0.02;
    });

    // Gentle mouse orientation
    coreGroup.rotation.y += (mouse.x * 0.3 - (coreGroup.rotation.y % (Math.PI * 2))) * 0.015;
    coreGroup.rotation.x += (mouse.y * 0.25 - (coreGroup.rotation.x % (Math.PI * 2))) * 0.015;

    // Undulating Cyber Grid (reduced amplitude)
    if (!prefersReducedMotion) {
      const p = gridGeo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const u = p.getX(i);
        const v = p.getZ(i);
        const wave =
          Math.sin(u * 0.25 + elapsedTime * 1.0) * 0.2 +
          Math.cos(v * 0.25 + elapsedTime * 0.8) * 0.15;
        p.setY(i, originalY[i] + wave);
      }
      gridGeo.computeVertexNormals();
      gridGeo.attributes.position.needsUpdate = true;
    }

    // Particle field rotation & floating
    const partPos = particleGeo.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      let currentY = partPos.getY(i);
      currentY += Math.sin(elapsedTime * 0.5 + i) * 0.012;
      if (currentY > 25) currentY = -25;
      partPos.setY(i, currentY);
    }
    particleGeo.attributes.position.needsUpdate = true;

    particleSystem.rotation.y = elapsedTime * 0.02 + mouse.x * 0.1;
    particleSystem.rotation.x = mouse.y * 0.05;

    // Camera travel along Z & Y with scroll
    const targetCamZ = 16 - scrollProgress * 7;
    const targetCamY = -scrollProgress * 4;
    const targetCamRotX = -scrollProgress * 0.15;

    camera.position.z += (targetCamZ - camera.position.z) * 0.05;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;
    camera.rotation.x += (targetCamRotX - camera.rotation.x) * 0.05;
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.03;

    // Drifting Cyber Core depth with scroll
    const coreTargetZ = -scrollProgress * 10;
    coreGroup.position.z += (coreTargetZ - coreGroup.position.z) * 0.05;

    // Fade out 3D scene as user scrolls past hero
    const fadeStart = 0.05;
    const fadeEnd = 0.25;
    const fadeAlpha = 1 - Math.min(1, Math.max(0, (scrollProgress - fadeStart) / (fadeEnd - fadeStart)));
    coreGroup.visible = fadeAlpha > 0.01;
    if (coreGroup.visible) {
      innerMat.opacity = 0.4 * fadeAlpha;
      outerMat.opacity = 0.15 * fadeAlpha;
      energyMat.opacity = 0.25 * fadeAlpha;
      ringMat1.opacity = 0.25 * fadeAlpha;
      ringMat2.opacity = 0.15 * fadeAlpha;
    }
    gridMat.opacity = 0.06 * fadeAlpha;
    particleMat.opacity = 0.2 * fadeAlpha;

    renderer.render(scene, camera);
  }

  animate();

  // Responsive resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    updateCorePosition();
  });
})();
