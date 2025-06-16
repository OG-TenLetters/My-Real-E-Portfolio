import React, { useRef, useEffect, useCallback, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const BACKGROUND_COLOR = "#202122";
const TRIANGLE_COLOR = "#2c2a3a";
const HOVER_COLOR = "#403e4e";
const LINE_WIDTH = 3;
const GAP_HORIZONTAL = 12;
const GAP_VERTICAL = 6;
const FADE_DURATION = 150;

const TriangleBgAnimation = () => {
  const [triangleAmount, setTriangleAmount] = useState(0);
  const dynamicWidth = useWindowWidth();

  let triangleCount = 0;
  const widthFix = () => {
    if (dynamicWidth >= 1920) {
      triangleCount = 16;
    } else if (dynamicWidth >= 1800) {
      triangleCount = 15;
    } else if (dynamicWidth >= 1700) {
      triangleCount = 14;
    } else if (dynamicWidth >= 1600) {
      triangleCount = 13;
    } else if (dynamicWidth >= 1500) {
      triangleCount = 12;
    } else if (dynamicWidth >= 1400) {
      triangleCount = 11;
    } else if (dynamicWidth >= 1300) {
      triangleCount = 10;
    } else if (dynamicWidth >= 1200) {
      triangleCount = 9;
    } else if (dynamicWidth >= 1100) {
      triangleCount = 8;
    } else if (dynamicWidth >= 1000) {
      triangleCount = 7;
    } else if (dynamicWidth >= 900) {
      triangleCount = 6;
    } else if (dynamicWidth >= 800) {
      triangleCount = 5;
    } else {
      triangleCount = 4;
    }
    return triangleCount;
  };

  const trianglesPerRowReference = widthFix();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    siteHeight: document.documentElement.scrollHeight,
  });

  const baseCanvasRef = useRef(null);
  const interactiveCanvasRef = useRef(null);

  const triangleVerticesCache = useRef(new Map());
  const activeTriangles = useRef(new Map());
  const currentHoveredTriangleKey = useRef(null);

  const layout = useRef({
    side: 0,
    h: 0,
    effectiveHorizontalUnit: 0,
    effectiveVerticalUnitForStack: 0,
    numHorizontalUnits: 0,
    numVerticalUnits: 0,
    startX: 0,
    startY: 0,
    animationFrameId: null,
  });

  const sign = useCallback((p1, p2, p3) => {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }, []);

  const isPointInTriangle = useCallback(
    (p, a, b, c) => {
      const s1 = sign(p, a, b);
      const s2 = sign(p, b, c);
      const s3 = sign(p, c, a);

      const hasNegative = s1 < 0 || s2 < 0 || s3 < 0;
      const hasPositive = s1 > 0 || s2 > 0 || s3 > 0;

      return !(hasNegative && hasPositive);
    },
    [sign]
  );

  const getTriangleVertices = useCallback((cx, cy, side, orientation) => {
    const key = `${cx}_${cy}_${side}_${orientation}`;
    if (triangleVerticesCache.current.has(key)) {
      return triangleVerticesCache.current.get(key);
    }

    let p1, p2, p3;
    const hVal = layout.current.h;

    if (orientation === "up") {
      p1 = { x: cx, y: cy - hVal / 2 };
      p2 = { x: cx - side / 2, y: cy + hVal / 2 };
      p3 = { x: cx + side / 2, y: cy + hVal / 2 };
    } else {
      // 'down'
      p1 = { x: cx, y: cy + hVal / 2 };
      p2 = { x: cx - side / 2, y: cy - hVal / 2 };
      p3 = { x: cx + side / 2, y: cy - hVal / 2 };
    }
    const vertices = { p1, p2, p3 };
    triangleVerticesCache.current.set(key, vertices);
    return vertices;
  }, []);

  const drawEquilateralTriangle = useCallback(
    (ctx, cx, cy, side, orientation, fillColor = null, alpha = 1) => {
      const { p1, p2, p3 } = getTriangleVertices(cx, cy, side, orientation);

      if (fillColor) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      ctx.beginPath();
      ctx.lineWidth = LINE_WIDTH;
      ctx.strokeStyle = TRIANGLE_COLOR;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
      ctx.closePath();
      ctx.stroke();

      const pointRadius = LINE_WIDTH / 2;
      ctx.fillStyle = TRIANGLE_COLOR;

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, pointRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p2.x, p2.y, pointRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p3.x, p3.y, pointRadius, 0, Math.PI * 2);
      ctx.fill();
    },
    [getTriangleVertices]
  );

  const drawBasePattern = useCallback(
    (ctx, canvasWidth, canvasHeight) => {
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      let side = canvasWidth / trianglesPerRowReference - GAP_HORIZONTAL;
      if (side < 5) side = 15;
      const h = (side * Math.sqrt(3)) / 2;
      const effectiveHorizontalUnit = side + GAP_HORIZONTAL;
      const effectiveVerticalUnitForStack = h + GAP_VERTICAL;

      const numHorizontalUnits =
        Math.ceil(canvasWidth / (side + GAP_HORIZONTAL / 2)) + 3;
      const numVerticalUnits =
        Math.ceil(canvasHeight / (h / 2 + GAP_VERTICAL / 2)) + 3;

      const totalPatternWidth = numHorizontalUnits * effectiveHorizontalUnit;
      const totalPatternHeight =
        numVerticalUnits * effectiveVerticalUnitForStack;

      const startX = (canvasWidth - totalPatternWidth) / 2;
      const startY = (canvasHeight - totalPatternHeight) / 2;

      layout.current = {
        ...layout.current,
        side,
        h,
        effectiveHorizontalUnit,
        effectiveVerticalUnitForStack,
        numHorizontalUnits,
        numVerticalUnits,
        startX,
        startY,
      };
      triangleVerticesCache.current.clear();

      for (let row = -2; row < numVerticalUnits; row++) {
        let rowOffsetX = 0;
        if (row % 2 !== 0) {
          rowOffsetX = -(side / 2 + GAP_HORIZONTAL / 2);
        }

        for (let col = -2; col < numHorizontalUnits; col++) {
          const upTriBaseX =
            startX + rowOffsetX + col * effectiveHorizontalUnit;
          const upTriCenterX = upTriBaseX + side / 2;
          const upTriBaseY = startY + row * (h + GAP_VERTICAL);
          const upTriCenterY = upTriBaseY + h / 2;
          drawEquilateralTriangle(ctx, upTriCenterX, upTriCenterY, side, "up");

          const downTriCenterX = upTriCenterX;
          const downTriCenterY = upTriCenterY + h + GAP_VERTICAL;
          drawEquilateralTriangle(
            ctx,
            downTriCenterX,
            downTriCenterY,
            side,
            "down"
          );
        }
      }
    },
    [drawEquilateralTriangle]
  );

  const animate = useCallback(() => {
    const interactiveCtx = interactiveCanvasRef.current.getContext("2d");
    const currentTime = performance.now();

    interactiveCtx.clearRect(0, 0, windowSize.width, windowSize.siteHeight);

    const keysToRemove = [];
    activeTriangles.current.forEach((entry, key) => {
      if (entry.targetAlpha === 0) {
        const elapsed = currentTime - entry.fadeStartTime;
        entry.currentAlpha = 1 - Math.min(1, elapsed / FADE_DURATION);
      } else {
        entry.currentAlpha = 1;
      }

      if (entry.currentAlpha > 0) {
        drawEquilateralTriangle(
          interactiveCtx,
          entry.triangleInfo.cx,
          entry.triangleInfo.cy,
          entry.triangleInfo.side,
          entry.triangleInfo.orientation,
          HOVER_COLOR,
          entry.currentAlpha
        );
      } else {
        keysToRemove.push(key);
      }
    });

    keysToRemove.forEach((key) => activeTriangles.current.delete(key));

    layout.current.animationFrameId = requestAnimationFrame(animate);
  }, [drawEquilateralTriangle, windowSize.width, windowSize.siteHeight]);

  const handleMouseMove = useCallback(
    (event) => {
      const interactiveCanvas = interactiveCanvasRef.current;
      if (!interactiveCanvas) return;

      const rect = interactiveCanvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let newHoveredKey = null;

      const {
        side,
        h,
        effectiveHorizontalUnit,
        effectiveVerticalUnitForStack,
        numHorizontalUnits,
        numVerticalUnits,
        startX,
        startY,
      } = layout.current;

      const checkRadiusRows = 2;
      const checkRadiusCols = 2;

      const approxRow = Math.floor((mouseY - startY) / (h + GAP_VERTICAL));
      const approxCol = Math.floor(
        (mouseX -
          startX -
          (approxRow % 2 !== 0 ? -(side / 2 + GAP_HORIZONTAL / 2) : 0)) /
          (side + GAP_HORIZONTAL)
      );

      for (
        let row = Math.max(-2, approxRow - checkRadiusRows);
        row < Math.min(numVerticalUnits, approxRow + checkRadiusCols);
        row++
      ) {
        let rowOffsetX = 0;
        if (row % 2 !== 0) {
          rowOffsetX = -(side / 2 + GAP_HORIZONTAL / 2);
        }

        for (
          let col = Math.max(-2, approxCol - checkRadiusCols);
          col < Math.min(numHorizontalUnits, approxCol + checkRadiusCols);
          col++
        ) {
          const upTriBaseX =
            startX + rowOffsetX + col * effectiveHorizontalUnit;
          const upTriCenterX = upTriBaseX + side / 2;
          const upTriBaseY = startY + row * (h + GAP_VERTICAL);
          const upTriCenterY = upTriBaseY + h / 2;

          const upVertices = getTriangleVertices(
            upTriCenterX,
            upTriCenterY,
            side,
            "up"
          );
          if (
            isPointInTriangle(
              { x: mouseX, y: mouseY },
              upVertices.p1,
              upVertices.p2,
              upVertices.p3
            )
          ) {
            newHoveredKey = `${row}_${col}_up`;
            activeTriangles.current.set(newHoveredKey, {
              triangleInfo: {
                cx: upTriCenterX,
                cy: upTriCenterY,
                side: side,
                orientation: "up",
                vertices: upVertices,
              },
              currentAlpha: 1,
              targetAlpha: 1,
              fadeStartTime: performance.now(),
            });
            break;
          }

          const downTriCenterX = upTriCenterX;
          const downTriCenterY = upTriCenterY + h + GAP_VERTICAL;
          const downVertices = getTriangleVertices(
            downTriCenterX,
            downTriCenterY,
            side,
            "down"
          );
          if (
            isPointInTriangle(
              { x: mouseX, y: mouseY },
              downVertices.p1,
              downVertices.p2,
              downVertices.p3
            )
          ) {
            newHoveredKey = `${row}_${col}_down`;
            activeTriangles.current.set(newHoveredKey, {
              triangleInfo: {
                cx: downTriCenterX,
                cy: downTriCenterY,
                side: side,
                orientation: "down",
                vertices: downVertices,
              },
              currentAlpha: 1,
              targetAlpha: 1,
              fadeStartTime: performance.now(),
            });
            break;
          }
        }
        if (newHoveredKey) break;
      }

      if (newHoveredKey !== currentHoveredTriangleKey.current) {
        if (
          currentHoveredTriangleKey.current &&
          activeTriangles.current.has(currentHoveredTriangleKey.current)
        ) {
          const prevEntry = activeTriangles.current.get(
            currentHoveredTriangleKey.current
          );
          prevEntry.targetAlpha = 0;
          prevEntry.fadeStartTime = performance.now();
        }
        currentHoveredTriangleKey.current = newHoveredKey;
      }
    },
    [isPointInTriangle, getTriangleVertices]
  );

  const handleMouseOut = useCallback(() => {
    if (
      currentHoveredTriangleKey.current &&
      activeTriangles.current.has(currentHoveredTriangleKey.current)
    ) {
      const prevEntry = activeTriangles.current.get(
        currentHoveredTriangleKey.current
      );
      prevEntry.targetAlpha = 0;
      prevEntry.fadeStartTime = performance.now();
    }
    currentHoveredTriangleKey.current = null;
  }, []);

  useEffect(() => {
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        siteHeight: document.documentElement.scrollHeight,
      });
    };

    window.addEventListener("resize", onResize);
    const observer = new MutationObserver(onResize);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [dynamicWidth]);
  useEffect(() => {
    const baseCanvas = baseCanvasRef.current;
    const interactiveCanvas = interactiveCanvasRef.current;
    if (!baseCanvas || !interactiveCanvas) return;

    const baseCtx = baseCanvas.getContext("2d");
    const interactiveCtx = interactiveCanvas.getContext("2d");

    drawBasePattern(baseCtx, windowSize.width, windowSize.siteHeight);

    if (layout.current.animationFrameId) {
      cancelAnimationFrame(layout.current.animationFrameId);
    }
    layout.current.animationFrameId = requestAnimationFrame(animate);

    interactiveCanvas.addEventListener("mousemove", handleMouseMove);
    interactiveCanvas.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(layout.current.animationFrameId);
      interactiveCanvas.removeEventListener("mousemove", handleMouseMove);
      interactiveCanvas.removeEventListener("mouseout", handleMouseOut);
      activeTriangles.current.clear();
      triangleVerticesCache.current.clear();
    };
  }, [windowSize, animate, drawBasePattern, handleMouseMove, handleMouseOut]);

  return (
    <div
      className="canvas-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: windowSize.siteHeight,
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
        backgroundColor: BACKGROUND_COLOR,
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Base canvas for the static wireframe pattern */}
      <canvas
        id="baseCanvas"
        ref={baseCanvasRef}
        width={windowSize.width}
        height={windowSize.siteHeight}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width:"100%" }}
      ></canvas>
      {/* Interactive canvas for hover effects, sits on top */}
      <canvas
        id="interactiveCanvas"
        ref={interactiveCanvasRef}
        width={windowSize.width}
        height={windowSize.siteHeight}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      ></canvas>
    </div>
  );
};

export default TriangleBgAnimation;
