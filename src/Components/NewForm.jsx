import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NewForm() {
  const [formData, setFormData] = useState({
    high: "",
    low: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "high") {
      const newHigh = parseInt(value);
      const newLow = 100 - newHigh;

      setFormData({
        ...formData,
        high: newHigh.toString(),
        low: newLow.toString(),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>High Value</Form.Label>
            <Form.Control
              type="text"
              name="high"
              value={formData.high}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Low Value</Form.Label>
            <Form.Control
              type="text"
              name="low"
              value={formData.low}
              onChange={handleOnChange}
              readOnly
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}