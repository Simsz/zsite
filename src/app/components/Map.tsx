import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface PulsingDot {
  width: number;
  height: number;
  data: Uint8Array;
  context: CanvasRenderingContext2D | null;
  onAdd: () => void;
  render: () => boolean;
}

const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted || !mapContainer.current || mapInstance.current) {
      return;
    }

    const size = 120;
    const pulsingDot: PulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),
      context: null,

      onAdd: function() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d', { willReadFrequently: true });
      },

      render: function() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.2;
        const outerRadius = (size / 2) * 0.5 * t + radius;
        const context = this.context;

        if (!context) return false;

        context.clearRect(0, 0, this.width, this.height);

        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = `rgba(255, 204, 0, ${1 - t})`;
        context.fill();

        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 204, 0, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        const imageData = context.getImageData(0, 0, this.width, this.height);
        this.data = new Uint8Array(imageData.data.buffer);

        mapInstance.current?.triggerRepaint();

        return true;
      }
    };

    try {
      // Initialize map with vector style URL
      const map = new maplibregl.Map({
        container: mapContainer.current,
        // Use your custom style URL from MapTiler Cloud
        style: `https://api.maptiler.com/maps/68c36fb5-b518-4988-a283-5a8d97e88ba0/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
        center: [-77.6109, 43.1566],
        zoom: 3,
        attributionControl: false
      });

      mapInstance.current = map;

      map.on('load', () => {
        if (!mapInstance.current) return;
        
        map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

        // Add location point source
        map.addSource('location-point', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.6109, 43.1566]
                },
                properties: {}
              }
            ]
          }
        });

        // Add Rochester label source
        map.addSource('rochester-label', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-77.6109, 43.165]
                },
                properties: {
                  title: 'Rochester, NY'
                }
              }
            ]
          }
        });

        // Add the pulsing dot layer
        map.addLayer({
          id: 'location',
          type: 'symbol',
          source: 'location-point',
          layout: {
            'icon-image': 'pulsing-dot',
            'icon-allow-overlap': true,
            'icon-size': 0.9
          }
        });

        // Add Rochester label layer
        map.addLayer({
          id: 'rochester-label',
          type: 'symbol',
          source: 'rochester-label',
          layout: {
            'text-field': ['get', 'title'],
            'text-size': 20,
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-anchor': 'bottom',
            'text-offset': [0, -1],
            'text-allow-overlap': true
          },
          paint: {
            'text-color': '#FFCC00',
            'text-halo-color': '#000000',
            'text-halo-width': 2,
            'text-halo-blur': 1
          }
        });

        // Faster zoom animation
        map.flyTo({
          center: [-77.6109, 43.1566],
          zoom: 9,
          speed: 1.2,
          curve: 1.5,
          essential: true,
          duration: 2000
        });
      });

      map.on('error', (e) => {
        console.error('Map error:', e);
      });

    } catch (error) {
      console.error('Error creating map:', error);
    }

    return () => {
      if (mounted && mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [mounted]);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
      <div 
        ref={mapContainer} 
        className="absolute inset-0"
        style={{ 
          width: '100%',
          height: '100%',
          minHeight: '400px'
        }}
      />
      <div className="absolute inset-0 pointer-events-none border-2 border-[#FFCC00] rounded-lg" />
    </div>
  );
};

export default Map;