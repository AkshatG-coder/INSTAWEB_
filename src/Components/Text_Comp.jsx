import React, { useState,useEffect} from "react";

export function Text({
  id,
  content = "This is a sample text paragraph. Click to edit me!",
  textSize = "text-base",
  fontWeight = "font-normal",
  textColor = "text-gray-800",
  alignment = "text-left",
  editable = false,
  onSave
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [textProps, setTextProps] = useState({
    content,
    textSize,
    fontWeight,
    textColor,
    alignment
  });
  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setTextProps(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTextClick = () => {
    if (editable) {  // Only allow editing if editable is true
      setIsEditing(!isEditing);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(textProps);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <p 
        id={id}
        onClick={handleTextClick}
        className={`${textProps.textSize} ${textProps.fontWeight} ${textProps.textColor} ${textProps.alignment} ${
          editable ? 'cursor-pointer border-2 border-transparent hover:border-gray-300' : ''
        }`}
      >
        {textProps.content}
      </p>
      
      {isEditing && (
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <h4 className="font-medium text-lg">Edit Text Properties</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                value={textProps.content}
                onChange={handlePropChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Text Size</label>
              <select
                name="textSize"
                value={textProps.textSize}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-xs">Extra Small</option>
                <option value="text-sm">Small</option>
                <option value="text-base">Base</option>
                <option value="text-lg">Large</option>
                <option value="text-xl">Extra Large</option>
                <option value="text-2xl">2X Large</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Font Weight</label>
              <select
                name="fontWeight"
                value={textProps.fontWeight}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="font-light">Light</option>
                <option value="font-normal">Normal</option>
                <option value="font-medium">Medium</option>
                <option value="font-semibold">Semi Bold</option>
                <option value="font-bold">Bold</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Text Color</label>
              <select
                name="textColor"
                value={textProps.textColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-gray-800">Dark Gray</option>
                <option value="text-black">Black</option>
                <option value="text-gray-600">Gray</option>
                <option value="text-blue-600">Blue</option>
                <option value="text-red-600">Red</option>
                <option value="text-green-600">Green</option>
                <option value="text-purple-600">Purple</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Alignment</label>
              <select
                name="alignment"
                value={textProps.alignment}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-left">Left</option>
                <option value="text-center">Center</option>
                <option value="text-right">Right</option>
                <option value="text-justify">Justify</option>
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

// Example parent component usage
export default Text;