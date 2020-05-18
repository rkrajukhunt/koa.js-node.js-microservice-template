import config from 'config';
import seedTestData from './test';

const seedDatabase = (): void => {
  if (config.get('seed_database')) {
    seedTestData();
  }
};

export default seedDatabase;
