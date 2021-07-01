import React, { useState } from "react";
import "./Dashboard.css";
import SearchBar from "../../../SearchEngine/SearchBar";
import FiltersContainer from "../../../Filters/FiltersContainer";
import GamesTable from "../../Games/GamesTable";

const Dashboard = () => {
  const [platform, setPlatform] = useState("PC");
  const [sorter, setSorter] = useState("Release-Date");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="Dashboard-container">
      <SearchBar title={title} setTitle={setTitle} />
      <FiltersContainer
        platform={platform}
        setPlatform={setPlatform}
        sorter={sorter}
        setSorter={setSorter}
        category={category}
        setCategory={setCategory}
      />
      <GamesTable
        platform={platform}
        sorter={sorter}
        category={category}
        title={title}
      />
    </div>
  );
};

export default Dashboard;
