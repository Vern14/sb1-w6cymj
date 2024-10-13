import { NextApiRequest, NextApiResponse } from 'next';

const details = {
  start: {
    'IT Support': { name: 'IT Support', description: 'Our IT Support team provides technical assistance for all university systems and software. We offer help with account access, email setup, Wi-Fi connectivity, and software installations.' },
    'Academic Advising': { name: 'Academic Advising', description: 'Academic advisors are available to help you plan your course schedule, understand degree requirements, and make informed decisions about your academic path.' },
    'Financial Aid': { name: 'Financial Aid', description: 'The Financial Aid office can assist you with information about scholarships, grants, loans, and work-study opportunities. We are here to help you navigate the financial aspects of your education.' },
    'Student Services': { name: 'Student Services', description: 'Student Services offers a wide range of support, including counseling, career services, disability support, and more. We are dedicated to enhancing your university experience.' }
  },
  academics: {
    'Computer Science': {
      'Introduction to Programming': { name: 'Introduction to Programming', description: 'This course introduces fundamental programming concepts using Python.', prerequisites: 'None' },
      'Data Structures': { name: 'Data Structures', description: 'Study of fundamental data structures and their applications.', prerequisites: 'Introduction to Programming' },
      'Algorithms': { name: 'Algorithms', description: 'Analysis and design of computer algorithms.', prerequisites: 'Data Structures' }
    },
    'Biology': {
      'General Biology': { name: 'General Biology', description: 'Introduction to basic biological concepts and processes.', prerequisites: 'None' },
      'Genetics': { name: 'Genetics', description: 'Study of heredity and variation in living organisms.', prerequisites: 'General Biology' },
      'Ecology': { name: 'Ecology', description: 'Study of interactions between organisms and their environment.', prerequisites: 'General Biology' }
    },
    'Economics': {
      'Microeconomics': { name: 'Microeconomics', description: 'Study of individual economic units and markets.', prerequisites: 'None' },
      'Macroeconomics': { name: 'Macroeconomics', description: 'Study of the economy as a whole and its major aggregates.', prerequisites: 'None' },
      'Econometrics': { name: 'Econometrics', description: 'Application of statistical methods to economic data.', prerequisites: 'Microeconomics, Macroeconomics' }
    },
    'English Literature': {
      'Introduction to Literary Studies': { name: 'Introduction to Literary Studies', description: 'Overview of literary genres, periods, and critical approaches.', prerequisites: 'None' },
      'Shakespeare': { name: 'Shakespeare', description: 'Study of selected plays and sonnets by William Shakespeare.', prerequisites: 'Introduction to Literary Studies' },
      'Modern Poetry': { name: 'Modern Poetry', description: 'Exploration of major poets and poetic movements of the 20th century.', prerequisites: 'Introduction to Literary Studies' }
    },
    'Psychology': {
      'Introduction to Psychology': { name: 'Introduction to Psychology', description: 'Overview of major areas in psychology.', prerequisites: 'None' },
      'Cognitive Psychology': { name: 'Cognitive Psychology', description: 'Study of mental processes such as perception, memory, and problem-solving.', prerequisites: 'Introduction to Psychology' },
      'Abnormal Psychology': { name: 'Abnormal Psychology', description: 'Study of psychological disorders and their treatments.', prerequisites: 'Introduction to Psychology' }
    }
  },
  helpdesks: {
    'IT Support': { name: 'IT Support', description: 'Our IT Support team provides technical assistance for all university systems and software. We offer help with account access, email setup, Wi-Fi connectivity, and software installations.' },
    'Academic Advising': { name: 'Academic Advising', description: 'Academic advisors are available to help you plan your course schedule, understand degree requirements, and make informed decisions about your academic path.' },
    'Financial Aid': { name: 'Financial Aid', description: 'The Financial Aid office can assist you with information about scholarships, grants, loans, and work-study opportunities. We are here to help you navigate the financial aspects of your education.' },
    'Student Services': { name: 'Student Services', description: 'Student Services offers a wide range of support, including counseling, career services, disability support, and more. We are dedicated to enhancing your university experience.' }
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { feature, name } = req.query;
  const detailData = details[feature as keyof typeof details]?.[name as string] || null;
  if (detailData) {
    res.status(200).json(detailData);
  } else {
    res.status(404).json({ message: 'Detail not found' });
  }
}