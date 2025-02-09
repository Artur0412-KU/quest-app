import Profile from './Profile';
import AddNewCards from './AddNewQuest';
import Dashboard from './Dashboard';
import CardsQuest from './CardsQuest';

function page() {
  return (
    <div className="bg-stone-200 px-[24px] pt-[24px] pb-[56px]">
      {/* <Profile /> */}
      <AddNewCards />
      {/* <Dashboard /> */}
      {/* <Cards /> Потрібно доробити */}
    </div>
  );
}

export default page;
