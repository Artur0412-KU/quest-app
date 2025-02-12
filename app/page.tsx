import Profile from './Profile';
import AddNewQuest from './AddNewQuest';

function page() {
  return (
    <div className="min-h-screen w-full bg-red-300 px-24 py-12">
      {/* <Profile /> */}
      <AddNewQuest />
    </div>
  );
}

export default page;