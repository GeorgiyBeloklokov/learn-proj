import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISearchAppBarProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISearchAppBarState {
  searchValue: string;
}

export default class SearchAppBar extends React.Component<ISearchAppBarProps, ISearchAppBarState> {
  constructor(props: ISearchAppBarProps) {
    super(props);

    this.state = {
      searchValue: '',
    };
    console.log(`test state:`, this.state.searchValue);
  }
  componentDidMount() {
    const isData = localStorage.getItem('searchValue') || 'no data';
    this.setState({ searchValue: isData });
    console.log(`test mount`);
  }

  handleChange = (event: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }) => {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem('searchValue', event.target.value);
    console.log(`test handleChange`, event.target.value);
  };

  public render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={this.state.searchValue}
                onChange={this.handleChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
