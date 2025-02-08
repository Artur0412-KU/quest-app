import Profile from './Profile';
import AddNewCardsQuest from './AddNewCardsQuest';
import Dashboard from './Dashboard';
import CardsQuest from './CardsQuest';

function page() {
  return (
    <div className="min-h-screen w-full bg-base-300 px-24 py-12">
      {/* <Profile /> */}
      {/* <AddNewCardsQuest /> */}
      {/* <Dashboard /> */}
      <CardsQuest />
    </div>
  );
}

export default page;
