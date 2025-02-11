'use client';

import _ from 'lodash';

function QuestViewMini({ data, onClick }: { data: any; onClick: () => void }) {
  const { title, author, cards } = data;

  return (
    <div
      className="carousel-item flex min-w-80 flex-col gap-12 rounded-lg bg-slate-600 p-4 px-6 font-medium text-stone-200"
      onClick={onClick}
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold">{_.upperFirst(title)}</h4>
        <span className="w-fit rounded-xl bg-slate-500 px-2 py-0.5 text-sm font-bold">
          {cards.length} terms
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile image"
            />
          </div>
        </div>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default QuestViewMini;
