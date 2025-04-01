import React, { useState } from "react";

export function Box({
  id,
  title = "Box Title", 
  content = "This is the content of the box.",
  bgColor = "bg-gray-300", 
  textColor = "text-black", 
  editable = false,
  shadow = "shadow-lg", 
  padding = "p-4", 
  borderRadius = "rounded-lg", 
  onSave
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [boxProps, setBoxProps] = useState({
    title,
    content,
    bgColor,
    textColor,
    shadow,
    padding,
    borderRadius
  });

  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setBoxProps((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBoxClick = () => {
    if (editable) {
      setIsEditing(!isEditing);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(boxProps);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div 
        id={id}
        onClick={handleBoxClick}
        className={`${boxProps.bgColor} ${boxProps.textColor} ${boxProps.padding} ${boxProps.borderRadius} ${boxProps.shadow} transition-all cursor-pointer`}
      >
        <h3 className="text-xl font-bold">{boxProps.title}</h3>
        <p>{boxProps.content}</p>
      </div>

      {isEditing && (
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <h4 className="font-medium text-lg">Edit Box Properties</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={boxProps.title}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                value={boxProps.content}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Background Color</label>
              <select
                name="bgColor"
                value={boxProps.bgColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="bg-gray-300">Gray</option>
                <option value="bg-blue-500">Blue</option>
                <option value="bg-green-500">Green</option>
                <option value="bg-yellow-500">Yellow</option>
                <option value="bg-red-500">Red</option>
                <option value="bg-purple-500">Purple</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Text Color</label>
              <select
                name="textColor"
                value={boxProps.textColor}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="text-black">Black</option>
                <option value="text-white">White</option>
                <option value="text-gray-800">Dark Gray</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Padding</label>
              <select
                name="padding"
                value={boxProps.padding}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="p-4">Medium</option>
                <option value="p-6">Large</option>
                <option value="p-2">Small</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Border Radius</label>
              <select
                name="borderRadius"
                value={boxProps.borderRadius}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="rounded-sm">Small</option>
                <option value="rounded-md">Medium</option>
                <option value="rounded-lg">Large</option>
                <option value="rounded-full">Full</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Shadow</label>
              <select
                name="shadow"
                value={boxProps.shadow}
                onChange={handlePropChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="shadow-sm">Small</option>
                <option value="shadow-md">Medium</option>
                <option value="shadow-lg">Large</option>
                <option value="shadow-none">None</option>
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
      <Box 
        id="myBox"
        title="Welcome Box"
        content="This is some editable content inside the box."
        bgColor="bg-green-500" 
        textColor="text-white" 
        editable={true}       
        shadow="shadow-lg" 
        padding="p-6"
        borderRadius="rounded-lg" 
      />
    </div>
  );
}
