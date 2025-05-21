import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import chaptersPT from "@/locales/pt/chapters.json";
import chaptersEN from "@/locales/en/chapters.json";
import chaptersES from "@/locales/es/chapters.json";

const locales = {
  pt: chaptersPT,
  en: chaptersEN,
  es: chaptersES
};

const languageNames = {
  pt: "Português",
  en: "English",
  es: "Español"
};

export default function StoryApp() {
  const [language, setLanguage] = useState("pt");
  const [selected, setSelected] = useState("0");
  const chapters = Object.entries(locales[language]);

  useEffect(() => {
    setSelected("0");
  }, [language]);

  return (
    <div className="min-h-screen bg-black text-white p-6 font-serif">
      <h1 className="text-4xl mb-2 text-center font-bold text-yellow-200">Entre o Rio e o Vento</h1>
      <div className="text-center mb-6">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="mx-auto w-48 text-yellow-100 bg-gray-800 border-yellow-400">
            {languageNames[language]}
          </SelectTrigger>
          <SelectContent>
            {Object.entries(languageNames).map(([code, label]) => (
              <SelectItem key={code} value={code}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs value={selected} onValueChange={setSelected} className="w-full max-w-5xl mx-auto">
        <TabsList className="flex flex-wrap gap-2 justify-center mb-6 bg-gray-800 p-4 rounded-xl">
          {chapters.map(([title], index) => (
            <TabsTrigger key={index} value={String(index)} className="text-yellow-200">
              {title.split(" — ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>
        {chapters.map(([title, text], index) => (
          <TabsContent key={index} value={String(index)}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900 border border-yellow-700 rounded-2xl shadow-lg">
                <CardContent className="p-6 text-lg leading-relaxed text-gray-100">
                  <h2 className="text-2xl font-bold mb-4 text-yellow-300">{title}</h2>
                  <img
                    src={`/images/chapter${index + 1}.jpg`}
                    alt={`Imagem do ${title}`}
                    className="w-full h-auto mb-4 rounded-xl shadow"
                  />
                  <p>{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <audio controls autoPlay loop className="mt-8 mx-auto block">
        <source src="/audio/ambient-forest.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
