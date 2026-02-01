
const Searchbar = ({searchdata,setsearchdata,resdata,setdata,datafetch})=>{
  return (
    <div>
    <input className="border border-solid border-black rounded-md" type="text" placeholder="search resturant"  value={searchdata}  onChange={(e)=>{

      setsearchdata(e.target.value);
    }}/>


    <button className="border border-solid border-black bg-green-200 hover:bg-green-300 ml-5 w-20 rounded-md" onClick={()=>{
      const updatesearch = datafetch.filter(res => res.info.name.toLowerCase().includes(searchdata.toLowerCase()));
      setdata(updatesearch.length===0?datafetch:updatesearch);
    }}      >Search</button>
    </div>
  )
}

export default Searchbar;