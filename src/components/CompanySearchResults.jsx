import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../store/actions/favourites";
import Job from "./Job";
import { useNavigate, useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getJobs();

  }, [params]);

  const getJobs = async () => {
    try {
      let endpoint = "";
      if (params.search) {
        endpoint = `https://strive-benchmark.herokuapp.com/api/jobs?search=${params.search}&limit=10`;
      } else if (params.company) {
        endpoint = `https://strive-benchmark.herokuapp.com/api/jobs?company=${params.company}`;
      } else if (params.category) {
        endpoint = `https://strive-benchmark.herokuapp.com/api/jobs?category=${params.category}&limit=10`;
      }

      const response = await fetch(endpoint);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavouritesHandler = () => {
    dispatch(addToFavourites(params.company || params.search || params.category));

  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">
            {params.search ? `Search results for: ${params.search}` : ""}
            {params.company ? `Job posting for: ${params.company}` : ""}
            {params.category ? `Category: ${params.category}` : ""}
          </h1>
          {params.company && (
            <Button variant="primary" onClick={addToFavouritesHandler}>
              Add to Favourites
            </Button>
          )}
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
