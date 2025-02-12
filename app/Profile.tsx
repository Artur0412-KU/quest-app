import ListQuests from './components/Profile/ListQuests';
import Image from "next/image";

const testQuests = [
  {
    id: Math.random(),
    title: 'title1',
    description: 'desc1',
    author: 'auth1',
    time: 10,
  },
  {
    id: Math.random(),
    title: 'title2',
    description: 'desc2',
    author: 'auth2',
    time: 20,
  },
  {
    id: Math.random(),
    title: 'title3',
    description: 'desc3',
    author: 'auth3',
    time: 30,
  },
  {
    id: Math.random(),
    title: 'title4',
    description: 'desc4',
    author: 'auth4',
    time: 40,
  },
  {
    id: Math.random(),
    title: 'title5',
    description: 'desc3',
    author: 'auth3',
    time: 30,
  },
  {
    id: Math.random(),
    title: 'title5',
    description: 'desc3',
    author: 'auth3',
    time: 30,
  },
  {
    id: Math.random(),
    title: 'title5',
    description: 'desc5',
    author: 'auth5',
    time: 50,
  },
  {
    id: Math.random(),
    title: 'title6',
    description: 'desc6',
    author: 'auth6',
    time: 60,
  },
  {
    id: Math.random(),
    title: 'title7',
    description: 'desc7',
    author: 'auth7',
    time: 70,
  },
  {
    id: Math.random(),
    title: 'title8',
    description: 'desc8',
    author: 'auth8',
    time: 80,
  },
];

function profile() {
  return (
    <div className="h-full overflow-hidden bg-white px-12 py-6">
      <div className="flex items-center gap-24 pb-20">
        <div className="avatar">
          <div className="w-64 rounded-full">
            <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={''}/>
          </div>
        </div>
        <h2 className="mb-40 text-3xl font-bold">Full name</h2>
      </div>
      <ListQuests quests={testQuests} />
    </div>
  );
}

export default profile;
