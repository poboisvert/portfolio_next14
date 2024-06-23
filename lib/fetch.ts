import { cache } from "react";

export const getProfileGitHub = cache(async (): Promise<any> => {
  try {
    const data = await fetch("https://api.github.com/users/poboisvert").then(
      (res) => res.json()
    );
    return data;
  } catch (err) {
    return null;
  }
});

export const getGithubProject = cache(async (): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/poboisvert/repos?per_page=100`,
      {
        next: { revalidate: 3600 },
      }
    );
    const sortedData = (await response.json())
      .sort((a: any, b: any) => b.id - a.id)
      .slice(0, 7);
    return sortedData;
  } catch (e) {
    return [];
  }
});

export const getWorkContentDetail = async (slug: string) => {
  const contents = [
    {
      slug: "condollo",
      title: "Condollo - AI Home Valuation",
      date: "2023-2024",
      overview:
        "AI Home Valuation is an innovative project aimed at providing accurate home valuations across Canada. By leveraging advanced AI algorithms, the project analyzes recent listings to generate reliable property valuations, helping users make informed real estate decisions.",
      roleAndContribution: [
        {
          title: "Full Stack Developer",
          description:
            "Collaborated with an external designer to create a user-friendly interface that enhances the user experience for home valuation inquiries.",
        },
        {
          title: "API Research",
          description:
            "Conducted extensive research on API schema to ensure seamless integration and data retrieval for home valuation processes.",
        },
        {
          title: "Supabase API Development",
          description:
            "Developed a Supabase API RPC function to facilitate efficient data handling and processing for the valuation model.",
        },
        {
          title: "Model Creation",
          description:
            "Created a basic model to generate home valuations based on recent listings, ensuring accuracy and reliability in the valuation process.",
        },
      ],
      link: "https://condollo.com",
      imageSrc:
        "https://i.ibb.co/JsJqjMG/Screenshot-2024-06-19-at-7-48-09-AM.png",
      imageAlt: "Condollo AI Home Valuation",
    },
    {
      slug: "bettingnews",
      title: "Betting News - Sports Analytics Platform",
      date: "Actual",
      overview:
        "Betting News is a comprehensive sports analytics platform that provides users with the latest news, statistics, and insights for various leagues. The platform aims to enhance the betting experience by offering real-time data and analytics.",
      roleAndContribution: [
        {
          title: "Full Stack Developer",
          description:
            "Worked on optimizing the REDIS key value buffer to improve data retrieval speeds and overall application performance.",
        },
        {
          title: "SEO Optimization",
          description:
            "Implemented SEO strategies using Google API Indexing to enhance the platform's visibility and search engine ranking.",
        },
        {
          title: "League Management",
          description:
            "Created new leagues and integrated comprehensive statistics to provide users with detailed insights into their favorite sports.",
        },
      ],
      link: "https://bettingnews.com",
      imageSrc:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0bbefa70-bc6c-4762-b5aa-73ef28b6c5df-profile_banner-480.png",
      imageAlt: "Betting News Sports Analytics Platform",
    },
  ];

  const content = contents.find((item) => item.slug === slug);
  return content || null;
};
