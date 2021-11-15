import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import Loading from "../comps/Loading";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [data, loading] = useFetch("api/v1/post/");
  return (
    <section>
      <div className="container- pt-3">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <div className="row">
              {data.map((item) => (
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <Card color="warning">
                    <Link to={`/post/${item.id}`}>
                      <CardImg
                        alt="Card image cap"
                        src={item.img}
                        top
                        height="250"
                        style={{ objectFit: "cover" }}
                        width="100%"
                      />
                    </Link>
                    <CardBody>
                      <CardTitle tag="h5">{item.title}</CardTitle>
                      <CardText className="summary">{item.summary}</CardText>
                      <Link to={`/post/${item.id}`} className="btn btn-primary">
                        To'liq ko'rish
                      </Link>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
