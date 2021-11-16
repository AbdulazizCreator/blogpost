import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Button, Input, InputGroup } from "reactstrap";
import { sendData } from "../server/common";
import CommentTitle from "./CommentTitle";

const Comment = ({ item, postId, setChanges }) => {
  const [comment, setComment] = useState({});
  const sendComment = (itemId) => {
    sendData("api/v1/reviews/", {
      post: postId,
      text: comment,
      parent: itemId,
    });
    setChanges(comment);
  };
  return (
    <AccordionItemPanel>
      <div className="comment mb-3">
        <InputGroup>
          <Input
            placeholder="Izoh yozing"
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit" onClick={() => sendComment(item.id)}>
            Izoh qoldirish
          </Button>
        </InputGroup>
      </div>
      {item.children.length !== 0 && (
        <Accordion allowZeroExpanded>
          {item.children.map((item) => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <CommentTitle item={item} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <Comment item={item} postId={postId} setChanges={setChanges} />
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </AccordionItemPanel>
  );
};

export default Comment;
