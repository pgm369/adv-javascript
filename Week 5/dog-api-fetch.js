async function fetchData() {
    try {
      const response = await fetch("http://dog-api.kinduff.com/api/facts?number=5");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchData();
  