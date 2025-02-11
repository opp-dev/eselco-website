import { getHomepageContent } from '../lib/markdown';
import React, {JSX} from 'react';
import type { Metadata } from 'next';
import PageWrapper from '../components/PageWrapper';

interface HomepageContent {
  content: string;
}

async function fetchHomepageContent(filename: string): Promise<HomepageContent | null> {
  try {
    const content = await getHomepageContent(filename);
    return content;
  } catch (error) {
    console.error(`Error fetching ${filename}:`, error);
    return null;
  } 
}

export default async function Home(): Promise<JSX.Element> {
  const welcomeSection = await fetchHomepageContent('content-homepage-welcomeSection.md');
  const eventsSection = await fetchHomepageContent('content-homepage-eventsSection.md');
  const philosophySection = await fetchHomepageContent('content-homepage-philosophySection.md');

  return (
    <PageWrapper>
      <div>
        <h1 className='w-fit mx-auto pb-8'>Welcome to Eselco</h1>

        {welcomeSection && (
          <div className='max-w-[786px] mx-auto' dangerouslySetInnerHTML={{ __html: welcomeSection.content }} />
        )}
        {!welcomeSection && (<p>Error loading Welcome Section content.</p>)}

        {eventsSection && (
          <div className='max-w-[786px] mx-auto' dangerouslySetInnerHTML={{ __html: eventsSection.content }} />
        )}
        {!eventsSection && (<p>Error loading Events Section content.</p>)}

        {philosophySection && (
          <div className='max-w-[786px] mx-auto' dangerouslySetInnerHTML={{ __html: philosophySection.content }} />
        )}
        {!philosophySection && (<p>Error loading Events Section content.</p>)}

      </div>
    </PageWrapper>
  );
}
