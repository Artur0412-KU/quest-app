'use client';
import { Provider } from 'react-redux';
import store from './store/store';

import AddNewQuest from './AddNewQuest';

function page() {
  return (
    <Provider store={store}>
      <div className="bg-stone-200 px-[24px] pt-[24px] pb-[56px]">
        <AddNewQuest />
        {/* <Dashboard /> */}
      </div>
    </Provider>
  );
}

export default page;