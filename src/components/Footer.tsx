"use client";
import { config } from "@/config";
import { Github, Linkedin, Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
        </div>
        <div>
          <Link href="https://github.com/Gabrielscruz">
            <Button variant="ghost" className="p-2">
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-blz">
            <Button variant="ghost" className="p-2">
              <Linkedin className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/rss">
            <Button variant="ghost" className="p-2">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
        >
          Blog powered by wisp
        </Link>
      </div>
    </section>
  );
};
