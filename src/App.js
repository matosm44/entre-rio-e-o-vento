import { useState, useEffect } from "react";
import chaptersPT from "./locales/pt/chapters.json";
import chaptersEN from "./locales/en/chapters.json";
import chaptersES from "./locales/es/chapters.json";

const locales = { pt: chaptersPT, en: chaptersEN, es: chaptersES };
const languageNames = { pt: "Português", en: "English", es: "Español" };

export default function App() {
  const [language, setLanguage] = useState("pt");
  const [selected, setSelected] = useState(0);
  const chapters = Object.entries(locales[language]);

  useEffect(() => { setSelected(0); }, [language]);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">Entre o Rio e o Vento</h1>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-yellow-100 p-2 rounded">
          {Object.entries(languageNames).map(([code, label]) => (
            <option key={code} value={code}>{label}</option>
          ))}
        </select>
      </header>
      <nav className="flex flex-wrap justify-center gap-2 mb-8">
        {chapters.map(([title], index) => (
          <button key={index} onClick={() => setSelected(index)}
            className={`px-4 py-2 rounded-lg border ${
              selected === index ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-yellow-200'
            }`}>
            {title.split(" — ")[0]}
          </button>
        ))}
      </nav>
      <main className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-6 border border-yellow-700">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">{chapters[selected][0]}</h2>
        <img src={`/images/chapter${selected + 1}.jpg`} alt={chapters[selected][0]}
          className="rounded-xl shadow mb-4 w-full" />
        <p className="text-lg text-gray-200 leading-relaxed">{chapters[selected][1]}</p>
      </main>
      <footer className="mt-12 text-center">
        <audio controls autoPlay loop className="mx-auto mt-6">
          <source src="/audio/ambient-forest.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </footer>
    </div>
  );
}
