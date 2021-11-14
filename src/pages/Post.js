import React from "react";
// import { useParams } from "react-router-dom";
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
const Post = () => {
  // let params = useParams();
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <h3 className="text-center p-3">Card title</h3>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
