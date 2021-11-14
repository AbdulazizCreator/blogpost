import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [data] = useFetch("post/");
  console.log(data);
  return (
    <section>
      <div className="container- pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>{" "}
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <Card color="warning">
                <Link to="/post/1">
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                  />
                </Link>
                <CardBody>
                  <CardTitle tag="h5">Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <Link to="/post/1" className="btn btn-primary">
                    To'liq ko'rish
                  </Link>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
