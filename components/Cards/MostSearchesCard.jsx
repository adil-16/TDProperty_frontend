

const MostSearchesCard = ({title}) => {
  const searches = [
    "Rent houses",
    "Best renting houses",
    "Apartments",
    "Rooms",
    "Furnished Rooms",
    "Villa",
  ];
  return (
    <div className="flex flex-col border rounded-md shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.12)] w-full">
      <div className="flex justify-between items-center px-5 py-3 border-b">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-themetext">
          { title == 'Most searched real estates in UAE' ?
           (<svg class="h-8 w-8 text-red-500"  width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
          
           <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>)
           :
           "Updated 2 Days ago"
   }  </p> </div>
      <div className="flex flex-col gap-3 py-3">
        {searches.map((search, i) => (
          <div className="flex gap-5 items-center text-sm px-5" key={i}>
            <span className="text-[rgba(0,0,0,0.4)]">{i+1}</span>
            <p>{search}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSearchesCard;
