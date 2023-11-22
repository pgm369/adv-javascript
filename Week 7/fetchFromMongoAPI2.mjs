// fetchFromMongoAPI2.mjs

const fetchDocumentFromMongoDB = async () => {
    const api_endpoint = "https://us-west-2.aws.data.mongodb-api.com/app/data-hyujg/endpoint/data/v1/action/findOne";
  
    const myBody = {
      "collection": "listingsAndReviews",
      "database": "sample_airbnb",
      "dataSource": "Cluster1",
      "filter": {
        "beds": 2,
        "property_type": "House"
      },
      "projection": {
        "_id": 1,
        "beds": 1,
        "name": 1,
        "bedrooms": 1
      }
    };
  
    console.log("Fetching document from:", {
      dataSource: myBody.dataSource,
      database: myBody.database,
      collection: myBody.collection
    });
  
    try {
      const response = await fetch(api_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'yKJzvdG8kxIquBgzMm0pMLiumLfShGNY1e06VNjOP2R4bSYtd4LBNfdOW1JFslWh',
        },
        body: JSON.stringify(myBody)
      });
  
      const json_response = await response.json();
      console.log(json_response);
    } catch (error) {
      console.error("Error fetching document:", error.message);
    }
  };
  
  // Call the function to initiate the fetch
  fetchDocumentFromMongoDB();
  