import Profile from './Profile';
import AddNewCardsQuest from './AddNewCardsQuest';
import Dashboard from './Dashboard';
import CardsQuest from './CardsQuest';

function page() {
  return (
    <div className="bg-[hsl(0deg, 0%, 95%)] px-[24px] pt-[24px] pb-[56px]">
      {/* <Profile /> */}
      <AddNewCardsQuest />
      {/* <Dashboard /> */}
      {/* <CardsQuest /> Потрібно доробити */}
    </div>
  );
}

export default page;
