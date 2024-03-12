import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SunIcon } from "@heroicons/react/24/solid";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  height: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <div className="w-[100%] h-[20%] text-white" flex justify-between>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
          <div className="flex items-center">
            <SunIcon className="h-5 w-5 text-white mr-5" />

            <div className="flex flex-col justify-end items-end mr-5">
              <p className="text-m">John Doe</p>
              <p className="text-sm">Admin</p>
            </div>
            <img
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white mr-5"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder=""
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
};
export default SearchBar;
