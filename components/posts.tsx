"use client";

import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Posts = () => (
  <ScrollArea.Root className="w-full max-w-md h-[225px] rounded overflow-hidden bg-neutral-900">
    <ScrollArea.Viewport className="w-full h-full rounded">
      <div className="py-[15px] px-5">
        <div className="text-white text-[15px] leading-[18px] font-medium">
          Tags
        </div>
        {TAGS.map((tag) => (
          <div
            className="text-white text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-neutral-400"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 bg-neutral-700 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="vertical"
    >
      <ScrollArea.Thumb className="flex-1 bg-neutral-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="flex select-none touch-none p-0.5 bg-neutral-500 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      orientation="horizontal"
    >
      <ScrollArea.Thumb className="flex-1 bg-neutral-200 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="bg-neutral-700" />
  </ScrollArea.Root>
);

export default Posts;
