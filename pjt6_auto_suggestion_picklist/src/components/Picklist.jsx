import React, { useEffect, useState } from "react";

export default function Picklist() {
  const [shoppingList, setShoppingList] = useState([]);
  const [origList, setOrigList] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchList(querySearch) {
    const url = `https://dummyjson.com/recipes/search?q=${querySearch}`;
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    if (querySearch) {
      setShoppingList(data.recipes);
    } else {
      setShoppingList(data.recipes);
      setOrigList(data.recipes);
    }
  }

  useEffect(() => {
    //if(query.length>=2)
    fetchList(query);
  }, [query]);

  function handleInput(e) {
    let item = e.target.value;
    setQuery(item);
  }

  const [bucketList, setBucketList] = useState([]);

  function handleSelectItem(e) {
    const idx = e.target.getAttribute("data-id");

    const obj = {
      id: Date.now(),
      name: origList[idx].name,
      isDone: false,
    };

    setBucketList([...bucketList, obj]);
  }

  function handleCheckItem(id)
  {
   setBucketList((prev)=>
    prev.map((i)=>
      i.id === id? {...i, isDone : !i.isDone} : i
    )
   )
  }

  function handleDeleteItem(id)
  {
    setBucketList((prev)=>
      prev.filter((i)=>
        i.id !== id
      )
    )
  }

  return (
    <div className="picklist">
      <div className="part1">
        <h2>Shopping menu</h2>

        <div className="input_box">
          <input
            type="text"
            placeholder="Search an item..."
            className="inputBox"
            onChange={handleInput}
          ></input>
        </div>

        <div className="shoppingList" onClick={handleSelectItem}>
          {shoppingList.map((i, idx) => {
            return (
              <div
                className="list-item"
                key={idx}
                data-id={i.id}
                // onClick={() => handleSelectItem(i.id, i.name)} //but this would add event listener on each item = heavy dom
              >
                {i.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="part2">
        <div className="bucket-list">
          <h2>Shopping list</h2>

          <div className="bucket">
            {bucketList.length > 0 ? (
              <div className="displayList">
                {bucketList.map((i, idx) => (
                  <div key={idx} className={i.isDone? 'bucket_items striked' : 'bucket_items'}>
                    
                  <button className="check" onClick={()=>handleCheckItem(i.id)}>✔️</button>

                    {i.name}

                  <button className="cross" onClick={()=>handleDeleteItem(i.id)}>❌</button>                 
                  
                  </div>
                ))}
              </div>
            ) : (
              <h4>No items in the list</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
