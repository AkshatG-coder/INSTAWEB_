import React, { useState } from "react";

export function Button({
  id,
  text = "Click Me", 
  width = "w-24",
  height = "h-10",
  bgColor = "bg-red-500",
  textColor = "text-white",
  editable = false,
  onClick,
  onSave
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonProps, setButtonProps] = useState({
    text,
    width,
    height,
    bgColor,
    textColor
  });

  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setButtonProps(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleButtonClick = () => {
     if(editable){
      setIsEditing(!isEditing);
     }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(buttonProps);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <button 
        id={id}
        onClick={handleButtonClick}
        className={`${buttonProps.width} ${buttonProps.height} ${buttonProps.bgColor} ${buttonProps.textColor} rounded-md font-medium transition-colors hover:opacity-90 flex items-center justify-center`}
      >
        {buttonProps.text}
      </button>
      
      {isEditing && (
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <h4 className="font-medium text-lg">Edit Button Properties</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Text</label>
              <input
                type="text"
                name="text"
                value={buttonProps.text}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Width</label>
              <select
                name="width"
                value={buttonProps.width}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="w-auto">Auto</option>
                <option value="w-16">Small (4rem)</option>
                <option value="w-24">Medium (6rem)</option>
                <option value="w-32">Large (8rem)</option>
                <option value="w-full">Full width</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Height</label>
              <select
                name="height"
                value={buttonProps.height}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="h-8">Small (2rem)</option>
                <option value="h-10">Medium (2.5rem)</option>
                <option value="h-12">Large (3rem)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Background Color</label>
              <select
                name="bgColor"
                value={buttonProps.bgColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="bg-blue-500">Blue</option>
                <option value="bg-red-500">Red</option>
                <option value="bg-green-500">Green</option>
                <option value="bg-yellow-500">Yellow</option>
                <option value="bg-purple-500">Purple</option>
                <option value="bg-gray-500">Gray</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Text Color</label>
              <select
                name="textColor"
                value={buttonProps.textColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-white">White</option>
                <option value="text-black">Black</option>
                <option value="text-gray-200">Light Gray</option>
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

export default function App() {
  return (
    <div className="App">
      <Button 
        id="myButton"
        text="Click Me"
        width="w-24"
        height="h-10"
        bgColor="bg-red-500"  
        textColor="text-white"
        editable={true}       
      />
    </div>
  );
}
