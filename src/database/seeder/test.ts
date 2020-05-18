import logger from '../../utils/logger';
import { Test } from '../../models';

const data = [
  {
    myData: {
      name: 'Admin 1'
    }
  },
  {
    myData: {
      name: 'Admin 2'
    }
  },
  {
    myData: {
      name: 'Admin 3'
    }
  },
  {
    myData: {
      name: 'Admin 4'
    }
  },
  {
    myData: {
      name: 'Admin 5'
    }
  }
];

export default (): void => {
  data.map(async (data: any) => {
    await Test.findOneAndUpdate(data, data, { upsert: true });
  });
  logger.info('Test database seeded');
};
