import React from "react";
import NextLink from "@/components/common/nextlink";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/context/ThemeContext";
import { profile } from "@/lib/content";
import { getProfileGitHub } from "@/lib/fetch";

const ThemeToggleButton = dynamic(
  () => import("@/components/common/toggleTheme"),
  {
    ssr: false,
  }
);

const Header = async () => {
  const data = await getProfileGitHub();
  return (
    <header className='sticky top-0 w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-midnight light:bg-lightgray bg-lightgray z-[50] rounded-lg'>
      <div className='flex flex-wrap items-center w-full'>
        {/* dark mode - without text - icons only */}
        <div className='p-2 text-gray-800 rounded-lg flex items-center w-full justify-between'>
          <div className='flex flex-row flex-wrap items-center'>
            <NextLink
              href='https://portfolio-next14-sandy.vercel.app/'
              className='flex flex-row items-center focus-outline'
            >
              <Image
                alt='Pierre-Olivier Boisvert'
                className='w-12 h-auto border-2 border-neon-blue dark:border-green rounded-full'
                src={data.avatar_url}
                width='48'
                height='48'
                priority={true}
              />
              <span className='pl-3 text-neon-blue dark:text-green text-xl font-semibold'>
                {profile.websiteTitle}
              </span>
            </NextLink>
          </div>

          <div className='flex flex-row flex-wrap items-center'>
            <span className='px-2 mr-2 border-r border-gray-800'>
              <svg
                height='48'
                width='48'
                viewBox='0 0 496 496'
                fill='currentColor'
              >
                <path
                  style={{ fill: "#37D660" }}
                  d='M248,0C111.608,0,0,111.6,0,248c0,136.392,111.608,248,248,248 c136.4,0,248-111.608,248-248C496,111.6,385.648,0,248,0z M362.072,358.352c-4.936,7.448-13.624,9.928-21.072,4.96 c-58.28-35.96-131.448-43.392-218.224-23.544c-8.704,2.464-16.128-3.736-18.608-11.168c-2.488-8.68,3.72-16.128,11.16-18.6 c94.232-21.08,176.08-12.4,240.56,27.28C364.552,341,365.808,350.92,362.072,358.352z M391.84,290.16 c-6.192,8.68-17.368,12.392-26.04,6.192c-66.96-40.912-168.64-53.32-246.768-28.512c-9.904,2.48-21.08-2.488-23.56-12.4 c-2.48-9.92,2.488-21.088,12.408-23.568c90.52-27.272,202.12-13.648,279,33.48C394.32,269.072,398.04,281.48,391.84,290.16z M426.552,214.512c-6.184,8.672-21.08,12.408-32.232,6.184c-79.36-47.104-212.032-52.064-287.672-28.512 c-12.416,3.736-24.808-3.712-28.512-14.872C74.4,164.92,81.848,152.512,93,148.8c88.04-26.032,233.136-21.096,324.88,33.488 C429.04,188.48,432.776,203.352,426.552,214.512z'
                />
                <path
                  style={{ fill: "#2CC64D" }}
                  d='M219.68,195.296c-94.952,0-177.16,35.576-217.168,87.448C19.536,402.832,123.384,496,248,496 c90.016,0,169.208-48.624,212.664-120.872c1.392-6.856,2.168-13.84,2.168-20.952C462.832,266.424,353.976,195.296,219.68,195.296z M362.072,358.352c-4.936,7.448-13.624,9.928-21.072,4.96c-58.28-35.96-131.448-43.392-218.224-23.544 c-8.704,2.464-16.128-3.736-18.608-11.168c-2.488-8.68,3.72-16.128,11.16-18.6c94.232-21.08,176.08-12.4,240.56,27.28 C364.552,341,365.808,350.92,362.072,358.352z M391.84,290.16c-6.192,8.68-17.368,12.392-26.04,6.192 c-66.96-40.912-168.64-53.32-246.768-28.512c-9.904,2.48-21.08-2.488-23.56-12.4c-2.48-9.92,2.488-21.088,12.408-23.568 c90.52-27.272,202.12-13.648,279,33.48C394.32,269.072,398.04,281.48,391.84,290.16z'
                />
                <path
                  style={{ fill: "#5AF27A" }}
                  d='M248,36.816c131.384,0,237.808,101.68,247.248,229.536C495.696,260.288,496,254.168,496,248 C496,111.6,385.648,0,248,0C111.608,0,0,111.6,0,248c0,6.184,0.304,12.328,0.76,18.408C10.272,138.512,117.808,36.816,248,36.816z'
                />
                <path
                  style={{ fill: "#1DAA59" }}
                  d='M326.192,483.216c14.488-33.36,32.688-83.248,35.872-88.056c3.736-7.432,2.488-17.352-6.184-21.072 c-64.488-39.68-146.328-48.36-240.56-27.28c-7.44,2.48-13.64,9.92-11.16,18.6c1.248,3.76,6.512,49.088,12.528,92.632 C154.832,482.048,199.848,496,248,496C275.304,496,301.568,491.464,326.192,483.216z'
                />
              </svg>
            </span>

            <span className='px-1 hover:text-white cursor-pointer dark:bg-gray-800 bg-gray-200 rounded-full'>
              <i className='w-8 p-2'>
                <ThemeProvider>
                  <ThemeToggleButton />
                </ThemeProvider>
              </i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
