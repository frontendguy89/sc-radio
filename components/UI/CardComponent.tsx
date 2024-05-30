import { Pressable } from "react-native";
import { Card, Title, Paragraph, List } from "react-native-paper";

export default function CardComponent() {
  return (
    <Pressable>
      <Card>
        <Card.Content>
          <Title>Hello world!</Title>
          <Paragraph>Hello!</Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
}
