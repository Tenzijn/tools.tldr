import { Hero } from '@/components';
import { ToolCard } from '@/components/ui';
import { getFeaturedTools, getTools } from '@/lib/tools';

const Home = async () => {
  const featuredTools = await getFeaturedTools();
  const tools = await getTools({});
  return (
    <>
      <Hero />
      <section id='tools'>
        <h3 className='text-center font-bold text-2xl mt-4'>Featured Tools</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-8'>
          {featuredTools.map((tool: any) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>
      <section id='tools'>
        <h3 className='text-center font-bold text-2xl mt-4'>
          All Security tools
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-8'>
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
