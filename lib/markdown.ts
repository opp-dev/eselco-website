import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content/askhole-website-content');

export async function getHomepageContent(filename: string): Promise<{ content: string }> { 
    const filePath = path.join(contentDirectory, filename);
    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const processedContent = await remark().use(html).process(content);
        return {
            ...data, // Include data if needed (e.g., frontmatter)
            content: processedContent.toString(),
        };
    } catch (error) {
        console.error("Error reading or processing Markdown file:", error);
        return { content: "<p>Error loading content.</p>" };
    }
}