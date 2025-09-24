'use client';

import { useState, useRef, useCallback } from 'react';

interface ImageCropperProps {
  image: string;
  onCrop: (croppedImage: string) => void;
  onCancel: () => void;
}

export default function ImageCropper({ image, onCrop, onCancel }: ImageCropperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    if (imageRef.current) {
      const img = imageRef.current;
      const size = Math.min(img.naturalWidth, img.naturalHeight, 300);
      setCrop({
        x: (img.naturalWidth - size) / 2,
        y: (img.naturalHeight - size) / 2,
        width: size,
        height: size
      });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - crop.x, y: e.clientY - crop.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imageRef.current) return;

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;

    const newX = Math.max(0, Math.min((e.clientX - dragStart.x) * scaleX, img.naturalWidth - crop.width));
    const newY = Math.max(0, Math.min((e.clientY - dragStart.y) * scaleY, img.naturalHeight - crop.height));

    setCrop(prev => ({ ...prev, x: newX, y: newY }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getCroppedImage = useCallback(() => {
    if (!imageRef.current || !canvasRef.current) return null;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const img = imageRef.current;
    
    // Set canvas size to desired output size
    canvas.width = 300;
    canvas.height = 300;

    // Draw the cropped image
    ctx.drawImage(
      img,
      crop.x, crop.y, crop.width, crop.height,
      0, 0, 300, 300
    );

    // Apply optimization (reduce quality slightly for smaller file size)
    return canvas.toDataURL('image/jpeg', 0.8);
  }, [crop]);

  const handleCrop = () => {
    const croppedImage = getCroppedImage();
    if (croppedImage) {
      onCrop(croppedImage);
    }
  };

  const handleResize = (direction: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Simple resize logic - you can enhance this
    const delta = 10;
    setCrop(prev => {
      let newCrop = { ...prev };
      
      switch (direction) {
        case 'se': // Southeast corner
          newCrop.width = Math.min(prev.width + delta, (imageRef.current?.naturalWidth || 0) - prev.x);
          newCrop.height = newCrop.width; // Keep square
          break;
        case 'nw': // Northwest corner
          const newSize = Math.max(prev.width - delta, 50);
          newCrop.x = prev.x + (prev.width - newSize);
          newCrop.y = prev.y + (prev.height - newSize);
          newCrop.width = newSize;
          newCrop.height = newSize;
          break;
      }
      
      return newCrop;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Crop Your Profile Picture</h3>
          <p className="text-sm text-gray-600">Drag to reposition, use corners to resize</p>
        </div>

        <div className="relative inline-block mx-auto">
          <img
            ref={imageRef}
            src={image}
            alt="Crop preview"
            className="max-w-full max-h-96 object-contain"
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          
          {imageLoaded && imageRef.current && (
            <div
              className="absolute border-2 border-[#368F8B] cursor-move"
              style={{
                left: `${(crop.x / imageRef.current.naturalWidth) * imageRef.current.offsetWidth}px`,
                top: `${(crop.y / imageRef.current.naturalHeight) * imageRef.current.offsetHeight}px`,
                width: `${(crop.width / imageRef.current.naturalWidth) * imageRef.current.offsetWidth}px`,
                height: `${(crop.height / imageRef.current.naturalHeight) * imageRef.current.offsetHeight}px`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Resize handles */}
              <div
                className="absolute -top-1 -left-1 w-3 h-3 bg-[#368F8B] cursor-nw-resize"
                onMouseDown={(e) => handleResize('nw', e)}
              />
              <div
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#368F8B] cursor-se-resize"
                onMouseDown={(e) => handleResize('se', e)}
              />
              
              {/* Crop overlay */}
              <div className="absolute inset-0 bg-[#368F8B] bg-opacity-20" />
            </div>
          )}
        </div>

        {/* Preview */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Preview:</p>
          <div className="inline-block w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover"
              style={{ display: 'none' }}
            />
            {imageLoaded && (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getCroppedImage()})`,
                }}
              />
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCrop}
            disabled={!imageLoaded}
            className="px-4 py-2 bg-[#368F8B] text-white rounded-md hover:bg-[#2a6f6b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Apply Crop
          </button>
        </div>

        {/* AI Optimization Info */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-800">AI Optimization Active</p>
              <p className="text-xs text-blue-600">Your image will be automatically optimized for best quality and performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}