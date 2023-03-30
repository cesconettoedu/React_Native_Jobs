import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
    headers: {
      'X-RapidAPI-Key': 'c4cc5833bdmsh4beadf93e034785p129448jsnb00add367caf',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
}