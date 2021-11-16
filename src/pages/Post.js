import React, { useState } from "react";
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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import Loading from "../comps/Loading";
import useFetch from "../hooks/useFetch";
import { sendData } from "../server/common";
import Comment from "../comps/Comment";
import CommentTitle from "../comps/CommentTitle";
const Post = () => {
  let params = useParams();
  const [comment, setComment] = useState({});
  const [changes, setChanges] = useState("");
  const [data, loading] = useFetch(`api/v1/post/${params.id}/`, changes);
  const handleValue = (e) => {
    setComment(e.target.value);
  };
  const sendComment = () => {
    sendData(`api/v1/reviews/`, { post: params.id, text: comment });
    setChanges(comment);
  };
  return (
    <div className="container-fluid py-3">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
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

            <div className="comment my-3">
              <h3>Izoh qoldirish</h3>
              <Form>
                <FormGroup>
                  <Input
                    placeholder="Izoh yozing"
                    type="textarea"
                    onChange={handleValue}
                  />
                </FormGroup>
              </Form>
              <Button type="submit" onClick={sendComment}>
                Izoh qoldirish
              </Button>
            </div>
            <Accordion allowZeroExpanded>
              {data.reviews &&
                data.reviews.map((item) => {
                  return (
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <CommentTitle item={item} />
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <Comment
                        item={item}
                        postId={params.id}
                        setChanges={setChanges}
                      />
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
