import React, { useState,useEffect} from "react";

export function Image({
  id,
  src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Famazing-pictures&psig=AOvVaw3B0eSiVsOCQTqA0KTNGeqZ&ust=1743578910775000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD8tN6ntowDFQAAAAAdAAAAABAE",
  alt = "Sample Image",
  width = "w-64",
  height = "h-48",
  rounded = "rounded-none",
  objectFit = "object-cover",
  editable = false,
  onSave
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [imageProps, setImageProps] = useState({
    src,
    alt,
    width,
    height,
    rounded,
    objectFit
  });
  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setImageProps(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageClick = () => {
    if(editable){
      setIsEditing(!isEditing)
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(imageProps);
  };

  return (
    <div className="flex flex-col gap-4 mb-4" >
      <div 
        className={`${imageProps.width} ${imageProps.height} relative cursor-${editable ? 'pointer' : 'default'}`}
      >
        <img
          id={id}
          onClick={handleImageClick}
          src={imageProps.src}
          alt={imageProps.alt}
          className={`w-full h-full ${imageProps.rounded} ${imageProps.objectFit}`}
        />
      </div>
      
      {isEditing && (
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <h4 className="font-medium text-lg">Edit Image Properties</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="src"
                value={imageProps.src}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Alt Text</label>
              <input
                type="text"
                name="alt"
                value={imageProps.alt}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Width</label>
              <select
                name="width"
                value={imageProps.width}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="w-32">Small (8rem)</option>
                <option value="w-48">Medium (12rem)</option>
                <option value="w-64">Large (16rem)</option>
                <option value="w-96">Extra Large (24rem)</option>
                <option value="w-full">Full width</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Height</label>
              <select
                name="height"
                value={imageProps.height}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="h-32">Small (8rem)</option>
                <option value="h-48">Medium (12rem)</option>
                <option value="h-64">Large (16rem)</option>
                <option value="h-96">Extra Large (24rem)</option>
                <option value="h-full">Full height</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Rounded Corners</label>
              <select
                name="rounded"
                value={imageProps.rounded}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="rounded-none">None</option>
                <option value="rounded-sm">Small</option>
                <option value="rounded-md">Medium</option>
                <option value="rounded-lg">Large</option>
                <option value="rounded-full">Full (Circle)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Object Fit</label>
              <select
                name="objectFit"
                value={imageProps.objectFit}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="object-contain">Contain</option>
                <option value="object-cover">Cover</option>
                <option value="object-fill">Fill</option>
                <option value="object-none">None</option>
                <option value="object-scale-down">Scale Down</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Image;