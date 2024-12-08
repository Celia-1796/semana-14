import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Section from './components/section';

function App() {
  const [sections, setSections] = useState([])

  useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data)=> setSections (data))
    .catch((error) => console.error("error al cargar:",error));

  },[]);

  return (
  <div className="min-h-screen bg-gray-100 flex-col items-center py-10">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">
mi página con tailwind
    </h1>
    <div className="w-full max-w-4x1 px-4">
      {sections.map((section, index) =>(
        <Section
        key ={index}
        tittle={section.title}
        description={section.description}
        items={section.items}
/>
      ))}

    </div>
  </div>
  );
}

export default App
