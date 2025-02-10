'use client';

import _ from 'lodash';
import QuestViewMini from '../AddNewQuest/QuestCardsViewMini';

function RowQuests({ rowTitle, data }) {
  function handleSeceltQuest() {}

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-3xl font-bold">{_.upperFirst(rowTitle)}</h4>
      <div className="carousel flex gap-4">
        {data.map(questData => (
          <QuestViewMini
            key={questData.id}
            data={questData}
            onClick={handleSeceltQuest}
          />
        ))}
      </div>
    </div>
  );
}

export default RowQuests;
