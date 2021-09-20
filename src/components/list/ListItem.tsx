import { FC } from "react";
import { ListContainer } from "./style";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface Props {
  item: string;
}

const ListItem: FC<Props> = ({ item }) => {
  return (
    <ListContainer>
      <span>{item}</span>
    </ListContainer>
  );
};

export default ListItem;
