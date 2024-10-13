import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  author: string;
  body: string;
  createdAt: Date;
};

export const CommentsCard = ({ author, body, createdAt }: Props) => {
  return (
    <>
      <Card className="bg-black/20 border-black backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle>{author}</CardTitle>
          <CardDescription>{createdAt.toISOString()}</CardDescription>
        </CardHeader>
        <CardContent>{body}</CardContent>
      </Card>
    </>
  );
};
