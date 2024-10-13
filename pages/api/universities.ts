import { NextApiRequest, NextApiResponse } from 'next';

const universities = [
  { name: 'University of Malawi', location: 'Zomba, Malawi', image: 'https://www.unima.ac.mw/sites/default/files/logo.png' },
  { name: 'Malawi University of Science and Technology', location: 'Thyolo, Malawi', image: 'https://must.ac.mw/wp-content/uploads/2022/05/MUST-Logo.png' },
  { name: 'Lilongwe University of Agriculture and Natural Resources', location: 'Lilongwe, Malawi', image: 'https://www.luanar.ac.mw/wp-content/uploads/2019/09/luanar-logo.png' },
  { name: 'Mzuzu University', location: 'Mzuzu, Malawi', image: 'https://www.mzuni.ac.mw/wp-content/uploads/2020/07/mzuni-logo.png' },
  { name: 'Kamuzu University of Health Sciences', location: 'Blantyre, Malawi', image: 'https://kuhes.ac.mw/wp-content/uploads/2021/05/kuhes-logo.png' },
  { name: 'Malawi University of Business and Applied Sciences', location: 'Blantyre, Malawi', image: 'https://www.mubas.ac.mw/wp-content/uploads/2021/05/mubas-logo.png' },
  { name: 'Catholic University of Malawi', location: 'Chiradzulu, Malawi', image: 'https://www.cunima.ac.mw/wp-content/uploads/2020/03/cunima-logo.png' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(universities);
}