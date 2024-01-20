import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onOrderBy: (orderBy: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onOrderBy, selectedSortOrder }: Props) => {
  const sortByOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avg Rating" },
  ];

  const currentSortBy = sortByOptions.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />} marginStart={10}>
        Order By: {currentSortBy ? currentSortBy.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortByOptions.map((option) => (
          <MenuItem
            onClick={() => onOrderBy(option.value)}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
