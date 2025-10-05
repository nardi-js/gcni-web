import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { newsData } from '../data/newsData';

/**
 * Seed Firestore with initial news data from newsData.js
 * Run this once to populate Firebase with existing data
 */
export const seedNewsData = async () => {
  try {
    console.log('🌱 Starting to seed news data to Firestore...');
    const newsCollection = collection(db, 'news');
    
    let successCount = 0;
    let errorCount = 0;

    for (const news of newsData) {
      try {
        // Remove the 'id' field since Firestore generates its own
        const { id, ...newsWithoutId } = news;
        
        // Convert tags to array if it's a string
        const processedNews = {
          ...newsWithoutId,
          tags: Array.isArray(newsWithoutId.tags) ? newsWithoutId.tags : [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };

        await addDoc(newsCollection, processedNews);
        successCount++;
        console.log(`✅ Added: ${news.title}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to add ${news.title}:`, error.message);
      }
    }

    console.log(`\n✨ Seeding completed!`);
    console.log(`   Success: ${successCount} news articles`);
    console.log(`   Failed: ${errorCount} news articles`);
    
    return {
      success: true,
      message: `Seeded ${successCount} news articles to Firestore`,
      successCount,
      errorCount
    };
  } catch (error) {
    console.error('💥 Seeding failed:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to seed data to Firestore'
    };
  }
};
