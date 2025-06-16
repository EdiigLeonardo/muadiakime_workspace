// components/MegaMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Dados do menu
  const menuData = {
    categories: [
      "Promoções",
      "Perfumes",
      "Maquilhagem",
      "Cabelo",
      "Rosto",
      "Corpo",
      "Dentes",
      "Ideia e criança",
      "Homem",
      "Dermocosméticos",
      "Sol",
      "Pequenos domésticos",
      "Premium",
      "Marcas",
      "Inspiração",
    ],
    submenus: {
      Promoções: [
        "Promoções e novidades",
        "Novidades",
        "Cosméticos com desconto",
        "Os mais vendidos",
      ],
      Rosto: [
        "Base de maquilhagem",
        "Corretivos",
        "Pós",
        "Pré-bases",
        "BB cremes, CC cremes",
        "Bronzeadores",
        "Blush",
        "Iluminadores",
        "Fixador de maquilhagem",
        "Paleta",
        "Cofres de cosméticos",
      ],
      Sobrancelhas: [
        "Tinta para sobrancelhas",
        "Lápis para sobrancelhas",
        "Gel para sobrancelhas",
        "Olho",
        "Máscara",
        "Sombra",
        "Delineadores",
        "Lápis de olhos",
        "Pestanas postiças",
      ],
      Acessórios: [
        "Pincéis e esponjas",
        "Limpeza de pincéis",
        "Necessaire de maquilhagem",
        "Utensílios para unhas",
        "Verrumas para unhas",
        "Caixa das unhas",
        "Mantovre e limas",
      ],
      "Dicas de beleza": [
        "Maquilhagem à prova de água",
        "Maquilhagem multifuncional",
        "Maquilhagem natural",
        "Maquilhagem vegana",
        "Maquilhagem de noite",
        "Marcas preferidas",
        "Estée Lauder",
        "Luxcome",
        "Essence",
        "Kiko Paris",
        "Maybelline",
        "Notino",
        "NOBEA",
      ],
    },
  };

  return (
    <div className="relative bg-white shadow-md">
      {/* Menu Principal - Horizontal */}
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-1 md:gap-4 py-3 text-sm font-medium text-black">
          {menuData.categories.map((category) => (
            <li
              key={category}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
              className="relative px-2 py-1 hover:bg-gray-100 rounded transition-colors"
            >
              <Link href="#" className="whitespace-nowrap">
                {category}
              </Link>

              {/* Dropdown */}
              {activeCategory === category &&
                menuData.submenus[
                  category as keyof typeof menuData.submenus
                ] && (
                  <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 py-2">
                    {menuData.submenus[
                      category as keyof typeof menuData.submenus
                    ]?.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mega Dropdown (para categorias com muitos itens) */}
      {activeCategory &&
        menuData.submenus[activeCategory as keyof typeof menuData.submenus]
          ?.length > 10 && (
          <div
            className="absolute left-0 right-0 top-full bg-white shadow-xl z-40 p-6"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="container mx-auto grid grid-cols-4 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4">{activeCategory}</h3>
                <ul className="space-y-3">
                  {menuData.submenus[
                    activeCategory as keyof typeof menuData.submenus
                  ]
                    ?.slice(0, 5)
                    .map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-gray-700 hover:text-black"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col-span-3 grid grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <h4 className="font-medium mb-3">Subcategoria {i + 1}</h4>
                    <ul className="space-y-2">
                      {menuData.submenus[
                        activeCategory as keyof typeof menuData.submenus
                      ]
                        ?.slice(5 + i * 5, 10 + i * 5)
                        .map((item) => (
                          <li key={item}>
                            <Link
                              href="#"
                              className="text-gray-600 hover:text-black text-sm"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
