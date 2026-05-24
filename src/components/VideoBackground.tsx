import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface VideoBackgroundProps {
  url: string;
  interactive?: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ url, interactive = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth mouse coordinates relative to center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rigid but smooth spring-inertia configuration for organic-feeling movement
  const springConfig = { damping: 30, stiffness: 90, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let hls: Hls;
    const isHls = url.includes('.m3u8');

    if (videoRef.current) {
      if (isHls && Hls.isSupported()) {
        hls = new Hls({
          enableWorker: false, // For sandbox stability
        });
        hls.loadSource(url);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play().catch(e => console.log("Auto-play blocked", e));
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl') && isHls) {
        // Native HLS support (Safari)
        videoRef.current.src = url;
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current?.play().catch(e => console.log("Auto-play blocked", e));
        });
      } else {
        // Fallback or Standard MP4
        videoRef.current.src = url;
        videoRef.current.load();
        videoRef.current.play().catch(e => console.log("Auto-play blocked", e));
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [url]);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized cursor position from center (-0.5 to 0.5)
      const nx = (e.clientX / innerWidth) - 0.5;
      const ny = (e.clientY / innerHeight) - 0.5;

      // Translate by up to 45px in either direction for noticeable but elegant parallax depth
      mouseX.set(nx * 45);
      mouseY.set(ny * 45);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive, mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{ 
          opacity: 'var(--video-opacity, 0.6)',
          x: interactive ? smoothX : 0,
          y: interactive ? smoothY : 0,
          scaleX: interactive ? -1.15 : -1, // Keep mirrored and scaled to avoid borders
          scaleY: interactive ? 1.15 : 1, // Scaled slightly
        }}
        className="h-full w-full object-cover origin-center"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
    </div>
  );
};

