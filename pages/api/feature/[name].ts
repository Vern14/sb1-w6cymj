import { NextApiRequest, NextApiResponse } from 'next';

const features = {
  start: [
    { name: 'Helpdesks', icon: 'help' },
    { name: 'IT Support', description: 'Technical assistance for university systems and software.' },
    { name: 'Academic Advising', description: 'Guidance on course selection and academic planning.' },
    { name: 'Financial Aid', description: 'Information about scholarships, loans, and financial assistance.' },
    { name: 'Student Services', description: 'Support for various student needs and concerns.' }
  ],
  academics: [
    { name: 'Computer Science' },
    { name: 'Biology' },
    { name: 'Economics' },
    { name: 'English Literature' },
    { name: 'Psychology' }
  ],
  helpdesks: [
    { name: 'IT Support', description: 'Technical assistance for university systems and software.' },
    { name: 'Academic Advising', description: 'Guidance on course selection and academic planning.' },
    { name: 'Financial Aid', description: 'Information about scholarships, loans, and financial assistance.' },
    { name: 'Student Services', description: 'Support for various student needs and concerns.' }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const featureData = features[name as keyof typeof features] || [];
  res.status(200).json(featureData);
}