import React from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import useFetch from "../hooks/useFetch";
const Post = () => {
  let params = useParams();
  const [data] = useFetch(`api/v1/post/${params.id}/`);
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <h3 className="text-center p-3">{data.title}</h3>
        <Card>
          <CardImg alt="Card image cap" src={data.img} top width="100%" />
          <CardBody>
            <CardText>
              {data.summary}
              <br />
              <hr />
              {data.body}
            </CardText>
          </CardBody>
        </Card>
        <fieldset>
          <legend>Izoh qoldirish</legend>
          <Form>
            <FormGroup>
              <Input name="email" placeholder="Izoh yozing" type="textarea" />
            </FormGroup>
            <Button type="submit">Izoh qoldirish</Button>
          </Form>
        </fieldset>
      </div>
    </div>
  );
};

export default Post;
