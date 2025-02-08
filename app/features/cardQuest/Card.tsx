function Card() {
  return (
    <div className="relative h-52 w-full bg-red-300">
      <div className="card__side card__side--front absolute left-0 top-0 h-52 w-full text-3xl font-semibold">
        Front side
      </div>
      <div className="card__side card__side--back absolute left-0 top-0 h-52 w-full text-3xl font-semibold">
        Back side
      </div>
    </div>
  );
}

export default Card;
