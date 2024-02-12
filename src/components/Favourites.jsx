import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Favourites = () => {
  const favouriteCompanies = useSelector(state => state.favourites.favouriteCompanies);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourite Companies</h1>
          {favouriteCompanies.map(company => (
            <p key={company}>{company}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;