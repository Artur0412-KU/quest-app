'use client';

import { CardType } from '@/app/AddNewQuest';

import _ from 'lodash';
import QuestViewMini from '../AddNewQuest/QuestCardsViewMini';

export type DataType = {
  id: string;
  title: string;
  author: string;
  time: number;
  cards: CardType[];
};

type RowQuestProps = {
  rowTitle: string;
  data: DataType[];
};

function RowQuests({ rowTitle, data }: RowQuestProps) {
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
