'use client';

import { Provider } from 'react-redux';
import store from './store/store';

import Profile from './Profile';
import AddNewQuest from './AddNewQuest';
import Dashboard from './Dashboard';
import CardsQuest from './CardsQuest';

function page() {
  return (
    <Provider store={store}>
      <div className="bg-stone-200 px-[24px] pt-[24px] pb-[56px]">
        {/* <Profile /> */}
        <AddNewQuest />
        {/* <Dashboard /> */}
        {/* <Cards /> Потрібно доробити */}
      </div>
    </Provider>
  );
}

export default page;
