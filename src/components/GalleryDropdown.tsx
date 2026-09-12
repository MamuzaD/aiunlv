"use client";

import Link from "next/link";
import { texts } from "~/data/texts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

const galleryMenuItems = [
  { label: "Events", activeTab: "Events", path: "/gallery" },
  { label: "Projects", activeTab: "Projects", path: "/gallery" },
  { label: "Resources", activeTab: "Resources", path: "/gallery" },
];

export default function GalleryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-block bg-white/50 px-8 py-2 border text-sm md:text-base border-black rounded-xl transition-all duration-700 text-black
            hover:shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)]"
        >
          {texts.nav.explore_btn}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-md border border-black/20 shadow-xl rounded-xl">
        {galleryMenuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link
              href={{ pathname: item.path, query: { tab: item.activeTab } }}
              className="flex items-center px-3 py-2 text-sm text-black hover:bg-black/5 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
