import { getTool } from '@/lib/tools';
import ToolDetails from '@/components/ToolDetails';

async function fetchGithubData(githubUrl: string) {
  const githubApiUrl = githubUrl.replace(
    'https://github.com/',
    'https://api.github.com/repos/'
  );
  const githubReadmeUrl =
    githubUrl.replace(
      'https://github.com/',
      'https://raw.githubusercontent.com/'
    ) + '/HEAD/README.md';

  const [githubResponse, readmeResponse] = await Promise.all([
    fetch(githubApiUrl),
    fetch(githubReadmeUrl),
  ]);

  const githubData = await githubResponse.json();
  const readmeData = await readmeResponse.text();

  return { githubData, readmeData };
}

export default async function ToolPage({ params: { toolSlug } }) {
  const toolData = await getTool(`${toolSlug}.json`);
  const { githubData, readmeData } = await fetchGithubData(toolData.github_url);

  return (
    <ToolDetails
      toolData={toolData}
      githubData={githubData}
      readmeData={readmeData}
    />
  );
}
