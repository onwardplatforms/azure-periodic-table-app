import { useState, useEffect, useCallback } from 'react';

declare global {
  interface HTMLElement {
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }

  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
  }
}

export default function useFullscreen() {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsFullScreen(!!document.fullscreenElement);
  }, []);

  const toggleFullScreen = useCallback(() => {
    const element = document.body;

    if (!document.fullscreenElement && element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        setIsFullScreen(true);
      } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
        setIsFullScreen(true);
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
        setIsFullScreen(true);
      } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
        setIsFullScreen(false);
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
        setIsFullScreen(false);
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
        setIsFullScreen(false);
      }
    }
  }, []);

  return { isFullScreen, toggleFullScreen };
}
