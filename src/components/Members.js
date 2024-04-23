import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const Members = ({ members, editMember }) => {
  //console.log(members);
  return (
    <div style={{ textAlign: "center" }}>
      {members.map((member) => (
        <Card
          style={{
            width: "20rem",
            display: "inline-block",
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            border: "1px solid black",
            cursor: "pointer",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #ccc",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <CardImg variant="top" src={member.img} />
          <CardBody>
            <CardTitle tag="h5">{member.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {member.rol}
            </CardSubtitle>
            <CardText>{member.email}</CardText>
            <Button color="primary" onClick={() => editMember(member)}>
              Edit
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default Members;
