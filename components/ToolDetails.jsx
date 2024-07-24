'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import Head from 'next/head';
import { marked } from 'marked';

const tabs = ['README', 'Playground'];

export default function ToolDetails({ toolData, githubData, readmeData }) {
  const router = useRouter();
  const { query } = router;
  const { name, description, url, github_url = '' } = toolData || {};

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (query && query.playground !== undefined) {
      setTabIndex(query.playground ? 1 : 0);
    }
  }, [query]);

  function changeTab(index) {
    setTabIndex(index);
    const newQuery = { ...query };
    if (index === 0) {
      delete newQuery.playground;
    } else {
      newQuery.playground = '';
    }

    // Construct the new URL with query parameters
    const newUrl = new URL(window.location.href);
    Object.keys(newQuery).forEach((key) => {
      if (newQuery[key] === undefined) {
        newUrl.searchParams.delete(key);
      } else {
        newUrl.searchParams.set(key, newQuery[key]);
      }
    });

    router.push(newUrl.toString());
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <Head>
        <script src='//katacoda.com/embed.js'></script>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2.5 lg:gap-5 mb-5'>
        <div className='lg:col-span-2'>
          <h2 className='text-2xl lg:text-4xl font-bold mb-2'>{name}</h2>
          <p className='text-slate-600 mb-8'>{description}</p>
        </div>
        <div className='flex flex-col'>
          <p className='flex gap-5 mb-4'>
            <a href={url} target='_blank' rel='noopener'>
              Official Website ↗
            </a>
            <a href={github_url} target='_blank' rel='noopener'>
              GitHub ↗
            </a>
          </p>
          {githubData && (
            <ul className='list-disc ml-5 text-slate-600'>
              <li>{githubData.stargazers_count} Stars</li>
              <li>{githubData.forks} Forks</li>
              <li>{githubData.watchers} Watchers</li>
              <li>{githubData.open_issues} Open issues</li>
            </ul>
          )}
        </div>
      </div>

      <div className='border border-slate-400'>
        {/* Tabs */}
        <div className='flex'>
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={classNames(
                'py-2 px-6 hover:bg-slate-100 border-b mb-4',
                {
                  'border-slate-800': tabIndex === idx,
                  'text-slate-600 border-transparent': tabIndex !== idx,
                }
              )}
              onClick={() => changeTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className='p-4'>
          <div
            className={classNames({
              hidden: tabIndex !== 0,
            })}
          >
            <div dangerouslySetInnerHTML={{ __html: marked(readmeData) }} />
            {!readmeData && (
              <div>
                Error fetching readme. View in{' '}
                <a href={github_url} target='_blank' rel='noopener'>
                  GitHub ↗
                </a>
              </div>
            )}
          </div>
          <div
            className={classNames('h-[620px]', {
              hidden: tabIndex !== 1,
            })}
          >
            <div
              style={{ height: '600px', paddingTop: '20px' }}
              data-katacoda-id='tldrrun/git-leaks'
              id='katacoda-scenario-1'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
